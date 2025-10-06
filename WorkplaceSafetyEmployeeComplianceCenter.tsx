import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  HardHat, 
  Shield, 
  Heart, 
  FileText, 
  Calculator, 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  DollarSign,
  Scale,
  Building,
  Briefcase,
  Thermometer,
  Wind,
  Eye,
  Brain,
  Microscope,
  Syringe,
  Umbrella,
  Factory,
  Truck,
  HardDrive,
  PiggyBank,
  Activity,
  BarChart3,
  TrendingUp,
  Target,
  Star,
  Award,
  Flag,
  MapPin,
  Calendar,
  Bell,
  Settings,
  Download,
  ExternalLink,
  Plus,
  Search,
  Filter,
  ArrowRight,
  Info,
  AlertCircle,
  Zap,
  BookOpen,
  Layers,
  Network,
  Crosshair,
  Navigation,
  Lock,
  Database,
  Globe,
  Lightbulb,
  Cpu,
  Server
} from 'lucide-react';

interface WorkplaceSafetyEmployeeComplianceCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface ComplianceArea {
  id: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  minPenalty: number;
  maxPenalty: number;
  averageCost: number;
  industry: string[];
  requirements: string[];
  violations: ComplianceViolation[];
}

interface ComplianceViolation {
  type: string;
  description: string;
  penaltyRange: string;
  examples: string[];
}

interface StateProgram {
  state: string;
  program: string;
  deadline: string;
  penalty: string;
  status: 'active' | 'implementing' | 'planned';
}

export function WorkplaceSafetyEmployeeComplianceCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: WorkplaceSafetyEmployeeComplianceCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'osha-safety' | 'aca-requirements' | 'state-retirement' | 'employee-management' | 'workers-comp' | 'vaccine-policies' | 'cost-calculator' | 'implementation'>('overview');
  const [selectedIndustry, setSelectedIndustry] = useState<'all' | 'construction' | 'manufacturing' | 'healthcare' | 'retail' | 'professional-services'>('all');
  const [selectedCompanySize, setSelectedCompanySize] = useState<'small' | 'medium' | 'large'>('medium');
  const [complianceScore, setComplianceScore] = useState(72);

  const labels = {
    en: {
      title: "Workplace Safety & Employee Compliance Center",
      subtitle: "Comprehensive compliance intelligence for OSHA, ACA, employee management, and state-mandated programs",
      description: "Transform workplace compliance from operational burden to strategic competitive advantage with actionable frameworks and cost optimization",
      
      // Navigation
      overview: "Compliance Overview",
      oshaSafety: "OSHA & Safety",
      acaRequirements: "ACA Requirements",
      stateRetirement: "State Retirement",
      employeeManagement: "Employee Management",
      workersComp: "Workers' Comp",
      vaccinePolicies: "Vaccine Policies",
      costCalculator: "Cost Calculator",
      implementation: "Implementation",
      
      // Metrics
      complianceScore: "Compliance Score",
      riskLevel: "Risk Level",
      estimatedCost: "Estimated Cost",
      violationCount: "Violations",
      
      // Actions
      assessRisk: "Assess Risk",
      generatePolicy: "Generate Policy",
      calculateCost: "Calculate Cost",
      downloadReport: "Download Report",
      scheduleAudit: "Schedule Audit",
      
      // Risk Levels
      low: "Low",
      medium: "Medium",
      high: "High",
      critical: "Critical",
      
      // Industries
      all: "All Industries",
      construction: "Construction",
      manufacturing: "Manufacturing",
      healthcare: "Healthcare",
      retail: "Retail",
      professionalServices: "Professional Services",
      
      // Company Size
      small: "Small (<50)",
      medium: "Medium (50-500)",
      large: "Large (500+)"
    },
    es: {
      title: "Centro de Cumplimiento de Seguridad Laboral y Empleados",
      subtitle: "Inteligencia integral de cumplimiento para OSHA, ACA, gestión de empleados y programas estatales obligatorios",
      description: "Transforma el cumplimiento laboral de carga operativa a ventaja competitiva estratégica con marcos accionables y optimización de costos",
      
      // Navigation
      overview: "Vista de Cumplimiento",
      oshaSafety: "OSHA y Seguridad",
      acaRequirements: "Requisitos ACA",
      stateRetirement: "Retiro Estatal",
      employeeManagement: "Gestión de Empleados",
      workersComp: "Compensación Laboral",
      vaccinePolicies: "Políticas de Vacunas",
      costCalculator: "Calculadora de Costos",
      implementation: "Implementación",
      
      // Metrics
      complianceScore: "Puntuación de Cumplimiento",
      riskLevel: "Nivel de Riesgo",
      estimatedCost: "Costo Estimado",
      violationCount: "Violaciones",
      
      // Actions
      assessRisk: "Evaluar Riesgo",
      generatePolicy: "Generar Política",
      calculateCost: "Calcular Costo",
      downloadReport: "Descargar Reporte",
      scheduleAudit: "Programar Auditoría",
      
      // Risk Levels
      low: "Bajo",
      medium: "Medio",
      high: "Alto",
      critical: "Crítico",
      
      // Industries
      all: "Todas las Industrias",
      construction: "Construcción",
      manufacturing: "Manufactura",
      healthcare: "Salud",
      retail: "Retail",
      professionalServices: "Servicios Profesionales",
      
      // Company Size
      small: "Pequeña (<50)",
      medium: "Mediana (50-500)",
      large: "Grande (500+)"
    }
  };

  const currentLabels = labels[language];

  // OSHA Compliance Areas Data
  const oshaComplianceAreas: ComplianceArea[] = [
    {
      id: 'fall-protection',
      category: 'Fall Protection',
      severity: 'critical',
      description: 'Leading cause of workplace injuries and fatalities in construction',
      minPenalty: 1190,
      maxPenalty: 161323,
      averageCost: 50000,
      industry: ['construction', 'manufacturing'],
      requirements: [
        'Guardrails and safety nets',
        'Personal fall arrest systems',
        'Safety training and certification',
        'Regular equipment inspection'
      ],
      violations: [
        {
          type: 'Serious Violation',
          description: 'Lack of fall protection at heights over 6 feet',
          penaltyRange: '$1,190 - $16,131',
          examples: ['Missing guardrails', 'Inadequate safety harnesses', 'No fall arrest systems']
        }
      ]
    },
    {
      id: 'covid-safety',
      category: 'COVID-19 Safety',
      severity: 'high',
      description: 'Workplace safety protocols for pandemic response',
      minPenalty: 1190,
      maxPenalty: 132270,
      averageCost: 25000,
      industry: ['all'],
      requirements: [
        'Vaccination requirements and protocols',
        'Testing and health screening',
        'Proper ventilation systems',
        'Sanitation and cleaning procedures'
      ],
      violations: [
        {
          type: 'General Duty Clause',
          description: 'Failure to protect employees from COVID-19 hazards',
          penaltyRange: '$1,190 - $132,270',
          examples: ['No mask requirements', 'Inadequate ventilation', 'Lack of health screening']
        }
      ]
    },
    {
      id: 'heat-illness',
      category: 'Heat Illness Prevention',
      severity: 'high',
      description: 'Protection for outdoor workers from heat-related illnesses',
      minPenalty: 1190,
      maxPenalty: 16131,
      averageCost: 15000,
      industry: ['construction', 'manufacturing'],
      requirements: [
        'Adequate hydration programs',
        'Rest breaks and shade provision',
        'Heat illness training',
        'Emergency response procedures'
      ],
      violations: [
        {
          type: 'Serious Violation',
          description: 'Inadequate protection from heat exposure',
          penaltyRange: '$1,190 - $16,131',
          examples: ['No shade structures', 'Insufficient water access', 'No heat training']
        }
      ]
    },
    {
      id: 'silica-exposure',
      category: 'Silica Dust Exposure',
      severity: 'critical',
      description: 'Reduces exposure to crystalline silica causing lung diseases',
      minPenalty: 1190,
      maxPenalty: 161323,
      averageCost: 75000,
      industry: ['construction', 'manufacturing'],
      requirements: [
        'Exposure monitoring and assessment',
        'Engineering controls and ventilation',
        'Respiratory protection programs',
        'Medical surveillance'
      ],
      violations: [
        {
          type: 'Willful Violation',
          description: 'Exceeding permissible exposure limits',
          penaltyRange: '$11,524 - $161,323',
          examples: ['No dust control measures', 'Inadequate ventilation', 'Missing respirators']
        }
      ]
    },
    {
      id: 'chemical-hazards',
      category: 'Chemical Hazards',
      severity: 'high',
      description: 'Safe handling and storage of hazardous chemicals',
      minPenalty: 1190,
      maxPenalty: 132270,
      averageCost: 40000,
      industry: ['manufacturing', 'healthcare'],
      requirements: [
        'Proper chemical labeling and SDS',
        'Safe storage and handling procedures',
        'Employee training and PPE',
        'Emergency response planning'
      ],
      violations: [
        {
          type: 'Serious Violation',
          description: 'Improper chemical handling or storage',
          penaltyRange: '$1,190 - $16,131',
          examples: ['Missing SDS sheets', 'Inadequate labeling', 'No PPE provided']
        }
      ]
    }
  ];

  // ACA Requirements Data
  const acaRequirements = {
    '4980H_a': {
      description: 'Failure to offer Minimum Essential Coverage to 95% of full-time employees',
      penalty: 2970,
      condition: 'At least one employee receives Premium Tax Credit',
      calculation: '$247.50 per month, per employee'
    },
    '4980H_b': {
      description: 'Offering unaffordable coverage or coverage not meeting Minimum Value',
      penalty: 4460,
      condition: 'At least one employee receives Premium Tax Credit',
      calculation: '$372 per month, per employee'
    },
    'group_health_reforms': {
      description: 'Noncompliance with group health plan reforms',
      penalty: 100,
      condition: 'Per day, per individual, per violation',
      calculation: '$100 daily penalty'
    }
  };

  // State Retirement Programs Data
  const stateRetirementPrograms: StateProgram[] = [
    { state: 'California', program: 'CalSavers', deadline: 'December 31, 2025', penalty: '$250 after 90 days, $500 after 180 days', status: 'active' },
    { state: 'Colorado', program: 'Colorado SecureSavings', deadline: 'Active since 2022', penalty: 'Varies', status: 'active' },
    { state: 'Connecticut', program: 'MyCTSavings', deadline: 'Active since 2022', penalty: 'Varies', status: 'active' },
    { state: 'Delaware', program: 'Delaware EARNS', deadline: 'Active since 2023', penalty: 'Varies', status: 'active' },
    { state: 'Hawaii', program: 'Hawaii Retirement Savings', deadline: 'Active since 2023', penalty: 'Varies', status: 'active' },
    { state: 'Illinois', program: 'Illinois Secure Choice', deadline: 'Active since 2023', penalty: 'Varies', status: 'active' },
    { state: 'Maine', program: 'Maine Retirement Savings', deadline: 'December 31, 2024', penalty: 'TBD', status: 'implementing' },
    { state: 'Maryland', program: 'Maryland$aves', deadline: 'New businesses: 2-year deferral', penalty: 'Varies', status: 'active' },
    { state: 'Minnesota', program: 'Minnesota Secure Choice', deadline: 'January 1, 2025', penalty: 'TBD', status: 'implementing' },
    { state: 'New Jersey', program: 'New Jersey Secure Choice', deadline: 'TBD', penalty: 'TBD', status: 'planned' },
    { state: 'New York', program: 'NY State Secure Choice', deadline: 'TBD', penalty: 'TBD', status: 'planned' },
    { state: 'Nevada', program: 'Nevada Secure Choice', deadline: 'July 1, 2025', penalty: 'TBD', status: 'implementing' }
  ];

  // Employee Management Compliance Areas
  const employeeManagementAreas = [
    {
      id: 'handbook-policies',
      category: 'Handbook Policies & Documentation',
      risks: [
        'FLSA misclassification: up to $1,000 per violation',
        'ADA violations: civil penalties varying by offense',
        'Inconsistent practices costing $359 billion annually',
        'Turnover costs up to 200% of salary'
      ],
      requirements: [
        'Comprehensive policy documentation',
        'Consistent application procedures',
        'Regular policy updates and training',
        'Clear grievance and dispute resolution'
      ]
    },
    {
      id: 'leave-management',
      category: 'Paid Leave, Sick Time & FMLA',
      risks: [
        'Lawsuits for unpaid wages and damages',
        'State-specific penalties and fines',
        'DOL complaints and legal action',
        'Back wages and attorney fee liability'
      ],
      requirements: [
        'State and federal leave compliance',
        'Accurate leave tracking systems',
        'Employee notification procedures',
        'Documentation and record keeping'
      ]
    },
    {
      id: 'i9-compliance',
      category: 'Form I-9 Compliance',
      risks: [
        'Paperwork violations: $281 - $2,789 per violation',
        'Hiring unauthorized workers: $698 - $27,894 per worker',
        'Civil and criminal penalties',
        'Debarment from government contracts'
      ],
      requirements: [
        'Proper I-9 completion and retention',
        'Timely verification procedures',
        'Regular internal audits',
        'Staff training and documentation'
      ]
    },
    {
      id: 'eeo1-reporting',
      category: 'EEO-1 Reporting',
      risks: [
        'Court orders and contempt fees',
        'Loss of federal contracts worth millions',
        'Litigation costs and attorney fees',
        'Debarment from future contracts'
      ],
      requirements: [
        'Annual demographic reporting',
        'Accurate workforce data collection',
        'Diversity and inclusion tracking',
        'Federal contractor compliance'
      ]
    }
  ];

  const getComplianceColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'construction': return <HardHat className="w-4 h-4" />;
      case 'manufacturing': return <Factory className="w-4 h-4" />;
      case 'healthcare': return <Heart className="w-4 h-4" />;
      case 'retail': return <Building className="w-4 h-4" />;
      case 'professional-services': return <Briefcase className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'implementing': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'planned': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const filteredOSHAAreas = oshaComplianceAreas.filter(area => 
    selectedIndustry === 'all' || area.industry.includes(selectedIndustry) || area.industry.includes('all')
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HardHat className="w-8 h-8 text-orange-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-orange-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Context Selectors */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Industry Focus</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="all">{currentLabels.all}</option>
              <option value="construction">{currentLabels.construction}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="retail">{currentLabels.retail}</option>
              <option value="professional-services">{currentLabels.professionalServices}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <select 
              value={selectedCompanySize}
              onChange={(e) => setSelectedCompanySize(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="small">{currentLabels.small}</option>
              <option value="medium">{currentLabels.medium}</option>
              <option value="large">{currentLabels.large}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              {currentLabels.assessRisk}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-9 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="osha-safety">{currentLabels.oshaSafety}</TabsTrigger>
            <TabsTrigger value="aca-requirements">{currentLabels.acaRequirements}</TabsTrigger>
            <TabsTrigger value="state-retirement">{currentLabels.stateRetirement}</TabsTrigger>
            <TabsTrigger value="employee-management">{currentLabels.employeeManagement}</TabsTrigger>
            <TabsTrigger value="workers-comp">{currentLabels.workersComp}</TabsTrigger>
            <TabsTrigger value="vaccine-policies">{currentLabels.vaccinePolicies}</TabsTrigger>
            <TabsTrigger value="cost-calculator">{currentLabels.costCalculator}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Workplace Compliance Intelligence Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">{complianceScore}%</div>
                  <div className="text-sm text-gray-400">{currentLabels.complianceScore}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-1">12</div>
                  <div className="text-sm text-gray-400">Critical Risks</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">$161K</div>
                  <div className="text-sm text-gray-400">Max OSHA Penalty</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">12</div>
                  <div className="text-sm text-gray-400">State Programs</div>
                </div>
              </div>
              
              <div className="bg-orange-900/20 border border-orange-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <HardHat className="w-5 h-5 text-orange-400" />
                  <h4 className="font-bold text-white">Workplace Compliance Strategic Advantage</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Transform workplace compliance from operational burden to competitive advantage. Companies 
                  with robust safety and employee management programs reduce incident costs by 70% and 
                  improve employee retention by 40%.
                </p>
              </div>
            </Card>

            {/* OSHA Risk Overview */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">OSHA Critical Risk Areas</h3>
              
              <div className="grid lg:grid-cols-1 gap-4">
                {filteredOSHAAreas.slice(0, 5).map((area) => (
                  <div key={area.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        {area.category.includes('Fall') && <HardHat className="w-6 h-6 text-orange-400" />}
                        {area.category.includes('COVID') && <Shield className="w-6 h-6 text-blue-400" />}
                        {area.category.includes('Heat') && <Thermometer className="w-6 h-6 text-red-400" />}
                        {area.category.includes('Silica') && <Wind className="w-6 h-6 text-purple-400" />}
                        {area.category.includes('Chemical') && <Microscope className="w-6 h-6 text-green-400" />}
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white">{area.category}</h4>
                        <p className="text-sm text-gray-400">{area.description}</p>
                        <Badge className={`text-xs mt-1 ${getComplianceColor(area.severity)}`}>
                          {area.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        ${(area.maxPenalty / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Max Penalty</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* ACA & State Program Overview */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">ACA Compliance Penalties</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h4 className="font-medium text-red-400 mb-2">4980H(a) Penalty</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Failure to offer Minimum Essential Coverage to 95% of full-time employees
                    </p>
                    <div className="text-2xl font-bold text-red-400">$2,970</div>
                    <div className="text-xs text-gray-400">per employee annually</div>
                  </div>
                  
                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <h4 className="font-medium text-orange-400 mb-2">4980H(b) Penalty</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Unaffordable coverage or coverage not meeting Minimum Value
                    </p>
                    <div className="text-2xl font-bold text-orange-400">$4,460</div>
                    <div className="text-xs text-gray-400">per employee annually</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">State Retirement Programs</h3>
                
                <div className="space-y-3">
                  <div className="text-center p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-xl font-bold text-green-400 mb-1">6</div>
                    <div className="text-sm text-gray-400">Active Programs</div>
                  </div>
                  
                  <div className="text-center p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="text-xl font-bold text-yellow-400 mb-1">3</div>
                    <div className="text-sm text-gray-400">Implementing</div>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-xl font-bold text-blue-400 mb-1">3</div>
                    <div className="text-sm text-gray-400">Planned</div>
                  </div>
                  
                  <div className="p-3 bg-gray-900 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">California Example</div>
                    <div className="text-lg font-bold text-white">$250-$500</div>
                    <div className="text-xs text-gray-400">per employee penalty</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('osha-safety')}
                >
                  <HardHat className="w-4 h-4" />
                  OSHA Assessment
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('aca-requirements')}
                >
                  <Heart className="w-4 h-4" />
                  ACA Analysis
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('cost-calculator')}
                >
                  <Calculator className="w-4 h-4" />
                  {currentLabels.calculateCost}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('implementation')}
                >
                  <Target className="w-4 h-4" />
                  Implementation Plan
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* OSHA & Safety */}
          <TabsContent value="osha-safety" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">OSHA Workplace Safety Program</h2>
              
              <Button className="bg-orange-600 hover:bg-orange-700">
                Generate Safety Assessment
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {filteredOSHAAreas.map((area) => (
                <Card key={area.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{area.category}</h3>
                      <p className="text-sm text-gray-400 mb-2">{area.description}</p>
                      <Badge className={`text-xs ${getComplianceColor(area.severity)}`}>
                        {area.severity.toUpperCase()} RISK
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-400">
                        ${(area.maxPenalty / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Max Penalty</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Requirements</h4>
                      <ul className="space-y-1">
                        {area.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Violation Types</h4>
                      {area.violations.map((violation, index) => (
                        <div key={index} className="p-3 bg-gray-900 rounded-lg mb-3">
                          <div className="font-medium text-white text-sm mb-1">{violation.type}</div>
                          <div className="text-xs text-gray-400 mb-2">{violation.description}</div>
                          <div className="text-sm font-bold text-red-400">{violation.penaltyRange}</div>
                        </div>
                      ))}
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {area.industry.map((ind, index) => (
                          <div key={index} className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded text-xs">
                            {getIndustryIcon(ind)}
                            <span className="text-gray-300 capitalize">{ind === 'all' ? 'All' : ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* OSHA Focus Areas */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Current OSHA Focus Areas</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <HardHat className="w-8 h-8 text-orange-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Fall Protection</h4>
                  <p className="text-sm text-gray-300">
                    Leading cause of workplace fatalities, especially in construction and roofing
                  </p>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">COVID-19 Safety</h4>
                  <p className="text-sm text-gray-300">
                    Vaccination, testing, ventilation, and sanitation protocols
                  </p>
                </div>
                
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <Thermometer className="w-8 h-8 text-red-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Heat Illness Prevention</h4>
                  <p className="text-sm text-gray-300">
                    Hydration, rest breaks, and shade for outdoor workers
                  </p>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Wind className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Silica Dust Exposure</h4>
                  <p className="text-sm text-gray-300">
                    Stricter enforcement of exposure limits and control measures
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <Eye className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Whistleblower Protection</h4>
                  <p className="text-sm text-gray-300">
                    Protecting workers who report safety violations from retaliation
                  </p>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Brain className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Ergonomics</h4>
                  <p className="text-sm text-gray-300">
                    Preventing musculoskeletal disorders from repetitive tasks
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ACA Requirements */}
          <TabsContent value="aca-requirements" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">ACA Requirements & Penalties</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate ACA Assessment
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {Object.entries(acaRequirements).map(([key, requirement]) => (
                <Card key={key} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {key === '4980H_a' ? '4980H(a) Penalty' : 
                         key === '4980H_b' ? '4980H(b) Penalty' : 
                         'Group Health Plan Reforms'}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{requirement.description}</p>
                      <Badge className="text-xs bg-red-900/20 text-red-400 border-red-700">
                        HIGH IMPACT
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">
                        ${requirement.penalty.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {key.includes('4980H') ? 'per employee annually' : 'per day per individual'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Trigger Condition</h4>
                      <p className="text-sm text-gray-300">{requirement.condition}</p>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Calculation Method</h4>
                      <p className="text-sm text-gray-300">{requirement.calculation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-medium text-blue-400 mb-2">Impact Example</h4>
                    <p className="text-sm text-gray-300">
                      For a company with 100 full-time employees, the {key} penalty could result in 
                      annual costs of <span className="font-bold text-white">
                        ${(requirement.penalty * (key.includes('group') ? 365 : 100)).toLocaleString()}
                      </span> if violations occur.
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* ACA Compliance Checklist */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ACA Compliance Checklist</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Coverage Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Offer MEC to 95% of full-time employees</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Ensure coverage meets Minimum Value standards</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-white">Verify coverage affordability thresholds</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Reporting Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Annual 1094-C and 1095-C reporting</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Employee notification procedures</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-white">Full-time employee tracking systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* State Retirement */}
          <TabsContent value="state-retirement" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">State-Mandated Retirement Plans</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Multi-State Compliance Plan
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">State Program Status Overview</h3>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-sm text-gray-400">Active Programs</div>
                  <div className="text-xs text-green-400 mt-1">Currently Enforcing</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">Implementing</div>
                  <div className="text-xs text-yellow-400 mt-1">Launching 2024-2025</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">Planned</div>
                  <div className="text-xs text-blue-400 mt-1">Timeline TBD</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">State-by-State Program Details</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">State</th>
                      <th className="text-left py-3 text-gray-400">Program</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                      <th className="text-left py-3 text-gray-400">Deadline</th>
                      <th className="text-left py-3 text-gray-400">Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateRetirementPrograms.map((program, index) => (
                      <tr key={index} className="border-b border-gray-800">
                        <td className="py-3 text-white font-medium">{program.state}</td>
                        <td className="py-3 text-gray-300">{program.program}</td>
                        <td className="py-3">
                          <Badge className={`text-xs ${getStatusColor(program.status)}`}>
                            {program.status.toUpperCase()}
                          </Badge>
                        </td>
                        <td className="py-3 text-gray-300">{program.deadline}</td>
                        <td className="py-3 text-gray-300">{program.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* ERISA Fiduciary Requirements */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ERISA Fiduciary Requirements</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Core Fiduciary Duties</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-1">Duty of Loyalty</h5>
                      <p className="text-sm text-gray-300">Acting solely in the interest of plan participants and beneficiaries</p>
                    </div>
                    
                    <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-1">Duty of Prudence</h5>
                      <p className="text-sm text-gray-300">Carrying out duties with care, skill, prudence, and diligence</p>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-1">Duty of Diversification</h5>
                      <p className="text-sm text-gray-300">Ensuring investments are diversified to minimize risk of large losses</p>
                    </div>
                    
                    <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-1">Duty of Monitoring</h5>
                      <p className="text-sm text-gray-300">Regularly reviewing plan investments and service providers</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Compliance Options</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">State-Sponsored IRA Program</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Enroll employees in state program</li>
                        <li>• Minimal employer fiduciary responsibility</li>
                        <li>• State manages investment options</li>
                        <li>• Automatic payroll deduction setup</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Employer-Sponsored Plan</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Establish qualifying 401(k) plan</li>
                        <li>• Full ERISA fiduciary responsibility</li>
                        <li>• Greater investment control and flexibility</li>
                        <li>• Higher administrative requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Employee Management */}
          <TabsContent value="employee-management" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Employee Management Compliance</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Comprehensive Assessment
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {employeeManagementAreas.map((area) => (
                <Card key={area.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{area.category}</h3>
                      <Badge className="text-xs bg-purple-900/20 text-purple-400 border-purple-700 mt-2">
                        CRITICAL COMPLIANCE
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        {area.id === 'handbook-policies' && <FileText className="w-6 h-6 text-white" />}
                        {area.id === 'leave-management' && <Clock className="w-6 h-6 text-white" />}
                        {area.id === 'i9-compliance' && <Users className="w-6 h-6 text-white" />}
                        {area.id === 'eeo1-reporting' && <BarChart3 className="w-6 h-6 text-white" />}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Risks</h4>
                      <ul className="space-y-1">
                        {area.risks.map((risk, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Compliance Requirements</h4>
                      <ul className="space-y-1">
                        {area.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Employment Practices Liability Insurance */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Employment Practices Liability Insurance (EPLI)</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Coverage Areas</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Discrimination Claims</h5>
                      <p className="text-sm text-gray-300">Race, sex, age, disability, religion, national origin</p>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Wrongful Termination</h5>
                      <p className="text-sm text-gray-300">Breach of employment contract, constructive discharge</p>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Harassment & Retaliation</h5>
                      <p className="text-sm text-gray-300">Sexual harassment, whistleblower retaliation</p>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Wage & Hour Disputes</h5>
                      <p className="text-sm text-gray-300">FLSA violations, overtime claims, misclassification</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Cost Analysis</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Annual Premium Estimate</h5>
                      <div className="text-2xl font-bold text-white mb-1">$2,400 - $8,500</div>
                      <div className="text-sm text-gray-400">Based on company size and industry</div>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Typical Coverage Limits</h5>
                      <div className="text-lg font-bold text-white mb-1">$1M - $5M</div>
                      <div className="text-sm text-gray-400">Per claim and aggregate limits</div>
                    </div>
                    
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">Average Claim Cost</h5>
                      <div className="text-lg font-bold text-white mb-1">$125,000</div>
                      <div className="text-sm text-gray-400">Including legal fees and settlements</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Workers' Compensation */}
          <TabsContent value="workers-comp" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Workers' Compensation Program</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Workers' Comp Assessment
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Workers' Compensation Benefits</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Coverage Components</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <Heart className="w-6 h-6 text-blue-400 mb-2" />
                      <h5 className="font-medium text-blue-400 mb-2">Medical Benefits</h5>
                      <p className="text-sm text-gray-300">
                        Coverage for treatment, rehabilitation, and ongoing medical care for work-related injuries
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-400 mb-2" />
                      <h5 className="font-medium text-green-400 mb-2">Wage Replacement</h5>
                      <p className="text-sm text-gray-300">
                        Partial salary coverage during recovery period, typically 60-70% of average wages
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-400 mb-2" />
                      <h5 className="font-medium text-purple-400 mb-2">Disability Benefits</h5>
                      <p className="text-sm text-gray-300">
                        Compensation for permanent or temporary impairments affecting work capacity
                      </p>
                    </div>
                    
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <BookOpen className="w-6 h-6 text-yellow-400 mb-2" />
                      <h5 className="font-medium text-yellow-400 mb-2">Vocational Rehabilitation</h5>
                      <p className="text-sm text-gray-300">
                        Assistance with retraining and job placement for workers unable to return to previous roles
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Compliance Requirements</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Reporting Obligations</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Immediate injury reporting (24-48 hours)</li>
                        <li>• State workers' comp board notification</li>
                        <li>• Insurance carrier claim filing</li>
                        <li>• Return-to-work documentation</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Record Keeping</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• OSHA injury and illness logs</li>
                        <li>• Medical surveillance records</li>
                        <li>• Safety training documentation</li>
                        <li>• Incident investigation reports</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Cost Management</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Experience modification factor tracking</li>
                        <li>• Safety program implementation</li>
                        <li>• Early return-to-work programs</li>
                        <li>• Claims management procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Industry-Specific Risks */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Industry-Specific Workers' Comp Risks</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <HardHat className="w-8 h-8 text-orange-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Construction</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Falls from height</li>
                    <li>• Equipment accidents</li>
                    <li>• Repetitive stress injuries</li>
                    <li>• Average rate: $8-15 per $100 payroll</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Factory className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Manufacturing</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Machinery injuries</li>
                    <li>• Chemical exposure</li>
                    <li>• Ergonomic disorders</li>
                    <li>• Average rate: $3-8 per $100 payroll</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Briefcase className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Professional Services</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Repetitive strain injuries</li>
                    <li>• Workplace stress</li>
                    <li>• Slip and fall accidents</li>
                    <li>• Average rate: $0.50-2 per $100 payroll</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Vaccine Policies */}
          <TabsContent value="vaccine-policies" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Workplace Vaccine Policies</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Policy Framework
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Vaccine Policy Components</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Policy Requirements</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <Syringe className="w-6 h-6 text-blue-400 mb-2" />
                      <h5 className="font-medium text-blue-400 mb-2">Vaccination Requirements</h5>
                      <p className="text-sm text-gray-300">
                        Define which vaccines are mandatory based on job roles, industry requirements, and public health guidelines
                      </p>
                    </div>
                    
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <Shield className="w-6 h-6 text-yellow-400 mb-2" />
                      <h5 className="font-medium text-yellow-400 mb-2">Exemption Handling</h5>
                      <p className="text-sm text-gray-300">
                        Processes for medical or religious exemptions, including documentation requirements and accommodation procedures
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <Database className="w-6 h-6 text-green-400 mb-2" />
                      <h5 className="font-medium text-green-400 mb-2">Record Keeping</h5>
                      <p className="text-sm text-gray-300">
                        Secure maintenance of vaccination records, privacy protection, and compliance documentation
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <BookOpen className="w-6 h-6 text-purple-400 mb-2" />
                      <h5 className="font-medium text-purple-400 mb-2">Education & Communication</h5>
                      <p className="text-sm text-gray-300">
                        Employee education about vaccine benefits, risks, and company policies
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Implementation Framework</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Phase 1: Policy Development</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Legal compliance review</li>
                        <li>• Industry-specific requirements</li>
                        <li>• Stakeholder consultation</li>
                        <li>• Policy documentation</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Phase 2: Communication & Training</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Employee notification</li>
                        <li>• Management training</li>
                        <li>• FAQ development</li>
                        <li>• Exemption process setup</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Phase 3: Implementation & Monitoring</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Vaccination tracking</li>
                        <li>• Accommodation procedures</li>
                        <li>• Compliance monitoring</li>
                        <li>• Policy updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Industry-Specific Vaccine Requirements */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Industry-Specific Vaccine Requirements</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <Heart className="w-8 h-8 text-red-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Healthcare</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Hepatitis B</li>
                    <li>• Influenza (annual)</li>
                    <li>• MMR (Measles, Mumps, Rubella)</li>
                    <li>• Varicella (Chickenpox)</li>
                    <li>• COVID-19</li>
                    <li>• Tdap (Tetanus, Diphtheria, Pertussis)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Building className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Educational Institutions</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• MMR</li>
                    <li>• Varicella</li>
                    <li>• Tdap</li>
                    <li>• Influenza</li>
                    <li>• COVID-19 (varies by state)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Globe className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">General Workplace</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• COVID-19 (if mandated)</li>
                    <li>• Influenza (recommended)</li>
                    <li>• Tdap (recommended)</li>
                    <li>• Travel-specific vaccines</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Legal Considerations */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Legal Considerations & Best Practices</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Legal Compliance</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <Scale className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">ADA Accommodations</h5>
                        <p className="text-sm text-gray-300">Reasonable accommodations for medical exemptions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Religious Exemptions</h5>
                        <p className="text-sm text-gray-300">Title VII accommodation requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <Lock className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Privacy Protection</h5>
                        <p className="text-sm text-gray-300">HIPAA and state privacy law compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Implementation Best Practices</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <Users className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Employee Engagement</h5>
                        <p className="text-sm text-gray-300">Clear communication and education programs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <FileText className="w-5 h-5 text-orange-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Documentation</h5>
                        <p className="text-sm text-gray-300">Comprehensive record keeping and audit trails</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                      <Activity className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Monitoring & Updates</h5>
                        <p className="text-sm text-gray-300">Regular policy review and updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Cost Calculator */}
          <TabsContent value="cost-calculator" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Workplace Compliance Cost Calculator</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Cost Analysis
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">OSHA Violation Cost Analysis</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <div className="text-3xl font-bold text-red-400 mb-2">$161K</div>
                  <div className="text-sm text-gray-400">Max Willful Violation</div>
                  <div className="text-xs text-red-400 mt-1">Per violation</div>
                </div>
                
                <div className="text-center p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$16K</div>
                  <div className="text-sm text-gray-400">Max Serious Violation</div>
                  <div className="text-xs text-orange-400 mt-1">Per violation</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$16K</div>
                  <div className="text-sm text-gray-400">Daily Failure to Abate</div>
                  <div className="text-xs text-yellow-400 mt-1">Up to 30 days</div>
                </div>
              </div>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">ACA Penalty Calculator</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Number of Full-Time Employees</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Penalty Type</label>
                    <select className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg">
                      <option value="4980H_a">4980H(a) - No Coverage ($2,970/employee)</option>
                      <option value="4980H_b">4980H(b) - Unaffordable Coverage ($4,460/employee)</option>
                    </select>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-medium text-blue-400 mb-2">Estimated Annual Penalty</h4>
                    <div className="text-2xl font-bold text-white">$297,000</div>
                    <div className="text-sm text-gray-400 mt-1">For 100 employees at 4980H(a) rate</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Employee Management Costs</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">I-9 Compliance Violations</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Paperwork violations:</span>
                      <span className="text-red-400 font-bold">$281 - $2,789</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Unauthorized workers:</span>
                      <span className="text-red-400 font-bold">$698 - $27,894</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Conflict & Turnover Costs</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Annual conflict cost:</span>
                      <span className="text-yellow-400 font-bold">$359B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Turnover replacement:</span>
                      <span className="text-yellow-400 font-bold">200% salary</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">EPLI Coverage</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Annual premium:</span>
                      <span className="text-green-400 font-bold">$2,400 - $8,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Avg claim cost:</span>
                      <span className="text-green-400 font-bold">$125,000</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Investment ROI Analysis</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Prevention Investment</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Safety training program</span>
                      <span className="text-green-400">$25,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">EPLI insurance</span>
                      <span className="text-green-400">$8,500</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">HR compliance system</span>
                      <span className="text-green-400">$15,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Policy development</span>
                      <span className="text-green-400">$10,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Investment</span>
                      <span className="text-green-400 font-bold">$58,500</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Risk Exposure Avoided</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">OSHA max penalties</span>
                      <span className="text-red-400">$161,323</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">ACA penalties (100 EEs)</span>
                      <span className="text-red-400">$446,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Employment claims</span>
                      <span className="text-red-400">$125,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Turnover costs</span>
                      <span className="text-red-400">$200,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Risk</span>
                      <span className="text-red-400 font-bold">$932,323</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1,594%</div>
                  <div className="text-white font-medium">Potential ROI</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Investment of $58.5K protects against $932K in potential losses
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Compliance Implementation Roadmap</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Implementation Plan
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">90-Day Workplace Compliance Implementation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    30
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 1: Assessment & Foundation (Days 1-30)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-400 mb-2">OSHA & Safety</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Complete workplace hazard assessment</li>
                          <li>• Identify industry-specific requirements</li>
                          <li>• Develop safety training programs</li>
                          <li>• Establish incident reporting procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2">ACA & Benefits</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Audit current coverage offerings</li>
                          <li>• Assess full-time employee classification</li>
                          <li>• Review affordability calculations</li>
                          <li>• Implement tracking systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    60
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 2: Policy Development & Training (Days 31-60)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-400 mb-2">Employee Management</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Update employee handbook</li>
                          <li>• Implement leave management system</li>
                          <li>• Conduct I-9 audit and training</li>
                          <li>• Establish EEO-1 reporting process</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-400 mb-2">Insurance & Protection</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Secure workers' compensation coverage</li>
                          <li>• Implement EPLI protection</li>
                          <li>• Develop vaccine policies</li>
                          <li>• Establish claims management procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    90
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 3: Implementation & Monitoring (Days 61-90)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-yellow-400 mb-2">State Compliance</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Assess state retirement plan requirements</li>
                          <li>• Implement multi-state compliance tracking</li>
                          <li>• Establish fiduciary oversight procedures</li>
                          <li>• Document compliance efforts</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-400 mb-2">Monitoring & Optimization</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Establish ongoing compliance monitoring</li>
                          <li>• Implement regular audit procedures</li>
                          <li>• Train management teams</li>
                          <li>• Create continuous improvement process</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Implementation Success Metrics</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Compliance Score Target</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">Zero</div>
                  <div className="text-sm text-gray-400">OSHA Violations</div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Staff Training Completion</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24hr</div>
                  <div className="text-sm text-gray-400">Incident Response Time</div>
                </div>
              </div>
            </Card>

            {/* Ongoing Maintenance */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Ongoing Compliance Maintenance</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Monthly Activities</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      Safety training sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-green-400" />
                      Compliance metrics review
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-400" />
                      Policy updates and communication
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      Incident analysis and reporting
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Quarterly Reviews</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-400" />
                      ACA compliance assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      Employee handbook updates
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-400" />
                      Workers' comp experience review
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-yellow-400" />
                      Multi-state compliance check
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Annual Audits</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <HardHat className="w-4 h-4 text-orange-400" />
                      Comprehensive OSHA audit
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      ACA reporting and filing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      I-9 internal audit
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                      EEO-1 data submission
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}