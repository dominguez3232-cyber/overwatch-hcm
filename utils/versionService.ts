// Version Management Service for OVERWATCH³ Advanced Script Editor
// Handles overlay script versioning, comparison, rollback, and audit trail

export interface ScriptVersion {
  id: string;
  version: string;
  timestamp: string;
  author: string;
  changes: string;
  content: {
    en: {
      introPrompt: string;
      coachingNarrative: string;
      clarityChallenge: string;
    };
    es: {
      introPrompt: string;
      coachingNarrative: string;
      clarityChallenge: string;
    };
  };
  triggers: ReplayTrigger[];
  metrics: ClarityMetrics;
  badges: BadgeRule[];
  status: 'draft' | 'published' | 'archived';
  parentVersionId?: string;
  tags?: string[];
  deploymentTargets?: DeploymentTarget[];
}

export interface ReplayTrigger {
  id: string;
  type: 'BadgeUnlock' | 'DemoLaunch' | 'FeedbackSubmit' | 'ClarityThreshold' | 'CompletionRate' | 'TimeSpent';
  condition: string;
  action: string;
  priority: number;
  enabled: boolean;
  description?: string;
  parameters?: Record<string, any>;
}

export interface ClarityMetrics {
  clarityIndexLift: number;
  convictionScore: number;
  replayEngagementRate: number;
  expectedROI: number;
  participantSatisfaction: number;
  timeToCompletion?: number;
  retentionRate?: number;
  shareabilityIndex?: number;
}

export interface BadgeRule {
  id: string;
  condition: string;
  badge: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  points: number;
  category: string;
  enabled: boolean;
  description?: string;
  iconUrl?: string;
  unlockMessage?: {
    en: string;
    es: string;
  };
}

export interface EditLog {
  id: string;
  timestamp: string;
  editor: string;
  field: string;
  change: string;
  previousValue?: string;
  newValue?: string;
  versionId: string;
  sessionId?: string;
  ipAddress?: string;
}

export interface DeploymentTarget {
  id: string;
  environment: 'development' | 'staging' | 'production';
  region: 'us' | 'latam' | 'global';
  status: 'pending' | 'deploying' | 'deployed' | 'failed';
  deployedAt?: string;
  rollbackVersion?: string;
}

export interface VersionComparison {
  baseVersion: ScriptVersion;
  targetVersion: ScriptVersion;
  differences: {
    content: ContentDiff[];
    triggers: TriggerDiff[];
    metrics: MetricDiff[];
    badges: BadgeDiff[];
  };
  impactAnalysis: {
    riskLevel: 'low' | 'medium' | 'high';
    breakingChanges: string[];
    recommendations: string[];
  };
}

interface ContentDiff {
  field: string;
  language: 'en' | 'es';
  type: 'added' | 'removed' | 'modified';
  oldValue?: string;
  newValue?: string;
  similarity?: number;
}

interface TriggerDiff {
  triggerId: string;
  type: 'added' | 'removed' | 'modified';
  changes: string[];
}

interface MetricDiff {
  metric: string;
  oldValue: number;
  newValue: number;
  percentageChange: number;
  impact: 'positive' | 'negative' | 'neutral';
}

interface BadgeDiff {
  badgeId: string;
  type: 'added' | 'removed' | 'modified';
  changes: string[];
}

// Mock storage - In production, this would connect to Supabase or other backend
class VersionStorage {
  private static readonly STORAGE_KEY = 'overwatch_script_versions';
  private static readonly AUDIT_KEY = 'overwatch_edit_logs';

  static getVersions(overlayId: string): ScriptVersion[] {
    try {
      const stored = localStorage.getItem(`${this.STORAGE_KEY}_${overlayId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading versions:', error);
      return [];
    }
  }

  static saveVersion(overlayId: string, version: ScriptVersion): void {
    try {
      const versions = this.getVersions(overlayId);
      const existingIndex = versions.findIndex(v => v.id === version.id);
      
      if (existingIndex >= 0) {
        versions[existingIndex] = version;
      } else {
        versions.push(version);
      }
      
      // Keep only last 50 versions
      if (versions.length > 50) {
        versions.splice(0, versions.length - 50);
      }
      
      localStorage.setItem(`${this.STORAGE_KEY}_${overlayId}`, JSON.stringify(versions));
    } catch (error) {
      console.error('Error saving version:', error);
    }
  }

  static getEditLogs(overlayId: string): EditLog[] {
    try {
      const stored = localStorage.getItem(`${this.AUDIT_KEY}_${overlayId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading edit logs:', error);
      return [];
    }
  }

  static addEditLog(overlayId: string, log: EditLog): void {
    try {
      const logs = this.getEditLogs(overlayId);
      logs.unshift(log); // Add to beginning
      
      // Keep only last 1000 logs
      if (logs.length > 1000) {
        logs.splice(1000);
      }
      
      localStorage.setItem(`${this.AUDIT_KEY}_${overlayId}`, JSON.stringify(logs));
    } catch (error) {
      console.error('Error saving edit log:', error);
    }
  }
}

export class VersionService {
  
  /**
   * Create a new script version
   */
  static async createVersion(
    overlayId: string, 
    version: Omit<ScriptVersion, 'id' | 'timestamp'>,
    author: string
  ): Promise<ScriptVersion> {
    const newVersion: ScriptVersion = {
      ...version,
      id: `version_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      author
    };

    VersionStorage.saveVersion(overlayId, newVersion);
    
    // Log the creation
    this.logEdit(overlayId, {
      editor: author,
      field: 'Version',
      change: `Created version ${newVersion.version}`,
      newValue: newVersion.changes,
      versionId: newVersion.id
    });

    return newVersion;
  }

  /**
   * Get all versions for an overlay
   */
  static async getVersionHistory(overlayId: string): Promise<ScriptVersion[]> {
    return VersionStorage.getVersions(overlayId);
  }

  /**
   * Get a specific version
   */
  static async getVersion(overlayId: string, versionId: string): Promise<ScriptVersion | null> {
    const versions = VersionStorage.getVersions(overlayId);
    return versions.find(v => v.id === versionId) || null;
  }

  /**
   * Update an existing version
   */
  static async updateVersion(
    overlayId: string, 
    versionId: string, 
    updates: Partial<ScriptVersion>,
    editor: string
  ): Promise<ScriptVersion | null> {
    const versions = VersionStorage.getVersions(overlayId);
    const versionIndex = versions.findIndex(v => v.id === versionId);
    
    if (versionIndex === -1) return null;
    
    const oldVersion = { ...versions[versionIndex] };
    const updatedVersion = {
      ...oldVersion,
      ...updates,
      timestamp: new Date().toISOString()
    };
    
    VersionStorage.saveVersion(overlayId, updatedVersion);
    
    // Log the changes
    Object.keys(updates).forEach(field => {
      if (field !== 'timestamp') {
        this.logEdit(overlayId, {
          editor,
          field,
          change: `Updated ${field}`,
          previousValue: JSON.stringify(oldVersion[field as keyof ScriptVersion]),
          newValue: JSON.stringify(updates[field as keyof ScriptVersion]),
          versionId
        });
      }
    });

    return updatedVersion;
  }

  /**
   * Compare two versions
   */
  static async compareVersions(
    overlayId: string, 
    baseVersionId: string, 
    targetVersionId: string
  ): Promise<VersionComparison | null> {
    const baseVersion = await this.getVersion(overlayId, baseVersionId);
    const targetVersion = await this.getVersion(overlayId, targetVersionId);
    
    if (!baseVersion || !targetVersion) return null;

    // Analyze content differences
    const contentDiffs: ContentDiff[] = [];
    ['en', 'es'].forEach(lang => {
      ['introPrompt', 'coachingNarrative', 'clarityChallenge'].forEach(field => {
        const oldValue = baseVersion.content[lang as 'en' | 'es'][field as keyof typeof baseVersion.content.en];
        const newValue = targetVersion.content[lang as 'en' | 'es'][field as keyof typeof targetVersion.content.en];
        
        if (oldValue !== newValue) {
          contentDiffs.push({
            field,
            language: lang as 'en' | 'es',
            type: !oldValue ? 'added' : !newValue ? 'removed' : 'modified',
            oldValue,
            newValue,
            similarity: this.calculateSimilarity(oldValue, newValue)
          });
        }
      });
    });

    // Analyze trigger differences
    const triggerDiffs: TriggerDiff[] = [];
    const allTriggerIds = new Set([
      ...baseVersion.triggers.map(t => t.id),
      ...targetVersion.triggers.map(t => t.id)
    ]);

    allTriggerIds.forEach(triggerId => {
      const baseTrigger = baseVersion.triggers.find(t => t.id === triggerId);
      const targetTrigger = targetVersion.triggers.find(t => t.id === triggerId);
      
      if (!baseTrigger && targetTrigger) {
        triggerDiffs.push({
          triggerId,
          type: 'added',
          changes: [`Added trigger: ${targetTrigger.condition} → ${targetTrigger.action}`]
        });
      } else if (baseTrigger && !targetTrigger) {
        triggerDiffs.push({
          triggerId,
          type: 'removed',
          changes: [`Removed trigger: ${baseTrigger.condition} → ${baseTrigger.action}`]
        });
      } else if (baseTrigger && targetTrigger) {
        const changes: string[] = [];
        if (baseTrigger.condition !== targetTrigger.condition) {
          changes.push(`Condition: "${baseTrigger.condition}" → "${targetTrigger.condition}"`);
        }
        if (baseTrigger.action !== targetTrigger.action) {
          changes.push(`Action: "${baseTrigger.action}" → "${targetTrigger.action}"`);
        }
        if (baseTrigger.enabled !== targetTrigger.enabled) {
          changes.push(`Status: ${baseTrigger.enabled ? 'enabled' : 'disabled'} → ${targetTrigger.enabled ? 'enabled' : 'disabled'}`);
        }
        
        if (changes.length > 0) {
          triggerDiffs.push({
            triggerId,
            type: 'modified',
            changes
          });
        }
      }
    });

    // Analyze metric differences
    const metricDiffs: MetricDiff[] = [];
    Object.entries(targetVersion.metrics).forEach(([metric, newValue]) => {
      const oldValue = baseVersion.metrics[metric as keyof ClarityMetrics];
      if (oldValue !== newValue) {
        const percentageChange = oldValue > 0 ? ((newValue - oldValue) / oldValue) * 100 : 0;
        metricDiffs.push({
          metric,
          oldValue,
          newValue,
          percentageChange,
          impact: percentageChange > 0 ? 'positive' : percentageChange < 0 ? 'negative' : 'neutral'
        });
      }
    });

    // Analyze badge differences
    const badgeDiffs: BadgeDiff[] = [];
    const allBadgeIds = new Set([
      ...baseVersion.badges.map(b => b.id),
      ...targetVersion.badges.map(b => b.id)
    ]);

    allBadgeIds.forEach(badgeId => {
      const baseBadge = baseVersion.badges.find(b => b.id === badgeId);
      const targetBadge = targetVersion.badges.find(b => b.id === badgeId);
      
      if (!baseBadge && targetBadge) {
        badgeDiffs.push({
          badgeId,
          type: 'added',
          changes: [`Added badge: ${targetBadge.badge} (${targetBadge.level})`]
        });
      } else if (baseBadge && !targetBadge) {
        badgeDiffs.push({
          badgeId,
          type: 'removed',
          changes: [`Removed badge: ${baseBadge.badge} (${baseBadge.level})`]
        });
      } else if (baseBadge && targetBadge) {
        const changes: string[] = [];
        if (baseBadge.condition !== targetBadge.condition) {
          changes.push(`Condition: "${baseBadge.condition}" → "${targetBadge.condition}"`);
        }
        if (baseBadge.badge !== targetBadge.badge) {
          changes.push(`Badge: "${baseBadge.badge}" → "${targetBadge.badge}"`);
        }
        if (baseBadge.level !== targetBadge.level) {
          changes.push(`Level: ${baseBadge.level} → ${targetBadge.level}`);
        }
        if (baseBadge.points !== targetBadge.points) {
          changes.push(`Points: ${baseBadge.points} → ${targetBadge.points}`);
        }
        
        if (changes.length > 0) {
          badgeDiffs.push({
            badgeId,
            type: 'modified',
            changes
          });
        }
      }
    });

    // Impact analysis
    const breakingChanges: string[] = [];
    const recommendations: string[] = [];
    let riskLevel: 'low' | 'medium' | 'high' = 'low';

    // Check for breaking changes
    if (triggerDiffs.some(d => d.type === 'removed')) {
      breakingChanges.push('Removed triggers may affect existing automations');
      riskLevel = 'medium';
    }
    
    if (badgeDiffs.some(d => d.type === 'removed')) {
      breakingChanges.push('Removed badges may affect user progress');
      riskLevel = 'medium';
    }

    if (metricDiffs.some(d => d.impact === 'negative' && Math.abs(d.percentageChange) > 10)) {
      breakingChanges.push('Significant metric degradation detected');
      riskLevel = 'high';
    }

    // Generate recommendations
    if (contentDiffs.length > 0) {
      recommendations.push('Review content changes for consistency across languages');
    }
    
    if (metricDiffs.some(d => d.impact === 'positive')) {
      recommendations.push('Consider A/B testing the improved metrics');
    }
    
    if (triggerDiffs.length > 0) {
      recommendations.push('Test trigger logic in staging environment');
    }

    return {
      baseVersion,
      targetVersion,
      differences: {
        content: contentDiffs,
        triggers: triggerDiffs,
        metrics: metricDiffs,
        badges: badgeDiffs
      },
      impactAnalysis: {
        riskLevel,
        breakingChanges,
        recommendations
      }
    };
  }

  /**
   * Rollback to a previous version
   */
  static async rollbackToVersion(
    overlayId: string, 
    targetVersionId: string, 
    editor: string,
    reason: string
  ): Promise<ScriptVersion | null> {
    const targetVersion = await this.getVersion(overlayId, targetVersionId);
    if (!targetVersion) return null;

    const rollbackVersion: ScriptVersion = {
      ...targetVersion,
      id: `rollback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      version: `${targetVersion.version}-rollback`,
      timestamp: new Date().toISOString(),
      author: editor,
      changes: `Rollback to ${targetVersion.version}: ${reason}`,
      parentVersionId: targetVersion.id,
      status: 'draft'
    };

    VersionStorage.saveVersion(overlayId, rollbackVersion);
    
    this.logEdit(overlayId, {
      editor,
      field: 'Version',
      change: `Rolled back to version ${targetVersion.version}`,
      newValue: reason,
      versionId: rollbackVersion.id
    });

    return rollbackVersion;
  }

  /**
   * Publish a version
   */
  static async publishVersion(
    overlayId: string, 
    versionId: string, 
    editor: string,
    deploymentTargets: DeploymentTarget[] = []
  ): Promise<ScriptVersion | null> {
    const version = await this.getVersion(overlayId, versionId);
    if (!version) return null;

    const publishedVersion = {
      ...version,
      status: 'published' as const,
      timestamp: new Date().toISOString(),
      deploymentTargets
    };

    VersionStorage.saveVersion(overlayId, publishedVersion);
    
    this.logEdit(overlayId, {
      editor,
      field: 'Status',
      change: 'Published version',
      previousValue: version.status,
      newValue: 'published',
      versionId
    });

    return publishedVersion;
  }

  /**
   * Get edit logs for an overlay
   */
  static async getEditLogs(overlayId: string): Promise<EditLog[]> {
    return VersionStorage.getEditLogs(overlayId);
  }

  /**
   * Log an edit action
   */
  static logEdit(overlayId: string, logData: Omit<EditLog, 'id' | 'timestamp'>): void {
    const log: EditLog = {
      ...logData,
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    };

    VersionStorage.addEditLog(overlayId, log);
  }

  /**
   * Calculate text similarity (simple implementation)
   */
  private static calculateSimilarity(text1: string, text2: string): number {
    if (!text1 || !text2) return 0;
    if (text1 === text2) return 1;
    
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    
    const intersection = words1.filter(word => words2.includes(word));
    const union = new Set([...words1, ...words2]);
    
    return intersection.length / union.size;
  }

  /**
   * Export version data for backup
   */
  static async exportVersionData(overlayId: string): Promise<{
    versions: ScriptVersion[];
    editLogs: EditLog[];
    exportedAt: string;
  }> {
    return {
      versions: VersionStorage.getVersions(overlayId),
      editLogs: VersionStorage.getEditLogs(overlayId),
      exportedAt: new Date().toISOString()
    };
  }

  /**
   * Import version data from backup
   */
  static async importVersionData(
    overlayId: string, 
    data: { versions: ScriptVersion[]; editLogs: EditLog[] },
    editor: string
  ): Promise<void> {
    // Save versions
    data.versions.forEach(version => {
      VersionStorage.saveVersion(overlayId, version);
    });

    // Save edit logs
    data.editLogs.forEach(log => {
      VersionStorage.addEditLog(overlayId, log);
    });

    // Log the import
    this.logEdit(overlayId, {
      editor,
      field: 'Data Import',
      change: `Imported ${data.versions.length} versions and ${data.editLogs.length} edit logs`,
      versionId: 'import'
    });
  }
}

export default VersionService;