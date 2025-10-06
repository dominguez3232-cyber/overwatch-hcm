import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Play,
  ExternalLink,
  TrendingUp,
  Users,
  Globe,
  Trophy,
  Zap,
  Target,
  Eye,
  Share2,
  Star,
  Clock,
  Activity
} from 'lucide-react';

interface RemixCard {
  id: string;
  title: string;
  overlays: string[];
  clarityLift: string;
  badges: string[];
  replayLink: string;
  description?: string;
  duration?: string;
  completionRate?: number;
  investorFeedback?: number;
  language?: 'en' | 'es' | 'both';
  squadCount?: number;
  lastUpdated?: string;
}

interface RemixArcShowcaseProps {
  remixCards?: RemixCard[];
  selectedInvestor?: string;
  selectedRemix?: string;
  selectedLanguage?: string;
  onPlayReplay?: (replayLink: string) => void;
  onViewDetails?: (cardId: string) => void;
  onShareRemix?: (cardId: string) => void;
  language?: 'en' | 'es';
}

const DEMO_REMIX_CARDS: RemixCard[] = [
  {
    id: 'latam-gtm-investor',
    title: 'LatAm GTM: Trust Velocity Remix (Investor Edition)',
    overlays: ['Trust Velocity (Investor Lens)', 'Dual-Language Navigator'],
    clarityLift: '3.4x',
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    replayLink: '/replay?id=latam-gtm-investor-remix',
    description: 'Comprehensive investor-focused coaching arc combining trust-building frameworks with bilingual delivery for LatAm market penetration.',
    duration: '45 min',
    completionRate: 87,
    investorFeedback: 4.6,
    language: 'both',
    squadCount: 3,
    lastUpdated: '2025-10-01T15:30Z'
  },
  {
    id: 'demo-precision-architect',
    title: 'Demo Precision Architect: Investor Pitch Mastery',
    overlays: ['Demo Precision Architect', 'Trust Velocity (Pitch Focus)'],
    clarityLift: '4.1x',
    badges: ['🎯 Demo Precision Architect', '⚡ Pitch Master'],
    replayLink: '/replay?id=demo-precision-investor',
    description: 'Advanced demo delivery framework optimized for investor presentations with real-time feedback loops.',
    duration: '35 min',
    completionRate: 92,
    investorFeedback: 4.8,
    language: 'en',
    squadCount: 2,
    lastUpdated: '2025-10-01T16:45Z'
  },
  {
    id: 'dual-language-cultural',
    title: 'Cultural Intelligence Navigator: Cross-Border Scaling',
    overlays: ['Dual-Language Navigator', 'Cultural Force Multiplier'],
    clarityLift: '2.9x',
    badges: ['🌐 Dual-Language Navigator', '🎭 Cultural Intelligence Master'],
    replayLink: '/replay?id=cultural-intelligence-remix',
    description: 'Cross-cultural coaching framework for scaling operations across English and Spanish-speaking markets.',
    duration: '50 min',
    completionRate: 78,
    investorFeedback: 4.3,
    language: 'both',
    squadCount: 4,
    lastUpdated: '2025-10-01T14:20Z'
  }
];

export default function RemixArcShowcase({
  remixCards = DEMO_REMIX_CARDS,
  selectedInvestor = 'LatAm VC',
  selectedRemix = 'All Remixes',
  selectedLanguage = 'Dual-language',
  onPlayReplay,
  onViewDetails,
  onShareRemix,
  language = 'en'
}: RemixArcShowcaseProps) {
  const t = {
    en: {
      remixShowcase: 'Remix Arc Showcase',
      viewDetails: 'View Details',
      playReplay: 'Play Replay',
      shareRemix: 'Share Remix',
      clarityLift: 'Clarity Lift',
      duration: 'Duration',
      completion: 'Completion',
      feedback: 'Investor Feedback',
      squads: 'Active Squads',
      overlays: 'Coaching Overlays',
      badges: 'Achievement Badges',
      lastUpdated: 'Last Updated',
      noResults: 'No remix arcs match your current filters',
      clearFilters: 'Clear Filters',
      optimizedFor: 'Optimized for',
      language: 'Language',
      bilingual: 'Bilingual',
      english: 'English',
      spanish: 'Spanish'
    },
    es: {
      remixShowcase: 'Vitrina de Arcos Remix',
      viewDetails: 'Ver Detalles',
      playReplay: 'Reproducir Replay',
      shareRemix: 'Compartir Remix',
      clarityLift: 'Mejora de Claridad',
      duration: 'Duración',
      completion: 'Finalización',
      feedback: 'Feedback Inversor',
      squads: 'Escuadrones Activos',
      overlays: 'Overlays de Coaching',
      badges: 'Insignias de Logro',
      lastUpdated: 'Última Actualización',
      noResults: 'Ningún arco remix coincide con sus filtros actuales',
      clearFilters: 'Limpiar Filtros',
      optimizedFor: 'Optimizado para',
      language: 'Idioma',
      bilingual: 'Bilingüe',
      english: 'Inglés',
      spanish: 'Español'
    }
  };

  const text = t[language];

  // Filter cards based on selections
  const filteredCards = remixCards.filter(card => {
    const matchesRemix = selectedRemix === 'All Remixes' || 
      card.title.toLowerCase().includes(selectedRemix.toLowerCase()) ||
      card.overlays.some(overlay => overlay.toLowerCase().includes(selectedRemix.toLowerCase()));
    
    const matchesLanguage = selectedLanguage === 'Dual-language' ||
      (selectedLanguage === 'EN' && (card.language === 'en' || card.language === 'both')) ||
      (selectedLanguage === 'ES' && (card.language === 'es' || card.language === 'both'));
    
    return matchesRemix && matchesLanguage;
  });

  const getInvestorOptimization = (cardId: string, investor: string) => {
    const optimizations = {
      'latam-gtm-investor': {
        'LatAm VC': { score: 95, highlight: 'Market-specific insights' },
        'US Angel': { score: 78, highlight: 'Cross-border strategies' },
        'Global Fund': { score: 85, highlight: 'Scaling frameworks' },
        'Strategic Partner': { score: 72, highlight: 'Partnership models' }
      },
      'demo-precision-architect': {
        'LatAm VC': { score: 82, highlight: 'Demo excellence' },
        'US Angel': { score: 93, highlight: 'Pitch mastery' },
        'Global Fund': { score: 88, highlight: 'Institutional focus' },
        'Strategic Partner': { score: 90, highlight: 'Partnership demos' }
      },
      'dual-language-cultural': {
        'LatAm VC': { score: 88, highlight: 'Cultural intelligence' },
        'US Angel': { score: 75, highlight: 'Market expansion' },
        'Global Fund': { score: 92, highlight: 'Global scaling' },
        'Strategic Partner': { score: 85, highlight: 'Cultural alignment' }
      }
    };
    
    return optimizations[cardId as keyof typeof optimizations]?.[investor as keyof typeof optimizations[cardId]] || 
           { score: 80, highlight: 'General optimization' };
  };

  const getLanguageDisplay = (cardLanguage?: string) => {
    switch (cardLanguage) {
      case 'en': return { label: text.english, icon: '🇺🇸' };
      case 'es': return { label: text.spanish, icon: '🇪🇸' };
      case 'both': return { label: text.bilingual, icon: '🌐' };
      default: return { label: text.bilingual, icon: '🌐' };
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (filteredCards.length === 0) {
    return (
      <Card className="p-8 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto">
            <Target className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{text.noResults}</h3>
            <p className="text-muted-foreground">
              Try adjusting your investor type, remix filter, or language selection.
            </p>
          </div>
          <Button variant="outline">
            {text.clearFilters}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Star className="w-6 h-6" />
            {text.remixShowcase}
          </h2>
          <p className="text-muted-foreground mt-1">
            {filteredCards.length} remix arc{filteredCards.length !== 1 ? 's' : ''} • {text.optimizedFor} {selectedInvestor}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {selectedInvestor}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {selectedRemix}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {selectedLanguage}
          </Badge>
        </div>
      </div>

      {/* Remix Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => {
          const optimization = getInvestorOptimization(card.id, selectedInvestor);
          const languageDisplay = getLanguageDisplay(card.language);
          
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="space-y-4 flex-1">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold leading-tight">{card.title}</h3>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="text-muted-foreground">{optimization.score}%</span>
                        <div className={`w-2 h-2 rounded-full ${optimization.score >= 90 ? 'bg-green-400' : optimization.score >= 80 ? 'bg-yellow-400' : 'bg-red-400'}`} />
                      </div>
                    </div>
                    
                    {card.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {card.description}
                      </p>
                    )}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="font-bold text-lg text-primary">{card.clarityLift}</div>
                      <div className="text-xs text-muted-foreground">{text.clarityLift}</div>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-lg p-3 text-center">
                      <div className="font-bold text-lg">{card.completionRate}%</div>
                      <div className="text-xs text-muted-foreground">{text.completion}</div>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-lg p-3 text-center">
                      <div className="font-bold text-lg">{card.duration}</div>
                      <div className="text-xs text-muted-foreground">{text.duration}</div>
                    </div>
                    
                    <div className="bg-yellow-500/10 rounded-lg p-3 text-center">
                      <div className="font-bold text-lg text-yellow-400">{card.investorFeedback}</div>
                      <div className="text-xs text-muted-foreground">{text.feedback}</div>
                    </div>
                  </div>

                  {/* Overlays */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {text.overlays}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {card.overlays.map((overlay) => (
                        <Badge key={overlay} variant="outline" className="text-xs">
                          {overlay}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Badges */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {text.badges}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {card.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {card.squadCount} {text.squads}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {languageDisplay.icon} {languageDisplay.label}
                    </div>
                  </div>

                  {card.lastUpdated && (
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {text.lastUpdated}: {formatDate(card.lastUpdated)}
                    </div>
                  )}

                  {/* Optimization Highlight */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-2">
                    <div className="text-xs text-primary font-medium">
                      {optimization.highlight}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => onPlayReplay?.(card.replayLink)}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    {text.playReplay}
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onViewDetails?.(card.id)}
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onShareRemix?.(card.id)}
                  >
                    <Share2 className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}