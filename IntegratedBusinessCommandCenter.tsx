import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Users, DollarSign, TrendingUp, Calendar, 
  AlertTriangle, CheckCircle, Clock, Zap,
  BarChart3, PieChart, Activity, Target,
  MessageSquare, Phone, Mail, FileText,
  Settings, RefreshCw, Search, Filter,
  ArrowUp, ArrowDown, Minus
} from 'lucide-react';

interface BusinessData {
  hcm: {
    activeEmployees: number;
    pendingOnboarding: number;
    performanceReviews: number;
    complianceAlerts: number;
    avgEngagement: number;
    turnoverRate: number;
  };
  erp: {
    cashFlow: number;
    monthlyRevenue: number;
    operatingExpenses: number;
    profitMargin: number;
    pendingInvoices: number;
    budgetVariance: number;
  };
  epm: {
    kpiPerformance: number;
    forecastAccuracy: number;
    projectsOnTrack: number;
    riskFactors: number;
    strategicGoals: number;
    quarterlyProgress: number;
  };
  crm: {
    activePipeline: number;
    conversionRate: number;
    customerSatisfaction: number;
    newLeads: number;
    closedDeals: number;
    followUpTasks: number;
  };
}

interface IntegratedBusinessCommandCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

export const IntegratedBusinessCommandCenter = React.memo(function IntegratedBusinessCommandCenter({ 
  language, 
  currentMode, 
  onNavigate 
}: IntegratedBusinessCommandCenterProps) {
  // Memoized initial data to prevent re-creation on every render
  const initialData = useMemo<BusinessData>(() => ({
    hcm: {
      activeEmployees: 127,
      pendingOnboarding: 3,
      performanceReviews: 8,
      complianceAlerts: 2,
      avgEngagement: 87,
      turnoverRate: 8.2
    },
    erp: {
      cashFlow: 2450000,
      monthlyRevenue: 890000,
      operatingExpenses: 650000,
      profitMargin: 27.8,
      pendingInvoices: 12,
      budgetVariance: -5.2
    },
    epm: {
      kpiPerformance: 92,
      forecastAccuracy: 94,
      projectsOnTrack: 85,
      riskFactors: 3,
      strategicGoals: 78,
      quarterlyProgress: 82
    },
    crm: {
      activePipeline: 3200000,
      conversionRate: 24.5,
      customerSatisfaction: 91,
      newLeads: 47,
      closedDeals: 8,
      followUpTasks: 15
    }
  }), []);

  const [data, setData] = useState<BusinessData>(initialData);
  const [activeSystem, setActiveSystem] = useState<'overview' | 'hcm' | 'erp' | 'epm' | 'crm'>('overview');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'es-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }, [language]);

  const getStatusColor = useCallback((value: number, threshold: number, reverse: boolean = false) => {
    if (reverse) {
      return value <= threshold ? 'text-green-400' : 'text-red-400';
    }
    return value >= threshold ? 'text-green-400' : value >= threshold * 0.8 ? 'text-yellow-400' : 'text-red-400';
  }, []);

  const getTrendIcon = useCallback((value: number) => {
    if (value > 0) return <ArrowUp className="w-4 h-4 text-green-400" />;
    if (value < 0) return <ArrowDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              {language === 'en' ? 'Business Command Center' : 'Centro de Comando Empresarial'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Unified operations dashboard powered by OVERWATCH³ intelligence'
                : 'Panel de operaciones unificado impulsado por inteligencia OVERWATCH³'
              }
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            {language === 'en' ? 'Sync' : 'Sincronizar'}
          </Button>
          <Button
            onClick={() => onNavigate('dashboard')}
            variant="outline"
            size="sm"
          >
            {language === 'en' ? 'Advanced Analytics' : 'Analíticas Avanzadas'}
          </Button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Active Employees' : 'Empleados Activos'}
                </p>
                <p className="text-2xl font-bold">{data.hcm.activeEmployees}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Monthly Revenue' : 'Ingresos Mensuales'}
                </p>
                <p className="text-2xl font-bold">{formatCurrency(data.erp.monthlyRevenue)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'KPI Performance' : 'Rendimiento KPI'}
                </p>
                <p className="text-2xl font-bold">{data.epm.kpiPerformance}%</p>
              </div>
              <Target className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Pipeline Value' : 'Valor Pipeline'}
                </p>
                <p className="text-2xl font-bold">{formatCurrency(data.crm.activePipeline)}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Tabs */}
      <Tabs value={activeSystem} onValueChange={(value: any) => setActiveSystem(value)} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-secondary">
          <TabsTrigger value="overview">
            {language === 'en' ? 'Overview' : 'Resumen'}
          </TabsTrigger>
          <TabsTrigger value="hcm">
            {language === 'en' ? 'People' : 'Personas'}
          </TabsTrigger>
          <TabsTrigger value="erp">
            {language === 'en' ? 'Finance' : 'Finanzas'}
          </TabsTrigger>
          <TabsTrigger value="epm">
            {language === 'en' ? 'Performance' : 'Rendimiento'}
          </TabsTrigger>
          <TabsTrigger value="crm">
            {language === 'en' ? 'Sales' : 'Ventas'}
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Real-time Alerts */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  {language === 'en' ? 'Priority Alerts' : 'Alertas Prioritarias'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">
                      {language === 'en' ? '2 Compliance alerts in HCM' : '2 alertas de cumplimiento en HCM'}
                    </span>
                  </div>
                  <Button
                    onClick={() => onNavigate('human-capital-strategy')}
                    size="sm"
                    variant="ghost"
                  >
                    {language === 'en' ? 'View' : 'Ver'}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">
                      {language === 'en' ? 'Budget variance -5.2%' : 'Varianza presupuesto -5.2%'}
                    </span>
                  </div>
                  <Button
                    onClick={() => onNavigate('financial-reconciliation')}
                    size="sm"
                    variant="ghost"
                  >
                    {language === 'en' ? 'Review' : 'Revisar'}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">
                      {language === 'en' ? '15 follow-up tasks due today' : '15 tareas de seguimiento vencen hoy'}
                    </span>
                  </div>
                  <Button
                    onClick={() => onNavigate('account-opportunity-mapping')}
                    size="sm"
                    variant="ghost"
                  >
                    {language === 'en' ? 'Complete' : 'Completar'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  {language === 'en' ? 'System Health' : 'Salud del Sistema'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>HCM Integration</span>
                    <span className="text-green-400">99.8%</span>
                  </div>
                  <Progress value={99.8} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ERP Sync</span>
                    <span className="text-green-400">98.5%</span>
                  </div>
                  <Progress value={98.5} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>EPM Analytics</span>
                    <span className="text-green-400">99.2%</span>
                  </div>
                  <Progress value={99.2} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CRM Pipeline</span>
                    <span className="text-yellow-400">95.1%</span>
                  </div>
                  <Progress value={95.1} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card border-border lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  {language === 'en' ? 'Quick Actions' : 'Acciones Rápidas'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button
                    onClick={() => onNavigate('employee-performance')}
                    variant="outline"
                    className="h-20 flex flex-col gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span className="text-xs">
                      {language === 'en' ? 'Review Team' : 'Revisar Equipo'}
                    </span>
                  </Button>

                  <Button
                    onClick={() => onNavigate('roi-calculator')}
                    variant="outline"
                    className="h-20 flex flex-col gap-2"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs">
                      {language === 'en' ? 'Run Analysis' : 'Ejecutar Análisis'}
                    </span>
                  </Button>

                  <Button
                    onClick={() => onNavigate('strategic-discovery-sales')}
                    variant="outline"
                    className="h-20 flex flex-col gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-xs">
                      {language === 'en' ? 'Sales Pipeline' : 'Pipeline Ventas'}
                    </span>
                  </Button>

                  <Button
                    onClick={() => onNavigate('roadmap')}
                    variant="outline"
                    className="h-20 flex flex-col gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs">
                      {language === 'en' ? 'Plan Projects' : 'Planificar Proyectos'}
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* HCM Tab */}
        <TabsContent value="hcm">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-blue-400">
                  {language === 'en' ? 'Workforce Overview' : 'Resumen Fuerza Laboral'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Active Employees' : 'Empleados Activos'}</span>
                  <Badge variant="secondary">{data.hcm.activeEmployees}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Pending Onboarding' : 'Incorporación Pendiente'}</span>
                  <Badge variant="outline">{data.hcm.pendingOnboarding}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Performance Reviews' : 'Evaluaciones Desempeño'}</span>
                  <Badge variant="secondary">{data.hcm.performanceReviews}</Badge>
                </div>
                <Button
                  onClick={() => onNavigate('human-capital-strategy')}
                  className="w-full"
                  size="sm"
                >
                  {language === 'en' ? 'Open HCM Center' : 'Abrir Centro HCM'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-green-400">
                  {language === 'en' ? 'Engagement Metrics' : 'Métricas Compromiso'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === 'en' ? 'Avg Engagement' : 'Compromiso Promedio'}</span>
                    <span className={getStatusColor(data.hcm.avgEngagement, 80)}>
                      {data.hcm.avgEngagement}%
                    </span>
                  </div>
                  <Progress value={data.hcm.avgEngagement} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === 'en' ? 'Turnover Rate' : 'Tasa Rotación'}</span>
                    <span className={getStatusColor(data.hcm.turnoverRate, 10, true)}>
                      {data.hcm.turnoverRate}%
                    </span>
                  </div>
                  <Progress value={data.hcm.turnoverRate} className="h-2" />
                </div>

                <Button
                  onClick={() => onNavigate('employee-performance')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'View Details' : 'Ver Detalles'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-red-400">
                  {language === 'en' ? 'Compliance Status' : 'Estado Cumplimiento'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-sm">
                    {data.hcm.complianceAlerts} {language === 'en' ? 'active alerts' : 'alertas activas'}
                  </span>
                </div>
                
                <Button
                  onClick={() => onNavigate('privacy-security-compliance')}
                  className="w-full"
                  size="sm"
                  variant="destructive"
                >
                  {language === 'en' ? 'Review Alerts' : 'Revisar Alertas'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ERP Tab */}
        <TabsContent value="erp">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-green-400">
                  {language === 'en' ? 'Financial Health' : 'Salud Financiera'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Cash Flow' : 'Flujo de Caja'}</span>
                  <span className="font-bold text-green-400">
                    {formatCurrency(data.erp.cashFlow)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Profit Margin' : 'Margen Beneficio'}</span>
                  <span className={getStatusColor(data.erp.profitMargin, 20)}>
                    {data.erp.profitMargin}%
                  </span>
                </div>
                <Button
                  onClick={() => onNavigate('financial-reconciliation')}
                  className="w-full"
                  size="sm"
                >
                  {language === 'en' ? 'Financial Center' : 'Centro Financiero'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  {language === 'en' ? 'Budget Tracking' : 'Seguimiento Presupuesto'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Budget Variance' : 'Varianza Presupuesto'}</span>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(data.erp.budgetVariance)}
                    <span className={getStatusColor(Math.abs(data.erp.budgetVariance), 5, true)}>
                      {data.erp.budgetVariance}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Pending Invoices' : 'Facturas Pendientes'}</span>
                  <Badge variant="outline">{data.erp.pendingInvoices}</Badge>
                </div>
                <Button
                  onClick={() => onNavigate('pl-risk-mitigation')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'Risk Analysis' : 'Análisis Riesgos'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-blue-400">
                  {language === 'en' ? 'Revenue Metrics' : 'Métricas Ingresos'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(data.erp.monthlyRevenue)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Monthly Revenue' : 'Ingresos Mensuales'}
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('roi-calculator')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'ROI Calculator' : 'Calculadora ROI'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* EPM Tab */}
        <TabsContent value="epm">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-purple-400">
                  {language === 'en' ? 'KPI Dashboard' : 'Panel KPI'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === 'en' ? 'Overall Performance' : 'Rendimiento General'}</span>
                    <span className={getStatusColor(data.epm.kpiPerformance, 85)}>
                      {data.epm.kpiPerformance}%
                    </span>
                  </div>
                  <Progress value={data.epm.kpiPerformance} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === 'en' ? 'Forecast Accuracy' : 'Precisión Pronóstico'}</span>
                    <span className={getStatusColor(data.epm.forecastAccuracy, 90)}>
                      {data.epm.forecastAccuracy}%
                    </span>
                  </div>
                  <Progress value={data.epm.forecastAccuracy} className="h-2" />
                </div>

                <Button
                  onClick={() => onNavigate('assessment')}
                  className="w-full"
                  size="sm"
                >
                  {language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-orange-400">
                  {language === 'en' ? 'Project Status' : 'Estado Proyectos'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Projects On Track' : 'Proyectos en Marcha'}</span>
                  <span className={getStatusColor(data.epm.projectsOnTrack, 80)}>
                    {data.epm.projectsOnTrack}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Risk Factors' : 'Factores Riesgo'}</span>
                  <Badge variant={data.epm.riskFactors > 5 ? "destructive" : "secondary"}>
                    {data.epm.riskFactors}
                  </Badge>
                </div>
                <Button
                  onClick={() => onNavigate('performance-assessment')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'Performance Review' : 'Revisión Rendimiento'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-green-400">
                  {language === 'en' ? 'Strategic Goals' : 'Objetivos Estratégicos'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === 'en' ? 'Quarterly Progress' : 'Progreso Trimestral'}</span>
                    <span className={getStatusColor(data.epm.quarterlyProgress, 75)}>
                      {data.epm.quarterlyProgress}%
                    </span>
                  </div>
                  <Progress value={data.epm.quarterlyProgress} className="h-2" />
                </div>
                <Button
                  onClick={() => onNavigate('strategic-advisory-engine')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'Advisory Engine' : 'Motor Asesor'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* CRM Tab */}
        <TabsContent value="crm">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-green-400">
                  {language === 'en' ? 'Sales Pipeline' : 'Pipeline Ventas'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(data.crm.activePipeline)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Active Pipeline' : 'Pipeline Activo'}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Conversion Rate' : 'Tasa Conversión'}</span>
                  <span className={getStatusColor(data.crm.conversionRate, 20)}>
                    {data.crm.conversionRate}%
                  </span>
                </div>
                <Button
                  onClick={() => onNavigate('strategic-discovery-sales')}
                  className="w-full"
                  size="sm"
                >
                  {language === 'en' ? 'Sales Center' : 'Centro Ventas'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-blue-400">
                  {language === 'en' ? 'Customer Success' : 'Éxito Cliente'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Satisfaction Score' : 'Puntuación Satisfacción'}</span>
                  <span className={getStatusColor(data.crm.customerSatisfaction, 85)}>
                    {data.crm.customerSatisfaction}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'New Leads' : 'Nuevos Leads'}</span>
                  <Badge variant="secondary">{data.crm.newLeads}</Badge>
                </div>
                <Button
                  onClick={() => onNavigate('account-opportunity-mapping')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'Account Mapping' : 'Mapeo Cuentas'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-orange-400">
                  {language === 'en' ? 'Action Items' : 'Elementos Acción'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Follow-up Tasks' : 'Tareas Seguimiento'}</span>
                  <Badge variant={data.crm.followUpTasks > 20 ? "destructive" : "secondary"}>
                    {data.crm.followUpTasks}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Closed Deals' : 'Tratos Cerrados'}</span>
                  <Badge variant="secondary">{data.crm.closedDeals}</Badge>
                </div>
                <Button
                  onClick={() => onNavigate('founder-persona-sales')}
                  className="w-full"
                  size="sm"
                  variant="outline"
                >
                  {language === 'en' ? 'Sales Strategy' : 'Estrategia Ventas'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
});