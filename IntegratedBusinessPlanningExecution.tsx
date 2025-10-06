import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

interface IntegratedBusinessPlanningExecutionProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

interface PlanningPhase {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending' | 'blocked';
  progress: number;
  modules: string[];
  estimatedDuration: string;
  roi: number;
}

interface ExecutionMetric {
  id: string;
  name: string;
  current: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  module: string;
}

export function IntegratedBusinessPlanningExecution({
  language,
  onNavigate,
  currentMode
}: IntegratedBusinessPlanningExecutionProps) {
  const [activePhase, setActivePhase] = useState<string>('strategic-assessment');
  const [executionView, setExecutionView] = useState<'overview' | 'metrics' | 'roadmap' | 'deployment'>('overview');
  const [realTimeMetrics, setRealTimeMetrics] = useState<ExecutionMetric[]>([]);

  // Labels for bilingual support
  const labels = {
    en: {
      title: 'Integrated Business Planning & Execution',
      subtitle: 'Strategic orchestration across all OVERWATCH³ modules',
      planningPhases: 'Planning Phases',
      executionDashboard: 'Execution Dashboard',
      strategicAssessment: 'Strategic Assessment',
      moduleIntegration: 'Module Integration',
      deployment: 'Deployment & Monitoring',
      optimization: 'Continuous Optimization',
      overview: 'Overview',
      metrics: 'Real-Time Metrics',
      roadmap: 'Execution Roadmap',
      deploymentCenter: 'Deployment Center',
      currentStatus: 'Current Status',
      nextActions: 'Next Actions',
      riskFactors: 'Risk Factors',
      successMetrics: 'Success Metrics',
      moduleAlignment: 'Module Alignment',
      executePhase: 'Execute Phase',
      viewDetails: 'View Details',
      launchModule: 'Launch Module',
      generateReport: 'Generate Report',
      exportPlan: 'Export Plan',
      activeModules: 'Active Modules',
      pendingTasks: 'Pending Tasks',
      completionRate: 'Completion Rate',
      roiProjection: 'ROI Projection',
      riskMitigation: 'Risk Mitigation',
      performanceTracking: 'Performance Tracking',
      continuousImprovement: 'Continuous Improvement'
    },
    es: {
      title: 'Planificación y Ejecución Empresarial Integrada',
      subtitle: 'Orquestación estratégica en todos los módulos OVERWATCH³',
      planningPhases: 'Fases de Planificación',
      executionDashboard: 'Panel de Ejecución',
      strategicAssessment: 'Evaluación Estratégica',
      moduleIntegration: 'Integración de Módulos',
      deployment: 'Despliegue y Monitoreo',
      optimization: 'Optimización Continua',
      overview: 'Resumen',
      metrics: 'Métricas en Tiempo Real',
      roadmap: 'Hoja de Ruta de Ejecución',
      deploymentCenter: 'Centro de Despliegue',
      currentStatus: 'Estado Actual',
      nextActions: 'Próximas Acciones',
      riskFactors: 'Factores de Riesgo',
      successMetrics: 'Métricas de Éxito',
      moduleAlignment: 'Alineación de Módulos',
      executePhase: 'Ejecutar Fase',
      viewDetails: 'Ver Detalles',
      launchModule: 'Lanzar Módulo',
      generateReport: 'Generar Reporte',
      exportPlan: 'Exportar Plan',
      activeModules: 'Módulos Activos',
      pendingTasks: 'Tareas Pendientes',
      completionRate: 'Tasa de Finalización',
      roiProjection: 'Proyección ROI',
      riskMitigation: 'Mitigación de Riesgos',
      performanceTracking: 'Seguimiento de Rendimiento',
      continuousImprovement: 'Mejora Continua'
    }
  };

  const t = labels[language];

  // Sample planning phases data
  const planningPhases: PlanningPhase[] = [
    {
      id: 'strategic-assessment',
      title: language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica',
      description: language === 'en' 
        ? 'Comprehensive analysis of current state and strategic positioning'
        : 'Análisis integral del estado actual y posicionamiento estratégico',
      status: 'completed',
      progress: 100,
      modules: ['erp-assessment', 'strategic-intelligence', 'competitive-analysis'],
      estimatedDuration: language === 'en' ? '2-3 weeks' : '2-3 semanas',
      roi: 285
    },
    {
      id: 'module-integration',
      title: language === 'en' ? 'Module Integration' : 'Integración de Módulos',
      description: language === 'en'
        ? 'Unified deployment of HRIS, CRM, EDM, EPM, and ERP modules'
        : 'Despliegue unificado de módulos HRIS, CRM, EDM, EPM y ERP',
      status: 'in-progress',
      progress: 73,
      modules: ['hris-dashboard', 'crm-intelligence', 'edm-intelligence', 'epm-cloud', 'erp-assessment'],
      estimatedDuration: language === 'en' ? '4-6 weeks' : '4-6 semanas',
      roi: 420
    },
    {
      id: 'deployment-monitoring',
      title: language === 'en' ? 'Deployment & Monitoring' : 'Despliegue y Monitoreo',
      description: language === 'en'
        ? 'Live deployment with real-time performance tracking and optimization'
        : 'Despliegue en vivo con seguimiento de rendimiento en tiempo real y optimización',
      status: 'pending',
      progress: 0,
      modules: ['squad-deployment', 'performance-analytics', 'coaching-overlays'],
      estimatedDuration: language === 'en' ? '6-8 weeks' : '6-8 semanas',
      roi: 650
    },
    {
      id: 'continuous-optimization',
      title: language === 'en' ? 'Continuous Optimization' : 'Optimización Continua',
      description: language === 'en'
        ? 'Ongoing refinement and strategic enhancement based on performance data'
        : 'Refinamiento continuo y mejora estratégica basada en datos de rendimiento',
      status: 'pending',
      progress: 0,
      modules: ['ai-recommendations', 'predictive-analytics', 'strategic-advisory'],
      estimatedDuration: language === 'en' ? 'Ongoing' : 'Continuo',
      roi: 850
    }
  ];

  // Real-time execution metrics
  useEffect(() => {
    setRealTimeMetrics([
      {
        id: 'hris-adoption',
        name: language === 'en' ? 'HRIS Adoption Rate' : 'Tasa de Adopción HRIS',
        current: 89,
        target: 95,
        trend: 'up',
        module: 'hris'
      },
      {
        id: 'crm-pipeline',
        name: language === 'en' ? 'CRM Pipeline Velocity' : 'Velocidad Pipeline CRM',
        current: 127,
        target: 150,
        trend: 'up',
        module: 'crm'
      },
      {
        id: 'edm-engagement',
        name: language === 'en' ? 'EDM Engagement Rate' : 'Tasa de Compromiso EDM',
        current: 34,
        target: 40,
        trend: 'stable',
        module: 'edm'
      },
      {
        id: 'epm-accuracy',
        name: language === 'en' ? 'EPM Forecast Accuracy' : 'Precisión Pronóstico EPM',
        current: 92,
        target: 95,
        trend: 'up',
        module: 'epm'
      },
      {
        id: 'erp-efficiency',
        name: language === 'en' ? 'ERP Process Efficiency' : 'Eficiencia Proceso ERP',
        current: 78,
        target: 85,
        trend: 'down',
        module: 'erp'
      }
    ]);
  }, [language]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'pending': return 'bg-gray-500';
      case 'blocked': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getModuleTheme = (module: string) => {
    if (module.includes('hris')) return 'hris';
    if (module.includes('crm')) return 'crm';
    if (module.includes('edm')) return 'edm';
    if (module.includes('epm')) return 'epm';
    if (module.includes('erp')) return 'erp';
    return 'command-center';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="command-center-card mx-6 mt-6 p-6 rounded-command">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('business-modules')}
              className="module-nav-button"
            >
              <span className="text-lg">←</span>
              <span className="ml-2">{language === 'en' ? 'Back' : 'Atrás'}</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="module-status-online"></div>
            <span className="text-sm text-muted-foreground">
              {language === 'en' ? 'Live Planning' : 'Planificación en Vivo'}
            </span>
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              {language === 'en' ? 'Active' : 'Activo'}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <Tabs defaultValue="planning" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="planning">{t.planningPhases}</TabsTrigger>
            <TabsTrigger value="execution">{t.executionDashboard}</TabsTrigger>
          </TabsList>

          {/* Planning Phases Tab */}
          <TabsContent value="planning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Planning Phases List */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t.planningPhases}</h3>
                
                {planningPhases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`command-center-card p-6 cursor-pointer transition-all ${
                      activePhase === phase.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setActivePhase(phase.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(phase.status)}`}></div>
                        <div>
                          <h4 className="font-semibold text-foreground">{phase.title}</h4>
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {phase.progress}%
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{language === 'en' ? 'Progress' : 'Progreso'}</span>
                          <span className="text-foreground">{phase.progress}%</span>
                        </div>
                        <Progress value={phase.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {language === 'en' ? 'Duration' : 'Duración'}: {phase.estimatedDuration}
                        </span>
                        <span className="text-green-400">
                          ROI: +{phase.roi}%
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {phase.modules.map((module) => (
                          <Badge 
                            key={module} 
                            variant="outline" 
                            className={`${getModuleTheme(module)}-badge text-xs`}
                          >
                            {module.replace('-', ' ').toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {phase.status === 'in-progress' && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button className="command-center-button w-full">
                          {t.executePhase}
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Phase Details */}
              <div className="space-y-6">
                <div className="command-center-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.currentStatus}</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="module-metric-card">
                        <div className="module-metric-value text-primary">6</div>
                        <div className="module-metric-label">{t.activeModules}</div>
                      </div>
                      <div className="module-metric-card">
                        <div className="module-metric-value text-yellow-400">12</div>
                        <div className="module-metric-label">{t.pendingTasks}</div>
                      </div>
                      <div className="module-metric-card">
                        <div className="module-metric-value text-green-400">78%</div>
                        <div className="module-metric-label">{t.completionRate}</div>
                      </div>
                      <div className="module-metric-card">
                        <div className="module-metric-value text-blue-400">+420%</div>
                        <div className="module-metric-label">{t.roiProjection}</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-3">{t.nextActions}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' 
                              ? 'Complete CRM pipeline configuration'
                              : 'Completar configuración pipeline CRM'
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' 
                              ? 'Deploy EDM automation workflows'
                              : 'Desplegar flujos de automatización EDM'
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' 
                              ? 'Initiate HRIS coaching sequences'
                              : 'Iniciar secuencias de coaching HRIS'
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="command-center-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.moduleAlignment}</h3>
                  
                  <div className="space-y-3">
                    {['HRIS³', 'CRM Intelligence', 'EDM Intelligence', 'EPM Cloud', 'ERP Assessment'].map((module, index) => (
                      <div key={module} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            index < 3 ? 'bg-green-500' : index === 3 ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                          <span className="text-sm text-foreground">{module}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {index < 3 ? '✓ Ready' : index === 3 ? '⚠ Pending' : '⏳ Queued'}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onNavigate(module.toLowerCase().replace(' ', '-').replace('³', ''))}
                          >
                            {t.launchModule}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Execution Dashboard Tab */}
          <TabsContent value="execution" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{t.executionDashboard}</h3>
              
              <div className="flex gap-2">
                <Button
                  variant={executionView === 'overview' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setExecutionView('overview')}
                >
                  {t.overview}
                </Button>
                <Button
                  variant={executionView === 'metrics' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setExecutionView('metrics')}
                >
                  {t.metrics}
                </Button>
                <Button
                  variant={executionView === 'roadmap' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setExecutionView('roadmap')}
                >
                  {t.roadmap}
                </Button>
                <Button
                  variant={executionView === 'deployment' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setExecutionView('deployment')}
                >
                  {t.deploymentCenter}
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {executionView === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                  {/* Performance Overview */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="command-center-card p-6">
                      <h4 className="font-semibold text-foreground mb-4">{t.performanceTracking}</h4>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="module-metric-card text-center">
                          <div className="module-metric-value text-hris-accent">89%</div>
                          <div className="module-metric-label">HRIS Adoption</div>
                        </div>
                        <div className="module-metric-card text-center">
                          <div className="module-metric-value text-crm-accent">127</div>
                          <div className="module-metric-label">CRM Velocity</div>
                        </div>
                        <div className="module-metric-card text-center">
                          <div className="module-metric-value text-edm-accent">34%</div>
                          <div className="module-metric-label">EDM Engagement</div>
                        </div>
                        <div className="module-metric-card text-center">
                          <div className="module-metric-value text-epm-accent">92%</div>
                          <div className="module-metric-label">EPM Accuracy</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="command-center-card p-6">
                      <h4 className="font-semibold text-foreground mb-4">{t.continuousImprovement}</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Process Optimization Score' : 'Puntuación Optimización Proceso'}
                          </span>
                          <div className="flex items-center gap-2">
                            <Progress value={87} className="w-24 h-2" />
                            <span className="text-sm text-foreground">87%</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Strategic Alignment' : 'Alineación Estratégica'}
                          </span>
                          <div className="flex items-center gap-2">
                            <Progress value={94} className="w-24 h-2" />
                            <span className="text-sm text-foreground">94%</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Module Integration' : 'Integración Módulos'}
                          </span>
                          <div className="flex items-center gap-2">
                            <Progress value={73} className="w-24 h-2" />
                            <span className="text-sm text-foreground">73%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk and Success Metrics */}
                  <div className="space-y-6">
                    <div className="command-center-card p-6">
                      <h4 className="font-semibold text-foreground mb-4">{t.riskMitigation}</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {language === 'en' ? 'Data Security' : 'Seguridad Datos'}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {language === 'en' ? 'Low risk' : 'Riesgo bajo'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {language === 'en' ? 'User Adoption' : 'Adopción Usuario'}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {language === 'en' ? 'Medium risk' : 'Riesgo medio'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {language === 'en' ? 'Integration' : 'Integración'}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {language === 'en' ? 'Low risk' : 'Riesgo bajo'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="command-center-card p-6">
                      <h4 className="font-semibold text-foreground mb-4">{t.successMetrics}</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">
                              {language === 'en' ? 'Revenue Growth' : 'Crecimiento Ingresos'}
                            </span>
                            <span className="text-sm font-medium text-green-400">+42%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">
                              {language === 'en' ? 'Cost Reduction' : 'Reducción Costos'}
                            </span>
                            <span className="text-sm font-medium text-blue-400">-28%</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">
                              {language === 'en' ? 'Efficiency Gain' : 'Ganancia Eficiencia'}
                            </span>
                            <span className="text-sm font-medium text-purple-400">+67%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {executionView === 'metrics' && (
                <motion.div
                  key="metrics"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {realTimeMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${getModuleTheme(metric.module)}-card p-6`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-foreground">{metric.name}</h4>
                        <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-foreground">{metric.current}%</span>
                          <span className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Target' : 'Objetivo'}: {metric.target}%
                          </span>
                        </div>
                        
                        <Progress 
                          value={(metric.current / metric.target) * 100} 
                          className="h-2" 
                        />
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {metric.module.toUpperCase()}
                          </span>
                          <span className={`${
                            metric.trend === 'up' ? 'text-green-400' : 
                            metric.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                          }`}>
                            {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} 
                            {language === 'en' ? 'Trending' : 'Tendencia'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button className="command-center-button" onClick={() => onNavigate('business-modules')}>
            {t.viewDetails}
          </Button>
          <Button className="command-center-button" onClick={() => onNavigate('business-planning-executive-summary')}>
            📊 {language === 'en' ? 'Executive Summary' : 'Resumen Ejecutivo'}
          </Button>
          <Button className="command-center-button" onClick={() => onNavigate('strategic-integration-mapper')}>
            🗺️ {language === 'en' ? 'Integration Map' : 'Mapa Integración'}
          </Button>
          <Button className="command-center-button" onClick={() => onNavigate('business-execution-workflow')}>
            ⚡ {language === 'en' ? 'Execution Engine' : 'Motor Ejecución'}
          </Button>
          <Button className="hris-button" onClick={() => onNavigate('hris-dashboard')}>
            {language === 'en' ? 'Launch HRIS' : 'Lanzar HRIS'}
          </Button>
          <Button className="crm-button" onClick={() => onNavigate('crm-intelligence')}>
            {language === 'en' ? 'Launch CRM' : 'Lanzar CRM'}
          </Button>
          <Button className="edm-button" onClick={() => onNavigate('edm-intelligence')}>
            {language === 'en' ? 'Launch EDM' : 'Lanzar EDM'}
          </Button>
          <Button className="epm-button" onClick={() => onNavigate('epm-cloud')}>
            {language === 'en' ? 'Launch EPM' : 'Lanzar EPM'}
          </Button>
          <Button className="erp-button" onClick={() => onNavigate('erp-assessment')}>
            {language === 'en' ? 'Launch ERP' : 'Lanzar ERP'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IntegratedBusinessPlanningExecution;