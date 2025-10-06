import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Database, 
  TrendingUp, 
  Users, 
  Building2,
  Code,
  Cpu,
  BarChart3,
  Settings,
  Workflow,
  Network,
  Shield,
  Zap,
  Target,
  Globe,
  Activity
} from 'lucide-react';

// Import the Figma ERP System Development component
import ErpSystemDevelopment from '../imports/ErpSystemDevelopment';

interface OverwatchErpSystemDevelopmentProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
  unifiedContext?: any;
}

export default function OverwatchErpSystemDevelopment({
  language,
  currentMode,
  onNavigate,
  unifiedContext
}: OverwatchErpSystemDevelopmentProps) {
  const [activeTab, setActiveTab] = useState('development');
  const [systemStatus, setSystemStatus] = useState({
    development: 'active',
    integration: 'active',
    testing: 'active',
    deployment: 'ready',
    monitoring: 'active'
  });

  const [developmentMetrics, setDevelopmentMetrics] = useState({
    modulesCompleted: 47,
    totalModules: 52,
    codeQuality: 94.2,
    testCoverage: 87.3,
    performanceScore: 96.1,
    securityScore: 98.5
  });

  // Advanced ERP development insights
  const developmentInsights = [
    {
      id: 'architecture-optimization',
      title: language === 'en' ? 'Architecture Optimization' : 'Optimización de Arquitectura',
      description: language === 'en' 
        ? 'Microservices architecture delivering 40% better scalability than monolithic systems'
        : 'Arquitectura de microservicios entregando 40% mejor escalabilidad que sistemas monolíticos',
      impact: 'High',
      category: 'Performance',
      confidence: 92
    },
    {
      id: 'integration-layer',
      title: language === 'en' ? 'Integration Layer Enhancement' : 'Mejora de Capa de Integración',
      description: language === 'en'
        ? 'API-first design enabling seamless third-party integrations with 99.9% uptime'
        : 'Diseño API-first habilitando integraciones de terceros sin problemas con 99.9% tiempo activo',
      impact: 'High',
      category: 'Integration',
      confidence: 96
    },
    {
      id: 'data-analytics',
      title: language === 'en' ? 'Real-time Analytics Engine' : 'Motor de Analíticas en Tiempo Real',
      description: language === 'en'
        ? 'Advanced data processing pipeline delivering insights 75% faster than industry standards'
        : 'Pipeline avanzado de procesamiento de datos entregando insights 75% más rápido que estándares de la industria',
      impact: 'Medium',
      category: 'Analytics',
      confidence: 89
    }
  ];

  const developmentModules = [
    {
      id: 'core-erp',
      name: language === 'en' ? 'Core ERP Development' : 'Desarrollo ERP Central',
      description: language === 'en' ? 'Foundational ERP modules and business logic' : 'Módulos ERP fundamentales y lógica de negocios',
      progress: 94,
      status: 'active',
      icon: <Database className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'integration-apis',
      name: language === 'en' ? 'Integration APIs' : 'APIs de Integración',
      description: language === 'en' ? 'RESTful APIs and microservices architecture' : 'APIs RESTful y arquitectura de microservicios',
      progress: 87,
      status: 'active',
      icon: <Network className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'security-framework',
      name: language === 'en' ? 'Security Framework' : 'Marco de Seguridad',
      description: language === 'en' ? 'Enterprise-grade security and compliance' : 'Seguridad y cumplimiento de nivel empresarial',
      progress: 98,
      status: 'complete',
      icon: <Shield className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'analytics-engine',
      name: language === 'en' ? 'Analytics Engine' : 'Motor de Analíticas',
      description: language === 'en' ? 'Real-time data processing and insights' : 'Procesamiento de datos e insights en tiempo real',
      progress: 91,
      status: 'active',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'orange'
    },
    {
      id: 'workflow-automation',
      name: language === 'en' ? 'Workflow Automation' : 'Automatización de Flujos',
      description: language === 'en' ? 'Business process automation and orchestration' : 'Automatización y orquestación de procesos de negocio',
      progress: 73,
      status: 'development',
      icon: <Workflow className="w-5 h-5" />,
      color: 'cyan'
    },
    {
      id: 'mobile-platform',
      name: language === 'en' ? 'Mobile Platform' : 'Plataforma Móvil',
      description: language === 'en' ? 'Cross-platform mobile applications' : 'Aplicaciones móviles multiplataforma',
      progress: 65,
      status: 'development',
      icon: <Cpu className="w-5 h-5" />,
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onNavigate('unified-command-center')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Back to Command Center' : 'Volver al Centro de Comando'}
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20 text-indigo-400">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    {language === 'en' ? 'ERP System Development' : 'Desarrollo de Sistema ERP'}
                  </h1>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Advanced ERP development platform with enterprise-grade architecture and real-time analytics'
                      : 'Plataforma avanzada de desarrollo ERP con arquitectura de nivel empresarial y analíticas en tiempo real'
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  {developmentMetrics.modulesCompleted}/{developmentMetrics.totalModules} {language === 'en' ? 'modules complete' : 'módulos completos'}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {developmentMetrics.codeQuality}% {language === 'en' ? 'code quality' : 'calidad de código'}
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
            <TabsTrigger value="development" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Development' : 'Desarrollo'}</span>
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Architecture' : 'Arquitectura'}</span>
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Network className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Integration' : 'Integración'}</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Analytics' : 'Analíticas'}</span>
            </TabsTrigger>
            <TabsTrigger value="live-system" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Live System' : 'Sistema en Vivo'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="space-y-8">
            {/* Development Modules Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Development Modules' : 'Módulos de Desarrollo'}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {developmentModules.map((module) => (
                  <Card key={module.id} className="erp-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-${module.color}-500/10 text-${module.color}-400`}>
                            {module.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{module.name}</CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            module.status === 'complete' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            module.status === 'active' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            'bg-orange-500/20 text-orange-400 border-orange-500/30'
                          }`}
                        >
                          {module.status === 'complete' ? (language === 'en' ? 'Complete' : 'Completo') :
                           module.status === 'active' ? (language === 'en' ? 'Active' : 'Activo') :
                           (language === 'en' ? 'Development' : 'Desarrollo')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{language === 'en' ? 'Progress' : 'Progreso'}</span>
                          <span className="font-medium">{module.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-${module.color}-500 transition-all duration-300`}
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Development Insights */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Development Insights' : 'Insights de Desarrollo'}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {developmentInsights.map((insight) => (
                  <Card key={insight.id} className="command-center-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{insight.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {insight.category}
                            </Badge>
                            <Badge 
                              variant={insight.impact === 'High' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {insight.impact} {language === 'en' ? 'Impact' : 'Impacto'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium">{insight.confidence}% {language === 'en' ? 'confidence' : 'confianza'}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          {language === 'en' ? 'Details' : 'Detalles'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                {language === 'en' ? 'System Architecture' : 'Arquitectura del Sistema'}
              </h2>
              
              {/* Architecture Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="command-center-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      {language === 'en' ? 'Microservices' : 'Microservicios'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-400 mb-2">47</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Independent services running' : 'Servicios independientes ejecutándose'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="command-center-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="w-5 h-5 text-green-400" />
                      {language === 'en' ? 'API Endpoints' : 'Endpoints API'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-400 mb-2">342</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'RESTful API endpoints available' : 'Endpoints API RESTful disponibles'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="command-center-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      {language === 'en' ? 'Security Score' : 'Puntuación Seguridad'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-400 mb-2">{developmentMetrics.securityScore}%</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Enterprise-grade security' : 'Seguridad de nivel empresarial'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Network className="w-6 h-6 text-primary" />
                {language === 'en' ? 'System Integration' : 'Integración del Sistema'}
              </h2>
              
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Integration mapping and API documentation coming soon...'
                    : 'Mapeo de integración y documentación de API próximamente...'
                  }
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Development Analytics' : 'Analíticas de Desarrollo'}
              </h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{developmentMetrics.codeQuality}%</div>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Code Quality' : 'Calidad Código'}</p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">{developmentMetrics.testCoverage}%</div>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Test Coverage' : 'Cobertura Tests'}</p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{developmentMetrics.performanceScore}%</div>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Performance' : 'Rendimiento'}</p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{developmentMetrics.securityScore}%</div>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Security' : 'Seguridad'}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="live-system" className="space-y-8">
            {/* Full Figma System Integration */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Activity className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Live ERP System Dashboard' : 'Dashboard del Sistema ERP en Vivo'}
              </h2>
              
              <Card className="command-center-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-[800px] overflow-auto">
                    <ErpSystemDevelopment />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}