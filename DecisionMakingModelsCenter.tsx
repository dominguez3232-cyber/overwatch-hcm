import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  Brain, 
  Target, 
  Upload, 
  Download, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Lightbulb,
  BarChart3,
  Settings,
  Link,
  Tag,
  Calendar,
  Star,
  ArrowRight,
  FileText,
  Zap
} from 'lucide-react';

interface DecisionModel {
  id: string;
  name: string;
  category: 'strategic' | 'operational' | 'financial' | 'risk' | 'hr' | 'custom';
  description: string;
  framework: string;
  steps: string[];
  criteria: string[];
  outcomes: string[];
  riskLevel: 'low' | 'medium' | 'high';
  timeToDecision: string;
  stakeholders: string[];
  attachedLocations: string[];
  roiImpact: string;
  createdBy: string;
  createdAt: string;
  lastUsed?: string;
  usageCount: number;
  effectiveness: number; // 1-100
  tags: string[];
  status: 'active' | 'draft' | 'archived';
  isTemplate: boolean;
}

interface DecisionMakingModelsCenterProps {
  language: 'en' | 'es';
  onNavigate: (route: string) => void;
  currentMode?: string;
}

export const DecisionMakingModelsCenter: React.FC<DecisionMakingModelsCenterProps> = ({
  language,
  onNavigate,
  currentMode
}) => {
  const [models, setModels] = useState<DecisionModel[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<DecisionModel | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isInitialized, setIsInitialized] = useState(false);
  const [newModel, setNewModel] = useState<Partial<DecisionModel>>({
    name: '',
    category: 'strategic',
    description: '',
    framework: '',
    steps: [],
    criteria: [],
    outcomes: [],
    riskLevel: 'medium',
    timeToDecision: '',
    stakeholders: [],
    attachedLocations: [],
    roiImpact: '',
    tags: [],
    status: 'draft',
    isTemplate: false
  });

  // McKinsey's 5 Big Moves for Strategic Investment Decisions - Memoized for performance
  const mckinsey5BigMoves = useMemo(() => [
    {
      id: 'programmatic-ma',
      name: language === 'en' ? 'Programmatic M&A' : 'M&A Programático',
      description: language === 'en' ? 'Systematic acquisition strategy for market leadership' : 'Estrategia de adquisición sistemática para liderazgo de mercado',
      velocityImpact: '3x faster deal identification',
      qualityScore: 94
    },
    {
      id: 'dynamic-allocation',
      name: language === 'en' ? 'Dynamic Allocation' : 'Asignación Dinámica',
      description: language === 'en' ? 'Resource reallocation based on performance' : 'Reasignación de recursos basada en rendimiento',
      velocityImpact: '2.5x faster resource decisions',
      qualityScore: 91
    },
    {
      id: 'strong-core',
      name: language === 'en' ? 'Strong Core Business' : 'Negocio Central Fuerte',
      description: language === 'en' ? 'Optimize and strengthen core operations' : 'Optimizar y fortalecer operaciones centrales',
      velocityImpact: '2x faster operational decisions',
      qualityScore: 89
    },
    {
      id: 'new-builds',
      name: language === 'en' ? 'New Business Builds' : 'Nuevos Negocios',
      description: language === 'en' ? 'Create new revenue streams and markets' : 'Crear nuevas fuentes de ingresos y mercados',
      velocityImpact: '4x faster innovation decisions',
      qualityScore: 87
    },
    {
      id: 'trends-themes',
      name: language === 'en' ? 'Trends & Themes' : 'Tendencias y Temas',
      description: language === 'en' ? 'Capitalize on mega-trends and market shifts' : 'Capitalizar mega-tendencias y cambios de mercado',
      velocityImpact: '3.5x faster trend decisions',
      qualityScore: 92
    }
  ], [language]);

  // Pre-loaded decision-making models - Memoized for performance
  const defaultModels: DecisionModel[] = useMemo(() => [
    {
      id: 'eisenhower-matrix',
      name: language === 'en' ? 'Eisenhower Decision Matrix' : 'Matriz de Decisión Eisenhower',
      category: 'strategic',
      description: language === 'en' 
        ? 'Prioritize decisions based on urgency and importance quadrants'
        : 'Prioriza decisiones basadas en cuadrantes de urgencia e importancia',
      framework: 'Eisenhower Matrix',
      steps: [
        language === 'en' ? 'Define the decision' : 'Definir la decisión',
        language === 'en' ? 'Assess urgency (high/low)' : 'Evaluar urgencia (alta/baja)',
        language === 'en' ? 'Assess importance (high/low)' : 'Evaluar importancia (alta/baja)',
        language === 'en' ? 'Place in appropriate quadrant' : 'Ubicar en cuadrante apropiado',
        language === 'en' ? 'Execute based on quadrant priority' : 'Ejecutar basado en prioridad del cuadrante'
      ],
      criteria: [
        language === 'en' ? 'Time sensitivity' : 'Sensibilidad temporal',
        language === 'en' ? 'Strategic impact' : 'Impacto estratégico',
        language === 'en' ? 'Resource requirements' : 'Requerimientos de recursos'
      ],
      outcomes: [
        language === 'en' ? 'Clear prioritization' : 'Priorización clara',
        language === 'en' ? 'Reduced decision fatigue' : 'Reducir fatiga de decisión',
        language === 'en' ? 'Better time management' : 'Mejor gestión del tiempo'
      ],
      riskLevel: 'low',
      timeToDecision: '15-30 minutes',
      stakeholders: ['Decision Maker', 'Strategic Team'],
      attachedLocations: ['Strategy Department', 'Executive Office'],
      roiImpact: '25:8:1 - $25 productivity gain per $8 time investment',
      createdBy: 'OVERWATCH³ Advisory',
      createdAt: '2024-01-15',
      lastUsed: '2024-10-05',
      usageCount: 47,
      effectiveness: 87,
      tags: ['priority', 'strategic', 'time-management'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'cost-benefit-analysis',
      name: language === 'en' ? 'Cost-Benefit Analysis Model' : 'Modelo Análisis Costo-Beneficio',
      category: 'financial',
      description: language === 'en' 
        ? 'Quantitative framework for financial decision evaluation'
        : 'Marco cuantitativo para evaluación de decisiones financieras',
      framework: 'Cost-Benefit Analysis',
      steps: [
        language === 'en' ? 'Identify all costs' : 'Identificar todos los costos',
        language === 'en' ? 'Identify all benefits' : 'Identificar todos los beneficios',
        language === 'en' ? 'Quantify monetary values' : 'Cuantificar valores monetarios',
        language === 'en' ? 'Calculate net present value' : 'Calcular valor presente neto',
        language === 'en' ? 'Compare alternatives' : 'Comparar alternativas',
        language === 'en' ? 'Make recommendation' : 'Hacer recomendación'
      ],
      criteria: [
        language === 'en' ? 'Initial investment' : 'Inversión inicial',
        language === 'en' ? 'Expected returns' : 'Retornos esperados',
        language === 'en' ? 'Risk factors' : 'Factores de riesgo',
        language === 'en' ? 'Time horizon' : 'Horizonte temporal'
      ],
      outcomes: [
        language === 'en' ? 'Data-driven decisions' : 'Decisiones basadas en datos',
        language === 'en' ? 'Clear ROI projections' : 'Proyecciones ROI claras',
        language === 'en' ? 'Risk mitigation' : 'Mitigación de riesgos'
      ],
      riskLevel: 'medium',
      timeToDecision: '2-4 hours',
      stakeholders: ['CFO', 'Finance Team', 'Decision Maker'],
      attachedLocations: ['Finance Department', 'Executive Board Room'],
      roiImpact: '45:15:1 - $45 investment optimization per $15 analysis cost',
      createdBy: 'Financial Advisory Team',
      createdAt: '2024-01-20',
      lastUsed: '2024-10-04',
      usageCount: 32,
      effectiveness: 92,
      tags: ['financial', 'roi', 'quantitative'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'swot-decision-framework',
      name: language === 'en' ? 'SWOT Decision Framework' : 'Marco de Decisión SWOT',
      category: 'strategic',
      description: language === 'en' 
        ? 'Strategic analysis framework using Strengths, Weaknesses, Opportunities, Threats'
        : 'Marco de análisis estratégico usando Fortalezas, Debilidades, Oportunidades, Amenazas',
      framework: 'SWOT Analysis',
      steps: [
        language === 'en' ? 'Define decision context' : 'Definir contexto de decisión',
        language === 'en' ? 'Identify internal strengths' : 'Identificar fortalezas internas',
        language === 'en' ? 'Identify internal weaknesses' : 'Identificar debilidades internas',
        language === 'en' ? 'Identify external opportunities' : 'Identificar oportunidades externas',
        language === 'en' ? 'Identify external threats' : 'Identificar amenazas externas',
        language === 'en' ? 'Develop strategy matrix' : 'Desarrollar matriz estratégica',
        language === 'en' ? 'Make strategic decision' : 'Tomar decisión estratégica'
      ],
      criteria: [
        language === 'en' ? 'Internal capabilities' : 'Capacidades internas',
        language === 'en' ? 'Market conditions' : 'Condiciones del mercado',
        language === 'en' ? 'Competitive landscape' : 'Panorama competitivo',
        language === 'en' ? 'Resource availability' : 'Disponibilidad de recursos'
      ],
      outcomes: [
        language === 'en' ? 'Strategic clarity' : 'Claridad estratégica',
        language === 'en' ? 'Risk awareness' : 'Conciencia de riesgos',
        language === 'en' ? 'Competitive advantage' : 'Ventaja competitiva'
      ],
      riskLevel: 'medium',
      timeToDecision: '1-2 hours',
      stakeholders: ['Strategy Team', 'Leadership', 'Department Heads'],
      attachedLocations: ['Strategy Room', 'Board Room', 'Planning Center'],
      roiImpact: '35:10:1 - $35 strategic value per $10 analysis investment',
      createdBy: 'Strategic Planning Team',
      createdAt: '2024-02-01',
      lastUsed: '2024-10-03',
      usageCount: 28,
      effectiveness: 84,
      tags: ['strategic', 'analysis', 'competitive'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'decision-tree-analysis',
      name: language === 'en' ? 'Decision Tree Analysis' : 'Análisis Árbol de Decisión',
      category: 'risk',
      description: language === 'en' 
        ? 'Systematic approach to complex decisions with multiple outcomes and probabilities'
        : 'Enfoque sistemático para decisiones complejas con múltiples resultados y probabilidades',
      framework: 'Decision Tree',
      steps: [
        language === 'en' ? 'Define decision problem' : 'Definir problema de decisión',
        language === 'en' ? 'Identify decision alternatives' : 'Identificar alternativas de decisión',
        language === 'en' ? 'Identify possible outcomes' : 'Identificar posibles resultados',
        language === 'en' ? 'Assign probabilities' : 'Asignar probabilidades',
        language === 'en' ? 'Estimate outcome values' : 'Estimar valores de resultados',
        language === 'en' ? 'Calculate expected values' : 'Calcular valores esperados',
        language === 'en' ? 'Select optimal path' : 'Seleccionar ruta óptima'
      ],
      criteria: [
        language === 'en' ? 'Probability of outcomes' : 'Probabilidad de resultados',
        language === 'en' ? 'Financial impact' : 'Impacto financiero',
        language === 'en' ? 'Risk tolerance' : 'Tolerancia al riesgo',
        language === 'en' ? 'Time constraints' : 'Restricciones de tiempo'
      ],
      outcomes: [
        language === 'en' ? 'Risk-adjusted decisions' : 'Decisiones ajustadas por riesgo',
        language === 'en' ? 'Clear visualization' : 'Visualización clara',
        language === 'en' ? 'Quantified uncertainty' : 'Incertidumbre cuantificada'
      ],
      riskLevel: 'high',
      timeToDecision: '3-6 hours',
      stakeholders: ['Risk Manager', 'Analytics Team', 'Senior Leadership'],
      attachedLocations: ['Risk Management Office', 'Analytics Center'],
      roiImpact: '60:18:1 - $60 risk mitigation per $18 analysis investment',
      createdBy: 'Risk Management Team',
      createdAt: '2024-02-10',
      lastUsed: '2024-10-02',
      usageCount: 15,
      effectiveness: 89,
      tags: ['risk', 'probability', 'quantitative'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'mckinsey-investment-framework',
      name: language === 'en' ? 'McKinsey 5 Big Moves Investment Framework' : 'Marco Inversión 5 Grandes Movimientos McKinsey',
      category: 'strategic',
      description: language === 'en' 
        ? 'Strategic investment framework based on McKinsey\'s 5 Big Moves for consistent market-beating returns'
        : 'Marco de inversión estratégica basado en 5 Grandes Movimientos McKinsey para retornos consistentes que superan el mercado',
      framework: 'McKinsey 5 Big Moves',
      steps: [
        language === 'en' ? 'Assess current portfolio position' : 'Evaluar posición actual del portafolio',
        language === 'en' ? 'Identify programmatic M&A opportunities' : 'Identificar oportunidades M&A programáticas',
        language === 'en' ? 'Evaluate dynamic allocation potential' : 'Evaluar potencial asignación dinámica',
        language === 'en' ? 'Strengthen core business foundations' : 'Fortalecer fundamentos negocio central',
        language === 'en' ? 'Develop new business builds strategy' : 'Desarrollar estrategia nuevos negocios',
        language === 'en' ? 'Capitalize on trends and themes' : 'Capitalizar tendencias y temas',
        language === 'en' ? 'Execute integrated investment plan' : 'Ejecutar plan inversión integrado'
      ],
      criteria: [
        language === 'en' ? 'Market position strength' : 'Fortaleza posición mercado',
        language === 'en' ? 'Revenue growth potential' : 'Potencial crecimiento ingresos',
        language === 'en' ? 'Resource allocation efficiency' : 'Eficiencia asignación recursos',
        language === 'en' ? 'Strategic coherence' : 'Coherencia estratégica',
        language === 'en' ? 'Execution capability' : 'Capacidad ejecución'
      ],
      outcomes: [
        language === 'en' ? '3x higher investment returns' : '3x mayor retornos inversión',
        language === 'en' ? 'Year-over-year consistency' : 'Consistencia año tras año',
        language === 'en' ? 'Market-beating performance' : 'Rendimiento superior al mercado',
        language === 'en' ? 'Strategic portfolio optimization' : 'Optimización portafolio estratégico'
      ],
      riskLevel: 'medium',
      timeToDecision: '4-8 weeks',
      stakeholders: ['CEO', 'Investment Committee', 'Strategy Team', 'CFO'],
      attachedLocations: ['Board Room', 'Strategy Center', 'Investment Office'],
      roiImpact: '250:75:1 - $250 strategic value creation per $75 framework investment',
      createdBy: 'McKinsey Strategic Advisory',
      createdAt: '2024-01-05',
      lastUsed: '2024-10-06',
      usageCount: 23,
      effectiveness: 95,
      tags: ['mckinsey', '5-big-moves', 'investment', 'strategic', 'portfolio'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'decision-velocity-accelerator',
      name: language === 'en' ? 'Decision Velocity Accelerator™' : 'Acelerador Velocidad Decisión™',
      category: 'operational',
      description: language === 'en' 
        ? 'Proprietary framework to accelerate decision speed while maintaining quality, reducing decision paralysis by 85%'
        : 'Marco propietario para acelerar velocidad decisión manteniendo calidad, reduciendo parálisis decisión 85%',
      framework: 'OVERWATCH³ Velocity Protocol',
      steps: [
        language === 'en' ? 'Decision urgency classification' : 'Clasificación urgencia decisión',
        language === 'en' ? 'Stakeholder matrix identification' : 'Identificación matriz interesados',
        language === 'en' ? 'Information sufficiency assessment' : 'Evaluación suficiencia información',
        language === 'en' ? 'Decision path optimization' : 'Optimización ruta decisión',
        language === 'en' ? 'Quality gate checkpoints' : 'Puntos control calidad',
        language === 'en' ? 'Execution velocity tracking' : 'Seguimiento velocidad ejecución'
      ],
      criteria: [
        language === 'en' ? 'Decision impact magnitude' : 'Magnitud impacto decisión',
        language === 'en' ? 'Reversibility factor' : 'Factor reversibilidad',
        language === 'en' ? 'Information completeness' : 'Completitud información',
        language === 'en' ? 'Stakeholder alignment' : 'Alineación interesados'
      ],
      outcomes: [
        language === 'en' ? '60% faster decision cycles' : '60% ciclos decisión más rápidos',
        language === 'en' ? '40% higher decision quality' : '40% mayor calidad decisión',
        language === 'en' ? '85% reduction in analysis paralysis' : '85% reducción parálisis análisis',
        language === 'en' ? 'Consistent velocity tracking' : 'Seguimiento velocidad consistente'
      ],
      riskLevel: 'low',
      timeToDecision: '30-90 minutes',
      stakeholders: ['Decision Maker', 'Executive Team', 'Strategy Advisor'],
      attachedLocations: ['Executive Suite', 'Strategy Room', 'Command Center'],
      roiImpact: '180:45:1 - $180 productivity gain per $45 velocity investment',
      createdBy: 'OVERWATCH³ Decision Intelligence',
      createdAt: '2024-02-15',
      lastUsed: '2024-10-06',
      usageCount: 89,
      effectiveness: 93,
      tags: ['velocity', 'speed', 'quality', 'paralysis-reduction', 'proprietary'],
      status: 'active',
      isTemplate: true
    },
    {
      id: 'investment-quality-optimizer',
      name: language === 'en' ? 'Investment Quality Optimizer™' : 'Optimizador Calidad Inversión™',
      category: 'financial',
      description: language === 'en' 
        ? 'Advanced framework for evaluating investment opportunities with quality scoring and risk-adjusted returns analysis'
        : 'Marco avanzado para evaluar oportunidades inversión con puntuación calidad y análisis retornos ajustados riesgo',
      framework: 'Quality-First Investment Protocol',
      steps: [
        language === 'en' ? 'Investment thesis validation' : 'Validación tesis inversión',
        language === 'en' ? 'Quality score assessment' : 'Evaluación puntuación calidad',
        language === 'en' ? 'Risk-adjusted return calculation' : 'Cálculo retorno ajustado riesgo',
        language === 'en' ? 'Portfolio coherence analysis' : 'Análisis coherencia portafolio',
        language === 'en' ? 'Implementation roadmap design' : 'Diseño hoja ruta implementación',
        language === 'en' ? 'Performance tracking setup' : 'Configuración seguimiento rendimiento'
      ],
      criteria: [
        language === 'en' ? 'Market opportunity size' : 'Tamaño oportunidad mercado',
        language === 'en' ? 'Competitive moat strength' : 'Fortaleza foso competitivo',
        language === 'en' ? 'Management team quality' : 'Calidad equipo gestión',
        language === 'en' ? 'Financial sustainability' : 'Sostenibilidad financiera',
        language === 'en' ? 'Strategic fit alignment' : 'Alineación ajuste estratégico'
      ],
      outcomes: [
        language === 'en' ? 'Higher quality investment decisions' : 'Decisiones inversión mayor calidad',
        language === 'en' ? 'Improved risk-adjusted returns' : 'Mejores retornos ajustados riesgo',
        language === 'en' ? 'Portfolio optimization' : 'Optimización portafolio',
        language === 'en' ? 'Consistent performance tracking' : 'Seguimiento rendimiento consistente'
      ],
      riskLevel: 'medium',
      timeToDecision: '2-4 weeks',
      stakeholders: ['Investment Committee', 'Portfolio Manager', 'Risk Team', 'Strategy Lead'],
      attachedLocations: ['Investment Office', 'Risk Management', 'Strategy Center'],
      roiImpact: '320:80:1 - $320 investment value optimization per $80 framework cost',
      createdBy: 'Investment Excellence Team',
      createdAt: '2024-01-25',
      lastUsed: '2024-10-05',
      usageCount: 34,
      effectiveness: 91,
      tags: ['investment', 'quality', 'optimization', 'risk-adjusted', 'portfolio'],
      status: 'active',
      isTemplate: true
    }
  ], [language]);

  useEffect(() => {
    setModels(defaultModels);
  }, [defaultModels]);

  const filteredModels = useMemo(() => {
    return models.filter(model => {
      const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           model.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [models, searchTerm, selectedCategory]);

  const categoryStats = useMemo(() => ({
    strategic: models.filter(m => m.category === 'strategic').length,
    financial: models.filter(m => m.category === 'financial').length,
    operational: models.filter(m => m.category === 'operational').length,
    risk: models.filter(m => m.category === 'risk').length,
    hr: models.filter(m => m.category === 'hr').length,
    custom: models.filter(m => m.category === 'custom').length
  }), [models]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'strategic': return 'from-blue-500 to-indigo-500';
      case 'financial': return 'from-green-500 to-emerald-500';
      case 'operational': return 'from-orange-500 to-amber-500';
      case 'risk': return 'from-red-500 to-rose-500';
      case 'hr': return 'from-purple-500 to-violet-500';
      case 'custom': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-indigo-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const handleCreateModel = () => {
    const modelToCreate: DecisionModel = {
      ...newModel,
      id: `custom-${Date.now()}`,
      createdBy: 'Current User',
      createdAt: new Date().toISOString().split('T')[0],
      usageCount: 0,
      effectiveness: 0,
      status: 'draft',
      steps: newModel.steps || [],
      criteria: newModel.criteria || [],
      outcomes: newModel.outcomes || [],
      stakeholders: newModel.stakeholders || [],
      attachedLocations: newModel.attachedLocations || [],
      tags: newModel.tags || []
    } as DecisionModel;

    setModels(prev => [...prev, modelToCreate]);
    setShowCreateModal(false);
    setNewModel({
      name: '',
      category: 'strategic',
      description: '',
      framework: '',
      steps: [],
      criteria: [],
      outcomes: [],
      riskLevel: 'medium',
      timeToDecision: '',
      stakeholders: [],
      attachedLocations: [],
      roiImpact: '',
      tags: [],
      status: 'draft',
      isTemplate: false
    });
  };

  const handleAttachLocation = (modelId: string, location: string) => {
    setModels(prev => prev.map(model => 
      model.id === modelId 
        ? { ...model, attachedLocations: [...model.attachedLocations, location] }
        : model
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {language === 'en' ? 'Decision Making Models Center' : 'Centro de Modelos de Toma de Decisiones'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Eliminate decision fear with structured frameworks and proven methodologies'
                  : 'Elimina el miedo a decidir con marcos estructurados y metodologías probadas'
                }
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={() => setShowUploadModal(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              {language === 'en' ? 'Upload Model' : 'Subir Modelo'}
            </Button>
            <Button 
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <Plus className="w-4 h-4" />
              {language === 'en' ? 'Create Model' : 'Crear Modelo'}
            </Button>
          </div>
        </div>

        {/* Strategic Value Proposition */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">
                {language === 'en' 
                  ? '🎯 Transform Decision Risk into Strategic Advantage'
                  : '🎯 Transforma Riesgo de Decisión en Ventaja Estratégica'
                }
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {language === 'en' 
                  ? 'Stop making bad decisions that reduce velocity to revenue. Use proven frameworks to accelerate decision confidence and ROI.'
                  : 'Deja de tomar malas decisiones que reducen velocidad a ingresos. Usa marcos probados para acelerar confianza de decisión y ROI.'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-blue-400 font-bold text-lg">⚡ 40:12:1</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Decision Intelligence ROI' : 'ROI Inteligencia Decisión'}
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-lg">🛡️ 85%</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Risk Reduction Average' : 'Reducción Riesgo Promedio'}
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-purple-400 font-bold text-lg">📈 60%</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Decision Speed Increase' : 'Aumento Velocidad Decisión'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* McKinsey 5 Big Moves Dashboard */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                {language === 'en' ? '🏆 McKinsey 5 Big Moves for Investment Excellence' : '🏆 5 Grandes Movimientos McKinsey para Excelencia Inversión'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'Achieve consistent market-beating returns with proven strategic frameworks'
                  : 'Logra retornos consistentes superiores al mercado con marcos estratégicos probados'
                }
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {mckinsey5BigMoves.map((move, index) => (
              <div key={move.id} className="bg-background/50 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{move.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{move.description}</p>
                <div className="space-y-1">
                  <div className="text-xs text-blue-400 font-medium">{move.velocityImpact}</div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400">{move.qualityScore}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-400 font-bold text-lg">💰 250:75:1 Investment ROI</div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' 
                    ? '$250 strategic value creation per $75 framework investment - Guaranteed year-over-year consistency'
                    : '$250 creación valor estratégico por $75 inversión marco - Consistencia año tras año garantizada'
                  }
                </div>
              </div>
              <Button 
                onClick={() => {
                  const model = models.find(m => m.id === 'mckinsey-investment-framework');
                  if (model) setSelectedModel(model);
                }}
                className="bg-gradient-to-r from-indigo-500 to-blue-500"
              >
                {language === 'en' ? 'Explore Framework' : 'Explorar Marco'}
              </Button>
            </div>
          </div>
        </div>

        {/* Decision Velocity & Quality Tracker */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                {language === 'en' ? '⚡ Decision Velocity & Quality Intelligence' : '⚡ Inteligencia Velocidad y Calidad Decisión'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'Real-time tracking of decision speed, quality, and consistency metrics'
                  : 'Seguimiento tiempo real de velocidad, calidad y consistencia métricas decisión'
                }
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">2.3x</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Avg Decision Velocity' : 'Velocidad Decisión Prom'}
              </div>
              <div className="text-xs text-green-400 mt-1">+15% this month</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">91%</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Decision Quality Score' : 'Puntuación Calidad Decisión'}
              </div>
              <div className="text-xs text-green-400 mt-1">+8% this quarter</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-400">94%</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Investment Success Rate' : 'Tasa Éxito Inversión'}
              </div>
              <div className="text-xs text-green-400 mt-1">+12% YoY</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-pink-400">97%</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Framework Consistency' : 'Consistencia Marco'}
              </div>
              <div className="text-xs text-green-400 mt-1">Stable</div>
            </Card>
          </div>
          
          <div className="bg-background/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {language === 'en' ? '🎯 Year-over-Year Decision Excellence Trends' : '🎯 Tendencias Excelencia Decisión Año tras Año'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">2022 Baseline:</span>
                <span className="text-foreground">67% quality, 1.2x velocity</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">2023 Growth:</span>
                <span className="text-green-400">84% quality, 1.9x velocity</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">2024 Target:</span>
                <span className="text-blue-400">91% quality, 2.3x velocity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{models.length}</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Total Models' : 'Modelos Totales'}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{categoryStats.strategic}</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Strategic' : 'Estratégicos'}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{categoryStats.financial}</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Financial' : 'Financieros'}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{categoryStats.risk}</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Risk Models' : 'Modelos Riesgo'}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">
              {Math.round(models.reduce((acc, m) => acc + m.effectiveness, 0) / models.length)}%
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Avg Effectiveness' : 'Efectividad Prom'}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {models.reduce((acc, m) => acc + m.usageCount, 0)}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Total Usage' : 'Uso Total'}
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === 'en' ? 'Search models...' : 'Buscar modelos...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-input border border-border text-foreground px-3 py-2 rounded-md"
          >
            <option value="all">{language === 'en' ? 'All Categories' : 'Todas Categorías'}</option>
            <option value="strategic">{language === 'en' ? 'Strategic' : 'Estratégico'}</option>
            <option value="financial">{language === 'en' ? 'Financial' : 'Financiero'}</option>
            <option value="operational">{language === 'en' ? 'Operational' : 'Operacional'}</option>
            <option value="risk">{language === 'en' ? 'Risk' : 'Riesgo'}</option>
            <option value="hr">{language === 'en' ? 'HR' : 'RH'}</option>
            <option value="custom">{language === 'en' ? 'Custom' : 'Personalizado'}</option>
          </select>
        </div>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(model.category)} rounded-lg flex items-center justify-center`}>
                    {model.category === 'strategic' && <Target className="w-5 h-5 text-white" />}
                    {model.category === 'financial' && <DollarSign className="w-5 h-5 text-white" />}
                    {model.category === 'operational' && <Settings className="w-5 h-5 text-white" />}
                    {model.category === 'risk' && <AlertTriangle className="w-5 h-5 text-white" />}
                    {model.category === 'hr' && <Users className="w-5 h-5 text-white" />}
                    {model.category === 'custom' && <Lightbulb className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {model.framework}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">
                    {model.effectiveness}%
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {model.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Risk Level:' : 'Nivel Riesgo:'}
                  </span>
                  <span className={`font-medium ${getRiskColor(model.riskLevel)}`}>
                    {model.riskLevel.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Time:' : 'Tiempo:'}
                  </span>
                  <span className="text-foreground">{model.timeToDecision}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Usage:' : 'Uso:'}
                  </span>
                  <span className="text-foreground">{model.usageCount}x</span>
                </div>
              </div>

              {/* ROI Value */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                <div className="text-xs font-medium text-green-400 mb-1">
                  {language === 'en' ? 'ROI Impact' : 'Impacto ROI'}
                </div>
                <div className="text-xs text-foreground font-medium">
                  {model.roiImpact}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {model.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {model.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{model.tags.length - 3}
                  </Badge>
                )}
              </div>

              {/* Attached Locations */}
              {model.attachedLocations.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <MapPin className="w-3 h-3" />
                    {language === 'en' ? 'Attached to:' : 'Adjunto a:'}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {model.attachedLocations.slice(0, 2).map((location, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {location}
                      </Badge>
                    ))}
                    {model.attachedLocations.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{model.attachedLocations.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => setSelectedModel(model)}
                  className="flex-1"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'View Details' : 'Ver Detalles'}
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <Link className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {language === 'en' ? 'Attach to Location' : 'Adjuntar a Ubicación'}
                      </DialogTitle>
                      <DialogDescription>
                        {language === 'en' 
                          ? 'Attach this decision model to a specific business location for context-aware recommendations'
                          : 'Adjunta este modelo de decisión a una ubicación empresarial específica para recomendaciones contextuales'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder={language === 'en' ? 'Enter location name...' : 'Ingresa nombre ubicación...'}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const target = e.target as HTMLInputElement;
                            if (target.value.trim()) {
                              handleAttachLocation(model.id, target.value.trim());
                              target.value = '';
                            }
                          }
                        }}
                      />
                      <div className="text-sm text-muted-foreground">
                        {language === 'en' 
                          ? 'Press Enter to attach this model to a specific business location'
                          : 'Presiona Enter para adjuntar este modelo a una ubicación empresarial específica'
                        }
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Model Details Modal */}
      <AnimatePresence>
        {selectedModel && (
          <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-br ${getCategoryColor(selectedModel.category)} rounded-lg flex items-center justify-center`}>
                    {selectedModel.category === 'strategic' && <Target className="w-4 h-4 text-white" />}
                    {selectedModel.category === 'financial' && <DollarSign className="w-4 h-4 text-white" />}
                    {selectedModel.category === 'risk' && <AlertTriangle className="w-4 h-4 text-white" />}
                  </div>
                  {selectedModel.name}
                </DialogTitle>
                <DialogDescription>
                  {language === 'en' 
                    ? 'Complete details and implementation guide for this decision-making framework'
                    : 'Detalles completos y guía de implementación para este marco de toma de decisiones'
                  }
                </DialogDescription>
              </DialogHeader>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">
                    {language === 'en' ? 'Overview' : 'Resumen'}
                  </TabsTrigger>
                  <TabsTrigger value="steps">
                    {language === 'en' ? 'Steps' : 'Pasos'}
                  </TabsTrigger>
                  <TabsTrigger value="criteria">
                    {language === 'en' ? 'Criteria' : 'Criterios'}
                  </TabsTrigger>
                  <TabsTrigger value="impact">
                    {language === 'en' ? 'Impact' : 'Impacto'}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === 'en' ? 'Description' : 'Descripción'}
                    </h4>
                    <p className="text-muted-foreground">{selectedModel.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        {language === 'en' ? 'Framework' : 'Marco'}
                      </h4>
                      <Badge>{selectedModel.framework}</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        {language === 'en' ? 'Risk Level' : 'Nivel Riesgo'}
                      </h4>
                      <Badge className={getRiskColor(selectedModel.riskLevel)}>
                        {selectedModel.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === 'en' ? 'ROI Impact' : 'Impacto ROI'}
                    </h4>
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <div className="text-green-400 font-semibold">{selectedModel.roiImpact}</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="steps" className="space-y-4">
                  <h4 className="font-semibold">
                    {language === 'en' ? 'Decision Steps' : 'Pasos de Decisión'}
                  </h4>
                  <div className="space-y-3">
                    {selectedModel.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="criteria" className="space-y-4">
                  <h4 className="font-semibold">
                    {language === 'en' ? 'Decision Criteria' : 'Criterios de Decisión'}
                  </h4>
                  <div className="grid gap-3">
                    {selectedModel.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{criterion}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">
                      {language === 'en' ? 'Expected Outcomes' : 'Resultados Esperados'}
                    </h4>
                    <div className="grid gap-3">
                      {selectedModel.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="impact" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="text-2xl font-bold text-green-400">
                        {selectedModel.effectiveness}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Effectiveness Rating' : 'Calificación Efectividad'}
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-2xl font-bold text-blue-400">
                        {selectedModel.usageCount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Times Used' : 'Veces Usado'}
                      </div>
                    </Card>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      {language === 'en' ? 'Stakeholders' : 'Interesados'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedModel.stakeholders.map((stakeholder, index) => (
                        <Badge key={index} variant="outline">
                          <Users className="w-3 h-3 mr-1" />
                          {stakeholder}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      {language === 'en' ? 'Attached Locations' : 'Ubicaciones Adjuntas'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedModel.attachedLocations.map((location, index) => (
                        <Badge key={index} variant="secondary">
                          <MapPin className="w-3 h-3 mr-1" />
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Create Model Modal */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {language === 'en' ? 'Create New Decision Model' : 'Crear Nuevo Modelo de Decisión'}
            </DialogTitle>
            <DialogDescription>
              {language === 'en' 
                ? 'Design a custom decision-making framework for your specific business needs'
                : 'Diseña un marco de toma de decisiones personalizado para tus necesidades empresariales específicas'
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === 'en' ? 'Model Name' : 'Nombre Modelo'}
                </label>
                <Input
                  value={newModel.name}
                  onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
                  placeholder={language === 'en' ? 'Enter model name...' : 'Ingresa nombre modelo...'}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === 'en' ? 'Category' : 'Categoría'}
                </label>
                <select
                  value={newModel.category}
                  onChange={(e) => setNewModel({ ...newModel, category: e.target.value as any })}
                  className="w-full bg-input border border-border text-foreground px-3 py-2 rounded-md"
                >
                  <option value="strategic">{language === 'en' ? 'Strategic' : 'Estratégico'}</option>
                  <option value="financial">{language === 'en' ? 'Financial' : 'Financiero'}</option>
                  <option value="operational">{language === 'en' ? 'Operational' : 'Operacional'}</option>
                  <option value="risk">{language === 'en' ? 'Risk' : 'Riesgo'}</option>
                  <option value="hr">{language === 'en' ? 'HR' : 'RH'}</option>
                  <option value="custom">{language === 'en' ? 'Custom' : 'Personalizado'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                {language === 'en' ? 'Description' : 'Descripción'}
              </label>
              <Textarea
                value={newModel.description}
                onChange={(e) => setNewModel({ ...newModel, description: e.target.value })}
                placeholder={language === 'en' ? 'Describe the decision model...' : 'Describe el modelo de decisión...'}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === 'en' ? 'Framework' : 'Marco'}
                </label>
                <Input
                  value={newModel.framework}
                  onChange={(e) => setNewModel({ ...newModel, framework: e.target.value })}
                  placeholder={language === 'en' ? 'e.g., SWOT, Cost-Benefit...' : 'ej., SWOT, Costo-Beneficio...'}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === 'en' ? 'Time to Decision' : 'Tiempo a Decisión'}
                </label>
                <Input
                  value={newModel.timeToDecision}
                  onChange={(e) => setNewModel({ ...newModel, timeToDecision: e.target.value })}
                  placeholder={language === 'en' ? 'e.g., 30 minutes, 2 hours...' : 'ej., 30 minutos, 2 horas...'}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                {language === 'en' ? 'ROI Impact' : 'Impacto ROI'}
              </label>
              <Input
                value={newModel.roiImpact}
                onChange={(e) => setNewModel({ ...newModel, roiImpact: e.target.value })}
                placeholder={language === 'en' ? 'e.g., 15:5:1 - $15 value per $5 investment' : 'ej., 15:5:1 - $15 valor por $5 inversión'}
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowCreateModal(false)}
              >
                {language === 'en' ? 'Cancel' : 'Cancelar'}
              </Button>
              <Button onClick={handleCreateModel}>
                {language === 'en' ? 'Create Model' : 'Crear Modelo'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Model Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {language === 'en' ? 'Upload Decision Model' : 'Subir Modelo de Decisión'}
            </DialogTitle>
            <DialogDescription>
              {language === 'en' 
                ? 'Import existing decision models from files to expand your framework library'
                : 'Importa modelos de decisión existentes desde archivos para expandir tu biblioteca de marcos'
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                {language === 'en' 
                  ? 'Drag and drop your decision model file here'
                  : 'Arrastra y suelta tu archivo de modelo de decisión aquí'
                }
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'Supports JSON, Excel, CSV formats'
                  : 'Soporta formatos JSON, Excel, CSV'
                }
              </p>
              <Button className="mt-4">
                {language === 'en' ? 'Browse Files' : 'Examinar Archivos'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};