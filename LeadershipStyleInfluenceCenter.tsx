import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Crown, Users, MessageSquare, Target, TrendingUp, Brain,
  Shield, Heart, Zap, Compass, Eye, Lightbulb, Star,
  PlayCircle, BarChart3, Building, Factory, Globe,
  ChevronRight, Plus, Settings, Clock, Award, Rocket,
  CheckCircle, AlertTriangle, Info, ArrowUp, ArrowDown,
  Mic, Video, FileText, Briefcase, Coffee, BookOpen
} from 'lucide-react';

interface LeadershipStyleInfluenceCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type LeadershipStyle = 'transformational' | 'servant' | 'authentic' | 'adaptive' | 'coaching';
type InfluenceChannel = 'modeling' | 'storytelling' | 'communication' | 'feedback' | 'decision-making';
type BusinessMilestone = 'growth' | 'merger' | 'ipo' | 'restructuring' | 'crisis';

export function LeadershipStyleInfluenceCenter({ language, currentMode, onNavigate }: LeadershipStyleInfluenceCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'style-assessment' | 'influence-strategies' | 'communication-framework' | 'change-leadership' | 'measurement-dashboard' | 'implementation-guide'>('overview');
  const [selectedStyle, setSelectedStyle] = useState<LeadershipStyle>('transformational');
  const [selectedChannel, setSelectedChannel] = useState<InfluenceChannel>('modeling');
  const [selectedMilestone, setSelectedMilestone] = useState<BusinessMilestone>('growth');

  // Assessment state
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, number>>({});

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      styleAssessment: "Style Assessment",
      influenceStrategies: "Influence Strategies",
      communicationFramework: "Communication Framework",
      changeLeadership: "Change Leadership",
      measurementDashboard: "Measurement Dashboard",
      implementationGuide: "Implementation Guide",
      
      // Content
      title: "Leadership Style & Influence Center",
      subtitle: "Strategic leadership development for cultural transformation and organizational influence",
      
      // Leadership Styles
      transformational: "Transformational",
      servant: "Servant Leadership",
      authentic: "Authentic Leadership", 
      adaptive: "Adaptive Leadership",
      coaching: "Coaching Leadership",
      
      // Influence Channels
      modeling: "Behavior Modeling",
      storytelling: "Narrative Crafting",
      communication: "Communication Style",
      feedback: "Feedback Culture",
      decisionMaking: "Decision Making",
      
      // Business Milestones
      growth: "Growth Spurts",
      merger: "M&A Integration",
      ipo: "IPO Preparation",
      restructuring: "Restructuring",
      crisis: "Crisis Management"
    },
    es: {
      // Navigation
      overview: "Vista General",
      styleAssessment: "Evaluación de Estilo",
      influenceStrategies: "Estrategias de Influencia",
      communicationFramework: "Marco de Comunicación",
      changeLeadership: "Liderazgo de Cambio",
      measurementDashboard: "Panel de Medición",
      implementationGuide: "Guía de Implementación",
      
      // Content
      title: "Centro de Estilo de Liderazgo e Influencia",
      subtitle: "Desarrollo de liderazgo estratégico para transformación cultural e influencia organizacional",
      
      // Leadership Styles
      transformational: "Transformacional",
      servant: "Liderazgo Servidor",
      authentic: "Liderazgo Auténtico",
      adaptive: "Liderazgo Adaptativo", 
      coaching: "Liderazgo Coach",
      
      // Influence Channels
      modeling: "Modelado de Comportamiento",
      storytelling: "Creación de Narrativa",
      communication: "Estilo de Comunicación",
      feedback: "Cultura de Retroalimentación",
      decisionMaking: "Toma de Decisiones",
      
      // Business Milestones
      growth: "Períodos de Crecimiento",
      merger: "Integración M&A",
      ipo: "Preparación IPO",
      restructuring: "Reestructuración",
      crisis: "Gestión de Crisis"
    }
  };

  const currentLabels = labels[language];

  const leadershipStyles = {
    transformational: {
      icon: Rocket,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      description: language === 'en' 
        ? "Inspires and motivates teams toward a shared vision through charisma and intellectual stimulation"
        : "Inspira y motiva equipos hacia una visión compartida a través del carisma y estimulación intelectual",
      keyBehaviors: language === 'en'
        ? ["Visionary thinking", "Inspirational motivation", "Intellectual stimulation", "Individual consideration"]
        : ["Pensamiento visionario", "Motivación inspiracional", "Estimulación intelectual", "Consideración individual"],
      culturalImpact: language === 'en'
        ? "Creates culture of innovation, risk-taking, and continuous improvement"
        : "Crea cultura de innovación, toma de riesgos y mejoramiento continuo",
      bestFor: language === 'en' ? "Rapid growth, innovation initiatives, major transformations" : "Crecimiento rápido, iniciativas de innovación, transformaciones mayores"
    },
    servant: {
      icon: Heart,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      description: language === 'en'
        ? "Prioritizes serving others and empowering team members to reach their full potential"
        : "Prioriza servir a otros y empoderar miembros del equipo para alcanzar su máximo potencial",
      keyBehaviors: language === 'en'
        ? ["Empathy and listening", "Stewardship", "Community building", "Healing and restoration"]
        : ["Empatía y escucha", "Administración", "Construcción de comunidad", "Sanación y restauración"],
      culturalImpact: language === 'en'
        ? "Builds trust, psychological safety, and strong collaborative relationships"
        : "Construye confianza, seguridad psicológica y relaciones colaborativas fuertes",
      bestFor: language === 'en' ? "Post-crisis recovery, team rebuilding, cultural healing" : "Recuperación post-crisis, reconstrucción de equipos, sanación cultural"
    },
    authentic: {
      icon: Shield,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700",
      description: language === 'en'
        ? "Leads with genuine self-awareness, transparency, and consistency between values and actions"
        : "Lidera con autoconciencia genuina, transparencia y consistencia entre valores y acciones",
      keyBehaviors: language === 'en'
        ? ["Self-awareness", "Relational transparency", "Balanced processing", "Moral perspective"]
        : ["Autoconciencia", "Transparencia relacional", "Procesamiento equilibrado", "Perspectiva moral"],
      culturalImpact: language === 'en'
        ? "Establishes integrity, ethical decision-making, and organizational trustworthiness"
        : "Establece integridad, toma de decisiones éticas y confiabilidad organizacional",
      bestFor: language === 'en' ? "Trust rebuilding, ethical transformations, values alignment" : "Reconstrucción de confianza, transformaciones éticas, alineación de valores"
    },
    adaptive: {
      icon: Compass,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700",
      description: language === 'en'
        ? "Flexibly adjusts leadership approach based on situational demands and follower needs"
        : "Ajusta flexiblemente el enfoque de liderazgo basado en demandas situacionales y necesidades de seguidores",
      keyBehaviors: language === 'en'
        ? ["Situational awareness", "Flexible response", "Continuous learning", "Agile decision-making"]
        : ["Conciencia situacional", "Respuesta flexible", "Aprendizaje continuo", "Toma de decisiones ágil"],
      culturalImpact: language === 'en'
        ? "Promotes agility, resilience, and adaptive capacity across the organization"
        : "Promueve agilidad, resistencia y capacidad adaptativa a través de la organización",
      bestFor: language === 'en' ? "Volatile markets, rapid change, complex problem-solving" : "Mercados volátiles, cambio rápido, resolución de problemas complejos"
    },
    coaching: {
      icon: Target,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-700",
      description: language === 'en'
        ? "Focuses on developing others through questioning, listening, and providing guidance for growth"
        : "Se enfoca en desarrollar otros a través de preguntas, escucha y proporcionar orientación para crecimiento",
      keyBehaviors: language === 'en'
        ? ["Active listening", "Powerful questioning", "Goal-oriented development", "Feedback mastery"]
        : ["Escucha activa", "Preguntas poderosas", "Desarrollo orientado a objetivos", "Maestría en retroalimentación"],
      culturalImpact: language === 'en'
        ? "Creates learning organization with continuous development and knowledge sharing"
        : "Crea organización de aprendizaje con desarrollo continuo y compartir conocimiento",
      bestFor: language === 'en' ? "Talent development, succession planning, performance improvement" : "Desarrollo de talento, planificación de sucesión, mejoramiento de desempeño"
    }
  };

  const influenceChannels = {
    modeling: {
      title: language === 'en' ? "Behavior Modeling" : "Modelado de Comportamiento",
      description: language === 'en' 
        ? "Leading by example and demonstrating desired behaviors consistently"
        : "Liderar con el ejemplo y demostrar comportamientos deseados consistentemente",
      strategies: language === 'en'
        ? ["Embody core values daily", "Show vulnerability and learning", "Demonstrate work-life integration", "Practice transparent decision-making"]
        : ["Encarnar valores centrales diariamente", "Mostrar vulnerabilidad y aprendizaje", "Demostrar integración trabajo-vida", "Practicar toma de decisiones transparente"],
      metrics: language === 'en'
        ? ["Leadership consistency score", "Values alignment rating", "Employee modeling survey", "360-degree feedback"]
        : ["Puntaje de consistencia de liderazgo", "Calificación de alineación de valores", "Encuesta de modelado de empleados", "Retroalimentación 360 grados"]
    },
    storytelling: {
      title: language === 'en' ? "Narrative Crafting" : "Creación de Narrativa",
      description: language === 'en'
        ? "Using stories to connect work to purpose and reinforce cultural messages"
        : "Usar historias para conectar trabajo con propósito y reforzar mensajes culturales",
      strategies: language === 'en'
        ? ["Share origin stories and mission", "Highlight employee success stories", "Create change narratives", "Use metaphors and analogies"]
        : ["Compartir historias de origen y misión", "Destacar historias de éxito de empleados", "Crear narrativas de cambio", "Usar metáforas y analogías"],
      metrics: language === 'en'
        ? ["Story retention rates", "Message clarity scores", "Narrative engagement", "Cultural story proliferation"]
        : ["Tasas de retención de historias", "Puntajes de claridad de mensaje", "Compromiso narrativo", "Proliferación de historias culturales"]
    },
    communication: {
      title: language === 'en' ? "Communication Style" : "Estilo de Comunicación",
      description: language === 'en'
        ? "Adapting communication approach to build trust and psychological safety"
        : "Adaptar enfoque de comunicación para construir confianza y seguridad psicológica",
      strategies: language === 'en'
        ? ["Active listening practices", "Multi-channel communication", "Clear and direct messaging", "Cultural sensitivity"]
        : ["Prácticas de escucha activa", "Comunicación multicanal", "Mensajería clara y directa", "Sensibilidad cultural"],
      metrics: language === 'en'
        ? ["Communication effectiveness", "Message reach and frequency", "Feedback response rates", "Trust and safety scores"]
        : ["Efectividad de comunicación", "Alcance y frecuencia de mensaje", "Tasas de respuesta de retroalimentación", "Puntajes de confianza y seguridad"]
    },
    feedback: {
      title: language === 'en' ? "Feedback Culture" : "Cultura de Retroalimentación",
      description: language === 'en'
        ? "Creating systems for continuous feedback and learning conversations"
        : "Crear sistemas para retroalimentación continua y conversaciones de aprendizaje",
      strategies: language === 'en'
        ? ["Regular one-on-ones", "360-degree feedback systems", "Peer feedback mechanisms", "Real-time performance conversations"]
        : ["Reuniones uno-a-uno regulares", "Sistemas de retroalimentación 360", "Mecanismos de retroalimentación de pares", "Conversaciones de desempeño en tiempo real"],
      metrics: language === 'en'
        ? ["Feedback frequency", "Quality of conversations", "Response to feedback", "Development progress tracking"]
        : ["Frecuencia de retroalimentación", "Calidad de conversaciones", "Respuesta a retroalimentación", "Seguimiento de progreso de desarrollo"]
    },
    'decision-making': {
      title: language === 'en' ? "Decision Making" : "Toma de Decisiones",
      description: language === 'en'
        ? "Involving stakeholders in decisions and explaining rationale transparently"
        : "Involucrar stakeholders en decisiones y explicar razones transparentemente",
      strategies: language === 'en'
        ? ["Inclusive decision processes", "Transparent rationale sharing", "Stakeholder consultation", "Decision impact communication"]
        : ["Procesos de decisión inclusivos", "Compartir razonamiento transparente", "Consulta de stakeholders", "Comunicación de impacto de decisiones"],
      metrics: language === 'en'
        ? ["Decision quality scores", "Stakeholder buy-in rates", "Implementation success", "Decision transparency ratings"]
        : ["Puntajes de calidad de decisión", "Tasas de aceptación de stakeholders", "Éxito de implementación", "Calificaciones de transparencia de decisión"]
    }
  };

  const businessMilestones = {
    growth: {
      icon: TrendingUp,
      challenges: language === 'en'
        ? ["Scaling culture", "Maintaining intimacy", "Leader bandwidth", "Process formalization"]
        : ["Escalar cultura", "Mantener intimidad", "Ancho de banda de líder", "Formalización de procesos"],
      leadershipRole: language === 'en'
        ? "Scale vision and systems while preserving cultural DNA"
        : "Escalar visión y sistemas mientras se preserva el ADN cultural",
      strategies: language === 'en'
        ? ["Create culture ambassadors", "Develop middle management", "Standardize onboarding", "Implement feedback loops"]
        : ["Crear embajadores de cultura", "Desarrollar gestión media", "Estandarizar incorporación", "Implementar bucles de retroalimentación"]
    },
    merger: {
      icon: Building,
      challenges: language === 'en'
        ? ["Cultural integration", "Identity preservation", "Talent retention", "Process alignment"]
        : ["Integración cultural", "Preservación de identidad", "Retención de talento", "Alineación de procesos"],
      leadershipRole: language === 'en'
        ? "Unite teams and values while respecting cultural heritage"
        : "Unir equipos y valores mientras se respeta herencia cultural",
      strategies: language === 'en'
        ? ["Cultural due diligence", "Integration ceremonies", "Cross-team collaboration", "Shared success stories"]
        : ["Diligencia debida cultural", "Ceremonias de integración", "Colaboración entre equipos", "Historias de éxito compartidas"]
    },
    ipo: {
      icon: Globe,
      challenges: language === 'en'
        ? ["Public scrutiny", "Process formalization", "Compliance requirements", "Stakeholder communication"]
        : ["Escrutinio público", "Formalización de procesos", "Requisitos de cumplimiento", "Comunicación de stakeholders"],
      leadershipRole: language === 'en'
        ? "Professionalize operations while maintaining entrepreneurial spirit"
        : "Profesionalizar operaciones mientras se mantiene espíritu emprendedor",
      strategies: language === 'en'
        ? ["Investor storytelling", "Governance frameworks", "Public communication training", "Cultural preservation initiatives"]
        : ["Narrativa para inversionistas", "Marcos de gobernanza", "Entrenamiento de comunicación pública", "Iniciativas de preservación cultural"]
    },
    restructuring: {
      icon: Settings,
      challenges: language === 'en'
        ? ["Role clarity", "Morale management", "Communication gaps", "Change resistance"]
        : ["Claridad de roles", "Gestión de moral", "Brechas de comunicación", "Resistencia al cambio"],
      leadershipRole: language === 'en'
        ? "Navigate ambiguity while maintaining team confidence"
        : "Navegar ambigüedad mientras se mantiene confianza del equipo",
      strategies: language === 'en'
        ? ["Transparent communication", "Frequent check-ins", "Role redefinition workshops", "Success milestone celebrations"]
        : ["Comunicación transparente", "Revisiones frecuentes", "Talleres de redefinición de roles", "Celebraciones de hitos de éxito"]
    },
    crisis: {
      icon: Shield,
      challenges: language === 'en'
        ? ["Rapid decision making", "Stakeholder confidence", "Resource constraints", "Future uncertainty"]
        : ["Toma de decisiones rápida", "Confianza de stakeholders", "Restricciones de recursos", "Incertidumbre futura"],
      leadershipRole: language === 'en'
        ? "Provide stability and direction during turbulent times"
        : "Proporcionar estabilidad y dirección durante tiempos turbulentos",
      strategies: language === 'en'
        ? ["Crisis communication protocols", "Rapid response teams", "Stakeholder updates", "Recovery planning"]
        : ["Protocolos de comunicación de crisis", "Equipos de respuesta rápida", "Actualizaciones de stakeholders", "Planificación de recuperación"]
    }
  };

  const assessmentQuestions = [
    {
      id: 'vision',
      question: language === 'en' 
        ? "I regularly communicate a compelling vision that inspires others"
        : "Comunico regularmente una visión convincente que inspira a otros",
      style: 'transformational'
    },
    {
      id: 'empathy',
      question: language === 'en'
        ? "I prioritize understanding and serving the needs of my team members"
        : "Priorizo entender y servir las necesidades de los miembros de mi equipo",
      style: 'servant'
    },
    {
      id: 'authenticity',
      question: language === 'en'
        ? "I am transparent about my strengths, weaknesses, and decision-making process"
        : "Soy transparente sobre mis fortalezas, debilidades y proceso de toma de decisiones",
      style: 'authentic'
    },
    {
      id: 'adaptability',
      question: language === 'en'
        ? "I adjust my leadership approach based on the situation and individual needs"
        : "Ajusto mi enfoque de liderazgo basado en la situación y necesidades individuales",
      style: 'adaptive'
    },
    {
      id: 'coaching',
      question: language === 'en'
        ? "I focus on developing others through questioning and guidance rather than telling"
        : "Me enfoco en desarrollar otros a través de preguntas y orientación en lugar de decir",
      style: 'coaching'
    }
  ];

  const calculateAssessmentResult = () => {
    const styleScores: Record<LeadershipStyle, number> = {
      transformational: 0,
      servant: 0,
      authentic: 0,
      adaptive: 0,
      coaching: 0
    };

    assessmentQuestions.forEach(q => {
      const score = assessmentAnswers[q.id] || 0;
      styleScores[q.style as LeadershipStyle] += score;
    });

    const maxScore = Math.max(...Object.values(styleScores));
    const primaryStyle = Object.keys(styleScores).find(
      style => styleScores[style as LeadershipStyle] === maxScore
    ) as LeadershipStyle;

    return { styleScores, primaryStyle };
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
            Launch Leadership Assessment
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="style-assessment">{currentLabels.styleAssessment}</TabsTrigger>
            <TabsTrigger value="influence-strategies">{currentLabels.influenceStrategies}</TabsTrigger>
            <TabsTrigger value="communication-framework">{currentLabels.communicationFramework}</TabsTrigger>
            <TabsTrigger value="change-leadership">{currentLabels.changeLeadership}</TabsTrigger>
            <TabsTrigger value="measurement-dashboard">{currentLabels.measurementDashboard}</TabsTrigger>
            <TabsTrigger value="implementation-guide">{currentLabels.implementationGuide}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Leadership Influence Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Crown className="w-6 h-6 text-blue-400" />
                  Leadership Influence Framework
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Leaders are cultural architects who shape organizational identity through five key influence channels during critical business moments."
                    : "Los líderes son arquitectos culturales que moldean la identidad organizacional a través de cinco canales de influencia clave durante momentos empresariales críticos."
                  }
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <h4 className="text-blue-400 font-bold">Behavior Modeling</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Embody values and demonstrate desired behaviors consistently across all interactions"
                        : "Encarnar valores y demostrar comportamientos deseados consistentemente en todas las interacciones"
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      <h4 className="text-green-400 font-bold">Narrative Crafting</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Share stories that connect daily work to mission and reinforce cultural messages"
                        : "Compartir historias que conectan trabajo diario con misión y refuerzan mensajes culturales"
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                      <h4 className="text-purple-400 font-bold">Communication Style</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Adapt communication approach to build psychological safety and trust"
                        : "Adaptar enfoque de comunicación para construir seguridad psicológica y confianza"
                      }
                    </p>
                  </div>
                </div>
              </Card>

              {/* Leadership Impact Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                  Leadership Impact Metrics
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">87%</div>
                    <div className="text-sm text-gray-400">
                      {language === 'en' ? "Culture alignment improvement" : "Mejora de alineación cultural"}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-xl font-bold text-blue-400">65%</div>
                      <div className="text-xs text-gray-400">
                        {language === 'en' ? "Employee engagement" : "Compromiso de empleados"}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <div className="text-xl font-bold text-purple-400">34%</div>
                      <div className="text-xs text-gray-400">
                        {language === 'en' ? "Retention increase" : "Aumento de retención"}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <h4 className="font-medium text-orange-400 mb-2">
                      {language === 'en' ? "Cultural Transformation Success" : "Éxito de Transformación Cultural"}
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• {language === 'en' ? "Leadership consistency: 92%" : "Consistencia de liderazgo: 92%"}</li>
                      <li>• {language === 'en' ? "Message clarity: 89%" : "Claridad de mensaje: 89%"}</li>
                      <li>• {language === 'en' ? "Trust scores: 85%" : "Puntajes de confianza: 85%"}</li>
                    </ul>
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
                  onClick={() => setActiveTab('style-assessment')}
                >
                  <Target className="w-4 h-4" />
                  Take Assessment
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('influence-strategies')}
                >
                  <Crown className="w-4 h-4" />
                  Influence Strategies
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('communication-framework')}
                >
                  <MessageSquare className="w-4 h-4" />
                  Communication Tools
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('change-leadership')}
                >
                  <Rocket className="w-4 h-4" />
                  Change Leadership
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Style Assessment */}
          <TabsContent value="style-assessment" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-400" />
                Leadership Style Assessment
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Assessment Questions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Assessment Questions</h4>
                  
                  <div className="space-y-6">
                    {assessmentQuestions.map((question, idx) => (
                      <div key={question.id} className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-3">
                          {idx + 1}. {question.question}
                        </h5>
                        
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((score) => (
                            <button
                              key={score}
                              onClick={() => setAssessmentAnswers({
                                ...assessmentAnswers,
                                [question.id]: score
                              })}
                              className={`w-10 h-10 rounded-full border-2 transition-colors ${
                                assessmentAnswers[question.id] === score
                                  ? 'bg-blue-600 border-blue-400 text-white'
                                  : 'border-gray-600 text-gray-400 hover:border-gray-500'
                              }`}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>{language === 'en' ? 'Strongly Disagree' : 'Muy en Desacuerdo'}</span>
                          <span>{language === 'en' ? 'Strongly Agree' : 'Muy de Acuerdo'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Assessment Results</h4>
                  
                  {Object.keys(assessmentAnswers).length === assessmentQuestions.length ? (
                    <div className="space-y-4">
                      {(() => {
                        const { styleScores, primaryStyle } = calculateAssessmentResult();
                        const maxScore = Math.max(...Object.values(styleScores));
                        
                        return (
                          <>
                            <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg mb-6">
                              <h5 className="font-medium text-green-400 mb-2">Primary Leadership Style</h5>
                              <div className="text-xl font-bold text-white">
                                {currentLabels[primaryStyle as keyof typeof currentLabels]}
                              </div>
                            </div>

                            {Object.entries(styleScores).map(([style, score]) => (
                              <div key={style} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-white font-medium">
                                    {currentLabels[style as keyof typeof currentLabels]}
                                  </span>
                                  <span className="text-gray-400">{score}/25</span>
                                </div>
                                <Progress value={(score / 25) * 100} className="h-2" />
                              </div>
                            ))}

                            <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg mt-6">
                              <h5 className="font-medium text-blue-400 mb-2">Development Recommendations</h5>
                              <ul className="text-gray-300 text-sm space-y-1">
                                <li>• {language === 'en' ? 'Focus on your primary style strengths' : 'Enfócate en fortalezas de tu estilo principal'}</li>
                                <li>• {language === 'en' ? 'Develop secondary styles for flexibility' : 'Desarrolla estilos secundarios para flexibilidad'}</li>
                                <li>• {language === 'en' ? 'Practice situational adaptation' : 'Practica adaptación situacional'}</li>
                              </ul>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="p-8 bg-gray-900/50 rounded-lg text-center">
                      <div className="text-gray-400 mb-4">
                        {language === 'en' 
                          ? 'Complete all questions to see your results'
                          : 'Completa todas las preguntas para ver tus resultados'
                        }
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {Object.keys(assessmentAnswers).length}/{assessmentQuestions.length}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Leadership Styles Reference */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Leadership Styles Reference</h4>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {Object.entries(leadershipStyles).slice(0, 4).map(([key, style]) => {
                  const Icon = style.icon;
                  return (
                    <div key={key} className={`p-4 ${style.bgColor} border ${style.borderColor} rounded-lg`}>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-6 h-6 ${style.color}`} />
                        <h5 className="font-bold text-white">
                          {currentLabels[key as keyof typeof currentLabels]}
                        </h5>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{style.description}</p>
                      <div className="text-xs text-gray-400">
                        <strong>Best for:</strong> {style.bestFor}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* Influence Strategies */}
          <TabsContent value="influence-strategies" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Strategic Influence Channels</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(influenceChannels).map((channel) => (
                  <Button
                    key={channel}
                    variant={selectedChannel === channel ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedChannel(channel as InfluenceChannel)}
                  >
                    {channel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Channel Details */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {influenceChannels[selectedChannel].title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6">
                    {influenceChannels[selectedChannel].description}
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Key Strategies</h5>
                      <div className="space-y-2">
                        {influenceChannels[selectedChannel].strategies.map((strategy, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                            {strategy}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Success Metrics</h5>
                      <div className="space-y-2">
                        {influenceChannels[selectedChannel].metrics.map((metric, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <BarChart3 className="w-3 h-3 text-green-400" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Examples */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Implementation Examples</h4>
                  
                  {selectedChannel === 'modeling' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Daily Practices</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Arrive early and stay focused during meetings</li>
                          <li>• Acknowledge mistakes and show learning</li>
                          <li>• Practice active listening with all team members</li>
                          <li>• Demonstrate work-life balance through actions</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Crisis Moments</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Remain calm and solution-focused</li>
                          <li>• Show transparency about challenges</li>
                          <li>• Take responsibility for team outcomes</li>
                          <li>• Maintain optimism while being realistic</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedChannel === 'storytelling' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Story Categories</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Origin stories (company founding, mission)</li>
                          <li>• Challenge stories (overcoming obstacles)</li>
                          <li>• Success stories (team achievements)</li>
                          <li>• Vision stories (future possibilities)</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Delivery Channels</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• All-hands meetings and town halls</li>
                          <li>• One-on-one conversations</li>
                          <li>• Written communications and emails</li>
                          <li>• Informal conversations and mentoring</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Add similar examples for other channels */}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Communication Framework */}
          <TabsContent value="communication-framework" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                Strategic Communication Framework
              </h3>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Communication Styles */}
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-medium text-purple-400 mb-4">Communication Styles</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Directive</div>
                      <div className="text-gray-400 text-xs">Clear instructions, decisions made top-down</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Consultative</div>
                      <div className="text-gray-400 text-xs">Seek input before making decisions</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Participative</div>
                      <div className="text-gray-400 text-xs">Collaborative decision-making process</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Delegative</div>
                      <div className="text-gray-400 text-xs">Empower others to make decisions</div>
                    </div>
                  </div>
                </div>

                {/* Communication Channels */}
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-medium text-blue-400 mb-4">Communication Channels</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Town Halls</div>
                      <div className="text-gray-400 text-xs">Large group, formal announcements</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Team Meetings</div>
                      <div className="text-gray-400 text-xs">Regular team updates and discussions</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">One-on-Ones</div>
                      <div className="text-gray-400 text-xs">Personal development and feedback</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Digital Platforms</div>
                      <div className="text-gray-400 text-xs">Slack, email, internal social networks</div>
                    </div>
                  </div>
                </div>

                {/* Message Types */}
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-4">Message Types</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Vision & Strategy</div>
                      <div className="text-gray-400 text-xs">Future direction and goals</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Operational Updates</div>
                      <div className="text-gray-400 text-xs">Process changes and improvements</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Recognition</div>
                      <div className="text-gray-400 text-xs">Celebrating achievements and milestones</div>
                    </div>
                    <div className="p-3 bg-gray-900/50 rounded">
                      <div className="font-medium text-white text-sm">Learning & Development</div>
                      <div className="text-gray-400 text-xs">Growth opportunities and feedback</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Planning Tool */}
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Communication Planning Template</h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Message Objective</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        placeholder="What do you want to achieve with this communication?"
                        rows={2}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Target Audience</label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm">
                        <option>All employees</option>
                        <option>Leadership team</option>
                        <option>Department heads</option>
                        <option>Specific team</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Communication Style</label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm">
                        <option>Directive</option>
                        <option>Consultative</option>
                        <option>Participative</option>
                        <option>Delegative</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Primary Channel</label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm">
                        <option>Town Hall</option>
                        <option>Team Meeting</option>
                        <option>One-on-One</option>
                        <option>Email/Digital</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Key Message</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        placeholder="Core message in 1-2 sentences"
                        rows={2}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Success Metrics</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                        placeholder="How will you measure communication effectiveness?"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Generate Communication Plan
                  </Button>
                  <Button variant="outline">
                    Save Template
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Change Leadership */}
          <TabsContent value="change-leadership" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Change Leadership by Business Milestone</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(businessMilestones).map((milestone) => (
                  <Button
                    key={milestone}
                    variant={selectedMilestone === milestone ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMilestone(milestone as BusinessMilestone)}
                  >
                    {currentLabels[milestone as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Milestone Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = businessMilestones[selectedMilestone].icon;
                      return <Icon className="w-8 h-8 text-orange-400" />;
                    })()}
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {currentLabels[selectedMilestone as keyof typeof currentLabels]}
                      </h4>
                      <p className="text-gray-400">Change Leadership Strategy</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-3">Key Challenges</h5>
                      <div className="space-y-1">
                        {businessMilestones[selectedMilestone].challenges.map((challenge, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Leadership Role</h5>
                      <p className="text-gray-300 text-sm">{businessMilestones[selectedMilestone].leadershipRole}</p>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Recommended Strategies</h5>
                      <div className="space-y-1">
                        {businessMilestones[selectedMilestone].strategies.map((strategy, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {strategy}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Playbook */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Implementation Playbook</h4>
                  
                  {selectedMilestone === 'growth' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Week 1-2: Foundation</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Assess current culture and identify core values</li>
                          <li>• Select and train culture ambassadors</li>
                          <li>• Design scalable communication systems</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Week 3-6: Implementation</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Roll out new onboarding program</li>
                          <li>• Establish regular feedback mechanisms</li>
                          <li>• Create middle management development tracks</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Week 7-12: Optimization</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Monitor culture metrics and adjust</li>
                          <li>• Celebrate early wins and success stories</li>
                          <li>• Plan for next phase of growth</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedMilestone === 'merger' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Pre-Close: Due Diligence</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Conduct cultural assessment of both organizations</li>
                          <li>• Identify cultural synergies and conflicts</li>
                          <li>• Plan integration communication strategy</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Day 1-30: Integration Launch</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Joint leadership announcements</li>
                          <li>• Cross-team integration activities</li>
                          <li>• Establish unified communication channels</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Day 31-100: Cultural Alignment</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Co-create new shared values and norms</li>
                          <li>• Implement integrated processes and systems</li>
                          <li>• Measure and adjust cultural integration</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Add similar playbooks for other milestones */}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Measurement Dashboard */}
          <TabsContent value="measurement-dashboard" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                Leadership Influence Measurement Dashboard
              </h3>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Leadership Effectiveness */}
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-4">Leadership Effectiveness</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Consistency Score</span>
                      <span className="text-green-400 font-bold">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Values Alignment</span>
                      <span className="text-green-400 font-bold">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Employee Trust</span>
                      <span className="text-green-400 font-bold">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>

                {/* Communication Impact */}
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-medium text-blue-400 mb-4">Communication Impact</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Message Clarity</span>
                      <span className="text-blue-400 font-bold">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Reach & Frequency</span>
                      <span className="text-blue-400 font-bold">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Feedback Response</span>
                      <span className="text-blue-400 font-bold">76%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                </div>

                {/* Cultural Transformation */}
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-medium text-purple-400 mb-4">Cultural Transformation</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Culture Alignment</span>
                      <span className="text-purple-400 font-bold">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Change Adoption</span>
                      <span className="text-purple-400 font-bold">83%</span>
                    </div>
                    <Progress value={83} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Employee Engagement</span>
                      <span className="text-purple-400 font-bold">79%</span>
                    </div>
                    <Progress value={79} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Leading Indicators</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Behavioral Metrics</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Leadership consistency ratings: 4.6/5</li>
                        <li>• Story sharing frequency: 23/month</li>
                        <li>• One-on-one completion rate: 96%</li>
                        <li>• Feedback quality scores: 4.3/5</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Communication Metrics</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Town hall attendance: 94%</li>
                        <li>• Message comprehension: 87%</li>
                        <li>• Channel engagement rates: 78%</li>
                        <li>• Feedback response time: 2.3 days avg</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Lagging Indicators</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Organizational Health</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Employee retention: 94%</li>
                        <li>• Internal promotion rate: 72%</li>
                        <li>• Employee Net Promoter Score: +48</li>
                        <li>• Culture survey scores: 4.2/5</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Business Impact</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Revenue per employee: +18%</li>
                        <li>• Customer satisfaction: 4.7/5</li>
                        <li>• Innovation pipeline: 34 active projects</li>
                        <li>• Time to market: -23% improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Guide */}
          <TabsContent value="implementation-guide" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-400" />
                Leadership Development Implementation Guide
              </h3>

              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">Phase 1: Assessment & Foundation (Month 1)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Self-Assessment</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Complete leadership style assessment</li>
                        <li>• 360-degree feedback collection</li>
                        <li>• Identify strengths and development areas</li>
                        <li>• Set leadership goals and metrics</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Team Analysis</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Assess current team culture</li>
                        <li>• Identify key stakeholders and influencers</li>
                        <li>• Map communication preferences</li>
                        <li>• Establish baseline metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="text-lg font-bold text-green-400 mb-4">Phase 2: Strategy Development (Month 2)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Influence Strategy</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Select primary influence channels</li>
                        <li>• Develop behavior modeling plan</li>
                        <li>• Create storytelling content library</li>
                        <li>• Design communication framework</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Implementation Planning</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Set development milestones</li>
                        <li>• Create accountability systems</li>
                        <li>• Plan skill-building activities</li>
                        <li>• Establish measurement protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">Phase 3: Active Implementation (Months 3-6)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Daily Practices</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implement behavior modeling</li>
                        <li>• Practice storytelling techniques</li>
                        <li>• Execute communication plans</li>
                        <li>• Conduct regular feedback sessions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Monitoring & Adjustment</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Track leading and lagging indicators</li>
                        <li>• Collect stakeholder feedback</li>
                        <li>• Adjust strategies based on results</li>
                        <li>• Document lessons learned</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="p-6 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-400 mb-4">Phase 4: Optimization & Scale (Months 7-12)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Continuous Improvement</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Refine influence strategies</li>
                        <li>• Advanced skill development</li>
                        <li>• Mentor other leaders</li>
                        <li>• Share best practices</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Organizational Impact</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Scale successful practices</li>
                        <li>• Build leadership pipeline</li>
                        <li>• Measure cultural transformation</li>
                        <li>• Plan future development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Factors */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Critical Success Factors</h4>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-green-400 mb-4">Enablers</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Executive Support</div>
                        <div className="text-gray-400 text-sm">Leadership development is prioritized and resourced</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Cultural Readiness</div>
                        <div className="text-gray-400 text-sm">Organization values learning and feedback</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Measurement Systems</div>
                        <div className="text-gray-400 text-sm">Clear metrics and regular feedback loops</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-red-400 mb-4">Risk Factors</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Inconsistent Application</div>
                        <div className="text-gray-400 text-sm">Leaders not modeling desired behaviors consistently</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Change Fatigue</div>
                        <div className="text-gray-400 text-sm">Too many initiatives without adequate support</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Poor Communication</div>
                        <div className="text-gray-400 text-sm">Unclear expectations or insufficient feedback</div>
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