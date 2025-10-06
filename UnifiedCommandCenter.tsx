import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Building2, 
  Database, 
  TrendingUp, 
  Users, 
  Mail, 
  Brain,
  Target,
  DollarSign,
  Workflow,
  Map,
  FileText,
  Trophy,
  Users2,
  Compass,
  Activity,
  BarChart3,
  Zap,
  Network,
  Clock,
  Shield,
  Star,
  Globe
} from 'lucide-react';

// Import all business modules for unified integration
import OverwatchHrisIntegration from './OverwatchHrisIntegration';
import OverwatchErpAssessment from './OverwatchErpAssessment';
import OverwatchErpSystemDevelopment from './OverwatchErpSystemDevelopment';
import OverwatchRecruitmentCloud from './OverwatchRecruitmentCloud';
import OverwatchEpmIntegration from './OverwatchEpmIntegration';
import OverwatchCrmIntegration from './OverwatchCrmIntegration';
import OverwatchEdmIntegration from './OverwatchEdmIntegration';
import { Dashboard } from './Dashboard';
import { ROIGridWithCoaching } from './ROIGridWithCoaching';
import { StrategicAssessment } from './StrategicAssessment';
import IntegratedBusinessPlanningExecution from './IntegratedBusinessPlanningExecution';
import BusinessExecutionWorkflowEngine from './BusinessExecutionWorkflowEngine';
import StrategicIntegrationMapper from './StrategicIntegrationMapper';
import BusinessPlanningExecutiveSummary from './BusinessPlanningExecutiveSummary';

interface UnifiedCommandCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string, contextData?: any) => void;
  unifiedContext: {
    activeBusinessModule: string | null;
    crossModuleData: any;
    globalAnalytics: any;
    userJourney: any[];
    systemState: string;
  };
  onContextUpdate: (context: any) => void;
}

export function UnifiedCommandCenter({
  language,
  currentMode,
  onNavigate,
  unifiedContext,
  onContextUpdate
}: UnifiedCommandCenterProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [crossModuleInsights, setCrossModuleInsights] = useState<any[]>([]);
  const [unifiedMetrics, setUnifiedMetrics] = useState({
    totalModules: 15,
    activeIntegrations: 5,
    realTimeSync: true,
    commandCenterHealth: 98,
    dataFlowRate: 2.4
  });

  // Cross-module data synchronization
  useEffect(() => {
    const generateCrossModuleInsights = () => {
      const insights = [
        {
          id: 'hris-epm-sync',
          title: language === 'en' ? 'HR-Finance Alignment' : 'Alineación RH-Finanzas',
          impact: 'High',
          modules: ['HRIS', 'EPM'],
          insight: language === 'en' 
            ? 'Payroll forecasting accuracy improved by 23% with integrated data flow'
            : 'Precisión de pronóstico de nómina mejoró 23% con flujo de datos integrado',
          confidence: 94
        },
        {
          id: 'crm-edm-integration',
          title: language === 'en' ? 'Sales-Marketing Synergy' : 'Sinergia Ventas-Marketing',
          impact: 'High',
          modules: ['CRM', 'EDM'],
          insight: language === 'en'
            ? 'Lead conversion rate increased 31% through coordinated touchpoint strategy'
            : 'Tasa de conversión de leads aumentó 31% mediante estrategia de puntos de contacto coordinada',
          confidence: 89
        },
        {
          id: 'erp-planning-optimization',
          title: language === 'en' ? 'Resource Planning Optimization' : 'Optimización de Planificación de Recursos',
          impact: 'Medium',
          modules: ['ERP', 'Planning & Execution'],
          insight: language === 'en'
            ? 'Resource allocation efficiency up 18% with predictive workflow modeling'
            : 'Eficiencia de asignación de recursos subió 18% con modelado predictivo de flujos de trabajo',
          confidence: 87
        }
      ];
      setCrossModuleInsights(insights);
    };

    generateCrossModuleInsights();
  }, [language, unifiedContext]);

  const businessModules = [
    {
      id: 'hris',
      name: language === 'en' ? 'HRIS³ Command' : 'Comando HRIS³',
      icon: <Building2 className="w-5 h-5" />,
      status: 'active',
      health: 98,
      component: OverwatchHrisIntegration,
      color: 'hris'
    },
    {
      id: 'erp',
      name: language === 'en' ? 'ERP Assessment' : 'Evaluación ERP',
      icon: <Database className="w-5 h-5" />,
      status: 'active',
      health: 95,
      component: OverwatchErpAssessment,
      color: 'erp'
    },
    {
      id: 'erp-development',
      name: language === 'en' ? 'ERP Development' : 'Desarrollo ERP',
      icon: <Database className="w-5 h-5" />,
      status: 'active',
      health: 97,
      component: OverwatchErpSystemDevelopment,
      color: 'erp'
    },
    {
      id: 'recruitment-cloud',
      name: language === 'en' ? 'Recruitment Cloud' : 'Nube Reclutamiento',
      icon: <Users className="w-5 h-5" />,
      status: 'active',
      health: 94,
      component: OverwatchRecruitmentCloud,
      color: 'hris'
    },
    {
      id: 'epm',
      name: language === 'en' ? 'EPM Cloud' : 'EPM Cloud',
      icon: <TrendingUp className="w-5 h-5" />,
      status: 'active',
      health: 97,
      component: OverwatchEpmIntegration,
      color: 'epm'
    },
    {
      id: 'crm',
      name: language === 'en' ? 'CRM Intelligence' : 'CRM Inteligencia',
      icon: <Users className="w-5 h-5" />,
      status: 'active',
      health: 93,
      component: OverwatchCrmIntegration,
      color: 'crm'
    },
    {
      id: 'edm',
      name: language === 'en' ? 'EDM Intelligence' : 'EDM Inteligencia',
      icon: <Mail className="w-5 h-5" />,
      status: 'active',
      health: 91,
      component: OverwatchEdmIntegration,
      color: 'edm'
    }
  ];

  const strategicModules = [
    {
      id: 'dashboard',
      name: language === 'en' ? 'Schema Intelligence' : 'Inteligencia de Esquemas',
      icon: <Brain className="w-5 h-5" />,
      component: Dashboard
    },
    {
      id: 'assessment',
      name: language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica',
      icon: <Target className="w-5 h-5" />,
      component: StrategicAssessment
    },
    {
      id: 'roi',
      name: language === 'en' ? 'ROI Command Center' : 'Centro Comando ROI',
      icon: <DollarSign className="w-5 h-5" />,
      component: ROIGridWithCoaching
    }
  ];

  const executionModules = [
    {
      id: 'planning',
      name: language === 'en' ? 'Business Planning' : 'Planificación Empresarial',
      icon: <Workflow className="w-5 h-5" />,
      component: IntegratedBusinessPlanningExecution
    },
    {
      id: 'workflow',
      name: language === 'en' ? 'Workflow Engine' : 'Motor de Flujos',
      icon: <Network className="w-5 h-5" />,
      component: BusinessExecutionWorkflowEngine
    },
    {
      id: 'mapper',
      name: language === 'en' ? 'Integration Mapper' : 'Mapeador Integración',
      icon: <Map className="w-5 h-5" />,
      component: StrategicIntegrationMapper
    },
    {
      id: 'summary',
      name: language === 'en' ? 'Executive Summary' : 'Resumen Ejecutivo',
      icon: <FileText className="w-5 h-5" />,
      component: BusinessPlanningExecutiveSummary
    }
  ];

  const renderModuleGrid = (modules: any[], category: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules.map((module) => (
        <Card 
          key={module.id}
          className={`cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 ${
            module.color ? `${module.color}-card` : 'command-center-card'
          }`}
          onClick={() => {
            setActiveModule(module.id);
            onContextUpdate({
              ...unifiedContext,
              activeBusinessModule: module.id,
              crossModuleData: { ...unifiedContext.crossModuleData, lastAccessed: module.id }
            });
          }}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-primary/10 text-primary ${
                  module.color ? `bg-${module.color}-accent/10 text-${module.color}-accent` : ''
                }`}>
                  {module.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                  {module.health && (
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">{module.health}% health</span>
                    </div>
                  )}
                </div>
              </div>
              {module.status && (
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    module.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''
                  }`}
                >
                  {module.status === 'active' ? (language === 'en' ? 'Live' : 'En Vivo') : module.status}
                </Badge>
              )}
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );

  if (activeModule) {
    const module = [...businessModules, ...strategicModules, ...executionModules]
      .find(m => m.id === activeModule);
    
    if (module?.component) {
      const ModuleComponent = module.component;
      return (
        <div className="min-h-screen bg-background">
          <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="px-6 lg:px-20 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setActiveModule(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ← {language === 'en' ? 'Back to Command Center' : 'Volver al Centro de Comando'}
                  </Button>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 text-primary ${
                      module.color ? `bg-${module.color}-accent/10 text-${module.color}-accent` : ''
                    }`}>
                      {module.icon}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{module.name}</h1>
                      <p className="text-muted-foreground text-sm">
                        {language === 'en' ? 'Integrated within OVERWATCH³' : 'Integrado dentro de OVERWATCH³'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {language === 'en' ? 'Unified Mode' : 'Modo Unificado'}
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {currentMode} {language === 'en' ? 'mode' : 'modo'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:px-20">
            <ModuleComponent
              language={language}
              currentMode={currentMode}
              onNavigate={(view: string) => {
                if (view === 'back' || view === 'unified-command-center') {
                  setActiveModule(null);
                } else {
                  onNavigate(view, { fromModule: module.id });
                }
              }}
              unifiedContext={unifiedContext}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Unified Command Center Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onNavigate('landing')}
                className="text-muted-foreground hover:text-foreground"
              >
                ← {language === 'en' ? 'Back' : 'Atrás'}
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    {language === 'en' ? 'OVERWATCH³ Unified Command Center' : 'Centro de Comando Unificado OVERWATCH³'}
                  </h1>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'All business intelligence modules integrated into one strategic command center'
                      : 'Todos los módulos de inteligencia de negocios integrados en un centro de comando estratégico'
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  {unifiedMetrics.activeIntegrations}/5 {language === 'en' ? 'modules active' : 'módulos activos'}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {unifiedMetrics.commandCenterHealth}% {language === 'en' ? 'system health' : 'salud del sistema'}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {currentMode} {language === 'en' ? 'mode' : 'modo'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 gap-1 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Overview' : 'Resumen'}</span>
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Business Intel' : 'Intel Negocios'}</span>
            </TabsTrigger>
            <TabsTrigger value="strategic" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Strategic' : 'Estratégico'}</span>
            </TabsTrigger>
            <TabsTrigger value="execution" className="flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Execution' : 'Ejecución'}</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Insights' : 'Insights'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* System Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="command-center-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Compass className="w-5 h-5 text-primary" />
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400">Live</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{unifiedMetrics.totalModules}</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Total Modules' : 'Módulos Totales'}
                  </p>
                </CardContent>
              </Card>

              <Card className="command-center-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Network className="w-5 h-5 text-primary" />
                    <Badge variant="outline" className="text-xs bg-blue-500/20 text-blue-400">Synced</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{unifiedMetrics.activeIntegrations}</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Active Integrations' : 'Integraciones Activas'}
                  </p>
                </CardContent>
              </Card>

              <Card className="command-center-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Shield className="w-5 h-5 text-primary" />
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400">Optimal</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{unifiedMetrics.commandCenterHealth}%</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'System Health' : 'Salud del Sistema'}
                  </p>
                </CardContent>
              </Card>

              <Card className="command-center-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Activity className="w-5 h-5 text-primary" />
                    <Badge variant="outline" className="text-xs bg-purple-500/20 text-purple-400">Real-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{unifiedMetrics.dataFlowRate}GB/s</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Data Flow Rate' : 'Tasa de Flujo de Datos'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Access to All Modules */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Quick Access - All Modules' : 'Acceso Rápido - Todos los Módulos'}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {businessModules.map((module) => (
                  <Button
                    key={module.id}
                    variant="outline"
                    className={`h-auto p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform ${module.color}-header`}
                    onClick={() => setActiveModule(module.id)}
                  >
                    {module.icon}
                    <span className="text-xs text-center">{module.name}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{module.health}%</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Business Intelligence Modules' : 'Módulos de Inteligencia de Negocios'}
              </h2>
              {renderModuleGrid(businessModules, 'business')}
            </div>
          </TabsContent>

          <TabsContent value="strategic" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Strategic Intelligence' : 'Inteligencia Estratégica'}
              </h2>
              {renderModuleGrid(strategicModules, 'strategic')}
            </div>
          </TabsContent>

          <TabsContent value="execution" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Workflow className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Planning & Execution' : 'Planificación y Ejecución'}
              </h2>
              {renderModuleGrid(executionModules, 'execution')}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Cross-Module Insights' : 'Insights Entre Módulos'}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {crossModuleInsights.map((insight) => (
                  <Card key={insight.id} className="command-center-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{insight.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            {insight.modules.map((module: string) => (
                              <Badge key={module} variant="secondary" className="text-xs">
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge 
                          variant={insight.impact === 'High' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {insight.impact} {language === 'en' ? 'Impact' : 'Impacto'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{insight.insight}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium">{insight.confidence}% {language === 'en' ? 'confidence' : 'confianza'}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          {language === 'en' ? 'Explore' : 'Explorar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}