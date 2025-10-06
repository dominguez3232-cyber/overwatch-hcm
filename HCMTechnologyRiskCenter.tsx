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
  Server,
  Lock,
  Activity,
  Layers,
  Cloud,
  Database,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

interface HCMTechnologyRiskCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface HCMVendor {
  id: string;
  name: string;
  marketShare: number;
  rating: number;
  pricing: string;
  strengths: string[];
  limitations: string[];
  bestFor: string;
  targetMarket: 'startup' | 'smb' | 'midmarket' | 'enterprise' | 'universal';
  modules: string[];
}

interface RiskAssessment {
  category: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  score: number;
  impact: string;
  likelihood: string;
  mitigation: string[];
  cost: number;
}

interface CultureMetric {
  dimension: string;
  current: number;
  target: number;
  impact: 'high' | 'medium' | 'low';
  priority: number;
}

export function HCMTechnologyRiskCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: HCMTechnologyRiskCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'vendor-analysis' | 'risk-management' | 'culture-integration' | 'implementation' | 'compliance' | 'roi-modeling'>('overview');
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [companySize, setCompanySize] = useState<'startup' | 'smb' | 'midmarket' | 'enterprise'>('smb');
  const [industry, setIndustry] = useState<'tech' | 'healthcare' | 'manufacturing' | 'services' | 'other'>('tech');
  const [currentSystem, setCurrentSystem] = useState<'legacy' | 'spreadsheets' | 'basic-hrms' | 'advanced-hcm' | 'none'>('basic-hrms');

  const labels = {
    en: {
      title: "HCM Technology & Risk Management Center",
      subtitle: "Strategic advisory for HCM technology selection, risk mitigation, and culture integration",
      description: "Transform your HR technology strategy with comprehensive vendor analysis, risk assessment, and implementation guidance",
      
      // Navigation
      overview: "Strategic Overview",
      vendorAnalysis: "Vendor Analysis",
      riskManagement: "Risk Management",
      cultureIntegration: "Culture Integration",
      implementation: "Implementation Strategy",
      compliance: "Compliance & Security",
      roiModeling: "ROI & Business Case",
      
      // Overview sections
      technologyReadiness: "Technology Readiness",
      marketIntelligence: "Market Intelligence", 
      riskProfile: "Risk Profile",
      recommendedActions: "Recommended Actions",
      
      // Vendor Analysis
      vendorComparison: "Vendor Comparison Matrix",
      marketLeaders: "Market Leaders",
      emergingPlayers: "Emerging Players",
      totalCostOwnership: "Total Cost of Ownership",
      
      // Risk Management
      riskAssessment: "Risk Assessment Dashboard",
      complianceRisks: "Compliance Risks",
      operationalRisks: "Operational Risks",
      technologyRisks: "Technology Risks",
      
      // Culture Integration
      cultureAlignment: "Culture-Technology Alignment",
      employeeExperience: "Employee Experience",
      changeManagement: "Change Management",
      adoptionStrategy: "Adoption Strategy",
      
      // Actions
      generateRFP: "Generate RFP",
      scheduleDemo: "Schedule Demo",
      requestProposal: "Request Proposal",
      viewDetails: "View Details",
      compareVendors: "Compare Vendors",
      
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
      
      // Current systems
      legacy: "Legacy HRIS",
      spreadsheets: "Spreadsheets/Manual",
      basicHrms: "Basic HRMS",
      advancedHcm: "Advanced HCM",
      none: "No System",
      
      // Metrics
      marketSize: "Market Size",
      growth: "Growth Rate",
      maturityLevel: "Maturity Level", 
      implementationTime: "Implementation Time",
      riskLevel: "Risk Level",
      
      // Status
      recommended: "Recommended",
      consider: "Consider",
      caution: "Caution",
      notRecommended: "Not Recommended"
    },
    es: {
      title: "Centro de Tecnología HCM y Gestión de Riesgos",
      subtitle: "Asesoría estratégica para selección de tecnología HCM, mitigación de riesgos e integración cultural",
      description: "Transforma tu estrategia de tecnología RH con análisis integral de proveedores, evaluación de riesgos y guía de implementación",
      
      // Navigation
      overview: "Vista Estratégica",
      vendorAnalysis: "Análisis de Proveedores",
      riskManagement: "Gestión de Riesgos",
      cultureIntegration: "Integración Cultural",
      implementation: "Estrategia de Implementación",
      compliance: "Cumplimiento y Seguridad",
      roiModeling: "ROI y Caso de Negocio",
      
      // Overview sections
      technologyReadiness: "Preparación Tecnológica",
      marketIntelligence: "Inteligencia de Mercado",
      riskProfile: "Perfil de Riesgo",
      recommendedActions: "Acciones Recomendadas",
      
      // Vendor Analysis
      vendorComparison: "Matriz Comparación Proveedores",
      marketLeaders: "Líderes del Mercado",
      emergingPlayers: "Jugadores Emergentes",
      totalCostOwnership: "Costo Total de Propiedad",
      
      // Risk Management
      riskAssessment: "Panel Evaluación Riesgos",
      complianceRisks: "Riesgos de Cumplimiento",
      operationalRisks: "Riesgos Operacionales",
      technologyRisks: "Riesgos Tecnológicos",
      
      // Culture Integration
      cultureAlignment: "Alineación Cultura-Tecnología",
      employeeExperience: "Experiencia del Empleado",
      changeManagement: "Gestión del Cambio",
      adoptionStrategy: "Estrategia de Adopción",
      
      // Actions
      generateRFP: "Generar RFP",
      scheduleDemo: "Programar Demo",
      requestProposal: "Solicitar Propuesta",
      viewDetails: "Ver Detalles",
      compareVendors: "Comparar Proveedores",
      
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
      
      // Current systems
      legacy: "HRIS Legado",
      spreadsheets: "Hojas de Cálculo/Manual",
      basicHrms: "HRMS Básico",
      advancedHcm: "HCM Avanzado",
      none: "Sin Sistema",
      
      // Metrics
      marketSize: "Tamaño del Mercado",
      growth: "Tasa de Crecimiento",
      maturityLevel: "Nivel de Madurez",
      implementationTime: "Tiempo de Implementación",
      riskLevel: "Nivel de Riesgo",
      
      // Status
      recommended: "Recomendado",
      consider: "Considerar",
      caution: "Precaución", 
      notRecommended: "No Recomendado"
    }
  };

  const currentLabels = labels[language];

  // HCM Vendor Data
  const hcmVendors: HCMVendor[] = [
    {
      id: 'workday',
      name: 'Workday',
      marketShare: 9.8,
      rating: 4.3,
      pricing: 'Enterprise: $150-250/employee/year',
      strengths: ['Cloud-native architecture', 'Predictive analytics', 'Global capabilities', 'Strong financials integration'],
      limitations: ['High cost', 'Complex implementation', 'Overkill for SMBs'],
      bestFor: 'Large enterprises with complex global operations',
      targetMarket: 'enterprise',
      modules: ['Core HR', 'Payroll', 'Talent', 'Learning', 'Analytics', 'Financial Management']
    },
    {
      id: 'successfactors',
      name: 'SAP SuccessFactors',
      marketShare: 4.0,
      rating: 4.1,
      pricing: 'Enterprise: $120-200/employee/year',
      strengths: ['ERP integration', 'Performance management', 'Learning platform', 'AI capabilities'],
      limitations: ['Complex configuration', 'SAP ecosystem dependency', 'User experience challenges'],
      bestFor: 'SAP shops and large enterprises focused on performance',
      targetMarket: 'enterprise',
      modules: ['Employee Central', 'Performance', 'Learning', 'Recruiting', 'Compensation']
    },
    {
      id: 'oracle-hcm',
      name: 'Oracle HCM Cloud',
      marketShare: 6.4,
      rating: 4.0,
      pricing: 'Enterprise: $130-220/employee/year',
      strengths: ['Unified platform', 'AI innovations', 'Global compliance', 'Database heritage'],
      limitations: ['Complexity', 'Oracle ecosystem lock-in', 'Long implementation cycles'],
      bestFor: 'Oracle customers and data-intensive organizations',
      targetMarket: 'enterprise',
      modules: ['Global HR', 'Talent', 'Payroll', 'Workforce', 'Analytics']
    },
    {
      id: 'adp-workforce',
      name: 'ADP Workforce Now',
      marketShare: 10.8,
      rating: 3.9,
      pricing: 'SMB: $5-15/employee/month',
      strengths: ['Payroll expertise', 'Compliance strength', 'Market presence', 'Service quality'],
      limitations: ['Limited innovation', 'Fragmented product line', 'Complex pricing'],
      bestFor: 'Companies prioritizing payroll accuracy and compliance',
      targetMarket: 'smb',
      modules: ['Payroll', 'Benefits', 'Talent', 'Time', 'Analytics']
    },
    {
      id: 'ukg',
      name: 'UKG Pro/Ready',
      marketShare: 12.5,
      rating: 4.2,
      pricing: 'Mid-market: $8-18/employee/month',
      strengths: ['Employee experience focus', 'Workforce management', 'Industry specialization', 'Culture focus'],
      limitations: ['Integration challenges', 'Reporting limitations', 'Product complexity'],
      bestFor: 'Mid-market companies focused on employee experience',
      targetMarket: 'midmarket',
      modules: ['HR', 'Payroll', 'Talent', 'Workforce Management', 'Analytics']
    },
    {
      id: 'dayforce',
      name: 'Dayforce (Ceridian)',
      marketShare: 16.4,
      rating: 4.1,
      pricing: 'Global: $10-25/employee/month',
      strengths: ['Continuous calculation', 'Global payroll', 'Real-time processing', 'Mobile-first'],
      limitations: ['Implementation complexity', 'Change management needs', 'Reporting gaps'],
      bestFor: 'Global companies with complex payroll requirements',
      targetMarket: 'enterprise',
      modules: ['HCM', 'Payroll', 'Benefits', 'Talent', 'Workforce Management']
    },
    {
      id: 'bamboohr',
      name: 'BambooHR',
      marketShare: 8.4,
      rating: 4.4,
      pricing: 'SMB: $6-10/employee/month',
      strengths: ['User-friendly', 'Quick implementation', 'SMB focus', 'Culture tools'],
      limitations: ['Limited scalability', 'Basic reporting', 'Payroll partnerships'],
      bestFor: 'SMBs seeking simple, effective HR management',
      targetMarket: 'smb',
      modules: ['Core HR', 'Applicant Tracking', 'Performance', 'Time Off', 'Reporting']
    },
    {
      id: 'rippling',
      name: 'Rippling',
      marketShare: 2.1,
      rating: 4.5,
      pricing: 'SMB: $8-16/employee/month',
      strengths: ['Modern architecture', 'IT+HR integration', 'Automation', 'API ecosystem'],
      limitations: ['Newer platform', 'Limited enterprise features', 'Rapid changes'],
      bestFor: 'Tech-forward SMBs wanting integrated IT and HR',
      targetMarket: 'smb',
      modules: ['HR', 'Payroll', 'Benefits', 'IT Management', 'Apps Marketplace']
    }
  ];

  // Risk Assessment Data
  const riskAssessments: RiskAssessment[] = [
    {
      category: 'Data Security & Privacy',
      riskLevel: 'high',
      score: 8.2,
      impact: 'Severe financial and reputational damage',
      likelihood: 'Medium - increasing cyber threats',
      mitigation: ['Multi-factor authentication', 'Data encryption', 'Regular security audits', 'Employee training'],
      cost: 250000
    },
    {
      category: 'Compliance Violations',
      riskLevel: 'high', 
      score: 7.8,
      impact: 'Legal penalties, operational disruption',
      likelihood: 'High - complex regulatory environment',
      mitigation: ['Automated compliance monitoring', 'Regular policy updates', 'Legal counsel review', 'Audit trails'],
      cost: 180000
    },
    {
      category: 'System Integration Failures',
      riskLevel: 'medium',
      score: 6.5,
      impact: 'Data inconsistency, operational inefficiency',
      likelihood: 'Medium - common implementation challenge',
      mitigation: ['Thorough integration testing', 'API governance', 'Data migration planning', 'Vendor support'],
      cost: 120000
    },
    {
      category: 'Change Management Resistance',
      riskLevel: 'medium',
      score: 6.2,
      impact: 'Low adoption, reduced ROI',
      likelihood: 'High - natural resistance to change',
      mitigation: ['Change management program', 'Training and support', 'Executive sponsorship', 'Communication plan'],
      cost: 95000
    },
    {
      category: 'Vendor Lock-in',
      riskLevel: 'medium',
      score: 5.8,
      impact: 'Limited flexibility, increased costs',
      likelihood: 'Medium - depends on vendor strategy',
      mitigation: ['Data portability requirements', 'Multi-vendor strategy', 'Contract negotiations', 'Exit planning'],
      cost: 75000
    },
    {
      category: 'Workers Compensation Claims',
      riskLevel: 'critical',
      score: 9.1,
      impact: '$176.5B industry cost, $43K average claim',
      likelihood: 'High - inevitable in most industries',
      mitigation: ['Safety programs', 'Claims management', 'Return-to-work programs', 'Risk assessment'],
      cost: 43000
    }
  ];

  // Culture Metrics
  const cultureMetrics: CultureMetric[] = [
    {
      dimension: 'Trust & Psychological Safety',
      current: 72,
      target: 85,
      impact: 'high',
      priority: 1
    },
    {
      dimension: 'Technology Adoption Readiness',
      current: 65,
      target: 80,
      impact: 'high',
      priority: 2
    },
    {
      dimension: 'Change Resilience',
      current: 58,
      target: 75,
      impact: 'medium',
      priority: 3
    },
    {
      dimension: 'Digital Collaboration',
      current: 78,
      target: 85,
      impact: 'medium',
      priority: 4
    },
    {
      dimension: 'Learning Orientation',
      current: 69,
      target: 80,
      impact: 'high',
      priority: 2
    },
    {
      dimension: 'Employee Experience Focus',
      current: 74,
      target: 85,
      impact: 'high',
      priority: 1
    }
  ];

  const getRiskColor = (level: RiskAssessment['riskLevel']) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
    }
  };

  const getVendorRecommendation = (vendor: HCMVendor) => {
    if (companySize === 'startup' && ['bamboohr', 'rippling'].includes(vendor.id)) return 'recommended';
    if (companySize === 'smb' && ['bamboohr', 'rippling', 'adp-workforce', 'ukg'].includes(vendor.id)) return 'recommended';
    if (companySize === 'midmarket' && ['ukg', 'dayforce', 'adp-workforce'].includes(vendor.id)) return 'recommended';
    if (companySize === 'enterprise' && ['workday', 'successfactors', 'oracle-hcm', 'dayforce'].includes(vendor.id)) return 'recommended';
    return 'consider';
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'recommended': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'consider': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'caution': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getRecommendationLabel = (recommendation: string) => {
    switch (recommendation) {
      case 'recommended': return currentLabels.recommended;
      case 'consider': return currentLabels.consider;
      case 'caution': return currentLabels.caution;
      default: return currentLabels.notRecommended;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-8 h-8 text-blue-400" />
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
              <option value="other">{currentLabels.other}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Current System</label>
            <select 
              value={currentSystem}
              onChange={(e) => setCurrentSystem(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="none">{currentLabels.none}</option>
              <option value="spreadsheets">{currentLabels.spreadsheets}</option>
              <option value="basic-hrms">{currentLabels.basicHrms}</option>
              <option value="legacy">{currentLabels.legacy}</option>
              <option value="advanced-hcm">{currentLabels.advancedHcm}</option>
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
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="vendor-analysis">{currentLabels.vendorAnalysis}</TabsTrigger>
            <TabsTrigger value="risk-management">{currentLabels.riskManagement}</TabsTrigger>
            <TabsTrigger value="culture-integration">{currentLabels.cultureIntegration}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
            <TabsTrigger value="compliance">{currentLabels.compliance}</TabsTrigger>
            <TabsTrigger value="roi-modeling">{currentLabels.roiModeling}</TabsTrigger>
          </TabsList>

          {/* Strategic Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Market Intelligence */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.marketIntelligence}</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$58.7B</div>
                  <div className="text-sm text-gray-400">{currentLabels.marketSize} (2024)</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">10%</div>
                  <div className="text-sm text-gray-400">{currentLabels.growth} CAGR</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">AI-First</div>
                  <div className="text-sm text-gray-400">Technology Trend</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">6-18mo</div>
                  <div className="text-sm text-gray-400">{currentLabels.implementationTime}</div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Key Trends 2025</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• AI-driven HR automation</li>
                    <li>• Employee experience platforms</li>
                    <li>• Continuous listening tools</li>
                    <li>• Skills-based talent management</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Growth Drivers</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Digital transformation</li>
                    <li>• Remote/hybrid work</li>
                    <li>• Talent shortage</li>
                    <li>• Compliance complexity</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Investment Areas</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Predictive analytics</li>
                    <li>• Mobile-first platforms</li>
                    <li>• Integration capabilities</li>
                    <li>• Security & privacy</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Technology Readiness Assessment */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.technologyReadiness}</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Infrastructure Readiness</span>
                    <span className="text-white font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Quality</span>
                    <span className="text-white font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Change Readiness</span>
                    <span className="text-white font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Budget Availability</span>
                    <span className="text-white font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.recommendedActions}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Vendor Selection</div>
                      <div className="text-xs text-gray-400">3 recommended vendors identified for {companySize} {industry}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Risk Mitigation</div>
                      <div className="text-xs text-gray-400">4 critical risks require immediate attention</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <Target className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Culture Alignment</div>
                      <div className="text-xs text-gray-400">Technology adoption strategy needs development</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-medium text-white text-sm">Implementation Planning</div>
                      <div className="text-xs text-gray-400">12-month roadmap with phased approach</div>
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
                  onClick={() => setActiveTab('vendor-analysis')}
                >
                  <Database className="w-4 h-4" />
                  {currentLabels.compareVendors}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  onClick={() => setActiveTab('risk-management')}
                >
                  <Shield className="w-4 h-4" />
                  Assess Risks
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('culture-integration')}
                >
                  <Users className="w-4 h-4" />
                  Culture Analysis
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('roi-modeling')}
                >
                  <Calculator className="w-4 h-4" />
                  {currentLabels.roiModeling}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Vendor Analysis */}
          <TabsContent value="vendor-analysis" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.vendorComparison}</h2>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-gray-600">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Features
                </Button>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {currentLabels.generateRFP}
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {hcmVendors.map((vendor) => {
                const recommendation = getVendorRecommendation(vendor);
                return (
                  <Card key={vendor.id} className="p-6 bg-gray-800 border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-white text-lg">{vendor.name}</h3>
                        <p className="text-sm text-gray-400">Market Share: {vendor.marketShare}%</p>
                        <p className="text-sm text-blue-400">{vendor.pricing}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{vendor.rating}</span>
                        </div>
                        <Badge className={`text-xs mt-1 ${getRecommendationColor(recommendation)}`}>
                          {getRecommendationLabel(recommendation)}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Strengths</h4>
                        <div className="space-y-1">
                          {vendor.strengths.slice(0, 2).map((strength, index) => (
                            <div key={index} className="text-xs text-green-400 flex items-start gap-1">
                              <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              {strength}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Key Modules</h4>
                        <div className="flex flex-wrap gap-1">
                          {vendor.modules.slice(0, 3).map((module, index) => (
                            <Badge key={index} className="text-xs bg-gray-700 text-gray-300">
                              {module}
                            </Badge>
                          ))}
                          {vendor.modules.length > 3 && (
                            <Badge className="text-xs bg-gray-700 text-gray-300">
                              +{vendor.modules.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Best For</h4>
                        <p className="text-xs text-gray-300">{vendor.bestFor}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => setSelectedVendor(vendor.id)}
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
                );
              })}
            </div>

            {/* Vendor Comparison Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Feature Comparison Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Vendor</th>
                      <th className="text-center py-3 text-gray-400">Core HR</th>
                      <th className="text-center py-3 text-gray-400">Payroll</th>
                      <th className="text-center py-3 text-gray-400">Talent Mgmt</th>
                      <th className="text-center py-3 text-gray-400">Analytics</th>
                      <th className="text-center py-3 text-gray-400">Mobile</th>
                      <th className="text-center py-3 text-gray-400">AI Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hcmVendors.slice(0, 4).map((vendor) => (
                      <tr key={vendor.id} className="border-b border-gray-800">
                        <td className="py-3 text-white font-medium">{vendor.name}</td>
                        <td className="text-center py-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                        </td>
                        <td className="text-center py-3">
                          {vendor.id === 'adp-workforce' || vendor.id === 'dayforce' ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3">
                          {['workday', 'successfactors', 'oracle-hcm'].includes(vendor.id) ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3">
                          {['workday', 'oracle-hcm'].includes(vendor.id) ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                        </td>
                        <td className="text-center py-3">
                          {['workday', 'successfactors', 'oracle-hcm', 'rippling'].includes(vendor.id) ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Risk Management */}
          <TabsContent value="risk-management" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.riskAssessment}</h2>
              
              <Button className="bg-red-600 hover:bg-red-700">
                Generate Risk Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {riskAssessments.map((risk, index) => (
                <Card key={index} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{risk.category}</h3>
                      <Badge className={`text-xs mt-1 ${getRiskColor(risk.riskLevel)}`}>
                        {risk.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{risk.score}</div>
                      <div className="text-xs text-gray-400">Risk Score</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Impact</h4>
                      <p className="text-xs text-gray-300">{risk.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Likelihood</h4>
                      <p className="text-xs text-gray-300">{risk.likelihood}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Est. Cost Impact</h4>
                      <p className="text-sm font-bold text-red-400">${risk.cost.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Mitigations</h4>
                    <ul className="space-y-1">
                      {risk.mitigation.slice(0, 2).map((mitigation, mIndex) => (
                        <li key={mIndex} className="text-xs text-gray-300 flex items-start gap-2">
                          <Shield className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                          {mitigation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Risk Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Risk Assessment Matrix</h3>
              
              <div className="grid grid-cols-5 gap-1 max-w-2xl">
                {/* Headers */}
                <div></div>
                <div className="text-center text-xs text-gray-400 p-2">Very Low</div>
                <div className="text-center text-xs text-gray-400 p-2">Low</div>
                <div className="text-center text-xs text-gray-400 p-2">Medium</div>
                <div className="text-center text-xs text-gray-400 p-2">High</div>
                
                {/* Very High row */}
                <div className="text-xs text-gray-400 p-2 text-right">Very High</div>
                <div className="bg-yellow-600 p-4 rounded"></div>
                <div className="bg-orange-600 p-4 rounded"></div>
                <div className="bg-red-600 p-4 rounded"></div>
                <div className="bg-red-700 p-4 rounded"></div>
                
                {/* High row */}
                <div className="text-xs text-gray-400 p-2 text-right">High</div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-yellow-600 p-4 rounded"></div>
                <div className="bg-orange-600 p-4 rounded"></div>
                <div className="bg-red-600 p-4 rounded"></div>
                
                {/* Medium row */}
                <div className="text-xs text-gray-400 p-2 text-right">Medium</div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-yellow-600 p-4 rounded"></div>
                <div className="bg-orange-600 p-4 rounded"></div>
                
                {/* Low row */}
                <div className="text-xs text-gray-400 p-2 text-right">Low</div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-green-600 p-4 rounded"></div>
                <div className="bg-yellow-600 p-4 rounded"></div>
              </div>
              
              <div className="mt-4 text-xs text-gray-400">
                <p><strong>Impact →</strong> Probability ↑</p>
              </div>
            </Card>
          </TabsContent>

          {/* Culture Integration */}
          <TabsContent value="culture-integration" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.cultureAlignment}</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Culture Strategy
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Culture-Technology Alignment */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Culture-Technology Readiness</h3>
                
                <div className="space-y-4">
                  {cultureMetrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white text-sm">{metric.dimension}</h4>
                        <Badge className={`text-xs ${
                          metric.impact === 'high' ? 'bg-red-900/20 text-red-400 border-red-700' :
                          metric.impact === 'medium' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                          'bg-green-900/20 text-green-400 border-green-700'
                        }`}>
                          {metric.impact} impact
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Current: {metric.current}%</span>
                        <span className="text-gray-400">Target: {metric.target}%</span>
                      </div>
                      <Progress value={metric.current} className="h-2" />
                      
                      <div className="mt-2 text-xs">
                        <span className={metric.current >= metric.target ? 'text-green-400' : 'text-yellow-400'}>
                          Gap: {metric.target - metric.current}% | Priority: {metric.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Change Management Strategy */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.changeManagement}</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Communication Strategy</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Executive sponsorship messaging</li>
                      <li>• Regular town halls and updates</li>
                      <li>• Department-specific training plans</li>
                      <li>• Success story amplification</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Training & Support</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Role-based training programs</li>
                      <li>• Super-user network</li>
                      <li>• Just-in-time support resources</li>
                      <li>• Continuous learning pathways</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Adoption Metrics</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• User login frequency</li>
                      <li>• Feature utilization rates</li>
                      <li>• Support ticket trends</li>
                      <li>• Employee satisfaction scores</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Risk Mitigation</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Resistance identification</li>
                      <li>• Stakeholder engagement</li>
                      <li>• Feedback loop mechanisms</li>
                      <li>• Course correction protocols</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Employee Experience Design */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.employeeExperience} Design</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Mobile-First</h4>
                  <p className="text-sm text-gray-400">Accessible anytime, anywhere</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Self-Service</h4>
                  <p className="text-sm text-gray-400">Empower employee autonomy</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">AI-Powered</h4>
                  <p className="text-sm text-gray-400">Intelligent recommendations</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Collaborative</h4>
                  <p className="text-sm text-gray-400">Social and connected</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Strategy */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.implementation}</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Download Implementation Plan
              </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-white">Planning & Selection</h3>
                  <p className="text-sm text-gray-400">Months 1-3</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Requirements analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Vendor evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Contract negotiation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Project planning</span>
                  </div>
                </div>
              </Card>

              {/* Phase 2 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-white">Foundation Setup</h3>
                  <p className="text-sm text-gray-400">Months 4-6</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Infrastructure setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Data migration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Core configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Integration testing</span>
                  </div>
                </div>
              </Card>

              {/* Phase 3 */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-white">Deployment</h3>
                  <p className="text-sm text-gray-400">Months 7-9</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Pilot rollout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">User training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Full deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Support & feedback</span>
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
                  <p className="text-sm text-gray-400">Months 10-12</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Performance monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Advanced features</span>
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

            {/* Implementation Success Factors */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Critical Success Factors</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Leadership & Governance</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Executive sponsorship</li>
                    <li>• Steering committee</li>
                    <li>• Clear decision rights</li>
                    <li>• Resource commitment</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Change Management</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Communication plan</li>
                    <li>• Training strategy</li>
                    <li>• User adoption metrics</li>
                    <li>• Feedback mechanisms</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Technical Excellence</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Data quality</li>
                    <li>• Integration architecture</li>
                    <li>• Security framework</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Compliance & Security */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.compliance}</h2>
              
              <Button className="bg-red-600 hover:bg-red-700">
                Generate Compliance Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Regulatory Compliance */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Regulatory Compliance Framework</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-white">High Priority</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• GDPR compliance (EU operations)</li>
                      <li>• SOX requirements (public companies)</li>
                      <li>• HIPAA (healthcare data)</li>
                      <li>• SOC 2 Type II certification</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <h4 className="font-bold text-white">Medium Priority</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• CCPA compliance (California)</li>
                      <li>• ISO 27001 certification</li>
                      <li>• Industry-specific standards</li>
                      <li>• Multi-state payroll compliance</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <h4 className="font-bold text-white">Standard Compliance</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• FLSA wage and hour</li>
                      <li>• EEO reporting</li>
                      <li>• FMLA compliance</li>
                      <li>• Workers compensation</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Security Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Security Framework</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Encryption</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Multi-Factor Authentication</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Role-Based Access Control</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Regular Security Audits</span>
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Incident Response Plan</span>
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Backup & Recovery</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Security Score</h4>
                  <div className="flex items-center gap-4">
                    <Progress value={85} className="flex-1 h-3" />
                    <span className="text-white font-bold">85%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Strong security posture with room for improvement</p>
                </div>
              </Card>
            </div>

            {/* Compliance Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">94%</div>
                  <div className="text-sm text-gray-400">Overall Compliance</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">12</div>
                  <div className="text-sm text-gray-400">Active Regulations</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">3</div>
                  <div className="text-sm text-gray-400">Pending Actions</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">30d</div>
                  <div className="text-sm text-gray-400">Next Audit</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Modeling */}
          <TabsContent value="roi-modeling" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.roiModeling}</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Export Business Case
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Investment Analysis */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Investment Analysis</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Software Licensing (Annual)</span>
                      <span className="text-white font-medium">$180K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      $1,200/employee/year for 150 employees
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Implementation Services</span>
                      <span className="text-white font-medium">$120K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      One-time: consulting, training, data migration
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Internal Resources</span>
                      <span className="text-white font-medium">$90K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Project team time allocation (6 months)
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total 3-Year Investment</span>
                      <span className="text-green-400 font-bold text-lg">$750K</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Benefits Analysis */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Benefits Analysis</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">HR Efficiency Gains</span>
                      <span className="text-white font-medium">$240K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      40% reduction in administrative time
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Compliance Risk Reduction</span>
                      <span className="text-white font-medium">$180K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Avoided penalties and legal costs
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Employee Retention</span>
                      <span className="text-white font-medium">$150K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Reduced turnover and hiring costs
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Decision-Making Speed</span>
                      <span className="text-white font-medium">$120K</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Faster access to people analytics
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total 3-Year Benefits</span>
                      <span className="text-green-400 font-bold text-lg">$690K</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ROI Summary</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$690K</div>
                  <div className="text-sm text-gray-400">Total Benefits (3 years)</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-1">$750K</div>
                  <div className="text-sm text-gray-400">Total Investment</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">-8%</div>
                  <div className="text-sm text-gray-400">3-Year ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">18mo</div>
                  <div className="text-sm text-gray-400">Break-Even Point</div>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <h4 className="font-bold text-white">ROI Analysis</h4>
                </div>
                <p className="text-sm text-gray-300">
                  While the 3-year ROI appears negative, this analysis focuses on quantifiable benefits only. 
                  Significant intangible benefits include improved employee experience, data-driven decision making, 
                  and strategic HR capabilities that drive long-term competitive advantage.
                </p>
              </div>
              
              <div className="mt-4 h-48 flex items-center justify-center border border-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive ROI Visualization</p>
                  <p className="text-sm">Cost-benefit analysis, payback period, and sensitivity modeling</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}