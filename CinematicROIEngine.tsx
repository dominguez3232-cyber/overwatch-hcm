/**
 * Cinematic ROI Engine
 * 
 * The revolutionary ROI visualization system that transforms static metrics
 * into cinematic proof of business transformation. This is the key differentiator
 * that makes OVERWATCH³ impossible for VCs to ignore.
 */

import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Play, 
  Pause, 
  Film, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Target,
  Zap,
  Award,
  Eye,
  Clock,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Star
} from 'lucide-react';

interface CinematicROIEngineProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  pilotData?: PilotData;
  demoMode?: boolean;
}

interface PilotData {
  companyName: string;
  industry: string;
  employees: number;
  timeline: number; // weeks
  startDate: string;
}

interface ROIMetric {
  name: string;
  before: number;
  after: number;
  unit: 'currency' | 'percentage' | 'days' | 'score';
  impact: 'financial' | 'human';
}

interface TransformationStory {
  phase: string;
  week: number;
  title: string;
  description: string;
  metrics: ROIMetric[];
  testimonial?: string;
  visual: 'chart' | 'comparison' | 'timeline' | 'gauge';
}

export function CinematicROIEngine({ 
  language, 
  currentMode, 
  pilotData = {
    companyName: "TechFlow Innovations",
    industry: "Professional Services",
    employees: 150,
    timeline: 12,
    startDate: "2024-01-15"
  },
  demoMode = true 
}: CinematicROIEngineProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'cinema' | 'metrics' | 'story'>('cinema');

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Sample transformation story data
  const transformationStory: TransformationStory[] = [
    {
      phase: 'Foundation',
      week: 0,
      title: t('Baseline Assessment', 'Evaluación Línea Base'),
      description: t(
        'Initial state: Fragmented HR systems, 23% turnover, manual processes consuming 40+ hours/week',
        'Estado inicial: Sistemas HR fragmentados, 23% rotación, procesos manuales consumiendo 40+ horas/semana'
      ),
      metrics: [
        { name: t('Employee Turnover', 'Rotación Empleados'), before: 23, after: 23, unit: 'percentage', impact: 'human' },
        { name: t('HR Process Time', 'Tiempo Proceso HR'), before: 42, after: 42, unit: 'days', impact: 'human' },
        { name: t('Compliance Score', 'Puntuación Cumplimiento'), before: 67, after: 67, unit: 'score', impact: 'financial' },
        { name: t('Annual HR Costs', 'Costos HR Anuales'), before: 245000, after: 245000, unit: 'currency', impact: 'financial' }
      ],
      visual: 'gauge',
      testimonial: t(
        '"We knew we needed change, but didn\'t realize how much potential we were leaving on the table."',
        '"Sabíamos que necesitábamos cambio, pero no nos dimos cuenta de cuánto potencial estábamos dejando en la mesa."'
      )
    },
    {
      phase: 'Implementation',
      week: 4,
      title: t('System Integration', 'Integración del Sistema'),
      description: t(
        'OVERWATCH³ deployed: Unified data streams, automated workflows, real-time insights activated',
        'OVERWATCH³ desplegado: Flujos de datos unificados, flujos de trabajo automatizados, insights en tiempo real activados'
      ),
      metrics: [
        { name: t('Employee Turnover', 'Rotación Empleados'), before: 23, after: 19, unit: 'percentage', impact: 'human' },
        { name: t('HR Process Time', 'Tiempo Proceso HR'), before: 42, after: 28, unit: 'days', impact: 'human' },
        { name: t('Compliance Score', 'Puntuación Cumplimiento'), before: 67, after: 84, unit: 'score', impact: 'financial' },
        { name: t('Annual HR Costs', 'Costos HR Anuales'), before: 245000, after: 198000, unit: 'currency', impact: 'financial' }
      ],
      visual: 'chart',
      testimonial: t(
        '"The immediate visibility was incredible. We could finally see what was actually happening."',
        '"La visibilidad inmediata fue increíble. Finalmente pudimos ver lo que realmente estaba pasando."'
      )
    },
    {
      phase: 'Optimization',
      week: 8,
      title: t('Performance Amplification', 'Amplificación de Rendimiento'),
      description: t(
        'AI-driven insights activated: Predictive analytics preventing issues, culture multiplier effects visible',
        'Insights impulsados por IA activados: Analítica predictiva previniendo problemas, efectos multiplicadores de cultura visibles'
      ),
      metrics: [
        { name: t('Employee Turnover', 'Rotación Empleados'), before: 23, after: 12, unit: 'percentage', impact: 'human' },
        { name: t('HR Process Time', 'Tiempo Proceso HR'), before: 42, after: 15, unit: 'days', impact: 'human' },
        { name: t('Compliance Score', 'Puntuación Cumplimiento'), before: 67, after: 94, unit: 'score', impact: 'financial' },
        { name: t('Annual HR Costs', 'Costos HR Anuales'), before: 245000, after: 156000, unit: 'currency', impact: 'financial' }
      ],
      visual: 'comparison',
      testimonial: t(
        '"Our culture score increased by 40%. People are actually excited to come to work now."',
        '"Nuestra puntuación de cultura aumentó 40%. La gente ahora está realmente emocionada de venir a trabajar."'
      )
    },
    {
      phase: 'Transformation',
      week: 12,
      title: t('Strategic Command Center', 'Centro de Comando Estratégico'),
      description: t(
        'Full transformation: HR as strategic advantage, predictive insights driving growth, measurable culture ROI',
        'Transformación completa: HR como ventaja estratégica, insights predictivos impulsando crecimiento, ROI de cultura medible'
      ),
      metrics: [
        { name: t('Employee Turnover', 'Rotación Empleados'), before: 23, after: 7, unit: 'percentage', impact: 'human' },
        { name: t('HR Process Time', 'Tiempo Proceso HR'), before: 42, after: 8, unit: 'days', impact: 'human' },
        { name: t('Compliance Score', 'Puntuación Cumplimiento'), before: 67, after: 98, unit: 'score', impact: 'financial' },
        { name: t('Annual HR Costs', 'Costos HR Anuales'), before: 245000, after: 124000, unit: 'currency', impact: 'financial' }
      ],
      visual: 'timeline',
      testimonial: t(
        '"ROI of 340% in 12 weeks. HR went from cost center to our biggest competitive advantage."',
        '"ROI de 340% en 12 semanas. HR pasó de centro de costos a nuestra mayor ventaja competitiva."'
      )
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && currentWeek < pilotData.timeline) {
      const interval = setInterval(() => {
        setCurrentWeek(prev => Math.min(prev + 1, pilotData.timeline));
      }, 1000 / playbackSpeed);
      
      return () => clearInterval(interval);
    }
    
    if (currentWeek >= pilotData.timeline) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentWeek, playbackSpeed, pilotData.timeline]);

  const getCurrentStory = () => {
    return transformationStory.find(story => 
      currentWeek >= story.week && currentWeek < (transformationStory[transformationStory.indexOf(story) + 1]?.week || pilotData.timeline + 1)
    ) || transformationStory[0];
  };

  const formatValue = (value: number, unit: string) => {
    switch (unit) {
      case 'currency':
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
      case 'percentage':
        return `${value}%`;
      case 'days':
        return `${value} ${language === 'en' ? 'days' : 'días'}`;
      case 'score':
        return `${value}/100`;
      default:
        return value.toString();
    }
  };

  const calculateROI = () => {
    const currentStory = getCurrentStory();
    const totalSavings = currentStory.metrics.reduce((sum, metric) => {
      if (metric.unit === 'currency') {
        return sum + (metric.before - metric.after);
      }
      return sum;
    }, 0);
    
    const investmentCost = 102000; // Strategic tier cost
    return ((totalSavings - investmentCost) / investmentCost * 100);
  };

  const renderMetricVisualization = (metric: ROIMetric) => {
    const improvement = metric.unit === 'currency' ? 
      (metric.before - metric.after) / metric.before * 100 :
      metric.unit === 'percentage' || metric.unit === 'score' ?
      (metric.after - metric.before) / metric.before * 100 :
      (metric.before - metric.after) / metric.before * 100;

    const isPositive = improvement > 0;

    return (
      <div className="p-4 bg-slate-700 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">{metric.name}</span>
          <div className={`flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            <span className="text-xs">{Math.abs(improvement).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="text-red-400">
            <div className="text-xs opacity-70">{t('Before', 'Antes')}</div>
            <div className="font-medium">{formatValue(metric.before, metric.unit)}</div>
          </div>
          <div className="text-green-400">
            <div className="text-xs opacity-70">{t('After', 'Después')}</div>
            <div className="font-medium">{formatValue(metric.after, metric.unit)}</div>
          </div>
        </div>
        
        <Progress 
          value={(metric.after / metric.before) * 100} 
          className="h-1 mt-2"
        />
      </div>
    );
  };

  const currentStory = getCurrentStory();
  const roi = calculateROI();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Cinematic Header */}
      <div className="border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="px-6 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Film className="w-8 h-8 text-blue-400" />
                <h1 className="text-3xl font-bold">
                  {t('Cinematic ROI Engine', 'Motor ROI Cinematográfico')}
                </h1>
                {demoMode && (
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                    {t('DEMO MODE', 'MODO DEMO')}
                  </Badge>
                )}
              </div>
              <p className="text-slate-300 mb-4">
                {t(
                  'Live visualization of business transformation through OVERWATCH³ implementation',
                  'Visualización en vivo de transformación empresarial a través de implementación OVERWATCH³'
                )}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-green-400" />
                  <span className="text-slate-400">{pilotData.companyName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">{pilotData.employees} {t('employees', 'empleados')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-400">
                    {t('Week', 'Semana')} {currentWeek} / {pilotData.timeline}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {roi > 0 ? '+' : ''}{roi.toFixed(0)}%
              </div>
              <div className="text-sm text-slate-400">
                {t('Current ROI', 'ROI Actual')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        {/* Playback Controls */}
        <Card className="mb-8 p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`${isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? t('Pause', 'Pausar') : t('Play', 'Reproducir')}
              </Button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">{t('Speed', 'Velocidad')}:</span>
                {[0.5, 1, 2, 4].map(speed => (
                  <Button 
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    variant={playbackSpeed === speed ? "default" : "outline"}
                    size="sm"
                  >
                    {speed}x
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">{t('View', 'Vista')}:</span>
              {[
                { id: 'cinema', label: t('Cinema', 'Cinema'), icon: Film },
                { id: 'metrics', label: t('Metrics', 'Métricas'), icon: BarChart3 },
                { id: 'story', label: t('Story', 'Historia'), icon: Eye }
              ].map(view => (
                <Button 
                  key={view.id}
                  onClick={() => setViewMode(view.id as any)}
                  variant={viewMode === view.id ? "default" : "outline"}
                  size="sm"
                >
                  <view.icon className="w-3 h-3 mr-1" />
                  {view.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <Progress 
              value={(currentWeek / pilotData.timeline) * 100} 
              className="h-2"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{t('Start', 'Inicio')}</span>
              <span>{currentStory.phase}</span>
              <span>{t('Transformation Complete', 'Transformación Completa')}</span>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        {viewMode === 'cinema' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Story Panel */}
            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentStory.title}</h3>
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                    {currentStory.phase}
                  </Badge>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">{currentStory.description}</p>
              
              {currentStory.testimonial && (
                <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <p className="text-slate-300 italic mb-2">{currentStory.testimonial}</p>
                      <div className="text-sm text-slate-400">
                        — {t('CEO', 'CEO')}, {pilotData.companyName}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Metrics Visualization */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                {t('Real-Time Impact', 'Impacto en Tiempo Real')}
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {currentStory.metrics.map((metric, index) => (
                  <div key={index}>
                    {renderMetricVisualization(metric)}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {viewMode === 'metrics' && (
          <div className="grid lg:grid-cols-4 gap-6">
            {currentStory.metrics.map((metric, index) => {
              const improvement = metric.unit === 'currency' ? 
                (metric.before - metric.after) / metric.before * 100 :
                metric.unit === 'percentage' || metric.unit === 'score' ?
                (metric.after - metric.before) / metric.before * 100 :
                (metric.before - metric.after) / metric.before * 100;

              return (
                <Card key={index} className="p-6 bg-slate-800 border-slate-700 text-center">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    metric.impact === 'financial' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {metric.impact === 'financial' ? 
                      <DollarSign className="w-6 h-6 text-white" /> : 
                      <Users className="w-6 h-6 text-white" />
                    }
                  </div>
                  
                  <h4 className="font-bold text-white mb-2">{metric.name}</h4>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">
                      {formatValue(metric.after, metric.unit)}
                    </div>
                    <div className="text-sm text-slate-400">
                      {t('from', 'de')} {formatValue(metric.before, metric.unit)}
                    </div>
                    <div className={`text-sm font-medium ${improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {improvement > 0 ? '+' : ''}{improvement.toFixed(1)}% {t('improvement', 'mejora')}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {viewMode === 'story' && (
          <Card className="p-8 bg-slate-800 border-slate-700">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t('Transformation Journey', 'Viaje de Transformación')}
              </h3>
              
              <div className="space-y-8">
                {transformationStory.map((story, index) => (
                  <div key={index} className={`flex gap-6 ${currentWeek >= story.week ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        currentWeek >= story.week ? 'bg-green-600' : 'bg-slate-600'
                      }`}>
                        {currentWeek >= story.week ? 
                          <CheckCircle className="w-6 h-6 text-white" /> : 
                          <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                        }
                      </div>
                      {index < transformationStory.length - 1 && (
                        <div className="w-0.5 h-16 bg-slate-600 mt-2"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-white">{story.title}</h4>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                          {t('Week', 'Semana')} {story.week}
                        </Badge>
                      </div>
                      <p className="text-slate-300">{story.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('See Your Own Cinematic Transformation', 'Ve Tu Propia Transformación Cinematográfica')}
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              {t(
                'Every pilot becomes a cinematic case study with traceable ROI and compelling transformation narrative. This is how OVERWATCH³ delivers VC-grade proof.',
                'Cada piloto se convierte en un caso de estudio cinematográfico con ROI trazable y narrativa de transformación convincente. Así es como OVERWATCH³ entrega prueba de grado VC.'
              )}
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Play className="w-4 h-4 mr-2" />
                {t('Start Your Pilot', 'Iniciar Tu Piloto')}
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600">
                <Film className="w-4 h-4 mr-2" />
                {t('Request Demo', 'Solicitar Demo')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}