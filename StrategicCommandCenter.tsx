import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Command, 
  TrendingUp, 
  Users, 
  DollarSign,
  Shield,
  Zap,
  Brain,
  Target,
  GitBranch,
  Globe,
  AlertTriangle,
  CheckCircle,
  Clock,
  Layers
} from 'lucide-react';

interface StrategicCommandCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function StrategicCommandCenter({ language, currentMode }: StrategicCommandCenterProps) {
  const [activeModule, setActiveModule] = useState<string>('alignment');
  const [alertLevel, setAlertLevel] = useState<'green' | 'yellow' | 'red'>('green');

  const labels = {
    en: {
      title: "Strategic Command Center",
      subtitle: "People Strategy = Business Strategy",
      alignmentStat: "3.5× revenue growth when HR-business is aligned",
      
      // Core Modules
      alignment: "Strategic Alignment",
      scenarios: "Scenario Engine", 
      knowledge: "Knowledge Grid",
      convergence: "Financial Convergence",
      governance: "Governance AI",
      signals: "EX Signals",
      
      // Alignment Dashboard
      alignmentTitle: "Strategic Alignment Cockpit",
      alignmentDesc: "Real-time measurement of people-business strategy alignment",
      alignmentScore: "Alignment Score",
      currentAlignment: "Current State",
      targetAlignment: "Target State",
      gapAnalysis: "Gap Analysis",
      actionItems: "Priority Actions",
      
      // Advisory Engines
      advisoryTitle: "Advisory Intelligence Engines",
      advisoryDesc: "McKinsey-grade frameworks accessible to growing organizations",
      
      // Operating Modes
      strategicMode: "Strategic Planning",
      tacticalMode: "Tactical Operations", 
      complianceMode: "Compliance Controls",
      
      // Quick Actions
      quickActions: "Quick Actions",
      runScenario: "Run Scenario",
      checkCompliance: "Check Compliance",
      reviewMetrics: "Review Metrics",
      updateStrategy: "Update Strategy",
      
      // System Status
      systemStatus: "System Status",
      allSystems: "All Systems Operational",
      dataFresh: "Data Fresh",
      aiOnline: "AI Online",
      
      // Recent Activity
      recentActivity: "Recent Activity",
      activity1: "Strategic alignment assessment completed",
      activity2: "Q4 workforce scenario generated", 
      activity3: "Compliance audit passed - 98% score",
      activity4: "Culture metrics updated - trending positive"
    },
    es: {
      title: "Centro de Comando Estratégico",
      subtitle: "Estrategia de Personas = Estrategia de Negocio",
      alignmentStat: "3.5× crecimiento de ingresos cuando RH-negocio está alineado",
      
      // Core Modules
      alignment: "Alineación Estratégica",
      scenarios: "Motor de Escenarios",
      knowledge: "Cuadrícula de Conocimiento", 
      convergence: "Convergencia Financiera",
      governance: "IA de Gobernanza",
      signals: "Señales EX",
      
      // Alignment Dashboard
      alignmentTitle: "Cabina de Alineación Estratégica",
      alignmentDesc: "Medición en tiempo real de la alineación estrategia personas-negocio",
      alignmentScore: "Puntuación de Alineación",
      currentAlignment: "Estado Actual",
      targetAlignment: "Estado Objetivo", 
      gapAnalysis: "Análisis de Brechas",
      actionItems: "Acciones Prioritarias",
      
      // Advisory Engines
      advisoryTitle: "Motores de Inteligencia Asesora",
      advisoryDesc: "Marcos de McKinsey accesibles para organizaciones en crecimiento",
      
      // Operating Modes
      strategicMode: "Planificación Estratégica",
      tacticalMode: "Operaciones Tácticas",
      complianceMode: "Controles de Cumplimiento",
      
      // Quick Actions
      quickActions: "Acciones Rápidas",
      runScenario: "Ejecutar Escenario",
      checkCompliance: "Verificar Cumplimiento", 
      reviewMetrics: "Revisar Métricas",
      updateStrategy: "Actualizar Estrategia",
      
      // System Status
      systemStatus: "Estado del Sistema",
      allSystems: "Todos los Sistemas Operacionales",
      dataFresh: "Datos Frescos",
      aiOnline: "IA En Línea",
      
      // Recent Activity
      recentActivity: "Actividad Reciente",
      activity1: "Evaluación de alineación estratégica completada",
      activity2: "Escenario de fuerza laboral Q4 generado",
      activity3: "Auditoría de cumplimiento aprobada - 98% de puntuación", 
      activity4: "Métricas culturales actualizadas - tendencia positiva"
    }
  };

  const currentLabels = labels[language];

  // Mock data for demonstration
  const alignmentData = {
    current: 67,
    target: 85,
    improvement: "+12% this quarter"
  };

  const coreModules = [
    {
      id: 'alignment',
      icon: Target,
      name: currentLabels.alignment,
      status: 'active',
      color: 'text-green-400'
    },
    {
      id: 'scenarios', 
      icon: GitBranch,
      name: currentLabels.scenarios,
      status: 'active',
      color: 'text-blue-400'
    },
    {
      id: 'knowledge',
      icon: Brain,
      name: currentLabels.knowledge,
      status: 'active', 
      color: 'text-purple-400'
    },
    {
      id: 'convergence',
      icon: DollarSign,
      name: currentLabels.convergence,
      status: 'active',
      color: 'text-yellow-400'
    },
    {
      id: 'governance',
      icon: Shield,
      name: currentLabels.governance,
      status: 'active',
      color: 'text-red-400'
    },
    {
      id: 'signals',
      icon: Zap,
      name: currentLabels.signals,
      status: 'active',
      color: 'text-cyan-400'
    }
  ];

  const operatingModes = [
    {
      id: 'strategic',
      name: currentLabels.strategicMode,
      active: currentMode === 'strategy',
      icon: Command
    },
    {
      id: 'tactical', 
      name: currentLabels.tacticalMode,
      active: currentMode === 'founder',
      icon: Users
    },
    {
      id: 'compliance',
      name: currentLabels.complianceMode, 
      active: currentMode === 'accounting',
      icon: Shield
    }
  ];

  const quickActionsList = [
    { id: 'scenario', name: currentLabels.runScenario, icon: GitBranch },
    { id: 'compliance', name: currentLabels.checkCompliance, icon: Shield },
    { id: 'metrics', name: currentLabels.reviewMetrics, icon: TrendingUp },
    { id: 'strategy', name: currentLabels.updateStrategy, icon: Target }
  ];

  const systemStatuses = [
    { name: currentLabels.allSystems, status: 'operational', icon: CheckCircle },
    { name: currentLabels.dataFresh, status: 'fresh', icon: Clock },
    { name: currentLabels.aiOnline, status: 'online', icon: Brain }
  ];

  const recentActivities = [
    { activity: currentLabels.activity1, time: '2 hours ago', status: 'completed' },
    { activity: currentLabels.activity2, time: '4 hours ago', status: 'completed' },
    { activity: currentLabels.activity3, time: '1 day ago', status: 'completed' },
    { activity: currentLabels.activity4, time: '2 days ago', status: 'updated' }
  ];

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Command className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg mb-2">{currentLabels.subtitle}</p>
          <Badge className="bg-green-600 text-white text-sm">
            {currentLabels.alignmentStat}
          </Badge>
        </div>

        {/* Core Modules Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {coreModules.map((module) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.id}
                className={`p-4 cursor-pointer transition-all duration-300 ${
                  activeModule === module.id 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <div className="text-center">
                  <Icon className={`w-8 h-8 ${module.color} mx-auto mb-2`} />
                  <div className="text-white text-sm font-medium">{module.name}</div>
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="alignment" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="alignment">Strategic Alignment</TabsTrigger>
            <TabsTrigger value="advisory">Advisory Engines</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          <TabsContent value="alignment" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">{currentLabels.alignmentTitle}</h3>
              <p className="text-gray-400 mb-6">{currentLabels.alignmentDesc}</p>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {alignmentData.current}%
                  </div>
                  <div className="text-gray-400">{currentLabels.currentAlignment}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {alignmentData.target}%
                  </div>
                  <div className="text-gray-400">{currentLabels.targetAlignment}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {alignmentData.improvement}
                  </div>
                  <div className="text-gray-400">Improvement</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{currentLabels.alignmentScore}</span>
                  <span>{alignmentData.current}% / {alignmentData.target}%</span>
                </div>
                <Progress value={alignmentData.current} className="h-3" />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="advisory" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">{currentLabels.advisoryTitle}</h3>
              <p className="text-gray-400 mb-6">{currentLabels.advisoryDesc}</p>
              
              <div className="grid lg:grid-cols-3 gap-4">
                {operatingModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <Card 
                      key={mode.id}
                      className={`p-4 ${
                        mode.active 
                          ? 'border-green-500 bg-green-500/10' 
                          : 'border-gray-600 bg-gray-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-6 h-6 ${mode.active ? 'text-green-400' : 'text-gray-400'}`} />
                        <span className="text-white font-medium">{mode.name}</span>
                        {mode.active && (
                          <Badge className="bg-green-600 text-white text-xs">Active</Badge>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="operations" className="space-y-6 mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">{currentLabels.quickActions}</h3>
                <div className="space-y-3">
                  {quickActionsList.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Button 
                        key={action.id}
                        variant="outline" 
                        className="w-full justify-start text-left"
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        {action.name}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* System Status */}
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">{currentLabels.systemStatus}</h3>
                <div className="space-y-3">
                  {systemStatuses.map((status, index) => {
                    const Icon = status.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{status.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{currentLabels.recentActivity}</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-gray-300">{activity.activity}</div>
                      <div className="text-gray-500 text-sm">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}