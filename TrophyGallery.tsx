import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Trophy,
  Medal,
  Award,
  Crown,
  Star,
  Filter,
  Search,
  Eye,
  Play,
  Download,
  Share2,
  Globe,
  Users,
  Clock,
  Activity,
  Target,
  Zap,
  Calendar,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface TrophyGalleryItem {
  id: string;
  title: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Founder\'s Pick';
  submittedBy: string;
  founderId: string;
  founderName: string;
  earnedBy: string[];
  avgUnlockTime: string;
  badges: string[];
  schemaTrace: string[];
  replayPreview: {
    watchTime: string;
    completionRate: string;
    feedbackScore: string;
    replayLink: string;
  };
  culturalReach: string[];
  deployedAt: string;
  metrics: {
    clarityLift: string;
    engagement: string;
    satisfaction: string;
  };
  authorshipCredits: {
    founder: string;
    investor: string;
    roles: string[];
  };
  showcaseBanner?: {
    bannerTextEN: string;
    bannerTextES: string;
    isActive: boolean;
  };
}

interface TrophyGalleryProps {
  language: 'en' | 'es';
  onExport: (type: string, data: any) => void;
  onShare: () => void;
  onViewReplay: (replayLink: string) => void;
  onViewTrophy: (trophyId: string) => void;
  onNavigate: (view: string) => void;
}

const DEMO_TROPHY_GALLERY: TrophyGalleryItem[] = [
  {
    id: 'trophy-gallery-001',
    title: 'Trust Velocity Remix (Investor Edition)',
    tier: 'Platinum',
    submittedBy: 'LatAm VC',
    founderId: 'founder-luis',
    founderName: 'Luis Dominguez',
    earnedBy: ['LatAm GTM', 'Founder Solo'],
    avgUnlockTime: '2d 4h',
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['finance.trust-velocity.investor', 'badge.dual-language'],
    replayPreview: {
      watchTime: '3m 42s',
      completionRate: '82%',
      feedbackScore: '4.8',
      replayLink: '/replay?id=latam-gtm-investor-remix'
    },
    culturalReach: ['LatAm', 'US'],
    deployedAt: '2025-09-28T10:00:00Z',
    metrics: {
      clarityLift: '3.4x',
      engagement: '84%',
      satisfaction: '4.8'
    },
    authorshipCredits: {
      founder: 'Luis Dominguez',
      investor: 'LatAm VC',
      roles: ['Founder Architect', 'Investor Strategist']
    },
    showcaseBanner: {
      bannerTextEN: 'Investor Remix of the Month – LatAm VC',
      bannerTextES: 'Remix Inversor del Mes – LatAm VC',
      isActive: true
    }
  },
  {
    id: 'trophy-gallery-002',
    title: 'Demo Precision Remix (Pitch Alpha)',
    tier: 'Gold',
    submittedBy: 'US Angel',
    founderId: 'founder-sarah',
    founderName: 'Sarah Chen',
    earnedBy: ['Ops Alpha', 'Investor Beta'],
    avgUnlockTime: '2d 18h',
    badges: ['🎯 Demo Precision Architect'],
    schemaTrace: ['demo.pitch-alpha'],
    replayPreview: {
      watchTime: '3m 10s',
      completionRate: '78%',
      feedbackScore: '4.6',
      replayLink: '/replay?id=pitch-alpha-remix'
    },
    culturalReach: ['US', 'Global'],
    deployedAt: '2025-09-25T14:30:00Z',
    metrics: {
      clarityLift: '3.1x',
      engagement: '79%',
      satisfaction: '4.6'
    },
    authorshipCredits: {
      founder: 'Sarah Chen',
      investor: 'US Angel',
      roles: ['Founder Architect', 'Investor Strategist']
    },
    showcaseBanner: {
      bannerTextEN: 'Excellence in Demo Precision – US Angel',
      bannerTextES: 'Excelencia en Precisión de Demo – US Angel',
      isActive: true
    }
  },
  {
    id: 'trophy-gallery-003',
    title: 'Cultural Intelligence Navigator',
    tier: 'Founder\'s Pick',
    submittedBy: 'Global Fund',
    founderId: 'founder-carlos',
    founderName: 'Carlos Rodriguez',
    earnedBy: ['Global Expansion', 'Cultural Bridge'],
    avgUnlockTime: '1d 18h',
    badges: ['🎭 Cultural Intelligence Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['culture.force-multiplier', 'badge.dual-language'],
    replayPreview: {
      watchTime: '4m 15s',
      completionRate: '76%',
      feedbackScore: '4.5',
      replayLink: '/replay?id=cultural-intelligence-remix'
    },
    culturalReach: ['Global', 'LatAm', 'EU'],
    deployedAt: '2025-09-22T16:45:00Z',
    metrics: {
      clarityLift: '2.9x',
      engagement: '76%',
      satisfaction: '4.5'
    },
    authorshipCredits: {
      founder: 'Carlos Rodriguez',
      investor: 'Global Fund',
      roles: ['Founder Architect', 'Investor Strategist']
    },
    showcaseBanner: {
      bannerTextEN: 'Founder\'s Pick: Cultural Innovation – Global Fund',
      bannerTextES: 'Elección del Fundador: Innovación Cultural – Global Fund',
      isActive: true
    }
  }
];

export default function TrophyGallery({
  language,
  onExport,
  onShare,
  onViewReplay,
  onViewTrophy,
  onNavigate
}: TrophyGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<'all' | string>('all');
  const [investorFilter, setInvestorFilter] = useState<'all' | string>('all');
  const [marketFilter, setMarketFilter] = useState<'all' | string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'tier' | 'engagement' | 'clarity'>('recent');

  const t = {
    en: {
      title: 'Trophy Gallery',
      subtitle: 'Showcase of top performing investor-created remix arcs with complete performance analytics',
      filters: {
        search: 'Search trophies...',
        tier: 'Trophy Tier',
        investor: 'Investor Type',
        market: 'Market',
        sortBy: 'Sort By'
      },
      sortOptions: {
        recent: 'Most Recent',
        tier: 'Trophy Tier',
        engagement: 'Highest Engagement',
        clarity: 'Clarity Lift'
      },
      metrics: {
        clarityLift: 'Clarity Lift',
        engagement: 'Engagement',
        satisfaction: 'Satisfaction',
        avgUnlockTime: 'Avg Unlock Time',
        watchTime: 'Watch Time',
        completionRate: 'Completion Rate',
        feedbackScore: 'Feedback Score',
        culturalReach: 'Cultural Reach',
        earnedBy: 'Earned By',
        replayViews: 'Replay Views'
      },
      actions: {
        viewTrophy: 'View Trophy',
        playReplay: 'Play Replay',
        export: 'Export Gallery',
        share: 'Share Gallery',
        embed: 'Embed Banner',
        viewDetails: 'View Details'
      },
      labels: {
        submittedBy: 'Submitted By',
        founderId: 'Founder ID',
        deployedAt: 'Deployed',
        authorshipCredits: 'Co-Authored By',
        badges: 'Badges Earned',
        schemaTrace: 'Schema Trace',
        showcaseBanner: 'Showcase Banner'
      },
      tiers: {
        'Platinum': 'Platinum',
        'Gold': 'Gold',
        'Silver': 'Silver',
        'Bronze': 'Bronze',
        'Founder\'s Pick': 'Founder\'s Pick'
      }
    },
    es: {
      title: 'Galería de Trofeos',
      subtitle: 'Vitrina de arcos de remix creados por inversores con mejor rendimiento con analíticas completas de rendimiento',
      filters: {
        search: 'Buscar trofeos...',
        tier: 'Nivel de Trofeo',
        investor: 'Tipo de Inversor',
        market: 'Mercado',
        sortBy: 'Ordenar Por'
      },
      sortOptions: {
        recent: 'Más Reciente',
        tier: 'Nivel de Trofeo',
        engagement: 'Mayor Participación',
        clarity: 'Mejora de Claridad'
      },
      metrics: {
        clarityLift: 'Mejora Claridad',
        engagement: 'Participación',
        satisfaction: 'Satisfacción',
        avgUnlockTime: 'Tiempo Promedio Desbloqueo',
        watchTime: 'Tiempo Visualización',
        completionRate: 'Tasa Finalización',
        feedbackScore: 'Puntuación Feedback',
        culturalReach: 'Alcance Cultural',
        earnedBy: 'Obtenido Por',
        replayViews: 'Visualizaciones Replay'
      },
      actions: {
        viewTrophy: 'Ver Trofeo',
        playReplay: 'Reproducir Replay',
        export: 'Exportar Galería',
        share: 'Compartir Galería',
        embed: 'Insertar Banner',
        viewDetails: 'Ver Detalles'
      },
      labels: {
        submittedBy: 'Enviado Por',
        founderId: 'ID Fundador',
        deployedAt: 'Desplegado',
        authorshipCredits: 'Co-Autoría',
        badges: 'Insignias Obtenidas',
        schemaTrace: 'Trazado Esquemas',
        showcaseBanner: 'Banner Vitrina'
      },
      tiers: {
        'Platinum': 'Platino',
        'Gold': 'Oro',
        'Silver': 'Plata',
        'Bronze': 'Bronce',
        'Founder\'s Pick': 'Elección del Fundador'
      }
    }
  };

  const text = t[language];

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'Platinum': return '🏆';
      case 'Gold': return '🥇';
      case 'Silver': return '🥈';
      case 'Bronze': return '🥉';
      case 'Founder\'s Pick': return '👑';
      default: return '🏆';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'text-slate-300 bg-slate-500/10 border-slate-500/20';
      case 'Gold': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'Silver': return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
      case 'Bronze': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'Founder\'s Pick': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter and sort trophies
  const filteredTrophies = DEMO_TROPHY_GALLERY
    .filter(trophy => {
      if (searchQuery && !trophy.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !trophy.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (tierFilter !== 'all' && trophy.tier !== tierFilter) return false;
      if (investorFilter !== 'all' && trophy.submittedBy !== investorFilter) return false;
      if (marketFilter !== 'all' && !trophy.culturalReach.includes(marketFilter)) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.deployedAt).getTime() - new Date(a.deployedAt).getTime();
        case 'tier':
          const tierOrder = ['Platinum', 'Gold', 'Founder\'s Pick', 'Silver', 'Bronze'];
          return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
        case 'engagement':
          return parseFloat(b.metrics.engagement) - parseFloat(a.metrics.engagement);
        case 'clarity':
          return parseFloat(b.metrics.clarityLift) - parseFloat(a.metrics.clarityLift);
        default:
          return 0;
      }
    });

  const renderTrophyCard = (trophy: TrophyGalleryItem, index: number) => (
    <motion.div
      key={trophy.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={`p-6 transition-all hover:shadow-lg ${
        trophy.tier === 'Platinum' ? 'ring-1 ring-slate-500/30' :
        trophy.tier === 'Gold' ? 'ring-1 ring-yellow-500/30' :
        trophy.tier === 'Founder\'s Pick' ? 'ring-1 ring-purple-500/30' : ''
      }`}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{getTierIcon(trophy.tier)}</div>
              <div>
                <h3 className="text-lg font-semibold">{trophy.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{trophy.submittedBy}</span>
                  <span>•</span>
                  <span>{formatDate(trophy.deployedAt)}</span>
                </div>
              </div>
            </div>
            
            <Badge className={`${getTierColor(trophy.tier)}`}>
              {text.tiers[trophy.tier]}
            </Badge>
          </div>

          {/* Showcase Banner Preview */}
          {trophy.showcaseBanner && trophy.showcaseBanner.isActive && (
            <div className={`p-3 rounded-lg ${getTierColor(trophy.tier)} border`}>
              <div className="text-sm font-medium">
                {language === 'en' ? trophy.showcaseBanner.bannerTextEN : trophy.showcaseBanner.bannerTextES}
              </div>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-secondary/30 rounded">
              <div className="text-lg font-bold text-primary">{trophy.metrics.clarityLift}</div>
              <div className="text-xs text-muted-foreground">{text.metrics.clarityLift}</div>
            </div>
            <div className="text-center p-2 bg-secondary/30 rounded">
              <div className="text-lg font-bold text-green-400">{trophy.metrics.engagement}</div>
              <div className="text-xs text-muted-foreground">{text.metrics.engagement}</div>
            </div>
            <div className="text-center p-2 bg-secondary/30 rounded">
              <div className="text-lg font-bold text-yellow-400">{trophy.metrics.satisfaction}</div>
              <div className="text-xs text-muted-foreground">{text.metrics.satisfaction}</div>
            </div>
          </div>

          {/* Badge Showcase */}
          <div>
            <span className="text-sm text-muted-foreground mb-2 block">{text.labels.badges}:</span>
            <div className="flex flex-wrap gap-1">
              {trophy.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Schema Trace Map */}
          <div>
            <span className="text-sm text-muted-foreground mb-2 block">{text.labels.schemaTrace}:</span>
            <div className="flex flex-wrap gap-1">
              {trophy.schemaTrace.map((trace) => (
                <Badge key={trace} variant="outline" className="text-xs font-mono">
                  {trace}
                </Badge>
              ))}
            </div>
          </div>

          {/* Replay Preview */}
          <div className="bg-secondary/30 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Replay Preview</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onViewReplay(trophy.replayPreview.replayLink)}
              >
                <Play className="w-3 h-3 mr-1" />
                {text.actions.playReplay}
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-muted-foreground">{text.metrics.watchTime}</div>
                <div className="font-medium">{trophy.replayPreview.watchTime}</div>
              </div>
              <div>
                <div className="text-muted-foreground">{text.metrics.completionRate}</div>
                <div className="font-medium">{trophy.replayPreview.completionRate}</div>
              </div>
              <div>
                <div className="text-muted-foreground">{text.metrics.feedbackScore}</div>
                <div className="font-medium">{trophy.replayPreview.feedbackScore}</div>
              </div>
            </div>
          </div>

          {/* Co-Authorship Credits */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
            <div className="text-sm font-medium text-blue-400 mb-1">{text.labels.authorshipCredits}</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Founder:</span>
                <div className="font-medium">{trophy.authorshipCredits.founder}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Investor:</span>
                <div className="font-medium">{trophy.authorshipCredits.investor}</div>
              </div>
            </div>
          </div>

          {/* Cultural Reach & Squad Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">{text.metrics.culturalReach}:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {trophy.culturalReach.map((culture) => (
                  <Badge key={culture} variant="outline" className="text-xs">
                    {culture}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-muted-foreground">{text.metrics.earnedBy}:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {trophy.earnedBy.map((squad) => (
                  <Badge key={squad} variant="outline" className="text-xs">
                    {squad}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => onViewTrophy(trophy.id)}
              >
                <Trophy className="w-3 h-3 mr-1" />
                {text.actions.viewTrophy}
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => onViewReplay(trophy.replayPreview.replayLink)}
              >
                <Eye className="w-3 h-3 mr-1" />
                {text.actions.viewDetails}
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground">
              {text.metrics.avgUnlockTime}: {trophy.avgUnlockTime}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              {text.title}
            </h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onShare}>
              <Share2 className="w-3 h-3 mr-1" />
              {text.actions.share}
            </Button>
            <Button variant="outline" size="sm" onClick={() => onExport('gallery', filteredTrophies)}>
              <Download className="w-3 h-3 mr-1" />
              {text.actions.export}
            </Button>
          </div>
        </div>
      </Card>

      {/* Filter Panel */}
      <Card className="p-4">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={text.filters.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-input border border-border text-foreground pl-10 pr-4 py-2 rounded"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{text.filters.tier}</label>
              <Select value={tierFilter} onValueChange={setTierFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="Platinum">🏆 {text.tiers.Platinum}</SelectItem>
                  <SelectItem value="Gold">🥇 {text.tiers.Gold}</SelectItem>
                  <SelectItem value="Founder's Pick">👑 {text.tiers['Founder\'s Pick']}</SelectItem>
                  <SelectItem value="Silver">🥈 {text.tiers.Silver}</SelectItem>
                  <SelectItem value="Bronze">🥉 {text.tiers.Bronze}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.filters.investor}</label>
              <Select value={investorFilter} onValueChange={setInvestorFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Investors</SelectItem>
                  <SelectItem value="LatAm VC">LatAm VC</SelectItem>
                  <SelectItem value="US Angel">US Angel</SelectItem>
                  <SelectItem value="Global Fund">Global Fund</SelectItem>
                  <SelectItem value="Strategic Partner">Strategic Partner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.filters.market}</label>
              <Select value={marketFilter} onValueChange={setMarketFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Markets</SelectItem>
                  <SelectItem value="LatAm">LatAm</SelectItem>
                  <SelectItem value="US">US</SelectItem>
                  <SelectItem value="Global">Global</SelectItem>
                  <SelectItem value="EU">EU</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.filters.sortBy}</label>
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">{text.sortOptions.recent}</SelectItem>
                  <SelectItem value="tier">{text.sortOptions.tier}</SelectItem>
                  <SelectItem value="engagement">{text.sortOptions.engagement}</SelectItem>
                  <SelectItem value="clarity">{text.sortOptions.clarity}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      {/* Gallery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{filteredTrophies.length}</div>
          <div className="text-sm text-muted-foreground">Total Trophies</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {filteredTrophies.filter(t => t.tier === 'Platinum' || t.tier === 'Gold').length}
          </div>
          <div className="text-sm text-muted-foreground">Premium Tiers</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">
            {filteredTrophies.filter(t => t.tier === 'Founder\'s Pick').length}
          </div>
          <div className="text-sm text-muted-foreground">Founder's Picks</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {Math.round(filteredTrophies.reduce((acc, t) => acc + parseFloat(t.metrics.engagement), 0) / filteredTrophies.length)}%
          </div>
          <div className="text-sm text-muted-foreground">Avg Engagement</div>
        </Card>
      </div>

      {/* Trophy Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrophies.map((trophy, index) => renderTrophyCard(trophy, index))}
      </div>

      {/* Export & Embed Panel */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Gallery Export & Embed</h3>
            <p className="text-sm text-muted-foreground">
              Export gallery data or embed showcase banners in external systems
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-3 h-3 mr-1" />
              Investor Portal
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-3 h-3 mr-1" />
              Founder Profile
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-3 h-3 mr-1" />
              Remix Showcase
            </Button>
            <Button size="sm">
              <Globe className="w-3 h-3 mr-1" />
              {text.actions.embed}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}