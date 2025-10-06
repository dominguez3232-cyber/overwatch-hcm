import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { 
  Rocket,
  Target,
  Users,
  Layers,
  Award,
  Activity,
  Share2,
  Play,
  Settings,
  CheckCircle,
  AlertCircle,
  Globe,
  Zap,
  Eye,
  Download,
  ExternalLink,
  BarChart3,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Map,
  Headphones,
  MessageSquare,
  Video,
  Radio
} from 'lucide-react';

interface RemixArc {
  id: string;
  title: string;
  version: string;
  status: 'tested' | 'sandbox' | 'live' | 'deprecated';
  clarityIndex: number;
  language: string[];
  schemaTraces: string[];
  estimatedImpact: string;
  testResults?: {
    sandboxScore: number;
    feedbackScore: number;
    completionRate: number;
  };
}

interface Squad {
  id: string;
  name: string;
  role: string;
  market: string;
  size: number;
  activeArcs: number;
  readinessScore: number;
}

interface CoachingOverlay {
  id: string;
  title: string;
  type: 'investor-lens' | 'dual-language' | 'precision-demo' | 'cultural-bridge';
  promptEN: string;
  promptES: string;
  tone: string;
  estimatedDuration: string;
  schemaTarget: string[];
}

interface BadgeLogic {
  id: string;
  badge: string;
  unlockLogic: string;
  targetMetric: string;
  threshold: number;
  status: 'active' | 'pending' | 'disabled';
  estimatedUnlockRate: string;
}

interface SchemaTrace {
  path: string;
  status: 'tracking' | 'inactive' | 'error' | 'optimizing';
  engagementRate: number;
  lastActivity: string;
  branchCount: number;
}

interface RemixDeploymentConsoleProps {
  language: 'en' | 'es';
  onDeploy: (deployment: any) => void;
  onPreview: (deployment: any) => void;
  onSaveConfiguration: (config: any) => void;
  onNavigate: (view: string) => void;
  currentMode?: 'setup' | 'deploy' | 'monitor' | 'analytics';
}

const DEMO_REMIX_ARCS: RemixArc[] = [
  {
    id: 'trust-velocity-investor',
    title: 'Trust Velocity Remix (Investor Edition)',
    version: 'v2.1',
    status: 'tested',
    clarityIndex: 3.4,
    language: ['EN', 'ES'],
    schemaTraces: ['finance.trust-velocity.investor', 'badge.dual-language'],
    estimatedImpact: 'High ROI + Cultural Reach',
    testResults: {
      sandboxScore: 88,
      feedbackScore: 4.8,
      completionRate: 82
    }
  },
  {
    id: 'dual-language-navigator',
    title: 'Dual-Language Navigator Remix',
    version: 'v1.8',
    status: 'tested',
    clarityIndex: 2.9,
    language: ['EN', 'ES'],
    schemaTraces: ['culture.force-multiplier', 'badge.dual-language'],
    estimatedImpact: 'Cultural Bridge + Market Expansion',
    testResults: {
      sandboxScore: 85,
      feedbackScore: 4.6,
      completionRate: 76
    }
  },
  {
    id: 'demo-precision-remix',
    title: 'Demo Precision Remix (Pitch Alpha)',
    version: 'v3.0',
    status: 'sandbox',
    clarityIndex: 3.1,
    language: ['EN'],
    schemaTraces: ['demo.pitch-alpha'],
    estimatedImpact: 'Investor Clarity + Demo Velocity',
    testResults: {
      sandboxScore: 92,
      feedbackScore: 4.7,
      completionRate: 89
    }
  },
  {
    id: 'ops-alpha-legal-clarity',
    title: 'Ops Alpha: Legal Clarity Remix',
    version: 'v1.5',
    status: 'live',
    clarityIndex: 2.7,
    language: ['EN', 'ES'],
    schemaTraces: ['law.assumed-right', 'ops.legal-velocity'],
    estimatedImpact: 'Operational Efficiency + Compliance'
  }
];

const DEMO_SQUADS: Squad[] = [
  {
    id: 'latam-gtm',
    name: 'LatAm GTM',
    role: 'Go-to-Market',
    market: 'LatAm',
    size: 8,
    activeArcs: 2,
    readinessScore: 92
  },
  {
    id: 'founder-solo',
    name: 'Founder Solo',
    role: 'Founder',
    market: 'US',
    size: 1,
    activeArcs: 1,
    readinessScore: 88
  },
  {
    id: 'ops-alpha',
    name: 'Ops Alpha',
    role: 'Operations',
    market: 'Global',
    size: 5,
    activeArcs: 3,
    readinessScore: 85
  },
  {
    id: 'investor-beta',
    name: 'Investor Beta',
    role: 'Investor Relations',
    market: 'US',
    size: 3,
    activeArcs: 1,
    readinessScore: 90
  }
];

const DEMO_COACHING_OVERLAYS: CoachingOverlay[] = [
  {
    id: 'trust-velocity-investor-lens',
    title: 'Trust Velocity (Investor Lens)',
    type: 'investor-lens',
    promptEN: 'Frame investor clarity using schema trace.',
    promptES: 'Presenta claridad inversora usando trazado de esquema.',
    tone: 'Investor-facing',
    estimatedDuration: '8-12 min',
    schemaTarget: ['finance.trust-velocity.investor']
  },
  {
    id: 'dual-language-navigator',
    title: 'Dual-Language Navigator',
    type: 'dual-language',
    promptEN: 'Deliver clarity in both languages with schema-linked transitions.',
    promptES: 'Entrega claridad en ambos idiomas con transiciones vinculadas al esquema.',
    tone: 'Bilingual Bridge',
    estimatedDuration: '10-15 min',
    schemaTarget: ['culture.force-multiplier', 'badge.dual-language']
  },
  {
    id: 'precision-demo-overlay',
    title: 'Precision Demo Overlay',
    type: 'precision-demo',
    promptEN: 'Optimize demo flow for maximum investor impact.',
    promptES: 'Optimiza flujo de demo para máximo impacto inversor.',
    tone: 'Demo-focused',
    estimatedDuration: '6-8 min',
    schemaTarget: ['demo.pitch-alpha']
  },
  {
    id: 'cultural-bridge-overlay',
    title: 'Cultural Bridge Overlay',
    type: 'cultural-bridge',
    promptEN: 'Build cultural context that amplifies business strategy.',
    promptES: 'Construye contexto cultural que amplifica estrategia de negocio.',
    tone: 'Cultural Intelligence',
    estimatedDuration: '12-18 min',
    schemaTarget: ['culture.force-multiplier']
  }
];

const DEMO_BADGE_LOGIC: BadgeLogic[] = [
  {
    id: 'trust-velocity-master',
    badge: '🧩 Trust Velocity Master',
    unlockLogic: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
    targetMetric: 'Clarity Index',
    threshold: 3.0,
    status: 'active',
    estimatedUnlockRate: '78%'
  },
  {
    id: 'dual-language-navigator',
    badge: '🌐 Dual-Language Navigator',
    unlockLogic: 'Overlay Completed in EN + ES',
    targetMetric: 'Language Completion',
    threshold: 100,
    status: 'active',
    estimatedUnlockRate: '65%'
  },
  {
    id: 'demo-precision-architect',
    badge: '🎯 Demo Precision Architect',
    unlockLogic: 'Demo Completion Rate ≥ 85%',
    targetMetric: 'Completion Rate',
    threshold: 85,
    status: 'pending',
    estimatedUnlockRate: '72%'
  },
  {
    id: 'cultural-intelligence-master',
    badge: '🎭 Cultural Intelligence Master',
    unlockLogic: 'Cultural Context Score ≥ 4.2',
    targetMetric: 'Cultural Score',
    threshold: 4.2,
    status: 'active',
    estimatedUnlockRate: '68%'
  }
];

const DEMO_SCHEMA_TRACES: SchemaTrace[] = [
  {
    path: 'finance.trust-velocity.investor',
    status: 'tracking',
    engagementRate: 84,
    lastActivity: '2m ago',
    branchCount: 12
  },
  {
    path: 'badge.dual-language',
    status: 'tracking',
    engagementRate: 76,
    lastActivity: '5m ago',
    branchCount: 8
  },
  {
    path: 'demo.pitch-alpha',
    status: 'inactive',
    engagementRate: 0,
    lastActivity: 'Never',
    branchCount: 0
  },
  {
    path: 'culture.force-multiplier',
    status: 'optimizing',
    engagementRate: 92,
    lastActivity: '1m ago',
    branchCount: 15
  },
  {
    path: 'law.assumed-right',
    status: 'tracking',
    engagementRate: 68,
    lastActivity: '8m ago',
    branchCount: 6
  }
];

export default function RemixDeploymentConsole({
  language,
  onDeploy,
  onPreview,
  onSaveConfiguration,
  onNavigate,
  currentMode = 'setup'
}: RemixDeploymentConsoleProps) {
  const [selectedRemix, setSelectedRemix] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('dual-language');
  const [selectedSquads, setSelectedSquads] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedMarket, setSelectedMarket] = useState<string>('');
  const [selectedOverlays, setSelectedOverlays] = useState<string[]>([]);
  const [activeBadges, setActiveBadges] = useState<string[]>([]);
  const [schemaTrackingEnabled, setSchemaTrackingEnabled] = useState<string[]>([]);
  const [replaySyncEnabled, setReplaySyncEnabled] = useState(false);
  const [exportOptions, setExportOptions] = useState<string[]>([]);
  const [deploymentMode, setDeploymentMode] = useState<'setup' | 'deploy' | 'monitor' | 'analytics'>(currentMode);

  const t = {
    en: {
      title: 'Remix Deployment Console',
      subtitle: 'Tactical deployment cockpit for schema-linked clarity and cinematic proof delivery',
      modules: {
        selector: 'Remix Arc Selector',
        targeting: 'Squad Targeting Matrix',
        overlay: 'Coaching Overlay Injection',
        badges: 'Badge Logic Activation',
        schema: 'Schema Trace Tracker',
        sync: 'Replay Sync & Export'
      },
      modes: {
        setup: 'Setup Configuration',
        deploy: 'Deploy to Squads',
        monitor: 'Monitor Performance',
        analytics: 'Analytics Dashboard'
      },
      actions: {
        deploy: 'Deploy Remix Arc',
        preview: 'Preview Configuration',
        save: 'Save Configuration',
        monitor: 'Monitor Deployment',
        export: 'Export Setup',
        sync: 'Sync Replays',
        activate: 'Activate',
        track: 'Track',
        enable: 'Enable',
        configure: 'Configure'
      },
      labels: {
        remixArc: 'Remix Arc',
        language: 'Language Mode',
        squads: 'Target Squads',
        role: 'Primary Role',
        market: 'Market Focus',
        overlays: 'Coaching Overlays',
        badges: 'Badge Logic',
        schema: 'Schema Traces',
        status: 'Status',
        clarity: 'Clarity Index',
        impact: 'Estimated Impact',
        readiness: 'Readiness Score',
        engagement: 'Engagement Rate',
        completion: 'Completion Rate',
        feedback: 'Feedback Score',
        unlockRate: 'Unlock Rate',
        duration: 'Est. Duration'
      },
      status: {
        tested: 'Tested',
        sandbox: 'Sandbox',
        live: 'Live',
        deprecated: 'Deprecated',
        active: 'Active',
        pending: 'Pending',
        disabled: 'Disabled',
        tracking: 'Tracking',
        inactive: 'Inactive',
        error: 'Error',
        optimizing: 'Optimizing'
      }
    },
    es: {
      title: 'Consola Despliegue Remix',
      subtitle: 'Cabina de despliegue táctico para claridad vinculada a esquemas y entrega de prueba cinemática',
      modules: {
        selector: 'Selector Arco Remix',
        targeting: 'Matriz Objetivo Escuadrón',
        overlay: 'Inyección Overlay Coaching',
        badges: 'Activación Lógica Insignias',
        schema: 'Rastreador Trazado Esquema',
        sync: 'Sincronización y Exportación Replay'
      },
      modes: {
        setup: 'Configuración Inicial',
        deploy: 'Desplegar a Escuadrones',
        monitor: 'Monitorear Rendimiento',
        analytics: 'Panel Analíticas'
      },
      actions: {
        deploy: 'Desplegar Arco Remix',
        preview: 'Vista Previa Configuración',
        save: 'Guardar Configuración',
        monitor: 'Monitorear Despliegue',
        export: 'Exportar Configuración',
        sync: 'Sincronizar Replays',
        activate: 'Activar',
        track: 'Rastrear',
        enable: 'Habilitar',
        configure: 'Configurar'
      },
      labels: {
        remixArc: 'Arco Remix',
        language: 'Modo Idioma',
        squads: 'Escuadrones Objetivo',
        role: 'Rol Principal',
        market: 'Enfoque Mercado',
        overlays: 'Overlays Coaching',
        badges: 'Lógica Insignias',
        schema: 'Trazados Esquema',
        status: 'Estado',
        clarity: 'Índice Claridad',
        impact: 'Impacto Estimado',
        readiness: 'Puntuación Preparación',
        engagement: 'Tasa Participación',
        completion: 'Tasa Finalización',
        feedback: 'Puntuación Feedback',
        unlockRate: 'Tasa Desbloqueo',
        duration: 'Duración Est.'
      },
      status: {
        tested: 'Probado',
        sandbox: 'Sandbox',
        live: 'En Vivo',
        deprecated: 'Obsoleto',
        active: 'Activo',
        pending: 'Pendiente',
        disabled: 'Deshabilitado',
        tracking: 'Rastreando',
        inactive: 'Inactivo',
        error: 'Error',
        optimizing: 'Optimizando'
      }
    }
  };

  const text = t[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'tested':
      case 'active':
      case 'tracking':
        return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'sandbox':
      case 'pending':
      case 'optimizing':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'live':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'deprecated':
      case 'disabled':
      case 'error':
        return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'inactive':
        return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const handleDeployment = () => {
    const deploymentConfig = {
      remixArc: selectedRemix,
      language: selectedLanguage,
      squads: selectedSquads,
      role: selectedRole,
      market: selectedMarket,
      overlays: selectedOverlays,
      badges: activeBadges,
      schemaTracking: schemaTrackingEnabled,
      replaySync: replaySyncEnabled,
      exportOptions: exportOptions,
      timestamp: new Date().toISOString()
    };

    console.log('🚀 Deploying remix configuration:', deploymentConfig);
    onDeploy(deploymentConfig);
  };

  const handlePreview = () => {
    const previewConfig = {
      remixArc: selectedRemix,
      language: selectedLanguage,
      squads: selectedSquads,
      overlays: selectedOverlays,
      estimatedMetrics: {
        clarityLift: '3.2x',
        completionRate: '85%',
        engagementRate: '78%',
        badgeUnlockRate: '72%'
      }
    };

    console.log('👁️ Previewing remix configuration:', previewConfig);
    onPreview(previewConfig);
  };

  const renderRemixArcSelector = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.selector}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{text.labels.remixArc}</label>
            <Select value={selectedRemix} onValueChange={setSelectedRemix}>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${text.labels.remixArc}`} />
              </SelectTrigger>
              <SelectContent>
                {DEMO_REMIX_ARCS.map((arc) => (
                  <SelectItem key={arc.id} value={arc.id}>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${getStatusColor(arc.status)}`}>
                        {text.status[arc.status as keyof typeof text.status]}
                      </Badge>
                      <span>{arc.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{text.labels.language}</label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English Only</SelectItem>
                <SelectItem value="es">Español Only</SelectItem>
                <SelectItem value="dual-language">Dual-Language</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedRemix && (
          <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
            {(() => {
              const arc = DEMO_REMIX_ARCS.find(a => a.id === selectedRemix);
              if (!arc) return null;

              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{text.labels.clarity}</div>
                    <div className="text-lg font-bold text-primary">{arc.clarityIndex}x</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{text.labels.impact}</div>
                    <div className="text-sm font-medium">{arc.estimatedImpact}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Version</div>
                    <div className="text-sm font-medium">{arc.version}</div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </Card>
  );

  const renderSquadTargeting = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.targeting}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{text.labels.squads}</label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {DEMO_SQUADS.map((squad) => (
                <div
                  key={squad.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedSquads.includes(squad.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-secondary/30 hover:bg-secondary/50'
                  }`}
                  onClick={() => {
                    setSelectedSquads(prev => 
                      prev.includes(squad.id)
                        ? prev.filter(id => id !== squad.id)
                        : [...prev, squad.id]
                    );
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{squad.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {squad.role} • {squad.market} • {squad.size} members
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">{squad.readinessScore}%</div>
                      <div className="text-xs text-muted-foreground">{text.labels.readiness}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{text.labels.role}</label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${text.labels.role}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder</SelectItem>
                <SelectItem value="ops-lead">Ops Lead</SelectItem>
                <SelectItem value="coach">Coach</SelectItem>
                <SelectItem value="investor">Investor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{text.labels.market}</label>
            <Select value={selectedMarket} onValueChange={setSelectedMarket}>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${text.labels.market}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latam">LatAm</SelectItem>
                <SelectItem value="us">US</SelectItem>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="eu">EU</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedSquads.length > 0 && (
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="text-sm font-medium text-blue-400 mb-2">Deployment Forecast</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Target Users:</span>
                <div className="font-bold">
                  {DEMO_SQUADS.filter(s => selectedSquads.includes(s.id)).reduce((acc, s) => acc + s.size, 0)}
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Avg Readiness:</span>
                <div className="font-bold">
                  {Math.round(DEMO_SQUADS.filter(s => selectedSquads.includes(s.id)).reduce((acc, s) => acc + s.readinessScore, 0) / selectedSquads.length)}%
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Est. Clarity Lift:</span>
                <div className="font-bold text-green-400">+2.8x</div>
              </div>
              <div>
                <span className="text-muted-foreground">Badge Unlock Rate:</span>
                <div className="font-bold text-yellow-400">75%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  const renderCoachingOverlays = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.overlay}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DEMO_COACHING_OVERLAYS.map((overlay) => (
            <div
              key={overlay.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedOverlays.includes(overlay.id)
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-secondary/30 hover:bg-secondary/50'
              }`}
              onClick={() => {
                setSelectedOverlays(prev => 
                  prev.includes(overlay.id)
                    ? prev.filter(id => id !== overlay.id)
                    : [...prev, overlay.id]
                );
              }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{overlay.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {overlay.tone}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-muted-foreground">EN:</span>
                    <p className="text-sm">{overlay.promptEN}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">ES:</span>
                    <p className="text-sm">{overlay.promptES}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{text.labels.duration}: {overlay.estimatedDuration}</span>
                  <div className="flex gap-1">
                    {overlay.schemaTarget.map((schema, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-mono">
                        {schema.split('.').pop()}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            <Headphones className="w-3 h-3 mr-1" />
            Caption Mode
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            <Video className="w-3 h-3 mr-1" />
            Badge Trigger Preview
          </Button>
        </div>
      </div>
    </Card>
  );

  const renderBadgeLogic = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.badges}</h3>
        </div>

        <div className="space-y-3">
          {DEMO_BADGE_LOGIC.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-lg border ${
                activeBadges.includes(badge.id)
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-secondary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">{badge.badge.split(' ')[0]}</span>
                    <span className="font-medium">{badge.badge.substring(2)}</span>
                    <Badge className={`text-xs ${getStatusColor(badge.status)}`}>
                      {text.status[badge.status as keyof typeof text.status]}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">Logic:</span> {badge.unlockLogic}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <span>
                      <span className="text-muted-foreground">Target:</span> {badge.targetMetric}
                    </span>
                    <span>
                      <span className="text-muted-foreground">Threshold:</span> {badge.threshold}
                    </span>
                    <span>
                      <span className="text-muted-foreground">{text.labels.unlockRate}:</span> {badge.estimatedUnlockRate}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Switch
                    checked={activeBadges.includes(badge.id)}
                    onCheckedChange={(checked) => {
                      setActiveBadges(prev => 
                        checked
                          ? [...prev, badge.id]
                          : prev.filter(id => id !== badge.id)
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            <ExternalLink className="w-3 h-3 mr-1" />
            Trophy System
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            <Activity className="w-3 h-3 mr-1" />
            Replay Tracker
          </Button>
        </div>
      </div>
    </Card>
  );

  const renderSchemaTracker = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Map className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.schema}</h3>
        </div>

        <div className="space-y-3">
          {DEMO_SCHEMA_TRACES.map((trace) => (
            <div
              key={trace.path}
              className={`p-4 rounded-lg border ${
                schemaTrackingEnabled.includes(trace.path)
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-secondary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm">{trace.path}</span>
                    <Badge className={`text-xs ${getStatusColor(trace.status)}`}>
                      {text.status[trace.status as keyof typeof text.status]}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">{text.labels.engagement}:</span>
                      <div className="font-bold text-primary">{trace.engagementRate}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Activity:</span>
                      <div className="font-medium">{trace.lastActivity}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Branches:</span>
                      <div className="font-medium">{trace.branchCount}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Switch
                    checked={schemaTrackingEnabled.includes(trace.path)}
                    onCheckedChange={(checked) => {
                      setSchemaTrackingEnabled(prev => 
                        checked
                          ? [...prev, trace.path]
                          : prev.filter(path => path !== trace.path)
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            <Download className="w-3 h-3 mr-1" />
            Export Trace Map
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            Remix Forecast Engine
          </Button>
        </div>
      </div>
    </Card>
  );

  const renderReplaySync = () => (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Share2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{text.modules.sync}</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Replay Link</label>
            <div className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg font-mono text-sm">
              <Radio className="w-4 h-4 text-primary" />
              <span>/replay?id=latam-gtm-investor-remix</span>
              <Button size="sm" variant="outline" className="ml-auto">
                <Eye className="w-3 h-3 mr-1" />
                Preview
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Sync Options</label>
            <div className="space-y-2">
              {['Investor Portal', 'Founder Coaching Console', 'Remix Showcase', 'LMS Integration'].map((option) => (
                <div
                  key={option}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    exportOptions.includes(option)
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-secondary/30 hover:bg-secondary/50'
                  }`}
                  onClick={() => {
                    setExportOptions(prev => 
                      prev.includes(option)
                        ? prev.filter(opt => opt !== option)
                        : [...prev, option]
                    );
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{option}</span>
                    <CheckCircle className={`w-4 h-4 ${
                      exportOptions.includes(option) ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div>
              <span className="text-sm font-medium">Enable replay metrics and badge unlock tracking</span>
              <div className="text-xs text-muted-foreground">
                Track performance analytics and badge progression in real-time
              </div>
            </div>
            <Switch
              checked={replaySyncEnabled}
              onCheckedChange={setReplaySyncEnabled}
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            <MessageSquare className="w-3 h-3 mr-1" />
            Embed in LMS
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            Investor Pitch Walkthrough
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Rocket className="w-6 h-6 text-primary" />
              {text.title}
            </h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Deployment Flow: 6 Modules
            </Badge>
            <select
              value={deploymentMode}
              onChange={(e) => setDeploymentMode(e.target.value as any)}
              className="bg-input border border-border text-foreground px-3 py-1 rounded text-sm"
            >
              <option value="setup">{text.modes.setup}</option>
              <option value="deploy">{text.modes.deploy}</option>
              <option value="monitor">{text.modes.monitor}</option>
              <option value="analytics">{text.modes.analytics}</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Deployment Flow Visualization */}
      <Card className="p-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${selectedRemix ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Remix Arc</span>
          </div>
          <ArrowRight className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${selectedSquads.length > 0 ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Squad Targeting</span>
          </div>
          <ArrowRight className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${selectedOverlays.length > 0 ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Coaching Overlay</span>
          </div>
          <ArrowRight className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${activeBadges.length > 0 ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Badge Logic</span>
          </div>
          <ArrowRight className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${schemaTrackingEnabled.length > 0 ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Schema Trace</span>
          </div>
          <ArrowRight className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${replaySyncEnabled ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>Replay Sync</span>
          </div>
        </div>
      </Card>

      {/* Deployment Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderRemixArcSelector()}
        {renderSquadTargeting()}
        {renderCoachingOverlays()}
        {renderBadgeLogic()}
        {renderSchemaTracker()}
        {renderReplaySync()}
      </div>

      {/* Action Panel */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Deployment Ready</h3>
            <p className="text-sm text-muted-foreground">
              Configuration complete - ready for schema-linked deployment
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onSaveConfiguration({
                selectedRemix,
                selectedLanguage,
                selectedSquads,
                selectedOverlays,
                activeBadges,
                schemaTrackingEnabled,
                replaySyncEnabled,
                exportOptions
              })}
            >
              <Download className="w-4 h-4 mr-2" />
              {text.actions.save}
            </Button>
            
            <Button
              variant="outline"
              onClick={handlePreview}
              disabled={!selectedRemix || selectedSquads.length === 0}
            >
              <Eye className="w-4 h-4 mr-2" />
              {text.actions.preview}
            </Button>
            
            <Button
              onClick={handleDeployment}
              disabled={!selectedRemix || selectedSquads.length === 0}
              className="bg-primary hover:bg-primary/90"
            >
              <Rocket className="w-4 h-4 mr-2" />
              {text.actions.deploy}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}