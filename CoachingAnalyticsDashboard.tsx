import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Brain, 
  Target, 
  Zap,
  Eye,
  MessageSquare,
  Download,
  RefreshCw,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface CoachingInteraction {
  id: string;
  timestamp: number;
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  metricId: string;
  action: 'view' | 'click' | 'export' | 'voice_play' | 'dismiss';
  overlayType: 'hover' | 'sidebar' | 'voiceover' | 'snapshot';
  sessionDuration: number;
  language: 'en' | 'es';
  deviceType: 'desktop' | 'mobile' | 'tablet';
}

interface CoachingEffectiveness {
  metricId: string;
  baselineValue: number;
  postCoachingValue: number;
  improvementPercentage: number;
  timeToImprovement: number; // days
  sustainabilityScore: number; // 0-100
  stakeholderEngagement: number; // 0-100
}

interface CoachingAnalyticsData {
  interactions: CoachingInteraction[];
  effectiveness: CoachingEffectiveness[];
  totalUsers: number;
  activeSessions: number;
  averageEngagementTime: number;
  topPerformingOverlays: string[];
  conversionRates: Record<string, number>;
  userSatisfactionScore: number;
  businessImpactMetrics: {
    revenueImpact: number;
    costSavings: number;
    productivityGain: number;
    retentionImprovement: number;
  };
}

interface CoachingAnalyticsDashboardProps {
  data: CoachingAnalyticsData;
  language: 'en' | 'es';
  timeRange: '7d' | '30d' | '90d' | '1y';
  onTimeRangeChange: (range: '7d' | '30d' | '90d' | '1y') => void;
  onExportReport: (format: 'pdf' | 'csv' | 'xlsx') => void;
  onRefreshData: () => void;
  className?: string;
}

export function CoachingAnalyticsDashboard({
  data,
  language,
  timeRange,
  onTimeRangeChange,
  onExportReport,
  onRefreshData,
  className = ""
}: CoachingAnalyticsDashboardProps) {
  const [selectedStakeholder, setSelectedStakeholder] = useState<'all' | 'CEO' | 'CFO' | 'CHRO' | 'COO'>('all');
  const [selectedModule, setSelectedModule] = useState<'all' | 'ERP' | 'EPM' | 'HCM' | 'CRM'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Calculate derived metrics
  const analyticsInsights = useMemo(() => {
    const filteredInteractions = data.interactions.filter(interaction => {
      const matchesStakeholder = selectedStakeholder === 'all' || interaction.stakeholder === selectedStakeholder;
      const matchesModule = selectedModule === 'all' || interaction.module === selectedModule;
      return matchesStakeholder && matchesModule;
    });

    // Engagement metrics
    const totalInteractions = filteredInteractions.length;
    const uniqueUsers = new Set(filteredInteractions.map(i => `${i.stakeholder}-${i.timestamp}`)).size;
    const averageSessionDuration = filteredInteractions.reduce((sum, i) => sum + i.sessionDuration, 0) / totalInteractions || 0;

    // Stakeholder distribution
    const stakeholderDistribution = ['CEO', 'CFO', 'CHRO', 'COO'].map(stakeholder => ({
      stakeholder,
      count: filteredInteractions.filter(i => i.stakeholder === stakeholder).length,
      engagement: filteredInteractions
        .filter(i => i.stakeholder === stakeholder)
        .reduce((sum, i) => sum + i.sessionDuration, 0) / 
        filteredInteractions.filter(i => i.stakeholder === stakeholder).length || 0
    }));

    // Module performance
    const modulePerformance = ['ERP', 'EPM', 'HCM', 'CRM'].map(module => ({
      module,
      interactions: filteredInteractions.filter(i => i.module === module).length,
      avgDuration: filteredInteractions
        .filter(i => i.module === module)
        .reduce((sum, i) => sum + i.sessionDuration, 0) / 
        filteredInteractions.filter(i => i.module === module).length || 0
    }));

    // Overlay type effectiveness
    const overlayEffectiveness = ['hover', 'sidebar', 'voiceover', 'snapshot'].map(type => ({
      type,
      usage: filteredInteractions.filter(i => i.overlayType === type).length,
      avgEngagement: filteredInteractions
        .filter(i => i.overlayType === type)
        .reduce((sum, i) => sum + i.sessionDuration, 0) / 
        filteredInteractions.filter(i => i.overlayType === type).length || 0
    }));

    // Action distribution
    const actionDistribution = ['view', 'click', 'export', 'voice_play', 'dismiss'].map(action => ({
      action,
      count: filteredInteractions.filter(i => i.action === action).length,
      percentage: (filteredInteractions.filter(i => i.action === action).length / totalInteractions * 100) || 0
    }));

    // Time series data (last 30 days)
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const timeSeriesData = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(thirtyDaysAgo + (i * 24 * 60 * 60 * 1000));
      const dayInteractions = filteredInteractions.filter(interaction => {
        const interactionDate = new Date(interaction.timestamp);
        return interactionDate.toDateString() === date.toDateString();
      });
      
      return {
        date: date.toLocaleDateString(),
        interactions: dayInteractions.length,
        engagement: dayInteractions.reduce((sum, i) => sum + i.sessionDuration, 0) / dayInteractions.length || 0,
        uniqueUsers: new Set(dayInteractions.map(i => `${i.stakeholder}-${i.timestamp}`)).size
      };
    });

    return {
      totalInteractions,
      uniqueUsers,
      averageSessionDuration,
      stakeholderDistribution,
      modulePerformance,
      overlayEffectiveness,
      actionDistribution,
      timeSeriesData
    };
  }, [data.interactions, selectedStakeholder, selectedModule]);

  // Handle refresh
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    onRefreshData();
    setIsRefreshing(false);
  };

  // Format duration
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Get trend indicator
  const getTrendIndicator = (current: number, previous: number) => {
    if (current > previous) return { icon: ArrowUp, color: 'text-green-400', trend: 'up' };
    if (current < previous) return { icon: ArrowDown, color: 'text-red-400', trend: 'down' };
    return { icon: Minus, color: 'text-gray-400', trend: 'stable' };
  };

  // Colors for charts
  const COLORS = {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    gray: '#6b7280'
  };

  const CHART_COLORS = [COLORS.primary, COLORS.secondary, COLORS.success, COLORS.warning, COLORS.info];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {language === 'en' ? 'Coaching Analytics Dashboard' : 'Panel de Analíticas de Coaching'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Track coaching effectiveness and optimize user engagement'
              : 'Rastrea efectividad de coaching y optimiza participación del usuario'
            }
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => onTimeRangeChange(e.target.value as any)}
            className="bg-input border border-border rounded px-3 py-2 text-sm"
          >
            <option value="7d">{language === 'en' ? 'Last 7 days' : 'Últimos 7 días'}</option>
            <option value="30d">{language === 'en' ? 'Last 30 days' : 'Últimos 30 días'}</option>
            <option value="90d">{language === 'en' ? 'Last 90 days' : 'Últimos 90 días'}</option>
            <option value="1y">{language === 'en' ? 'Last year' : 'Último año'}</option>
          </select>
          
          <Button
            variant="outline"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {language === 'en' ? 'Refresh' : 'Actualizar'}
          </Button>
          
          <Button
            onClick={() => onExportReport('pdf')}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {language === 'en' ? 'Export Report' : 'Exportar Reporte'}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                {language === 'en' ? 'Stakeholder' : 'Interesado'}
              </label>
              <select
                value={selectedStakeholder}
                onChange={(e) => setSelectedStakeholder(e.target.value as any)}
                className="bg-input border border-border rounded px-3 py-2 text-sm"
              >
                <option value="all">{language === 'en' ? 'All Stakeholders' : 'Todos los Interesados'}</option>
                <option value="CEO">CEO</option>
                <option value="CFO">CFO</option>
                <option value="CHRO">CHRO</option>
                <option value="COO">COO</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">
                {language === 'en' ? 'Module' : 'Módulo'}
              </label>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value as any)}
                className="bg-input border border-border rounded px-3 py-2 text-sm"
              >
                <option value="all">{language === 'en' ? 'All Modules' : 'Todos los Módulos'}</option>
                <option value="HCM">HCM</option>
                <option value="ERP">ERP</option>
                <option value="EPM">EPM</option>
                <option value="CRM">CRM</option>
              </select>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{data.userSatisfactionScore}%</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Satisfaction' : 'Satisfacción'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{analyticsInsights.totalInteractions}</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Total Interactions' : 'Interacciones Totales'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{analyticsInsights.uniqueUsers}</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Active Users' : 'Usuarios Activos'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-blue-500/10 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-400">
                  {language === 'en' ? 'Revenue Impact' : 'Impacto en Ingresos'}
                </p>
                <p className="text-2xl font-bold text-blue-400">
                  ${data.businessImpactMetrics.revenueImpact.toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+12.5%</span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-400">
                  {language === 'en' ? 'Cost Savings' : 'Ahorros de Costos'}
                </p>
                <p className="text-2xl font-bold text-green-400">
                  ${data.businessImpactMetrics.costSavings.toLocaleString()}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+8.3%</span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-500/10 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-400">
                  {language === 'en' ? 'Productivity Gain' : 'Ganancia de Productividad'}
                </p>
                <p className="text-2xl font-bold text-purple-400">
                  {data.businessImpactMetrics.productivityGain}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+15.2%</span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/10 border-orange-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-400">
                  {language === 'en' ? 'Avg. Engagement' : 'Participación Prom.'}
                </p>
                <p className="text-2xl font-bold text-orange-400">
                  {formatDuration(analyticsInsights.averageSessionDuration)}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+22.1%</span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">
            {language === 'en' ? 'Overview' : 'Resumen'}
          </TabsTrigger>
          <TabsTrigger value="engagement">
            {language === 'en' ? 'Engagement' : 'Participación'}
          </TabsTrigger>
          <TabsTrigger value="effectiveness">
            {language === 'en' ? 'Effectiveness' : 'Efectividad'}
          </TabsTrigger>
          <TabsTrigger value="optimization">
            {language === 'en' ? 'Optimization' : 'Optimización'}
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Interaction Trends */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Interaction Trends' : 'Tendencias de Interacción'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={analyticsInsights.timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="interactions" fill={COLORS.primary} fillOpacity={0.3} stroke={COLORS.primary} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Stakeholder Distribution */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Stakeholder Distribution' : 'Distribución de Interesados'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analyticsInsights.stakeholderDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      label={({stakeholder, count}) => `${stakeholder}: ${count}`}
                    >
                      {analyticsInsights.stakeholderDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Module Performance */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Module Performance' : 'Rendimiento de Módulos'}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsInsights.modulePerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="module" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="interactions" fill={COLORS.primary} />
                  <Bar dataKey="avgDuration" fill={COLORS.secondary} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Overlay Type Effectiveness */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Overlay Type Effectiveness' : 'Efectividad por Tipo de Superposición'}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsInsights.overlayEffectiveness}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="usage" fill={COLORS.info} />
                    <Bar dataKey="avgEngagement" fill={COLORS.success} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Action Distribution */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'User Action Distribution' : 'Distribución de Acciones del Usuario'}
                </h3>
                <div className="space-y-4">
                  {analyticsInsights.actionDistribution.map((action, index) => (
                    <div key={action.action} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
                        />
                        <span className="font-medium capitalize">{action.action}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{action.count}</span>
                        <Badge variant="outline">{action.percentage.toFixed(1)}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Overlays */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Top Performing Overlays' : 'Superposiciones de Mejor Rendimiento'}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.topPerformingOverlays.slice(0, 6).map((overlay, index) => (
                  <div key={overlay} className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        #{index + 1}
                      </Badge>
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{overlay}</h4>
                    <p className="text-xs text-muted-foreground">
                      {Math.round(Math.random() * 100)}% {language === 'en' ? 'effectiveness' : 'efectividad'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Effectiveness Tab */}
        <TabsContent value="effectiveness" className="space-y-6">
          <div className="grid gap-6">
            {/* Coaching Effectiveness Metrics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Coaching Effectiveness Metrics' : 'Métricas de Efectividad de Coaching'}
                </h3>
                <div className="space-y-4">
                  {data.effectiveness.slice(0, 5).map((metric) => (
                    <div key={metric.metricId} className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">{metric.metricId}</h4>
                        <Badge 
                          className={
                            metric.improvementPercentage > 0 
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {metric.improvementPercentage > 0 ? '+' : ''}{metric.improvementPercentage.toFixed(1)}%
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'en' ? 'Baseline' : 'Línea Base'}:
                          </span>
                          <div className="font-medium">{metric.baselineValue.toFixed(1)}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'en' ? 'Current' : 'Actual'}:
                          </span>
                          <div className="font-medium">{metric.postCoachingValue.toFixed(1)}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'en' ? 'Sustainability' : 'Sostenibilidad'}:
                          </span>
                          <div className="font-medium">{metric.sustainabilityScore}/100</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ROI Analysis */}
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-green-400">
                  {language === 'en' ? 'Coaching ROI Analysis' : 'Análisis ROI de Coaching'}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">327%</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Total ROI' : 'ROI Total'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">4.2x</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Cost Multiplier' : 'Multiplicador de Costo'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">45d</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Payback Period' : 'Período de Retorno'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">94%</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Success Rate' : 'Tasa de Éxito'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Optimization Tab */}
        <TabsContent value="optimization" className="space-y-6">
          <div className="grid gap-6">
            {/* Optimization Recommendations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Optimization Recommendations' : 'Recomendaciones de Optimización'}
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-5 h-5 text-blue-400" />
                      <h4 className="font-medium text-blue-400">
                        {language === 'en' ? 'Increase Sidebar Usage' : 'Aumentar Uso de Barra Lateral'}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Sidebar overlays show 40% higher engagement. Consider promoting sidebar mode for strategic insights.'
                        : 'Superposiciones de barra lateral muestran 40% mayor participación. Considera promover modo barra lateral para insights estratégicos.'
                      }
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-green-400" />
                      <h4 className="font-medium text-green-400">
                        {language === 'en' ? 'Optimize Voice Content' : 'Optimizar Contenido de Voz'}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Voice synthesis shows 60% completion rate. Add more voiceover scripts for high-impact metrics.'
                        : 'Síntesis de voz muestra 60% tasa de finalización. Agrega más scripts de narración para métricas de alto impacto.'
                      }
                    </p>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-orange-400" />
                      <h4 className="font-medium text-orange-400">
                        {language === 'en' ? 'Reduce Dismissal Rate' : 'Reducir Tasa de Descarte'}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? '18% of overlays are dismissed without engagement. Review content relevance and timing.'
                        : '18% de superposiciones son descartadas sin participación. Revisa relevancia de contenido y temporización.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* A/B Testing Results */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'A/B Testing Results' : 'Resultados de Pruebas A/B'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        {language === 'en' ? 'Overlay Trigger Timing' : 'Temporización de Activación'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Immediate vs 3-second delay' : 'Inmediato vs retraso de 3 segundos'}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">+23%</div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Engagement' : 'Participación'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        {language === 'en' ? 'Stakeholder Personalization' : 'Personalización por Interesado'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Generic vs role-specific content' : 'Contenido genérico vs específico del rol'}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">+35%</div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Relevance' : 'Relevancia'}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Utility hook for analytics data management - Lazy initialization
export function useCoachingAnalytics(language: 'en' | 'es') {
  const [analyticsData, setAnalyticsData] = useState<CoachingAnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Simulate lightweight API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate optimized mock data (smaller dataset)
      const mockData: CoachingAnalyticsData = {
        interactions: Array.from({ length: 100 }, (_, i) => ({
          id: `interaction-${i}`,
          timestamp: Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000, // Last 7 days only
          stakeholder: ['CEO', 'CFO', 'CHRO', 'COO'][Math.floor(Math.random() * 4)] as any,
          module: ['ERP', 'EPM', 'HCM', 'CRM'][Math.floor(Math.random() * 4)] as any,
          metricId: `metric-${Math.floor(Math.random() * 10)}`, // Reduced from 20 to 10
          action: ['view', 'click', 'export', 'voice_play', 'dismiss'][Math.floor(Math.random() * 5)] as any,
          overlayType: ['hover', 'sidebar', 'voiceover', 'snapshot'][Math.floor(Math.random() * 4)] as any,
          sessionDuration: Math.random() * 600,
          language: language as 'en' | 'es',
          deviceType: ['desktop', 'mobile', 'tablet'][Math.floor(Math.random() * 3)] as any
        })),
        effectiveness: Array.from({ length: 5 }, (_, i) => ({ // Reduced from 10 to 5
          metricId: `metric-${i}`,
          baselineValue: 50 + Math.random() * 30,
          postCoachingValue: 60 + Math.random() * 35,
          improvementPercentage: -10 + Math.random() * 40,
          timeToImprovement: Math.floor(Math.random() * 30),
          sustainabilityScore: Math.floor(Math.random() * 100),
          stakeholderEngagement: Math.floor(Math.random() * 100)
        })),
        totalUsers: 245,
        activeSessions: 67,
        averageEngagementTime: 240,
        topPerformingOverlays: ['forecast_accuracy', 'employee_engagement', 'cash_flow_velocity', 'operational_efficiency'],
        conversionRates: {
          'view_to_action': 0.23,
          'coaching_to_improvement': 0.78,
          'engagement_to_retention': 0.92
        },
        userSatisfactionScore: 87,
        businessImpactMetrics: {
          revenueImpact: 1200000,
          costSavings: 450000,
          productivityGain: 18.5,
          retentionImprovement: 23.2
        }
      };
      
      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
      // Set empty data on error
      setAnalyticsData({
        interactions: [],
        effectiveness: [],
        totalUsers: 0,
        activeSessions: 0,
        averageEngagementTime: 0,
        topPerformingOverlays: [],
        conversionRates: {
          'view_to_action': 0,
          'coaching_to_improvement': 0,
          'engagement_to_retention': 0
        },
        userSatisfactionScore: 0,
        businessImpactMetrics: {
          revenueImpact: 0,
          costSavings: 0,
          productivityGain: 0,
          retentionImprovement: 0
        }
      });
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, [language]);

  // Only initialize when explicitly called
  const initializeData = useCallback(() => {
    if (!isInitialized && !isLoading) {
      refreshData();
    }
  }, [refreshData, isInitialized, isLoading]);

  return {
    data: analyticsData,
    isLoading,
    refreshData,
    initializeData,
    isInitialized
  };
}