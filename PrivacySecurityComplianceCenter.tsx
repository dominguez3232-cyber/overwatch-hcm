import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  DollarSign, 
  FileText, 
  Database, 
  Server, 
  CreditCard,
  Building,
  Briefcase,
  Users,
  Scale,
  Calculator,
  CheckCircle,
  XCircle,
  Eye,
  Bell,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Clock,
  MapPin,
  Globe,
  Flag,
  Award,
  Umbrella,
  Heart,
  Brain,
  Search,
  Filter,
  Download,
  ExternalLink,
  ArrowRight,
  Plus,
  Settings,
  Star,
  AlertCircle,
  Info,
  CheckSquare,
  BookOpen,
  Layers,
  Network,
  Crosshair,
  Navigation
} from 'lucide-react';

interface PrivacySecurityComplianceCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface ComplianceRisk {
  id: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  minPenalty: number;
  maxPenalty: number;
  averageCost: number;
  industry: string[];
  mitigationSteps: string[];
  regulations: string[];
}

interface SecurityFramework {
  id: string;
  name: string;
  description: string;
  industry: string[];
  requirements: string[];
  cost: string;
  timeline: string;
  compliance: number;
}

interface InsuranceCoverage {
  id: string;
  type: string;
  coverage: string;
  averageCost: number;
  deductible: number;
  industry: string[];
  scenarios: string[];
}

export function PrivacySecurityComplianceCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: PrivacySecurityComplianceCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'risk-assessment' | 'policy-framework' | 'ssae-reporting' | 'cyber-insurance' | 'cost-calculator' | 'compliance-audit' | 'implementation'>('overview');
  const [selectedIndustry, setSelectedIndustry] = useState<'all' | 'healthcare' | 'fintech' | 'retail' | 'saas' | 'manufacturing'>('all');
  const [selectedCompany, setSelectedCompany] = useState<'startup' | 'sme' | 'enterprise'>('sme');
  const [complianceScore, setComplianceScore] = useState(78);

  const labels = {
    en: {
      title: "Privacy & Security Compliance Center",
      subtitle: "Comprehensive compliance intelligence for data protection, cyber security, and regulatory adherence",
      description: "Transform compliance from cost center to strategic advantage with actionable frameworks, risk assessment, and cost optimization",
      
      // Navigation
      overview: "Compliance Overview",
      riskAssessment: "Risk Assessment",
      policyFramework: "Policy Framework",
      ssaeReporting: "SSAE Reporting",
      cyberInsurance: "Cyber Insurance",
      costCalculator: "Cost Calculator",
      complianceAudit: "Compliance Audit",
      implementation: "Implementation",
      
      // Metrics
      riskLevel: "Risk Level",
      complianceScore: "Compliance Score",
      estimatedCost: "Estimated Cost",
      timeToCompliance: "Time to Compliance",
      
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
      healthcare: "Healthcare",
      fintech: "Fintech",
      retail: "Retail",
      saas: "SaaS",
      manufacturing: "Manufacturing",
      
      // Company Size
      startup: "Startup (<50)",
      sme: "SME (50-500)",
      enterprise: "Enterprise (500+)"
    },
    es: {
      title: "Centro de Cumplimiento de Privacidad y Seguridad",
      subtitle: "Inteligencia integral de cumplimiento para protección de datos, ciberseguridad y adherencia regulatoria",
      description: "Transforma el cumplimiento de centro de costos a ventaja estratégica con marcos accionables, evaluación de riesgos y optimización de costos",
      
      // Navigation
      overview: "Vista de Cumplimiento",
      riskAssessment: "Evaluación de Riesgos",
      policyFramework: "Marco de Políticas",
      ssaeReporting: "Reportes SSAE",
      cyberInsurance: "Seguro Cibernético",
      costCalculator: "Calculadora de Costos",
      complianceAudit: "Auditoría de Cumplimiento",
      implementation: "Implementación",
      
      // Metrics
      riskLevel: "Nivel de Riesgo",
      complianceScore: "Puntuación de Cumplimiento",
      estimatedCost: "Costo Estimado",
      timeToCompliance: "Tiempo al Cumplimiento",
      
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
      healthcare: "Salud",
      fintech: "Fintech",
      retail: "Retail",
      saas: "SaaS",
      manufacturing: "Manufactura",
      
      // Company Size
      startup: "Startup (<50)",
      sme: "PYME (50-500)",
      enterprise: "Empresa (500+)"
    }
  };

  const currentLabels = labels[language];

  // Compliance Risks Data
  const complianceRisks: ComplianceRisk[] = [
    {
      id: 'data-breach',
      category: 'Data Breach',
      severity: 'critical',
      description: 'Unauthorized access to customer/employee personal information',
      minPenalty: 36000,
      maxPenalty: 4880000,
      averageCost: 4880000,
      industry: ['all'],
      mitigationSteps: [
        'Implement encryption at rest and in transit',
        'Multi-factor authentication for all accounts',
        'Regular security audits and penetration testing',
        'Employee cybersecurity training',
        'Incident response plan'
      ],
      regulations: ['GDPR', 'CCPA', 'HIPAA', 'SOX']
    },
    {
      id: 'texas-identity-theft',
      category: 'Texas Identity Theft Enforcement',
      severity: 'high',
      description: 'Failure to protect personal information under Texas law',
      minPenalty: 2000,
      maxPenalty: 250000,
      averageCost: 50000,
      industry: ['all'],
      mitigationSteps: [
        'Implement breach notification protocols',
        'Secure data storage and transmission',
        'Regular compliance reviews',
        'Staff training on data protection'
      ],
      regulations: ['Texas Identity Theft Enforcement and Protection Act']
    },
    {
      id: 'aca-noncompliance',
      category: 'ACA Noncompliance',
      severity: 'high',
      description: 'Failure to provide adequate health coverage or reporting',
      minPenalty: 2970,
      maxPenalty: 4460,
      averageCost: 180000,
      industry: ['all'],
      mitigationSteps: [
        'Automated ACA tracking systems',
        'Regular compliance audits',
        'Benefits administration platform',
        'Legal consultation'
      ],
      regulations: ['Affordable Care Act']
    },
    {
      id: 'osha-violations',
      category: 'OSHA Violations',
      severity: 'high',
      description: 'Workplace safety violations and inadequate safety programs',
      minPenalty: 1190,
      maxPenalty: 161323,
      averageCost: 50000,
      industry: ['manufacturing', 'healthcare', 'retail'],
      mitigationSteps: [
        'Comprehensive safety training',
        'Regular safety audits',
        'Safety equipment and protocols',
        'Incident reporting systems'
      ],
      regulations: ['OSHA Standards']
    },
    {
      id: 'i9-violations',
      category: 'I-9 Compliance',
      severity: 'medium',
      description: 'Improper completion or retention of I-9 employment forms',
      minPenalty: 281,
      maxPenalty: 27894,
      averageCost: 15000,
      industry: ['all'],
      mitigationSteps: [
        'Digital I-9 management system',
        'Regular form audits',
        'Staff training on proper completion',
        'Document retention policies'
      ],
      regulations: ['Immigration Reform and Control Act']
    }
  ];

  // Security Frameworks Data
  const securityFrameworks: SecurityFramework[] = [
    {
      id: 'ssae18-type1',
      name: 'SSAE 18 Type 1',
      description: 'Assessment of control design at a point in time',
      industry: ['fintech', 'saas', 'healthcare'],
      requirements: [
        'Control environment documentation',
        'Risk assessment procedures',
        'Information and communication systems',
        'Monitoring activities'
      ],
      cost: '$15,000 - $50,000',
      timeline: '6-8 weeks',
      compliance: 85
    },
    {
      id: 'ssae18-type2',
      name: 'SSAE 18 Type 2',
      description: 'Assessment of control effectiveness over time (6+ months)',
      industry: ['fintech', 'saas', 'healthcare'],
      requirements: [
        'Type 1 requirements plus',
        'Operating effectiveness testing',
        'Continuous monitoring',
        'Exception reporting'
      ],
      cost: '$25,000 - $100,000',
      timeline: '6-12 months',
      compliance: 95
    },
    {
      id: 'hipaa-compliance',
      name: 'HIPAA Compliance Framework',
      description: 'Healthcare data protection and privacy requirements',
      industry: ['healthcare'],
      requirements: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Risk assessment and management'
      ],
      cost: '$10,000 - $75,000',
      timeline: '3-6 months',
      compliance: 90
    },
    {
      id: 'gdpr-framework',
      name: 'GDPR Compliance Framework',
      description: 'European data protection regulation compliance',
      industry: ['all'],
      requirements: [
        'Data mapping and inventory',
        'Privacy by design implementation',
        'Consent management',
        'Data breach response procedures'
      ],
      cost: '$20,000 - $150,000',
      timeline: '6-12 months',
      compliance: 88
    }
  ];

  // Insurance Coverage Data
  const insuranceCoverage: InsuranceCoverage[] = [
    {
      id: 'cyber-liability-basic',
      type: 'Cyber Liability - Basic',
      coverage: '$1,000,000',
      averageCost: 1589,
      deductible: 10000,
      industry: ['all'],
      scenarios: [
        'Data breach notification costs',
        'Credit monitoring services',
        'Legal fees and litigation',
        'Business interruption'
      ]
    },
    {
      id: 'cyber-liability-premium',
      type: 'Cyber Liability - Premium',
      coverage: '$5,000,000',
      averageCost: 7500,
      deductible: 25000,
      industry: ['fintech', 'healthcare', 'saas'],
      scenarios: [
        'Ransomware payments',
        'Data recovery costs',
        'Regulatory fines coverage',
        'Reputation management',
        'Third-party liability'
      ]
    },
    {
      id: 'employment-practices',
      type: 'Employment Practices Liability',
      coverage: '$2,000,000',
      averageCost: 2400,
      deductible: 5000,
      industry: ['all'],
      scenarios: [
        'Wrongful termination claims',
        'Discrimination lawsuits',
        'Harassment allegations',
        'Wage and hour disputes'
      ]
    }
  ];

  const getRiskColor = (severity: string) => {
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
      case 'healthcare': return <Heart className="w-4 h-4" />;
      case 'fintech': return <CreditCard className="w-4 h-4" />;
      case 'retail': return <Building className="w-4 h-4" />;
      case 'saas': return <Server className="w-4 h-4" />;
      case 'manufacturing': return <Settings className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const filteredRisks = complianceRisks.filter(risk => 
    selectedIndustry === 'all' || risk.industry.includes(selectedIndustry) || risk.industry.includes('all')
  );

  const filteredFrameworks = securityFrameworks.filter(framework => 
    selectedIndustry === 'all' || framework.industry.includes(selectedIndustry)
  );

  const filteredInsurance = insuranceCoverage.filter(insurance => 
    selectedIndustry === 'all' || insurance.industry.includes(selectedIndustry) || insurance.industry.includes('all')
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-blue-400 font-medium">{currentLabels.subtitle}</p>
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
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="fintech">{currentLabels.fintech}</option>
              <option value="retail">{currentLabels.retail}</option>
              <option value="saas">{currentLabels.saas}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <select 
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="startup">{currentLabels.startup}</option>
              <option value="sme">{currentLabels.sme}</option>
              <option value="enterprise">{currentLabels.enterprise}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {currentLabels.assessRisk}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="risk-assessment">{currentLabels.riskAssessment}</TabsTrigger>
            <TabsTrigger value="policy-framework">{currentLabels.policyFramework}</TabsTrigger>
            <TabsTrigger value="ssae-reporting">{currentLabels.ssaeReporting}</TabsTrigger>
            <TabsTrigger value="cyber-insurance">{currentLabels.cyberInsurance}</TabsTrigger>
            <TabsTrigger value="cost-calculator">{currentLabels.costCalculator}</TabsTrigger>
            <TabsTrigger value="compliance-audit">{currentLabels.complianceAudit}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
          </TabsList>

          {/* Compliance Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Intelligence Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{complianceScore}%</div>
                  <div className="text-sm text-gray-400">{currentLabels.complianceScore}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-red-400 mb-1">7</div>
                  <div className="text-sm text-gray-400">Critical Risks</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">$4.8M</div>
                  <div className="text-sm text-gray-400">Avg Breach Cost</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">90d</div>
                  <div className="text-sm text-gray-400">{currentLabels.timeToCompliance}</div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Compliance Strategic Advantage</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Transform compliance from cost center to competitive advantage. Companies with strong 
                  compliance frameworks reduce breach costs by 80% and accelerate sales cycles through 
                  security trust signals.
                </p>
              </div>
            </Card>

            {/* Risk Overview Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Risk Assessment Matrix</h3>
              
              <div className="grid lg:grid-cols-1 gap-4">
                {filteredRisks.slice(0, 5).map((risk) => (
                  <div key={risk.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <AlertTriangle className={`w-6 h-6 ${
                          risk.severity === 'critical' ? 'text-red-400' :
                          risk.severity === 'high' ? 'text-orange-400' :
                          risk.severity === 'medium' ? 'text-yellow-400' :
                          'text-green-400'
                        }`} />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white">{risk.category}</h4>
                        <p className="text-sm text-gray-400">{risk.description}</p>
                        <Badge className={`text-xs mt-1 ${getRiskColor(risk.severity)}`}>
                          {risk.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        ${(risk.averageCost / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Avg Cost</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  onClick={() => setActiveTab('risk-assessment')}
                >
                  <AlertTriangle className="w-4 h-4" />
                  {currentLabels.assessRisk}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('policy-framework')}
                >
                  <FileText className="w-4 h-4" />
                  {currentLabels.generatePolicy}
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
                  onClick={() => setActiveTab('compliance-audit')}
                >
                  <CheckSquare className="w-4 h-4" />
                  {currentLabels.scheduleAudit}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Risk Assessment */}
          <TabsContent value="risk-assessment" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Compliance Risk Assessment</h2>
              
              <Button className="bg-red-600 hover:bg-red-700">
                Generate Risk Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {filteredRisks.map((risk) => (
                <Card key={risk.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{risk.category}</h3>
                      <p className="text-sm text-gray-400 mb-2">{risk.description}</p>
                      <Badge className={`text-xs ${getRiskColor(risk.severity)}`}>
                        {risk.severity.toUpperCase()} RISK
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-400">
                        ${(risk.averageCost / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-400">Average Cost</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Penalty Range</h4>
                      <p className="text-sm text-gray-300">
                        ${risk.minPenalty.toLocaleString()} - ${risk.maxPenalty.toLocaleString()}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Regulations</h4>
                      <div className="flex flex-wrap gap-1">
                        {risk.regulations.map((reg, index) => (
                          <Badge key={index} className="text-xs bg-gray-700 text-gray-300">
                            {reg}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Industries Affected</h4>
                      <div className="flex flex-wrap gap-1">
                        {risk.industry.map((ind, index) => (
                          <div key={index} className="flex items-center gap-1">
                            {getIndustryIcon(ind)}
                            <span className="text-xs text-gray-300">
                              {ind === 'all' ? 'All' : ind}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Mitigation Steps</h4>
                    <ul className="space-y-1">
                      {risk.mitigationSteps.map((step, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Policy Framework */}
          <TabsContent value="policy-framework" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Security & Privacy Policy Framework</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Policy Templates
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Information Collection Policies */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Personal Information Collection</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-medium text-blue-400 mb-2">Retail Company Example</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Data: names, addresses, purchase history</li>
                      <li>• Controls: secure storage, limited use, consent</li>
                      <li>• Sharing: third-party consent required</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-medium text-green-400 mb-2">Healthcare Provider Example</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Data: medical history, contact details, insurance</li>
                      <li>• Controls: access controls, encryption, audits</li>
                      <li>• Compliance: HIPAA requirements</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Data Protection Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Data Protection Framework</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-white">Encryption at Rest</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-white">Encryption in Transit</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-white">Access Controls</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-white">Regular Audits</span>
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-white">Incident Response Plan</span>
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Policy Templates */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Policy Template Library</h3>
              
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Privacy Policy Template</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Comprehensive privacy policy covering data collection, use, and sharing
                  </p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    Download Template
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Data Security Policy</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Technical and administrative safeguards for data protection
                  </p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Download Template
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Incident Response Plan</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Step-by-step breach response and notification procedures
                  </p>
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    Download Template
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* SSAE Reporting */}
          <TabsContent value="ssae-reporting" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">SSAE 18 Audit Framework</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Schedule SSAE Audit
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {filteredFrameworks.map((framework) => (
                <Card key={framework.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{framework.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{framework.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="text-xs bg-purple-900/20 text-purple-400 border-purple-700">
                          {framework.timeline}
                        </Badge>
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          {framework.compliance}% Compliance
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{framework.cost}</div>
                      <div className="text-xs text-gray-400">Estimated Cost</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {framework.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Applicable Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {framework.industry.map((ind, index) => (
                          <div key={index} className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded">
                            {getIndustryIcon(ind)}
                            <span className="text-xs text-gray-300 capitalize">{ind}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Compliance Progress</h4>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${framework.compliance}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{framework.compliance}% Complete</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* SSAE Audit Examples */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Service Provider Example</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-sm font-medium text-blue-400 mb-1">SSAE 18 Type 2 Audit</div>
                    <div className="text-sm text-gray-300">
                      6-month assessment of control effectiveness for customer data security and privacy
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Verifies ongoing maintenance of security controls and operational effectiveness
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Payment Processor Example</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-sm font-medium text-green-400 mb-1">SSAE 18 Type 1 Audit</div>
                    <div className="text-sm text-gray-300">
                      Point-in-time evaluation of control design for transaction data protection
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Confirms appropriate design of controls to protect transaction data and ensure compliance
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Cyber Insurance */}
          <TabsContent value="cyber-insurance" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Cyber Liability Insurance Analysis</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Get Insurance Quote
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {filteredInsurance.map((insurance) => (
                <Card key={insurance.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{insurance.type}</h3>
                      <p className="text-sm text-gray-400">Coverage: {insurance.coverage}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          ${insurance.averageCost}/year
                        </Badge>
                        <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">
                          ${insurance.deductible.toLocaleString()} deductible
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Umbrella className="w-8 h-8 text-blue-400 mb-2" />
                      <div className="text-xs text-gray-400">Protection</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Coverage Scenarios</h4>
                      <ul className="space-y-1">
                        {insurance.scenarios.map((scenario, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {scenario}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Recommended For</h4>
                      <div className="flex flex-wrap gap-2">
                        {insurance.industry.map((ind, index) => (
                          <div key={index} className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded">
                            {getIndustryIcon(ind)}
                            <span className="text-xs text-gray-300 capitalize">{ind}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Cost Analysis</h4>
                        <div className="text-sm text-gray-300">
                          <div className="flex justify-between">
                            <span>Annual Premium:</span>
                            <span>${insurance.averageCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Deductible:</span>
                            <span>${insurance.deductible.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-bold text-white mt-2">
                            <span>Coverage Limit:</span>
                            <span>{insurance.coverage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Real-World Examples */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">E-commerce Business Case Study</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-900/20 border border-red-700 rounded-lg">
                    <div className="text-sm font-medium text-red-400 mb-1">Data Breach Incident</div>
                    <div className="text-sm text-gray-300">
                      Customer credit card information stolen from online store
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Notification Costs:</span>
                      <span>$15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Credit Monitoring:</span>
                      <span>$45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Legal Fees:</span>
                      <span>$125,000</span>
                    </div>
                    <div className="flex justify-between font-bold text-white">
                      <span>Total Covered:</span>
                      <span>$185,000</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Healthcare Organization Case Study</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="text-sm font-medium text-yellow-400 mb-1">Ransomware Attack</div>
                    <div className="text-sm text-gray-300">
                      Patient records encrypted, systems down for 5 days
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Ransom Payment:</span>
                      <span>$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Recovery:</span>
                      <span>$75,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PR Management:</span>
                      <span>$30,000</span>
                    </div>
                    <div className="flex justify-between font-bold text-white">
                      <span>Total Covered:</span>
                      <span>$155,000</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Cost Calculator */}
          <TabsContent value="cost-calculator" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Compliance Cost Calculator</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Cost Report
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Average Compliance Costs by Category</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Cyber Incident Costs</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Legal Fees (SME)</span>
                      <span className="font-bold text-red-400">$562,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Data Breach (Global Avg)</span>
                      <span className="font-bold text-red-400">$4,880,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Small Business Recovery</span>
                      <span className="font-bold text-yellow-400">$36,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">SME Recovery</span>
                      <span className="font-bold text-yellow-400">$86,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Insurance & Prevention</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Cyber Insurance (Basic)</span>
                      <span className="font-bold text-green-400">$1,589/year</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">SSAE 18 Type 1</span>
                      <span className="font-bold text-blue-400">$15K-$50K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">SSAE 18 Type 2</span>
                      <span className="font-bold text-blue-400">$25K-$100K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">GDPR Compliance</span>
                      <span className="font-bold text-purple-400">$20K-$150K</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Texas-Specific Costs */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Texas-Specific Compliance Costs</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <Flag className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-400 mb-1">$250K</div>
                  <div className="text-sm text-gray-400">Max penalty per breach</div>
                  <div className="text-xs text-gray-500 mt-1">TX Identity Theft Act</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400 mb-1">$50K</div>
                  <div className="text-sm text-gray-400">Max penalty per violation</div>
                  <div className="text-xs text-gray-500 mt-1">$2K minimum</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">$300K</div>
                  <div className="text-sm text-gray-400">Legal & admin costs</div>
                  <div className="text-xs text-gray-500 mt-1">Range: $3.5K-$300K</div>
                </div>
              </div>
            </Card>

            {/* ROI Calculator */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Investment ROI</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Prevention Investment</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Cyber Insurance</span>
                      <span className="text-green-400">$7,500/year</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Security Framework</span>
                      <span className="text-green-400">$75,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Staff Training</span>
                      <span className="text-green-400">$15,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Investment</span>
                      <span className="text-green-400 font-bold">$97,500</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Breach Cost Avoided</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Average Breach Cost</span>
                      <span className="text-red-400">$4,880,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Legal Fees</span>
                      <span className="text-red-400">$562,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Regulatory Penalties</span>
                      <span className="text-red-400">$250,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Risk</span>
                      <span className="text-red-400 font-bold">$5,692,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5,742%</div>
                  <div className="text-white font-medium">Potential ROI</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Investment of $97.5K protects against $5.69M in potential losses
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Compliance Audit */}
          <TabsContent value="compliance-audit" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Compliance Audit Preparation</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Start Audit Prep
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Audit Readiness Checklist</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Documentation Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Privacy Policy Documentation</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Data Processing Records</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Security Incident Logs</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-white">Employee Training Records</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Vendor Assessment Reports</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Technical Controls</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Encryption Implementation</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Access Control Systems</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Backup and Recovery</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-white">Network Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Vulnerability Assessments</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Overall Audit Readiness</div>
                  <div className="text-sm text-gray-400">Based on completed requirements</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">68%</div>
                  <div className="text-xs text-gray-400">Ready</div>
                </div>
              </div>
            </Card>

            {/* Common Audit Findings */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Common Audit Findings & Remediation</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-400 mb-1">Inadequate Data Retention Policies</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Lack of clear data retention schedules and secure disposal procedures
                      </p>
                      <div className="text-xs text-gray-400">
                        Remediation: Implement automated data lifecycle management with documented retention periods
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-1">Insufficient Access Controls</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Overprivileged user accounts and lack of regular access reviews
                      </p>
                      <div className="text-xs text-gray-400">
                        Remediation: Implement principle of least privilege and quarterly access reviews
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-orange-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-orange-400 mb-1">Missing Employee Training Records</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Inadequate documentation of security awareness training completion
                      </p>
                      <div className="text-xs text-gray-400">
                        Remediation: Implement learning management system with completion tracking
                      </div>
                    </div>
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
              <h3 className="text-xl font-bold text-white mb-6">90-Day Implementation Timeline</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    30
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 1: Foundation (Days 1-30)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Complete risk assessment</li>
                          <li>• Document current state</li>
                          <li>• Identify compliance gaps</li>
                          <li>• Select security framework</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Draft policy templates</li>
                          <li>• Secure cyber insurance quotes</li>
                          <li>• Plan staff training</li>
                          <li>• Establish project team</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    60
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 2: Implementation (Days 31-60)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Deploy technical controls</li>
                          <li>• Implement access management</li>
                          <li>• Configure monitoring systems</li>
                          <li>• Establish incident response</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Conduct staff training</li>
                          <li>• Finalize policy documentation</li>
                          <li>• Test backup procedures</li>
                          <li>• Begin vendor assessments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    90
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 3: Validation (Days 61-90)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Conduct internal audit</li>
                          <li>• Test incident response plan</li>
                          <li>• Validate compliance controls</li>
                          <li>• Schedule external audit</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Finalize insurance coverage</li>
                          <li>• Document procedures</li>
                          <li>• Train ongoing team</li>
                          <li>• Establish monitoring cadence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Success Metrics & KPIs</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Compliance Score Target</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">24hr</div>
                  <div className="text-sm text-gray-400">Incident Response Time</div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Staff Training Completion</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}