import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import MetricCard from './MetricCard';
import OverlayOverrideNode from './OverlayOverrideNode';
import ReplayNudgeNode from './ReplayNudgeNode';
import BadgeLogicEditNode from './BadgeLogicEditNode';
import SchemaTracePlayback from './SchemaTracePlayback';
import TraceNode from './TraceNode';
import { 
  Play,
  Upload,
  Download,
  Share,
  Eye,
  ArrowLeft,
  Plus,
  X,
  Settings,
  Users,
  Globe,
  BarChart3,
  Activity,
  TrendingUp,
  TrendingDown,
  Clock,
  MessageSquare,
  Trophy,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  Info,
  Filter,
  Search,
  Save,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Wand2,
  Map,
  Layers,
  Code,
  GitBranch,
  ArrowRight,
  Calendar,
  Heart,
  Star,
  RefreshCw,
  ShieldCheck,
  Gauge,
  LineChart,
  PieChart,
  BarChart,
  Radar,
  Shuffle,
  Bell,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  Compass,
  Route,
  Sliders,
  RotateCcw,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Edit3,
  Sliders,
  RotateCcw
} from 'lucide-react';

interface Squad {
  id: string;
  name: string;
  type: 'LatAm GTM' | 'Ops Alpha' | 'Founder Solo' | 'Investor Beta' | 'Coach Collective';
  activeRemix: string;
  overlaysCompleted: number;
  badgesEarned: string[];
  clarityIndex: string;
  members: number;
  lastActivity: string;
  status: 'active' | 'paused' | 'completed';
}

interface RemixEngagement {
  remixId: string;
  title: string;
  squadsActive: number;
  avgReplayViews: number;
  avgWatchTime: string;
  feedbackScore: number;
  clarityLift: string;
  dropOffRate: number;
  completionRate: number;
}

interface CoachingLift {
  overlayId: string;
  title: string;
  avgClarityLift: string;
  feedbackScore: number;
  badgeUnlockRate: number;
  avgTimeToMastery: string;
  improvementTrend: 'up' | 'down' | 'stable';
}

interface BadgeVelocity {
  badgeId: string;
  title: string;
  icon: string;
  squads: string[];
  unlocks: number[];
  avgTimeToUnlock: string;
  successRate: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}

interface SchemaImpact {
  path: string;
  title: string;
  squadsActive: number;
  clarityLift: string;
  badgesLinked: string[];
  connectionStrength: number;
  optimizationScore: number;
}

interface PerformanceSignal {
  squadId: string;
  squadName: string;
  overlay: string;
  clarityLift: number;
  feedbackScore: number;
  replayDropOff: number;
  status: 'optimal' | 'warning' | 'critical';
  lastUpdated: string;
}

interface AutoTuningRecommendation {
  type: 'prompt' | 'overlay' | 'badge' | 'schema';
  squadId: string;
  current: string;
  recommended: string;
  reason: string;
  impact: string;
  confidence: number;
}

interface OverlayOverride {
  squadId: string;
  current: string;
  override: string;
  reason: string;
  deployedAt?: string;
  performance?: {
    clarityLift: number;
    feedbackScore: number;
    completionRate: number;
  };
}

interface PromptOverride {
  overlayId: string;
  originalEN: string;
  customEN: string;
  originalES: string;
  customES: string;
  deployedBy: string;
  deployedAt: string;
}

interface ReplayNudge {
  id: string;
  trigger: string;
  messageEN: string;
  messageES: string;
  action: string;
  targetRoles: string[];
  active: boolean;
}

interface BadgeLogicOverride {
  badgeId: string;
  originalLogic: string;
  customLogic: string;
  reason: string;
  deployedBy: string;
  performance: {
    unlockRate: number;
    avgTime: string;
    satisfaction: number;
  };
}

interface SchemaTraceNode {
  path: string;
  status: 'active' | 'stable' | 'high engagement' | 'underperforming' | 'critical';
  connections: number;
  clarityImpact: number;
  lastUpdated: string;
}

interface CoachingEvent {
  id: string;
  timestamp: string;
  overlay: string;
  promptEN: string;
  promptES: string;
  action: string;
  triggeredBy: string;
  squadId: string;
  replayLink: string;
  clarityLift: string;
  status: 'deployed' | 'pending' | 'rolled-back';
}

interface OverlayOverrideEvent {
  id: string;
  timestamp: string;
  squad: string;
  squadId: string;
  from: string;
  to: string;
  reason: string;
  schema: string;
  deployedBy: string;
  status: 'deployed' | 'pending' | 'rolled-back' | 'error';
  performance?: {
    clarityLift: number;
    engagementRate: number;
    completionRate: number;
    feedbackScore: number;
  };
  replayLink?: string;
}

interface SquadPackDeploymentCenterProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'deploy' | 'analytics' | 'monitor' | 'tune' | 'control' | 'overrides' | 'nodes';
}

const DEMO_SQUADS: Squad[] = [
  {
    id: 'latam-gtm-01',
    name: 'LatAm GTM',
    type: 'LatAm GTM',
    activeRemix: 'Trust Velocity Remix (Investor Edition)',
    overlaysCompleted: 42,
    badgesEarned: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    clarityIndex: '3.4x',
    members: 8,
    lastActivity: '2h ago',
    status: 'active'
  },
  {
    id: 'ops-alpha-01',
    name: 'Ops Alpha',
    type: 'Ops Alpha',
    activeRemix: 'Assumed Right Remix (Legal Clarity)',
    overlaysCompleted: 28,
    badgesEarned: ['🎯 Demo Precision Architect'],
    clarityIndex: '3.0x',
    members: 6,
    lastActivity: '4h ago',
    status: 'active'
  },
  {
    id: 'founder-solo-01',
    name: 'Founder Solo',
    type: 'Founder Solo',
    activeRemix: 'Dual-Language Mastery Sprint',
    overlaysCompleted: 19,
    badgesEarned: ['🌐 Dual-Language Navigator', '👑 Founder Excellence'],
    clarityIndex: '2.9x',
    members: 1,
    lastActivity: '1h ago',
    status: 'active'
  }
];

const DEMO_REMIX_ENGAGEMENT: RemixEngagement[] = [
  {
    remixId: 'trust-velocity-remix',
    title: 'Trust Velocity Remix',
    squadsActive: 12,
    avgReplayViews: 118,
    avgWatchTime: '3m 42s',
    feedbackScore: 4.8,
    clarityLift: '3.4x',
    dropOffRate: 15,
    completionRate: 85
  },
  {
    remixId: 'dual-language-navigator-remix',
    title: 'Dual-Language Navigator Remix',
    squadsActive: 9,
    avgReplayViews: 94,
    avgWatchTime: '2m 57s',
    feedbackScore: 4.6,
    clarityLift: '2.8x',
    dropOffRate: 22,
    completionRate: 78
  },
  {
    remixId: 'assumed-right-remix',
    title: 'Assumed Right Remix',
    squadsActive: 7,
    avgReplayViews: 86,
    avgWatchTime: '3m 15s',
    feedbackScore: 4.5,
    clarityLift: '3.0x',
    dropOffRate: 18,
    completionRate: 82
  }
];

const DEMO_COACHING_LIFT: CoachingLift[] = [
  {
    overlayId: 'trust-velocity',
    title: 'Trust Velocity',
    avgClarityLift: '3.4x',
    feedbackScore: 4.8,
    badgeUnlockRate: 78,
    avgTimeToMastery: '2d 6h',
    improvementTrend: 'up'
  },
  {
    overlayId: 'assumed-right',
    title: 'Assumed Right',
    avgClarityLift: '3.0x',
    feedbackScore: 4.5,
    badgeUnlockRate: 64,
    avgTimeToMastery: '3d 2h',
    improvementTrend: 'stable'
  },
  {
    overlayId: 'dual-language-navigator',
    title: 'Dual-Language Navigator',
    avgClarityLift: '2.8x',
    feedbackScore: 4.6,
    badgeUnlockRate: 71,
    avgTimeToMastery: '1d 18h',
    improvementTrend: 'up'
  }
];

const DEMO_BADGE_VELOCITY: BadgeVelocity[] = [
  {
    badgeId: 'trust-velocity-master',
    title: 'Trust Velocity Master',
    icon: '🧩',
    squads: ['LatAm GTM', 'Ops Alpha', 'Founder Solo'],
    unlocks: [9, 6, 3],
    avgTimeToUnlock: '2d 6h',
    successRate: 78,
    difficulty: 'hard'
  },
  {
    badgeId: 'dual-language-navigator',
    title: 'Dual-Language Navigator',
    icon: '🌐',
    squads: ['LatAm GTM', 'Founder Solo'],
    unlocks: [7, 4],
    avgTimeToUnlock: '1d 18h',
    successRate: 85,
    difficulty: 'medium'
  },
  {
    badgeId: 'demo-precision-architect',
    title: 'Demo Precision Architect',
    icon: '🎯',
    squads: ['Ops Alpha', 'Coach Collective'],
    unlocks: [5, 3],
    avgTimeToUnlock: '3d 4h',
    successRate: 72,
    difficulty: 'expert'
  }
];

const DEMO_SCHEMA_IMPACT: SchemaImpact[] = [
  {
    path: 'finance.trust-velocity.latam',
    title: 'LatAm Trust Velocity',
    squadsActive: 12,
    clarityLift: '3.4x',
    badgesLinked: ['🧩 Trust Velocity Master'],
    connectionStrength: 94,
    optimizationScore: 87
  },
  {
    path: 'badge.dual-language',
    title: 'Dual-Language Framework',
    squadsActive: 9,
    clarityLift: '2.9x',
    badgesLinked: ['🌐 Dual-Language Navigator'],
    connectionStrength: 89,
    optimizationScore: 82
  },
  {
    path: 'law.assumed-right.investor',
    title: 'Investor Legal Clarity',
    squadsActive: 7,
    clarityLift: '3.0x',
    badgesLinked: ['🎯 Demo Precision Architect'],
    connectionStrength: 91,
    optimizationScore: 78
  }
];

const DEMO_PERFORMANCE_SIGNALS: PerformanceSignal[] = [
  {
    squadId: 'latam-gtm-01',
    squadName: 'LatAm GTM',
    overlay: 'Trust Velocity',
    clarityLift: 2.6,
    feedbackScore: 4.2,
    replayDropOff: 38,
    status: 'warning',
    lastUpdated: '2m ago'
  },
  {
    squadId: 'ops-alpha-01',
    squadName: 'Ops Alpha',
    overlay: 'Assumed Right',
    clarityLift: 2.9,
    feedbackScore: 4.5,
    replayDropOff: 22,
    status: 'optimal',
    lastUpdated: '5m ago'
  },
  {
    squadId: 'founder-solo-01',
    squadName: 'Founder Solo',
    overlay: 'Dual-Language Navigator',
    clarityLift: 2.1,
    feedbackScore: 3.8,
    replayDropOff: 45,
    status: 'critical',
    lastUpdated: '1m ago'
  }
];

const DEMO_AUTO_TUNING: AutoTuningRecommendation[] = [
  {
    type: 'prompt',
    squadId: 'latam-gtm-01',
    current: 'Frame investor clarity using schema trace.',
    recommended: 'Highlight trust-building moments using schema and replay feedback cues.',
    reason: 'Clarity lift below 2.8x + replay drop-off > 30%',
    impact: '+0.6x clarity improvement expected',
    confidence: 87
  },
  {
    type: 'overlay',
    squadId: 'founder-solo-01',
    current: 'Trust Velocity (LatAm Coaching)',
    recommended: 'Trust Velocity (Investor Lens)',
    reason: 'Clarity lift below 2.5x + high replay abandonment',
    impact: '+0.8x clarity improvement expected',
    confidence: 92
  },
  {
    type: 'badge',
    squadId: 'ops-alpha-01',
    current: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
    recommended: 'Clarity Index ≥ 2.8x + Feedback ≥ 4.4 + Replay Completion ≥ 70%',
    reason: 'Badge unlock rate below target threshold',
    impact: '+15% badge unlock rate expected',
    confidence: 78
  }
];

const DEMO_OVERLAY_OVERRIDES: OverlayOverride[] = [
  {
    squadId: 'latam-gtm-01',
    current: 'Trust Velocity (LatAm Coaching)',
    override: 'Trust Velocity (Investor Lens)',
    reason: 'Founder prefers investor-facing schema trace',
    deployedAt: '2025-10-02T10:30:00Z',
    performance: {
      clarityLift: 3.2,
      feedbackScore: 4.6,
      completionRate: 82
    }
  }
];

const DEMO_PROMPT_OVERRIDES: PromptOverride[] = [
  {
    overlayId: 'trust-velocity',
    originalEN: 'Frame investor clarity using schema trace.',
    customEN: 'Narrate how schema logic builds trust velocity in investor conversations.',
    originalES: 'Presenta claridad inversora usando trazado de esquema.',
    customES: 'Narra cómo la lógica de esquema genera velocidad de confianza en conversaciones con inversores.',
    deployedBy: 'Luis Dominguez',
    deployedAt: '2025-10-02T09:15:00Z'
  }
];

const DEMO_REPLAY_NUDGES: ReplayNudge[] = [
  {
    id: 'nudge-001',
    trigger: 'Replay Drop-Off > 30%',
    messageEN: 'Revisit the Trust Velocity overlay and focus on schema transitions.',
    messageES: 'Revisa la superposición de Velocidad de Confianza y enfócate en las transiciones de esquema.',
    action: 'Send to Founder + Coach',
    targetRoles: ['Founder', 'Coach'],
    active: true
  },
  {
    id: 'nudge-002',
    trigger: 'Clarity Lift < 2.5x',
    messageEN: 'Consider switching to Investor Lens variant for better engagement.',
    messageES: 'Considera cambiar a la variante de Lente Inversor para mejor participación.',
    action: 'Send to Squad Lead',
    targetRoles: ['Squad Lead'],
    active: true
  }
];

const DEMO_BADGE_OVERRIDES: BadgeLogicOverride[] = [
  {
    badgeId: 'trust-velocity-master',
    originalLogic: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
    customLogic: 'Clarity Index ≥ 2.8x + Replay Completion ≥ 70%',
    reason: 'Founder-led override for investor remix arc',
    deployedBy: 'Luis Dominguez',
    performance: {
      unlockRate: 78,
      avgTime: '2d 6h',
      satisfaction: 4.4
    }
  }
];

const DEMO_SCHEMA_TRACE_NODES: SchemaTraceNode[] = [
  {
    path: 'finance.trust-velocity.latam',
    status: 'active',
    connections: 12,
    clarityImpact: 3.4,
    lastUpdated: '2m ago'
  },
  {
    path: 'badge.dual-language',
    status: 'stable',
    connections: 9,
    clarityImpact: 2.8,
    lastUpdated: '5m ago'
  },
  {
    path: 'demo.pitch-alpha',
    status: 'high engagement',
    connections: 7,
    clarityImpact: 3.1,
    lastUpdated: '1m ago'
  },
  {
    path: 'law.assumed-right.investor',
    status: 'underperforming',
    connections: 4,
    clarityImpact: 2.3,
    lastUpdated: '3m ago'
  }
];

const DEMO_COACHING_EVENTS: CoachingEvent[] = [
  {
    id: 'event-001',
    timestamp: '2025-10-02T14:22:00Z',
    overlay: 'Trust Velocity',
    promptEN: 'Frame investor clarity using schema trace.',
    promptES: 'Presenta claridad inversora usando trazado de esquema.',
    action: 'Manual coaching prompt override by Founder',
    triggeredBy: 'Luis Dominguez',
    squadId: 'latam-gtm-01',
    replayLink: '/replay?id=trust-velocity-override-001',
    clarityLift: '3.4x',
    status: 'deployed'
  },
  {
    id: 'event-002',
    timestamp: '2025-10-02T13:45:00Z',
    overlay: 'Dual-Language Navigator',
    promptEN: 'Deliver overlay in both EN and ES with schema trace.',
    promptES: 'Entrega la superposición en EN y ES con trazado de esquema.',
    action: 'Auto-tuning applied: Bilingual prompt optimization',
    triggeredBy: 'Auto-Tuning System',
    squadId: 'founder-solo-01',
    replayLink: '/replay?id=dual-language-auto-tune-002',
    clarityLift: '2.9x',
    status: 'deployed'
  }
];

const DEMO_OVERLAY_OVERRIDE_EVENTS: OverlayOverrideEvent[] = [
  {
    id: 'override-001',
    timestamp: '2025-10-01T15:10:00Z',
    squad: 'LatAm GTM',
    squadId: 'latam-gtm-01',
    from: 'Trust Velocity (LatAm Coaching)',
    to: 'Trust Velocity (Investor Lens)',
    reason: 'Founder override for investor remix arc',
    schema: 'finance.trust-velocity.investor',
    deployedBy: 'Luis Dominguez',
    status: 'deployed',
    performance: {
      clarityLift: 3.4,
      engagementRate: 87,
      completionRate: 82,
      feedbackScore: 4.6
    },
    replayLink: '/replay?id=trust-velocity-investor-override-001'
  },
  {
    id: 'override-002',
    timestamp: '2025-10-01T16:25:00Z',
    squad: 'Ops Alpha',
    squadId: 'ops-alpha-01',
    from: 'Assumed Right (Legal Framework)',
    to: 'Assumed Right (Operational Focus)',
    reason: 'Squad lead request for ops-specific coaching variant',
    schema: 'law.assumed-right.operations',
    deployedBy: 'Maria Rodriguez',
    status: 'deployed',
    performance: {
      clarityLift: 2.9,
      engagementRate: 78,
      completionRate: 85,
      feedbackScore: 4.3
    },
    replayLink: '/replay?id=assumed-right-ops-override-002'
  },
  {
    id: 'override-003',
    timestamp: '2025-10-01T17:40:00Z',
    squad: 'Founder Solo',
    squadId: 'founder-solo-01',
    from: 'Dual-Language Navigator (Basic)',
    to: 'Dual-Language Navigator (Advanced)',
    reason: 'Auto-tuning recommendation based on performance metrics',
    schema: 'badge.dual-language.advanced',
    deployedBy: 'Auto-Tuning System',
    status: 'deployed',
    performance: {
      clarityLift: 3.1,
      engagementRate: 92,
      completionRate: 89,
      feedbackScore: 4.8
    },
    replayLink: '/replay?id=dual-lang-advanced-override-003'
  },
  {
    id: 'override-004',
    timestamp: '2025-10-01T18:15:00Z',
    squad: 'Investor Beta',
    squadId: 'investor-beta-01',
    from: 'Demo Precision Architect',
    to: 'Demo Precision Architect (Investor Pitch)',
    reason: 'Preparing for investor demo session next week',
    schema: 'demo.pitch-alpha.investor-ready',
    deployedBy: 'Carlos Martinez',
    status: 'pending',
    replayLink: '/replay?id=demo-precision-investor-override-004'
  }
];

export default function SquadPackDeploymentCenter({
  language,
  onNavigate,
  currentMode = 'deploy'
}: SquadPackDeploymentCenterProps) {
  const [activeTab, setActiveTab] = useState(currentMode);
  const [selectedSquads, setSelectedSquads] = useState<string[]>([]);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [autoTuningEnabled, setAutoTuningEnabled] = useState(false);
  const [monitoringActive, setMonitoringActive] = useState(true);
  const [expandedSignals, setExpandedSignals] = useState<string[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [activeOverrides, setActiveOverrides] = useState<OverlayOverride[]>([]);
  const [promptOverrides, setPromptOverrides] = useState<PromptOverride[]>([]);
  const [replayNudges, setReplayNudges] = useState<ReplayNudge[]>([]);
  const [badgeOverrides, setBadgeOverrides] = useState<BadgeLogicOverride[]>([]);
  const [schemaTraceNodes, setSchemaTraceNodes] = useState<SchemaTraceNode[]>([]);
  const [coachingEvents, setCoachingEvents] = useState<CoachingEvent[]>([]);
  const [overlayOverrideEvents, setOverlayOverrideEvents] = useState<OverlayOverrideEvent[]>([]);

  const t = {
    en: {
      title: 'Squad Pack Deployment Center',
      subtitle: 'Deploy, monitor, and optimize remix packs across tactical squads with real-time analytics and auto-tuning',
      deploy: 'Deploy',
      analytics: 'Analytics',
      monitor: 'Monitor',
      tune: 'Auto-Tune',
      control: 'Override Control',
      overrides: 'Override Timeline',
      nodes: 'Node Timeline',
      squadOverview: 'Squad Overview',
      remixEngagement: 'Remix Engagement',
      coachingLift: 'Coaching Lift',
      badgeVelocity: 'Badge Velocity',
      schemaImpact: 'Schema Impact',
      performanceSignals: 'Performance Signals',
      autoTuning: 'Auto-Tuning',
      launchRemixSquadPack: 'Launch Remix Squad Pack',
      deploySelected: 'Deploy to Selected Squads',
      exportOptions: 'Export Options',
      squadDashboard: 'Squad Dashboard',
      investorPortal: 'Investor Portal',
      publicShowcase: 'Public Showcase',
      squadsDeployed: 'Squads Deployed',
      overlaysAssigned: 'Overlays Assigned',
      badgesLinked: 'Badges Linked',
      clarityLift: 'Clarity Lift',
      feedbackScore: 'Feedback Score',
      avgWatchTime: 'Avg Watch Time',
      badgeUnlockRate: 'Badge Unlock Rate',
      avgTimeToUnlock: 'Avg Time to Unlock',
      connectionStrength: 'Connection Strength',
      optimizationScore: 'Optimization Score',
      performanceStatus: 'Performance Status',
      autoTuningRecommendations: 'Auto-Tuning Recommendations',
      applyAutoTuning: 'Apply Auto-Tuning',
      backToCenter: 'Back to Schema Studio'
    },
    es: {
      title: 'Centro de Despliegue de Paquetes de Escuadrón',
      subtitle: 'Despliega, monitorea y optimiza paquetes de remix en escuadrones tácticos con analíticas en tiempo real y auto-ajuste',
      deploy: 'Desplegar',
      analytics: 'Analíticas',
      monitor: 'Monitorear',
      tune: 'Auto-Ajuste',
      control: 'Control Override',
      overrides: 'Timeline Override',
      nodes: 'Timeline Nodos',
      squadOverview: 'Vista General de Escuadrones',
      remixEngagement: 'Participación en Remix',
      coachingLift: 'Mejora de Coaching',
      badgeVelocity: 'Velocidad de Insignias',
      schemaImpact: 'Impacto de Esquemas',
      performanceSignals: 'Señales de Rendimiento',
      autoTuning: 'Auto-Ajuste',
      launchRemixSquadPack: 'Lanzar Paquete de Remix de Escuadrón',
      deploySelected: 'Desplegar a Escuadrones Seleccionados',
      exportOptions: 'Opciones de Exportación',
      squadDashboard: 'Dashboard de Escuadrón',
      investorPortal: 'Portal de Inversores',
      publicShowcase: 'Galería Pública',
      squadsDeployed: 'Escuadrones Desplegados',
      overlaysAssigned: 'Overlays Asignados',
      badgesLinked: 'Insignias Vinculadas',
      clarityLift: 'Mejora de Claridad',
      feedbackScore: 'Puntuación de Retroalimentación',
      avgWatchTime: 'Tiempo Promedio de Visualización',
      badgeUnlockRate: 'Tasa de Desbloqueo de Insignias',
      avgTimeToUnlock: 'Tiempo Promedio para Desbloquear',
      connectionStrength: 'Fuerza de Conexión',
      optimizationScore: 'Puntuación de Optimización',
      performanceStatus: 'Estado de Rendimiento',
      autoTuningRecommendations: 'Recomendaciones de Auto-Ajuste',
      applyAutoTuning: 'Aplicar Auto-Ajuste',
      backToCenter: 'Volver al Estudio de Esquemas'
    }
  };

  const text = t[language];

  // Initialize demo data
  useEffect(() => {
    setActiveOverrides(DEMO_OVERLAY_OVERRIDES);
    setPromptOverrides(DEMO_PROMPT_OVERRIDES);
    setReplayNudges(DEMO_REPLAY_NUDGES);
    setBadgeOverrides(DEMO_BADGE_OVERRIDES);
    setSchemaTraceNodes(DEMO_SCHEMA_TRACE_NODES);
    setCoachingEvents(DEMO_COACHING_EVENTS);
    setOverlayOverrideEvents(DEMO_OVERLAY_OVERRIDE_EVENTS);
  }, []);

  const handleSquadSelection = (squadId: string) => {
    setSelectedSquads(prev => 
      prev.includes(squadId) 
        ? prev.filter(id => id !== squadId)
        : [...prev, squadId]
    );
  };

  const handleDeployment = async () => {
    if (selectedSquads.length === 0) return;
    
    setDeploymentStatus('deploying');
    
    // Simulate deployment
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDeploymentStatus('success');
    setTimeout(() => setDeploymentStatus('idle'), 3000);
  };

  const handleAutoTuningToggle = () => {
    setAutoTuningEnabled(!autoTuningEnabled);
  };

  const handleOverlayOverride = (squadId: string, newOverlay: string, reason: string) => {
    const squad = DEMO_SQUADS.find(s => s.id === squadId);
    if (!squad) return;

    const newOverride: OverlayOverride = {
      squadId,
      current: squad.activeRemix,
      override: newOverlay,
      reason,
      deployedAt: new Date().toISOString(),
      performance: {
        clarityLift: 0,
        feedbackScore: 0,
        completionRate: 0
      }
    };

    setActiveOverrides(prev => [...prev.filter(o => o.squadId !== squadId), newOverride]);
    console.log('Overlay override deployed:', newOverride);
  };

  const handlePromptOverride = (overlayId: string, customEN: string, customES: string) => {
    const existingPrompt = DEMO_PROMPT_OVERRIDES.find(p => p.overlayId === overlayId);
    
    const newPromptOverride: PromptOverride = {
      overlayId,
      originalEN: existingPrompt?.originalEN || 'Frame investor clarity using schema trace.',
      customEN,
      originalES: existingPrompt?.originalES || 'Presenta claridad inversora usando trazado de esquema.',
      customES,
      deployedBy: 'Current User',
      deployedAt: new Date().toISOString()
    };

    setPromptOverrides(prev => [...prev.filter(p => p.overlayId !== overlayId), newPromptOverride]);
    console.log('Prompt override deployed:', newPromptOverride);
  };

  const handleNudgeToggle = (nudgeId: string) => {
    setReplayNudges(prev => prev.map(nudge => 
      nudge.id === nudgeId ? { ...nudge, active: !nudge.active } : nudge
    ));
  };

  const handleBadgeLogicOverride = (badgeId: string, newLogic: string, reason: string) => {
    const existing = DEMO_BADGE_OVERRIDES.find(b => b.badgeId === badgeId);
    
    const newBadgeOverride: BadgeLogicOverride = {
      badgeId,
      originalLogic: existing?.originalLogic || 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
      customLogic: newLogic,
      reason,
      deployedBy: 'Current User',
      performance: existing?.performance || {
        unlockRate: 0,
        avgTime: '0d 0h',
        satisfaction: 0
      }
    };

    setBadgeOverrides(prev => [...prev.filter(b => b.badgeId !== badgeId), newBadgeOverride]);
    console.log('Badge logic override deployed:', newBadgeOverride);
  };

  const SquadPackDeployPanel = () => (
    <div className="space-y-6">
      {/* Deployment Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{text.launchRemixSquadPack}</h2>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Deploy remix packs to tactical squads with automatic optimization'
                : 'Despliega paquetes de remix a escuadrones tácticos con optimización automática'
              }
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={handleDeployment}
              disabled={selectedSquads.length === 0 || deploymentStatus === 'deploying'}
              className="px-6"
            >
              {deploymentStatus === 'deploying' ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Deploying...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  {text.deploySelected} ({selectedSquads.length})
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Deployment Status */}
        {deploymentStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${
              deploymentStatus === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
              deploymentStatus === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
              'bg-blue-500/10 border-blue-500/20 text-blue-400'
            }`}
          >
            <div className="flex items-center gap-2">
              {deploymentStatus === 'success' ? <CheckCircle className="w-5 h-5" /> :
               deploymentStatus === 'error' ? <AlertCircle className="w-5 h-5" /> :
               <RefreshCw className="w-5 h-5 animate-spin" />}
              <span className="font-medium">
                {deploymentStatus === 'success' ? 'Deployment Successful!' :
                 deploymentStatus === 'error' ? 'Deployment Failed' :
                 'Deploying to squads...'}
              </span>
            </div>
          </motion.div>
        )}

        {/* Pack Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-secondary/50 rounded-lg p-4">
            <h3 className="font-medium mb-3">{text.squadsDeployed}</h3>
            <div className="flex flex-wrap gap-2">
              {['LatAm GTM', 'Ops Alpha', 'Founder Solo'].map((squad) => (
                <Badge key={squad} variant="outline" className="text-xs">
                  {squad}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4">
            <h3 className="font-medium mb-3">{text.overlaysAssigned}</h3>
            <div className="flex flex-wrap gap-2">
              {['Trust Velocity', 'Dual-Language Navigator', 'Assumed Right'].map((overlay) => (
                <Badge key={overlay} variant="outline" className="text-xs">
                  {overlay}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4">
            <h3 className="font-medium mb-3">{text.badgesLinked}</h3>
            <div className="flex gap-2">
              <span className="text-lg">🧩</span>
              <span className="text-lg">🌐</span>
              <span className="text-lg">🎯</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Squad Selection Grid */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">{text.squadOverview}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEMO_SQUADS.map((squad) => (
            <motion.div
              key={squad.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedSquads.includes(squad.id)
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleSquadSelection(squad.id)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{squad.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      squad.status === 'active' ? 'bg-green-400' :
                      squad.status === 'paused' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`} />
                    <Badge variant="outline" className="text-xs">
                      {squad.type}
                    </Badge>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {squad.activeRemix}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Overlays: </span>
                    <span className="font-medium">{squad.overlaysCompleted}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Clarity: </span>
                    <span className="font-medium text-green-400">{squad.clarityIndex}</span>
                  </div>
                </div>

                <div className="flex gap-1">
                  {squad.badgesEarned.map((badge) => (
                    <span key={badge} className="text-lg">{badge.split(' ')[0]}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{squad.members} members</span>
                  <span>{squad.lastActivity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Export Options */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">{text.exportOptions}</h3>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            {text.squadDashboard}
          </Button>
          <Button variant="outline" className="flex-1">
            <Users className="w-4 h-4 mr-2" />
            {text.investorPortal}
          </Button>
          <Button variant="outline" className="flex-1">
            <Globe className="w-4 h-4 mr-2" />
            {text.publicShowcase}
          </Button>
        </div>
      </Card>
    </div>
  );

  const AnalyticsDashboard = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Squads"
          value={DEMO_SQUADS.length.toString()}
          change={{ value: 15, trend: 'up', period: 'this month' }}
          icon={<Users className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title="Avg Clarity Lift"
          value="3.1x"
          change={{ value: 8, trend: 'up', period: 'vs baseline' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title="Badge Unlock Rate"
          value="73%"
          change={{ value: 5, trend: 'up', period: 'this week' }}
          icon={<Trophy className="w-5 h-5" />}
          color="warning"
        />
        <MetricCard
          title="Engagement Rate"
          value="82%"
          change={{ value: 3, trend: 'up', period: 'vs average' }}
          icon={<Activity className="w-5 h-5" />}
          color="danger"
        />
      </div>

      {/* Remix Engagement Tracker */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          {text.remixEngagement}
        </h3>
        <div className="space-y-4">
          {DEMO_REMIX_ENGAGEMENT.map((remix) => (
            <div key={remix.remixId} className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4 bg-secondary/50 rounded-lg">
              <div className="lg:col-span-2">
                <h4 className="font-medium">{remix.title}</h4>
                <div className="text-sm text-muted-foreground">
                  {remix.squadsActive} squads active
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold">{remix.avgReplayViews}</div>
                <div className="text-xs text-muted-foreground">Views</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold">{remix.avgWatchTime}</div>
                <div className="text-xs text-muted-foreground">Watch Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">{remix.feedbackScore}</div>
                <div className="text-xs text-muted-foreground">Feedback</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{remix.clarityLift}</div>
                <div className="text-xs text-muted-foreground">Clarity Lift</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Coaching Lift Dashboard */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          {text.coachingLift}
        </h3>
        <div className="space-y-4">
          {DEMO_COACHING_LIFT.map((lift) => (
            <div key={lift.overlayId} className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 bg-secondary/50 rounded-lg">
              <div>
                <h4 className="font-medium">{lift.title}</h4>
                <div className="flex items-center gap-1 mt-1">
                  {lift.improvementTrend === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : lift.improvementTrend === 'down' ? (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  ) : (
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  )}
                  <span className="text-xs text-muted-foreground">
                    {lift.improvementTrend}
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{lift.avgClarityLift}</div>
                <div className="text-xs text-muted-foreground">Avg Clarity</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">{lift.feedbackScore}</div>
                <div className="text-xs text-muted-foreground">Feedback</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">{lift.badgeUnlockRate}%</div>
                <div className="text-xs text-muted-foreground">Unlock Rate</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold">{lift.avgTimeToMastery}</div>
                <div className="text-xs text-muted-foreground">Time to Master</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Badge Velocity Heatmap */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          {text.badgeVelocity}
        </h3>
        <div className="space-y-4">
          {DEMO_BADGE_VELOCITY.map((badge) => (
            <div key={badge.badgeId} className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{badge.icon}</span>
                <div>
                  <h4 className="font-medium">{badge.title}</h4>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      badge.difficulty === 'expert' ? 'text-red-400' :
                      badge.difficulty === 'hard' ? 'text-orange-400' :
                      badge.difficulty === 'medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}
                  >
                    {badge.difficulty}
                  </Badge>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">Squad Unlocks</div>
                <div className="flex gap-2">
                  {badge.squads.map((squad, index) => (
                    <div key={squad} className="text-center">
                      <div className="text-lg font-bold text-primary">{badge.unlocks[index]}</div>
                      <div className="text-xs text-muted-foreground">{squad}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold">{badge.avgTimeToUnlock}</div>
                <div className="text-xs text-muted-foreground">Avg Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{badge.successRate}%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              
              <div>
                <Progress 
                  value={badge.successRate} 
                  className="h-2"
                />
                <div className="text-xs text-muted-foreground mt-1">Performance</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Schema Impact Viewer */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Map className="w-5 h-5" />
          {text.schemaImpact}
        </h3>
        <div className="space-y-4">
          {DEMO_SCHEMA_IMPACT.map((schema) => (
            <div key={schema.path} className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 bg-secondary/50 rounded-lg">
              <div>
                <h4 className="font-medium">{schema.title}</h4>
                <div className="text-xs font-mono text-muted-foreground">{schema.path}</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">{schema.squadsActive}</div>
                <div className="text-xs text-muted-foreground">Active Squads</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{schema.clarityLift}</div>
                <div className="text-xs text-muted-foreground">Clarity Lift</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">{schema.connectionStrength}%</div>
                <div className="text-xs text-muted-foreground">Connection</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{schema.optimizationScore}%</div>
                <div className="text-xs text-muted-foreground">Optimization</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const PerformanceMonitor = () => (
    <div className="space-y-8">
      {/* Live Monitoring Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${monitoringActive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <h2 className="text-2xl font-bold">{text.performanceSignals}</h2>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setMonitoringActive(!monitoringActive)}
            >
              {monitoringActive ? (
                <>
                  <PauseCircle className="w-4 h-4 mr-2" />
                  Pause Monitoring
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Resume Monitoring
                </>
              )}
            </Button>
            <Button>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
          </div>
        </div>
      </Card>

      {/* Performance Signals */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Gauge className="w-5 h-5" />
          Live Performance Signals
        </h3>
        <div className="space-y-4">
          {DEMO_PERFORMANCE_SIGNALS.map((signal) => (
            <motion.div
              key={signal.squadId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 rounded-lg border ${
                signal.status === 'optimal' ? 'border-green-500/20 bg-green-500/10' :
                signal.status === 'warning' ? 'border-yellow-500/20 bg-yellow-500/10' :
                'border-red-500/20 bg-red-500/10'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    signal.status === 'optimal' ? 'bg-green-400' :
                    signal.status === 'warning' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`} />
                  <div>
                    <h4 className="font-medium">{signal.squadName}</h4>
                    <div className="text-sm text-muted-foreground">{signal.overlay}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    signal.clarityLift >= 3.0 ? 'text-green-400' :
                    signal.clarityLift >= 2.5 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {signal.clarityLift}x
                  </div>
                  <div className="text-xs text-muted-foreground">Clarity</div>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    signal.feedbackScore >= 4.5 ? 'text-green-400' :
                    signal.feedbackScore >= 4.0 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {signal.feedbackScore}
                  </div>
                  <div className="text-xs text-muted-foreground">Feedback</div>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold ${
                    signal.replayDropOff <= 25 ? 'text-green-400' :
                    signal.replayDropOff <= 35 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {signal.replayDropOff}%
                  </div>
                  <div className="text-xs text-muted-foreground">Drop Off</div>
                </div>
                
                <div className="text-center">
                  <Badge 
                    variant="outline" 
                    className={`${
                      signal.status === 'optimal' ? 'text-green-400 border-green-400' :
                      signal.status === 'warning' ? 'text-yellow-400 border-yellow-400' :
                      'text-red-400 border-red-400'
                    }`}
                  >
                    {signal.status}
                  </Badge>
                </div>
                
                <div className="text-right text-xs text-muted-foreground">
                  {signal.lastUpdated}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );

  const AutoTuningSystem = () => (
    <div className="space-y-8">
      {/* Auto-Tuning Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${autoTuningEnabled ? 'bg-blue-400 animate-pulse' : 'bg-gray-400'}`} />
            <h2 className="text-2xl font-bold">{text.autoTuning}</h2>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleAutoTuningToggle}
            >
              {autoTuningEnabled ? (
                <>
                  <StopCircle className="w-4 h-4 mr-2" />
                  Disable Auto-Tuning
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Enable Auto-Tuning
                </>
              )}
            </Button>
            <Button disabled={!autoTuningEnabled}>
              <Wand2 className="w-4 h-4 mr-2" />
              {text.applyAutoTuning}
            </Button>
          </div>
        </div>
      </Card>

      {/* Auto-Tuning Recommendations */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          {text.autoTuningRecommendations}
        </h3>
        <div className="space-y-4">
          {DEMO_AUTO_TUNING.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-secondary/50 rounded-lg border border-border"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      recommendation.type === 'prompt' ? 'bg-blue-500/20 text-blue-400' :
                      recommendation.type === 'overlay' ? 'bg-green-500/20 text-green-400' :
                      recommendation.type === 'badge' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {recommendation.type === 'prompt' ? <MessageSquare className="w-4 h-4" /> :
                       recommendation.type === 'overlay' ? <Layers className="w-4 h-4" /> :
                       recommendation.type === 'badge' ? <Trophy className="w-4 h-4" /> :
                       <Map className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-medium capitalize">{recommendation.type} Optimization</h4>
                      <div className="text-sm text-muted-foreground">
                        Squad: {DEMO_SQUADS.find(s => s.id === recommendation.squadId)?.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{recommendation.confidence}%</div>
                    <div className="text-xs text-muted-foreground">Confidence</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current:</div>
                    <div className="text-sm bg-secondary px-3 py-2 rounded">
                      {recommendation.current}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Recommended:</div>
                    <div className="text-sm bg-primary/10 border border-primary/20 px-3 py-2 rounded">
                      {recommendation.recommended}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Reason:</div>
                    <div className="text-sm">{recommendation.reason}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-medium">{recommendation.impact}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Apply
                  </Button>
                  <Button size="sm" variant="outline">
                    <X className="w-3 h-3 mr-1" />
                    Dismiss
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );

  const AdvancedSquadControlPanel = () => (
    <div className="space-y-8">
      {/* Squad Control Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Advanced Squad Override Control</h2>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Real-time coaching customization and schema trace monitoring with granular override controls'
                : 'Personalización de coaching en tiempo real y monitoreo de trazado de esquemas con controles de override granulares'
              }
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${monitoringActive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm text-muted-foreground">
              {monitoringActive ? 'Live Monitoring' : 'Monitoring Paused'}
            </span>
          </div>
        </div>

        {/* Squad Selector & Role Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Squad Selector</label>
            <select
              value={selectedSquad}
              onChange={(e) => setSelectedSquad(e.target.value)}
              className="w-full bg-input border border-border text-foreground px-3 py-2 rounded-lg"
            >
              <option value="">Select Squad...</option>
              {['LatAm GTM', 'Ops Alpha', 'Founder Solo', 'Investor Beta'].map((squad) => (
                <option key={squad} value={squad}>
                  {squad}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Role Filter</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full bg-input border border-border text-foreground px-3 py-2 rounded-lg"
            >
              <option value="">All Roles...</option>
              {['Founder', 'Ops Lead', 'Coach', 'Investor'].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Overlay Override Editor */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5" />
          Overlay Override Editor
        </h3>
        
        {activeOverrides.map((override) => (
          <motion.div
            key={override.squadId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-secondary/50 rounded-lg border border-border mb-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Current Overlay</div>
                <div className="bg-secondary px-3 py-2 rounded">{override.current}</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">Override Overlay</div>
                <div className="bg-primary/10 border border-primary/20 px-3 py-2 rounded">
                  {override.override}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">Performance</div>
                {override.performance && (
                  <div className="text-xs space-y-1">
                    <div>Clarity: <span className="text-green-400">{override.performance.clarityLift}x</span></div>
                    <div>Feedback: <span className="text-yellow-400">{override.performance.feedbackScore}</span></div>
                    <div>Completion: <span className="text-blue-400">{override.performance.completionRate}%</span></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="text-sm text-muted-foreground">Reason: {override.reason}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-muted-foreground">
                  Deployed: {new Date(override.deployedAt || '').toLocaleString()}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Rollback
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Test Override
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        <Button 
          onClick={() => {
            if (selectedSquad) {
              handleOverlayOverride(
                DEMO_SQUADS.find(s => s.name === selectedSquad)?.id || '',
                'Trust Velocity (Investor Lens)',
                'Manual override for testing'
              );
            }
          }}
          disabled={!selectedSquad}
        >
          <Plus className="w-4 h-4 mr-2" />
          Deploy Override
        </Button>
      </Card>

      {/* Coaching Prompt Editor */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Coaching Prompt Override Editor
        </h3>
        
        {promptOverrides.map((prompt) => (
          <motion.div
            key={prompt.overlayId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-secondary/50 rounded-lg border border-border mb-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium capitalize">{prompt.overlayId.replace('-', ' ')}</h4>
                <Badge variant="outline" className="text-xs">
                  Deployed by {prompt.deployedBy}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">English Prompt</div>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Original:</div>
                    <div className="bg-secondary px-3 py-2 rounded text-sm">
                      {prompt.originalEN}
                    </div>
                    <div className="text-xs text-muted-foreground">Custom:</div>
                    <div className="bg-primary/10 border border-primary/20 px-3 py-2 rounded text-sm">
                      {prompt.customEN}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Spanish Prompt</div>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Original:</div>
                    <div className="bg-secondary px-3 py-2 rounded text-sm">
                      {prompt.originalES}
                    </div>
                    <div className="text-xs text-muted-foreground">Custom:</div>
                    <div className="bg-primary/10 border border-primary/20 px-3 py-2 rounded text-sm">
                      {prompt.customES}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm">
                  <Edit3 className="w-3 h-3 mr-1" />
                  Edit Prompts
                </Button>
                <Button size="sm" variant="outline">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset to Original
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
        
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Deploy Prompt Override
        </Button>
      </Card>

      {/* Replay Nudge Composer */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Replay Nudge Composer
        </h3>
        
        {replayNudges.map((nudge) => (
          <motion.div
            key={nudge.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-secondary/50 rounded-lg border border-border mb-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${nudge.active ? 'bg-green-400' : 'bg-gray-400'}`} />
                  <div>
                    <div className="font-medium">Trigger: {nudge.trigger}</div>
                    <div className="text-sm text-muted-foreground">Action: {nudge.action}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {nudge.targetRoles.map((role) => (
                    <Badge key={role} variant="outline" className="text-xs">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">English Message</div>
                  <div className="bg-blue-500/10 text-blue-400 px-3 py-2 rounded text-sm">
                    {nudge.messageEN}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Spanish Message</div>
                  <div className="bg-blue-500/10 text-blue-400 px-3 py-2 rounded text-sm">
                    {nudge.messageES}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant={nudge.active ? "destructive" : "default"}
                  onClick={() => handleNudgeToggle(nudge.id)}
                >
                  {nudge.active ? (
                    <>
                      <PauseCircle className="w-3 h-3 mr-1" />
                      Deactivate
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-3 h-3 mr-1" />
                      Activate
                    </>
                  )}
                </Button>
                <Button size="sm" variant="outline">
                  <Edit3 className="w-3 h-3 mr-1" />
                  Edit Nudge
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
        
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Deploy Nudge
        </Button>
      </Card>

      {/* Badge Logic Override */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Badge Logic Override
        </h3>
        
        {badgeOverrides.map((badge) => (
          <motion.div
            key={badge.badgeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-secondary/50 rounded-lg border border-border mb-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧩</span>
                  <div>
                    <h4 className="font-medium">Trust Velocity Master</h4>
                    <div className="text-sm text-muted-foreground">Deployed by {badge.deployedBy}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">{badge.performance.unlockRate}%</div>
                  <div className="text-xs text-muted-foreground">Unlock Rate</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Original Logic</div>
                  <div className="bg-secondary px-3 py-2 rounded text-sm font-mono">
                    {badge.originalLogic}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Custom Logic</div>
                  <div className="bg-primary/10 border border-primary/20 px-3 py-2 rounded text-sm font-mono">
                    {badge.customLogic}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Reason:</div>
                  <div className="text-sm">{badge.reason}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Revert Logic
                  </Button>
                  <Button size="sm">
                    <Sliders className="w-3 h-3 mr-1" />
                    Adjust Logic
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Deploy Badge Logic Override
        </Button>
      </Card>

      {/* Schema Trace Monitor */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Map className="w-5 h-5" />
          Schema Trace Monitor
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {schemaTraceNodes.map((node) => (
            <motion.div
              key={node.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg border ${
                node.status === 'active' ? 'border-green-500/20 bg-green-500/10' :
                node.status === 'high engagement' ? 'border-blue-500/20 bg-blue-500/10' :
                node.status === 'stable' ? 'border-yellow-500/20 bg-yellow-500/10' :
                node.status === 'underperforming' ? 'border-red-500/20 bg-red-500/10' :
                'border-gray-500/20 bg-gray-500/10'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-3 h-3 rounded-full ${
                    node.status === 'active' ? 'bg-green-400' :
                    node.status === 'high engagement' ? 'bg-blue-400' :
                    node.status === 'stable' ? 'bg-yellow-400' :
                    node.status === 'underperforming' ? 'bg-red-400' :
                    'bg-gray-400'
                  }`} />
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      node.status === 'active' ? 'text-green-400 border-green-400' :
                      node.status === 'high engagement' ? 'text-blue-400 border-blue-400' :
                      node.status === 'stable' ? 'text-yellow-400 border-yellow-400' :
                      node.status === 'underperforming' ? 'text-red-400 border-red-400' :
                      'text-gray-400 border-gray-400'
                    }`}
                  >
                    {node.status}
                  </Badge>
                </div>
                
                <div>
                  <div className="font-mono text-sm">{node.path}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {node.connections} connections
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Impact:</span>
                    <div className="font-bold text-green-400">{node.clarityImpact}x</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Updated:</span>
                    <div className="font-medium">{node.lastUpdated}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Coaching Event Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Coaching Event Timeline
        </h3>
        
        <div className="space-y-4">
          {coachingEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 bg-secondary/50 rounded-lg border border-border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${
                      event.status === 'deployed' ? 'bg-green-400' :
                      event.status === 'pending' ? 'bg-yellow-400' :
                      'bg-red-400'
                    }`} />
                    <span className="text-sm font-medium">{event.overlay}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(event.timestamp).toLocaleString()}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="text-sm space-y-1">
                    <div><span className="text-muted-foreground">EN:</span> {event.promptEN}</div>
                    <div><span className="text-muted-foreground">ES:</span> {event.promptES}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm">
                    <div className="text-muted-foreground">Action:</div>
                    <div>{event.action}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      by {event.triggeredBy}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{event.clarityLift}</div>
                    <div className="text-xs text-muted-foreground">Clarity Lift</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );

  const OverlayOverrideTimeline = () => (
    <div className="space-y-8">
      {/* Override Timeline Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Layers className="w-6 h-6" />
              Overlay Override Timeline
            </h2>
            <p className="text-muted-foreground mt-2">
              {language === 'en' 
                ? 'Complete history of overlay transitions with performance tracking and rollback capabilities'
                : 'Historial completo de transiciones de overlay con seguimiento de rendimiento y capacidades de rollback'
              }
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm">
              {overlayOverrideEvents.length} {language === 'en' ? 'Events' : 'Eventos'}
            </Badge>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Filter' : 'Filtrar'}
            </Button>
            <Button>
              <RefreshCw className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Refresh' : 'Actualizar'}
            </Button>
          </div>
        </div>
      </Card>

      {/* Timeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title={language === 'en' ? 'Total Overrides' : 'Overrides Totales'}
          value={overlayOverrideEvents.length.toString()}
          change={{ value: 23, trend: 'up', period: 'this week' }}
          icon={<Layers className="w-5 h-5" />}
          color="primary"
        />
        <MetricCard
          title={language === 'en' ? 'Avg Clarity Lift' : 'Mejora Claridad Promedio'}
          value="3.1x"
          change={{ value: 12, trend: 'up', period: 'vs baseline' }}
          icon={<TrendingUp className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title={language === 'en' ? 'Success Rate' : 'Tasa de Éxito'}
          value="89%"
          change={{ value: 5, trend: 'up', period: 'vs average' }}
          icon={<CheckCircle className="w-5 h-5" />}
          color="success"
        />
        <MetricCard
          title={language === 'en' ? 'Pending Rollbacks' : 'Rollbacks Pendientes'}
          value="1"
          change={{ value: 2, trend: 'down', period: 'vs last week' }}
          icon={<RotateCcw className="w-5 h-5" />}
          color="warning"
        />
      </div>

      {/* Override Events Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          {language === 'en' ? 'Override Event History' : 'Historial de Eventos Override'}
        </h3>
        
        <div className="space-y-6">
          {overlayOverrideEvents
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .map((override) => (
              <OverlayOverrideNode
                key={override.id}
                timestamp={override.timestamp}
                squad={override.squad}
                from={override.from}
                to={override.to}
                reason={override.reason}
                schema={override.schema}
                deployedBy={override.deployedBy}
                status={override.status}
                performance={override.performance}
                language={language}
                onRollback={() => {
                  console.log('Rolling back override:', override.id);
                  setOverlayOverrideEvents(prev => 
                    prev.map(event => 
                      event.id === override.id 
                        ? { ...event, status: 'rolled-back' as const }
                        : event
                    )
                  );
                }}
                onViewDetails={() => {
                  console.log('Viewing override details:', override.id);
                  // Navigate to detailed override view
                }}
                onViewReplay={() => {
                  if (override.replayLink) {
                    console.log('Opening replay:', override.replayLink);
                    // Open replay in new tab or modal
                  }
                }}
              />
            ))}
        </div>
      </Card>

      {/* Squad Override Summary */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          {language === 'en' ? 'Squad Override Summary' : 'Resumen Override por Escuadrón'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEMO_SQUADS.map((squad) => {
            const squadOverrides = overlayOverrideEvents.filter(
              override => override.squadId === squad.id
            );
            const avgClarityLift = squadOverrides
              .filter(o => o.performance?.clarityLift)
              .reduce((sum, o) => sum + (o.performance?.clarityLift || 0), 0) / 
              squadOverrides.filter(o => o.performance?.clarityLift).length || 0;

            return (
              <motion.div
                key={squad.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-secondary/50 rounded-lg border border-border"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{squad.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {squadOverrides.length} overrides
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Active: </span>
                      <span className="font-medium text-green-400">
                        {squadOverrides.filter(o => o.status === 'deployed').length}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avg Lift: </span>
                      <span className="font-medium text-blue-400">
                        {avgClarityLift ? `${avgClarityLift.toFixed(1)}x` : 'N/A'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {squadOverrides.slice(0, 2).map((override) => (
                      <OverlayOverrideNode
                        key={override.id}
                        timestamp={override.timestamp}
                        squad={override.squad}
                        from={override.from}
                        to={override.to}
                        reason={override.reason}
                        schema={override.schema}
                        deployedBy={override.deployedBy}
                        status={override.status}
                        performance={override.performance}
                        language={language}
                        compact={true}
                      />
                    ))}
                  </div>
                  
                  {squadOverrides.length > 2 && (
                    <div className="text-center">
                      <Button size="sm" variant="outline" className="text-xs">
                        View {squadOverrides.length - 2} more
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </div>
  );

  const NodeEventTimeline = () => (
    <div className="space-y-8">
      {/* Node Timeline Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Map className="w-6 h-6" />
              Node Event Timeline
            </h2>
            <p className="text-muted-foreground mt-2">
              {language === 'en' 
                ? 'Complete history of replay nudges, badge logic edits, and schema trace events with real-time monitoring'
                : 'Historial completo de nudges de replay, ediciones de lógica de insignias y eventos de trazado de esquemas con monitoreo en tiempo real'
              }
            </p>
          </div>
        </div>
      </Card>

      {/* Demo Replay Nudge Nodes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          {language === 'en' ? 'Replay Nudge Events' : 'Eventos de Nudge de Replay'}
        </h3>
        
        <div className="space-y-4">
          <ReplayNudgeNode
            timestamp="2025-10-01T15:12:00Z"
            trigger="Replay Drop-Off > 30%"
            messageEN="Revisit the Trust Velocity overlay and focus on schema transitions."
            messageES="Revisa la superposición de Velocidad de Confianza y enfócate en las transiciones de esquema."
            sentTo={["Founder", "Coach"]}
            replayLink="/replay?id=trust-velocity"
            id="nudge-trust-velocity-001"
            status="active"
            triggerCount={12}
            responseRate={78}
            effectivenessScore={4.2}
            lastTriggered="2025-10-01T14:45:00Z"
            language={language}
            onEdit={() => console.log('Edit nudge')}
            onPause={() => console.log('Pause nudge')}
            onViewReplay={() => console.log('View replay')}
            onViewAnalytics={() => console.log('View analytics')}
          />
          
          <ReplayNudgeNode
            timestamp="2025-10-01T16:30:00Z"
            trigger="Clarity Lift < 2.5x"
            messageEN="Consider switching to Investor Lens variant for better engagement."
            messageES="Considera cambiar a la variante de Lente Inversor para mejor participación."
            sentTo={["Squad Lead"]}
            replayLink="/replay?id=investor-lens"
            id="nudge-clarity-lift-002"
            status="paused"
            triggerCount={8}
            responseRate={65}
            effectivenessScore={3.8}
            lastTriggered="2025-10-01T15:20:00Z"
            language={language}
            compact={true}
          />
        </div>
      </Card>

      {/* Demo Badge Logic Edit Nodes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          {language === 'en' ? 'Badge Logic Edit Events' : 'Eventos de Edición de Lógica de Insignias'}
        </h3>
        
        <div className="space-y-4">
          <BadgeLogicEditNode
            timestamp="2025-10-01T15:15:00Z"
            badge="Trust Velocity Master"
            originalLogic="Clarity Index ≥ 3.0x + Feedback ≥ 4.5"
            editedLogic="Clarity Index ≥ 2.8x + Replay Completion ≥ 70%"
            reason="Founder override for remix arc optimization"
            id="badge-edit-trust-velocity-001"
            editedBy="Luis Dominguez"
            status="deployed"
            unlockRate={82}
            avgUnlockTime="2d 6h"
            satisfactionScore={4.4}
            testsRun={15}
            badgeIcon="🧩"
            language={language}
            onEdit={() => console.log('Edit badge logic')}
            onRevert={() => console.log('Revert badge logic')}
            onTest={() => console.log('Test badge logic')}
            onViewAnalytics={() => console.log('View badge analytics')}
            onViewBadge={() => console.log('View badge details')}
          />
          
          <BadgeLogicEditNode
            timestamp="2025-10-01T17:22:00Z"
            badge="Dual-Language Navigator"
            originalLogic="Complete 2 bilingual overlays + Feedback ≥ 4.0"
            editedLogic="Complete 3 bilingual overlays + Cultural Context Score ≥ 85%"
            reason="Enhanced cultural intelligence requirements for LatAm market"
            id="badge-edit-dual-lang-002"
            editedBy="Maria Rodriguez"
            status="testing"
            unlockRate={68}
            avgUnlockTime="3d 12h"
            satisfactionScore={4.1}
            testsRun={8}
            badgeIcon="🌐"
            language={language}
            compact={true}
          />
        </div>
      </Card>

      {/* Schema Trace Playback */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          {language === 'en' ? 'Schema Trace Playback' : 'Reproducción de Trazado de Esquemas'}
        </h3>
        
        <SchemaTracePlayback
          language={language}
          mode="interactive"
          showControls={true}
          showMetrics={true}
          onNodeSelect={(node) => console.log('Selected node:', node)}
          onPlaybackChange={(isPlaying) => console.log('Playback:', isPlaying)}
        >
          <TraceNode 
            path="finance.trust-velocity.investor" 
            status="active"
            connections={12}
            clarityImpact={3.4}
            lastActivity="2m ago"
          />
          <TraceNode 
            path="badge.dual-language" 
            status="stable"
            connections={9}
            clarityImpact={2.8}
            lastActivity="5m ago"
          />
          <TraceNode 
            path="demo.pitch-alpha" 
            status="high engagement"
            connections={7}
            clarityImpact={3.1}
            lastActivity="1m ago"
          />
        </SchemaTracePlayback>
      </Card>

      {/* Real-Time Event Stream */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          {language === 'en' ? 'Real-Time Event Stream' : 'Flujo de Eventos en Tiempo Real'}
        </h3>
        
        <div className="space-y-3">
          {/* Mixed event types in chronological order */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
          >
            <CheckCircle className="w-4 h-4 text-green-400" />
            <div className="flex-1">
              <div className="text-sm font-medium">Schema Node Activated</div>
              <div className="text-xs text-muted-foreground">
                finance.trust-velocity.investor → 3.4x clarity impact
              </div>
            </div>
            <div className="text-xs text-muted-foreground">2m ago</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
          >
            <Bell className="w-4 h-4 text-blue-400" />
            <div className="flex-1">
              <div className="text-sm font-medium">Replay Nudge Triggered</div>
              <div className="text-xs text-muted-foreground">
                Drop-off detected → Nudge sent to Founder, Coach
              </div>
            </div>
            <div className="text-xs text-muted-foreground">3m ago</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
          >
            <Trophy className="w-4 h-4 text-purple-400" />
            <div className="flex-1">
              <div className="text-sm font-medium">Badge Logic Updated</div>
              <div className="text-xs text-muted-foreground">
                Trust Velocity Master → Optimized for replay completion
              </div>
            </div>
            <div className="text-xs text-muted-foreground">5m ago</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
          >
            <Layers className="w-4 h-4 text-yellow-400" />
            <div className="flex-1">
              <div className="text-sm font-medium">Overlay Override Deployed</div>
              <div className="text-xs text-muted-foreground">
                Trust Velocity (LatAm) → Trust Velocity (Investor Lens)
              </div>
            </div>
            <div className="text-xs text-muted-foreground">7m ago</div>
          </motion.div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('schema-replay-studio')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {text.backToCenter}
              </Button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {text.title}
                </h1>
                <p className="text-muted-foreground mt-2">{text.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="deploy" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {text.deploy}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {text.analytics}
            </TabsTrigger>
            <TabsTrigger value="monitor" className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              {text.monitor}
            </TabsTrigger>
            <TabsTrigger value="tune" className="flex items-center gap-2">
              <Wand2 className="w-4 h-4" />
              {text.tune}
            </TabsTrigger>
            <TabsTrigger value="control" className="flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              {text.control}
            </TabsTrigger>
            <TabsTrigger value="overrides" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {text.overrides}
            </TabsTrigger>
            <TabsTrigger value="nodes" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              {text.nodes}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="deploy" className="mt-6">
            <SquadPackDeployPanel />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <AnalyticsDashboard />
          </TabsContent>
          
          <TabsContent value="monitor" className="mt-6">
            <PerformanceMonitor />
          </TabsContent>
          
          <TabsContent value="tune" className="mt-6">
            <AutoTuningSystem />
          </TabsContent>
          
          <TabsContent value="control" className="mt-6">
            <AdvancedSquadControlPanel />
          </TabsContent>
          
          <TabsContent value="overrides" className="mt-6">
            <OverlayOverrideTimeline />
          </TabsContent>
          
          <TabsContent value="nodes" className="mt-6">
            <NodeEventTimeline />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}