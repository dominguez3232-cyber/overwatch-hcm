import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  Building2, 
  CreditCard, 
  Lightbulb, 
  BarChart3, 
  MapPin, 
  Shuffle, 
  DollarSign, 
  Zap, 
  Target,
  Brain,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Trophy,
  Eye
} from 'lucide-react';

interface StrategicPerformanceAssessmentProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface FactorScore {
  score: number;
  weight: number;
}

interface AssessmentScores {
  endowment: {
    size: FactorScore;
    debt: FactorScore;
    'R&D_intensity': FactorScore;
  };
  trends: {
    industry_growth: FactorScore;
    market_position: FactorScore;
    geography: FactorScore;
  };
  moves: {
    'M&A': FactorScore;
    capital_reallocation: FactorScore;
    productivity: FactorScore;
    resource_diff: FactorScore;
  };
}

export function StrategicPerformanceAssessment({ 
  language, 
  currentMode = 'strategy',
  onNavigate 
}: StrategicPerformanceAssessmentProps) {
  const [activeTab, setActiveTab] = useState<'assessment' | 'results' | 'insights' | 'actions'>('assessment');
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  // Initial scoring structure based on your framework
  const [scores, setScores] = useState<AssessmentScores>({
    endowment: {
      size: { score: 3, weight: 0.10 },
      debt: { score: 4, weight: 0.10 },
      'R&D_intensity': { score: 2, weight: 0.10 }
    },
    trends: {
      industry_growth: { score: 4, weight: 0.10 },
      market_position: { score: 3, weight: 0.10 },
      geography: { score: 3, weight: 0.05 }
    },
    moves: {
      'M&A': { score: 2, weight: 0.15 },
      capital_reallocation: { score: 3, weight: 0.10 },
      productivity: { score: 4, weight: 0.10 },
      resource_diff: { score: 3, weight: 0.10 }
    }
  });

  const labels = {
    en: {
      title: "Strategic Performance Assessment",
      subtitle: "ETM Framework: Endowment-Trends-Moves Analysis",
      description: "Comprehensive strategic positioning assessment using McKinsey-inspired methodology",
      
      // Tabs
      assessment: "Assessment",
      results: "Results",
      insights: "Strategic Insights",
      actions: "Action Plans",
      
      // Dimensions
      endowment: "Endowment",
      trends: "Trends", 
      moves: "Strategic Moves",
      
      endowmentDesc: "Your company's foundational resources and capabilities",
      trendsDesc: "External market forces and positioning dynamics",
      movesDesc: "Strategic initiatives and competitive actions",
      
      // Endowment factors
      size: "Organization Size",
      debt: "Debt Management",
      "R&D_intensity": "R&D Intensity",
      
      sizeDesc: "Scale advantages, market presence, and resource base",
      debtDesc: "Financial leverage optimization and capital structure",
      rdDesc: "Innovation capability and technology investment",
      
      // Trends factors
      industry_growth: "Industry Growth",
      market_position: "Market Position",
      geography: "Geographic Advantage",
      
      industryDesc: "Market expansion and sector momentum",
      positionDesc: "Competitive positioning and market share",
      geoDesc: "Geographic market advantages and presence",
      
      // Moves factors
      "M&A": "M&A Strategy",
      capital_reallocation: "Capital Reallocation",
      productivity: "Productivity Enhancement",
      resource_diff: "Resource Differentiation",
      
      maDesc: "Merger and acquisition strategic execution",
      capitalDesc: "Strategic capital deployment and optimization",
      productivityDesc: "Operational efficiency and performance improvement",
      resourceDesc: "Unique resource development and competitive moats",
      
      // Scoring
      score: "Score",
      weight: "Weight",
      weightedScore: "Weighted Score",
      
      // Results
      overallScore: "Overall Strategic Score",
      dimensionScores: "Dimension Scores", 
      performanceSummary: "Performance Summary",
      
      // Action recommendations
      recommendations: "Strategic Recommendations",
      priorityActions: "Priority Actions",
      quickWins: "Quick Wins",
      longTerm: "Long-term Initiatives",
      
      // Buttons
      completeAssessment: "Complete Assessment",
      generateInsights: "Generate Insights",
      createActionPlan: "Create Action Plan",
      exportResults: "Export Results",
      
      // Status
      excellent: "Excellent",
      good: "Good", 
      average: "Average",
      needsWork: "Needs Work",
      critical: "Critical"
    },
    es: {
      title: "Evaluación de Desempeño Estratégico",
      subtitle: "Marco ETM: Análisis de Dotación-Tendencias-Movimientos", 
      description: "Evaluación integral de posicionamiento estratégico usando metodología inspirada en McKinsey",
      
      // Tabs
      assessment: "Evaluación",
      results: "Resultados",
      insights: "Insights Estratégicos", 
      actions: "Planes de Acción",
      
      // Dimensions
      endowment: "Dotación",
      trends: "Tendencias",
      moves: "Movimientos Estratégicos",
      
      endowmentDesc: "Recursos y capacidades fundamentales de su empresa",
      trendsDesc: "Fuerzas externas del mercado y dinámicas de posicionamiento",
      movesDesc: "Iniciativas estratégicas y acciones competitivas",
      
      // Endowment factors
      size: "Tamaño Organizacional",
      debt: "Gestión de Deuda",
      "R&D_intensity": "Intensidad I+D",
      
      sizeDesc: "Ventajas de escala, presencia en el mercado y base de recursos",
      debtDesc: "Optimización del apalancamiento financiero y estructura de capital",
      rdDesc: "Capacidad de innovación e inversión en tecnología",
      
      // Trends factors  
      industry_growth: "Crecimiento de Industria",
      market_position: "Posición de Mercado",
      geography: "Ventaja Geográfica",
      
      industryDesc: "Expansión del mercado y momentum del sector",
      positionDesc: "Posicionamiento competitivo y cuota de mercado",
      geoDesc: "Ventajas geográficas del mercado y presencia",
      
      // Moves factors
      "M&A": "Estrategia M&A",
      capital_reallocation: "Reasignación de Capital",
      productivity: "Mejora de Productividad", 
      resource_diff: "Diferenciación de Recursos",
      
      maDesc: "Ejecución estratégica de fusiones y adquisiciones",
      capitalDesc: "Despliegue estratégico de capital y optimización",
      productivityDesc: "Eficiencia operacional y mejora de rendimiento",
      resourceDesc: "Desarrollo de recursos únicos y ventajas competitivas",
      
      // Scoring
      score: "Puntuación",
      weight: "Peso",
      weightedScore: "Puntuación Ponderada",
      
      // Results
      overallScore: "Puntuación Estratégica General",
      dimensionScores: "Puntuaciones por Dimensión",
      performanceSummary: "Resumen de Desempeño",
      
      // Action recommendations
      recommendations: "Recomendaciones Estratégicas",
      priorityActions: "Acciones Prioritarias",
      quickWins: "Victorias Rápidas",
      longTerm: "Iniciativas a Largo Plazo",
      
      // Buttons
      completeAssessment: "Completar Evaluación",
      generateInsights: "Generar Insights",
      createActionPlan: "Crear Plan de Acción",
      exportResults: "Exportar Resultados",
      
      // Status
      excellent: "Excelente",
      good: "Bueno",
      average: "Promedio", 
      needsWork: "Necesita Trabajo",
      critical: "Crítico"
    }
  };

  const currentLabels = labels[language];

  const updateScore = (dimension: keyof AssessmentScores, factor: string, score: number) => {
    setScores(prev => ({
      ...prev,
      [dimension]: {
        ...prev[dimension],
        [factor]: {
          ...prev[dimension][factor as keyof typeof prev[dimension]],
          score
        }
      }
    }));
  };

  const calculateDimensionScore = (dimension: keyof AssessmentScores): number => {
    const factors = Object.values(scores[dimension]);
    const weightedSum = factors.reduce((sum, factor) => sum + (factor.score * factor.weight), 0);
    const totalWeight = factors.reduce((sum, factor) => sum + factor.weight, 0);
    return totalWeight > 0 ? (weightedSum / totalWeight) * 20 : 0; // Scale to 100
  };

  const calculateOverallScore = (): number => {
    const endowmentScore = calculateDimensionScore('endowment');
    const trendsScore = calculateDimensionScore('trends'); 
    const movesScore = calculateDimensionScore('moves');
    return (endowmentScore + trendsScore + movesScore) / 3;
  };

  const getScoreStatus = (score: number): { label: string; color: string } => {
    if (score >= 80) return { label: currentLabels.excellent, color: 'text-green-400' };
    if (score >= 65) return { label: currentLabels.good, color: 'text-blue-400' };
    if (score >= 50) return { label: currentLabels.average, color: 'text-yellow-400' };
    if (score >= 35) return { label: currentLabels.needsWork, color: 'text-orange-400' };
    return { label: currentLabels.critical, color: 'text-red-400' };
  };

  const getFactorIcon = (factor: string) => {
    const iconMap: Record<string, JSX.Element> = {
      size: <Building2 className="w-5 h-5" />,
      debt: <CreditCard className="w-5 h-5" />,
      'R&D_intensity': <Lightbulb className="w-5 h-5" />,
      industry_growth: <TrendingUp className="w-5 h-5" />,
      market_position: <Target className="w-5 h-5" />,
      geography: <MapPin className="w-5 h-5" />,
      'M&A': <Shuffle className="w-5 h-5" />,
      capital_reallocation: <DollarSign className="w-5 h-5" />,
      productivity: <Zap className="w-5 h-5" />,
      resource_diff: <Trophy className="w-5 h-5" />
    };
    return iconMap[factor] || <BarChart3 className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-blue-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-3xl">{currentLabels.description}</p>
        </div>

        {/* Main Assessment Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="assessment">{currentLabels.assessment}</TabsTrigger>
            <TabsTrigger value="results">{currentLabels.results}</TabsTrigger>
            <TabsTrigger value="insights">{currentLabels.insights}</TabsTrigger>
            <TabsTrigger value="actions">{currentLabels.actions}</TabsTrigger>
          </TabsList>

          {/* Assessment Tab */}
          <TabsContent value="assessment" className="space-y-8">
            {/* Endowment Dimension */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentLabels.endowment}</h3>
                  <p className="text-gray-400">{currentLabels.endowmentDesc}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {Object.entries(scores.endowment).map(([factor, data]) => (
                  <Card key={factor} className="p-4 bg-gray-900 border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      {getFactorIcon(factor)}
                      <div>
                        <h4 className="font-bold text-white">{currentLabels[factor as keyof typeof currentLabels]}</h4>
                        <p className="text-xs text-gray-400">{currentLabels[`${factor}Desc` as keyof typeof currentLabels]}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{currentLabels.score}: {data.score}</span>
                        <span className="text-gray-400">{currentLabels.weight}: {(data.weight * 100).toFixed(0)}%</span>
                      </div>
                      
                      <Slider
                        value={[data.score]}
                        onValueChange={(value) => updateScore('endowment', factor, value[0])}
                        max={5}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>5</span>
                      </div>
                      
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {currentLabels.weightedScore}: {(data.score * data.weight * 20).toFixed(1)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Trends Dimension */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentLabels.trends}</h3>
                  <p className="text-gray-400">{currentLabels.trendsDesc}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {Object.entries(scores.trends).map(([factor, data]) => (
                  <Card key={factor} className="p-4 bg-gray-900 border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      {getFactorIcon(factor)}
                      <div>
                        <h4 className="font-bold text-white">{currentLabels[factor as keyof typeof currentLabels]}</h4>
                        <p className="text-xs text-gray-400">{currentLabels[`${factor === 'industry_growth' ? 'industry' : factor === 'market_position' ? 'position' : 'geo'}Desc` as keyof typeof currentLabels]}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{currentLabels.score}: {data.score}</span>
                        <span className="text-gray-400">{currentLabels.weight}: {(data.weight * 100).toFixed(0)}%</span>
                      </div>
                      
                      <Slider
                        value={[data.score]}
                        onValueChange={(value) => updateScore('trends', factor, value[0])}
                        max={5}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>5</span>
                      </div>
                      
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {currentLabels.weightedScore}: {(data.score * data.weight * 20).toFixed(1)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Strategic Moves Dimension */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <Target className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentLabels.moves}</h3>
                  <p className="text-gray-400">{currentLabels.movesDesc}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-4 gap-6">
                {Object.entries(scores.moves).map(([factor, data]) => (
                  <Card key={factor} className="p-4 bg-gray-900 border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      {getFactorIcon(factor)}
                      <div>
                        <h4 className="font-bold text-white">{currentLabels[factor as keyof typeof currentLabels]}</h4>
                        <p className="text-xs text-gray-400">{currentLabels[`${factor === 'M&A' ? 'ma' : factor === 'capital_reallocation' ? 'capital' : factor === 'productivity' ? 'productivity' : 'resource'}Desc` as keyof typeof currentLabels]}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{currentLabels.score}: {data.score}</span>
                        <span className="text-gray-400">{currentLabels.weight}: {(data.weight * 100).toFixed(0)}%</span>
                      </div>
                      
                      <Slider
                        value={[data.score]}
                        onValueChange={(value) => updateScore('moves', factor, value[0])}
                        max={5}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>5</span>
                      </div>
                      
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {currentLabels.weightedScore}: {(data.score * data.weight * 20).toFixed(1)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  setAssessmentComplete(true);
                  setActiveTab('results');
                }}
                className="bg-green-600 hover:bg-green-700 px-8 py-3"
              >
                {currentLabels.completeAssessment}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Overall Score */}
              <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-600">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{currentLabels.overallScore}</h3>
                  <div className="text-5xl font-bold text-blue-400 mb-2">
                    {calculateOverallScore().toFixed(1)}
                  </div>
                  <div className={`text-lg font-medium ${getScoreStatus(calculateOverallScore()).color}`}>
                    {getScoreStatus(calculateOverallScore()).label}
                  </div>
                  <Progress 
                    value={calculateOverallScore()} 
                    className="mt-4 h-3"
                  />
                </div>
              </Card>

              {/* Dimension Scores */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">{currentLabels.dimensionScores}</h3>
                
                <Card className="p-4 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{currentLabels.endowment}</span>
                    </div>
                    <span className="text-green-400 font-bold">{calculateDimensionScore('endowment').toFixed(1)}</span>
                  </div>
                  <Progress value={calculateDimensionScore('endowment')} className="h-2" />
                </Card>
                
                <Card className="p-4 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">{currentLabels.trends}</span>
                    </div>
                    <span className="text-blue-400 font-bold">{calculateDimensionScore('trends').toFixed(1)}</span>
                  </div>
                  <Progress value={calculateDimensionScore('trends')} className="h-2" />
                </Card>
                
                <Card className="p-4 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-400" />
                      <span className="font-medium">{currentLabels.moves}</span>
                    </div>
                    <span className="text-purple-400 font-bold">{calculateDimensionScore('moves').toFixed(1)}</span>
                  </div>
                  <Progress value={calculateDimensionScore('moves')} className="h-2" />
                </Card>
              </div>
            </div>

            {/* Performance Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.performanceSummary}</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-green-400 mb-3">Strengths</h4>
                  {Object.entries(scores).map(([dimension, factors]) => {
                    const topFactor = Object.entries(factors).reduce((prev, current) => 
                      current[1].score > prev[1].score ? current : prev
                    );
                    return (
                      <div key={dimension} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          {currentLabels[topFactor[0] as keyof typeof currentLabels]} ({topFactor[1].score}/5)
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-yellow-400 mb-3">Opportunities</h4>
                  {Object.entries(scores).map(([dimension, factors]) => {
                    const midFactor = Object.entries(factors).find(([, data]) => 
                      data.score === 3 || data.score === 4
                    );
                    return midFactor ? (
                      <div key={dimension} className="flex items-center gap-2 text-sm">
                        <Eye className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">
                          {currentLabels[midFactor[0] as keyof typeof currentLabels]} ({midFactor[1].score}/5)
                        </span>
                      </div>
                    ) : null;
                  })}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-red-400 mb-3">Priority Areas</h4>
                  {Object.entries(scores).map(([dimension, factors]) => {
                    const weakFactor = Object.entries(factors).reduce((prev, current) => 
                      current[1].score < prev[1].score ? current : prev
                    );
                    return (
                      <div key={dimension} className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-gray-300">
                          {currentLabels[weakFactor[0] as keyof typeof currentLabels]} ({weakFactor[1].score}/5)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => setActiveTab('insights')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {currentLabels.generateInsights}
              </Button>
              <Button 
                onClick={() => setActiveTab('actions')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {currentLabels.createActionPlan}
              </Button>
            </div>
          </TabsContent>

          {/* Strategic Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.insights}</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Strategic Position Analysis</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Your organization shows strong performance in productivity and debt management, 
                        indicating solid operational foundations. However, M&A capabilities and R&D intensity 
                        present opportunities for strategic enhancement.
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-blue-600">Operational Excellence</Badge>
                        <Badge className="bg-yellow-600">Growth Potential</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Market Positioning Insights</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Strong industry growth trends provide a favorable external environment. 
                        Your market position is solid but could benefit from geographic expansion 
                        and enhanced competitive differentiation.
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-green-600">Market Momentum</Badge>
                        <Badge className="bg-purple-600">Expansion Ready</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-orange-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Strategic Move Recommendations</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Focus on developing M&A capabilities and resource differentiation strategies. 
                        Your strong productivity base provides the foundation for more aggressive 
                        strategic moves and market expansion.
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-orange-600">Strategic Priority</Badge>
                        <Badge className="bg-red-600">Competitive Advantage</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Action Plans Tab */}
          <TabsContent value="actions" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.priorityActions}</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Enhance R&D Investment</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Increase technology investment and innovation capabilities to score 4+
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">High Impact</Badge>
                          <Badge variant="outline" className="text-xs">6-12 months</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shuffle className="w-5 h-5 text-orange-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Develop M&A Strategy</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Build acquisition capabilities and strategic partnership framework
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">Medium Impact</Badge>
                          <Badge variant="outline" className="text-xs">3-6 months</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Geographic Expansion</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Evaluate new market opportunities and expansion strategies
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">High Impact</Badge>
                          <Badge variant="outline" className="text-xs">12+ months</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.quickWins}</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Optimize Capital Allocation</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Review and reallocate capital to highest ROI initiatives
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">Quick Win</Badge>
                          <Badge variant="outline" className="text-xs">1-3 months</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Resource Differentiation</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Identify and leverage unique competitive advantages
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">Medium Impact</Badge>
                          <Badge variant="outline" className="text-xs">2-4 months</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Productivity Enhancement</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Continue optimizing operational efficiency and automation
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">Ongoing</Badge>
                          <Badge variant="outline" className="text-xs">Continuous</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => onNavigate?.('roadmap')}
                className="bg-green-600 hover:bg-green-700"
              >
                Create Implementation Roadmap
              </Button>
              <Button 
                variant="outline"
                className="border-gray-600 hover:bg-gray-800"
              >
                {currentLabels.exportResults}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}