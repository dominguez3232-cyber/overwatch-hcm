import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Target, 
  Building,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Download,
  Play,
  ChevronRight
} from 'lucide-react';

interface UseCase {
  title: string;
  description: string;
  benefits: string[];
  icon: any;
}

interface Integration {
  name: string;
  description: string;
  type: 'native' | 'api' | 'webhook';
  logo?: string;
}

interface ModulePageProps {
  moduleId: 'hcm' | 'erp' | 'epm' | 'crm';
  language: 'en' | 'es';
  onBack: () => void;
  onRequestDemo: () => void;
  onStartTrial: () => void;
}

export function ModulePage({ moduleId, language, onBack, onRequestDemo, onStartTrial }: ModulePageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const moduleConfig = {
    hcm: {
      en: {
        title: "Human Capital Management",
        subtitle: "Strategic HR with bilingual AI coaching and cultural intelligence",
        description: "Transform your HR from administrative burden to strategic advantage with OVERWATCH HCM. Our platform combines proven frameworks with AI-powered insights to help founder-led companies scale efficiently while maintaining culture.",
        
        features: [
          {
            title: "Bilingual AI Coach",
            description: "Real-time strategic guidance in English and Spanish",
            benefits: ["24/7 HR Advisory", "Cultural Intelligence", "Compliance Automation", "Decision Support"]
          },
          {
            title: "Strategic Frameworks",
            description: "20+ years of proven methodologies systematized",
            benefits: ["Growth Stage Diagnostics", "Risk Assessment", "Culture Design", "Implementation Roadmaps"]
          },
          {
            title: "Predictive Analytics",
            description: "Industry-specific insights with predictive modeling",
            benefits: ["Turnover Prediction", "Performance Optimization", "Workforce Planning", "ROI Measurement"]
          }
        ],
        
        useCases: [
          {
            title: "HR Operations",
            description: "Streamline payroll, benefits, compliance, and employee lifecycle management",
            benefits: ["Automated Payroll", "Benefits Administration", "Compliance Tracking", "Employee Self-Service"],
            icon: Users
          },
          {
            title: "Strategic Planning", 
            description: "Workforce planning, succession planning, and organizational design",
            benefits: ["Workforce Forecasting", "Succession Planning", "Org Design", "Leadership Development"],
            icon: Target
          },
          {
            title: "Culture & Engagement",
            description: "Design and measure culture, employee engagement, and performance",
            benefits: ["Culture Measurement", "Engagement Surveys", "Performance Analytics", "Recognition Programs"],
            icon: Zap
          }
        ],
        
        integrations: [
          { name: "QuickBooks", description: "Financial data synchronization", type: "native" as const },
          { name: "Slack", description: "Team communication integration", type: "api" as const },
          { name: "Microsoft 365", description: "Productivity suite integration", type: "native" as const },
          { name: "Salesforce", description: "CRM data integration", type: "api" as const }
        ]
      },
      es: {
        title: "Gestión de Capital Humano",
        subtitle: "RH estratégico con coaching de IA bilingüe e inteligencia cultural", 
        description: "Transforma tu RH de carga administrativa a ventaja estratégica con OVERWATCH HCM. Nuestra plataforma combina marcos probados con insights impulsados por IA para ayudar a empresas lideradas por fundadores a escalar eficientemente mientras mantienen la cultura.",
        
        features: [
          {
            title: "Coach IA Bilingüe",
            description: "Orientación estratégica en tiempo real en inglés y español",
            benefits: ["Asesoría RH 24/7", "Inteligencia Cultural", "Automatización Cumplimiento", "Apoyo en Decisiones"]
          },
          {
            title: "Marcos Estratégicos", 
            description: "20+ años de metodologías probadas sistematizadas",
            benefits: ["Diagnósticos Etapa Crecimiento", "Evaluación Riesgo", "Diseño Cultura", "Hojas Ruta Implementación"]
          },
          {
            title: "Analítica Predictiva",
            description: "Insights específicos de industria con modelado predictivo",
            benefits: ["Predicción Rotación", "Optimización Rendimiento", "Planificación Fuerza Laboral", "Medición ROI"]
          }
        ],
        
        useCases: [
          {
            title: "Operaciones RH",
            description: "Optimizar nómina, beneficios, cumplimiento y gestión del ciclo de vida del empleado",
            benefits: ["Nómina Automatizada", "Administración Beneficios", "Seguimiento Cumplimiento", "Autoservicio Empleado"],
            icon: Users
          },
          {
            title: "Planificación Estratégica",
            description: "Planificación de fuerza laboral, planificación de sucesión y diseño organizacional",
            benefits: ["Pronóstico Fuerza Laboral", "Planificación Sucesión", "Diseño Org", "Desarrollo Liderazgo"],
            icon: Target
          },
          {
            title: "Cultura y Compromiso", 
            description: "Diseñar y medir cultura, compromiso de empleados y rendimiento",
            benefits: ["Medición Cultura", "Encuestas Compromiso", "Analítica Rendimiento", "Programas Reconocimiento"],
            icon: Zap
          }
        ],
        
        integrations: [
          { name: "QuickBooks", description: "Sincronización de datos financieros", type: "native" as const },
          { name: "Slack", description: "Integración comunicación de equipo", type: "api" as const },
          { name: "Microsoft 365", description: "Integración suite productividad", type: "native" as const },
          { name: "Salesforce", description: "Integración datos CRM", type: "api" as const }
        ]
      }
    },
    
    erp: {
      en: {
        title: "Enterprise Resource Planning",
        subtitle: "Financial operations with real-time ROI tracking and scenario modeling",
        description: "Unify your financial operations with OVERWATCH ERP. Get real-time visibility into revenue, costs, and profitability with predictive scenario modeling to make confident strategic decisions.",
        
        features: [
          {
            title: "Real-time Financial Intelligence",
            description: "Live dashboards with automated reporting and insights",
            benefits: ["Live P&L", "Cash Flow Tracking", "Budget vs Actual", "Variance Analysis"]
          },
          {
            title: "Scenario Modeling",
            description: "Predictive modeling for strategic planning and risk management",
            benefits: ["Growth Scenarios", "Risk Assessment", "Investment Planning", "Exit Modeling"]
          },
          {
            title: "ROI Optimization",
            description: "Track and optimize return on investment across all business functions",
            benefits: ["Department ROI", "Project Tracking", "Resource Allocation", "Performance Metrics"]
          }
        ],
        
        useCases: [
          {
            title: "Financial Management",
            description: "Complete financial operations including AP, AR, GL, and reporting",
            benefits: ["Automated Accounting", "Invoice Management", "Financial Reporting", "Audit Trail"],
            icon: TrendingUp
          },
          {
            title: "Supply Chain",
            description: "Inventory management, procurement, and vendor relationship management",
            benefits: ["Inventory Optimization", "Vendor Management", "Purchase Orders", "Cost Control"],
            icon: Building
          },
          {
            title: "Operations Control",
            description: "Business process automation and operational efficiency optimization",
            benefits: ["Process Automation", "Quality Control", "Resource Planning", "Compliance Management"],
            icon: Shield
          }
        ],
        
        integrations: [
          { name: "QuickBooks", description: "Accounting system integration", type: "native" as const },
          { name: "NetSuite", description: "Enterprise ERP integration", type: "api" as const },
          { name: "Stripe", description: "Payment processing integration", type: "native" as const },
          { name: "Square", description: "POS system integration", type: "api" as const }
        ]
      },
      es: {
        title: "Planificación de Recursos Empresariales",
        subtitle: "Operaciones financieras con seguimiento ROI en tiempo real y modelado de escenarios",
        description: "Unifica tus operaciones financieras con OVERWATCH ERP. Obtén visibilidad en tiempo real de ingresos, costos y rentabilidad con modelado predictivo de escenarios para tomar decisiones estratégicas con confianza.",
        
        features: [
          {
            title: "Inteligencia Financiera Tiempo Real",
            description: "Paneles en vivo con reportes automatizados e insights",
            benefits: ["P&L en Vivo", "Seguimiento Flujo Efectivo", "Presupuesto vs Real", "Análisis Variación"]
          },
          {
            title: "Modelado de Escenarios",
            description: "Modelado predictivo para planificación estratégica y gestión de riesgo",
            benefits: ["Escenarios Crecimiento", "Evaluación Riesgo", "Planificación Inversión", "Modelado Salida"]
          },
          {
            title: "Optimización ROI",
            description: "Rastrear y optimizar retorno de inversión en todas las funciones de negocio",
            benefits: ["ROI Departamental", "Seguimiento Proyectos", "Asignación Recursos", "Métricas Rendimiento"]
          }
        ],
        
        useCases: [
          {
            title: "Gestión Financiera",
            description: "Operaciones financieras completas incluyendo CP, CC, GL y reportes",
            benefits: ["Contabilidad Automatizada", "Gestión Facturas", "Reportes Financieros", "Rastro Auditoría"],
            icon: TrendingUp
          },
          {
            title: "Cadena Suministro",
            description: "Gestión inventario, adquisiciones y gestión relaciones proveedores",
            benefits: ["Optimización Inventario", "Gestión Proveedores", "Órdenes Compra", "Control Costos"],
            icon: Building
          },
          {
            title: "Control Operaciones",
            description: "Automatización procesos de negocio y optimización eficiencia operacional",
            benefits: ["Automatización Procesos", "Control Calidad", "Planificación Recursos", "Gestión Cumplimiento"],
            icon: Shield
          }
        ],
        
        integrations: [
          { name: "QuickBooks", description: "Integración sistema contabilidad", type: "native" as const },
          { name: "NetSuite", description: "Integración ERP empresarial", type: "api" as const },
          { name: "Stripe", description: "Integración procesamiento pagos", type: "native" as const },
          { name: "Square", description: "Integración sistema POS", type: "api" as const }
        ]
      }
    },
    
    epm: {
      en: {
        title: "Enterprise Performance Management",
        subtitle: "Strategic planning with predictive analytics and competitive intelligence",
        description: "Drive strategic excellence with OVERWATCH EPM. Combine financial planning, performance analytics, and competitive intelligence to optimize business performance and accelerate growth.",
        
        features: [
          {
            title: "Strategic Planning",
            description: "Comprehensive planning and forecasting with scenario analysis",
            benefits: ["Financial Planning", "Budget Management", "Forecast Accuracy", "Strategic Alignment"]
          },
          {
            title: "Performance Analytics",
            description: "Advanced analytics and KPI tracking across all business functions",
            benefits: ["KPI Dashboards", "Performance Trends", "Benchmark Analysis", "Goal Tracking"]
          },
          {
            title: "Competitive Intelligence", 
            description: "Market analysis and competitive positioning insights",
            benefits: ["Market Analysis", "Competitive Benchmarking", "Industry Insights", "Strategic Positioning"]
          }
        ],
        
        useCases: [
          {
            title: "Financial Planning",
            description: "Budgeting, forecasting, and financial performance management",
            benefits: ["Budget Creation", "Rolling Forecasts", "Variance Analysis", "Financial Modeling"],
            icon: TrendingUp
          },
          {
            title: "Performance Tracking",
            description: "KPI monitoring, scorecards, and performance dashboards", 
            benefits: ["KPI Monitoring", "Scorecard Management", "Performance Dashboards", "Trend Analysis"],
            icon: Target
          },
          {
            title: "Strategic Analytics",
            description: "Business intelligence, market analysis, and strategic insights",
            benefits: ["Business Intelligence", "Market Analysis", "Strategic Insights", "Competitive Analysis"],
            icon: Globe
          }
        ],
        
        integrations: [
          { name: "Power BI", description: "Business intelligence integration", type: "api" as const },
          { name: "Tableau", description: "Data visualization integration", type: "api" as const },
          { name: "Excel", description: "Spreadsheet integration", type: "native" as const },
          { name: "Google Analytics", description: "Web analytics integration", type: "api" as const }
        ]
      },
      es: {
        title: "Gestión de Rendimiento Empresarial",
        subtitle: "Planificación estratégica con analítica predictiva e inteligencia competitiva",
        description: "Impulsa la excelencia estratégica con OVERWATCH EPM. Combina planificación financiera, analítica de rendimiento e inteligencia competitiva para optimizar el rendimiento del negocio y acelerar el crecimiento.",
        
        features: [
          {
            title: "Planificación Estratégica",
            description: "Planificación y pronóstico integral con análisis de escenarios",
            benefits: ["Planificación Financiera", "Gestión Presupuesto", "Precisión Pronóstico", "Alineación Estratégica"]
          },
          {
            title: "Analítica de Rendimiento",
            description: "Analítica avanzada y seguimiento KPI en todas las funciones de negocio",
            benefits: ["Paneles KPI", "Tendencias Rendimiento", "Análisis Benchmark", "Seguimiento Metas"]
          },
          {
            title: "Inteligencia Competitiva",
            description: "Análisis de mercado e insights de posicionamiento competitivo",
            benefits: ["Análisis Mercado", "Benchmarking Competitivo", "Insights Industria", "Posicionamiento Estratégico"]
          }
        ],
        
        useCases: [
          {
            title: "Planificación Financiera",
            description: "Presupuestación, pronóstico y gestión de rendimiento financiero",
            benefits: ["Creación Presupuesto", "Pronósticos Continuos", "Análisis Variación", "Modelado Financiero"],
            icon: TrendingUp
          },
          {
            title: "Seguimiento Rendimiento",
            description: "Monitoreo KPI, tarjetas de puntuación y paneles de rendimiento",
            benefits: ["Monitoreo KPI", "Gestión Scorecard", "Paneles Rendimiento", "Análisis Tendencias"],
            icon: Target
          },
          {
            title: "Analítica Estratégica",
            description: "Inteligencia de negocio, análisis de mercado e insights estratégicos",
            benefits: ["Inteligencia Negocio", "Análisis Mercado", "Insights Estratégicos", "Análisis Competitivo"],
            icon: Globe
          }
        ],
        
        integrations: [
          { name: "Power BI", description: "Integración inteligencia de negocio", type: "api" as const },
          { name: "Tableau", description: "Integración visualización datos", type: "api" as const },
          { name: "Excel", description: "Integración hoja de cálculo", type: "native" as const },
          { name: "Google Analytics", description: "Integración analítica web", type: "api" as const }
        ]
      }
    },
    
    crm: {
      en: {
        title: "Customer Relationship Management",
        subtitle: "Sales intelligence with buyer guides and competitive battlecards",
        description: "Accelerate revenue growth with OVERWATCH CRM. Our platform combines traditional CRM functionality with advanced sales intelligence, buyer guidance, and competitive analysis to help you win more deals faster.",
        
        features: [
          {
            title: "Sales Intelligence",
            description: "AI-powered insights and predictive analytics for sales optimization",
            benefits: ["Lead Scoring", "Pipeline Analytics", "Sales Forecasting", "Performance Tracking"]
          },
          {
            title: "Buyer Guides",
            description: "Intelligent buyer journey mapping and decision-making support",
            benefits: ["Journey Mapping", "Decision Support", "Content Automation", "Engagement Tracking"]
          },
          {
            title: "Competitive Analysis",
            description: "Real-time competitive intelligence and battlecard automation",
            benefits: ["Competitive Intelligence", "Battle Cards", "Win/Loss Analysis", "Market Positioning"]
          }
        ],
        
        useCases: [
          {
            title: "Pipeline Management",
            description: "Complete sales pipeline management with forecasting and analytics",
            benefits: ["Opportunity Tracking", "Pipeline Forecasting", "Deal Analytics", "Stage Management"],
            icon: Target
          },
          {
            title: "Customer Success",
            description: "Customer relationship management and success optimization",
            benefits: ["Account Management", "Customer Health", "Renewal Tracking", "Expansion Opportunities"],
            icon: Users
          },
          {
            title: "Marketing Automation",
            description: "Lead generation, nurturing, and marketing campaign management",
            benefits: ["Lead Generation", "Campaign Management", "Marketing Automation", "ROI Tracking"],
            icon: Zap
          }
        ],
        
        integrations: [
          { name: "Salesforce", description: "CRM platform integration", type: "native" as const },
          { name: "HubSpot", description: "Marketing automation integration", type: "api" as const },
          { name: "Mailchimp", description: "Email marketing integration", type: "api" as const },
          { name: "Zoom", description: "Video conferencing integration", type: "api" as const }
        ]
      },
      es: {
        title: "Gestión de Relaciones con Clientes",
        subtitle: "Inteligencia de ventas con guías de compradores y tarjetas de batalla competitivas",
        description: "Acelera el crecimiento de ingresos con OVERWATCH CRM. Nuestra plataforma combina funcionalidad CRM tradicional con inteligencia de ventas avanzada, orientación a compradores y análisis competitivo para ayudarte a ganar más negocios más rápido.",
        
        features: [
          {
            title: "Inteligencia de Ventas",
            description: "Insights impulsados por IA y analítica predictiva para optimización de ventas",
            benefits: ["Puntuación Leads", "Analítica Pipeline", "Pronóstico Ventas", "Seguimiento Rendimiento"]
          },
          {
            title: "Guías de Compradores",
            description: "Mapeo inteligente del viaje del comprador y apoyo en toma de decisiones",
            benefits: ["Mapeo Viaje", "Apoyo Decisiones", "Automatización Contenido", "Seguimiento Engagement"]
          },
          {
            title: "Análisis Competitivo",
            description: "Inteligencia competitiva en tiempo real y automatización de tarjetas de batalla",
            benefits: ["Inteligencia Competitiva", "Tarjetas Batalla", "Análisis Win/Loss", "Posicionamiento Mercado"]
          }
        ],
        
        useCases: [
          {
            title: "Gestión Pipeline",
            description: "Gestión completa de pipeline de ventas con pronóstico y analítica",
            benefits: ["Seguimiento Oportunidades", "Pronóstico Pipeline", "Analítica Negocios", "Gestión Etapas"],
            icon: Target
          },
          {
            title: "Éxito del Cliente",
            description: "Gestión de relaciones con clientes y optimización del éxito",
            benefits: ["Gestión Cuentas", "Salud Cliente", "Seguimiento Renovación", "Oportunidades Expansión"],
            icon: Users
          },
          {
            title: "Automatización Marketing",
            description: "Generación de leads, nutrición y gestión de campañas de marketing",
            benefits: ["Generación Leads", "Gestión Campañas", "Automatización Marketing", "Seguimiento ROI"],
            icon: Zap
          }
        ],
        
        integrations: [
          { name: "Salesforce", description: "Integración plataforma CRM", type: "native" as const },
          { name: "HubSpot", description: "Integración automatización marketing", type: "api" as const },
          { name: "Mailchimp", description: "Integración email marketing", type: "api" as const },
          { name: "Zoom", description: "Integración videoconferencia", type: "api" as const }
        ]
      }
    }
  };

  const config = moduleConfig[moduleId][language];
  const moduleIcons = {
    hcm: Users,
    erp: TrendingUp, 
    epm: Target,
    crm: Building
  };
  const Icon = moduleIcons[moduleId];

  const getIntegrationTypeColor = (type: string) => {
    switch (type) {
      case 'native': return 'bg-green-600/20 text-green-400 border-green-600/40';
      case 'api': return 'bg-blue-600/20 text-blue-400 border-blue-600/40';
      case 'webhook': return 'bg-purple-600/20 text-purple-400 border-purple-600/40';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/40';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button onClick={onBack} variant="ghost" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back' : 'Volver'}
          </Button>
          
          <div className="flex gap-4">
            <Button onClick={onRequestDemo} variant="outline" className="border-white/20 text-white hover:bg-white/10">
              {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
            </Button>
            <Button onClick={onStartTrial} className="bg-green-600 hover:bg-green-700 text-white">
              {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-blue-600">
                <Icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{config.title}</h1>
                <p className="text-xl text-gray-300 mt-2">{config.subtitle}</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 bg-slate-800">
              <TabsTrigger value="overview">{language === 'en' ? 'Overview' : 'Resumen'}</TabsTrigger>
              <TabsTrigger value="features">{language === 'en' ? 'Features' : 'Características'}</TabsTrigger>
              <TabsTrigger value="use-cases">{language === 'en' ? 'Use Cases' : 'Casos de Uso'}</TabsTrigger>
              <TabsTrigger value="integrations">{language === 'en' ? 'Integrations' : 'Integraciones'}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {config.features.map((feature, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="space-y-8">
                {config.features.map((feature, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 rounded-full bg-blue-600 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-400 mb-6 text-lg">{feature.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="p-4 bg-slate-700 rounded-lg text-center">
                              <span className="text-white font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {config.useCases.map((useCase, index) => {
                  const UseCaseIcon = useCase.icon;
                  return (
                    <Card key={index} className="bg-slate-800 border-slate-700 p-6 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-full bg-purple-600">
                          <UseCaseIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      </div>
                      
                      <p className="text-gray-400 mb-6">{useCase.description}</p>
                      
                      <div className="space-y-3">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {config.integrations.map((integration, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <Building className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{integration.name}</h4>
                        <Badge className={getIntegrationTypeColor(integration.type)}>
                          {integration.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/30 p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Get Started?' : '¿Listo para Comenzar?'}
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              {language === 'en' 
                ? 'Transform your business operations with OVERWATCH. Start your free trial today.'
                : 'Transforma las operaciones de tu negocio con OVERWATCH. Comienza tu prueba gratuita hoy.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onStartTrial} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
              </Button>
              <Button onClick={onRequestDemo} variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <Download className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}