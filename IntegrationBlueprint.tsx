import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Database,
  Cpu,
  Shield,
  Cloud,
  Zap,
  GitBranch,
  Server,
  Globe,
  Lock,
  RefreshCw,
  Activity,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface IntegrationBlueprintProps {
  language: 'en' | 'es';
}

export function IntegrationBlueprint({ language }: IntegrationBlueprintProps) {
  const [selectedSystem, setSelectedSystem] = useState<string>('hcm');
  const [integrationStatus, setIntegrationStatus] = useState<'planning' | 'implementing' | 'live'>('planning');

  const labels = {
    en: {
      title: "Integration Blueprint",
      subtitle: "HCM • ERP • EPM • CRM Unified Architecture",
      
      // Core Systems
      systemsTitle: "Systems of Record",
      hcmSystem: "HCM Platform",
      erpSystem: "ERP/Finance", 
      epmSystem: "EPM Planning",
      crmSystem: "CRM/GTM",
      
      // Integration Layers
      layersTitle: "Integration Architecture",
      dataCore: "Data & Integration Core",
      security: "Identity & Security",
      analytics: "AI & Analytics",
      application: "Application Layer",
      
      // Core Flows
      flowsTitle: "Core Integration Flows",
      flow1: "HCM → ERP: Worker master, compensation, cost centers",
      flow2: "HCM → EPM: Headcount plans, retention assumptions", 
      flow3: "ERP ↔ EPM: Actuals vs forecast, driver-based loops",
      flow4: "CRM ↔ EPM: Pipeline scenarios, capacity planning",
      flow5: "CRM ↔ HCM: Role profiles, talent overlays",
      
      // Tech Stack
      techStackTitle: "Technology Stack",
      eventBus: "Event Bus / Streaming",
      integration: "iPaaS / Integration Layer", 
      apiGateway: "API Gateway & GraphQL",
      databases: "Operational Databases",
      lakehouse: "Analytical Lakehouse",
      semantic: "Semantic Layer / Metrics",
      
      // Implementation Phases
      phasesTitle: "Implementation Roadmap",
      phase1: "Foundations (0-90 days)",
      phase2: "Planning & Compliance (90-180 days)",
      phase3: "Scale & Foresight (180-365 days)",
      
      // Status indicators
      planning: "Planning",
      implementing: "Implementing", 
      live: "Live",
      
      // Details
      phase1Details: "Stand up lakehouse, identity, iPaaS, GraphQL. Integrate HCM + CRM feeds.",
      phase2Details: "EPM integration, Governance AI v1, Scenario Engine with CFO/CHRO view.",
      phase3Details: "Financial Convergence, Culture DNA Grid, Ethical AI Sentinel, M&A cockpit."
    },
    es: {
      title: "Plano de Integración",
      subtitle: "HCM • ERP • EPM • CRM Arquitectura Unificada",
      
      // Core Systems
      systemsTitle: "Sistemas de Registro",
      hcmSystem: "Plataforma HCM",
      erpSystem: "ERP/Finanzas",
      epmSystem: "Planificación EPM", 
      crmSystem: "CRM/GTM",
      
      // Integration Layers
      layersTitle: "Arquitectura de Integración",
      dataCore: "Núcleo de Datos e Integración",
      security: "Identidad y Seguridad",
      analytics: "IA y Analítica",
      application: "Capa de Aplicación",
      
      // Core Flows
      flowsTitle: "Flujos de Integración Principales",
      flow1: "HCM → ERP: Maestro de trabajadores, compensación, centros de costos",
      flow2: "HCM → EPM: Planes de personal, supuestos de retención",
      flow3: "ERP ↔ EPM: Reales vs pronóstico, bucles basados en drivers",
      flow4: "CRM ↔ EPM: Escenarios de pipeline, planificación de capacidad", 
      flow5: "CRM ↔ HCM: Perfiles de roles, overlays de talento",
      
      // Tech Stack
      techStackTitle: "Pila Tecnológica",
      eventBus: "Bus de Eventos / Streaming",
      integration: "iPaaS / Capa de Integración",
      apiGateway: "Gateway API y GraphQL",
      databases: "Bases de Datos Operacionales",
      lakehouse: "Lakehouse Analítico", 
      semantic: "Capa Semántica / Métricas",
      
      // Implementation Phases
      phasesTitle: "Hoja de Ruta de Implementación",
      phase1: "Fundamentos (0-90 días)",
      phase2: "Planificación y Cumplimiento (90-180 días)",
      phase3: "Escala y Previsión (180-365 días)",
      
      // Status indicators
      planning: "Planificando",
      implementing: "Implementando",
      live: "En Vivo",
      
      // Details
      phase1Details: "Establecer lakehouse, identidad, iPaaS, GraphQL. Integrar feeds HCM + CRM.",
      phase2Details: "Integración EPM, Governance AI v1, Motor de Escenarios con vista CFO/CHRO.",
      phase3Details: "Convergencia Financiera, Cuadrícula DNA Cultural, Centinela IA Ética, cabina M&A."
    }
  };

  const currentLabels = labels[language];

  const coreSystems = [
    {
      id: 'hcm',
      name: currentLabels.hcmSystem,
      icon: Users,
      color: 'text-blue-400',
      options: ['Workday', 'UKG', 'Dayforce', 'Rippling', 'BambooHR'],
      status: 'live'
    },
    {
      id: 'erp', 
      name: currentLabels.erpSystem,
      icon: DollarSign,
      color: 'text-green-400', 
      options: ['NetSuite', 'Oracle', 'SAP', 'Dynamics 365'],
      status: 'implementing'
    },
    {
      id: 'epm',
      name: currentLabels.epmSystem,
      icon: BarChart3,
      color: 'text-purple-400',
      options: ['Anaplan', 'Oracle EPM', 'Workday Adaptive', 'Board'],
      status: 'planning'
    },
    {
      id: 'crm',
      name: currentLabels.crmSystem, 
      icon: TrendingUp,
      color: 'text-yellow-400',
      options: ['Salesforce', 'HubSpot', 'Pipedrive'],
      status: 'live'
    }
  ];

  const integrationLayers = [
    {
      id: 'data',
      name: currentLabels.dataCore,
      icon: Database,
      components: ['Kafka/Redpanda', 'Workato/Mulesoft', 'Kong/Apigee', 'Postgres', 'Snowflake', 'dbt + Cube']
    },
    {
      id: 'security',
      name: currentLabels.security, 
      icon: Shield,
      components: ['Okta/Azure AD', 'Row/Column Security', 'Collibra/Atlan', 'SOC2/ISO27001']
    },
    {
      id: 'analytics',
      name: currentLabels.analytics,
      icon: Cpu,
      components: ['Python ML', 'OpenAI/Anthropic', 'MLflow', 'Feast']
    },
    {
      id: 'application',
      name: currentLabels.application,
      icon: Cloud,
      components: ['React + Tailwind', 'Node/TypeScript', 'Temporal/Camunda', 'Recharts/ECharts']
    }
  ];

  const coreFlows = [
    {
      id: 'flow1',
      description: currentLabels.flow1,
      from: 'HCM',
      to: 'ERP',
      frequency: 'Real-time',
      status: 'active'
    },
    {
      id: 'flow2', 
      description: currentLabels.flow2,
      from: 'HCM',
      to: 'EPM',
      frequency: 'Monthly',
      status: 'planning'
    },
    {
      id: 'flow3',
      description: currentLabels.flow3,
      from: 'ERP',
      to: 'EPM', 
      frequency: 'Daily',
      status: 'implementing'
    },
    {
      id: 'flow4',
      description: currentLabels.flow4,
      from: 'CRM',
      to: 'EPM',
      frequency: 'Weekly',
      status: 'planning'
    },
    {
      id: 'flow5',
      description: currentLabels.flow5,
      from: 'CRM', 
      to: 'HCM',
      frequency: 'Real-time',
      status: 'active'
    }
  ];

  const implementationPhases = [
    {
      id: 'phase1',
      title: currentLabels.phase1,
      description: currentLabels.phase1Details,
      status: 'implementing',
      progress: 75
    },
    {
      id: 'phase2',
      title: currentLabels.phase2,
      description: currentLabels.phase2Details, 
      status: 'planning',
      progress: 15
    },
    {
      id: 'phase3',
      title: currentLabels.phase3,
      description: currentLabels.phase3Details,
      status: 'planning',
      progress: 5
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'implementing':
        return <RefreshCw className="w-4 h-4 text-yellow-400 animate-spin" />;
      case 'planning':
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
      case 'active':
        return 'text-green-400';
      case 'implementing':
        return 'text-yellow-400';
      case 'planning':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GitBranch className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg">{currentLabels.subtitle}</p>
        </div>

        <Tabs defaultValue="systems" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="systems">Systems</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="flows">Data Flows</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          </TabsList>

          <TabsContent value="systems" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.systemsTitle}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {coreSystems.map((system) => {
                const Icon = system.icon;
                return (
                  <Card 
                    key={system.id}
                    className={`p-6 cursor-pointer transition-all border-2 ${
                      selectedSystem === system.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSystem(system.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${system.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-white">{system.name}</h3>
                          {getStatusIcon(system.status)}
                        </div>
                        
                        <div className="space-y-2">
                          {system.options.map((option, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-gray-400 text-sm">{option}</span>
                              {index === 0 && (
                                <Badge className="bg-blue-600 text-white text-xs">Recommended</Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.layersTitle}</h2>
            </div>

            <div className="space-y-4">
              {integrationLayers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <Card key={layer.id} className="bg-gray-800/50 border-gray-700 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-3">{layer.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {layer.components.map((component, index) => (
                            <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                              {component}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="flows" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.flowsTitle}</h2>
            </div>

            <div className="space-y-4">
              {coreFlows.map((flow) => (
                <Card key={flow.id} className="bg-gray-800/50 border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-blue-600 text-white text-xs">{flow.from}</Badge>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <Badge className="bg-green-600 text-white text-xs">{flow.to}</Badge>
                        {getStatusIcon(flow.status)}
                      </div>
                      <p className="text-gray-300">{flow.description}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className={`font-medium ${getStatusColor(flow.status)}`}>
                        {flow.frequency}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.phasesTitle}</h2>
            </div>

            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <Card key={phase.id} className="bg-gray-800/50 border-gray-700 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                        {getStatusIcon(phase.status)}
                      </div>
                      
                      <p className="text-gray-400 mb-4">{phase.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}