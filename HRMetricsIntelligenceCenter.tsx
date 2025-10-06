import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, DollarSign, Users, Clock, Target, BarChart3, 
  Activity, AlertTriangle, CheckCircle, Settings, Calculator,
  Brain, Eye, Star, Award, Shield, Zap, Building, Factory,
  PieChart, LineChart, ArrowUp, ArrowDown, Minus, Plus,
  FileText, Download, RefreshCw, Filter, Search, Calendar,
  UserCheck, UserX, UserPlus, Briefcase, Home, Heart,
  GraduationCap, MapPin, ThumbsUp, TrendingDown
} from 'lucide-react';

interface HRMetricsIntelligenceCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type MetricCategory = 'direct' | 'indirect';
type MetricTrend = 'up' | 'down' | 'stable';
type Industry = 'manufacturing' | 'professional-services' | 'technology' | 'healthcare' | 'retail';

interface HRMetric {
  id: string;
  name: string;
  nameEs: string;
  category: MetricCategory;
  currentValue: number;
  targetValue: number;
  previousValue: number;
  trend: MetricTrend;
  unit: string;
  description: string;
  descriptionEs: string;
  hrService: string;
  hrServiceEs: string;
  impact: 'high' | 'medium' | 'low';
  icon: any;
  color: string;
  benchmarkValue: number;
}

export function HRMetricsIntelligenceCenter({ language, currentMode, onNavigate }: HRMetricsIntelligenceCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'direct-metrics' | 'indirect-metrics' | 'roi-analysis' | 'benchmarking' | 'predictive-insights' | 'action-center'>('overview');
  const [selectedCategory, setSelectedCategory] = useState<MetricCategory>('direct');
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('manufacturing');
  const [timeframe, setTimeframe] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      directMetrics: "Direct Metrics",
      indirectMetrics: "Indirect Metrics", 
      roiAnalysis: "ROI Analysis",
      benchmarking: "Benchmarking",
      predictiveInsights: "Predictive Insights",
      actionCenter: "Action Center",
      
      // Content
      title: "HR Metrics Intelligence Center",
      subtitle: "Transform HR data into strategic business intelligence with direct and indirect impact measurement",
      
      // Categories
      direct: "Direct Impact",
      indirect: "Indirect Impact",
      
      // Metrics
      revenuePerEmployee: "Revenue per Employee/FTE",
      profitPerEmployee: "Profit per Employee/FTE", 
      costToOPL: "Cost to Optimum Productivity Level",
      overtime: "Overtime per Employee",
      laborCost: "Labor Cost per Employee/FTE",
      laborCostPercentage: "Labor Cost % of Revenue",
      absenceRate: "Absence Rate",
      trainingExpenses: "Training Expenses/Efficiency",
      turnoverRate: "Turnover Rate",
      costOfAbsenteeism: "Cost of Absenteeism/Turnover",
      hrRatio: "HR to Employee Ratio",
      averageAge: "Average Age/Length of Service",
      averageDistance: "Average Distance from Home",
      engagementRate: "Engagement/Satisfaction Rate",
      salaryHike: "Salary Hike Since Last Year",
      timeToFill: "Time to Fill/Hire",
      firstYearTurnover: "First-Year Turnover Rate",
      hiringManagerSat: "Hiring Manager Satisfaction",
      applicantsPerOpening: "Applicants per Opening",
      offerAcceptance: "Offer Acceptance Rate",
      applicationCompletion: "Application Completion Rate",
      
      // Industries
      manufacturing: "Manufacturing",
      professionalServices: "Professional Services", 
      technology: "Technology",
      healthcare: "Healthcare",
      retail: "Retail"
    },
    es: {
      // Navigation
      overview: "Vista General",
      directMetrics: "Métricas Directas",
      indirectMetrics: "Métricas Indirectas",
      roiAnalysis: "Análisis ROI", 
      benchmarking: "Benchmarking",
      predictiveInsights: "Insights Predictivos",
      actionCenter: "Centro de Acción",
      
      // Content
      title: "Centro de Inteligencia de Métricas RH",
      subtitle: "Transformar datos de RH en inteligencia empresarial estratégica con medición de impacto directo e indirecto",
      
      // Categories
      direct: "Impacto Directo",
      indirect: "Impacto Indirecto",
      
      // Metrics
      revenuePerEmployee: "Ingresos por Empleado/ETC",
      profitPerEmployee: "Ganancia por Empleado/ETC",
      costToOPL: "Costo al Nivel Óptimo de Productividad",
      overtime: "Tiempo Extra por Empleado",
      laborCost: "Costo Laboral por Empleado/ETC",
      laborCostPercentage: "% Costo Laboral de Ingresos",
      absenceRate: "Tasa de Ausencias",
      trainingExpenses: "Gastos/Eficiencia de Entrenamiento",
      turnoverRate: "Tasa de Rotación",
      costOfAbsenteeism: "Costo de Ausentismo/Rotación",
      hrRatio: "Ratio RH a Empleado",
      averageAge: "Edad/Tiempo de Servicio Promedio",
      averageDistance: "Distancia Promedio desde Casa",
      engagementRate: "Tasa de Compromiso/Satisfacción",
      salaryHike: "Aumento Salarial Desde el Año Pasado",
      timeToFill: "Tiempo para Contratar",
      firstYearTurnover: "Rotación del Primer Año",
      hiringManagerSat: "Satisfacción del Gerente de Contratación",
      applicantsPerOpening: "Candidatos por Vacante",
      offerAcceptance: "Tasa de Aceptación de Ofertas",
      applicationCompletion: "Tasa de Finalización de Aplicaciones",
      
      // Industries
      manufacturing: "Manufactura",
      professionalServices: "Servicios Profesionales",
      technology: "Tecnología", 
      healthcare: "Salud",
      retail: "Retail"
    }
  };

  const currentLabels = labels[language];

  const hrMetrics: HRMetric[] = [
    // Direct Metrics
    {
      id: 'revenue-per-employee',
      name: 'Revenue per Employee/FTE',
      nameEs: 'Ingresos por Empleado/ETC',
      category: 'direct',
      currentValue: 185000,
      targetValue: 210000,
      previousValue: 175000,
      trend: 'up',
      unit: '$',
      description: 'Provide HR services, improve employee productivity through training and development programs',
      descriptionEs: 'Proveer servicios de RH, mejorar productividad de empleados a través de programas de entrenamiento y desarrollo',
      hrService: 'Employee productivity optimization, training and development programs',
      hrServiceEs: 'Optimización de productividad de empleados, programas de entrenamiento y desarrollo',
      impact: 'high',
      icon: DollarSign,
      color: 'text-green-400',
      benchmarkValue: 195000
    },
    {
      id: 'profit-per-employee',
      name: 'Profit per Employee/FTE', 
      nameEs: 'Ganancia por Empleado/ETC',
      category: 'direct',
      currentValue: 45000,
      targetValue: 52000,
      previousValue: 42000,
      trend: 'up',
      unit: '$',
      description: 'Reduce HR-related costs, allocate more resources towards profit-generating activities',
      descriptionEs: 'Reducir costos relacionados con RH, asignar más recursos hacia actividades generadoras de ganancia',
      hrService: 'Cost optimization, resource allocation to profit-generating activities',
      hrServiceEs: 'Optimización de costos, asignación de recursos a actividades generadoras de ganancia',
      impact: 'high',
      icon: TrendingUp,
      color: 'text-blue-400',
      benchmarkValue: 48000
    },
    {
      id: 'cost-to-opl',
      name: 'Cost to Optimum Productivity Level',
      nameEs: 'Costo al Nivel Óptimo de Productividad',
      category: 'direct',
      currentValue: 12500,
      targetValue: 10000,
      previousValue: 14000,
      trend: 'down',
      unit: '$',
      description: 'Provide effective onboarding and training programs',
      descriptionEs: 'Proveer programas efectivos de incorporación y entrenamiento',
      hrService: 'Effective onboarding and training programs',
      hrServiceEs: 'Programas efectivos de incorporación y entrenamiento',
      impact: 'high',
      icon: Target,
      color: 'text-purple-400',
      benchmarkValue: 11000
    },
    
    // Indirect Metrics - Key ones
    {
      id: 'overtime-per-employee',
      name: 'Overtime per Employee',
      nameEs: 'Tiempo Extra por Empleado',
      category: 'indirect',
      currentValue: 280,
      targetValue: 200,
      previousValue: 320,
      trend: 'down',
      unit: 'hours',
      description: 'Provide time and attendance solutions',
      descriptionEs: 'Proveer soluciones de tiempo y asistencia',
      hrService: 'Time and attendance solutions, workforce scheduling optimization',
      hrServiceEs: 'Soluciones de tiempo y asistencia, optimización de programación de fuerza laboral',
      impact: 'medium',
      icon: Clock,
      color: 'text-orange-400',
      benchmarkValue: 240
    },
    {
      id: 'labor-cost-per-employee',
      name: 'Labor Cost per Employee/FTE',
      nameEs: 'Costo Laboral por Empleado/ETC', 
      category: 'indirect',
      currentValue: 75000,
      targetValue: 72000,
      previousValue: 78000,
      trend: 'down',
      unit: '$',
      description: 'Provide cost-effective benefits and compensation packages, optimize workforce planning and scheduling',
      descriptionEs: 'Proveer paquetes de beneficios y compensación costo-efectivos, optimizar planeación y programación de fuerza laboral',
      hrService: 'Benefits optimization, workforce planning, compensation management',
      hrServiceEs: 'Optimización de beneficios, planeación de fuerza laboral, gestión de compensación',
      impact: 'high',
      icon: Users,
      color: 'text-red-400',
      benchmarkValue: 73500
    },
    {
      id: 'turnover-rate',
      name: 'Turnover Rate per Manager/Department',
      nameEs: 'Tasa de Rotación por Gerente/Departamento',
      category: 'indirect',
      currentValue: 12.5,
      targetValue: 8.0,
      previousValue: 15.2,
      trend: 'down',
      unit: '%',
      description: 'Provide employee engagement and retention strategies, effective performance management solutions, and talent management solutions',
      descriptionEs: 'Proveer estrategias de compromiso y retención de empleados, soluciones efectivas de gestión de desempeño y soluciones de gestión de talento',
      hrService: 'Employee engagement, retention strategies, performance management, talent management',
      hrServiceEs: 'Compromiso de empleados, estrategias de retención, gestión de desempeño, gestión de talento',
      impact: 'high',
      icon: UserX,
      color: 'text-red-500',
      benchmarkValue: 10.2
    },
    {
      id: 'engagement-rate',
      name: 'Engagement/Satisfaction Rate',
      nameEs: 'Tasa de Compromiso/Satisfacción',
      category: 'indirect',
      currentValue: 72,
      targetValue: 85,
      previousValue: 68,
      trend: 'up',
      unit: '%',
      description: 'Provide employee engagement programs, satisfaction surveys, and action plans',
      descriptionEs: 'Proveer programas de compromiso de empleados, encuestas de satisfacción y planes de acción',
      hrService: 'Employee engagement programs, satisfaction surveys, action planning',
      hrServiceEs: 'Programas de compromiso de empleados, encuestas de satisfacción, planeación de acciones',
      impact: 'high',
      icon: Heart,
      color: 'text-pink-400',
      benchmarkValue: 78
    },
    {
      id: 'time-to-fill',
      name: 'Time to Fill/Hire',
      nameEs: 'Tiempo para Contratar',
      category: 'indirect',
      currentValue: 35,
      targetValue: 25,
      previousValue: 42,
      trend: 'down',
      unit: 'days',
      description: 'Provide recruitment services',
      descriptionEs: 'Proveer servicios de reclutamiento',
      hrService: 'Recruitment services, talent acquisition optimization',
      hrServiceEs: 'Servicios de reclutamiento, optimización de adquisición de talento',
      impact: 'medium',
      icon: UserPlus,
      color: 'text-cyan-400',
      benchmarkValue: 28
    },
    {
      id: 'absence-rate',
      name: 'Absence Rate',
      nameEs: 'Tasa de Ausencias',
      category: 'indirect',
      currentValue: 4.2,
      targetValue: 3.0,
      previousValue: 4.8,
      trend: 'down',
      unit: '%',
      description: 'Provide absence management solutions',
      descriptionEs: 'Proveer soluciones de gestión de ausencias',
      hrService: 'Absence management solutions, wellness programs',
      hrServiceEs: 'Soluciones de gestión de ausencias, programas de bienestar',
      impact: 'medium',
      icon: UserCheck,
      color: 'text-yellow-400',
      benchmarkValue: 3.5
    }
  ];

  const getMetricsByCategory = (category: MetricCategory) => {
    return hrMetrics.filter(metric => metric.category === category);
  };

  const getTrendIcon = (trend: MetricTrend) => {
    switch (trend) {
      case 'up': return ArrowUp;
      case 'down': return ArrowDown;
      case 'stable': return Minus;
    }
  };

  const getTrendColor = (trend: MetricTrend, isPositiveGood: boolean = true) => {
    if (trend === 'stable') return 'text-gray-400';
    
    if (isPositiveGood) {
      return trend === 'up' ? 'text-green-400' : 'text-red-400';
    } else {
      return trend === 'up' ? 'text-red-400' : 'text-green-400';
    }
  };

  const calculateROIImpact = () => {
    const directMetrics = getMetricsByCategory('direct');
    const totalCurrentRevenue = directMetrics.find(m => m.id === 'revenue-per-employee')?.currentValue || 0;
    const totalTargetRevenue = directMetrics.find(m => m.id === 'revenue-per-employee')?.targetValue || 0;
    const revenueIncrease = totalTargetRevenue - totalCurrentRevenue;
    
    return {
      revenueIncrease,
      costSavings: 125000, // Example calculation
      totalROI: revenueIncrease + 125000,
      roiPercentage: ((revenueIncrease + 125000) / 180000) * 100 // Assuming $180K investment
    };
  };

  const roiImpact = calculateROIImpact();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{currentLabels.title}</h1>
            <p className="text-gray-400">{currentLabels.subtitle}</p>
          </div>
          
          <div className="flex gap-3">
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
            >
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
            
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="direct-metrics">{currentLabels.directMetrics}</TabsTrigger>
            <TabsTrigger value="indirect-metrics">{currentLabels.indirectMetrics}</TabsTrigger>
            <TabsTrigger value="roi-analysis">{currentLabels.roiAnalysis}</TabsTrigger>
            <TabsTrigger value="benchmarking">{currentLabels.benchmarking}</TabsTrigger>
            <TabsTrigger value="predictive-insights">{currentLabels.predictiveInsights}</TabsTrigger>
            <TabsTrigger value="action-center">{currentLabels.actionCenter}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Key Performance Indicators */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Total ROI Impact</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  ${roiImpact.totalROI.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  {roiImpact.roiPercentage.toFixed(1)}% return on investment
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Direct Impact Metrics</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {getMetricsByCategory('direct').length}
                </div>
                <div className="text-sm text-gray-500">Revenue & profit drivers</div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Indirect Impact Metrics</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {getMetricsByCategory('indirect').length}
                </div>
                <div className="text-sm text-gray-500">Operational efficiency indicators</div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Metrics Improving</h3>
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {hrMetrics.filter(m => m.trend === 'up' || (m.trend === 'down' && ['cost-to-opl', 'overtime-per-employee', 'labor-cost-per-employee', 'turnover-rate', 'time-to-fill', 'absence-rate'].includes(m.id))).length}
                </div>
                <div className="text-sm text-gray-500">Positive trend indicators</div>
              </Card>
            </div>

            {/* Metrics Categories Overview */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Direct Impact Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-400" />
                  Direct Impact Metrics
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en' 
                    ? 'Metrics with immediate, measurable impact on revenue and profitability'
                    : 'Métricas con impacto inmediato y medible en ingresos y rentabilidad'
                  }
                </p>

                <div className="space-y-4">
                  {getMetricsByCategory('direct').map((metric) => {
                    const Icon = metric.icon;
                    const TrendIcon = getTrendIcon(metric.trend);
                    const isPositiveGood = !['cost-to-opl'].includes(metric.id);
                    
                    return (
                      <div key={metric.id} className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-5 h-5 ${metric.color}`} />
                            <h4 className="font-bold text-white">
                              {language === 'en' ? metric.name : metric.nameEs}
                            </h4>
                          </div>
                          <div className={`flex items-center gap-1 ${getTrendColor(metric.trend, isPositiveGood)}`}>
                            <TrendIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {metric.currentValue.toLocaleString()}{metric.unit}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-gray-400 text-sm mb-2">
                          {language === 'en' ? metric.hrService : metric.hrServiceEs}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Target: {metric.targetValue.toLocaleString()}{metric.unit}
                          </span>
                          <Badge variant="outline" className={`text-xs ${
                            metric.impact === 'high' ? 'text-red-400 border-red-400' :
                            metric.impact === 'medium' ? 'text-yellow-400 border-yellow-400' :
                            'text-green-400 border-green-400'
                          }`}>
                            {metric.impact} impact
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Indirect Impact Metrics Preview */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-purple-400" />
                  Indirect Impact Metrics
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? 'Operational metrics that drive efficiency and long-term performance'
                    : 'Métricas operacionales que impulsan eficiencia y desempeño a largo plazo'
                  }
                </p>

                <div className="space-y-4">
                  {getMetricsByCategory('indirect').slice(0, 4).map((metric) => {
                    const Icon = metric.icon;
                    const TrendIcon = getTrendIcon(metric.trend);
                    const isPositiveGood = !['overtime-per-employee', 'labor-cost-per-employee', 'turnover-rate', 'time-to-fill', 'absence-rate'].includes(metric.id);
                    
                    return (
                      <div key={metric.id} className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-5 h-5 ${metric.color}`} />
                            <h4 className="font-medium text-white text-sm">
                              {language === 'en' ? metric.name : metric.nameEs}
                            </h4>
                          </div>
                          <div className={`flex items-center gap-1 ${getTrendColor(metric.trend, isPositiveGood)}`}>
                            <TrendIcon className="w-3 h-3" />
                            <span className="text-sm font-medium">
                              {metric.currentValue.toLocaleString()}{metric.unit}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Target: {metric.targetValue.toLocaleString()}{metric.unit}
                          </span>
                          <Badge variant="outline" className={`text-xs ${
                            metric.impact === 'high' ? 'text-red-400 border-red-400' :
                            metric.impact === 'medium' ? 'text-yellow-400 border-yellow-400' :
                            'text-green-400 border-green-400'
                          }`}>
                            {metric.impact}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button 
                  className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('indirect-metrics')}
                >
                  View All Indirect Metrics
                </Button>
              </Card>
            </div>

            {/* ROI Impact Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-green-400" />
                OVERWATCH ROI Impact Analysis
              </h3>

              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    ${roiImpact.revenueIncrease.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Revenue Increase</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    ${roiImpact.costSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Cost Savings</div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    ${roiImpact.totalROI.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Total Impact</div>
                </div>
                
                <div className="text-center p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {roiImpact.roiPercentage.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400">ROI Percentage</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">
                  {language === 'en'
                    ? 'OVERWATCH\'s comprehensive HR services deliver measurable business impact across all key performance indicators'
                    : 'Los servicios integrales de RH de OVERWATCH entregan impacto empresarial medible a través de todos los indicadores clave de desempeño'
                  }
                </p>
                
                <Button 
                  className="bg-green-600 hover:bg-green-700 mr-4"
                  onClick={() => setActiveTab('roi-analysis')}
                >
                  View Detailed ROI Analysis
                </Button>
                
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => onNavigate('roi-calculator')}
                >
                  Calculate Custom ROI
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Direct Metrics */}
          <TabsContent value="direct-metrics" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-400" />
                Direct Impact Metrics - Revenue & Profit Drivers
              </h3>

              <p className="text-gray-300 mb-8">
                {language === 'en'
                  ? 'These metrics have immediate, measurable impact on your bottom line. OVERWATCH\'s services directly influence revenue generation and profitability.'
                  : 'Estas métricas tienen impacto inmediato y medible en tu línea de fondo. Los servicios de OVERWATCH influyen directamente en la generación de ingresos y rentabilidad.'
                }
              </p>

              <div className="grid lg:grid-cols-3 gap-6">
                {getMetricsByCategory('direct').map((metric) => {
                  const Icon = metric.icon;
                  const TrendIcon = getTrendIcon(metric.trend);
                  const isPositiveGood = !['cost-to-opl'].includes(metric.id);
                  const improvement = ((metric.currentValue - metric.previousValue) / metric.previousValue * 100);
                  
                  return (
                    <div key={metric.id} className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">
                            {language === 'en' ? metric.name : metric.nameEs}
                          </h4>
                          <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                            Direct Impact
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-white">
                            {metric.currentValue.toLocaleString()}{metric.unit}
                          </span>
                          <div className={`flex items-center gap-1 ${getTrendColor(metric.trend, isPositiveGood)}`}>
                            <TrendIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {Math.abs(improvement).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Previous: {metric.previousValue.toLocaleString()}{metric.unit}</span>
                          <span>Target: {metric.targetValue.toLocaleString()}{metric.unit}</span>
                        </div>
                        
                        <Progress 
                          value={(metric.currentValue / metric.targetValue) * 100} 
                          className="mt-2 h-2" 
                        />
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-white mb-2">HR Service Impact</h5>
                        <p className="text-gray-300 text-sm">
                          {language === 'en' ? metric.hrService : metric.hrServiceEs}
                        </p>
                      </div>

                      <div className="p-3 bg-gray-900/50 rounded">
                        <h5 className="font-medium text-white mb-1">Business Impact</h5>
                        <p className="text-gray-300 text-xs">
                          {language === 'en' ? metric.description : metric.descriptionEs}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Benchmark: {metric.benchmarkValue.toLocaleString()}{metric.unit}
                        </span>
                        <Badge variant="outline" className={`text-xs ${
                          metric.currentValue >= metric.benchmarkValue ? 'text-green-400 border-green-400' : 'text-yellow-400 border-yellow-400'
                        }`}>
                          {metric.currentValue >= metric.benchmarkValue ? 'Above' : 'Below'} Benchmark
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* Indirect Metrics */}
          <TabsContent value="indirect-metrics" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-purple-400" />
                Indirect Impact Metrics - Operational Excellence
              </h3>

              <p className="text-gray-300 mb-8">
                {language === 'en'
                  ? 'These operational metrics drive long-term performance and efficiency. While indirect, they significantly influence overall business success and employee satisfaction.'
                  : 'Estas métricas operacionales impulsan desempeño y eficiencia a largo plazo. Aunque indirectas, influyen significativamente en el éxito empresarial general y satisfacción de empleados.'
                }
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                {getMetricsByCategory('indirect').map((metric) => {
                  const Icon = metric.icon;
                  const TrendIcon = getTrendIcon(metric.trend);
                  const isPositiveGood = !['overtime-per-employee', 'labor-cost-per-employee', 'turnover-rate', 'time-to-fill', 'absence-rate'].includes(metric.id);
                  const improvement = ((metric.currentValue - metric.previousValue) / metric.previousValue * 100);
                  
                  return (
                    <div key={metric.id} className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm">
                            {language === 'en' ? metric.name : metric.nameEs}
                          </h4>
                          <Badge variant="outline" className="text-xs text-purple-400 border-purple-400">
                            Indirect Impact
                          </Badge>
                        </div>
                        <div className={`flex items-center gap-1 ${getTrendColor(metric.trend, isPositiveGood)}`}>
                          <TrendIcon className="w-4 h-4" />
                          <span className="text-lg font-bold">
                            {metric.currentValue.toLocaleString()}{metric.unit}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Previous: {metric.previousValue.toLocaleString()}{metric.unit}</span>
                          <span>Target: {metric.targetValue.toLocaleString()}{metric.unit}</span>
                        </div>
                        
                        <Progress 
                          value={isPositiveGood ? 
                            (metric.currentValue / metric.targetValue) * 100 :
                            (metric.targetValue / metric.currentValue) * 100
                          } 
                          className="h-2" 
                        />
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-white mb-2 text-sm">HR Service Solution</h5>
                        <p className="text-gray-300 text-xs">
                          {language === 'en' ? metric.hrService : metric.hrServiceEs}
                        </p>
                      </div>

                      <div className="p-3 bg-gray-900/50 rounded mb-4">
                        <p className="text-gray-300 text-xs">
                          {language === 'en' ? metric.description : metric.descriptionEs}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {Math.abs(improvement).toFixed(1)}% {improvement >= 0 ? 'increase' : 'decrease'}
                        </div>
                        <Badge variant="outline" className={`text-xs ${
                          metric.impact === 'high' ? 'text-red-400 border-red-400' :
                          metric.impact === 'medium' ? 'text-yellow-400 border-yellow-400' :
                          'text-green-400 border-green-400'
                        }`}>
                          {metric.impact} impact
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* ROI Analysis */}
          <TabsContent value="roi-analysis" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-green-400" />
                Comprehensive ROI Analysis
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Direct Impact ROI */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Direct Impact ROI</h4>
                  
                  <div className="space-y-4">
                    {getMetricsByCategory('direct').map((metric) => {
                      const currentAnnualValue = metric.currentValue * 150; // Assuming 150 employees
                      const targetAnnualValue = metric.targetValue * 150;
                      const potentialIncrease = targetAnnualValue - currentAnnualValue;
                      
                      return (
                        <div key={metric.id} className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-white text-sm">
                              {language === 'en' ? metric.name : metric.nameEs}
                            </h5>
                            <span className="text-green-400 font-bold">
                              ${potentialIncrease.toLocaleString()}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            Potential annual increase from optimization
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Indirect Impact ROI */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Indirect Impact ROI</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-white text-sm mb-2">Turnover Reduction Savings</h5>
                      <div className="text-purple-400 font-bold">$187,500</div>
                      <div className="text-xs text-gray-400">3.7% reduction × $50K avg replacement cost</div>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-white text-sm mb-2">Overtime Cost Reduction</h5>
                      <div className="text-purple-400 font-bold">$84,000</div>
                      <div className="text-xs text-gray-400">40 hours × 150 employees × $14/hour</div>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-white text-sm mb-2">Recruitment Efficiency</h5>
                      <div className="text-purple-400 font-bold">$52,500</div>
                      <div className="text-xs text-gray-400">Faster time-to-fill × reduced recruiting costs</div>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-white text-sm mb-2">Absence Management</h5>
                      <div className="text-purple-400 font-bold">$45,600</div>
                      <div className="text-xs text-gray-400">1.2% absence reduction × productivity impact</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total ROI Summary */}
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6 text-center">Total ROI Impact Summary</h4>
                
                <div className="grid lg:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">$3.75M</div>
                    <div className="text-sm text-gray-400">Direct Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">$369K</div>
                    <div className="text-sm text-gray-400">Indirect Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">$4.12M</div>
                    <div className="text-sm text-gray-400">Total Annual Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-400">$180K</div>
                    <div className="text-sm text-gray-400">HumCap Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">2,189%</div>
                    <div className="text-sm text-gray-400">ROI Percentage</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    Every $1 invested in HumCap returns $21.89
                  </div>
                  <p className="text-gray-300">
                    {language === 'en'
                      ? 'Comprehensive HR transformation delivers exceptional ROI through direct revenue impact and operational efficiency gains'
                      : 'La transformación integral de RH entrega ROI excepcional a través de impacto directo en ingresos y ganancias de eficiencia operacional'
                    }
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Benchmarking */}
          <TabsContent value="benchmarking" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Industry Benchmarking</h3>
              <select 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value as Industry)}
                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="professional-services">Professional Services</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
              </select>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">
                {currentLabels[selectedIndustry.replace('-', '') as keyof typeof currentLabels]} Industry Benchmarks
              </h4>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-white mb-4">Your Performance vs Industry</h5>
                  
                  <div className="space-y-4">
                    {hrMetrics.slice(0, 6).map((metric) => {
                      const isAboveBenchmark = metric.currentValue >= metric.benchmarkValue;
                      const variance = ((metric.currentValue - metric.benchmarkValue) / metric.benchmarkValue * 100);
                      
                      return (
                        <div key={metric.id} className="p-4 bg-gray-900/50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white text-sm font-medium">
                              {language === 'en' ? metric.name : metric.nameEs}
                            </span>
                            <Badge variant="outline" className={`text-xs ${
                              isAboveBenchmark ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'
                            }`}>
                              {isAboveBenchmark ? '+' : ''}{variance.toFixed(1)}%
                            </Badge>
                          </div>
                          
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400">Your Value: {metric.currentValue.toLocaleString()}{metric.unit}</span>
                            <span className="text-gray-400">Benchmark: {metric.benchmarkValue.toLocaleString()}{metric.unit}</span>
                          </div>
                          
                          <Progress 
                            value={Math.min((metric.currentValue / metric.benchmarkValue) * 100, 100)} 
                            className="h-2" 
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-white mb-4">Industry Insights</h5>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h6 className="font-medium text-blue-400 mb-2">Top Performers</h6>
                      <p className="text-gray-300 text-sm">
                        Companies in the top quartile achieve 25% higher revenue per employee through strategic HR investments
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h6 className="font-medium text-green-400 mb-2">Key Success Factors</h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Integrated HR technology platforms</li>
                        <li>• Data-driven performance management</li>
                        <li>��� Comprehensive onboarding programs</li>
                        <li>• Employee engagement initiatives</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h6 className="font-medium text-orange-400 mb-2">Industry Trends</h6>
                      <p className="text-gray-300 text-sm">
                        {selectedIndustry === 'manufacturing' && 'Focus on safety metrics and skills development for Industry 4.0'}
                        {selectedIndustry === 'professional-services' && 'Emphasis on billable utilization and client satisfaction'}
                        {selectedIndustry === 'technology' && 'Rapid scaling requires strong culture and retention programs'}
                        {selectedIndustry === 'healthcare' && 'Staff burnout and compliance drive HR technology adoption'}
                        {selectedIndustry === 'retail' && 'Seasonal workforce management and customer experience focus'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Predictive Insights */}
          <TabsContent value="predictive-insights" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-blue-400" />
                Predictive HR Intelligence
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Predictive Modeling */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">12-Month Projections</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Revenue per Employee Forecast</h5>
                      <div className="text-2xl font-bold text-white mb-1">$210,000</div>
                      <div className="text-sm text-gray-400">
                        13.5% increase projected based on current training initiatives
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Turnover Rate Prediction</h5>
                      <div className="text-2xl font-bold text-white mb-1">8.2%</div>
                      <div className="text-sm text-gray-400">
                        34% reduction achievable with enhanced engagement programs
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Cost Optimization Potential</h5>
                      <div className="text-2xl font-bold text-white mb-1">$285,000</div>
                      <div className="text-sm text-gray-400">
                        Annual savings from operational efficiency improvements
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Analysis */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk & Opportunity Analysis</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">High Risk Areas</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Turnover rate above industry benchmark</li>
                        <li>• Extended time-to-fill impacting productivity</li>
                        <li>• Engagement scores trending downward</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">Emerging Opportunities</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Strong revenue per employee growth trajectory</li>
                        <li>• Effective cost management initiatives</li>
                        <li>• Positive workforce productivity trends</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Recommended Actions</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implement comprehensive engagement program</li>
                        <li>• Optimize recruitment and onboarding processes</li>
                        <li>• Expand training and development initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Scenario Modeling */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Scenario Impact Modeling</h4>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="font-medium text-white mb-4">Conservative Scenario</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Revenue Impact:</span>
                      <span className="text-green-400">+8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Cost Savings:</span>
                      <span className="text-blue-400">$145K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">ROI:</span>
                      <span className="text-purple-400">487%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900/50 rounded-lg border border-green-700">
                  <h5 className="font-medium text-green-400 mb-4">Optimistic Scenario</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Revenue Impact:</span>
                      <span className="text-green-400">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Cost Savings:</span>
                      <span className="text-blue-400">$285K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">ROI:</span>
                      <span className="text-purple-400">892%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="font-medium text-white mb-4">Aggressive Scenario</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Revenue Impact:</span>
                      <span className="text-green-400">+25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Cost Savings:</span>
                      <span className="text-blue-400">$425K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">ROI:</span>
                      <span className="text-purple-400">1,347%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Action Center */}
          <TabsContent value="action-center" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-400" />
                Strategic Action Center
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Priority Actions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Priority Actions</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-red-400">Critical: Reduce Turnover Rate</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Current: 12.5% | Target: 8.0% | Potential Savings: $187,500
                          </p>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Launch Retention Program
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-yellow-400">High: Optimize Time-to-Fill</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Current: 35 days | Target: 25 days | Revenue Impact: $95,000
                          </p>
                          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                            Enhance Recruitment
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-blue-400">Medium: Boost Engagement</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Current: 72% | Target: 85% | Productivity Impact: 15%
                          </p>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Design Engagement Program
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Roadmap */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">90-Day Implementation Plan</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Days 1-30: Foundation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Complete comprehensive HR audit</li>
                        <li>• Implement core HRIS modules</li>
                        <li>• Launch manager training program</li>
                        <li>• Begin engagement measurement</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Days 31-60: Optimization</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Deploy retention strategies</li>
                        <li>• Optimize recruitment processes</li>
                        <li>• Launch performance management</li>
                        <li>• Implement feedback systems</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Days 61-90: Scale & Measure</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Scale successful initiatives</li>
                        <li>• Measure ROI impact</li>
                        <li>• Refine processes based on data</li>
                        <li>• Plan next phase expansion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Wins */}
              <div className="mt-8 p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Quick Wins (30 Days)</h4>
                
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-600 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Automate Onboarding</h5>
                    <p className="text-green-100 text-xs">Reduce time-to-productivity by 25%</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-600 rounded-lg">
                    <Users className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Manager Dashboard</h5>
                    <p className="text-blue-100 text-xs">Real-time team insights</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-600 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Metrics Tracking</h5>
                    <p className="text-purple-100 text-xs">Automated reporting system</p>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-600 rounded-lg">
                    <Target className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Goal Alignment</h5>
                    <p className="text-orange-100 text-xs">Link individual to business goals</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}