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
  ExternalLink
} from 'lucide-react';

interface HumanCapitalStrategyCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface PEOProvider {
  id: string;
  name: string;
  marketPosition: string;
  rating: number;
  pricing: string;
  specialties: string[];
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

interface CommunicationMetric {
  id: string;
  category: 'leadership' | 'team' | 'feedback' | 'employer-brand' | 'internal' | 'performance';
  name: string;
  current: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  priority: 'high' | 'medium' | 'low';
}

interface HCMAssessment {
  area: string;
  score: number;
  maturity: 'basic' | 'developing' | 'mature' | 'optimized';
  recommendations: string[];
}

export function HumanCapitalStrategyCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: HumanCapitalStrategyCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'peo-analysis' | 'communication-strategy' | 'leadership-hcm' | 'build-vs-buy' | 'implementation' | 'roi-modeling'>('overview');
  const [selectedPEO, setSelectedPEO] = useState<string | null>(null);
  const [companySize, setCompanySize] = useState<'startup' | 'smb' | 'midmarket' | 'enterprise'>('smb');
  const [industry, setIndustry] = useState<'tech' | 'healthcare' | 'manufacturing' | 'services' | 'other'>('tech');

  const labels = {
    en: {
      title: "Human Capital Strategy Center",
      subtitle: "Strategic advisory for PEO evaluation, communication optimization, and HCM excellence",
      description: "Transform your people strategy with data-driven insights, market intelligence, and advisory-grade recommendations",
      
      // Navigation
      overview: "Strategic Overview",
      peoAnalysis: "PEO Market Analysis",
      communicationStrategy: "Communication Strategy",
      leadershipHcm: "Leadership & HCM",
      buildVsBuy: "Build vs Buy Analysis",
      implementation: "Implementation Roadmap",
      roiModeling: "ROI Modeling",
      
      // Overview sections
      strategicRecommendations: "Strategic Recommendations",
      marketPosition: "Market Position Analysis",
      riskAssessment: "Risk Assessment",
      competitiveIntelligence: "Competitive Intelligence",
      
      // PEO Analysis
      peoComparison: "PEO Provider Comparison",
      marketLeaders: "Market Leaders",
      emergingPlayers: "Emerging Players",
      costAnalysis: "Cost Analysis",
      complianceFactors: "Compliance Factors",
      
      // Communication Strategy
      communicationAudit: "Communication Audit",
      leadershipMessaging: "Leadership Messaging",
      employeeEngagement: "Employee Engagement",
      employerBranding: "Employer Branding",
      feedbackSystems: "Feedback Systems",
      
      // Actions
      generateReport: "Generate Strategic Report",
      scheduleConsultation: "Schedule Consultation",
      requestProposal: "Request Proposal",
      viewDetails: "View Details",
      compare: "Compare Options",
      
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
      other: "Other",
      
      // Metrics
      currentState: "Current State",
      targetState: "Target State",
      maturityLevel: "Maturity Level",
      timeToValue: "Time to Value",
      riskLevel: "Risk Level",
      
      // Status
      recommended: "Recommended",
      consider: "Consider",
      caution: "Caution",
      notRecommended: "Not Recommended"
    },
    es: {
      title: "Centro de Estrategia de Capital Humano",
      subtitle: "Asesoría estratégica para evaluación PEO, optimización de comunicación y excelencia HCM",
      description: "Transforma tu estrategia de personas con insights basados en datos, inteligencia de mercado y recomendaciones de grado asesor",
      
      // Navigation
      overview: "Vista Estratégica",
      peoAnalysis: "Análisis Mercado PEO",
      communicationStrategy: "Estrategia Comunicación",
      leadershipHcm: "Liderazgo y HCM",
      buildVsBuy: "Análisis Construir vs Comprar",
      implementation: "Hoja de Ruta",
      roiModeling: "Modelado ROI",
      
      // Overview sections
      strategicRecommendations: "Recomendaciones Estratégicas",
      marketPosition: "Análisis Posición Mercado",
      riskAssessment: "Evaluación de Riesgo",
      competitiveIntelligence: "Inteligencia Competitiva",
      
      // PEO Analysis
      peoComparison: "Comparación Proveedores PEO",
      marketLeaders: "Líderes del Mercado",
      emergingPlayers: "Jugadores Emergentes",
      costAnalysis: "Análisis de Costos",
      complianceFactors: "Factores de Cumplimiento",
      
      // Communication Strategy
      communicationAudit: "Auditoría Comunicación",
      leadershipMessaging: "Mensajería Liderazgo",
      employeeEngagement: "Compromiso Empleados",
      employerBranding: "Marca Empleador",
      feedbackSystems: "Sistemas Retroalimentación",
      
      // Actions
      generateReport: "Generar Reporte Estratégico",
      scheduleConsultation: "Programar Consulta",
      requestProposal: "Solicitar Propuesta",
      viewDetails: "Ver Detalles",
      compare: "Comparar Opciones",
      
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
      other: "Otro",
      
      // Metrics
      currentState: "Estado Actual",
      targetState: "Estado Objetivo",
      maturityLevel: "Nivel Madurez",
      timeToValue: "Tiempo a Valor",
      riskLevel: "Nivel Riesgo",
      
      // Status
      recommended: "Recomendado",
      consider: "Considerar",
      caution: "Precaución", 
      notRecommended: "No Recomendado"
    }
  };

  const currentLabels = labels[language];

  // PEO Provider Data
  const peoProviders: PEOProvider[] = [
    {
      id: 'adp-totalsource',
      name: 'ADP TotalSource',
      marketPosition: 'Market Leader',
      rating: 4.2,
      pricing: '$4-11/employee/month',
      specialties: ['Large Enterprise', 'Multi-State', 'Compliance'],
      features: ['Payroll', 'Benefits', 'Compliance', 'HR Tech', 'Analytics'],
      pros: ['Largest market share', 'Comprehensive platform', 'Strong compliance'],
      cons: ['Higher cost', 'Complex implementation', 'Limited customization'],
      bestFor: 'Large companies with complex multi-state operations'
    },
    {
      id: 'insperity',
      name: 'Insperity',
      marketPosition: 'Market Leader',
      rating: 4.1,
      pricing: '$5-12/employee/month',
      specialties: ['Mid-Market', 'Consultative', 'HR Expertise'],
      features: ['Full HR Suite', 'Recruiting', 'Training', 'Risk Management'],
      pros: ['Deep HR expertise', 'Consultative approach', 'Strong customer service'],
      cons: ['Higher pricing', 'Less tech-forward', 'Complex contracts'],
      bestFor: 'Mid-market companies seeking consultative HR partnership'
    },
    {
      id: 'trinet',
      name: 'TriNet',
      marketPosition: 'Market Leader',
      rating: 4.0,
      pricing: '$6-10/employee/month',
      specialties: ['SMB', 'Industry-Specific', 'Benefits'],
      features: ['Industry Specialization', 'Benefits', 'Compliance', 'HR Platform'],
      pros: ['Industry expertise', 'Competitive benefits', 'Good tech platform'],
      cons: ['Limited to certain industries', 'Variable service quality', 'Pricing complexity'],
      bestFor: 'SMBs in specialized industries (tech, healthcare, etc.)'
    },
    {
      id: 'justworks',
      name: 'Justworks',
      marketPosition: 'Growth Leader',
      rating: 4.3,
      pricing: '$4-8/employee/month',
      specialties: ['Startups', 'Tech Companies', 'Transparent Pricing'],
      features: ['Simple Onboarding', 'Benefits', 'Compliance', 'International'],
      pros: ['Transparent pricing', 'Easy to use', 'Great for startups'],
      cons: ['Limited customization', 'Basic reporting', 'Newer market player'],
      bestFor: 'Startups and tech companies seeking simplicity'
    },
    {
      id: 'rippling',
      name: 'Rippling',
      marketPosition: 'Tech Innovator',
      rating: 4.4,
      pricing: '$3-9/employee/month',
      specialties: ['Tech-Forward', 'Automation', 'Integration'],
      features: ['Advanced Automation', 'IT Management', 'Global Payroll', 'Integrations'],
      pros: ['Cutting-edge technology', 'Excellent integrations', 'Competitive pricing'],
      cons: ['Newer to PEO market', 'Fast-moving changes', 'Learning curve'],
      bestFor: 'Tech-savvy companies wanting advanced automation'
    },
    {
      id: 'paychex',
      name: 'Paychex',
      marketPosition: 'Established Player',
      rating: 3.8,
      pricing: '$5-9/employee/month',
      specialties: ['SMB', 'Flexible Plans', 'Regional Focus'],
      features: ['Flexible Options', 'Payroll Focus', 'Benefits', 'HR Support'],
      pros: ['Flexible service levels', 'Strong payroll expertise', 'Local support'],
      cons: ['Limited innovation', 'Variable technology', 'Complex pricing'],
      bestFor: 'Traditional SMBs seeking flexible service options'
    }
  ];

  // Communication Metrics
  const communicationMetrics: CommunicationMetric[] = [
    {
      id: '1',
      category: 'leadership',
      name: 'Leadership Message Clarity',
      current: 72,
      target: 85,
      trend: 'up',
      priority: 'high'
    },
    {
      id: '2', 
      category: 'team',
      name: 'Cross-Team Collaboration',
      current: 68,
      target: 80,
      trend: 'stable',
      priority: 'medium'
    },
    {
      id: '3',
      category: 'feedback',
      name: 'Feedback Frequency',
      current: 45,
      target: 70,
      trend: 'up',
      priority: 'high'
    },
    {
      id: '4',
      category: 'employer-brand',
      name: 'Employer Brand Strength',
      current: 82,
      target: 85,
      trend: 'up',
      priority: 'low'
    },
    {
      id: '5',
      category: 'internal',
      name: 'Internal Communication Satisfaction',
      current: 64,
      target: 75,
      trend: 'down',
      priority: 'high'
    },
    {
      id: '6',
      category: 'performance',
      name: 'Performance Communication Alignment',
      current: 58,
      target: 80,
      trend: 'stable',
      priority: 'medium'
    }
  ];

  // HCM Assessment Data
  const hcmAssessments: HCMAssessment[] = [
    {
      area: 'Talent Acquisition',
      score: 78,
      maturity: 'mature',
      recommendations: ['Implement AI-powered screening', 'Enhance employer branding', 'Reduce time-to-hire metrics']
    },
    {
      area: 'Performance Management',
      score: 65,
      maturity: 'developing',
      recommendations: ['Move to continuous feedback model', 'Integrate OKR framework', 'Enhance manager training']
    },
    {
      area: 'Learning & Development',
      score: 82,
      maturity: 'mature',
      recommendations: ['Personalize learning paths', 'Measure ROI on training', 'Expand leadership development']
    },
    {
      area: 'Succession Planning',
      score: 45,
      maturity: 'basic',
      recommendations: ['Create succession pipeline', 'Identify high-potential talent', 'Develop retention strategies']
    },
    {
      area: 'Workforce Analytics',
      score: 38,
      maturity: 'basic',
      recommendations: ['Implement predictive analytics', 'Create executive dashboards', 'Establish data governance']
    },
    {
      area: 'Employee Experience',
      score: 71,
      maturity: 'developing',
      recommendations: ['Enhance onboarding journey', 'Improve internal mobility', 'Expand recognition programs']
    }
  ];

  const getRecommendationColor = (score: number) => {
    if (score >= 80) return 'text-green-400 bg-green-900/20 border-green-700';
    if (score >= 60) return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
    return 'text-red-400 bg-red-900/20 border-red-700';
  };

  const getRecommendationLabel = (score: number) => {
    if (score >= 80) return currentLabels.recommended;
    if (score >= 60) return currentLabels.consider;
    return currentLabels.caution;
  };

  const getPriorityColor = (priority: CommunicationMetric['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
    }
  };

  const getTrendIcon = (trend: CommunicationMetric['trend']) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  const getMaturityLevel = (maturity: HCMAssessment['maturity']) => {
    switch (maturity) {
      case 'basic': return 'Basic';
      case 'developing': return 'Developing';
      case 'mature': return 'Mature';
      case 'optimized': return 'Optimized';
    }
  };

  const getMaturityColor = (maturity: HCMAssessment['maturity']) => {
    switch (maturity) {
      case 'basic': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'developing': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'mature': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'optimized': return 'text-green-400 bg-green-900/20 border-green-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-blue-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Company Context Selector */}
        <div className="flex gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <select 
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value as any)}
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
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
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="tech">{currentLabels.tech}</option>
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
              <option value="services">{currentLabels.services}</option>
              <option value="other">{currentLabels.other}</option>
            </select>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="peo-analysis">{currentLabels.peoAnalysis}</TabsTrigger>
            <TabsTrigger value="communication-strategy">{currentLabels.communicationStrategy}</TabsTrigger>
            <TabsTrigger value="leadership-hcm">{currentLabels.leadershipHcm}</TabsTrigger>
            <TabsTrigger value="build-vs-buy">{currentLabels.buildVsBuy}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
            <TabsTrigger value="roi-modeling">{currentLabels.roiModeling}</TabsTrigger>
          </TabsList>

          {/* Strategic Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Strategic Recommendations */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.strategicRecommendations}</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <h4 className="font-bold text-white">PEO Strategy</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Consider hybrid PEO model for {companySize} {industry} company. Estimated 15-25% cost reduction in HR operations.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => setActiveTab('peo-analysis')}
                  >
                    View Analysis →
                  </Button>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-white">Communication Gaps</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Critical gaps identified in feedback systems and internal communications. Quick wins available.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => setActiveTab('communication-strategy')}
                  >
                    Fix Gaps →
                  </Button>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h4 className="font-bold text-white">HCM Maturity</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Current HCM maturity at 65%. Strategic roadmap to reach 85% maturity within 18 months.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => setActiveTab('leadership-hcm')}
                  >
                    View Roadmap →
                  </Button>
                </div>
              </div>
            </Card>

            {/* Market Position Analysis */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.marketPosition}</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">HR Technology Maturity</span>
                    <span className="text-white font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Compliance Readiness</span>
                    <span className="text-white font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Talent Competitiveness</span>
                    <span className="text-white font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Cost Efficiency</span>
                    <span className="text-white font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.riskAssessment}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Compliance Risk</div>
                      <div className="text-xs text-gray-400">Multi-state operations without unified system</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Talent Retention Risk</div>
                      <div className="text-xs text-gray-400">Limited career development pathways</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Operational Efficiency</div>
                      <div className="text-xs text-gray-400">Manual processes limiting scalability</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('peo-analysis')}
                >
                  <Shield className="w-4 h-4" />
                  {currentLabels.compare} PEOs
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('communication-strategy')}
                >
                  <MessageSquare className="w-4 h-4" />
                  Audit Communications
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('roi-modeling')}
                >
                  <Calculator className="w-4 h-4" />
                  Model ROI
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

          {/* PEO Market Analysis */}
          <TabsContent value="peo-analysis" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.peoComparison}</h2>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-gray-600">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Size
                </Button>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {currentLabels.requestProposal}
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {peoProviders.map((provider) => (
                <Card key={provider.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{provider.name}</h3>
                      <p className="text-sm text-gray-400">{provider.marketPosition}</p>
                      <p className="text-sm text-blue-400">{provider.pricing}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{provider.rating}</span>
                      </div>
                      <Badge className={`text-xs mt-1 ${getRecommendationColor(provider.rating * 20)}`}>
                        {getRecommendationLabel(provider.rating * 20)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.specialties.map((specialty, index) => (
                          <Badge key={index} className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} className="text-xs bg-gray-700 text-gray-300">
                            {feature}
                          </Badge>
                        ))}
                        {provider.features.length > 3 && (
                          <Badge className="text-xs bg-gray-700 text-gray-300">
                            +{provider.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Best For</h4>
                      <p className="text-xs text-gray-300">{provider.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedPEO(provider.id)}
                    >
                      {currentLabels.viewDetails}
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

            {/* Market Analysis Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Market Analysis Summary</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$66.2B</div>
                  <div className="text-sm text-gray-400">Global PEO Market (2024)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">208K</div>
                  <div className="text-sm text-gray-400">U.S. Businesses Using PEOs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">16.5%</div>
                  <div className="text-sm text-gray-400">Annual Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">7-9%</div>
                  <div className="text-sm text-gray-400">Cost Reduction Potential</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Communication Strategy */}
          <TabsContent value="communication-strategy" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.communicationAudit}</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Action Plan
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Communication Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Communication Health Metrics</h3>
                
                <div className="space-y-4">
                  {communicationMetrics.map((metric) => (
                    <div key={metric.id} className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white text-sm">{metric.name}</h4>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(metric.trend)}
                          <Badge className={`text-xs ${getPriorityColor(metric.priority)}`}>
                            {metric.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{currentLabels.currentState}: {metric.current}%</span>
                        <span className="text-gray-400">{currentLabels.targetState}: {metric.target}%</span>
                      </div>
                      <Progress value={metric.current} className="h-2" />
                      
                      <div className="mt-2 text-xs">
                        <span className={metric.current >= metric.target ? 'text-green-400' : 'text-yellow-400'}>
                          Gap: {metric.target - metric.current}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Communication Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Strategic Communication Framework</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Leadership Messaging</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Clarity and transparency initiatives</li>
                      <li>• Consistent cross-platform messaging</li>
                      <li>• Empathy and approachability training</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Team Collaboration</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Cross-functional communication channels</li>
                      <li>• Knowledge sharing platforms</li>
                      <li>• Hybrid collaboration models</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Feedback Systems</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Continuous feedback mechanisms</li>
                      <li>• 360-degree feedback integration</li>
                      <li>• Real-time pulse surveys</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Employer Branding</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Authentic storytelling strategies</li>
                      <li>• Employee advocacy programs</li>
                      <li>• Multi-channel brand consistency</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Communication Technology Stack */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Recommended Communication Technology Stack</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Internal Comms</h4>
                  <p className="text-sm text-gray-400">Slack, Teams, Workvivo</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Analytics</h4>
                  <p className="text-sm text-gray-400">Culture Amp, Officevibe</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Recognition</h4>
                  <p className="text-sm text-gray-400">Bonusly, Assembly</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Employer Brand</h4>
                  <p className="text-sm text-gray-400">LinkedIn, Glassdoor</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Leadership & HCM Assessment */}
          <TabsContent value="leadership-hcm" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Leadership & HCM Maturity Assessment</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Create Development Plan
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {hcmAssessments.map((assessment, index) => (
                <Card key={index} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{assessment.area}</h3>
                      <Badge className={`text-xs mt-1 ${getMaturityColor(assessment.maturity)}`}>
                        {getMaturityLevel(assessment.maturity)}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{assessment.score}%</div>
                      <div className="text-xs text-gray-400">{currentLabels.maturityLevel}</div>
                    </div>
                  </div>
                  
                  <Progress value={assessment.score} className="h-2 mb-4" />
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Recommendations</h4>
                    <ul className="space-y-1">
                      {assessment.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="text-xs text-gray-300 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Leadership Frameworks Comparison */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Leadership Framework Recommendations</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Framework</th>
                      <th className="text-center py-3 text-gray-400">Fit Score</th>
                      <th className="text-center py-3 text-gray-400">Context</th>
                      <th className="text-center py-3 text-gray-400">Benefits</th>
                      <th className="text-center py-3 text-gray-400">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Transformational</td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">92%</Badge>
                      </td>
                      <td className="text-center py-3 text-gray-400">Growth phase</td>
                      <td className="text-center py-3 text-gray-400">Innovation, Culture</td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400 border-green-700">Implement</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Situational</td>
                      <td className="text-center py-3">
                        <Badge className="bg-blue-900/20 text-blue-400">85%</Badge>
                      </td>
                      <td className="text-center py-3 text-gray-400">Diverse teams</td>
                      <td className="text-center py-3 text-gray-400">Flexibility, Adaptation</td>
                      <td className="text-center py-3">
                        <Badge className="bg-blue-900/20 text-blue-400 border-blue-700">Consider</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Servant</td>
                      <td className="text-center py-3">
                        <Badge className="bg-purple-900/20 text-purple-400">78%</Badge>
                      </td>
                      <td className="text-center py-3 text-gray-400">Value-driven orgs</td>
                      <td className="text-center py-3 text-gray-400">Employee development</td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700">Pilot</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Build vs Buy Analysis */}
          <TabsContent value="build-vs-buy" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Build vs Buy vs PEO Analysis</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Business Case
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Build Internal */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <Building className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white">Build Internal</h3>
                  <p className="text-sm text-gray-400">In-house HR team & systems</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">Pros</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Full control over processes</li>
                      <li>• Custom solutions</li>
                      <li>• Direct culture alignment</li>
                      <li>• No vendor dependency</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Cons</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• High upfront costs</li>
                      <li>• Requires expertise</li>
                      <li>• Compliance risks</li>
                      <li>• Scaling challenges</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Total Cost (3 years)</span>
                      <span className="text-white font-medium">$750K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Level</span>
                      <Badge className="text-xs bg-red-900/20 text-red-400 border-red-700">High</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Buy/Vendor */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <Briefcase className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white">Buy Solutions</h3>
                  <p className="text-sm text-gray-400">Best-of-breed vendors</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">Pros</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Faster implementation</li>
                      <li>• Proven solutions</li>
                      <li>• Regular updates</li>
                      <li>• Specialized expertise</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Cons</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Integration complexity</li>
                      <li>• Multiple vendors</li>
                      <li>• Limited customization</li>
                      <li>• Ongoing fees</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Total Cost (3 years)</span>
                      <span className="text-white font-medium">$450K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Level</span>
                      <Badge className="text-xs bg-yellow-900/20 text-yellow-400 border-yellow-700">Medium</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* PEO Partnership */}
              <Card className="p-6 bg-gray-800 border-green-700 border-2">
                <div className="text-center mb-4">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white">PEO Partnership</h3>
                  <p className="text-sm text-gray-400">Co-employment model</p>
                  <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700 mt-2">
                    Recommended
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">Pros</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Comprehensive solution</li>
                      <li>• Risk mitigation</li>
                      <li>• Cost-effective benefits</li>
                      <li>• Compliance expertise</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Cons</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Less control</li>
                      <li>• Shared employment</li>
                      <li>• Contract complexity</li>
                      <li>• Change management</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Total Cost (3 years)</span>
                      <span className="text-white font-medium">$380K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Level</span>
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">Low</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Decision Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Decision Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Criteria</th>
                      <th className="text-center py-3 text-gray-400">Weight</th>
                      <th className="text-center py-3 text-gray-400">Build</th>
                      <th className="text-center py-3 text-gray-400">Buy</th>
                      <th className="text-center py-3 text-gray-400">PEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white">Cost Efficiency</td>
                      <td className="text-center py-3 text-gray-400">25%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-red-900/20 text-red-400">3/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">7/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">9/10</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white">Time to Implementation</td>
                      <td className="text-center py-3 text-gray-400">20%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-red-900/20 text-red-400">2/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">6/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">8/10</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white">Risk Management</td>
                      <td className="text-center py-3 text-gray-400">30%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-red-900/20 text-red-400">4/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">6/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">9/10</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white">Scalability</td>
                      <td className="text-center py-3 text-gray-400">15%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">5/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">7/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">8/10</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white">Control</td>
                      <td className="text-center py-3 text-gray-400">10%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400">10/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">7/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400">6/10</Badge>
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="py-3 text-white font-bold">Total Score</td>
                      <td className="text-center py-3 text-gray-400">100%</td>
                      <td className="text-center py-3">
                        <Badge className="bg-red-900/20 text-red-400 font-bold">3.8/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-yellow-900/20 text-yellow-400 font-bold">6.4/10</Badge>
                      </td>
                      <td className="text-center py-3">
                        <Badge className="bg-green-900/20 text-green-400 font-bold">8.3/10</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Roadmap */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Implementation Roadmap</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Download Roadmap
              </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-white">Assessment</h3>
                  <p className="text-sm text-gray-400">Weeks 1-4</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Current state analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Requirements gathering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Stakeholder interviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Vendor evaluation</span>
                  </div>
                </div>
              </Card>

              {/* Phase 2 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-white">Selection</h3>
                  <p className="text-sm text-gray-400">Weeks 5-8</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">RFP process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Demos & evaluations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Contract negotiations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Final selection</span>
                  </div>
                </div>
              </Card>

              {/* Phase 3 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-white">Implementation</h3>
                  <p className="text-sm text-gray-400">Weeks 9-16</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Data migration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">System integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Process transition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Training & adoption</span>
                  </div>
                </div>
              </Card>

              {/* Phase 4 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="font-bold text-white">Optimization</h3>
                  <p className="text-sm text-gray-400">Weeks 17-24</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Performance monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Process refinement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">ROI measurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Continuous improvement</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Timeline Chart */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Implementation Timeline</h3>
              
              <div className="h-64 flex items-center justify-center border border-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <Calendar className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Timeline Visualization</p>
                  <p className="text-sm">Detailed Gantt chart with milestones, dependencies, and critical path</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Modeling */}
          <TabsContent value="roi-modeling" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">ROI Modeling & Financial Analysis</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Export Financial Model
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cost Analysis */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">3-Year Cost Analysis</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Current HR Costs (Annual)</span>
                      <span className="text-white font-medium">$285K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Staff: $180K | Systems: $45K | Benefits: $60K
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">PEO Partnership (Annual)</span>
                      <span className="text-blue-400 font-medium">$240K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      PEO Fees: $180K | Reduced Staff: $60K
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Annual Savings</span>
                      <span className="text-green-400 font-medium">$45K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      16% cost reduction + risk mitigation value
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">3-Year Total Savings</span>
                      <span className="text-green-400 font-bold text-lg">$135K</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Value Creation */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Value Creation Analysis</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Risk Mitigation Value</span>
                      <span className="text-white font-medium">$150K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Compliance, liability, and operational risk reduction
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Productivity Gains</span>
                      <span className="text-white font-medium">$90K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Manager time savings and process efficiency
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Talent Acquisition</span>
                      <span className="text-white font-medium">$75K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Improved employer brand and competitive benefits
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Strategic Focus</span>
                      <span className="text-white font-medium">$120K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Leadership time freed for strategic initiatives
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Value Creation</span>
                      <span className="text-green-400 font-bold text-lg">$435K</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Calculation */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ROI Summary</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$570K</div>
                  <div className="text-sm text-gray-400">Total Benefits (3 years)</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-1">$75K</div>
                  <div className="text-sm text-gray-400">Implementation Cost</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">760%</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">6 mo</div>
                  <div className="text-sm text-gray-400">Payback Period</div>
                </div>
              </div>
              
              <div className="h-48 flex items-center justify-center border border-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive ROI Visualization</p>
                  <p className="text-sm">Cash flow, break-even analysis, and sensitivity modeling</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}