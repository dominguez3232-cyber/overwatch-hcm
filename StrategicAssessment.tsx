import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle, XCircle, MapPin, Target, Compass, TrendingUp, DollarSign } from 'lucide-react';
import { 
  getStrategicIntelligenceFoundation, 
  calculateVCReadinessScore, 
  getStrategicRecommendations,
  type StrategicIntelligenceContext 
} from './StrategicIntelligenceFoundation';

interface StrategicAssessmentProps {
  language: 'en' | 'es';
}

interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: string;
  text: string;
  type: 'checkbox' | 'radio';
  options?: string[];
}

export function StrategicAssessment({ language }: StrategicAssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const labels = {
    en: {
      title: "Strategic HR Assessment",
      subtitle: "Navigate Your Organization's Human Capital Readiness",
      startButton: "Begin Navigation",
      nextButton: "Continue Journey",
      backButton: "Previous",
      viewReport: "View Assessment Report",
      restartButton: "Start New Assessment",
      step: "Stage",
      of: "of",
      introduction: {
        title: "Welcome to the Strategic HR Navigator",
        description: "This assessment will help you chart your organization's human capital maturity across three critical dimensions. Navigate through each stage to discover your strategic position and unlock actionable insights.",
        icon: "🧭"
      },
      sections: [
        {
          id: 'hr-foundation',
          title: 'HR Foundation Matrix',
          description: 'Assess your organizational foundation across Admin, Process, and Strategic HR dimensions.',
          questions: [
            {
              id: 'admin-hr-check',
              text: 'Does your organization efficiently manage transactional HR tasks (payroll, benefits, compliance)?',
              type: 'checkbox' as const,
            },
            {
              id: 'process-hr-check',
              text: 'Are HR processes (hiring, onboarding, performance management) well-defined and consistent?',
              type: 'checkbox' as const,
            },
            {
              id: 'strategic-hr-check',
              text: 'Does HR function as a strategic partner, linking people strategy with business outcomes?',
              type: 'checkbox' as const,
            },
          ],
        },
        {
          id: 'people-strategy',
          title: 'People Strategy Intelligence',
          description: 'Evaluate your talent strategy effectiveness and business impact.',
          questions: [
            {
              id: 'talent-retention',
              text: 'Does your people strategy successfully attract, retain, and develop top talent?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
            {
              id: 'performance-enhancement',
              text: 'Do your strategies empower employees to become high-performers?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
            {
              id: 'revenue-growth',
              text: 'Does your people strategy directly contribute to revenue growth?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
          ],
        },
        {
          id: 'cultural-intelligence',
          title: 'Cultural Intelligence Framework',
          description: 'Assess your organizational culture design and effectiveness.',
          questions: [
            {
              id: 'core-values',
              text: 'Are your company\'s core values clearly defined and embedded in operations?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
            {
              id: 'fostering-belonging',
              text: 'Does your organization actively foster belonging and open communication?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
            {
              id: 'clarity-direction',
              text: 'Is there clear communication about goals and individual contribution?',
              type: 'radio' as const,
              options: ['Yes', 'No'],
            },
          ],
        },
      ]
    },
    es: {
      title: "Evaluación HR Estratégica",
      subtitle: "Navega la Preparación de Capital Humano de tu Organización",
      startButton: "Comenzar Navegación",
      nextButton: "Continuar Viaje",
      backButton: "Anterior",
      viewReport: "Ver Reporte de Evaluación",
      restartButton: "Nueva Evaluación",
      step: "Etapa",
      of: "de",
      introduction: {
        title: "Bienvenido al Navegador HR Estratégico",
        description: "Esta evaluación te ayudará a trazar la madurez del capital humano de tu organización en tres dimensiones críticas. Navega cada etapa para descubrir tu posición estratégica y desbloquear insights accionables.",
        icon: "🧭"
      },
      sections: [
        {
          id: 'hr-foundation',
          title: 'Matriz de Fundación HR',
          description: 'Evalúa tu fundación organizacional en dimensiones Admin, Proceso y HR Estratégico.',
          questions: [
            {
              id: 'admin-hr-check',
              text: '¿Tu organización maneja eficientemente tareas transaccionales de HR (nómina, beneficios, cumplimiento)?',
              type: 'checkbox' as const,
            },
            {
              id: 'process-hr-check',
              text: '¿Los procesos de HR (contratación, incorporación, gestión del rendimiento) están bien definidos y son consistentes?',
              type: 'checkbox' as const,
            },
            {
              id: 'strategic-hr-check',
              text: '¿HR funciona como socio estratégico, vinculando la estrategia de personas con resultados comerciales?',
              type: 'checkbox' as const,
            },
          ],
        },
        {
          id: 'people-strategy',
          title: 'Inteligencia de Estrategia de Personas',
          description: 'Evalúa la efectividad de tu estrategia de talento e impacto comercial.',
          questions: [
            {
              id: 'talent-retention',
              text: '¿Tu estrategia de personas atrae, retiene y desarrolla exitosamente el mejor talento?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
            {
              id: 'performance-enhancement',
              text: '¿Tus estrategias empoderan a los empleados para convertirse en alto rendimiento?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
            {
              id: 'revenue-growth',
              text: '¿Tu estrategia de personas contribuye directamente al crecimiento de ingresos?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
          ],
        },
        {
          id: 'cultural-intelligence',
          title: 'Marco de Inteligencia Cultural',
          description: 'Evalúa el diseño y efectividad de tu cultura organizacional.',
          questions: [
            {
              id: 'core-values',
              text: '¿Los valores centrales de tu empresa están claramente definidos e integrados en las operaciones?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
            {
              id: 'fostering-belonging',
              text: '¿Tu organización fomenta activamente la pertenencia y comunicación abierta?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
            {
              id: 'clarity-direction',
              text: '¿Hay comunicación clara sobre objetivos y contribución individual?',
              type: 'radio' as const,
              options: ['Sí', 'No'],
            },
          ],
        },
      ]
    }
  };

  const currentLabels = labels[language];
  const sections = currentLabels.sections;
  const totalSteps = sections.length + 2; // +2 for intro and summary

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'checkbox':
        return (
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={question.id}
              checked={answers[question.id] || false}
              onChange={(e) => handleAnswerChange(question.id, e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-600 text-green-400 focus:ring-green-400 focus:ring-2 bg-gray-800"
            />
            <label htmlFor={question.id} className="text-white text-sm leading-relaxed cursor-pointer">
              {question.text}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div className="space-y-4">
            <p className="text-white font-medium text-sm">{question.text}</p>
            <div className="flex gap-6">
              {question.options?.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="w-4 h-4 text-green-400 border-gray-600 focus:ring-green-400 focus:ring-2 bg-gray-800"
                  />
                  <span className="text-gray-300 text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderIntroduction = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">{currentLabels.introduction.icon}</div>
      <h2 className="text-3xl font-bold text-white mb-4">
        {currentLabels.introduction.title}
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
        {currentLabels.introduction.description}
      </p>
      <Button
        onClick={() => setCurrentStep(1)}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
      >
        <Compass className="w-5 h-5 mr-2" />
        {currentLabels.startButton}
      </Button>
    </div>
  );

  const renderSummary = () => {
    const hrFoundationScore = [
      answers['admin-hr-check'],
      answers['process-hr-check'],
      answers['strategic-hr-check']
    ].filter(Boolean).length;

    const strategyScore = [
      answers['talent-retention'],
      answers['performance-enhancement'],
      answers['revenue-growth']
    ].filter(answer => answer === (language === 'en' ? 'Yes' : 'Sí')).length;

    const cultureScore = [
      answers['core-values'],
      answers['fostering-belonging'],
      answers['clarity-direction']
    ].filter(answer => answer === (language === 'en' ? 'Yes' : 'Sí')).length;

    const getScoreColor = (score: number, max: number) => {
      const percentage = (score / max) * 100;
      if (percentage >= 80) return 'text-green-400';
      if (percentage >= 60) return 'text-yellow-400';
      return 'text-red-400';
    };

    const getScoreBadge = (score: number, max: number) => {
      const percentage = (score / max) * 100;
      if (percentage >= 80) return { label: language === 'en' ? 'Strong' : 'Fuerte', color: 'bg-green-600' };
      if (percentage >= 60) return { label: language === 'en' ? 'Developing' : 'Desarrollando', color: 'bg-yellow-600' };
      return { label: language === 'en' ? 'Foundation' : 'Fundación', color: 'bg-red-600' };
    };

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">
            {language === 'en' ? 'Strategic Position Report' : 'Reporte de Posición Estratégica'}
          </h2>
          <p className="text-gray-300">
            {language === 'en' 
              ? 'Your organizational human capital assessment results' 
              : 'Resultados de tu evaluación de capital humano organizacional'}
          </p>
        </div>

        <div className="grid gap-6">
          {/* HR Foundation */}
          <Card className="bg-gray-800/60 border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-400" />
                {language === 'en' ? 'HR Foundation Matrix' : 'Matriz de Fundación HR'}
              </h3>
              <Badge className={`${getScoreBadge(hrFoundationScore, 3).color} text-white`}>
                {getScoreBadge(hrFoundationScore, 3).label}
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  {language === 'en' ? 'Foundation Score' : 'Puntuación de Fundación'}
                </span>
                <span className={`font-bold ${getScoreColor(hrFoundationScore, 3)}`}>
                  {hrFoundationScore}/3
                </span>
              </div>
              <Progress value={(hrFoundationScore / 3) * 100} className="h-2" />
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  {answers['admin-hr-check'] ? 
                    <CheckCircle className="w-4 h-4 text-green-400" /> : 
                    <XCircle className="w-4 h-4 text-red-400" />
                  }
                  <span className="text-gray-300">
                    {language === 'en' ? 'Admin HR' : 'HR Administrativo'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {answers['process-hr-check'] ? 
                    <CheckCircle className="w-4 h-4 text-green-400" /> : 
                    <XCircle className="w-4 h-4 text-red-400" />
                  }
                  <span className="text-gray-300">
                    {language === 'en' ? 'Process HR' : 'HR de Proceso'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {answers['strategic-hr-check'] ? 
                    <CheckCircle className="w-4 h-4 text-green-400" /> : 
                    <XCircle className="w-4 h-4 text-red-400" />
                  }
                  <span className="text-gray-300">
                    {language === 'en' ? 'Strategic HR' : 'HR Estratégico'}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* People Strategy */}
          <Card className="bg-gray-800/60 border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {language === 'en' ? 'People Strategy Intelligence' : 'Inteligencia de Estrategia de Personas'}
              </h3>
              <Badge className={`${getScoreBadge(strategyScore, 3).color} text-white`}>
                {getScoreBadge(strategyScore, 3).label}
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  {language === 'en' ? 'Strategy Score' : 'Puntuación de Estrategia'}
                </span>
                <span className={`font-bold ${getScoreColor(strategyScore, 3)}`}>
                  {strategyScore}/3
                </span>
              </div>
              <Progress value={(strategyScore / 3) * 100} className="h-2" />
            </div>
          </Card>

          {/* Cultural Intelligence */}
          <Card className="bg-gray-800/60 border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {language === 'en' ? 'Cultural Intelligence Framework' : 'Marco de Inteligencia Cultural'}
              </h3>
              <Badge className={`${getScoreBadge(cultureScore, 3).color} text-white`}>
                {getScoreBadge(cultureScore, 3).label}
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  {language === 'en' ? 'Culture Score' : 'Puntuación de Cultura'}
                </span>
                <span className={`font-bold ${getScoreColor(cultureScore, 3)}`}>
                  {cultureScore}/3
                </span>
              </div>
              <Progress value={(cultureScore / 3) * 100} className="h-2" />
            </div>
          </Card>
        </div>

        {/* VC-Grade Strategic Intelligence */}
        <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-500/30 p-6 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? 'Advisory-Grade Strategic Intelligence' : 'Inteligencia Estratégica de Grado Asesor'}
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-400 mb-3">
                {language === 'en' ? 'Investment Readiness Indicators' : 'Indicadores de Preparación para Inversión'}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    hrFoundationScore >= 2 ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="text-gray-300">
                    {language === 'en' ? 'HR Foundation Maturity' : 'Madurez de Fundación HR'}: {
                      hrFoundationScore >= 2 ? 
                        (language === 'en' ? 'Investment Grade' : 'Grado de Inversión') : 
                        (language === 'en' ? 'Developing' : 'En Desarrollo')
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    strategyScore >= 2 ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="text-gray-300">
                    {language === 'en' ? 'Strategic Capabilities' : 'Capacidades Estratégicas'}: {
                      strategyScore >= 2 ? 
                        (language === 'en' ? 'VC Ready' : 'Listo para VC') : 
                        (language === 'en' ? 'Needs Enhancement' : 'Necesita Mejora')
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    cultureScore >= 2 ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="text-gray-300">
                    {language === 'en' ? 'Culture Force Multiplier' : 'Multiplicador de Fuerza Cultural'}: {
                      cultureScore >= 2 ? 
                        (language === 'en' ? 'Competitive Advantage' : 'Ventaja Competitiva') : 
                        (language === 'en' ? 'Opportunity Area' : 'Área de Oportunidad')
                    }
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">
                {language === 'en' ? 'Strategic Recommendations' : 'Recomendaciones Estratégicas'}
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                {hrFoundationScore < 2 && (
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>
                      {language === 'en' 
                        ? 'Prioritize HR technology integration to reach investment-grade foundation'
                        : 'Priorizar integración de tecnología HR para alcanzar fundación de grado de inversión'
                      }
                    </span>
                  </div>
                )}
                {strategyScore < 2 && (
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>
                      {language === 'en' 
                        ? 'Develop predictive analytics capabilities for VC-grade strategic insights'
                        : 'Desarrollar capacidades de analítica predictiva para insights estratégicos de grado VC'
                      }
                    </span>
                  </div>
                )}
                {cultureScore < 2 && (
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>
                      {language === 'en' 
                        ? 'Implement culture-driven performance systems as competitive differentiator'
                        : 'Implementar sistemas de rendimiento impulsados por cultura como diferenciador competitivo'
                      }
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>
                    {language === 'en' 
                      ? 'Access OVERWATCH³ VC Readiness Center for detailed investment preparation'
                      : 'Acceder al Centro de Preparación VC de OVERWATCH³ para preparación detallada de inversión'
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="font-semibold text-green-400">
                {language === 'en' ? 'Market Context (2025)' : 'Contexto de Mercado (2025)'}
              </span>
            </div>
            <div className="text-xs text-gray-400">
              {language === 'en' 
                ? 'HCM SaaS market: $65B by 2032 (9.6% CAGR) • 65M Latino workers in US • AI compliance automation demand rising'
                : 'Mercado HCM SaaS: $65B para 2032 (9.6% CAGR) • 65M trabajadores Latinos en US • Demanda de automatización de cumplimiento IA en aumento'
              }
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button
            onClick={() => { setCurrentStep(0); setAnswers({}); }}
            variant="outline"
            className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
          >
            {currentLabels.restartButton}
          </Button>
        </div>
      </div>
    );
  };

  const renderSection = () => {
    const section = sections[currentStep - 1];
    const progress = ((currentStep - 1) / sections.length) * 100;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            <p className="text-gray-400 mt-1">{section.description}</p>
          </div>
          <Badge variant="outline" className="border-green-600 text-green-400">
            {currentLabels.step} {currentStep} {currentLabels.of} {sections.length}
          </Badge>
        </div>

        <Progress value={progress} className="h-2 mb-6" />

        <div className="space-y-6">
          {section.questions.map(question => (
            <Card key={question.id} className="bg-gray-800/60 border-gray-700 p-6">
              {renderQuestion(question)}
            </Card>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            variant="outline"
            className="border-gray-600 text-gray-400 hover:bg-gray-700 disabled:opacity-50"
          >
            {currentLabels.backButton}
          </Button>
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {currentStep === sections.length ? currentLabels.viewReport : currentLabels.nextButton}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-20 py-6">
      <Card className="bg-card border-border p-8 max-w-4xl mx-auto">
        {/* Header removed per user request */}

        {currentStep === 0 && renderIntroduction()}
        {currentStep > 0 && currentStep <= sections.length && renderSection()}
        {currentStep === totalSteps - 1 && renderSummary()}
      </Card>
    </div>
  );
}