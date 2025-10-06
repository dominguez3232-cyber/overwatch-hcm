import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  BookOpen, Users, Target, Lightbulb, MessageSquare, Eye,
  PlayCircle, Star, Heart, Brain, Shield, Compass, Zap,
  ChevronRight, ChevronLeft, Search, Filter, Plus,
  Download, Share, Bookmark, Clock, TrendingUp,
  Volume2, Mic, Video, FileText, Image, Settings,
  CheckCircle, AlertTriangle, Info, Award, Crown,
  Rocket, Anchor, Globe, Coffee, Briefcase, Factory
} from 'lucide-react';

interface StrategicStorytellingCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type StoryFramework = 'sell' | 'motivate' | 'convince' | 'connect' | 'explain' | 'lead' | 'impress';
type StoryArchetype = 'dragon-city' | 'man-hole' | 'rags-riches' | 'pride-fall' | 'voyage-return' | 'happy-endings';
type ConversationTool = 'story-listening' | 'icebreakers' | 'emotional-dashboard' | 'five-ts' | 'movie-time';

export function StrategicStorytellingCenter({ language, currentMode, onNavigate }: StrategicStorytellingCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'frameworks' | 'archetypes' | 'conversation-tools' | 'hr-cx-adaptation' | 'story-bank' | 'influence-playbook'>('overview');
  const [selectedFramework, setSelectedFramework] = useState<StoryFramework>('sell');
  const [selectedArchetype, setSelectedArchetype] = useState<StoryArchetype>('dragon-city');
  const [selectedTool, setSelectedTool] = useState<ConversationTool>('story-listening');

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      frameworks: "Story Frameworks",
      archetypes: "Story Archetypes", 
      conversationTools: "Conversation Tools",
      hrCxAdaptation: "HR-CX Adaptation",
      storyBank: "Story Bank",
      influencePlaybook: "Influence Playbook",
      
      // Content
      title: "Strategic Storytelling Center",
      subtitle: "Narrative-driven influence arsenal for HR-CX transformation and stakeholder engagement",
      
      // Frameworks
      sell: "Stories That Sell",
      motivate: "Stories That Motivate", 
      convince: "Stories That Convince",
      connect: "Stories That Connect",
      explain: "Stories That Explain",
      lead: "Stories That Lead",
      impress: "Stories That Impress",
      
      // Archetypes
      dragonCity: "Dragon & The City",
      manHole: "Man In A Hole",
      ragsRiches: "Rags to Riches",
      prideFall: "Pride & Fall",
      voyageReturn: "Voyage & Return",
      happyEndings: "Happy Ever Afters"
    },
    es: {
      // Navigation
      overview: "Vista General",
      frameworks: "Marcos de Historias",
      archetypes: "Arquetipos de Historias",
      conversationTools: "Herramientas de Conversación", 
      hrCxAdaptation: "Adaptación HR-CX",
      storyBank: "Banco de Historias",
      influencePlaybook: "Manual de Influencia",
      
      // Content
      title: "Centro de Narrativa Estratégica",
      subtitle: "Arsenal de influencia basado en narrativas para transformación HR-CX y compromiso de stakeholders",
      
      // Frameworks
      sell: "Historias Que Venden",
      motivate: "Historias Que Motivan",
      convince: "Historias Que Convencen", 
      connect: "Historias Que Conectan",
      explain: "Historias Que Explican",
      lead: "Historias Que Lideran",
      impress: "Historias Que Impresionan",
      
      // Archetypes
      dragonCity: "Dragón y La Ciudad",
      manHole: "Hombre En Un Hoyo",
      ragsRiches: "De Harapos a Riquezas",
      prideFall: "Orgullo y Caída",
      voyageReturn: "Viaje y Regreso", 
      happyEndings: "Finales Felices"
    }
  };

  const currentLabels = labels[language];

  const storyFrameworks = {
    sell: {
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      purpose: language === 'en' 
        ? "Reduce perceived risk through relatable proof and social validation"
        : "Reducir el riesgo percibido a través de pruebas relacionables y validación social",
      techniques: language === 'en'
        ? ["Simple Sales Stories", "Social Proof", "Audience Profile", "Innovation Curve"]
        : ["Historias de Ventas Simples", "Prueba Social", "Perfil de Audiencia", "Curva de Innovación"],
      hrCxApplication: language === 'en'
        ? "Map stakeholder personas to relatable success stories, use testimonials and adoption metrics for credibility"
        : "Mapear personas de stakeholders a historias de éxito relacionables, usar testimoniales y métricas de adopción para credibilidad"
    },
    motivate: {
      icon: Rocket,
      color: "text-blue-400", 
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      purpose: language === 'en'
        ? "Stir belief and unlock budget through emotional resonance and moral tension"
        : "Despertar creencias y desbloquear presupuesto a través de resonancia emocional y tensión moral",
      techniques: language === 'en'
        ? ["Dragon & The City", "Drive Stories", "Three Great Conflicts", "No Easy Way"]
        : ["Dragón y La Ciudad", "Historias de Impulso", "Tres Grandes Conflictos", "No Hay Camino Fácil"],
      hrCxApplication: language === 'en'
        ? "Frame disengagement as the 'dragon', position HR as guide helping stakeholders cross transformation chasms"
        : "Enmarcar el descompromiso como el 'dragón', posicionar RH como guía ayudando a stakeholders cruzar abismos de transformación"
    },
    convince: {
      icon: Shield,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20", 
      borderColor: "border-purple-700",
      purpose: language === 'en'
        ? "Secure buy-in through logic, trust, and strategic credibility building"
        : "Asegurar compromiso a través de lógica, confianza y construcción de credibilidad estratégica",
      techniques: language === 'en'
        ? ["Three Is The Magic Number", "That's Funny", "Data Detectives", "Trust Me I'm Expert"]
        : ["Tres Es El Número Mágico", "Eso Es Gracioso", "Detectives de Datos", "Confía En Mí Soy Experto"],
      hrCxApplication: language === 'en'
        ? "Present metrics as story clues, use failure wisdom and persona insights to build expert authority"
        : "Presentar métricas como pistas de historia, usar sabiduría de fallas e insights de personas para construir autoridad experta"
    },
    connect: {
      icon: Heart,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-700", 
      purpose: language === 'en'
        ? "Build empathy and emotional intelligence through shared human experiences"
        : "Construir empatía e inteligencia emocional a través de experiencias humanas compartidas",
      techniques: language === 'en'
        ? ["Story Listening", "Abstractions", "Universal Stories", "Curious Tales"]
        : ["Escucha de Historias", "Abstracciones", "Historias Universales", "Cuentos Curiosos"],
      hrCxApplication: language === 'en'
        ? "Use behavioral observation and motivation archetypes to decode stakeholder needs and cultural signals"
        : "Usar observación de comportamiento y arquetipos de motivación para decodificar necesidades de stakeholders y señales culturales"
    },
    explain: {
      icon: Lightbulb,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-700",
      purpose: language === 'en'
        ? "Add strategic clarity layer to solve 'so what?' problem in HR initiatives"
        : "Añadir capa de claridad estratégica para resolver el problema '¿y qué?' en iniciativas de RH",
      techniques: language === 'en'
        ? ["Order & Chaos", "Good & Evil", "What's It About", "Rolls Royce Moment"]
        : ["Orden y Caos", "Bien y Mal", "De Qué Se Trata", "Momento Rolls Royce"],
      hrCxApplication: language === 'en'
        ? "Frame HR as force restoring equilibrium, use vivid moments that make strategic data unforgettable"
        : "Enmarcar RH como fuerza restaurando equilibrio, usar momentos vívidos que hacen datos estratégicos inolvidables"
    },
    lead: {
      icon: Crown,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20", 
      borderColor: "border-orange-700",
      purpose: language === 'en'
        ? "Unlock team intelligence through vulnerability and collective wisdom harvesting"
        : "Desbloquear inteligencia de equipo a través de vulnerabilidad y cosecha de sabiduría colectiva",
      techniques: language === 'en'
        ? ["Curious Tales", "Man In A Hole", "Emotional Dashboard", "Thoughtful Failures"]
        : ["Cuentos Curiosos", "Hombre En Un Hoyo", "Panel Emocional", "Fallas Reflexivas"],
      hrCxApplication: language === 'en'
        ? "Launch story rituals, build psychological safety through failure narratives, harvest growth insights"
        : "Lanzar rituales de historia, construir seguridad psicológica a través de narrativas de falla, cosechar insights de crecimiento"
    },
    impress: {
      icon: Star,
      color: "text-pink-400",
      bgColor: "bg-pink-900/20",
      borderColor: "border-pink-700",
      purpose: language === 'en'
        ? "Performance layer for executive presence - turn influence into memorable impact"
        : "Capa de rendimiento para presencia ejecutiva - convertir influencia en impacto memorable",
      techniques: language === 'en'
        ? ["Movie Time", "Five Ts Structure", "Story Hooks", "Show & Tell"]
        : ["Hora de Película", "Estructura Cinco Ts", "Ganchos de Historia", "Mostrar y Contar"],
      hrCxApplication: language === 'en'
        ? "Transform decks visually, use narrative arc in briefings, prepare 'In Case of Boredom' modes"
        : "Transformar presentaciones visualmente, usar arco narrativo en briefings, preparar modos 'En Caso de Aburrimiento'"
    }
  };

  const storyArchetypes = {
    'dragon-city': {
      icon: Shield,
      structure: language === 'en' ? "Threat → Response → Resolution" : "Amenaza → Respuesta → Resolución",
      hrApplication: language === 'en'
        ? "Position disengagement/attrition as dragon threatening culture. HR's vision is the 'city worth saving.'"
        : "Posicionar descompromiso/desgaste como dragón amenazando cultura. La visión de RH es la 'ciudad que vale la pena salvar.'",
      useCase: language === 'en' ? "Culture campaigns, EX strategy decks" : "Campañas de cultura, presentaciones estratégicas EX"
    },
    'man-hole': {
      icon: TrendingUp,
      structure: language === 'en' ? "Comfort → Crisis → Recovery → Better Place" : "Comodidad → Crisis → Recuperación → Lugar Mejor", 
      hrApplication: language === 'en'
        ? "Frame team challenges as heroic narratives—position HR as bridge, not fixer."
        : "Enmarcar desafíos de equipo como narrativas heroicas—posicionar RH como puente, no reparador.",
      useCase: language === 'en' ? "Change readiness decks, culture playbooks" : "Presentaciones de preparación para cambio, manuales de cultura"
    },
    'rags-riches': {
      icon: Crown, 
      structure: language === 'en' ? "Hidden Value → Struggle → Recognition" : "Valor Oculto → Lucha → Reconocimiento",
      hrApplication: language === 'en'
        ? "Surface latent potential in overlooked teams, position HR as enabler of strategic worth."
        : "Descubrir potencial latente en equipos pasados por alto, posicionar RH como facilitador de valor estratégico.",
      useCase: language === 'en' ? "EX strategy decks, onboarding presentations" : "Presentaciones estratégicas EX, presentaciones de incorporación"
    },
    'pride-fall': {
      icon: AlertTriangle,
      structure: language === 'en' ? "Flawed Power → Denial → Deserved Consequences" : "Poder Defectuoso → Negación → Consecuencias Merecidas",
      hrApplication: language === 'en' 
        ? "Use cautionary tales to surface ego blindspots and resistance patterns in leadership."
        : "Usar cuentos de advertencia para descubrir puntos ciegos de ego y patrones de resistencia en liderazgo.",
      useCase: language === 'en' ? "Postmortem kits, transformation retros" : "Kits de post-mortem, retrospectivas de transformación"
    },
    'voyage-return': {
      icon: Compass,
      structure: language === 'en' ? "Home → Departure → Chaos → Insight → Return Changed" : "Casa → Partida → Caos → Insight → Regreso Cambiado",
      hrApplication: language === 'en'
        ? "Map employee lifecycle arcs, M&A transitions, culture transformation journeys."
        : "Mapear arcos de ciclo de vida de empleados, transiciones M&A, viajes de transformación cultural.",
      useCase: language === 'en' ? "Journey maps, M&A onboarding" : "Mapas de viaje, incorporación M&A"
    },
    'happy-endings': {
      icon: Heart,
      structure: language === 'en' ? "Growth → Finding Home → Doing Right Thing" : "Crecimiento → Encontrar Hogar → Hacer Lo Correcto",
      hrApplication: language === 'en'
        ? "Frame initiative outcomes as stakeholder evolution and cultural maturation." 
        : "Enmarcar resultados de iniciativas como evolución de stakeholders y maduración cultural.",
      useCase: language === 'en' ? "Retrospective decks, culture briefings" : "Presentaciones retrospectivas, briefings de cultura"
    }
  };

  const conversationTools = {
    'story-listening': {
      icon: Mic,
      technique: language === 'en' ? "Strategic Listening Framework" : "Marco de Escucha Estratégica",
      steps: language === 'en'
        ? ["Emotional Memory Scan", "Timeline Reconstruction", "Decision Analysis", "Expertise Extraction"]
        : ["Escaneo de Memoria Emocional", "Reconstrucción de Línea de Tiempo", "Análisis de Decisiones", "Extracción de Experiencia"],
      hrApplication: language === 'en'
        ? "Surface stakeholder hotspots, map lifecycle events as perceived by employees, identify decision junctions"
        : "Descubrir puntos calientes de stakeholders, mapear eventos de ciclo de vida percibidos por empleados, identificar uniones de decisión"
    },
    'icebreakers': {
      icon: Coffee,
      technique: language === 'en' ? "Empathy Activation Grid" : "Red de Activación de Empatía", 
      steps: language === 'en'
        ? ["Photo Story", "Love & Hate", "Hidden Archetypes", "Story-ish Conversations"]
        : ["Historia de Foto", "Amor y Odio", "Arquetipos Ocultos", "Conversaciones Tipo Historia"],
      hrApplication: language === 'en'
        ? "Build cross-functional empathy, surface subconscious bias, reveal emotional memory through metaphor"
        : "Construir empatía interfuncional, descubrir sesgo subconsciente, revelar memoria emocional a través de metáfora"
    },
    'emotional-dashboard': {
      icon: Heart,
      technique: language === 'en' ? "Narrative Resonance Tracker" : "Rastreador de Resonancia Narrativa",
      steps: language === 'en'
        ? ["Dashboard Metaphor", "Emotion-to-Story Map", "Emotional Lag Scan", "Research Abstractions"]
        : ["Metáfora de Panel", "Mapa Emoción-a-Historia", "Escaneo de Retraso Emocional", "Abstracciones de Investigación"],
      hrApplication: language === 'en'
        ? "Track belief flow across stakeholder touchpoints, decode behavior beneath surveys"
        : "Rastrear flujo de creencias a través de puntos de contacto de stakeholders, decodificar comportamiento bajo encuestas"
    },
    'five-ts': {
      icon: Clock,
      technique: language === 'en' ? "Narrative Readiness Grid" : "Red de Preparación Narrativa",
      steps: language === 'en'
        ? ["Timeline", "Turning Points", "Tensions", "Temptations", "Teachable Moments"]
        : ["Línea de Tiempo", "Puntos de Giro", "Tensiones", "Tentaciones", "Momentos Enseñables"],
      hrApplication: language === 'en'
        ? "Frame lifecycle arcs, highlight decision moments, surface stakeholder conflict and integrity shifts"
        : "Enmarcar arcos de ciclo de vida, destacar momentos de decisión, descubrir conflicto de stakeholders y cambios de integridad"
    },
    'movie-time': {
      icon: Video,
      technique: language === 'en' ? "Strategic Visual Story Grid" : "Red de Historia Visual Estratégica",
      steps: language === 'en'
        ? ["Action", "Emotion", "Meaning", "Visual Moments"]
        : ["Acción", "Emoción", "Significado", "Momentos Visuales"],
      hrApplication: language === 'en'
        ? "Turn abstract strategy into vivid emotional resonance, create cinematic persuasion moments"
        : "Convertir estrategia abstracta en resonancia emocional vívida, crear momentos de persuasión cinematográfica"
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
            Launch Story Lab
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="frameworks">{currentLabels.frameworks}</TabsTrigger>
            <TabsTrigger value="archetypes">{currentLabels.archetypes}</TabsTrigger>
            <TabsTrigger value="conversation-tools">{currentLabels.conversationTools}</TabsTrigger>
            <TabsTrigger value="hr-cx-adaptation">{currentLabels.hrCxAdaptation}</TabsTrigger>
            <TabsTrigger value="story-bank">{currentLabels.storyBank}</TabsTrigger>
            <TabsTrigger value="influence-playbook">{currentLabels.influencePlaybook}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Story Frameworks Overview */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  Story Frameworks Arsenal
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Seven battle-tested narrative frameworks for every stakeholder influence scenario - from selling ideas to leading transformation."
                    : "Siete marcos narrativos probados en batalla para cada escenario de influencia de stakeholders - desde vender ideas hasta liderar transformación."
                  }
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(storyFrameworks).map(([key, framework]) => {
                    const Icon = framework.icon;
                    return (
                      <div key={key} className={`p-3 rounded-lg ${framework.bgColor} border ${framework.borderColor}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${framework.color}`} />
                          <div className="text-white text-sm font-medium">
                            {currentLabels[key as keyof typeof currentLabels]}
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">{framework.purpose.slice(0, 50)}...</p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Story Archetypes Overview */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-purple-400" />
                  Classic Story Archetypes
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Universal narrative structures that resonate across cultures and contexts - adapted for HR-CX transformation scenarios."
                    : "Estructuras narrativas universales que resuenan a través de culturas y contextos - adaptadas para escenarios de transformación HR-CX."
                  }
                </p>

                <div className="space-y-3">
                  {Object.entries(storyArchetypes).map(([key, archetype]) => {
                    const Icon = archetype.icon;
                    return (
                      <div key={key} className="p-3 bg-gray-900/50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-4 h-4 text-purple-400" />
                          <div className="text-white text-sm font-medium">
                            {currentLabels[key.replace('-', '') as keyof typeof currentLabels]}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">{archetype.structure}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('frameworks')}
                >
                  <BookOpen className="w-4 h-4" />
                  Explore Frameworks
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('conversation-tools')}
                >
                  <Mic className="w-4 h-4" />
                  Conversation Tools
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('hr-cx-adaptation')}
                >
                  <Target className="w-4 h-4" />
                  HR-CX Adaptation
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('influence-playbook')}
                >
                  <Crown className="w-4 h-4" />
                  Influence Playbook
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Story Frameworks */}
          <TabsContent value="frameworks" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Story Frameworks for Influence</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(storyFrameworks).map((framework) => (
                  <Button
                    key={framework}
                    variant={selectedFramework === framework ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFramework(framework as StoryFramework)}
                  >
                    {currentLabels[framework as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Selected Framework Details */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = storyFrameworks[selectedFramework].icon;
                    return <Icon className={`w-8 h-8 ${storyFrameworks[selectedFramework].color}`} />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {currentLabels[selectedFramework as keyof typeof currentLabels]}
                    </h4>
                    <p className="text-gray-400">Framework Analysis</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={`p-4 ${storyFrameworks[selectedFramework].bgColor} border ${storyFrameworks[selectedFramework].borderColor} rounded-lg`}>
                    <h5 className="font-medium text-white mb-2">Purpose</h5>
                    <p className="text-gray-300 text-sm">{storyFrameworks[selectedFramework].purpose}</p>
                  </div>

                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h5 className="font-medium text-gray-400 mb-3">Core Techniques</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {storyFrameworks[selectedFramework].techniques.map((technique, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {technique}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h5 className="font-medium text-blue-400 mb-2">HR-CX Application</h5>
                    <p className="text-gray-300 text-sm">{storyFrameworks[selectedFramework].hrCxApplication}</p>
                  </div>
                </div>
              </Card>

              {/* Framework Implementation Guide */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Implementation Guide</h4>

                {selectedFramework === 'sell' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Simple Sales Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Use "Someone like you..." format for stakeholder personas</p>
                      <p className="text-xs text-gray-400 italic">"Ops leaders like you saw onboarding ROI in 3 weeks."</p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Social Proof</h5>
                      <p className="text-gray-300 text-sm mb-2">Convert stakeholder praise into mini stories</p>
                      <p className="text-xs text-gray-400 italic">"Since implementing the new lifecycle incentive model, 92% of teams showed ROI-positive engagement shifts."</p>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Innovation Curve</h5>
                      <p className="text-gray-300 text-sm mb-2">Map stakeholder risk tolerance to proof type</p>
                      <p className="text-xs text-gray-400 italic">Innovators need insider rituals, Late Mainstream needs testimonials</p>
                    </div>
                  </div>
                )}

                {selectedFramework === 'motivate' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Dragon & The City</h5>
                      <p className="text-gray-300 text-sm mb-2">Position disengagement as dragon threatening culture</p>
                      <p className="text-xs text-gray-400 italic">Frame HR vision as the "city worth saving"</p>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Drive Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Map autonomy, mastery, purpose to stakeholder personas</p>
                      <p className="text-xs text-gray-400 italic">"I knew our onboarding unlocked autonomy when a team rewrote it for their own CX rituals."</p>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">No Easy Way</h5>
                      <p className="text-gray-300 text-sm mb-2">Acknowledge complexity honestly in lifecycle investments</p>
                      <p className="text-xs text-gray-400 italic">Position HR as guide through transformation difficulty</p>
                    </div>
                  </div>
                )}

                {/* Add other framework implementation guides similarly */}
                {selectedFramework === 'convince' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Data Detectives</h5>
                      <p className="text-gray-300 text-sm mb-2">Present metrics as clues in a story</p>
                      <p className="text-xs text-gray-400 italic">"Retention spikes in Q3 weren't random—they were breadcrumbs leading to a hidden incentive ritual."</p>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Trust Me, I'm Expert</h5>
                      <p className="text-gray-300 text-sm mb-2">Share hard lessons as proof points</p>
                      <p className="text-xs text-gray-400 italic">"We could've optimized for cost—but instead we doubled down on cultural rituals that built trust."</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Story Archetypes */}
          <TabsContent value="archetypes" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Universal Story Archetypes</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(storyArchetypes).map((archetype) => (
                  <Button
                    key={archetype}
                    variant={selectedArchetype === archetype ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedArchetype(archetype as StoryArchetype)}
                  >
                    {currentLabels[archetype.replace('-', '') as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Archetype Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = storyArchetypes[selectedArchetype].icon;
                      return <Icon className="w-8 h-8 text-purple-400" />;
                    })()}
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {currentLabels[selectedArchetype.replace('-', '') as keyof typeof currentLabels]}
                      </h4>
                      <p className="text-gray-400">Classic Narrative Structure</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Structure</h5>
                      <p className="text-gray-300">{storyArchetypes[selectedArchetype].structure}</p>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">HR Application</h5>
                      <p className="text-gray-300 text-sm">{storyArchetypes[selectedArchetype].hrApplication}</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-2">Use Case</h5>
                      <p className="text-gray-300 text-sm">{storyArchetypes[selectedArchetype].useCase}</p>
                    </div>
                  </div>
                </div>

                {/* Archetype Examples */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Practical Examples</h4>
                  
                  {selectedArchetype === 'dragon-city' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-yellow-400 mb-2">The Dragon (Threat)</h5>
                        <p className="text-gray-300 text-sm">Silent disengagement eroding team culture and productivity</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-2">The City (What's at Stake)</h5>
                        <p className="text-gray-300 text-sm">Collaborative culture, innovation capacity, employee advocacy</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-2">The Response</h5>
                        <p className="text-gray-300 text-sm">Strategic EX redesign with cultural intelligence and feedback loops</p>
                      </div>
                    </div>
                  )}

                  {selectedArchetype === 'man-hole' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-2">Comfort Zone</h5>
                        <p className="text-gray-300 text-sm">Legacy onboarding process working but not scaling</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-red-400 mb-2">The Crisis</h5>
                        <p className="text-gray-300 text-sm">Post-merger integration revealing cultural misalignment</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-2">Better Place</h5>
                        <p className="text-gray-300 text-sm">Unified culture with scalable identity and belonging frameworks</p>
                      </div>
                    </div>
                  )}

                  {/* Add examples for other archetypes */}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Conversation Tools */}
          <TabsContent value="conversation-tools" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Strategic Conversation Tools</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(conversationTools).map((tool) => (
                  <Button
                    key={tool}
                    variant={selectedTool === tool ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTool(tool as ConversationTool)}
                  >
                    {tool.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Tool Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = conversationTools[selectedTool].icon;
                      return <Icon className="w-8 h-8 text-orange-400" />;
                    })()}
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {conversationTools[selectedTool].technique}
                      </h4>
                      <p className="text-gray-400">Conversation Facilitation Tool</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-3">Process Steps</h5>
                      <div className="space-y-2">
                        {conversationTools[selectedTool].steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-gray-300 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">HR Application</h5>
                      <p className="text-gray-300 text-sm">{conversationTools[selectedTool].hrApplication}</p>
                    </div>
                  </div>
                </div>

                {/* Tool Implementation */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Implementation Guide</h4>
                  
                  {selectedTool === 'story-listening' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-gray-400 mb-2">Workshop Format</h5>
                        <p className="text-gray-300 text-sm">30-minute stakeholder interviews using story prompts</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-gray-400 mb-2">Key Questions</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• "What HR moment stuck with you, and why?"</li>
                          <li>• "Walk me through that decision..."</li>
                          <li>• "What did you know then that others didn't?"</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-gray-400 mb-2">Output</h5>
                        <p className="text-gray-300 text-sm">Persona insights, decision patterns, and narrative hooks for future influence</p>
                      </div>
                    </div>
                  )}

                  {selectedTool === 'five-ts' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-gray-400 mb-2">Story Prompt</h5>
                        <p className="text-gray-300 text-sm">"Tell me about a time when [specific HR challenge] happened..."</p>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-gray-400 mb-2">Facilitation Tips</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Ask "What happened next?" for timeline</li>
                          <li>• "What was at stake?" for tensions</li>
                          <li>• "What did you learn?" for teachable moments</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Add implementation guides for other tools */}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* HR-CX Adaptation */}
          <TabsContent value="hr-cx-adaptation" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-400" />
                HR-CX Storytelling Adaptation Framework
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Storytelling Layers */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Strategic Storytelling Layers</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Stories That Sell → HR Success Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Share HR success stories that mirror departmental challenges</p>
                      <p className="text-xs text-gray-400 italic">Use internal testimonials and pilot wins to make intangible impacts visible</p>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Stories That Motivate → Culture Transformation</h5>
                      <p className="text-gray-300 text-sm mb-2">Frame employee experience transformation as hero's journey</p>
                      <p className="text-xs text-gray-400 italic">Position HR as guide enabling stakeholder transformation</p>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Stories That Convince → Data Narratives</h5>
                      <p className="text-gray-300 text-sm mb-2">Present metrics as clues in stakeholder journey stories</p>
                      <p className="text-xs text-gray-400 italic">Use failure wisdom and persona insights for expert credibility</p>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Stories That Connect → Empathy Building</h5>
                      <p className="text-gray-300 text-sm mb-2">Surface stakeholder narratives through behavioral observation</p>
                      <p className="text-xs text-gray-400 italic">Decode cultural signals and motivation archetypes</p>
                    </div>
                  </div>
                </div>

                {/* Stakeholder Persona Application */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Persona-Specific Applications</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">CEO/Founder</h5>
                      <p className="text-gray-300 text-sm mb-2">Use "Dragon & City" for culture threats, "Rags to Riches" for team potential</p>
                      <p className="text-xs text-gray-400 italic">Focus on vision enablement and competitive advantage stories</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">CFO</h5>
                      <p className="text-gray-300 text-sm mb-2">Use "Data Detectives" for ROI insights, "Trust Me Expert" for risk mitigation</p>
                      <p className="text-xs text-gray-400 italic">Frame HR investments as strategic insurance and growth enablers</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">COO</h5>
                      <p className="text-gray-300 text-sm mb-2">Use "Man In Hole" for process transformation, "Simple Sales Stories" for efficiency</p>
                      <p className="text-xs text-gray-400 italic">Show operational stability through people strategy</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">CHRO</h5>
                      <p className="text-gray-300 text-sm mb-2">Use "Thoughtful Failures" for learning, "Drive Stories" for team motivation</p>
                      <p className="text-xs text-gray-400 italic">Build psychological safety through vulnerability and growth narratives</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Implementation Toolkit */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Implementation Toolkit</h4>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h5 className="font-medium text-blue-400 mb-3">Brief Card Templates</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Persona-specific story hooks</li>
                    <li>• Lifecycle stage narratives</li>
                    <li>• ROI proof point stories</li>
                    <li>• Culture transformation arcs</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h5 className="font-medium text-green-400 mb-3">Workshop Formats</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Story listening sessions</li>
                    <li>• Empathy mapping workshops</li>
                    <li>• Narrative strategy planning</li>
                    <li>• Stakeholder alignment sprints</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h5 className="font-medium text-purple-400 mb-3">Success Metrics</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Stakeholder engagement scores</li>
                    <li>• Initiative buy-in rates</li>
                    <li>• Message retention testing</li>
                    <li>• Cultural alignment indicators</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Story Bank */}
          <TabsContent value="story-bank" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Bookmark className="w-6 h-6 text-blue-400" />
                Strategic Story Bank
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Story Categories */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Story Categories</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Success Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Transformation wins, ROI achievements, culture victories</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Credibility</Badge>
                        <Badge variant="outline">Social Proof</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Challenge Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Difficult transitions, learning from failures, resilience narratives</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Vulnerability</Badge>
                        <Badge variant="outline">Learning</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Vision Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Future possibilities, strategic direction, cultural aspirations</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Inspiration</Badge>
                        <Badge variant="outline">Direction</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Connection Stories</h5>
                      <p className="text-gray-300 text-sm mb-2">Personal moments, human impact, cultural connections</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Empathy</Badge>
                        <Badge variant="outline">Culture</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Metadata Framework */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Story Metadata Framework</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Tagging System</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-white mb-2">Context Tags</div>
                          <div className="flex flex-wrap gap-1 text-xs">
                            <Badge variant="secondary">Onboarding</Badge>
                            <Badge variant="secondary">M&A</Badge>
                            <Badge variant="secondary">Culture</Badge>
                            <Badge variant="secondary">Performance</Badge>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white mb-2">Persona Tags</div>
                          <div className="flex flex-wrap gap-1 text-xs">
                            <Badge variant="secondary">CEO</Badge>
                            <Badge variant="secondary">CFO</Badge>
                            <Badge variant="secondary">COO</Badge>
                            <Badge variant="secondary">CHRO</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-2">Usage Tracking</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Audience exposure history</li>
                        <li>• Emotional response tracking</li>
                        <li>• Effectiveness metrics</li>
                        <li>• Refresh recommendations</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-2">Ethical Guidelines</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Permission and attribution</li>
                        <li>• Privacy protection</li>
                        <li>• Cultural sensitivity</li>
                        <li>• Update protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Influence Playbook */}
          <TabsContent value="influence-playbook" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Crown className="w-6 h-6 text-orange-400" />
                Influence Playbook
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Scenario-Based Playbooks */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Scenario-Based Playbooks</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Budget Approval</h5>
                      <p className="text-gray-300 text-sm mb-3">Primary Framework: Stories That Convince + Data Detectives</p>
                      <div className="text-xs text-gray-400 space-y-1">
                        <p>• Lead with ROI proof point story</p>
                        <p>• Use "Three Magic Number" for retention</p>
                        <p>• Present metrics as investigation clues</p>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Change Resistance</h5>
                      <p className="text-gray-300 text-sm mb-3">Primary Framework: Stories That Connect + Man In Hole</p>
                      <div className="text-xs text-gray-400 space-y-1">
                        <p>• Use story listening for empathy building</p>
                        <p>• Frame change as heroic journey</p>
                        <p>• Acknowledge "No Easy Way" complexity</p>
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Team Motivation</h5>
                      <p className="text-gray-300 text-sm mb-3">Primary Framework: Stories That Lead + Drive Stories</p>
                      <div className="text-xs text-gray-400 space-y-1">
                        <p>• Share autonomy success moments</p>
                        <p>• Use "Thoughtful Failures" for learning</p>
                        <p>• Create emotional dashboard rituals</p>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Stakeholder Buy-in</h5>
                      <p className="text-gray-300 text-sm mb-3">Primary Framework: Stories That Sell + Hero & Guide</p>
                      <div className="text-xs text-gray-400 space-y-1">
                        <p>• Use "Simple Sales Stories" format</p>
                        <p>• Position stakeholder as hero</p>
                        <p>• Provide social proof validation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stakeholder Journey Mapping */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Stakeholder Journey Mapping</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Awareness Stage</h5>
                      <p className="text-gray-300 text-sm mb-2">Goal: Capture attention and build curiosity</p>
                      <div className="text-xs text-gray-400">
                        <p>• Use "Story Hooks" and "That's Funny" moments</p>
                        <p>• Share surprising data insights</p>
                        <p>• Pose compelling questions</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Consideration Stage</h5>
                      <p className="text-gray-300 text-sm mb-2">Goal: Build trust and demonstrate value</p>
                      <div className="text-xs text-gray-400">
                        <p>• Use "Trust Me Expert" credibility</p>
                        <p>• Share relevant success stories</p>
                        <p>• Provide detailed frameworks</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Decision Stage</h5>
                      <p className="text-gray-300 text-sm mb-2">Goal: Secure commitment and action</p>
                      <div className="text-xs text-gray-400">
                        <p>• Use "Pitch Perfect" structure</p>
                        <p>• Present clear next steps</p>
                        <p>• Address final objections</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Implementation Stage</h5>
                      <p className="text-gray-300 text-sm mb-2">Goal: Maintain momentum and celebrate wins</p>
                      <div className="text-xs text-gray-400">
                        <p>• Use "Happy Ever Afters" for milestones</p>
                        <p>• Create progress narratives</p>
                        <p>• Build success story bank</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Reference Guide */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Quick Reference Guide</h4>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <h5 className="font-medium text-red-400 mb-2">High Resistance</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Story Listening first</li>
                    <li>• Acknowledge concerns</li>
                    <li>• Use "No Easy Way"</li>
                    <li>• Share failure wisdom</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <h5 className="font-medium text-yellow-400 mb-2">Data Skeptics</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Data Detectives approach</li>
                    <li>• Present metrics as clues</li>
                    <li>• Expert credibility first</li>
                    <li>• Logical story structure</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h5 className="font-medium text-green-400 mb-2">Time Pressure</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Cut To The Chase mode</li>
                    <li>• Simple Sales Stories</li>
                    <li>• Three Magic Number</li>
                    <li>• Rolls Royce moments</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h5 className="font-medium text-blue-400 mb-2">Culture Change</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Dragon & The City frame</li>
                    <li>• Universal Stories appeal</li>
                    <li>• Emotional Dashboard</li>
                    <li>• Voyage & Return arc</li>
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