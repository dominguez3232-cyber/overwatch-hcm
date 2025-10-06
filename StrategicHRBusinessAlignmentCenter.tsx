import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare, 
  Award, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  User,
  Settings,
  PieChart,
  Clock,
  Star,
  Zap,
  Brain,
  Eye,
  ArrowRight,
  Download,
  Filter,
  Search,
  Plus,
  ChevronDown,
  FileText,
  LineChart,
  Shield,
  DollarSign,
  Globe,
  Building,
  UserCheck,
  Briefcase,
  Network,
  TrendingDown,
  Calculator,
  CheckSquare,
  AlertCircle,
  ThumbsUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Layers,
  Link,
  Activity,
  Gauge,
  Workflow,
  GitBranch,
  Compass,
  Crosshair,
  Lightbulb,
  Rocket,
  TreePine
} from 'lucide-react';

interface StrategicHRBusinessAlignmentCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface AlignmentFramework {
  id: string;
  name: string;
  description: string;
  perspectives: string[];
  strengths: string[];
  bestFor: string;
  implementationTime: string;
  complexity: 'low' | 'medium' | 'high';
}

interface HRMetric {
  id: string;
  category: 'financial' | 'operational' | 'strategic' | 'employee';
  name: string;
  current: number;
  target: number;
  benchmark: number;
  businessImpact: 'high' | 'medium' | 'low';
  trend: 'up' | 'down' | 'stable';
}

interface AlignmentAssessment {
  dimension: string;
  current: number;
  target: number;
  gap: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
  recommendations: string[];
}

export function StrategicHRBusinessAlignmentCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: StrategicHRBusinessAlignmentCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'alignment-assessment' | 'frameworks' | 'metrics-dashboard' | 'people-analytics' | 'business-case' | 'operating-model' | 'implementation'>('overview');
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [companySize, setCompanySize] = useState<'startup' | 'smb' | 'midmarket' | 'enterprise'>('smb');
  const [industry, setIndustry] = useState<'tech' | 'healthcare' | 'manufacturing' | 'services' | 'finance' | 'retail'>('tech');
  const [maturityLevel, setMaturityLevel] = useState<'basic' | 'developing' | 'mature' | 'optimized'>('developing');

  const labels = {
    en: {
      title: "Strategic HR-Business Alignment Center",
      subtitle: "Transform HR from cost center to strategic value creator with proven frameworks and metrics",
      description: "Align HR practices with business outcomes using McKinsey-grade frameworks, people analytics, and ROI modeling",
      
      // Navigation
      overview: "Strategic Overview",
      alignmentAssessment: "Alignment Assessment",
      frameworks: "Strategic Frameworks",
      metricsDashboard: "Metrics Dashboard",
      peopleAnalytics: "People Analytics",
      businessCase: "Business Case Builder",
      operatingModel: "Operating Model",
      implementation: "Implementation Plan",
      
      // Overview sections
      alignmentScore: "Alignment Score",
      businessImpact: "Business Impact",
      strategicGaps: "Strategic Gaps",
      quickWins: "Quick Wins",
      
      // Assessment
      verticalAlignment: "Vertical Alignment",
      horizontalAlignment: "Horizontal Alignment",
      culturalAlignment: "Cultural Alignment",
      operationalAlignment: "Operational Alignment",
      
      // Actions
      runAssessment: "Run Assessment",
      buildBusinessCase: "Build Business Case",
      selectFramework: "Select Framework",
      viewMetrics: "View Metrics",
      generateReport: "Generate Report",
      
      // Company profiles
      startup: "Startup (10-50)",
      smb: "SMB (50-200)", 
      midmarket: "Mid-Market (200-1000)",
      enterprise: "Enterprise (1000+)",
      
      // Industries
      tech: "Technology",
      healthcare: "Healthcare",
      manufacturing: "Manufacturing", 
      services: "Professional Services",
      finance: "Financial Services",
      retail: "Retail",
      
      // Maturity levels
      basic: "Basic",
      developing: "Developing",
      mature: "Mature",
      optimized: "Optimized",
      
      // Status
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    es: {
      title: "Centro de Alineación Estratégica RH-Negocio",
      subtitle: "Transforma RH de centro de costos a creador de valor estratégico con marcos probados y métricas",
      description: "Alinea prácticas de RH con resultados de negocio usando marcos grado McKinsey, analíticas de personas y modelado ROI",
      
      // Navigation
      overview: "Vista Estratégica",
      alignmentAssessment: "Evaluación de Alineación",
      frameworks: "Marcos Estratégicos",
      metricsDashboard: "Panel de Métricas",
      peopleAnalytics: "Analíticas de Personas",
      businessCase: "Constructor Caso de Negocio",
      operatingModel: "Modelo Operativo",
      implementation: "Plan de Implementación",
      
      // Overview sections
      alignmentScore: "Puntaje de Alineación",
      businessImpact: "Impacto en Negocio",
      strategicGaps: "Brechas Estratégicas",
      quickWins: "Victorias Rápidas",
      
      // Assessment
      verticalAlignment: "Alineación Vertical",
      horizontalAlignment: "Alineación Horizontal",
      culturalAlignment: "Alineación Cultural",
      operationalAlignment: "Alineación Operacional",
      
      // Actions
      runAssessment: "Ejecutar Evaluación",
      buildBusinessCase: "Construir Caso de Negocio",
      selectFramework: "Seleccionar Marco",
      viewMetrics: "Ver Métricas",
      generateReport: "Generar Reporte",
      
      // Company profiles
      startup: "Startup (10-50)",
      smb: "PyME (50-200)",
      midmarket: "Mercado Medio (200-1000)",
      enterprise: "Empresa (1000+)",
      
      // Industries
      tech: "Tecnología",
      healthcare: "Salud",
      manufacturing: "Manufactura",
      services: "Servicios Profesionales", 
      finance: "Servicios Financieros",
      retail: "Retail",
      
      // Maturity levels
      basic: "Básico",
      developing: "Desarrollando",
      mature: "Maduro",
      optimized: "Optimizado",
      
      // Status
      critical: "Crítico",
      high: "Alto",
      medium: "Medio",
      low: "Bajo"
    }
  };

  const currentLabels = labels[language];

  // Strategic Frameworks Data
  const alignmentFrameworks: AlignmentFramework[] = [
    {
      id: 'hr-scorecard',
      name: 'HR Scorecard Framework',
      description: 'Balanced approach mapping HR deliverables to business results across four perspectives',
      perspectives: ['Financial', 'Customer', 'Internal Process', 'Learning & Growth'],
      strengths: ['Balanced measurement', 'Clear business linkage', 'Strategic communication'],
      bestFor: 'Organizations seeking comprehensive HR-business alignment measurement',
      implementationTime: '3-6 months',
      complexity: 'medium'
    },
    {
      id: 'strategy-map',
      name: 'Strategy Map & Balanced Scorecard',
      description: 'Visual framework showing how intangible assets convert to tangible business outcomes',
      perspectives: ['Learning & Growth', 'Internal Processes', 'Customer', 'Financial'],
      strengths: ['Visual clarity', 'Cause-effect relationships', 'Executive communication'],
      bestFor: 'Companies needing clear line-of-sight from HR to financial results',
      implementationTime: '2-4 months',
      complexity: 'medium'
    },
    {
      id: 'hr-value-chain',
      name: 'HR Value Chain Model',
      description: 'Flow model from HR activities to outcomes to business results',
      perspectives: ['HR Activities', 'HR Outcomes', 'Business Outcomes', 'Financial Results'],
      strengths: ['Process clarity', 'Research-backed', 'Implementation focus'],
      bestFor: 'Organizations wanting to prove HR ROI and impact',
      implementationTime: '2-3 months',
      complexity: 'low'
    },
    {
      id: 'alignment-star',
      name: 'HR Alignment Star Model',
      description: 'Multi-dimensional alignment across vertical, horizontal, and implementation quality',
      perspectives: ['Vertical Alignment', 'Horizontal Alignment', 'Implementation Quality', 'Temporal Alignment', 'Geographic Alignment'],
      strengths: ['Comprehensive view', 'Diagnostic capability', 'Complex organization focus'],
      bestFor: 'Global organizations with complex alignment challenges',
      implementationTime: '4-8 months',
      complexity: 'high'
    }
  ];

  // HR Metrics Data
  const hrMetrics: HRMetric[] = [
    {
      id: '1',
      category: 'financial',
      name: 'Revenue per Employee',
      current: 145000,
      target: 160000,
      benchmark: 155000,
      businessImpact: 'high',
      trend: 'up'
    },
    {
      id: '2',
      category: 'financial',
      name: 'HR Cost per Employee',
      current: 3200,
      target: 2800,
      benchmark: 3000,
      businessImpact: 'high',
      trend: 'down'
    },
    {
      id: '3',
      category: 'operational',
      name: 'Employee Engagement Score',
      current: 72,
      target: 85,
      benchmark: 78,
      businessImpact: 'high',
      trend: 'up'
    },
    {
      id: '4',
      category: 'operational',
      name: 'Voluntary Turnover Rate',
      current: 15,
      target: 10,
      benchmark: 12,
      businessImpact: 'high',
      trend: 'stable'
    },
    {
      id: '5',
      category: 'strategic',
      name: 'Internal Promotion Rate',
      current: 58,
      target: 70,
      benchmark: 65,
      businessImpact: 'medium',
      trend: 'up'
    },
    {
      id: '6',
      category: 'strategic',
      name: 'Innovation Rate (% Revenue from New Products)',
      current: 18,
      target: 25,
      benchmark: 22,
      businessImpact: 'high',
      trend: 'up'
    }
  ];

  // Alignment Assessment Data
  const alignmentAssessments: AlignmentAssessment[] = [
    {
      dimension: 'Vertical Alignment (HR-Business Strategy)',
      current: 68,
      target: 85,
      gap: 17,
      priority: 'high',
      recommendations: ['Increase HR participation in strategic planning', 'Align HR metrics with business KPIs', 'Develop business acumen in HR team']
    },
    {
      dimension: 'Horizontal Alignment (HR Practice Coherence)',
      current: 74,
      target: 85,
      gap: 11,
      priority: 'medium',
      recommendations: ['Audit HR policies for consistency', 'Integrate HR systems', 'Standardize performance criteria']
    },
    {
      dimension: 'Cultural Alignment (Values-Practice Fit)',
      current: 62,
      target: 80,
      gap: 18,
      priority: 'critical',
      recommendations: ['Values-based hiring practices', 'Culture measurement system', 'Leadership modeling programs']
    },
    {
      dimension: 'Operational Excellence (HR Efficiency)',
      current: 78,
      target: 85,
      gap: 7,
      priority: 'low',
      recommendations: ['Process automation', 'Self-service expansion', 'Analytics adoption']
    },
    {
      dimension: 'Strategic Partnership (Business Impact)',
      current: 58,
      target: 80,
      gap: 22,
      priority: 'critical',
      recommendations: ['Business case development', 'Cross-functional projects', 'Executive coaching for HR leaders']
    }
  ];

  const getMetricColor = (category: HRMetric['category']) => {
    switch (category) {
      case 'financial': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'operational': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'strategic': return 'text-purple-400 bg-purple-900/20 border-purple-700';
      case 'employee': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
    }
  };

  const getPriorityColor = (priority: AlignmentAssessment['priority']) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
    }
  };

  const getComplexityColor = (complexity: AlignmentFramework['complexity']) => {
    switch (complexity) {
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'high': return 'text-red-400 bg-red-900/20 border-red-700';
    }
  };

  const getTrendIcon = (trend: HRMetric['trend']) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-blue-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Context Selectors */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <select 
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="startup">{currentLabels.startup}</option>
              <option value="smb">{currentLabels.smb}</option>
              <option value="midmarket">{currentLabels.midmarket}</option>
              <option value="enterprise">{currentLabels.enterprise}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="tech">{currentLabels.tech}</option>
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
              <option value="services">{currentLabels.services}</option>
              <option value="finance">{currentLabels.finance}</option>
              <option value="retail">{currentLabels.retail}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">HR Maturity</label>
            <select 
              value={maturityLevel}
              onChange={(e) => setMaturityLevel(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="basic">{currentLabels.basic}</option>
              <option value="developing">{currentLabels.developing}</option>
              <option value="mature">{currentLabels.mature}</option>
              <option value="optimized">{currentLabels.optimized}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Analysis
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="alignment-assessment">{currentLabels.alignmentAssessment}</TabsTrigger>
            <TabsTrigger value="frameworks">{currentLabels.frameworks}</TabsTrigger>
            <TabsTrigger value="metrics-dashboard">{currentLabels.metricsDashboard}</TabsTrigger>
            <TabsTrigger value="people-analytics">{currentLabels.peopleAnalytics}</TabsTrigger>
            <TabsTrigger value="business-case">{currentLabels.businessCase}</TabsTrigger>
            <TabsTrigger value="operating-model">{currentLabels.operatingModel}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
          </TabsList>

          {/* Strategic Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Alignment Score Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.alignmentScore}</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">68%</div>
                  <div className="text-sm text-gray-400">Overall Alignment</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-1">3.5x</div>
                  <div className="text-sm text-gray-400">Revenue Growth Potential</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-1">2.1x</div>
                  <div className="text-sm text-gray-400">Profit Margin Uplift</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">21%</div>
                  <div className="text-sm text-gray-400">Engagement Boost</div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Strategic Insight</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Research shows companies with high HR-business alignment achieve 3.5x higher revenue growth 
                  and over 2x better profit margins. Your current 68% alignment score indicates significant 
                  opportunity for value creation through strategic HR transformation.
                </p>
              </div>
            </Card>

            {/* Strategic Gaps & Quick Wins */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.strategicGaps}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Cultural Alignment</div>
                      <div className="text-xs text-gray-400">22-point gap from target performance</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Strategic Partnership</div>
                      <div className="text-xs text-gray-400">HR not positioned as business driver</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Vertical Alignment</div>
                      <div className="text-xs text-gray-400">17-point improvement opportunity</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <Eye className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Horizontal Alignment</div>
                      <div className="text-xs text-gray-400">HR practice coherence needs attention</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.quickWins}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-medium text-white text-sm">HR Scorecard Implementation</div>
                      <div className="text-xs text-gray-400">3-month deployment, immediate visibility</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-medium text-white text-sm">People Analytics Platform</div>
                      <div className="text-xs text-gray-400">Data-driven decision making foundation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <Target className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Business KPI Integration</div>
                      <div className="text-xs text-gray-400">Link HR metrics to financial outcomes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Leadership Business Acumen</div>
                      <div className="text-xs text-gray-400">HR team strategic development program</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Business Impact Projections */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.businessImpact} Projections</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-3">Financial Impact (12 months)</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Revenue growth: +15-25%</li>
                    <li>• Profit margin improvement: +5-8%</li>
                    <li>• Cost per hire reduction: -20%</li>
                    <li>• Turnover cost savings: $180K</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-3">Operational Excellence</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Time-to-hire: -30%</li>
                    <li>• Employee engagement: +21%</li>
                    <li>• Internal promotion rate: +40%</li>
                    <li>• Process efficiency: +35%</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-bold text-white mb-3">Strategic Advantages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Innovation rate: +40%</li>
                    <li>• Market responsiveness: +50%</li>
                    <li>• Leadership pipeline strength: +60%</li>
                    <li>• Cultural resilience: +45%</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('alignment-assessment')}
                >
                  <Gauge className="w-4 h-4" />
                  {currentLabels.runAssessment}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('frameworks')}
                >
                  <Compass className="w-4 h-4" />
                  {currentLabels.selectFramework}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('business-case')}
                >
                  <Calculator className="w-4 h-4" />
                  {currentLabels.buildBusinessCase}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700"
                >
                  <Download className="w-4 h-4" />
                  {currentLabels.generateReport}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Alignment Assessment */}
          <TabsContent value="alignment-assessment" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic HR-Business Alignment Assessment</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Run Complete Assessment
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {alignmentAssessments.map((assessment, index) => (
                <Card key={index} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">{assessment.dimension}</h3>
                      <Badge className={`text-xs ${getPriorityColor(assessment.priority)}`}>
                        {assessment.priority.toUpperCase()} PRIORITY
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{assessment.current}%</div>
                      <div className="text-xs text-gray-400">Current State</div>
                      <div className="text-sm text-gray-400 mt-1">Target: {assessment.target}%</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Gap: {assessment.gap} points</span>
                    </div>
                    <Progress value={assessment.current} className="h-3" />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Recommendations</h4>
                    <ul className="space-y-1">
                      {assessment.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="text-sm text-gray-300 flex items-start gap-2">
                          <Rocket className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Assessment Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Assessment Summary & Next Steps</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Critical Priority (2 areas)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Cultural alignment and strategic partnership require immediate attention for business impact.
                  </p>
                  <div className="text-xs text-red-400">Expected ROI improvement: +40%</div>
                </div>
                
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">High Priority (1 area)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Vertical alignment improvements will drive strategic HR positioning.
                  </p>
                  <div className="text-xs text-orange-400">Expected ROI improvement: +25%</div>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Foundation Strong (2 areas)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Horizontal alignment and operational excellence provide solid foundation for growth.
                  </p>
                  <div className="text-xs text-green-400">Optimization opportunity: +15%</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Strategic Frameworks */}
          <TabsContent value="frameworks" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic HR Frameworks Selection</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Build Custom Framework
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {alignmentFrameworks.map((framework) => (
                <Card key={framework.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{framework.name}</h3>
                      <Badge className={`text-xs mt-1 ${getComplexityColor(framework.complexity)}`}>
                        {framework.complexity.toUpperCase()} COMPLEXITY
                      </Badge>
                    </div>
                    
                    <div className="text-right text-sm text-gray-400">
                      <div>{framework.implementationTime}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{framework.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Key Perspectives</h4>
                      <div className="flex flex-wrap gap-1">
                        {framework.perspectives.map((perspective, index) => (
                          <Badge key={index} className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">
                            {perspective}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Key Strengths</h4>
                      <ul className="space-y-1">
                        {framework.strengths.slice(0, 2).map((strength, index) => (
                          <li key={index} className="text-xs text-green-400 flex items-start gap-1">
                            <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Best For</h4>
                      <p className="text-xs text-gray-300">{framework.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedFramework(framework.id)}
                    >
                      Select Framework
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Framework Comparison Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Framework Comparison Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Framework</th>
                      <th className="text-center py-3 text-gray-400">Complexity</th>
                      <th className="text-center py-3 text-gray-400">Time to Value</th>
                      <th className="text-center py-3 text-gray-400">Business Focus</th>
                      <th className="text-center py-3 text-gray-400">Visual Impact</th>
                      <th className="text-center py-3 text-gray-400">Best for SMB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alignmentFrameworks.map((framework) => (
                      <tr key={framework.id} className="border-b border-gray-800">
                        <td className="py-3 text-white font-medium">{framework.name}</td>
                        <td className="text-center py-3">
                          <Badge className={`text-xs ${getComplexityColor(framework.complexity)}`}>
                            {framework.complexity}
                          </Badge>
                        </td>
                        <td className="text-center py-3 text-gray-400">{framework.implementationTime}</td>
                        <td className="text-center py-3">
                          {framework.id === 'hr-value-chain' || framework.id === 'hr-scorecard' ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3">
                          {framework.id === 'strategy-map' ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3">
                          {framework.complexity === 'low' || framework.complexity === 'medium' ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-red-400 rounded-full mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Metrics Dashboard */}
          <TabsContent value="metrics-dashboard" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">HR Impact Metrics Dashboard</h2>
              
              <div className="flex gap-2">
                <Button variant="outline" className="border-gray-600">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Metrics
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Export Dashboard
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {hrMetrics.map((metric) => (
                <Card key={metric.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-sm">{metric.name}</h3>
                      <Badge className={`text-xs mt-1 ${getMetricColor(metric.category)}`}>
                        {metric.category.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {getTrendIcon(metric.trend)}
                        <Badge className={`text-xs ${
                          metric.businessImpact === 'high' ? 'bg-red-900/20 text-red-400 border-red-700' :
                          metric.businessImpact === 'medium' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                          'bg-green-900/20 text-green-400 border-green-700'
                        }`}>
                          {metric.businessImpact} impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current:</span>
                      <span className="text-white font-medium">
                        {metric.category === 'financial' ? 
                          `$${metric.current.toLocaleString()}` : 
                          `${metric.current}${metric.name.includes('Rate') || metric.name.includes('Score') ? '%' : ''}`
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Target:</span>
                      <span className="text-blue-400">
                        {metric.category === 'financial' ? 
                          `$${metric.target.toLocaleString()}` : 
                          `${metric.target}${metric.name.includes('Rate') || metric.name.includes('Score') ? '%' : ''}`
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Benchmark:</span>
                      <span className="text-gray-400">
                        {metric.category === 'financial' ? 
                          `$${metric.benchmark.toLocaleString()}` : 
                          `${metric.benchmark}${metric.name.includes('Rate') || metric.name.includes('Score') ? '%' : ''}`
                        }
                      </span>
                    </div>
                  </div>
                  
                  <Progress 
                    value={metric.category === 'financial' && metric.name.includes('Cost') ? 
                      100 - (metric.current / metric.benchmark * 100) :
                      (metric.current / metric.target * 100)
                    } 
                    className="h-2" 
                  />
                  
                  <div className="mt-2 text-xs">
                    <span className={
                      (metric.category === 'financial' && metric.name.includes('Cost')) ?
                        (metric.current < metric.target ? 'text-green-400' : 'text-red-400') :
                        (metric.current >= metric.target ? 'text-green-400' : 'text-yellow-400')
                    }>
                      {metric.category === 'financial' && metric.name.includes('Cost') ?
                        `${metric.current > metric.target ? '+' : ''}${((metric.current - metric.target) / metric.target * 100).toFixed(1)}% vs target` :
                        `${metric.current < metric.target ? '-' : '+'}${Math.abs((metric.current - metric.target) / metric.target * 100).toFixed(1)}% ${metric.current >= metric.target ? 'above' : 'below'} target`
                      }
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Business Impact Correlation */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Business Impact Correlation Matrix</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-4">High-Impact Correlations</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Engagement → Revenue per Employee</span>
                        <Badge className="text-xs bg-green-900/20 text-green-400">r = 0.72</Badge>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">1% engagement increase = $2,400 revenue/employee</div>
                    </div>
                    
                    <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Turnover → Innovation Rate</span>
                        <Badge className="text-xs bg-green-900/20 text-green-400">r = -0.68</Badge>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">5% turnover reduction = 8% innovation increase</div>
                    </div>
                    
                    <div className="p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Internal Promotion → Engagement</span>
                        <Badge className="text-xs bg-blue-900/20 text-blue-400">r = 0.65</Badge>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">10% promotion increase = 7% engagement boost</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white mb-4">Financial Impact Summary</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Total Annual Impact</span>
                        <span className="text-lg font-bold text-green-400">$2.4M</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Cost Savings</span>
                        <span className="text-lg font-bold text-blue-400">$680K</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">Revenue Growth</span>
                        <span className="text-lg font-bold text-purple-400">$1.7M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* People Analytics */}
          <TabsContent value="people-analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">People Analytics & AI Integration</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Launch Analytics Platform
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Predictive Analytics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-bold text-white">Predictive Analytics</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Flight Risk Model</div>
                    <div className="text-xs text-gray-400">95% accuracy in predicting turnover</div>
                    <div className="text-xs text-purple-400 mt-1">18 employees at risk (next 90 days)</div>
                  </div>
                  
                  <div className="p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Performance Prediction</div>
                    <div className="text-xs text-gray-400">Early identification of high performers</div>
                    <div className="text-xs text-blue-400 mt-1">12 high-potential candidates identified</div>
                  </div>
                  
                  <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Skills Gap Forecast</div>
                    <div className="text-xs text-gray-400">Future capability requirements</div>
                    <div className="text-xs text-green-400 mt-1">AI/ML skills gap: 24 months</div>
                  </div>
                </div>
              </Card>

              {/* AI Applications */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h3 className="font-bold text-white">AI Applications</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Recruitment AI</div>
                    <div className="text-xs text-gray-400">Bias-free candidate screening</div>
                    <div className="text-xs text-yellow-400 mt-1">30% diversity improvement</div>
                  </div>
                  
                  <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Sentiment Analysis</div>
                    <div className="text-xs text-gray-400">Real-time engagement monitoring</div>
                    <div className="text-xs text-green-400 mt-1">Weekly sentiment: 78% positive</div>
                  </div>
                  
                  <div className="p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Learning Personalization</div>
                    <div className="text-xs text-gray-400">AI-driven development paths</div>
                    <div className="text-xs text-blue-400 mt-1">85% completion rate improvement</div>
                  </div>
                </div>
              </Card>

              {/* Real-time Insights */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <Activity className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-bold text-white">Real-time Insights</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Pulse Analytics</div>
                    <div className="text-xs text-gray-400">Continuous engagement tracking</div>
                    <div className="text-xs text-green-400 mt-1">Daily response rate: 89%</div>
                  </div>
                  
                  <div className="p-3 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Manager Effectiveness</div>
                    <div className="text-xs text-gray-400">Team performance correlation</div>
                    <div className="text-xs text-orange-400 mt-1">Top 20% managers drive 3x results</div>
                  </div>
                  
                  <div className="p-3 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="text-sm font-medium text-white">Network Analysis</div>
                    <div className="text-xs text-gray-400">Collaboration patterns</div>
                    <div className="text-xs text-purple-400 mt-1">3 silos identified for intervention</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Analytics Implementation Roadmap */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Analytics Implementation Roadmap</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Foundation</h4>
                    <div className="text-xs text-gray-400">Months 1-2</div>
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Data integration</li>
                    <li>• Quality assessment</li>
                    <li>• Basic dashboards</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Descriptive</h4>
                    <div className="text-xs text-gray-400">Months 3-4</div>
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Historical analysis</li>
                    <li>• Trend identification</li>
                    <li>• KPI tracking</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Predictive</h4>
                    <div className="text-xs text-gray-400">Months 5-6</div>
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• AI model training</li>
                    <li>• Risk prediction</li>
                    <li>• Scenario modeling</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Prescriptive</h4>
                    <div className="text-xs text-gray-400">Months 7-8</div>
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Recommendation engine</li>
                    <li>• Automated insights</li>
                    <li>• Decision support</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Business Case Builder */}
          <TabsContent value="business-case" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic HR Business Case Builder</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Executive Presentation
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Investment Analysis */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Investment Requirements</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Technology Platform</span>
                      <span className="text-white font-medium">$180K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      HCM system, analytics platform, integration
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Implementation Services</span>
                      <span className="text-white font-medium">$120K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Consulting, training, change management
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Team Development</span>
                      <span className="text-white font-medium">$75K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      HR upskilling, business acumen, analytics training
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Investment (Year 1)</span>
                      <span className="text-green-400 font-bold text-lg">$375K</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Financial Benefits */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Financial Benefits (3-Year)</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Revenue Growth (21%)</span>
                      <span className="text-white font-medium">$2.1M</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Enhanced productivity and innovation
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Cost Reduction</span>
                      <span className="text-white font-medium">$680K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Turnover reduction, process efficiency
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Risk Mitigation</span>
                      <span className="text-white font-medium">$350K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Compliance, legal, operational risks
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Benefits</span>
                      <span className="text-green-400 font-bold text-lg">$3.13M</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ROI Summary & Strategic Value</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">735%</div>
                  <div className="text-sm text-gray-400">3-Year ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">6 mo</div>
                  <div className="text-sm text-gray-400">Payback Period</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">$1.04M</div>
                  <div className="text-sm text-gray-400">Annual Value (Year 3)</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">8.3:1</div>
                  <div className="text-sm text-gray-400">Benefit-Cost Ratio</div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Quantified Benefits</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Revenue growth through productivity gains</li>
                    <li>• Cost savings from reduced turnover</li>
                    <li>• Efficiency improvements in HR processes</li>
                    <li>• Risk mitigation value</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Strategic Advantages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Competitive talent advantage</li>
                    <li>• Data-driven decision making</li>
                    <li>• Scalable growth foundation</li>
                    <li>• Market responsiveness</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Business Case Template */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Executive Business Case Template</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Problem Statement</h4>
                  <p className="text-sm text-gray-300">
                    Current HR-business alignment at 68% is limiting growth potential. Organizations with high 
                    alignment achieve 3.5x higher revenue growth and 2x better profit margins.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Proposed Solution</h4>
                  <p className="text-sm text-gray-300">
                    Implement strategic HR transformation using proven frameworks, people analytics, and 
                    technology platform to align HR practices with business outcomes.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Financial Justification</h4>
                  <p className="text-sm text-gray-300">
                    $375K investment delivers $3.13M in 3-year benefits (735% ROI) with 6-month payback 
                    through revenue growth, cost reduction, and risk mitigation.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Strategic Imperatives</h4>
                  <p className="text-sm text-gray-300">
                    Essential for competitive talent advantage, scalable growth, and market responsiveness 
                    in the evolving business landscape.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Operating Model */}
          <TabsContent value="operating-model" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic HR Operating Model Design</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Design Custom Model
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Current State */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Current Operating Model</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Functional Siloed Model</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Recruiting team separate from L&D</li>
                      <li>• Performance management disconnected</li>
                      <li>• Limited business partnership</li>
                      <li>• Reactive, transactional focus</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Pain Points</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Lack of strategic influence</li>
                      <li>• Inconsistent employee experience</li>
                      <li>• Duplicate efforts and processes</li>
                      <li>• Limited data visibility</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Future State */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Recommended Future State</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Business Partner + CoE Model</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Strategic HRBPs embedded in business</li>
                      <li>• Centers of Excellence for expertise</li>
                      <li>• Shared services for efficiency</li>
                      <li>• Data-driven decision making</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Key Benefits</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Strategic business influence</li>
                      <li>• Consistent global practices</li>
                      <li>• Operational efficiency</li>
                      <li>• Enhanced employee experience</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Operating Model Components */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Operating Model Components</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-center mb-3">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white">Business Partners</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Strategic consultation</li>
                    <li>• Change management</li>
                    <li>• Workforce planning</li>
                    <li>• Performance coaching</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-center mb-3">
                    <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white">Centers of Excellence</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Talent acquisition</li>
                    <li>• Learning & development</li>
                    <li>• Compensation & benefits</li>
                    <li>• People analytics</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="text-center mb-3">
                    <Settings className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white">Shared Services</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Payroll processing</li>
                    <li>• Benefits administration</li>
                    <li>• HR helpdesk</li>
                    <li>• Data management</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Transformation Timeline */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Transformation Timeline</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Foundation & Planning</h4>
                    <p className="text-sm text-gray-400">Operating model design, stakeholder alignment, technology selection</p>
                  </div>
                  <Badge className="bg-blue-900/20 text-blue-400 border-blue-700">Planning</Badge>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Pilot Implementation</h4>
                    <p className="text-sm text-gray-400">HRBP pilot, CoE establishment, process redesign</p>
                  </div>
                  <Badge className="bg-green-900/20 text-green-400 border-green-700">Active</Badge>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Full Deployment</h4>
                    <p className="text-sm text-gray-400">Complete model rollout, training, change management</p>
                  </div>
                  <Badge className="bg-purple-900/20 text-purple-400 border-purple-700">Planned</Badge>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Optimization</h4>
                    <p className="text-sm text-gray-400">Performance measurement, continuous improvement, value realization</p>
                  </div>
                  <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700">Future</Badge>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Plan */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Implementation Plan</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Project Plan
              </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-white">Assessment & Design</h3>
                  <p className="text-sm text-gray-400">Months 1-2</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Current state analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Framework selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Operating model design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Technology selection</span>
                  </div>
                </div>
              </Card>

              {/* Phase 2 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-white">Foundation Building</h3>
                  <p className="text-sm text-gray-400">Months 3-4</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Platform implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Data integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Process redesign</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Team training</span>
                  </div>
                </div>
              </Card>

              {/* Phase 3 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-white">Pilot & Refine</h3>
                  <p className="text-sm text-gray-400">Months 5-6</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Pilot deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Feedback collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Process refinement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Success measurement</span>
                  </div>
                </div>
              </Card>

              {/* Phase 4 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="font-bold text-white">Scale & Optimize</h3>
                  <p className="text-sm text-gray-400">Months 7-12</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Full rollout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Change management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Continuous improvement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Value realization</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Implementation Success Factors */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Critical Success Factors</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Leadership Commitment</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Executive sponsorship</li>
                    <li>• Clear vision communication</li>
                    <li>• Resource allocation</li>
                    <li>• Change leadership</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Stakeholder Engagement</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Business leader buy-in</li>
                    <li>• Employee communication</li>
                    <li>• Manager training</li>
                    <li>• Feedback mechanisms</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Measurement & Adaptation</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Progress tracking</li>
                    <li>• KPI monitoring</li>
                    <li>• Course correction</li>
                    <li>• Value demonstration</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Risk Mitigation */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Risk Mitigation Strategy</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Change Resistance</div>
                    <div className="text-xs text-gray-400">Mitigation: Comprehensive communication, training, and quick wins demonstration</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Technology Integration</div>
                    <div className="text-xs text-gray-400">Mitigation: Phased implementation, thorough testing, vendor support</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Resource Constraints</div>
                    <div className="text-xs text-gray-400">Mitigation: Prioritized approach, external support, capacity planning</div>
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