import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  ArrowRight,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  BarChart3,
  Zap,
  Brain,
  Heart,
  Eye,
  Navigation
} from 'lucide-react';

interface CustomerJourneyMapperProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

interface JourneyStage {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  phase: 'awareness' | 'consideration' | 'decision' | 'onboarding' | 'retention' | 'advocacy';
  duration: string;
  durationEs: string;
  touchpoints: Touchpoint[];
  emotions: EmotionPoint[];
  painPoints: string[];
  painPointsEs: string[];
  opportunities: string[];
  opportunitiesEs: string[];
  metrics: StageMetric[];
}

interface Touchpoint {
  id: string;
  name: string;
  nameEs: string;
  channel: 'website' | 'email' | 'phone' | 'in-person' | 'social' | 'mobile';
  satisfaction: number;
  effort: number;
  importance: number;
}

interface EmotionPoint {
  stage: number;
  emotion: 'excited' | 'curious' | 'confused' | 'frustrated' | 'satisfied' | 'delighted';
  intensity: number;
}

interface StageMetric {
  name: string;
  nameEs: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

const CustomerJourneyMapper: React.FC<CustomerJourneyMapperProps> = ({
  language,
  currentMode,
  onNavigate
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('awareness');
  const [selectedPersona, setSelectedPersona] = useState<string>('founder');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'analytics'>('overview');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const text = {
    en: {
      title: 'Customer Journey Intelligence Center',
      subtitle: 'Advisory-Grade Journey Mapping & Optimization',
      personas: {
        founder: 'Founder/CEO',
        hrLeader: 'HR Leader',
        employee: 'Employee',
        investor: 'Investor'
      },
      stages: {
        awareness: 'Awareness',
        consideration: 'Consideration',
        decision: 'Decision',
        onboarding: 'Onboarding',
        retention: 'Retention',
        advocacy: 'Advocacy'
      },
      metrics: {
        satisfaction: 'Satisfaction Score',
        effort: 'Effort Score',
        conversion: 'Conversion Rate',
        retention: 'Retention Rate',
        nps: 'Net Promoter Score',
        ltv: 'Lifetime Value'
      },
      actions: {
        analyze: 'Analyze Journey',
        optimize: 'Optimize Touchpoints',
        export: 'Export Report',
        simulate: 'Simulate Changes'
      },
      insights: {
        title: 'AI-Powered Insights',
        recommendation: 'Strategic Recommendations',
        prediction: 'Predictive Analytics'
      }
    },
    es: {
      title: 'Centro de Inteligencia de Viaje del Cliente',
      subtitle: 'Mapeo y Optimización de Viaje Grado Asesor',
      personas: {
        founder: 'Fundador/CEO',
        hrLeader: 'Líder de RRHH',
        employee: 'Empleado',
        investor: 'Inversionista'
      },
      stages: {
        awareness: 'Conocimiento',
        consideration: 'Consideración',
        decision: 'Decisión',
        onboarding: 'Incorporación',
        retention: 'Retención',
        advocacy: 'Promoción'
      },
      metrics: {
        satisfaction: 'Puntuación Satisfacción',
        effort: 'Puntuación Esfuerzo',
        conversion: 'Tasa de Conversión',
        retention: 'Tasa de Retención',
        nps: 'Puntuación Promotor Neto',
        ltv: 'Valor de Vida'
      },
      actions: {
        analyze: 'Analizar Viaje',
        optimize: 'Optimizar Puntos Contacto',
        export: 'Exportar Reporte',
        simulate: 'Simular Cambios'
      },
      insights: {
        title: 'Insights Potenciados por IA',
        recommendation: 'Recomendaciones Estratégicas',
        prediction: 'Analítica Predictiva'
      }
    }
  };

  const journeyStages: JourneyStage[] = [
    {
      id: 'awareness',
      name: 'Awareness',
      nameEs: 'Conocimiento',
      description: 'Initial discovery and problem recognition',
      descriptionEs: 'Descubrimiento inicial y reconocimiento del problema',
      phase: 'awareness',
      duration: '1-2 weeks',
      durationEs: '1-2 semanas',
      touchpoints: [
        { id: 'website', name: 'Website Visit', nameEs: 'Visita Web', channel: 'website', satisfaction: 85, effort: 20, importance: 90 },
        { id: 'content', name: 'Content Discovery', nameEs: 'Descubrimiento Contenido', channel: 'social', satisfaction: 78, effort: 15, importance: 85 },
        { id: 'referral', name: 'Referral', nameEs: 'Referencia', channel: 'in-person', satisfaction: 92, effort: 10, importance: 95 }
      ],
      emotions: [
        { stage: 1, emotion: 'curious', intensity: 70 },
        { stage: 2, emotion: 'excited', intensity: 60 },
        { stage: 3, emotion: 'confused', intensity: 40 }
      ],
      painPoints: ['Information overload', 'Complex terminology', 'Unclear value proposition'],
      painPointsEs: ['Sobrecarga de información', 'Terminología compleja', 'Propuesta de valor poco clara'],
      opportunities: ['Simplified messaging', 'Clear ROI calculator', 'Interactive demos'],
      opportunitiesEs: ['Mensajería simplificada', 'Calculadora ROI clara', 'Demos interactivos'],
      metrics: [
        { name: 'Website Traffic', nameEs: 'Tráfico Web', value: 15420, target: 18000, unit: 'visits', trend: 'up' },
        { name: 'Content Engagement', nameEs: 'Engagement Contenido', value: 67, target: 75, unit: '%', trend: 'up' },
        { name: 'Brand Awareness', nameEs: 'Conocimiento Marca', value: 34, target: 45, unit: '%', trend: 'stable' }
      ]
    },
    {
      id: 'consideration',
      name: 'Consideration',
      nameEs: 'Consideración',
      description: 'Evaluating solutions and building trust',
      descriptionEs: 'Evaluando soluciones y construyendo confianza',
      phase: 'consideration',
      duration: '2-4 weeks',
      durationEs: '2-4 semanas',
      touchpoints: [
        { id: 'demo', name: 'Product Demo', nameEs: 'Demo Producto', channel: 'website', satisfaction: 88, effort: 35, importance: 95 },
        { id: 'consultation', name: 'Sales Consultation', nameEs: 'Consulta Ventas', channel: 'phone', satisfaction: 91, effort: 45, importance: 90 },
        { id: 'case-study', name: 'Case Studies', nameEs: 'Casos de Estudio', channel: 'email', satisfaction: 82, effort: 25, importance: 80 }
      ],
      emotions: [
        { stage: 1, emotion: 'curious', intensity: 80 },
        { stage: 2, emotion: 'excited', intensity: 75 },
        { stage: 3, emotion: 'satisfied', intensity: 70 }
      ],
      painPoints: ['Feature comparison complexity', 'Pricing transparency', 'Implementation concerns'],
      painPointsEs: ['Complejidad comparación características', 'Transparencia precios', 'Preocupaciones implementación'],
      opportunities: ['Competitor comparison tool', 'Transparent pricing', 'Implementation roadmap'],
      opportunitiesEs: ['Herramienta comparación competidores', 'Precios transparentes', 'Hoja ruta implementación'],
      metrics: [
        { name: 'Demo Requests', nameEs: 'Solicitudes Demo', value: 284, target: 350, unit: 'requests', trend: 'up' },
        { name: 'Conversion Rate', nameEs: 'Tasa Conversión', value: 23, target: 28, unit: '%', trend: 'up' },
        { name: 'Sales Qualified Leads', nameEs: 'Leads Calificados Ventas', value: 67, target: 80, unit: 'leads', trend: 'stable' }
      ]
    }
  ];

  const emotionColors = {
    excited: '#22c55e',
    curious: '#3b82f6',
    confused: '#f59e0b',
    frustrated: '#ef4444',
    satisfied: '#8b5cf6',
    delighted: '#ec4899'
  };

  const channelIcons = {
    website: <Eye className="w-4 h-4" />,
    email: <MessageSquare className="w-4 h-4" />,
    phone: <Clock className="w-4 h-4" />,
    'in-person': <Users className="w-4 h-4" />,
    social: <Heart className="w-4 h-4" />,
    mobile: <Navigation className="w-4 h-4" />
  };

  const runJourneyAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const currentStage = journeyStages.find(stage => stage.id === selectedStage);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{text[language].title}</h1>
            <p className="text-muted-foreground">{text[language].subtitle}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-2">
            {Object.entries(text[language].personas).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedPersona === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPersona(key)}
                className="text-xs"
              >
                {label}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'overview' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('overview')}
            >
              <Eye className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Overview' : 'Resumen'}
            </Button>
            <Button
              variant={viewMode === 'detailed' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('detailed')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Detailed' : 'Detallado'}
            </Button>
            <Button
              variant={viewMode === 'analytics' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('analytics')}
            >
              <Brain className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Analytics' : 'Analítica'}
            </Button>
          </div>

          <Button
            onClick={runJourneyAnalysis}
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                {language === 'en' ? 'Analyzing...' : 'Analizando...'}
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                {text[language].actions.analyze}
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Journey Visualization */}
      <div className="grid gap-6">
        {/* Journey Stages Timeline */}
        <Card className="command-center-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              {language === 'en' ? 'Customer Journey Stages' : 'Etapas del Viaje del Cliente'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`relative cursor-pointer transition-all ${
                    selectedStage === stage.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedStage(stage.id)}
                  whileHover={{ y: -2 }}
                >
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedStage === stage.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-card/50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedStage === stage.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="font-medium">{language === 'en' ? stage.name : stage.nameEs}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {language === 'en' ? stage.description : stage.descriptionEs}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {language === 'en' ? stage.duration : stage.durationEs}
                    </Badge>
                  </div>
                  
                  {index < journeyStages.length - 1 && (
                    <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Emotion Journey */}
            {currentStage && (
              <div className="mt-6">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {language === 'en' ? 'Emotional Journey' : 'Viaje Emocional'}
                </h4>
                <div className="flex items-center gap-4">
                  {currentStage.emotions.map((emotion, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: emotionColors[emotion.emotion] }}
                      />
                      <span className="text-xs capitalize">
                        {emotion.emotion}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {emotion.intensity}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stage Details */}
        {currentStage && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Touchpoints */}
            <Card className="command-center-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {language === 'en' ? 'Touchpoints' : 'Puntos de Contacto'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStage.touchpoints.map((touchpoint) => (
                  <div key={touchpoint.id} className="p-3 bg-card/30 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      {channelIcons[touchpoint.channel]}
                      <span className="font-medium text-sm">
                        {language === 'en' ? touchpoint.name : touchpoint.nameEs}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Satisfaction</span>
                        <div className="flex items-center gap-1">
                          <Progress value={touchpoint.satisfaction} className="h-1 flex-1" />
                          <span>{touchpoint.satisfaction}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Effort</span>
                        <div className="flex items-center gap-1">
                          <Progress value={touchpoint.effort} className="h-1 flex-1" />
                          <span>{touchpoint.effort}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Importance</span>
                        <div className="flex items-center gap-1">
                          <Progress value={touchpoint.importance} className="h-1 flex-1" />
                          <span>{touchpoint.importance}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pain Points & Opportunities */}
            <Card className="command-center-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {language === 'en' ? 'Pain Points & Opportunities' : 'Puntos de Dolor y Oportunidades'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-red-400 mb-2 flex items-center gap-1">
                    <ThumbsDown className="w-3 h-3" />
                    {language === 'en' ? 'Pain Points' : 'Puntos de Dolor'}
                  </h4>
                  <ul className="space-y-1">
                    {(language === 'en' ? currentStage.painPoints : currentStage.painPointsEs).map((point, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-green-400 mb-2 flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    {language === 'en' ? 'Opportunities' : 'Oportunidades'}
                  </h4>
                  <ul className="space-y-1">
                    {(language === 'en' ? currentStage.opportunities : currentStage.opportunitiesEs).map((opportunity, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Stage Metrics */}
            <Card className="command-center-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {language === 'en' ? 'Stage Metrics' : 'Métricas de Etapa'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStage.metrics.map((metric) => (
                  <div key={metric.name} className="p-3 bg-card/30 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">
                        {language === 'en' ? metric.name : metric.nameEs}
                      </span>
                      <div className={`text-xs px-2 py-1 rounded ${
                        metric.trend === 'up' ? 'bg-green-500/20 text-green-400' :
                        metric.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">
                        {metric.value.toLocaleString()}{metric.unit !== 'visits' && metric.unit !== 'requests' && metric.unit !== 'leads' ? metric.unit : ''}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        / {metric.target.toLocaleString()}{metric.unit !== 'visits' && metric.unit !== 'requests' && metric.unit !== 'leads' ? metric.unit : ''}
                      </span>
                    </div>
                    <Progress 
                      value={(metric.value / metric.target) * 100} 
                      className="h-2 mt-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* AI Insights */}
        {isAnalyzing && (
          <Card className="command-center-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <div>
                  <h3 className="font-medium">{text[language].insights.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Analyzing customer journey patterns and generating strategic recommendations...'
                      : 'Analizando patrones de viaje del cliente y generando recomendaciones estratégicas...'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => onNavigate('platform-navigator')}>
            <Navigation className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Navigator' : 'Volver a Navegador'}
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <BarChart3 className="w-4 h-4 mr-2" />
            {text[language].actions.export}
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <Star className="w-4 h-4 mr-2" />
            {text[language].actions.optimize}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourneyMapper;