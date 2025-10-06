import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Trophy,
  Medal,
  Award,
  Star,
  Crown,
  Zap,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Globe,
  Clock,
  Activity,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Eye,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Timer
} from 'lucide-react';

interface RemixRankData {
  rank: number;
  title: string;
  submittedBy: string;
  clarityLift: string;
  replayEngagement: string;
  badges: string[];
  schemaTrace: string[];
  totalScore: number;
  trend: 'up' | 'down' | 'stable';
  trendChange: number;
  deployedAt: string;
  squadsActive: string[];
  culturalReach: string[];
  badgeVelocity: string;
  feedbackScore: string;
  completions: number;
  lastWeekRank?: number;
}

interface BadgeVelocityRank {
  badge: string;
  icon: string;
  avgUnlockTime: string;
  unlockRate: string;
  squadsActive: string[];
  totalUnlocks: number;
  satisfactionScore: string;
  trend: 'up' | 'down' | 'stable';
}

interface SchemaStrengthRank {
  path: string;
  convictionScore: string;
  usageFrequency: number;
  clarityContribution: string;
  culturalAdaptation: string;
  feedbackHighlights: string[];
}

interface ReplayEngagementRank {
  remix: string;
  avgWatchTime: string;
  completionRate: string;
  feedbackScore: string;
  replayViews: number;
  shareRate: string;
  culturalReach: string[];
}

interface RemixLeaderboardProps {
  language: 'en' | 'es';
  onExport: (type: string, data: any) => void;
  onShare: () => void;
  onViewRemix: (remixId: string) => void;
  onNavigate: (view: string) => void;
}

const DEMO_REMIX_RANKINGS: RemixRankData[] = [
  {
    rank: 1,
    title: 'Trust Velocity Remix (Investor Edition)',
    submittedBy: 'LatAm VC',
    clarityLift: '3.4x',
    replayEngagement: '84%',
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['finance.trust-velocity.investor', 'badge.dual-language'],
    totalScore: 94.5,
    trend: 'up',
    trendChange: 12,
    deployedAt: '2025-09-28T10:00:00Z',
    squadsActive: ['LatAm GTM', 'Founder Solo'],
    culturalReach: ['LatAm', 'US'],
    badgeVelocity: '2.3d',
    feedbackScore: '4.7',
    completions: 47,
    lastWeekRank: 2
  },
  {
    rank: 2,
    title: 'Demo Precision Remix (Pitch Alpha)',
    submittedBy: 'US Angel',
    clarityLift: '3.1x',
    replayEngagement: '79%',
    badges: ['🎯 Demo Precision Architect'],
    schemaTrace: ['demo.pitch-alpha'],
    totalScore: 89.2,
    trend: 'down',
    trendChange: -5,
    deployedAt: '2025-09-25T14:30:00Z',
    squadsActive: ['Ops Alpha', 'Investor Beta'],
    culturalReach: ['US', 'Global'],
    badgeVelocity: '2.8d',
    feedbackScore: '4.5',
    completions: 32,
    lastWeekRank: 1
  },
  {
    rank: 3,
    title: 'Cultural Intelligence Navigator',
    submittedBy: 'Global Fund',
    clarityLift: '2.9x',
    replayEngagement: '76%',
    badges: ['🎭 Cultural Intelligence Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['culture.force-multiplier', 'badge.dual-language'],
    totalScore: 85.7,
    trend: 'up',
    trendChange: 8,
    deployedAt: '2025-09-22T16:45:00Z',
    squadsActive: ['Global Expansion', 'Cultural Bridge'],
    culturalReach: ['Global', 'LatAm', 'EU'],
    badgeVelocity: '3.1d',
    feedbackScore: '4.4',
    completions: 28,
    lastWeekRank: 4
  },
  {
    rank: 4,
    title: 'Strategic Supremacy Accelerator',
    submittedBy: 'Strategic Partner',
    clarityLift: '2.7x',
    replayEngagement: '72%',
    badges: ['⚡ Strategy Master', '🎯 Execution Expert'],
    schemaTrace: ['strategy.supremacy', 'execution.velocity'],
    totalScore: 82.1,
    trend: 'stable',
    trendChange: 0,
    deployedAt: '2025-09-20T09:15:00Z',
    squadsActive: ['Strategic Alpha'],
    culturalReach: ['US'],
    badgeVelocity: '3.5d',
    feedbackScore: '4.3',
    completions: 24,
    lastWeekRank: 4
  }
];

const DEMO_BADGE_VELOCITY: BadgeVelocityRank[] = [
  {
    badge: 'Trust Velocity Master',
    icon: '🧩',
    avgUnlockTime: '2d 4h',
    unlockRate: '76%',
    squadsActive: ['LatAm GTM', 'Founder Solo'],
    totalUnlocks: 13,
    satisfactionScore: '4.8',
    trend: 'up'
  },
  {
    badge: 'Demo Precision Architect',
    icon: '🎯',
    avgUnlockTime: '2d 18h',
    unlockRate: '68%',
    squadsActive: ['Ops Alpha', 'Investor Beta'],
    totalUnlocks: 10,
    satisfactionScore: '4.6',
    trend: 'stable'
  },
  {
    badge: 'Dual-Language Navigator',
    icon: '🌐',
    avgUnlockTime: '1d 18h',
    unlockRate: '74%',
    squadsActive: ['LatAm GTM', 'Global Expansion'],
    totalUnlocks: 11,
    satisfactionScore: '4.5',
    trend: 'up'
  }
];

const DEMO_SCHEMA_STRENGTH: SchemaStrengthRank[] = [
  {
    path: 'finance.trust-velocity.investor',
    convictionScore: '4.6',
    usageFrequency: 89,
    clarityContribution: '3.4x',
    culturalAdaptation: 'Excellent',
    feedbackHighlights: ['Clear logic', 'Investor-relevant', 'Traceable']
  },
  {
    path: 'demo.pitch-alpha',
    convictionScore: '4.4',
    usageFrequency: 82,
    clarityContribution: '3.1x',
    culturalAdaptation: 'Good',
    feedbackHighlights: ['Demo excellence', 'Pitch mastery', 'Clear progression']
  },
  {
    path: 'badge.dual-language',
    convictionScore: '4.3',
    usageFrequency: 76,
    clarityContribution: '2.9x',
    culturalAdaptation: 'Good',
    feedbackHighlights: ['Strong bilingual delivery', 'Replay clarity', 'Badge linkage']
  }
];

const DEMO_REPLAY_ENGAGEMENT: ReplayEngagementRank[] = [
  {
    remix: 'Trust Velocity Remix',
    avgWatchTime: '3m 42s',
    completionRate: '82%',
    feedbackScore: '4.8',
    replayViews: 156,
    shareRate: '23%',
    culturalReach: ['LatAm', 'US']
  },
  {
    remix: 'Demo Precision Remix',
    avgWatchTime: '3m 10s',
    completionRate: '78%',
    feedbackScore: '4.6',
    replayViews: 134,
    shareRate: '19%',
    culturalReach: ['US', 'Global']
  },
  {
    remix: 'Cultural Intelligence Navigator',
    avgWatchTime: '4m 15s',
    completionRate: '76%',
    feedbackScore: '4.5',
    replayViews: 98,
    shareRate: '31%',
    culturalReach: ['Global', 'LatAm', 'EU']
  }
];

export default function RemixLeaderboard({
  language,
  onExport,
  onShare,
  onViewRemix,
  onNavigate
}: RemixLeaderboardProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedInvestorTier, setSelectedInvestorTier] = useState('all');
  const [selectedPurpose, setSelectedPurpose] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'all'>('month');

  const t = {
    en: {
      title: 'Remix Leaderboard',
      subtitle: 'Top performing investor-created remix arcs ranked by impact and engagement',
      filters: {
        investorTier: 'Investor Tier',
        remixPurpose: 'Remix Purpose',
        language: 'Language',
        timeRange: 'Time Range'
      },
      sections: {
        rankings: 'Remix Arc Rankings',
        badgeVelocity: 'Badge Velocity Scores',
        schemaStrength: 'Schema Trace Strength',
        replayEngagement: 'Replay Engagement Metrics'
      },
      metrics: {
        rank: 'Rank',
        clarityLift: 'Clarity Lift',
        replayEngagement: 'Replay Engagement',
        totalScore: 'Total Score',
        trend: 'Trend',
        squadsActive: 'Active Squads',
        culturalReach: 'Cultural Reach',
        badgeVelocity: 'Badge Velocity',
        feedbackScore: 'Feedback Score',
        completions: 'Completions',
        avgUnlockTime: 'Avg Unlock Time',
        unlockRate: 'Unlock Rate',
        satisfactionScore: 'Satisfaction',
        totalUnlocks: 'Total Unlocks',
        convictionScore: 'Conviction Score',
        usageFrequency: 'Usage Frequency',
        clarityContribution: 'Clarity Contribution',
        culturalAdaptation: 'Cultural Adaptation',
        avgWatchTime: 'Avg Watch Time',
        completionRate: 'Completion Rate',
        replayViews: 'Replay Views',
        shareRate: 'Share Rate'
      },
      actions: {
        viewRemix: 'View Remix',
        export: 'Export Leaderboard',
        share: 'Share Leaderboard',
        refresh: 'Refresh',
        filter: 'Filter',
        highlight: 'Highlight in Showcase'
      },
      trendLabels: {
        up: 'Rising',
        down: 'Falling',
        stable: 'Stable'
      },
      timeRanges: {
        week: 'This Week',
        month: 'This Month',
        quarter: 'This Quarter',
        all: 'All Time'
      }
    },
    es: {
      title: 'Tabla de Líderes de Remix',
      subtitle: 'Arcos de remix creados por inversores con mejor rendimiento clasificados por impacto y participación',
      filters: {
        investorTier: 'Nivel de Inversor',
        remixPurpose: 'Propósito del Remix',
        language: 'Idioma',
        timeRange: 'Rango de Tiempo'
      },
      sections: {
        rankings: 'Rankings de Arcos Remix',
        badgeVelocity: 'Puntuaciones de Velocidad de Insignias',
        schemaStrength: 'Fuerza del Trazado de Esquemas',
        replayEngagement: 'Métricas de Participación de Replay'
      },
      metrics: {
        rank: 'Rango',
        clarityLift: 'Mejora de Claridad',
        replayEngagement: 'Participación Replay',
        totalScore: 'Puntuación Total',
        trend: 'Tendencia',
        squadsActive: 'Escuadrones Activos',
        culturalReach: 'Alcance Cultural',
        badgeVelocity: 'Velocidad Insignias',
        feedbackScore: 'Puntuación Feedback',
        completions: 'Finalizaciones',
        avgUnlockTime: 'Tiempo Promedio Desbloqueo',
        unlockRate: 'Tasa Desbloqueo',
        satisfactionScore: 'Satisfacción',
        totalUnlocks: 'Total Desbloqueos',
        convictionScore: 'Puntuación Convicción',
        usageFrequency: 'Frecuencia Uso',
        clarityContribution: 'Contribución Claridad',
        culturalAdaptation: 'Adaptación Cultural',
        avgWatchTime: 'Tiempo Promedio Visualización',
        completionRate: 'Tasa Finalización',
        replayViews: 'Visualizaciones Replay',
        shareRate: 'Tasa Compartir'
      },
      actions: {
        viewRemix: 'Ver Remix',
        export: 'Exportar Tabla',
        share: 'Compartir Tabla',
        refresh: 'Actualizar',
        filter: 'Filtrar',
        highlight: 'Destacar en Vitrina'
      },
      trendLabels: {
        up: 'Subiendo',
        down: 'Bajando',
        stable: 'Estable'
      },
      timeRanges: {
        week: 'Esta Semana',
        month: 'Este Mes',
        quarter: 'Este Trimestre',
        all: 'Todo el Tiempo'
      }
    }
  };

  const text = t[language];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-400" />;
      default: return <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold">{rank}</div>;
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable', change: number) => {
    switch (trend) {
      case 'up': 
        return (
          <div className="flex items-center gap-1 text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span className="text-xs">+{change}</span>
          </div>
        );
      case 'down': 
        return (
          <div className="flex items-center gap-1 text-red-400">
            <TrendingUp className="w-3 h-3 rotate-180" />
            <span className="text-xs">-{Math.abs(change)}</span>
          </div>
        );
      case 'stable': 
        return (
          <div className="flex items-center gap-1 text-yellow-400">
            <Activity className="w-3 h-3" />
            <span className="text-xs">±0</span>
          </div>
        );
    }
  };

  const getRankChange = (current: number, previous?: number) => {
    if (!previous) return null;
    const change = previous - current;
    if (change > 0) {
      return <Badge variant="outline" className="text-xs text-green-400">↑{change}</Badge>;
    } else if (change < 0) {
      return <Badge variant="outline" className="text-xs text-red-400">↓{Math.abs(change)}</Badge>;
    }
    return <Badge variant="outline" className="text-xs text-yellow-400">—</Badge>;
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const renderRankings = () => (
    <div className="space-y-4">
      {DEMO_REMIX_RANKINGS.map((remix, index) => (
        <motion.div
          key={remix.rank}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <Card className={`p-6 transition-all hover:shadow-lg ${
            remix.rank === 1 ? 'ring-2 ring-yellow-400/50 bg-gradient-to-r from-yellow-500/5 to-orange-500/5' :
            remix.rank === 2 ? 'ring-2 ring-gray-400/50 bg-gradient-to-r from-gray-500/5 to-blue-500/5' :
            remix.rank === 3 ? 'ring-2 ring-orange-400/50 bg-gradient-to-r from-orange-500/5 to-red-500/5' :
            ''
          }`}>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getRankIcon(remix.rank)}
                  <div>
                    <h3 className="text-lg font-semibold">{remix.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>by {remix.submittedBy}</span>
                      <span>•</span>
                      <span>{formatDate(remix.deployedAt)}</span>
                      {getRankChange(remix.rank, remix.lastWeekRank)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{remix.totalScore}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.totalScore}</div>
                  </div>
                  {getTrendIcon(remix.trend, remix.trendChange)}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{remix.clarityLift}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.clarityLift}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{remix.replayEngagement}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.replayEngagement}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{remix.feedbackScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{remix.completions}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.completions}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">{remix.badgeVelocity}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.badgeVelocity}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-cyan-400">{remix.squadsActive.length}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.squadsActive}</div>
                </div>
              </div>

              {/* Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Badges:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {remix.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Schema Trace:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {remix.schemaTrace.map((trace) => (
                      <Badge key={trace} variant="outline" className="text-xs font-mono">
                        {trace}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-muted-foreground">{text.metrics.culturalReach}:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {remix.culturalReach.map((culture) => (
                      <Badge key={culture} variant="outline" className="text-xs">
                        {culture}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => onViewRemix(remix.title)}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    {text.actions.viewRemix}
                  </Button>
                  
                  {remix.rank <= 3 && (
                    <Button
                      size="sm"
                      variant="outline"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {text.actions.highlight}
                    </Button>
                  )}
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  {remix.squadsActive.join(', ')}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderBadgeVelocity = () => (
    <div className="space-y-4">
      {DEMO_BADGE_VELOCITY.map((badge, index) => (
        <motion.div
          key={badge.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold">{badge.badge}</h4>
                    <div className="text-sm text-muted-foreground">
                      {badge.squadsActive.length} active squads • {badge.totalUnlocks} total unlocks
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{badge.unlockRate}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.unlockRate}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{badge.avgUnlockTime}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.avgUnlockTime}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{badge.unlockRate}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.unlockRate}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{badge.satisfactionScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.satisfactionScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">{badge.totalUnlocks}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.totalUnlocks}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-cyan-400">{badge.squadsActive.length}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.squadsActive}</div>
                </div>
              </div>

              <div>
                <span className="text-sm text-muted-foreground">Active in squads:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {badge.squadsActive.map((squad) => (
                    <Badge key={squad} variant="outline" className="text-xs">
                      {squad}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderSchemaStrength = () => (
    <div className="space-y-4">
      {DEMO_SCHEMA_STRENGTH.map((schema, index) => (
        <motion.div
          key={schema.path}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-lg font-semibold">{schema.path}</h4>
                  <div className="text-sm text-muted-foreground">
                    {schema.usageFrequency}% usage frequency • {schema.culturalAdaptation} cultural adaptation
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{schema.convictionScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.convictionScore}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{schema.convictionScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.convictionScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{schema.usageFrequency}%</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.usageFrequency}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{schema.clarityContribution}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.clarityContribution}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{schema.culturalAdaptation}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.culturalAdaptation}</div>
                </div>
              </div>

              <div>
                <span className="text-sm text-muted-foreground">Feedback highlights:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {schema.feedbackHighlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderReplayEngagement = () => (
    <div className="space-y-4">
      {DEMO_REPLAY_ENGAGEMENT.map((replay, index) => (
        <motion.div
          key={replay.remix}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{replay.remix}</h4>
                  <div className="text-sm text-muted-foreground">
                    {replay.replayViews} views • {replay.shareRate} share rate
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{replay.feedbackScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{replay.avgWatchTime}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.avgWatchTime}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{replay.completionRate}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.completionRate}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{replay.feedbackScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">{replay.replayViews}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.replayViews}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-cyan-400">{replay.shareRate}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.shareRate}</div>
                </div>
              </div>

              <div>
                <span className="text-sm text-muted-foreground">{text.metrics.culturalReach}:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {replay.culturalReach.map((culture) => (
                    <Badge key={culture} variant="outline" className="text-xs">
                      {culture}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
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
            <Button variant="outline" size="sm" onClick={onShare}>
              <Share2 className="w-3 h-3 mr-1" />
              {text.actions.share}
            </Button>
            <Button variant="outline" size="sm" onClick={() => onExport('leaderboard', DEMO_REMIX_RANKINGS)}>
              <Download className="w-3 h-3 mr-1" />
              {text.actions.export}
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-3 h-3 mr-1" />
              {text.actions.refresh}
            </Button>
          </div>
        </div>
      </Card>

      {/* Filter Panel */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{text.filters.investorTier}</label>
            <Select value={selectedInvestorTier} onValueChange={setSelectedInvestorTier}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="LatAm VC">LatAm VC</SelectItem>
                <SelectItem value="US Angel">US Angel</SelectItem>
                <SelectItem value="Global Fund">Global Fund</SelectItem>
                <SelectItem value="Strategic Partner">Strategic Partner</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">{text.filters.remixPurpose}</label>
            <Select value={selectedPurpose} onValueChange={setSelectedPurpose}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Purposes</SelectItem>
                <SelectItem value="Pitch Prep">Pitch Prep</SelectItem>
                <SelectItem value="Market Expansion">Market Expansion</SelectItem>
                <SelectItem value="Proof Optimization">Proof Optimization</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">{text.filters.language}</label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="EN">English</SelectItem>
                <SelectItem value="ES">Spanish</SelectItem>
                <SelectItem value="Dual-language">Dual-language</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">{text.filters.timeRange}</label>
            <Select value={timeRange} onValueChange={(value: any) => setTimeRange(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(text.timeRanges).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {/* Remix Arc Rankings */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            {text.sections.rankings}
          </h2>
          {renderRankings()}
        </section>

        {/* Badge Velocity Panel */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            {text.sections.badgeVelocity}
          </h2>
          {renderBadgeVelocity()}
        </section>

        {/* Schema Strength Chart */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            {text.sections.schemaStrength}
          </h2>
          {renderSchemaStrength()}
        </section>

        {/* Replay Engagement Dashboard */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            {text.sections.replayEngagement}
          </h2>
          {renderReplayEngagement()}
        </section>
      </div>

      {/* Export Panel */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Leaderboard Export & Showcase</h3>
            <p className="text-sm text-muted-foreground">
              Share top performing remixes and configure automatic showcasing
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-3 h-3 mr-1" />
              Investor Portal
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-3 h-3 mr-1" />
              Remix Showcase
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-3 h-3 mr-1" />
              Founder Console
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}