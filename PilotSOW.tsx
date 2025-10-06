import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  FileText, 
  Calendar, 
  Target, 
  Users,
  CheckCircle,
  DollarSign,
  AlertTriangle,
  Download,
  Send,
  TrendingUp,
  Shield,
  Clock,
  Zap
} from 'lucide-react';

interface PilotSOWProps {
  language: 'en' | 'es';
  clientName?: string;
  industry?: 'manufacturing' | 'engineering' | 'professional-services' | 'agency';
  headcount?: number;
}

export function PilotSOW({ 
  language, 
  clientName = "[Client Name]", 
  industry = 'professional-services',
  headcount = 150 
}: PilotSOWProps) {
  const labels = {
    en: {
      title: "OVERWATCH 90-Day Pilot",
      subtitle: "Statement of Work",
      overview: "Project Overview",
      scope: "Scope of Work",
      deliverables: "Key Deliverables",
      timeline: "Implementation Timeline",
      investment: "Investment & Success Metrics",
      terms: "Terms & Conditions",
      approval: "Approval & Next Steps",
      download: "Download SOW",
      approve: "Approve & Start"
    },
    es: {
      title: "Piloto OVERWATCH de 90 Días",
      subtitle: "Declaración de Trabajo",
      overview: "Resumen del Proyecto",
      scope: "Alcance del Trabajo",
      deliverables: "Entregables Clave",
      timeline: "Cronograma de Implementación",
      investment: "Inversión y Métricas de Éxito",
      terms: "Términos y Condiciones",
      approval: "Aprobación y Próximos Pasos",
      download: "Descargar SOW",
      approve: "Aprobar e Iniciar"
    }
  };

  const currentLabels = labels[language];

  const getIndustrySpecificContent = () => {
    const content = {
      manufacturing: {
        en: {
          challenges: ["Safety compliance complexity", "Aging workforce transitions", "Skills gap management"],
          objectives: ["Reduce Workers' Comp incidents by 15%", "Improve retention of key technical roles", "Streamline multi-state compliance"],
          roi: "Target 12% reduction in labor costs through safety improvements and retention"
        },
        es: {
          challenges: ["Complejidad de cumplimiento de seguridad", "Transiciones de fuerza laboral envejecida", "Gestión de brecha de habilidades"],
          objectives: ["Reducir incidentes de Compensación Laboral en 15%", "Mejorar retención de roles técnicos clave", "Optimizar cumplimiento multi-estatal"],
          roi: "Meta de 12% reducción en costos laborales através de mejoras de seguridad y retención"
        }
      },
      engineering: {
        en: {
          challenges: ["Project cost overruns", "Technical talent retention", "Communication gaps"],
          objectives: ["Improve project profitability by 8%", "Reduce engineering turnover to <10%", "Enhance cross-team collaboration"],
          roi: "Target 10% improvement in project margins through talent optimization"
        },
        es: {
          challenges: ["Sobrecostos de proyectos", "Retención de talento técnico", "Brechas de comunicación"],
          objectives: ["Mejorar rentabilidad de proyectos en 8%", "Reducir rotación de ingeniería a <10%", "Mejorar colaboración entre equipos"],
          roi: "Meta de 10% mejora en márgenes de proyecto através de optimización de talento"
        }
      },
      'professional-services': {
        en: {
          challenges: ["Client retention pressure", "Remote team engagement", "Billable hour optimization"],
          objectives: ["Increase client satisfaction scores by 15%", "Improve remote team productivity", "Optimize utilization rates to 75%+"],
          roi: "Target 18% increase in revenue per employee through engagement and utilization"
        },
        es: {
          challenges: ["Presión de retención de clientes", "Compromiso de equipo remoto", "Optimización de horas facturables"],
          objectives: ["Aumentar puntuaciones de satisfacción del cliente en 15%", "Mejorar productividad de equipo remoto", "Optimizar tasas de utilización a 75%+"],
          roi: "Meta de 18% aumento en ingresos por empleado através de compromiso y utilización"
        }
      },
      agency: {
        en: {
          challenges: ["High creative turnover", "Client service consistency", "Scaling challenges"],
          objectives: ["Reduce creative turnover by 25%", "Standardize client delivery processes", "Build scalable creative operations"],
          roi: "Target 20% improvement in project profitability through retention and efficiency"
        },
        es: {
          challenges: ["Alta rotación creativa", "Consistencia de servicio al cliente", "Desafíos de escalamiento"],
          objectives: ["Reducir rotación creativa en 25%", "Estandarizar procesos de entrega al cliente", "Construir operaciones creativas escalables"],
          roi: "Meta de 20% mejora en rentabilidad de proyecto através de retención y eficiencia"
        }
      }
    };

    return content[industry][language];
  };

  const industryContent = getIndustrySpecificContent();

  const pilotPhases = language === 'en' ? [
    {
      phase: "Discovery & Setup",
      duration: "Days 1-14",
      activities: [
        "Current state assessment and data integration",
        "Stakeholder interviews and goal alignment",
        "Platform configuration and security setup",
        "Initial team training and access provisioning"
      ],
      deliverable: "Implementation Plan & Baseline Metrics"
    },
    {
      phase: "Core Deployment",
      duration: "Days 15-45",
      activities: [
        "HR Command Center activation",
        "Financial convergence setup",
        "Lo Nuestro AI coaching deployment",
        "Workflow automation and process optimization"
      ],
      deliverable: "Live Platform with Core Modules"
    },
    {
      phase: "Analytics & Intelligence",
      duration: "Days 46-75",
      activities: [
        "Advanced analytics and reporting setup",
        "Scenario modeling and planning tools",
        "Cultural intelligence insights activation",
        "Executive dashboard configuration"
      ],
      deliverable: "Strategic Intelligence Suite"
    },
    {
      phase: "Optimization & Scale",
      duration: "Days 76-90",
      activities: [
        "Performance optimization and fine-tuning",
        "Success metrics validation and reporting",
        "Expansion planning and roadmap development",
        "Team enablement and knowledge transfer"
      ],
      deliverable: "Success Report & Scaling Plan"
    }
  ] : [
    {
      phase: "Descubrimiento y Configuración",
      duration: "Días 1-14",
      activities: [
        "Evaluación de estado actual e integración de datos",
        "Entrevistas con stakeholders y alineación de objetivos",
        "Configuración de plataforma y configuración de seguridad",
        "Entrenamiento inicial del equipo y aprovisionamiento de acceso"
      ],
      deliverable: "Plan de Implementación y Métricas Baseline"
    },
    {
      phase: "Despliegue Central",
      duration: "Días 15-45",
      activities: [
        "Activación del Centro de Comando RH",
        "Configuración de convergencia financiera",
        "Despliegue de coaching IA Lo Nuestro",
        "Automatización de flujos y optimización de procesos"
      ],
      deliverable: "Plataforma En Vivo con Módulos Centrales"
    },
    {
      phase: "Analítica e Inteligencia",
      duration: "Días 46-75",
      activities: [
        "Configuración de analítica avanzada y reportes",
        "Modelado de escenarios y herramientas de planificación",
        "Activación de insights de inteligencia cultural",
        "Configuración de panel ejecutivo"
      ],
      deliverable: "Suite de Inteligencia Estratégica"
    },
    {
      phase: "Optimización y Escala",
      duration: "Días 76-90",
      activities: [
        "Optimización de rendimiento y ajuste fino",
        "Validación de métricas de éxito y reportes",
        "Planificación de expansión y desarrollo de roadmap",
        "Habilitación de equipo y transferencia de conocimiento"
      ],
      deliverable: "Reporte de Éxito y Plan de Escalamiento"
    }
  ];

  const successMetrics = language === 'en' ? [
    { metric: "Time to Insight", target: "<48 hours", description: "From data to actionable intelligence" },
    { metric: "User Adoption", target: "85%+", description: "Daily active users across all modules" },
    { metric: "Process Efficiency", target: "30% improvement", description: "Reduction in manual HR/Finance tasks" },
    { metric: "Decision Speed", target: "50% faster", description: "Strategic decision-making acceleration" },
    { metric: "ROI Achievement", target: "3:1 minimum", description: "Value delivered vs. investment within 90 days" }
  ] : [
    { metric: "Tiempo a Insight", target: "<48 horas", description: "De datos a inteligencia accionable" },
    { metric: "Adopción de Usuario", target: "85%+", description: "Usuarios activos diarios en todos los módulos" },
    { metric: "Eficiencia de Proceso", target: "30% mejora", description: "Reducción en tareas manuales RH/Finanzas" },
    { metric: "Velocidad de Decisión", target: "50% más rápida", description: "Aceleración de toma de decisiones estratégicas" },
    { metric: "Logro de ROI", target: "3:1 mínimo", description: "Valor entregado vs. inversión dentro de 90 días" }
  ];

  const investmentTiers = language === 'en' ? [
    {
      name: "Pilot Package",
      price: "$15,000",
      duration: "90 days",
      description: "Complete pilot implementation with success guarantee",
      includes: ["Platform setup", "Team training", "Success measurement", "Expansion planning"]
    },
    {
      name: "Success Fee",
      price: "15% of verified savings",
      duration: "Upon achievement",
      description: "Performance-based fee on documented EBITDA improvement",
      includes: ["ROI validation", "Savings audit", "Performance documentation", "Benchmark reporting"]
    }
  ] : [
    {
      name: "Paquete Piloto",
      price: "$15,000",
      duration: "90 días",
      description: "Implementación piloto completa con garantía de éxito",
      includes: ["Configuración de plataforma", "Entrenamiento de equipo", "Medición de éxito", "Planificación de expansión"]
    },
    {
      name: "Tarifa de Éxito",
      price: "15% de ahorros verificados",
      duration: "Al logro",
      description: "Tarifa basada en rendimiento sobre mejora EBITDA documentada",
      includes: ["Validación ROI", "Auditoría de ahorros", "Documentación de rendimiento", "Reporte de benchmark"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
          <FileText className="w-4 h-4 mr-2" />
          90-Day Pilot Program
        </Badge>
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentLabels.title}
          </h1>
          <div className="text-lg text-gray-400">
            {currentLabels.subtitle} — {clientName}
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{headcount} employees</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>90-day implementation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Success guarantee</span>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <Card className="bg-card/80 border-blue-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-600">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.overview}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-green-400">
              {language === 'en' ? 'Industry Challenges' : 'Desafíos de la Industria'}
            </h3>
            <div className="space-y-2">
              {industryContent.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-400">
              {language === 'en' ? 'Pilot Objectives' : 'Objetivos del Piloto'}
            </h3>
            <div className="space-y-2">
              {industryContent.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{objective}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-400">
              {language === 'en' ? 'Expected ROI' : 'ROI Esperado'}
            </h3>
            <div className="p-3 bg-purple-600/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-300">{industryContent.roi}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Implementation Timeline */}
      <Card className="bg-card/80 border-green-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-600">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.timeline}</h2>
        </div>
        
        <div className="space-y-6">
          {pilotPhases.map((phase, index) => (
            <div key={index} className="relative">
              {index < pilotPhases.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-green-500/30" />
              )}
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-white">{phase.phase}</h3>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
                      {phase.duration}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Zap className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{activity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-green-600/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-green-400" />
                      <span className="font-medium text-green-400">
                        {language === 'en' ? 'Deliverable:' : 'Entregable:'}
                      </span>
                      <span className="text-gray-300">{phase.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Success Metrics */}
      <Card className="bg-card/80 border-purple-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-600">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.investment}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-400">
              {language === 'en' ? 'Success Metrics' : 'Métricas de Éxito'}
            </h3>
            
            <div className="space-y-3">
              {successMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-purple-600/10 rounded-lg">
                  <div>
                    <div className="font-medium text-white">{metric.metric}</div>
                    <div className="text-xs text-gray-400">{metric.description}</div>
                  </div>
                  <div className="text-purple-400 font-bold">{metric.target}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-green-400">
              {language === 'en' ? 'Investment Structure' : 'Estructura de Inversión'}
            </h3>
            
            <div className="space-y-3">
              {investmentTiers.map((tier, index) => (
                <div key={index} className="p-4 border border-gray-600 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white">{tier.name}</h4>
                    <div className="text-green-400 font-bold">{tier.price}</div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-3">{tier.description}</p>
                  
                  <div className="space-y-1">
                    {tier.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Terms & Approval */}
      <Card className="bg-card/80 border-gray-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gray-600">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.terms}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-300">
              {language === 'en' ? 'Key Terms' : 'Términos Clave'}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• {language === 'en' ? '90-day implementation period' : 'Período de implementación de 90 días'}</div>
              <div>• {language === 'en' ? 'Success guarantee with measurable outcomes' : 'Garantía de éxito con resultados medibles'}</div>
              <div>• {language === 'en' ? 'Dedicated success manager included' : 'Gerente de éxito dedicado incluido'}</div>
              <div>• {language === 'en' ? 'Full data ownership and portability' : 'Propiedad completa de datos y portabilidad'}</div>
              <div>• {language === 'en' ? 'SOC 2 compliant security standards' : 'Estándares de seguridad compatibles SOC 2'}</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-300">
              {language === 'en' ? 'Risk Mitigation' : 'Mitigación de Riesgo'}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• {language === 'en' ? 'No long-term contract required' : 'No se requiere contrato a largo plazo'}</div>
              <div>• {language === 'en' ? 'Success-fee only on verified results' : 'Tarifa de éxito solo en resultados verificados'}</div>
              <div>• {language === 'en' ? 'Full system rollback capability' : 'Capacidad completa de rollback del sistema'}</div>
              <div>• {language === 'en' ? 'Bi-weekly check-ins and adjustments' : 'Check-ins y ajustes quincenales'}</div>
              <div>• {language === 'en' ? 'Executive escalation path available' : 'Ruta de escalación ejecutiva disponible'}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 border-green-500/30 p-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-white">{currentLabels.approval}</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3">
              <Download className="w-4 h-4 mr-2" />
              {currentLabels.download}
            </Button>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              <Send className="w-4 h-4 mr-2" />
              {currentLabels.approve}
            </Button>
          </div>
          
          <div className="text-sm text-gray-400 space-y-1">
            <div>
              {language === 'en' 
                ? "Next: Signature → Kickoff within 5 business days → First insights in 14 days"
                : "Siguiente: Firma → Inicio dentro de 5 días hábiles → Primeros insights en 14 días"
              }
            </div>
            <div>
              {language === 'en' 
                ? "Questions? Contact your dedicated success manager immediately upon approval."
                : "¿Preguntas? Contacta tu gerente de éxito dedicado inmediatamente después de la aprobación."
              }
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}