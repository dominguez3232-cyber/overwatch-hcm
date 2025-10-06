import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  TrendingUp,
  BarChart3,
  Activity,
  Users,
  Target,
  Lightbulb,
  Download,
  Share2,
  Filter,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';
import MetricCard from './MetricCard';

interface InvestorAnalyticsDashboardProps {
  language?: 'en' | 'es';
  onExportFeedback?: (type: string) => void;
  onConfigureAlert?: (alert: any) => void;
}

interface TrendData {
  investorTier: string;
  avgClarityRating: string;
  topOverlay: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

interface BadgeResonanceData {
  badge: string;
  resonanceScore: { [key: string]: number };
  trend: 'up' | 'down' | 'stable';
}

interface SchemaConvictionData {
  branch: string;
  avgConviction: string;
  feedbackHighlights: string[];
  trend: 'up' | 'down' | 'stable';
}

interface RecommendationData {
  investor: string;
  suggestion: string;
  priority: 'high' | 'medium' | 'low';
  status: 'new' | 'in-progress' | 'completed';
}

const DEMO_CLARITY_TRENDS: TrendData[] = [
  {
    investorTier: 'LatAm VC',
    avgClarityRating: '4.6',
    topOverlay: 'Trust Velocity (Investor Lens)',
    trend: 'up',
    change: 12
  },
  {
    investorTier: 'US Angel',
    avgClarityRating: '4.3',
    topOverlay: 'Dual-Language Navigator',
    trend: 'up',
    change: 8
  },
  {
    investorTier: 'Global Fund',
    avgClarityRating: '4.5',
    topOverlay: 'Demo Precision Architect',
    trend: 'stable',
    change: 2
  },
  {
    investorTier: 'Strategic Partner',
    avgClarityRating: '4.2',
    topOverlay: 'Cultural Force Multiplier',
    trend: 'down',
    change: -3
  }
];

const DEMO_BADGE_RESONANCE: BadgeResonanceData[] = [
  {
    badge: '🧩 Trust Velocity Master',
    resonanceScore: { 'LatAm VC': 4.8, 'US Angel': 4.5, 'Global Fund': 4.6, 'Strategic Partner': 4.4 },
    trend: 'up'
  },
  {
    badge: '🌐 Dual-Language Navigator',
    resonanceScore: { 'LatAm VC': 4.7, 'US Angel': 4.2, 'Global Fund': 4.4, 'Strategic Partner': 4.6 },
    trend: 'up'
  },
  {
    badge: '🎯 Demo Precision Architect',
    resonanceScore: { 'LatAm VC': 4.3, 'US Angel': 4.8, 'Global Fund': 4.7, 'Strategic Partner': 4.5 },
    trend: 'stable'
  }
];

const DEMO_SCHEMA_CONVICTION: SchemaConvictionData[] = [
  {
    branch: 'finance.trust-velocity',
    avgConviction: '4.6',
    feedbackHighlights: ['Clear logic', 'Investor-relevant', 'Traceable'],
    trend: 'up'
  },
  {
    branch: 'badge.dual-language',
    avgConviction: '4.4',
    feedbackHighlights: ['Strong bilingual delivery', 'Replay clarity', 'Badge linkage'],
    trend: 'up'
  },
  {
    branch: 'demo.pitch-alpha',
    avgConviction: '4.7',
    feedbackHighlights: ['Demo excellence', 'Pitch mastery', 'Clear progression'],
    trend: 'up'
  }
];

const DEMO_RECOMMENDATIONS: RecommendationData[] = [
  {
    investor: 'LatAm VC',
    suggestion: 'Remix Trust Velocity arc for Ops Lead role with schema trace emphasis',
    priority: 'high',
    status: 'new'
  },
  {
    investor: 'US Angel',
    suggestion: 'Add coaching overlay to Dual-Language Navigator for demo walkthrough',
    priority: 'medium',
    status: 'in-progress'
  },
  {
    investor: 'Global Fund',
    suggestion: 'Enhance Demo Precision Architect with investor-specific metrics',
    priority: 'high',
    status: 'new'
  },
  {
    investor: 'Strategic Partner',
    suggestion: 'Create cultural intelligence overlay for partnership frameworks',
    priority: 'low',
    status: 'completed'
  }
];

export default function InvestorAnalyticsDashboard({
  language = 'en',
  onExportFeedback,
  onConfigureAlert
}: InvestorAnalyticsDashboardProps) {
  const [activeTab, setActiveTab] = useState('trends');
  const [selectedInvestor, setSelectedInvestor] = useState<string>('all');

  const t = {
    en: {
      investorAnalytics: 'Investor Analytics Dashboard',
      clarityTrends: 'Coaching Clarity Trends',
      badgeResonance: 'Badge Resonance Heatmap',
      schemaConviction: 'Schema Conviction Scores',
      recommendations: 'Remix Recommendations',
      exportAlerts: 'Export & Alerts',
      avgClarityRating: 'Avg Clarity Rating',
      topOverlay: 'Top Overlay',
      change: 'Change',
      resonanceScore: 'Resonance Score',
      conviction: 'Conviction',
      feedbackHighlights: 'Feedback Highlights',
      priority: 'Priority',
      status: 'Status',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      new: 'New',
      inProgress: 'In Progress',
      completed: 'Completed',
      exportOptions: 'Export Options',
      alertConfig: 'Alert Configuration',
      badgeResonanceLow: 'Badge Resonance < 4.0',
      clarityRatingLow: 'Clarity Rating < 4.0',
      sendRemixPrompt: 'Send remix refinement prompt to Founder',
      founderCoachingConsole: 'Founder Coaching Console',
      remixComposer: 'Remix Composer',
      investorPortal: 'Investor Portal',
      all: 'All Investors',
      totalFeedback: 'Total Feedback',
      avgOverallRating: 'Avg Overall Rating',
      activeRemixes: 'Active Remixes',
      pendingActions: 'Pending Actions'
    },
    es: {
      investorAnalytics: 'Dashboard de Analíticas del Inversor',
      clarityTrends: 'Tendencias de Claridad del Coaching',
      badgeResonance: 'Mapa de Calor de Resonancia de Insignias',
      schemaConviction: 'Puntuaciones de Convicción de Esquemas',
      recommendations: 'Recomendaciones de Remix',
      exportAlerts: 'Exportar y Alertas',
      avgClarityRating: 'Calificación Promedio de Claridad',
      topOverlay: 'Overlay Principal',
      change: 'Cambio',
      resonanceScore: 'Puntuación de Resonancia',
      conviction: 'Convicción',
      feedbackHighlights: 'Aspectos Destacados del Feedback',
      priority: 'Prioridad',
      status: 'Estado',
      high: 'Alto',
      medium: 'Medio',
      low: 'Bajo',
      new: 'Nuevo',
      inProgress: 'En Progreso',
      completed: 'Completado',
      exportOptions: 'Opciones de Exportación',
      alertConfig: 'Configuración de Alertas',
      badgeResonanceLow: 'Resonancia de Insignias < 4.0',
      clarityRatingLow: 'Calificación de Claridad < 4.0',
      sendRemixPrompt: 'Enviar solicitud de refinamiento de remix al Fundador',
      founderCoachingConsole: 'Consola de Coaching del Fundador',
      remixComposer: 'Compositor de Remix',
      investorPortal: 'Portal del Inversor',
      all: 'Todos los Inversores',
      totalFeedback: 'Feedback Total',
      avgOverallRating: 'Calificación Promedio General',
      activeRemixes: 'Remixes Activos',
      pendingActions: 'Acciones Pendientes'
    }
  };

  const text = t[language];

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'low': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'in-progress': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  // Calculate summary metrics
  const totalFeedbackCount = 247;
  const avgOverallRating = (
    DEMO_CLARITY_TRENDS.reduce((sum, trend) => sum + parseFloat(trend.avgClarityRating), 0) / 
    DEMO_CLARITY_TRENDS.length
  ).toFixed(1);
  const activeRemixCount = 12;
  const pendingActionCount = DEMO_RECOMMENDATIONS.filter(r => r.status !== 'completed').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <BarChart3 className="w-6 h-6" />
              {text.investorAnalytics}
            </h2>
            <p className="text-muted-foreground mt-1">
              Comprehensive analytics and insights from investor feedback across all remix arcs
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <Filter className="w-3 h-3 mr-1" />
              Filter
            </Button>
            <Button size="sm" variant="outline">
              <RefreshCw className="w-3 h-3 mr-1" />
              Refresh
            </Button>
            <Button size="sm" variant="outline">
              <Download className="w-3 h-3 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title={text.totalFeedback}
          value={totalFeedbackCount.toString()}
          change={{ value: 23, trend: 'up', period: 'this month' }}
          icon={<Users className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title={text.avgOverallRating}
          value={`${avgOverallRating}/5`}
          change={{ value: 0.3, trend: 'up', period: 'vs last month' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title={text.activeRemixes}
          value={activeRemixCount.toString()}
          change={{ value: 2, trend: 'up', period: 'new this week' }}
          icon={<Zap className="w-5 h-5" />}
          color="warning"
        />
        <MetricCard
          title={text.pendingActions}
          value={pendingActionCount.toString()}
          change={{ value: 1, trend: 'down', period: 'vs last week' }}
          icon={<AlertTriangle className="w-5 h-5" />}
          color="error"
        />
      </div>

      {/* Main Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            {text.clarityTrends}
          </TabsTrigger>
          <TabsTrigger value="badges" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            {text.badgeResonance}
          </TabsTrigger>
          <TabsTrigger value="schema" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            {text.schemaConviction}
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            {text.recommendations}
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            {text.exportAlerts}
          </TabsTrigger>
        </TabsList>

        {/* Clarity Trends */}
        <TabsContent value="trends" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{text.clarityTrends}</h3>
            
            <div className="space-y-4">
              {DEMO_CLARITY_TRENDS.map((trend) => (
                <div key={trend.investorTier} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">{trend.investorTier}</h4>
                        {getTrendIcon(trend.trend)}
                        <Badge variant="outline" className={`text-xs ${
                          trend.trend === 'up' ? 'text-green-400' : 
                          trend.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {trend.change > 0 ? '+' : ''}{trend.change}%
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {text.topOverlay}: {trend.topOverlay}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{trend.avgClarityRating}</div>
                      <div className="text-xs text-muted-foreground">{text.avgClarityRating}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Badge Resonance Heatmap */}
        <TabsContent value="badges" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{text.badgeResonance}</h3>
            
            <div className="space-y-4">
              {DEMO_BADGE_RESONANCE.map((badge) => (
                <div key={badge.badge} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{badge.badge}</span>
                      {getTrendIcon(badge.trend)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(badge.resonanceScore).map(([investor, score]) => (
                      <div key={investor} className="text-center p-2 bg-secondary/30 rounded">
                        <div className="text-sm font-medium">{investor}</div>
                        <div className={`text-lg font-bold ${
                          score >= 4.5 ? 'text-green-400' : 
                          score >= 4.0 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {score.toFixed(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Schema Conviction */}
        <TabsContent value="schema" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{text.schemaConviction}</h3>
            
            <div className="space-y-4">
              {DEMO_SCHEMA_CONVICTION.map((schema) => (
                <div key={schema.branch} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <code className="font-mono text-sm bg-secondary px-2 py-1 rounded">
                        {schema.branch}
                      </code>
                      {getTrendIcon(schema.trend)}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{schema.avgConviction}</div>
                      <div className="text-xs text-muted-foreground">{text.conviction}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{text.feedbackHighlights}</div>
                    <div className="flex flex-wrap gap-1">
                      {schema.feedbackHighlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Recommendations */}
        <TabsContent value="recommendations" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{text.recommendations}</h3>
            
            <div className="space-y-4">
              {DEMO_RECOMMENDATIONS.map((rec, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{rec.investor}</span>
                        <Badge className={`text-xs ${getPriorityColor(rec.priority)}`}>
                          {rec.priority}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(rec.status)}`}>
                          {rec.status === 'in-progress' ? text.inProgress : 
                           rec.status === 'completed' ? text.completed : text.new}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.suggestion}</p>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <CheckCircle className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Export & Alerts */}
        <TabsContent value="export" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.exportOptions}</h3>
              
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => onExportFeedback?.('founder-console')}
                >
                  {text.founderCoachingConsole}
                </Button>
                <Button 
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => onExportFeedback?.('remix-composer')}
                >
                  {text.remixComposer}
                </Button>
                <Button 
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => onExportFeedback?.('investor-portal')}
                >
                  {text.investorPortal}
                </Button>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.alertConfig}</h3>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{text.badgeResonanceLow}</span>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {text.sendRemixPrompt}
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{text.clarityRatingLow}</span>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Trigger coaching review session
                  </p>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onConfigureAlert?.({})}
                >
                  Configure New Alert
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}