import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import MetricCard from './MetricCard';
import { 
  Play,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Eye,
  Clock,
  Target,
  Zap,
  Trophy,
  Users,
  BarChart3,
  Activity,
  Map,
  Lightbulb,
  Rocket,
  Heart,
  Crown,
  Compass,
  Shield,
  Globe,
  ArrowRight,
  ArrowUp,
  Sparkles,
  Timer,
  MessageSquare,
  BookOpen,
  Briefcase,
  Building,
  TrendingDown
} from 'lucide-react';

interface BadgeEarningJourneyProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  targetBadge?: string;
  currentMode?: 'journey' | 'analytics';
}

interface BadgeTarget {
  id: string;
  title: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  icon: string;
  category: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  points: number;
  captionEN: string;
  captionES: string;
  unlockLogic: string;
  prerequisites: string[];
  estimatedTime: string;
  clarityTarget: string;
  feedbackTarget: number;
  overlayPath: string;
  schemaTrace: string;
}

interface CoachingChallenge {
  id: string;
  type: 'overlay-selection' | 'schema-reasoning' | 'clarity-demonstration';
  promptEN: string;
  promptES: string;
  options: string[];
  correctAnswer?: string;
  guidance: { en: string; es: string; };
}

interface JourneyStep {
  id: string;
  title: { en: string; es: string; };
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  progress: number;
  component: React.ComponentType<any>;
}

interface LiveMetric {
  label: string;
  value: string;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'stable';
    period: string;
  };
  color: 'success' | 'warning' | 'danger' | 'primary';
}

interface OverlayVelocity {
  overlay: string;
  squadsActive: number;
  avgCompletionTime: string;
  clarityLift: string;
  trending: 'up' | 'down' | 'stable';
  totalCompletions: number;
}

interface BadgeHeatmapData {
  badge: string;
  icon: string;
  squads: string[];
  unlocks: number[];
  totalUnlocks: number;
  trendingStatus: 'hot' | 'rising' | 'stable' | 'declining';
}

interface RoleImpact {
  role: string;
  overlaysCompleted: number;
  avgClarityLift: string;
  badgesEarned: string[];
  timeInvested: string;
  squadLeadership: number;
  mentorshipGiven: number;
}

const BADGE_TARGETS: BadgeTarget[] = [
  {
    id: 'trust-velocity-master',
    title: '🧩 Trust Velocity Master',
    level: 'Gold',
    icon: '🧩',
    category: 'Finance',
    rarity: 'Rare',
    points: 500,
    captionEN: 'Master of schema-linked investor clarity',
    captionES: 'Maestro de claridad inversora basada en esquemas',
    unlockLogic: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
    prerequisites: ['Complete Finance Schema Primer', 'Pass Trust Velocity Assessment'],
    estimatedTime: '2-3 hours',
    clarityTarget: '3.2x',
    feedbackTarget: 4.8,
    overlayPath: 'finance.trust-velocity',
    schemaTrace: 'finance.trust-velocity'
  },
  {
    id: 'dual-language-navigator',
    title: '🌐 Dual-Language Navigator',
    level: 'Silver',
    icon: '🌐',
    category: 'Communication',
    rarity: 'Epic',
    points: 400,
    captionEN: 'Cross-cultural communication mastery',
    captionES: 'Maestría en comunicación intercultural',
    unlockLogic: 'Overlay Completed in EN + ES',
    prerequisites: ['Complete any overlay in both languages'],
    estimatedTime: '1-2 hours',
    clarityTarget: '2.8x',
    feedbackTarget: 4.5,
    overlayPath: 'communication.bilingual-mastery',
    schemaTrace: 'communication.cross-cultural'
  },
  {
    id: 'schema-architect',
    title: '🏗️ Schema Architect',
    level: 'Platinum',
    icon: '🏗️',
    category: 'Strategy',
    rarity: 'Legendary',
    points: 750,
    captionEN: 'Builder of systematic clarity frameworks',
    captionES: 'Constructor de marcos de claridad sistemática',
    unlockLogic: 'Create 3+ Custom Schemas + Deploy to Squad',
    prerequisites: ['Master 2+ schema paths', 'Lead squad deployment'],
    estimatedTime: '4-6 hours',
    clarityTarget: '4.1x',
    feedbackTarget: 4.9,
    overlayPath: 'strategy.schema-architecture',
    schemaTrace: 'strategy.framework-creation'
  }
];

const COACHING_CHALLENGES: CoachingChallenge[] = [
  {
    id: 'trust-velocity-reasoning',
    type: 'schema-reasoning',
    promptEN: 'Frame your overlay using schema logic. How does this build trust velocity?',
    promptES: 'Presenta tu superposición usando lógica de esquema. ¿Cómo genera velocidad de confianza?',
    options: ['Trust Velocity', 'Assumed Right', 'Time Modeling'],
    correctAnswer: 'Trust Velocity',
    guidance: {
      en: 'Trust velocity focuses on how trust moves faster than capital in business relationships, creating systematic advantages.',
      es: 'La velocidad de confianza se centra en cómo la confianza se mueve más rápido que el capital en las relaciones comerciales, creando ventajas sistemáticas.'
    }
  },
  {
    id: 'bilingual-navigation',
    type: 'overlay-selection',
    promptEN: 'Select the overlay that demonstrates cross-cultural clarity mastery.',
    promptES: 'Selecciona la superposición que demuestra maestría de claridad intercultural.',
    options: ['Dual-Language Navigator', 'Cultural Intelligence', 'Market Adaptation'],
    correctAnswer: 'Dual-Language Navigator',
    guidance: {
      en: 'The Dual-Language Navigator overlay specifically addresses cross-cultural communication and bilingual business frameworks.',
      es: 'La superposición Navegador Bilingüe específicamente aborda la comunicación intercultural y marcos comerciales bilingües.'
    }
  }
];

const LIVE_METRICS: LiveMetric[] = [
  {
    label: 'Avg. Clarity Index Lift',
    value: '3.1x',
    change: { value: 15, trend: 'up', period: 'vs baseline' },
    color: 'success'
  },
  {
    label: 'Replay Engagement Rate',
    value: '82%',
    change: { value: 8, trend: 'up', period: 'this week' },
    color: 'primary'
  },
  {
    label: 'Dual-Language Completion Rate',
    value: '65%',
    change: { value: 12, trend: 'up', period: 'this month' },
    color: 'warning'
  },
  {
    label: 'Demo Conversion Rate',
    value: '44%',
    change: { value: 3, trend: 'down', period: 'last 30 days' },
    color: 'danger'
  }
];

const OVERLAY_VELOCITY: OverlayVelocity[] = [
  {
    overlay: 'Trust Velocity',
    squadsActive: 12,
    avgCompletionTime: '3d 4h',
    clarityLift: '3.2x',
    trending: 'up',
    totalCompletions: 247
  },
  {
    overlay: 'Assumed Right',
    squadsActive: 8,
    avgCompletionTime: '2d 19h',
    clarityLift: '2.9x',
    trending: 'stable',
    totalCompletions: 183
  },
  {
    overlay: 'Dual-Language Navigator',
    squadsActive: 15,
    avgCompletionTime: '1d 12h',
    clarityLift: '2.8x',
    trending: 'up',
    totalCompletions: 312
  },
  {
    overlay: 'Schema Architect',
    squadsActive: 4,
    avgCompletionTime: '6d 8h',
    clarityLift: '4.1x',
    trending: 'stable',
    totalCompletions: 89
  }
];

const BADGE_HEATMAP: BadgeHeatmapData[] = [
  {
    badge: '🧩 Trust Velocity Master',
    icon: '🧩',
    squads: ['LatAm GTM', 'Ops Alpha', 'Founder Solo'],
    unlocks: [9, 6, 3],
    totalUnlocks: 18,
    trendingStatus: 'hot'
  },
  {
    badge: '🌐 Dual-Language Navigator',
    icon: '🌐',
    squads: ['LatAm GTM', 'Founder Solo'],
    unlocks: [7, 4],
    totalUnlocks: 11,
    trendingStatus: 'rising'
  },
  {
    badge: '🏗️ Schema Architect',
    icon: '🏗️',
    squads: ['Ops Alpha', 'Strategy Elite'],
    unlocks: [2, 5],
    totalUnlocks: 7,
    trendingStatus: 'stable'
  }
];

const ROLE_IMPACT: RoleImpact[] = [
  {
    role: 'Founder',
    overlaysCompleted: 42,
    avgClarityLift: '3.3x',
    badgesEarned: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator', '👑 Founder Excellence'],
    timeInvested: '28h 15m',
    squadLeadership: 3,
    mentorshipGiven: 12
  },
  {
    role: 'Ops Lead',
    overlaysCompleted: 28,
    avgClarityLift: '2.9x',
    badgesEarned: ['🧩 Trust Velocity Master', '⚙️ Operations Master'],
    timeInvested: '19h 42m',
    squadLeadership: 2,
    mentorshipGiven: 8
  },
  {
    role: 'Strategy Lead',
    overlaysCompleted: 35,
    avgClarityLift: '3.7x',
    badgesEarned: ['🏗️ Schema Architect', '🎯 Strategic Visionary', '📈 Growth Catalyst'],
    timeInvested: '31h 8m',
    squadLeadership: 4,
    mentorshipGiven: 15
  }
];

export default function BadgeEarningJourney({
  language,
  onNavigate,
  targetBadge = 'trust-velocity-master',
  currentMode = 'journey'
}: BadgeEarningJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBadge, setSelectedBadge] = useState<BadgeTarget | null>(null);
  const [challengeResponse, setChallengeResponse] = useState('');
  const [overlayProgress, setOverlayProgress] = useState(0);
  const [feedbackScore, setFeedbackScore] = useState(0);
  const [clarityLift, setClarityLift] = useState('0x');
  const [journeyCompleted, setJourneyCompleted] = useState(false);
  const [celebrationMode, setCelebrationMode] = useState(false);
  const [activeTab, setActiveTab] = useState('live-metrics');
  const [replayEvents, setReplayEvents] = useState<any[]>([]);
  const [showGuidance, setShowGuidance] = useState(false);

  const t = {
    en: {
      title: 'Badge Earning Journey',
      analyticsTitle: 'Badge Analytics Command Center',
      badgePreview: 'Badge Preview',
      coachingChallenge: 'Coaching Challenge',
      overlayCompletion: 'Overlay Completion',
      feedbackAndLift: 'Feedback & Lift',
      replaySequence: 'Replay Sequence',
      badgeEarned: 'Badge Earned',
      liveMetrics: 'Live Metrics',
      overlayVelocity: 'Overlay Velocity',
      badgeHeatmap: 'Badge Heatmap',
      replayEngagement: 'Replay Engagement',
      roleImpact: 'Role Impact',
      schemaTrace: 'Schema Trace',
      startChallenge: 'Start Challenge',
      submitResponse: 'Submit Response',
      launchOverlay: 'Launch Overlay',
      completeCourse: 'Complete Course',
      earnBadge: 'Earn Badge',
      viewReplay: 'View Replay',
      nextBadge: 'Next Badge',
      backToJourney: 'Back to Journey',
      viewAnalytics: 'View Analytics',
      clarityIndex: 'Clarity Index',
      feedbackScore: 'Feedback Score',
      completionTime: 'Completion Time',
      squadsActive: 'Squads Active',
      avgScore: 'Avg Score',
      totalUnlocks: 'Total Unlocks',
      trending: 'Trending',
      timeInvested: 'Time Invested',
      squadLeadership: 'Squad Leadership',
      mentorshipGiven: 'Mentorship Given',
      badgesEarned: 'Badges Earned',
      overlaysCompleted: 'Overlays Completed',
      guidance: 'Guidance',
      selectOption: 'Select an option to continue',
      excellent: 'Excellent!',
      congratulations: 'Congratulations!',
      badgeUnlocked: 'Badge Unlocked!',
      readyForNext: 'Ready to unlock your next badge?',
      journeyComplete: 'Journey Complete',
      masterAchieved: 'Mastery Achieved',
      celebrationMessage: 'You have successfully earned the badge through systematic clarity achievement!',
      nextChallenge: 'Your next challenge awaits...'
    },
    es: {
      title: 'Viaje de Obtención de Insignias',
      analyticsTitle: 'Centro de Comando de Analíticas de Insignias',
      badgePreview: 'Vista Previa de Insignia',
      coachingChallenge: 'Desafío de Coaching',
      overlayCompletion: 'Finalización de Overlay',
      feedbackAndLift: 'Retroalimentación y Mejora',
      replaySequence: 'Secuencia de Replay',
      badgeEarned: 'Insignia Obtenida',
      liveMetrics: 'Métricas en Vivo',
      overlayVelocity: 'Velocidad de Overlay',
      badgeHeatmap: 'Mapa de Calor de Insignias',
      replayEngagement: 'Engagement de Replay',
      roleImpact: 'Impacto por Rol',
      schemaTrace: 'Rastreo de Esquema',
      startChallenge: 'Iniciar Desafío',
      submitResponse: 'Enviar Respuesta',
      launchOverlay: 'Lanzar Overlay',
      completeCourse: 'Completar Curso',
      earnBadge: 'Obtener Insignia',
      viewReplay: 'Ver Replay',
      nextBadge: 'Siguiente Insignia',
      backToJourney: 'Volver al Viaje',
      viewAnalytics: 'Ver Analíticas',
      clarityIndex: 'Índice de Claridad',
      feedbackScore: 'Puntuación de Retroalimentación',
      completionTime: 'Tiempo de Finalización',
      squadsActive: 'Escuadrones Activos',
      avgScore: 'Puntuación Promedio',
      totalUnlocks: 'Desbloqueos Totales',
      trending: 'Tendencia',
      timeInvested: 'Tiempo Invertido',
      squadLeadership: 'Liderazgo de Escuadrón',
      mentorshipGiven: 'Mentoría Brindada',
      badgesEarned: 'Insignias Obtenidas',
      overlaysCompleted: 'Overlays Completados',
      guidance: 'Orientación',
      selectOption: 'Selecciona una opción para continuar',
      excellent: '¡Excelente!',
      congratulations: '¡Felicitaciones!',
      badgeUnlocked: '¡Insignia Desbloqueada!',
      readyForNext: '¿Listo para desbloquear tu siguiente insignia?',
      journeyComplete: 'Viaje Completo',
      masterAchieved: 'Maestría Alcanzada',
      celebrationMessage: '¡Has obtenido exitosamente la insignia a través del logro de claridad sistemática!',
      nextChallenge: 'Tu próximo desafío te espera...'
    }
  };

  const text = t[language];

  useEffect(() => {
    const badge = BADGE_TARGETS.find(b => b.id === targetBadge);
    setSelectedBadge(badge || BADGE_TARGETS[0]);
  }, [targetBadge]);

  // Simulate overlay progress
  useEffect(() => {
    if (activeStep === 2) {
      const interval = setInterval(() => {
        setOverlayProgress(prev => {
          if (prev >= 100) {
            setActiveStep(3);
            setFeedbackScore(4.8);
            setClarityLift('3.2x');
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [activeStep]);

  // Generate replay events
  useEffect(() => {
    if (activeStep === 4) {
      setReplayEvents([
        {
          id: 1,
          type: 'overlay-start',
          timestamp: '14:22',
          title: 'Trust Velocity Overlay Started',
          trace: selectedBadge?.schemaTrace,
          icon: <Target className="w-5 h-5" />,
          color: 'bg-blue-500'
        },
        {
          id: 2,
          type: 'progress-milestone',
          timestamp: '14:35',
          title: '50% Progress Achieved',
          details: 'Schema understanding demonstrated',
          icon: <TrendingUp className="w-5 h-5" />,
          color: 'bg-green-500'
        },
        {
          id: 3,
          type: 'feedback',
          timestamp: '15:10',
          title: 'Exceptional Clarity Achieved',
          score: feedbackScore,
          lift: clarityLift,
          icon: <Star className="w-5 h-5" />,
          color: 'bg-yellow-500'
        },
        {
          id: 4,
          type: 'badge-earned',
          timestamp: '15:12',
          title: `${selectedBadge?.title} Earned`,
          points: selectedBadge?.points,
          icon: <Award className="w-5 h-5" />,
          color: 'bg-purple-500'
        }
      ]);
    }
  }, [activeStep, selectedBadge, feedbackScore, clarityLift]);

  const handleChallengeSubmit = () => {
    if (challengeResponse) {
      setShowGuidance(true);
      setTimeout(() => {
        setActiveStep(2);
        setShowGuidance(false);
      }, 3000);
    }
  };

  const handleBadgeEarned = () => {
    setCelebrationMode(true);
    setJourneyCompleted(true);
    setActiveStep(5);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
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

  const getHeatmapColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500/20 border-red-500/30';
      case 'rising': return 'bg-green-500/20 border-green-500/30';
      case 'stable': return 'bg-blue-500/20 border-blue-500/30';
      case 'declining': return 'bg-gray-500/20 border-gray-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  // Journey Step Components
  const BadgePreviewStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center text-6xl mb-6 border-2 border-yellow-500/30"
        >
          {selectedBadge?.icon}
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">{selectedBadge?.title}</h2>
        <Badge variant="outline" className={getRarityColor(selectedBadge?.rarity || '')}>
          {selectedBadge?.level} • {selectedBadge?.rarity}
        </Badge>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">
              {language === 'en' ? 'Badge Description' : 'Descripción de Insignia'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' ? selectedBadge?.captionEN : selectedBadge?.captionES}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">
              {language === 'en' ? 'Unlock Requirements' : 'Requisitos de Desbloqueo'}
            </h4>
            <div className="bg-secondary/50 rounded p-3">
              <p className="text-sm font-mono">{selectedBadge?.unlockLogic}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{selectedBadge?.points}</div>
              <div className="text-sm text-muted-foreground">Points</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">{selectedBadge?.clarityTarget}</div>
              <div className="text-sm text-muted-foreground">{text.clarityIndex}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">{selectedBadge?.feedbackTarget}</div>
              <div className="text-sm text-muted-foreground">{text.feedbackScore}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">{selectedBadge?.estimatedTime}</div>
              <div className="text-sm text-muted-foreground">{text.completionTime}</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Button onClick={() => setActiveStep(1)} size="lg">
          <Rocket className="w-5 h-5 mr-2" />
          {text.startChallenge}
        </Button>
      </div>
    </motion.div>
  );

  const CoachingChallengeStep = () => {
    const challenge = COACHING_CHALLENGES.find(c => 
      c.id.includes(selectedBadge?.id.split('-')[0] || '')
    ) || COACHING_CHALLENGES[0];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{text.coachingChallenge}</h2>
          <p className="text-muted-foreground">
            {language === 'en' ? challenge.promptEN : challenge.promptES}
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="font-semibold">{text.selectOption}</h3>
            <div className="grid gap-3">
              {challenge.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setChallengeResponse(option)}
                  className={`p-4 text-left rounded-lg border transition-all ${
                    challengeResponse === option
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:bg-secondary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                      challengeResponse === option
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`} />
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {showGuidance && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium text-green-400">{text.excellent}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {challenge.guidance[language]}
                </p>
              </motion.div>
            )}

            <Button 
              onClick={handleChallengeSubmit}
              disabled={!challengeResponse}
              className="w-full"
              size="lg"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              {text.submitResponse}
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  };

  const OverlayCompletionStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
          <Play className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{text.overlayCompletion}</h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Complete the overlay to demonstrate mastery'
            : 'Completa el overlay para demostrar maestría'
          }
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{selectedBadge?.title.replace(/[🧩🌐🏗️]/g, '').trim()}</h3>
              <p className="text-sm text-muted-foreground font-mono">
                {selectedBadge?.schemaTrace}
              </p>
            </div>
            <Badge 
              variant="outline" 
              className={overlayProgress === 100 ? 'text-green-400' : 'text-yellow-400'}
            >
              {overlayProgress === 100 ? text.completed : `${Math.round(overlayProgress)}%`}
            </Badge>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(overlayProgress)}%</span>
            </div>
            <Progress value={overlayProgress} className="h-3" />
          </div>

          {overlayProgress < 100 && (
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">
                    {language === 'en' ? 'Processing overlay...' : 'Procesando overlay...'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Schema patterns being analyzed for clarity optimization'
                      : 'Patrones de esquema siendo analizados para optimización de claridad'
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );

  const FeedbackAndLiftStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4"
        >
          <TrendingUp className="w-8 h-8 text-green-400" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">{text.feedbackAndLift}</h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Exceptional results achieved!'
            : '¡Resultados excepcionales alcanzados!'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title={text.clarityIndex}
          value={clarityLift}
          change={{ value: 60, period: 'vs baseline', trend: 'up' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title={text.feedbackScore}
          value={`${feedbackScore}/5.0`}
          change={{ value: 25, period: 'vs avg', trend: 'up' }}
          icon={<Star className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title="Replay Engagement"
          value="95%"
          change={{ value: 15, period: 'above target', trend: 'up' }}
          icon={<Eye className="w-5 h-5" />}
          color="warning"
        />
      </div>

      <Card className="p-6 bg-green-500/5 border-green-500/20">
        <div className="text-center space-y-4">
          <div className="text-4xl">{selectedBadge?.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-2">
              {language === 'en' ? 'Requirements Met!' : '¡Requisitos Cumplidos!'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Clarity Index: {clarityLift} ≥ {selectedBadge?.clarityTarget}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Feedback: {feedbackScore} ≥ {selectedBadge?.feedbackTarget}</span>
              </div>
            </div>
          </div>
          <Button onClick={() => setActiveStep(4)} size="lg">
            <ArrowRight className="w-5 h-5 mr-2" />
            {text.viewReplay}
          </Button>
        </div>
      </Card>
    </motion.div>
  );

  const ReplaySequenceStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
          <Clock className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{text.replaySequence}</h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Your journey timeline and achievement sequence'
            : 'Tu línea de tiempo del viaje y secuencia de logros'
          }
        </p>
      </div>

      <Card className="p-6">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
          
          <div className="space-y-6">
            {replayEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start gap-4"
              >
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white ${event.color}`}>
                  {event.icon}
                </div>
                
                <Card className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{event.title}</h4>
                    <span className="text-sm text-muted-foreground">{event.timestamp}</span>
                  </div>
                  
                  {event.trace && (
                    <p className="text-xs font-mono text-muted-foreground mb-2">{event.trace}</p>
                  )}
                  
                  {event.score && (
                    <div className="flex gap-4 text-sm">
                      <span>Score: <strong>{event.score}/5.0</strong></span>
                      <span>Lift: <strong className="text-green-400">{event.lift}</strong></span>
                    </div>
                  )}
                  
                  {event.points && (
                    <div className="text-sm">
                      <span className="text-yellow-400 font-medium">+{event.points} points</span>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Button onClick={handleBadgeEarned} size="lg">
          <Trophy className="w-5 h-5 mr-2" />
          {text.earnBadge}
        </Button>
      </div>
    </motion.div>
  );

  const BadgeEarnedStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center text-7xl mb-6 shadow-2xl shadow-yellow-500/20"
        >
          {selectedBadge?.icon}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {text.congratulations}
          </h1>
          <h2 className="text-2xl font-semibold mb-4">{text.badgeUnlocked}</h2>
          <div className="text-6xl mb-4">🎉</div>
        </motion.div>
      </motion.div>

      <Card className="p-8 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-500/20">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedBadge?.title}</h3>
            <p className="text-muted-foreground text-lg">
              {language === 'en' ? selectedBadge?.captionEN : selectedBadge?.captionES}
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              {selectedBadge?.level}
            </Badge>
            <Badge variant="outline" className={`text-lg px-4 py-2 ${getRarityColor(selectedBadge?.rarity || '')}`}>
              {selectedBadge?.rarity}
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 text-yellow-400">
              +{selectedBadge?.points} points
            </Badge>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            {text.celebrationMessage}
          </p>
        </div>
      </Card>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">{text.readyForNext}</h3>
          <p className="text-muted-foreground">{text.nextChallenge}</p>
          
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => onNavigate('badge-system')}>
              <Eye className="w-4 h-4 mr-2" />
              {language === 'en' ? 'View All Badges' : 'Ver Todas las Insignias'}
            </Button>
            <Button onClick={() => {
              setActiveStep(0);
              setSelectedBadge(BADGE_TARGETS[1]);
              setCelebrationMode(false);
              setJourneyCompleted(false);
            }}>
              <ArrowRight className="w-4 h-4 mr-2" />
              {text.nextBadge}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  if (currentMode === 'analytics') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Analytics Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {text.analyticsTitle}
                </h1>
                <p className="text-muted-foreground mt-2">
                  {language === 'en' 
                    ? 'Real-time badge performance analytics and squad engagement metrics'
                    : 'Analíticas de rendimiento de insignias en tiempo real y métricas de engagement de escuadrón'
                  }
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={() => onNavigate('founder-welcome')}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                {text.backToJourney}
              </Button>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="live-metrics">{text.liveMetrics}</TabsTrigger>
              <TabsTrigger value="overlay-velocity">{text.overlayVelocity}</TabsTrigger>
              <TabsTrigger value="badge-heatmap">{text.badgeHeatmap}</TabsTrigger>
              <TabsTrigger value="replay-engagement">{text.replayEngagement}</TabsTrigger>
              <TabsTrigger value="role-impact">{text.roleImpact}</TabsTrigger>
              <TabsTrigger value="schema-trace">{text.schemaTrace}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="live-metrics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LIVE_METRICS.map((metric, index) => (
                  <MetricCard
                    key={index}
                    title={metric.label}
                    value={metric.value}
                    change={metric.change}
                    icon={getTrendIcon(metric.change?.trend || 'stable')}
                    color={metric.color}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="overlay-velocity" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {OVERLAY_VELOCITY.map((overlay, index) => (
                  <Card key={index} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{overlay.overlay}</h3>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(overlay.trending)}
                          <Badge variant="outline">{overlay.trending}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">{text.squadsActive}</div>
                          <div className="text-lg font-bold">{overlay.squadsActive}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{text.clarityIndex}</div>
                          <div className="text-lg font-bold text-green-400">{overlay.clarityLift}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{text.completionTime}</div>
                          <div className="text-lg font-bold">{overlay.avgCompletionTime}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Total</div>
                          <div className="text-lg font-bold">{overlay.totalCompletions}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="badge-heatmap" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BADGE_HEATMAP.map((badge, index) => (
                  <Card key={index} className={`p-6 ${getHeatmapColor(badge.trendingStatus)}`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{badge.icon}</span>
                          <span className="font-medium text-sm">{badge.badge}</span>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {badge.trendingStatus}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">{text.totalUnlocks}</div>
                        <div className="text-2xl font-bold">{badge.totalUnlocks}</div>
                      </div>
                      
                      <div className="space-y-2">
                        {badge.squads.map((squad, squadIndex) => (
                          <div key={squadIndex} className="flex items-center justify-between">
                            <span className="text-sm">{squad}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-2 bg-secondary rounded">
                                <div 
                                  className="h-full bg-primary rounded"
                                  style={{ 
                                    width: `${(badge.unlocks[squadIndex] / Math.max(...badge.unlocks)) * 100}%` 
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium">{badge.unlocks[squadIndex]}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="role-impact" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {ROLE_IMPACT.map((role, index) => (
                  <Card key={index} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{role.role}</h3>
                          <p className="text-sm text-muted-foreground">{text.roleImpact}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">{text.overlaysCompleted}</div>
                          <div className="text-lg font-bold">{role.overlaysCompleted}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{text.clarityIndex}</div>
                          <div className="text-lg font-bold text-green-400">{role.avgClarityLift}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{text.timeInvested}</div>
                          <div className="text-lg font-bold">{role.timeInvested}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{text.squadLeadership}</div>
                          <div className="text-lg font-bold">{role.squadLeadership}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">{text.badgesEarned}</div>
                        <div className="flex flex-wrap gap-1">
                          {role.badgesEarned.map((badge, badgeIndex) => (
                            <span key={badgeIndex} className="text-lg">{badge.split(' ')[0]}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  const journeySteps = [
    { id: 'preview', title: text.badgePreview, component: BadgePreviewStep },
    { id: 'challenge', title: text.coachingChallenge, component: CoachingChallengeStep },
    { id: 'completion', title: text.overlayCompletion, component: OverlayCompletionStep },
    { id: 'feedback', title: text.feedbackAndLift, component: FeedbackAndLiftStep },
    { id: 'replay', title: text.replaySequence, component: ReplaySequenceStep },
    { id: 'earned', title: text.badgeEarned, component: BadgeEarnedStep }
  ];

  const CurrentStepComponent = journeySteps[activeStep]?.component || BadgePreviewStep;

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
              <p className="text-muted-foreground mt-2">
                {language === 'en' 
                  ? 'Complete the journey from badge preview to mastery achievement'
                  : 'Completa el viaje desde la vista previa de insignia hasta el logro de maestría'
                }
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => onNavigate('badge-earning-journey?mode=analytics')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                {text.viewAnalytics}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('founder-welcome')}
              >
                <Crown className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Founder Center' : 'Centro Fundador'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      {!celebrationMode && (
        <div className="bg-card/50 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {journeySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    index === activeStep ? 'bg-primary text-primary-foreground' :
                    index < activeStep ? 'bg-green-500/20 text-green-400' :
                    'text-muted-foreground'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                    index < activeStep ? 'border-green-400 bg-green-400 text-white' :
                    index === activeStep ? 'border-primary bg-primary text-primary-foreground' :
                    'border-muted-foreground'
                  }`}>
                    {index < activeStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="hidden md:block text-sm font-medium">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <div key={activeStep}>
            <CurrentStepComponent />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}