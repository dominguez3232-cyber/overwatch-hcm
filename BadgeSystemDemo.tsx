import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Play, 
  RefreshCw, 
  Settings, 
  Trophy,
  Star,
  Zap,
  Target,
  ArrowLeft,
  Plus,
  User,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import BadgeGallery from './BadgeGallery';
import BadgeCard, { type BadgeData } from './BadgeCard';
import { badgeService, onOverlayComplete } from '../utils/badgeService';
import ProfileDirectory from './ProfileDirectory';
import BadgeEventDemo from './BadgeEventDemo';
import BadgeExportModal from './BadgeExportModal';

interface BadgeSystemDemoProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

const translations = {
  en: {
    badgeSystemDemo: 'Badge System Demo',
    subtitle: 'Achievement Recognition & Progress Tracking',
    overview: 'System Overview',
    gallery: 'Badge Gallery',
    generator: 'Badge Generator',
    analytics: 'Analytics',
    directory: 'Directory',
    events: 'Events',
    backToPlatform: 'Back to Platform',
    generateBadge: 'Generate Badge',
    testOverlayCompletion: 'Test Overlay Completion',
    overlayId: 'Overlay ID',
    learnerId: 'Learner ID',
    feedbackScore: 'Feedback Score',
    schemaTrace: 'Schema Trace',
    overlayTitle: 'Overlay Title',
    icon: 'Icon',
    generate: 'Generate',
    badgeGenerated: 'Badge Generated!',
    noBadgeGenerated: 'No badge generated (score too low)',
    refreshGallery: 'Refresh Gallery',
    totalBadges: 'Total Badges',
    averageScore: 'Average Score',
    totalPoints: 'Total Points',
    completionRate: 'Completion Rate',
    systemFeatures: 'System Features',
    feature1: 'Dynamic badge generation based on overlay completion',
    feature2: 'Multiple achievement levels and categories',
    feature3: 'Points-based progression system',
    feature4: 'Rarity tiers for special achievements',
    feature5: 'Bilingual support (English/Spanish)',
    feature6: 'Integration with coaching feedback scores',
    demoInstructions: 'Demo Instructions',
    instruction1: 'Browse the badge gallery to see earned achievements',
    instruction2: 'Use the generator tab to simulate overlay completions',
    instruction3: 'Try different feedback scores to see badge generation',
    instruction4: 'View analytics to track progress and stats',
    sampleOverlays: 'Sample Overlays',
    selectOverlay: 'Select an overlay to test...'
  },
  es: {
    badgeSystemDemo: 'Demo del Sistema de Insignias',
    subtitle: 'Reconocimiento de Logros y Seguimiento de Progreso',
    overview: 'Resumen del Sistema',
    gallery: 'Galería de Insignias',
    generator: 'Generador de Insignias',
    analytics: 'Analíticas',
    directory: 'Directorio',
    events: 'Eventos',
    backToPlatform: 'Volver a Plataforma',
    generateBadge: 'Generar Insignia',
    testOverlayCompletion: 'Probar Finalización de Overlay',
    overlayId: 'ID del Overlay',
    learnerId: 'ID del Estudiante',
    feedbackScore: 'Puntuación de Retroalimentación',
    schemaTrace: 'Traza de Esquema',
    overlayTitle: 'Título del Overlay',
    icon: 'Icono',
    generate: 'Generar',
    badgeGenerated: '¡Insignia Generada!',
    noBadgeGenerated: 'No se generó insignia (puntuación muy baja)',
    refreshGallery: 'Actualizar Galería',
    totalBadges: 'Total de Insignias',
    averageScore: 'Puntuación Promedio',
    totalPoints: 'Puntos Totales',
    completionRate: 'Tasa de Finalización',
    systemFeatures: 'Características del Sistema',
    feature1: 'Generación dinámica de insignias basada en finalización de overlays',
    feature2: 'Múltiples niveles de logro y categorías',
    feature3: 'Sistema de progresión basado en puntos',
    feature4: 'Niveles de rareza para logros especiales',
    feature5: 'Soporte bilingüe (Inglés/Español)',
    feature6: 'Integración con puntuaciones de retroalimentación de coaching',
    demoInstructions: 'Instrucciones de Demo',
    instruction1: 'Navega por la galería de insignias para ver logros obtenidos',
    instruction2: 'Usa la pestaña de generador para simular finalizaciones de overlay',
    instruction3: 'Prueba diferentes puntuaciones para ver la generación de insignias',
    instruction4: 'Ve analíticas para rastrear progreso y estadísticas',
    sampleOverlays: 'Overlays de Muestra',
    selectOverlay: 'Selecciona un overlay para probar...'
  }
};

const sampleOverlays = [
  {
    id: 'finance-trust-velocity',
    title: 'Trust Velocity Optimization',
    schemaTrace: 'finance.trust-velocity',
    icon: '🧩'
  },
  {
    id: 'law-assumed-right',
    title: 'Legal Framework Mastery',
    schemaTrace: 'law.assumed-right',
    icon: '⚖️'
  },
  {
    id: 'time-velocity-modeling',
    title: 'Time Velocity Modeling',
    schemaTrace: 'time.velocity-modeling',
    icon: '⚡'
  },
  {
    id: 'strategic-foundation',
    title: 'Strategic Foundation',
    schemaTrace: 'strategic.foundation',
    icon: '🎯'
  }
];

export const BadgeSystemDemo: React.FC<BadgeSystemDemoProps> = ({
  language,
  onNavigate
}) => {
  const [badges, setBadges] = useState<BadgeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [generatedBadge, setGeneratedBadge] = useState<BadgeData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [selectedBadgeForExport, setSelectedBadgeForExport] = useState<BadgeData | null>(null);

  // Form state for badge generation
  const [overlayId, setOverlayId] = useState('');
  const [learnerId, setLearnerId] = useState('luis-dominguez');
  const [feedbackScore, setFeedbackScore] = useState(4.5);
  const [selectedOverlay, setSelectedOverlay] = useState('');

  const t = translations[language];

  // Load demo badges on component mount
  useEffect(() => {
    loadBadges();
  }, []);

  const loadBadges = async () => {
    setLoading(true);
    try {
      const demoLearner = 'demo-learner-123';
      const learnerBadges = await badgeService.getBadgesForLearner(demoLearner);
      setBadges(learnerBadges);
    } catch (error) {
      console.error('Error loading badges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateBadge = async () => {
    if (!selectedOverlay) return;

    setLoading(true);
    setGeneratedBadge(null);

    try {
      const overlay = sampleOverlays.find(o => o.id === selectedOverlay);
      if (!overlay) return;

      const badge = await onOverlayComplete(
        overlay.id,
        learnerId,
        feedbackScore,
        {
          schemaTrace: overlay.schemaTrace,
          title: overlay.title,
          icon: overlay.icon,
          language
        }
      );

      setGeneratedBadge(badge);
      
      if (badge) {
        // Refresh the gallery
        await loadBadges();
      }
    } catch (error) {
      console.error('Error generating badge:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBadgeClick = (badgeId: string) => {
    console.log('Badge clicked:', badgeId);
    // Could navigate to detailed badge view
  };

  const handleBadgeExport = (badge: BadgeData) => {
    setSelectedBadgeForExport(badge);
    setExportModalOpen(true);
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t.badgeSystemDemo}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold">{badges.length}</p>
            <p className="text-sm text-muted-foreground">{t.totalBadges}</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">4.3</p>
            <p className="text-sm text-muted-foreground">{t.averageScore}</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold">1,800</p>
            <p className="text-sm text-muted-foreground">{t.totalPoints}</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">87%</p>
            <p className="text-sm text-muted-foreground">{t.completionRate}</p>
          </div>
        </div>
      </Card>

      {/* System Features */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          {t.systemFeatures}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">1</span>
              </div>
              <p className="text-sm">{t.feature1}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">2</span>
              </div>
              <p className="text-sm">{t.feature2}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">3</span>
              </div>
              <p className="text-sm">{t.feature3}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">4</span>
              </div>
              <p className="text-sm">{t.feature4}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">5</span>
              </div>
              <p className="text-sm">{t.feature5}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-primary">6</span>
              </div>
              <p className="text-sm">{t.feature6}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Demo Instructions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Play className="w-5 h-5" />
          {t.demoInstructions}
        </h3>
        <div className="space-y-2">
          <p className="text-sm">• {t.instruction1}</p>
          <p className="text-sm">• {t.instruction2}</p>
          <p className="text-sm">• {t.instruction3}</p>
          <p className="text-sm">• {t.instruction4}</p>
        </div>
      </Card>
    </div>
  );

  const GeneratorTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          {t.testOverlayCompletion}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.sampleOverlays}</label>
              <Select value={selectedOverlay} onValueChange={setSelectedOverlay}>
                <SelectTrigger>
                  <SelectValue placeholder={t.selectOverlay} />
                </SelectTrigger>
                <SelectContent>
                  {sampleOverlays.map(overlay => (
                    <SelectItem key={overlay.id} value={overlay.id}>
                      {overlay.icon} {overlay.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.learnerId}</label>
              <Input
                value={learnerId}
                onChange={(e) => setLearnerId(e.target.value)}
                placeholder="Enter learner ID"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.feedbackScore} (1-5)</label>
              <Input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={feedbackScore}
                onChange={(e) => setFeedbackScore(parseFloat(e.target.value))}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Button
              onClick={handleGenerateBadge}
              disabled={!selectedOverlay || loading}
              size="lg"
              className="flex items-center gap-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Target className="w-4 h-4" />
              )}
              {t.generate}
            </Button>
          </div>
        </div>

        {generatedBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-green-500/50 rounded-lg p-4 bg-green-500/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-green-500" />
              <span className="font-medium text-green-500">{t.badgeGenerated}</span>
            </div>
            <BadgeCard
              badge={generatedBadge}
              variant="showcase"
              onClick={handleBadgeClick}
              animated={true}
            />
          </motion.div>
        )}

        {generatedBadge === null && !loading && selectedOverlay && (
          <div className="border border-orange-500/50 rounded-lg p-4 bg-orange-500/5">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500">{t.noBadgeGenerated}</span>
            </div>
          </div>
        )}
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => onNavigate('persona')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToPlatform}
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{t.badgeSystemDemo}</h1>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {learnerId}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {language.toUpperCase()}
            </Badge>
            <Button
              onClick={() => onNavigate('badge-studio')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Settings className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Badge Studio' : 'Estudio Insignias'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              {t.overview}
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {t.gallery}
            </TabsTrigger>
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              {t.generator}
            </TabsTrigger>
            <TabsTrigger value="directory" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {t.directory}
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {t.events}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t.analytics}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <BadgeGallery
              badges={badges}
              language={language}
              onBadgeClick={handleBadgeClick}
              onBadgeExport={handleBadgeExport}
              variant="gallery"
              showFilters={true}
              showStats={true}
              showExport={true}
            />
          </TabsContent>

          <TabsContent value="generator" className="mt-6">
            <GeneratorTab />
          </TabsContent>

          <TabsContent value="directory" className="mt-6">
            <ProfileDirectory
              language={language}
              onNavigate={onNavigate}
              onViewProfile={onNavigate}
            />
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <BadgeEventDemo
              language={language}
              onNavigate={onNavigate}
            />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card className="p-8 text-center">
              <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.analytics}</h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Advanced analytics and progress tracking coming soon!'
                  : '¡Análisis avanzado y seguimiento de progreso próximamente!'
                }
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Badge Export Modal */}
      {selectedBadgeForExport && (
        <BadgeExportModal
          badge={selectedBadgeForExport}
          isOpen={exportModalOpen}  
          onClose={() => {
            setExportModalOpen(false);
            setSelectedBadgeForExport(null);
          }}
          language={language}
          baseUrl="https://overwatch3.app"
        />
      )}
    </div>
  );
};

export default BadgeSystemDemo;