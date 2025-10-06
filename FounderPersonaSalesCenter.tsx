import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { LinkedInSequenceGenerator } from './LinkedInSequenceGenerator';
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
  Mic,
  Video,
  Play,
  Pause,
  Volume2,
  Heart,
  Handshake,
  Lightbulb,
  Compass,
  Layers,
  Monitor
} from 'lucide-react';

interface FounderPersonaSalesCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface FounderPersona {
  id: string;
  name: string;
  archetype: string;
  psychographics: string[];
  painPoints: string[];
  buyingBehavior: string[];
  communicationStyle: string;
  riskTolerance: 'high' | 'medium' | 'low';
  decisionSpeed: 'fast' | 'moderate' | 'slow';
  governance: string;
  verticals: string[];
  messaging: {
    hook: string;
    pain: string;
    solution: string;
    cta: string;
  };
}

interface AppointmentFlow {
  persona: string;
  channel: 'email' | 'linkedin' | 'phone' | 'referral';
  subject: string;
  opener: string;
  middle: string;
  close: string;
  objectionHandling: { objection: string; response: string }[];
}

interface ComplianceRisk {
  category: string;
  signals: string[];
  impact: string;
  cost: string;
  mitigation: string[];
}

export function FounderPersonaSalesCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: FounderPersonaSalesCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'personas' | 'sales-flows' | 'linkedin-sequences' | 'lean-back-method' | 'compliance-diagnostic' | 'storyboards' | 'voice-packs' | 'analytics'>('overview');
  const [selectedPersona, setSelectedPersona] = useState<string>('product-led-founder');
  const [selectedChannel, setSelectedChannel] = useState<'email' | 'linkedin' | 'phone' | 'referral'>('email');
  const [playingVoicePack, setPlayingVoicePack] = useState<string | null>(null);

  const labels = {
    en: {
      title: "Founder Persona & Sales Intelligence Center",
      subtitle: "Josh Braun's lean-back methodology meets founder psychology for precision outreach",
      description: "Transform traditional sales approaches with persona-driven diagnostics, lean-back frameworks, and strategic compliance intelligence",
      
      // Navigation
      overview: "Intelligence Overview",
      personas: "Founder Personas",
      salesFlows: "Sales Flows",
      linkedinSequences: "LinkedIn Sequences",
      leanBackMethod: "Lean-Back Method",
      complianceDiagnostic: "Compliance Diagnostic",
      storyboards: "Storyboards",
      voicePacks: "Voice Packs",
      analytics: "Sales Analytics",
      
      // Overview sections
      personaIntelligence: "Persona Intelligence",
      salesVelocity: "Sales Velocity",
      methodEffectiveness: "Method Effectiveness",
      conversionMetrics: "Conversion Metrics",
      
      // Actions
      generateFlow: "Generate Flow",
      recordVoicePack: "Record Voice Pack",
      createStoryboard: "Create Storyboard",
      runDiagnostic: "Run Diagnostic",
      exportAssets: "Export Assets",
      
      // Personas
      productLedFounder: "Product-Led Founder",
      opsLedFounder: "Ops-Led Founder",
      capitalSavvyFounder: "Capital-Savvy Founder",
      
      // Status
      active: "Active",
      testing: "Testing",
      optimizing: "Optimizing",
      converted: "Converted"
    },
    es: {
      title: "Centro de Inteligencia de Ventas y Personas Fundadoras",
      subtitle: "La metodología lean-back de Josh Braun se encuentra con la psicología del fundador para un alcance de precisión",
      description: "Transforma los enfoques de ventas tradicionales con diagnósticos basados en personas, marcos lean-back e inteligencia estratégica de cumplimiento",
      
      // Navigation
      overview: "Vista de Inteligencia",
      personas: "Personas Fundadoras",
      salesFlows: "Flujos de Ventas",
      linkedinSequences: "Secuencias LinkedIn",
      leanBackMethod: "Método Lean-Back",
      complianceDiagnostic: "Diagnóstico de Cumplimiento",
      storyboards: "Guiones Gráficos",
      voicePacks: "Paquetes de Voz",
      analytics: "Analíticas de Ventas",
      
      // Overview sections
      personaIntelligence: "Inteligencia de Personas",
      salesVelocity: "Velocidad de Ventas",
      methodEffectiveness: "Efectividad del Método",
      conversionMetrics: "Métricas de Conversión",
      
      // Actions
      generateFlow: "Generar Flujo",
      recordVoicePack: "Grabar Paquete de Voz",
      createStoryboard: "Crear Guión Gráfico",
      runDiagnostic: "Ejecutar Diagnóstico",
      exportAssets: "Exportar Activos",
      
      // Personas
      productLedFounder: "Fundador Orientado al Producto",
      opsLedFounder: "Fundador Orientado a Operaciones",
      capitalSavvyFounder: "Fundador Experto en Capital",
      
      // Status
      active: "Activo",
      testing: "Probando",
      optimizing: "Optimizando",
      converted: "Convertido"
    }
  };

  const currentLabels = labels[language];

  // Founder Personas Data
  const founderPersonas: FounderPersona[] = [
    {
      id: 'product-led-founder',
      name: 'Product-Led Founder',
      archetype: 'Relentless Builder',
      psychographics: ['Vision-driven', 'Velocity-obsessed', 'User-centric', 'Anti-sales theater'],
      painPoints: ['Technical velocity vs revenue alignment', 'GTM team struggles with feature translation', 'Demo fatigue from complex features'],
      buyingBehavior: ['Research-heavy', 'Peer validation important', 'Proof-of-concept focused'],
      communicationStyle: 'Direct, outcome-focused, allergic to fluff',
      riskTolerance: 'medium',
      decisionSpeed: 'fast',
      governance: 'Founder-led with product council',
      verticals: ['SaaS', 'DevOps', 'AI/ML'],
      messaging: {
        hook: 'Shipping fast. Selling slow?',
        pain: 'Is your roadmap creating revenue drag?',
        solution: 'Map technical velocity to buyer clarity',
        cta: 'Want a friction diagnostic that shows where velocity leaks revenue?'
      }
    },
    {
      id: 'ops-led-founder',
      name: 'Ops-Led Founder',
      archetype: 'Precision Engineer',
      psychographics: ['Systems-thinking', 'Process-oriented', 'Risk-aware', 'Efficiency-focused'],
      painPoints: ['Infra scales but HR doesn\'t', 'SOC2 audit exposure', 'Compliance blind spots'],
      buyingBehavior: ['Vendor due diligence heavy', 'ROI calculations required', 'Implementation timeline critical'],
      communicationStyle: 'Methodical, data-driven, no-fluff approach',
      riskTolerance: 'low',
      decisionSpeed: 'moderate',
      governance: 'Committee-driven with ops council',
      verticals: ['DevOps', 'Infrastructure', 'Manufacturing'],
      messaging: {
        hook: 'SOC 2\'s easy. Keeping velocity? Not always.',
        pain: 'Systems scaled. But onboarding broke.',
        solution: 'Ops-native overlays into HR flow',
        cta: 'Need infra-native HR overlays?'
      }
    },
    {
      id: 'capital-savvy-founder',
      name: 'Capital-Savvy Founder',
      archetype: 'Strategic Operator',
      psychographics: ['Investor-literate', 'Board-conscious', 'Metrics-driven', 'Exit-aware'],
      painPoints: ['HR signals risk to investors', 'Retention gaps affect valuation', 'Audit-readiness pressure'],
      buyingBehavior: ['Business case required', 'Board approval needed', 'Reference checks essential'],
      communicationStyle: 'Polished, analytical, boardroom-ready',
      riskTolerance: 'medium',
      decisionSpeed: 'moderate',
      governance: 'Board-influenced with investor input',
      verticals: ['Fintech', 'Enterprise SaaS', 'High-growth startups'],
      messaging: {
        hook: 'Funding hit. But HR signaled risk.',
        pain: 'The real risk isn\'t fraud—it\'s internal drag',
        solution: 'Investor-grade HR overlays',
        cta: 'Mapping HR to investor strategy? Let\'s connect.'
      }
    }
  ];

  // Sales Flows Data
  const appointmentFlows: AppointmentFlow[] = [
    {
      persona: 'product-led-founder',
      channel: 'email',
      subject: 'When "more pipeline" isn\'t the real problem',
      opener: 'Hey [First Name], Noticed you\'re scaling GTM while juggling hiring, onboarding, and compliance. A lot of SaaS founders tell us the real drag isn\'t pipeline—it\'s the silent ops friction that slows execution.',
      middle: 'We built a quick diagnostic that maps hidden risks across HR, payroll, and retention—takes 15 minutes, no prep. Might be useful before your next board sprint.',
      close: 'Want to sketch one together?',
      objectionHandling: [
        { objection: 'I\'m too busy', response: 'Totally. This only takes 15 minutes and could save you hours down the road by preventing surprise audits.' },
        { objection: 'Send me some info', response: 'Absolutely. I can email you a one-pager now, and we can still pencil in a short call to walk through your specific gaps. Which slot works better for you?' }
      ]
    },
    {
      persona: 'ops-led-founder',
      channel: 'linkedin',
      subject: 'HR blind spots DevOps founders are quietly fixing',
      opener: 'You\'ve probably built some internal scaffolding already. I\'ve been mapping how DevOps teams handle HR risk under pressure—figured I\'d share.',
      middle: 'Ops-led founders often have payroll, safety, and compliance split across vendors. We\'re seeing audit flags pop up when those systems don\'t talk. Curious if you\'ve had to deal with OSHA, EPLI, or privacy audits yet—or if it\'s still on the horizon.',
      close: 'If it\'s not a fit, no worries. Always curious how DevOps teams are solving this.',
      objectionHandling: [
        { objection: 'We already have an HR partner', response: 'Great. Many partners provide compliance checklists, but our approach surfaces top priorities in seconds so your team can act faster.' }
      ]
    }
  ];

  // Compliance Risks Data
  const complianceRisks: ComplianceRisk[] = [
    {
      category: 'ACA Noncompliance',
      signals: ['Inconsistent coverage tracking', 'No affordability testing', 'Late 1095 reporting'],
      impact: '$2,970-$4,460 annual penalty per employee',
      cost: '$180K-$300K average exposure',
      mitigation: ['Automated tracking systems', 'Regular compliance audits', 'Benefits administration platform']
    },
    {
      category: 'OSHA Violations',
      signals: ['Fall protection gaps', 'Poor safety training', 'Missing hazard documentation'],
      impact: '$1,190-$161,323 per violation',
      cost: '$50K-$500K average legal costs',
      mitigation: ['Safety program implementation', 'Regular training updates', 'Compliance monitoring']
    },
    {
      category: 'Data Privacy Breaches',
      signals: ['Weak data policies', 'No SSAE audit trail', 'Poor access controls'],
      impact: '$4.88M average breach cost',
      cost: '$36K-$562K recovery costs',
      mitigation: ['Privacy policy updates', 'Security assessments', 'Employee training']
    }
  ];

  const getPersonaColor = (persona: string) => {
    switch (persona) {
      case 'product-led-founder': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'ops-led-founder': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'capital-savvy-founder': return 'text-purple-400 bg-purple-900/20 border-purple-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getRiskColor = (category: string) => {
    switch (category) {
      case 'ACA Noncompliance': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'OSHA Violations': return 'text-orange-400 bg-orange-900/20 border-orange-700';
      case 'Data Privacy Breaches': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const toggleVoicePack = (packId: string) => {
    setPlayingVoicePack(playingVoicePack === packId ? null : packId);
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

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-9 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="personas">{currentLabels.personas}</TabsTrigger>
            <TabsTrigger value="sales-flows">{currentLabels.salesFlows}</TabsTrigger>
            <TabsTrigger value="linkedin-sequences">{currentLabels.linkedinSequences}</TabsTrigger>
            <TabsTrigger value="lean-back-method">{currentLabels.leanBackMethod}</TabsTrigger>
            <TabsTrigger value="compliance-diagnostic">{currentLabels.complianceDiagnostic}</TabsTrigger>
            <TabsTrigger value="storyboards">{currentLabels.storyboards}</TabsTrigger>
            <TabsTrigger value="voice-packs">{currentLabels.voicePacks}</TabsTrigger>
            <TabsTrigger value="analytics">{currentLabels.analytics}</TabsTrigger>
          </TabsList>

          {/* Intelligence Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.personaIntelligence}</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">10</div>
                  <div className="text-sm text-gray-400">Active Personas</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">87%</div>
                  <div className="text-sm text-gray-400">Method Effectiveness</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">3.2x</div>
                  <div className="text-sm text-gray-400">Conversion Uplift</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24hrs</div>
                  <div className="text-sm text-gray-400">Avg Response Time</div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Josh Braun Methodology Impact</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Using lean-back principles, outcome detachment, and curiosity-driven discovery has increased 
                  appointment setting rates by 3.2x while reducing sales cycle friction. Founders self-qualify 
                  through diagnostic frameworks rather than traditional persuasion tactics.
                </p>
              </div>
            </Card>

            {/* Persona Performance Matrix */}
            <div className="grid lg:grid-cols-3 gap-6">
              {founderPersonas.map((persona) => (
                <Card key={persona.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{persona.name}</h3>
                      <p className="text-sm text-gray-400">{persona.archetype}</p>
                      <Badge className={`text-xs mt-2 ${getPersonaColor(persona.id)}`}>
                        {persona.governance}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Communication Style</h4>
                      <p className="text-xs text-gray-300">{persona.communicationStyle}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Key Pain Points</h4>
                      <ul className="space-y-1">
                        {persona.painPoints.slice(0, 2).map((pain, index) => (
                          <li key={index} className="text-xs text-gray-300 flex items-start gap-1">
                            <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Verticals</h4>
                      <div className="flex flex-wrap gap-1">
                        {persona.verticals.map((vertical, index) => (
                          <Badge key={index} className="text-xs bg-gray-700 text-gray-300">
                            {vertical}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedPersona(persona.id)}
                    >
                      View Details
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

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('personas')}
                >
                  <Users className="w-4 h-4" />
                  Analyze Personas
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('linkedin-sequences')}
                >
                  <MessageSquare className="w-4 h-4" />
                  LinkedIn Sequences
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('storyboards')}
                >
                  <Video className="w-4 h-4" />
                  {currentLabels.createStoryboard}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700"
                  onClick={() => setActiveTab('compliance-diagnostic')}
                >
                  <Shield className="w-4 h-4" />
                  {currentLabels.runDiagnostic}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Founder Personas */}
          <TabsContent value="personas" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Founder Persona Intelligence</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create New Persona
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {founderPersonas.map((persona) => (
                <Card key={persona.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Persona Profile */}
                    <div>
                      <h3 className="font-bold text-white text-xl mb-2">{persona.name}</h3>
                      <p className="text-blue-400 font-medium mb-4">{persona.archetype}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-1">Psychographics</h4>
                          <div className="flex flex-wrap gap-1">
                            {persona.psychographics.map((trait, index) => (
                              <Badge key={index} className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">
                                {trait}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-1">Risk Tolerance</h4>
                            <Badge className={`text-xs ${
                              persona.riskTolerance === 'high' ? 'bg-red-900/20 text-red-400 border-red-700' :
                              persona.riskTolerance === 'medium' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                              'bg-green-900/20 text-green-400 border-green-700'
                            }`}>
                              {persona.riskTolerance.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-1">Decision Speed</h4>
                            <Badge className="text-xs bg-gray-700 text-gray-300">
                              {persona.decisionSpeed.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pain Points & Buying Behavior */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Pain Points</h4>
                      <ul className="space-y-2 mb-4">
                        {persona.painPoints.map((pain, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Buying Behavior</h4>
                      <ul className="space-y-2">
                        {persona.buyingBehavior.map((behavior, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {behavior}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Messaging Framework */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Messaging Framework</h4>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-900 rounded-lg">
                          <h5 className="text-xs font-medium text-blue-400 mb-1">Hook</h5>
                          <p className="text-sm text-white">{persona.messaging.hook}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-900 rounded-lg">
                          <h5 className="text-xs font-medium text-yellow-400 mb-1">Pain</h5>
                          <p className="text-sm text-white">{persona.messaging.pain}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-900 rounded-lg">
                          <h5 className="text-xs font-medium text-green-400 mb-1">Solution</h5>
                          <p className="text-sm text-white">{persona.messaging.solution}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-900 rounded-lg">
                          <h5 className="text-xs font-medium text-purple-400 mb-1">CTA</h5>
                          <p className="text-sm text-white">{persona.messaging.cta}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sales Flows */}
          <TabsContent value="sales-flows" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Appointment Setting Flows</h2>
              
              <div className="flex gap-2">
                <select 
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  {founderPersonas.map((persona) => (
                    <option key={persona.id} value={persona.id}>{persona.name}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  <option value="email">Email</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="phone">Phone</option>
                  <option value="referral">Referral</option>
                </select>
                
                <Button className="bg-green-600 hover:bg-green-700">
                  {currentLabels.generateFlow}
                </Button>
              </div>
            </div>

            {appointmentFlows
              .filter(flow => flow.persona === selectedPersona && flow.channel === selectedChannel)
              .map((flow, index) => (
                <Card key={index} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {flow.channel.charAt(0).toUpperCase() + flow.channel.slice(1)} Flow
                      </h3>
                      <p className="text-sm text-gray-400">
                        {founderPersonas.find(p => p.id === flow.persona)?.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-1 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <h4 className="font-medium text-blue-400 mb-2">Subject Line</h4>
                        <p className="text-white">{flow.subject}</p>
                      </div>
                      
                      <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                        <h4 className="font-medium text-green-400 mb-2">Opener (Lean-Back)</h4>
                        <p className="text-white">{flow.opener}</p>
                      </div>
                      
                      <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                        <h4 className="font-medium text-purple-400 mb-2">Middle (Friction Diagnostic)</h4>
                        <p className="text-white">{flow.middle}</p>
                      </div>
                      
                      <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                        <h4 className="font-medium text-yellow-400 mb-2">Close (Outcome-Detached)</h4>
                        <p className="text-white">{flow.close}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-400 mb-3">Objection Handling</h4>
                    <div className="space-y-3">
                      {flow.objectionHandling.map((objection, objIndex) => (
                        <div key={objIndex} className="p-3 bg-gray-900 rounded-lg">
                          <div className="text-sm font-medium text-red-400 mb-1">
                            "{objection.objection}"
                          </div>
                          <div className="text-sm text-gray-300">
                            {objection.response}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          {/* Lean-Back Method */}
          <TabsContent value="lean-back-method" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Josh Braun's Lean-Back Method</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Method Training
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Core Principles</h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-blue-400" />
                      <h4 className="font-bold text-white">Lean Back vs Lean In</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Avoid pushing or convincing; let prospects come to their own conclusions. 
                      Replace urgency with curiosity.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Handshake className="w-5 h-5 text-green-400" />
                      <h4 className="font-bold text-white">Detach from Outcome</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Don't tie your self-worth to whether someone buys. This removes pressure 
                      and creates psychological safety.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-5 h-5 text-purple-400" />
                      <h4 className="font-bold text-white">Sort, Don't Sell</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Focus on identifying fit rather than forcing a sale. Use diagnostic 
                      questions to help prospects self-qualify.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-5 h-5 text-yellow-400" />
                      <h4 className="font-bold text-white">Ask Illuminating Questions</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Help prospects uncover problems they weren't aware of. Guide them 
                      to their own insights rather than telling them what to think.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-white">Build Trust Through Curiosity</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Replace assumptions with genuine interest in the other person's perspective. 
                      Trust accelerates everything else.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-5 h-5 text-gray-400" />
                      <h4 className="font-bold text-white">Pattern Recognition</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Share patterns you've observed with similar companies without making 
                      it about your solution. Let them connect the dots.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Method Implementation */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Implementation Framework</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Listen & Observe</h4>
                    <p className="text-sm text-gray-400">Start with their current state, not your solution</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Ask Diagnostic Questions</h4>
                    <p className="text-sm text-gray-400">Help them discover friction they didn't know existed</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Share Patterns (Not Pitches)</h4>
                    <p className="text-sm text-gray-400">Reference what you've seen with similar companies</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Invite Exploration</h4>
                    <p className="text-sm text-gray-400">Suggest next steps without pressure or attachment</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Compliance Diagnostic */}
          <TabsContent value="compliance-diagnostic" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Compliance Risk Diagnostic</h2>
              
              <Button className="bg-red-600 hover:bg-red-700">
                Run Full Diagnostic
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {complianceRisks.map((risk, index) => (
                <Card key={index} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{risk.category}</h3>
                      <Badge className={`text-xs mt-1 ${getRiskColor(risk.category)}`}>
                        HIGH IMPACT
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-400">{risk.cost}</div>
                      <div className="text-xs text-gray-400">Potential Exposure</div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Warning Signals</h4>
                      <ul className="space-y-1">
                        {risk.signals.map((signal, sIndex) => (
                          <li key={sIndex} className="text-sm text-gray-300 flex items-start gap-2">
                            <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Business Impact</h4>
                      <p className="text-sm text-gray-300 mb-3">{risk.impact}</p>
                      <div className="text-lg font-bold text-red-400">{risk.cost}</div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Mitigation Strategies</h4>
                      <ul className="space-y-1">
                        {risk.mitigation.map((strategy, mIndex) => (
                          <li key={mIndex} className="text-sm text-gray-300 flex items-start gap-2">
                            <Shield className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Diagnostic Integration */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Sales Integration Framework</h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-bold text-white mb-3">Discovery Questions</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>"• What keeps you up at night regarding compliance?"</li>
                    <li>"• When was your last HR audit? Any surprises?"</li>
                    <li>"• How confident are you about ACA reporting this year?"</li>
                    <li>"• What would happen if OSHA showed up tomorrow?"</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-bold text-white mb-3">Pattern Sharing</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>"• We've seen 3 companies get hit with $300K ACA penalties"</li>
                    <li>"• Most founders don't realize OSHA fines start at $16K"</li>
                    <li>"• Data breaches average $4.88M in total recovery costs"</li>
                    <li>"• One client avoided $500K in penalties with early detection"</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Storyboards */}
          <TabsContent value="storyboards" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Persona-Driven Storyboards</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                {currentLabels.createStoryboard}
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {founderPersonas.map((persona) => (
                <Card key={persona.id} className="p-6 bg-gray-800 border-gray-700">
                  <h3 className="font-bold text-white text-lg mb-4">
                    {persona.name} Story Arc: "Vision vs Velocity"
                  </h3>
                  
                  <div className="grid lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="text-center mb-3">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <h4 className="font-bold text-white text-sm">The Fog Hits</h4>
                      </div>
                      <p className="text-xs text-gray-300 mb-2">
                        "We scaled fast. Then onboarding broke."
                      </p>
                      <div className="text-xs text-gray-500">
                        Visual: Blurry roadmap with jagged sprint arrows, founder overwhelmed by alerts
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="text-center mb-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <h4 className="font-bold text-white text-sm">Templates Collapse</h4>
                      </div>
                      <p className="text-xs text-gray-300 mb-2">
                        "Playbooks lagged behind sprint speed."
                      </p>
                      <div className="text-xs text-gray-500">
                        Visual: Sticky notes scattered, mismatched role cards, onboarding delays
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="text-center mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <h4 className="font-bold text-white text-sm">Overlay Moves In</h4>
                      </div>
                      <p className="text-xs text-gray-300 mb-2">
                        "We installed ramp compression overlays."
                      </p>
                      <div className="text-xs text-gray-500">
                        Visual: OVERWATCH modules snap into roadmap, clean tiles connect GTM to hiring
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="text-center mb-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <h4 className="font-bold text-white text-sm">Clarity Restored</h4>
                      </div>
                      <p className="text-xs text-gray-300 mb-2">
                        "Now onboarding fuels execution—not confusion."
                      </p>
                      <div className="text-xs text-gray-500">
                        Visual: Aligned roadmap, sprint resumes, avatar focused and confident
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Generate Animation
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600">
                      Export Storyboard
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Voice Packs */}
          <TabsContent value="voice-packs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Persona Voice Packs</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                {currentLabels.recordVoicePack}
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {founderPersonas.map((persona) => (
                <Card key={persona.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{persona.name} Voice Pack</h3>
                      <p className="text-sm text-gray-400">{persona.communicationStyle}</p>
                    </div>
                    
                    <Button
                      onClick={() => toggleVoicePack(persona.id)}
                      className={`flex items-center gap-2 ${
                        playingVoicePack === persona.id 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {playingVoicePack === persona.id ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Stop
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Play Sample
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Vocal Characteristics</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        {persona.id === 'product-led-founder' && (
                          <>
                            <div>• Crisp, kinetic, visionary</div>
                            <div>• Mid-high pitch, energetic inflection</div>
                            <div>• Pauses for tension ("then onboarding... cracked.")</div>
                            <div>• Fast rhythm for sprints and urgency</div>
                          </>
                        )}
                        {persona.id === 'ops-led-founder' && (
                          <>
                            <div>• Grounded, methodical, slightly clipped</div>
                            <div>• Mid-low pitch, controlled cadence</div>
                            <div>• Low emotion until clarity wins</div>
                            <div>• Mechanical rhythm syncs with system logic</div>
                          </>
                        )}
                        {persona.id === 'capital-savvy-founder' && (
                          <>
                            <div>• Polished, analytical, boardroom-ready</div>
                            <div>• Even pitch, slow-build rhythm</div>
                            <div>• Strategic delivery: every word matters</div>
                            <div>• Confident lift in final vocal energy</div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Sample Script</h4>
                      <div className="p-3 bg-gray-900 rounded-lg">
                        <p className="text-sm text-white">
                          {persona.id === 'product-led-founder' && 
                            '"Post-raise, we were sprinting at full tilt. The product flew—but onboarding cracked. Role clarity vanished in the rush."'
                          }
                          {persona.id === 'ops-led-founder' && 
                            '"The infra scaled clean. But onboarding didn\'t. SOC2 flagged gaps our HR systems missed."'
                          }
                          {persona.id === 'capital-savvy-founder' && 
                            '"Funding hit the wire. Investors leaned in. But HR clarity... lagged. Retention signals? Weak."'
                          }
                        </p>
                      </div>
                      
                      <div className="mt-3 flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-gray-400" />
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full transition-all duration-300 ${
                            playingVoicePack === persona.id ? 'bg-green-400 w-1/3' : 'bg-gray-600 w-0'
                          }`}></div>
                        </div>
                        <span className="text-xs text-gray-400">0:15</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* LinkedIn Sequences */}
          <TabsContent value="linkedin-sequences" className="space-y-6">
            <LinkedInSequenceGenerator 
              language={language}
              currentMode={currentMode}
              onNavigate={onNavigate}
            />
          </TabsContent>

          {/* Sales Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Sales Performance Analytics</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-4 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">87%</div>
                  <div className="text-sm text-gray-400">Method Effectiveness</div>
                  <div className="text-xs text-green-400 mt-1">+23% vs traditional</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">3.2x</div>
                  <div className="text-sm text-gray-400">Conversion Uplift</div>
                  <div className="text-xs text-blue-400 mt-1">Lean-back vs pitch</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24hrs</div>
                  <div className="text-sm text-gray-400">Avg Response Time</div>
                  <div className="text-xs text-purple-400 mt-1">-60% vs industry</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">92%</div>
                  <div className="text-sm text-gray-400">Meeting Show Rate</div>
                  <div className="text-xs text-yellow-400 mt-1">+45% vs traditional</div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Persona Performance</h3>
                
                <div className="space-y-4">
                  {founderPersonas.map((persona, index) => (
                    <div key={persona.id} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <div>
                        <div className="font-medium text-white">{persona.name}</div>
                        <div className="text-sm text-gray-400">{persona.verticals.join(', ')}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">
                          {index === 0 ? '94%' : index === 1 ? '89%' : '91%'}
                        </div>
                        <div className="text-xs text-gray-400">Response Rate</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Channel Performance</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-white">Email</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-400">89%</div>
                      <div className="text-xs text-gray-400">Open Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-white">LinkedIn</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">76%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Phone</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-400">92%</div>
                      <div className="text-xs text-gray-400">Connect Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Network className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Referral</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-400">98%</div>
                      <div className="text-xs text-gray-400">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}