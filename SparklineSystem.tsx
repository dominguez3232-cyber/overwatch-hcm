import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Zap,
  TrendingUp,
  Users,
  Target,
  Building,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Brain,
  Search,
  FileText,
  Star,
  Clock,
  Filter
} from 'lucide-react';

interface SparklineSystemProps {
  language: 'en' | 'es';
}

export function SparklineSystem({ language }: SparklineSystemProps) {
  const [selectedPersona, setSelectedPersona] = useState<string>('lean-operator');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const labels = {
    en: {
      title: "Sparkline Diagnostic System",
      subtitle: "Next-Best Question Engine with AI-Powered Constraint Analysis",
      
      // Personas
      personasTitle: "Founder Personas",
      leanOperator: "Lean Operator",
      teamOrchestrator: "Team Orchestrator", 
      visionaryBuilder: "Visionary Builder",
      systemsArchitect: "Systems Architect",
      
      // Pain Patterns
      painPatternsTitle: "Pain Pattern Library",
      analyticsBlindspot: "Analytics Blindspot",
      capabilityGap: "Capability Gap",
      culturalDrift: "Cultural Drift",
      complianceRisk: "Compliance Risk",
      
      // Diagnostic Flow
      diagnosticTitle: "AI-Powered Diagnostic",
      nextQuestion: "Next Best Question",
      constraintAnalysis: "Constraint Analysis",
      generateArtifacts: "Generate Artifacts",
      
      // Questions
      question1: "What's your biggest people challenge right now?",
      question2: "How are you currently measuring team performance?",
      question3: "What decisions are you delaying due to lack of data?",
      question4: "Where do you feel like you're flying blind?",
      
      // Artifacts
      artifactsTitle: "Generated Artifacts",
      diagnosticMap: "One-Page Diagnostic Map",
      constraintCard: "2-Page Constraint Card", 
      pilotLedger: "Pilot Ledger",
      scalePlay: "Scale Play",
      
      // Sparkline Sets
      sparklinesTitle: "Sparkline Library",
      leadership: "Leadership/Culture",
      talent: "Talent/DEI",
      operations: "Operations/Analytics",
      saasSpecific: "SaaS-Specific",
      
      // Actions
      startDiagnostic: "Start Diagnostic",
      nextQuestion: "Next Question",
      generateReport: "Generate Report",
      scheduleFollowup: "Schedule Follow-up",
      
      // Status
      inProgress: "In Progress",
      completed: "Completed",
      pending: "Pending"
    },
    es: {
      title: "Sistema de Diagnóstico Sparkline", 
      subtitle: "Motor de Próxima Mejor Pregunta con Análisis de Restricciones con IA",
      
      // Personas
      personasTitle: "Personas de Fundadores",
      leanOperator: "Operador Lean",
      teamOrchestrator: "Orquestador de Equipos",
      visionaryBuilder: "Constructor Visionario", 
      systemsArchitect: "Arquitecto de Sistemas",
      
      // Pain Patterns
      painPatternsTitle: "Biblioteca de Patrones de Dolor",
      analyticsBlindspot: "Punto Ciego de Analítica",
      capabilityGap: "Brecha de Capacidad",
      culturalDrift: "Deriva Cultural",
      complianceRisk: "Riesgo de Cumplimiento",
      
      // Diagnostic Flow
      diagnosticTitle: "Diagnóstico con IA",
      nextQuestion: "Próxima Mejor Pregunta",
      constraintAnalysis: "Análisis de Restricciones", 
      generateArtifacts: "Generar Artefactos",
      
      // Questions
      question1: "¿Cuál es tu mayor desafío de personas ahora mismo?",
      question2: "¿Cómo estás midiendo actualmente el rendimiento del equipo?",
      question3: "¿Qué decisiones estás retrasando por falta de datos?",
      question4: "¿Dónde sientes que estás volando a ciegas?",
      
      // Artifacts
      artifactsTitle: "Artefactos Generados",
      diagnosticMap: "Mapa de Diagnóstico de Una Página",
      constraintCard: "Tarjeta de Restricción de 2 Páginas",
      pilotLedger: "Libro Mayor Piloto",
      scalePlay: "Jugada de Escala",
      
      // Sparkline Sets
      sparklinesTitle: "Biblioteca Sparkline",
      leadership: "Liderazgo/Cultura",
      talent: "Talento/DEI", 
      operations: "Operaciones/Analítica",
      saasSpecific: "Específico de SaaS",
      
      // Actions
      startDiagnostic: "Iniciar Diagnóstico",
      nextQuestion: "Próxima Pregunta",
      generateReport: "Generar Reporte",
      scheduleFollowup: "Programar Seguimiento",
      
      // Status
      inProgress: "En Progreso",
      completed: "Completado", 
      pending: "Pendiente"
    }
  };

  const currentLabels = labels[language];

  const founderPersonas = [
    {
      id: 'lean-operator',
      name: currentLabels.leanOperator,
      icon: Target,
      description: 'Focused on efficiency and operational excellence',
      color: 'text-blue-400'
    },
    {
      id: 'team-orchestrator',
      name: currentLabels.teamOrchestrator, 
      icon: Users,
      description: 'Building and aligning high-performing teams',
      color: 'text-green-400'
    },
    {
      id: 'visionary-builder',
      name: currentLabels.visionaryBuilder,
      icon: Star,
      description: 'Creating and communicating long-term vision',
      color: 'text-purple-400'
    },
    {
      id: 'systems-architect',
      name: currentLabels.systemsArchitect,
      icon: Building,
      description: 'Designing scalable processes and systems',
      color: 'text-yellow-400'
    }
  ];

  const painPatterns = [
    {
      id: 'analytics-blindspot',
      name: currentLabels.analyticsBlindspot,
      icon: Search,
      severity: 'high',
      frequency: 'common'
    },
    {
      id: 'capability-gap',
      name: currentLabels.capabilityGap,
      icon: TrendingUp,
      severity: 'medium',
      frequency: 'common'
    },
    {
      id: 'cultural-drift', 
      name: currentLabels.culturalDrift,
      icon: Users,
      severity: 'high',
      frequency: 'moderate'
    },
    {
      id: 'compliance-risk',
      name: currentLabels.complianceRisk,
      icon: AlertTriangle,
      severity: 'critical',
      frequency: 'moderate'
    }
  ];

  const sparklineSets = [
    {
      id: 'leadership',
      name: currentLabels.leadership,
      icon: Star,
      count: 15,
      topics: ['Vision Setting', 'Decision Making', 'Culture Building', 'Change Management']
    },
    {
      id: 'talent',
      name: currentLabels.talent,
      icon: Users, 
      count: 12,
      topics: ['Hiring Excellence', 'Retention Strategy', 'DEI Programs', 'Performance Management']
    },
    {
      id: 'operations',
      name: currentLabels.operations,
      icon: BarChart3,
      count: 18,
      topics: ['Process Optimization', 'Analytics Setup', 'Workflow Design', 'Quality Systems']
    },
    {
      id: 'saas',
      name: currentLabels.saasSpecific,
      icon: Zap,
      count: 10,
      topics: ['Product-Market Fit', 'Unit Economics', 'Customer Success', 'Scaling']
    }
  ];

  const diagnosticQuestions = [
    currentLabels.question1,
    currentLabels.question2, 
    currentLabels.question3,
    currentLabels.question4
  ];

  const artifacts = [
    {
      id: 'diagnostic-map',
      name: currentLabels.diagnosticMap,
      icon: FileText,
      status: 'completed',
      description: 'Visual summary of key constraints and recommendations'
    },
    {
      id: 'constraint-card',
      name: currentLabels.constraintCard,
      icon: Target,
      status: 'in-progress',
      description: 'Detailed analysis of primary constraint with action plan'
    },
    {
      id: 'pilot-ledger',
      name: currentLabels.pilotLedger,
      icon: Clock,
      status: 'pending', 
      description: 'Specific pilot project with success metrics'
    },
    {
      id: 'scale-play',
      name: currentLabels.scalePlay,
      icon: TrendingUp,
      status: 'pending',
      description: 'Roadmap for scaling successful pilots'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'pending':
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400';
      case 'high':
        return 'text-orange-400';
      case 'medium':
        return 'text-yellow-400';
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
            <Zap className="w-8 h-8 text-orange-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg">{currentLabels.subtitle}</p>
        </div>

        <Tabs defaultValue="personas" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personas">Personas</TabsTrigger>
            <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
            <TabsTrigger value="sparklines">Sparklines</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
          </TabsList>

          <TabsContent value="personas" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.personasTitle}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {founderPersonas.map((persona) => {
                const Icon = persona.icon;
                return (
                  <Card 
                    key={persona.id}
                    className={`p-6 cursor-pointer transition-all border-2 ${
                      selectedPersona === persona.id
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedPersona(persona.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${persona.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{persona.name}</h3>
                        <p className="text-gray-400">{persona.description}</p>
                        
                        {selectedPersona === persona.id && (
                          <div className="mt-4">
                            <Button className="bg-orange-600 hover:bg-orange-700">
                              {currentLabels.startDiagnostic}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Pain Patterns */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{currentLabels.painPatternsTitle}</h3>
              <div className="grid lg:grid-cols-2 gap-4">
                {painPatterns.map((pattern) => {
                  const Icon = pattern.icon;
                  return (
                    <div key={pattern.id} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <Icon className={`w-5 h-5 ${getSeverityColor(pattern.severity)}`} />
                      <span className="text-gray-300 flex-1">{pattern.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getSeverityColor(pattern.severity)} border-current`}
                      >
                        {pattern.severity}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="diagnostic" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.diagnosticTitle}</h2>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">
                  {currentLabels.nextQuestion} ({currentStep}/4)
                </h3>
                <Progress value={(currentStep / 4) * 100} className="w-32" />
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-orange-400 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">
                        Question {currentStep}
                      </h4>
                      <p className="text-gray-300 text-lg">
                        {diagnosticQuestions[currentStep - 1]}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <textarea 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white"
                      rows={3}
                      placeholder="Type your response here..."
                      value={responses[`question${currentStep}`] || ''}
                      onChange={(e) => setResponses(prev => ({
                        ...prev,
                        [`question${currentStep}`]: e.target.value
                      }))}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button 
                    variant="outline"
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    className="bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      if (currentStep < 4) {
                        setCurrentStep(prev => prev + 1);
                      }
                    }}
                    disabled={!responses[`question${currentStep}`]}
                  >
                    {currentStep === 4 ? currentLabels.generateReport : currentLabels.nextQuestion}
                  </Button>
                </div>
              </div>
            </Card>

            {/* AI Analysis Preview */}
            {currentStep > 2 && (
              <Card className="bg-purple-600/10 border-purple-600 p-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{currentLabels.constraintAnalysis}</h3>
                    <p className="text-gray-300">
                      Based on your responses, the primary constraint appears to be around 
                      data visibility and performance measurement. The AI is preparing 
                      targeted recommendations...
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="sparklines" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.sparklinesTitle}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {sparklineSets.map((set) => {
                const Icon = set.icon;
                return (
                  <Card key={set.id} className="bg-gray-800/50 border-gray-700 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-white">{set.name}</h3>
                          <Badge className="bg-orange-600 text-white text-xs">
                            {set.count} questions
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          {set.topics.map((topic, index) => (
                            <div key={index} className="text-gray-400 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                              {topic}
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

          <TabsContent value="artifacts" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.artifactsTitle}</h2>
            </div>

            <div className="space-y-4">
              {artifacts.map((artifact) => {
                const Icon = artifact.icon;
                return (
                  <Card key={artifact.id} className="bg-gray-800/50 border-gray-700 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-white">{artifact.name}</h3>
                            {getStatusIcon(artifact.status)}
                          </div>
                          <p className="text-gray-400">{artifact.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {artifact.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-blue-600/10 border-blue-600 p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Ready to Generate</h3>
                <p className="text-gray-400 mb-4">
                  Complete the diagnostic to automatically generate all artifacts
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {currentLabels.generateReport}
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}