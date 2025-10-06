import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3,
  TrendingUp,
  Users,
  Trophy,
  Activity,
  Target,
  Clock,
  Zap,
  Star,
  Award,
  Globe,
  Download,
  Share2,
  RefreshCw,
  Eye,
  Filter,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Timer
} from 'lucide-react';
import MetricCard from './MetricCard';

interface RemixMetrics {
  id: string;
  title: string;
  submittedBy: string;
  deployedAt: string;
  squadsDeployed: string[];
  overlays: string[];
  clarityLiftAvg: string;
  badgesEarned: string[];
  totalCompletions: number;
  replayEngagement: string;
  feedbackScore: string;
  culturalReach: string[];
  roiImpact: number;
  status: 'active' | 'paused' | 'archived';
}

interface SquadMetrics {
  name: string;
  overlaysCompleted: number;
  replayEngagement: string;
  feedbackScore: string;
  clarityLift: string;
  memberCount: number;
  badgeVelocity: string;
  culturalContext: string;
}

interface BadgeVelocityData {
  badge: string;
  squads: string[];
  unlocks: number[];
  avgTimeToUnlock: string;
  unlockRate: string;
  satisfactionScore: string;
  icon: string;
}

interface SchemaImpactData {
  path: string;
  engagement: 'High' | 'Moderate' | 'Low';
  clarityContribution: number;
  usageFrequency: number;
  feedbackScore: number;
  culturalAdaptation: string;
}

interface RemixImpactAnalyticsProps {
  language: 'en' | 'es';
  onExport: (type: string, data: any) => void;
  onNavigate: (view: string) => void;
  selectedRemixId?: string;
}

const DEMO_REMIX_METRICS: RemixMetrics[] = [
  {
    id: 'remix-001',
    title: 'Trust Velocity Remix (Investor Edition)',
    submittedBy: 'LatAm VC',
    deployedAt: '2025-09-28T10:00:00Z',
    squadsDeployed: ['LatAm GTM', 'Founder Solo'],
    overlays: ['Trust Velocity (Investor Lens)', 'Dual-Language Navigator'],
    clarityLiftAvg: '3.4x',
    badgesEarned: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    totalCompletions: 47,
    replayEngagement: '84%',
    feedbackScore: '4.7',
    culturalReach: ['LatAm', 'US'],
    roiImpact: 127,
    status: 'active'
  },
  {
    id: 'remix-002',
    title: 'Demo Precision Remix (Pitch Alpha)',
    submittedBy: 'US Angel',
    deployedAt: '2025-09-25T14:30:00Z',
    squadsDeployed: ['Ops Alpha', 'Investor Beta'],
    overlays: ['Demo Precision Architect'],
    clarityLiftAvg: '3.1x',
    badgesEarned: ['🎯 Demo Precision Architect'],
    totalCompletions: 32,
    replayEngagement: '79%',
    feedbackScore: '4.5',
    culturalReach: ['US', 'Global'],
    roiImpact: 89,
    status: 'active'
  }
];

const DEMO_SQUAD_METRICS: SquadMetrics[] = [
  {
    name: 'LatAm GTM',
    overlaysCompleted: 42,
    replayEngagement: '84%',
    feedbackScore: '4.7',
    clarityLift: '3.6x',
    memberCount: 12,
    badgeVelocity: '2.3d',
    culturalContext: 'LatAm'
  },
  {
    name: 'Founder Solo',
    overlaysCompleted: 28,
    replayEngagement: '78%',
    feedbackScore: '4.5',
    clarityLift: '3.2x',
    memberCount: 1,
    badgeVelocity: '1.8d',
    culturalContext: 'US'
  },
  {
    name: 'Ops Alpha',
    overlaysCompleted: 35,
    replayEngagement: '81%',
    feedbackScore: '4.6',
    clarityLift: '3.1x',
    memberCount: 8,
    badgeVelocity: '2.1d',
    culturalContext: 'US'
  }
];

const DEMO_BADGE_VELOCITY: BadgeVelocityData[] = [
  {
    badge: 'Trust Velocity Master',
    squads: ['LatAm GTM', 'Founder Solo'],
    unlocks: [9, 4],
    avgTimeToUnlock: '2d 4h',
    unlockRate: '76%',
    satisfactionScore: '4.8',
    icon: '🧩'
  },
  {
    badge: 'Dual-Language Navigator',
    squads: ['LatAm GTM', 'Founder Solo'],
    unlocks: [7, 3],
    avgTimeToUnlock: '1d 18h',
    unlockRate: '68%',
    satisfactionScore: '4.6',
    icon: '🌐'
  },
  {
    badge: 'Demo Precision Architect',
    squads: ['Ops Alpha', 'Investor Beta'],
    unlocks: [6, 4],
    avgTimeToUnlock: '2d 18h',
    unlockRate: '72%',
    satisfactionScore: '4.5',
    icon: '🎯'
  }
];

const DEMO_SCHEMA_IMPACT: SchemaImpactData[] = [
  {
    path: 'finance.trust-velocity.investor',
    engagement: 'High',
    clarityContribution: 3.4,
    usageFrequency: 89,
    feedbackScore: 4.7,
    culturalAdaptation: 'Excellent'
  },
  {
    path: 'badge.dual-language',
    engagement: 'Moderate',
    clarityContribution: 2.9,
    usageFrequency: 76,
    feedbackScore: 4.4,
    culturalAdaptation: 'Good'
  },
  {
    path: 'demo.pitch-alpha',
    engagement: 'High',
    clarityContribution: 3.1,
    usageFrequency: 82,
    feedbackScore: 4.6,
    culturalAdaptation: 'Good'
  },
  {
    path: 'culture.force-multiplier',
    engagement: 'Low',
    clarityContribution: 2.3,
    usageFrequency: 45,
    feedbackScore: 3.9,
    culturalAdaptation: 'Needs Improvement'
  }
];

export default function RemixImpactAnalytics({
  language,
  onExport,
  onNavigate,
  selectedRemixId
}: RemixImpactAnalyticsProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRemix, setSelectedRemix] = useState<RemixMetrics | null>(
    selectedRemixId ? DEMO_REMIX_METRICS.find(r => r.id === selectedRemixId) || null : null
  );
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  const t = {
    en: {
      title: 'Remix Impact Analytics',
      subtitle: 'Track performance and ROI of investor-created remix arcs',
      tabs: {
        overview: 'Overview',
        squads: 'Squad Deployment',
        coaching: 'Coaching Lift',
        badges: 'Badge Velocity',
        schema: 'Schema Impact',
        export: 'Export & Alerts'
      },
      metrics: {
        totalRemixes: 'Total Remixes',
        activeDeployments: 'Active Deployments',
        avgClarityLift: 'Avg Clarity Lift',
        totalBadgesEarned: 'Total Badges Earned',
        replayEngagement: 'Replay Engagement',
        feedbackScore: 'Feedback Score',
        culturalReach: 'Cultural Reach',
        roiImpact: 'ROI Impact',
        overlaysCompleted: 'Overlays Completed',
        memberCount: 'Members',
        badgeVelocity: 'Badge Velocity',
        unlocks: 'Unlocks',
        avgTimeToUnlock: 'Avg Time to Unlock',
        unlockRate: 'Unlock Rate',
        satisfactionScore: 'Satisfaction',
        engagement: 'Engagement',
        clarityContribution: 'Clarity Contribution',
        usageFrequency: 'Usage Frequency',
        culturalAdaptation: 'Cultural Adaptation'
      },
      actions: {
        export: 'Export',
        share: 'Share',
        refresh: 'Refresh',
        filter: 'Filter',
        viewDetails: 'View Details',
        configure: 'Configure Alerts'
      },
      timeRanges: {
        '7d': 'Last 7 days',
        '30d': 'Last 30 days',
        '90d': 'Last 90 days',
        'all': 'All time'
      },
      status: {
        active: 'Active',
        paused: 'Paused',
        archived: 'Archived',
        high: 'High',
        moderate: 'Moderate',
        low: 'Low'
      }
    },
    es: {
      title: 'Analíticas de Impacto de Remix',
      subtitle: 'Rastrea el rendimiento y ROI de arcos de remix creados por inversores',
      tabs: {
        overview: 'Resumen',
        squads: 'Despliegue Escuadrones',
        coaching: 'Mejora Coaching',
        badges: 'Velocidad Insignias',
        schema: 'Impacto Esquemas',
        export: 'Exportar y Alertas'
      },
      metrics: {
        totalRemixes: 'Total Remixes',
        activeDeployments: 'Despliegues Activos',
        avgClarityLift: 'Mejora Claridad Promedio',
        totalBadgesEarned: 'Total Insignias Obtenidas',
        replayEngagement: 'Participación Replay',
        feedbackScore: 'Puntuación Feedback',
        culturalReach: 'Alcance Cultural',
        roiImpact: 'Impacto ROI',
        overlaysCompleted: 'Overlays Completados',
        memberCount: 'Miembros',
        badgeVelocity: 'Velocidad Insignias',
        unlocks: 'Desbloqueos',
        avgTimeToUnlock: 'Tiempo Promedio Desbloqueo',
        unlockRate: 'Tasa Desbloqueo',
        satisfactionScore: 'Satisfacción',
        engagement: 'Participación',
        clarityContribution: 'Contribución Claridad',
        usageFrequency: 'Frecuencia Uso',
        culturalAdaptation: 'Adaptación Cultural'
      },
      actions: {
        export: 'Exportar',
        share: 'Compartir',
        refresh: 'Actualizar',
        filter: 'Filtrar',
        viewDetails: 'Ver Detalles',
        configure: 'Configurar Alertas'
      },
      timeRanges: {
        '7d': 'Últimos 7 días',
        '30d': 'Últimos 30 días',
        '90d': 'Últimos 90 días',
        'all': 'Todo el tiempo'
      },
      status: {
        active: 'Activo',
        paused: 'Pausado',
        archived: 'Archivado',
        high: 'Alto',
        moderate: 'Moderado',
        low: 'Bajo'
      }
    }
  };

  const text = t[language];

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getEngagementColor = (engagement: string) => {
    switch (engagement.toLowerCase()) {
      case 'high': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'moderate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'paused': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'archived': return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  // Calculate aggregate metrics
  const totalRemixes = DEMO_REMIX_METRICS.length;
  const activeDeployments = DEMO_REMIX_METRICS.filter(r => r.status === 'active').length;
  const avgClarityLift = (DEMO_REMIX_METRICS.reduce((sum, r) => sum + parseFloat(r.clarityLiftAvg), 0) / totalRemixes).toFixed(1);
  const totalBadgesEarned = DEMO_REMIX_METRICS.reduce((sum, r) => sum + r.badgesEarned.length * r.totalCompletions, 0);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title={text.metrics.totalRemixes}
          value={totalRemixes.toString()}
          change={{ value: 2, trend: 'up', period: 'this month' }}
          icon={<BarChart3 className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title={text.metrics.activeDeployments}
          value={activeDeployments.toString()}
          change={{ value: 15, trend: 'up', period: 'vs last month' }}
          icon={<Zap className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title={text.metrics.avgClarityLift}
          value={`${avgClarityLift}x`}
          change={{ value: 8, trend: 'up', period: 'improvement' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="info"
        />
        <MetricCard
          title={text.metrics.totalBadgesEarned}
          value={totalBadgesEarned.toString()}
          change={{ value: 23, trend: 'up', period: 'this month' }}
          icon={<Trophy className="w-5 h-5" />}
          color="warning"
        />
      </div>

      {/* Remix Performance Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{text.title}</h3>
          <div className="flex items-center gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="bg-input border border-border text-foreground px-3 py-1 rounded text-sm"
            >
              {Object.entries(text.timeRanges).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <Button size="sm" variant="outline">
              <Filter className="w-3 h-3 mr-1" />
              {text.actions.filter}
            </Button>
          </div>
        </div>

        {DEMO_REMIX_METRICS.map((remix) => (
          <motion.div
            key={remix.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-semibold">{remix.title}</h4>
                    <Badge className={`text-xs ${getStatusColor(remix.status)}`}>
                      {text.status[remix.status]}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedRemix(remix)}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      {text.actions.viewDetails}
                    </Button>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">{remix.clarityLiftAvg}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.avgClarityLift}</div>
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
                    <div className="text-lg font-bold text-blue-400">{remix.totalCompletions}</div>
                    <div className="text-xs text-muted-foreground">Completions</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{remix.roiImpact}%</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.roiImpact}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-cyan-400">{remix.squadsDeployed.length}</div>
                    <div className="text-xs text-muted-foreground">Squads</div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Submitted by:</span>
                    <div className="font-medium">{remix.submittedBy}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Deployed:</span>
                    <div className="font-medium">{formatDate(remix.deployedAt)}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{text.metrics.culturalReach}:</span>
                    <div className="flex gap-1">
                      {remix.culturalReach.map((culture) => (
                        <Badge key={culture} variant="outline" className="text-xs">
                          {culture}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Components */}
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">Overlays:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {remix.overlays.map((overlay) => (
                        <Badge key={overlay} variant="outline" className="text-xs">
                          {overlay}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground">Badges:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {remix.badgesEarned.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSquadMetrics = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {DEMO_SQUAD_METRICS.map((squad, index) => (
          <motion.div
            key={squad.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-semibold">{squad.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {squad.culturalContext}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {squad.memberCount} members
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">{squad.overlaysCompleted}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.overlaysCompleted}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{squad.replayEngagement}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.replayEngagement}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-yellow-400">{squad.feedbackScore}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{squad.clarityLift}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.avgClarityLift}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{squad.badgeVelocity}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.badgeVelocity}</div>
                  </div>
                  
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <div className="text-lg font-bold text-cyan-400">{squad.memberCount}</div>
                    <div className="text-xs text-muted-foreground">{text.metrics.memberCount}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCoachingLift = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Coaching Lift Analysis</h3>
        
        {selectedRemix ? (
          <div className="space-y-4">
            {selectedRemix.overlays.map((overlay, index) => {
              // Mock overlay-specific metrics
              const metrics = {
                'Trust Velocity (Investor Lens)': {
                  avgClarityLift: '3.4x',
                  feedbackScore: '4.8',
                  badgeUnlockRate: '76%',
                  completionTime: '45min'
                },
                'Dual-Language Navigator': {
                  avgClarityLift: '2.9x',
                  feedbackScore: '4.6',
                  badgeUnlockRate: '68%',
                  completionTime: '35min'
                },
                'Demo Precision Architect': {
                  avgClarityLift: '3.1x',
                  feedbackScore: '4.7',
                  badgeUnlockRate: '72%',
                  completionTime: '40min'
                }
              };
              
              const overlayMetrics = metrics[overlay as keyof typeof metrics] || metrics['Trust Velocity (Investor Lens)'];
              
              return (
                <motion.div
                  key={overlay}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{overlay}</h4>
                      <Badge variant="outline">{overlayMetrics.avgClarityLift}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">{overlayMetrics.avgClarityLift}</div>
                        <div className="text-xs text-muted-foreground">{text.metrics.avgClarityLift}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-400">{overlayMetrics.feedbackScore}</div>
                        <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">{overlayMetrics.badgeUnlockRate}</div>
                        <div className="text-xs text-muted-foreground">Badge Unlock Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-400">{overlayMetrics.completionTime}</div>
                        <div className="text-xs text-muted-foreground">Avg Completion</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">
            Select a remix from the overview to view coaching lift analysis
          </p>
        )}
      </Card>
    </div>
  );

  const renderBadgeVelocity = () => (
    <div className="space-y-6">
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
                  <h4 className="text-lg font-semibold">{badge.badge}</h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {badge.unlockRate} unlock rate
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {badge.avgTimeToUnlock} avg time
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{badge.unlocks.reduce((a, b) => a + b, 0)}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.unlocks}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{badge.avgTimeToUnlock}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.avgTimeToUnlock}</div>
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
                  <div className="text-lg font-bold text-purple-400">{badge.squads.length}</div>
                  <div className="text-xs text-muted-foreground">Active Squads</div>
                </div>
              </div>

              <div>
                <span className="text-sm text-muted-foreground">Squad Performance:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {badge.squads.map((squad, squadIndex) => (
                    <Badge key={squad} variant="outline" className="text-xs">
                      {squad}: {badge.unlocks[squadIndex]} unlocks
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

  const renderSchemaImpact = () => (
    <div className="space-y-6">
      {DEMO_SCHEMA_IMPACT.map((schema, index) => (
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
                </div>
                
                <Badge className={`text-xs ${getEngagementColor(schema.engagement)}`}>
                  {text.status[schema.engagement.toLowerCase() as keyof typeof text.status]} {text.metrics.engagement}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{schema.clarityContribution}x</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.clarityContribution}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{schema.usageFrequency}%</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.usageFrequency}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{schema.feedbackScore}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.feedbackScore}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className={`text-lg font-bold ${getEngagementColor(schema.engagement).split(' ')[0]}`}>
                    {text.status[schema.engagement.toLowerCase() as keyof typeof text.status]}
                  </div>
                  <div className="text-xs text-muted-foreground">{text.metrics.engagement}</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">{schema.culturalAdaptation}</div>
                  <div className="text-xs text-muted-foreground">{text.metrics.culturalAdaptation}</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderExportPanel = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Export Options</h3>
          
          <div className="space-y-3">
            <Button 
              className="w-full justify-start"
              variant="outline"
              onClick={() => onExport('investor-portal', DEMO_REMIX_METRICS)}
            >
              <Download className="w-4 h-4 mr-2" />
              Investor Portal
            </Button>
            <Button 
              className="w-full justify-start"
              variant="outline"
              onClick={() => onExport('founder-console', DEMO_REMIX_METRICS)}
            >
              <Download className="w-4 h-4 mr-2" />
              Founder Coaching Console
            </Button>
            <Button 
              className="w-full justify-start"
              variant="outline"
              onClick={() => onExport('remix-showcase', DEMO_REMIX_METRICS)}
            >
              <Download className="w-4 h-4 mr-2" />
              Remix Showcase
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Alert Configuration</h3>
          
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Badge Unlock Rate &lt; 60%</span>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Send remix refinement prompt to Founder
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Clarity Lift &gt; 3.5x + Badge Unlock Rate &gt; 80%</span>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Highlight remix arc in public showcase
              </p>
            </div>
            
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
            >
              <Settings className="w-3 h-3 mr-1" />
              {text.actions.configure}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{text.title}</h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-3 h-3 mr-1" />
              {text.actions.refresh}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-3 h-3 mr-1" />
              {text.actions.export}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-3 h-3 mr-1" />
              {text.actions.share}
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            {text.tabs.overview}
          </TabsTrigger>
          <TabsTrigger value="squads" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {text.tabs.squads}
          </TabsTrigger>
          <TabsTrigger value="coaching" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            {text.tabs.coaching}
          </TabsTrigger>
          <TabsTrigger value="badges" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            {text.tabs.badges}
          </TabsTrigger>
          <TabsTrigger value="schema" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            {text.tabs.schema}
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            {text.tabs.export}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {renderOverview()}
        </TabsContent>

        <TabsContent value="squads" className="mt-6">
          {renderSquadMetrics()}
        </TabsContent>

        <TabsContent value="coaching" className="mt-6">
          {renderCoachingLift()}
        </TabsContent>

        <TabsContent value="badges" className="mt-6">
          {renderBadgeVelocity()}
        </TabsContent>

        <TabsContent value="schema" className="mt-6">
          {renderSchemaImpact()}
        </TabsContent>

        <TabsContent value="export" className="mt-6">
          {renderExportPanel()}
        </TabsContent>
      </Tabs>
    </div>
  );
}