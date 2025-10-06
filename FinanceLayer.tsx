import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  Globe,
  Calculator,
  BarChart3,
  Settings,
  Shield,
  ArrowRight,
  Database,
  Workflow
} from 'lucide-react';

interface FinanceLayerProps {
  language: 'en' | 'es';
  currentMode?: string;
}

export function FinanceLayer({ language, currentMode }: FinanceLayerProps) {
  const labels = {
    en: {
      title: "Finance Layer",
      subtitle: "Enterprise-Grade Financial Operations",
      poweredBy: "ERP Core Module",
      capabilities: "4 Core Capabilities",
      viewDetails: "View Details",
      modules: [
        {
          title: "Cash Telemetry Dashboard",
          description: "Real-time cash flow monitoring with predictive analytics",
          icon: DollarSign,
          color: "bg-green-600",
          features: [
            "Real-time Cash Position",
            "Predictive Cash Flow",
            "Liquidity Risk Analysis",
            "Treasury Optimization"
          ],
          subcomponents: [
            "Cash Flow Forecasting Engine",
            "Bank Integration APIs",
            "Working Capital Analytics",
            "Investment Tracking"
          ],
          metrics: "Real-time monitoring"
        },
        {
          title: "Month-End Close Flow",
          description: "Journal Entry Automation, Accruals Engine, Reconciliation",
          icon: Calendar,
          color: "bg-blue-600",
          features: [
            "Automated Journal Entries",
            "Accruals Engine",
            "Account Reconciliation",
            "Variance Analysis"
          ],
          subcomponents: [
            "GL Automation Engine",
            "Accrual Calculations",
            "Bank Reconciliation",
            "Intercompany Eliminations"
          ],
          metrics: "5-day close cycle"
        },
        {
          title: "Quarterly & Annual Close Protocols",
          description: "GAAP/IFRS Ready, Audit Snapshots",
          icon: FileText,
          color: "bg-purple-600",
          features: [
            "GAAP/IFRS Compliance",
            "Audit Trail Generation",
            "Period-End Snapshots",
            "Regulatory Reporting"
          ],
          subcomponents: [
            "GAAP/IFRS Engine",
            "Audit Documentation",
            "Financial Statements",
            "SOX Compliance Tools"
          ],
          metrics: "100% audit ready"
        },
        {
          title: "Revenue Recognition Module",
          description: "Deferred Rev, Multi-Currency, Subscription Logic",
          icon: TrendingUp,
          color: "bg-orange-600",
          features: [
            "ASC 606 Compliance",
            "Multi-Currency Support",
            "Subscription Management",
            "Deferred Revenue Tracking"
          ],
          subcomponents: [
            "Performance Obligations",
            "Contract Modifications",
            "Currency Conversion",
            "Revenue Schedules"
          ],
          metrics: "ASC 606 compliant"
        }
      ]
    },
    es: {
      title: "Capa Financiera",
      subtitle: "Operaciones Financieras de Grado Empresarial",
      poweredBy: "Módulo Núcleo ERP",
      capabilities: "4 Capacidades Centrales",
      viewDetails: "Ver Detalles",
      modules: [
        {
          title: "Panel de Telemetría de Efectivo",
          description: "Monitoreo en tiempo real del flujo de efectivo con analítica predictiva",
          icon: DollarSign,
          color: "bg-green-600",
          features: [
            "Posición de Efectivo en Tiempo Real",
            "Flujo de Efectivo Predictivo",
            "Análisis de Riesgo de Liquidez",
            "Optimización de Tesorería"
          ],
          subcomponents: [
            "Motor de Pronóstico de Flujo",
            "APIs de Integración Bancaria",
            "Analítica de Capital de Trabajo",
            "Seguimiento de Inversiones"
          ],
          metrics: "Monitoreo en tiempo real"
        },
        {
          title: "Flujo de Cierre Mensual",
          description: "Automatización de Asientos, Motor de Acumulaciones, Conciliación",
          icon: Calendar,
          color: "bg-blue-600",
          features: [
            "Asientos de Diario Automatizados",
            "Motor de Acumulaciones",
            "Conciliación de Cuentas",
            "Análisis de Variaciones"
          ],
          subcomponents: [
            "Motor de Automatización GL",
            "Cálculos de Acumulaciones",
            "Conciliación Bancaria",
            "Eliminaciones Intercompañía"
          ],
          metrics: "Ciclo de cierre de 5 días"
        },
        {
          title: "Protocolos de Cierre Trimestral y Anual",
          description: "Listo para GAAP/IFRS, Snapshots de Auditoría",
          icon: FileText,
          color: "bg-purple-600",
          features: [
            "Cumplimiento GAAP/IFRS",
            "Generación de Rastro de Auditoría",
            "Snapshots de Fin de Período",
            "Reportes Regulatorios"
          ],
          subcomponents: [
            "Motor GAAP/IFRS",
            "Documentación de Auditoría",
            "Estados Financieros",
            "Herramientas de Cumplimiento SOX"
          ],
          metrics: "100% listo para auditoría"
        },
        {
          title: "Módulo de Reconocimiento de Ingresos",
          description: "Ingresos Diferidos, Multi-Moneda, Lógica de Suscripción",
          icon: TrendingUp,
          color: "bg-orange-600",
          features: [
            "Cumplimiento ASC 606",
            "Soporte Multi-Moneda",
            "Gestión de Suscripciones",
            "Seguimiento de Ingresos Diferidos"
          ],
          subcomponents: [
            "Obligaciones de Rendimiento",
            "Modificaciones de Contrato",
            "Conversión de Moneda",
            "Horarios de Ingresos"
          ],
          metrics: "Cumplimiento ASC 606"
        }
      ]
    }
  };

  const currentLabels = labels[language];

  const isFinanceRelevant = () => {
    return currentMode === 'accounting' || currentMode === 'founder' || currentMode === 'strategy';
  };

  return (
    <div className="px-20 py-16 bg-gradient-to-br from-blue-900/20 via-background to-green-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-blue-600/20 border-blue-600/40 text-blue-400 px-4 py-2">
              <Database className="w-4 h-4 mr-2" />
              {currentLabels.poweredBy}
            </Badge>
            <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              {currentLabels.capabilities}
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentLabels.title}
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>
        </div>

        {/* Finance Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {currentLabels.modules.map((module, index) => {
            const Icon = module.icon;
            const isHighlighted = isFinanceRelevant();
            
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group ${
                  isHighlighted 
                    ? 'bg-card border-blue-500/30 shadow-lg shadow-blue-500/10' 
                    : 'bg-card/80 border-border hover:border-gray-600'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${module.color}/5 group-hover:${module.color}/10 transition-all duration-300`} />
                
                {/* Finance Mode Indicator */}
                {isHighlighted && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white text-xs">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      Financial
                    </Badge>
                  </div>
                )}
                
                <div className="relative p-8">
                  {/* Module Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-xl ${module.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                      <Workflow className="w-4 h-4" />
                      {language === 'en' ? 'Core Features' : 'Características Centrales'}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {module.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full ${module.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subcomponents */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      {language === 'en' ? 'Technical Components' : 'Componentes Técnicos'}
                    </h4>
                    <div className="space-y-1">
                      {module.subcomponents.map((component, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-gray-600" />
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="border-t border-gray-700/50 pt-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {language === 'en' ? 'Performance' : 'Rendimiento'}
                      </span>
                      <span className={`text-xs font-mono ${module.color.replace('bg-', 'text-').replace('-600', '-400')}`}>
                        {module.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2 group-hover:bg-gray-700">
                    <Calculator className="w-4 h-4" />
                    {currentLabels.viewDetails}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Enterprise Finance Architecture Callout */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 via-green-600/10 to-purple-600/10 border-blue-500/30 p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <Globe className="w-6 h-6 text-green-400" />
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {language === 'en' 
                ? 'Enterprise-Grade Financial Control' 
                : 'Control Financiero de Grado Empresarial'
              }
            </h3>
            
            <p className="text-gray-400 max-w-4xl mx-auto mb-6">
              {language === 'en'
                ? 'Built for scale with multi-entity consolidation, real-time reporting, and full audit trail capabilities. Seamlessly handles complex revenue recognition, multi-currency operations, and regulatory compliance across all jurisdictions.'
                : 'Construido para escalar con consolidación multi-entidad, reportes en tiempo real, y capacidades completas de rastro de auditoría. Maneja sin problemas el reconocimiento complejo de ingresos, operaciones multi-moneda, y cumplimiento regulatorio en todas las jurisdicciones.'
              }
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{language === 'en' ? 'SOX Compliant' : 'Cumplimiento SOX'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>{language === 'en' ? 'Multi-Currency' : 'Multi-Moneda'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>{language === 'en' ? 'Real-time Processing' : 'Procesamiento Tiempo Real'}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}