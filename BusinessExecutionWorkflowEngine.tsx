import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

interface BusinessExecutionWorkflowEngineProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  module: string;
  status: 'completed' | 'active' | 'pending' | 'blocked';
  progress: number;
  estimatedDuration: string;
  dependencies: string[];
  outcomes: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

interface ExecutionTimeline {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'active' | 'upcoming';
  milestones: WorkflowStep[];
}

export function BusinessExecutionWorkflowEngine({
  language,
  onNavigate,
  currentMode
}: BusinessExecutionWorkflowEngineProps) {
  const [activeWorkflow, setActiveWorkflow] = useState<string>('foundation');
  const [executionMode, setExecutionMode] = useState<'timeline' | 'dependencies' | 'monitoring'>('timeline');
  const [realTimeStatus, setRealTimeStatus] = useState<any>({});

  // Labels for bilingual support
  const labels = {
    en: {
      title: 'Business Execution Workflow Engine',
      subtitle: 'Orchestrated deployment and monitoring across all business functions',
      foundationPhase: 'Foundation Phase',
      accelerationPhase: 'Acceleration Phase',
      optimizationPhase: 'Optimization Phase',
      scalingPhase: 'Scaling Phase',
      timeline: 'Execution Timeline',
      dependencies: 'Dependency Mapping',
      monitoring: 'Real-Time Monitoring',
      currentStep: 'Current Step',
      nextMilestone: 'Next Milestone',
      riskAssessment: 'Risk Assessment',
      performanceMetrics: 'Performance Metrics',
      resourceAllocation: 'Resource Allocation',
      stakeholderAlignment: 'Stakeholder Alignment',
      executeStep: 'Execute Step',
      pauseExecution: 'Pause Execution',
      viewAnalytics: 'View Analytics',
      exportReport: 'Export Report',
      criticalPath: 'Critical Path',
      blockers: 'Current Blockers',
      opportunities: 'Optimization Opportunities',
      estimatedCompletion: 'Estimated Completion',
      overallProgress: 'Overall Progress',
      moduleHealth: 'Module Health',
      integrationStatus: 'Integration Status',
      businessImpact: 'Business Impact',
      strategicAlignment: 'Strategic Alignment'
    },
    es: {
      title: 'Motor de Flujo de Trabajo de Ejecución Empresarial',
      subtitle: 'Despliegue y monitoreo orquestado en todas las funciones empresariales',
      foundationPhase: 'Fase de Fundación',
      accelerationPhase: 'Fase de Aceleración',
      optimizationPhase: 'Fase de Optimización',
      scalingPhase: 'Fase de Escalamiento',
      timeline: 'Cronograma de Ejecución',
      dependencies: 'Mapeo de Dependencias',
      monitoring: 'Monitoreo en Tiempo Real',
      currentStep: 'Paso Actual',
      nextMilestone: 'Próximo Hito',
      riskAssessment: 'Evaluación de Riesgos',
      performanceMetrics: 'Métricas de Rendimiento',
      resourceAllocation: 'Asignación de Recursos',
      stakeholderAlignment: 'Alineación de Partes Interesadas',
      executeStep: 'Ejecutar Paso',
      pauseExecution: 'Pausar Ejecución',
      viewAnalytics: 'Ver Analíticas',
      exportReport: 'Exportar Reporte',
      criticalPath: 'Ruta Crítica',
      blockers: 'Bloqueadores Actuales',
      opportunities: 'Oportunidades de Optimización',
      estimatedCompletion: 'Finalización Estimada',
      overallProgress: 'Progreso General',
      moduleHealth: 'Salud del Módulo',
      integrationStatus: 'Estado de Integración',
      businessImpact: 'Impacto Empresarial',
      strategicAlignment: 'Alineación Estratégica'
    }
  };

  const t = labels[language];

  // Sample execution timelines
  const executionTimelines: ExecutionTimeline[] = [
    {
      id: 'foundation',
      title: t.foundationPhase,
      description: language === 'en' 
        ? 'Establish core infrastructure and baseline assessments'
        : 'Establecer infraestructura central y evaluaciones de línea base',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      status: 'completed',
      milestones: [
        {
          id: 'strategic-assessment',
          title: language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica',
          description: language === 'en' 
            ? 'Comprehensive analysis of current business state and strategic positioning'
            : 'Análisis integral del estado actual del negocio y posicionamiento estratégico',
          module: 'strategic-intelligence',
          status: 'completed',
          progress: 100,
          estimatedDuration: '2-3 weeks',
          dependencies: [],
          outcomes: ['Current state analysis', 'Strategic positioning map', 'Risk assessment'],
          riskLevel: 'low'
        },
        {
          id: 'infrastructure-setup',
          title: language === 'en' ? 'Infrastructure Setup' : 'Configuración de Infraestructura',
          description: language === 'en'
            ? 'Deploy core OVERWATCH³ infrastructure and integration layer'
            : 'Desplegar infraestructura central OVERWATCH³ y capa de integración',
          module: 'integration-platform',
          status: 'completed',
          progress: 100,
          estimatedDuration: '1-2 weeks',
          dependencies: ['strategic-assessment'],
          outcomes: ['Core platform deployed', 'Integration layer active', 'Security protocols enabled'],
          riskLevel: 'medium'
        }
      ]
    },
    {
      id: 'acceleration',
      title: t.accelerationPhase,
      description: language === 'en'
        ? 'Deploy and integrate core business modules'
        : 'Desplegar e integrar módulos empresariales centrales',
      startDate: '2024-04-01',
      endDate: '2024-07-31',
      status: 'active',
      milestones: [
        {
          id: 'hris-deployment',
          title: language === 'en' ? 'HRIS³ Deployment' : 'Despliegue HRIS³',
          description: language === 'en'
            ? 'Transform HR from cost center to command center with advisory-grade intelligence'
            : 'Transformar RH de centro de costos a centro de comando con inteligencia de grado asesor',
          module: 'hris',
          status: 'active',
          progress: 78,
          estimatedDuration: '3-4 weeks',
          dependencies: ['infrastructure-setup'],
          outcomes: ['HR command center active', 'Coaching overlays deployed', 'Performance analytics live'],
          riskLevel: 'medium'
        },
        {
          id: 'crm-integration',
          title: language === 'en' ? 'CRM Intelligence Integration' : 'Integración CRM Inteligencia',
          description: language === 'en'
            ? 'Deploy customer relationship intelligence with predictive sales analytics'
            : 'Desplegar inteligencia de relaciones con clientes con analíticas predictivas de ventas',
          module: 'crm',
          status: 'pending',
          progress: 0,
          estimatedDuration: '2-3 weeks',
          dependencies: ['hris-deployment'],
          outcomes: ['Pipeline forecasting active', 'Lead scoring deployed', 'Sales coaching enabled'],
          riskLevel: 'low'
        },
        {
          id: 'edm-activation',
          title: language === 'en' ? 'EDM Intelligence Activation' : 'Activación EDM Inteligencia',
          description: language === 'en'
            ? 'Launch email and digital marketing intelligence with campaign optimization'
            : 'Lanzar inteligencia de email y marketing digital con optimización de campañas',
          module: 'edm',
          status: 'pending',
          progress: 0,
          estimatedDuration: '2-3 weeks',
          dependencies: ['crm-integration'],
          outcomes: ['Campaign ROI tracking', 'Audience segmentation', 'Personalization engine'],
          riskLevel: 'low'
        }
      ]
    },
    {
      id: 'optimization',
      title: t.optimizationPhase,
      description: language === 'en'
        ? 'Optimize performance and enhance strategic capabilities'
        : 'Optimizar rendimiento y mejorar capacidades estratégicas',
      startDate: '2024-08-01',
      endDate: '2024-11-30',
      status: 'upcoming',
      milestones: [
        {
          id: 'epm-integration',
          title: language === 'en' ? 'EPM Cloud Integration' : 'Integración EPM Cloud',
          description: language === 'en'
            ? 'Deploy enterprise performance management with financial planning and analysis'
            : 'Desplegar gestión de rendimiento empresarial con planificación y análisis financiero',
          module: 'epm',
          status: 'pending',
          progress: 0,
          estimatedDuration: '4-5 weeks',
          dependencies: ['edm-activation'],
          outcomes: ['Financial planning active', 'Budgeting workflows', 'Performance dashboards'],
          riskLevel: 'medium'
        },
        {
          id: 'erp-assessment',
          title: language === 'en' ? 'ERP Assessment & Positioning' : 'Evaluación y Posicionamiento ERP',
          description: language === 'en'
            ? 'Strategic ERP positioning and competitive analysis'
            : 'Posicionamiento ERP estratégico y análisis competitivo',
          module: 'erp',
          status: 'pending',
          progress: 0,
          estimatedDuration: '3-4 weeks',
          dependencies: ['epm-integration'],
          outcomes: ['ERP roadmap defined', 'Vendor analysis complete', 'Implementation strategy'],
          riskLevel: 'high'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'active': return 'text-blue-400';
      case 'pending': return 'text-yellow-400';
      case 'blocked': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
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

  // Real-time status simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStatus({
        overallProgress: 67 + Math.random() * 3,
        moduleHealth: {
          hris: 94 + Math.random() * 5,
          crm: 0,
          edm: 0,
          epm: 0,
          erp: 0
        },
        integrationStatus: 89 + Math.random() * 5,
        activeUsers: 247 + Math.floor(Math.random() * 20),
        processedRecords: 12847 + Math.floor(Math.random() * 100),
        systemLoad: 34 + Math.random() * 10
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="command-center-card mx-6 mt-6 p-6 rounded-command">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('integrated-planning-execution')}
              className="module-nav-button"
            >
              <span className="text-lg">←</span>
              <span className="ml-2">{language === 'en' ? 'Back' : 'Atrás'}</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
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
              {language === 'en' ? 'Live Execution' : 'Ejecución en Vivo'}
            </span>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Phase {executionTimelines.findIndex(t => t.status === 'active') + 1}
            </Badge>
          </div>
        </div>
      </header>

      {/* Real-Time Status Bar */}
      <div className="mx-6 mt-4">
        <div className="command-center-card p-4 rounded-command">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">
                {realTimeStatus.overallProgress?.toFixed(1)}%
              </div>
              <div className="text-xs text-muted-foreground">{t.overallProgress}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-hris-accent">
                {realTimeStatus.moduleHealth?.hris?.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">{t.moduleHealth}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">
                {realTimeStatus.integrationStatus?.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">{t.integrationStatus}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">
                {realTimeStatus.activeUsers}
              </div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Active Users' : 'Usuarios Activos'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {realTimeStatus.processedRecords?.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Records Processed' : 'Registros Procesados'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400">
                {realTimeStatus.systemLoad?.toFixed(1)}%
              </div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'System Load' : 'Carga del Sistema'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Execution Mode Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={executionMode === 'timeline' ? 'default' : 'outline'}
            onClick={() => setExecutionMode('timeline')}
            className="command-center-button"
          >
            {t.timeline}
          </Button>
          <Button
            variant={executionMode === 'dependencies' ? 'default' : 'outline'}
            onClick={() => setExecutionMode('dependencies')}
            className="command-center-button"
          >
            {t.dependencies}
          </Button>
          <Button
            variant={executionMode === 'monitoring' ? 'default' : 'outline'}
            onClick={() => setExecutionMode('monitoring')}
            className="command-center-button"
          >
            {t.monitoring}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {executionMode === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Timeline Header */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {executionTimelines.map((timeline, index) => (
                  <motion.div
                    key={timeline.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`command-center-card p-4 cursor-pointer transition-all ${
                      timeline.status === 'active' ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setActiveWorkflow(timeline.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${
                        timeline.status === 'completed' ? 'bg-green-500' :
                        timeline.status === 'active' ? 'bg-blue-500' : 'bg-gray-500'
                      }`}></div>
                      <h3 className="font-semibold text-foreground">{timeline.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{timeline.description}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {timeline.startDate} - {timeline.endDate}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={getStatusColor(timeline.status)}
                      >
                        {timeline.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Active Timeline Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {executionTimelines.find(t => t.id === activeWorkflow)?.title} - 
                    {language === 'en' ? ' Milestones' : ' Hitos'}
                  </h3>
                  
                  {executionTimelines
                    .find(t => t.id === activeWorkflow)
                    ?.milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${getModuleTheme(milestone.module)}-card p-6`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${
                            milestone.status === 'completed' ? 'bg-green-500' :
                            milestone.status === 'active' ? 'bg-blue-500 animate-pulse' :
                            milestone.status === 'pending' ? 'bg-gray-500' : 'bg-red-500'
                          }`}></div>
                          <div>
                            <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getRiskColor(milestone.riskLevel)}>
                            {milestone.riskLevel} risk
                          </Badge>
                          <Button
                            size="sm"
                            className={`${getModuleTheme(milestone.module)}-button`}
                            disabled={milestone.status !== 'active'}
                          >
                            {milestone.status === 'active' ? t.executeStep : t.viewAnalytics}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              {language === 'en' ? 'Progress' : 'Progreso'}
                            </span>
                            <span className="text-foreground">{milestone.progress}%</span>
                          </div>
                          <Progress value={milestone.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              {language === 'en' ? 'Duration' : 'Duración'}:
                            </span>
                            <span className="text-foreground ml-2">{milestone.estimatedDuration}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {language === 'en' ? 'Module' : 'Módulo'}:
                            </span>
                            <span className="text-foreground ml-2">{milestone.module.toUpperCase()}</span>
                          </div>
                        </div>
                        
                        {milestone.dependencies.length > 0 && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">
                              {language === 'en' ? 'Dependencies' : 'Dependencias'}:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {milestone.dependencies.map((dep) => (
                                <Badge key={dep} variant="outline" className="text-xs">
                                  {dep}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="text-sm">
                          <span className="text-muted-foreground">
                            {language === 'en' ? 'Expected Outcomes' : 'Resultados Esperados'}:
                          </span>
                          <ul className="mt-1 space-y-1">
                            {milestone.outcomes.map((outcome, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Sidebar - Current Status & Controls */}
                <div className="space-y-6">
                  <div className="command-center-card p-6">
                    <h4 className="font-semibold text-foreground mb-4">{t.currentStep}</h4>
                    
                    <div className="space-y-4">
                      <div className="hris-card p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="font-medium text-foreground">
                            {language === 'en' ? 'HRIS³ Deployment' : 'Despliegue HRIS³'}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {language === 'en' 
                            ? 'Configuring coaching overlays and performance analytics'
                            : 'Configurando overlays de coaching y analíticas de rendimiento'
                          }
                        </div>
                        <Progress value={78} className="h-2 mb-2" />
                        <div className="text-xs text-muted-foreground">78% complete</div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="hris-button w-full">
                          {t.executeStep}
                        </Button>
                        <Button variant="outline" className="w-full">
                          {t.pauseExecution}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="command-center-card p-6">
                    <h4 className="font-semibold text-foreground mb-4">{t.nextMilestone}</h4>
                    
                    <div className="crm-card p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <span className="font-medium text-foreground">
                          {language === 'en' ? 'CRM Intelligence' : 'CRM Inteligencia'}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {language === 'en' 
                          ? 'Pending HRIS completion. Est. start: Next week'
                          : 'Pendiente finalización HRIS. Inicio est.: Próxima semana'
                        }
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Dependencies: HRIS deployment' : 'Dependencias: Despliegue HRIS'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="command-center-card p-6">
                    <h4 className="font-semibold text-foreground mb-4">{t.riskAssessment}</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {language === 'en' ? 'User Adoption' : 'Adopción Usuario'}
                        </span>
                        <span className="text-yellow-400 text-sm">Medium</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Integration Risk' : 'Riesgo Integración'}
                        </span>
                        <span className="text-green-400 text-sm">Low</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Timeline Risk' : 'Riesgo Cronograma'}
                        </span>
                        <span className="text-green-400 text-sm">Low</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button className="command-center-button" onClick={() => onNavigate('hris-dashboard')}>
            {language === 'en' ? 'Monitor HRIS' : 'Monitorear HRIS'}
          </Button>
          <Button className="crm-button" onClick={() => onNavigate('crm-intelligence')}>
            {language === 'en' ? 'Prepare CRM' : 'Preparar CRM'}
          </Button>
          <Button className="edm-button" onClick={() => onNavigate('edm-intelligence')}>
            {language === 'en' ? 'Preview EDM' : 'Vista Previa EDM'}
          </Button>
          <Button variant="outline" onClick={() => onNavigate('business-modules')}>
            {t.viewAnalytics}
          </Button>
          <Button variant="outline">
            {t.exportReport}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BusinessExecutionWorkflowEngine;