import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import MetricCard from './MetricCard';
import { 
  Play,
  Edit3,
  Settings,
  Map,
  Layers,
  Shuffle,
  Share,
  Download,
  Eye,
  ArrowLeft,
  Plus,
  X,
  Copy,
  Star,
  Trophy,
  Crown,
  Target,
  Zap,
  Users,
  Globe,
  BarChart3,
  Activity,
  TrendingUp,
  Clock,
  MessageSquare,
  BookOpen,
  Briefcase,
  Building,
  Search,
  Filter,
  Save,
  Upload,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Wand2,
  Palette,
  Code,
  Database,
  GitBranch,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Compass,
  Route,
  Calendar,
  Grid3X3,
  Layers3,
  Clapperboard,
  Heart
} from 'lucide-react';

interface OverlayVariant {
  id: string;
  base: string;
  remix: string;
  schema: string;
  clarityLift: string;
  context: string;
  marketTags: string[];
  roleTags: string[];
  coachingStyle: string;
  language: 'EN' | 'ES' | 'Dual';
}

interface CoachingPrompt {
  id: string;
  overlay: string;
  en: string;
  es: string;
  context: string;
  style: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface BadgePathRule {
  id: string;
  badge: string;
  icon: string;
  unlockLogic: string;
  remixContext: string;
  clarityThreshold: number;
  feedbackThreshold: number;
  marketFilter?: string;
  roleFilter?: string;
}

interface RemixReplay {
  id: string;
  title: string;
  description: string;
  overlays: string[];
  badges: string[];
  clarityLift: string;
  coachingStyle: string;
  schemaTrace: string[];
  marketTags: string[];
  roleTags: string[];
  language: 'EN' | 'ES' | 'Dual';
  replayLink: string;
  createdAt: string;
  author: string;
  views: number;
  likes: number;
  featured: boolean;
}

interface SchemaNode {
  id: string;
  path: string;
  title: string;
  description: string;
  connections: string[];
  level: 'foundation' | 'intermediate' | 'advanced' | 'mastery';
  category: string;
}

interface SchemaReplayStudioProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'analytics' | 'editor' | 'remix';
  squadId?: string;
  replayId?: string;
}

const OVERLAY_VARIANTS: OverlayVariant[] = [
  {
    id: 'trust-velocity-latam',
    base: 'Trust Velocity',
    remix: 'Trust Velocity (LatAm Coaching)',
    schema: 'finance.trust-velocity.latam',
    clarityLift: '3.4x',
    context: 'LatAm GTM',
    marketTags: ['LatAm', 'Cross-border', 'Investor'],
    roleTags: ['Founder', 'Ops Lead'],
    coachingStyle: 'Investor-facing',
    language: 'Dual'
  },
  {
    id: 'assumed-right-investor',
    base: 'Assumed Right',
    remix: 'Assumed Right (Investor Lens)',
    schema: 'law.assumed-right.investor',
    clarityLift: '3.0x',
    context: 'Legal Clarity',
    marketTags: ['US', 'Legal', 'Compliance'],
    roleTags: ['Founder', 'Legal Lead'],
    coachingStyle: 'Schema-first',
    language: 'EN'
  },
  {
    id: 'dual-language-gtm',
    base: 'Dual-Language Navigator',
    remix: 'Dual-Language Navigator (GTM Focus)',
    schema: 'communication.bilingual.gtm',
    clarityLift: '2.8x',
    context: 'Market Entry',
    marketTags: ['LatAm', 'Global', 'GTM'],
    roleTags: ['Founder', 'Marketing Lead'],
    coachingStyle: 'Narrative-led',
    language: 'Dual'
  }
];

const COACHING_PROMPTS: CoachingPrompt[] = [
  {
    id: 'trust-velocity-latam-prompt',
    overlay: 'Trust Velocity (LatAm Coaching)',
    en: 'Frame trust velocity using regional investor expectations and schema trace.',
    es: 'Presenta velocidad de confianza usando expectativas regionales de inversores y trazado de esquema.',
    context: 'LatAm Investor Relations',
    style: 'Investor-facing',
    difficulty: 'advanced'
  },
  {
    id: 'assumed-right-investor-prompt',
    overlay: 'Assumed Right (Investor Lens)',
    en: 'Highlight legal clarity using founder-first schema logic.',
    es: 'Destaca claridad legal usando lógica de esquema centrada en el fundador.',
    context: 'Legal Due Diligence',
    style: 'Schema-first',
    difficulty: 'expert'
  },
  {
    id: 'dual-language-gtm-prompt',
    overlay: 'Dual-Language Navigator (GTM Focus)',
    en: 'Note the bilingual coaching arc and replay engagement for market entry.',
    es: 'Observa el arco de entrenamiento bilingüe y la participación en la repetición para entrada al mercado.',
    context: 'Market Expansion',
    style: 'Narrative-led',
    difficulty: 'intermediate'
  }
];

const BADGE_PATH_RULES: BadgePathRule[] = [
  {
    id: 'trust-velocity-master-investor',
    badge: '🧩 Trust Velocity Master',
    icon: '🧩',
    unlockLogic: 'Clarity Index ≥ 3.4x + Feedback ≥ 4.6',
    remixContext: 'Investor Edition',
    clarityThreshold: 3.4,
    feedbackThreshold: 4.6,
    marketFilter: 'LatAm',
    roleFilter: 'Founder'
  },
  {
    id: 'dual-language-navigator-gtm',
    badge: '🌐 Dual-Language Navigator',
    icon: '🌐',
    unlockLogic: 'Overlay Completed in EN + ES + Market = LatAm',
    remixContext: 'LatAm GTM',
    clarityThreshold: 2.8,
    feedbackThreshold: 4.5,
    marketFilter: 'LatAm',
    roleFilter: undefined
  },
  {
    id: 'demo-precision-architect',
    badge: '🎯 Demo Precision Architect',
    icon: '🎯',
    unlockLogic: 'Schema Creation + Replay Deploy + Clarity ≥ 3.0x',
    remixContext: 'Demo Excellence',
    clarityThreshold: 3.0,
    feedbackThreshold: 4.3,
    marketFilter: undefined,
    roleFilter: 'Founder'
  }
];

const REMIX_REPLAYS: RemixReplay[] = [
  {
    id: 'latam-gtm-investor-remix',
    title: 'LatAm GTM: Trust Velocity Remix (Investor Edition)',
    description: 'Advanced investor-facing coaching with regional market context and bilingual schema deployment',
    overlays: ['Trust Velocity (LatAm Coaching)', 'Dual-Language Navigator'],
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    clarityLift: '3.4x',
    coachingStyle: 'Investor-facing',
    schemaTrace: ['finance.trust-velocity.latam', 'badge.dual-language'],
    marketTags: ['LatAm', 'Cross-border'],
    roleTags: ['Founder', 'Ops Lead'],
    language: 'Dual',
    replayLink: '/replay?id=latam-gtm-investor-remix',
    createdAt: '2025-10-01',
    author: 'Luis Dominguez',
    views: 247,
    likes: 89,
    featured: true
  },
  {
    id: 'ops-alpha-legal-remix',
    title: 'Ops Alpha: Assumed Right Remix (Legal Clarity)',
    description: 'Schema-first legal framework coaching for operational excellence and compliance mastery',
    overlays: ['Assumed Right (Investor Lens)'],
    badges: ['🎯 Demo Precision Architect'],
    clarityLift: '3.0x',
    coachingStyle: 'Schema-first',
    schemaTrace: ['law.assumed-right.investor'],
    marketTags: ['US', 'Legal'],
    roleTags: ['Ops Lead', 'Legal Lead'],
    language: 'EN',
    replayLink: '/replay?id=ops-alpha-legal-remix',
    createdAt: '2025-09-28',
    author: 'Sarah Chen',
    views: 183,
    likes: 67,
    featured: false
  },
  {
    id: 'founder-solo-dual-language',
    title: 'Founder Solo: Dual-Language Mastery Sprint',
    description: 'Intensive bilingual coaching arc for solo founders entering cross-border markets',
    overlays: ['Dual-Language Navigator (GTM Focus)', 'Trust Velocity (LatAm Coaching)'],
    badges: ['🌐 Dual-Language Navigator', '👑 Founder Excellence'],
    clarityLift: '2.9x',
    coachingStyle: 'Narrative-led',
    schemaTrace: ['communication.bilingual.gtm', 'founder.solo-mastery'],
    marketTags: ['LatAm', 'Global'],
    roleTags: ['Founder'],
    language: 'Dual',
    replayLink: '/replay?id=founder-solo-dual-language',
    createdAt: '2025-09-25',
    author: 'Maria Rodriguez',
    views: 156,
    likes: 52,
    featured: false
  }
];

const SCHEMA_NODES: SchemaNode[] = [
  {
    id: 'finance-trust-velocity-latam',
    path: 'finance.trust-velocity.latam',
    title: 'LatAm Trust Velocity',
    description: 'Regional trust optimization for cross-border investor relations',
    connections: ['finance.trust-velocity', 'communication.bilingual.gtm'],
    level: 'advanced',
    category: 'Finance'
  },
  {
    id: 'law-assumed-right-investor',
    path: 'law.assumed-right.investor',
    title: 'Investor Legal Clarity',
    description: 'Legal framework optimization for investor due diligence',
    connections: ['law.assumed-right', 'demo.pitch-alpha'],
    level: 'expert',
    category: 'Legal'
  },
  {
    id: 'communication-bilingual-gtm',
    path: 'communication.bilingual.gtm',
    title: 'Bilingual GTM Framework',
    description: 'Cross-cultural communication for market entry',
    connections: ['communication.cross-cultural', 'badge.dual-language'],
    level: 'intermediate',
    category: 'Communication'
  }
];

export default function SchemaReplayStudio({
  language,
  onNavigate,
  currentMode = 'analytics',
  squadId,
  replayId
}: SchemaReplayStudioProps) {
  const [activeTab, setActiveTab] = useState('editor');
  const [selectedOverlay, setSelectedOverlay] = useState<OverlayVariant | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<CoachingPrompt | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<BadgePathRule | null>(null);
  const [currentRemix, setCurrentRemix] = useState<RemixReplay | null>(null);
  const [timelineBlocks, setTimelineBlocks] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    market: '',
    role: '',
    coachingStyle: '',
    badgePath: '',
    schemaBranch: '',
    language: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [showSchemaMap, setShowSchemaMap] = useState(false);

  const t = {
    en: {
      title: 'Schema Replay Studio',
      subtitle: 'Advanced schema mapping and replay customization center with editor and remix modes',
      editor: 'Editor',
      remix: 'Remix',
      analytics: 'Analytics',
      showcase: 'Showcase',
      overlayVariants: 'Overlay Variants',
      coachingPrompts: 'Coaching Prompts',
      badgePaths: 'Badge Paths',
      schemaMapping: 'Schema Mapping',
      marketFilter: 'Market Filter',
      roleFilter: 'Role Filter',
      coachingStyleFilter: 'Coaching Style',
      badgePathFilter: 'Badge Path',
      schemaBranchFilter: 'Schema Branch',
      languageFilter: 'Language',
      searchPlaceholder: 'Search remix by overlay, badge, or coaching style…',
      createRemix: 'Create Remix',
      publishRemix: 'Publish Remix',
      saveRemix: 'Save Remix',
      previewRemix: 'Preview Remix',
      exportReplay: 'Export Replay',
      shareReplay: 'Share Replay',
      clarityLift: 'Clarity Lift',
      views: 'Views',
      likes: 'Likes',
      featured: 'Featured',
      base: 'Base',
      remix: 'Remix',
      context: 'Context',
      unlockLogic: 'Unlock Logic',
      backToCenter: 'Back to Command Center',
      dragAndDropTimeline: 'Drag-and-Drop Timeline',
      overlayBlocks: 'Overlay Blocks',
      promptLibrary: 'Prompt Library',
      badgeLogicBuilder: 'Badge Logic Builder',
      schemaTraceViewer: 'Schema Trace Viewer',
      remixPreview: 'Remix Preview',
      playRemixReplay: 'Play Remix Replay',
      exportOptions: 'Export Options',
      investorPortal: 'Investor Portal',
      squadDashboard: 'Squad Dashboard',
      publicShowcase: 'Public Showcase',
      overlayVariantSelector: 'Overlay Variant Selector',
      coachingPromptSwap: 'Coaching Prompt Swap',
      badgePathCustomizer: 'Badge Path Customizer',
      marketFilterEditor: 'Market Filter Editor',
      remixPublishPanel: 'Remix Publish Panel',
      remixGallery: 'Remix Gallery',
      filterSidebar: 'Filter Sidebar',
      previewModal: 'Preview Modal',
      exportPanel: 'Export Panel'
    },
    es: {
      title: 'Estudio de Replay de Esquemas',
      subtitle: 'Centro avanzado de mapeo de esquemas y personalización de replays con modos editor y remix',
      editor: 'Editor',
      remix: 'Remix',
      analytics: 'Analíticas',
      showcase: 'Galería',
      overlayVariants: 'Variantes de Overlay',
      coachingPrompts: 'Prompts de Coaching',
      badgePaths: 'Rutas de Insignias',
      schemaMapping: 'Mapeo de Esquemas',
      marketFilter: 'Filtro de Mercado',
      roleFilter: 'Filtro de Rol',
      coachingStyleFilter: 'Estilo de Coaching',
      badgePathFilter: 'Ruta de Insignia',
      schemaBranchFilter: 'Rama de Esquema',
      languageFilter: 'Idioma',
      searchPlaceholder: 'Buscar remix por overlay, insignia o estilo de coaching…',
      createRemix: 'Crear Remix',
      publishRemix: 'Publicar Remix',
      saveRemix: 'Guardar Remix',
      previewRemix: 'Vista Previa Remix',
      exportReplay: 'Exportar Replay',
      shareReplay: 'Compartir Replay',
      clarityLift: 'Mejora de Claridad',
      views: 'Visualizaciones',
      likes: 'Me Gusta',
      featured: 'Destacado',
      base: 'Base',
      remix: 'Remix',
      context: 'Contexto',
      unlockLogic: 'Lógica de Desbloqueo',
      backToCenter: 'Volver al Centro de Comando',
      dragAndDropTimeline: 'Línea de Tiempo Arrastrar y Soltar',
      overlayBlocks: 'Bloques de Overlay',
      promptLibrary: 'Biblioteca de Prompts',
      badgeLogicBuilder: 'Constructor de Lógica de Insignias',
      schemaTraceViewer: 'Visor de Rastreo de Esquemas',
      remixPreview: 'Vista Previa de Remix',
      playRemixReplay: 'Reproducir Replay Remix',
      exportOptions: 'Opciones de Exportación',
      investorPortal: 'Portal de Inversores',
      squadDashboard: 'Dashboard de Escuadrón',
      publicShowcase: 'Galería Pública',
      overlayVariantSelector: 'Selector de Variantes de Overlay',
      coachingPromptSwap: 'Intercambio de Prompts de Coaching',
      badgePathCustomizer: 'Personalizador de Rutas de Insignias',
      marketFilterEditor: 'Editor de Filtros de Mercado',
      remixPublishPanel: 'Panel de Publicación de Remix',
      remixGallery: 'Galería de Remix',
      filterSidebar: 'Barra Lateral de Filtros',
      previewModal: 'Modal de Vista Previa',
      exportPanel: 'Panel de Exportación'
    }
  };

  const text = t[language];

  // Initialize with current mode
  useEffect(() => {
    if (currentMode === 'editor') {
      setActiveTab('editor');
    } else if (currentMode === 'remix') {
      setActiveTab('remix');
    } else {
      setActiveTab('analytics');
    }
  }, [currentMode]);

  // Load specific replay if provided
  useEffect(() => {
    if (replayId) {
      const replay = REMIX_REPLAYS.find(r => r.id === replayId);
      if (replay) {
        setCurrentRemix(replay);
        setActiveTab('remix');
      }
    }
  }, [replayId]);

  const handleOverlaySelect = (overlay: OverlayVariant) => {
    setSelectedOverlay(overlay);
    // Auto-select related prompt
    const relatedPrompt = COACHING_PROMPTS.find(p => p.overlay === overlay.remix);
    if (relatedPrompt) {
      setSelectedPrompt(relatedPrompt);
    }
  };

  const handlePromptSelect = (prompt: CoachingPrompt) => {
    setSelectedPrompt(prompt);
  };

  const handleBadgeSelect = (badge: BadgePathRule) => {
    setSelectedBadge(badge);
  };

  const handleCreateRemix = () => {
    if (selectedOverlay && selectedPrompt && selectedBadge) {
      const newRemix: RemixReplay = {
        id: `remix-${Date.now()}`,
        title: `${selectedOverlay.context}: ${selectedOverlay.base} Remix`,
        description: `Custom remix featuring ${selectedOverlay.remix} with ${selectedPrompt.style} coaching style`,
        overlays: [selectedOverlay.remix],
        badges: [selectedBadge.badge],
        clarityLift: selectedOverlay.clarityLift,
        coachingStyle: selectedPrompt.style,
        schemaTrace: [selectedOverlay.schema],
        marketTags: selectedOverlay.marketTags,
        roleTags: selectedOverlay.roleTags,
        language: selectedOverlay.language,
        replayLink: `/replay?id=${`remix-${Date.now()}`}`,
        createdAt: new Date().toISOString().split('T')[0],
        author: 'Custom User',
        views: 0,
        likes: 0,
        featured: false
      };
      
      setCurrentRemix(newRemix);
      setActiveTab('remix');
    }
  };

  const filteredReplays = REMIX_REPLAYS.filter(replay => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matches = 
        replay.title.toLowerCase().includes(query) ||
        replay.description.toLowerCase().includes(query) ||
        replay.overlays.some(o => o.toLowerCase().includes(query)) ||
        replay.badges.some(b => b.toLowerCase().includes(query)) ||
        replay.coachingStyle.toLowerCase().includes(query);
      if (!matches) return false;
    }
    
    if (filters.market && !replay.marketTags.includes(filters.market)) return false;
    if (filters.role && !replay.roleTags.includes(filters.role)) return false;
    if (filters.coachingStyle && replay.coachingStyle !== filters.coachingStyle) return false;
    if (filters.language && replay.language !== filters.language) return false;
    
    return true;
  });

  const OverlayVariantSelector = () => (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5" />
        {text.overlayVariantSelector}
      </h3>
      
      <div className="space-y-4">
        {OVERLAY_VARIANTS.map((variant) => (
          <motion.div
            key={variant.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedOverlay?.id === variant.id
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => handleOverlaySelect(variant)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">{text.base}</div>
                  <div className="font-medium">{variant.base}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{text.clarityLift}</div>
                  <div className="text-lg font-bold text-green-400">{variant.clarityLift}</div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">{text.remix}</div>
                <div className="font-medium text-primary">{variant.remix}</div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                  {variant.schema}
                </span>
                <Badge variant="outline" className="text-xs">
                  {variant.context}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {variant.language}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {variant.marketTags.map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {variant.roleTags.map((tag, index) => (
                  <span key={index} className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );

  const CoachingPromptSwap = () => (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        {text.coachingPromptSwap}
      </h3>
      
      <div className="space-y-4">
        {COACHING_PROMPTS.map((prompt) => (
          <motion.div
            key={prompt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedPrompt?.id === prompt.id
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => handlePromptSelect(prompt)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{prompt.overlay}</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {prompt.style}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      prompt.difficulty === 'expert' ? 'text-red-400' :
                      prompt.difficulty === 'advanced' ? 'text-orange-400' :
                      prompt.difficulty === 'intermediate' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}
                  >
                    {prompt.difficulty}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">EN:</div>
                  <div className="text-sm">{prompt.en}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">ES:</div>
                  <div className="text-sm">{prompt.es}</div>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                {text.context}: {prompt.context}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );

  const BadgePathCustomizer = () => (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5" />
        {text.badgePathCustomizer}
      </h3>
      
      <div className="space-y-4">
        {BADGE_PATH_RULES.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedBadge?.id === badge.id
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => handleBadgeSelect(badge)}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{badge.icon}</span>
                <div className="flex-1">
                  <h4 className="font-medium">{badge.badge}</h4>
                  <div className="text-sm text-muted-foreground">{text.unlockLogic}: {badge.unlockLogic}</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {badge.remixContext}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Clarity: </span>
                  <span className="text-green-400 font-medium">{badge.clarityThreshold}x</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Feedback: </span>
                  <span className="text-blue-400 font-medium">{badge.feedbackThreshold}</span>
                </div>
              </div>
              
              {(badge.marketFilter || badge.roleFilter) && (
                <div className="flex gap-2">
                  {badge.marketFilter && (
                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">
                      Market: {badge.marketFilter}
                    </span>
                  )}
                  {badge.roleFilter && (
                    <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                      Role: {badge.roleFilter}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );

  const MarketFilterEditor = () => (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Filter className="w-5 h-5" />
        {text.marketFilterEditor}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">{text.marketFilter}</label>
          <select
            value={filters.market}
            onChange={(e) => setFilters(prev => ({ ...prev, market: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Markets</option>
            <option value="LatAm">LatAm</option>
            <option value="US">US</option>
            <option value="Global">Global</option>
            <option value="Investor">Investor</option>
            <option value="Coach">Coach</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{text.roleFilter}</label>
          <select
            value={filters.role}
            onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Roles</option>
            <option value="Founder">Founder</option>
            <option value="Ops Lead">Ops Lead</option>
            <option value="Coach">Coach</option>
            <option value="Investor">Investor</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{text.coachingStyleFilter}</label>
          <select
            value={filters.coachingStyle}
            onChange={(e) => setFilters(prev => ({ ...prev, coachingStyle: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Styles</option>
            <option value="Schema-first">Schema-first</option>
            <option value="Narrative-led">Narrative-led</option>
            <option value="Investor-facing">Investor-facing</option>
            <option value="Dual-language">Dual-language</option>
            <option value="Rapid Clarity">Rapid Clarity</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{text.badgePathFilter}</label>
          <select
            value={filters.badgePath}
            onChange={(e) => setFilters(prev => ({ ...prev, badgePath: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Badge Paths</option>
            <option value="🧩 Trust Velocity Master">🧩 Trust Velocity Master</option>
            <option value="🌐 Dual-Language Navigator">🌐 Dual-Language Navigator</option>
            <option value="🎯 Demo Precision Architect">🎯 Demo Precision Architect</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{text.schemaBranchFilter}</label>
          <select
            value={filters.schemaBranch}
            onChange={(e) => setFilters(prev => ({ ...prev, schemaBranch: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Schema Branches</option>
            <option value="finance.trust-velocity">finance.trust-velocity</option>
            <option value="law.assumed-right">law.assumed-right</option>
            <option value="badge.dual-language">badge.dual-language</option>
            <option value="demo.pitch-alpha">demo.pitch-alpha</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{text.languageFilter}</label>
          <select
            value={filters.language}
            onChange={(e) => setFilters(prev => ({ ...prev, language: e.target.value }))}
            className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
          >
            <option value="">All Languages</option>
            <option value="EN">EN only</option>
            <option value="ES">ES only</option>
            <option value="Dual">Dual-language</option>
          </select>
        </div>
      </div>
    </Card>
  );

  const AdvancedRemixBuilder = () => {
    const [remixConfig, setRemixConfig] = useState({
      badgeGoal: '',
      coachingStyle: '',
      marketFocus: '',
      schemaBranch: '',
      languageMode: '',
      squadTargets: [] as string[],
      roleMapping: {} as Record<string, string[]>,
      coachingLogic: [] as any[],
      badgePaths: [] as any[]
    });

    const [generatedRemix, setGeneratedRemix] = useState<RemixReplay | null>(null);

    const handleRemixGeneration = () => {
      if (!remixConfig.badgeGoal || !remixConfig.coachingStyle || !remixConfig.marketFocus) return;

      const newRemix: RemixReplay = {
        id: `advanced-remix-${Date.now()}`,
        title: `${remixConfig.marketFocus} ${remixConfig.coachingStyle}: ${remixConfig.badgeGoal} Edition`,
        description: `Advanced schema-driven remix targeting ${remixConfig.squadTargets.join(', ')} with ${remixConfig.coachingStyle} coaching methodology`,
        overlays: [
          remixConfig.schemaBranch === 'finance.trust-velocity' ? 'Trust Velocity (LatAm Coaching)' : 
          remixConfig.schemaBranch === 'law.assumed-right' ? 'Assumed Right (Investor Lens)' :
          remixConfig.schemaBranch === 'badge.dual-language' ? 'Dual-Language Navigator' : 'Demo Precision'
        ],
        badges: [remixConfig.badgeGoal],
        clarityLift: remixConfig.coachingStyle === 'Investor-facing' ? '3.4x' : 
                     remixConfig.coachingStyle === 'Schema-first' ? '3.0x' : '2.8x',
        coachingStyle: remixConfig.coachingStyle,
        schemaTrace: [remixConfig.schemaBranch],
        marketTags: [remixConfig.marketFocus],
        roleTags: Object.keys(remixConfig.roleMapping),
        language: remixConfig.languageMode === 'Dual-language' ? 'Dual' : 
                  remixConfig.languageMode === 'ES only' ? 'ES' : 'EN',
        replayLink: `/replay?id=advanced-remix-${Date.now()}`,
        createdAt: new Date().toISOString().split('T')[0],
        author: 'Advanced Builder',
        views: 0,
        likes: 0,
        featured: true
      };

      setGeneratedRemix(newRemix);
      setCurrentRemix(newRemix);
    };

    return (
      <div className="space-y-8">
        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Badge Goal Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Badge Goal
            </h3>
            <div className="space-y-3">
              {[
                "🧩 Trust Velocity Master",
                "🌐 Dual-Language Navigator", 
                "🎯 Demo Precision Architect",
                "🛡️ Legal Clarity Champion"
              ].map((badge) => (
                <motion.div
                  key={badge}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    remixConfig.badgeGoal === badge
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setRemixConfig(prev => ({ ...prev, badgeGoal: badge }))}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{badge.split(' ')[0]}</span>
                    <span className="text-sm font-medium">{badge.split(' ').slice(1).join(' ')}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Coaching Style Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Coaching Style
            </h3>
            <div className="space-y-3">
              {[
                "Investor-facing",
                "Schema-first",
                "Narrative-led",
                "Dual-language",
                "Rapid Clarity"
              ].map((style) => (
                <motion.div
                  key={style}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    remixConfig.coachingStyle === style
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setRemixConfig(prev => ({ ...prev, coachingStyle: style }))}
                >
                  <div className="text-sm font-medium">{style}</div>
                  <div className="text-xs text-muted-foreground">
                    {style === 'Investor-facing' ? 'Regional investor expectations' :
                     style === 'Schema-first' ? 'Founder-first logic frameworks' :
                     style === 'Narrative-led' ? 'Market entry storytelling' :
                     style === 'Dual-language' ? 'Bilingual coaching arcs' :
                     'Accelerated clarity deployment'}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Market Focus Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Market Focus
            </h3>
            <div className="space-y-3">
              {["LatAm", "US", "Global", "Investor", "Coach"].map((market) => (
                <motion.div
                  key={market}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    remixConfig.marketFocus === market
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setRemixConfig(prev => ({ ...prev, marketFocus: market }))}
                >
                  <div className="text-sm font-medium">{market}</div>
                  <div className="text-xs text-muted-foreground">
                    {market === 'LatAm' ? 'Cross-border expansion focus' :
                     market === 'US' ? 'Domestic market optimization' :
                     market === 'Global' ? 'Multi-region deployment' :
                     market === 'Investor' ? 'Capital readiness focus' :
                     'Coaching methodology focus'}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Schema Branch & Language Mode */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Schema Branch Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              Schema Branch
            </h3>
            <div className="space-y-3">
              {[
                "finance.trust-velocity",
                "law.assumed-right", 
                "badge.dual-language",
                "demo.pitch-alpha"
              ].map((schema) => (
                <motion.div
                  key={schema}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    remixConfig.schemaBranch === schema
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setRemixConfig(prev => ({ ...prev, schemaBranch: schema }))}
                >
                  <div className="text-sm font-mono">{schema}</div>
                  <div className="text-xs text-muted-foreground">
                    {schema.includes('finance') ? 'Financial optimization schemas' :
                     schema.includes('law') ? 'Legal framework schemas' :
                     schema.includes('badge') ? 'Achievement tracking schemas' :
                     'Demo presentation schemas'}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Language Mode Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Language Mode
            </h3>
            <div className="space-y-3">
              {["EN only", "ES only", "Dual-language", "Auto-toggle"].map((lang) => (
                <motion.div
                  key={lang}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    remixConfig.languageMode === lang
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setRemixConfig(prev => ({ ...prev, languageMode: lang }))}
                >
                  <div className="text-sm font-medium">{lang}</div>
                  <div className="text-xs text-muted-foreground">
                    {lang === 'Dual-language' ? 'Bilingual coaching deployment' :
                     lang === 'Auto-toggle' ? 'Market-based language switching' :
                     `Single language coaching in ${lang.split(' ')[0]}`}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Squad Target Selector */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Squad Targets
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              "LatAm GTM",
              "Ops Alpha",
              "Founder Solo", 
              "Investor Beta",
              "Coach Collective"
            ].map((squad) => (
              <motion.div
                key={squad}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  remixConfig.squadTargets.includes(squad)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => {
                  setRemixConfig(prev => ({
                    ...prev,
                    squadTargets: prev.squadTargets.includes(squad)
                      ? prev.squadTargets.filter(s => s !== squad)
                      : [...prev.squadTargets, squad]
                  }));
                }}
              >
                <div className="text-sm font-medium text-center">{squad}</div>
                {remixConfig.squadTargets.includes(squad) && (
                  <div className="text-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Role Mapping Matrix */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Grid3X3 className="w-5 h-5" />
            Role Mapping Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { role: "Founder", overlays: ["Trust Velocity", "Dual-Language Navigator"] },
              { role: "Ops Lead", overlays: ["Assumed Right"] },
              { role: "Coach", overlays: ["Trust Velocity", "Demo Precision"] }
            ].map((mapping) => (
              <div key={mapping.role} className="p-4 bg-secondary/50 rounded-lg">
                <div className="font-medium mb-2">{mapping.role}</div>
                <div className="space-y-2">
                  {mapping.overlays.map((overlay) => (
                    <div key={overlay} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {overlay}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Coaching Logic Pack */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Coaching Logic Pack
          </h3>
          <div className="space-y-4">
            {[
              {
                overlay: "Trust Velocity",
                role: "Founder", 
                promptEN: "Frame investor clarity using schema trace.",
                promptES: "Presenta claridad inversora usando trazado de esquema.",
                trigger: "Feedback ≥ 4.5",
                action: "Unlock 🧩 Trust Velocity Master"
              },
              {
                overlay: "Dual-Language Navigator",
                role: "Founder",
                promptEN: "Deliver overlay in both EN and ES with schema trace.",
                promptES: "Entrega la superposición en EN y ES con trazado de esquema.",
                trigger: "Overlay Completed in EN + ES",
                action: "Unlock 🌐 Dual-Language Navigator"
              },
              {
                overlay: "Assumed Right",
                role: "Ops Lead",
                promptEN: "Apply legal framework logic with operational precision.",
                promptES: "Aplica lógica de marco legal con precisión operacional.",
                trigger: "Schema Create + Deploy",
                action: "Unlock 🛡️ Legal Clarity Champion"
              }
            ].map((logic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-secondary/30 rounded-lg border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Overlay</div>
                    <div className="font-medium">{logic.overlay}</div>
                    <Badge variant="outline" className="text-xs mt-1">{logic.role}</Badge>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="text-sm text-muted-foreground mb-2">Coaching Prompts</div>
                    <div className="space-y-1">
                      <div className="text-xs">
                        <span className="text-muted-foreground">EN:</span> {logic.promptEN}
                      </div>
                      <div className="text-xs">
                        <span className="text-muted-foreground">ES:</span> {logic.promptES}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Logic Flow</div>
                    <div className="text-xs space-y-1">
                      <div className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">
                        {logic.trigger}
                      </div>
                      <ArrowRight className="w-3 h-3 text-muted-foreground mx-auto" />
                      <div className="bg-green-500/10 text-green-400 px-2 py-1 rounded">
                        {logic.action}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Badge Path Pack */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Badge Path Pack
          </h3>
          <div className="space-y-4">
            {[
              {
                badge: "🧩 Trust Velocity Master",
                assignedTo: ["Founder", "Ops Lead"],
                unlockLogic: "Clarity Index ≥ 3.0x + Feedback ≥ 4.5",
                contextualTriggers: ["LatAm Market Entry", "Investor Relations"],
                schemaRequired: "finance.trust-velocity.latam"
              },
              {
                badge: "🌐 Dual-Language Navigator", 
                assignedTo: ["Founder"],
                unlockLogic: "Overlay Completed in EN + ES",
                contextualTriggers: ["Cross-border Expansion", "Bilingual Markets"],
                schemaRequired: "communication.bilingual.gtm"
              },
              {
                badge: "🎯 Demo Precision Architect",
                assignedTo: ["Founder", "Coach"],
                unlockLogic: "Schema Create + Demo Deploy + Clarity ≥ 3.0x",
                contextualTriggers: ["Investor Presentation", "Demo Excellence"],
                schemaRequired: "demo.pitch-alpha"
              },
              {
                badge: "🛡️ Legal Clarity Champion",
                assignedTo: ["Ops Lead", "Legal Lead"],
                unlockLogic: "Legal Framework Deploy + Compliance Check",
                contextualTriggers: ["Due Diligence", "Compliance Audit"],
                schemaRequired: "law.assumed-right.investor"
              }
            ].map((badgePath, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gradient-to-r from-secondary/50 to-accent/30 rounded-lg border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{badgePath.badge.split(' ')[0]}</span>
                      <div>
                        <div className="font-medium text-sm">
                          {badgePath.badge.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Assigned To</div>
                    <div className="flex flex-wrap gap-1">
                      {badgePath.assignedTo.map((role) => (
                        <Badge key={role} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Unlock Logic</div>
                    <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {badgePath.unlockLogic}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Context Triggers</div>
                    <div className="space-y-1">
                      {badgePath.contextualTriggers.map((trigger) => (
                        <div key={trigger} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                          {trigger}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Schema Required</div>
                    <div className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                      {badgePath.schemaRequired}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Generate Remix Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleRemixGeneration}
            disabled={!remixConfig.badgeGoal || !remixConfig.coachingStyle || !remixConfig.marketFocus}
            size="lg"
            className="px-8 py-4"
          >
            <Wand2 className="w-5 h-5 mr-2" />
            Generate Advanced Remix
          </Button>
        </div>

        {/* Generated Remix Output */}
        {generatedRemix && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Generated Remix</h3>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {generatedRemix.clarityLift} Clarity Lift
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{generatedRemix.title}</h4>
                  <p className="text-muted-foreground">{generatedRemix.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Overlays</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {generatedRemix.overlays.map((overlay, index) => (
                        <span key={index} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                          {overlay}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Badges</div>
                    <div className="flex gap-1 mt-1">
                      {generatedRemix.badges.map((badge, index) => (
                        <span key={index} className="text-lg">{badge.split(' ')[0]}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Schema Trace</div>
                    <div className="text-xs font-mono bg-secondary px-2 py-1 rounded mt-1">
                      {generatedRemix.schemaTrace[0]}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setActiveTab('remix');
                      setCurrentRemix(generatedRemix);
                    }}
                    className="flex-1"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit in Remix Mode
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(generatedRemix.replayLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Launch Replay
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      console.log('Saving remix:', generatedRemix);
                      // TODO: Save to library
                    }}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save to Library
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    );
  };

  const RemixGallery = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{text.remixGallery}</h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Schema-linked clarity in motion with customizable replay experiences'
              : 'Claridad vinculada a esquemas en movimiento con experiencias de replay personalizables'
            }
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={text.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          <Button onClick={() => setActiveTab('builder')}>
            <Plus className="w-4 h-4 mr-2" />
            Advanced Builder
          </Button>
          <Button onClick={handleCreateRemix} disabled={!selectedOverlay || !selectedPrompt || !selectedBadge}>
            <Plus className="w-4 h-4 mr-2" />
            {text.createRemix}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReplays.map((replay) => (
          <motion.div
            key={replay.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all cursor-pointer border-border hover:border-primary/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {replay.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {replay.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {replay.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{replay.clarityLift}</div>
                    <div className="text-xs text-muted-foreground">{text.clarityLift}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Overlays:</div>
                    <div className="flex flex-wrap gap-1">
                      {replay.overlays.slice(0, 2).map((overlay, index) => (
                        <span key={index} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                          {overlay}
                        </span>
                      ))}
                      {replay.overlays.length > 2 && (
                        <span className="text-xs text-muted-foreground">+{replay.overlays.length - 2}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Badges:</div>
                    <div className="flex gap-1">
                      {replay.badges.slice(0, 3).map((badge, index) => (
                        <span key={index} className="text-lg">{badge.split(' ')[0]}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {replay.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {replay.likes}
                    </div>
                  </div>
                  <div>{replay.author}</div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setCurrentRemix(replay);
                      setPreviewMode(true);
                    }}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    {text.previewRemix}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(replay.replayLink, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const SchemaMapVisualization = () => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Map className="w-5 h-5" />
          {text.schemaMapping}
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSchemaMap(!showSchemaMap)}
        >
          {showSchemaMap ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
      
      {showSchemaMap && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-4"
        >
          <div className="relative bg-secondary/30 rounded-lg p-6 min-h-64">
            <div className="grid grid-cols-3 gap-6 h-full">
              {SCHEMA_NODES.map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedOverlay?.schema === node.path
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        node.level === 'expert' ? 'bg-red-400' :
                        node.level === 'advanced' ? 'bg-orange-400' :
                        node.level === 'intermediate' ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`} />
                      <div className="text-xs font-mono text-muted-foreground">{node.path}</div>
                    </div>
                    <h4 className="font-medium text-sm">{node.title}</h4>
                    <p className="text-xs text-muted-foreground">{node.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {node.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7" 
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="currentColor"
                    className="text-border"
                  />
                </marker>
              </defs>
              <line
                x1="33%"
                y1="50%"
                x2="67%"
                y2="30%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                className="text-border"
              />
              <line
                x1="67%"
                y1="70%"
                x2="33%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                className="text-border"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </Card>
  );

  const RemixPreviewModal = () => (
    <AnimatePresence>
      {previewMode && currentRemix && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setPreviewMode(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-lg border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{text.remixPreview}</h2>
                <Button variant="ghost" onClick={() => setPreviewMode(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{currentRemix.title}</h3>
                  <p className="text-muted-foreground">{currentRemix.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MetricCard
                    title={text.clarityLift}
                    value={currentRemix.clarityLift}
                    icon={<TrendingUp className="w-5 h-5" />}
                    color="success"
                  />
                  <MetricCard
                    title={text.views}
                    value={currentRemix.views.toString()}
                    icon={<Eye className="w-5 h-5" />}
                    color="primary"
                  />
                  <MetricCard
                    title={text.likes}
                    value={currentRemix.likes.toString()}
                    icon={<Heart className="w-5 h-5" />}
                    color="warning"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Replay Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Layers className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{currentRemix.overlays[0]}</div>
                        <div className="text-sm text-muted-foreground">
                          Schema: {currentRemix.schemaTrace[0]}
                        </div>
                      </div>
                      <Badge variant="outline">{currentRemix.coachingStyle}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{currentRemix.badges[0]}</div>
                        <div className="text-sm text-muted-foreground">
                          Badge Achievement Trigger
                        </div>
                      </div>
                      <div className="text-green-400 font-bold">{currentRemix.clarityLift}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1" onClick={() => window.open(currentRemix.replayLink, '_blank')}>
                    <Play className="w-4 h-4 mr-2" />
                    {text.playRemixReplay}
                  </Button>
                  <Button variant="outline" onClick={() => setPreviewMode(false)}>
                    <Download className="w-4 h-4 mr-2" />
                    {text.exportReplay}
                  </Button>
                  <Button variant="outline" onClick={() => setPreviewMode(false)}>
                    <Share className="w-4 h-4 mr-2" />
                    {text.shareReplay}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
                onClick={() => onNavigate('founder-welcome')}
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
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => onNavigate(`badge-earning-journey?mode=analytics`)}
              >
                <Trophy className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Badge Analytics' : 'Analíticas Insignias'}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('investor-demo')}
              >
                <Clapperboard className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Investor Demo' : 'Demo Inversores'}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('squad-deployment-center')}
              >
                <Upload className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Squad Deploy' : 'Despliegue Squad'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="builder" className="flex items-center gap-2">
              <Wand2 className="w-4 h-4" />
              Builder
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              {text.editor}
            </TabsTrigger>
            <TabsTrigger value="remix" className="flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              {text.remix}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {text.analytics}
            </TabsTrigger>
            <TabsTrigger value="showcase" className="flex items-center gap-2">
              <Grid3X3 className="w-4 h-4" />
              {text.showcase}
            </TabsTrigger>
          </TabsList>
          
          {/* Advanced Builder Mode */}
          <TabsContent value="builder" className="mt-6">
            <AdvancedRemixBuilder />
          </TabsContent>
          
          {/* Editor Mode */}
          <TabsContent value="editor" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <OverlayVariantSelector />
                <CoachingPromptSwap />
              </div>
              
              <div className="space-y-6">
                <BadgePathCustomizer />
                <MarketFilterEditor />
                
                {(selectedOverlay && selectedPrompt && selectedBadge) && (
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      {text.createRemix}
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Overlay</div>
                          <div className="font-medium">{selectedOverlay.remix}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Style</div>
                          <div className="font-medium">{selectedPrompt.style}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Badge</div>
                          <div className="font-medium">{selectedBadge.badge}</div>
                        </div>
                      </div>
                      
                      <Button onClick={handleCreateRemix} className="w-full">
                        <Wand2 className="w-4 h-4 mr-2" />
                        {text.createRemix}
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            </div>
            
            <div className="mt-8">
              <SchemaMapVisualization />
            </div>
          </TabsContent>
          
          {/* Remix Mode */}
          <TabsContent value="remix" className="mt-6">
            {currentRemix ? (
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">{currentRemix.title}</h2>
                      <p className="text-muted-foreground">{currentRemix.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        {text.saveRemix}
                      </Button>
                      <Button>
                        <Upload className="w-4 h-4 mr-2" />
                        {text.publishRemix}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <MetricCard
                      title={text.clarityLift}
                      value={currentRemix.clarityLift}
                      icon={<TrendingUp className="w-5 h-5" />}
                      color="success"
                    />
                    <MetricCard
                      title="Overlays"
                      value={currentRemix.overlays.length.toString()}
                      icon={<Layers className="w-5 h-5" />}
                      color="primary"
                    />
                    <MetricCard
                      title="Badges"
                      value={currentRemix.badges.length.toString()}
                      icon={<Trophy className="w-5 h-5" />}
                      color="warning"
                    />
                    <MetricCard
                      title="Schema Traces"
                      value={currentRemix.schemaTrace.length.toString()}
                      icon={<Map className="w-5 h-5" />}
                      color="danger"
                    />
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {text.dragAndDropTimeline}
                      </h3>
                      
                      <div className="bg-secondary/30 rounded-lg p-6 min-h-64">
                        <div className="text-center text-muted-foreground">
                          {language === 'en' 
                            ? 'Drag blocks from the library to build your custom replay sequence'
                            : 'Arrastra bloques desde la biblioteca para construir tu secuencia de replay personalizada'
                          }
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Layers3 className="w-5 h-5" />
                        Block Library
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-500/10 rounded border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-colors">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium">Overlay Block</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-green-500/10 rounded border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-colors">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium">Prompt Block</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-purple-500/10 rounded border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-colors">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">Badge Block</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-orange-500/10 rounded border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-colors">
                          <div className="flex items-center gap-2">
                            <Map className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-medium">Schema Trace</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-6">
                  <Shuffle className="w-12 h-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'en' ? 'No Remix Selected' : 'Ningún Remix Seleccionado'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {language === 'en' 
                    ? 'Create a new remix in the editor or select one from the showcase'
                    : 'Crea un nuevo remix en el editor o selecciona uno de la galería'
                  }
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => setActiveTab('editor')}>
                    <Edit3 className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Go to Editor' : 'Ir al Editor'}
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab('showcase')}>
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Browse Showcase' : 'Explorar Galería'}
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          {/* Analytics Mode */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Remixes"
                value={REMIX_REPLAYS.length.toString()}
                change={{ value: 12, trend: 'up', period: 'this month' }}
                icon={<Shuffle className="w-5 h-5" />}
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
                title="Total Views"
                value={REMIX_REPLAYS.reduce((sum, r) => sum + r.views, 0).toString()}
                change={{ value: 15, trend: 'up', period: 'this week' }}
                icon={<Eye className="w-5 h-5" />}
                color="warning"
              />
              <MetricCard
                title="Engagement Rate"
                value="76%"
                change={{ value: 5, trend: 'up', period: 'vs average' }}
                icon={<Activity className="w-5 h-5" />}
                color="danger"
              />
            </div>
            
            <RemixGallery />
          </TabsContent>
          
          {/* Showcase Mode */}
          <TabsContent value="showcase" className="mt-6">
            <RemixGallery />
          </TabsContent>
        </Tabs>
      </div>

      {/* Remix Preview Modal */}
      <RemixPreviewModal />
    </div>
  );
}