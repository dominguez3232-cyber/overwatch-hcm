import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Zap,
  Star,
  ArrowRight,
  BarChart3,
  Users,
  DollarSign,
  Gauge
} from 'lucide-react';

interface UserBehaviorData {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  currentModule: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  recentInteractions: string[];
  timeSpentByModule: Record<string, number>;
  mostViewedMetrics: string[];
  lastActionTimestamp: number;
  sessionDuration: number;
  engagementLevel: 'low' | 'medium' | 'high';
}

interface MetricPerformanceData {
  metricId: string;
  currentValue: number;
  targetValue: number;
  trend: 'improving' | 'declining' | 'stable';
  variance: number;
  lastUpdated: number;
  criticalityLevel: 'low' | 'medium' | 'high' | 'critical';
}

interface BusinessContextData {
  companySize: 'startup' | 'scaleup' | 'enterprise';
  industry: 'healthcare' | 'fintech' | 'ecommerce' | 'manufacturing' | 'saas' | 'services';
  growthStage: 'seed' | 'series-a' | 'series-b' | 'growth' | 'mature';
  quarterlyGoals: string[];
  painPoints: string[];
  competitivePressure: 'low' | 'medium' | 'high';
}

interface RecommendationAction {
  id: string;
  type: 'immediate' | 'strategic' | 'preventive' | 'opportunistic';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  reasoning: string;
  expectedImpact: string;
  timeToImplement: string;
  successMetrics: string[];
  relatedOverlays: string[];
  stakeholderSpecific: boolean;
  industrySpecific: boolean;
  confidence: number; // 0-100
}

interface CoachingRecommendationAIProps {
  userBehavior: UserBehaviorData;
  metricPerformance: MetricPerformanceData[];
  businessContext: BusinessContextData;
  language: 'en' | 'es';
  onActionSelect: (action: RecommendationAction) => void;
  onRecommendationDismiss: (recommendationId: string) => void;
  className?: string;
}

export function CoachingRecommendationAI({
  userBehavior,
  metricPerformance,
  businessContext,
  language,
  onActionSelect,
  onRecommendationDismiss,
  className = ""
}: CoachingRecommendationAIProps) {
  const [recommendations, setRecommendations] = useState<RecommendationAction[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiConfidence, setAiConfidence] = useState(0);
  const [analysisDepth, setAnalysisDepth] = useState<'surface' | 'deep' | 'comprehensive'>('deep');

  // AI Analysis Engine
  const analyzeAndGenerateRecommendations = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newRecommendations: RecommendationAction[] = [];
    let totalConfidence = 0;

    // 1. PERFORMANCE-BASED RECOMMENDATIONS
    const criticalMetrics = metricPerformance.filter(m => m.criticalityLevel === 'critical');
    const decliningMetrics = metricPerformance.filter(m => m.trend === 'declining');
    
    if (criticalMetrics.length > 0) {
      newRecommendations.push({
        id: 'critical-metric-alert',
        type: 'immediate',
        priority: 'critical',
        title: language === 'en' ? 'Critical Metric Alert' : 'Alerta de Métrica Crítica',
        description: language === 'en' 
          ? `${criticalMetrics.length} critical metrics require immediate attention`
          : `${criticalMetrics.length} métricas críticas requieren atención inmediata`,
        reasoning: language === 'en'
          ? 'AI detected metrics significantly below target with high business impact'
          : 'IA detectó métricas significativamente debajo del objetivo con alto impacto empresarial',
        expectedImpact: language === 'en' ? '15-30% improvement in 30 days' : '15-30% mejora en 30 días',
        timeToImplement: language === 'en' ? '1-3 days' : '1-3 días',
        successMetrics: ['Metric recovery to target', 'Reduced variance', 'Stakeholder confidence'],
        relatedOverlays: criticalMetrics.map(m => m.metricId),
        stakeholderSpecific: true,
        industrySpecific: false,
        confidence: 95
      });
      totalConfidence += 95;
    }

    // 2. BEHAVIORAL PATTERN RECOMMENDATIONS
    if (userBehavior.engagementLevel === 'low') {
      newRecommendations.push({
        id: 'engagement-boost',
        type: 'strategic',
        priority: 'medium',
        title: language === 'en' ? 'Increase Platform Engagement' : 'Aumentar Participación en Plataforma',
        description: language === 'en'
          ? 'AI suggests personalized coaching paths to increase engagement'
          : 'IA sugiere rutas de coaching personalizadas para aumentar participación',
        reasoning: language === 'en'
          ? 'Low engagement patterns detected. Personalized content increases retention by 60%'
          : 'Patrones de baja participación detectados. Contenido personalizado aumenta retención en 60%',
        expectedImpact: language === 'en' ? '60% increase in session time' : '60% aumento en tiempo de sesión',
        timeToImplement: language === 'en' ? '1 week' : '1 semana',
        successMetrics: ['Session duration', 'Feature adoption', 'Return frequency'],
        relatedOverlays: userBehavior.mostViewedMetrics,
        stakeholderSpecific: true,
        industrySpecific: false,
        confidence: 78
      });
      totalConfidence += 78;
    }

    // 3. INDUSTRY-SPECIFIC RECOMMENDATIONS
    const industryInsights = getIndustrySpecificInsights(businessContext.industry, businessContext.growthStage);
    if (industryInsights) {
      newRecommendations.push(industryInsights);
      totalConfidence += industryInsights.confidence;
    }

    // 4. STAKEHOLDER-SPECIFIC RECOMMENDATIONS
    const stakeholderInsights = getStakeholderSpecificInsights(userBehavior.stakeholder, userBehavior.currentModule);
    if (stakeholderInsights) {
      newRecommendations.push(stakeholderInsights);
      totalConfidence += stakeholderInsights.confidence;
    }

    // 5. OPPORTUNITY IDENTIFICATION
    const opportunityInsight = identifyGrowthOpportunities(metricPerformance, businessContext);
    if (opportunityInsight) {
      newRecommendations.push(opportunityInsight);
      totalConfidence += opportunityInsight.confidence;
    }

    // 6. PREDICTIVE RECOMMENDATIONS
    const predictiveInsight = generatePredictiveRecommendations(userBehavior, metricPerformance);
    if (predictiveInsight) {
      newRecommendations.push(predictiveInsight);
      totalConfidence += predictiveInsight.confidence;
    }

    // Sort by priority and confidence
    const sortedRecommendations = newRecommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return b.confidence - a.confidence;
    });

    setRecommendations(sortedRecommendations);
    setAiConfidence(Math.round(totalConfidence / newRecommendations.length));
    setIsAnalyzing(false);
  }, [userBehavior, metricPerformance, businessContext, language]);

  // Industry-specific insights generator
  const getIndustrySpecificInsights = (industry: string, growthStage: string): RecommendationAction | null => {
    const insights = {
      healthcare: {
        title: language === 'en' ? 'Healthcare Compliance Optimization' : 'Optimización de Cumplimiento Sanitario',
        description: language === 'en' 
          ? 'Focus on patient safety metrics and regulatory compliance to improve outcomes'
          : 'Enfócate en métricas de seguridad del paciente y cumplimiento regulatorio para mejorar resultados',
        expectedImpact: language === 'en' ? '25% reduction in compliance risks' : '25% reducción en riesgos de cumplimiento'
      },
      fintech: {
        title: language === 'en' ? 'Fintech Risk Management' : 'Gestión de Riesgos Fintech',
        description: language === 'en'
          ? 'Optimize fraud detection and regulatory compliance for sustainable growth'
          : 'Optimiza detección de fraude y cumplimiento regulatorio para crecimiento sostenible',
        expectedImpact: language === 'en' ? '40% improvement in risk metrics' : '40% mejora en métricas de riesgo'
      },
      saas: {
        title: language === 'en' ? 'SaaS Growth Optimization' : 'Optimización de Crecimiento SaaS',
        description: language === 'en'
          ? 'Focus on Magic Number improvement and churn reduction strategies'
          : 'Enfócate en mejora del Número Mágico y estrategias de reducción de abandono',
        expectedImpact: language === 'en' ? '30% improvement in unit economics' : '30% mejora en economías unitarias'
      }
    };

    const insight = insights[industry as keyof typeof insights];
    if (!insight) return null;

    return {
      id: `industry-${industry}`,
      type: 'strategic',
      priority: 'high',
      title: insight.title,
      description: insight.description,
      reasoning: language === 'en' 
        ? `Industry-specific analysis for ${industry} companies in ${growthStage} stage`
        : `Análisis específico de industria para empresas ${industry} en etapa ${growthStage}`,
      expectedImpact: insight.expectedImpact,
      timeToImplement: language === 'en' ? '2-4 weeks' : '2-4 semanas',
      successMetrics: ['Industry benchmarks', 'Compliance scores', 'Risk reduction'],
      relatedOverlays: [`${industry}_specific_metrics`],
      stakeholderSpecific: false,
      industrySpecific: true,
      confidence: 85
    };
  };

  // Stakeholder-specific insights generator
  const getStakeholderSpecificInsights = (stakeholder: string, currentModule: string): RecommendationAction | null => {
    const insights = {
      CEO: {
        title: language === 'en' ? 'Strategic Vision Alignment' : 'Alineación de Visión Estratégica',
        description: language === 'en'
          ? 'Align organizational metrics with strategic vision for maximum impact'
          : 'Alinea métricas organizacionales con visión estratégica para máximo impacto',
        focus: 'Leadership and strategic direction'
      },
      CFO: {
        title: language === 'en' ? 'Financial Optimization' : 'Optimización Financiera',
        description: language === 'en'
          ? 'Optimize financial metrics for improved profitability and cash flow'
          : 'Optimiza métricas financieras para mejorar rentabilidad y flujo de efectivo',
        focus: 'Financial performance and efficiency'
      },
      CHRO: {
        title: language === 'en' ? 'People Strategy Enhancement' : 'Mejora de Estrategia de Personas',
        description: language === 'en'
          ? 'Focus on talent retention and engagement for sustainable growth'
          : 'Enfócate en retención de talento y compromiso para crecimiento sostenible',
        focus: 'Human capital and culture'
      },
      COO: {
        title: language === 'en' ? 'Operational Excellence' : 'Excelencia Operacional',
        description: language === 'en'
          ? 'Streamline operations for improved efficiency and scalability'
          : 'Optimiza operaciones para mejorar eficiencia y escalabilidad',
        focus: 'Process optimization and execution'
      }
    };

    const insight = insights[stakeholder as keyof typeof insights];
    if (!insight) return null;

    return {
      id: `stakeholder-${stakeholder}`,
      type: 'strategic',
      priority: 'high',
      title: insight.title,
      description: insight.description,
      reasoning: language === 'en'
        ? `Stakeholder-specific recommendation based on ${stakeholder} focus areas and current ${currentModule} usage`
        : `Recomendación específica del interesado basada en áreas de enfoque ${stakeholder} y uso actual de ${currentModule}`,
      expectedImpact: language === 'en' ? '20-35% improvement in key metrics' : '20-35% mejora en métricas clave',
      timeToImplement: language === 'en' ? '1-2 weeks' : '1-2 semanas',
      successMetrics: ['Stakeholder KPIs', 'Department performance', 'Strategic alignment'],
      relatedOverlays: [`${stakeholder.toLowerCase()}_${currentModule.toLowerCase()}`],
      stakeholderSpecific: true,
      industrySpecific: false,
      confidence: 82
    };
  };

  // Growth opportunity identification
  const identifyGrowthOpportunities = (metrics: MetricPerformanceData[], context: BusinessContextData): RecommendationAction | null => {
    const improvingMetrics = metrics.filter(m => m.trend === 'improving').length;
    const totalMetrics = metrics.length;
    const improvementRatio = improvingMetrics / totalMetrics;

    if (improvementRatio > 0.7) {
      return {
        id: 'growth-opportunity',
        type: 'opportunistic',
        priority: 'high',
        title: language === 'en' ? 'Scale Success Patterns' : 'Escalar Patrones de Éxito',
        description: language === 'en'
          ? 'Your metrics show strong positive momentum - time to accelerate growth'
          : 'Tus métricas muestran fuerte impulso positivo - tiempo de acelerar crecimiento',
        reasoning: language === 'en'
          ? `${Math.round(improvementRatio * 100)}% of metrics trending positively indicates readiness for scaling`
          : `${Math.round(improvementRatio * 100)}% de métricas con tendencia positiva indica preparación para escalar`,
        expectedImpact: language === 'en' ? '50-100% acceleration in growth' : '50-100% aceleración en crecimiento',
        timeToImplement: language === 'en' ? '2-6 weeks' : '2-6 semanas',
        successMetrics: ['Revenue growth', 'Market expansion', 'Team scaling'],
        relatedOverlays: ['growth_scaling', 'market_expansion'],
        stakeholderSpecific: false,
        industrySpecific: false,
        confidence: 88
      };
    }

    return null;
  };

  // Predictive recommendations
  const generatePredictiveRecommendations = (behavior: UserBehaviorData, metrics: MetricPerformanceData[]): RecommendationAction | null => {
    const recentEngagement = behavior.sessionDuration > 300; // 5 minutes
    const metricVolatility = metrics.filter(m => Math.abs(m.variance) > 0.2).length;

    if (recentEngagement && metricVolatility > 0) {
      return {
        id: 'predictive-stabilization',
        type: 'preventive',
        priority: 'medium',
        title: language === 'en' ? 'Predictive Metric Stabilization' : 'Estabilización Predictiva de Métricas',
        description: language === 'en'
          ? 'AI predicts potential metric instability - proactive action recommended'
          : 'IA predice potencial inestabilidad de métricas - acción proactiva recomendada',
        reasoning: language === 'en'
          ? 'Pattern analysis suggests 68% probability of metric degradation without intervention'
          : 'Análisis de patrones sugiere 68% probabilidad de degradación de métricas sin intervención',
        expectedImpact: language === 'en' ? 'Prevent 20-40% metric decline' : 'Prevenir declive de métricas del 20-40%',
        timeToImplement: language === 'en' ? '3-5 days' : '3-5 días',
        successMetrics: ['Metric stability', 'Variance reduction', 'Trend improvement'],
        relatedOverlays: ['predictive_analytics', 'metric_stability'],
        stakeholderSpecific: false,
        industrySpecific: false,
        confidence: 72
      };
    }

    return null;
  };

  // Run analysis on component mount and data changes
  useEffect(() => {
    analyzeAndGenerateRecommendations();
  }, [analyzeAndGenerateRecommendations]);

  // Get priority icon and color
  const getPriorityDisplay = (priority: string) => {
    const displays = {
      critical: { icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
      high: { icon: TrendingUp, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
      medium: { icon: Target, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
      low: { icon: Lightbulb, color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' }
    };
    return displays[priority as keyof typeof displays] || displays.medium;
  };

  // Get type icon
  const getTypeIcon = (type: string) => {
    const icons = {
      immediate: Zap,
      strategic: Brain,
      preventive: CheckCircle,
      opportunistic: Star
    };
    return icons[type as keyof typeof icons] || Brain;
  };

  return (
    <div className={className}>
      {/* AI Analysis Header */}
      <Card className="mb-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {language === 'en' ? 'AI Strategic Coach' : 'Coach Estratégico IA'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Personalized recommendations based on your behavior and metrics'
                    : 'Recomendaciones personalizadas basadas en tu comportamiento y métricas'
                  }
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">{aiConfidence}%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'AI Confidence' : 'Confianza IA'}
              </div>
            </div>
          </div>

          {isAnalyzing && (
            <div className="flex items-center gap-2 text-blue-400">
              <Brain className="w-4 h-4 animate-pulse" />
              <span className="text-sm">
                {language === 'en' ? 'Analyzing patterns and generating insights...' : 'Analizando patrones y generando insights...'}
              </span>
            </div>
          )}

          {!isAnalyzing && (
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">
                  {recommendations.filter(r => r.priority === 'critical' || r.priority === 'high').length}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'High Priority' : 'Alta Prioridad'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">
                  {recommendations.filter(r => r.type === 'strategic').length}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Strategic' : 'Estratégico'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">
                  {recommendations.filter(r => r.type === 'immediate').length}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Immediate' : 'Inmediato'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">
                  {recommendations.filter(r => r.industrySpecific).length}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Industry Specific' : 'Específico Industria'}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((recommendation) => {
          const priorityDisplay = getPriorityDisplay(recommendation.priority);
          const TypeIcon = getTypeIcon(recommendation.type);
          const PriorityIcon = priorityDisplay.icon;

          return (
            <Card 
              key={recommendation.id} 
              className={`${priorityDisplay.bg} ${priorityDisplay.border} transition-all hover:scale-[1.02]`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${priorityDisplay.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <TypeIcon className={`w-6 h-6 ${priorityDisplay.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {recommendation.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {recommendation.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge className={`${priorityDisplay.bg} ${priorityDisplay.color} ${priorityDisplay.border}`}>
                          <PriorityIcon className="w-3 h-3 mr-1" />
                          {recommendation.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {recommendation.confidence}% {language === 'en' ? 'confidence' : 'confianza'}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-blue-400" />
                          <span className="font-medium">
                            {language === 'en' ? 'Expected Impact:' : 'Impacto Esperado:'}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground pl-6">
                          {recommendation.expectedImpact}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="font-medium">
                            {language === 'en' ? 'Time to Implement:' : 'Tiempo de Implementación:'}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground pl-6">
                          {recommendation.timeToImplement}
                        </p>
                      </div>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-400">
                          {language === 'en' ? 'AI Reasoning:' : 'Razonamiento IA:'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {recommendation.reasoning}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {recommendation.stakeholderSpecific && (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            {language === 'en' ? 'Role-Specific' : 'Específico del Rol'}
                          </Badge>
                        )}
                        {recommendation.industrySpecific && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                            <BarChart3 className="w-3 h-3 mr-1" />
                            {language === 'en' ? 'Industry-Specific' : 'Específico de Industria'}
                          </Badge>
                        )}
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                          <Gauge className="w-3 h-3 mr-1" />
                          {recommendation.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRecommendationDismiss(recommendation.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {language === 'en' ? 'Dismiss' : 'Descartar'}
                        </Button>
                        <Button
                          onClick={() => onActionSelect(recommendation)}
                          className={`${priorityDisplay.bg} ${priorityDisplay.color} hover:opacity-80`}
                        >
                          {language === 'en' ? 'Take Action' : 'Tomar Acción'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {recommendations.length === 0 && !isAnalyzing && (
        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-green-400 mb-2">
              {language === 'en' ? 'All Optimized!' : '¡Todo Optimizado!'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'AI analysis shows your metrics are performing well. Keep up the excellent work!'
                : 'El análisis de IA muestra que tus métricas están funcionando bien. ¡Continúa con el excelente trabajo!'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Utility hook for recommendation management
export function useCoachingRecommendations(
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO',
  language: 'en' | 'es'
) {
  const [recommendations, setRecommendations] = useState<RecommendationAction[]>([]);
  const [dismissedRecommendations, setDismissedRecommendations] = useState<string[]>([]);

  const addRecommendation = useCallback((recommendation: RecommendationAction) => {
    setRecommendations(prev => [...prev, recommendation]);
  }, []);

  const dismissRecommendation = useCallback((recommendationId: string) => {
    setDismissedRecommendations(prev => [...prev, recommendationId]);
    setRecommendations(prev => prev.filter(r => r.id !== recommendationId));
  }, []);

  const getActiveRecommendations = useCallback(() => {
    return recommendations.filter(r => !dismissedRecommendations.includes(r.id));
  }, [recommendations, dismissedRecommendations]);

  return {
    recommendations: getActiveRecommendations(),
    addRecommendation,
    dismissRecommendation,
    dismissedCount: dismissedRecommendations.length
  };
}