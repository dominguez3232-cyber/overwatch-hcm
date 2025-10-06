import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Command,
  Activity,
  Network,
  Database,
  Cpu,
  Shield,
  Zap,
  Globe,
  GitBranch,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  BarChart3,
  RefreshCw,
  Eye,
  Settings,
  PlayCircle,
  PauseCircle,
  Brain,
  Target,
  Layers,
  ArrowRight,
  Link,
  Server,
  Lock,
  Monitor,
  Workflow,
  Search
} from 'lucide-react';

interface AdvancedCommandCenterIntegrationProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface SystemHealth {
  system: string;
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  latency: number;
  throughput: number;
  errorRate: number;
}

interface DataFlow {
  id: string;
  source: string;
  target: string;
  type: string;
  status: 'active' | 'paused' | 'error';
  volume: number;
  lastSync: string;
  nextSync: string;
}

interface IntegrationMetric {
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  target: number;
  unit: string;
}

export function AdvancedCommandCenterIntegration({ 
  language, 
  currentMode, 
  onNavigate 
}: AdvancedCommandCenterIntegrationProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');
  const [isRealTime, setIsRealTime] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate real-time updates
  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        setLastUpdated(new Date());
      }, 30000); // Update every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [isRealTime]);

  const labels = {
    en: {
      title: "Advanced Command Center Integration",
      subtitle: "Real-Time Integration Intelligence & Orchestration",
      tagline: "Unified integration command center with AI-powered insights",
      
      // Tabs
      overview: "System Overview",
      flows: "Data Flows",
      analytics: "Integration Analytics", 
      orchestration: "Workflow Orchestration",
      governance: "Governance & Security",
      
      // Overview
      systemHealth: "System Health Matrix",
      integrationsActive: "Active Integrations",
      dataVolume: "24h Data Volume",
      avgLatency: "Average Latency",
      errorRate: "Error Rate",
      uptime: "System Uptime",
      
      // System statuses
      healthy: "Healthy",
      warning: "Warning",
      critical: "Critical",
      active: "Active",
      paused: "Paused",
      error: "Error",
      
      // Core Systems
      hcmSystem: "HCM Platform",
      erpSystem: "ERP/Finance",
      epmSystem: "EPM Planning", 
      crmSystem: "CRM/Sales",
      
      // Data Flows
      flowsTitle: "Live Integration Data Flows",
      flowsDesc: "Real-time monitoring of cross-system data movement",
      realTimeFlows: "Real-Time Flows",
      batchFlows: "Batch Processes",
      eventStreams: "Event Streams",
      
      // Analytics
      analyticsTitle: "Integration Performance Analytics",
      analyticsDesc: "AI-powered insights into integration health and optimization",
      performanceMetrics: "Performance Metrics",
      trendAnalysis: "Trend Analysis",
      predictiveInsights: "Predictive Insights",
      
      // Orchestration
      orchestrationTitle: "Workflow Orchestration Center",
      orchestrationDesc: "Design, deploy, and monitor cross-system workflows",
      activeWorkflows: "Active Workflows",
      workflowTemplates: "Workflow Templates",
      scheduledJobs: "Scheduled Jobs",
      
      // Governance
      governanceTitle: "Integration Governance & Security",
      governanceDesc: "Comprehensive oversight of data governance and security",
      accessControl: "Access Control",
      dataLineage: "Data Lineage",
      complianceStatus: "Compliance Status",
      
      // Actions
      pauseFlow: "Pause Flow",
      resumeFlow: "Resume Flow",
      viewDetails: "View Details",
      configure: "Configure",
      runDiagnostic: "Run Diagnostic",
      optimizePerformance: "Optimize Performance",
      
      // Metrics
      throughputMetric: "Throughput",
      latencyMetric: "Latency",
      accuracyMetric: "Data Accuracy",
      reliabilityMetric: "Reliability",
      
      // Status Messages
      allSystemsOperational: "All Systems Operational",
      minorIssuesDetected: "Minor Issues Detected",
      criticalAlertsActive: "Critical Alerts Active",
      lastUpdated: "Last Updated",
      realTimeMode: "Real-Time Mode"
    },
    es: {
      title: "Centro de Comando de Integración Avanzado",
      subtitle: "Inteligencia y Orquestación de Integración en Tiempo Real",
      tagline: "Centro de comando de integración unificado con insights impulsados por IA",
      
      // Tabs
      overview: "Vista General del Sistema",
      flows: "Flujos de Datos",
      analytics: "Analítica de Integración",
      orchestration: "Orquestación de Flujos",
      governance: "Gobernanza y Seguridad",
      
      // Overview
      systemHealth: "Matriz de Salud del Sistema",
      integrationsActive: "Integraciones Activas",
      dataVolume: "Volumen de Datos 24h",
      avgLatency: "Latencia Promedio",
      errorRate: "Tasa de Error",
      uptime: "Tiempo de Actividad",
      
      // System statuses
      healthy: "Saludable",
      warning: "Advertencia",
      critical: "Crítico",
      active: "Activo",
      paused: "Pausado",
      error: "Error",
      
      // Core Systems
      hcmSystem: "Plataforma HCM",
      erpSystem: "ERP/Finanzas",
      epmSystem: "Planificación EPM",
      crmSystem: "CRM/Ventas",
      
      // Data Flows
      flowsTitle: "Flujos de Datos de Integración en Vivo",
      flowsDesc: "Monitoreo en tiempo real del movimiento de datos entre sistemas",
      realTimeFlows: "Flujos en Tiempo Real",
      batchFlows: "Procesos por Lotes",
      eventStreams: "Streams de Eventos",
      
      // Analytics
      analyticsTitle: "Analítica de Rendimiento de Integración",
      analyticsDesc: "Insights impulsados por IA sobre salud y optimización de integración",
      performanceMetrics: "Métricas de Rendimiento",
      trendAnalysis: "Análisis de Tendencias",
      predictiveInsights: "Insights Predictivos",
      
      // Orchestration
      orchestrationTitle: "Centro de Orquestación de Flujos",
      orchestrationDesc: "Diseñar, desplegar y monitorear flujos entre sistemas",
      activeWorkflows: "Flujos Activos",
      workflowTemplates: "Plantillas de Flujo",
      scheduledJobs: "Trabajos Programados",
      
      // Governance
      governanceTitle: "Gobernanza y Seguridad de Integración",
      governanceDesc: "Supervisión integral de gobernanza de datos y seguridad",
      accessControl: "Control de Acceso",
      dataLineage: "Linaje de Datos",
      complianceStatus: "Estado de Cumplimiento",
      
      // Actions
      pauseFlow: "Pausar Flujo",
      resumeFlow: "Reanudar Flujo",
      viewDetails: "Ver Detalles",
      configure: "Configurar",
      runDiagnostic: "Ejecutar Diagnóstico",
      optimizePerformance: "Optimizar Rendimiento",
      
      // Metrics
      throughputMetric: "Rendimiento",
      latencyMetric: "Latencia",
      accuracyMetric: "Precisión de Datos",
      reliabilityMetric: "Confiabilidad",
      
      // Status Messages
      allSystemsOperational: "Todos los Sistemas Operacionales",
      minorIssuesDetected: "Problemas Menores Detectados",
      criticalAlertsActive: "Alertas Críticas Activas",
      lastUpdated: "Última Actualización",
      realTimeMode: "Modo Tiempo Real"
    }
  };

  const currentLabels = labels[language];

  // Mock system health data
  const systemHealth: SystemHealth[] = [
    {
      system: currentLabels.hcmSystem,
      status: 'healthy',
      uptime: 99.8,
      latency: 45,
      throughput: 2500,
      errorRate: 0.02
    },
    {
      system: currentLabels.erpSystem,
      status: 'warning',
      uptime: 98.5,
      latency: 120,
      throughput: 1800,
      errorRate: 0.15
    },
    {
      system: currentLabels.epmSystem,
      status: 'healthy',
      uptime: 99.9,
      latency: 35,
      throughput: 1200,
      errorRate: 0.01
    },
    {
      system: currentLabels.crmSystem,
      status: 'healthy',
      uptime: 99.6,
      latency: 55,
      throughput: 3200,
      errorRate: 0.03
    }
  ];

  // Mock data flows
  const dataFlows: DataFlow[] = [
    {
      id: 'hcm-erp-001',
      source: 'HCM',
      target: 'ERP',
      type: 'Employee Master',
      status: 'active',
      volume: 1250,
      lastSync: '2 minutes ago',
      nextSync: '5 minutes'
    },
    {
      id: 'crm-epm-002',
      source: 'CRM',
      target: 'EPM',
      type: 'Revenue Pipeline',
      status: 'active',
      volume: 850,
      lastSync: '15 minutes ago',
      nextSync: '1 hour'
    },
    {
      id: 'erp-epm-003',
      source: 'ERP',
      target: 'EPM',
      type: 'Financial Actuals',
      status: 'paused',
      volume: 0,
      lastSync: '2 hours ago',
      nextSync: 'Manual'
    },
    {
      id: 'hcm-crm-004',
      source: 'HCM',
      target: 'CRM',
      type: 'Talent Profiles',
      status: 'active',
      volume: 450,
      lastSync: '30 minutes ago',
      nextSync: '2 hours'
    }
  ];

  // Mock integration metrics
  const integrationMetrics: IntegrationMetric[] = [
    {
      name: currentLabels.throughputMetric,
      value: 8700,
      trend: 'up',
      target: 10000,
      unit: 'records/hour'
    },
    {
      name: currentLabels.latencyMetric,
      value: 63,
      trend: 'down',
      target: 50,
      unit: 'ms'
    },
    {
      name: currentLabels.accuracyMetric,
      value: 99.7,
      trend: 'stable',
      target: 99.5,
      unit: '%'
    },
    {
      name: currentLabels.reliabilityMetric,
      value: 99.2,
      trend: 'up',
      target: 99.0,
      unit: '%'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'critical':
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'paused':
        return <PauseCircle className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'active':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
      case 'error':
        return 'text-red-400';
      case 'paused':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const overallSystemStatus = () => {
    const criticalCount = systemHealth.filter(s => s.status === 'critical').length;
    const warningCount = systemHealth.filter(s => s.status === 'warning').length;
    
    if (criticalCount > 0) return { status: 'critical', message: currentLabels.criticalAlertsActive };
    if (warningCount > 0) return { status: 'warning', message: currentLabels.minorIssuesDetected };
    return { status: 'healthy', message: currentLabels.allSystemsOperational };
  };

  const systemStatus = overallSystemStatus();

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Network className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg mb-2">{currentLabels.subtitle}</p>
          <Badge className="bg-blue-600 text-white text-sm mb-4">
            {currentLabels.tagline}
          </Badge>
          
          {/* Status Bar */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              {getStatusIcon(systemStatus.status)}
              <span className={`font-medium ${getStatusColor(systemStatus.status)}`}>
                {systemStatus.message}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {currentLabels.lastUpdated}: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRealTime(!isRealTime)}
              className={isRealTime ? 'border-green-500 text-green-400' : ''}
            >
              {isRealTime ? (
                <PlayCircle className="w-4 h-4 mr-2" />
              ) : (
                <PauseCircle className="w-4 h-4 mr-2" />
              )}
              {currentLabels.realTimeMode}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="flows">{currentLabels.flows}</TabsTrigger>
            <TabsTrigger value="analytics">{currentLabels.analytics}</TabsTrigger>
            <TabsTrigger value="orchestration">{currentLabels.orchestration}</TabsTrigger>
            <TabsTrigger value="governance">{currentLabels.governance}</TabsTrigger>
          </TabsList>

          {/* System Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* High-Level Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {dataFlows.filter(f => f.status === 'active').length}
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.integrationsActive}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">2.5M</div>
                  <div className="text-xs text-gray-400">{currentLabels.dataVolume}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">63ms</div>
                  <div className="text-xs text-gray-400">{currentLabels.avgLatency}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">0.05%</div>
                  <div className="text-xs text-gray-400">{currentLabels.errorRate}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.5%</div>
                  <div className="text-xs text-gray-400">{currentLabels.uptime}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 text-blue-400 mx-auto mb-1 animate-spin" />
                  <div className="text-xs text-gray-400">Live Sync</div>
                </div>
              </Card>
            </div>

            {/* System Health Matrix */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">{currentLabels.systemHealth}</h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {systemHealth.map((system) => (
                  <Card 
                    key={system.system}
                    className="p-4 bg-gray-900/50 border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{system.system}</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(system.status)}
                            <span className={`text-sm ${getStatusColor(system.status)}`}>
                              {currentLabels[system.status as keyof typeof currentLabels]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Uptime</div>
                        <div className="text-white font-medium">{system.uptime}%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Latency</div>
                        <div className="text-white font-medium">{system.latency}ms</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Throughput</div>
                        <div className="text-white font-medium">{system.throughput}/h</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Errors</div>
                        <div className="text-white font-medium">{system.errorRate}%</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Data Flows Tab */}
          <TabsContent value="flows" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentLabels.flowsTitle}</h3>
                  <p className="text-gray-400">{currentLabels.flowsDesc}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    {currentLabels.viewDetails}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    {currentLabels.configure}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {dataFlows.map((flow) => (
                  <Card key={flow.id} className="p-4 bg-gray-900/50 border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-600 text-white text-xs">{flow.source}</Badge>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <Badge className="bg-green-600 text-white text-xs">{flow.target}</Badge>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {getStatusIcon(flow.status)}
                          <span className="text-white font-medium">{flow.type}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-white font-medium">{flow.volume.toLocaleString()}</div>
                          <div className="text-gray-400">Records</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-white font-medium">{flow.lastSync}</div>
                          <div className="text-gray-400">Last Sync</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-white font-medium">{flow.nextSync}</div>
                          <div className="text-gray-400">Next Sync</div>
                        </div>
                        
                        <div className="flex gap-2">
                          {flow.status === 'active' ? (
                            <Button variant="outline" size="sm">
                              <PauseCircle className="w-4 h-4 mr-1" />
                              {currentLabels.pauseFlow}
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              <PlayCircle className="w-4 h-4 mr-1" />
                              {currentLabels.resumeFlow}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.analyticsTitle}</h3>
                <p className="text-gray-400">{currentLabels.analyticsDesc}</p>
              </div>
              
              {/* Performance Metrics Grid */}
              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                {integrationMetrics.map((metric) => (
                  <Card key={metric.name} className="p-4 bg-gray-900/50 border-gray-600">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg font-bold text-white">
                          {metric.value.toLocaleString()} {metric.unit}
                        </span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <div className="text-gray-400 text-sm mb-3">{metric.name}</div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Target</span>
                          <span className="text-white">{metric.target} {metric.unit}</span>
                        </div>
                        <Progress 
                          value={(metric.value / metric.target) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* AI Insights */}
              <Card className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-700">
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">AI-Powered Integration Insights</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Optimization Opportunity Detected</div>
                          <div className="text-gray-400 text-sm">HCM → ERP flow can be optimized by implementing micro-batching. Estimated 30% performance improvement.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Performance Trend Alert</div>
                          <div className="text-gray-400 text-sm">ERP system latency has increased 15% over the past week. Recommend performance review.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-blue-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Predictive Scaling</div>
                          <div className="text-gray-400 text-sm">Based on usage patterns, recommend scaling CRM integration capacity for Q4 growth.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>
          </TabsContent>

          {/* Orchestration Tab */}
          <TabsContent value="orchestration" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.orchestrationTitle}</h3>
                <p className="text-gray-400">{currentLabels.orchestrationDesc}</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Active Workflows */}
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.activeWorkflows}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Employee Onboarding</span>
                      <Badge className="bg-green-600 text-white text-xs">Running</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Financial Close</span>
                      <Badge className="bg-blue-600 text-white text-xs">Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance Review</span>
                      <Badge className="bg-yellow-600 text-white text-xs">Pending</Badge>
                    </div>
                  </div>
                </Card>
                
                {/* Workflow Templates */}
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.workflowTemplates}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      HR Process Templates
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Finance Workflows
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Planning Cycles
                    </Button>
                  </div>
                </Card>
                
                {/* Scheduled Jobs */}
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">{currentLabels.scheduledJobs}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Daily Data Sync</span>
                      <span className="text-green-400 text-sm">06:00 UTC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Weekly Reports</span>
                      <span className="text-blue-400 text-sm">Mon 08:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Monthly Close</span>
                      <span className="text-purple-400 text-sm">1st of Month</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.governanceTitle}</h3>
                <p className="text-gray-400">{currentLabels.governanceDesc}</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Access Control */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-red-400" />
                    <h4 className="font-bold text-white">{currentLabels.accessControl}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Role-Based Access</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Multi-Factor Auth</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Audit Logging</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Data Encryption</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </Card>
                
                {/* Data Lineage */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.dataLineage}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Monitor className="w-4 h-4 mr-2" />
                      View Data Flow Map
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="w-4 h-4 mr-2" />
                      Impact Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      Trace Data Source
                    </Button>
                  </div>
                </Card>
                
                {/* Compliance Status */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.complianceStatus}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">GDPR Compliance</span>
                      <Badge className="bg-green-600 text-white text-xs">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">SOC 2 Type II</span>
                      <Badge className="bg-green-600 text-white text-xs">Certified</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">ISO 27001</span>
                      <Badge className="bg-yellow-600 text-white text-xs">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Data Retention</span>
                      <Badge className="bg-green-600 text-white text-xs">Compliant</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions Footer */}
        <Card className="bg-gray-800/50 border-gray-700 p-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Quick Actions:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Target className="w-4 h-4 mr-2" />
                  {currentLabels.runDiagnostic}
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="w-4 h-4 mr-2" />
                  {currentLabels.optimizePerformance}
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate?.('command-center')}>
                  <Command className="w-4 h-4 mr-2" />
                  Strategic Command
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate?.('integration')}>
                  <Link className="w-4 h-4 mr-2" />
                  Integration Blueprint
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Activity className="w-4 h-4" />
              <span className="text-sm">System Status: All Operational</span>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}