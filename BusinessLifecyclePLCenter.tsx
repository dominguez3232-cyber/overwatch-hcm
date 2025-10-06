import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, TrendingDown, DollarSign, Users, Building, 
  Target, AlertTriangle, CheckCircle, Zap, Shield, 
  BarChart3, PieChart, LineChart, Calculator,
  Lightbulb, MessageSquare, BookOpen, Settings,
  ArrowRight, ArrowUp, ArrowDown, PlayCircle,
  Rocket, Anchor, Compass, Crown, Star,
  Presentation, Monitor, Eye, ChevronLeft, ChevronRight,
  BarChart, TrendingUp as TrendingUpIcon, PieChart as PieChartIcon,
  Activity, Gauge, Globe, Coffee, Award, Briefcase
} from 'lucide-react';

interface BusinessLifecyclePLCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type LifecycleStage = 'startup' | 'growth' | 'scale' | 'expansion';
type PLModel = 'aso' | 'peo';
type StakeholderPersona = 'ceo' | 'cfo' | 'coo' | 'chro';

export function BusinessLifecyclePLCenter({ language, currentMode, onNavigate }: BusinessLifecyclePLCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'lifecycle-mapping' | 'pl-models' | 'profit-narrative' | 'stakeholder-briefs' | 'health-indicators' | 'messaging-rubrics' | 'strategy-motion-deck'>('overview');
  const [selectedStage, setSelectedStage] = useState<LifecycleStage>('growth');
  const [selectedModel, setSelectedModel] = useState<PLModel>('peo');
  const [selectedPersona, setSelectedPersona] = useState<StakeholderPersona>('ceo');
  const [currentSlide, setCurrentSlide] = useState(0);

  const labels = {
    en: {
      // Navigation
      overview: "Lifecycle Overview",
      lifecycleMapping: "Lifecycle Mapping",
      plModels: "P&L Models",
      profitNarrative: "Profit Narrative",
      stakeholderBriefs: "Stakeholder Briefs",
      healthIndicators: "Health Indicators",
      messagingRubrics: "Messaging Rubrics",
      strategyMotionDeck: "Strategy in Motion",
      
      // Content
      title: "Business Lifecycle & P&L Intelligence Center",
      subtitle: "Strategic alignment framework mapping business lifecycle stages to profit mechanics with narrative-driven intelligence",
      
      // Lifecycle Stages
      startup: "Start-up",
      growth: "Growth",
      scale: "Scale", 
      expansion: "Expansion/Exit",
      
      // P&L Models
      asoModel: "ASO Model",
      peoModel: "PEO Model",
      
      // Personas
      ceo: "CEO",
      cfo: "CFO", 
      coo: "COO",
      chro: "CHRO",
      
      // Profit Components
      revenue: "Revenue",
      cogs: "COGS",
      grossMargin: "Gross Margin",
      opex: "OPEX",
      noi: "Net Operating Income",
      nonOpex: "Non-OPEX",
      profit: "Profit"
    },
    es: {
      // Navigation
      overview: "Vista del Ciclo",
      lifecycleMapping: "Mapeo del Ciclo", 
      plModels: "Modelos P&G",
      profitNarrative: "Narrativa de Ganancias",
      stakeholderBriefs: "Informes de Stakeholders",
      healthIndicators: "Indicadores de Salud",
      messagingRubrics: "Rúbricas de Mensajería",
      strategyMotionDeck: "Estrategia en Movimiento",
      
      // Content
      title: "Centro de Inteligencia del Ciclo Empresarial y P&G",
      subtitle: "Marco de alineación estratégica que mapea las etapas del ciclo empresarial a la mecánica de ganancias con inteligencia narrativa",
      
      // Lifecycle Stages
      startup: "Inicio",
      growth: "Crecimiento",
      scale: "Escala",
      expansion: "Expansión/Salida",
      
      // P&L Models
      asoModel: "Modelo ASO",
      peoModel: "Modelo PEO",
      
      // Personas
      ceo: "CEO",
      cfo: "CFO",
      coo: "COO", 
      chro: "CHRO",
      
      // Profit Components
      revenue: "Ingresos",
      cogs: "COGS",
      grossMargin: "Margen Bruto",
      opex: "OPEX", 
      noi: "Ingreso Operativo Neto",
      nonOpex: "No-OPEX",
      profit: "Ganancia"
    }
  };

  const currentLabels = labels[language];

  const lifecycleStages = {
    startup: {
      icon: Rocket,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700",
      description: language === 'en' 
        ? "Entrepreneurial spirit, agility, maybe even chaos"
        : "Espíritu emprendedor, agilidad, tal vez incluso caos",
      characteristics: language === 'en' 
        ? ["High uncertainty", "Limited resources", "Rapid pivoting", "Founder-led decisions"]
        : ["Alta incertidumbre", "Recursos limitados", "Pivoteo rápido", "Decisiones lideradas por fundador"],
      healthMetrics: {
        cashFlow: 60,
        compliance: 40, 
        talent: 70,
        operations: 50
      }
    },
    growth: {
      icon: TrendingUp,
      color: "text-green-400", 
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      description: language === 'en'
        ? "Scaling systems, building momentum"
        : "Escalando sistemas, construyendo impulso",
      characteristics: language === 'en'
        ? ["Rapid hiring", "System implementation", "Market validation", "Revenue acceleration"]
        : ["Contratación rápida", "Implementación de sistemas", "Validación de mercado", "Aceleración de ingresos"],
      healthMetrics: {
        cashFlow: 75,
        compliance: 65,
        talent: 80, 
        operations: 70
      }
    },
    scale: {
      icon: Building,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20", 
      borderColor: "border-blue-700",
      description: language === 'en'
        ? "Structuring for sustainability"
        : "Estructurando para sostenibilidad",
      characteristics: language === 'en'
        ? ["Process optimization", "Leadership development", "Geographic expansion", "Operational excellence"]
        : ["Optimización de procesos", "Desarrollo de liderazgo", "Expansión geográfica", "Excelencia operacional"],
      healthMetrics: {
        cashFlow: 85,
        compliance: 80,
        talent: 85,
        operations: 90
      }
    },
    expansion: {
      icon: Crown,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700", 
      description: language === 'en'
        ? "IPOs, acquisitions, or transformative exits"
        : "IPOs, adquisiciones, o salidas transformadoras",
      characteristics: language === 'en'
        ? ["Market leadership", "Strategic partnerships", "M&A activity", "Investor readiness"]
        : ["Liderazgo de mercado", "Alianzas estratégicas", "Actividad M&A", "Preparación para inversores"],
      healthMetrics: {
        cashFlow: 95,
        compliance: 95,
        talent: 90,
        operations: 95
      }
    }
  };

  const plModels = {
    aso: {
      name: "ASO Model",
      description: language === 'en' 
        ? "Maps labor costs (direct/indirect) and benefits to COGS, OPER, and NOI. Emphasizes reactive support—'guidance but no co-pilot.'"
        : "Mapea costos laborales (directos/indirectos) y beneficios a COGS, OPER, y NOI. Enfatiza soporte reactivo—'orientación pero sin copiloto.'",
      characteristics: [
        language === 'en' ? "Reactive guidance" : "Orientación reactiva",
        language === 'en' ? "Basic compliance" : "Cumplimiento básico", 
        language === 'en' ? "Cost-focused" : "Enfocado en costos",
        language === 'en' ? "Limited forecasting" : "Pronósticos limitados"
      ],
      profitImpact: {
        revenue: 85,
        costs: 75,
        efficiency: 70,
        risk: 60
      }
    },
    peo: {
      name: "PEO Model", 
      description: language === 'en'
        ? "Adds proactive strategic levers: 'co-pilot' guidance and forecasting support. Revenue includes more enterprise-level plays (e.g F500, product spread)."
        : "Añade palancas estratégicas proactivas: orientación de 'copiloto' y soporte de pronósticos. Los ingresos incluyen jugadas de nivel empresarial (ej. F500, difusión de productos).",
      characteristics: [
        language === 'en' ? "Proactive strategy" : "Estrategia proactiva",
        language === 'en' ? "Advanced compliance" : "Cumplimiento avanzado",
        language === 'en' ? "Growth-focused" : "Enfocado en crecimiento", 
        language === 'en' ? "Predictive analytics" : "Analíticas predictivas"
      ],
      profitImpact: {
        revenue: 95,
        costs: 85,
        efficiency: 90,
        risk: 85
      }
    }
  };

  const profitNarrative = {
    revenue: {
      storyElement: language === 'en' ? "Hero's Journey Kickoff" : "Inicio del Viaje del Héroe",
      description: language === 'en' 
        ? "The result of Sales (repeat + new)—this is the protagonist's beginning"
        : "El resultado de Ventas (repetidas + nuevas)—este es el comienzo del protagonista",
      metaphor: language === 'en' ? "The adventure begins" : "La aventura comienza"
    },
    cogs: {
      storyElement: language === 'en' ? "Gear and Grit" : "Equipo y Determinación",
      description: language === 'en'
        ? "Direct Labor → Working capital, benefits, TAA → Every sale costs something"
        : "Mano de Obra Directa → Capital de trabajo, beneficios, TAA → Cada venta cuesta algo",
      metaphor: language === 'en' ? "The tools needed for the quest" : "Las herramientas necesarias para la búsqueda"
    },
    grossMargin: {
      storyElement: language === 'en' ? "First Checkpoint" : "Primer Punto de Control",
      description: language === 'en'
        ? "The initial victory—revenue minus direct costs"
        : "La victoria inicial—ingresos menos costos directos", 
      metaphor: language === 'en' ? "First hill crested" : "Primera colina conquistada"
    },
    opex: {
      storyElement: language === 'en' ? "Supporting Cast" : "Reparto de Apoyo",
      description: language === 'en'
        ? "Indirect Labor → WC, Benefits, TAA → The operating fuel"
        : "Mano de Obra Indirecta → WC, Beneficios, TAA → El combustible operativo",
      metaphor: language === 'en' ? "The team that enables success" : "El equipo que permite el éxito"
    },
    noi: {
      storyElement: language === 'en' ? "Approaching Climax" : "Acercándose al Clímax",
      description: language === 'en'
        ? "Net Operating Income leads us into the final act"
        : "El Ingreso Operativo Neto nos lleva al acto final",
      metaphor: language === 'en' ? "The final challenge appears" : "Aparece el desafío final"
    },
    nonOpex: {
      storyElement: language === 'en' ? "Plot Twist" : "Giro Argumental",
      description: language === 'en'
        ? "Unplanned/unknown expenses → penalties, lawsuits, surprises that threaten the climax"
        : "Gastos no planeados/desconocidos → penalidades, demandas, sorpresas que amenazan el clímax",
      metaphor: language === 'en' ? "The storm you didn't forecast" : "La tormenta que no pronosticaste"
    },
    profit: {
      storyElement: language === 'en' ? "Final Scene" : "Escena Final",
      description: language === 'en'
        ? "The result of decisions, trade-offs, and resilience"
        : "El resultado de decisiones, intercambios y resistencia",
      metaphor: language === 'en' ? "Victory achieved" : "Victoria lograda"
    }
  };

  const stakeholderBriefs = {
    ceo: {
      focus: language === 'en' ? "Vision & Growth" : "Visión y Crecimiento",
      priorities: language === 'en' 
        ? ["Market positioning", "Strategic direction", "Investor relations", "Culture building"]
        : ["Posicionamiento de mercado", "Dirección estratégica", "Relaciones con inversores", "Construcción de cultura"],
      healthDefinition: language === 'en'
        ? "Sustainable growth with clear competitive advantage"
        : "Crecimiento sostenible con ventaja competitiva clara"
    },
    cfo: {
      focus: language === 'en' ? "Financial Health" : "Salud Financiera", 
      priorities: language === 'en'
        ? ["Cash flow management", "Cost optimization", "Risk mitigation", "Financial forecasting"]
        : ["Gestión de flujo de efectivo", "Optimización de costos", "Mitigación de riesgos", "Pronósticos financieros"],
      healthDefinition: language === 'en'
        ? "Predictable revenue with controlled costs and managed risks"
        : "Ingresos predecibles con costos controlados y riesgos gestionados"
    },
    coo: {
      focus: language === 'en' ? "Operational Excellence" : "Excelencia Operacional",
      priorities: language === 'en'
        ? ["Process efficiency", "Quality control", "Supply chain", "Performance metrics"] 
        : ["Eficiencia de procesos", "Control de calidad", "Cadena de suministro", "Métricas de rendimiento"],
      healthDefinition: language === 'en'
        ? "Streamlined operations with consistent quality and scalable processes"
        : "Operaciones optimizadas con calidad consistente y procesos escalables"
    },
    chro: {
      focus: language === 'en' ? "People & Culture" : "Personas y Cultura",
      priorities: language === 'en'
        ? ["Talent acquisition", "Employee engagement", "Compliance", "Leadership development"]
        : ["Adquisición de talento", "Compromiso de empleados", "Cumplimiento", "Desarrollo de liderazgo"],
      healthDefinition: language === 'en' 
        ? "Engaged workforce with strong culture and low turnover"
        : "Fuerza laboral comprometida con cultura fuerte y baja rotación"
    }
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
          
          <Button className="bg-green-600 hover:bg-green-700">
            <PlayCircle className="w-4 h-4 mr-2" />
            Generate Framework
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="lifecycle-mapping">{currentLabels.lifecycleMapping}</TabsTrigger>
            <TabsTrigger value="pl-models">{currentLabels.plModels}</TabsTrigger>
            <TabsTrigger value="profit-narrative">{currentLabels.profitNarrative}</TabsTrigger>
            <TabsTrigger value="stakeholder-briefs">{currentLabels.stakeholderBriefs}</TabsTrigger>
            <TabsTrigger value="health-indicators">{currentLabels.healthIndicators}</TabsTrigger>
            <TabsTrigger value="messaging-rubrics">{currentLabels.messagingRubrics}</TabsTrigger>
            <TabsTrigger value="strategy-motion-deck">{currentLabels.strategyMotionDeck}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Lifecycle Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Compass className="w-6 h-6 text-blue-400" />
                  Business Lifecycle Framework
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en' 
                    ? "Navigate the complete business journey from entrepreneurial chaos to strategic exits with data-driven insights at every stage."
                    : "Navega el viaje empresarial completo desde el caos emprendedor hasta las salidas estratégicas con insights basados en datos en cada etapa."
                  }
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(lifecycleStages).map(([key, stage]) => {
                    const Icon = stage.icon;
                    return (
                      <div 
                        key={key}
                        className={`p-4 rounded-lg ${stage.bgColor} border ${stage.borderColor} cursor-pointer hover:opacity-80 transition-opacity`}
                        onClick={() => setSelectedStage(key as LifecycleStage)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`w-5 h-5 ${stage.color}`} />
                          <div className="text-white font-medium">{currentLabels[key as keyof typeof currentLabels]}</div>
                        </div>
                        <p className="text-xs text-gray-400">{stage.description}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* P&L Models */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                  P&L Alignment Models
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Transform your approach from reactive cost management to proactive strategic advantage with advanced P&L modeling."
                    : "Transforma tu enfoque de gestión reactiva de costos a ventaja estratégica proactiva con modelado avanzado de P&G."
                  }
                </p>

                <div className="space-y-4">
                  {Object.entries(plModels).map(([key, model]) => (
                    <div 
                      key={key}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedModel === key 
                          ? 'bg-green-900/20 border-green-700' 
                          : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                      }`}
                      onClick={() => setSelectedModel(key as PLModel)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white font-medium">{model.name}</div>
                        <Badge variant={selectedModel === key ? "default" : "secondary"}>
                          {key.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{model.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('lifecycle-mapping')}
                >
                  <Compass className="w-4 h-4" />
                  Map Lifecycle
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('pl-models')}
                >
                  <BarChart3 className="w-4 h-4" />
                  Compare Models
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('profit-narrative')}
                >
                  <BookOpen className="w-4 h-4" />
                  Profit Story
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('stakeholder-briefs')}
                >
                  <Users className="w-4 h-4" />
                  Stakeholder Briefs
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Lifecycle Mapping */}
          <TabsContent value="lifecycle-mapping" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Interactive Lifecycle Mapping</h3>
              
              {/* Stage Selector */}
              <div className="grid lg:grid-cols-4 gap-4 mb-8">
                {Object.entries(lifecycleStages).map(([key, stage]) => {
                  const Icon = stage.icon;
                  const isSelected = selectedStage === key;
                  
                  return (
                    <div 
                      key={key}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected 
                          ? `${stage.bgColor} ${stage.borderColor}` 
                          : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                      }`}
                      onClick={() => setSelectedStage(key as LifecycleStage)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-6 h-6 ${isSelected ? stage.color : 'text-gray-400'}`} />
                        <div className={`font-medium ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                          {currentLabels[key as keyof typeof currentLabels]}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-400 mb-3">{stage.description}</p>
                      
                      <div className="space-y-1">
                        {stage.characteristics.map((char, idx) => (
                          <div key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Stage Deep Dive */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    {currentLabels[selectedStage as keyof typeof currentLabels]} Stage Analysis
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <div className="text-sm font-medium text-gray-400 mb-2">Core Focus</div>
                      <div className="text-white">{lifecycleStages[selectedStage].description}</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <div className="text-sm font-medium text-gray-400 mb-3">Key Characteristics</div>
                      <div className="grid grid-cols-2 gap-2">
                        {lifecycleStages[selectedStage].characteristics.map((char, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Health Metrics</h4>
                  
                  <div className="space-y-4">
                    {Object.entries(lifecycleStages[selectedStage].healthMetrics).map(([metric, value]) => (
                      <div key={metric} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400 capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-white">{value}%</span>
                        </div>
                        <Progress 
                          value={value} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* P&L Models */}
          <TabsContent value="pl-models" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(plModels).map(([key, model]) => (
                <Card key={key} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    <Badge variant={key === 'peo' ? "default" : "secondary"}>
                      {key.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{model.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium text-gray-400">Key Characteristics</h4>
                    {model.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          key === 'peo' ? 'bg-green-400' : 'bg-blue-400'
                        }`}></div>
                        <span className="text-gray-300">{char}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-400">Profit Impact</h4>
                    {Object.entries(model.profitImpact).map(([metric, value]) => (
                      <div key={metric} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400 capitalize">{metric}</span>
                          <span className="text-white">{value}%</span>
                        </div>
                        <Progress 
                          value={value} 
                          className="h-1"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Comparison Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">ASO vs PEO Comparison Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Aspect</th>
                      <th className="text-center py-3 text-blue-400">ASO Model</th>
                      <th className="text-center py-3 text-green-400">PEO Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-gray-300">Approach</td>
                      <td className="py-3 text-center text-gray-300">Reactive "Guidance"</td>
                      <td className="py-3 text-center text-gray-300">Proactive "Co-pilot"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-gray-300">Revenue Focus</td>
                      <td className="py-3 text-center text-gray-300">Cost Management</td>
                      <td className="py-3 text-center text-gray-300">Enterprise Growth</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-gray-300">Forecasting</td>
                      <td className="py-3 text-center text-gray-300">Limited</td>
                      <td className="py-3 text-center text-gray-300">Advanced Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-gray-300">Target Market</td>
                      <td className="py-3 text-center text-gray-300">SMB</td>
                      <td className="py-3 text-center text-gray-300">F500 + Enterprise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Profit Narrative */}
          <TabsContent value="profit-narrative" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-400" />
                The Profit Story: P&L as Narrative Arc
              </h3>
              
              <p className="text-gray-300 mb-8">
                {language === 'en'
                  ? "Transform financial statements into compelling business narratives that stakeholders understand and remember."
                  : "Transforma los estados financieros en narrativas empresariales convincentes que los stakeholders entiendan y recuerden."
                }
              </p>

              <div className="space-y-6">
                {Object.entries(profitNarrative).map(([key, element], idx) => (
                  <div key={key} className="flex items-start gap-6 p-6 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg text-white font-bold">
                      {idx + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-lg font-bold text-white">
                          {currentLabels[key as keyof typeof currentLabels]}
                        </h4>
                        <Badge variant="outline" className="text-purple-400 border-purple-400">
                          {element.storyElement}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{element.description}</p>
                      <p className="text-sm text-purple-400 italic">"{element.metaphor}"</p>
                    </div>
                    
                    {idx < Object.keys(profitNarrative).length - 1 && (
                      <ArrowDown className="w-5 h-5 text-gray-600 mt-4" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                  Narrative Application
                </h4>
                <p className="text-gray-300">
                  {language === 'en'
                    ? "Use this story framework to transform dry financial presentations into engaging stakeholder communications that drive decision-making and buy-in."
                    : "Usa este marco narrativo para transformar presentaciones financieras secas en comunicaciones atractivas para stakeholders que impulsen la toma de decisiones y el compromiso."
                  }
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Stakeholder Briefs */}
          <TabsContent value="stakeholder-briefs" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Stakeholder-Specific Brief Cards</h3>
              <div className="flex gap-2">
                {Object.keys(stakeholderBriefs).map((persona) => (
                  <Button
                    key={persona}
                    variant={selectedPersona === persona ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPersona(persona as StakeholderPersona)}
                  >
                    {currentLabels[persona as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Selected Persona Brief */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {currentLabels[selectedPersona as keyof typeof currentLabels]} Brief
                    </h4>
                    <p className="text-gray-400">{stakeholderBriefs[selectedPersona].focus}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-gray-400 mb-3">Key Priorities</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {stakeholderBriefs[selectedPersona].priorities.map((priority, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <Target className="w-3 h-3 text-blue-400" />
                          {priority}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h5 className="font-medium text-blue-400 mb-2">Health Definition</h5>
                    <p className="text-gray-300">{stakeholderBriefs[selectedPersona].healthDefinition}</p>
                  </div>
                </div>
              </Card>

              {/* Lifecycle-Persona Matrix */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">
                  {currentLabels[selectedPersona as keyof typeof currentLabels]} Lifecycle Priorities
                </h4>

                <div className="space-y-4">
                  {Object.entries(lifecycleStages).map(([stage, stageData]) => {
                    const Icon = stageData.icon;
                    return (
                      <div key={stage} className={`p-4 rounded-lg ${stageData.bgColor} border ${stageData.borderColor}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`w-5 h-5 ${stageData.color}`} />
                          <div className="text-white font-medium">
                            {currentLabels[stage as keyof typeof currentLabels]}
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">
                          {language === 'en' 
                            ? `${selectedPersona.toUpperCase()} focus: ${stageData.description}`
                            : `Enfoque ${selectedPersona.toUpperCase()}: ${stageData.description}`
                          }
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Health Indicators */}
          <TabsContent value="health-indicators" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Business Health Indicators by Lifecycle Stage
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {Object.entries(lifecycleStages).map(([stage, stageData]) => {
                  const Icon = stageData.icon;
                  return (
                    <div key={stage} className={`p-6 rounded-lg ${stageData.bgColor} border ${stageData.borderColor}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <Icon className={`w-6 h-6 ${stageData.color}`} />
                        <h4 className="text-lg font-bold text-white">
                          {currentLabels[stage as keyof typeof currentLabels]} Health
                        </h4>
                      </div>

                      <div className="space-y-4">
                        {Object.entries(stageData.healthMetrics).map(([metric, value]) => (
                          <div key={metric} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300 capitalize">
                                {metric.replace(/([A-Z])/g, ' $1').trim()}
                              </span>
                              <span className="text-white font-medium">{value}%</span>
                            </div>
                            <Progress 
                              value={value} 
                              className="h-2"
                            />
                            <div className="text-xs text-gray-400">
                              {value >= 80 && (
                                <span className="text-green-400">✓ Healthy</span>
                              )}
                              {value >= 60 && value < 80 && (
                                <span className="text-yellow-400">⚠ Attention Needed</span>
                              )}
                              {value < 60 && (
                                <span className="text-red-400">✗ Critical</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* Messaging Rubrics */}
          <TabsContent value="messaging-rubrics" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-orange-400" />
                ASO vs PEO Messaging Rubric
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* ASO Messaging */}
                <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Anchor className="w-5 h-5 text-blue-400" />
                    ASO Model Messaging
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Core Metaphor</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en' ? '"Tugboat" - Steady, reliable guidance' : '"Remolcador" - Orientación estable y confiable'}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Value Proposition</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en' 
                          ? 'Cost-effective compliance and basic HR support for stable operations'
                          : 'Cumplimiento rentable y soporte básico de RH para operaciones estables'
                        }
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Target Audience</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en'
                          ? 'SMB companies focused on cost control and basic compliance'
                          : 'Empresas PYME enfocadas en control de costos y cumplimiento básico'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* PEO Messaging */}
                <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-green-400" />
                    PEO Model Messaging
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Core Metaphor</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en' ? '"Jet Fighter" - High-performance co-pilot' : '"Caza" - Copiloto de alto rendimiento'}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Value Proposition</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en'
                          ? 'Strategic HR partnership driving growth and competitive advantage'
                          : 'Asociación estratégica de RH impulsando crecimiento y ventaja competitiva'
                        }
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Target Audience</h5>
                      <p className="text-gray-300 text-sm">
                        {language === 'en'
                          ? 'Growth-stage companies and F500 enterprises seeking strategic advantage'
                          : 'Empresas en fase de crecimiento y corporaciones F500 buscando ventaja estratégica'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messaging Decision Tree */}
              <div className="mt-8 p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-4">Messaging Decision Tree</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <div className="text-white font-medium">Company Size & Stage</div>
                      <div className="text-sm text-gray-400">SMB + Cost Focus = ASO | Enterprise + Growth = PEO</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <div className="text-white font-medium">Primary Pain Point</div>
                      <div className="text-sm text-gray-400">Compliance Risk = ASO | Strategic Growth = PEO</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <div className="text-white font-medium">Decision Maker</div>
                      <div className="text-sm text-gray-400">CFO + Cost Control = ASO | CEO + Growth Strategy = PEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Strategy in Motion Slide Deck */}
          <TabsContent value="strategy-motion-deck" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Presentation className="w-6 h-6 text-purple-400" />
                  Strategy in Motion: Executive Slide Deck
                </h3>
                
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <span className="text-sm text-gray-400">
                    {currentSlide + 1} / 6
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentSlide(Math.min(5, currentSlide + 1))}
                    disabled={currentSlide === 5}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Eye className="w-4 h-4 mr-2" />
                    Present Mode
                  </Button>
                </div>
              </div>

              {/* Slide Navigation */}
              <div className="flex gap-2 mb-8 overflow-x-auto">
                {[
                  { id: 0, title: 'Title', icon: Star },
                  { id: 1, title: 'CEO View', icon: Crown },
                  { id: 2, title: 'CFO View', icon: DollarSign },
                  { id: 3, title: 'COO View', icon: Settings },
                  { id: 4, title: 'CHRO View', icon: Users },
                  { id: 5, title: 'Summary', icon: Target }
                ].map((slide) => {
                  const Icon = slide.icon;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(slide.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                        currentSlide === slide.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {slide.title}
                    </button>
                  );
                })}
              </div>

              {/* Slide Content */}
              <div className="min-h-[600px] bg-gray-900 rounded-lg p-8 relative overflow-hidden">
                {/* Slide 1: Title Slide */}
                {currentSlide === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Presentation className="w-10 h-10 text-white" />
                      </div>
                      <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {language === 'en' ? 'Strategy in Motion' : 'Estrategia en Movimiento'}
                      </h1>
                      <h2 className="text-xl text-purple-400 mb-6">
                        {language === 'en' 
                          ? 'Navigating Profit as a Story'
                          : 'Navegando las Ganancias como una Historia'
                        }
                      </h2>
                      <p className="text-gray-300 max-w-2xl mx-auto">
                        {language === 'en'
                          ? 'Lifecycle-to-Profit Toolkit for Executive Decision-Making'
                          : 'Kit de Herramientas de Ciclo-a-Ganancia para Toma de Decisiones Ejecutivas'
                        }
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-8 mt-8">
                      {[
                        { icon: Crown, label: 'CEO', color: 'text-yellow-400' },
                        { icon: DollarSign, label: 'CFO', color: 'text-green-400' },
                        { icon: Settings, label: 'COO', color: 'text-blue-400' },
                        { icon: Users, label: 'CHRO', color: 'text-purple-400' }
                      ].map((stakeholder, idx) => {
                        const Icon = stakeholder.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon className={`w-6 h-6 ${stakeholder.color}`} />
                            <span className="text-gray-300">{stakeholder.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Slide 2: CEO View - Vision Meets Velocity */}
                {currentSlide === 1 && (
                  <div className="h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Crown className="w-8 h-8 text-yellow-400" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">CEO View</h2>
                        <p className="text-xl text-yellow-400">Vision Meets Velocity</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
                      <div className="space-y-6">
                        <div className="p-6 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <TrendingUpIcon className="w-5 h-5 text-yellow-400" />
                            Strategic KPI Scorecard
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Revenue Growth (YoY)</span>
                              <span className="text-yellow-400 font-bold">+24%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '76%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Market Share</span>
                              <span className="text-yellow-400 font-bold">18.5%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Customer Retention</span>
                              <span className="text-yellow-400 font-bold">94%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '94%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-yellow-900/10 border border-yellow-800 rounded-lg">
                          <p className="text-yellow-400 font-medium italic">
                            "{language === 'en' 
                              ? 'The hero\'s journey begins with market momentum'
                              : 'El viaje del héroe comienza con impulso de mercado'
                            }"
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-yellow-400" />
                            Market Trends
                          </h4>
                          
                          {/* Simple trend visualization */}
                          <div className="relative h-32 bg-gray-900 rounded-lg p-4">
                            <div className="absolute bottom-4 left-4 right-4 h-16">
                              <svg className="w-full h-full" viewBox="0 0 300 60">
                                <polyline
                                  fill="none"
                                  stroke="#FCD34D"
                                  strokeWidth="2"
                                  points="0,50 50,45 100,35 150,25 200,20 250,15 300,10"
                                />
                              </svg>
                            </div>
                            <div className="absolute top-2 right-2 text-yellow-400 text-sm font-bold">
                              ↗ +24% YoY
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-yellow-400" />
                            Customer Funnel
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                              <span className="text-gray-300">Leads: 2,450</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                              <span className="text-gray-300">Qualified: 1,840</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                              <span className="text-gray-300">Closed: 492</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 3: CFO View - Guardrails for Growth */}
                {currentSlide === 2 && (
                  <div className="h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <DollarSign className="w-8 h-8 text-green-400" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">CFO View</h2>
                        <p className="text-xl text-green-400">Guardrails for Growth</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
                      <div className="space-y-6">
                        <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <BarChart className="w-5 h-5 text-green-400" />
                            Financial Health Snapshot
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">EBITDA Margin</span>
                              <span className="text-green-400 font-bold">22.5%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Cash Flow</span>
                              <span className="text-green-400 font-bold">$2.8M</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{width: '80%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Burn Rate</span>
                              <span className="text-green-400 font-bold">18 months</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-green-900/10 border border-green-800 rounded-lg">
                          <p className="text-green-400 font-medium italic">
                            "{language === 'en' 
                              ? 'Every twist in the plot has a financial echo'
                              : 'Cada giro en la trama tiene un eco financiero'
                            }"
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-green-400" />
                            Forecast vs. Actual
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Q1 Revenue</span>
                              <div className="flex gap-2">
                                <span className="text-gray-400">$2.4M</span>
                                <span className="text-green-400">$2.45M</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Q2 Revenue</span>
                              <div className="flex gap-2">
                                <span className="text-gray-400">$2.6M</span>
                                <span className="text-green-400">$2.68M</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Q3 Revenue</span>
                              <div className="flex gap-2">
                                <span className="text-gray-400">$2.8M</span>
                                <span className="text-green-400">$2.89M</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-red-900/20 border border-red-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                            Risk Alerts
                          </h4>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300">Currency exposure: $350K</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-gray-300">Compliance review due</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-300">Insurance updated</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 4: COO View - Gears in Motion */}
                {currentSlide === 3 && (
                  <div className="h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Settings className="w-8 h-8 text-blue-400" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">COO View</h2>
                        <p className="text-xl text-blue-400">Gears in Motion</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
                      <div className="space-y-6">
                        <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-blue-400" />
                            Operational Efficiency
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Process Efficiency</span>
                              <span className="text-blue-400 font-bold">87%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Quality Score</span>
                              <span className="text-blue-400 font-bold">9.2/10</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Capacity Utilization</span>
                              <span className="text-blue-400 font-bold">73%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{width: '73%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-900/10 border border-blue-800 rounded-lg">
                          <p className="text-blue-400 font-medium italic">
                            "{language === 'en' 
                              ? 'The supporting cast behind every outcome'
                              : 'El reparto de apoyo detrás de cada resultado'
                            }"
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                            COGS & OPEX Flow
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Direct Labor</span>
                              <span className="text-blue-400">$1.47M</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full">
                              <div className="h-2 bg-blue-400 rounded-full" style={{width: '65%'}}></div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Indirect Labor</span>
                              <span className="text-blue-400">$0.98M</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full">
                              <div className="h-2 bg-blue-500 rounded-full" style={{width: '43%'}}></div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Benefits & TAA</span>
                              <span className="text-blue-400">$0.52M</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full" style={{width: '23%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-blue-400" />
                            Process Bottlenecks
                          </h4>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-gray-300">Onboarding: 12 days avg</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300">Approval cycle: 5 days</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-300">Quality control: 2 days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 5: CHRO View - People Powering Profit */}
                {currentSlide === 4 && (
                  <div className="h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Users className="w-8 h-8 text-purple-400" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">CHRO View</h2>
                        <p className="text-xl text-purple-400">People Powering Profit</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
                      <div className="space-y-6">
                        <div className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Coffee className="w-5 h-5 text-purple-400" />
                            Workforce Intelligence
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Employee Engagement</span>
                              <span className="text-purple-400 font-bold">8.4/10</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-purple-400 h-2 rounded-full" style={{width: '84%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Retention Rate</span>
                              <span className="text-purple-400 font-bold">91%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-purple-400 h-2 rounded-full" style={{width: '91%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Training ROI</span>
                              <span className="text-purple-400 font-bold">3.2x</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-purple-900/10 border border-purple-800 rounded-lg">
                          <p className="text-purple-400 font-medium italic">
                            "{language === 'en' 
                              ? 'The grit and grace behind the numbers'
                              : 'La determinación y gracia detrás de los números'
                            }"
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <PieChartIcon className="w-5 h-5 text-purple-400" />
                            Labor Cost Heatmap
                          </h4>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-purple-900/30 rounded text-center">
                              <div className="text-purple-400 font-bold">Engineering</div>
                              <div className="text-white text-lg">$1.2M</div>
                              <div className="text-xs text-gray-400">42% of total</div>
                            </div>
                            <div className="p-3 bg-purple-800/30 rounded text-center">
                              <div className="text-purple-400 font-bold">Sales</div>
                              <div className="text-white text-lg">$0.8M</div>
                              <div className="text-xs text-gray-400">28% of total</div>
                            </div>
                            <div className="p-3 bg-purple-700/30 rounded text-center">
                              <div className="text-purple-400 font-bold">Operations</div>
                              <div className="text-white text-lg">$0.5M</div>
                              <div className="text-xs text-gray-400">18% of total</div>
                            </div>
                            <div className="p-3 bg-purple-600/30 rounded text-center">
                              <div className="text-purple-400 font-bold">Support</div>
                              <div className="text-white text-lg">$0.3M</div>
                              <div className="text-xs text-gray-400">12% of total</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-purple-400" />
                            Talent Pipeline
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Open Positions</span>
                              <span className="text-purple-400">12</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">In Process</span>
                              <span className="text-purple-400">28</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Final Round</span>
                              <span className="text-purple-400">8</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Avg Time to Hire</span>
                              <span className="text-purple-400">28 days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 6: Cross-Role Summary - Unified Storyline */}
                {currentSlide === 5 && (
                  <div className="h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <Target className="w-8 h-8 text-orange-400" />
                      <div>
                        <h2 className="text-3xl font-bold text-white">Cross-Role Summary</h2>
                        <p className="text-xl text-orange-400">Unified Storyline</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Profit Flow Waterfall */}
                      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-orange-400" />
                          GM to Profit Flow - The Complete Story
                        </h3>
                        
                        <div className="grid grid-cols-6 gap-4 mb-6">
                          {[
                            { label: 'Revenue', value: '$11.1M', color: 'bg-green-500', story: 'Hero\'s Journey' },
                            { label: 'COGS', value: '-$4.5M', color: 'bg-red-500', story: 'Gear & Grit' },
                            { label: 'Gross Margin', value: '$6.6M', color: 'bg-yellow-500', story: 'First Hill' },
                            { label: 'OPEX', value: '-$4.5M', color: 'bg-blue-500', story: 'Supporting Cast' },
                            { label: 'NOI', value: '$2.1M', color: 'bg-purple-500', story: 'Final Challenge' },
                            { label: 'Profit', value: '$2.2M', color: 'bg-orange-500', story: 'Victory!' }
                          ].map((item, idx) => (
                            <div key={idx} className="text-center">
                              <div className={`${item.color} h-16 rounded-lg mb-2 flex items-center justify-center`}>
                                <span className="text-white font-bold text-sm">{item.value}</span>
                              </div>
                              <div className="text-white text-sm font-medium">{item.label}</div>
                              <div className="text-gray-400 text-xs italic">"{item.story}"</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Trade-offs Matrix */}
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-orange-400" />
                            Key Trade-offs & Decisions
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                              <span className="text-gray-300">Growth vs. Profitability</span>
                              <div className="flex gap-1">
                                {[1,2,3,4].map(i => (
                                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-orange-400' : 'bg-gray-600'}`}></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                              <span className="text-gray-300">Automation vs. Employment</span>
                              <div className="flex gap-1">
                                {[1,2,3,4].map(i => (
                                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 2 ? 'bg-orange-400' : 'bg-gray-600'}`}></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                              <span className="text-gray-300">Risk vs. Innovation</span>
                              <div className="flex gap-1">
                                {[1,2,3,4].map(i => (
                                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-orange-400' : 'bg-gray-600'}`}></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-orange-900/20 border border-orange-700 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Compass className="w-5 h-5 text-orange-400" />
                            Strategic North Star
                          </h4>
                          
                          <p className="text-gray-300 mb-4">
                            {language === 'en'
                              ? 'Where strategy meets execution: Culture becomes the queen piece that amplifies all business functions through the Force Multiplier effect.'
                              : 'Donde la estrategia se encuentra con la ejecución: La cultura se convierte en la pieza reina que amplifica todas las funciones empresariales a través del efecto Multiplicador de Fuerza.'
                            }
                          </p>
                          
                          <div className="p-4 bg-orange-900/30 rounded-lg">
                            <p className="text-orange-400 font-medium italic text-center">
                              "{language === 'en' 
                                ? 'Victory achieved through unified storyline'
                                : 'Victoria lograda a través de una narrativa unificada'
                              }"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide Navigation Footer */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Strategy in Motion Toolkit' : 'Kit de Herramientas Estrategia en Movimiento'}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    {language === 'en' ? 'Previous' : 'Anterior'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentSlide(Math.min(5, currentSlide + 1))}
                    disabled={currentSlide === 5}
                  >
                    {language === 'en' ? 'Next' : 'Siguiente'}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}