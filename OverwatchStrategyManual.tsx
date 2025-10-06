import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BookOpen, 
  Download, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Users, 
  Building, 
  Target,
  Brain,
  DollarSign,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  BarChart3,
  Lightbulb,
  Lock,
  FileText,
  PlayCircle,
  ChevronRight,
  Eye,
  Clock
} from 'lucide-react';

interface StrategyManualProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  onBack?: () => void;
}

interface ChapterInfo {
  id: number;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: React.ReactNode;
  keyInsights: string[];
  keyInsightsEs: string[];
  readingTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  categoryEs: string;
}

export function OverwatchStrategyManual({ language, onNavigate, onBack }: StrategyManualProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const chapters: ChapterInfo[] = [
    {
      id: 1,
      title: 'Strategic HR Foundations',
      titleEs: 'Fundamentos de RH Estratégico',
      description: 'The three pillars of HR excellence: Admin HR, Process HR, and Strategic HR as force multiplier',
      descriptionEs: 'Los tres pilares de la excelencia en RH: RH Administrativo, RH de Procesos, y RH Estratégico como multiplicador de fuerza',
      icon: <Building className="w-5 h-5" />,
      keyInsights: [
        'HR Maturity Continuum: From reactive administration to predictive intelligence',
        'Cost of HR immaturity: $4,700 per hire, $675K wrongful termination settlements',
        'Force multiplier framework: Transform f(x) cost center to F(x) growth accelerator'
      ],
      keyInsightsEs: [
        'Continuo de Madurez RH: De administración reactiva a inteligencia predictiva',
        'Costo de inmadurez RH: $4,700 por contratación, $675K acuerdos por despido injustificado',
        'Marco multiplicador de fuerza: Transformar centro de costos f(x) a acelerador de crecimiento F(x)'
      ],
      readingTime: '15 min',
      difficulty: 'beginner',
      category: 'Foundation',
      categoryEs: 'Fundamentos'
    },
    {
      id: 2,
      title: 'Business Lifecycle Framework',
      titleEs: 'Marco del Ciclo de Vida Empresarial',
      description: 'Four stages of business evolution with distinct human capital requirements and strategic priorities',
      descriptionEs: 'Cuatro etapas de evolución empresarial con requisitos distintos de capital humano y prioridades estratégicas',
      icon: <TrendingUp className="w-5 h-5" />,
      keyInsights: [
        'Viability (0-10): Culture by design, not default - establish DNA before it forms',
        'Growth (10-100): Scale while maintaining culture through systematic processes',
        'Scale (100+): Optimize for efficiency while preparing for strategic options',
        'Exit: Maximize enterprise value through HR excellence and due diligence readiness'
      ],
      keyInsightsEs: [
        'Viabilidad (0-10): Cultura por diseño, no por defecto - establecer ADN antes de que se forme',
        'Crecimiento (10-100): Escalar manteniendo cultura através de procesos sistemáticos',
        'Escala (100+): Optimizar eficiencia preparándose para opciones estratégicas',
        'Salida: Maximizar valor empresarial através de excelencia RH y preparación due diligence'
      ],
      readingTime: '20 min',
      difficulty: 'intermediate',
      category: 'Strategy',
      categoryEs: 'Estrategia'
    },
    {
      id: 3,
      title: 'Industry-Specific Challenges',
      titleEs: 'Desafíos Específicos por Industria',
      description: 'Tailored strategies for Manufacturing, Engineering, Professional Services, and Marketing sectors',
      descriptionEs: 'Estrategias adaptadas para sectores de Manufactura, Ingeniería, Servicios Profesionales y Marketing',
      icon: <Briefcase className="w-5 h-5" />,
      keyInsights: [
        'Manufacturing: 2.1M jobs unfilled by 2030, safety culture drives productivity',
        'Engineering: Resource optimization through skills matching and utilization analytics',
        'Professional Services: Talent IS the product - 5% utilization = 8-12% revenue gain',
        'Marketing: Creative-commercial balance with stress analytics and burnout prevention'
      ],
      keyInsightsEs: [
        'Manufactura: 2.1M empleos sin llenar para 2030, cultura de seguridad impulsa productividad',
        'Ingeniería: Optimización de recursos através de emparejamiento de habilidades y analíticas de utilización',
        'Servicios Profesionales: Talento ES el producto - 5% utilización = 8-12% ganancia ingresos',
        'Marketing: Balance creativo-comercial con analíticas de estrés y prevención burnout'
      ],
      readingTime: '25 min',
      difficulty: 'advanced',
      category: 'Industry',
      categoryEs: 'Industria'
    },
    {
      id: 4,
      title: 'Company Type Profiles',
      titleEs: 'Perfiles de Tipos de Empresas',
      description: 'Understanding behavioral patterns of VC-backed, PE-backed, Family-owned, and Entrepreneur-led companies',
      descriptionEs: 'Comprendiendo patrones de comportamiento de empresas respaldadas por VC, PE, familiares y lideradas por emprendedores',
      icon: <Users className="w-5 h-5" />,
      keyInsights: [
        'VC-backed: Growth acceleration with equity management and board reporting',
        'PE-backed: Operational excellence with 3-7 year value creation timeline',
        'Family-owned: Legacy stewardship with generational transition planning',
        'Entrepreneur-led: Vision execution with founder leverage and culture building'
      ],
      keyInsightsEs: [
        'Respaldadas por VC: Aceleración de crecimiento con gestión de capital y reportes a junta',
        'Respaldadas por PE: Excelencia operacional con cronograma de creación de valor 3-7 años',
        'Familiares: Mayordomía de legado con planificación de transición generacional',
        'Lideradas por emprendedor: Ejecución de visión con apalancamiento fundador y construcción cultura'
      ],
      readingTime: '18 min',
      difficulty: 'intermediate',
      category: 'Strategy',
      categoryEs: 'Estrategia'
    },
    {
      id: 5,
      title: 'Risk Management & Compliance',
      titleEs: 'Gestión de Riesgos y Cumplimiento',
      description: 'Enterprise risk extends beyond compliance: employment, regulatory, financial, and reputational risks',
      descriptionEs: 'Riesgo empresarial se extiende más allá del cumplimiento: riesgos laborales, regulatorios, financieros y reputacionales',
      icon: <Shield className="w-5 h-5" />,
      keyInsights: [
        'Employment practices risk: $254K retaliation, $675K wrongful termination average',
        'Technology to co-employment continuum: Choose risk profile strategically',
        'Proactive compliance framework: Policy, training, documentation, technology'
      ],
      keyInsightsEs: [
        'Riesgo prácticas laborales: $254K represalias, $675K promedio despido injustificado',
        'Continuo tecnología a co-empleo: Elegir perfil de riesgo estratégicamente',
        'Marco cumplimiento proactivo: Política, entrenamiento, documentación, tecnología'
      ],
      readingTime: '22 min',
      difficulty: 'advanced',
      category: 'Risk',
      categoryEs: 'Riesgo'
    },
    {
      id: 6,
      title: 'Culture as Strategic Lever',
      titleEs: 'Cultura como Palanca Estratégica',
      description: 'Culture is not soft HR - it is the ultimate business multiplier with measurable ROI',
      descriptionEs: 'Cultura no es RH blando - es el multiplicador empresarial definitivo con ROI medible',
      icon: <Star className="w-5 h-5" />,
      keyInsights: [
        'Cultural ROI: +23% profitability, -81% absenteeism, -43% turnover',
        'Design vs. default: Intentional culture creation vs. accidental evolution',
        'Culture design framework: Definition, integration, evolution across 3 stages'
      ],
      keyInsightsEs: [
        'ROI Cultural: +23% rentabilidad, -81% ausentismo, -43% rotación',
        'Diseño vs. defecto: Creación cultura intencional vs. evolución accidental',
        'Marco diseño cultura: Definición, integración, evolución através de 3 etapas'
      ],
      readingTime: '20 min',
      difficulty: 'intermediate',
      category: 'Culture',
      categoryEs: 'Cultura'
    },
    {
      id: 7,
      title: 'Stakeholder Archetypes & Psychometrics',
      titleEs: 'Arquetipos de Stakeholders y Psicometría',
      description: 'Understanding psychological drivers and decision-making patterns of different leadership types',
      descriptionEs: 'Comprendiendo impulsores psicológicos y patrones de toma de decisiones de diferentes tipos de liderazgo',
      icon: <Brain className="w-5 h-5" />,
      keyInsights: [
        'Four archetypes: Visionary, Disruptor, Caretaker, Authoritarian',
        'Functional profiles: CEO (vision), CFO (ROI), COO (efficiency), CHRO (capability)',
        'Customized communication: Tailor messaging to psychological drivers and priorities'
      ],
      keyInsightsEs: [
        'Cuatro arquetipos: Visionario, Disruptor, Cuidador, Autoritario',
        'Perfiles funcionales: CEO (visión), CFO (ROI), COO (eficiencia), CHRO (capacidad)',
        'Comunicación personalizada: Adaptar mensajes a impulsores psicológicos y prioridades'
      ],
      readingTime: '16 min',
      difficulty: 'advanced',
      category: 'Psychology',
      categoryEs: 'Psicología'
    },
    {
      id: 8,
      title: 'HCM Technology Integration',
      titleEs: 'Integración de Tecnología HCM',
      description: 'Technology as strategy enabler, not replacement - amplifying human capital at scale',
      descriptionEs: 'Tecnología como habilitador de estrategia, no reemplazo - amplificando capital humano a escala',
      icon: <Target className="w-5 h-5" />,
      keyInsights: [
        'Technology stack: Core platform, process enhancement, strategic intelligence layers',
        'AI applications: 85%+ turnover prediction accuracy, personalized development',
        'Implementation: 18-month phased approach from foundation to strategic intelligence'
      ],
      keyInsightsEs: [
        'Stack tecnológico: Plataforma central, mejora procesos, capas inteligencia estratégica',
        'Aplicaciones IA: 85%+ precisión predicción rotación, desarrollo personalizado',
        'Implementación: Enfoque por fases 18 meses desde fundación hasta inteligencia estratégica'
      ],
      readingTime: '24 min',
      difficulty: 'advanced',
      category: 'Technology',
      categoryEs: 'Tecnología'
    },
    {
      id: 9,
      title: 'ROI & Financial Impact',
      titleEs: 'ROI e Impacto Financiero',
      description: 'Measuring and managing human capital investments like any other business investment',
      descriptionEs: 'Midiendo y gestionando inversiones de capital humano como cualquier otra inversión empresarial',
      icon: <DollarSign className="w-5 h-5" />,
      keyInsights: [
        'Comprehensive ROI model: Benefits (productivity, retention, quality) vs. costs',
        'Industry-specific frameworks: Manufacturing safety ROI, professional services utilization',
        'Leading and lagging indicators: Predict future performance and measure past results'
      ],
      keyInsightsEs: [
        'Modelo ROI integral: Beneficios (productividad, retención, calidad) vs. costos',
        'Marcos específicos industria: ROI seguridad manufactura, utilización servicios profesionales',
        'Indicadores adelantados y rezagados: Predecir rendimiento futuro y medir resultados pasados'
      ],
      readingTime: '28 min',
      difficulty: 'advanced',
      category: 'Finance',
      categoryEs: 'Finanzas'
    },
    {
      id: 10,
      title: 'M&A Human Capital Strategy',
      titleEs: 'Estrategia Capital Humano M&A',
      description: '70% of M&A fails due to human capital issues - systematic approach to due diligence and integration',
      descriptionEs: '70% de M&A falla por problemas capital humano - enfoque sistemático para due diligence e integración',
      icon: <Award className="w-5 h-5" />,
      keyInsights: [
        'Buy-side due diligence: Talent assessment, culture evaluation, compliance review',
        'Sell-side preparation: 15-25% enterprise value increase through HR readiness',
        'Integration timeline: Day 1, 30-day, 90-day, 180-day, 365-day milestones'
      ],
      keyInsightsEs: [
        'Due diligence comprador: Evaluación talento, evaluación cultura, revisión cumplimiento',
        'Preparación vendedor: 15-25% aumento valor empresarial através de preparación RH',
        'Cronograma integración: Día 1, 30-día, 90-día, 180-día, 365-día hitos'
      ],
      readingTime: '30 min',
      difficulty: 'advanced',
      category: 'M&A',
      categoryEs: 'M&A'
    },
    {
      id: 11,
      title: 'Future of Work & Adaptability',
      titleEs: 'Futuro del Trabajo y Adaptabilidad',
      description: 'Building adaptive capacity for continuous evolution rather than predicting specific changes',
      descriptionEs: 'Construyendo capacidad adaptativa para evolución continua en lugar de predecir cambios específicos',
      icon: <Globe className="w-5 h-5" />,
      keyInsights: [
        'Macro trends: AI amplification, demographic diversity, gig economy, skills shortage',
        'Adaptive organization: Learning orientation, structural flexibility, technology enablement',
        'Industry evolution: Manufacturing 4.0, digital professional services, AI-native tech'
      ],
      keyInsightsEs: [
        'Tendencias macro: Amplificación IA, diversidad demográfica, economía gig, escasez habilidades',
        'Organización adaptativa: Orientación aprendizaje, flexibilidad estructural, habilitación tecnológica',
        'Evolución industria: Manufactura 4.0, servicios profesionales digitales, tech nativo IA'
      ],
      readingTime: '26 min',
      difficulty: 'intermediate',
      category: 'Future',
      categoryEs: 'Futuro'
    },
    {
      id: 12,
      title: 'Implementation Roadmap',
      titleEs: 'Hoja de Ruta de Implementación',
      description: 'Systematic implementation across 24 months: Foundation, Core Systems, Strategic Capability, Optimization',
      descriptionEs: 'Implementación sistemática através de 24 meses: Fundación, Sistemas Centrales, Capacidad Estratégica, Optimización',
      icon: <BarChart3 className="w-5 h-5" />,
      keyInsights: [
        'Phase 1 (1-3 months): Foundation, assessment, vision, leadership alignment',
        'Phase 2 (4-9 months): Core systems, process standardization, manager development',
        'Phase 3 (10-18 months): Analytics, culture transformation, leadership pipeline',
        'Phase 4 (19-24 months): Optimization, innovation, strategic integration'
      ],
      keyInsightsEs: [
        'Fase 1 (1-3 meses): Fundación, evaluación, visión, alineación liderazgo',
        'Fase 2 (4-9 meses): Sistemas centrales, estandarización procesos, desarrollo gerentes',
        'Fase 3 (10-18 meses): Analíticas, transformación cultura, pipeline liderazgo',
        'Fase 4 (19-24 meses): Optimización, innovación, integración estratégica'
      ],
      readingTime: '35 min',
      difficulty: 'advanced',
      category: 'Implementation',
      categoryEs: 'Implementación'
    }
  ];

  const stats = [
    { value: '+23%', label: language === 'en' ? 'Higher Profitability' : 'Mayor Rentabilidad', subtitle: language === 'en' ? 'Organizations with engaged workforces' : 'Organizaciones con fuerzas laborales comprometidas' },
    { value: '-43%', label: language === 'en' ? 'Turnover Reduction' : 'Reducción de Rotación', subtitle: language === 'en' ? 'Low-turnover organizations with strong culture' : 'Organizaciones baja rotación con cultura fuerte' },
    { value: '+18%', label: language === 'en' ? 'Productivity Increase' : 'Aumento Productividad', subtitle: language === 'en' ? 'Individual and team performance improvement' : 'Mejora rendimiento individual y equipo' },
    { value: '2,500%', label: language === 'en' ? 'Average ROI' : 'ROI Promedio', subtitle: language === 'en' ? 'From strategic HCM implementation' : 'De implementación HCM estratégica' }
  ];

  const defensiveMoats = [
    {
      title: language === 'en' ? 'Bilingual-First Architecture' : 'Arquitectura Bilingüe Primero',
      description: language === 'en' ? 'One click transforms English to Spanish. Built from the ground up for true bilingual operations.' : 'Un clic transforma inglés a español. Construido desde cero para operaciones verdaderamente bilingües.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: language === 'en' ? 'Modular Schema Design' : 'Diseño de Esquema Modular',
      description: language === 'en' ? 'Schema-driven intelligence that adapts to your enterprise without breaking existing systems.' : 'Inteligencia impulsada por esquemas que se adapta a tu empresa sin romper sistemas existentes.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: language === 'en' ? 'Cinematic ROI Engine' : 'Motor ROI Cinemático',
      description: language === 'en' ? 'Every pilot becomes a live case study. ROI is not promised - it is proven on screen.' : 'Cada piloto se convierte en caso de estudio en vivo. ROI no se promete - se prueba en pantalla.',
      icon: <PlayCircle className="w-6 h-6" />
    }
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          // Here you would trigger the actual download
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onBack}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  {language === 'en' ? 'Back' : 'Volver'}
                </Button>
              )}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    {language === 'en' ? 'OVERWATCH Strategy Manual' : 'Manual de Estrategia OVERWATCH'}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Human Capital as a Force Multiplier: 20 Years of Strategic Intelligence' : 'Capital Humano como Multiplicador de Fuerza: 20 Años de Inteligencia Estratégica'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                onClick={() => onNavigate('investor-presentation')}
                variant="outline"
                size="sm"
                className="hidden lg:flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {language === 'en' ? 'View Demo' : 'Ver Demo'}
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white"
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {downloadProgress}%
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {language === 'en' ? 'Download Manual' : 'Descargar Manual'}
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">{language === 'en' ? 'Overview' : 'Resumen'}</TabsTrigger>
            <TabsTrigger value="chapters">{language === 'en' ? 'Chapters' : 'Capítulos'}</TabsTrigger>
            <TabsTrigger value="moats">{language === 'en' ? 'Defensive Moats' : 'Fosos Defensivos'}</TabsTrigger>
            <TabsTrigger value="download">{language === 'en' ? 'Get Manual' : 'Obtener Manual'}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="command-center-card text-center p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Introduction */}
            <Card className="command-center-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  {language === 'en' ? 'Proprietary Strategic Intelligence' : 'Inteligencia Estratégica Propietaria'}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === 'en' 
                    ? 'Proprietary frameworks, methodologies, and insights developed over 20+ years of human capital strategy consulting. Transform HR from cost center to competitive advantage.'
                    : 'Marcos propietarios, metodologías e insights desarrollados durante 20+ años de consultoría estratégica de capital humano. Transforma RH de centro de costos a ventaja competitiva.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? '12 comprehensive chapters' : '12 capítulos comprehensivos'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? '20+ tool cards for immediate implementation' : '20+ tarjetas herramientas para implementación inmediata'}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? 'Industry-specific strategies and ROI models' : 'Estrategias específicas industria y modelos ROI'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? 'Case studies and real-world examples' : 'Casos de estudio y ejemplos mundo real'}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? 'Exclusive access to OVERWATCH methodology' : 'Acceso exclusivo a metodología OVERWATCH'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{language === 'en' ? 'Bilingual support (English/Spanish)' : 'Soporte bilingüe (Inglés/Español)'}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Chapter Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.slice(0, 6).map((chapter) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: chapter.id * 0.05 }}
                >
                  <Card className="command-center-card cursor-pointer group hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setSelectedChapter(chapter.id);
                      setActiveTab('chapters');
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            {chapter.icon}
                          </div>
                          <div className="text-sm text-primary font-medium">
                            {language === 'en' ? `Chapter ${chapter.id}` : `Capítulo ${chapter.id}`}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {chapter.readingTime}
                        </Badge>
                      </div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {language === 'en' ? chapter.title : chapter.titleEs}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {language === 'en' ? chapter.description : chapter.descriptionEs}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Chapters Tab */}
          <TabsContent value="chapters" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chapter List */}
              <div className="lg:col-span-1 space-y-3">
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'en' ? 'All Chapters' : 'Todos los Capítulos'}
                </h3>
                {chapters.map((chapter) => (
                  <motion.div
                    key={chapter.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedChapter === chapter.id 
                          ? 'bg-primary/10 border-primary' 
                          : 'hover:bg-secondary/50'
                      }`}
                      onClick={() => setSelectedChapter(chapter.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            {chapter.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-primary font-medium">
                                {language === 'en' ? `Chapter ${chapter.id}` : `Capítulo ${chapter.id}`}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {chapter.readingTime}
                              </Badge>
                            </div>
                            <h4 className="font-medium text-sm line-clamp-2">
                              {language === 'en' ? chapter.title : chapter.titleEs}
                            </h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Chapter Detail */}
              <div className="lg:col-span-2">
                {selectedChapter ? (
                  <motion.div
                    key={selectedChapter}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(() => {
                      const chapter = chapters.find(c => c.id === selectedChapter)!;
                      return (
                        <Card className="command-center-card">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                  {chapter.icon}
                                </div>
                                <div>
                                  <div className="text-sm text-primary font-medium">
                                    {language === 'en' ? `Chapter ${chapter.id}` : `Capítulo ${chapter.id}`}
                                  </div>
                                  <CardTitle className="text-xl">
                                    {language === 'en' ? chapter.title : chapter.titleEs}
                                  </CardTitle>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="gap-1">
                                  <Clock className="w-3 h-3" />
                                  {chapter.readingTime}
                                </Badge>
                                <Badge 
                                  variant={chapter.difficulty === 'beginner' ? 'default' : 
                                          chapter.difficulty === 'intermediate' ? 'secondary' : 'destructive'}
                                >
                                  {chapter.difficulty}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {language === 'en' ? chapter.description : chapter.descriptionEs}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                {language === 'en' ? 'Key Insights:' : 'Insights Clave:'}
                              </h4>
                              <ul className="space-y-2">
                                {(language === 'en' ? chapter.keyInsights : chapter.keyInsightsEs).map((insight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{insight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="pt-4 border-t border-border">
                              <Button 
                                onClick={handleDownload}
                                className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                {language === 'en' ? 'Get Full Chapter' : 'Obtener Capítulo Completo'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <Card className="command-center-card h-96 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        {language === 'en' ? 'Select a Chapter' : 'Selecciona un Capítulo'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'en' 
                          ? 'Choose a chapter from the list to view detailed insights and key takeaways'
                          : 'Elige un capítulo de la lista para ver insights detallados y puntos clave'
                        }
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Defensive Moats Tab */}
          <TabsContent value="moats" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Three Defensive Moats' : 'Tres Fosos Defensivos'}
              </h2>
              <p className="text-muted-foreground text-lg">
                {language === 'en' 
                  ? 'What makes OVERWATCH³ different from other SaaS tools'
                  : 'Lo que hace a OVERWATCH³ diferente de otras herramientas SaaS'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {defensiveMoats.map((moat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="command-center-card h-full text-center p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      {moat.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{moat.title}</h3>
                    <p className="text-muted-foreground">{moat.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional benefits */}
            <Card className="command-center-card">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === 'en' ? 'Why OVERWATCH³ Is Different' : 'Por Qué OVERWATCH³ Es Diferente'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {language === 'en' ? 'Born from Founder Chaos' : 'Nacido del Caos Fundador'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' 
                            ? 'Built by a solo founder who lived the pain of siloed SaaS - HCM, ERP, EPM, CRM - with no proof of ROI.'
                            : 'Construido por un fundador solo que vivió el dolor de SaaS siloed - HCM, ERP, EPM, CRM - sin prueba de ROI.'
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {language === 'en' ? 'Three Defensive Moats' : 'Tres Fosos Defensivos'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' 
                            ? 'Bilingual-first architecture, modular schema, and cinematic ROI engine. Not another SaaS tool.'
                            : 'Arquitectura bilingüe primero, esquema modular, y motor ROI cinemático. No otra herramienta SaaS.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <PlayCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {language === 'en' ? 'Live ROI Proof' : 'Prueba ROI en Vivo'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' 
                            ? 'Every founder-led deployment becomes a cinematic case study. See ROI proven in real-time, on screen.'
                            : 'Cada despliegue liderado por fundador se convierte en caso de estudio cinemático. Ve ROI probado en tiempo real, en pantalla.'
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          {language === 'en' ? 'Command Center, Not Tool' : 'Centro de Comando, No Herramienta'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' 
                            ? 'This is not another SaaS subscription. It is where enterprises command their entire operation.'
                            : 'Esto no es otra suscripción SaaS. Es donde las empresas comandan toda su operación.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Download Tab */}
          <TabsContent value="download" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <Card className="command-center-card text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'en' ? 'Download the Complete 80-Page Manual' : 'Descarga el Manual Completo de 80 Páginas'}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {language === 'en' 
                    ? 'Get the full strategy manual with detailed frameworks, tool cards, and implementation guides'
                    : 'Obtén el manual de estrategia completo con marcos detallados, tarjetas de herramientas y guías de implementación'
                  }
                </p>

                {/* What You'll Get */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      {language === 'en' ? 'What You\'ll Get:' : 'Lo Que Obtendrás:'}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? '80+ pages of strategic frameworks' : '80+ páginas de marcos estratégicos'}
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? '20+ ready-to-use tool cards' : '20+ tarjetas herramientas listas para usar'}
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Industry-specific ROI models' : 'Modelos ROI específicos industria'}
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Lock className="w-5 h-5 text-primary" />
                      {language === 'en' ? 'Exclusive Content:' : 'Contenido Exclusivo:'}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Implementation roadmaps' : 'Hojas de ruta implementación'}
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'M&A due diligence checklists' : 'Listas verificación due diligence M&A'}
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Stakeholder communication templates' : 'Plantillas comunicación stakeholders'}
                      </li>
                    </ul>
                  </div>
                </div>

                {isDownloading && (
                  <div className="mb-6">
                    <Progress value={downloadProgress} className="w-full" />
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === 'en' ? `Preparing download... ${downloadProgress}%` : `Preparando descarga... ${downloadProgress}%`}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white px-8"
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {language === 'en' ? 'Downloading...' : 'Descargando...'}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        {language === 'en' ? 'Download Full Manual (PDF)' : 'Descargar Manual Completo (PDF)'}
                      </div>
                    )}
                  </Button>
                  <Button
                    onClick={() => onNavigate('demo')}
                    variant="outline"
                    size="lg"
                    className="px-8"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {language === 'en' ? 'Schedule Strategy Session' : 'Programar Sesión Estrategia'}
                  </Button>
                </div>
              </Card>

              {/* Footer */}
              <div className="text-center mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © 2025 OVERWATCH. {language === 'en' ? 'Proprietary and Confidential. Advisory-Grade Human Capital Management.' : 'Propietario y Confidencial. Gestión de Capital Humano Grado Asesor.'}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}