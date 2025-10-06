import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Building, Users, Target, DollarSign, Calendar, Trophy, 
  Eye, Brain, AlertTriangle, CheckCircle, Clock, FileText,
  Plus, Edit, Trash, Search, Filter, RefreshCw, Download,
  Phone, Mail, Linkedin, MessageSquare, BarChart3, TrendingUp,
  Briefcase, Shield, Award, Zap, Settings, Star, Crown
} from 'lucide-react';

interface AccountOpportunityMappingCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type SalesStage = 'discovery' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
type Industry = 'manufacturing' | 'professional-services' | 'technology' | 'healthcare' | 'retail' | 'financial-services';
type CompanySize = 'small' | 'medium' | 'large' | 'enterprise';

interface Contact {
  id: string;
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  notes: string;
}

interface Opportunity {
  id: string;
  name: string;
  accountName: string;
  industry: Industry;
  companySize: CompanySize;
  estimatedDealSize: number;
  salesStage: SalesStage;
  probability: number;
  closeDate: string;
  valueProposition: string;
  currentSolutions: string[];
  potentialOpportunities: string[];
  contacts: Contact[];
  mustHaveFeatures: string[];
  niceToHaveFeatures: string[];
  budgetConstraints: string;
  timeline: string;
  engagementPlan: string;
  riskMitigation: string;
  champion: string;
  competitors: string[];
  successMetrics: string[];
  revenueTarget: number;
  milestones: Array<{ name: string; date: string; status: 'pending' | 'completed' | 'overdue' }>;
  notes: string;
}

export function AccountOpportunityMappingCenter({ language, currentMode, onNavigate }: AccountOpportunityMappingCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'opportunity-mapping' | 'contact-management' | 'sales-strategy' | 'analytics-dashboard' | 'templates-tools' | 'reporting'>('overview');
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);
  const [isCreatingOpportunity, setIsCreatingOpportunity] = useState(false);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      opportunityMapping: "Opportunity Mapping",
      contactManagement: "Contact Management", 
      salesStrategy: "Sales Strategy",
      analyticsDashboard: "Analytics Dashboard",
      templatesTools: "Templates & Tools",
      reporting: "Reporting",
      
      // Content
      title: "Account & Opportunity Mapping Center",
      subtitle: "Strategic sales enablement and opportunity management for OVERWATCH's Advisory-Grade HRIS",
      
      // Opportunity Fields
      accountName: "Account Name",
      industry: "Industry", 
      companySize: "Company Size",
      estimatedDealSize: "Estimated Deal Size",
      salesStage: "Sales Stage",
      probability: "Probability",
      closeDate: "Expected Close Date",
      valueProposition: "Value Proposition",
      
      // Sales Stages
      discovery: "Discovery",
      qualification: "Qualification",
      proposal: "Proposal",
      negotiation: "Negotiation",
      closedWon: "Closed Won",
      closedLost: "Closed Lost",
      
      // Industries
      manufacturing: "Manufacturing",
      professionalServices: "Professional Services",
      technology: "Technology",
      healthcare: "Healthcare",
      retail: "Retail",
      financialServices: "Financial Services",
      
      // Company Sizes
      small: "Small (1-50)",
      medium: "Medium (51-250)",
      large: "Large (251-1000)",
      enterprise: "Enterprise (1000+)"
    },
    es: {
      // Navigation
      overview: "Vista General",
      opportunityMapping: "Mapeo de Oportunidades",
      contactManagement: "Gestión de Contactos",
      salesStrategy: "Estrategia de Ventas", 
      analyticsDashboard: "Panel de Análisis",
      templatesTools: "Plantillas y Herramientas",
      reporting: "Reportes",
      
      // Content
      title: "Centro de Mapeo de Cuentas y Oportunidades",
      subtitle: "Habilitación estratégica de ventas y gestión de oportunidades para el HRIS de Grado Asesor de OVERWATCH",
      
      // Opportunity Fields
      accountName: "Nombre de Cuenta",
      industry: "Industria",
      companySize: "Tamaño de Empresa",
      estimatedDealSize: "Tamaño Estimado del Negocio",
      salesStage: "Etapa de Venta",
      probability: "Probabilidad",
      closeDate: "Fecha Esperada de Cierre",
      valueProposition: "Propuesta de Valor",
      
      // Sales Stages
      discovery: "Descubrimiento",
      qualification: "Calificación",
      proposal: "Propuesta",
      negotiation: "Negociación",
      closedWon: "Cerrado Ganado",
      closedLost: "Cerrado Perdido",
      
      // Industries
      manufacturing: "Manufactura",
      professionalServices: "Servicios Profesionales",
      technology: "Tecnología",
      healthcare: "Salud",
      retail: "Retail",
      financialServices: "Servicios Financieros",
      
      // Company Sizes
      small: "Pequeña (1-50)",
      medium: "Mediana (51-250)",
      large: "Grande (251-1000)",
      enterprise: "Empresa (1000+)"
    }
  };

  const currentLabels = labels[language];

  const sampleOpportunities: Opportunity[] = [
    {
      id: '1',
      name: 'Manufacturing Transformation Initiative',
      accountName: 'Precision Manufacturing Corp',
      industry: 'manufacturing',
      companySize: 'medium',
      estimatedDealSize: 750000,
      salesStage: 'qualification',
      probability: 65,
      closeDate: '2024-03-15',
      valueProposition: 'Transform HR from cost center to strategic command center with integrated safety and compliance',
      currentSolutions: ['ADP Workforce Now', 'BambooHR', 'Manual safety tracking'],
      potentialOpportunities: ['OSHA compliance automation', 'Workers comp optimization', 'Bilingual workforce management'],
      contacts: [
        {
          id: '1',
          name: 'Maria Rodriguez',
          title: 'VP Operations',
          role: 'Primary Decision Maker',
          email: 'maria.rodriguez@precisionmfg.com',
          phone: '(214) 555-0123',
          linkedin: 'linkedin.com/in/mariarodriguezops',
          notes: 'Key champion, focused on safety improvements'
        },
        {
          id: '2', 
          name: 'David Chen',
          title: 'CFO',
          role: 'Budget Approver',
          email: 'david.chen@precisionmfg.com',
          phone: '(214) 555-0124',
          linkedin: 'linkedin.com/in/davidchen-cfo',
          notes: 'Needs clear ROI justification'
        }
      ],
      mustHaveFeatures: ['OSHA compliance tracking', 'Bilingual interface', 'Workers comp integration'],
      niceToHaveFeatures: ['Advanced analytics', 'Mobile app', 'API integrations'],
      budgetConstraints: '$500K-$1M annual budget approved',
      timeline: 'Q1 2024 implementation target',
      engagementPlan: 'Weekly touchpoints with Maria, monthly CFO reviews, quarterly executive briefings',
      riskMitigation: 'Address budget concerns with phased implementation, competitive pressure from incumbent',
      champion: 'Maria Rodriguez (VP Operations)',
      competitors: ['ADP', 'Workday', 'BambooHR'],
      successMetrics: ['25% reduction in safety incidents', '40% faster compliance reporting', '15% cost savings'],
      revenueTarget: 750000,
      milestones: [
        { name: 'Technical demo completed', date: '2024-01-15', status: 'completed' },
        { name: 'CFO presentation', date: '2024-01-30', status: 'pending' },
        { name: 'Final proposal submission', date: '2024-02-15', status: 'pending' }
      ],
      notes: 'Strong cultural fit, emphasis on Latino workforce needs. Maria is internal champion but need CFO buy-in.'
    }
  ];

  const [opportunityData, setOpportunityData] = useState<Opportunity[]>(sampleOpportunities);

  const industryProfiles = {
    manufacturing: {
      icon: Building,
      color: "text-blue-400",
      keyPainPoints: language === 'en' 
        ? ["Safety compliance", "Skilled labor shortages", "Workers compensation costs", "Bilingual workforce management"]
        : ["Cumplimiento de seguridad", "Escasez de mano de obra especializada", "Costos de compensación de trabajadores", "Gestión de fuerza laboral bilingüe"],
      valueProps: language === 'en'
        ? ["OSHA compliance automation", "Safety incident reduction", "Cost optimization", "Bilingual HR systems"]
        : ["Automatización de cumplimiento OSHA", "Reducción de incidentes de seguridad", "Optimización de costos", "Sistemas de RH bilingües"],
      typicalDealSize: "$500K - $2M",
      salesCycle: "6-12 months"
    },
    'professional-services': {
      icon: Briefcase,
      color: "text-green-400", 
      keyPainPoints: language === 'en'
        ? ["Talent retention", "Project profitability", "Client satisfaction", "Scaling challenges"]
        : ["Retención de talento", "Rentabilidad de proyectos", "Satisfacción del cliente", "Desafíos de escalamiento"],
      valueProps: language === 'en'
        ? ["Strategic talent management", "Project-based analytics", "Client experience optimization", "Scalable HR infrastructure"]
        : ["Gestión estratégica de talento", "Análisis basado en proyectos", "Optimización de experiencia del cliente", "Infraestructura de RH escalable"],
      typicalDealSize: "$300K - $1.5M", 
      salesCycle: "4-8 months"
    },
    technology: {
      icon: Zap,
      color: "text-purple-400",
      keyPainPoints: language === 'en'
        ? ["Rapid scaling", "Talent competition", "Culture preservation", "Compliance complexity"]
        : ["Escalamiento rápido", "Competencia por talento", "Preservación de cultura", "Complejidad de cumplimiento"],
      valueProps: language === 'en'
        ? ["Agile HR systems", "Talent acquisition optimization", "Culture measurement", "Automated compliance"]
        : ["Sistemas de RH ágiles", "Optimización de adquisición de talento", "Medición de cultura", "Cumplimiento automatizado"],
      typicalDealSize: "$400K - $2.5M",
      salesCycle: "3-6 months"
    }
  };

  const getCurrentOpportunity = () => {
    return selectedOpportunity ? opportunityData.find(o => o.id === selectedOpportunity) : null;
  };

  const getSalesStageProgress = (stage: SalesStage) => {
    const stages: SalesStage[] = ['discovery', 'qualification', 'proposal', 'negotiation', 'closed-won'];
    return ((stages.indexOf(stage) + 1) / stages.length) * 100;
  };

  const getPipelineValue = () => {
    return opportunityData
      .filter(o => !['closed-won', 'closed-lost'].includes(o.salesStage))
      .reduce((sum, o) => sum + (o.estimatedDealSize * o.probability / 100), 0);
  };

  const getWinRate = () => {
    const closed = opportunityData.filter(o => ['closed-won', 'closed-lost'].includes(o.salesStage));
    const won = closed.filter(o => o.salesStage === 'closed-won');
    return closed.length > 0 ? (won.length / closed.length) * 100 : 0;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{currentLabels.title}</h1>
            <p className="text-gray-400">{currentLabels.subtitle}</p>
          </div>
          
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => setIsCreatingOpportunity(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Opportunity
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="opportunity-mapping">{currentLabels.opportunityMapping}</TabsTrigger>
            <TabsTrigger value="contact-management">{currentLabels.contactManagement}</TabsTrigger>
            <TabsTrigger value="sales-strategy">{currentLabels.salesStrategy}</TabsTrigger>
            <TabsTrigger value="analytics-dashboard">{currentLabels.analyticsDashboard}</TabsTrigger>
            <TabsTrigger value="templates-tools">{currentLabels.templatesTools}</TabsTrigger>
            <TabsTrigger value="reporting">{currentLabels.reporting}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pipeline Summary */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  Pipeline Summary
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      ${getPipelineValue().toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Weighted Pipeline Value</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-xl font-bold text-blue-400">{opportunityData.length}</div>
                      <div className="text-xs text-gray-400">Active Opportunities</div>
                    </div>
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <div className="text-xl font-bold text-purple-400">{getWinRate().toFixed(0)}%</div>
                      <div className="text-xs text-gray-400">Win Rate</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Industry Breakdown */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  Industry Breakdown
                </h3>

                <div className="space-y-4">
                  {Object.entries(industryProfiles).slice(0, 3).map(([key, profile]) => {
                    const Icon = profile.icon;
                    const count = opportunityData.filter(o => o.industry === key).length;
                    return (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${profile.color}`} />
                          <span className="text-gray-300">{currentLabels[key.replace('-', '') as keyof typeof currentLabels]}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Sales Stage Distribution */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  Sales Stage Distribution
                </h3>

                <div className="space-y-3">
                  {['discovery', 'qualification', 'proposal', 'negotiation'].map((stage) => {
                    const count = opportunityData.filter(o => o.salesStage === stage).length;
                    const percentage = opportunityData.length > 0 ? (count / opportunityData.length) * 100 : 0;
                    return (
                      <div key={stage}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">{currentLabels[stage as keyof typeof currentLabels]}</span>
                          <span className="text-gray-400 text-sm">{count}</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Recent Opportunities */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Recent Opportunities</h3>
              
              <div className="space-y-4">
                {opportunityData.slice(0, 3).map((opportunity) => (
                  <div 
                    key={opportunity.id}
                    className="p-4 bg-gray-900/50 rounded-lg cursor-pointer hover:bg-gray-900/70 transition-colors"
                    onClick={() => {
                      setSelectedOpportunity(opportunity.id);
                      setActiveTab('opportunity-mapping');
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{opportunity.name}</h4>
                      <Badge variant="outline" className={`text-xs ${
                        opportunity.salesStage === 'qualification' ? 'text-blue-400 border-blue-400' :
                        opportunity.salesStage === 'proposal' ? 'text-green-400 border-green-400' :
                        'text-gray-400 border-gray-400'
                      }`}>
                        {currentLabels[opportunity.salesStage as keyof typeof currentLabels]}
                      </Badge>
                    </div>
                    
                    <div className="text-gray-400 text-sm mb-2">{opportunity.accountName}</div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-green-400 font-bold">
                        ${opportunity.estimatedDealSize.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {opportunity.probability}% probability
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('opportunity-mapping')}
                >
                  <Plus className="w-4 h-4" />
                  New Opportunity
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('analytics-dashboard')}
                >
                  <BarChart3 className="w-4 h-4" />
                  View Analytics
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('templates-tools')}
                >
                  <FileText className="w-4 h-4" />
                  Templates
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('reporting')}
                >
                  <Download className="w-4 h-4" />
                  Export Report
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Opportunity Mapping */}
          <TabsContent value="opportunity-mapping" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Opportunity Mapping</h3>
              <div className="flex gap-2">
                {opportunityData.map((opp) => (
                  <Button
                    key={opp.id}
                    variant={selectedOpportunity === opp.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOpportunity(opp.id)}
                  >
                    {opp.accountName}
                  </Button>
                ))}
              </div>
            </div>

            {selectedOpportunity && getCurrentOpportunity() && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Account Overview */}
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-6">Account Overview</h4>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Account Name</label>
                        <input
                          type="text"
                          defaultValue={getCurrentOpportunity()?.accountName}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
                        <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                          <option value="manufacturing">Manufacturing</option>
                          <option value="professional-services">Professional Services</option>
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Current Solutions</label>
                      <div className="flex flex-wrap gap-2">
                        {getCurrentOpportunity()?.currentSolutions.map((solution, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {solution}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Potential Opportunities</label>
                      <div className="flex flex-wrap gap-2">
                        {getCurrentOpportunity()?.potentialOpportunities.map((opp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400">
                            {opp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Opportunity Details */}
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-6">Opportunity Details</h4>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Deal Size</label>
                        <input
                          type="text"
                          defaultValue={`$${getCurrentOpportunity()?.estimatedDealSize.toLocaleString()}`}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Probability</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue={getCurrentOpportunity()?.probability}
                            className="flex-1"
                          />
                          <span className="text-white font-medium">{getCurrentOpportunity()?.probability}%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Sales Stage</label>
                      <select 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        defaultValue={getCurrentOpportunity()?.salesStage}
                      >
                        <option value="discovery">Discovery</option>
                        <option value="qualification">Qualification</option>
                        <option value="proposal">Proposal</option>
                        <option value="negotiation">Negotiation</option>
                        <option value="closed-won">Closed Won</option>
                        <option value="closed-lost">Closed Lost</option>
                      </select>
                      <Progress value={getSalesStageProgress(getCurrentOpportunity()?.salesStage || 'discovery')} className="mt-2 h-2" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Value Proposition</label>
                      <textarea
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        rows={3}
                        defaultValue={getCurrentOpportunity()?.valueProposition}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Decision Criteria */}
            {selectedOpportunity && getCurrentOpportunity() && (
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Decision Criteria</h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium text-white mb-4">Must-Have Features</h5>
                    <div className="space-y-2">
                      {getCurrentOpportunity()?.mustHaveFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h5 className="font-medium text-white mb-4 mt-6">Nice-to-Have Features</h5>
                    <div className="space-y-2">
                      {getCurrentOpportunity()?.niceToHaveFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-white mb-4">Budget & Timeline</h5>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-900/20 border border-green-700 rounded">
                        <div className="text-green-400 font-medium text-sm mb-1">Budget</div>
                        <div className="text-gray-300 text-sm">{getCurrentOpportunity()?.budgetConstraints}</div>
                      </div>
                      
                      <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
                        <div className="text-blue-400 font-medium text-sm mb-1">Timeline</div>
                        <div className="text-gray-300 text-sm">{getCurrentOpportunity()?.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Contact Management */}
          <TabsContent value="contact-management" className="space-y-6">
            {selectedOpportunity && getCurrentOpportunity() && (
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Key Contacts</h3>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Contact
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-gray-400 font-medium py-2">Name</th>
                        <th className="text-left text-gray-400 font-medium py-2">Title</th>
                        <th className="text-left text-gray-400 font-medium py-2">Role in Decision</th>
                        <th className="text-left text-gray-400 font-medium py-2">Contact</th>
                        <th className="text-left text-gray-400 font-medium py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentOpportunity()?.contacts.map((contact) => (
                        <tr key={contact.id} className="border-b border-gray-800">
                          <td className="py-4">
                            <div className="font-medium text-white">{contact.name}</div>
                          </td>
                          <td className="py-4">
                            <div className="text-gray-300 text-sm">{contact.title}</div>
                          </td>
                          <td className="py-4">
                            <Badge variant="outline" className={`text-xs ${
                              contact.role.includes('Decision') ? 'text-green-400 border-green-400' :
                              contact.role.includes('Budget') ? 'text-blue-400 border-blue-400' :
                              'text-gray-400 border-gray-400'
                            }`}>
                              {contact.role}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="p-1">
                                <Mail className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="p-1">
                                <Phone className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="p-1">
                                <Linkedin className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="p-1">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="p-1 text-red-400 hover:text-red-300">
                                <Trash className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Contact Notes */}
                <div className="mt-6 grid lg:grid-cols-2 gap-6">
                  {getCurrentOpportunity()?.contacts.map((contact) => (
                    <div key={contact.id} className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-2">{contact.name} - Notes</h5>
                      <p className="text-gray-300 text-sm">{contact.notes}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Sales Strategy */}
          <TabsContent value="sales-strategy" className="space-y-6">
            {selectedOpportunity && getCurrentOpportunity() && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Engagement Plan */}
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-6">Engagement Plan</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Engagement Strategy</label>
                      <textarea
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        rows={4}
                        defaultValue={getCurrentOpportunity()?.engagementPlan}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Champion</label>
                      <input
                        type="text"
                        defaultValue={getCurrentOpportunity()?.champion}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Risk Mitigation</label>
                      <textarea
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        rows={3}
                        defaultValue={getCurrentOpportunity()?.riskMitigation}
                      />
                    </div>
                  </div>
                </Card>

                {/* Competitive Analysis */}
                <Card className="p-6 bg-gray-800 border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-6">Competitive Landscape</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-white mb-3">Identified Competitors</h5>
                      <div className="flex flex-wrap gap-2">
                        {getCurrentOpportunity()?.competitors.map((competitor, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-red-400 border-red-400">
                            {competitor}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">OVERWATCH Differentiation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Advisory-Grade HRIS positioning</li>
                        <li>• Bilingual Latino market focus</li>
                        <li>• Culture as "queen piece" philosophy</li>
                        <li>• Force multiplier approach</li>
                        <li>• Cross-border operations expertise</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Competitive Advantages</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Integrated HR, Finance, and Cultural Intelligence</li>
                        <li>• 12-layer diagnostic cockpit</li>
                        <li>• McKinsey-style advisory insights</li>
                        <li>• Hero section mode toggles</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Success Metrics & Goals */}
            {selectedOpportunity && getCurrentOpportunity() && (
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Success Metrics & Goals</h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium text-white mb-4">Success Metrics</h5>
                    <div className="space-y-2">
                      {getCurrentOpportunity()?.successMetrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Revenue Target</h5>
                      <div className="text-2xl font-bold text-white">
                        ${getCurrentOpportunity()?.revenueTarget.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-white mb-4">Key Milestones</h5>
                    <div className="space-y-3">
                      {getCurrentOpportunity()?.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            milestone.status === 'completed' ? 'bg-green-400' :
                            milestone.status === 'overdue' ? 'bg-red-400' :
                            'bg-yellow-400'
                          }`} />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{milestone.name}</div>
                            <div className="text-gray-400 text-xs">{milestone.date}</div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            milestone.status === 'completed' ? 'text-green-400 border-green-400' :
                            milestone.status === 'overdue' ? 'text-red-400 border-red-400' :
                            'text-yellow-400 border-yellow-400'
                          }`}>
                            {milestone.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Analytics Dashboard */}
          <TabsContent value="analytics-dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Key Metrics */}
              <Card className="p-4 bg-gray-800 border-gray-700">
                <h4 className="font-medium text-gray-400 mb-2">Total Pipeline</h4>
                <div className="text-2xl font-bold text-green-400">
                  ${getPipelineValue().toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Weighted value</div>
              </Card>

              <Card className="p-4 bg-gray-800 border-gray-700">
                <h4 className="font-medium text-gray-400 mb-2">Win Rate</h4>
                <div className="text-2xl font-bold text-blue-400">
                  {getWinRate().toFixed(1)}%
                </div>
                <div className="text-sm text-gray-500">Last 12 months</div>
              </Card>

              <Card className="p-4 bg-gray-800 border-gray-700">
                <h4 className="font-medium text-gray-400 mb-2">Active Opportunities</h4>
                <div className="text-2xl font-bold text-purple-400">
                  {opportunityData.filter(o => !['closed-won', 'closed-lost'].includes(o.salesStage)).length}
                </div>
                <div className="text-sm text-gray-500">In pipeline</div>
              </Card>

              <Card className="p-4 bg-gray-800 border-gray-700">
                <h4 className="font-medium text-gray-400 mb-2">Avg Deal Size</h4>
                <div className="text-2xl font-bold text-orange-400">
                  ${(opportunityData.reduce((sum, o) => sum + o.estimatedDealSize, 0) / opportunityData.length || 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Current pipeline</div>
              </Card>
            </div>

            {/* Pipeline Trend Chart */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Pipeline Trend Analysis</h4>
              
              <div className="h-64 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-gray-500">Pipeline trend chart visualization</span>
              </div>
            </Card>

            {/* Sales Funnel Analysis */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Sales Funnel</h4>
                
                <div className="space-y-4">
                  {['discovery', 'qualification', 'proposal', 'negotiation'].map((stage, idx) => {
                    const count = opportunityData.filter(o => o.salesStage === stage).length;
                    const value = opportunityData
                      .filter(o => o.salesStage === stage)
                      .reduce((sum, o) => sum + o.estimatedDealSize, 0);
                    
                    return (
                      <div key={stage} className="p-4 bg-gray-900/50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">
                            {currentLabels[stage as keyof typeof currentLabels]}
                          </span>
                          <span className="text-gray-400">{count} opportunities</span>
                        </div>
                        <div className="text-green-400 font-bold">
                          ${value.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Industry Performance</h4>
                
                <div className="space-y-4">
                  {Object.entries(industryProfiles).map(([key, profile]) => {
                    const Icon = profile.icon;
                    const oppCount = opportunityData.filter(o => o.industry === key).length;
                    const value = opportunityData
                      .filter(o => o.industry === key)
                      .reduce((sum, o) => sum + o.estimatedDealSize, 0);
                    
                    return (
                      <div key={key} className="p-4 bg-gray-900/50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`w-5 h-5 ${profile.color}`} />
                          <span className="text-white font-medium">
                            {currentLabels[key.replace('-', '') as keyof typeof currentLabels]}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-400 font-bold">
                            ${value.toLocaleString()}
                          </span>
                          <span className="text-gray-400 text-sm">{oppCount} opportunities</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Templates & Tools */}
          <TabsContent value="templates-tools" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Templates & Tools</h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Account Mapping Template */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Account Mapping Template</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Comprehensive template for mapping account structure, stakeholders, and decision-making process
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Download Template
                  </Button>
                </div>

                {/* Opportunity Scorecard */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Opportunity Scorecard</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Standardized scoring framework for qualifying opportunities and prioritizing resources
                  </p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Use Scorecard
                  </Button>
                </div>

                {/* Competitive Battlecard */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Competitive Battlecards</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Detailed analysis of key competitors with positioning and differentiation strategies
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => onNavigate('battlecard')}
                  >
                    View Battlecards
                  </Button>
                </div>

                {/* ROI Calculator */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">ROI Calculator</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Interactive tool for calculating and presenting ROI to prospects
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-orange-600 hover:bg-orange-700"
                    onClick={() => onNavigate('roi-calculator')}
                  >
                    Launch Calculator
                  </Button>
                </div>

                {/* Discovery Questions */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Discovery Questions</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Industry-specific discovery question frameworks for effective sales conversations
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => onNavigate('strategic-discovery-sales')}
                  >
                    View Questions
                  </Button>
                </div>

                {/* Implementation SOW */}
                <div className="p-6 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Implementation SOW</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Standardized Statement of Work templates for pilot and full implementations
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-yellow-600 hover:bg-yellow-700"
                    onClick={() => onNavigate('pilot-sow')}
                  >
                    Generate SOW
                  </Button>
                </div>
              </div>
            </Card>

            {/* OVERWATCH Value Messaging */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">OVERWATCH Value Messaging Framework</h4>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-white mb-4">Core Value Propositions</h5>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-900/20 border border-green-700 rounded">
                      <div className="font-medium text-green-400 mb-1">Advisory-Grade HRIS</div>
                      <div className="text-gray-300 text-sm">Transform HR from cost center to command center</div>
                    </div>
                    <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
                      <div className="font-medium text-blue-400 mb-1">Force Multiplier Philosophy</div>
                      <div className="text-gray-300 text-sm">Culture becomes the "queen piece" amplifying all functions</div>
                    </div>
                    <div className="p-3 bg-purple-900/20 border border-purple-700 rounded">
                      <div className="font-medium text-purple-400 mb-1">Bilingual Excellence</div>
                      <div className="text-gray-300 text-sm">English/Spanish capabilities for Latino market</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-white mb-4">Competitive Differentiators</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">12-layer diagnostic cockpit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">McKinsey-style advisory insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Hero section mode toggles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Integrated HR, Finance, and Cultural Intelligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Cross-border operations expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Reporting */}
          <TabsContent value="reporting" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Sales Reports & Analytics</h3>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export All Reports
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pipeline Report */}
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h4 className="font-bold text-white mb-4">Pipeline Report</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Comprehensive analysis of current pipeline including stage distribution, value projections, and timeline forecasts
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Total Opportunities:</span>
                      <span className="text-white">{opportunityData.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Weighted Value:</span>
                      <span className="text-green-400">${getPipelineValue().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Expected Close (Q1):</span>
                      <span className="text-white">3 opportunities</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3 mr-2" />
                    Export Report
                  </Button>
                </div>

                {/* Account Analysis */}
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h4 className="font-bold text-white mb-4">Account Analysis</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Detailed breakdown by industry, company size, and geographic distribution with win rate analysis
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Top Industry:</span>
                      <span className="text-white">Manufacturing</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Avg Deal Size:</span>
                      <span className="text-green-400">$750K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Win Rate:</span>
                      <span className="text-white">{getWinRate().toFixed(1)}%</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3 mr-2" />
                    Export Report
                  </Button>
                </div>

                {/* Activity Report */}
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h4 className="font-bold text-white mb-4">Activity Report</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Sales activity tracking including meetings, calls, demos, and proposal submissions
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Meetings This Month:</span>
                      <span className="text-white">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Demos Completed:</span>
                      <span className="text-green-400">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proposals Submitted:</span>
                      <span className="text-white">3</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3 mr-2" />
                    Export Report
                  </Button>
                </div>

                {/* Forecast Report */}
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h4 className="font-bold text-white mb-4">Revenue Forecast</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Quarterly and annual revenue projections based on current pipeline and historical conversion rates
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Q1 Forecast:</span>
                      <span className="text-white">$1.2M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Q2 Forecast:</span>
                      <span className="text-green-400">$1.8M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Annual Target:</span>
                      <span className="text-white">$6.5M</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
            </Card>

            {/* Executive Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Executive Summary</h4>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h5 className="font-medium text-green-400 mb-2">Pipeline Health</h5>
                  <div className="text-2xl font-bold text-white mb-1">Strong</div>
                  <p className="text-gray-400 text-sm">
                    Pipeline value trending upward with healthy distribution across stages
                  </p>
                </div>

                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h5 className="font-medium text-blue-400 mb-2">Sales Velocity</h5>
                  <div className="text-2xl font-bold text-white mb-1">6.5 months</div>
                  <p className="text-gray-400 text-sm">
                    Average sales cycle length, 15% improvement from last quarter
                  </p>
                </div>

                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h5 className="font-medium text-purple-400 mb-2">Revenue Attainment</h5>
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <p className="text-gray-400 text-sm">
                    On track to achieve quarterly targets with current pipeline
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}