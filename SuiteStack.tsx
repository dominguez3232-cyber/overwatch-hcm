import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Users, 
  Building, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Target,
  Database,
  DollarSign,
  Brain,
  Eye,
  Lock,
  Zap
} from 'lucide-react';

interface SuiteStackProps {
  language: 'en' | 'es';
  currentMode?: string;
}

export function SuiteStack({ language, currentMode }: SuiteStackProps) {
  const labels = {
    en: {
      title: "OVERWATCH³ Suite Stack",
      subtitle: "Unified Enterprise Command Center",
      modules: "6 Integrated Modules",
      viewDetails: "View Details",
      modules_list: [
        {
          title: "HCM Command Center",
          description: "People, Payroll, Benefits, Performance",
          icon: Users,
          color: "bg-blue-600",
          features: ["People Management", "Payroll Processing", "Benefits Administration", "Performance Analytics"]
        },
        {
          title: "ERP Core",
          description: "Finance, AP/AR, Procurement, Ledger",
          icon: Building,
          color: "bg-green-600", 
          features: ["Financial Management", "Accounts Payable/Receivable", "Procurement", "General Ledger"]
        },
        {
          title: "EPM Intelligence",
          description: "Planning, Forecasting, Roske Scenario Engine",
          icon: TrendingUp,
          color: "bg-purple-600",
          features: ["Strategic Planning", "Financial Forecasting", "Scenario Modeling", "Risk Analysis"]
        },
        {
          title: "BI & Analytics",
          description: "Essbase Cubes, OLAP Dashboards",
          icon: BarChart3,
          color: "bg-orange-600",
          features: ["Essbase Cubes", "OLAP Analytics", "Real-time Dashboards", "Data Visualization"]
        },
        {
          title: "EDM Governance",
          description: "Data Quality, Compliance Sentinel",
          icon: Shield,
          color: "bg-red-600",
          features: ["Data Quality", "Compliance Monitoring", "Audit Trails", "Risk Management"]
        },
        {
          title: "CRM Growth Hub",
          description: "Pipeline, Customer Insights, Revenue Forecasting",
          icon: Target,
          color: "bg-cyan-600",
          features: ["Sales Pipeline", "Customer Analytics", "Revenue Forecasting", "Growth Insights"]
        }
      ]
    },
    es: {
      title: "Stack de Suite OVERWATCH³",
      subtitle: "Centro de Comando Empresarial Unificado",
      modules: "6 Módulos Integrados",
      viewDetails: "Ver Detalles",
      modules_list: [
        {
          title: "Centro de Comando HCM",
          description: "Personas, Nómina, Beneficios, Rendimiento",
          icon: Users,
          color: "bg-blue-600",
          features: ["Gestión de Personas", "Procesamiento de Nómina", "Administración de Beneficios", "Analítica de Rendimiento"]
        },
        {
          title: "Núcleo ERP",
          description: "Finanzas, AP/AR, Adquisiciones, Libro Mayor",
          icon: Building,
          color: "bg-green-600",
          features: ["Gestión Financiera", "Cuentas por Pagar/Cobrar", "Adquisiciones", "Libro Mayor General"]
        },
        {
          title: "Inteligencia EPM",
          description: "Planificación, Pronósticos, Motor de Escenarios Roske",
          icon: TrendingUp,
          color: "bg-purple-600",
          features: ["Planificación Estratégica", "Pronósticos Financieros", "Modelado de Escenarios", "Análisis de Riesgo"]
        },
        {
          title: "BI y Analítica",
          description: "Cubos Essbase, Tableros OLAP",
          icon: BarChart3,
          color: "bg-orange-600",
          features: ["Cubos Essbase", "Analítica OLAP", "Tableros en Tiempo Real", "Visualización de Datos"]
        },
        {
          title: "Gobernanza EDM",
          description: "Calidad de Datos, Centinela de Cumplimiento",
          icon: Shield,
          color: "bg-red-600",
          features: ["Calidad de Datos", "Monitoreo de Cumplimiento", "Rastros de Auditoría", "Gestión de Riesgo"]
        },
        {
          title: "Hub de Crecimiento CRM",
          description: "Pipeline, Insights de Clientes, Pronóstico de Ingresos",
          icon: Target,
          color: "bg-cyan-600",
          features: ["Pipeline de Ventas", "Analítica de Clientes", "Pronóstico de Ingresos", "Insights de Crecimiento"]
        }
      ]
    }
  };

  const currentLabels = labels[language];

  const getModeHighlight = (moduleTitle: string) => {
    if (!currentMode) return false;
    
    switch (currentMode) {
      case 'founder':
        return moduleTitle.includes('HCM') || moduleTitle.includes('EPM');
      case 'trabajo':
        return moduleTitle.includes('HCM') || moduleTitle.includes('CRM');
      case 'accounting':
        return moduleTitle.includes('ERP') || moduleTitle.includes('BI');
      case 'strategy':
        return moduleTitle.includes('EPM') || moduleTitle.includes('EDM');
      default:
        return false;
    }
  };

  return (
    <div className="px-20 py-16 bg-gradient-to-br from-gray-900/50 via-background to-gray-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
              <Database className="w-4 h-4 mr-2" />
              {currentLabels.modules}
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentLabels.title}
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>
        </div>

        {/* Suite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLabels.modules_list.map((module, index) => {
            const Icon = module.icon;
            const isHighlighted = getModeHighlight(module.title);
            
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group ${
                  isHighlighted 
                    ? 'bg-card border-green-500/50 shadow-lg shadow-green-500/20 ring-1 ring-green-500/30' 
                    : 'bg-card/80 border-border hover:border-gray-600'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${module.color}/5 group-hover:${module.color}/10 transition-all duration-300`} />
                
                {/* Mode Highlight Indicator */}
                {isHighlighted && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                )}
                
                <div className="relative p-6">
                  {/* Module Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${module.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {module.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${module.color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium group-hover:bg-gray-700">
                    {currentLabels.viewDetails}
                    <Eye className="w-4 h-4 ml-2 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 border-green-500/30 p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Lock className="w-6 h-6 text-green-400" />
              <Brain className="w-6 h-6 text-blue-400" />
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {language === 'en' 
                ? 'Unified Data Architecture' 
                : 'Arquitectura de Datos Unificada'
              }
            </h3>
            
            <p className="text-gray-400 max-w-3xl mx-auto">
              {language === 'en'
                ? 'All modules share a single source of truth with real-time data synchronization, enabling cross-functional insights and seamless workflow automation across your entire organization.'
                : 'Todos los módulos comparten una única fuente de verdad con sincronización de datos en tiempo real, habilitando insights cross-funcionales y automatización de flujo de trabajo sin interrupciones en toda tu organización.'
              }
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}