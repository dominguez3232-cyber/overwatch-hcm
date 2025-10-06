import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Shield, 
  RefreshCw, 
  FileText,
  Zap,
  Eye,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Database,
  GitBranch
} from 'lucide-react';

interface AdvisoryEnginesProps {
  language: 'en' | 'es';
  currentMode?: string;
}

export function AdvisoryEngines({ language, currentMode }: AdvisoryEnginesProps) {
  const labels = {
    en: {
      title: "Advisory Engines",
      subtitle: "AI-Powered Intelligence Layer",
      poweredBy: "Powered by OVERWATCH³ AI",
      status: "Active",
      engines: [
        {
          title: "Suggestion Engine",
          description: "Telemetry + KPIs → Next Move Recommendations", 
          icon: Brain,
          color: "bg-blue-600",
          features: [
            "Real-time Telemetry Analysis",
            "KPI Pattern Recognition", 
            "Contextual Recommendations",
            "Action Priority Scoring"
          ],
          status: "Learning",
          metrics: "2.3M+ data points analyzed"
        },
        {
          title: "Compliance Sentinel",
          description: "Auto-Patch, Jurisdiction Awareness",
          icon: Shield,
          color: "bg-green-600",
          features: [
            "Regulatory Change Detection",
            "Multi-Jurisdiction Monitoring",
            "Auto-Compliance Updates",
            "Risk Mitigation Alerts"
          ],
          status: "Monitoring",
          metrics: "47 jurisdictions tracked"
        },
        {
          title: "Self-Patching Engine", 
          description: "Schema Drift Monitor + Rollback",
          icon: RefreshCw,
          color: "bg-purple-600",
          features: [
            "Schema Drift Detection",
            "Automated Patch Deployment",
            "Rollback Capabilities",
            "Version Control Integration"
          ],
          status: "Optimizing",
          metrics: "99.7% uptime maintained"
        },
        {
          title: "Attribution Matrix",
          description: "Every Insight Cites Its Source",
          icon: FileText,
          color: "bg-orange-600", 
          features: [
            "Source Tracking",
            "Data Lineage Mapping",
            "Audit Trail Generation",
            "Transparency Reporting"
          ],
          status: "Validating",
          metrics: "100% traceability achieved"
        }
      ]
    },
    es: {
      title: "Motores Asesores",
      subtitle: "Capa de Inteligencia Impulsada por IA",
      poweredBy: "Impulsado por OVERWATCH³ AI",
      status: "Activo",
      engines: [
        {
          title: "Motor de Sugerencias",
          description: "Telemetría + KPIs → Recomendaciones de Próximo Movimiento",
          icon: Brain,
          color: "bg-blue-600",
          features: [
            "Análisis de Telemetría en Tiempo Real",
            "Reconocimiento de Patrones KPI",
            "Recomendaciones Contextuales", 
            "Puntuación de Prioridad de Acción"
          ],
          status: "Aprendiendo",
          metrics: "2.3M+ puntos de datos analizados"
        },
        {
          title: "Centinela de Cumplimiento",
          description: "Auto-Parche, Conciencia Jurisdiccional",
          icon: Shield,
          color: "bg-green-600",
          features: [
            "Detección de Cambios Regulatorios",
            "Monitoreo Multi-Jurisdiccional",
            "Actualizaciones Auto-Cumplimiento",
            "Alertas de Mitigación de Riesgo"
          ],
          status: "Monitoreando",
          metrics: "47 jurisdicciones rastreadas"
        },
        {
          title: "Motor de Auto-Parches",
          description: "Monitor de Deriva de Esquema + Rollback",
          icon: RefreshCw,
          color: "bg-purple-600",
          features: [
            "Detección de Deriva de Esquema",
            "Despliegue Automatizado de Parches",
            "Capacidades de Rollback",
            "Integración de Control de Versiones"
          ],
          status: "Optimizando",
          metrics: "99.7% tiempo activo mantenido"
        },
        {
          title: "Matriz de Atribución",
          description: "Cada Insight Cita Su Fuente",
          icon: FileText,
          color: "bg-orange-600",
          features: [
            "Seguimiento de Fuentes",
            "Mapeo de Linaje de Datos",
            "Generación de Rastro de Auditoría",
            "Reportes de Transparencia"
          ],
          status: "Validando",
          metrics: "100% trazabilidad lograda"
        }
      ]
    }
  };

  const currentLabels = labels[language];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'learning':
      case 'aprendiendo':
        return <Brain className="w-3 h-3" />;
      case 'monitoring':
      case 'monitoreando':
        return <Eye className="w-3 h-3" />;
      case 'optimizing':
      case 'optimizando':
        return <Zap className="w-3 h-3" />;
      case 'validating':
      case 'validando':
        return <CheckCircle className="w-3 h-3" />;
      default:
        return <Cpu className="w-3 h-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'learning':
      case 'aprendiendo':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'monitoring':
      case 'monitoreando':
        return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'optimizing':
      case 'optimizando':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'validating':
      case 'validando':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="px-20 py-16 bg-gradient-to-br from-gray-900/80 via-background to-gray-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-purple-600/20 border-purple-600/40 text-purple-400 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              {currentLabels.poweredBy}
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentLabels.title}
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>
        </div>

        {/* Engines Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {currentLabels.engines.map((engine, index) => {
            const Icon = engine.icon;
            
            return (
              <Card 
                key={index}
                className="relative overflow-hidden bg-card/90 border-border hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${engine.color}/5 group-hover:${engine.color}/10 transition-all duration-300`} />
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  <Badge className={`text-xs border ${getStatusColor(engine.status)}`}>
                    {getStatusIcon(engine.status)}
                    <span className="ml-1">{engine.status}</span>
                  </Badge>
                </div>
                
                <div className="relative p-6">
                  {/* Engine Header */}
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl ${engine.color} shadow-lg mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {engine.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {engine.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {engine.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${engine.color} mt-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Engine Metrics */}
                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Performance</span>
                      <span className={`font-mono ${engine.color.replace('bg-', 'text-').replace('-600', '-400')}`}>
                        {engine.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
                      <Database className="w-4 h-4" />
                      View Engine Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Intelligence Architecture Callout */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-green-600/10 border-purple-500/30 p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
              <GitBranch className="w-6 h-6 text-blue-400" />
              <RefreshCw className="w-6 h-6 text-green-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {language === 'en' 
                ? 'Autonomous Intelligence Architecture' 
                : 'Arquitectura de Inteligencia Autónoma'
              }
            </h3>
            
            <p className="text-gray-400 max-w-4xl mx-auto">
              {language === 'en'
                ? 'These four advisory engines work in concert to provide autonomous intelligence, continuously learning from your data patterns, automatically maintaining compliance, self-healing system issues, and ensuring complete transparency in every recommendation and insight.'
                : 'Estos cuatro motores asesores trabajan en conjunto para proporcionar inteligencia autónoma, aprendiendo continuamente de tus patrones de datos, manteniendo automáticamente el cumplimiento, auto-sanando problemas del sistema, y asegurando transparencia completa en cada recomendación e insight.'
              }
            </p>

            <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-green-400" />
                <span>{language === 'en' ? 'Zero Manual Intervention' : 'Cero Intervención Manual'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>{language === 'en' ? 'Continuous Learning' : 'Aprendizaje Continuo'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-400" />
                <span>{language === 'en' ? 'Full Transparency' : 'Transparencia Total'}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}