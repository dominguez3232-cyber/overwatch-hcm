import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft,
  Crown,
  Eye,
  MessageSquare,
  BarChart3,
  Download,
  Share2,
  Clock,
  Trophy,
  Activity,
  Users,
  TrendingUp,
  Globe,
  Target,
  Zap,
  CheckCircle,
  Award,
  Star
} from 'lucide-react';
import InvestorViewPanel from './InvestorViewPanel';
import RemixArcShowcase from './RemixArcShowcase';
import ReplayNudgeNode from './ReplayNudgeNode';
import BadgeLogicEditNode from './BadgeLogicEditNode';
import SchemaTracePlayback from './SchemaTracePlayback';
import TraceNode from './TraceNode';
import InvestorFeedbackSystem from './InvestorFeedbackSystem';
import InvestorAnalyticsDashboard from './InvestorAnalyticsDashboard';
import InvestorRemixComposer from './InvestorRemixComposer';
import FounderReviewSystem from './FounderReviewSystem';
import RemixImpactAnalytics from './RemixImpactAnalytics';
import RemixLeaderboard from './RemixLeaderboard';
import RemixTrophySystem from './RemixTrophySystem';
import TrophyGallery from './TrophyGallery';
import MetricCard from './MetricCard';

interface InvestorDemoCenterEnhancedProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'showcase' | 'feedback' | 'analytics' | 'composer' | 'review' | 'impact' | 'leaderboard' | 'trophies' | 'gallery';
}

export default function InvestorDemoCenterEnhanced({ 
  language, 
  onNavigate,
  currentMode = 'showcase'
}: InvestorDemoCenterEnhancedProps) {
  // State management
  const [feedbackMode, setFeedbackMode] = useState<'showcase' | 'feedback' | 'analytics' | 'composer' | 'review' | 'impact' | 'leaderboard' | 'trophies' | 'gallery'>(currentMode);
  const [selectedInvestor, setSelectedInvestor] = useState<string>('LatAm VC');
  const [selectedRemix, setSelectedRemix] = useState<string>('All Remixes');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Dual-language');

  const t = {
    en: {
      title: 'Investor Demo Center',
      subtitle: 'Experience OVERWATCH³ through comprehensive feedback and analytics systems',
      showcase: 'Remix Showcase',
      feedback: 'Investor Feedback',
      analytics: 'Analytics Dashboard',
      composer: 'Remix Composer',
      review: 'Founder Review',
      impact: 'Impact Analytics',
      leaderboard: 'Leaderboard',
      trophies: 'Trophy System',
      gallery: 'Trophy Gallery',
      coachingTimeline: 'Coaching Timeline Viewer',
      schemaWalkthrough: 'Schema Trace Walkthrough',
      badgeGallery: 'Badge Unlock Gallery',
      clarityMetrics: 'Clarity Metrics Panel',
      backToPlatform: 'Back to Platform',
      export: 'Export',
      share: 'Share'
    },
    es: {
      title: 'Centro de Demostración para Inversores',
      subtitle: 'Experimenta OVERWATCH³ a través de sistemas completos de feedback y analíticas',
      showcase: 'Vitrina de Remix',
      feedback: 'Feedback del Inversor',
      analytics: 'Dashboard de Analíticas',
      composer: 'Compositor Remix',
      review: 'Revisión Fundador',
      impact: 'Analíticas Impacto',
      leaderboard: 'Tabla Líderes',
      trophies: 'Sistema Trofeos',
      gallery: 'Galería Trofeos',
      coachingTimeline: 'Visor de Timeline de Coaching',
      schemaWalkthrough: 'Recorrido de Trazado de Esquemas',
      badgeGallery: 'Galería de Desbloqueo de Insignias',
      clarityMetrics: 'Panel de Métricas de Claridad',
      backToPlatform: 'Volver a Plataforma',
      export: 'Exportar',
      share: 'Compartir'
    }
  };

  const text = t[language];

  // Handle mode switching
  const handleModeChange = (mode: 'showcase' | 'feedback' | 'analytics' | 'composer' | 'review' | 'impact' | 'leaderboard' | 'trophies' | 'gallery') => {
    setFeedbackMode(mode);
    // Update URL to reflect mode change
    const params = new URLSearchParams(window.location.search);
    params.set('mode', mode);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  // Initialize mode from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get('mode');
    if (['feedback', 'analytics', 'composer', 'review', 'impact', 'leaderboard', 'trophies', 'gallery'].includes(urlMode || '')) {
      setFeedbackMode(urlMode as any);
    }
  }, []);

  // Render content based on selected mode
  const renderModeContent = () => {
    switch (feedbackMode) {
      case 'showcase':
        return (
          <div className="space-y-8">
            {/* Summary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <MetricCard
                title="Active Remixes"
                value="12"
                change={{ value: 3, trend: 'up', period: 'this month' }}
                icon={<Zap className="w-5 h-5" />}
                color="primary"
              />
              <MetricCard
                title="Avg Clarity Lift"
                value="3.4x"
                change={{ value: 12, trend: 'up', period: 'vs baseline' }}
                icon={<TrendingUp className="w-5 h-5" />}
                color="success"
              />
              <MetricCard
                title="Investor Engagement"
                value="87%"
                change={{ value: 8, trend: 'up', period: 'this quarter' }}
                icon={<Users className="w-5 h-5" />}
                color="warning"
              />
              <MetricCard
                title="Badge Resonance"
                value="4.6/5"
                change={{ value: 0.2, trend: 'up', period: 'avg rating' }}
                icon={<Trophy className="w-5 h-5" />}
                color="info"
              />
            </div>

            {/* Investor View Panel */}
            <InvestorViewPanel
              onInvestorChange={setSelectedInvestor}
              onRemixFilterChange={setSelectedRemix}
              onLanguageChange={setSelectedLanguage}
              selectedInvestor={selectedInvestor}
              selectedRemix={selectedRemix}
              selectedLanguage={selectedLanguage}
              language={language}
            />
            
            {/* Remix Arc Showcase */}
            <RemixArcShowcase
              selectedInvestor={selectedInvestor}
              selectedRemix={selectedRemix}
              selectedLanguage={selectedLanguage}
              language={language}
              onPlayReplay={(link) => {
                console.log('Play replay:', link);
                window.open(link, '_blank');
              }}
              onViewDetails={(cardId) => {
                console.log('View details:', cardId);
                // Navigate to detailed remix view
              }}
              onShareRemix={(cardId) => {
                console.log('Share remix:', cardId);
                // Open share modal
              }}
            />
            
            {/* Coaching Timeline Viewer */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {text.coachingTimeline}
              </h3>
              
              <div className="space-y-4">
                <ReplayNudgeNode
                  timestamp="2025-10-01T14:22:00Z"
                  trigger="Replay Drop-Off > 30%"
                  messageEN="Frame investor clarity using schema trace."
                  messageES="Presenta claridad inversora usando trazado de esquema."
                  sentTo={["Founder"]}
                  replayLink="/replay?id=trust-velocity-override-001"
                  id="nudge-investor-001"
                  status="active"
                  triggerCount={5}
                  responseRate={87}
                  effectivenessScore={4.2}
                  language={language}
                  compact={true}
                />
                
                <BadgeLogicEditNode
                  timestamp="2025-10-01T15:15:00Z"
                  badge="Trust Velocity Master"
                  originalLogic="Clarity Index ≥ 3.0x + Feedback ≥ 4.5"
                  editedLogic="Clarity Index ≥ 2.8x + Replay Completion ≥ 70%"
                  reason="Founder override for investor remix arc optimization"
                  id="badge-edit-investor-001"
                  editedBy="Luis Dominguez"
                  status="deployed"
                  unlockRate={82}
                  satisfactionScore={4.4}
                  badgeIcon="🧩"
                  language={language}
                  compact={true}
                />
              </div>
            </Card>
            
            {/* Schema Trace Walkthrough */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                {text.schemaWalkthrough}
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
                />
                <TraceNode 
                  path="badge.dual-language" 
                  status="stable"
                />
                <TraceNode 
                  path="demo.pitch-alpha" 
                  status="high engagement"
                />
              </SchemaTracePlayback>
            </Card>

            {/* Badge Gallery */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                {text.badgeGallery}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "🧩 Trust Velocity Master",
                    earnedOn: "2025-10-01",
                    unlockLogic: "Clarity Index ≥ 2.8x + Replay Completion ≥ 70%",
                    replayLink: "/replay?id=trust-velocity"
                  },
                  {
                    title: "🌐 Dual-Language Navigator",
                    earnedOn: "2025-10-01",
                    unlockLogic: "Overlay Completed in EN + ES",
                    replayLink: "/replay?id=dual-language"
                  },
                  {
                    title: "🎯 Demo Precision Architect",
                    earnedOn: "2025-09-30",
                    unlockLogic: "Demo Excellence Score ≥ 4.5 + Investor Ready",
                    replayLink: "/replay?id=demo-precision"
                  }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{badge.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {badge.earnedOn}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground font-mono">
                          {badge.unlockLogic}
                        </p>
                        
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="w-3 h-3 mr-1" />
                          View Replay
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Clarity Metrics Panel */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                {text.clarityMetrics}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3.4x</div>
                  <div className="text-sm text-muted-foreground">Avg. Clarity Index Lift</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">82%</div>
                  <div className="text-sm text-muted-foreground">Replay Engagement Rate</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">65%</div>
                  <div className="text-sm text-muted-foreground">Dual-Language Completion Rate</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">44%</div>
                  <div className="text-sm text-muted-foreground">Demo Conversion Rate</div>
                </div>
              </div>
            </Card>
          </div>
        );
        
      case 'feedback':
        return (
          <InvestorFeedbackSystem
            selectedInvestor={selectedInvestor}
            selectedRemix={selectedRemix}
            selectedLanguage={selectedLanguage}
            language={language}
            onFeedbackSubmit={(feedback) => {
              console.log('Feedback submitted:', feedback);
              // Show success notification
              alert(language === 'en' 
                ? 'Feedback submitted successfully!' 
                : '¡Feedback enviado exitosamente!'
              );
            }}
          />
        );
        
      case 'analytics':
        return (
          <InvestorAnalyticsDashboard
            language={language}
            onExportFeedback={(type) => {
              console.log('Export feedback:', type);
              alert(language === 'en' 
                ? `Exporting to ${type}...` 
                : `Exportando a ${type}...`
              );
            }}
            onConfigureAlert={(alert) => {
              console.log('Configure alert:', alert);
              alert(language === 'en' 
                ? 'Alert configured successfully!' 
                : '¡Alerta configurada exitosamente!'
              );
            }}
          />
        );
        
      case 'composer':
        return (
          <InvestorRemixComposer
            language={language}
            onSubmit={(composition) => {
              console.log('Remix composition submitted:', composition);
              alert(language === 'en' 
                ? 'Remix composition submitted to founder for review!' 
                : '¡Composición de remix enviada al fundador para revisión!'
              );
              // Switch to review mode to show the submission
              handleModeChange('review');
            }}
            onPreview={(composition) => {
              console.log('Preview composition:', composition);
              alert(language === 'en' 
                ? 'Opening remix preview...' 
                : 'Abriendo vista previa del remix...'
              );
            }}
            onSaveDraft={(composition) => {
              console.log('Draft saved:', composition);
              alert(language === 'en' 
                ? 'Draft saved successfully!' 
                : '¡Borrador guardado exitosamente!'
              );
            }}
            onBack={() => handleModeChange('showcase')}
          />
        );
        
      case 'review':
        return (
          <FounderReviewSystem
            language={language}
            onApprove={(submissionId, modifications) => {
              console.log('Approved submission:', submissionId, modifications);
              alert(language === 'en' 
                ? 'Remix composition approved and ready for deployment!' 
                : '¡Composición de remix aprobada y lista para despliegue!'
              );
            }}
            onReject={(submissionId, feedback) => {
              console.log('Rejected submission:', submissionId, feedback);
              alert(language === 'en' 
                ? 'Feedback sent to investor for refinement.' 
                : 'Feedback enviado al inversor para refinamiento.'
              );
            }}
            onDeploy={(submissionId) => {
              console.log('Deployed remix:', submissionId);
              alert(language === 'en' 
                ? 'Remix deployed successfully!' 
                : '¡Remix desplegado exitosamente!'
              );
              // Switch to impact analytics to show deployment metrics
              handleModeChange('impact');
            }}
            onNavigate={onNavigate}
          />
        );
        
      case 'impact':
        return (
          <RemixImpactAnalytics
            language={language}
            onExport={(type, data) => {
              console.log('Export analytics:', type, data);
              alert(language === 'en' 
                ? `Exporting analytics to ${type}...` 
                : `Exportando analíticas a ${type}...`
              );
            }}
            onNavigate={onNavigate}
          />
        );
        
      case 'leaderboard':
        return (
          <RemixLeaderboard
            language={language}
            onExport={(type, data) => {
              console.log('Export leaderboard:', type, data);
              alert(language === 'en' 
                ? `Exporting leaderboard to ${type}...` 
                : `Exportando tabla de líderes a ${type}...`
              );
            }}
            onShare={() => {
              alert(language === 'en' 
                ? 'Leaderboard shared successfully!' 
                : '¡Tabla de líderes compartida exitosamente!'
              );
            }}
            onViewRemix={(remixId) => {
              console.log('View remix:', remixId);
              handleModeChange('impact');
            }}
            onNavigate={onNavigate}
          />
        );
        
      case 'trophies':
        return (
          <RemixTrophySystem
            language={language}
            onExport={(type, data) => {
              console.log('Export trophy data:', type, data);
              alert(language === 'en' 
                ? `Exporting trophy data to ${type}...` 
                : `Exportando datos de trofeos a ${type}...`
              );
            }}
            onSync={(targetSystem, data) => {
              console.log('Sync trophy data:', targetSystem, data);
              alert(language === 'en' 
                ? `Syncing trophy data to ${targetSystem}...` 
                : `Sincronizando datos de trofeos a ${targetSystem}...`
              );
            }}
            onGenerateBanner={(remix) => {
              console.log('Generate showcase banner:', remix);
              alert(language === 'en' 
                ? 'Showcase banner generated successfully!' 
                : '¡Banner de vitrina generado exitosamente!'
              );
            }}
            onNavigate={onNavigate}
          />
        );
        
      case 'gallery':
        return (
          <TrophyGallery
            language={language}
            onExport={(type, data) => {
              console.log('Export gallery:', type, data);
              alert(language === 'en' 
                ? `Exporting gallery to ${type}...` 
                : `Exportando galería a ${type}...`
              );
            }}
            onShare={() => {
              alert(language === 'en' 
                ? 'Trophy gallery shared successfully!' 
                : '¡Galería de trofeos compartida exitosamente!'
              );
            }}
            onViewReplay={(replayLink) => {
              console.log('View replay:', replayLink);
              alert(language === 'en' 
                ? 'Opening replay player...' 
                : 'Abriendo reproductor de replay...'
              );
            }}
            onViewTrophy={(trophyId) => {
              console.log('View trophy details:', trophyId);
              handleModeChange('trophies');
            }}
            onNavigate={onNavigate}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('persona')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {text.backToPlatform}
              </button>
              
              <div className="w-px h-6 bg-border" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">{text.title}</h1>
                  <p className="text-muted-foreground text-sm">{text.subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Mode Switcher */}
              <div className="flex bg-secondary rounded-lg p-1 flex-wrap">
                <Button
                  size="sm"
                  variant={feedbackMode === 'showcase' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('showcase')}
                  className="text-xs"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  {text.showcase}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'composer' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('composer')}
                  className="text-xs"
                >
                  <Target className="w-3 h-3 mr-1" />
                  {text.composer}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'review' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('review')}
                  className="text-xs"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {text.review}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'impact' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('impact')}
                  className="text-xs"
                >
                  <Activity className="w-3 h-3 mr-1" />
                  {text.impact}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'leaderboard' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('leaderboard')}
                  className="text-xs"
                >
                  <Trophy className="w-3 h-3 mr-1" />
                  {text.leaderboard}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'trophies' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('trophies')}
                  className="text-xs"
                >
                  <Award className="w-3 h-3 mr-1" />
                  {text.trophies}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'gallery' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('gallery')}
                  className="text-xs"
                >
                  <Star className="w-3 h-3 mr-1" />
                  {text.gallery}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'feedback' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('feedback')}
                  className="text-xs"
                >
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {text.feedback}
                </Button>
                <Button
                  size="sm"
                  variant={feedbackMode === 'analytics' ? 'default' : 'ghost'}
                  onClick={() => handleModeChange('analytics')}
                  className="text-xs"
                >
                  <BarChart3 className="w-3 h-3 mr-1" />
                  {text.analytics}
                </Button>
              </div>
              
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {text.export}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                {text.share}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={feedbackMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderModeContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}