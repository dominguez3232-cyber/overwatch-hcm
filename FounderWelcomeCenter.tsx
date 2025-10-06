import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import SchemaVisualization from './SchemaVisualization';
import MetricCard from './MetricCard';
import InteractiveVideoPlayer from './InteractiveVideoPlayer';
import { 
  Play,
  Pause,
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  Star,
  Eye,
  TrendingUp,
  Zap,
  Crown,
  Map,
  Building,
  Globe,
  BarChart3,
  Timer,
  UserCheck,
  Lightbulb,
  Rocket,
  Shield,
  Trophy,
  Heart,
  Compass
} from 'lucide-react';

interface FounderWelcomeCenterProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  founderName?: string;
  companyName?: string;
}

interface WelcomeStep {
  id: string;
  title: { en: string; es: string; };
  description: { en: string; es: string; };
  component: React.ComponentType<any>;
}

interface SquadOption {
  id: string;
  name: string;
  description: { en: string; es: string; };
  roles: string[];
  market: string[];
  icon: string;
  difficulty: 'starter' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

interface OverlayData {
  id: string;
  title: string;
  schema: string;
  clarityLift: string;
  languages: string[];
  category: string;
  description: { en: string; es: string; };
  videoSrc?: string;
}

interface BadgeUnlockRule {
  id: string;
  title: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  unlockLogic: { en: string; es: string; };
  replayLink: string;
  icon: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  points: number;
}

const WELCOME_FLOW_STEPS = [
  'welcome-sequence',
  'schema-primer',
  'squad-activation',
  'coaching-walkthrough',
  'replay-preview',
  'badge-path'
];

const SQUAD_OPTIONS: SquadOption[] = [
  {
    id: 'latam-gtm',
    name: 'LatAm GTM Strike Team',
    description: {
      en: 'Cross-border market expansion with bilingual coaching excellence',
      es: 'Expansión de mercado transfronterizo con excelencia de coaching bilingüe'
    },
    roles: ['Founder', 'Sales Lead', 'Market Analyst'],
    market: ['LatAm', 'Bilingual'],
    icon: '🌎',
    difficulty: 'intermediate',
    estimatedTime: '6-8 weeks'
  },
  {
    id: 'ops-alpha',
    name: 'Ops Alpha',
    description: {
      en: 'Operational excellence through schema-driven process optimization',
      es: 'Excelencia operacional mediante optimización de procesos basada en esquemas'
    },
    roles: ['Founder', 'Ops Lead', 'Process Manager'],
    market: ['US', 'Global'],
    icon: '⚙️',
    difficulty: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'founder-solo',
    name: 'Founder Solo Mode',
    description: {
      en: 'Personal clarity acceleration for solo founders and early-stage leaders',
      es: 'Aceleración de claridad personal para fundadores solitarios y líderes de etapa temprana'
    },
    roles: ['Founder'],
    market: ['US', 'LatAm', 'Global'],
    icon: '👑',
    difficulty: 'starter',
    estimatedTime: '2-4 weeks'
  }
];

const FEATURED_OVERLAY: OverlayData = {
  id: 'trust-velocity',
  title: 'Trust Velocity',
  schema: 'finance.trust-velocity',
  clarityLift: '3.2x',
  languages: ['EN', 'ES'],
  category: 'Finance',
  description: {
    en: 'Learn how Luis frames trust velocity in the LatAm GTM demo. Discover how trust moves faster than capital in cross-border business relationships.',
    es: 'Aprende cómo Luis presenta la velocidad de confianza en la demostración LatAm GTM. Descubre cómo la confianza se mueve más rápido que el capital en relaciones comerciales transfronterizas.'
  },
  videoSrc: '/founder-intro-luis.mp4'
};

const SAMPLE_BADGES: BadgeUnlockRule[] = [
  {
    id: 'trust-velocity-master',
    title: '🧩 Trust Velocity Master',
    level: 'Gold',
    unlockLogic: {
      en: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
      es: 'Índice de Claridad ≥ 3.0x + Retroalimentación ≥ 4.5'
    },
    replayLink: '/replay?id=trust-velocity',
    icon: '🧩',
    rarity: 'Rare',
    points: 500
  },
  {
    id: 'dual-language-navigator',
    title: '🌐 Dual-Language Navigator',
    level: 'Silver',
    unlockLogic: {
      en: 'Overlay Completed in EN + ES',
      es: 'Overlay Completado en EN + ES'
    },
    replayLink: '/replay?id=dual-language',
    icon: '🌐',
    rarity: 'Epic',
    points: 400
  },
  {
    id: 'schema-architect',
    title: '🏗️ Schema Architect',
    level: 'Platinum',
    unlockLogic: {
      en: 'Create 3+ Custom Schemas + Deploy to Squad',
      es: 'Crear 3+ Esquemas Personalizados + Desplegar a Escuadrón'
    },
    replayLink: '/replay?id=schema-architect',
    icon: '🏗️',
    rarity: 'Legendary',
    points: 750
  }
];

const SCHEMA_NODES = [
  {
    id: 'finance-trust-velocity',
    path: 'finance.trust-velocity',
    title: 'Trust Velocity',
    category: 'finance' as const,
    status: 'active' as const,
    metrics: { completions: 128, avgScore: 4.8, clarityLift: '3.2x' },
    connections: ['badge-dual-language', 'demo-pitch-alpha'],
    description: 'Capital velocity through trust acceleration frameworks'
  },
  {
    id: 'badge-dual-language',
    path: 'badge.dual-language',
    title: 'Dual-Language Navigator',
    category: 'badge' as const,
    status: 'pending' as const,
    connections: ['finance-trust-velocity'],
    description: 'Cross-cultural communication mastery'
  },
  {
    id: 'demo-pitch-alpha',
    path: 'demo.pitch-alpha',
    title: 'Investor Pitch Alpha',
    category: 'demo' as const,
    status: 'locked' as const,
    connections: ['finance-trust-velocity'],
    description: 'Investor-ready presentation framework'
  }
];

export default function FounderWelcomeCenter({
  language,
  onNavigate,
  founderName = 'Founder',
  companyName = 'Your Company'
}: FounderWelcomeCenterProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSquad, setSelectedSquad] = useState<SquadOption | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [watchProgress, setWatchProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<BadgeUnlockRule | null>(null);
  const [activeTab, setActiveTab] = useState('progress');

  const t = {
    en: {
      title: 'Welcome to OVERWATCH³',
      subtitle: 'Your journey to schema-driven clarity begins here',
      welcomeSequence: 'Welcome Sequence',
      schemaPrimer: 'Schema Primer',
      squadActivation: 'Squad Activation',
      coachingWalkthrough: 'Coaching Walkthrough',
      replayPreview: 'Replay Preview',
      badgePath: 'Badge Path',
      nextStep: 'Next Step',
      previousStep: 'Previous Step',
      getStarted: 'Get Started',
      watchIntro: 'Watch Introduction',
      selectSquad: 'Select Your Squad',
      launchOverlay: 'Launch Overlay',
      viewBadges: 'View Badge Path',
      overlayProgress: 'Overlay Progress',
      coachingMetrics: 'Coaching Metrics',
      badgeShowcase: 'Badge Showcase',
      replayEngagement: 'Replay Engagement',
      schemaMap: 'Schema Map',
      completed: 'Completed',
      inProgress: 'In Progress',
      locked: 'Locked',
      clarityLift: 'Clarity Lift',
      avgScore: 'Avg Score',
      completions: 'Completions',
      watchTime: 'Watch Time',
      feedbackScore: 'Feedback Score',
      views: 'Views',
      unlockLogic: 'Unlock Logic',
      points: 'Points',
      rarity: 'Rarity',
      difficulty: 'Difficulty',
      estimatedTime: 'Estimated Time',
      roles: 'Roles',
      market: 'Market',
      startJourney: 'Start Your Journey',
      continueJourney: 'Continue Journey',
      narrativeIntro: 'You\'re about to experience schema-driven clarity, cinematic coaching, and squad-ready transformation.',
      schemaNarrative: 'Every overlay, badge, and demo is traceable to schema. You\'re not just learning—you\'re wiring clarity into your platform.',
      overlayPrompt: 'Watch how Luis frames trust velocity in the LatAm GTM demo. Note the schema trace and clarity lift.',
      progressSummary: 'Track your coaching journey and unlock achievements',
      platformAccess: 'Platform Access',
      demoMode: 'Demo Mode'
    },
    es: {
      title: 'Bienvenido a OVERWATCH³',
      subtitle: 'Tu viaje hacia la claridad basada en esquemas comienza aquí',
      welcomeSequence: 'Secuencia de Bienvenida',
      schemaPrimer: 'Introducción a Esquemas',
      squadActivation: 'Activación de Escuadrón',
      coachingWalkthrough: 'Demostración de Coaching',
      replayPreview: 'Vista Previa de Replay',
      badgePath: 'Ruta de Insignias',
      nextStep: 'Siguiente Paso',
      previousStep: 'Paso Anterior',
      getStarted: 'Comenzar',
      watchIntro: 'Ver Introducción',
      selectSquad: 'Seleccionar Escuadrón',
      launchOverlay: 'Lanzar Overlay',
      viewBadges: 'Ver Ruta de Insignias',
      overlayProgress: 'Progreso de Overlay',
      coachingMetrics: 'Métricas de Coaching',
      badgeShowcase: 'Vitrina de Insignias',
      replayEngagement: 'Engagement de Replay',
      schemaMap: 'Mapa de Esquemas',
      completed: 'Completado',
      inProgress: 'En Progreso',
      locked: 'Bloqueado',
      clarityLift: 'Aumento de Claridad',
      avgScore: 'Puntuación Promedio',
      completions: 'Finalizaciones',
      watchTime: 'Tiempo de Visualización',
      feedbackScore: 'Puntuación de Retroalimentación',
      views: 'Visualizaciones',
      unlockLogic: 'Lógica de Desbloqueo',
      points: 'Puntos',
      rarity: 'Rareza',
      difficulty: 'Dificultad',
      estimatedTime: 'Tiempo Estimado',
      roles: 'Roles',
      market: 'Mercado',
      startJourney: 'Iniciar Tu Viaje',
      continueJourney: 'Continuar Viaje',
      narrativeIntro: 'Estás por experimentar claridad basada en esquemas, entrenamiento cinematográfico y transformación lista para escuadrones.',
      schemaNarrative: 'Cada overlay, insignia y demostración está trazada al esquema. No solo estás aprendiendo—estás integrando claridad en tu plataforma.',
      overlayPrompt: 'Observa cómo Luis presenta la velocidad de confianza en la demostración LatAm GTM. Nota el esquema y el aumento de claridad.',
      progressSummary: 'Rastrea tu viaje de coaching y desbloquea logros',
      platformAccess: 'Acceso a Plataforma',
      demoMode: 'Modo Demo'
    }
  };

  const text = t[language];

  // Auto-advance watch progress when playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setWatchProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleNextStep = () => {
    if (currentStep < WELCOME_FLOW_STEPS.length - 1) {
      const currentStepId = WELCOME_FLOW_STEPS[currentStep];
      if (!completedSteps.includes(currentStepId)) {
        setCompletedSteps([...completedSteps, currentStepId]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const getStepStatus = (stepIndex: number) => {
    const stepId = WELCOME_FLOW_STEPS[stepIndex];
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepIndex === currentStep) return 'current';
    if (stepIndex < currentStep) return 'completed';
    return 'upcoming';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'starter': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Rare': return 'text-blue-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  // Step Components
  const WelcomeSequenceStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-24 h-24 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full flex items-center justify-center text-4xl"
        >
          👑
        </motion.div>
        <h2 className="text-3xl font-bold">
          {language === 'en' ? `Welcome, ${founderName}!` : `¡Bienvenido, ${founderName}!`}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {text.narrativeIntro}
        </p>
      </div>

      <InteractiveVideoPlayer
        videoId="founder-intro-luis"
        title={{
          en: 'Founder Introduction with Luis',
          es: 'Introducción del Fundador con Luis'
        }}
        description={{
          en: 'Personal message about schema-driven clarity and the OVERWATCH³ methodology',
          es: 'Mensaje personal sobre claridad basada en esquemas y la metodología OVERWATCH³'
        }}
        chapters={[
          {
            id: 'welcome',
            title: {
              en: 'Welcome & Personal Story',
              es: 'Bienvenida e Historia Personal'
            },
            timestamp: 0,
            duration: 30,
            keyPoint: {
              en: 'Meet Luis and his founder journey',
              es: 'Conoce a Luis y su viaje como fundador'
            },
            transcript: {
              en: `Welcome to OVERWATCH³, ${founderName}. I'm Luis, and like you, I've built companies from the ground up. I know the clarity challenges that come with rapid growth and the need for systematic approaches to business transformation.`,
              es: `Bienvenido a OVERWATCH³, ${founderName}. Soy Luis, y como tú, he construido empresas desde cero. Conozco los desafíos de claridad que vienen con el crecimiento rápido y la necesidad de enfoques sistemáticos para la transformación empresarial.`
            }
          },
          {
            id: 'schema-methodology',
            title: {
              en: 'Schema-Driven Clarity',
              es: 'Claridad Basada en Esquemas'
            },
            timestamp: 30,
            duration: 45,
            keyPoint: {
              en: 'How schemas create systematic clarity',
              es: 'Cómo los esquemas crean claridad sistemática'
            },
            transcript: {
              en: 'Every decision, process, and outcome in your business can be traced to a schema. Schemas are the DNA of business clarity - reproducible, scalable, and measurable frameworks that eliminate guesswork.',
              es: 'Cada decisión, proceso y resultado en tu negocio puede ser rastreado a un esquema. Los esquemas son el ADN de la claridad empresarial - marcos reproducibles, escalables y medibles que eliminan las conjeturas.'
            }
          },
          {
            id: 'coaching-transformation',
            title: {
              en: 'Cinematic Coaching & Squad Transformation',
              es: 'Coaching Cinemático y Transformación de Escuadrones'
            },
            timestamp: 75,
            duration: 40,
            keyPoint: {
              en: 'Building tactical teams for clarity deployment',
              es: 'Construyendo equipos tácticos para despliegue de claridad'
            },
            transcript: {
              en: 'Traditional coaching is forgettable. Cinematic coaching creates emotional resonance. When combined with squad-based deployment, individual clarity becomes organizational transformation power.',
              es: 'El coaching tradicional es olvidable. El coaching cinemático crea resonancia emocional. Cuando se combina con despliegue basado en escuadrones, la claridad individual se convierte en poder de transformación organizacional.'
            }
          }
        ]}
        language={language}
        autoplay={false}
        onProgress={(progress) => setWatchProgress(progress)}
        onComplete={handleNextStep}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Your Company"
          value={companyName}
          icon={<Building className="w-5 h-5" />}
          color="primary"
          size="sm"
        />
        <MetricCard
          title="Journey Stage"
          value="Getting Started"
          icon={<Rocket className="w-5 h-5" />}
          color="success"
          size="sm"
        />
        <MetricCard
          title="Expected Timeline"
          value="2-8 weeks"
          icon={<Timer className="w-5 h-5" />}
          color="warning"
          size="sm"
        />
      </div>
    </motion.div>
  );

  const SchemaPrimerStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
          🧠
        </div>
        <h2 className="text-3xl font-bold">{text.schemaPrimer}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {text.schemaNarrative}
        </p>
      </div>

      <SchemaVisualization
        nodes={SCHEMA_NODES}
        language={language}
        onNodeSelect={(nodeId) => console.log('Node selected:', nodeId)}
        onNodeAction={(nodeId, action) => console.log('Node action:', nodeId, action)}
        compact={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Schema Paths"
          value="3"
          change={{ value: 15, period: 'last week', trend: 'up' }}
          icon={<Map className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title="Clarity Potential"
          value="3.2x"
          change={{ value: 8, period: 'baseline', trend: 'up' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title="Unlock Progress"
          value="33%"
          description="Ready for squad activation"
          icon={<CheckCircle className="w-5 h-5" />}
          color="warning"
        />
      </div>
    </motion.div>
  );

  const SquadActivationStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-2xl">
          👥
        </div>
        <h2 className="text-3xl font-bold">{text.squadActivation}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {language === 'en'
            ? 'Choose your tactical team configuration for optimal coaching deployment'
            : 'Elige tu configuración de equipo táctico para un despliegue óptimo de coaching'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SQUAD_OPTIONS.map((squad) => (
          <motion.div
            key={squad.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`p-6 cursor-pointer transition-all ${
                selectedSquad?.id === squad.id
                  ? 'ring-2 ring-primary bg-primary/5'
                  : 'hover:bg-secondary/50'
              }`}
              onClick={() => setSelectedSquad(squad)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{squad.icon}</div>
                  <Badge 
                    variant="outline" 
                    className={getDifficultyColor(squad.difficulty)}
                  >
                    {squad.difficulty}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{squad.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {squad.description[language]}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs text-muted-foreground">{text.roles}:</span>
                    {squad.roles.map((role) => (
                      <Badge key={role} variant="outline" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs text-muted-foreground">{text.market}:</span>
                    {squad.market.map((market) => (
                      <Badge key={market} variant="outline" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  {text.estimatedTime}: {squad.estimatedTime}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedSquad && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-green-500/5 border-green-500/20">
            <div className="text-center space-y-4">
              <div className="text-4xl">{selectedSquad.icon}</div>
              <h3 className="text-xl font-bold">{selectedSquad.name}</h3>
              <p className="text-muted-foreground">
                {selectedSquad.description[language]}
              </p>
              <Button className="w-full" onClick={handleNextStep}>
                <Users className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Activate Squad' : 'Activar Escuadrón'}
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );

  const CoachingWalkthroughStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
          🎯
        </div>
        <h2 className="text-3xl font-bold">{text.coachingWalkthrough}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {text.overlayPrompt}
        </p>
      </div>

      <Card className="p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-2xl">
              💰
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{FEATURED_OVERLAY.title}</h3>
              <p className="text-muted-foreground font-mono text-sm">
                {FEATURED_OVERLAY.schema}
              </p>
              <p className="text-muted-foreground mt-2">
                {FEATURED_OVERLAY.description[language]}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {FEATURED_OVERLAY.clarityLift}
              </div>
              <div className="text-sm text-muted-foreground">{text.clarityLift}</div>
            </div>
          </div>

          <div className="flex gap-2">
            {FEATURED_OVERLAY.languages.map((lang) => (
              <Badge key={lang} variant="outline">
                {lang}
              </Badge>
            ))}
          </div>

          <Button className="w-full" size="lg" onClick={handleNextStep}>
            <Play className="w-5 h-5 mr-2" />
            {text.launchOverlay}
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Expected Clarity Lift"
          value="3.2x"
          icon={<TrendingUp className="w-4 h-4" />}
          color="success"
          size="sm"
        />
        <MetricCard
          title="Schema Complexity"
          value="Intermediate"
          icon={<Target className="w-4 h-4" />}
          color="warning"
          size="sm"
        />
        <MetricCard
          title="Language Support"
          value="Bilingual"
          icon={<Globe className="w-4 h-4" />}
          color="primary"
          size="sm"
        />
        <MetricCard
          title="Replay Available"
          value="Yes"
          icon={<Eye className="w-4 h-4" />}
          color="success"
          size="sm"
        />
      </div>
    </motion.div>
  );

  const ReplayPreviewStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl">
          🎬
        </div>
        <h2 className="text-3xl font-bold">{text.replayPreview}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {language === 'en'
            ? 'See your coaching journey unfold through cinematic replay sequences'
            : 'Ve tu viaje de coaching desarrollarse a través de secuencias de replay cinemáticas'
          }
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          <div className="space-y-6">
            {/* Timeline Visualization */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-6">
                {[
                  {
                    type: 'overlay',
                    icon: <Target className="w-5 h-5 text-white" />,
                    title: 'Trust Velocity Overlay Started',
                    time: '14:22',
                    trace: 'finance.trust-velocity',
                    color: 'bg-green-500'
                  },
                  {
                    type: 'feedback',
                    icon: <Star className="w-5 h-5 text-white" />,
                    title: 'Exceptional Clarity Achieved',
                    time: '15:10',
                    score: '4.8/5.0',
                    lift: '3.2x',
                    color: 'bg-yellow-500'
                  },
                  {
                    type: 'badge',
                    icon: <Award className="w-5 h-5 text-white" />,
                    title: 'Trust Velocity Master Earned',
                    time: '15:12',
                    badge: '🧩',
                    color: 'bg-purple-500'
                  },
                  {
                    type: 'demo',
                    icon: <Play className="w-5 h-5 text-white" />,
                    title: 'Investor Pitch Alpha Unlocked',
                    time: '10:00 (Next Day)',
                    color: 'bg-blue-500'
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative flex items-start gap-4"
                  >
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${event.color}`}>
                      {event.icon}
                    </div>
                    
                    <Card className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{event.title}</h4>
                        <span className="text-sm text-muted-foreground">{event.time}</span>
                      </div>
                      
                      {event.trace && (
                        <p className="text-sm font-mono text-muted-foreground">{event.trace}</p>
                      )}
                      
                      {event.score && (
                        <div className="flex gap-4 mt-2 text-sm">
                          <span>Score: <strong>{event.score}</strong></span>
                          <span>Lift: <strong className="text-green-400">{event.lift}</strong></span>
                        </div>
                      )}
                      
                      {event.badge && (
                        <div className="text-2xl mt-2">{event.badge}</div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Replay Engagement"
          value="4.8/5.0"
          change={{ value: 12, period: 'industry avg', trend: 'up' }}
          icon={<Eye className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title="Clarity Progression"
          value="3.2x"
          description="Above target threshold"
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title="Badges Earned"
          value="1"
          description="More available"
          icon={<Award className="w-5 h-5" />}
          color="warning"
        />
      </div>
    </motion.div>
  );

  const BadgePathStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
          🏆
        </div>
        <h2 className="text-3xl font-bold">{text.badgePath}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {language === 'en'
            ? 'Unlock achievements as you master schema-driven clarity and coaching excellence'
            : 'Desbloquea logros mientras dominas la claridad basada en esquemas y la excelencia en coaching'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_BADGES.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedBadge(badge)}
          >
            <Card className={`p-6 ${selectedBadge?.id === badge.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{badge.icon}</div>
                  <div className="text-right">
                    <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                      {badge.rarity}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      {badge.points} {text.points}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{badge.title}</h3>
                  <Badge variant="outline" className="mt-2">
                    {badge.level}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">{text.unlockLogic}:</h4>
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded p-2">
                    {badge.unlockLogic[language]}
                  </p>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'View Requirements' : 'Ver Requisitos'}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedBadge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-yellow-500/5 border-yellow-500/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{selectedBadge.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{selectedBadge.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">{selectedBadge.level}</Badge>
                    <Badge variant="outline" className={getRarityColor(selectedBadge.rarity)}>
                      {selectedBadge.rarity}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded p-4">
                <h4 className="font-medium mb-2">{text.unlockLogic}:</h4>
                <p className="text-muted-foreground">{selectedBadge.unlockLogic[language]}</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{selectedBadge.points}</div>
                <div className="text-sm text-muted-foreground">{text.points}</div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );

  const getStepComponent = () => {
    switch (currentStep) {
      case 0: return <WelcomeSequenceStep />;
      case 1: return <SchemaPrimerStep />;
      case 2: return <SquadActivationStep />;
      case 3: return <CoachingWalkthroughStep />;
      case 4: return <ReplayPreviewStep />;
      case 5: return <BadgePathStep />;
      default: return <WelcomeSequenceStep />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {text.title}
              </h1>
              <p className="text-muted-foreground mt-2">{text.subtitle}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => onNavigate('persona')}
              >
                <Building className="w-4 h-4 mr-2" />
                {text.platformAccess}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('investor-demo')}
              >
                <Eye className="w-4 h-4 mr-2" />
                {text.demoMode}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {WELCOME_FLOW_STEPS.map((stepId, index) => {
              const status = getStepStatus(index);
              const stepNames = [
                text.welcomeSequence,
                text.schemaPrimer,
                text.squadActivation,
                text.coachingWalkthrough,
                text.replayPreview,
                text.badgePath
              ];
              
              return (
                <button
                  key={stepId}
                  onClick={() => handleStepClick(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    status === 'current' ? 'bg-primary text-primary-foreground' :
                    status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                    status === 'completed' ? 'border-green-400 bg-green-400 text-white' :
                    status === 'current' ? 'border-primary bg-primary text-primary-foreground' :
                    'border-muted-foreground'
                  }`}>
                    {status === 'completed' ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="hidden md:block text-sm font-medium">
                    {stepNames[index]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <div key={currentStep}>
            {getStepComponent()}
          </div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between mt-12 pt-8 border-t border-border"
        >
          <Button
            variant="outline"
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {text.previousStep}
          </Button>
          
          <div className="flex gap-4">
            {currentStep === WELCOME_FLOW_STEPS.length - 1 ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('persona')}
                >
                  <Building className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Enter Platform' : 'Ingresar Plataforma'}
                </Button>
                <Button
                  onClick={() => onNavigate('dashboard')}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  {text.startJourney}
                </Button>
              </>
            ) : (
              <Button
                onClick={handleNextStep}
                disabled={currentStep === WELCOME_FLOW_STEPS.length - 1}
              >
                {text.nextStep}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="progress" className="text-xs">
                {text.overlayProgress}
              </TabsTrigger>
              <TabsTrigger value="metrics" className="text-xs">
                {text.coachingMetrics}
              </TabsTrigger>
              <TabsTrigger value="badges" className="text-xs">
                {text.badgeShowcase}
              </TabsTrigger>
              <TabsTrigger value="engagement" className="text-xs">
                {text.replayEngagement}
              </TabsTrigger>
              <TabsTrigger value="schema" className="text-xs">
                {text.schemaMap}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="progress" className="mt-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.overlayProgress}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <div className="font-medium">Trust Velocity</div>
                        <div className="text-sm text-muted-foreground">finance.trust-velocity</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-green-400">{text.completed}</Badge>
                      <div className="text-sm text-muted-foreground mt-1">3.2x {text.clarityLift}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <div className="font-medium">Assumed Right</div>
                        <div className="text-sm text-muted-foreground">law.assumed-right</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{text.locked}</Badge>
                      <div className="text-sm text-muted-foreground mt-1">2.9x potential</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="metrics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                  title={text.clarityLift}
                  value="3.2x"
                  change={{ value: 15, period: 'baseline', trend: 'up' }}
                  icon={<TrendingUp className="w-5 h-5" />}
                  color="success"
                />
                <MetricCard
                  title="Replay Engagement Rate"
                  value="95%"
                  change={{ value: 8, period: 'last session', trend: 'up' }}
                  icon={<Eye className="w-5 h-5" />}
                  color="primary"
                />
                <MetricCard
                  title="Badge Progress"
                  value="33%"
                  description="1 of 3 unlocked"
                  icon={<Award className="w-5 h-5" />}
                  color="warning"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="badges" className="mt-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.badgeShowcase}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SAMPLE_BADGES.map((badge) => (
                    <div key={badge.id} className="text-center p-4 bg-secondary/50 rounded">
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <div className="font-medium">{badge.title}</div>
                      <Badge variant="outline" className="mt-2">
                        {badge.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="engagement" className="mt-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.replayEngagement}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded">
                    <div>
                      <div className="font-medium">Trust Velocity</div>
                      <div className="text-sm text-muted-foreground">3m 42s avg watch time</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">4.8/5.0</div>
                      <div className="text-sm text-muted-foreground">feedback score</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="schema" className="mt-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.schemaMap}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SCHEMA_NODES.map((node) => (
                    <div key={node.id} className="flex items-center gap-3 p-3 bg-secondary/50 rounded">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="font-mono text-sm">{node.path}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}