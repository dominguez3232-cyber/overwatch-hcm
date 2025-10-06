import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  AlertTriangle, Shield, TrendingUp, DollarSign, Calculator, BarChart3,
  Target, Users, Building, Factory, Briefcase, Award, Eye, Brain,
  ChevronRight, Plus, Minus, Info, Settings, Clock, CheckCircle,
  AlertCircle, XCircle, Activity, PieChart, LineChart, Zap,
  FileText, Search, Filter, RefreshCw, Download
} from 'lucide-react';

interface PLRiskMitigationCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type RiskCategory = 'revenue' | 'cogs' | 'operating' | 'non-operating';
type Industry = 'manufacturing' | 'professional-services' | 'technology' | 'healthcare' | 'retail';
type CompanySize = 'small' | 'medium' | 'large' | 'enterprise';

export function PLRiskMitigationCenter({ language, currentMode, onNavigate }: PLRiskMitigationCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'risk-mapping' | 'mitigation-frameworks' | 'industry-analysis' | 'roi-calculator' | 'measurement-dashboard' | 'implementation-guide'>('overview');
  const [selectedCategory, setSelectedCategory] = useState<RiskCategory>('revenue');
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('manufacturing');
  const [selectedSize, setSelectedSize] = useState<CompanySize>('medium');

  // Risk assessment state
  const [riskAssessment, setRiskAssessment] = useState<Record<string, number>>({});

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      riskMapping: "Risk Mapping",
      mitigationFrameworks: "Mitigation Frameworks",
      industryAnalysis: "Industry Analysis",
      roiCalculator: "ROI Calculator",
      measurementDashboard: "Measurement Dashboard",
      implementationGuide: "Implementation Guide",
      
      // Content
      title: "P&L Risk Mitigation Center",
      subtitle: "Transform workforce risk into strategic value with comprehensive P&L protection",
      
      // Risk Categories
      revenue: "Revenue Risk",
      cogs: "COGS Risk",
      operating: "Operating Expense Risk",
      nonOperating: "Non-Operating Risk",
      
      // Industries
      manufacturing: "Manufacturing",
      professionalServices: "Professional Services",
      technology: "Technology",
      healthcare: "Healthcare",
      retail: "Retail",
      
      // Company Sizes
      small: "Small (1-50)",
      medium: "Medium (51-250)",
      large: "Large (251-1000)",
      enterprise: "Enterprise (1000+)"
    },
    es: {
      // Navigation
      overview: "Vista General",
      riskMapping: "Mapeo de Riesgos",
      mitigationFrameworks: "Marcos de Mitigación",
      industryAnalysis: "Análisis de Industria",
      roiCalculator: "Calculadora ROI",
      measurementDashboard: "Panel de Medición",
      implementationGuide: "Guía de Implementación",
      
      // Content
      title: "Centro de Mitigación de Riesgos P&G",
      subtitle: "Transformar riesgo de fuerza laboral en valor estratégico con protección integral de P&G",
      
      // Risk Categories
      revenue: "Riesgo de Ingresos",
      cogs: "Riesgo de COGS",
      operating: "Riesgo de Gastos Operativos",
      nonOperating: "Riesgo No Operativo",
      
      // Industries
      manufacturing: "Manufactura",
      professionalServices: "Servicios Profesionales",
      technology: "Tecnología",
      healthcare: "Salud",
      retail: "Retail",
      
      // Company Sizes
      small: "Pequeña (1-50)",
      medium: "Mediana (51-250)",
      large: "Grande (251-1000)",
      enterprise: "Empresa (1000+)"
    }
  };

  const currentLabels = labels[language];

  const plRiskCategories = {
    revenue: {
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      title: language === 'en' ? "Revenue Risk" : "Riesgo de Ingresos",
      description: language === 'en' 
        ? "Threats to top-line growth and customer retention"
        : "Amenazas al crecimiento de la línea superior y retención de clientes",
      risks: language === 'en'
        ? [
            "Talent shortages limiting capacity",
            "High turnover disrupting client relationships", 
            "Skills gaps reducing productivity",
            "Poor hiring decisions affecting quality",
            "Cultural misalignment impacting performance"
          ]
        : [
            "Escasez de talento limitando capacidad",
            "Alta rotación interrumpiendo relaciones con clientes",
            "Brechas de habilidades reduciendo productividad", 
            "Malas decisiones de contratación afectando calidad",
            "Desalineación cultural impactando desempeño"
          ],
      mitigationStrategies: language === 'en'
        ? [
            "Strategic talent acquisition programs",
            "Employee engagement and retention initiatives",
            "Skills development and training programs",
            "Performance management optimization",
            "Culture alignment and communication"
          ]
        : [
            "Programas estratégicos de adquisición de talento",
            "Iniciativas de compromiso y retención de empleados",
            "Programas de desarrollo de habilidades y entrenamiento",
            "Optimización de gestión de desempeño",
            "Alineación cultural y comunicación"
          ],
      kpis: language === 'en'
        ? ["Revenue per employee", "Customer retention rate", "Sales productivity", "Time to productivity"]
        : ["Ingresos por empleado", "Tasa de retención de clientes", "Productividad de ventas", "Tiempo para productividad"]
    },
    cogs: {
      icon: Factory,
      color: "text-green-400", 
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      title: language === 'en' ? "COGS Risk" : "Riesgo de COGS",
      description: language === 'en'
        ? "Direct cost inefficiencies and operational disruptions"
        : "Ineficiencias de costos directos y disrupciones operacionales",
      risks: language === 'en'
        ? [
            "Labor cost inflation and overtime",
            "Safety incidents and workers' compensation",
            "Inefficient workforce scheduling",
            "Quality control failures",
            "Equipment downtime from human error"
          ]
        : [
            "Inflación de costos laborales y tiempo extra",
            "Incidentes de seguridad y compensación de trabajadores",
            "Programación ineficiente de fuerza laboral",
            "Fallas de control de calidad",
            "Tiempo de inactividad de equipos por error humano"
          ],
      mitigationStrategies: language === 'en'
        ? [
            "Workforce optimization and scheduling",
            "Safety program implementation",
            "Lean manufacturing principles",
            "Quality management systems",
            "Predictive maintenance training"
          ]
        : [
            "Optimización y programación de fuerza laboral",
            "Implementación de programa de seguridad",
            "Principios de manufactura lean",
            "Sistemas de gestión de calidad",
            "Entrenamiento de mantenimiento predictivo"
          ],
      kpis: language === 'en'
        ? ["Labor cost per unit", "Safety incident rate", "Equipment utilization", "Quality defect rate"]
        : ["Costo laboral por unidad", "Tasa de incidentes de seguridad", "Utilización de equipos", "Tasa de defectos de calidad"]
    },
    operating: {
      icon: Building,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20", 
      borderColor: "border-purple-700",
      title: language === 'en' ? "Operating Expense Risk" : "Riesgo de Gastos Operativos",
      description: language === 'en'
        ? "Administrative overhead and compliance-related expenses"
        : "Gastos generales administrativos y gastos relacionados con cumplimiento",
      risks: language === 'en'
        ? [
            "Healthcare cost spikes and benefits inflation",
            "Payroll processing errors and inefficiencies",
            "ACA compliance penalties and violations",
            "HR administrative burden and costs",
            "Training and development inefficiencies"
          ]
        : [
            "Picos de costos de salud e inflación de beneficios",
            "Errores de procesamiento de nómina e ineficiencias",
            "Penalidades y violaciones de cumplimiento ACA",
            "Carga administrativa de RH y costos",
            "Ineficiencias de entrenamiento y desarrollo"
          ],
      mitigationStrategies: language === 'en'
        ? [
            "Benefits optimization and management",
            "Payroll system automation",
            "Compliance monitoring and reporting",
            "HR process optimization",
            "Technology-enabled training delivery"
          ]
        : [
            "Optimización y gestión de beneficios",
            "Automatización del sistema de nómina",
            "Monitoreo y reporte de cumplimiento",
            "Optimización de procesos de RH",
            "Entrega de entrenamiento habilitada por tecnología"
          ],
      kpis: language === 'en'
        ? ["Benefits cost per employee", "Payroll accuracy rate", "Compliance score", "HR cost per employee"]
        : ["Costo de beneficios por empleado", "Tasa de precisión de nómina", "Puntaje de cumplimiento", "Costo de RH por empleado"]
    },
    'non-operating': {
      icon: Shield,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700", 
      title: language === 'en' ? "Non-Operating Risk" : "Riesgo No Operativo",
      description: language === 'en'
        ? "Legal, regulatory, and reputational exposures"
        : "Exposiciones legales, regulatorias y reputacionales",
      risks: language === 'en'
        ? [
            "Employment litigation and legal fees",
            "EEOC claims and discrimination suits",
            "Tax credit loss and missed incentives",
            "Reputational damage from HR issues",
            "Regulatory fines and penalties"
          ]
        : [
            "Litigio laboral y honorarios legales",
            "Reclamaciones EEOC y demandas por discriminación",
            "Pérdida de créditos fiscales e incentivos perdidos",
            "Daño reputacional por problemas de RH",
            "Multas y penalidades regulatorias"
          ],
      mitigationStrategies: language === 'en'
        ? [
            "Legal compliance monitoring",
            "Documentation and policy management",
            "Tax credit optimization",
            "Reputation management programs",
            "Proactive risk assessment"
          ]
        : [
            "Monitoreo de cumplimiento legal",
            "Gestión de documentación y políticas",
            "Optimización de créditos fiscales",
            "Programas de gestión de reputación",
            "Evaluación proactiva de riesgos"
          ],
      kpis: language === 'en'
        ? ["Legal cost per employee", "Compliance violations", "Tax credit capture rate", "Employee satisfaction score"]
        : ["Costo legal por empleado", "Violaciones de cumplimiento", "Tasa de captura de créditos fiscales", "Puntaje de satisfacción de empleados"]
    }
  };

  const industryRiskProfiles = {
    manufacturing: {
      primaryRisks: ['cogs', 'operating', 'non-operating', 'revenue'],
      keyMetrics: language === 'en'
        ? ["Safety incident rate", "Equipment downtime", "Labor cost per unit", "Quality defect rate"]
        : ["Tasa de incidentes de seguridad", "Tiempo de inactividad de equipos", "Costo laboral por unidad", "Tasa de defectos de calidad"],
      criticalAreas: language === 'en'
        ? ["Workplace safety", "Skilled labor shortages", "Equipment utilization", "Quality control"]
        : ["Seguridad laboral", "Escasez de mano de obra especializada", "Utilización de equipos", "Control de calidad"]
    },
    'professional-services': {
      primaryRisks: ['revenue', 'operating', 'non-operating', 'cogs'],
      keyMetrics: language === 'en'
        ? ["Billable utilization", "Client retention", "Revenue per employee", "Project profitability"]
        : ["Utilización facturable", "Retención de clientes", "Ingresos por empleado", "Rentabilidad de proyectos"],
      criticalAreas: language === 'en'
        ? ["Talent retention", "Client relationships", "Project delivery", "Compliance"]
        : ["Retención de talento", "Relaciones con clientes", "Entrega de proyectos", "Cumplimiento"]
    },
    technology: {
      primaryRisks: ['revenue', 'cogs', 'operating', 'non-operating'],
      keyMetrics: language === 'en'
        ? ["Developer productivity", "Product velocity", "Customer acquisition cost", "Talent acquisition cost"]
        : ["Productividad de desarrolladores", "Velocidad de producto", "Costo de adquisición de clientes", "Costo de adquisición de talento"],
      criticalAreas: language === 'en'
        ? ["Talent competition", "Innovation speed", "Scalability", "IP protection"]
        : ["Competencia por talento", "Velocidad de innovación", "Escalabilidad", "Protección de PI"]
    },
    healthcare: {
      primaryRisks: ['non-operating', 'operating', 'cogs', 'revenue'],
      keyMetrics: language === 'en'
        ? ["Patient satisfaction", "Staff retention", "Compliance score", "Cost per patient"]
        : ["Satisfacción del paciente", "Retención de personal", "Puntaje de cumplimiento", "Costo por paciente"],
      criticalAreas: language === 'en'
        ? ["Regulatory compliance", "Staff burnout", "Patient safety", "Credential management"]
        : ["Cumplimiento regulatorio", "Agotamiento del personal", "Seguridad del paciente", "Gestión de credenciales"]
    },
    retail: {
      primaryRisks: ['revenue', 'cogs', 'operating', 'non-operating'],
      keyMetrics: language === 'en'
        ? ["Sales per employee", "Customer satisfaction", "Inventory turnover", "Store profitability"]
        : ["Ventas por empleado", "Satisfacción del cliente", "Rotación de inventario", "Rentabilidad de tienda"],
      criticalAreas: language === 'en'
        ? ["Seasonal staffing", "Customer experience", "Loss prevention", "Schedule optimization"]
        : ["Personal estacional", "Experiencia del cliente", "Prevención de pérdidas", "Optimización de horarios"]
    }
  };

  const mitigationFrameworks = {
    'risk-matrix': {
      title: language === 'en' ? "P&L Risk Assessment Matrix" : "Matriz de Evaluación de Riesgo P&G",
      description: language === 'en'
        ? "Systematic approach to identify, assess, and prioritize P&L risks"
        : "Enfoque sistemático para identificar, evaluar y priorizar riesgos de P&G",
      framework: {
        steps: language === 'en'
          ? [
              "Map current P&L structure and key line items",
              "Identify workforce-related risk factors",
              "Assess probability and financial impact",
              "Calculate risk-adjusted P&L scenarios",
              "Prioritize mitigation strategies by ROI"
            ]
          : [
              "Mapear estructura actual de P&G y elementos clave",
              "Identificar factores de riesgo relacionados con fuerza laboral",
              "Evaluar probabilidad e impacto financiero",
              "Calcular escenarios de P&G ajustados por riesgo",
              "Priorizar estrategias de mitigación por ROI"
            ]
      }
    },
    'lifecycle-approach': {
      title: language === 'en' ? "Business Lifecycle Risk Management" : "Gestión de Riesgo de Ciclo de Vida Empresarial",
      description: language === 'en'
        ? "Stage-specific risk mitigation aligned with business growth phases"
        : "Mitigación de riesgo específica por etapa alineada con fases de crecimiento empresarial",
      framework: {
        phases: language === 'en'
          ? [
              "Startup: Focus on talent acquisition and culture risk",
              "Growth: Scale workforce while maintaining quality",
              "Maturity: Optimize costs and compliance systems",
              "Transformation: Manage change and restructuring risks"
            ]
          : [
              "Startup: Enfoque en adquisición de talento y riesgo cultural",
              "Crecimiento: Escalar fuerza laboral manteniendo calidad",
              "Madurez: Optimizar costos y sistemas de cumplimiento",
              "Transformación: Gestionar cambio y riesgos de reestructuración"
            ]
      }
    },
    'integrated-defense': {
      title: language === 'en' ? "Integrated P&L Defense System" : "Sistema Integrado de Defensa P&G",
      description: language === 'en'
        ? "Multi-layered approach combining prevention, detection, and response"
        : "Enfoque multicapa combinando prevención, detección y respuesta",
      framework: {
        layers: language === 'en'
          ? [
              "Prevention: Proactive policies and training",
              "Detection: Real-time monitoring and alerts",
              "Response: Rapid mitigation and recovery plans",
              "Learning: Continuous improvement and optimization"
            ]
          : [
              "Prevención: Políticas proactivas y entrenamiento",
              "Detección: Monitoreo en tiempo real y alertas",
              "Respuesta: Planes rápidos de mitigación y recuperación",
              "Aprendizaje: Mejora continua y optimización"
            ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{currentLabels.title}</h1>
            <p className="text-gray-400">{currentLabels.subtitle}</p>
          </div>
          
          <Button className="bg-green-600 hover:bg-green-700">
            <Shield className="w-4 h-4 mr-2" />
            Launch Risk Assessment
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="risk-mapping">{currentLabels.riskMapping}</TabsTrigger>
            <TabsTrigger value="mitigation-frameworks">{currentLabels.mitigationFrameworks}</TabsTrigger>
            <TabsTrigger value="industry-analysis">{currentLabels.industryAnalysis}</TabsTrigger>
            <TabsTrigger value="roi-calculator">{currentLabels.roiCalculator}</TabsTrigger>
            <TabsTrigger value="measurement-dashboard">{currentLabels.measurementDashboard}</TabsTrigger>
            <TabsTrigger value="implementation-guide">{currentLabels.implementationGuide}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Risk-Revenue Framework */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  The Risk-Revenue Equation
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Every line of your P&L carries embedded risk. OVERWATCH surfaces and solves challenges across all financial dimensions."
                    : "Cada línea de tu P&G conlleva riesgo integrado. OVERWATCH detecta y resuelve desafíos en todas las dimensiones financieras."
                  }
                </p>

                <div className="space-y-4">
                  {Object.entries(plRiskCategories).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <div 
                        key={key} 
                        className={`p-4 ${category.bgColor} border ${category.borderColor} rounded-lg cursor-pointer transition-all hover:scale-105`}
                        onClick={() => {
                          setSelectedCategory(key as RiskCategory);
                          setActiveTab('risk-mapping');
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`w-5 h-5 ${category.color}`} />
                          <h4 className="font-bold text-white">{category.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{category.description}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* OVERWATCH Lifeline Levers */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  OVERWATCH Lifeline Levers
                </h3>

                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "We apply targeted interventions across your business lifecycle to protect and enhance P&L performance."
                    : "Aplicamos intervenciones dirigidas a través de tu ciclo de vida empresarial para proteger y mejorar desempeño de P&G."
                  }
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">
                      {language === 'en' ? 'Revenue Protection' : 'Protección de Ingresos'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? 'Talent attraction, employee engagement, productivity optimization'
                        : 'Atracción de talento, compromiso de empleados, optimización de productividad'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-2">
                      {language === 'en' ? 'COGS Optimization' : 'Optimización de COGS'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? 'Safety programs, workforce scheduling, quality management'
                        : 'Programas de seguridad, programación de fuerza laboral, gestión de calidad'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <h4 className="font-bold text-purple-400 mb-2">
                      {language === 'en' ? 'OpEx Management' : 'Gestión de OpEx'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? 'ACA compliance, payroll processing, benefits optimization'
                        : 'Cumplimiento ACA, procesamiento de nómina, optimización de beneficios'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">
                      {language === 'en' ? 'Risk Mitigation' : 'Mitigación de Riesgos'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? 'Tax credit capture, HR legal readiness, compliance monitoring'
                        : 'Captura de créditos fiscales, preparación legal RH, monitoreo de cumplimiento'
                      }
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* ROI Story Section */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
                The ROI Story
              </h3>

              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">$2.3M</div>
                  <div className="text-sm text-gray-400">
                    {language === 'en' ? 'Average P&L risk exposure' : 'Exposición promedio de riesgo P&G'}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">67%</div>
                  <div className="text-sm text-gray-400">
                    {language === 'en' ? 'Risk reduction achieved' : 'Reducción de riesgo lograda'}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">4.2x</div>
                  <div className="text-sm text-gray-400">
                    {language === 'en' ? 'ROI on mitigation investment' : 'ROI en inversión de mitigación'}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">18</div>
                  <div className="text-sm text-gray-400">
                    {language === 'en' ? 'Months to full protection' : 'Meses para protección completa'}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-300 mb-6">
                  {language === 'en'
                    ? 'Risk is costly—but strategic HR can be your margin\'s best friend. Every hour saved, penalty avoided, and employee retained translates to financial clarity.'
                    : 'El riesgo es costoso, pero RH estratégico puede ser el mejor amigo de tu margen. Cada hora ahorrada, penalidad evitada y empleado retenido se traduce en claridad financiera.'
                  }
                </p>
                
                <div className="text-xl font-bold text-green-400 mb-2">
                  {language === 'en'
                    ? 'OVERWATCH isn\'t just HR. We\'re your elite task force for operational margin defense.'
                    : 'OVERWATCH no es solo RH. Somos tu fuerza de élite para defensa de margen operacional.'
                  }
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('risk-mapping')}
                >
                  <Search className="w-4 h-4" />
                  Map P&L Risks
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('roi-calculator')}
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Impact
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('industry-analysis')}
                >
                  <BarChart3 className="w-4 h-4" />
                  Industry Analysis
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('implementation-guide')}
                >
                  <Shield className="w-4 h-4" />
                  Start Protection
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Risk Mapping */}
          <TabsContent value="risk-mapping" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">P&L Risk Mapping</h3>
              <div className="flex gap-2">
                {Object.keys(plRiskCategories).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category as RiskCategory)}
                  >
                    {currentLabels[category.replace('-', '') as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Selected Category Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = plRiskCategories[selectedCategory].icon;
                      return <Icon className={`w-8 h-8 ${plRiskCategories[selectedCategory].color}`} />;
                    })()}
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {plRiskCategories[selectedCategory].title}
                      </h4>
                      <p className="text-gray-400">P&L Risk Category</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className={`p-4 ${plRiskCategories[selectedCategory].bgColor} border ${plRiskCategories[selectedCategory].borderColor} rounded-lg`}>
                      <h5 className="font-medium text-white mb-2">Description</h5>
                      <p className="text-gray-300 text-sm">{plRiskCategories[selectedCategory].description}</p>
                    </div>

                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-3">Primary Risk Factors</h5>
                      <div className="space-y-1">
                        {plRiskCategories[selectedCategory].risks.map((risk, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                            {risk}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Mitigation Strategies</h5>
                      <div className="space-y-1">
                        {plRiskCategories[selectedCategory].mitigationStrategies.map((strategy, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {strategy}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Assessment Matrix */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk Assessment Matrix</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Key Performance Indicators</h5>
                      <div className="space-y-2">
                        {plRiskCategories[selectedCategory].kpis.map((kpi, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">{kpi}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={Math.random() * 100} className="w-16 h-2" />
                              <span className="text-xs text-gray-400">
                                {Math.floor(Math.random() * 100)}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Risk Impact Analysis</h5>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-red-900/20 rounded">
                          <div className="text-lg font-bold text-red-400">High</div>
                          <div className="text-xs text-gray-400">Probability</div>
                        </div>
                        <div className="text-center p-3 bg-orange-900/20 rounded">
                          <div className="text-lg font-bold text-orange-400">$750K</div>
                          <div className="text-xs text-gray-400">Potential Impact</div>
                        </div>
                      </div>

                      <div className="text-center p-3 bg-purple-900/20 rounded">
                        <div className="text-lg font-bold text-purple-400">Critical</div>
                        <div className="text-xs text-gray-400">Risk Priority</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Recommended Actions</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implement immediate monitoring systems</li>
                        <li>• Develop mitigation protocols</li>
                        <li>• Establish regular review cycles</li>
                        <li>• Create contingency response plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Mitigation Frameworks */}
          <TabsContent value="mitigation-frameworks" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Strategic Mitigation Frameworks
              </h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {Object.entries(mitigationFrameworks).map(([key, framework]) => (
                  <div key={key} className="p-6 bg-gray-900/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">{framework.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{framework.description}</p>
                    
                    {framework.framework.steps && (
                      <div>
                        <h5 className="font-medium text-gray-400 mb-3">Implementation Steps</h5>
                        <div className="space-y-2">
                          {framework.framework.steps.map((step, idx) => (
                            <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-white">
                                {idx + 1}
                              </div>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {framework.framework.phases && (
                      <div>
                        <h5 className="font-medium text-gray-400 mb-3">Business Phases</h5>
                        <div className="space-y-2">
                          {framework.framework.phases.map((phase, idx) => (
                            <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              {phase}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {framework.framework.layers && (
                      <div>
                        <h5 className="font-medium text-gray-400 mb-3">Defense Layers</h5>
                        <div className="space-y-2">
                          {framework.framework.layers.map((layer, idx) => (
                            <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <Shield className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              {layer}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Framework Implementation Tool */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Framework Implementation Tool</h4>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Business Phase</label>
                    <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                      <option>Startup (0-2 years)</option>
                      <option>Growth (2-5 years)</option>
                      <option>Maturity (5+ years)</option>
                      <option>Transformation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Primary Risk Category</label>
                    <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                      <option>Revenue Risk</option>
                      <option>COGS Risk</option>
                      <option>Operating Expense Risk</option>
                      <option>Non-Operating Risk</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Risk Tolerance</label>
                    <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                      <option>Conservative</option>
                      <option>Moderate</option>
                      <option>Aggressive</option>
                    </select>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="font-medium text-white mb-3">Recommended Framework</h5>
                  <div className="p-3 bg-green-900/20 border border-green-700 rounded mb-4">
                    <div className="font-medium text-green-400">P&L Risk Assessment Matrix</div>
                    <div className="text-gray-300 text-sm">Best fit for your current profile</div>
                  </div>
                  
                  <h5 className="font-medium text-white mb-3">Next Steps</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Complete comprehensive risk assessment</li>
                    <li>• Map current P&L structure</li>
                    <li>• Identify top 3 risk priorities</li>
                    <li>• Develop 90-day action plan</li>
                  </ul>
                  
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Generate Custom Framework
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Industry Analysis */}
          <TabsContent value="industry-analysis" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Industry-Specific Risk Analysis</h3>
              <div className="flex gap-2">
                {Object.keys(industryRiskProfiles).map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry as Industry)}
                  >
                    {currentLabels[industry.replace('-', '') as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Industry Risk Profile */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">
                    {currentLabels[selectedIndustry.replace('-', '') as keyof typeof currentLabels]} Risk Profile
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-3">Risk Priority Ranking</h5>
                      <div className="space-y-2">
                        {industryRiskProfiles[selectedIndustry].primaryRisks.map((risk, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs text-white">
                              {idx + 1}
                            </div>
                            {currentLabels[risk.replace('-', '') as keyof typeof currentLabels]}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Key Performance Metrics</h5>
                      <div className="space-y-2">
                        {industryRiskProfiles[selectedIndustry].keyMetrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">{metric}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={Math.random() * 100} className="w-16 h-2" />
                              <Badge variant="outline" className="text-xs">
                                {Math.random() > 0.5 ? 'Good' : 'Risk'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-3">Critical Risk Areas</h5>
                      <div className="space-y-1">
                        {industryRiskProfiles[selectedIndustry].criticalAreas.map((area, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <AlertTriangle className="w-3 h-3 text-orange-400" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry Benchmarks */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Industry Benchmarks</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Risk Exposure by P&L Line</h5>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-sm">Revenue Impact</span>
                            <span className="text-blue-400 font-bold">23%</span>
                          </div>
                          <Progress value={23} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-sm">COGS Impact</span>
                            <span className="text-green-400 font-bold">34%</span>
                          </div>
                          <Progress value={34} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-sm">OpEx Impact</span>
                            <span className="text-purple-400 font-bold">28%</span>
                          </div>
                          <Progress value={28} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-sm">Non-Op Impact</span>
                            <span className="text-orange-400 font-bold">15%</span>
                          </div>
                          <Progress value={15} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Industry Comparisons</h5>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-900/20 rounded">
                          <div className="text-lg font-bold text-green-400">$1.2M</div>
                          <div className="text-xs text-gray-400">Avg Risk Exposure</div>
                        </div>
                        <div className="text-center p-3 bg-blue-900/20 rounded">
                          <div className="text-lg font-bold text-blue-400">18%</div>
                          <div className="text-xs text-gray-400">Mitigation Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Best Practices</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Quarterly risk assessment reviews</li>
                        <li>• Integrated safety and quality programs</li>
                        <li>• Proactive compliance monitoring</li>
                        <li>• Cross-functional risk committees</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Calculator */}
          <TabsContent value="roi-calculator" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-green-400" />
                P&L Risk Mitigation ROI Calculator
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Parameters */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Company Parameters</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Annual Revenue ($M)</label>
                      <input
                        type="number"
                        defaultValue={25}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Current EBITDA Margin (%)</label>
                      <input
                        type="number"
                        defaultValue={15}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Employee Count</label>
                      <input
                        type="number"
                        defaultValue={150}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                        <option>Manufacturing</option>
                        <option>Professional Services</option>
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Risk Assessment Score (1-10)</label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        defaultValue={7}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Low Risk</span>
                        <span>High Risk</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk Impact Analysis</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Total Risk Exposure</h5>
                      <div className="text-2xl font-bold text-white">$2.8M</div>
                      <p className="text-gray-400 text-sm">Potential annual impact</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-900/20 rounded-lg">
                        <div className="text-blue-400 font-medium text-sm">Revenue Risk</div>
                        <div className="text-white font-bold">$875K</div>
                      </div>
                      <div className="p-3 bg-green-900/20 rounded-lg">
                        <div className="text-green-400 font-medium text-sm">COGS Risk</div>
                        <div className="text-white font-bold">$1.2M</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-purple-900/20 rounded-lg">
                        <div className="text-purple-400 font-medium text-sm">OpEx Risk</div>
                        <div className="text-white font-bold">$450K</div>
                      </div>
                      <div className="p-3 bg-orange-900/20 rounded-lg">
                        <div className="text-orange-400 font-medium text-sm">Non-Op Risk</div>
                        <div className="text-white font-bold">$275K</div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Mitigation ROI</h5>
                      <div className="text-2xl font-bold text-white">4.2x</div>
                      <p className="text-gray-400 text-sm">Return on mitigation investment</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-2">Implementation Cost</h5>
                      <div className="text-lg font-bold text-gray-300">$180K</div>
                      <p className="text-gray-400 text-sm">Annual OVERWATCH investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Measurement Dashboard */}
          <TabsContent value="measurement-dashboard" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-green-400" />
                P&L Risk Monitoring Dashboard
              </h3>

              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                {/* Risk Score */}
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-4">Overall Risk Score</h4>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">7.2</div>
                    <div className="text-sm text-gray-400">out of 10</div>
                    <Progress value={72} className="mt-3 h-2" />
                  </div>
                </div>

                {/* Revenue Protection */}
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-medium text-blue-400 mb-4">Revenue Protection</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Retention Rate</span>
                      <span className="text-blue-400 font-bold">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Productivity</span>
                      <span className="text-blue-400 font-bold">+12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Client Satisfaction</span>
                      <span className="text-blue-400 font-bold">4.7/5</span>
                    </div>
                  </div>
                </div>

                {/* Cost Control */}
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-medium text-purple-400 mb-4">Cost Control</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Labor Cost/Unit</span>
                      <span className="text-purple-400 font-bold">-8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Overtime</span>
                      <span className="text-purple-400 font-bold">-15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Benefits Cost</span>
                      <span className="text-purple-400 font-bold">-6%</span>
                    </div>
                  </div>
                </div>

                {/* Compliance Status */}
                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h4 className="font-medium text-orange-400 mb-4">Compliance Status</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Safety Score</span>
                      <span className="text-orange-400 font-bold">96%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">ACA Compliance</span>
                      <span className="text-orange-400 font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Tax Credits</span>
                      <span className="text-orange-400 font-bold">$47K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Trend Analysis */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk Trend Analysis</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Monthly Risk Score</h5>
                      <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-gray-500">Risk Trend Chart</span>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Risk Category Breakdown</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Revenue Risk</span>
                          <div className="flex items-center gap-2">
                            <Progress value={65} className="w-20 h-2" />
                            <span className="text-yellow-400 text-sm">Medium</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">COGS Risk</span>
                          <div className="flex items-center gap-2">
                            <Progress value={30} className="w-20 h-2" />
                            <span className="text-green-400 text-sm">Low</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">OpEx Risk</span>
                          <div className="flex items-center gap-2">
                            <Progress value={45} className="w-20 h-2" />
                            <span className="text-green-400 text-sm">Low</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Non-Op Risk</span>
                          <div className="flex items-center gap-2">
                            <Progress value={85} className="w-20 h-2" />
                            <span className="text-red-400 text-sm">High</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Action Items & Alerts</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-red-400">Critical Alert</h5>
                          <p className="text-gray-300 text-sm">Employment lawsuit risk detected - immediate legal review required</p>
                          <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-yellow-400">Medium Priority</h5>
                          <p className="text-gray-300 text-sm">Safety training compliance due for 12 employees</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            Schedule Training
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-green-400">Success</h5>
                          <p className="text-gray-300 text-sm">Q3 tax credits captured - $47K additional savings</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-white mb-3">Upcoming Reviews</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Monthly risk assessment (Due: Jan 15)</li>
                        <li>• Benefits renewal analysis (Due: Jan 20)</li>
                        <li>• Safety audit preparation (Due: Jan 25)</li>
                        <li>• Compliance policy update (Due: Feb 1)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Guide */}
          <TabsContent value="implementation-guide" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                P&L Risk Mitigation Implementation Guide
              </h3>

              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">Phase 1: Risk Assessment & Baseline (Weeks 1-4)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Discovery & Mapping</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Complete P&L structure analysis</li>
                        <li>• Identify workforce-related risk factors</li>
                        <li>• Map current HR processes and systems</li>
                        <li>• Assess compliance status and gaps</li>
                        <li>• Document existing mitigation efforts</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Quantification & Prioritization</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Calculate risk-adjusted P&L scenarios</li>
                        <li>• Develop risk probability matrix</li>
                        <li>• Estimate financial impact by category</li>
                        <li>• Create risk priority ranking</li>
                        <li>• Set baseline KPIs and metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="text-lg font-bold text-green-400 mb-4">Phase 2: Strategic Planning & Design (Weeks 5-8)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Mitigation Strategy Development</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Design comprehensive mitigation framework</li>
                        <li>• Develop category-specific action plans</li>
                        <li>• Create implementation timeline</li>
                        <li>• Define success metrics and KPIs</li>
                        <li>• Establish governance structure</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">System & Process Design</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Design monitoring and alert systems</li>
                        <li>• Create reporting dashboards</li>
                        <li>• Develop policy and procedure updates</li>
                        <li>• Plan training and communication</li>
                        <li>• Set up continuous improvement loops</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">Phase 3: Implementation & Deployment (Weeks 9-16)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">System Implementation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Deploy monitoring systems</li>
                        <li>• Implement process improvements</li>
                        <li>• Launch training programs</li>
                        <li>• Activate compliance protocols</li>
                        <li>• Begin regular reporting cycles</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Change Management</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Conduct organization-wide communication</li>
                        <li>• Train managers and supervisors</li>
                        <li>• Launch employee awareness programs</li>
                        <li>• Establish feedback mechanisms</li>
                        <li>• Monitor adoption and compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="p-6 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-400 mb-4">Phase 4: Optimization & Scale (Weeks 17-24)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Performance Optimization</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Analyze initial results and trends</li>
                        <li>• Refine mitigation strategies</li>
                        <li>• Optimize system performance</li>
                        <li>• Address implementation gaps</li>
                        <li>• Scale successful initiatives</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Continuous Improvement</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Establish regular review cycles</li>
                        <li>• Create advanced analytics capabilities</li>
                        <li>• Develop predictive risk modeling</li>
                        <li>• Build organizational competencies</li>
                        <li>• Plan for future enhancements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Factors */}
              <div className="grid lg:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Critical Success Factors</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Executive Sponsorship</div>
                        <div className="text-gray-400 text-sm">Strong leadership commitment and resource allocation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Data-Driven Approach</div>
                        <div className="text-gray-400 text-sm">Robust analytics and measurement systems</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Cross-Functional Collaboration</div>
                        <div className="text-gray-400 text-sm">HR, Finance, and Operations alignment</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Common Pitfalls to Avoid</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Underestimating Complexity</div>
                        <div className="text-gray-400 text-sm">Risk mitigation requires sustained effort and resources</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Lack of Measurement</div>
                        <div className="text-gray-400 text-sm">Without metrics, you can't manage or improve</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">Siloed Implementation</div>
                        <div className="text-gray-400 text-sm">Risk management must be integrated across functions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}