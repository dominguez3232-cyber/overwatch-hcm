import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface StrategicIntegrationMapperProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

interface ModuleConnection {
  from: string;
  to: string;
  type: 'data-flow' | 'process-dependency' | 'strategic-alignment' | 'feedback-loop';
  strength: 'high' | 'medium' | 'low';
  bidirectional: boolean;
  description: string;
}

interface BusinessModule {
  id: string;
  name: string;
  category: 'core' | 'intelligence' | 'execution' | 'strategic';
  status: 'active' | 'pending' | 'planned';
  position: { x: number; y: number };
  icon: string;
  color: string;
  capabilities: string[];
  integrations: number;
  impact: number;
}

export function StrategicIntegrationMapper({
  language,
  onNavigate,
  currentMode
}: StrategicIntegrationMapperProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'data-flows' | 'dependencies' | 'impact'>('overview');
  const [animationPhase, setAnimationPhase] = useState(0);

  // Labels for bilingual support
  const labels = {
    en: {
      title: 'Strategic Integration Mapper',
      subtitle: 'Visual orchestration of OVERWATCH³ business intelligence ecosystem',
      overview: 'System Overview',
      dataFlows: 'Data Flows',
      dependencies: 'Dependencies',
      impactAnalysis: 'Impact Analysis',
      coreModules: 'Core Modules',
      intelligenceLayer: 'Intelligence Layer',
      executionEngine: 'Execution Engine',
      strategicCommand: 'Strategic Command',
      moduleDetails: 'Module Details',
      integrationStrength: 'Integration Strength',
      businessImpact: 'Business Impact',
      dataConnections: 'Data Connections',
      processFlows: 'Process Flows',
      strategicAlignment: 'Strategic Alignment',
      realTimeSync: 'Real-Time Sync',
      crossModuleInsights: 'Cross-Module Insights',
      optimizationOpportunities: 'Optimization Opportunities',
      integrationHealth: 'Integration Health',
      performanceMetrics: 'Performance Metrics'
    },
    es: {
      title: 'Mapeador de Integración Estratégica',
      subtitle: 'Orquestación visual del ecosistema de inteligencia empresarial OVERWATCH³',
      overview: 'Vista General del Sistema',
      dataFlows: 'Flujos de Datos',
      dependencies: 'Dependencias',
      impactAnalysis: 'Análisis de Impacto',
      coreModules: 'Módulos Centrales',
      intelligenceLayer: 'Capa de Inteligencia',
      executionEngine: 'Motor de Ejecución',
      strategicCommand: 'Comando Estratégico',
      moduleDetails: 'Detalles del Módulo',
      integrationStrength: 'Fuerza de Integración',
      businessImpact: 'Impacto Empresarial',
      dataConnections: 'Conexiones de Datos',
      processFlows: 'Flujos de Proceso',
      strategicAlignment: 'Alineación Estratégica',
      realTimeSync: 'Sincronización en Tiempo Real',
      crossModuleInsights: 'Perspectivas Cruzadas de Módulos',
      optimizationOpportunities: 'Oportunidades de Optimización',
      integrationHealth: 'Salud de Integración',
      performanceMetrics: 'Métricas de Rendimiento'
    }
  };

  const t = labels[language];

  // Business modules configuration
  const businessModules: BusinessModule[] = [
    {
      id: 'hris',
      name: 'HRIS³',
      category: 'core',
      status: 'active',
      position: { x: 20, y: 30 },
      icon: '🏢',
      color: 'hris-accent',
      capabilities: ['HR Command Center', 'Performance Analytics', 'Coaching Overlays'],
      integrations: 4,
      impact: 95
    },
    {
      id: 'crm',
      name: 'CRM Intelligence',
      category: 'intelligence',
      status: 'pending',
      position: { x: 60, y: 20 },
      icon: '🎯',
      color: 'crm-accent',
      capabilities: ['Pipeline Forecasting', 'Lead Scoring', 'Sales Analytics'],
      integrations: 3,
      impact: 87
    },
    {
      id: 'edm',
      name: 'EDM Intelligence',
      category: 'intelligence',
      status: 'pending',
      position: { x: 80, y: 50 },
      icon: '📧',
      color: 'edm-accent',
      capabilities: ['Campaign ROI', 'Audience Segmentation', 'Personalization'],
      integrations: 2,
      impact: 78
    },
    {
      id: 'epm',
      name: 'EPM Cloud',
      category: 'strategic',
      status: 'planned',
      position: { x: 40, y: 70 },
      icon: '⚡',
      color: 'epm-accent',
      capabilities: ['Financial Planning', 'Budgeting', 'Performance Management'],
      integrations: 5,
      impact: 92
    },
    {
      id: 'erp',
      name: 'ERP Assessment',
      category: 'strategic',
      status: 'planned',
      position: { x: 20, y: 80 },
      icon: '📊',
      color: 'erp-accent',
      capabilities: ['Strategic Positioning', 'Vendor Analysis', 'Implementation Planning'],
      integrations: 1,
      impact: 85
    },
    {
      id: 'integration-hub',
      name: 'Integration Hub',
      category: 'execution',
      status: 'active',
      position: { x: 50, y: 50 },
      icon: '🔄',
      color: 'primary',
      capabilities: ['Data Orchestration', 'Process Automation', 'Real-Time Sync'],
      integrations: 6,
      impact: 100
    }
  ];

  // Module connections
  const moduleConnections: ModuleConnection[] = [
    {
      from: 'hris',
      to: 'integration-hub',
      type: 'data-flow',
      strength: 'high',
      bidirectional: true,
      description: 'Employee data and performance metrics synchronization'
    },
    {
      from: 'crm',
      to: 'integration-hub',
      type: 'data-flow',
      strength: 'high',
      bidirectional: true,
      description: 'Customer relationship data and sales pipeline information'
    },
    {
      from: 'edm',
      to: 'crm',
      type: 'strategic-alignment',
      strength: 'medium',
      bidirectional: true,
      description: 'Marketing campaign data feeding sales pipeline'
    },
    {
      from: 'epm',
      to: 'hris',
      type: 'process-dependency',
      strength: 'high',
      bidirectional: false,
      description: 'Financial planning dependent on HR metrics'
    },
    {
      from: 'erp',
      to: 'epm',
      type: 'strategic-alignment',
      strength: 'high',
      bidirectional: true,
      description: 'ERP strategic positioning aligned with financial performance'
    },
    {
      from: 'integration-hub',
      to: 'epm',
      type: 'feedback-loop',
      strength: 'medium',
      bidirectional: true,
      description: 'Performance data feeding back into financial models'
    }
  ];

  // Animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'data-flow': return 'text-blue-400';
      case 'process-dependency': return 'text-green-400';
      case 'strategic-alignment': return 'text-purple-400';
      case 'feedback-loop': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStrengthWidth = (strength: string) => {
    switch (strength) {
      case 'high': return 'stroke-[3]';
      case 'medium': return 'stroke-[2]';
      case 'low': return 'stroke-[1]';
      default: return 'stroke-[1]';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'bg-blue-500/20 border-blue-500/30';
      case 'intelligence': return 'bg-green-500/20 border-green-500/30';
      case 'execution': return 'bg-purple-500/20 border-purple-500/30';
      case 'strategic': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
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
              onClick={() => onNavigate('integrated-planning-execution')}
              className="module-nav-button"
            >
              <span className="text-lg">←</span>
              <span className="ml-2">{language === 'en' ? 'Back' : 'Atrás'}</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
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
              {language === 'en' ? 'Live Integration Map' : 'Mapa de Integración en Vivo'}
            </span>
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              {language === 'en' ? 'Synchronized' : 'Sincronizado'}
            </Badge>
          </div>
        </div>
      </header>

      {/* View Mode Controls */}
      <div className="mx-6 mt-4">
        <div className="command-center-card p-4 rounded-command">
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'overview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('overview')}
              className="command-center-button"
            >
              {t.overview}
            </Button>
            <Button
              variant={viewMode === 'data-flows' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('data-flows')}
              className="command-center-button"
            >
              {t.dataFlows}
            </Button>
            <Button
              variant={viewMode === 'dependencies' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('dependencies')}
              className="command-center-button"
            >
              {t.dependencies}
            </Button>
            <Button
              variant={viewMode === 'impact' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('impact')}
              className="command-center-button"
            >
              {t.impactAnalysis}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Integration Map */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Integration Visualization */}
          <div className="lg:col-span-3">
            <div className="command-center-card p-6 rounded-command">
              <div className="relative w-full h-96 bg-background/50 rounded-lg border border-border overflow-hidden">
                {/* SVG overlay for connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {viewMode !== 'impact' && moduleConnections
                    .filter(conn => 
                      viewMode === 'overview' || 
                      (viewMode === 'data-flows' && conn.type === 'data-flow') ||
                      (viewMode === 'dependencies' && conn.type === 'process-dependency')
                    )
                    .map((connection, index) => {
                      const fromModule = businessModules.find(m => m.id === connection.from);
                      const toModule = businessModules.find(m => m.id === connection.to);
                      
                      if (!fromModule || !toModule) return null;
                      
                      const x1 = (fromModule.position.x / 100) * 100 + '%';
                      const y1 = (fromModule.position.y / 100) * 100 + '%';
                      const x2 = (toModule.position.x / 100) * 100 + '%';
                      const y2 = (toModule.position.y / 100) * 100 + '%';
                      
                      return (
                        <motion.line
                          key={`${connection.from}-${connection.to}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          className={`${getConnectionColor(connection.type)} ${getStrengthWidth(connection.strength)} opacity-60`}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                        />
                      );
                    })}
                </svg>

                {/* Module nodes */}
                {businessModules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                      selectedModule === module.id ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${module.position.x}%`,
                      top: `${module.position.y}%`
                    }}
                    onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all
                        ${getCategoryColor(module.category)}
                        ${selectedModule === module.id ? 'ring-2 ring-primary shadow-lg' : ''}
                        ${module.status === 'active' ? 'animate-pulse' : ''}
                      `}
                    >
                      <span className="text-2xl">{module.icon}</span>
                    </motion.div>
                    
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                      <div className="text-xs font-medium text-foreground whitespace-nowrap">
                        {module.name}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs mt-1 ${
                          module.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          module.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                          'bg-gray-500/10 text-gray-400 border-gray-500/20'
                        }`}
                      >
                        {module.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}

                {/* Flow animations */}
                {viewMode === 'data-flows' && (
                  <div className="absolute inset-0 pointer-events-none">
                    {moduleConnections
                      .filter(conn => conn.type === 'data-flow')
                      .map((connection, index) => {
                        const fromModule = businessModules.find(m => m.id === connection.from);
                        const toModule = businessModules.find(m => m.id === connection.to);
                        
                        if (!fromModule || !toModule) return null;
                        
                        return (
                          <motion.div
                            key={`flow-${connection.from}-${connection.to}`}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            style={{
                              left: `${fromModule.position.x}%`,
                              top: `${fromModule.position.y}%`
                            }}
                            animate={{
                              x: `${(toModule.position.x - fromModule.position.x) * 4}px`,
                              y: `${(toModule.position.y - fromModule.position.y) * 4}px`
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          />
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Module Details Panel */}
          <div className="space-y-6">
            {selectedModule ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="command-center-card p-6 rounded-command"
                >
                  {(() => {
                    const module = businessModules.find(m => m.id === selectedModule);
                    if (!module) return null;
                    
                    return (
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{module.icon}</span>
                          <div>
                            <h3 className="font-semibold text-foreground">{module.name}</h3>
                            <Badge variant="outline" className={getCategoryColor(module.category)}>
                              {module.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">
                              {language === 'en' ? 'Capabilities' : 'Capacidades'}
                            </h4>
                            <div className="space-y-1">
                              {module.capabilities.map((capability, index) => (
                                <div key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  {capability}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm font-medium text-foreground">{module.integrations}</div>
                              <div className="text-xs text-muted-foreground">
                                {language === 'en' ? 'Integrations' : 'Integraciones'}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{module.impact}%</div>
                              <div className="text-xs text-muted-foreground">
                                {language === 'en' ? 'Impact Score' : 'Puntuación Impacto'}
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            className={`${module.id}-button w-full`}
                            onClick={() => onNavigate(`${module.id}-${module.id === 'integration-hub' ? 'dashboard' : 'intelligence'}`)}
                          >
                            {language === 'en' ? 'Launch Module' : 'Lanzar Módulo'}
                          </Button>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="command-center-card p-6 rounded-command">
                <h3 className="font-semibold text-foreground mb-4">{t.moduleDetails}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Click on any module to view detailed information and launch capabilities'
                    : 'Haz clic en cualquier módulo para ver información detallada y capacidades de lanzamiento'
                  }
                </p>
              </div>
            )}
            
            {/* Integration Health */}
            <div className="command-center-card p-6 rounded-command">
              <h3 className="font-semibold text-foreground mb-4">{t.integrationHealth}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.realTimeSync}</span>
                  <span className="text-green-400 text-sm">98.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.dataConnections}</span>
                  <span className="text-blue-400 text-sm">12/14</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.performanceMetrics}</span>
                  <span className="text-purple-400 text-sm">94.2%</span>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="command-center-card p-6 rounded-command">
              <h3 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'Quick Actions' : 'Acciones Rápidas'}
              </h3>
              
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('hris-dashboard')}>
                  🏢 {language === 'en' ? 'Monitor HRIS' : 'Monitorear HRIS'}
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('business-modules')}>
                  📊 {language === 'en' ? 'View Analytics' : 'Ver Analíticas'}
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  🔧 {language === 'en' ? 'Integration Settings' : 'Configuración Integración'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicIntegrationMapper;