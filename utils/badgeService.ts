import { type BadgeData } from '../components/BadgeCard';

export interface OverlayCompletion {
  overlayId: string;
  learnerId: string;
  completedAt: string;
  feedbackScore: number;
  schemaTrace: string;
  title: string;
  icon?: string;
  language: 'en' | 'es';
}

export interface BadgeGenerationRule {
  id: string;
  name: string;
  description: string;
  schemaPattern: string;
  minScore: number;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  category: 'Foundation' | 'Advanced' | 'Expert' | 'Mastery';
  points: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  icon?: string;
}

// Default badge generation rules
const defaultBadgeRules: BadgeGenerationRule[] = [
  // Finance Domain Badges
  {
    id: 'finance-trust-velocity-master',
    name: 'Trust Velocity Master',
    description: 'Mastered financial trust optimization and capital velocity dynamics',
    schemaPattern: 'finance.trust-velocity',
    minScore: 4,
    level: 'Gold',
    category: 'Advanced',
    points: 250,
    rarity: 'Rare',
    icon: '🧩'
  },
  {
    id: 'finance-foundation-expert',
    name: 'Finance Foundation Expert',
    description: 'Completed core financial management overlays with excellence',
    schemaPattern: 'finance.*',
    minScore: 4.5,
    level: 'Platinum',
    category: 'Expert',
    points: 500,
    rarity: 'Epic',
    icon: '💰'
  },
  
  // Law Domain Badges
  {
    id: 'law-assumed-right-specialist',
    name: 'Legal Framework Specialist',
    description: 'Expert understanding of assumed rights and legal velocity frameworks',
    schemaPattern: 'law.assumed-right',
    minScore: 4,
    level: 'Gold',
    category: 'Advanced',
    points: 200,
    rarity: 'Rare',
    icon: '⚖️'
  },
  
  // Time Domain Badges
  {
    id: 'time-velocity-optimizer',
    name: 'Time Velocity Optimizer',
    description: 'Mastered strategic time optimization and velocity modeling techniques',
    schemaPattern: 'time.velocity-modeling',
    minScore: 4,
    level: 'Gold',
    category: 'Advanced',
    points: 300,
    rarity: 'Rare',
    icon: '⚡'
  },
  
  // Cross-Domain Mastery Badges
  {
    id: 'strategic-foundation-master',
    name: 'Strategic Foundation Master',
    description: 'Achieved mastery across multiple strategic intelligence domains',
    schemaPattern: '.*',
    minScore: 4.2,
    level: 'Diamond',
    category: 'Mastery',
    points: 1000,
    rarity: 'Legendary',
    icon: '👑'
  },
  
  // Beginner Badges
  {
    id: 'first-steps-bronze',
    name: 'First Steps',
    description: 'Completed your first OVERWATCH³ overlay experience',
    schemaPattern: '.*',
    minScore: 3,
    level: 'Bronze',
    category: 'Foundation',
    points: 50,
    rarity: 'Common',
    icon: '🎯'
  }
];

class BadgeService {
  private badges: BadgeData[] = [];
  private rules: BadgeGenerationRule[] = defaultBadgeRules;

  // Generate a badge based on overlay completion
  generateBadge(
    overlayCompletion: OverlayCompletion, 
    customRules?: BadgeGenerationRule[]
  ): BadgeData | null {
    const applicableRules = (customRules || this.rules).filter(rule => {
      const schemaMatches = this.matchesSchemaPattern(overlayCompletion.schemaTrace, rule.schemaPattern);
      const scoreMatches = overlayCompletion.feedbackScore >= rule.minScore;
      return schemaMatches && scoreMatches;
    });

    if (applicableRules.length === 0) {
      return null;
    }

    // Select the most specific rule (longest schema pattern)
    const selectedRule = applicableRules.reduce((prev, current) => 
      current.schemaPattern.length > prev.schemaPattern.length ? current : prev
    );

    const badge: BadgeData = {
      badgeId: `${selectedRule.id}-${overlayCompletion.learnerId}-${Date.now()}`,
      title: this.getLocalizedTitle(selectedRule, overlayCompletion.language),
      description: this.getLocalizedDescription(selectedRule, overlayCompletion.language, overlayCompletion.schemaTrace),
      schemaTrace: overlayCompletion.schemaTrace,
      earnedOn: overlayCompletion.completedAt,
      language: overlayCompletion.language,
      icon: selectedRule.icon || overlayCompletion.icon || '🏆',
      level: selectedRule.level,
      category: selectedRule.category,
      points: selectedRule.points,
      rarity: selectedRule.rarity
    };

    return badge;
  }

  // Check if schema trace matches pattern (supports wildcards)
  private matchesSchemaPattern(schemaTrace: string, pattern: string): boolean {
    if (pattern === '.*') return true;
    
    const regexPattern = pattern
      .replace(/\./g, '\\.')
      .replace(/\*/g, '.*');
    
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(schemaTrace);
  }

  // Get localized title
  private getLocalizedTitle(rule: BadgeGenerationRule, language: 'en' | 'es'): string {
    const translations: Record<string, Record<string, string>> = {
      'finance-trust-velocity-master': {
        en: '🧩 Trust Velocity Master',
        es: '🧩 Maestro de Velocidad de Confianza'
      },
      'finance-foundation-expert': {
        en: '💰 Finance Foundation Expert',
        es: '💰 Experto en Fundamentos Financieros'
      },
      'law-assumed-right-specialist': {
        en: '⚖️ Legal Framework Specialist',
        es: '⚖️ Especialista en Marco Legal'
      },
      'time-velocity-optimizer': {
        en: '⚡ Time Velocity Optimizer',
        es: '⚡ Optimizador de Velocidad Temporal'
      },
      'strategic-foundation-master': {
        en: '👑 Strategic Foundation Master',
        es: '👑 Maestro de Fundamentos Estratégicos'
      },
      'first-steps-bronze': {
        en: '🎯 First Steps',
        es: '🎯 Primeros Pasos'
      }
    };

    return translations[rule.id]?.[language] || rule.name;
  }

  // Get localized description
  private getLocalizedDescription(
    rule: BadgeGenerationRule, 
    language: 'en' | 'es', 
    schemaTrace: string
  ): string {
    const translations: Record<string, Record<string, string>> = {
      'finance-trust-velocity-master': {
        en: `Completed overlay and coaching feedback for ${schemaTrace}`,
        es: `Completó overlay y retroalimentación de coaching para ${schemaTrace}`
      },
      'finance-foundation-expert': {
        en: `Mastered financial management overlays with excellence in ${schemaTrace}`,
        es: `Dominó overlays de gestión financiera con excelencia en ${schemaTrace}`
      },
      'law-assumed-right-specialist': {
        en: `Expert understanding of legal frameworks in ${schemaTrace}`,
        es: `Comprensión experta de marcos legales en ${schemaTrace}`
      },
      'time-velocity-optimizer': {
        en: `Mastered time optimization techniques in ${schemaTrace}`,
        es: `Dominó técnicas de optimización temporal en ${schemaTrace}`
      },
      'strategic-foundation-master': {
        en: `Achieved mastery across strategic intelligence domains including ${schemaTrace}`,
        es: `Logró maestría en dominios de inteligencia estratégica incluyendo ${schemaTrace}`
      },
      'first-steps-bronze': {
        en: `Completed your first OVERWATCH³ overlay experience in ${schemaTrace}`,
        es: `Completó su primera experiencia de overlay OVERWATCH³ en ${schemaTrace}`
      }
    };

    return translations[rule.id]?.[language] || rule.description;
  }

  // Store badge (in real implementation, this would persist to database)
  async storeBadge(badge: BadgeData, learnerId: string): Promise<void> {
    // In a real implementation, this would save to Supabase
    this.badges.push(badge);
    console.log(`Badge stored for learner ${learnerId}:`, badge);
  }

  // Get badges for a learner
  async getBadgesForLearner(learnerId: string): Promise<BadgeData[]> {
    // In a real implementation, this would query from Supabase
    // For now, return demo badges
    return this.generateDemoBadges();
  }

  // Generate demo badges for testing
  private generateDemoBadges(): BadgeData[] {
    return [
      {
        badgeId: "trust-velocity-master-demo",
        title: "🧩 Trust Velocity Master",
        description: "Completed overlay and coaching feedback for finance.trust-velocity",
        schemaTrace: "finance.trust-velocity",
        earnedOn: "2025-10-01",
        language: "en",
        icon: "🧩",
        level: "Gold",
        category: "Advanced",
        points: 250,
        rarity: "Rare"
      },
      {
        badgeId: "legal-framework-specialist-demo",
        title: "⚖️ Legal Framework Specialist",
        description: "Expert understanding of assumed rights and legal velocity frameworks",
        schemaTrace: "law.assumed-right",
        earnedOn: "2025-09-28",
        language: "en",
        icon: "⚖️",
        level: "Gold",
        category: "Advanced",
        points: 200,
        rarity: "Rare"
      },
      {
        badgeId: "time-optimizer-demo",
        title: "⚡ Time Velocity Optimizer",
        description: "Mastered strategic time optimization and velocity modeling techniques",
        schemaTrace: "time.velocity-modeling",
        earnedOn: "2025-09-25",
        language: "en",
        icon: "⚡",
        level: "Gold",
        category: "Advanced",
        points: 300,
        rarity: "Rare"
      },
      {
        badgeId: "first-steps-demo",
        title: "🎯 First Steps",
        description: "Completed your first OVERWATCH³ overlay experience",
        schemaTrace: "finance.foundation",
        earnedOn: "2025-09-20",
        language: "en",
        icon: "🎯",
        level: "Bronze",
        category: "Foundation",
        points: 50,
        rarity: "Common"
      },
      {
        badgeId: "strategic-master-demo",
        title: "👑 Strategic Foundation Master",
        description: "Achieved mastery across multiple strategic intelligence domains",
        schemaTrace: "strategic.mastery",
        earnedOn: "2025-10-02",
        language: "en",
        icon: "👑",
        level: "Diamond",
        category: "Mastery",
        points: 1000,
        rarity: "Legendary"
      }
    ];
  }

  // Add custom badge rule
  addBadgeRule(rule: BadgeGenerationRule): void {
    this.rules.push(rule);
  }

  // Get all badge rules
  getBadgeRules(): BadgeGenerationRule[] {
    return [...this.rules];
  }

  // Calculate learner's total points
  async calculateTotalPoints(learnerId: string): Promise<number> {
    const badges = await this.getBadgesForLearner(learnerId);
    return badges.reduce((total, badge) => total + (badge.points || 0), 0);
  }

  // Get learner's level based on total points
  async getLearnerLevel(learnerId: string): Promise<string> {
    const totalPoints = await this.calculateTotalPoints(learnerId);
    
    if (totalPoints >= 2000) return 'Diamond';
    if (totalPoints >= 1000) return 'Platinum';
    if (totalPoints >= 500) return 'Gold';
    if (totalPoints >= 200) return 'Silver';
    return 'Bronze';
  }
}

// Enhanced badge storage for Supabase integration
async function storeBadges(learnerId: string, earnedBadges: BadgeData[]): Promise<void> {
  // In production, this would integrate with Supabase
  for (const badge of earnedBadges) {
    await badgeService.storeBadge(badge, learnerId);
  }
}

// Helper functions for badge checking
async function getOverlayById(overlayId: string): Promise<{ schemaTrace: string; title: string; icon: string; language: 'en' | 'es' }> {
  // Mock implementation - in production this would query your overlay database
  const mockOverlays = {
    'finance-trust-velocity': {
      schemaTrace: 'finance.trust-velocity',
      title: 'Trust Velocity Master',
      icon: '🧩',
      language: 'en' as const
    },
    'law-assumed-right': {
      schemaTrace: 'law.assumed-right',
      title: 'Legal Framework Specialist',
      icon: '⚖️',
      language: 'en' as const
    },
    'time-velocity-modeling': {
      schemaTrace: 'time.velocity-modeling',
      title: 'Time Velocity Optimizer',
      icon: '⚡',
      language: 'en' as const
    }
  };
  
  return mockOverlays[overlayId as keyof typeof mockOverlays] || {
    schemaTrace: 'unknown.overlay',
    title: 'Unknown Overlay',
    icon: '📋',
    language: 'en'
  };
}

async function getFeedbackScore(overlayId: string, learnerId: string): Promise<{ score: number }> {
  // Mock implementation - in production this would query feedback data
  return { score: 4.2 + Math.random() * 0.8 }; // Random score between 4.2-5.0
}

async function checkBilingualCompletion(schemaTrace: string, learnerId: string): Promise<boolean> {
  // Check if user completed both English and Spanish versions
  const completedEN = await hasCompleted(schemaTrace, learnerId, "en");
  const completedES = await hasCompleted(schemaTrace, learnerId, "es");
  return completedEN && completedES;
}

async function hasCompleted(trace: string, learnerId: string, language: string): Promise<boolean> {
  // Mock implementation - would check completion database
  return Math.random() > 0.7; // 30% chance of bilingual completion
}

async function getSequenceTrace(sequenceId: string): Promise<string> {
  // Get schema trace for sequence
  const sequence = await getSequenceById(sequenceId);
  return sequence.overlays.map(o => o.schemaTrace).join(" → ");
}

async function getSequenceById(sequenceId: string): Promise<{ overlays: Array<{ schemaTrace: string }> }> {
  // Mock sequence data
  const mockSequences = {
    'founder-clarity-sprint': {
      overlays: [
        { schemaTrace: 'finance.trust-velocity' },
        { schemaTrace: 'law.assumed-right' },
        { schemaTrace: 'time.velocity-modeling' }
      ]
    },
    'strategic-mastery': {
      overlays: [
        { schemaTrace: 'strategic.foundation' },
        { schemaTrace: 'strategic.execution' },
        { schemaTrace: 'strategic.optimization' }
      ]
    }
  };
  
  return mockSequences[sequenceId as keyof typeof mockSequences] || {
    overlays: [{ schemaTrace: 'unknown.sequence' }]
  };
}

// Main badge checking function that integrates with your event system
export async function checkBadgeUnlocks(eventType: string, payload: any): Promise<BadgeData[]> {
  const { overlayId, learnerId, sequenceId, schemaId } = payload;
  const earnedBadges: BadgeData[] = [];

  if (eventType === "overlayComplete") {
    const overlay = await getOverlayById(overlayId);
    const feedback = await getFeedbackScore(overlayId, learnerId);

    if (feedback.score >= 4) {
      earnedBadges.push({
        badgeId: `${overlay.schemaTrace}-master-${learnerId}-${Date.now()}`,
        title: `${overlay.icon} ${overlay.title} Master`,
        description: `Mastered ${overlay.title} with excellent performance (${feedback.score.toFixed(1)}/5.0)`,
        schemaTrace: overlay.schemaTrace,
        earnedOn: new Date().toISOString(),
        language: overlay.language,
        icon: overlay.icon,
        level: "Gold",
        category: "Advanced",
        points: 250,
        rarity: "Rare"
      });
    }

    // Check for bilingual achievement
    const bilingual = await checkBilingualCompletion(overlay.schemaTrace, learnerId);
    if (bilingual) {
      earnedBadges.push({
        badgeId: `bilingual-${overlay.schemaTrace}-${learnerId}-${Date.now()}`,
        title: "🌐 Dual-Language Navigator",
        description: `Completed ${overlay.schemaTrace} in both English and Spanish`,
        schemaTrace: overlay.schemaTrace,
        earnedOn: new Date().toISOString(),
        language: overlay.language,
        icon: "🌐",
        level: "Silver",
        category: "Foundation",
        points: 150,
        rarity: "Uncommon"
      });
    }
  }

  if (eventType === "demoLaunch") {
    const sequenceTrace = await getSequenceTrace(sequenceId);
    earnedBadges.push({
      badgeId: `demo-${sequenceId}-${learnerId}-${Date.now()}`,
      title: "🎬 Pitch Performer",
      description: `Successfully launched and demonstrated ${sequenceId} sequence`,
      schemaTrace: sequenceTrace,
      earnedOn: new Date().toISOString(),
      language: "en",
      icon: "🎬",
      level: "Gold",
      category: "Expert",
      points: 400,
      rarity: "Epic"
    });
  }

  if (eventType === "feedbackSubmit") {
    earnedBadges.push({
      badgeId: `feedback-contributor-${overlayId}-${learnerId}-${Date.now()}`,
      title: "💬 Feedback Contributor",
      description: `Provided valuable feedback for overlay improvement`,
      schemaTrace: `feedback.${overlayId}`,
      earnedOn: new Date().toISOString(),
      language: "en",
      icon: "💬",
      level: "Bronze",
      category: "Foundation",
      points: 25,
      rarity: "Common"
    });
  }

  if (eventType === "schemaCreate") {
    earnedBadges.push({
      badgeId: `schema-${schemaId}-${learnerId}-${Date.now()}`,
      title: "🛠️ Schema Builder",
      description: `Created and published new schema: ${schemaId}`,
      schemaTrace: schemaId,
      earnedOn: new Date().toISOString(),
      language: "en",
      icon: "🛠️",
      level: "Bronze",
      category: "Foundation",
      points: 100,
      rarity: "Uncommon"
    });
  }

  // Store all earned badges
  if (earnedBadges.length > 0) {
    await storeBadges(learnerId, earnedBadges);
  }

  return earnedBadges;
}

// Export singleton instance
export const badgeService = new BadgeService();

// Enhanced overlay completion function
export async function onOverlayComplete(
  overlayId: string, 
  learnerId: string, 
  feedbackScore?: number,
  overlayData?: {
    schemaTrace: string;
    title: string;
    icon?: string;
    language: 'en' | 'es';
  }
): Promise<BadgeData | null> {
  // Use the comprehensive badge checking system
  const badges = await checkBadgeUnlocks("overlayComplete", {
    overlayId,
    learnerId,
    feedbackScore: feedbackScore || 4.0
  });

  // Return the first badge if any were earned
  return badges.length > 0 ? badges[0] : null;
}

// Event handlers that match your function signatures
export async function onDemoLaunch(sequenceId: string, learnerId: string): Promise<BadgeData[]> {
  return await checkBadgeUnlocks("demoLaunch", { sequenceId, learnerId });
}

export async function onFeedbackSubmit(overlayId: string, learnerId: string): Promise<BadgeData[]> {
  return await checkBadgeUnlocks("feedbackSubmit", { overlayId, learnerId });
}

export async function onSchemaCreate(schemaId: string, creatorId: string): Promise<BadgeData[]> {
  return await checkBadgeUnlocks("schemaCreate", { schemaId, learnerId: creatorId });
}

export default badgeService;