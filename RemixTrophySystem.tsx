import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Trophy,
  Medal,
  Award,
  Crown,
  Star,
  Zap,
  Target,
  TrendingUp,
  Users,
  Activity,
  CheckCircle,
  Eye,
  Download,
  Share2,
  Edit3,
  Sparkles,
  Settings,
  Globe,
  Calendar,
  Timer,
  BarChart3
} from 'lucide-react';

interface RemixPerformanceMetrics {
  clarityLift: number;
  replayCompletionRate: number;
  badgeUnlockVelocity: number;
  schemaConvictionScore: number;
  culturalReach: number;
  totalScore: number;
}

interface TrophyTier {
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Founder\'s Pick';
  icon: string;
  color: string;
  bgColor: string;
  criteria: string[];
  minScore: number;
}

interface RemixTrophyData {
  id: string;
  title: string;
  submittedBy: string;
  founderId: string;
  founderName: string;
  metrics: RemixPerformanceMetrics;
  tier: TrophyTier['tier'];
  badges: string[];
  schemaTrace: string[];
  deployedAt: string;
  squadsActive: string[];
  culturalReach: string[];
  isShowcased: boolean;
  bannerGenerated: boolean;
  authorshipCredits: {
    founder: string;
    investor: string;
    roles: string[];
  };
}

interface ShowcaseBanner {
  id: string;
  remixId: string;
  tier: TrophyTier['tier'];
  bannerTextEN: string;
  bannerTextES: string;
  badgeIcons: string[];
  schemaTrace: string[];
  createdAt: string;
  isActive: boolean;
}

interface RemixTrophySystemProps {
  language: 'en' | 'es';
  onExport: (type: string, data: any) => void;
  onSync: (targetSystem: string, data: any) => void;
  onGenerateBanner: (remix: RemixTrophyData) => void;
  onNavigate: (view: string) => void;
  currentMode?: 'evaluation' | 'assignment' | 'showcase' | 'sync';
}

const TROPHY_TIERS: TrophyTier[] = [
  {
    tier: 'Platinum',
    icon: '🏆',
    color: 'text-slate-300',
    bgColor: 'bg-slate-500/10 border-slate-500/20',
    criteria: ['Clarity Lift > 3.2x', 'Badge Unlock Rate > 75%', 'Schema Conviction > 4.5'],
    minScore: 85
  },
  {
    tier: 'Gold',
    icon: '🥇',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10 border-yellow-500/20',
    criteria: ['Clarity Lift > 3.0x', 'Replay Completion > 75%'],
    minScore: 75
  },
  {
    tier: 'Silver',
    icon: '🥈',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10 border-gray-500/20',
    criteria: ['Clarity Lift > 2.5x', 'Badge Unlock Rate > 60%'],
    minScore: 65
  },
  {
    tier: 'Bronze',
    icon: '🥉',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10 border-orange-500/20',
    criteria: ['Clarity Lift > 2.0x', 'Active Deployment'],
    minScore: 50
  },
  {
    tier: 'Founder\'s Pick',
    icon: '👑',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10 border-purple-500/20',
    criteria: ['Founder Special Recognition', 'Cultural Impact', 'Innovation'],
    minScore: 70
  }
];

const DEMO_REMIX_TROPHIES: RemixTrophyData[] = [
  {
    id: 'remix-trophy-001',
    title: 'Trust Velocity Remix (Investor Edition)',
    submittedBy: 'LatAm VC',
    founderId: 'founder-luis',
    founderName: 'Luis Dominguez',
    metrics: {
      clarityLift: 3.4,
      replayCompletionRate: 82,
      badgeUnlockVelocity: 76,
      schemaConvictionScore: 4.6,
      culturalReach: 85,
      totalScore: 88.2
    },
    tier: 'Platinum',
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['finance.trust-velocity.investor', 'badge.dual-language'],
    deployedAt: '2025-09-28T10:00:00Z',
    squadsActive: ['LatAm GTM', 'Founder Solo'],
    culturalReach: ['LatAm', 'US'],
    isShowcased: true,
    bannerGenerated: true,
    authorshipCredits: {
      founder: 'Luis Dominguez',
      investor: 'LatAm VC',
      roles: ['Founder Architect', 'Investor Strategist']
    }
  },
  {
    id: 'remix-trophy-002',
    title: 'Demo Precision Remix (Pitch Alpha)',
    submittedBy: 'US Angel',
    founderId: 'founder-sarah',
    founderName: 'Sarah Chen',
    metrics: {
      clarityLift: 3.1,
      replayCompletionRate: 78,
      badgeUnlockVelocity: 68,
      schemaConvictionScore: 4.4,
      culturalReach: 75,
      totalScore: 76.8
    },
    tier: 'Gold',
    badges: ['🎯 Demo Precision Architect'],
    schemaTrace: ['demo.pitch-alpha'],
    deployedAt: '2025-09-25T14:30:00Z',
    squadsActive: ['Ops Alpha', 'Investor Beta'],
    culturalReach: ['US', 'Global'],
    isShowcased: true,
    bannerGenerated: true,
    authorshipCredits: {
      founder: 'Sarah Chen',
      investor: 'US Angel',
      roles: ['Founder Architect', 'Investor Strategist']
    }
  },
  {
    id: 'remix-trophy-003',
    title: 'Cultural Intelligence Navigator',
    submittedBy: 'Global Fund',
    founderId: 'founder-carlos',
    founderName: 'Carlos Rodriguez',
    metrics: {
      clarityLift: 2.9,
      replayCompletionRate: 76,
      badgeUnlockVelocity: 71,
      schemaConvictionScore: 4.3,
      culturalReach: 92,
      totalScore: 82.1
    },
    tier: 'Founder\'s Pick',
    badges: ['🎭 Cultural Intelligence Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['culture.force-multiplier', 'badge.dual-language'],
    deployedAt: '2025-09-22T16:45:00Z',
    squadsActive: ['Global Expansion', 'Cultural Bridge'],
    culturalReach: ['Global', 'LatAm', 'EU'],
    isShowcased: true,
    bannerGenerated: true,
    authorshipCredits: {
      founder: 'Carlos Rodriguez',
      investor: 'Global Fund',
      roles: ['Founder Architect', 'Investor Strategist']
    }
  }
];

const DEMO_SHOWCASE_BANNERS: ShowcaseBanner[] = [
  {
    id: 'banner-001',
    remixId: 'remix-trophy-001',
    tier: 'Platinum',
    bannerTextEN: 'Investor Remix of the Month – LatAm VC',
    bannerTextES: 'Remix Inversor del Mes – LatAm VC',
    badgeIcons: ['🧩', '🌐'],
    schemaTrace: ['finance.trust-velocity.investor', 'badge.dual-language'],
    createdAt: '2025-10-01T10:00:00Z',
    isActive: true
  },
  {
    id: 'banner-002',
    remixId: 'remix-trophy-002',
    tier: 'Gold',
    bannerTextEN: 'Excellence in Demo Precision – US Angel',
    bannerTextES: 'Excelencia en Precisión de Demo – US Angel',
    badgeIcons: ['🎯'],
    schemaTrace: ['demo.pitch-alpha'],
    createdAt: '2025-09-30T15:30:00Z',
    isActive: true
  }
];

export default function RemixTrophySystem({
  language,
  onExport,
  onSync,
  onGenerateBanner,
  onNavigate,
  currentMode = 'evaluation'
}: RemixTrophySystemProps) {
  const [activeMode, setActiveMode] = useState(currentMode);
  const [selectedRemix, setSelectedRemix] = useState<RemixTrophyData | null>(null);
  const [trophyFilter, setTrophyFilter] = useState<'all' | TrophyTier['tier']>('all');
  const [showcaseBanners, setShowcaseBanners] = useState<ShowcaseBanner[]>(DEMO_SHOWCASE_BANNERS);

  const t = {
    en: {
      title: 'Remix Trophy System',
      subtitle: 'Performance evaluation, trophy assignment, and showcase banner generation',
      modes: {
        evaluation: 'Performance Evaluation',
        assignment: 'Trophy Assignment',
        showcase: 'Showcase Banners',
        sync: 'System Sync'
      },
      metrics: {
        clarityLift: 'Clarity Lift',
        replayCompletionRate: 'Replay Completion Rate',
        badgeUnlockVelocity: 'Badge Unlock Velocity',
        schemaConvictionScore: 'Schema Conviction Score',
        culturalReach: 'Cultural Reach',
        totalScore: 'Total Score'
      },
      tiers: {
        'Platinum': 'Platinum',
        'Gold': 'Gold',
        'Silver': 'Silver',
        'Bronze': 'Bronze',
        'Founder\'s Pick': 'Founder\'s Pick'
      },
      actions: {
        evaluate: 'Evaluate Performance',
        assignTrophy: 'Assign Trophy',
        generateBanner: 'Generate Banner',
        sync: 'Sync to Systems',
        export: 'Export',
        share: 'Share',
        viewDetails: 'View Details',
        editCredits: 'Edit Credits'
      },
      labels: {
        submittedBy: 'Submitted By',
        founderId: 'Founder ID',
        tier: 'Trophy Tier',
        criteria: 'Criteria Met',
        authorshipCredits: 'Authorship Credits',
        squadsActive: 'Active Squads',
        bannerText: 'Banner Text',
        isShowcased: 'Showcased',
        syncTargets: 'Sync Targets'
      }
    },
    es: {
      title: 'Sistema de Trofeos de Remix',
      subtitle: 'Evaluación de rendimiento, asignación de trofeos y generación de banners de vitrina',
      modes: {
        evaluation: 'Evaluación Rendimiento',
        assignment: 'Asignación Trofeos',
        showcase: 'Banners Vitrina',
        sync: 'Sincronización Sistema'
      },
      metrics: {
        clarityLift: 'Mejora de Claridad',
        replayCompletionRate: 'Tasa Finalización Replay',
        badgeUnlockVelocity: 'Velocidad Desbloqueo Insignias',
        schemaConvictionScore: 'Puntuación Convicción Esquema',
        culturalReach: 'Alcance Cultural',
        totalScore: 'Puntuación Total'
      },
      tiers: {
        'Platinum': 'Platino',
        'Gold': 'Oro',
        'Silver': 'Plata',
        'Bronze': 'Bronce',
        'Founder\'s Pick': 'Elección del Fundador'
      },
      actions: {
        evaluate: 'Evaluar Rendimiento',
        assignTrophy: 'Asignar Trofeo',
        generateBanner: 'Generar Banner',
        sync: 'Sincronizar a Sistemas',
        export: 'Exportar',
        share: 'Compartir',
        viewDetails: 'Ver Detalles',
        editCredits: 'Editar Créditos'
      },
      labels: {
        submittedBy: 'Enviado Por',
        founderId: 'ID Fundador',
        tier: 'Nivel Trofeo',
        criteria: 'Criterios Cumplidos',
        authorshipCredits: 'Créditos Autoría',
        squadsActive: 'Escuadrones Activos',
        bannerText: 'Texto Banner',
        isShowcased: 'En Vitrina',
        syncTargets: 'Objetivos Sincronización'
      }
    }
  };

  const text = t[language];

  const evaluateRemixPerformance = (remix: RemixTrophyData): TrophyTier => {
    const { metrics } = remix;
    
    // Calculate weighted score
    const weightedScore = (
      (metrics.clarityLift / 5.0) * 30 +
      (metrics.replayCompletionRate / 100) * 25 +
      (metrics.badgeUnlockVelocity / 100) * 20 +
      (metrics.schemaConvictionScore / 5.0) * 15 +
      (metrics.culturalReach / 100) * 10
    );

    // Find appropriate tier
    const sortedTiers = [...TROPHY_TIERS].sort((a, b) => b.minScore - a.minScore);
    const assignedTier = sortedTiers.find(tier => weightedScore >= tier.minScore) || TROPHY_TIERS[TROPHY_TIERS.length - 1];
    
    return assignedTier;
  };

  const getTierIcon = (tier: TrophyTier['tier']) => {
    const tierData = TROPHY_TIERS.find(t => t.tier === tier);
    return tierData?.icon || '🏆';
  };

  const getTierColor = (tier: TrophyTier['tier']) => {
    const tierData = TROPHY_TIERS.find(t => t.tier === tier);
    return tierData?.color || 'text-gray-400';
  };

  const getTierBgColor = (tier: TrophyTier['tier']) => {
    const tierData = TROPHY_TIERS.find(t => t.tier === tier);
    return tierData?.bgColor || 'bg-gray-500/10 border-gray-500/20';
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderPerformanceEvaluation = () => (
    <div className="space-y-6">
      {DEMO_REMIX_TROPHIES.map((remix, index) => (
        <motion.div
          key={remix.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`text-4xl`}>{getTierIcon(remix.tier)}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{remix.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{remix.submittedBy}</span>
                      <span>•</span>
                      <span>{formatDate(remix.deployedAt)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{remix.metrics.totalScore.toFixed(1)}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.totalScore}</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{remix.metrics.clarityLift}x</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.clarityLift}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{remix.metrics.replayCompletionRate}%</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.replayCompletionRate}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{remix.metrics.badgeUnlockVelocity}%</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.badgeUnlockVelocity}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{remix.metrics.schemaConvictionScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.schemaConvictionScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">{remix.metrics.culturalReach}%</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.culturalReach}</div>
                </div>
              </div>

              {/* Trophy Assignment Preview */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <Badge className={`${getTierBgColor(remix.tier)} ${getTierColor(remix.tier)}`}>
                    {getTierIcon(remix.tier)} {text.tiers[remix.tier]}
                  </Badge>
                  
                  <div className="text-sm text-muted-foreground">
                    {TROPHY_TIERS.find(t => t.tier === remix.tier)?.criteria.join(' • ')}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedRemix(remix)}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    {text.actions.viewDetails}
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={() => {
                      const evaluatedTier = evaluateRemixPerformance(remix);
                      console.log('Re-evaluated trophy tier:', evaluatedTier);
                    }}
                  >
                    <Trophy className="w-3 h-3 mr-1" />
                    {text.actions.evaluate}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderTrophyAssignment = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TROPHY_TIERS.map((tier, index) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`p-6 ${tier.bgColor}`}>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <h3 className={`text-lg font-semibold ${tier.color}`}>
                    {text.tiers[tier.tier]}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Min Score: {tier.minScore}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">{text.labels.criteria}:</h4>
                  <ul className="space-y-1">
                    {tier.criteria.map((criterion, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center pt-2">
                  <Badge variant="outline" className="text-xs">
                    {DEMO_REMIX_TROPHIES.filter(r => r.tier === tier.tier).length} Awarded
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Trophy Assignment Queue */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Trophy Assignment Queue</h3>
        
        <div className="space-y-4">
          {DEMO_REMIX_TROPHIES.map((remix) => (
            <div key={remix.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{getTierIcon(remix.tier)}</div>
                <div>
                  <h4 className="font-medium">{remix.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {remix.submittedBy} • Score: {remix.metrics.totalScore.toFixed(1)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className={`${getTierBgColor(remix.tier)} ${getTierColor(remix.tier)}`}>
                  {text.tiers[remix.tier]}
                </Badge>
                
                <Button size="sm" variant="outline">
                  <Award className="w-3 h-3 mr-1" />
                  {text.actions.assignTrophy}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderShowcaseBanners = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Showcase Banner Generator</h3>
        <Button onClick={() => onGenerateBanner(DEMO_REMIX_TROPHIES[0])}>
          <Sparkles className="w-4 h-4 mr-2" />
          Generate New Banner
        </Button>
      </div>

      {showcaseBanners.map((banner, index) => {
        const remix = DEMO_REMIX_TROPHIES.find(r => r.id === banner.remixId);
        if (!remix) return null;

        return (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                {/* Banner Preview */}
                <div className={`p-6 rounded-lg ${getTierBgColor(banner.tier)} border-2`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{getTierIcon(banner.tier)}</div>
                      <div>
                        <h4 className={`text-xl font-bold ${getTierColor(banner.tier)}`}>
                          {language === 'en' ? banner.bannerTextEN : banner.bannerTextES}
                        </h4>
                        <p className="text-muted-foreground">{remix.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {banner.badgeIcons.map((icon, idx) => (
                        <span key={idx} className="text-2xl">{icon}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">
                        Co-authored by {remix.authorshipCredits.founder} & {remix.authorshipCredits.investor}
                      </span>
                    </div>
                    
                    <div className="flex gap-1">
                      {banner.schemaTrace.map((trace, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-mono">
                          {trace}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Banner Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">English Banner Text</label>
                    <input
                      type="text"
                      value={banner.bannerTextEN}
                      onChange={(e) => {
                        setShowcaseBanners(prev => prev.map(b => 
                          b.id === banner.id ? { ...b, bannerTextEN: e.target.value } : b
                        ));
                      }}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Spanish Banner Text</label>
                    <input
                      type="text"
                      value={banner.bannerTextES}
                      onChange={(e) => {
                        setShowcaseBanners(prev => prev.map(b => 
                          b.id === banner.id ? { ...b, bannerTextES: e.target.value } : b
                        ));
                      }}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                    />
                  </div>
                </div>

                {/* Banner Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Badge variant={banner.isActive ? 'default' : 'outline'}>
                      {banner.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Created {formatDate(banner.createdAt)}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit3 className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      Export
                    </Button>
                    <Button size="sm">
                      <Share2 className="w-3 h-3 mr-1" />
                      Deploy
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  const renderSystemSync = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Trophy System Synchronization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Squad Display Sync</h4>
            <div className="space-y-3">
              {['LatAm GTM', 'Founder Solo', 'Ops Alpha', 'Global Expansion'].map((squad) => (
                <div key={squad} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{squad}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Synced
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Export Options</h4>
            <div className="space-y-3">
              {['Remix Showcase', 'Founder Profile', 'Investor Dashboard', 'Public Gallery'].map((option) => (
                <Button key={option} variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Investor Portal Sync</h4>
              <p className="text-sm text-muted-foreground">
                Synchronize trophy data with investor relationship platforms
              </p>
            </div>
            
            <Button>
              <Share2 className="w-4 h-4 mr-2" />
              Sync All Systems
            </Button>
          </div>
        </div>
      </Card>

      {/* Authorship Credits Management */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Authorship Credits Management</h3>
        
        <div className="space-y-4">
          {DEMO_REMIX_TROPHIES.map((remix) => (
            <div key={remix.id} className="p-4 bg-secondary/30 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">{remix.title}</h4>
                <Badge className={`${getTierBgColor(remix.tier)} ${getTierColor(remix.tier)}`}>
                  {getTierIcon(remix.tier)} {text.tiers[remix.tier]}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Founder Architect:</span>
                  <div className="font-medium">{remix.authorshipCredits.founder}</div>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Investor Strategist:</span>
                  <div className="font-medium">{remix.authorshipCredits.investor}</div>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="text-sm text-muted-foreground">Display Mode:</span>
                <div className="text-sm">Dual-credit on replay intro + badge unlock screen</div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline">
                  <Edit3 className="w-3 h-3 mr-1" />
                  {text.actions.editCredits}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              {text.title}
            </h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <select
              value={trophyFilter}
              onChange={(e) => setTrophyFilter(e.target.value as any)}
              className="bg-input border border-border text-foreground px-3 py-1 rounded text-sm"
            >
              <option value="all">All Tiers</option>
              {TROPHY_TIERS.map((tier) => (
                <option key={tier.tier} value={tier.tier}>
                  {tier.icon} {text.tiers[tier.tier]}
                </option>
              ))}
            </select>
            
            <Button variant="outline" size="sm" onClick={() => onExport('trophies', DEMO_REMIX_TROPHIES)}>
              <Download className="w-3 h-3 mr-1" />
              {text.actions.export}
            </Button>
          </div>
        </div>
      </Card>

      {/* Mode Navigation */}
      <Tabs value={activeMode} onValueChange={(value: any) => setActiveMode(value)} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="evaluation" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            {text.modes.evaluation}
          </TabsTrigger>
          <TabsTrigger value="assignment" className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            {text.modes.assignment}
          </TabsTrigger>
          <TabsTrigger value="showcase" className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {text.modes.showcase}
          </TabsTrigger>
          <TabsTrigger value="sync" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            {text.modes.sync}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="evaluation" className="mt-6">
          {renderPerformanceEvaluation()}
        </TabsContent>

        <TabsContent value="assignment" className="mt-6">
          {renderTrophyAssignment()}
        </TabsContent>

        <TabsContent value="showcase" className="mt-6">
          {renderShowcaseBanners()}
        </TabsContent>

        <TabsContent value="sync" className="mt-6">
          {renderSystemSync()}
        </TabsContent>
      </Tabs>
    </div>
  );
}