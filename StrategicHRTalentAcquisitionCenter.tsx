import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Users, 
  Target, 
  TrendingUp, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Brain, 
  Zap, 
  Award, 
  Calculator, 
  BarChart3, 
  Search, 
  UserCheck, 
  UserX, 
  Clock, 
  Shield, 
  Star, 
  Filter, 
  Eye, 
  MessageSquare, 
  FileText, 
  Lightbulb, 
  ArrowRight, 
  Plus, 
  Settings, 
  Building, 
  Briefcase, 
  Heart, 
  Globe, 
  Navigation, 
  Compass, 
  Map, 
  Flag, 
  Crosshair, 
  Layers, 
  Network, 
  Database, 
  Activity, 
  PieChart, 
  LineChart, 
  TrendingDown, 
  RefreshCw, 
  Download, 
  ExternalLink, 
  Info, 
  HelpCircle, 
  CheckSquare, 
  AlertCircle, 
  PlayCircle, 
  PauseCircle, 
  Calendar, 
  Bell, 
  Phone, 
  Video, 
  Mail, 
  Bookmark, 
  Tag, 
  Hash, 
  AtSign, 
  Paperclip, 
  Link, 
  Code, 
  Terminal, 
  Monitor, 
  Smartphone, 
  Tablet
} from 'lucide-react';

interface StrategicHRTalentAcquisitionCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface BadHireMetric {
  id: string;
  category: string;
  metric: string;
  value: number;
  unit: string;
  impact: 'high' | 'medium' | 'low';
  source: string;
}

interface HiringMethodology {
  id: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  roi_impact: number;
}

interface DiscoveryQuestion {
  id: string;
  persona: 'ceo' | 'cfo' | 'people_ops';
  category: 'situation' | 'insight' | 'problem' | 'implication';
  question: string;
  purpose: string;
  follow_up: string[];
}

interface TalentROIMetric {
  hire_type: string;
  annual_profit: number;
  incremental_profit: number;
  percentage_improvement: number;
}

export function StrategicHRTalentAcquisitionCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: StrategicHRTalentAcquisitionCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'bad-hire-analysis' | 'strategic-methodology' | 'roi-calculator' | 'discovery-framework' | 'conversation-bank' | 'implementation' | 'success-metrics'>('overview');
  const [selectedPersona, setSelectedPersona] = useState<'ceo' | 'cfo' | 'people_ops'>('ceo');
  const [selectedIndustry, setSelectedIndustry] = useState<'tech' | 'professional-services' | 'healthcare' | 'manufacturing' | 'financial-services'>('tech');
  const [companySize, setCompanySize] = useState<number>(150);

  const labels = {
    en: {
      title: "Strategic HR & Talent Acquisition Center",
      subtitle: "Transform hiring from cost center to strategic value driver with data-driven talent acquisition intelligence",
      description: "Mitigate bad hire risk, optimize talent acquisition ROI, and implement strategic hiring methodologies that deliver measurable business outcomes",
      
      // Navigation
      overview: "Strategic Overview",
      badHireAnalysis: "Bad Hire Analysis",
      strategicMethodology: "Strategic Methodology",
      roiCalculator: "ROI Calculator",
      discoveryFramework: "Discovery Framework",
      conversationBank: "Conversation Bank",
      implementation: "Implementation",
      successMetrics: "Success Metrics",
      
      // Actions
      calculateImpact: "Calculate Impact",
      generateFramework: "Generate Framework",
      assessRisk: "Assess Risk",
      optimizeHiring: "Optimize Hiring",
      scheduleDiscovery: "Schedule Discovery",
      
      // Industries
      tech: "Technology",
      professionalServices: "Professional Services",
      healthcare: "Healthcare",
      manufacturing: "Manufacturing",
      financialServices: "Financial Services",
      
      // Personas
      ceo: "CEO",
      cfo: "CFO",
      peopleOps: "People Operations"
    },
    es: {
      title: "Centro Estratégico de RH y Adquisición de Talento",
      subtitle: "Transforma la contratación de centro de costos a generador de valor estratégico con inteligencia de adquisición de talento basada en datos",
      description: "Mitiga el riesgo de malas contrataciones, optimiza el ROI de adquisición de talento e implementa metodologías de contratación estratégica que entregan resultados empresariales medibles",
      
      // Navigation
      overview: "Vista Estratégica",
      badHireAnalysis: "Análisis Malas Contrataciones",
      strategicMethodology: "Metodología Estratégica",
      roiCalculator: "Calculadora ROI",
      discoveryFramework: "Marco de Descubrimiento",
      conversationBank: "Banco de Conversaciones",
      implementation: "Implementación",
      successMetrics: "Métricas de Éxito",
      
      // Actions
      calculateImpact: "Calcular Impacto",
      generateFramework: "Generar Marco",
      assessRisk: "Evaluar Riesgo",
      optimizeHiring: "Optimizar Contratación",
      scheduleDiscovery: "Programar Descubrimiento",
      
      // Industries
      tech: "Tecnología",
      professionalServices: "Servicios Profesionales",
      healthcare: "Salud",
      manufacturing: "Manufactura",
      financialServices: "Servicios Financieros",
      
      // Personas
      ceo: "Director Ejecutivo",
      cfo: "Director Financiero",
      peopleOps: "Operaciones de Personal"
    }
  };

  const currentLabels = labels[language];

  // Bad Hire Metrics Data
  const badHireMetrics: BadHireMetric[] = [
    {
      id: 'cost-first-year',
      category: 'Financial Impact',
      metric: 'Cost of Bad Hire',
      value: 30,
      unit: '% of first year earnings',
      impact: 'high',
      source: 'Industry Average'
    },
    {
      id: 'cost-tech',
      category: 'Financial Impact',
      metric: 'Tech Bad Hire Cost',
      value: 150,
      unit: '% of first year earnings',
      impact: 'high',
      source: 'Technology Sector'
    },
    {
      id: 'employer-admissions',
      category: 'Frequency',
      metric: 'Wrong Hiring Decisions',
      value: 74,
      unit: '% of employers admit',
      impact: 'high',
      source: 'HR Research Study'
    },
    {
      id: 'turnover-source',
      category: 'Root Cause',
      metric: 'Turnover from Poor Hiring',
      value: 80,
      unit: '% of turnover stems from',
      impact: 'high',
      source: 'Talent Analytics'
    },
    {
      id: 'replacement-time',
      category: 'Productivity Impact',
      metric: 'Time to Replace',
      value: 6,
      unit: 'months average',
      impact: 'medium',
      source: 'Operations Data'
    },
    {
      id: 'team-impact',
      category: 'Productivity Impact',
      metric: 'Team Productivity Loss',
      value: 25,
      unit: '% reduction during transition',
      impact: 'medium',
      source: 'Performance Studies'
    }
  ];

  // Strategic Hiring Methodology
  const hiringMethodology: HiringMethodology[] = [
    {
      id: 'job-description',
      phase: 'Phase 1',
      title: 'Accurate Job Description Development',
      description: 'Precision-crafted role definitions that attract the right talent and set clear performance expectations',
      deliverables: [
        'Competency-based job descriptions',
        'Skills matrix and requirements',
        'Cultural fit criteria',
        'Performance success metrics'
      ],
      roi_impact: 35
    },
    {
      id: 'candidate-assessment',
      phase: 'Phase 2',
      title: 'Rigorous Candidate Assessment',
      description: 'Multi-layered evaluation process ensuring technical competency and role alignment',
      deliverables: [
        'Structured interview frameworks',
        'Technical skill assessments',
        'Behavioral competency evaluations',
        'Reference verification protocols'
      ],
      roi_impact: 45
    },
    {
      id: 'cultural-fit',
      phase: 'Phase 3',
      title: 'Cultural Fit Evaluation',
      description: 'Deep assessment of candidate alignment with organizational values and team dynamics',
      deliverables: [
        'Cultural assessment tools',
        'Values alignment scoring',
        'Team chemistry evaluation',
        'Long-term fit projections'
      ],
      roi_impact: 30
    },
    {
      id: 'data-driven',
      phase: 'Phase 4',
      title: 'Data-Driven Hiring Processes',
      description: 'Analytics-powered decision making that removes bias and optimizes selection outcomes',
      deliverables: [
        'Predictive hiring models',
        'Bias reduction protocols',
        'Decision scoring matrices',
        'Performance correlation analysis'
      ],
      roi_impact: 40
    },
    {
      id: 'market-intelligence',
      phase: 'Phase 5',
      title: 'Comprehensive Market Intelligence',
      description: 'Real-time market insights ensuring competitive positioning and talent accessibility',
      deliverables: [
        'Salary benchmarking reports',
        'Talent availability analysis',
        'Competitive landscape mapping',
        'Market timing recommendations'
      ],
      roi_impact: 25
    },
    {
      id: 'strategic-onboarding',
      phase: 'Phase 6',
      title: 'Strategic Onboarding Support',
      description: 'Systematic integration process that accelerates time-to-productivity and retention',
      deliverables: [
        '90-day onboarding roadmap',
        'Integration milestone tracking',
        'Early performance indicators',
        'Retention optimization strategies'
      ],
      roi_impact: 55
    }
  ];

  // Talent ROI Metrics
  const talentROIMetrics: TalentROIMetric[] = [
    {
      hire_type: 'Average Hire',
      annual_profit: 80000,
      incremental_profit: 0,
      percentage_improvement: 0
    },
    {
      hire_type: 'Top-Tier Talent',
      annual_profit: 100000,
      incremental_profit: 20000,
      percentage_improvement: 25
    },
    {
      hire_type: 'Strategic Hire (OVERWATCH)',
      annual_profit: 120000,
      incremental_profit: 40000,
      percentage_improvement: 50
    }
  ];

  // Discovery Questions Bank
  const discoveryQuestions: DiscoveryQuestion[] = [
    // CEO Questions
    {
      id: 'ceo-workforce-comp',
      persona: 'ceo',
      category: 'situation',
      question: 'Can you describe your current workforce composition and how it aligns with your five-year growth objectives?',
      purpose: 'Understand strategic workforce planning and growth alignment',
      follow_up: [
        'What gaps do you see between current capabilities and future needs?',
        'How are you planning to bridge these gaps?'
      ]
    },
    {
      id: 'ceo-productivity-insight',
      persona: 'ceo',
      category: 'insight',
      question: 'How does variation in productivity between flexible and full-time staff affect your innovation roadmap?',
      purpose: 'Surface hidden productivity impacts on strategic initiatives',
      follow_up: [
        'What specific innovation projects have been delayed due to staffing issues?',
        'How do you measure productivity differences across different employee types?'
      ]
    },
    
    // CFO Questions
    {
      id: 'cfo-budget-allocation',
      persona: 'cfo',
      category: 'situation',
      question: 'What is your current budget allocation between full-time salaries and contingent labor costs?',
      purpose: 'Understand financial structure and cost optimization opportunities',
      follow_up: [
        'How has this allocation changed over the past 2 years?',
        'What factors drive changes in this allocation?'
      ]
    },
    {
      id: 'cfo-cost-productivity',
      persona: 'cfo',
      category: 'insight',
      question: 'What cost-per-unit productivity variance do you see between your flexible and permanent workforce?',
      purpose: 'Uncover financial efficiency gaps and optimization potential',
      follow_up: [
        'How do you track and measure these productivity variances?',
        'What impact does this have on your P&L forecasting?'
      ]
    },
    
    // People Ops Questions
    {
      id: 'ops-staffing-lifecycle',
      persona: 'people_ops',
      category: 'situation',
      question: 'Can you walk me through your end-to-end staffing lifecycle for both permanent and flexible hires?',
      purpose: 'Map current processes and identify optimization opportunities',
      follow_up: [
        'Where do you see the biggest bottlenecks in this process?',
        'What tools and systems support each stage?'
      ]
    },
    {
      id: 'ops-performance-gaps',
      persona: 'people_ops',
      category: 'insight',
      question: 'Where do you see performance gaps between your contract and permanent staff, and how are you addressing them day-to-day?',
      purpose: 'Identify operational challenges and improvement opportunities',
      follow_up: [
        'What specific interventions have you tried?',
        'How do you measure the success of these interventions?'
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getPersonaIcon = (persona: string) => {
    switch (persona) {
      case 'ceo': return <Building className="w-4 h-4" />;
      case 'cfo': return <DollarSign className="w-4 h-4" />;
      case 'people_ops': return <Users className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const calculateBadHireCost = (salary: number, industry: string) => {
    const multiplier = industry === 'tech' ? 1.5 : 0.3;
    return salary * multiplier;
  };

  const calculateHiringROI = (currentCostPerHire: number, improvedCostPerHire: number, annualHires: number) => {
    const savings = (currentCostPerHire - improvedCostPerHire) * annualHires;
    const roi = (savings / (improvedCostPerHire * annualHires)) * 100;
    return { savings, roi };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-blue-400" />
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
            <label className="block text-sm font-medium text-gray-400 mb-2">Industry Focus</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="tech">{currentLabels.tech}</option>
              <option value="professional-services">{currentLabels.professionalServices}</option>
              <option value="healthcare">{currentLabels.healthcare}</option>
              <option value="manufacturing">{currentLabels.manufacturing}</option>
              <option value="financial-services">{currentLabels.financialServices}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
            <input 
              type="number" 
              value={companySize}
              onChange={(e) => setCompanySize(parseInt(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
              placeholder="150"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Discovery Persona</label>
            <select 
              value={selectedPersona}
              onChange={(e) => setSelectedPersona(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="ceo">{currentLabels.ceo}</option>
              <option value="cfo">{currentLabels.cfo}</option>
              <option value="people_ops">{currentLabels.peopleOps}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {currentLabels.calculateImpact}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="bad-hire-analysis">{currentLabels.badHireAnalysis}</TabsTrigger>
            <TabsTrigger value="strategic-methodology">{currentLabels.strategicMethodology}</TabsTrigger>
            <TabsTrigger value="roi-calculator">{currentLabels.roiCalculator}</TabsTrigger>
            <TabsTrigger value="discovery-framework">{currentLabels.discoveryFramework}</TabsTrigger>
            <TabsTrigger value="conversation-bank">{currentLabels.conversationBank}</TabsTrigger>
            <TabsTrigger value="implementation">{currentLabels.implementation}</TabsTrigger>
            <TabsTrigger value="success-metrics">{currentLabels.successMetrics}</TabsTrigger>
          </TabsList>

          {/* Strategic Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic HR Intelligence Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-red-400 mb-1">74%</div>
                  <div className="text-sm text-gray-400">Wrong Hiring Decisions</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-1">150%</div>
                  <div className="text-sm text-gray-400">Tech Bad Hire Cost</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">80%</div>
                  <div className="text-sm text-gray-400">Turnover from Poor Hiring</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-1">25%</div>
                  <div className="text-sm text-gray-400">Top Talent Premium</div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Strategic HR Transformation Opportunity</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Transform your hiring from a cost center to a strategic advantage. Companies using strategic 
                  hiring methodologies reduce bad hire rates by 65% and increase quality hire success rates 
                  by 85%, creating measurable competitive advantage.
                </p>
              </div>
            </Card>

            {/* Bad Hire Impact Overview */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Bad Hire Impact Analysis</h3>
              
              <div className="grid lg:grid-cols-1 gap-4">
                {badHireMetrics.slice(0, 4).map((metric) => (
                  <div key={metric.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        {metric.category === 'Financial Impact' && <DollarSign className="w-6 h-6 text-red-400" />}
                        {metric.category === 'Frequency' && <AlertTriangle className="w-6 h-6 text-orange-400" />}
                        {metric.category === 'Root Cause' && <Search className="w-6 h-6 text-yellow-400" />}
                        {metric.category === 'Productivity Impact' && <TrendingDown className="w-6 h-6 text-purple-400" />}
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white">{metric.metric}</h4>
                        <p className="text-sm text-gray-400">{metric.category}</p>
                        <Badge className={`text-xs mt-1 ${getImpactColor(metric.impact)}`}>
                          {metric.impact.toUpperCase()} IMPACT
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {metric.value}{metric.unit === '% of first year earnings' ? '%' : 
                         metric.unit === '% of employers admit' ? '%' : 
                         metric.unit === '% of turnover stems from' ? '%' : 
                         metric.unit === 'months average' ? 'mo' : 
                         metric.unit === '% reduction during transition' ? '%' : metric.value}
                      </div>
                      <div className="text-xs text-gray-400">{metric.unit}</div>
                      <div className="text-xs text-blue-400 mt-1">{metric.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* OVERWATCH Strategic Advantage */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">OVERWATCH Strategic Hiring Advantage</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Traditional vs Strategic Hiring</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Traditional Hiring</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Generic job descriptions</li>
                        <li>• Gut-feeling assessments</li>
                        <li>• Limited cultural evaluation</li>
                        <li>• Reactive market approach</li>
                        <li>• 74% wrong decision rate</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">OVERWATCH Strategic Approach</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Precision-crafted role definitions</li>
                        <li>• Multi-layered rigorous assessment</li>
                        <li>• Deep cultural fit evaluation</li>
                        <li>• Data-driven decision processes</li>
                        <li>• 85% quality hire success rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Value Creation Metrics</h4>
                  <div className="space-y-4">
                    {talentROIMetrics.map((metric, index) => (
                      <div key={metric.hire_type} className="p-4 bg-gray-900 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-white">{metric.hire_type}</h5>
                          {metric.percentage_improvement > 0 && (
                            <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                              +{metric.percentage_improvement}%
                            </Badge>
                          )}
                        </div>
                        <div className="text-lg font-bold text-white mb-1">
                          ${metric.annual_profit.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">Annual profit per hire</div>
                        {metric.incremental_profit > 0 && (
                          <div className="text-sm text-green-400 mt-1">
                            +${metric.incremental_profit.toLocaleString()} incremental
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  onClick={() => setActiveTab('bad-hire-analysis')}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Analyze Bad Hires
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('strategic-methodology')}
                >
                  <Target className="w-4 h-4" />
                  Strategic Method
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('roi-calculator')}
                >
                  <Calculator className="w-4 h-4" />
                  {currentLabels.roiCalculator}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('discovery-framework')}
                >
                  <MessageSquare className="w-4 h-4" />
                  Discovery Framework
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Bad Hire Analysis */}
          <TabsContent value="bad-hire-analysis" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Bad Hire Cost & Impact Analysis</h2>
              
              <Button className="bg-red-600 hover:bg-red-700">
                Generate Risk Assessment
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Bad Hire Statistics & Industry Impact</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Critical Statistics</h4>
                  <div className="space-y-4">
                    {badHireMetrics.map((metric) => (
                      <div key={metric.id} className="p-4 bg-gray-900 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-white">{metric.metric}</h5>
                          <Badge className={`text-xs ${getImpactColor(metric.impact)}`}>
                            {metric.impact.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {metric.value}{metric.unit.includes('%') ? '%' : metric.unit.includes('months') ? ' mo' : ''}
                        </div>
                        <div className="text-sm text-gray-400">{metric.unit}</div>
                        <div className="text-xs text-blue-400 mt-2">{metric.source}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Cost Calculator</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Average Employee Salary</label>
                      <input 
                        type="number" 
                        className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg"
                        placeholder="75000"
                        defaultValue="75000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Bad Hires per Year</label>
                      <input 
                        type="number" 
                        className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg"
                        placeholder="5"
                        defaultValue="5"
                      />
                    </div>
                    
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Annual Bad Hire Cost</h5>
                      <div className="text-2xl font-bold text-white mb-1">
                        ${selectedIndustry === 'tech' ? '562,500' : '112,500'}
                      </div>
                      <div className="text-sm text-gray-400">
                        Based on {selectedIndustry === 'tech' ? '150%' : '30%'} of first year earnings
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">OVERWATCH Improvement Potential</h5>
                      <div className="text-lg font-bold text-white mb-1">
                        ${selectedIndustry === 'tech' ? '450,000' : '90,000'}
                      </div>
                      <div className="text-sm text-gray-400">80% reduction in bad hire rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Root Cause Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Bad Hire Root Cause Analysis</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <Search className="w-8 h-8 text-red-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Poor Assessment Process</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Inadequate technical evaluation</li>
                    <li>• Superficial behavioral assessment</li>
                    <li>• Lack of role-specific criteria</li>
                    <li>• Inconsistent interview standards</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <Users className="w-8 h-8 text-orange-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Cultural Misalignment</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Values mismatch with organization</li>
                    <li>• Poor team chemistry assessment</li>
                    <li>• Inadequate culture communication</li>
                    <li>• Rushed cultural evaluation</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <FileText className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Unclear Expectations</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Vague job descriptions</li>
                    <li>• Undefined success metrics</li>
                    <li>• Missing role requirements</li>
                    <li>• Poor onboarding process</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Industry-Specific Impact */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Industry-Specific Bad Hire Impact</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Industry</th>
                      <th className="text-left py-3 text-gray-400">Bad Hire Cost</th>
                      <th className="text-left py-3 text-gray-400">Avg Time to Replace</th>
                      <th className="text-left py-3 text-gray-400">Productivity Impact</th>
                      <th className="text-left py-3 text-gray-400">Annual Cost (5 bad hires)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Technology</td>
                      <td className="py-3 text-red-400">150% salary</td>
                      <td className="py-3 text-gray-300">4-6 months</td>
                      <td className="py-3 text-gray-300">35% team reduction</td>
                      <td className="py-3 text-red-400 font-bold">$562,500</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Professional Services</td>
                      <td className="py-3 text-orange-400">75% salary</td>
                      <td className="py-3 text-gray-300">3-4 months</td>
                      <td className="py-3 text-gray-300">25% team reduction</td>
                      <td className="py-3 text-orange-400 font-bold">$281,250</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Healthcare</td>
                      <td className="py-3 text-yellow-400">100% salary</td>
                      <td className="py-3 text-gray-300">5-7 months</td>
                      <td className="py-3 text-gray-300">30% team reduction</td>
                      <td className="py-3 text-yellow-400 font-bold">$375,000</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Manufacturing</td>
                      <td className="py-3 text-blue-400">50% salary</td>
                      <td className="py-3 text-gray-300">2-3 months</td>
                      <td className="py-3 text-gray-300">20% team reduction</td>
                      <td className="py-3 text-blue-400 font-bold">$187,500</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Financial Services</td>
                      <td className="py-3 text-purple-400">120% salary</td>
                      <td className="py-3 text-gray-300">4-5 months</td>
                      <td className="py-3 text-gray-300">40% team reduction</td>
                      <td className="py-3 text-purple-400 font-bold">$450,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Strategic Methodology */}
          <TabsContent value="strategic-methodology" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">OVERWATCH Strategic Hiring Methodology</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                {currentLabels.generateFramework}
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">6-Phase Strategic Hiring Framework</h3>
              
              <div className="space-y-6">
                {hiringMethodology.map((phase, index) => (
                  <div key={phase.id} className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-bold text-white text-lg">{phase.title}</h4>
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          {phase.roi_impact}% ROI Impact
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-4">{phase.description}</p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-blue-400 mb-2">Key Deliverables</h5>
                          <ul className="space-y-1">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-gray-900 rounded-lg">
                          <h5 className="font-medium text-white mb-2">Business Impact</h5>
                          <div className="text-2xl font-bold text-green-400 mb-1">{phase.roi_impact}%</div>
                          <div className="text-sm text-gray-400">Hiring success improvement</div>
                          
                          <div className="mt-3">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-green-400 h-2 rounded-full" 
                                style={{ width: `${phase.roi_impact}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Methodology Comparison */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Traditional vs OVERWATCH Strategic Approach</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Phase</th>
                      <th className="text-left py-3 text-gray-400">Traditional Approach</th>
                      <th className="text-left py-3 text-gray-400">OVERWATCH Strategic Methodology</th>
                      <th className="text-left py-3 text-gray-400">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Job Description</td>
                      <td className="py-3 text-red-400">Generic, copy-paste templates</td>
                      <td className="py-3 text-green-400">Precision-crafted, competency-based</td>
                      <td className="py-3 text-blue-400">35% better candidate quality</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Assessment</td>
                      <td className="py-3 text-red-400">Gut feeling, basic interviews</td>
                      <td className="py-3 text-green-400">Multi-layered, structured evaluation</td>
                      <td className="py-3 text-blue-400">45% reduction in mis-hires</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Cultural Fit</td>
                      <td className="py-3 text-red-400">Superficial culture questions</td>
                      <td className="py-3 text-green-400">Deep values alignment assessment</td>
                      <td className="py-3 text-blue-400">30% better retention</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Decision Making</td>
                      <td className="py-3 text-red-400">Subjective, biased judgments</td>
                      <td className="py-3 text-green-400">Data-driven, objective scoring</td>
                      <td className="py-3 text-blue-400">40% more accurate decisions</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Market Intelligence</td>
                      <td className="py-3 text-red-400">Limited market awareness</td>
                      <td className="py-3 text-green-400">Comprehensive market analysis</td>
                      <td className="py-3 text-blue-400">25% faster time-to-hire</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Onboarding</td>
                      <td className="py-3 text-red-400">Ad-hoc orientation process</td>
                      <td className="py-3 text-green-400">Strategic 90-day integration</td>
                      <td className="py-3 text-blue-400">55% faster productivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">OVERWATCH Methodology Success Metrics</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-sm text-gray-400">Quality Hire Success Rate</div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">65%</div>
                  <div className="text-sm text-gray-400">Bad Hire Reduction</div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-sm text-gray-400">Faster Time-to-Productivity</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
                  <div className="text-sm text-gray-400">Incremental Profit per Hire</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Calculator */}
          <TabsContent value="roi-calculator" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Hiring ROI Calculator</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Export ROI Analysis
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Current Hiring Metrics</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Annual Hires</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="20"
                      defaultValue="20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Average Salary</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="75000"
                      defaultValue="75000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Bad Hire Rate (%)</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="25"
                      defaultValue="25"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Cost per Hire</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="15000"
                      defaultValue="15000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Average Time to Fill (days)</label>
                    <input 
                      type="number" 
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg"
                      placeholder="60"
                      defaultValue="60"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">OVERWATCH Improvement Projections</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Bad Hire Cost Savings</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Current annual cost:</span>
                      <span className="text-red-400 font-bold">$281,250</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">With OVERWATCH (65% reduction):</span>
                      <span className="text-green-400 font-bold">$98,438</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Annual savings:</span>
                      <span className="text-green-400 font-bold">$182,813</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Quality Hire Premium</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Average hire profit:</span>
                      <span className="text-blue-400">$80,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">OVERWATCH strategic hire:</span>
                      <span className="text-green-400">$120,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Incremental value (20 hires):</span>
                      <span className="text-green-400 font-bold">$800,000</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Time-to-Productivity Savings</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">40% faster productivity:</span>
                      <span className="text-purple-400">36 days vs 60 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Productivity savings:</span>
                      <span className="text-purple-400 font-bold">$240,000</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Total ROI Analysis</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Investment</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">OVERWATCH strategic hiring service</span>
                      <span className="text-red-400">$120,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Annual Investment</span>
                      <span className="text-red-400 font-bold">$120,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Returns</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Bad hire cost savings</span>
                      <span className="text-green-400">$182,813</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Quality hire premium</span>
                      <span className="text-green-400">$800,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-900 rounded-lg">
                      <span className="text-white">Productivity savings</span>
                      <span className="text-green-400">$240,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900 rounded-lg border-t border-gray-700">
                      <span className="text-white font-bold">Total Annual Returns</span>
                      <span className="text-green-400 font-bold">$1,222,813</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">919%</div>
                  <div className="text-white font-medium">Annual ROI</div>
                  <div className="text-sm text-gray-400 mt-1">
                    $120K investment generates $1.22M in returns
                  </div>
                </div>
              </div>
            </Card>

            {/* Payback Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Payback Period & Value Realization</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-green-400 mb-1">6</div>
                  <div className="text-sm text-gray-400">Weeks to Breakeven</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">90</div>
                  <div className="text-sm text-gray-400">Days to Full Value</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-purple-400 mb-1">$102K</div>
                  <div className="text-sm text-gray-400">Monthly Value</div>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-yellow-400 mb-1">10.2x</div>
                  <div className="text-sm text-gray-400">Return Multiple</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Discovery Framework */}
          <TabsContent value="discovery-framework" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Conversation Fact-Finder Framework</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Generate Discovery Guide
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">6-Step Discovery Framework</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Plan Ahead 📝</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Pre-call planning ensures you're not asking the obvious. Map out which information 
                        you already have and where gaps remain.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Research company background</li>
                        <li>• Review existing touchpoints</li>
                        <li>• Identify knowledge gaps</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Question Sparingly ⏳</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Every question is a tactical asset—use them strategically, not habitually. 
                        Focus on the highest-value gaps rather than checking every box.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Prioritize impact questions</li>
                        <li>• Avoid redundant inquiries</li>
                        <li>• Maximize question value</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Fact Gathering 🔎</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Frame questions to uncover the client's current situation and challenges. 
                        Keep your core mission top-of-mind: what do you really need to know?
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Current state assessment</li>
                        <li>• Challenge identification</li>
                        <li>• Process understanding</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Benchmark & Compare 📊</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Relate their answers to insights from other clients or market data. 
                        Identify potential gaps, opportunities, or industry patterns.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Industry comparison</li>
                        <li>• Best practice gaps</li>
                        <li>• Opportunity identification</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Confirm & Connect 🤝</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Use confirming questions ("So what I'm hearing is...") to show you've done your homework. 
                        Reinforce trust by reflecting back their priorities and concerns.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Active listening demonstration</li>
                        <li>• Priority confirmation</li>
                        <li>• Trust building</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      6
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Mind the Benefit Balance ⚖️</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Recognize that these questions often help you more than the client. 
                        Always link your inquiries back to clear value for them.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Value-driven questioning</li>
                        <li>• Mutual benefit focus</li>
                        <li>• Client-centric approach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Framework Benefits */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Framework Benefits & Application</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Relationship Advancement</h4>
                  <p className="text-sm text-gray-300">
                    Shifts conversations from surface-level to strategic by uncovering latent challenges 
                    and unfulfilled needs that clients may not openly express.
                  </p>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Heart className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Deep Empathy</h4>
                  <p className="text-sm text-gray-300">
                    Demonstrates understanding of unspoken challenges and shows genuine interest 
                    in solving their underlying business problems.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Star className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Strategic Differentiation</h4>
                  <p className="text-sm text-gray-300">
                    Moves beyond basic fact-finding to strategic insight, positioning you as a 
                    trusted advisor rather than a vendor.
                  </p>
                </div>
              </div>
            </Card>

            {/* Next Steps Process */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Discovery Meeting Next Steps</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Discovery Meeting</h4>
                    <p className="text-sm text-gray-400">Initial conversation using persona-specific question bank</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Needs Assessment + Cost Analysis</h4>
                    <p className="text-sm text-gray-400">Comprehensive analysis of current state and improvement opportunities</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">ROI Presentation</h4>
                    <p className="text-sm text-gray-400">Present customized ROI analysis with strategic recommendations</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">CFO Coordination</h4>
                    <p className="text-sm text-gray-400">Schedule follow-up call with CFO to finalize timing and scope</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Conversation Bank */}
          <TabsContent value="conversation-bank" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Persona-Driven Question Bank</h2>
              
              <div className="flex items-center gap-4">
                <select 
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  <option value="ceo">{currentLabels.ceo}</option>
                  <option value="cfo">{currentLabels.cfo}</option>
                  <option value="people_ops">{currentLabels.peopleOps}</option>
                </select>
                
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Export Question Bank
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                {selectedPersona === 'ceo' ? 'CEO Strategic Questions' :
                 selectedPersona === 'cfo' ? 'CFO Financial Questions' :
                 'People Operations Questions'}
              </h3>
              
              <div className="space-y-6">
                {discoveryQuestions
                  .filter(q => q.persona === selectedPersona)
                  .map((question) => (
                    <div key={question.id} className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          {getPersonaIcon(question.persona)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`text-xs ${
                              question.category === 'situation' ? 'bg-blue-900/20 text-blue-400 border-blue-700' :
                              question.category === 'insight' ? 'bg-green-900/20 text-green-400 border-green-700' :
                              question.category === 'problem' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                              'bg-red-900/20 text-red-400 border-red-700'
                            }`}>
                              {question.category.toUpperCase()}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-white mb-2">{question.question}</h4>
                          <p className="text-sm text-gray-400 mb-3">{question.purpose}</p>
                          
                          {question.follow_up.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-gray-300 mb-2">Follow-up Questions:</h5>
                              <ul className="space-y-1">
                                {question.follow_up.map((followUp, index) => (
                                  <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-gray-600">•</span>
                                    {followUp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            {/* Question Categories Overview */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Question Categories & Strategic Purpose</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Question Types</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Situation Questions</h5>
                      <p className="text-sm text-gray-300">
                        Establish baseline understanding of current state, processes, and structures. 
                        These questions map the existing landscape.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Insight Questions</h5>
                      <p className="text-sm text-gray-300">
                        Surface hidden challenges and unspoken frustrations. Catalyze relationship 
                        advancement by demonstrating deep understanding.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Strategic Application</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">Problem Questions</h5>
                      <p className="text-sm text-gray-300">
                        Identify specific pain points and quantify their business impact. 
                        Build urgency for solution exploration.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Implication Questions</h5>
                      <p className="text-sm text-gray-300">
                        Explore the broader consequences of inaction. Create compelling 
                        business case for change and improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Persona Insights */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Persona-Specific Insights</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-blue-400" />
                    <h4 className="font-bold text-white">CEO Focus</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Strategic growth alignment</li>
                    <li>• Innovation roadmap impact</li>
                    <li>• Market expansion capabilities</li>
                    <li>• Organizational agility</li>
                    <li>• Board-level performance metrics</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-white">CFO Focus</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Budget allocation optimization</li>
                    <li>• ROI and cost analysis</li>
                    <li>• Financial forecasting accuracy</li>
                    <li>• Risk mitigation strategies</li>
                    <li>• P&L impact measurement</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <h4 className="font-bold text-white">People Ops Focus</h4>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Process efficiency improvement</li>
                    <li>• Performance management systems</li>
                    <li>• Employee experience optimization</li>
                    <li>• Operational scalability</li>
                    <li>• Technology integration</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Hiring Implementation Roadmap</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Implementation Plan
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">90-Day Strategic Hiring Transformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    30
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">Phase 1: Assessment & Foundation (Days 1-30)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2">Current State Analysis</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Hiring process audit and assessment</li>
                          <li>• Bad hire cost calculation and impact analysis</li>
                          <li>• Stakeholder interviews and requirement gathering</li>
                          <li>• Performance baseline establishment</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-400 mb-2">Strategic Planning</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Custom methodology design and adaptation</li>
                          <li>• Technology stack evaluation and selection</li>
                          <li>• Team training curriculum development</li>
                          <li>• Success metrics definition and tracking setup</li>
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
                    <h4 className="font-bold text-white mb-2">Phase 2: Methodology Implementation (Days 31-60)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-purple-400 mb-2">Process Development</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Job description templates and frameworks</li>
                          <li>• Assessment tools and evaluation criteria</li>
                          <li>• Cultural fit evaluation instruments</li>
                          <li>• Decision-making scoring systems</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-yellow-400 mb-2">Team Enablement</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Hiring manager training and certification</li>
                          <li>• Interview skills development workshops</li>
                          <li>• Technology platform onboarding</li>
                          <li>• Best practices documentation and guides</li>
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
                    <h4 className="font-bold text-white mb-2">Phase 3: Optimization & Scaling (Days 61-90)</h4>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-400 mb-2">Performance Optimization</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Process refinement based on initial results</li>
                          <li>• Performance data analysis and insights</li>
                          <li>• Feedback integration and methodology updates</li>
                          <li>• Continuous improvement protocols</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-400 mb-2">Scale & Sustain</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Company-wide rollout and standardization</li>
                          <li>• Advanced analytics and predictive modeling</li>
                          <li>• ROI measurement and reporting systems</li>
                          <li>• Long-term partnership and support model</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Milestones */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Implementation Success Milestones</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Process Documentation</div>
                </div>
                
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Team Training Completion</div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">85%</div>
                  <div className="text-sm text-gray-400">Quality Hire Success Rate</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400 mb-1">65%</div>
                  <div className="text-sm text-gray-400">Bad Hire Reduction</div>
                </div>
              </div>
            </Card>

            {/* Implementation Timeline */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Detailed Implementation Timeline</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Week 1-2: Discovery & Planning</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      Stakeholder discovery sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-green-400" />
                      Current process analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      Success criteria definition
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Week 3-8: Framework Development</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-400" />
                      Methodology customization
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      Team training delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-purple-400" />
                      System configuration
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Week 9-12: Launch & Optimization</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      Pilot hiring cycles
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-green-400" />
                      Performance monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-purple-400" />
                      Continuous improvement
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Success Metrics */}
          <TabsContent value="success-metrics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Hiring Success Metrics</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Metrics Dashboard
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Key Performance Indicators (KPIs)</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Quality Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Quality Hire Success Rate</span>
                        <span className="text-green-400 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Target: 80% | Current: 85%</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Bad Hire Reduction</span>
                        <span className="text-green-400 font-bold">65%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">From 25% to 8.75% bad hire rate</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Cultural Fit Score</span>
                        <span className="text-blue-400 font-bold">4.2/5</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Average cultural alignment rating</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Efficiency Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Time to Fill Improvement</span>
                        <span className="text-purple-400 font-bold">40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">60 days → 36 days average</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Cost per Quality Hire</span>
                        <span className="text-yellow-400 font-bold">$12K</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">20% reduction from $15K</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Time to Productivity</span>
                        <span className="text-orange-400 font-bold">36 days</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">40% faster than 60-day average</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Impact Metrics */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Business Impact Measurements</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Revenue Impact</h4>
                  <div className="text-2xl font-bold text-green-400 mb-1">$800K</div>
                  <div className="text-sm text-gray-400">Annual incremental profit from quality hires</div>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <TrendingDown className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Cost Avoidance</h4>
                  <div className="text-2xl font-bold text-blue-400 mb-1">$183K</div>
                  <div className="text-sm text-gray-400">Bad hire costs avoided annually</div>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <Clock className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Productivity Gain</h4>
                  <div className="text-2xl font-bold text-purple-400 mb-1">$240K</div>
                  <div className="text-sm text-gray-400">Faster time-to-productivity value</div>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <Users className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Retention Value</h4>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">$450K</div>
                  <div className="text-sm text-gray-400">Improved retention savings</div>
                </div>
              </div>
            </Card>

            {/* Benchmarking & Comparison */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Industry Benchmarking</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Metric</th>
                      <th className="text-left py-3 text-gray-400">Industry Average</th>
                      <th className="text-left py-3 text-gray-400">OVERWATCH Client Performance</th>
                      <th className="text-left py-3 text-gray-400">Improvement</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Quality Hire Success Rate</td>
                      <td className="py-3 text-gray-300">58%</td>
                      <td className="py-3 text-green-400 font-bold">85%</td>
                      <td className="py-3 text-green-400">+27%</td>
                      <td className="py-3">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          OUTPERFORMING
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Time to Fill</td>
                      <td className="py-3 text-gray-300">60 days</td>
                      <td className="py-3 text-blue-400 font-bold">36 days</td>
                      <td className="py-3 text-green-400">-40%</td>
                      <td className="py-3">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          SUPERIOR
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Bad Hire Rate</td>
                      <td className="py-3 text-gray-300">25%</td>
                      <td className="py-3 text-green-400 font-bold">8.75%</td>
                      <td className="py-3 text-green-400">-65%</td>
                      <td className="py-3">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          EXCELLENT
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Cost per Hire</td>
                      <td className="py-3 text-gray-300">$15,000</td>
                      <td className="py-3 text-yellow-400 font-bold">$12,000</td>
                      <td className="py-3 text-green-400">-20%</td>
                      <td className="py-3">
                        <Badge className="text-xs bg-yellow-900/20 text-yellow-400 border-yellow-700">
                          ABOVE AVERAGE
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">First Year Retention</td>
                      <td className="py-3 text-gray-300">75%</td>
                      <td className="py-3 text-green-400 font-bold">92%</td>
                      <td className="py-3 text-green-400">+17%</td>
                      <td className="py-3">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">
                          TOP QUARTILE
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Long-term Value Creation */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Long-term Value Creation Tracking</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">3-Year Value Projection</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Year 1: Foundation</h5>
                      <div className="text-lg font-bold text-green-400 mb-1">$1.22M</div>
                      <div className="text-sm text-gray-400">Initial methodology implementation value</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Year 2: Optimization</h5>
                      <div className="text-lg font-bold text-blue-400 mb-1">$1.65M</div>
                      <div className="text-sm text-gray-400">Process refinement and scaling benefits</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Year 3: Excellence</h5>
                      <div className="text-lg font-bold text-purple-400 mb-1">$2.1M</div>
                      <div className="text-sm text-gray-400">Mature strategic hiring operation value</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Cumulative Impact</h4>
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h5 className="font-medium text-green-400 mb-2">3-Year Total Value</h5>
                    <div className="text-3xl font-bold text-white mb-2">$4.97M</div>
                    <div className="text-sm text-gray-400 mb-4">Cumulative strategic hiring value creation</div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Total Investment:</span>
                        <span className="text-red-400">$360K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Total Returns:</span>
                        <span className="text-green-400">$4.97M</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-2">
                        <span className="text-white">3-Year ROI:</span>
                        <span className="text-green-400">1,281%</span>
                      </div>
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