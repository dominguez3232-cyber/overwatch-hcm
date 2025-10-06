import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Lightbulb,
  CheckCircle,
  XCircle,
  ArrowRight,
  Clock,
  Target,
  Zap,
  Star,
  BookOpen,
  MessageSquare,
  Timer,
  Trophy,
  Eye,
  Brain,
  Compass,
  Map
} from 'lucide-react';

interface ChallengeQuestion {
  id: string;
  type: 'multiple-choice' | 'schema-reasoning' | 'scenario-based' | 'overlay-selection';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  timeLimit: number; // seconds
  title: { en: string; es: string; };
  description: { en: string; es: string; };
  prompt: { en: string; es: string; };
  options: Array<{
    id: string;
    text: { en: string; es: string; };
    isCorrect: boolean;
    explanation: { en: string; es: string; };
  }>;
  guidance: {
    correct: { en: string; es: string; };
    incorrect: { en: string; es: string; };
    hint: { en: string; es: string; };
  };
  schemaTrace?: string;
  clarityPoints: number;
  masteryLevel: 'foundation' | 'intermediate' | 'advanced' | 'mastery';
}

interface InteractiveCoachingChallengeProps {
  challengeSet: ChallengeQuestion[];
  language: 'en' | 'es';
  onComplete: (results: ChallengeResults) => void;
  onProgress?: (progress: ChallengeProgress) => void;
  timeLimit?: number;
  showHints?: boolean;
  adaptiveDifficulty?: boolean;
}

interface ChallengeResults {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  clarityPoints: number;
  masteryAchieved: string[];
  averageResponseTime: number;
  difficultyProgression: string[];
  schemaPathsCompleted: string[];
}

interface ChallengeProgress {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
  timeElapsed: number;
  currentStreak: number;
  masteryLevel: string;
}

const SAMPLE_CHALLENGES: ChallengeQuestion[] = [
  {
    id: 'trust-velocity-foundation',
    type: 'schema-reasoning',
    category: 'Finance',
    difficulty: 'intermediate',
    timeLimit: 90,
    title: {
      en: 'Trust Velocity Foundations',
      es: 'Fundamentos de Velocidad de Confianza'
    },
    description: {
      en: 'Understanding how trust accelerates business relationships faster than capital deployment',
      es: 'Entendiendo cómo la confianza acelera las relaciones comerciales más rápido que el despliegue de capital'
    },
    prompt: {
      en: 'In cross-border business relationships, which factor typically creates the fastest path to deal closure?',
      es: 'En las relaciones comerciales transfronterizas, ¿qué factor típicamente crea el camino más rápido al cierre de acuerdos?'
    },
    options: [
      {
        id: 'capital-commitment',
        text: {
          en: 'Immediate capital commitment and financial guarantees',
          es: 'Compromiso de capital inmediato y garantías financieras'
        },
        isCorrect: false,
        explanation: {
          en: 'While capital is important, trust velocity often precedes and enables faster capital deployment.',
          es: 'Aunque el capital es importante, la velocidad de confianza a menudo precede y permite un despliegue de capital más rápido.'
        }
      },
      {
        id: 'trust-velocity',
        text: {
          en: 'Established trust patterns and cultural alignment',
          es: 'Patrones de confianza establecidos y alineación cultural'
        },
        isCorrect: true,
        explanation: {
          en: 'Trust velocity creates systematic advantages by reducing friction in decision-making and accelerating relationship depth.',
          es: 'La velocidad de confianza crea ventajas sistemáticas al reducir la fricción en la toma de decisiones y acelerar la profundidad de las relaciones.'
        }
      },
      {
        id: 'legal-framework',
        text: {
          en: 'Comprehensive legal frameworks and contracts',
          es: 'Marcos legales integrales y contratos'
        },
        isCorrect: false,
        explanation: {
          en: 'Legal frameworks are essential but trust velocity enables faster navigation of complex legal landscapes.',
          es: 'Los marcos legales son esenciales pero la velocidad de confianza permite una navegación más rápida de paisajes legales complejos.'
        }
      },
      {
        id: 'market-analysis',
        text: {
          en: 'Detailed market analysis and competitive positioning',
          es: 'Análisis de mercado detallado y posicionamiento competitivo'
        },
        isCorrect: false,
        explanation: {
          en: 'Market analysis provides context, but trust velocity creates the relational foundation for market penetration.',
          es: 'El análisis de mercado proporciona contexto, pero la velocidad de confianza crea la base relacional para la penetración del mercado.'
        }
      }
    ],
    guidance: {
      correct: {
        en: 'Excellent! Trust velocity is the systematic advantage that enables faster business relationship development and deal closure.',
        es: '¡Excelente! La velocidad de confianza es la ventaja sistemática que permite un desarrollo más rápido de relaciones comerciales y cierre de acuerdos.'
      },
      incorrect: {
        en: 'Consider how trust patterns create systematic advantages in cross-border business relationships.',
        es: 'Considera cómo los patrones de confianza crean ventajas sistemáticas en las relaciones comerciales transfronterizas.'
      },
      hint: {
        en: 'Think about what moves faster: paperwork and capital, or human relationships and cultural understanding?',
        es: '¿Piensa en qué se mueve más rápido: papeleo y capital, o relaciones humanas y entendimiento cultural?'
      }
    },
    schemaTrace: 'finance.trust-velocity',
    clarityPoints: 100,
    masteryLevel: 'intermediate'
  },
  {
    id: 'bilingual-navigation',
    type: 'overlay-selection',
    category: 'Communication',
    difficulty: 'intermediate',
    timeLimit: 60,
    title: {
      en: 'Bilingual Business Navigation',
      es: 'Navegación Comercial Bilingüe'
    },
    description: {
      en: 'Selecting the optimal overlay for cross-cultural communication mastery',
      es: 'Seleccionando el overlay óptimo para maestría en comunicación intercultural'
    },
    prompt: {
      en: 'Which overlay framework best demonstrates systematic clarity for bilingual business operations?',
      es: '¿Qué marco de overlay demuestra mejor la claridad sistemática para operaciones comerciales bilingües?'
    },
    options: [
      {
        id: 'cultural-adaptation',
        text: {
          en: 'Cultural Adaptation Framework - adapts business practices to local customs',
          es: 'Marco de Adaptación Cultural - adapta prácticas comerciales a costumbres locales'
        },
        isCorrect: false,
        explanation: {
          en: 'Cultural adaptation is important but doesn\'t specifically address bilingual systematic clarity.',
          es: 'La adaptación cultural es importante pero no aborda específicamente la claridad sistemática bilingüe.'
        }
      },
      {
        id: 'dual-language-navigator',
        text: {
          en: 'Dual-Language Navigator - systematic clarity across language barriers',
          es: 'Navegador Bilingüe - claridad sistemática a través de barreras idiomáticas'
        },
        isCorrect: true,
        explanation: {
          en: 'The Dual-Language Navigator specifically creates systematic frameworks for bilingual business clarity and cross-cultural communication.',
          es: 'El Navegador Bilingüe específicamente crea marcos sistemáticos para claridad comercial bilingüe y comunicación intercultural.'
        }
      },
      {
        id: 'market-localization',
        text: {
          en: 'Market Localization Engine - customizes products for local markets',
          es: 'Motor de Localización de Mercado - personaliza productos para mercados locales'
        },
        isCorrect: false,
        explanation: {
          en: 'Market localization focuses on product adaptation rather than systematic communication clarity.',
          es: 'La localización de mercado se enfoca en la adaptación de productos en lugar de claridad de comunicación sistemática.'
        }
      },
      {
        id: 'translation-framework',
        text: {
          en: 'Translation Framework - converts content between languages',
          es: 'Marco de Traducción - convierte contenido entre idiomas'
        },
        isCorrect: false,
        explanation: {
          en: 'Translation is tactical; the Dual-Language Navigator creates strategic bilingual clarity systems.',
          es: 'La traducción es táctica; el Navegador Bilingüe crea sistemas estratégicos de claridad bilingüe.'
        }
      }
    ],
    guidance: {
      correct: {
        en: 'Perfect! The Dual-Language Navigator creates systematic frameworks for bilingual business clarity and cross-cultural excellence.',
        es: '¡Perfecto! El Navegador Bilingüe crea marcos sistemáticos para claridad comercial bilingüe y excelencia intercultural.'
      },
      incorrect: {
        en: 'Focus on which framework specifically addresses systematic clarity across language barriers in business contexts.',
        es: 'Enfócate en qué marco específicamente aborda la claridad sistemática a través de barreras idiomáticas en contextos comerciales.'
      },
      hint: {
        en: 'Look for the overlay that specifically mentions systematic clarity across language barriers.',
        es: 'Busca el overlay que específicamente menciona claridad sistemática a través de barreras idiomáticas.'
      }
    },
    schemaTrace: 'communication.cross-cultural',
    clarityPoints: 80,
    masteryLevel: 'intermediate'
  },
  {
    id: 'schema-architecture',
    type: 'scenario-based',
    category: 'Strategy',
    difficulty: 'advanced',
    timeLimit: 120,
    title: {
      en: 'Schema Architecture Design',
      es: 'Diseño de Arquitectura de Esquemas'
    },
    description: {
      en: 'Building systematic clarity frameworks for organizational transformation',
      es: 'Construyendo marcos de claridad sistemática para transformación organizacional'
    },
    prompt: {
      en: 'A founder needs to create a custom schema for their squad-based deployment. What is the most critical first step?',
      es: 'Un fundador necesita crear un esquema personalizado para su despliegue basado en escuadrones. ¿Cuál es el primer paso más crítico?'
    },
    options: [
      {
        id: 'team-structure',
        text: {
          en: 'Define the team structure and role assignments',
          es: 'Definir la estructura del equipo y asignaciones de roles'
        },
        isCorrect: false,
        explanation: {
          en: 'Team structure is important but must be built on foundational clarity frameworks.',
          es: 'La estructura del equipo es importante pero debe construirse sobre marcos de claridad fundamentales.'
        }
      },
      {
        id: 'business-outcomes',
        text: {
          en: 'Identify the specific business outcomes and success metrics',
          es: 'Identificar los resultados comerciales específicos y métricas de éxito'
        },
        isCorrect: false,
        explanation: {
          en: 'Outcomes are crucial but schema architecture starts with systematic clarity mapping.',
          es: 'Los resultados son cruciales pero la arquitectura de esquemas comienza con el mapeo de claridad sistemática.'
        }
      },
      {
        id: 'clarity-mapping',
        text: {
          en: 'Map the foundational clarity patterns and decision-making frameworks',
          es: 'Mapear los patrones de claridad fundamentales y marcos de toma de decisiones'
        },
        isCorrect: true,
        explanation: {
          en: 'Schema architecture begins with systematic clarity mapping that enables all subsequent organizational frameworks.',
          es: 'La arquitectura de esquemas comienza con el mapeo de claridad sistemática que permite todos los marcos organizacionales subsecuentes.'
        }
      },
      {
        id: 'technology-tools',
        text: {
          en: 'Select the appropriate technology tools and platforms',
          es: 'Seleccionar las herramientas tecnológicas y plataformas apropiadas'
        },
        isCorrect: false,
        explanation: {
          en: 'Technology supports schema implementation but clarity mapping is the foundational requirement.',
          es: 'La tecnología apoya la implementación de esquemas pero el mapeo de claridad es el requisito fundamental.'
        }
      }
    ],
    guidance: {
      correct: {
        en: 'Outstanding! Schema architecture must begin with systematic clarity mapping to create reproducible frameworks.',
        es: '¡Sobresaliente! La arquitectura de esquemas debe comenzar con el mapeo de claridad sistemática para crear marcos reproducibles.'
      },
      incorrect: {
        en: 'Remember that schema architecture is about creating systematic clarity frameworks before tactical implementation.',
        es: 'Recuerda que la arquitectura de esquemas se trata de crear marcos de claridad sistemática antes de la implementación táctica.'
      },
      hint: {
        en: 'What must be clear before you can architect any systematic framework?',
        es: '¿Qué debe estar claro antes de que puedas arquitecturar cualquier marco sistemático?'
      }
    },
    schemaTrace: 'strategy.framework-creation',
    clarityPoints: 150,
    masteryLevel: 'advanced'
  }
];

export default function InteractiveCoachingChallenge({
  challengeSet = SAMPLE_CHALLENGES,
  language,
  onComplete,
  onProgress,
  timeLimit,
  showHints = true,
  adaptiveDifficulty = false
}: InteractiveCoachingChallengeProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [results, setResults] = useState<Partial<ChallengeResults>>({
    totalQuestions: challengeSet.length,
    correctAnswers: 0,
    totalTime: 0,
    clarityPoints: 0,
    masteryAchieved: [],
    averageResponseTime: 0,
    difficultyProgression: [],
    schemaPathsCompleted: []
  });
  const [currentStreak, setCurrentStreak] = useState(0);
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = challengeSet[currentQuestionIndex];

  const t = {
    en: {
      question: 'Question',
      timeRemaining: 'Time Remaining',
      showHint: 'Show Hint',
      hideHint: 'Hide Hint',
      submitAnswer: 'Submit Answer',
      nextQuestion: 'Next Question',
      completeChallenge: 'Complete Challenge',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      explanation: 'Explanation',
      hint: 'Hint',
      progress: 'Progress',
      streak: 'Current Streak',
      clarityPoints: 'Clarity Points',
      timeElapsed: 'Time Elapsed',
      difficulty: 'Difficulty',
      category: 'Category',
      schemaTrace: 'Schema Trace',
      masteryLevel: 'Mastery Level',
      selectOption: 'Please select an option',
      challengeComplete: 'Challenge Complete!',
      excellentWork: 'Excellent Work!',
      resultsTitle: 'Your Results',
      finalScore: 'Final Score',
      accuracy: 'Accuracy',
      avgResponseTime: 'Avg Response Time',
      masteryAchieved: 'Mastery Achieved',
      schemaPathsCompleted: 'Schema Paths Completed',
      seconds: 'seconds',
      minutes: 'minutes'
    },
    es: {
      question: 'Pregunta',
      timeRemaining: 'Tiempo Restante',
      showHint: 'Mostrar Pista',
      hideHint: 'Ocultar Pista',
      submitAnswer: 'Enviar Respuesta',
      nextQuestion: 'Siguiente Pregunta',
      completeChallenge: 'Completar Desafío',
      correct: '¡Correcto!',
      incorrect: 'Incorrecto',
      explanation: 'Explicación',
      hint: 'Pista',
      progress: 'Progreso',
      streak: 'Racha Actual',
      clarityPoints: 'Puntos de Claridad',
      timeElapsed: 'Tiempo Transcurrido',
      difficulty: 'Dificultad',
      category: 'Categoría',
      schemaTrace: 'Rastro de Esquema',
      masteryLevel: 'Nivel de Maestría',
      selectOption: 'Por favor selecciona una opción',
      challengeComplete: '¡Desafío Completado!',
      excellentWork: '¡Excelente Trabajo!',
      resultsTitle: 'Tus Resultados',
      finalScore: 'Puntuación Final',
      accuracy: 'Precisión',
      avgResponseTime: 'Tiempo de Respuesta Promedio',
      masteryAchieved: 'Maestría Alcanzada',
      schemaPathsCompleted: 'Rutas de Esquema Completadas',
      seconds: 'segundos',
      minutes: 'minutos'
    }
  };

  const text = t[language];

  // Timer effect
  useEffect(() => {
    if (!showAnswer && !isCompleted) {
      const interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showAnswer, isCompleted]);

  // Progress reporting
  useEffect(() => {
    if (onProgress) {
      onProgress({
        currentQuestion: currentQuestionIndex + 1,
        totalQuestions: challengeSet.length,
        correctAnswers: results.correctAnswers || 0,
        timeElapsed,
        currentStreak,
        masteryLevel: currentQuestion?.masteryLevel || 'foundation'
      });
    }
  }, [currentQuestionIndex, timeElapsed, currentStreak, onProgress]);

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    const selectedOptionData = currentQuestion.options.find(opt => opt.id === selectedOption);
    const isCorrect = selectedOptionData?.isCorrect || false;
    const responseTime = Date.now() - questionStartTime;

    // Update question times
    setQuestionTimes(prev => [...prev, responseTime]);

    // Update results
    setResults(prev => ({
      ...prev,
      correctAnswers: (prev.correctAnswers || 0) + (isCorrect ? 1 : 0),
      totalTime: (prev.totalTime || 0) + responseTime,
      clarityPoints: (prev.clarityPoints || 0) + (isCorrect ? currentQuestion.clarityPoints : 0),
      difficultyProgression: [...(prev.difficultyProgression || []), currentQuestion.difficulty],
      schemaPathsCompleted: currentQuestion.schemaTrace ? 
        [...new Set([...(prev.schemaPathsCompleted || []), currentQuestion.schemaTrace])] :
        (prev.schemaPathsCompleted || [])
    }));

    // Update streak
    if (isCorrect) {
      setCurrentStreak(prev => prev + 1);
    } else {
      setCurrentStreak(0);
    }

    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < challengeSet.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
      setShowHint(false);
      setQuestionStartTime(Date.now());
    } else {
      // Complete challenge
      const finalResults: ChallengeResults = {
        ...results,
        averageResponseTime: questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length,
        masteryAchieved: [...new Set(challengeSet.map(q => q.masteryLevel))]
      } as ChallengeResults;
      
      setIsCompleted(true);
      onComplete(finalResults);
    }
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'finance': return <Target className="w-4 h-4" />;
      case 'communication': return <MessageSquare className="w-4 h-4" />;
      case 'strategy': return <Compass className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  if (isCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl mb-6"
          >
            🏆
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">{text.challengeComplete}</h1>
          <p className="text-xl text-muted-foreground">{text.excellentWork}</p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">{text.resultsTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {results.correctAnswers}/{results.totalQuestions}
              </div>
              <div className="text-sm text-muted-foreground">{text.finalScore}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {Math.round(((results.correctAnswers || 0) / (results.totalQuestions || 1)) * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">{text.accuracy}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">
                {formatTime(Math.round((results.averageResponseTime || 0) / 1000))}
              </div>
              <div className="text-sm text-muted-foreground">{text.avgResponseTime}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">
                {results.clarityPoints}
              </div>
              <div className="text-sm text-muted-foreground">{text.clarityPoints}</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                {text.masteryAchieved}
              </h3>
              <div className="flex flex-wrap gap-2">
                {results.masteryAchieved?.map((mastery, index) => (
                  <Badge key={index} variant="outline" className="capitalize">
                    {mastery}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Map className="w-5 h-5" />
                {text.schemaPathsCompleted}
              </h3>
              <div className="space-y-1">
                {results.schemaPathsCompleted?.map((schema, index) => (
                  <div key={index} className="text-sm font-mono bg-secondary/50 rounded px-2 py-1">
                    {schema}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{text.question}</span>
              <span className="font-bold">{currentQuestionIndex + 1}/{challengeSet.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{formatTime(timeElapsed)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">{text.streak}: {currentStreak}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline" className={getDifficultyColor(currentQuestion.difficulty)}>
              {currentQuestion.difficulty}
            </Badge>
            <Badge variant="outline">
              {getCategoryIcon(currentQuestion.category)}
              <span className="ml-1">{currentQuestion.category}</span>
            </Badge>
          </div>
        </div>
        
        <Progress value={(currentQuestionIndex / challengeSet.length) * 100} className="h-2" />
      </Card>

      {/* Question */}
      <Card className="p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{currentQuestion.title[language]}</h2>
            <p className="text-muted-foreground mb-4">{currentQuestion.description[language]}</p>
            
            {currentQuestion.schemaTrace && (
              <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Map className="w-4 h-4" />
                  <span className="text-muted-foreground">{text.schemaTrace}:</span>
                  <span className="font-mono">{currentQuestion.schemaTrace}</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">{currentQuestion.prompt[language]}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => !showAnswer && setSelectedOption(option.id)}
                  disabled={showAnswer}
                  className={`w-full p-4 text-left rounded-lg border transition-all ${
                    showAnswer && option.isCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : showAnswer && selectedOption === option.id && !option.isCorrect
                      ? 'border-red-500 bg-red-500/10'
                      : selectedOption === option.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:bg-secondary/50'
                  } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      showAnswer && option.isCorrect
                        ? 'border-green-500 bg-green-500'
                        : showAnswer && selectedOption === option.id && !option.isCorrect
                        ? 'border-red-500 bg-red-500'
                        : selectedOption === option.id
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {showAnswer && option.isCorrect && <CheckCircle className="w-3 h-3 text-white" />}
                      {showAnswer && selectedOption === option.id && !option.isCorrect && <XCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span className="flex-1">{option.text[language]}</span>
                  </div>
                  
                  {showAnswer && (selectedOption === option.id || option.isCorrect) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-border/50"
                    >
                      <p className="text-sm text-muted-foreground">
                        {option.explanation[language]}
                      </p>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Hint */}
          {showHints && !showAnswer && (
            <div className="text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                {showHint ? text.hideHint : text.showHint}
              </Button>
            </div>
          )}

          <AnimatePresence>
            {showHint && !showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-yellow-400">{text.hint}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.guidance.hint[language]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Answer Guidance */}
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={`rounded-lg p-4 ${
                  currentQuestion.options.find(opt => opt.id === selectedOption)?.isCorrect
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-red-500/10 border border-red-500/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {currentQuestion.options.find(opt => opt.id === selectedOption)?.isCorrect ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium text-green-400">{text.correct}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="font-medium text-red-400">{text.incorrect}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.options.find(opt => opt.id === selectedOption)?.isCorrect
                    ? currentQuestion.guidance.correct[language]
                    : currentQuestion.guidance.incorrect[language]
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              {!selectedOption && text.selectOption}
            </div>
            
            <div className="flex gap-4">
              {!showAnswer ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption}
                  size="lg"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {text.submitAnswer}
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {currentQuestionIndex < challengeSet.length - 1 ? text.nextQuestion : text.completeChallenge}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}