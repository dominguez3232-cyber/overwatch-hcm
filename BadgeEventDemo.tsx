import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Trophy, 
  Zap, 
  Award, 
  Target, 
  Settings,
  Star,
  Crown,
  Users,
  MessageSquare,
  Hammer,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  checkBadgeUnlocks, 
  onOverlayComplete, 
  onDemoLaunch, 
  onFeedbackSubmit, 
  onSchemaCreate 
} from '../utils/badgeService';

interface BadgeEventDemoProps {
  language: 'en' | 'es';
  onNavigate?: (view: string) => void;
}

const translations = {
  en: {
    title: 'Badge Event System Demo',
    subtitle: 'Test comprehensive badge generation across OVERWATCH³ events',
    overlayCompletion: 'Overlay Completion',
    demoLaunch: 'Demo Launch',
    feedbackSubmission: 'Feedback Submission',
    schemaCreation: 'Schema Creation',
    triggerEvent: 'Trigger Event',
    runAllEvents: 'Run All Events',
    clearResults: 'Clear Results',
    eventsTriggered: 'Events Triggered',
    badgesEarned: 'Badges Earned',
    totalPoints: 'Total Points',
    results: 'Results',
    noResults: 'No events triggered yet',
    events: {
      overlayComplete: 'Complete Finance Trust Velocity overlay with high score',
      demoLaunch: 'Launch Strategic Mastery sequence demo',
      feedbackSubmit: 'Submit overlay improvement feedback',
      schemaCreate: 'Create custom business framework schema'
    }
  },
  es: {
    title: 'Demo del Sistema de Eventos de Insignias',
    subtitle: 'Prueba la generación integral de insignias en eventos OVERWATCH³',
    overlayCompletion: 'Finalización de Overlay',
    demoLaunch: 'Lanzamiento de Demo',
    feedbackSubmission: 'Envío de Retroalimentación',
    schemaCreation: 'Creación de Esquema',
    triggerEvent: 'Activar Evento',
    runAllEvents: 'Ejecutar Todos los Eventos',
    clearResults: 'Limpiar Resultados',
    eventsTriggered: 'Eventos Activados',
    badgesEarned: 'Insignias Obtenidas',
    totalPoints: 'Puntos Totales',
    results: 'Resultados',
    noResults: 'Ningún evento activado aún',
    events: {
      overlayComplete: 'Completar overlay de Velocidad de Confianza Financiera con puntaje alto',
      demoLaunch: 'Lanzar demo de secuencia de Maestría Estratégica',
      feedbackSubmit: 'Enviar retroalimentación de mejora de overlay',
      schemaCreate: 'Crear esquema personalizado de framework empresarial'
    }
  }
};

interface EventResult {
  eventType: string;
  timestamp: string;
  badgesEarned: any[];
  success: boolean;
  error?: string;
}

export const BadgeEventDemo: React.FC<BadgeEventDemoProps> = ({ language, onNavigate }) => {
  const [results, setResults] = useState<EventResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  
  const t = translations[language];

  const addResult = (result: EventResult) => {
    setResults(prev => [result, ...prev].slice(0, 10)); // Keep last 10 results
  };

  const triggerOverlayCompletion = async () => {
    setIsRunning(true);
    try {
      const badges = await checkBadgeUnlocks("overlayComplete", {
        overlayId: "finance-trust-velocity",
        learnerId: "demo-user-showcase",
        feedbackScore: 4.8
      });

      addResult({
        eventType: 'overlayComplete',
        timestamp: new Date().toISOString(),
        badgesEarned: badges,
        success: true
      });
    } catch (error) {
      addResult({
        eventType: 'overlayComplete',
        timestamp: new Date().toISOString(),
        badgesEarned: [],
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const triggerDemoLaunch = async () => {
    setIsRunning(true);
    try {
      const badges = await onDemoLaunch("strategic-mastery", "demo-user-showcase");

      addResult({
        eventType: 'demoLaunch',
        timestamp: new Date().toISOString(),
        badgesEarned: badges,
        success: true
      });
    } catch (error) {
      addResult({
        eventType: 'demoLaunch',
        timestamp: new Date().toISOString(),
        badgesEarned: [],
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const triggerFeedbackSubmission = async () => {
    setIsRunning(true);
    try {
      const badges = await onFeedbackSubmit("law-assumed-right", "demo-user-showcase");

      addResult({
        eventType: 'feedbackSubmit',
        timestamp: new Date().toISOString(),
        badgesEarned: badges,
        success: true
      });
    } catch (error) {
      addResult({
        eventType: 'feedbackSubmit',
        timestamp: new Date().toISOString(),
        badgesEarned: [],
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const triggerSchemaCreation = async () => {
    setIsRunning(true);
    try {
      const badges = await onSchemaCreate("custom.business-framework", "demo-user-showcase");

      addResult({
        eventType: 'schemaCreate',
        timestamp: new Date().toISOString(),
        badgesEarned: badges,
        success: true
      });
    } catch (error) {
      addResult({
        eventType: 'schemaCreate',
        timestamp: new Date().toISOString(),
        badgesEarned: [],
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const runAllEvents = async () => {
    setIsRunning(true);
    
    // Run events sequentially with delay for demonstration
    await triggerOverlayCompletion();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await triggerDemoLaunch();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await triggerFeedbackSubmission();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await triggerSchemaCreation();
    
    setIsRunning(false);
  };

  const clearResults = () => {
    setResults([]);
  };

  const totalBadges = results.reduce((sum, result) => sum + result.badgesEarned.length, 0);
  const totalPoints = results.reduce((sum, result) => 
    sum + result.badgesEarned.reduce((badgeSum, badge) => badgeSum + (badge.points || 0), 0), 0
  );

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'overlayComplete': return <Target className="w-4 h-4" />;
      case 'demoLaunch': return <Play className="w-4 h-4" />;
      case 'feedbackSubmit': return <MessageSquare className="w-4 h-4" />;
      case 'schemaCreate': return <Hammer className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Bronze': return 'text-amber-600 bg-amber-100 dark:bg-amber-900/20';
      case 'Silver': return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
      case 'Gold': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'Platinum': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20';
      case 'Diamond': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          {t.title}
        </motion.h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold">{results.length}</h3>
          <p className="text-muted-foreground">{t.eventsTriggered}</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold">{totalBadges}</h3>
          <p className="text-muted-foreground">{t.badgesEarned}</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-2xl font-bold">{totalPoints}</h3>
          <p className="text-muted-foreground">{t.totalPoints}</p>
        </Card>
      </div>

      {/* Event Triggers */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Event Triggers
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={triggerOverlayCompletion}
              disabled={isRunning}
              className="w-full h-auto p-4 flex flex-col items-start text-left"
              variant="outline"
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5" />
                {t.overlayCompletion}
              </div>
              <p className="text-sm text-muted-foreground">
                {t.events.overlayComplete}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={triggerDemoLaunch}
              disabled={isRunning}
              className="w-full h-auto p-4 flex flex-col items-start text-left"
              variant="outline"
            >
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5" />
                {t.demoLaunch}
              </div>
              <p className="text-sm text-muted-foreground">
                {t.events.demoLaunch}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={triggerFeedbackSubmission}
              disabled={isRunning}
              className="w-full h-auto p-4 flex flex-col items-start text-left"
              variant="outline"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5" />
                {t.feedbackSubmission}
              </div>
              <p className="text-sm text-muted-foreground">
                {t.events.feedbackSubmit}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={triggerSchemaCreation}
              disabled={isRunning}
              className="w-full h-auto p-4 flex flex-col items-start text-left"
              variant="outline"
            >
              <div className="flex items-center gap-2 mb-2">
                <Hammer className="w-5 h-5" />
                {t.schemaCreation}
              </div>
              <p className="text-sm text-muted-foreground">
                {t.events.schemaCreate}
              </p>
            </Button>
          </motion.div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={runAllEvents}
            disabled={isRunning}
            className="flex-1"
          >
            <Zap className="w-4 h-4 mr-2" />
            {t.runAllEvents}
          </Button>
          <Button
            onClick={clearResults}
            variant="outline"
            disabled={results.length === 0}
          >
            {t.clearResults}
          </Button>
        </div>
      </Card>

      {/* Squad Management Integration */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Users className="w-5 h-5" />
          {language === 'en' ? 'Squad Management Integration' : 'Integración de Gestión de Escuadrones'}
        </h3>
        <p className="text-muted-foreground mb-4">
          {language === 'en' 
            ? 'Create tactical teams, assign roles, and track badge progression across squads.'
            : 'Crea equipos tácticos, asigna roles y rastrea progreso de insignias en escuadrones.'
          }
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onNavigate('squad-creation')}
              className="w-full h-auto p-4 flex flex-col items-center text-center"
              variant="outline"
            >
              <Users className="w-8 h-8 mb-2 text-blue-500" />
              <div className="font-medium">
                {language === 'en' ? 'Create Squad' : 'Crear Escuadrón'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'en' ? 'Build tactical teams' : 'Construir equipos tácticos'}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onNavigate('squad-dashboard')}
              className="w-full h-auto p-4 flex flex-col items-center text-center"
              variant="outline"
            >
              <BarChart3 className="w-8 h-8 mb-2 text-green-500" />
              <div className="font-medium">
                {language === 'en' ? 'Squad Analytics' : 'Analíticas Squad'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'en' ? 'Track performance' : 'Rastrear rendimiento'}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onNavigate('advanced-squad-dashboard')}
              className="w-full h-auto p-4 flex flex-col items-center text-center"
              variant="outline"
            >
              <Sparkles className="w-8 h-8 mb-2 text-purple-500" />
              <div className="font-medium">
                {language === 'en' ? 'Advanced Analytics' : 'Analíticas Avanzadas'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'en' ? 'Cinematic replay system' : 'Sistema de replay cinemático'}
              </p>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onNavigate('overlay-editor')}
              className="w-full h-auto p-4 flex flex-col items-center text-center"
              variant="outline"
            >
              <Settings className="w-8 h-8 mb-2 text-indigo-500" />
              <div className="font-medium">
                {language === 'en' ? 'Overlay Editor' : 'Editor Overlay'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'en' ? 'Create coaching content' : 'Crear contenido coaching'}
              </p>
            </Button>
          </motion.div>
        </div>
      </Card>

      {/* Results */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="w-5 h-5" />
          {t.results}
        </h3>

        {results.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">{t.noResults}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      result.success ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      {getEventIcon(result.eventType)}
                    </div>
                    <div>
                      <h4 className="font-semibold capitalize">
                        {result.eventType.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(result.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  
                  <Badge variant={result.success ? "default" : "destructive"}>
                    {result.success ? '✅ Success' : '❌ Failed'}
                  </Badge>
                </div>

                {result.badgesEarned.length > 0 && (
                  <div className="space-y-2">
                    <Separator />
                    <h5 className="font-medium text-sm">Badges Earned:</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {result.badgesEarned.map((badge, badgeIndex) => (
                        <div 
                          key={badgeIndex}
                          className="flex items-center justify-between p-2 bg-secondary/50 rounded"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{badge.icon}</span>
                            <div>
                              <p className="font-medium text-sm">{badge.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {badge.schemaTrace}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getLevelColor(badge.level)}`}>
                              {badge.level}
                            </Badge>
                            <span className="text-sm font-medium">
                              +{badge.points}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {result.error && (
                  <div className="mt-3 p-2 bg-red-500/10 rounded text-red-500 text-sm">
                    Error: {result.error}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default BadgeEventDemo;