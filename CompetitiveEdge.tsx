import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Zap, 
  Building, 
  Brain,
  Vs,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield,
  Layers,
  GitBranch,
  Network,
  Eye,
  Target,
  Lightbulb,
  TrendingUp,
  Database,
  FileSpreadsheet,
  FileText,
  Presentation
} from 'lucide-react';

interface CompetitiveEdgeProps {
  language: 'en' | 'es';
  currentMode?: string;
}

export function CompetitiveEdge({ language, currentMode }: CompetitiveEdgeProps) {
  const labels = {
    en: {
      title: "Competitive Edge",
      subtitle: "Why OVERWATCH³ Wins",
      advantages: "3 Strategic Advantages",
      viewComparison: "View Full Comparison",
      differentiators: [
        {
          title: "Rippling Wiring Teardown",
          description: "Integrated Data Spine vs. Modular Lock-In",
          icon: Network,
          color: "bg-red-600",
          competitor: "Rippling",
          ourApproach: "Unified Data Architecture",
          theirApproach: "Modular Point Solutions",
          advantages: [
            "Single Source of Truth across all modules",
            "Real-time data synchronization",
            "No integration overhead or data silos",
            "Seamless cross-functional workflows"
          ],
          disadvantages: [
            "Multiple data sources requiring sync",
            "Integration complexity and costs",
            "Data inconsistency risks",
            "Vendor lock-in per module"
          ],
          keyDifferentiator: "Integrated Data Spine",
          businessImpact: "67% faster decision-making"
        },
        {
          title: "Oracle Smart View",
          description: "Google Workspace Integration (Sheets live, Docs/Slides next)",
          icon: FileSpreadsheet,
          color: "bg-blue-600", 
          competitor: "Oracle",
          ourApproach: "Modern Workspace Integration",
          theirApproach: "Legacy Desktop Applications",
          advantages: [
            "Live Google Sheets integration",
            "Real-time collaborative planning",
            "Cloud-native architecture",
            "Modern UX/UI design"
          ],
          disadvantages: [
            "Desktop-only Smart View",
            "Complex installation requirements", 
            "Limited collaboration features",
            "Outdated user experience"
          ],
          keyDifferentiator: "Cloud-First Integration",
          businessImpact: "3x faster planning cycles"
        },
        {
          title: "Roske Vault",
          description: "Verified Foresight Module, Scenario Overlay",
          icon: Brain,
          color: "bg-purple-600",
          competitor: "Market Standard",
          ourApproach: "Proprietary Foresight Engine",
          theirApproach: "Reactive Reporting",
          advantages: [
            "Predictive scenario modeling",
            "AI-powered trigger detection",
            "Verified foresight algorithms",
            "Proactive risk management"
          ],
          disadvantages: [
            "Historical reporting only",
            "Manual scenario planning",
            "No predictive capabilities",
            "Reactive decision-making"
          ],
          keyDifferentiator: "Proprietary AI Foresight",
          businessImpact: "85% better risk prediction"
        }
      ]
    },
    es: {
      title: "Ventaja Competitiva",
      subtitle: "Por Qué OVERWATCH³ Gana",
      advantages: "3 Ventajas Estratégicas",
      viewComparison: "Ver Comparación Completa",
      differentiators: [
        {
          title: "Análisis de Cableado Rippling",
          description: "Espina Dorsal de Datos Integrada vs. Bloqueo Modular",
          icon: Network,
          color: "bg-red-600",
          competitor: "Rippling",
          ourApproach: "Arquitectura de Datos Unificada",
          theirApproach: "Soluciones Modulares Puntuales",
          advantages: [
            "Fuente única de verdad en todos los módulos",
            "Sincronización de datos en tiempo real",
            "Sin sobrecarga de integración o silos de datos",
            "Flujos de trabajo cross-funcionales sin interrupciones"
          ],
          disadvantages: [
            "Múltiples fuentes de datos requiriendo sincronización",
            "Complejidad y costos de integración",
            "Riesgos de inconsistencia de datos",
            "Bloqueo de proveedor por módulo"
          ],
          keyDifferentiator: "Espina Dorsal de Datos Integrada",
          businessImpact: "67% toma de decisiones más rápida"
        },
        {
          title: "Oracle Smart View",
          description: "Integración Google Workspace (Sheets en vivo, Docs/Slides próximo)",
          icon: FileSpreadsheet,
          color: "bg-blue-600",
          competitor: "Oracle", 
          ourApproach: "Integración de Espacio de Trabajo Moderno",
          theirApproach: "Aplicaciones de Escritorio Legacy",
          advantages: [
            "Integración en vivo con Google Sheets",
            "Planificación colaborativa en tiempo real",
            "Arquitectura nativa en la nube",
            "Diseño UX/UI moderno"
          ],
          disadvantages: [
            "Smart View solo en escritorio",
            "Requisitos complejos de instalación",
            "Características limitadas de colaboración",
            "Experiencia de usuario obsoleta"
          ],
          keyDifferentiator: "Integración Cloud-First",
          businessImpact: "3x ciclos de planificación más rápidos"
        },
        {
          title: "Roske Vault",
          description: "Módulo de Previsión Verificada, Superposición de Escenarios",
          icon: Brain,
          color: "bg-purple-600",
          competitor: "Estándar del Mercado",
          ourApproach: "Motor de Previsión Propietario",
          theirApproach: "Reportes Reactivos",
          advantages: [
            "Modelado predictivo de escenarios",
            "Detección de disparadores impulsada por IA",
            "Algoritmos de previsión verificados",
            "Gestión proactiva de riesgos"
          ],
          disadvantages: [
            "Solo reportes históricos",
            "Planificación manual de escenarios",
            "Sin capacidades predictivas",
            "Toma de decisiones reactiva"
          ],
          keyDifferentiator: "Previsión IA Propietaria",
          businessImpact: "85% mejor predicción de riesgo"
        }
      ]
    }
  };

  const currentLabels = labels[language];

  return (
    <div className="px-20 py-16 bg-gradient-to-br from-red-900/10 via-background to-blue-900/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-red-600/20 border-red-600/40 text-red-400 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              {currentLabels.advantages}
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentLabels.title}
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>
        </div>

        {/* Competitive Differentiators - Vertical Layout */}
        <div className="space-y-8">
          {currentLabels.differentiators.map((diff, index) => {
            const Icon = diff.icon;
            
            return (
              <Card 
                key={index}
                className="relative overflow-hidden bg-card/90 border-border hover:border-red-500/30 transition-all duration-300 group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${diff.color}/5 group-hover:${diff.color}/10 transition-all duration-300`} />
                
                <div className="relative p-8">
                  {/* Differentiator Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`p-4 rounded-xl ${diff.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {diff.title}
                        </h3>
                        <Badge className="bg-gray-700 text-gray-300 text-xs">
                          vs {diff.competitor}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {diff.description}
                      </p>
                    </div>

                    {/* Business Impact */}
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">
                        {language === 'en' ? 'Business Impact' : 'Impacto Empresarial'}
                      </div>
                      <div className={`font-bold ${diff.color.replace('bg-', 'text-').replace('-600', '-400')}`}>
                        {diff.businessImpact}
                      </div>
                    </div>
                  </div>

                  {/* Comparison Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Our Approach */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-green-600">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">OVERWATCH³</h4>
                          <p className="text-sm text-green-400">{diff.ourApproach}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {diff.advantages.map((advantage, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Their Approach */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-red-600">
                          <XCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{diff.competitor}</h4>
                          <p className="text-sm text-red-400">{diff.theirApproach}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {diff.disadvantages.map((disadvantage, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{disadvantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Differentiator Highlight */}
                  <div className="mt-8 p-4 border border-gray-700/50 rounded-lg bg-gray-800/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Lightbulb className={`w-5 h-5 ${diff.color.replace('bg-', 'text-').replace('-600', '-400')}`} />
                        <span className="font-semibold text-white">
                          {language === 'en' ? 'Key Differentiator:' : 'Diferenciador Clave:'}
                        </span>
                        <span className={`${diff.color.replace('bg-', 'text-').replace('-600', '-400')}`}>
                          {diff.keyDifferentiator}
                        </span>
                      </div>
                      
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium flex items-center gap-2">
                        {currentLabels.viewComparison}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Competitive Summary */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-red-600/10 via-blue-600/10 to-purple-600/10 border-red-500/30 p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="w-6 h-6 text-red-400" />
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {language === 'en' 
                ? 'The Advisory-Grade Advantage' 
                : 'La Ventaja de Grado Asesor'
              }
            </h3>
            
            <p className="text-gray-400 max-w-4xl mx-auto mb-6">
              {language === 'en'
                ? 'While competitors focus on feature parity, OVERWATCH³ delivers architectural superiority. Our integrated data spine, modern workspace integration, and proprietary AI foresight create sustainable competitive advantages that compound over time.'
                : 'Mientras los competidores se enfocan en paridad de características, OVERWATCH³ entrega superioridad arquitectónica. Nuestra espina dorsal de datos integrada, integración de espacio de trabajo moderno, y previsión IA propietaria crean ventajas competitivas sostenibles que se componen con el tiempo.'
              }
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-green-400" />
                <span>{language === 'en' ? 'Unified Architecture' : 'Arquitectura Unificada'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                <span>{language === 'en' ? 'Modern Integration' : 'Integración Moderna'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-400" />
                <span>{language === 'en' ? 'Predictive Intelligence' : 'Inteligencia Predictiva'}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}