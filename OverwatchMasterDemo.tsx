import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Command,
  Layers,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Zap,
  Brain,
  Target,
  GitBranch,
  Globe,
  Building,
  BarChart3,
  Settings,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  Database,
  Cpu
} from 'lucide-react';

interface OverwatchMasterDemoProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export function OverwatchMasterDemo({ language, onNavigate }: OverwatchMasterDemoProps) {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [selectedSystem, setSelectedSystem] = useState<string>('hcm');

  const labels = {
    en: {
      title: "OVERWATCH Master System",
      subtitle: "Advisory-Grade HRIS & Strategic Command Center",
      northStar: "North Star: People Strategy = Business Strategy",
      
      // Sections
      architecture: "Product Architecture",
      techStack: "Technology Stack", 
      implementation: "Implementation Roadmap",
      outcomes: "Expected Outcomes",
      
      // Product Architecture
      productTitle: "Pentagon Architecture System",
      commandControl: "Command & Control",
      executiveCommand: "Executive Command", 
      enterpriseSystems: "Enterprise Systems",
      strategicOps: "Strategic Operations",
      specialized: "Specialized Systems",
      
      // Core Systems
      systemsTitle: "Systems of Record Integration",
      hcmSystem: "HCM Platform",
      erpSystem: "ERP/Finance",
      epmSystem: "EPM Planning", 
      crmSystem: "CRM/GTM",
      
      // Implementation Phases
      phasesTitle: "90/180/365 Day Roadmap",
      phase1Title: "Foundations & First Wins (0-90 days)",
      phase2Title: "Planning & Compliance (90-180 days)",
      phase3Title: "Scale & Foresight (180-365 days)",
      
      phase1Desc: "Stand up lakehouse, identity, iPaaS, GraphQL. Ship Sparkline Diagnostics.",
      phase2Desc: "EPM integration, Governance AI v1, Scenario Engine with CFO/CHRO view.",
      phase3Desc: "Financial Convergence, Culture DNA Grid, M&A cockpit, multi-geo rollout.",
      
      // Key Features
      featuresTitle: "Core Capabilities",
      unifiedIntel: "Unified Strategic Intelligence",
      culturalIntel: "Cultural Intelligence Engine",
      scenarioEngine: "Scenario Planning Engine",
      financialConv: "Financial Convergence",
      complianceAI: "Governance & Compliance AI",
      sparklineSystem: "Sparkline Diagnostic System",
      
      // Outcomes
      outcomesTitle: "Business Impact",
      alignmentImprovement: "3.5× revenue growth through alignment",
      cultureROI: "23% profitability increase via culture",
      complianceReduction: "81% reduction in compliance incidents",
      decisionVelocity: "5× faster strategic decision making",
      
      // Actions
      exploreComponent: "Explore Component",
      viewBlueprint: "View Integration Blueprint",
      startDiagnostic: "Start Diagnostic",
      accessCommand: "Access Command Center",
      
      // Status
      live: "Live",
      implementing: "Implementing",
      planned: "Planned"
    },
    es: {
      title: "Sistema Maestro OVERWATCH",
      subtitle: "HRIS de Grado Asesor y Centro de Comando Estratégico",
      northStar: "Estrella Polar: Estrategia de Personas = Estrategia de Negocio",
      
      // Sections
      architecture: "Arquitectura del Producto",
      techStack: "Pila Tecnológica",
      implementation: "Hoja de Ruta de Implementación", 
      outcomes: "Resultados Esperados",
      
      // Product Architecture
      productTitle: "Sistema de Arquitectura Pentágono",
      commandControl: "Comando y Control",
      executiveCommand: "Comando Ejecutivo",
      enterpriseSystems: "Sistemas Empresariales",
      strategicOps: "Operaciones Estratégicas",
      specialized: "Sistemas Especializados",
      
      // Core Systems
      systemsTitle: "Integración de Sistemas de Registro",
      hcmSystem: "Plataforma HCM",
      erpSystem: "ERP/Finanzas",
      epmSystem: "Planificación EPM",
      crmSystem: "CRM/GTM",
      
      // Implementation Phases
      phasesTitle: "Hoja de Ruta 90/180/365 Días",
      phase1Title: "Fundamentos y Primeras Victorias (0-90 días)",
      phase2Title: "Planificación y Cumplimiento (90-180 días)",
      phase3Title: "Escala y Previsión (180-365 días)",
      
      phase1Desc: "Establecer lakehouse, identidad, iPaaS, GraphQL. Enviar Diagnósticos Sparkline.",
      phase2Desc: "Integración EPM, Governance AI v1, Motor de Escenarios con vista CFO/CHRO.", 
      phase3Desc: "Convergencia Financiera, Cuadrícula DNA Cultural, cabina M&A, despliegue multi-geo.",
      
      // Key Features
      featuresTitle: "Capacidades Principales",
      unifiedIntel: "Inteligencia Estratégica Unificada",
      culturalIntel: "Motor de Inteligencia Cultural",
      scenarioEngine: "Motor de Planificación de Escenarios",
      financialConv: "Convergencia Financiera",
      complianceAI: "IA de Gobernanza y Cumplimiento",
      sparklineSystem: "Sistema de Diagnóstico Sparkline",
      
      // Outcomes
      outcomesTitle: "Impacto en el Negocio",
      alignmentImprovement: "3.5× crecimiento de ingresos a través de alineación",
      cultureROI: "23% aumento de rentabilidad vía cultura",
      complianceReduction: "81% reducción en incidentes de cumplimiento",
      decisionVelocity: "5× toma de decisiones estratégicas más rápida",
      
      // Actions
      exploreComponent: "Explorar Componente",
      viewBlueprint: "Ver Plano de Integración",
      startDiagnostic: "Iniciar Diagnóstico",
      accessCommand: "Acceder Centro de Comando",
      
      // Status
      live: "En Vivo",
      implementing: "Implementando",
      planned: "Planificado"
    }
  };

  const currentLabels = labels[language];

  const architectureDivisions = [
    {
      id: 'command-control',
      name: currentLabels.commandControl,
      icon: Command,
      color: 'text-blue-400',
      components: ['OVERWATCH Home', 'Periodic Table Intelligence', 'Module Cards Dashboard'],
      status: 'live'
    },
    {
      id: 'executive',
      name: currentLabels.executiveCommand,
      icon: Target,
      color: 'text-green-400',
      components: ['CEO Command Center', 'CFO Command Center', 'CHRO Command Center'],
      status: 'implementing'
    },
    {
      id: 'enterprise',
      name: currentLabels.enterpriseSystems,
      icon: Building,
      color: 'text-purple-400',
      components: ['HCM System', 'ERP Integration', 'EPM Framework', 'CRM Convergence'],
      status: 'implementing'
    },
    {
      id: 'strategic',
      name: currentLabels.strategicOps,
      icon: BarChart3,
      color: 'text-yellow-400',
      components: ['People Strategy Engine', 'Numbers Guy', 'HR-Finance Convergence'],
      status: 'planned'
    },
    {
      id: 'specialized',
      name: currentLabels.specialized,
      icon: Brain,
      color: 'text-cyan-400',
      components: ['Talent Assessment Suite', 'Advisory-Grade HRIS', 'Granular Rigor Framework'],
      status: 'planned'
    }
  ];

  const coreFeatures = [
    {
      id: 'unified-intel',
      name: currentLabels.unifiedIntel,
      icon: Layers,
      description: 'Single command center eliminating HR-Finance-Strategy silos',
      action: () => onNavigate('command-center')
    },
    {
      id: 'cultural-intel',
      name: currentLabels.culturalIntel,
      icon: Users,
      description: 'Bilingual AI coaching with Lo Nuestro market expertise',
      action: () => onNavigate('culture')
    },
    {
      id: 'scenario-engine',
      name: currentLabels.scenarioEngine,
      icon: GitBranch,
      description: 'GOOD/BAD/WORSE modeling for workforce decisions',
      action: () => onNavigate('diagnostic')
    },
    {
      id: 'financial-conv',
      name: currentLabels.financialConv,
      icon: DollarSign,
      description: 'Real-time P&L impact of HR decisions and policies',
      action: () => onNavigate('roi-calculator')
    },
    {
      id: 'compliance-ai',
      name: currentLabels.complianceAI,
      icon: Shield,
      description: 'Automated compliance tracking and risk mitigation',
      action: () => onNavigate('frameworks')
    },
    {
      id: 'sparkline',
      name: currentLabels.sparklineSystem,
      icon: Zap,
      description: 'Next-best question engine with constraint analysis',
      action: () => onNavigate('sparklines')
    }
  ];

  const implementationPhases = [
    {
      phase: 1,
      title: currentLabels.phase1Title,
      description: currentLabels.phase1Desc,
      progress: 75,
      kpis: ['Time-to-insight <2 weeks', 'First 30-day pilot win', 'Data integration live'],
      status: 'implementing'
    },
    {
      phase: 2,
      title: currentLabels.phase2Title,
      description: currentLabels.phase2Desc,
      progress: 25,
      kpis: ['CFO/CHRO dashboards', 'Policy automation', 'Scenario modeling'],
      status: 'implementing'
    },
    {
      phase: 3,
      title: currentLabels.phase3Title,
      description: currentLabels.phase3Desc,
      progress: 5,
      kpis: ['M&A readiness', 'Multi-geo rollout', 'AI Sentinel GA'],
      status: 'planned'
    }
  ];

  const businessOutcomes = [
    {
      metric: currentLabels.alignmentImprovement,
      icon: TrendingUp,
      value: "3.5×",
      trend: "up"
    },
    {
      metric: currentLabels.cultureROI,
      icon: Users,
      value: "+23%",
      trend: "up"
    },
    {
      metric: currentLabels.complianceReduction,
      icon: Shield,
      value: "-81%",
      trend: "down"
    },
    {
      metric: currentLabels.decisionVelocity,
      icon: Zap,
      value: "5×",
      trend: "up"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'implementing':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'planned':
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-green-400';
      case 'implementing':
        return 'text-yellow-400';
      case 'planned':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">{currentLabels.subtitle}</p>
          <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
            {currentLabels.northStar}
          </Badge>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="implementation">Roadmap</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.productTitle}</h2>
            </div>

            <div className="space-y-4">
              {architectureDivisions.map((division) => {
                const Icon = division.icon;
                return (
                  <Card key={division.id} className="bg-gray-800/50 border-gray-700 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${division.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-lg font-bold text-white">{division.name}</h3>
                          {getStatusIcon(division.status)}
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getStatusColor(division.status)} border-current`}
                          >
                            {division.status === 'live' ? currentLabels.live : 
                             division.status === 'implementing' ? currentLabels.implementing : 
                             currentLabels.planned}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {division.components.map((component, index) => (
                            <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                              {component}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.featuresTitle}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.id} 
                    className="bg-gray-800/50 border-gray-700 p-6 cursor-pointer hover:border-blue-500 transition-colors"
                    onClick={feature.action}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                        
                        <div className="flex items-center text-blue-400 hover:text-blue-300">
                          <span className="text-sm font-medium">{currentLabels.exploreComponent}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-blue-600/10 border-blue-600 p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Integration Blueprint</h3>
                <p className="text-gray-400 mb-4">
                  Complete HCM • ERP • EPM • CRM unified architecture
                </p>
                <Button 
                  onClick={() => onNavigate('integration')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {currentLabels.viewBlueprint}
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.phasesTitle}</h2>
            </div>

            <div className="space-y-6">
              {implementationPhases.map((phase) => (
                <Card 
                  key={phase.phase} 
                  className={`bg-gray-800/50 border-gray-700 p-6 cursor-pointer transition-colors ${
                    activePhase === phase.phase ? 'border-blue-500 bg-blue-500/10' : ''
                  }`}
                  onClick={() => setActivePhase(phase.phase)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {phase.phase}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                        {getStatusIcon(phase.status)}
                      </div>
                      
                      <p className="text-gray-400 mb-4">{phase.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{phase.progress}%</span>
                        </div>
                        <Progress value={phase.progress} className="h-2" />
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {phase.kpis.map((kpi, index) => (
                            <Badge key={index} variant="outline" className="text-gray-300 border-gray-600 text-xs">
                              {kpi}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outcomes" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.outcomesTitle}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {businessOutcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 text-center">
                    <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{outcome.value}</div>
                    <div className="text-gray-400">{outcome.metric}</div>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-8">
              <Card className="bg-green-600/10 border-green-600 p-6 text-center">
                <Button 
                  onClick={() => onNavigate('command-center')}
                  className="w-full bg-green-600 hover:bg-green-700 mb-3"
                >
                  {currentLabels.accessCommand}
                </Button>
                <p className="text-gray-400 text-sm">Real-time strategic alignment cockpit</p>
              </Card>

              <Card className="bg-orange-600/10 border-orange-600 p-6 text-center">
                <Button 
                  onClick={() => onNavigate('sparklines')}
                  className="w-full bg-orange-600 hover:bg-orange-700 mb-3"
                >
                  {currentLabels.startDiagnostic}
                </Button>
                <p className="text-gray-400 text-sm">AI-powered constraint analysis</p>
              </Card>

              <Card className="bg-purple-600/10 border-purple-600 p-6 text-center">
                <Button 
                  onClick={() => onNavigate('integration')}
                  className="w-full bg-purple-600 hover:bg-purple-700 mb-3"
                >
                  {currentLabels.viewBlueprint}
                </Button>
                <p className="text-gray-400 text-sm">Complete integration architecture</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}