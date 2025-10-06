import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Search, 
  Book, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cog,
  Building,
  Briefcase,
  CheckCircle,
  Download,
  Star,
  Filter,
  DollarSign
} from 'lucide-react';

interface Framework {
  id: string;
  title: string;
  chapter: number;
  category: 'assessment' | 'strategy' | 'implementation' | 'risk' | 'culture' | 'technology' | 'investment';
  complexity: 'basic' | 'intermediate' | 'advanced';
  timeToComplete: string;
  description: string;
  keyQuestions: string[];
  deliverables: string[];
  whenToUse: string[];
  tags: string[];
}

interface StrategicFrameworkLibraryProps {
  language: 'en' | 'es';
}

export function StrategicFrameworkLibrary({ language }: StrategicFrameworkLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  const labels = {
    en: {
      title: "Strategic Framework Library",
      subtitle: "20+ Years of Advisory-Grade HCM Intelligence",
      search: "Search frameworks...",
      categories: "Categories",
      complexity: "Complexity Level",
      all: "All",
      basic: "Basic",
      intermediate: "Intermediate", 
      advanced: "Advanced",
      assessment: "Assessment",
      strategy: "Strategy",
      implementation: "Implementation",
      risk: "Risk Management",
      culture: "Culture Design",
      technology: "Technology",
      timeToComplete: "Time to Complete",
      keyQuestions: "Key Questions",
      deliverables: "Deliverables",
      whenToUse: "When to Use",
      startFramework: "Start Framework",
      downloadTemplate: "Download Template",
      backToLibrary: "Back to Library"
    },
    es: {
      title: "Biblioteca de Marcos Estratégicos",
      subtitle: "20+ Años de Inteligencia HCM de Grado Asesor",
      search: "Buscar marcos...",
      categories: "Categorías",
      complexity: "Nivel de Complejidad",
      all: "Todos",
      basic: "Básico",
      intermediate: "Intermedio",
      advanced: "Avanzado", 
      assessment: "Evaluación",
      strategy: "Estrategia",
      implementation: "Implementación",
      risk: "Gestión de Riesgo",
      culture: "Diseño Cultural",
      technology: "Tecnología",
      timeToComplete: "Tiempo para Completar",
      keyQuestions: "Preguntas Clave",
      deliverables: "Entregables",
      whenToUse: "Cuándo Usar",
      startFramework: "Iniciar Marco",
      downloadTemplate: "Descargar Plantilla",
      backToLibrary: "Volver a Biblioteca"
    }
  };

  const currentLabels = labels[language];

  const frameworks: Framework[] = [
    {
      id: 'hr-maturity',
      title: language === 'en' ? 'HR Maturity Assessment' : 'Evaluación de Madurez RH',
      chapter: 1,
      category: 'assessment',
      complexity: 'basic',
      timeToComplete: '45 minutes',
      description: language === 'en' 
        ? 'Evaluate your organization\'s HR sophistication level across Admin, Process, and Strategic HR capabilities'
        : 'Evalúa el nivel de sofisticación RH de tu organización en capacidades RH Admin, Proceso y Estratégicas',
      keyQuestions: language === 'en' ? [
        'What is your current HR technology stack maturity?',
        'How standardized are your core HR processes?',
        'Do you have predictive HR analytics capabilities?',
        'How aligned is HR with business strategy?'
      ] : [
        '¿Cuál es la madurez actual de tu stack tecnológico RH?',
        '¿Qué tan estandarizados están tus procesos RH principales?',
        '¿Tienes capacidades de analítica RH predictiva?',
        '¿Qué tan alineado está RH con la estrategia de negocio?'
      ],
      deliverables: language === 'en' ? [
        'HR Maturity Score (12-60 points)',
        'Capability Gap Analysis',
        'Investment Priority Matrix',
        'Development Roadmap'
      ] : [
        'Puntuación de Madurez RH (12-60 puntos)',
        'Análisis de Brechas de Capacidad',
        'Matriz de Prioridades de Inversión',
        'Hoja de Ruta de Desarrollo'
      ],
      whenToUse: language === 'en' ? [
        'During strategic planning cycles',
        'Before major growth phases',
        'In preparation for M&A activity',
        'When evaluating HR technology investments'
      ] : [
        'Durante ciclos de planificación estratégica',
        'Antes de fases de crecimiento importantes',
        'En preparación para actividad M&A',
        'Al evaluar inversiones en tecnología RH'
      ],
      tags: ['maturity', 'assessment', 'strategic planning', 'technology']
    },
    {
      id: 'lifecycle-diagnostic',
      title: language === 'en' ? 'Business Lifecycle Stage Diagnostic' : 'Diagnóstico de Etapa del Ciclo de Vida del Negocio',
      chapter: 2,
      category: 'strategy',
      complexity: 'intermediate',
      timeToComplete: '30 minutes',
      description: language === 'en'
        ? 'Identify your organization\'s current lifecycle stage and stage-appropriate HR priorities for optimal growth'
        : 'Identifica la etapa actual del ciclo de vida de tu organización y prioridades RH apropiadas para crecimiento óptimo',
      keyQuestions: language === 'en' ? [
        'What stage of business evolution are you in?',
        'What are your current human capital challenges?',
        'How do your HR needs align with business growth?',
        'What are your strategic options timeline?'
      ] : [
        '¿En qué etapa de evolución del negocio estás?',
        '¿Cuáles son tus desafíos actuales de capital humano?',
        '¿Cómo se alinean tus necesidades RH con el crecimiento del negocio?',
        '¿Cuál es tu cronograma de opciones estratégicas?'
      ],
      deliverables: language === 'en' ? [
        'Lifecycle Stage Identification',
        'Stage-Specific Priority Matrix', 
        'Transition Planning Guide',
        'Success Indicators Dashboard'
      ] : [
        'Identificación de Etapa del Ciclo de Vida',
        'Matriz de Prioridades Específicas por Etapa',
        'Guía de Planificación de Transición',
        'Panel de Indicadores de Éxito'
      ],
      whenToUse: language === 'en' ? [
        'During annual strategic planning',
        'Before major growth initiatives',
        'In preparation for fundraising or M&A',
        'When HR strategy feels misaligned with business needs'
      ] : [
        'Durante planificación estratégica anual',
        'Antes de iniciativas de crecimiento importantes',
        'En preparación para recaudación de fondos o M&A',
        'Cuando la estrategia RH se siente desalineada con necesidades del negocio'
      ],
      tags: ['lifecycle', 'growth', 'strategy', 'planning']
    },
    {
      id: 'industry-pressure-map',
      title: language === 'en' ? 'Industry Pressure Mapping' : 'Mapeo de Presiones de la Industria',
      chapter: 3,
      category: 'strategy',
      complexity: 'intermediate',
      timeToComplete: '60 minutes',
      description: language === 'en'
        ? 'Map industry-specific HR challenges and competitive pressures to develop targeted talent strategies'
        : 'Mapea desafíos RH específicos de la industria y presiones competitivas para desarrollar estrategias de talento dirigidas',
      keyQuestions: language === 'en' ? [
        'What are your industry\'s unique talent challenges?',
        'How do regulatory requirements impact your HR strategy?',
        'What technology disruptions affect your workforce?',
        'How intense is competition for talent in your sector?'
      ] : [
        '¿Cuáles son los desafíos únicos de talento de tu industria?',
        '¿Cómo impactan los requisitos regulatorios tu estrategia RH?',
        '¿Qué disrupciones tecnológicas afectan tu fuerza laboral?',
        '¿Qué tan intensa es la competencia por talento en tu sector?'
      ],
      deliverables: language === 'en' ? [
        'Industry Challenge Matrix',
        'Competitive Talent Landscape',
        'Regulatory Compliance Roadmap',
        'Industry-Specific Action Plan'
      ] : [
        'Matriz de Desafíos de la Industria',
        'Panorama Competitivo de Talento',
        'Hoja de Ruta de Cumplimiento Regulatorio',
        'Plan de Acción Específico de la Industria'
      ],
      whenToUse: language === 'en' ? [
        'During strategic planning for industry-specific initiatives',
        'When entering new markets or industry verticals',
        'To benchmark HR practices against industry standards',
        'When developing industry-specific value propositions'
      ] : [
        'Durante planificación estratégica para iniciativas específicas de la industria',
        'Al entrar a nuevos mercados o verticales de industria',
        'Para comparar prácticas RH contra estándares de la industria',
        'Al desarrollar propuestas de valor específicas de la industria'
      ],
      tags: ['industry', 'competitive analysis', 'benchmarking', 'market']
    },
    {
      id: 'culture-design',
      title: language === 'en' ? 'Culture Design & Assessment Framework' : 'Marco de Diseño y Evaluación Cultural',
      chapter: 6,
      category: 'culture',
      complexity: 'advanced',
      timeToComplete: '90 minutes',
      description: language === 'en'
        ? 'Design, implement, and measure organizational culture that supports business strategy and drives performance'
        : 'Diseña, implementa y mide cultura organizacional que apoye la estrategia de negocio e impulse el rendimiento',
      keyQuestions: language === 'en' ? [
        'Are your cultural values clearly defined and behavioral?',
        'How well integrated is culture into your HR processes?',
        'Do you measure cultural alignment and business impact?',
        'Is your culture designed or emerging by default?'
      ] : [
        '¿Están tus valores culturales claramente definidos y son conductuales?',
        '¿Qué tan bien integrada está la cultura en tus procesos RH?',
        '¿Mides la alineación cultural y el impacto en el negocio?',
        '¿Tu cultura está diseñada o emerge por defecto?'
      ],
      deliverables: language === 'en' ? [
        'Behavioral Values Definition',
        'Culture Integration Checklist',
        'Culture Measurement Dashboard',
        'Culture Evolution Roadmap'
      ] : [
        'Definición de Valores Conductuales',
        'Lista de Verificación de Integración Cultural',
        'Panel de Medición Cultural',
        'Hoja de Ruta de Evolución Cultural'
      ],
      whenToUse: language === 'en' ? [
        'During organizational founding or major strategic transitions',
        'When culture and business strategy appear misaligned',
        'Following mergers, acquisitions, or significant growth',
        'When employee engagement or performance issues suggest cultural problems'
      ] : [
        'Durante fundación organizacional o transiciones estratégicas importantes',
        'Cuando cultura y estrategia de negocio parecen desalineadas',
        'Después de fusiones, adquisiciones o crecimiento significativo',
        'Cuando problemas de compromiso de empleados o rendimiento sugieren problemas culturales'
      ],
      tags: ['culture', 'values', 'engagement', 'performance']
    },
    {
      id: 'risk-assessment',
      title: language === 'en' ? 'Human Capital Risk Assessment' : 'Evaluación de Riesgo de Capital Humano',
      chapter: 5,
      category: 'risk',
      complexity: 'advanced',
      timeToComplete: '75 minutes',
      description: language === 'en'
        ? 'Systematically evaluate and address human capital risks across employment practices, compliance, and operational areas'
        : 'Evalúa y aborda sistemáticamente riesgos de capital humano en prácticas laborales, cumplimiento y áreas operacionales',
      keyQuestions: language === 'en' ? [
        'What is your employment practices liability exposure?',
        'How robust are your compliance and documentation practices?',
        'Do you have key person dependencies that create risk?',
        'How prepared are you for regulatory changes?'
      ] : [
        '¿Cuál es tu exposición de responsabilidad de prácticas laborales?',
        '¿Qué tan robustas son tus prácticas de cumplimiento y documentación?',
        '¿Tienes dependencias de personas clave que crean riesgo?',
        '¿Qué tan preparado estás para cambios regulatorios?'
      ],
      deliverables: language === 'en' ? [
        'Risk Assessment Matrix',
        'Compliance Gap Analysis',
        'Risk Mitigation Action Plan',
        'Monitoring & Alert System'
      ] : [
        'Matriz de Evaluación de Riesgo',
        'Análisis de Brechas de Cumplimiento',
        'Plan de Acción de Mitigación de Riesgo',
        'Sistema de Monitoreo y Alertas'
      ],
      whenToUse: language === 'en' ? [
        'During annual risk assessment cycles',
        'Before entering new markets or geographic locations',
        'When evaluating HR service provider options',
        'Following incidents or regulatory changes'
      ] : [
        'Durante ciclos de evaluación de riesgo anual',
        'Antes de entrar a nuevos mercados o ubicaciones geográficas',
        'Al evaluar opciones de proveedores de servicios RH',
        'Después de incidentes o cambios regulatorios'
      ],
      tags: ['risk management', 'compliance', 'legal', 'insurance']
    },
    {
      id: 'technology-strategy',
      title: language === 'en' ? 'HCM Technology Strategy Framework' : 'Marco de Estrategia de Tecnología HCM',
      chapter: 8,
      category: 'technology',
      complexity: 'advanced',
      timeToComplete: '120 minutes',
      description: language === 'en'
        ? 'Evaluate, select, and implement HCM technology that supports business strategy and organizational needs'
        : 'Evalúa, selecciona e implementa tecnología HCM que apoye la estrategia de negocio y necesidades organizacionales',
      keyQuestions: language === 'en' ? [
        'How well does your current technology support strategic objectives?',
        'What are your integration and scalability requirements?',
        'How ready is your organization for technology adoption?',
        'What ROI can you expect from technology investments?'
      ] : [
        '¿Qué tan bien tu tecnología actual apoya objetivos estratégicos?',
        '¿Cuáles son tus requisitos de integración y escalabilidad?',
        '¿Qué tan preparada está tu organización para adopción de tecnología?',
        '¿Qué ROI puedes esperar de inversiones en tecnología?'
      ],
      deliverables: language === 'en' ? [
        'Technology Readiness Assessment',
        'Platform Selection Criteria',
        'Implementation Roadmap',
        'ROI Measurement Framework'
      ] : [
        'Evaluación de Preparación Tecnológica',
        'Criterios de Selección de Plataforma',
        'Hoja de Ruta de Implementación',
        'Marco de Medición de ROI'
      ],
      whenToUse: language === 'en' ? [
        'During technology platform selection and procurement',
        'When evaluating existing technology effectiveness',
        'Before major system implementations or upgrades',
        'To optimize technology ROI and user adoption'
      ] : [
        'Durante selección y adquisición de plataforma tecnológica',
        'Al evaluar efectividad de tecnología existente',
        'Antes de implementaciones o actualizaciones importantes de sistemas',
        'Para optimizar ROI de tecnología y adopción de usuarios'
      ],
      tags: ['technology', 'digital transformation', 'AI', 'automation']
    },
    {
      id: 'vc-readiness-assessment',
      title: language === 'en' ? 'VC Readiness Assessment Framework' : 'Marco de Evaluación de Preparación VC',
      chapter: 9,
      category: 'investment',
      complexity: 'advanced',
      timeToComplete: '90 minutes',
      description: language === 'en'
        ? 'Comprehensive assessment framework to evaluate investment readiness using 2025 VC criteria for HCM SaaS startups'
        : 'Marco de evaluación integral para evaluar preparación de inversión usando criterios VC 2025 para startups HCM SaaS',
      keyQuestions: language === 'en' ? [
        'What is your current SaaS metrics performance against VC benchmarks?',
        'How defensible are your competitive moats and platform advantages?',
        'What is your market positioning relative to funded competitors?',
        'How ready is your team and data room for VC due diligence?'
      ] : [
        '¿Cuál es tu rendimiento actual de métricas SaaS contra benchmarks VC?',
        '¿Qué tan defendibles son tus fosos competitivos y ventajas de plataforma?',
        '¿Cuál es tu posicionamiento de mercado relativo a competidores financiados?',
        '¿Qué tan preparado está tu equipo y sala de datos para due diligence VC?'
      ],
      deliverables: language === 'en' ? [
        'VC Readiness Score (0-100%)',
        'SaaS Metrics Benchmarking Report',
        'Investment Positioning Strategy',
        '90-Day Funding Preparation Plan'
      ] : [
        'Puntuación de Preparación VC (0-100%)',
        'Reporte de Benchmarking de Métricas SaaS',
        'Estrategia de Posicionamiento de Inversión',
        'Plan de Preparación de Financiamiento de 90 Días'
      ],
      whenToUse: language === 'en' ? [
        'Before initiating fundraising process',
        'During annual strategic planning for growth companies',
        'When considering Series A/B funding rounds',
        'To optimize valuation and investor positioning'
      ] : [
        'Antes de iniciar proceso de recaudación de fondos',
        'Durante planificación estratégica anual para empresas en crecimiento',
        'Al considerar rondas de financiamiento Serie A/B',
        'Para optimizar valoración y posicionamiento con inversionistas'
      ],
      tags: ['vc readiness', 'fundraising', 'saas metrics', 'investment']
    },
    {
      id: 'saas-metrics-optimization',
      title: language === 'en' ? 'SaaS Metrics Optimization Framework' : 'Marco de Optimización de Métricas SaaS',
      chapter: 10,
      category: 'strategy',
      complexity: 'intermediate',
      timeToComplete: '60 minutes',
      description: language === 'en'
        ? 'Systematic framework to improve key SaaS metrics (NRR, LTV:CAC, Churn) based on HCM industry benchmarks'
        : 'Marco sistemático para mejorar métricas SaaS clave (NRR, LTV:CAC, Abandono) basado en benchmarks de la industria HCM',
      keyQuestions: language === 'en' ? [
        'Which SaaS metrics are underperforming vs. industry benchmarks?',
        'What are your primary drivers of customer churn and expansion?',
        'How can you optimize your customer acquisition and retention funnel?',
        'What operational changes will drive the biggest metric improvements?'
      ] : [
        '¿Qué métricas SaaS están por debajo de benchmarks de la industria?',
        '¿Cuáles son tus principales impulsores de abandono y expansión de clientes?',
        '¿Cómo puedes optimizar tu embudo de adquisición y retención de clientes?',
        '¿Qué cambios operacionales impulsarán las mayores mejoras de métricas?'
      ],
      deliverables: language === 'en' ? [
        'Metrics Performance Analysis',
        'Improvement Priority Matrix',
        'Operational Enhancement Plan',
        'KPI Tracking Dashboard'
      ] : [
        'Análisis de Rendimiento de Métricas',
        'Matriz de Prioridades de Mejora',
        'Plan de Mejoramiento Operacional',
        'Panel de Seguimiento de KPIs'
      ],
      whenToUse: language === 'en' ? [
        'When preparing for fundraising or investor meetings',
        'During quarterly business reviews and planning',
        'When SaaS metrics plateau or decline',
        'To optimize unit economics and growth efficiency'
      ] : [
        'Al prepararse para recaudación de fondos o reuniones con inversionistas',
        'Durante revisiones y planificación trimestral de negocio',
        'Cuando métricas SaaS se estancan o declinan',
        'Para optimizar economía unitaria y eficiencia de crecimiento'
      ],
      tags: ['saas metrics', 'nrr', 'churn', 'optimization']
    },
    {
      id: 'market-positioning-competitive',
      title: language === 'en' ? 'Market Positioning & Competitive Intelligence' : 'Posicionamiento de Mercado e Inteligencia Competitiva',
      chapter: 11,
      category: 'strategy',
      complexity: 'intermediate',
      timeToComplete: '75 minutes',
      description: language === 'en'
        ? 'Strategic framework to analyze competitive landscape and position your HCM solution for maximum market differentiation'
        : 'Marco estratégico para analizar panorama competitivo y posicionar tu solución HCM para máxima diferenciación de mercado',
      keyQuestions: language === 'en' ? [
        'How do you differentiate from funded competitors like Workday, Gusto, Rippling?',
        'What unique value propositions drive customer selection in your favor?',
        'Which market segments offer the highest growth potential?',
        'How can you leverage market trends to strengthen competitive position?'
      ] : [
        '¿Cómo te diferencias de competidores financiados como Workday, Gusto, Rippling?',
        '¿Qué propuestas de valor únicas impulsan selección de clientes a tu favor?',
        '¿Qué segmentos de mercado ofrecen el mayor potencial de crecimiento?',
        '¿Cómo puedes aprovechar tendencias de mercado para fortalecer posición competitiva?'
      ],
      deliverables: language === 'en' ? [
        'Competitive Landscape Analysis',
        'Differentiation Strategy Matrix',
        'Market Opportunity Assessment',
        'Positioning Playbook'
      ] : [
        'Análisis de Panorama Competitivo',
        'Matriz de Estrategia de Diferenciación',
        'Evaluación de Oportunidad de Mercado',
        'Manual de Posicionamiento'
      ],
      whenToUse: language === 'en' ? [
        'During product strategy and roadmap planning',
        'When entering new market segments',
        'Before major marketing or sales campaigns',
        'To support fundraising and investor positioning'
      ] : [
        'Durante planificación de estrategia de producto y hoja de ruta',
        'Al entrar a nuevos segmentos de mercado',
        'Antes de campañas importantes de marketing o ventas',
        'Para apoyar recaudación de fondos y posicionamiento con inversionistas'
      ],
      tags: ['competitive analysis', 'market positioning', 'differentiation', 'strategy']
    }
  ];

  const categories = [
    { id: 'all', label: currentLabels.all, icon: Book },
    { id: 'assessment', label: currentLabels.assessment, icon: Target },
    { id: 'strategy', label: currentLabels.strategy, icon: TrendingUp },
    { id: 'implementation', label: currentLabels.implementation, icon: Cog },
    { id: 'risk', label: currentLabels.risk, icon: Shield },
    { id: 'culture', label: currentLabels.culture, icon: Users },
    { id: 'technology', label: currentLabels.technology, icon: Brain },
    { id: 'investment', label: language === 'en' ? 'Investment & VC' : 'Inversión y VC', icon: DollarSign }
  ];

  const complexityLevels = [
    { id: 'all', label: currentLabels.all },
    { id: 'basic', label: currentLabels.basic },
    { id: 'intermediate', label: currentLabels.intermediate },
    { id: 'advanced', label: currentLabels.advanced }
  ];

  const filteredFrameworks = frameworks.filter(framework => {
    const matchesSearch = framework.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         framework.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         framework.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || framework.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || framework.complexity === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'basic': return 'bg-green-600/20 text-green-400 border-green-600/40';
      case 'intermediate': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/40';
      case 'advanced': return 'bg-red-600/20 text-red-400 border-red-600/40';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/40';
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryItem = categories.find(cat => cat.id === category);
    return categoryItem ? categoryItem.icon : Book;
  };

  if (selectedFramework) {
    const CategoryIcon = getCategoryIcon(selectedFramework.category);
    
    return (
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            onClick={() => setSelectedFramework(null)}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            ← {currentLabels.backToLibrary}
          </Button>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-600">
              <CategoryIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-white">{selectedFramework.title}</h1>
                <Badge className={getComplexityColor(selectedFramework.complexity)}>
                  {currentLabels[selectedFramework.complexity as keyof typeof currentLabels]}
                </Badge>
              </div>
              <p className="text-gray-400 mb-4">{selectedFramework.description}</p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Chapter {selectedFramework.chapter}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>{currentLabels.timeToComplete}: {selectedFramework.timeToComplete}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/80 border-green-500/30 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {currentLabels.keyQuestions}
              </h3>
              <div className="space-y-3">
                {selectedFramework.keyQuestions.map((question, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card/80 border-blue-500/30 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-400" />
                {currentLabels.deliverables}
              </h3>
              <div className="space-y-2">
                {selectedFramework.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card/80 border-purple-500/30 p-6 md:col-span-2">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                {currentLabels.whenToUse}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedFramework.whenToUse.map((scenario, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-purple-600/10 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{scenario}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              <Target className="w-4 h-4 mr-2" />
              {currentLabels.startFramework}
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <Download className="w-4 h-4 mr-2" />
              {currentLabels.downloadTemplate}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-600/20 border-blue-600/40 text-blue-400 px-4 py-2">
          <Book className="w-4 h-4 mr-2" />
          Strategic Intelligence
        </Badge>
        
        <h1 className="text-3xl font-bold text-white">
          {currentLabels.title}
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {currentLabels.subtitle}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder={currentLabels.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white"
            />
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">{currentLabels.categories}</label>
            <div className="flex gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">{currentLabels.complexity}</label>
            <div className="flex gap-2">
              {complexityLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedComplexity(level.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedComplexity === level.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Framework Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFrameworks.map((framework) => {
          const CategoryIcon = getCategoryIcon(framework.category);
          
          return (
            <Card key={framework.id} className="bg-card/80 border-gray-600 p-6 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-600">
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1 line-clamp-2">{framework.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getComplexityColor(framework.complexity)}>
                        {currentLabels[framework.complexity as keyof typeof currentLabels]}
                      </Badge>
                      <span className="text-xs text-gray-500">Ch. {framework.chapter}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm line-clamp-3">{framework.description}</p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    <span>{framework.timeToComplete}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{framework.deliverables.length} outputs</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {framework.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} className="bg-gray-700 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {framework.tags.length > 3 && (
                    <Badge className="bg-gray-700 text-gray-300 text-xs">
                      +{framework.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  onClick={() => setSelectedFramework(framework)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View Framework
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredFrameworks.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-400 mb-2">
            {language === 'en' ? 'No frameworks found' : 'No se encontraron marcos'}
          </h3>
          <p className="text-gray-500">
            {language === 'en' 
              ? 'Try adjusting your search criteria or filters'
              : 'Intenta ajustar tus criterios de búsqueda o filtros'
            }
          </p>
        </div>
      )}
    </div>
  );
}