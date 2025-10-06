// Advanced Badge Service for OVERWATCH³ Badge Studio
// Handles badge creation, template management, and deployment workflows

import { badgeService, type BadgeData } from './badgeService';

export interface BadgeTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'completion' | 'performance' | 'milestone' | 'special' | 'community';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  baseConfig: Partial<BadgeDesignConfig>;
  sampleData: {
    title: { en: string; es: string; };
    description: { en: string; es: string; };
    unlockCriteria: string[];
  };
  previewImage?: string;
  tags: string[];
  popularity: number;
  createdAt: string;
  lastUsed?: string;
}

export interface BadgeDesignConfig {
  id: string;
  title: { en: string; es: string; };
  description: { en: string; es: string; };
  icon: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  category: string;
  tags: string[];
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  points: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  unlockLogic: UnlockRule[];
  replayTriggers: ReplayTrigger[];
  squadDistribution: SquadAccess[];
  metadata: BadgeMetadata;
  deployment?: DeploymentConfig;
}

export interface UnlockRule {
  id: string;
  type: 'completion' | 'performance' | 'sequence' | 'time' | 'collaboration' | 'streak' | 'custom';
  condition: string;
  value: number | string;
  operator: '=' | '>' | '>=' | '<' | '<=' | 'contains' | 'in' | 'between';
  description: { en: string; es: string; };
  weight: number;
  enabled: boolean;
  dependencies?: string[];
  timeframe?: number; // in days
  repeatable?: boolean;
}

export interface ReplayTrigger {
  id: string;
  event: 'badge_earned' | 'badge_shared' | 'badge_viewed' | 'demo_launched' | 'milestone_reached';
  action: string;
  delay: number;
  conditions: string[];
  enabled: boolean;
  priority: number;
  audience?: 'self' | 'squad' | 'org' | 'public';
  customScript?: string;
}

export interface SquadAccess {
  squadId: string;
  squadName: string;
  roles: string[];
  marketTags: string[];
  accessLevel: 'view' | 'earn' | 'manage' | 'admin';
  restrictions?: {
    maxPerUser?: number;
    cooldownPeriod?: number;
    prerequisites?: string[];
  };
}

export interface BadgeMetadata {
  createdBy: string;
  createdAt: string;
  lastModified: string;
  version: string;
  status: 'draft' | 'review' | 'active' | 'retired' | 'archived';
  approvedBy?: string;
  approvedAt?: string;
  analytics: {
    timesEarned: number;
    averageScore: number;
    completionRate: number;
    shareCount: number;
    engagementScore: number;
  };
  auditTrail: AuditEntry[];
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  changes: Record<string, any>;
  reason?: string;
}

export interface DeploymentConfig {
  environments: ('development' | 'staging' | 'production')[];
  regions: ('us' | 'latam' | 'global')[];
  rolloutStrategy: 'immediate' | 'gradual' | 'a_b_test';
  rolloutPercentage?: number;
  startDate?: string;
  endDate?: string;
  autoApproval: boolean;
  reviewers?: string[];
}

export interface BadgeAnalytics {
  badgeId: string;
  timeframe: 'day' | 'week' | 'month' | 'quarter' | 'year';
  metrics: {
    earnedCount: number;
    uniqueEarners: number;
    averageTimeToEarn: number;
    conversionRate: number;
    engagementRate: number;
    shareRate: number;
    retentionImpact: number;
  };
  trends: {
    period: string;
    value: number;
  }[];
  demographics: {
    byRole: Record<string, number>;
    byRegion: Record<string, number>;
    bySquad: Record<string, number>;
  };
  feedback: {
    satisfaction: number;
    difficulty: number;
    comments: string[];
  };
}

class AdvancedBadgeService {
  private static readonly STORAGE_KEY = 'overwatch_badge_designs';
  private static readonly TEMPLATES_KEY = 'overwatch_badge_templates';
  private static readonly ANALYTICS_KEY = 'overwatch_badge_analytics';

  // Template Management
  static async getTemplates(): Promise<BadgeTemplate[]> {
    try {
      const stored = localStorage.getItem(this.TEMPLATES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      
      // Return default templates if none stored
      return this.getDefaultTemplates();
    } catch (error) {
      console.error('Error loading badge templates:', error);
      return this.getDefaultTemplates();
    }
  }

  static async saveTemplate(template: BadgeTemplate): Promise<void> {
    try {
      const templates = await this.getTemplates();
      const existingIndex = templates.findIndex(t => t.id === template.id);
      
      if (existingIndex >= 0) {
        templates[existingIndex] = template;
      } else {
        templates.push(template);
      }
      
      localStorage.setItem(this.TEMPLATES_KEY, JSON.stringify(templates));
    } catch (error) {
      console.error('Error saving badge template:', error);
      throw error;
    }
  }

  static getDefaultTemplates(): BadgeTemplate[] {
    return [
      {
        id: 'template-completion-basic',
        name: 'Basic Completion Badge',
        description: 'Standard badge for completing overlays or modules',
        category: 'Completion',
        type: 'completion',
        difficulty: 'beginner',
        baseConfig: {
          level: 'Bronze',
          points: 100,
          rarity: 'Common',
          colorPalette: {
            primary: '#CD7F32',
            secondary: '#B8860B',
            accent: '#8B4513',
            background: '#2A1F1A'
          }
        },
        sampleData: {
          title: {
            en: 'Module Completion',
            es: 'Finalización de Módulo'
          },
          description: {
            en: 'Successfully completed a training module',
            es: 'Completó exitosamente un módulo de entrenamiento'
          },
          unlockCriteria: ['Complete any overlay', 'Feedback score >= 3.0']
        },
        tags: ['completion', 'basic', 'training'],
        popularity: 85,
        createdAt: '2025-01-01T00:00:00Z'
      },
      {
        id: 'template-performance-gold',
        name: 'High Performance Achievement',
        description: 'Gold-tier badge for exceptional performance',
        category: 'Performance',
        type: 'performance',
        difficulty: 'advanced',
        baseConfig: {
          level: 'Gold',
          points: 500,
          rarity: 'Rare',
          colorPalette: {
            primary: '#FFD700',
            secondary: '#FFA500',
            accent: '#FF8C00',
            background: '#2A1810'
          }
        },
        sampleData: {
          title: {
            en: 'Excellence Master',
            es: 'Maestro de Excelencia'
          },
          description: {
            en: 'Achieved outstanding performance metrics',
            es: 'Logró métricas de rendimiento sobresalientes'
          },
          unlockCriteria: ['Clarity Index >= 4.0', 'Completion time < 30min', 'Perfect score']
        },
        tags: ['performance', 'excellence', 'gold'],
        popularity: 92,
        createdAt: '2025-01-01T00:00:00Z'
      },
      {
        id: 'template-collaboration-team',
        name: 'Team Collaboration Badge',
        description: 'Recognizes collaborative achievements within squads',
        category: 'Collaboration',
        type: 'community',
        difficulty: 'intermediate',
        baseConfig: {
          level: 'Silver',
          points: 300,
          rarity: 'Rare',
          colorPalette: {
            primary: '#C0C0C0',
            secondary: '#A8A8A8',
            accent: '#808080',
            background: '#1A1A1A'
          }
        },
        sampleData: {
          title: {
            en: 'Squad Synergy',
            es: 'Sinergia de Escuadrón'
          },
          description: {
            en: 'Demonstrated exceptional teamwork and collaboration',
            es: 'Demostró trabajo en equipo y colaboración excepcionales'
          },
          unlockCriteria: ['Help 3+ team members', 'Squad project completion', 'Peer recognition']
        },
        tags: ['collaboration', 'teamwork', 'squad'],
        popularity: 78,
        createdAt: '2025-01-01T00:00:00Z'
      },
      {
        id: 'template-milestone-diamond',
        name: 'Major Milestone Achievement',
        description: 'Diamond-tier badge for significant milestones',
        category: 'Milestone',
        type: 'milestone',
        difficulty: 'expert',
        baseConfig: {
          level: 'Diamond',
          points: 1000,
          rarity: 'Legendary',
          colorPalette: {
            primary: '#B9F2FF',
            secondary: '#87CEEB',
            accent: '#4169E1',
            background: '#0F1419'
          }
        },
        sampleData: {
          title: {
            en: 'Legendary Founder',
            es: 'Fundador Legendario'
          },
          description: {
            en: 'Reached legendary status in founder excellence',
            es: 'Alcanzó estatus legendario en excelencia fundacional'
          },
          unlockCriteria: ['100+ overlays completed', '6 months active', 'Mentor 5+ users']
        },
        tags: ['milestone', 'legendary', 'founder'],
        popularity: 95,
        createdAt: '2025-01-01T00:00:00Z'
      },
      {
        id: 'template-bilingual-navigator',
        name: 'Bilingual Achievement',
        description: 'Recognition for bilingual competency',
        category: 'Language',
        type: 'special',
        difficulty: 'intermediate',
        baseConfig: {
          level: 'Silver',
          points: 400,
          rarity: 'Epic',
          colorPalette: {
            primary: '#00C9FF',
            secondary: '#92FE9D',
            accent: '#00B4DB',
            background: '#0A1628'
          }
        },
        sampleData: {
          title: {
            en: 'Dual-Language Navigator',
            es: 'Navegador Bilingüe'
          },
          description: {
            en: 'Mastered content in both English and Spanish',
            es: 'Dominó contenido en inglés y español'
          },
          unlockCriteria: ['Complete overlay in EN', 'Complete overlay in ES', 'Language switching']
        },
        tags: ['bilingual', 'language', 'cultural'],
        popularity: 88,
        createdAt: '2025-01-01T00:00:00Z'
      }
    ];
  }

  // Badge Design Management
  static async saveBadgeDesign(design: BadgeDesignConfig): Promise<void> {
    try {
      const designs = await this.getBadgeDesigns();
      const existingIndex = designs.findIndex(d => d.id === design.id);
      
      const updatedDesign = {
        ...design,
        metadata: {
          ...design.metadata,
          lastModified: new Date().toISOString(),
          auditTrail: [
            ...design.metadata.auditTrail,
            {
              id: `audit-${Date.now()}`,
              timestamp: new Date().toISOString(),
              action: existingIndex >= 0 ? 'updated' : 'created',
              user: design.metadata.createdBy,
              changes: existingIndex >= 0 ? this.calculateChanges(designs[existingIndex], design) : design
            }
          ]
        }
      };
      
      if (existingIndex >= 0) {
        designs[existingIndex] = updatedDesign;
      } else {
        designs.push(updatedDesign);
      }
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(designs));
    } catch (error) {
      console.error('Error saving badge design:', error);
      throw error;
    }
  }

  static async getBadgeDesigns(): Promise<BadgeDesignConfig[]> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading badge designs:', error);
      return [];
    }
  }

  static async getBadgeDesign(id: string): Promise<BadgeDesignConfig | null> {
    const designs = await this.getBadgeDesigns();
    return designs.find(d => d.id === id) || null;
  }

  static async deleteBadgeDesign(id: string): Promise<void> {
    try {
      const designs = await this.getBadgeDesigns();
      const filteredDesigns = designs.filter(d => d.id !== id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredDesigns));
    } catch (error) {
      console.error('Error deleting badge design:', error);
      throw error;
    }
  }

  // Badge Deployment
  static async deployBadge(design: BadgeDesignConfig): Promise<string> {
    try {
      // Validate badge design
      this.validateBadgeDesign(design);
      
      // Convert to production badge format
      const productionBadge = this.convertToProductionFormat(design);
      
      // Simulate deployment
      console.log('Deploying badge to production:', productionBadge);
      
      // Update status
      const updatedDesign = {
        ...design,
        metadata: {
          ...design.metadata,
          status: 'active' as const,
          lastModified: new Date().toISOString()
        }
      };
      
      await this.saveBadgeDesign(updatedDesign);
      
      return `badge-deployment-${Date.now()}`;
    } catch (error) {
      console.error('Error deploying badge:', error);
      throw error;
    }
  }

  static validateBadgeDesign(design: BadgeDesignConfig): void {
    const errors: string[] = [];
    
    if (!design.title.en.trim()) errors.push('English title is required');
    if (!design.title.es.trim()) errors.push('Spanish title is required');
    if (!design.description.en.trim()) errors.push('English description is required');
    if (!design.description.es.trim()) errors.push('Spanish description is required');
    if (!design.icon) errors.push('Icon is required');
    if (design.points < 0) errors.push('Points must be non-negative');
    if (design.unlockLogic.length === 0) errors.push('At least one unlock rule is required');
    
    // Validate unlock rules
    design.unlockLogic.forEach((rule, index) => {
      if (!rule.condition.trim()) errors.push(`Unlock rule ${index + 1}: Condition is required`);
      if (!rule.description.en.trim()) errors.push(`Unlock rule ${index + 1}: English description is required`);
      if (!rule.description.es.trim()) errors.push(`Unlock rule ${index + 1}: Spanish description is required`);
    });
    
    if (errors.length > 0) {
      throw new Error(`Badge validation failed:\n${errors.join('\n')}`);
    }
  }

  static convertToProductionFormat(design: BadgeDesignConfig): BadgeData {
    return {
      id: design.id,
      title: design.title.en, // Default to English for production
      description: design.description.en,
      icon: design.icon,
      category: design.category,
      level: design.level,
      points: design.points,
      rarity: design.rarity,
      earnedAt: new Date().toISOString(),
      learnerId: 'system',
      overlayId: design.id,
      feedbackScore: 5.0,
      schemaTrace: design.tags.find(t => t.startsWith('Schema:'))?.replace('Schema: ', '') || 'custom.badge',
      metadata: {
        language: 'en',
        bilingual: true,
        version: design.metadata.version,
        deployment: design.deployment
      }
    };
  }

  // Analytics
  static async getBadgeAnalytics(badgeId: string, timeframe: 'day' | 'week' | 'month' | 'quarter' | 'year' = 'month'): Promise<BadgeAnalytics> {
    try {
      const stored = localStorage.getItem(`${this.ANALYTICS_KEY}_${badgeId}`);
      if (stored) {
        return JSON.parse(stored);
      }
      
      // Return mock analytics for demo
      return this.generateMockAnalytics(badgeId, timeframe);
    } catch (error) {
      console.error('Error loading badge analytics:', error);
      return this.generateMockAnalytics(badgeId, timeframe);
    }
  }

  static generateMockAnalytics(badgeId: string, timeframe: string): BadgeAnalytics {
    const baseEarned = Math.floor(Math.random() * 1000) + 100;
    const uniqueEarners = Math.floor(baseEarned * 0.8);
    
    return {
      badgeId,
      timeframe: timeframe as any,
      metrics: {
        earnedCount: baseEarned,
        uniqueEarners,
        averageTimeToEarn: Math.floor(Math.random() * 120) + 30, // 30-150 minutes
        conversionRate: Math.random() * 0.3 + 0.1, // 10-40%
        engagementRate: Math.random() * 0.5 + 0.3, // 30-80%
        shareRate: Math.random() * 0.2 + 0.05, // 5-25%
        retentionImpact: Math.random() * 0.3 + 0.1 // 10-40%
      },
      trends: this.generateTrendData(timeframe),
      demographics: {
        byRole: {
          'Founder': Math.floor(uniqueEarners * 0.4),
          'Ops Lead': Math.floor(uniqueEarners * 0.3),
          'HR Manager': Math.floor(uniqueEarners * 0.2),
          'Other': Math.floor(uniqueEarners * 0.1)
        },
        byRegion: {
          'US': Math.floor(uniqueEarners * 0.5),
          'LatAm': Math.floor(uniqueEarners * 0.3),
          'Europe': Math.floor(uniqueEarners * 0.15),
          'Other': Math.floor(uniqueEarners * 0.05)
        },
        bySquad: {
          'LatAm GTM': Math.floor(uniqueEarners * 0.35),
          'Ops Alpha': Math.floor(uniqueEarners * 0.25),
          'Finance Beta': Math.floor(uniqueEarners * 0.20),
          'Strategy Gamma': Math.floor(uniqueEarners * 0.20)
        }
      },
      feedback: {
        satisfaction: Math.random() * 1.5 + 3.5, // 3.5-5.0
        difficulty: Math.random() * 2 + 2, // 2-4
        comments: [
          'Great badge design and clear unlock criteria!',
          'Love the bilingual support.',
          'Could use more visual feedback when earned.',
          'Perfect difficulty level for intermediate users.'
        ]
      }
    };
  }

  static generateTrendData(timeframe: string): { period: string; value: number; }[] {
    const periods = timeframe === 'day' ? 24 : timeframe === 'week' ? 7 : timeframe === 'month' ? 30 : timeframe === 'quarter' ? 12 : 52;
    const trend = [];
    
    for (let i = 0; i < periods; i++) {
      trend.push({
        period: timeframe === 'day' ? `${i}:00` : 
                timeframe === 'week' ? `Day ${i + 1}` :
                timeframe === 'month' ? `Day ${i + 1}` :
                timeframe === 'quarter' ? `Week ${i + 1}` :
                `Week ${i + 1}`,
        value: Math.floor(Math.random() * 50) + 10
      });
    }
    
    return trend;
  }

  // Utility Methods
  static calculateChanges(oldDesign: BadgeDesignConfig, newDesign: BadgeDesignConfig): Record<string, any> {
    const changes: Record<string, any> = {};
    
    if (oldDesign.title.en !== newDesign.title.en) changes.titleEn = { from: oldDesign.title.en, to: newDesign.title.en };
    if (oldDesign.title.es !== newDesign.title.es) changes.titleEs = { from: oldDesign.title.es, to: newDesign.title.es };
    if (oldDesign.description.en !== newDesign.description.en) changes.descriptionEn = { from: oldDesign.description.en, to: newDesign.description.en };
    if (oldDesign.description.es !== newDesign.description.es) changes.descriptionEs = { from: oldDesign.description.es, to: newDesign.description.es };
    if (oldDesign.icon !== newDesign.icon) changes.icon = { from: oldDesign.icon, to: newDesign.icon };
    if (oldDesign.level !== newDesign.level) changes.level = { from: oldDesign.level, to: newDesign.level };
    if (oldDesign.points !== newDesign.points) changes.points = { from: oldDesign.points, to: newDesign.points };
    if (oldDesign.rarity !== newDesign.rarity) changes.rarity = { from: oldDesign.rarity, to: newDesign.rarity };
    
    return changes;
  }

  static async exportBadgeDesign(id: string): Promise<string> {
    const design = await this.getBadgeDesign(id);
    if (!design) throw new Error('Badge design not found');
    
    const exportData = {
      format: 'overwatch-badge-v1',
      exportedAt: new Date().toISOString(),
      design,
      analytics: await this.getBadgeAnalytics(id)
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  static async importBadgeDesign(data: string): Promise<BadgeDesignConfig> {
    try {
      const importData = JSON.parse(data);
      
      if (importData.format !== 'overwatch-badge-v1') {
        throw new Error('Invalid badge format');
      }
      
      const design = importData.design as BadgeDesignConfig;
      design.id = `imported-${Date.now()}`;
      design.metadata.createdAt = new Date().toISOString();
      design.metadata.status = 'draft';
      
      await this.saveBadgeDesign(design);
      return design;
    } catch (error) {
      console.error('Error importing badge design:', error);
      throw error;
    }
  }

  // Badge Testing
  static async testBadgeUnlock(design: BadgeDesignConfig, testData: any): Promise<{ success: boolean; earned: boolean; reason: string; }> {
    try {
      let earned = true;
      let reason = 'All unlock conditions met';
      
      // Test each unlock rule
      for (const rule of design.unlockLogic) {
        if (!rule.enabled) continue;
        
        const ruleResult = this.evaluateUnlockRule(rule, testData);
        if (!ruleResult.success) {
          earned = false;
          reason = `Failed rule: ${rule.description.en} - ${ruleResult.reason}`;
          break;
        }
      }
      
      return { success: true, earned, reason };
    } catch (error) {
      return { success: false, earned: false, reason: `Test error: ${error}` };
    }
  }

  static evaluateUnlockRule(rule: UnlockRule, testData: any): { success: boolean; reason: string; } {
    try {
      const testValue = testData[rule.condition];
      const ruleValue = rule.value;
      
      switch (rule.operator) {
        case '=':
          return { success: testValue === ruleValue, reason: `${testValue} ${rule.operator} ${ruleValue}` };
        case '>':
          return { success: testValue > ruleValue, reason: `${testValue} ${rule.operator} ${ruleValue}` };
        case '>=':
          return { success: testValue >= ruleValue, reason: `${testValue} ${rule.operator} ${ruleValue}` };
        case '<':
          return { success: testValue < ruleValue, reason: `${testValue} ${rule.operator} ${ruleValue}` };
        case '<=':
          return { success: testValue <= ruleValue, reason: `${testValue} ${rule.operator} ${ruleValue}` };
        case 'contains':
          return { success: String(testValue).includes(String(ruleValue)), reason: `"${testValue}" contains "${ruleValue}"` };
        case 'in':
          const validValues = String(ruleValue).split(',').map(v => v.trim());
          return { success: validValues.includes(String(testValue)), reason: `"${testValue}" in [${validValues.join(', ')}]` };
        default:
          return { success: false, reason: `Unknown operator: ${rule.operator}` };
      }
    } catch (error) {
      return { success: false, reason: `Evaluation error: ${error}` };
    }
  }
}

export { AdvancedBadgeService };
export type { 
  BadgeTemplate, 
  BadgeDesignConfig, 
  UnlockRule, 
  ReplayTrigger, 
  SquadAccess, 
  BadgeMetadata, 
  BadgeAnalytics, 
  DeploymentConfig 
};