import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Shield, Users, DollarSign, Building, Target, AlertTriangle, 
  CheckCircle, Zap, TrendingUp, BarChart3, Clock, Award,
  Stethoscope, Wrench, Code, Briefcase, Factory, Heart,
  Cpu, Scale, Gavel, Calculator, Globe, Eye, ChevronRight,
  PlayCircle, Rocket, Anchor, Crown, Star, Coffee, Gauge,
  Settings, PieChart, LineChart, Activity, ArrowUp, ArrowDown
} from 'lucide-react';

interface OverwatchFractionalHRCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type VerticalType = 'healthcare' | 'manufacturing' | 'tech-saas' | 'professional-services' | 'general';
type StakeholderPersona = 'ceo-founder' | 'cfo' | 'operations-lead' | 'frontline-managers';
type LifecycleStage = 'startup-build' | 'growth-scale' | 'transition-turmoil' | 'optimization-mature';

export function OverwatchFractionalHRCenter({ language, currentMode, onNavigate }: OverwatchFractionalHRCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'tactical-briefs' | 'vertical-solutions' | 'stakeholder-mapping' | 'lifecycle-intervention' | 'metrics-dashboard'>('overview');
  const [selectedVertical, setSelectedVertical] = useState<VerticalType>('general');
  const [selectedPersona, setSelectedPersona] = useState<StakeholderPersona>('ceo-founder');
  const [selectedStage, setSelectedStage] = useState<LifecycleStage>('growth-scale');

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      tacticalBriefs: "Tactical Briefs",
      verticalSolutions: "Vertical Solutions",
      stakeholderMapping: "Stakeholder Mapping", 
      lifecycleIntervention: "Lifecycle Intervention",
      metricsDashboard: "Metrics Dashboard",
      
      // Content
      title: "OVERWATCH Fractional HR Solutions Center",
      subtitle: "Quiet Special Ops for SMBs - Strategic HR muscle without the overhead",
      
      // Verticals
      general: "General SMB",
      healthcare: "Healthcare & Wellness",
      manufacturing: "Manufacturing & Industrial",
      techSaas: "Tech & SaaS Startups",
      professionalServices: "Professional Services",
      
      // Personas
      ceoFounder: "CEO/Founder",
      cfo: "CFO",
      operationsLead: "Operations Lead",
      frontlineManagers: "Frontline Managers",
      
      // Lifecycle Stages
      startupBuild: "Startup/Build",
      growthScale: "Growth/Scale", 
      transitionTurmoil: "Transition/Turmoil",
      optimizationMature: "Optimization/Mature"
    },
    es: {
      // Navigation
      overview: "Vista General",
      tacticalBriefs: "Informes Tácticos",
      verticalSolutions: "Soluciones Verticales",
      stakeholderMapping: "Mapeo de Stakeholders",
      lifecycleIntervention: "Intervención de Ciclo",
      metricsDashboard: "Panel de Métricas",
      
      // Content
      title: "Centro de Soluciones HR Fraccionarias OVERWATCH",
      subtitle: "Operaciones Especiales Silenciosas para SMBs - Músculo estratégico de HR sin gastos generales",
      
      // Verticals
      general: "SMB General",
      healthcare: "Salud y Bienestar",
      manufacturing: "Manufactura e Industrial",
      techSaas: "Tech y SaaS Startups",
      professionalServices: "Servicios Profesionales",
      
      // Personas
      ceoFounder: "CEO/Fundador",
      cfo: "CFO",
      operationsLead: "Líder de Operaciones",
      frontlineManagers: "Gerentes de Primera Línea",
      
      // Lifecycle Stages
      startupBuild: "Startup/Construcción",
      growthScale: "Crecimiento/Escala",
      transitionTurmoil: "Transición/Turbulencia",
      optimizationMature: "Optimización/Maduro"
    }
  };

  const currentLabels = labels[language];

  const verticals = {
    general: {
      icon: Building,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      name: currentLabels.general,
      tagline: language === 'en' 
        ? "Strategic HR muscle, minus the overhead"
        : "Músculo estratégico de HR, menos gastos generales",
      challenges: language === 'en'
        ? ["Rapid growth chaos", "Compliance complexity", "Cost control", "Talent retention"]
        : ["Caos de crecimiento rápido", "Complejidad de cumplimiento", "Control de costos", "Retención de talento"],
      solutions: language === 'en'
        ? ["On-demand expertise", "Scalable engagement", "Cost-effective solutions", "Strategic guidance"]
        : ["Experiencia bajo demanda", "Compromiso escalable", "Soluciones rentables", "Orientación estratégica"]
    },
    healthcare: {
      icon: Stethoscope,
      color: "text-red-400",
      bgColor: "bg-red-900/20", 
      borderColor: "border-red-700",
      name: currentLabels.healthcare,
      tagline: language === 'en'
        ? "Fractional HR that understands HIPAA, shift scheduling, and retention"
        : "HR fraccionario que entiende HIPAA, programación de turnos y retención",
      challenges: language === 'en'
        ? ["High turnover", "Credentialing complexity", "Burnout management", "HIPAA compliance"]
        : ["Alta rotación", "Complejidad de credenciales", "Gestión de burnout", "Cumplimiento HIPAA"],
      solutions: language === 'en'
        ? ["Culture that heals from inside out", "Specialized recruiting", "Compliance expertise", "Wellness programs"]
        : ["Cultura que sana desde adentro", "Reclutamiento especializado", "Experiencia en cumplimiento", "Programas de bienestar"]
    },
    manufacturing: {
      icon: Factory,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700", 
      name: currentLabels.manufacturing,
      tagline: language === 'en'
        ? "HR that scales with your shop floor - From PPE to performance reviews"
        : "HR que escala con tu piso de producción - De EPP a evaluaciones de desempeño",
      challenges: language === 'en'
        ? ["Safety compliance", "Skills gaps", "Union dynamics", "Production schedules"]
        : ["Cumplimiento de seguridad", "Brechas de habilidades", "Dinámicas sindicales", "Horarios de producción"],
      solutions: language === 'en'
        ? ["OSHA fluency", "Skills-based hiring", "Labor relations", "Safety culture"]
        : ["Fluidez en OSHA", "Contratación basada en habilidades", "Relaciones laborales", "Cultura de seguridad"]
    },
    'tech-saas': {
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      name: currentLabels.techSaas,
      tagline: language === 'en'
        ? "HR that moves at startup speed - Culture, comp, and compliance without overhead"
        : "HR que se mueve a velocidad de startup - Cultura, compensación y cumplimiento sin gastos generales",
      challenges: language === 'en'
        ? ["Hypergrowth scaling", "Remote team management", "Equity planning", "Tech talent retention"]
        : ["Escalamiento de hipercrecimiento", "Gestión de equipos remotos", "Planificación de equity", "Retención de talento tech"],
      solutions: language === 'en'
        ? ["Plug-and-play systems", "Remote culture building", "Comp strategy", "Tech recruiting"]
        : ["Sistemas plug-and-play", "Construcción de cultura remota", "Estrategia de compensación", "Reclutamiento tech"]
    },
    'professional-services': {
      icon: Briefcase,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700",
      name: currentLabels.professionalServices,
      tagline: language === 'en'
        ? "HR that protects your most billable asset—your people"
        : "HR que protege tu activo más facturable—tu gente",
      challenges: language === 'en'
        ? ["Billable hours pressure", "High expectations", "Succession planning", "Client relationship management"]
        : ["Presión de horas facturables", "Altas expectativas", "Planificación de sucesión", "Gestión de relaciones con clientes"],
      solutions: language === 'en'
        ? ["Rainmaker retention", "Leadership pipeline", "Client success culture", "Performance optimization"]
        : ["Retención de generadores de lluvia", "Pipeline de liderazgo", "Cultura de éxito del cliente", "Optimización de desempeño"]
    }
  };

  const stakeholderPersonas = {
    'ceo-founder': {
      icon: Crown,
      concern: language === 'en' ? "Control costs, grow fast, stay compliant" : "Controlar costos, crecer rápido, mantenerse conforme",
      messageHook: language === 'en' ? "Strategic HR muscle, minus the overhead" : "Músculo estratégico de HR, menos gastos generales",
      priorities: language === 'en'
        ? ["Growth acceleration", "Cost control", "Risk mitigation", "Culture building"]
        : ["Aceleración de crecimiento", "Control de costos", "Mitigación de riesgos", "Construcción de cultura"],
      outcomes: language === 'en'
        ? ["30% faster hiring", "25% cost reduction", "Zero compliance violations", "90% employee satisfaction"]
        : ["30% contratación más rápida", "25% reducción de costos", "Cero violaciones de cumplimiento", "90% satisfacción de empleados"]
    },
    cfo: {
      icon: DollarSign,
      concern: language === 'en' ? "Cost containment, risk management" : "Contención de costos, gestión de riesgos",
      messageHook: language === 'en' ? "Fractional spend. Full-scale compliance" : "Gasto fraccionario. Cumplimiento a gran escala",
      priorities: language === 'en'
        ? ["Budget optimization", "Compliance costs", "Risk exposure", "ROI measurement"]
        : ["Optimización de presupuesto", "Costos de cumplimiento", "Exposición al riesgo", "Medición de ROI"],
      outcomes: language === 'en'
        ? ["40% HR cost savings", "100% audit readiness", "Zero legal penalties", "3x ROI on HR investment"]
        : ["40% ahorro en costos de HR", "100% preparación para auditorías", "Cero penalidades legales", "3x ROI en inversión de HR"]
    },
    'operations-lead': {
      icon: Settings,
      concern: language === 'en' ? "Smooth execution, lower turnover" : "Ejecución fluida, menor rotación",
      messageHook: language === 'en' ? "Optimize systems, empower teams" : "Optimizar sistemas, empoderar equipos",
      priorities: language === 'en'
        ? ["Process efficiency", "Team performance", "System integration", "Quality control"]
        : ["Eficiencia de procesos", "Desempeño del equipo", "Integración de sistemas", "Control de calidad"],
      outcomes: language === 'en'
        ? ["50% faster onboarding", "35% productivity increase", "20% turnover reduction", "95% process compliance"]
        : ["50% incorporación más rápida", "35% aumento de productividad", "20% reducción de rotación", "95% cumplimiento de procesos"]
    },
    'frontline-managers': {
      icon: Users,
      concern: language === 'en' ? "Hiring, training, retention" : "Contratación, entrenamiento, retención",
      messageHook: language === 'en' ? "Plug into recruiting and coaching you can trust" : "Conéctate al reclutamiento y coaching en el que puedes confiar",
      priorities: language === 'en'
        ? ["Team building", "Performance management", "Training delivery", "Employee engagement"]
        : ["Construcción de equipos", "Gestión de desempeño", "Entrega de entrenamiento", "Compromiso de empleados"],
      outcomes: language === 'en'
        ? ["60% hiring success rate", "4.5/5 manager satisfaction", "80% internal promotions", "25% engagement boost"]
        : ["60% tasa de éxito en contratación", "4.5/5 satisfacción de gerentes", "80% promociones internas", "25% aumento de compromiso"]
    }
  };

  const lifecycleStages = {
    'startup-build': {
      icon: Rocket,
      overwatchIntervention: language === 'en'
        ? "Org design, role clarity, onboarding"
        : "Diseño organizacional, claridad de roles, incorporación",
      businessOutcome: language === 'en'
        ? "Faster ramp-up, reduced misfires"
        : "Aceleración más rápida, menos errores",
      keyMetrics: language === 'en'
        ? ["Time-to-productivity: 40% reduction", "Role clarity: 90% satisfaction", "Early retention: 85%"]
        : ["Tiempo-a-productividad: 40% reducción", "Claridad de roles: 90% satisfacción", "Retención temprana: 85%"]
    },
    'growth-scale': {
      icon: TrendingUp,
      overwatchIntervention: language === 'en'
        ? "Recruiting, leadership coaching, compliance"
        : "Reclutamiento, coaching de liderazgo, cumplimiento",
      businessOutcome: language === 'en'
        ? "Lower churn, stronger talent pipeline"
        : "Menor rotación, pipeline de talento más fuerte",
      keyMetrics: language === 'en'
        ? ["Turnover reduction: 30%", "Quality of hire: 4.2/5", "Leadership readiness: 75%"]
        : ["Reducción de rotación: 30%", "Calidad de contratación: 4.2/5", "Preparación de liderazgo: 75%"]
    },
    'transition-turmoil': {
      icon: Shield,
      overwatchIntervention: language === 'en'
        ? "Culture reinforcement, audits, retention"
        : "Refuerzo de cultura, auditorías, retención",
      businessOutcome: language === 'en'
        ? "Stability during disruption"
        : "Estabilidad durante la disrupción",
      keyMetrics: language === 'en'
        ? ["Retention during change: 80%", "Culture stability: 85%", "Transition time: 50% faster"]
        : ["Retención durante cambio: 80%", "Estabilidad cultural: 85%", "Tiempo de transición: 50% más rápido"]
    },
    'optimization-mature': {
      icon: Target,
      overwatchIntervention: language === 'en'
        ? "Process automation, performance incentives"
        : "Automatización de procesos, incentivos de desempeño",
      businessOutcome: language === 'en'
        ? "Efficiency gains, cost savings"
        : "Ganancias de eficiencia, ahorro de costos",
      keyMetrics: language === 'en'
        ? ["Process efficiency: 25% improvement", "Cost per hire: 35% reduction", "Performance scores: 4.3/5"]
        : ["Eficiencia de procesos: 25% mejora", "Costo por contratación: 35% reducción", "Puntuaciones de desempeño: 4.3/5"]
    }
  };

  const metricsData = {
    timeToHire: { current: 45, target: 28, improvement: 38 },
    complianceScore: { current: 85, target: 98, improvement: 15 },
    turnoverReduction: { current: 25, target: 15, improvement: 40 },
    engagementBoost: { current: 65, target: 85, improvement: 31 }
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
            Launch Assessment
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="tactical-briefs">{currentLabels.tacticalBriefs}</TabsTrigger>
            <TabsTrigger value="vertical-solutions">{currentLabels.verticalSolutions}</TabsTrigger>
            <TabsTrigger value="stakeholder-mapping">{currentLabels.stakeholderMapping}</TabsTrigger>
            <TabsTrigger value="lifecycle-intervention">{currentLabels.lifecycleIntervention}</TabsTrigger>
            <TabsTrigger value="metrics-dashboard">{currentLabels.metricsDashboard}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission Statement */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  Mission: Quiet Special Ops for SMBs
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Stabilize and scale people operations during chaos, complexity, and growth—without full-time overhead. We're the strategic HR muscle that adapts to your business lifecycle."
                    : "Estabilizar y escalar las operaciones de personas durante el caos, la complejidad y el crecimiento—sin gastos generales de tiempo completo. Somos el músculo estratégico de HR que se adapta al ciclo de vida de tu negocio."
                  }
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-green-400 font-bold mb-1">4 Pillars</div>
                    <div className="text-sm text-gray-400">Chaos, Complexity, Compliance, Costs</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-blue-400 font-bold mb-1">5 Verticals</div>
                    <div className="text-sm text-gray-400">Healthcare, Manufacturing, Tech, Professional Services</div>
                  </div>
                </div>
              </Card>

              {/* Value Proposition Canvas */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-400" />
                  Value Proposition Canvas
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <h4 className="text-purple-400 font-bold mb-2">Strategic Support</h4>
                    <p className="text-sm text-gray-300">On-demand expertise, custom-fit solutions, scalable engagement</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2">Operational Efficiency</h4>
                    <p className="text-sm text-gray-300">Streamlined processes, regulatory confidence, risk mitigation</p>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="text-green-400 font-bold mb-2">Talent Development</h4>
                    <p className="text-sm text-gray-300">Recruiting muscle, culture shaping, leadership coaching</p>
                  </div>
                  
                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <h4 className="text-orange-400 font-bold mb-2">Cost Control</h4>
                    <p className="text-sm text-gray-300">Fractional flexibility, bandwidth freedom, ROI optimization</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('tactical-briefs')}
                >
                  <Eye className="w-4 h-4" />
                  View Brief Cards
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('vertical-solutions')}
                >
                  <Building className="w-4 h-4" />
                  Explore Verticals
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('stakeholder-mapping')}
                >
                  <Users className="w-4 h-4" />
                  Map Stakeholders
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('metrics-dashboard')}
                >
                  <BarChart3 className="w-4 h-4" />
                  View Metrics
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Tactical Briefs */}
          <TabsContent value="tactical-briefs" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Tactical Brief Card: "OVERWATCH HR Ops — Quiet Special Ops for SMBs"
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Mission Objective */}
                <div className="space-y-6">
                  <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">Mission Objective</h4>
                    <p className="text-gray-300">
                      {language === 'en'
                        ? "Stabilize and scale people operations during chaos, complexity, and growth—without full-time overhead."
                        : "Estabilizar y escalar las operaciones de personas durante el caos, la complejidad y el crecimiento—sin gastos generales de tiempo completo."
                      }
                    </p>
                  </div>

                  <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">Core Capabilities</h4>
                    <div className="space-y-2">
                      {[
                        language === 'en' ? "On-demand strategic expertise" : "Experiencia estratégica bajo demanda",
                        language === 'en' ? "Scalable engagement models" : "Modelos de compromiso escalables", 
                        language === 'en' ? "Industry-specific solutions" : "Soluciones específicas de la industria",
                        language === 'en' ? "Compliance & risk management" : "Cumplimiento y gestión de riesgos"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stakeholder Matrix */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Stakeholder Message Matrix</h4>
                  
                  <div className="space-y-3">
                    {Object.entries(stakeholderPersonas).map(([key, persona]) => {
                      const Icon = persona.icon;
                      return (
                        <div key={key} className="p-4 bg-gray-900/50 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-5 h-5 text-orange-400" />
                            <div className="text-white font-medium">
                              {currentLabels[key.replace('-', '') as keyof typeof currentLabels] || key}
                            </div>
                          </div>
                          <div className="text-sm text-gray-400 mb-1">{persona.concern}</div>
                          <div className="text-sm text-orange-400 italic">"{persona.messageHook}"</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>

            {/* Lifecycle Mapping Brief */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Lifecycle Mapping Framework</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                {Object.entries(lifecycleStages).map(([key, stage]) => {
                  const Icon = stage.icon;
                  return (
                    <div key={key} className="p-4 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-green-400" />
                        <div className="text-white font-medium text-sm">
                          {currentLabels[key.replace('-', '') as keyof typeof currentLabels] || key}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs text-gray-400">OVERWATCH Intervention:</div>
                        <div className="text-sm text-gray-300">{stage.overwatchIntervention}</div>
                        
                        <div className="text-xs text-gray-400 mt-2">Business Outcome:</div>
                        <div className="text-sm text-green-400">{stage.businessOutcome}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* Vertical Solutions */}
          <TabsContent value="vertical-solutions" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Industry-Specific Solutions</h3>
              <div className="flex gap-2">
                {Object.keys(verticals).map((vertical) => (
                  <Button
                    key={vertical}
                    variant={selectedVertical === vertical ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedVertical(vertical as VerticalType)}
                  >
                    {verticals[vertical as VerticalType].name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Selected Vertical Details */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = verticals[selectedVertical].icon;
                    return <Icon className={`w-8 h-8 ${verticals[selectedVertical].color}`} />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold text-white">{verticals[selectedVertical].name}</h4>
                    <p className="text-gray-400">{verticals[selectedVertical].tagline}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={`p-4 ${verticals[selectedVertical].bgColor} border ${verticals[selectedVertical].borderColor} rounded-lg`}>
                    <h5 className="font-medium text-white mb-3">Key Challenges</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {verticals[selectedVertical].challenges.map((challenge, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-400" />
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 ${verticals[selectedVertical].bgColor} border ${verticals[selectedVertical].borderColor} rounded-lg`}>
                    <h5 className="font-medium text-white mb-3">OVERWATCH Solutions</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {verticals[selectedVertical].solutions.map((solution, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Vertical-Specific Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">
                  {verticals[selectedVertical].name} Success Metrics
                </h4>

                <div className="space-y-4">
                  {/* Industry-specific metrics based on selected vertical */}
                  {selectedVertical === 'healthcare' && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Nurse Retention Rate</span>
                        <span className="text-green-400 font-bold">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">HIPAA Compliance Score</span>
                        <span className="text-green-400 font-bold">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Burnout Reduction</span>
                        <span className="text-green-400 font-bold">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </>
                  )}

                  {selectedVertical === 'manufacturing' && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Safety Incident Reduction</span>
                        <span className="text-green-400 font-bold">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Skills Gap Coverage</span>
                        <span className="text-green-400 font-bold">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Production Efficiency</span>
                        <span className="text-green-400 font-bold">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </>
                  )}

                  {selectedVertical === 'tech-saas' && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Developer Retention</span>
                        <span className="text-green-400 font-bold">91%</span>
                      </div>
                      <Progress value={91} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Time-to-Productivity</span>
                        <span className="text-green-400 font-bold">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Remote Engagement</span>
                        <span className="text-green-400 font-bold">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </>
                  )}

                  {(selectedVertical === 'professional-services' || selectedVertical === 'general') && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Client Satisfaction</span>
                        <span className="text-green-400 font-bold">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Billable Utilization</span>
                        <span className="text-green-400 font-bold">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Leadership Pipeline</span>
                        <span className="text-green-400 font-bold">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </>
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Stakeholder Mapping */}
          <TabsContent value="stakeholder-mapping" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Stakeholder-Specific Messaging</h3>
              <div className="flex gap-2">
                {Object.keys(stakeholderPersonas).map((persona) => (
                  <Button
                    key={persona}
                    variant={selectedPersona === persona ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPersona(persona as StakeholderPersona)}
                  >
                    {currentLabels[persona.replace('-', '') as keyof typeof currentLabels] || persona}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Persona Details */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = stakeholderPersonas[selectedPersona].icon;
                    return <Icon className="w-8 h-8 text-blue-400" />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {currentLabels[selectedPersona.replace('-', '') as keyof typeof currentLabels] || selectedPersona}
                    </h4>
                    <p className="text-gray-400">{stakeholderPersonas[selectedPersona].concern}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h5 className="font-medium text-blue-400 mb-2">Message Hook</h5>
                    <p className="text-white italic">"{stakeholderPersonas[selectedPersona].messageHook}"</p>
                  </div>

                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h5 className="font-medium text-gray-400 mb-3">Key Priorities</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {stakeholderPersonas[selectedPersona].priorities.map((priority, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <Target className="w-3 h-3 text-blue-400" />
                          {priority}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Expected Outcomes */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Expected Outcomes</h4>

                <div className="space-y-4">
                  {stakeholderPersonas[selectedPersona].outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-green-900/20 border border-green-700 rounded-lg">
                      <span className="text-gray-300">{outcome.split(':')[0]}:</span>
                      <span className="text-green-400 font-bold">{outcome.split(':')[1]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h5 className="font-medium text-orange-400 mb-2">ROI Summary</h5>
                  <p className="text-gray-300 text-sm">
                    {language === 'en'
                      ? "Average 3.2x ROI within 6 months through strategic HR optimization and risk mitigation."
                      : "Promedio de 3.2x ROI en 6 meses a través de optimización estratégica de HR y mitigación de riesgos."
                    }
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Lifecycle Intervention */}
          <TabsContent value="lifecycle-intervention" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Lifecycle-Based Intervention Framework</h3>

              <div className="grid lg:grid-cols-4 gap-4 mb-8">
                {Object.entries(lifecycleStages).map(([key, stage]) => {
                  const Icon = stage.icon;
                  const isSelected = selectedStage === key;
                  
                  return (
                    <div 
                      key={key}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-green-900/20 border-green-700' 
                          : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                      }`}
                      onClick={() => setSelectedStage(key as LifecycleStage)}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-green-400' : 'text-gray-400'}`} />
                        <div className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                          {currentLabels[key.replace('-', '') as keyof typeof currentLabels] || key}
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500">{stage.overwatchIntervention}</p>
                    </div>
                  );
                })}
              </div>

              {/* Selected Stage Deep Dive */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    {currentLabels[selectedStage.replace('-', '') as keyof typeof currentLabels]} Stage Details
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">OVERWATCH Intervention</h5>
                      <p className="text-gray-300">{lifecycleStages[selectedStage].overwatchIntervention}</p>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Business Outcome</h5>
                      <p className="text-gray-300">{lifecycleStages[selectedStage].businessOutcome}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Key Metrics</h4>
                  
                  <div className="space-y-3">
                    {lifecycleStages[selectedStage].keyMetrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                        <span className="text-gray-300 text-sm">{metric.split(':')[0]}:</span>
                        <span className="text-green-400 font-bold">{metric.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Metrics Dashboard */}
          <TabsContent value="metrics-dashboard" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                OVERWATCH Impact Metrics Dashboard
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Key Performance Indicators */}
                <div className="space-y-6">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-green-400" />
                        <span className="text-white font-medium">Time-to-Hire Reduction</span>
                      </div>
                      <span className="text-green-400 font-bold">{metricsData.timeToHire.improvement}%</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      From {metricsData.timeToHire.current} days to {metricsData.timeToHire.target} days
                    </div>
                    <Progress value={metricsData.timeToHire.improvement} className="h-2" />
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-medium">Compliance Score</span>
                      </div>
                      <span className="text-blue-400 font-bold">{metricsData.complianceScore.target}%</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      Improved from {metricsData.complianceScore.current}% baseline
                    </div>
                    <Progress value={metricsData.complianceScore.target} className="h-2" />
                  </div>

                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium">Turnover Reduction</span>
                      </div>
                      <span className="text-purple-400 font-bold">{metricsData.turnoverReduction.improvement}%</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      From {metricsData.turnoverReduction.current}% to {metricsData.turnoverReduction.target}%
                    </div>
                    <Progress value={metricsData.turnoverReduction.improvement} className="h-2" />
                  </div>

                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-orange-400" />
                        <span className="text-white font-medium">Engagement Boost</span>
                      </div>
                      <span className="text-orange-400 font-bold">{metricsData.engagementBoost.improvement}%</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      From {metricsData.engagementBoost.current}% to {metricsData.engagementBoost.target}%
                    </div>
                    <Progress value={metricsData.engagementBoost.improvement} className="h-2" />
                  </div>
                </div>

                {/* ROI Summary */}
                <div className="space-y-6">
                  <div className="p-6 bg-gray-900/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      ROI Summary
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Average ROI</span>
                        <span className="text-green-400 font-bold text-xl">3.2x</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Payback Period</span>
                        <span className="text-green-400 font-bold">6 months</span>
                      </div>
                      
                      <div className="flex justify-between items-center">  
                        <span className="text-gray-300">Cost Savings</span>
                        <span className="text-green-400 font-bold">40%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Risk Reduction</span>
                        <span className="text-green-400 font-bold">85%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-900/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">Client Success Stories</h4>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-green-900/20 border border-green-700 rounded">
                        <div className="text-green-400 font-medium text-sm">Healthcare Clinic</div>
                        <div className="text-gray-300 text-xs">Reduced nurse turnover by 45% in 8 months</div>
                      </div>
                      
                      <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
                        <div className="text-blue-400 font-medium text-sm">Manufacturing Plant</div>
                        <div className="text-gray-300 text-xs">Zero safety incidents for 12 consecutive months</div>
                      </div>
                      
                      <div className="p-3 bg-purple-900/20 border border-purple-700 rounded">
                        <div className="text-purple-400 font-medium text-sm">Tech Startup</div>
                        <div className="text-gray-300 text-xs">Scaled from 50 to 200 employees seamlessly</div>
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