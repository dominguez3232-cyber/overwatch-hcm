import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Calendar, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Clock,
  AlertTriangle,
  Download,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Zap,
  Building,
  Cog,
  Brain
} from 'lucide-react';

interface Phase {
  id: string;
  name: string;
  duration: string;
  description: string;
  objectives: string[];
  activities: Activity[];
  deliverables: string[];
  risks: string[];
  dependencies: string[];
}

interface Activity {
  id: string;
  name: string;
  duration: string;
  owner: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface ImplementationRoadmapGeneratorProps {
  language: 'en' | 'es';
}

export function ImplementationRoadmapGenerator({ language }: ImplementationRoadmapGeneratorProps) {
  const [selectedCompanySize, setSelectedCompanySize] = useState<'startup' | 'growth' | 'scale' | 'enterprise'>('growth');
  const [selectedIndustry, setSelectedIndustry] = useState<'manufacturing' | 'professional-services' | 'technology' | 'general'>('professional-services');
  const [selectedFocus, setSelectedFocus] = useState<'foundation' | 'optimization' | 'transformation'>('foundation');
  const [roadmapGenerated, setRoadmapGenerated] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const labels = {
    en: {
      title: "Implementation Roadmap Generator",
      subtitle: "Transform HR from Cost Center to Strategic Advantage",
      companySize: "Company Size",
      industry: "Industry Focus",
      implementationFocus: "Implementation Focus",
      generateRoadmap: "Generate Custom Roadmap",
      downloadRoadmap: "Download Roadmap",
      startImplementation: "Start Implementation",
      phase: "Phase",
      duration: "Duration",
      objectives: "Key Objectives",
      activities: "Core Activities",
      deliverables: "Deliverables",
      risks: "Risk Factors",
      dependencies: "Dependencies",
      status: "Status",
      progress: "Progress",
      timeline: "Timeline",
      resources: "Resources Needed",
      successMetrics: "Success Metrics"
    },
    es: {
      title: "Generador de Hoja de Ruta de Implementación",
      subtitle: "Transforma RH de Centro de Costos a Ventaja Estratégica",
      companySize: "Tamaño de Empresa",
      industry: "Enfoque de Industria",
      implementationFocus: "Enfoque de Implementación",
      generateRoadmap: "Generar Hoja de Ruta Personalizada",
      downloadRoadmap: "Descargar Hoja de Ruta",
      startImplementation: "Iniciar Implementación",
      phase: "Fase",
      duration: "Duración",
      objectives: "Objetivos Clave",
      activities: "Actividades Principales",
      deliverables: "Entregables",
      risks: "Factores de Riesgo",
      dependencies: "Dependencias",
      status: "Estado",
      progress: "Progreso",
      timeline: "Cronograma",
      resources: "Recursos Necesarios",
      successMetrics: "Métricas de Éxito"
    }
  };

  const currentLabels = labels[language];

  const companySizes = {
    en: [
      { id: 'startup', label: 'Startup (0-25)', description: 'Viability stage, building foundation' },
      { id: 'growth', label: 'Growth (25-100)', description: 'Scaling operations, maintaining culture' },
      { id: 'scale', label: 'Scale (100-500)', description: 'Optimizing efficiency, strategic options' },
      { id: 'enterprise', label: 'Enterprise (500+)', description: 'Predictive intelligence, competitive advantage' }
    ],
    es: [
      { id: 'startup', label: 'Startup (0-25)', description: 'Etapa de viabilidad, construyendo fundación' },
      { id: 'growth', label: 'Crecimiento (25-100)', description: 'Escalando operaciones, manteniendo cultura' },
      { id: 'scale', label: 'Escala (100-500)', description: 'Optimizando eficiencia, opciones estratégicas' },
      { id: 'enterprise', label: 'Empresa (500+)', description: 'Inteligencia predictiva, ventaja competitiva' }
    ]
  };

  const industries = {
    en: [
      { id: 'manufacturing', label: 'Manufacturing', icon: Building },
      { id: 'professional-services', label: 'Professional Services', icon: Users },
      { id: 'technology', label: 'Technology', icon: Brain },
      { id: 'general', label: 'General Business', icon: Target }
    ],
    es: [
      { id: 'manufacturing', label: 'Manufactura', icon: Building },
      { id: 'professional-services', label: 'Servicios Profesionales', icon: Users },
      { id: 'technology', label: 'Tecnología', icon: Brain },
      { id: 'general', label: 'Negocio General', icon: Target }
    ]
  };

  const focusAreas = {
    en: [
      { id: 'foundation', label: 'Foundation Building', description: 'Establish core HR capabilities and compliance' },
      { id: 'optimization', label: 'Process Optimization', description: 'Streamline operations and improve efficiency' },
      { id: 'transformation', label: 'Strategic Transformation', description: 'Achieve force multiplier status with advanced analytics' }
    ],
    es: [
      { id: 'foundation', label: 'Construcción de Fundación', description: 'Establecer capacidades RH principales y cumplimiento' },
      { id: 'optimization', label: 'Optimización de Procesos', description: 'Optimizar operaciones y mejorar eficiencia' },
      { id: 'transformation', label: 'Transformación Estratégica', description: 'Lograr estatus de multiplicador de fuerza con analítica avanzada' }
    ]
  };

  const generateRoadmap = (): Phase[] => {
    // This would typically call an API or use more sophisticated logic
    // For now, returning a sample roadmap based on selections
    
    const basePhases: Phase[] = [
      {
        id: 'foundation',
        name: language === 'en' ? 'Foundation & Assessment' : 'Fundación y Evaluación',
        duration: '3 months',
        description: language === 'en' 
          ? 'Establish strategic alignment and assess current state capabilities'
          : 'Establecer alineación estratégica y evaluar capacidades del estado actual',
        objectives: language === 'en' ? [
          'CEO sponsorship and C-suite alignment on human capital transformation',
          'Comprehensive audit of existing HR capabilities and processes',
          'Employee engagement and culture baseline measurement',
          'Vision and strategy development with clear success metrics'
        ] : [
          'Patrocinio del CEO y alineación C-suite en transformación de capital humano',
          'Auditoría integral de capacidades y procesos RH existentes',
          'Medición baseline de compromiso de empleados y cultura',
          'Desarrollo de visión y estrategia con métricas de éxito claras'
        ],
        activities: [
          {
            id: 'exec-alignment',
            name: language === 'en' ? 'Executive Team Alignment' : 'Alineación del Equipo Ejecutivo',
            duration: '2 weeks',
            owner: 'CEO/CHRO',
            status: 'not-started',
            priority: 'critical'
          },
          {
            id: 'current-state',
            name: language === 'en' ? 'Current State Assessment' : 'Evaluación del Estado Actual',
            duration: '4 weeks',
            owner: 'HR Team',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'baseline-metrics',
            name: language === 'en' ? 'Baseline Metrics Collection' : 'Recolección de Métricas Baseline',
            duration: '3 weeks',
            owner: 'Analytics Lead',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'strategy-dev',
            name: language === 'en' ? 'Strategy Development' : 'Desarrollo de Estrategia',
            duration: '4 weeks',
            owner: 'Leadership Team',
            status: 'not-started',
            priority: 'critical'
          }
        ],
        deliverables: language === 'en' ? [
          'Executive Commitment Charter',
          'Current State Assessment Report',
          'Baseline Metrics Dashboard',
          'Strategic Vision & Roadmap Document'
        ] : [
          'Carta de Compromiso Ejecutivo',
          'Reporte de Evaluación del Estado Actual',
          'Panel de Métricas Baseline',
          'Documento de Visión Estratégica y Hoja de Ruta'
        ],
        risks: language === 'en' ? [
          'Insufficient executive commitment',
          'Resistance to change from existing team',
          'Incomplete data collection',
          'Competing strategic priorities'
        ] : [
          'Compromiso ejecutivo insuficiente',
          'Resistencia al cambio del equipo existente',
          'Recolección de datos incompleta',
          'Prioridades estratégicas competidoras'
        ],
        dependencies: language === 'en' ? [
          'Board approval for transformation initiative',
          'Access to historical HR data',
          'Employee survey participation',
          'External consultant selection (if needed)'
        ] : [
          'Aprobación de la junta para iniciativa de transformación',
          'Acceso a datos históricos RH',
          'Participación en encuesta de empleados',
          'Selección de consultor externo (si es necesario)'
        ]
      },
      {
        id: 'implementation',
        name: language === 'en' ? 'Core System Implementation' : 'Implementación de Sistema Principal',
        duration: '6 months',
        description: language === 'en'
          ? 'Deploy foundational technology and standardize core HR processes'
          : 'Desplegar tecnología fundamental y estandarizar procesos RH principales',
        objectives: language === 'en' ? [
          'HRIS system implementation with data migration and integration',
          'Standardized hiring, performance management, and development processes',
          'Manager development and training program deployment',
          'Compliance framework and risk management system establishment'
        ] : [
          'Implementación de sistema HRIS con migración e integración de datos',
          'Procesos estandarizados de contratación, gestión de rendimiento y desarrollo',
          'Despliegue de programa de desarrollo y entrenamiento de gerentes',
          'Establecimiento de marco de cumplimiento y sistema de gestión de riesgo'
        ],
        activities: [
          {
            id: 'hris-implementation',
            name: language === 'en' ? 'HRIS Platform Deployment' : 'Despliegue de Plataforma HRIS',
            duration: '8 weeks',
            owner: 'IT/HR Team',
            status: 'not-started',
            priority: 'critical'
          },
          {
            id: 'process-standardization',
            name: language === 'en' ? 'Process Standardization' : 'Estandarización de Procesos',
            duration: '10 weeks',
            owner: 'HR Operations',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'manager-training',
            name: language === 'en' ? 'Manager Development Program' : 'Programa de Desarrollo de Gerentes',
            duration: '12 weeks',
            owner: 'L&D Team',
            status: 'not-started',
            priority: 'medium'
          },
          {
            id: 'compliance-framework',
            name: language === 'en' ? 'Compliance Framework Setup' : 'Configuración de Marco de Cumplimiento',
            duration: '6 weeks',
            owner: 'Legal/HR',
            status: 'not-started',
            priority: 'high'
          }
        ],
        deliverables: language === 'en' ? [
          'Fully Operational HRIS Platform',
          'Standardized HR Process Documentation',
          'Manager Training Certification Program',
          'Compliance Monitoring System'
        ] : [
          'Plataforma HRIS Completamente Operacional',
          'Documentación de Procesos RH Estandarizados',
          'Programa de Certificación de Entrenamiento de Gerentes',
          'Sistema de Monitoreo de Cumplimiento'
        ],
        risks: language === 'en' ? [
          'Technology implementation delays',
          'User adoption resistance',
          'Data migration issues',
          'Process change management challenges'
        ] : [
          'Retrasos en implementación de tecnología',
          'Resistencia a adopción de usuarios',
          'Problemas de migración de datos',
          'Desafíos de gestión de cambio de procesos'
        ],
        dependencies: language === 'en' ? [
          'Successful completion of Phase 1',
          'Technology vendor selection and contracts',
          'Training material development',
          'Change management team formation'
        ] : [
          'Finalización exitosa de Fase 1',
          'Selección de proveedor de tecnología y contratos',
          'Desarrollo de materiales de entrenamiento',
          'Formación de equipo de gestión de cambio'
        ]
      },
      {
        id: 'strategic',
        name: language === 'en' ? 'Strategic Capability Development' : 'Desarrollo de Capacidad Estratégica',
        duration: '8 months',
        description: language === 'en'
          ? 'Build advanced analytics and strategic HR capabilities for competitive advantage'
          : 'Construir analítica avanzada y capacidades RH estratégicas para ventaja competitiva',
        objectives: language === 'en' ? [
          'People analytics and predictive modeling implementation',
          'Cultural transformation and measurement system deployment',
          'Leadership pipeline and succession planning development',
          'Strategic workforce planning and future capability assessment'
        ] : [
          'Implementación de analítica de personas y modelado predictivo',
          'Despliegue de transformación cultural y sistema de medición',
          'Desarrollo de pipeline de liderazgo y planificación de sucesión',
          'Planificación estratégica de fuerza laboral y evaluación de capacidad futura'
        ],
        activities: [
          {
            id: 'people-analytics',
            name: language === 'en' ? 'People Analytics Platform' : 'Plataforma de Analítica de Personas',
            duration: '12 weeks',
            owner: 'Analytics Team',
            status: 'not-started',
            priority: 'critical'
          },
          {
            id: 'culture-transformation',
            name: language === 'en' ? 'Culture Transformation Initiative' : 'Iniciativa de Transformación Cultural',
            duration: '16 weeks',
            owner: 'Culture Team',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'leadership-pipeline',
            name: language === 'en' ? 'Leadership Pipeline Development' : 'Desarrollo de Pipeline de Liderazgo',
            duration: '20 weeks',
            owner: 'Executive Team',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'workforce-planning',
            name: language === 'en' ? 'Strategic Workforce Planning' : 'Planificación Estratégica de Fuerza Laboral',
            duration: '14 weeks',
            owner: 'Strategy Team',
            status: 'not-started',
            priority: 'medium'
          }
        ],
        deliverables: language === 'en' ? [
          'Predictive Analytics Dashboard',
          'Culture Measurement & Improvement System',
          'Leadership Development & Succession Plans',
          'Future Workforce Strategy & Capability Map'
        ] : [
          'Panel de Analítica Predictiva',
          'Sistema de Medición y Mejora Cultural',
          'Planes de Desarrollo de Liderazgo y Sucesión',
          'Estrategia de Fuerza Laboral Futura y Mapa de Capacidades'
        ],
        risks: language === 'en' ? [
          'Data quality and availability issues',
          'Cultural resistance to measurement',
          'Leadership development capacity constraints',
          'Strategic planning complexity'
        ] : [
          'Problemas de calidad y disponibilidad de datos',
          'Resistencia cultural a la medición',
          'Limitaciones de capacidad de desarrollo de liderazgo',
          'Complejidad de planificación estratégica'
        ],
        dependencies: language === 'en' ? [
          'Successful completion of Phase 2',
          'Advanced analytics tool selection',
          'Leadership commitment to culture change',
          'Strategic planning cycle alignment'
        ] : [
          'Finalización exitosa de Fase 2',
          'Selección de herramientas de analítica avanzada',
          'Compromiso de liderazgo con cambio cultural',
          'Alineación con ciclo de planificación estratégica'
        ]
      },
      {
        id: 'optimization',
        name: language === 'en' ? 'Optimization & Innovation' : 'Optimización e Innovación',
        duration: '6 months',
        description: language === 'en'
          ? 'Achieve sustainable competitive advantage through continuous improvement and innovation'
          : 'Lograr ventaja competitiva sostenible através de mejora continua e innovación',
        objectives: language === 'en' ? [
          'ROI measurement and business impact analysis completion',
          'Innovation and experimentation culture establishment',
          'Strategic integration with business objectives verification',
          'Future planning and sustainability system development'
        ] : [
          'Finalización de medición ROI y análisis de impacto en negocio',
          'Establecimiento de cultura de innovación y experimentación',
          'Verificación de integración estratégica con objetivos de negocio',
          'Desarrollo de sistema de planificación futura y sostenibilidad'
        ],
        activities: [
          {
            id: 'roi-analysis',
            name: language === 'en' ? 'ROI & Business Impact Analysis' : 'Análisis de ROI e Impacto en Negocio',
            duration: '8 weeks',
            owner: 'Finance/HR',
            status: 'not-started',
            priority: 'critical'
          },
          {
            id: 'innovation-culture',
            name: language === 'en' ? 'Innovation Culture Development' : 'Desarrollo de Cultura de Innovación',
            duration: '12 weeks',
            owner: 'Innovation Team',
            status: 'not-started',
            priority: 'medium'
          },
          {
            id: 'strategic-integration',
            name: language === 'en' ? 'Strategic Integration Review' : 'Revisión de Integración Estratégica',
            duration: '6 weeks',
            owner: 'Executive Team',
            status: 'not-started',
            priority: 'high'
          },
          {
            id: 'future-planning',
            name: language === 'en' ? 'Future Planning & Sustainability' : 'Planificación Futura y Sostenibilidad',
            duration: '10 weeks',
            owner: 'Strategy Team',
            status: 'not-started',
            priority: 'medium'
          }
        ],
        deliverables: language === 'en' ? [
          'Comprehensive ROI & Impact Report',
          'Innovation Framework & Pilot Programs',
          'Strategic Alignment Verification',
          'Future Readiness & Sustainability Plan'
        ] : [
          'Reporte Integral de ROI e Impacto',
          'Marco de Innovación y Programas Piloto',
          'Verificación de Alineación Estratégica',
          'Plan de Preparación Futura y Sostenibilidad'
        ],
        risks: language === 'en' ? [
          'ROI measurement challenges',
          'Innovation adoption resistance',
          'Strategic misalignment discovery',
          'Sustainability planning complexity'
        ] : [
          'Desafíos de medición de ROI',
          'Resistencia a adopción de innovación',
          'Descubrimiento de desalineación estratégica',
          'Complejidad de planificación de sostenibilidad'
        ],
        dependencies: language === 'en' ? [
          'Successful completion of Phase 3',
          'Financial data access and analysis',
          'Innovation budget allocation',
          'Long-term strategic planning process'
        ] : [
          'Finalización exitosa de Fase 3',
          'Acceso y análisis de datos financieros',
          'Asignación de presupuesto de innovación',
          'Proceso de planificación estratégica a largo plazo'
        ]
      }
    ];

    return basePhases;
  };

  const [phases, setPhases] = useState<Phase[]>([]);

  const handleGenerateRoadmap = () => {
    const generatedPhases = generateRoadmap();
    setPhases(generatedPhases);
    setRoadmapGenerated(true);
  };

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-600/20 text-green-400 border-green-600/40';
      case 'in-progress': return 'bg-blue-600/20 text-blue-400 border-blue-600/40';
      case 'blocked': return 'bg-red-600/20 text-red-400 border-red-600/40';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/40';
    }
  };

  const getPriorityColor = (priority: Activity['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-600/20 text-red-400 border-red-600/40';
      case 'high': return 'bg-orange-600/20 text-orange-400 border-orange-600/40';
      case 'medium': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/40';
      default: return 'bg-green-600/20 text-green-400 border-green-600/40';
    }
  };

  if (!roadmapGenerated) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-purple-600/20 border-purple-600/40 text-purple-400 px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Implementation Planning
          </Badge>
          
          <h1 className="text-3xl font-bold text-white">
            {currentLabels.title}
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>
        </div>

        {/* Configuration Options */}
        <div className="space-y-8">
          {/* Company Size */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">{currentLabels.companySize}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {companySizes[language].map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedCompanySize(size.id as any)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    selectedCompanySize === size.id
                      ? 'border-blue-500 bg-blue-600/10'
                      : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                  }`}
                >
                  <h3 className="font-medium text-white mb-1">{size.label}</h3>
                  <p className="text-sm text-gray-400">{size.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">{currentLabels.industry}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries[language].map((industry) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id as any)}
                    className={`p-4 rounded-lg border text-center transition-colors ${
                      selectedIndustry === industry.id
                        ? 'border-green-500 bg-green-600/10'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <h3 className="font-medium text-white">{industry.label}</h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Implementation Focus */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">{currentLabels.implementationFocus}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {focusAreas[language].map((focus) => (
                <button
                  key={focus.id}
                  onClick={() => setSelectedFocus(focus.id as any)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    selectedFocus === focus.id
                      ? 'border-purple-500 bg-purple-600/10'
                      : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                  }`}
                >
                  <h3 className="font-medium text-white mb-2">{focus.label}</h3>
                  <p className="text-sm text-gray-400">{focus.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <Button 
              onClick={handleGenerateRoadmap}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {currentLabels.generateRoadmap}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentLabels.title}
          </h1>
          <p className="text-gray-400">
            {companySizes[language].find(s => s.id === selectedCompanySize)?.label} • {' '}
            {industries[language].find(i => i.id === selectedIndustry)?.label} • {' '}
            {focusAreas[language].find(f => f.id === selectedFocus)?.label}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => setRoadmapGenerated(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            {currentLabels.downloadRoadmap}
          </Button>
          
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Play className="w-4 h-4 mr-2" />
            {currentLabels.startImplementation}
          </Button>
        </div>
      </div>

      {/* Timeline Overview */}
      <Card className="bg-card/80 border-purple-500/30 p-6">
        <h2 className="text-xl font-bold text-white mb-4">{currentLabels.timeline}</h2>
        <div className="flex items-center gap-4 mb-4">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex-1">
              <div 
                className={`h-2 rounded-full ${
                  index <= currentPhase ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
              <div className="mt-2 text-sm">
                <div className={`font-medium ${index <= currentPhase ? 'text-purple-400' : 'text-gray-400'}`}>
                  {phase.name}
                </div>
                <div className="text-gray-500">{phase.duration}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400">
          Total Duration: ~23 months • Current Phase: {phases[currentPhase]?.name}
        </div>
      </Card>

      {/* Phase Details */}
      <div className="space-y-6">
        {phases.map((phase, phaseIndex) => (
          <Card key={phase.id} className={`border transition-colors ${
            phaseIndex === currentPhase 
              ? 'border-purple-500/50 bg-purple-600/5' 
              : 'border-gray-600 bg-card/80'
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    phaseIndex === currentPhase ? 'bg-purple-600' : 'bg-gray-600'
                  }`}>
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {currentLabels.phase} {phaseIndex + 1}: {phase.name}
                    </h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-400">{currentLabels.duration}</div>
                  <div className="font-medium text-white">{phase.duration}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Objectives */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    {currentLabels.objectives}
                  </h4>
                  <div className="space-y-2">
                    {phase.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Cog className="w-4 h-4 text-blue-400" />
                    {currentLabels.activities}
                  </h4>
                  <div className="space-y-3">
                    {phase.activities.map((activity) => (
                      <div key={activity.id} className="p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white text-sm">{activity.name}</span>
                          <div className="flex gap-2">
                            <Badge className={getStatusColor(activity.status)}>
                              {activity.status}
                            </Badge>
                            <Badge className={getPriorityColor(activity.priority)}>
                              {activity.priority}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{activity.duration}</span>
                          <span>Owner: {activity.owner}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    {currentLabels.deliverables}
                  </h4>
                  <div className="space-y-2">
                    {phase.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-gray-300 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risks & Dependencies */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      {currentLabels.risks}
                    </h4>
                    <div className="space-y-1">
                      {phase.risks.map((risk, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      {currentLabels.dependencies}
                    </h4>
                    <div className="space-y-1">
                      {phase.dependencies.map((dependency, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{dependency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Success Metrics Summary */}
      <Card className="bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 border-green-500/30 p-6">
        <h2 className="text-xl font-bold text-white mb-4">{currentLabels.successMetrics}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">7.15:1</div>
            <div className="text-sm text-gray-400">Expected ROI Multiple</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">23%</div>
            <div className="text-sm text-gray-400">Profitability Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">43%</div>
            <div className="text-sm text-gray-400">Turnover Reduction</div>
          </div>
        </div>
      </Card>
    </div>
  );
}