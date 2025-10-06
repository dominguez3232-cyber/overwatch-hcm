import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { 
  Users, 
  Target, 
  TrendingUp,
  Award,
  ArrowLeft,
  BarChart3,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Download,
  Globe,
  Clock,
  Activity,
  CheckCircle,
  Trophy,
  Rocket,
  Settings
} from 'lucide-react';
import { getSquadAnalytics, getAllSquads, SquadConfig } from '../utils/squadService';

interface TimelineEvent {
  id: string;
  type: 'Overlay' | 'Feedback' | 'Badge' | 'Demo';
  trace?: string;
  title?: string;
  completedBy?: string;
  score?: number;
  clarityLift?: string;
  coach?: string;
  badge?: string;
  level?: string;
  unlockedBy?: string;
  overlaysUsed?: number;
  market?: string;
  timestamp: string;
  language?: 'EN' | 'ES';
  replayLink?: string;
}

interface VelocityData {
  overlay: string;
  squad: string;
  velocity: string;
  completionsThisWeek: number;
  averageTime: string;
}

interface CoachingLiftData {
  overlay: string;
  squad: string;
  lift: string;
  beforeScore: number;
  afterScore: number;
  participantCount: number;
}

interface AdvancedSquadDashboardProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  selectedSquadId?: string;
}

export default function AdvancedSquadDashboard({
  language,
  onNavigate,
  selectedSquadId
}: AdvancedSquadDashboardProps) {
  const [squads, setSquads] = useState<SquadConfig[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<string | null>(selectedSquadId || null);
  const [squadAnalytics, setSquadAnalytics] = useState<any>(null);
  const [timelineData, setTimelineData] = useState<TimelineEvent[]>([]);
  const [currentTab, setCurrentTab] = useState('summary');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [replayLanguage, setReplayLanguage] = useState<'EN' | 'ES'>('EN');
  const [loading, setLoading] = useState(true);

  const t = {
    en: {
      title: 'Advanced Squad Analytics',
      subtitle: 'Cinematic command center for tactical clarity deployment',
      summary: 'Squad Summary',
      velocity: 'Overlay Velocity',
      coaching: 'Coaching Lift',
      demos: 'Demo Impact',
      badges: 'Badge Distribution',
      replay: 'Squad Replay',
      overlaysCompleted: 'Overlays Completed',
      clarityIndex: 'Clarity Index',
      demoCount: 'Demo Launches',
      badgeCount: 'Badges Earned',
      market: 'Market',
      playReplay: 'Play Replay',
      pauseReplay: 'Pause Replay',
      resetReplay: 'Reset Replay',
      exportTimeline: 'Export Timeline',
      speed: 'Speed',
      overlayEvent: 'Overlay Completed',
      feedbackEvent: 'Coaching Feedback',
      badgeEvent: 'Badge Unlocked',
      demoEvent: 'Demo Launched',
      by: 'by',
      coach: 'Coach',
      score: 'Score',
      lift: 'Lift',
      level: 'Level',
      used: 'used',
      overlays: 'overlays',
      velocityPerWeek: 'overlays/week',
      participants: 'participants',
      beforeAfter: 'Before → After',
      completionRate: 'Completion Rate',
      averageTime: 'Average Time',
      topPerformers: 'Top Performers',
      recentActivity: 'Recent Activity'
    },
    es: {
      title: 'Analíticas Avanzadas de Escuadrón',
      subtitle: 'Centro de comando cinemático para despliegue de claridad táctica',
      summary: 'Resumen Escuadrón',
      velocity: 'Velocidad Overlay',
      coaching: 'Impulso Coaching',
      demos: 'Impacto Demo',
      badges: 'Distribución Insignias',
      replay: 'Replay Escuadrón',
      overlaysCompleted: 'Overlays Completados',
      clarityIndex: 'Índice Claridad',
      demoCount: 'Lanzamientos Demo',
      badgeCount: 'Insignias Obtenidas',
      market: 'Mercado',
      playReplay: 'Reproducir Replay',
      pauseReplay: 'Pausar Replay',
      resetReplay: 'Reiniciar Replay',
      exportTimeline: 'Exportar Timeline',
      speed: 'Velocidad',
      overlayEvent: 'Overlay Completado',
      feedbackEvent: 'Feedback Coaching',
      badgeEvent: 'Insignia Desbloqueada',
      demoEvent: 'Demo Lanzado',
      by: 'por',
      coach: 'Coach',
      score: 'Puntuación',
      lift: 'Impulso',
      level: 'Nivel',
      used: 'usó',
      overlays: 'overlays',
      velocityPerWeek: 'overlays/semana',
      participants: 'participantes',
      beforeAfter: 'Antes → Después',
      completionRate: 'Tasa Finalización',
      averageTime: 'Tiempo Promedio',
      topPerformers: 'Mejores Performers',
      recentActivity: 'Actividad Reciente'
    }
  };

  const text = t[language];

  // Mock velocity data
  const velocityData: VelocityData[] = [
    {
      overlay: 'finance.trust-velocity',
      squad: 'LatAm GTM',
      velocity: '4 overlays/week',
      completionsThisWeek: 4,
      averageTime: '45min'
    },
    {
      overlay: 'law.assumed-right',
      squad: 'LatAm GTM',
      velocity: '2 overlays/week',
      completionsThisWeek: 2,
      averageTime: '32min'
    },
    {
      overlay: 'time.velocity-modeling',
      squad: 'Ops Alpha',
      velocity: '3 overlays/week',
      completionsThisWeek: 3,
      averageTime: '38min'
    }
  ];

  // Mock coaching lift data
  const coachingLiftData: CoachingLiftData[] = [
    {
      overlay: 'finance.trust-velocity',
      squad: 'LatAm GTM',
      lift: '3.4x',
      beforeScore: 2.1,
      afterScore: 7.1,
      participantCount: 3
    },
    {
      overlay: 'time.velocity-modeling',
      squad: 'Ops Alpha',
      lift: '2.1x',
      beforeScore: 3.2,
      afterScore: 6.7,
      participantCount: 2
    }
  ];

  // Mock timeline data
  const mockTimelineData: TimelineEvent[] = [
    {
      id: 'event-1',
      type: 'Overlay',
      trace: 'finance.trust-velocity',
      completedBy: 'Luis Dominguez',
      timestamp: '2025-09-28T14:22:00Z',
      language: 'EN',
      replayLink: '/overlay?id=finance.trust-velocity'
    },
    {
      id: 'event-2',
      type: 'Feedback',
      score: 4.8,
      clarityLift: '3.2x',
      coach: 'Ana Rivera',
      timestamp: '2025-09-28T15:10:00Z'
    },
    {
      id: 'event-3',
      type: 'Badge',
      badge: '🧩 Trust Velocity Master',
      level: 'Gold',
      unlockedBy: 'Luis Dominguez',
      timestamp: '2025-09-28T15:12:00Z'
    },
    {
      id: 'event-4',
      type: 'Demo',
      title: 'Investor Pitch Alpha',
      overlaysUsed: 6,
      market: 'US/LatAm',
      timestamp: '2025-09-29T10:00:00Z',
      replayLink: '/demo?id=pitch-alpha'
    }
  ];

  useEffect(() => {
    loadSquads();
    setTimelineData(mockTimelineData);
  }, []);

  useEffect(() => {
    if (selectedSquad) {
      loadSquadAnalytics(selectedSquad);
    }
  }, [selectedSquad]);

  const loadSquads = async () => {
    try {
      const allSquads = await getAllSquads();
      setSquads(allSquads);
      
      if (allSquads.length > 0 && !selectedSquad) {
        setSelectedSquad(allSquads[0].id);
      }
    } catch (error) {
      console.error('Error loading squads:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSquadAnalytics = async (squadId: string) => {
    try {
      const analytics = await getSquadAnalytics(squadId);
      setSquadAnalytics(analytics);
    } catch (error) {
      console.error('Error loading squad analytics:', error);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString(language === 'en' ? 'en-US' : 'es-ES');
  };

  const playTimeline = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentEventIndex(prev => {
        if (prev >= timelineData.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000 / playbackSpeed);
  };

  const pauseTimeline = () => {
    setIsPlaying(false);
  };

  const resetTimeline = () => {
    setIsPlaying(false);
    setCurrentEventIndex(0);
  };

  const exportTimeline = () => {
    const timelineJson = {
      squadId: selectedSquad,
      timeline: timelineData,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(timelineJson, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `squad-timeline-${selectedSquad}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderTimelineEvent = (event: TimelineEvent, index: number) => {
    const isActive = index <= currentEventIndex;
    const isCurrent = index === currentEventIndex && isPlaying;
    
    return (
      <motion.div
        key={event.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isActive ? 1 : 0.3, 
          x: 0,
          scale: isCurrent ? 1.05 : 1
        }}
        className={`p-4 rounded-lg border transition-all ${
          isActive ? 'border-primary bg-primary/5' : 'border-border bg-muted/50'
        } ${isCurrent ? 'ring-2 ring-primary' : ''}`}
      >
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            event.type === 'Overlay' ? 'bg-blue-500/20 text-blue-500' :
            event.type === 'Feedback' ? 'bg-green-500/20 text-green-500' :
            event.type === 'Badge' ? 'bg-yellow-500/20 text-yellow-500' :
            'bg-purple-500/20 text-purple-500'
          }`}>
            {event.type === 'Overlay' && <Target className="w-5 h-5" />}
            {event.type === 'Feedback' && <TrendingUp className="w-5 h-5" />}
            {event.type === 'Badge' && <Award className="w-5 h-5" />}
            {event.type === 'Demo' && <Rocket className="w-5 h-5" />}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">
                {event.type === 'Overlay' && text.overlayEvent}
                {event.type === 'Feedback' && text.feedbackEvent}
                {event.type === 'Badge' && text.badgeEvent}
                {event.type === 'Demo' && text.demoEvent}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatTimestamp(event.timestamp)}
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-1">
              {event.trace && (
                <p><strong>Schema:</strong> {event.trace}</p>
              )}
              {event.completedBy && (
                <p><strong>{text.by}:</strong> {event.completedBy}</p>
              )}
              {event.score && (
                <p><strong>{text.score}:</strong> {event.score}/5.0</p>
              )}
              {event.clarityLift && (
                <p><strong>{text.lift}:</strong> {event.clarityLift}</p>
              )}
              {event.coach && (
                <p><strong>{text.coach}:</strong> {event.coach}</p>
              )}
              {event.badge && (
                <p><strong>Badge:</strong> {event.badge} ({event.level})</p>
              )}
              {event.title && (
                <p><strong>Demo:</strong> {event.title}</p>
              )}
              {event.overlaysUsed && (
                <p><strong>Overlays:</strong> {event.overlaysUsed} {text.overlays} {text.used}</p>
              )}
              {event.market && (
                <p><strong>{text.market}:</strong> {event.market}</p>
              )}
            </div>
            
            {event.replayLink && (
              <Button 
                size="sm" 
                variant="outline" 
                className="mt-2"
                onClick={() => window.open(event.replayLink, '_blank')}
              >
                <Play className="w-3 h-3 mr-1" />
                Replay
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading advanced analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('squad-dashboard')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Squad Selector */}
          {squads.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-muted-foreground">Select Squad:</span>
              <div className="flex gap-2">
                {squads.map((squad) => (
                  <Button
                    key={squad.id}
                    variant={selectedSquad === squad.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSquad(squad.id)}
                  >
                    {squad.name}
                    <Badge 
                      variant={squad.status === 'active' ? 'default' : 'secondary'}
                      className="ml-2 text-xs"
                    >
                      {squad.status}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {text.summary}
            </TabsTrigger>
            <TabsTrigger value="velocity" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {text.velocity}
            </TabsTrigger>
            <TabsTrigger value="coaching" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {text.coaching}
            </TabsTrigger>
            <TabsTrigger value="demos" className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              {text.demos}
            </TabsTrigger>
            <TabsTrigger value="badges" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              {text.badges}
            </TabsTrigger>
            <TabsTrigger value="replay" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              {text.replay}
            </TabsTrigger>
          </TabsList>

          {/* Squad Summary Tab */}
          <TabsContent value="summary" className="space-y-6">
            {squadAnalytics && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">42</h3>
                  <p className="text-muted-foreground">{text.overlaysCompleted}</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold">3.1x</h3>
                  <p className="text-muted-foreground">{text.clarityIndex}</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold">6</h3>
                  <p className="text-muted-foreground">{text.demoCount}</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-muted-foreground">{text.badgeCount}</p>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Overlay Velocity Tab */}
          <TabsContent value="velocity" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Overlay Velocity Analysis</h3>
              <div className="space-y-4">
                {velocityData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">{item.overlay}</p>
                      <p className="text-sm text-muted-foreground">{item.squad}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-500">{item.velocity}</p>
                      <p className="text-sm text-muted-foreground">{text.averageTime}: {item.averageTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Coaching Lift Tab */}
          <TabsContent value="coaching" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Coaching Impact Heatmap</h3>
              <div className="space-y-4">
                {coachingLiftData.map((item, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{item.overlay}</p>
                        <p className="text-sm text-muted-foreground">{item.squad}</p>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {item.lift}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {text.beforeAfter}: {item.beforeScore} → {item.afterScore}
                      </span>
                      <span className="text-muted-foreground">
                        {item.participantCount} {text.participants}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Demo Impact Tab */}
          <TabsContent value="demos" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Demo Impact Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2">Investor Pitch Alpha</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Squad:</span>
                      <span>LatAm GTM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overlays Used:</span>
                      <span>6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Clarity Index:</span>
                      <span className="text-green-500 font-semibold">3.2x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market:</span>
                      <span>US/LatAm</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    <Play className="w-3 h-3 mr-1" />
                    Replay Demo
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Badge Distribution Tab */}
          <TabsContent value="badges" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Badge Distribution Matrix</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🧩</span>
                    <div>
                      <p className="font-medium">Trust Velocity Master</p>
                      <p className="text-sm text-muted-foreground">Squads: LatAm GTM, Ops Alpha</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-500">78%</p>
                    <p className="text-sm text-muted-foreground">{text.completionRate}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="font-medium">Dual-Language Navigator</p>
                      <p className="text-sm text-muted-foreground">Squads: LatAm GTM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-500">65%</p>
                    <p className="text-sm text-muted-foreground">{text.completionRate}</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Squad Replay Tab */}
          <TabsContent value="replay" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Cinematic Squad Timeline</h3>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setReplayLanguage(replayLanguage === 'EN' ? 'ES' : 'EN')}
                  >
                    <Globe className="w-3 h-3 mr-1" />
                    {replayLanguage}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={exportTimeline}
                  >
                    <Download className="w-3 h-3 mr-1" />
                    {text.exportTimeline}
                  </Button>
                </div>
              </div>

              {/* Replay Controls */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-secondary/50 rounded-lg">
                <Button
                  size="sm"
                  onClick={isPlaying ? pauseTimeline : playTimeline}
                  disabled={currentEventIndex >= timelineData.length - 1 && !isPlaying}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 mr-1" />
                      {text.pauseReplay}
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 mr-1" />
                      {text.playReplay}
                    </>
                  )}
                </Button>
                
                <Button size="sm" variant="outline" onClick={resetTimeline}>
                  <RotateCcw className="w-3 h-3 mr-1" />
                  {text.resetReplay}
                </Button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{text.speed}:</span>
                  <select
                    value={playbackSpeed}
                    onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                    className="bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={2}>2x</option>
                    <option value={4}>4x</option>
                  </select>
                </div>
                
                <div className="flex-1 mx-4">
                  <Progress 
                    value={timelineData.length > 0 ? (currentEventIndex / (timelineData.length - 1)) * 100 : 0} 
                    className="h-2"
                  />
                </div>
                
                <span className="text-sm text-muted-foreground">
                  {currentEventIndex + 1} / {timelineData.length}
                </span>
              </div>

              {/* Timeline Events */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {timelineData.map((event, index) => renderTimelineEvent(event, index))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}