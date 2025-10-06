import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  PieChart, 
  Activity, 
  DollarSign,
  Clock,
  Shield,
  Zap,
  Award,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  Settings,
  Eye,
  Search,
  Filter,
  Download,
  ExternalLink,
  RefreshCw,
  Lightbulb,
  Brain,
  Heart,
  Globe,
  Building,
  Briefcase,
  Star,
  Flag,
  Calendar,
  Bell,
  FileText,
  Database,
  Network,
  Layers,
  Crosshair,
  Navigation,
  Compass,
  Map,
  Rocket,
  Gauge,
  LineChart,
  TrendingDown,
  BarChart2
} from 'lucide-react';

interface FractionalHRROICenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface ROIMetric {
  id: string;
  category: string;
  name: string;
  baseline: number;
  current: number;
  improvement: number;
  savings: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

interface BenchmarkMetric {
  id: string;
  name: string;
  internal: number;
  industry: number;
  variance: number;
  status: 'above' | 'below' | 'at';
  unit: string;
}

interface EngagementModel {
  id: string;
  name: string;
  description: string;
  duration: string;
  investment: number;
  expectedROI: number;
  benefits: string[];
  deliverables: string[];
}

export function FractionalHRROICenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: FractionalHRROICenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'roi-measurement' | 'benchmarking' | 'engagement-models' | 'cost-calculator' | 'success-metrics' | 'continuous-improvement' | 'advisory-services'>('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'quarterly' | 'annual' | 'multi-year'>('annual');
  const [selectedIndustry, setSelectedIndustry] = useState<'all' | 'professional-services' | 'technology' | 'healthcare' | 'manufacturing' | 'financial-services'>('all');
  const [companySize, setCompanySize] = useState<'startup' | 'sme' | 'enterprise'>('sme');

  const labels = {
    en: {
      title: "Fractional HR ROI & Advisory Services Center",
      subtitle: "Comprehensive ROI measurement and optimization platform for fractional HR services and advisory engagements",
      description: "Transform fractional HR from cost center to strategic value driver with data-driven ROI measurement, industry benchmarking, and advisory service optimization",
      
      // Navigation
      overview: "ROI Overview",
      roiMeasurement: "ROI Measurement",
      benchmarking: "Benchmarking",
      engagementModels: "Engagement Models",
      costCalculator: "Cost Calculator",
      successMetrics: "Success Metrics",
      continuousImprovement: "Continuous Improvement",
      advisoryServices: "Advisory Services",
      
      // Metrics
      roiPercentage: "ROI Percentage",
      costSavings: "Cost Savings",
      timeToValue: "Time to Value",
      engagementScore: "Engagement Score",
      
      // Actions
      calculateROI: "Calculate ROI",
      benchmarkMetrics: "Benchmark Metrics",
      generateReport: "Generate Report",
      scheduleReview: "Schedule Review",
      optimizeEngagement: "Optimize Engagement",
      
      // Time frames
      quarterly: "Quarterly",
      annual: "Annual",
      multiYear: "Multi-Year",
      
      // Industries
      all: "All Industries",
      professionalServices: "Professional Services",
      technology: "Technology",
      healthcare: "Healthcare",
      manufacturing: "Manufacturing",
      financialServices: "Financial Services",
      
      // Company Size
      startup: "Startup (<50)",
      sme: "SME (50-500)",
      enterprise: "Enterprise (500+)"
    },
    es: {
      title: "Centro ROI y Servicios de Consultoría RH Fraccionada",
      subtitle: "Plataforma integral de medición y optimización de ROI para servicios RH fraccionados y compromisos de consultoría",
      description: "Transforma RH fraccionada de centro de costos a generador de valor estratégico con medición de ROI basada en datos, benchmarking de industria y optimización de servicios de consultoría",
      
      // Navigation
      overview: "Vista ROI",
      roiMeasurement: "Medición ROI",
      benchmarking: "Benchmarking",
      engagementModels: "Modelos de Compromiso",
      costCalculator: "Calculadora de Costos",
      successMetrics: "Métricas de Éxito",
      continuousImprovement: "Mejora Continua",
      advisoryServices: "Servicios de Consultoría",
      
      // Metrics
      roiPercentage: "Porcentaje ROI",
      costSavings: "Ahorros de Costos",
      timeToValue: "Tiempo al Valor",
      engagementScore: "Puntuación de Compromiso",
      
      // Actions
      calculateROI: "Calcular ROI",
      benchmarkMetrics: "Métricas de Benchmark",
      generateReport: "Generar Reporte",
      scheduleReview: "Programar Revisión",
      optimizeEngagement: "Optimizar Compromiso",
      
      // Time frames
      quarterly: "Trimestral",
      annual: "Anual",
      multiYear: "Multi-Año",
      
      // Industries
      all: "Todas las Industrias",
      professionalServices: "Servicios Profesionales",
      technology: "Tecnología",
      healthcare: "Salud",
      manufacturing: "Manufactura",
      financialServices: "Servicios Financieros",
      
      // Company Size
      startup: "Startup (<50)",
      sme: "PYME (50-500)",
      enterprise: "Empresa (500+)"
    }
  };

  const currentLabels = labels[language];

  // ROI Metrics Data
  const roiMetrics: ROIMetric[] = [
    {
      id: 'hr-headcount-savings',
      category: 'Direct Cost Savings',
      name: 'HR Headcount Savings',
      baseline: 120000,
      current: 60000,
      improvement: 50,
      savings: 60000,
      unit: 'USD',
      trend: 'up'
    },
    {
      id: 'cost-per-hire',
      category: 'Talent Acquisition',
      name: 'Cost per Hire',
      baseline: 5000,
      current: 3500,
      improvement: 30,
      savings: 30000,
      unit: 'USD',
      trend: 'up'
    },
    {
      id: 'time-to-fill',
      category: 'Talent Acquisition',
      name: 'Time to Fill',
      baseline: 60,
      current: 42,
      improvement: 30,
      savings: 45000,
      unit: 'days',
      trend: 'up'
    },
    {
      id: 'turnover-rate',
      category: 'Employee Retention',
      name: 'Voluntary Turnover Rate',
      baseline: 25,
      current: 15,
      improvement: 40,
      savings: 1125000,
      unit: '%',
      trend: 'up'
    },
    {
      id: 'compliance-incidents',
      category: 'Compliance & Risk',
      name: 'Compliance Incidents',
      baseline: 8,
      current: 2,
      improvement: 75,
      savings: 100000,
      unit: 'incidents',
      trend: 'up'
    },
    {
      id: 'employee-engagement',
      category: 'Engagement & Productivity',
      name: 'Employee Net Promoter Score',
      baseline: 35,
      current: 50,
      improvement: 43,
      savings: 100000,
      unit: 'score',
      trend: 'up'
    }
  ];

  // Benchmark Metrics Data
  const benchmarkMetrics: BenchmarkMetric[] = [
    {
      id: 'turnover-rate',
      name: 'Annual Turnover Rate',
      internal: 15,
      industry: 22,
      variance: -7,
      status: 'above',
      unit: '%'
    },
    {
      id: 'time-to-fill',
      name: 'Time to Fill',
      internal: 42,
      industry: 50,
      variance: -8,
      status: 'above',
      unit: 'days'
    },
    {
      id: 'cost-per-hire',
      name: 'Cost per Hire',
      internal: 3500,
      industry: 4500,
      variance: -1000,
      status: 'above',
      unit: 'USD'
    },
    {
      id: 'hr-employee-ratio',
      name: 'HR-to-Employee Ratio',
      internal: 2.0,
      industry: 2.5,
      variance: -0.5,
      status: 'above',
      unit: '%'
    },
    {
      id: 'engagement-score',
      name: 'Employee Engagement',
      internal: 85,
      industry: 75,
      variance: 10,
      status: 'above',
      unit: 'score'
    },
    {
      id: 'training-investment',
      name: 'Training Investment per Employee',
      internal: 1200,
      industry: 1500,
      variance: -300,
      status: 'below',
      unit: 'USD'
    }
  ];

  // Engagement Models Data
  const engagementModels: EngagementModel[] = [
    {
      id: 'strategic-advisory',
      name: 'Strategic HR Advisory',
      description: 'Executive-level strategic guidance and transformation leadership',
      duration: '6-12 months',
      investment: 84000,
      expectedROI: 425,
      benefits: [
        'C-suite level HR expertise',
        'Strategic transformation guidance',
        'Cultural change management',
        'Board-ready HR metrics'
      ],
      deliverables: [
        'HR strategic roadmap',
        'Organizational design',
        'Culture transformation plan',
        'Executive dashboards'
      ]
    },
    {
      id: 'operational-support',
      name: 'Operational HR Support',
      description: 'Day-to-day HR operations and process optimization',
      duration: '3-6 months',
      investment: 36000,
      expectedROI: 275,
      benefits: [
        'Immediate operational relief',
        'Process standardization',
        'Compliance assurance',
        'Team development'
      ],
      deliverables: [
        'Policy handbook updates',
        'Process documentation',
        'Compliance audit',
        'Team training programs'
      ]
    },
    {
      id: 'project-based',
      name: 'Project-Based Engagement',
      description: 'Specific initiatives and transformation projects',
      duration: '2-4 months',
      investment: 24000,
      expectedROI: 200,
      benefits: [
        'Focused expertise',
        'Rapid implementation',
        'Knowledge transfer',
        'Measurable outcomes'
      ],
      deliverables: [
        'Project completion',
        'Documentation package',
        'Training materials',
        'Success metrics'
      ]
    },
    {
      id: 'interim-leadership',
      name: 'Interim HR Leadership',
      description: 'Temporary HR leadership during transitions',
      duration: '4-8 months',
      investment: 60000,
      expectedROI: 350,
      benefits: [
        'Experienced leadership',
        'Seamless transitions',
        'Strategic continuity',
        'Talent development'
      ],
      deliverables: [
        'Leadership transition plan',
        'Team development',
        'Strategic initiatives',
        'Succession planning'
      ]
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getBenchmarkColor = (status: string) => {
    switch (status) {
      case 'above': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'below': return 'text-red-400 bg-red-900/20 border-red-700';
      default: return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
    }
  };

  const calculateTotalROI = () => {
    const totalInvestment = 60000; // Annual fractional HR investment
    const totalSavings = roiMetrics.reduce((sum, metric) => sum + metric.savings, 0);
    return Math.round(((totalSavings - totalInvestment) / totalInvestment) * 100);
  };

  const totalROI = calculateTotalROI();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-green-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-green-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Context Selectors */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Timeframe</label>
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="quarterly">{currentLabels.quarterly}</option>
              <option value="annual">{currentLabels.annual}</option>
              <option value="multi-year">{currentLabels.multiYear}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="all">{currentLabels.all}</option>
              <option value="professional-services">{currentLabels.professionalServices}</option>
              <option value="technology">{currentLabels.technology}</option>
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
              <option value="financial-services">{currentLabels.financialServices}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <select 
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="startup">{currentLabels.startup}</option>
              <option value="sme">{currentLabels.sme}</option>
              <option value="enterprise">{currentLabels.enterprise}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              {currentLabels.calculateROI}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="roi-measurement">{currentLabels.roiMeasurement}</TabsTrigger>
            <TabsTrigger value="benchmarking">{currentLabels.benchmarking}</TabsTrigger>
            <TabsTrigger value="engagement-models">{currentLabels.engagementModels}</TabsTrigger>
            <TabsTrigger value="cost-calculator">{currentLabels.costCalculator}</TabsTrigger>
            <TabsTrigger value="success-metrics">{currentLabels.successMetrics}</TabsTrigger>
            <TabsTrigger value="continuous-improvement">{currentLabels.continuousImprovement}</TabsTrigger>
            <TabsTrigger value="advisory-services">{currentLabels.advisoryServices}</TabsTrigger>
          </TabsList>

          {/* ROI Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key ROI Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Fractional HR ROI Intelligence Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-1">{totalROI}%</div>
                  <div className="text-sm text-gray-400">{currentLabels.roiPercentage}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">$1.36M</div>
                  <div className="text-sm text-gray-400">Total Savings</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-1">90d</div>
                  <div className="text-sm text-gray-400">{currentLabels.timeToValue}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-green-400" />
                  <h4 className="font-bold text-white">Fractional HR Strategic Advantage</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Transform HR function with 2,258% ROI through fractional expertise. Access executive-level 
                  HR leadership at 50% cost of full-time hire while achieving superior business outcomes 
                  and accelerated growth.
                </p>
              </div>
            </Card>

            {/* ROI Categories Breakdown */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ROI Impact by Category</h3>
              
              <div className="grid lg:grid-cols-1 gap-4">
                {roiMetrics.map((metric) => (
                  <div key={metric.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        {getTrendIcon(metric.trend)}
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white">{metric.name}</h4>
                        <p className="text-sm text-gray-400">{metric.category}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                            {metric.improvement}% improvement
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {metric.baseline} → {metric.current} {metric.unit}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">
                        ${(metric.savings / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Annual Savings</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick ROI Calculator */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick ROI Calculator</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Investment (Annual)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Fractional HR Retainer</span>
                      <span className="text-red-400">$60,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Investment</span>
                      <span className="text-red-400 font-bold">$60,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Benefits & Savings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Direct cost savings</span>
                      <span className="text-green-400">$1,215,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Soft benefits</span>
                      <span className="text-green-400">$200,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Benefits</span>
                      <span className="text-green-400 font-bold">$1,415,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">2,258%</div>
                  <div className="text-white font-medium">Total ROI</div>
                  <div className="text-sm text-gray-400 mt-1">
                    $60K investment generates $1.415M in quantifiable benefits
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('roi-measurement')}
                >
                  <Calculator className="w-4 h-4" />
                  Measure ROI
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('benchmarking')}
                >
                  <BarChart3 className="w-4 h-4" />
                  {currentLabels.benchmarkMetrics}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('engagement-models')}
                >
                  <Users className="w-4 h-4" />
                  Engagement Models
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700"
                  onClick={() => setActiveTab('advisory-services')}
                >
                  <Briefcase className="w-4 h-4" />
                  Advisory Services
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Measurement */}
          <TabsContent value="roi-measurement" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Comprehensive ROI Measurement Framework</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate ROI Report
              </Button>
            </div>

            {/* ROI Measurement Process */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">7-Step ROI Measurement Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Define Objectives and Key Metrics</h4>
                    <p className="text-gray-400 mb-3">
                      Align on business outcomes your fractional HR engagement aims to drive
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-2">Cost Reduction Objectives</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Reducing HR headcount costs</li>
                          <li>• Lowering cost-per-hire</li>
                          <li>• Minimizing compliance fines</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-2">Performance Improvement</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Accelerating time-to-fill</li>
                          <li>• Lowering voluntary turnover</li>
                          <li>• Improving engagement scores</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Establish Baseline Measurements</h4>
                    <p className="text-gray-400 mb-3">
                      Capture current-state data over representative period (6-12 months)
                    </p>
                    <div className="grid lg:grid-cols-3 gap-4">
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-gray-300 mb-1">HR Cost Baseline</h5>
                        <div className="text-lg font-bold text-white">$120,000</div>
                        <div className="text-xs text-gray-400">Full-time HR salary + benefits</div>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-gray-300 mb-1">Turnover Rate</h5>
                        <div className="text-lg font-bold text-white">25%</div>
                        <div className="text-xs text-gray-400">Annual voluntary turnover</div>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-gray-300 mb-1">Time to Fill</h5>
                        <div className="text-lg font-bold text-white">60 days</div>
                        <div className="text-xs text-gray-400">Average recruitment time</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Track Incremental Improvements</h4>
                    <p className="text-gray-400 mb-3">
                      Monitor KPIs at regular intervals and document performance deltas
                    </p>
                    <div className="space-y-3">
                      {roiMetrics.slice(0, 3).map((metric) => (
                        <div key={metric.id} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-white font-medium">{metric.name}</span>
                            <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                              {metric.improvement}% improvement
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              {metric.baseline} → {metric.current} {metric.unit}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Quantify Direct Cost Savings</h4>
                    <p className="text-gray-400 mb-3">
                      Convert KPI improvements into dollar values using proven methodologies
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-3 text-gray-400">Category</th>
                            <th className="text-left py-3 text-gray-400">Baseline</th>
                            <th className="text-left py-3 text-gray-400">Current</th>
                            <th className="text-left py-3 text-gray-400">Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800">
                            <td className="py-3 text-white">HR FTE Cost</td>
                            <td className="py-3 text-gray-300">$120,000</td>
                            <td className="py-3 text-gray-300">$60,000</td>
                            <td className="py-3 text-green-400 font-bold">$60,000</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-3 text-white">Cost-per-Hire (20 hires)</td>
                            <td className="py-3 text-gray-300">$5,000</td>
                            <td className="py-3 text-gray-300">$3,500</td>
                            <td className="py-3 text-green-400 font-bold">$30,000</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-3 text-white">Turnover Impact</td>
                            <td className="py-3 text-gray-300">25%</td>
                            <td className="py-3 text-gray-300">15%</td>
                            <td className="py-3 text-green-400 font-bold">$1,125,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Soft Benefits Measurement */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Soft Benefits & Strategic Value</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Quantified Soft Benefits</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Compliance Risk Reduction</h5>
                      <p className="text-sm text-gray-300 mb-2">
                        Historical fines: $100,000 → Current: $0
                      </p>
                      <div className="text-lg font-bold text-white">$100,000 savings</div>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Productivity Gain</h5>
                      <p className="text-sm text-gray-300 mb-2">
                        eNPS improvement: +15 points × 200 employees
                      </p>
                      <div className="text-lg font-bold text-white">$100,000 value</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Strategic Impact Areas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="font-medium text-white">Strategic Decision Making</div>
                        <div className="text-sm text-gray-400">Executive-level HR insights</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="font-medium text-white">Risk Mitigation</div>
                        <div className="text-sm text-gray-400">Proactive compliance management</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="font-medium text-white">Agility & Speed</div>
                        <div className="text-sm text-gray-400">Rapid implementation capability</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Network className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-medium text-white">Network Access</div>
                        <div className="text-sm text-gray-400">Industry connections and resources</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Benchmarking */}
          <TabsContent value="benchmarking" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">HR Metrics Benchmarking Analysis</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Update Benchmarks
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Performance vs Industry Standards</h3>
              
              <div className="grid lg:grid-cols-1 gap-4">
                {benchmarkMetrics.map((metric) => (
                  <div key={metric.id} className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-white">{metric.name}</h4>
                      <Badge className={`text-xs ${getBenchmarkColor(metric.status)}`}>
                        {metric.status === 'above' ? 'OUTPERFORMING' : 
                         metric.status === 'below' ? 'BELOW BENCHMARK' : 'AT BENCHMARK'}
                      </Badge>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="text-center p-3 bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-blue-400 mb-1">
                          {metric.internal}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-400">Your Performance</div>
                      </div>
                      
                      <div className="text-center p-3 bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-400 mb-1">
                          {metric.industry}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-400">Industry Average</div>
                      </div>
                      
                      <div className="text-center p-3 bg-gray-800 rounded-lg">
                        <div className={`text-lg font-bold mb-1 ${
                          metric.variance > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.variance > 0 ? '+' : ''}{metric.variance}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-400">Variance</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Benchmarking Process */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">6-Step Benchmarking Process</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Process Steps</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Define Objectives</h5>
                        <p className="text-sm text-gray-400">Select metrics aligned with strategic goals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Identify Benchmarks</h5>
                        <p className="text-sm text-gray-400">Source industry-specific data from reliable organizations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Gather Internal Data</h5>
                        <p className="text-sm text-gray-400">Collect current metrics over representative period</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Compare & Analyze</h5>
                        <p className="text-sm text-gray-400">Calculate variances and identify gaps</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        5
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Set Targets</h5>
                        <p className="text-sm text-gray-400">Establish SMART improvement targets</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        6
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Monitor & Refine</h5>
                        <p className="text-sm text-gray-400">Regular reviews and benchmark updates</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Data Sources</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Professional Associations</h5>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>• SHRM (Society for Human Resource Management)</div>
                        <div>• ATD (Association for Talent Development)</div>
                        <div>• World at Work</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Industry Surveys</h5>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>• Deloitte Human Capital Trends</div>
                        <div>• Gartner HR Benchmarking</div>
                        <div>• PwC CEO Survey</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Technology Vendors</h5>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>• ADP Research Institute</div>
                        <div>• Willis Towers Watson</div>
                        <div>• Workday Insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benchmark Analysis Example */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">HR-to-Employee Ratio Analysis Example</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-medium text-blue-400 mb-3">Current State</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">2.0%</div>
                    <div className="text-sm text-gray-400">5 HR FTEs / 250 employees</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-400 mb-3">Industry Benchmark</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300 mb-2">2.5%</div>
                    <div className="text-sm text-gray-400">Typical range: 1-3%</div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-3">Performance</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">Above</div>
                    <div className="text-sm text-gray-400">More efficient than average</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <h5 className="font-medium text-white mb-2">Insight & Recommendation</h5>
                <p className="text-sm text-gray-300">
                  Your HR-to-employee ratio of 2.0% is 20% better than the industry average of 2.5%, 
                  indicating efficient HR operations. With fractional HR support, you're achieving 
                  superior results with leaner staffing.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Engagement Models */}
          <TabsContent value="engagement-models" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Fractional HR Engagement Models</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Design Custom Engagement
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {engagementModels.map((model) => (
                <Card key={model.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{model.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{model.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">
                          {model.duration}
                        </Badge>
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          {model.expectedROI}% ROI
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${(model.investment / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Total Investment</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {model.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Deliverables</h4>
                      <ul className="space-y-1">
                        {model.deliverables.map((deliverable, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <FileText className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-white mb-1">Expected Value Creation</h5>
                        <div className="text-sm text-gray-400">
                          ROI: {model.expectedROI}% | Value: ${((model.investment * model.expectedROI / 100) + model.investment).toLocaleString()}
                        </div>
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Select Model
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Engagement Model Comparison */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Engagement Model Comparison</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Model</th>
                      <th className="text-left py-3 text-gray-400">Duration</th>
                      <th className="text-left py-3 text-gray-400">Investment</th>
                      <th className="text-left py-3 text-gray-400">Expected ROI</th>
                      <th className="text-left py-3 text-gray-400">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {engagementModels.map((model, index) => (
                      <tr key={model.id} className="border-b border-gray-800">
                        <td className="py-3 text-white font-medium">{model.name}</td>
                        <td className="py-3 text-gray-300">{model.duration}</td>
                        <td className="py-3 text-gray-300">${(model.investment / 1000).toFixed(0)}K</td>
                        <td className="py-3 text-green-400 font-bold">{model.expectedROI}%</td>
                        <td className="py-3 text-gray-300">
                          {model.id === 'strategic-advisory' ? 'Growing companies needing strategic HR leadership' :
                           model.id === 'operational-support' ? 'Companies with basic HR operations needs' :
                           model.id === 'project-based' ? 'Specific initiatives and short-term projects' :
                           'Leadership transitions and interim management'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Cost Calculator */}
          <TabsContent value="cost-calculator" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Fractional HR Cost-Benefit Calculator</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Export Analysis
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Investment Analysis</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Full-Time HR Cost</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="120000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Fractional HR Annual Retainer</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="60000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Number of Employees</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Annual Hires</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Turnover Rate (%)</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="25"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Projected Benefits</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Direct Cost Savings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">HR headcount savings:</span>
                        <span className="text-green-400 font-bold">$60,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Improved cost-per-hire:</span>
                        <span className="text-green-400 font-bold">$30,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Reduced turnover:</span>
                        <span className="text-green-400 font-bold">$1,125,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Soft Benefits</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Compliance risk reduction:</span>
                        <span className="text-blue-400 font-bold">$100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Productivity gains:</span>
                        <span className="text-blue-400 font-bold">$100,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Total Annual Benefits:</span>
                      <span className="text-green-400 font-bold text-lg">$1,415,000</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ROI Summary & Breakdown</h3>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-1">$60,000</div>
                  <div className="text-sm text-gray-400">Annual Investment</div>
                </div>
                
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">$1,415,000</div>
                  <div className="text-sm text-gray-400">Annual Benefits</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">2,258%</div>
                  <div className="text-sm text-gray-400">ROI Percentage</div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-900 rounded-lg">
                <h4 className="font-medium text-white mb-3">ROI Calculation Formula</h4>
                <div className="text-sm text-gray-300 font-mono">
                  ROI = (Total Benefits - Total Investment) / Total Investment × 100%
                </div>
                <div className="text-sm text-gray-300 font-mono mt-2">
                  ROI = ($1,415,000 - $60,000) / $60,000 × 100% = 2,258%
                </div>
              </div>
            </Card>

            {/* Payback Period Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Payback Period & Value Realization</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-green-400 mb-1">15</div>
                  <div className="text-sm text-gray-400">Days to Breakeven</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">90</div>
                  <div className="text-sm text-gray-400">Days to Full Value</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-purple-400 mb-1">$118K</div>
                  <div className="text-sm text-gray-400">Monthly Value</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-yellow-400 mb-1">23.6x</div>
                  <div className="text-sm text-gray-400">Return Multiple</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Success Metrics */}
          <TabsContent value="success-metrics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Success Metrics & KPI Tracking</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate KPI Dashboard
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Key Performance Indicators (KPIs)</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Financial KPIs</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Cost Reduction</span>
                        <span className="text-green-400 font-bold">50%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">$120K → $60K annual HR cost</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">ROI Achievement</span>
                        <span className="text-green-400 font-bold">2,258%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Target: 300% | Achieved: 2,258%</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Payback Period</span>
                        <span className="text-green-400 font-bold">15 days</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Target: 90 days | Achieved: 15 days</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Operational KPIs</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Time to Fill Improvement</span>
                        <span className="text-blue-400 font-bold">30%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">60 days → 42 days average</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Turnover Reduction</span>
                        <span className="text-purple-400 font-bold">40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">25% → 15% annual rate</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Employee Engagement</span>
                        <span className="text-yellow-400 font-bold">43%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '43%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">eNPS: 35 → 50</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Metrics Framework */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Success Metrics Framework</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Target className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Financial Impact</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• ROI achievement</li>
                    <li>• Cost reduction</li>
                    <li>• Revenue impact</li>
                    <li>• Payback period</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Efficiency Gains</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Time to fill</li>
                    <li>• Process automation</li>
                    <li>• Decision speed</li>
                    <li>• Implementation time</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Users className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">People Outcomes</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Employee engagement</li>
                    <li>• Retention rates</li>
                    <li>• Performance scores</li>
                    <li>• Manager effectiveness</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <Shield className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Risk Mitigation</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Compliance incidents</li>
                    <li>• Legal exposure</li>
                    <li>• Process standardization</li>
                    <li>• Audit readiness</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Continuous Improvement */}
          <TabsContent value="continuous-improvement" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Continuous Improvement & Reporting</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Schedule Quarterly Review
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Improvement Cycle Framework</h3>
              
              <div className="grid lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Quarterly ROI Reviews</h4>
                    <p className="text-gray-400 mb-3">
                      Update KPI trends, incorporate stakeholder feedback, and adjust targets
                    </p>
                    <div className="grid lg:grid-cols-3 gap-4">
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-1">Data Collection</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Performance metrics</li>
                          <li>• Stakeholder feedback</li>
                          <li>• Cost tracking</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-1">Analysis</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Trend identification</li>
                          <li>• Gap analysis</li>
                          <li>• Impact assessment</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-purple-400 mb-1">Actions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Target adjustments</li>
                          <li>• Process improvements</li>
                          <li>• Strategy refinements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    M1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Monthly Pulse Checks</h4>
                    <p className="text-gray-400 mb-3">
                      Track leading indicators and early warning signals for course corrections
                    </p>
                    <div className="grid lg:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-gray-900 rounded-lg">
                        <div className="text-lg font-bold text-green-400 mb-1">95%</div>
                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-gray-900 rounded-lg">
                        <div className="text-lg font-bold text-blue-400 mb-1">42</div>
                        <div className="text-sm text-gray-400">Avg Time to Fill</div>
                      </div>
                      <div className="text-center p-3 bg-gray-900 rounded-lg">
                        <div className="text-lg font-bold text-purple-400 mb-1">15%</div>
                        <div className="text-sm text-gray-400">Turnover Rate</div>
                      </div>
                      <div className="text-center p-3 bg-gray-900 rounded-lg">
                        <div className="text-lg font-bold text-yellow-400 mb-1">$118K</div>
                        <div className="text-sm text-gray-400">Monthly Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    A1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Annual Strategic Review</h4>
                    <p className="text-gray-400 mb-3">
                      Comprehensive assessment, benchmark updates, and strategic planning
                    </p>
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Annual Review Components</h5>
                      <div className="grid lg:grid-cols-2 gap-4">
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Complete ROI analysis</li>
                          <li>• Industry benchmark updates</li>
                          <li>• Stakeholder satisfaction survey</li>
                          <li>• Strategic goal assessment</li>
                        </ul>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Engagement model optimization</li>
                          <li>• Future planning and roadmap</li>
                          <li>• Resource allocation review</li>
                          <li>• Success story documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Real-Time Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Real-Time ROI Dashboard</h3>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">Performance Trending</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-1">↗ 15%</div>
                  <div className="text-sm text-gray-400">Month-over-month improvement</div>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">Real-Time Alerts</h4>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                  <div className="text-sm text-gray-400">Active performance alerts</div>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">Goal Achievement</h4>
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">127%</div>
                  <div className="text-sm text-gray-400">Target vs actual performance</div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-900 rounded-lg">
                <h5 className="font-medium text-white mb-3">Next-Level Insights</h5>
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-sm font-medium text-blue-400 mb-2">Predictive Analytics</h6>
                    <p className="text-sm text-gray-300">
                      AI-powered forecasting shows 25% additional ROI opportunity through 
                      expanded fractional engagement scope.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-sm font-medium text-green-400 mb-2">Optimization Recommendations</h6>
                    <p className="text-sm text-gray-300">
                      Performance data suggests shifting 20% of engagement focus to talent 
                      acquisition for maximum value creation.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Advisory Services */}
          <TabsContent value="advisory-services" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">OVERWATCH Advisory Services Platform</h2>
              
              <Button className="bg-orange-600 hover:bg-orange-700">
                Design Engagement
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Flexible Engagement Models</h3>
              
              <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <h4 className="font-bold text-white">Elevate Your HR with Flexible, On-Demand Expertise</h4>
                </div>
                <p className="text-sm text-gray-300">
                  OVERWATCH's human capital management advisory and consulting services adapt to your unique needs—so you get 
                  exactly the support you need, when you need it. As HR challenges evolve, our offerings expand, ensuring 
                  you always have the right resources in place to drive growth, minimize risk, and optimize costs.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Why Choose On-Demand Fractional HR?</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Settings className="w-5 h-5 text-blue-400" />
                        <h5 className="font-medium text-white">Tailored Engagement Models</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Scale our involvement up or down based on project scope, seasonal demands, or strategic priorities—no rigid contracts, no unnecessary overhead.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Brain className="w-5 h-5 text-green-400" />
                        <h5 className="font-medium text-white">Executive-Level Expertise</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Gain immediate access to seasoned HR leaders (from generalists to CHRO-level) who've navigated complex compliance, system implementations, and organizational change across industries.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <h5 className="font-medium text-white">Rapid Implementation</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Onboard fractional HR support in days, not months. Hit the ground running with people strategy, process optimization, or compliance initiatives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Value Proposition</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <h5 className="font-medium text-white">Cost and Time Savings</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Eliminate full-time salaries, benefits, and recruiting costs. Invest in outcomes, not seats, and free your internal team to focus on core business priorities.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Heart className="w-5 h-5 text-purple-400" />
                        <h5 className="font-medium text-white">Strategic Partnership</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        We integrate seamlessly into your culture and workflows—becoming an extension of your team. Our agile approach ensures continuous improvement as your business evolves.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-blue-400" />
                        <h5 className="font-medium text-white">Proven Results</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Track record of 2,258% ROI, 50% cost reduction, and 40% improvement in key HR metrics across diverse client engagements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Capabilities */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Core On-Demand Capabilities</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Strategic & Operational</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <span className="text-white">HR policy development and handbook creation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-white">Compliance audits and risk management</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Interim leadership for HR systems and integrations</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Target className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Succession planning and leadership coaching</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Development & Analytics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      <span className="text-white">Workforce training and employee relations</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <RefreshCw className="w-5 h-5 text-green-400" />
                      <span className="text-white">Change management and transformation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Real-time KPI tracking and reporting</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <Map className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Strategic road-mapping and planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Client Success Stories */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Client Success Stories</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-blue-400" />
                    <h4 className="font-bold text-white">Tech Startup</h4>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">425% ROI</div>
                  <p className="text-sm text-gray-300 mb-3">
                    Rapid scaling from 50 to 200 employees with strategic HR framework implementation
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• 60% reduction in time-to-hire</li>
                    <li>• 45% improvement in retention</li>
                    <li>• Zero compliance incidents</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-white">Healthcare Services</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">350% ROI</div>
                  <p className="text-sm text-gray-300 mb-3">
                    Interim HR leadership during critical expansion and system implementation
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Seamless HRIS transition</li>
                    <li>• 30% productivity increase</li>
                    <li>• $200K compliance savings</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <h4 className="font-bold text-white">Professional Services</h4>
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">275% ROI</div>
                  <p className="text-sm text-gray-300 mb-3">
                    Operational HR support and process standardization for multi-location firm
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Standardized processes</li>
                    <li>• 50% faster onboarding</li>
                    <li>• 35% cost reduction</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Get Started */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Start Your Fractional HR Journey</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Ready to Transform Your HR?</h4>
                  <p className="text-gray-300 mb-6">
                    Equip your organization with the strategy, tools, and expertise it needs to flourish. 
                    With OVERWATCH's on-demand fractional HR, you'll achieve stronger business outcomes through 
                    your most valuable asset—your people.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Download Guide
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Immediate Next Steps</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <span className="text-white">15-minute discovery call to assess your needs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <span className="text-white">Custom engagement model design and ROI projection</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <span className="text-white">Rapid onboarding and immediate value delivery</span>
                    </div>
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