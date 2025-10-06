import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Play,
  Pause,
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  BarChart3,
  Clock,
  Award,
  Map,
  Globe,
  TrendingUp,
  Eye,
  Download,
  Share,
  Zap,
  Crown,
  Trophy,
  Star,
  CheckCircle,
  Timer,
  DollarSign,
  Building,
  UserCheck,
  MessageSquare,
  Settings,
  Filter,
  RefreshCw
} from 'lucide-react';
import InvestorViewPanel from './InvestorViewPanel';
import RemixArcShowcase from './RemixArcShowcase';
import ReplayNudgeNode from './ReplayNudgeNode';
import BadgeLogicEditNode from './BadgeLogicEditNode';
import SchemaTracePlayback from './SchemaTracePlayback';
import TraceNode from './TraceNode';
import InvestorFeedbackSystem from './InvestorFeedbackSystem';
import InvestorAnalyticsDashboard from './InvestorAnalyticsDashboard';

interface SquadData {
  id: string;
  name: string;
  overlaysCompleted: number;
  clarityIndex: string;
  demoCount: number;
  market: string;
  replayLink: string;
  status: 'active' | 'standby' | 'deployed';
  members: number;
  lastActivity: string;
}

interface OverlayData {
  id: string;
  title: string;
  schema: string;
  clarityLift: string;
  replayLink: string;
  languages: string[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completionRate: number;
}

interface TimelineEvent {
  id: string;
  type: 'overlay' | 'feedback' | 'badge' | 'demo' | 'milestone';
  trace?: string;
  score?: number;
  clarityLift?: string;
  badge?: string;
  title?: string;
  timestamp: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
}

interface BadgeData {
  id: string;
  title: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  earnedBy: string;
  replayLink: string;
  category: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  points: number;
}

interface FocusOption {
  id: string;
  title: { en: string; es: string; };
  description: { en: string; es: string; };
  icon: string;
  color: string;
  metrics: {
    squads: number;
    overlays: number;
    clarityLift: string;
    engagement: string;
  };
}

interface InvestorDemoCenterProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'showcase' | 'feedback' | 'analytics';
}

const DEMO_FLOW_STEPS = [
  'welcome',
  'squad-preview', 
  'overlay-walkthrough',
  'coaching-replay',
  'proof-summary'
];

const FOCUS_OPTIONS: FocusOption[] = [
  {
    id: 'founder-led-squads',
    title: { 
      en: 'Founder-led Squads', 
      es: 'Escuadrones Liderados por Fundadores' 
    },
    description: { 
      en: 'Schema-driven tactical teams optimized for rapid execution', 
      es: 'Equipos tácticos basados en esquemas optimizados para ejecución rápida' 
    },
    icon: '👑',
    color: 'from-yellow-500 to-orange-500',
    metrics: {
      squads: 8,
      overlays: 42,
      clarityLift: '3.2x',
      engagement: '87%'
    }
  },
  {
    id: 'investor-facing-overlays',
    title: { 
      en: 'Investor-facing Overlays', 
      es: 'Overlays para Inversores' 
    },
    description: { 
      en: 'Cinematic proof sequences demonstrating ROI and strategic clarity', 
      es: 'Secuencias de prueba cinemáticas que demuestran ROI y claridad estratégica' 
    },
    icon: '📊',
    color: 'from-blue-500 to-purple-500',
    metrics: {
      squads: 6,
      overlays: 28,
      clarityLift: '4.1x',
      engagement: '92%'
    }
  },
  {
    id: 'latam-market',
    title: { 
      en: 'LatAm Market Focus', 
      es: 'Enfoque en Mercado LatAm' 
    },
    description: { 
      en: 'Bilingual-first architecture targeting Latino entrepreneurship', 
      es: 'Arquitectura bilingüe dirigida al emprendimiento latino' 
    },
    icon: '🌎',
    color: 'from-green-500 to-teal-500',
    metrics: {
      squads: 12,
      overlays: 56,
      clarityLift: '2.9x',
      engagement: '78%'
    }
  },
  {
    id: 'dual-language-coaching',
    title: { 
      en: 'Dual-Language Coaching', 
      es: 'Coaching Bilingüe' 
    },
    description: { 
      en: 'Cultural intelligence amplifying business velocity across markets', 
      es: 'Inteligencia cultural amplificando velocidad de negocio entre mercados' 
    },
    icon: '🌐',
    color: 'from-purple-500 to-pink-500',
    metrics: {
      squads: 15,
      overlays: 73,
      clarityLift: '3.6x',
      engagement: '84%'
    }
  }
];

const SAMPLE_SQUADS: SquadData[] = [
  {
    id: 'latam-gtm',
    name: 'LatAm GTM Strike Team',
    overlaysCompleted: 42,
    clarityIndex: '3.1x',
    demoCount: 6,
    market: 'LatAm',
    replayLink: '/demo?id=latam-gtm',
    status: 'active',
    members: 8,
    lastActivity: '2 hours ago'
  },
  {
    id: 'ops-alpha',
    name: 'Ops Alpha',
    overlaysCompleted: 28,
    clarityIndex: '2.7x',
    demoCount: 4,
    market: 'US',
    replayLink: '/demo?id=ops-alpha',
    status: 'deployed',
    members: 6,
    lastActivity: '4 hours ago'
  },
  {
    id: 'finance-beta',
    name: 'Finance Velocity Squad',
    overlaysCompleted: 35,
    clarityIndex: '3.4x',
    demoCount: 8,
    market: 'Global',
    replayLink: '/demo?id=finance-beta',
    status: 'active',
    members: 5,
    lastActivity: '1 hour ago'
  }
];

const SAMPLE_OVERLAYS: OverlayData[] = [
  {
    id: 'trust-velocity',
    title: 'Trust Velocity',
    schema: 'finance.trust-velocity',
    clarityLift: '3.2x',
    replayLink: '/replay?id=trust-velocity',
    languages: ['EN', 'ES'],
    category: 'Finance',
    difficulty: 'intermediate',
    completionRate: 87
  },
  {
    id: 'assumed-right',
    title: 'Assumed Right',
    schema: 'law.assumed-right',
    clarityLift: '2.9x',
    replayLink: '/replay?id=assumed-right',
    languages: ['EN'],
    category: 'Legal',
    difficulty: 'advanced',
    completionRate: 74
  },
  {
    id: 'velocity-modeling',
    title: 'Time Velocity Modeling',
    schema: 'time.velocity-modeling',
    clarityLift: '3.7x',
    replayLink: '/replay?id=velocity-modeling',
    languages: ['EN', 'ES'],
    category: 'Strategy',
    difficulty: 'intermediate',
    completionRate: 92
  }
];

const SAMPLE_TIMELINE: TimelineEvent[] = [
  {
    id: 'event-1',
    type: 'overlay',
    trace: 'finance.trust-velocity',
    timestamp: '2025-09-28T14:22Z',
    description: 'Trust Velocity overlay completed',
    impact: 'high'
  },
  {
    id: 'event-2',
    type: 'feedback',
    score: 4.8,
    clarityLift: '3.2x',
    timestamp: '2025-09-28T15:10Z',
    description: 'Exceptional coaching feedback received',
    impact: 'high'
  },
  {
    id: 'event-3',
    type: 'badge',
    badge: '🧩 Trust Velocity Master',
    timestamp: '2025-09-28T15:12Z',
    description: 'Trust Velocity Master badge earned',
    impact: 'medium'
  },
  {
    id: 'event-4',
    type: 'demo',
    title: 'Investor Pitch Alpha',
    timestamp: '2025-09-29T10:00Z',
    description: 'Investor-facing demo launched',
    impact: 'high'
  },
  {
    id: 'event-5',
    type: 'milestone',
    timestamp: '2025-09-30T16:30Z',
    description: 'Squad reached 100% engagement milestone',
    impact: 'high'
  }
];

const SAMPLE_BADGES: BadgeData[] = [
  {
    id: 'trust-velocity-master',
    title: '🧩 Trust Velocity Master',
    level: 'Gold',
    earnedBy: 'Luis Dominguez',
    replayLink: '/replay?id=trust-velocity',
    category: 'Finance',
    rarity: 'Rare',
    points: 500
  },
  {
    id: 'dual-language-navigator',
    title: '🌐 Dual-Language Navigator',
    level: 'Silver',
    earnedBy: 'LatAm GTM',
    replayLink: '/replay?id=dual-language',
    category: 'Language',
    rarity: 'Epic',
    points: 400
  },
  {
    id: 'velocity-optimizer',
    title: '⚡ Velocity Optimizer',
    level: 'Platinum',
    earnedBy: 'Finance Squad',
    replayLink: '/replay?id=velocity-optimizer',
    category: 'Strategy',
    rarity: 'Legendary',
    points: 750
  }
];

export default function InvestorDemoCenter({ 
  language, 
  onNavigate,
  currentMode = 'showcase'
}: InvestorDemoCenterProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFocus, setSelectedFocus] = useState<FocusOption | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedSquad, setSelectedSquad] = useState<SquadData | null>(null);
  const [selectedOverlay, setSelectedOverlay] = useState<OverlayData | null>(null);
  
  // New investor feedback state
  const [selectedInvestor, setSelectedInvestor] = useState<string>('LatAm VC');
  const [selectedRemix, setSelectedRemix] = useState<string>('All Remixes');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Dual-language');
  const [feedbackMode, setFeedbackMode] = useState<'showcase' | 'feedback' | 'analytics'>(currentMode);

  const t = {
    en: {
      title: 'Investor Demo Center',
      subtitle: 'Experience OVERWATCH³ through cinematic proof sequences',
      welcome: 'Welcome to OVERWATCH³',
      chooseFocus: 'Choose your focus to begin',
      squadGallery: 'Squad Gallery',
      overlayLibrary: 'Overlay Library',
      coachingMetrics: 'Coaching Metrics',
      replayTimeline: 'Replay Timeline',
      badgeShowcase: 'Badge Showcase',
      schemaMap: 'Schema Map',
      proofSummary: 'Proof Summary',
      startDemo: 'Start Demo',
      nextStep: 'Next Step',
      previousStep: 'Previous Step',
      viewReplay: 'View Replay',
      completed: 'Completed',
      active: 'Active',
      deployed: 'Deployed',
      standby: 'Standby',
      avgClarityLift: 'Avg. Clarity Index Lift',
      replayEngagement: 'Replay Engagement Rate',
      dualLanguageCompletion: 'Dual-Language Completion Rate',
      totalSquads: 'Total Squads',
      totalOverlays: 'Total Overlays',
      avgScore: 'Average Score',
      completionRate: 'Completion Rate',
      marketImpact: 'Market Impact',
      strategicValue: 'Strategic Value',
      platformMetrics: 'Platform Metrics',
      engagementAnalytics: 'Engagement Analytics'
    },
    es: {
      title: 'Centro de Demostración para Inversores',
      subtitle: 'Experimenta OVERWATCH³ a través de secuencias de prueba cinemáticas',
      welcome: 'Bienvenido a OVERWATCH³',
      chooseFocus: 'Elige tu enfoque para comenzar',
      squadGallery: 'Galería de Escuadrones',
      overlayLibrary: 'Biblioteca de Overlays',
      coachingMetrics: 'Métricas de Coaching',
      replayTimeline: 'Timeline de Replay',
      badgeShowcase: 'Vitrina de Insignias',
      schemaMap: 'Mapa de Esquemas',
      proofSummary: 'Resumen de Pruebas',
      startDemo: 'Iniciar Demo',
      nextStep: 'Siguiente Paso',
      previousStep: 'Paso Anterior',
      viewReplay: 'Ver Replay',
      completed: 'Completado',
      active: 'Activo',
      deployed: 'Desplegado',
      standby: 'En Espera',
      avgClarityLift: 'Incremento Promedio Índice Claridad',
      replayEngagement: 'Tasa de Engagement de Replay',
      dualLanguageCompletion: 'Tasa de Finalización Bilingüe',
      totalSquads: 'Total Escuadrones',
      totalOverlays: 'Total Overlays',
      avgScore: 'Puntuación Promedio',
      completionRate: 'Tasa de Finalización',
      marketImpact: 'Impacto de Mercado',
      strategicValue: 'Valor Estratégico',
      platformMetrics: 'Métricas de Plataforma',
      engagementAnalytics: 'Analíticas de Engagement',
      investorViewSelector: 'Selector de Vista de Inversor',
      remixArcShowcase: 'Vitrina de Arco Remix',
      coachingTimeline: 'Timeline de Coaching',
      feedbackPanel: 'Panel de Feedback',
      analyticsReports: 'Reportes de Analíticas',
      showcase: 'Vitrina',
      feedback: 'Feedback',
      analytics: 'Analíticas'
    }
  };

  const text = t[language];

  // Handle mode switching
  const handleModeChange = (mode: 'showcase' | 'feedback' | 'analytics') => {
    setFeedbackMode(mode);
    // Update URL to reflect mode change
    const params = new URLSearchParams(window.location.search);
    params.set('mode', mode);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  // Auto-advance demo progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleStartDemo = () => {
    setIsPlaying(true);
    setDemoProgress(0);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < DEMO_FLOW_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'deployed': return 'bg-blue-500';
      case 'standby': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Bronze': return 'text-orange-600';
      case 'Silver': return 'text-gray-400';
      case 'Gold': return 'text-yellow-500';
      case 'Platinum': return 'text-purple-400';
      case 'Diamond': return 'text-blue-400';
      default: return 'text-gray-400';
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

  const renderWelcomeStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {text.welcome}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {text.chooseFocus}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {FOCUS_OPTIONS.map((focus) => (
          <motion.div
            key={focus.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`p-6 cursor-pointer transition-all ${
                selectedFocus?.id === focus.id 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:bg-secondary/50'
              }`}
              onClick={() => setSelectedFocus(focus)}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${focus.color} flex items-center justify-center text-2xl`}>
                  {focus.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{focus.title[language]}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {focus.description[language]}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-secondary/50 rounded p-2">
                    <div className="font-medium">{focus.metrics.squads}</div>
                    <div className="text-muted-foreground">Squads</div>
                  </div>
                  <div className="bg-secondary/50 rounded p-2">
                    <div className="font-medium">{focus.metrics.clarityLift}</div>
                    <div className="text-muted-foreground">Clarity</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedFocus && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <Button
            size="lg"
            onClick={handleStartDemo}
            className={`w-full bg-gradient-to-r ${selectedFocus.color} hover:opacity-90 transition-opacity`}
          >
            <Play className="w-5 h-5 mr-2" />
            {text.startDemo}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );

  const renderSquadPreview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{text.squadGallery}</h3>
        <p className="text-muted-foreground">
          Schema-driven tactical teams optimized for rapid execution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_SQUADS.map((squad) => (
          <motion.div
            key={squad.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedSquad(squad)}
          >
            <Card className="p-6 hover:bg-secondary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(squad.status)}`} />
                    <Badge variant="outline" className="text-xs">
                      {text[squad.status as keyof typeof text] || squad.status}
                    </Badge>
                  </div>
                  <Badge variant="outline">
                    {squad.market}
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">{squad.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {squad.members} members • {squad.lastActivity}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{squad.overlaysCompleted}</div>
                    <div className="text-xs text-muted-foreground">Overlays</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-400">{squad.clarityIndex}</div>
                    <div className="text-xs text-muted-foreground">Clarity</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">{squad.demoCount}</div>
                    <div className="text-xs text-muted-foreground">Demos</div>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  {text.viewReplay}
                </Button>
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
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-xl">{selectedSquad.name}</h4>
                  <p className="text-muted-foreground">Selected for detailed analysis</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-secondary/50 rounded">
                  <div className="text-2xl font-bold text-primary">{selectedSquad.clarityIndex}</div>
                  <div className="text-sm text-muted-foreground">Clarity Index</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded">
                  <div className="text-2xl font-bold text-green-400">{selectedSquad.overlaysCompleted}</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded">
                  <div className="text-2xl font-bold text-blue-400">{selectedSquad.demoCount}</div>
                  <div className="text-sm text-muted-foreground">Demos</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded">
                  <div className="text-2xl font-bold text-purple-400">{selectedSquad.members}</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );

  const renderOverlayWalkthrough = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{text.overlayLibrary}</h3>
        <p className="text-muted-foreground">
          Schema-driven coaching overlays with measurable clarity lift
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_OVERLAYS.map((overlay) => (
          <motion.div
            key={overlay.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedOverlay(overlay)}
          >
            <Card className="p-6 hover:bg-secondary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {overlay.category}
                  </Badge>
                  <div className="flex gap-1">
                    {overlay.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">{overlay.title}</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    {overlay.schema}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion Rate</span>
                    <span>{overlay.completionRate}%</span>
                  </div>
                  <Progress value={overlay.completionRate} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-green-400">{overlay.clarityLift}</div>
                    <div className="text-xs text-muted-foreground">Clarity Lift</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-400">
                      {overlay.difficulty === 'beginner' ? 'Easy' : 
                       overlay.difficulty === 'intermediate' ? 'Med' : 'Hard'}
                    </div>
                    <div className="text-xs text-muted-foreground">Difficulty</div>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Launch Overlay
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedOverlay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-green-500/5 border-green-500/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-green-400" />
                <div>
                  <h4 className="font-bold text-xl">{selectedOverlay.title}</h4>
                  <p className="text-muted-foreground font-mono">{selectedOverlay.schema}</p>
                </div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded">
                <div className="text-3xl font-bold text-green-400 mb-2">{selectedOverlay.clarityLift}</div>
                <div className="text-sm text-muted-foreground">Average Clarity Lift</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Based on {selectedOverlay.completionRate}% completion rate
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );

  const renderCoachingReplay = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{text.replayTimeline}</h3>
        <p className="text-muted-foreground">
          Cinematic replay of coaching sessions and achievements
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
          
          <div className="space-y-6">
            {SAMPLE_TIMELINE.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start gap-4"
              >
                {/* Timeline Node */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                  event.impact === 'high' ? 'bg-green-500' :
                  event.impact === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}>
                  {event.type === 'overlay' && <Target className="w-6 h-6 text-white" />}
                  {event.type === 'feedback' && <Star className="w-6 h-6 text-white" />}
                  {event.type === 'badge' && <Award className="w-6 h-6 text-white" />}
                  {event.type === 'demo' && <Play className="w-6 h-6 text-white" />}
                  {event.type === 'milestone' && <Trophy className="w-6 h-6 text-white" />}
                </div>

                {/* Event Content */}
                <Card className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold">{event.description}</h4>
                  
                  {event.trace && (
                    <p className="text-sm text-muted-foreground font-mono mt-1">
                      {event.trace}
                    </p>
                  )}
                  
                  {event.score && (
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{event.score}</span>
                      </div>
                      {event.clarityLift && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="font-medium">{event.clarityLift}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {event.badge && (
                    <div className="mt-2 text-lg">{event.badge}</div>
                  )}
                  
                  {event.title && (
                    <p className="text-sm font-medium text-primary mt-1">{event.title}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProofSummary = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{text.proofSummary}</h3>
        <p className="text-muted-foreground">
          Comprehensive metrics demonstrating OVERWATCH³ impact
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">3.1x</div>
          <div className="text-sm text-muted-foreground">{text.avgClarityLift}</div>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Eye className="w-8 h-8 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-2">82%</div>
          <div className="text-sm text-muted-foreground">{text.replayEngagement}</div>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
            <Globe className="w-8 h-8 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-2">65%</div>
          <div className="text-sm text-muted-foreground">{text.dualLanguageCompletion}</div>
        </Card>
      </div>

      {/* Badge Showcase */}
      <div className="max-w-4xl mx-auto">
        <h4 className="text-xl font-semibold mb-4 text-center">{text.badgeShowcase}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_BADGES.map((badge) => (
            <Card key={badge.id} className="p-4">
              <div className="text-center space-y-2">
                <div className="text-2xl">{badge.title}</div>
                <Badge variant="outline" className={getLevelColor(badge.level)}>
                  {badge.level}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Earned by {badge.earnedBy}
                </div>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                    {badge.rarity}
                  </Badge>
                  <Badge variant="outline">
                    {badge.points} pts
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Schema Map */}
      <div className="max-w-4xl mx-auto">
        <h4 className="text-xl font-semibold mb-4 text-center">{text.schemaMap}</h4>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['finance.trust-velocity', 'law.assumed-right', 'badge.dual-language', 'demo.pitch-alpha'].map((path) => (
              <div key={path} className="flex items-center gap-3 p-3 bg-secondary/50 rounded">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-mono text-sm">{path}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 max-w-md mx-auto">
        <Button className="flex-1" onClick={() => onNavigate('persona')}>
          <Building className="w-4 h-4 mr-2" />
          Try Platform
        </Button>
        <Button variant="outline" className="flex-1" onClick={() => onNavigate('demo')}>
          <Share className="w-4 h-4 mr-2" />
          Request Demo
        </Button>
      </div>
    </motion.div>
  );

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
              <Badge variant="outline" className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Step {currentStep + 1} of {DEMO_FLOW_STEPS.length}
              </Badge>
              {demoProgress > 0 && (
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <div className="w-32">
                    <Progress value={demoProgress} className="h-2" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <div key={currentStep}>
            {currentStep === 0 && renderWelcomeStep()}
            {currentStep === 1 && renderSquadPreview()}
            {currentStep === 2 && renderOverlayWalkthrough()}
            {currentStep === 3 && renderCoachingReplay()}
            {currentStep === 4 && renderProofSummary()}
          </div>
        </AnimatePresence>

        {/* Navigation */}
        {currentStep > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between mt-8 pt-8 border-t border-border"
          >
            <Button
              variant="outline"
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {text.previousStep}
            </Button>
            
            <Button
              onClick={handleNextStep}
              disabled={currentStep === DEMO_FLOW_STEPS.length - 1}
            >
              {text.nextStep}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}