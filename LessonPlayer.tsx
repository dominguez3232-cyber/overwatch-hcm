import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  CheckCircle,
  Clock,
  Target,
  Star,
  Share2,
  Download,
  RotateCcw,
  Award,
  TrendingUp,
  Brain,
  Zap,
  ArrowLeft,
  ArrowRight,
  Globe,
  Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { getSchemaNode } from '../utils/schemaLoader';
import OverlayPanel from './OverlayPanel';
import ProofBlock from './ProofBlock';
import Certificate from './Certificate';
import { certificateService, type CertificateData, type CompletedOverlay } from '../utils/certificateService';

interface LessonStep {
  id: string;
  trace: string;
  caption: string;
  completed: boolean;
  timeSpent?: number;
  feedback?: {
    rating: number;
    reflection: string;
    tags: string[];
  };
}

interface LessonData {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  steps: LessonStep[];
  language: 'en' | 'es';
  learnerName?: string;
}

interface LessonPlayerProps {
  lesson: LessonData;
  onBack?: () => void;
  onComplete?: (lesson: LessonData, certificate: any) => void;
  language: 'en' | 'es';
  className?: string;
}

const translations = {
  en: {
    title: 'Lesson Player',
    
    timeline: {
      title: 'Lesson Timeline',
      step: 'Step',
      current: 'Current',
      completed: 'Completed',
      locked: 'Locked'
    },
    
    viewer: {
      title: 'Content Viewer',
      loading: 'Loading content...',
      noContent: 'No content available for this step'
    },
    
    feedback: {
      title: 'Coaching Feedback',
      subtitle: 'How was this learning moment for you?',
      rating: 'Rate this step',
      reflection: 'What shifted for you?',
      tags: 'Select impact areas',
      submit: 'Submit Feedback',
      skip: 'Skip Feedback'
    },
    
    progress: {
      title: 'Progress Dashboard',
      completion: 'Completion',
      timeSpent: 'Time Spent',
      clarityIndex: 'Clarity Index',
      confidenceLift: 'Confidence Lift',
      steps: 'Steps',
      totalTime: 'Total Time'
    },
    
    completion: {
      title: 'Lesson Complete!',
      subtitle: 'Congratulations on completing this strategic learning journey',
      certificate: 'View Certificate',
      share: 'Share Achievement',
      replay: 'Replay Lesson',
      nextLesson: 'Next Lesson'
    },
    
    certificate: {
      title: 'Certificate of Completion',
      subtitle: 'This certifies that',
      hasCompleted: 'has completed',
      metrics: 'Achievement Metrics',
      schemaTrace: 'Schema Trace',
      download: 'Download Certificate',
      share: 'Share Certificate',
      language: 'Language'
    },
    
    navigation: {
      previous: 'Previous',
      next: 'Next',
      finish: 'Finish Lesson',
      back: 'Back to Library'
    },
    
    impactTags: [
      'Clarity',
      'Confidence',
      'Execution',
      'Strategy',
      'Leadership',
      'Innovation',
      'Decision Making',
      'Team Alignment'
    ]
  },
  es: {
    title: 'Reproductor de Lecciones',
    
    timeline: {
      title: 'Línea de Tiempo de la Lección',
      step: 'Paso',
      current: 'Actual',
      completed: 'Completado',
      locked: 'Bloqueado'
    },
    
    viewer: {
      title: 'Visor de Contenido',
      loading: 'Cargando contenido...',
      noContent: 'No hay contenido disponible para este paso'
    },
    
    feedback: {
      title: 'Retroalimentación de Coaching',
      subtitle: '¿Cómo fue este momento de aprendizaje para ti?',
      rating: 'Califica este paso',
      reflection: '¿Qué cambió para ti?',
      tags: 'Selecciona áreas de impacto',
      submit: 'Enviar Retroalimentación',
      skip: 'Saltar Retroalimentación'
    },
    
    progress: {
      title: 'Panel de Progreso',
      completion: 'Finalización',
      timeSpent: 'Tiempo Invertido',
      clarityIndex: 'Índice de Claridad',
      confidenceLift: 'Aumento de Confianza',
      steps: 'Pasos',
      totalTime: 'Tiempo Total'
    },
    
    completion: {
      title: '¡Lección Completada!',
      subtitle: 'Felicidades por completar este viaje de aprendizaje estratégico',
      certificate: 'Ver Certificado',
      share: 'Compartir Logro',
      replay: 'Repetir Lección',
      nextLesson: 'Siguiente Lección'
    },
    
    certificate: {
      title: 'Certificado de Finalización',
      subtitle: 'Esto certifica que',
      hasCompleted: 'ha completado',
      metrics: 'Métricas de Logro',
      schemaTrace: 'Traza de Esquema',
      download: 'Descargar Certificado',
      share: 'Compartir Certificado',
      language: 'Idioma'
    },
    
    navigation: {
      previous: 'Anterior',
      next: 'Siguiente',
      finish: 'Finalizar Lección',
      back: 'Volver a Biblioteca'
    },
    
    impactTags: [
      'Claridad',
      'Confianza',
      'Ejecución',
      'Estrategia',
      'Liderazgo',
      'Innovación',
      'Toma de Decisiones',
      'Alineación de Equipo'
    ]
  }
};

// Rating Component
const RatingInput: React.FC<{
  value: number;
  onChange: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
}> = ({ value, onChange, size = 'md' }) => {
  const starSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`${starSize} transition-colors ${
            star <= value 
              ? 'text-yellow-400 fill-current' 
              : 'text-muted-foreground hover:text-yellow-400'
          }`}
        >
          <Star className="w-full h-full" />
        </button>
      ))}
    </div>
  );
};

// Tag Selector Component
const TagSelector: React.FC<{
  availableTags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}> = ({ availableTags, selectedTags, onChange }) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {availableTags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTags.includes(tag) ? 'default' : 'outline'}
          className={`cursor-pointer transition-colors ${
            selectedTags.includes(tag) 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-accent'
          }`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

// Lesson Timeline Component
const LessonTimeline: React.FC<{
  steps: LessonStep[];
  currentStepIndex: number;
  onStepClick: (index: number) => void;
  language: 'en' | 'es';
}> = ({ steps, currentStepIndex, onStepClick, language }) => {
  const t = translations[language];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{t.timeline.title}</h3>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = step.completed;
          const isCurrent = index === currentStepIndex;
          const isLocked = index > currentStepIndex && !isCompleted;
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                isCurrent 
                  ? 'border-primary bg-primary/10' 
                  : isCompleted
                  ? 'border-green-500 bg-green-500/10 hover:bg-green-500/20'
                  : isLocked
                  ? 'border-border bg-muted opacity-50 cursor-not-allowed'
                  : 'border-border hover:border-primary/50 hover:bg-accent'
              }`}
              onClick={() => !isLocked && onStepClick(index)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                isCompleted
                  ? 'border-green-500 bg-green-500 text-white'
                  : isCurrent
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-muted-foreground bg-background'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm bg-background px-2 py-1 rounded font-mono">
                    {step.trace}
                  </code>
                  {isCurrent && (
                    <Badge variant="secondary" className="text-xs">
                      {t.timeline.current}
                    </Badge>
                  )}
                  {isCompleted && (
                    <Badge variant="outline" className="text-xs text-green-400">
                      {t.timeline.completed}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {step.caption}
                </p>
              </div>
              
              {step.timeSpent && (
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {Math.round(step.timeSpent / 1000)}s
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};

// Overlay Viewer Component
const OverlayViewer: React.FC<{
  currentStep: LessonStep | null;
  language: 'en' | 'es';
}> = ({ currentStep, language }) => {
  const t = translations[language];
  const schema = currentStep ? getSchemaNode(currentStep.trace) : null;

  if (!currentStep) {
    return (
      <Card className="p-6">
        <div className="text-center py-8 text-muted-foreground">
          <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>{t.viewer.noContent}</p>
        </div>
      </Card>
    );
  }

  if (!schema) {
    return (
      <Card className="p-6">
        <div className="text-center py-8 text-muted-foreground">
          <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
          <p>{t.viewer.loading}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <code className="text-sm bg-secondary px-2 py-1 rounded font-mono">
              {currentStep.trace}
            </code>
            <Badge variant="outline">{schema.category}</Badge>
          </div>
          <h3 className="text-xl font-semibold">
            {schema?.caption?.[language] || currentStep.caption}
          </h3>
        </div>
        
        <OverlayPanel schema={schema} language={language} />
        <ProofBlock proof={schema?.proofEngine} language={language} />
      </div>
    </Card>
  );
};

// Feedback Form Component
const FeedbackForm: React.FC<{
  stepId: string;
  language: 'en' | 'es';
  onSubmit: (feedback: { rating: number; reflection: string; tags: string[] }) => void;
  onSkip: () => void;
}> = ({ stepId, language, onSubmit, onSkip }) => {
  const [rating, setRating] = useState(0);
  const [reflection, setReflection] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const t = translations[language];

  const handleSubmit = () => {
    onSubmit({ rating, reflection, tags: selectedTags });
    // Reset form
    setRating(0);
    setReflection('');
    setSelectedTags([]);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">{t.feedback.title}</h3>
      <p className="text-muted-foreground mb-6">{t.feedback.subtitle}</p>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-3 block">{t.feedback.rating}</label>
          <RatingInput value={rating} onChange={setRating} />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">{t.feedback.reflection}</label>
          <Textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder={t.feedback.reflection}
            className="min-h-[80px]"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-3 block">{t.feedback.tags}</label>
          <TagSelector
            availableTags={t.impactTags}
            selectedTags={selectedTags}
            onChange={setSelectedTags}
          />
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={handleSubmit}
            disabled={rating === 0}
            className="flex-1"
          >
            {t.feedback.submit}
          </Button>
          <Button 
            variant="outline"
            onClick={onSkip}
          >
            {t.feedback.skip}
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Progress Dashboard Component
const ProgressDashboard: React.FC<{
  lesson: LessonData;
  language: 'en' | 'es';
}> = ({ lesson, language }) => {
  const t = translations[language];
  
  const completedSteps = lesson.steps.filter(step => step.completed).length;
  const totalSteps = lesson.steps.length;
  const completionPercentage = Math.round((completedSteps / totalSteps) * 100);
  
  const totalTimeSpent = lesson.steps.reduce((acc, step) => acc + (step.timeSpent || 0), 0);
  const averageRating = lesson.steps
    .filter(step => step.feedback?.rating)
    .reduce((acc, step, _, arr) => acc + (step.feedback!.rating / arr.length), 0);
  
  const clarityIndex = averageRating * 0.6 + (completionPercentage / 100) * 1.5;
  const confidenceLift = averageRating * 0.5 + (completedSteps / totalSteps) * 2;

  const metrics = [
    {
      label: t.progress.completion,
      value: `${completionPercentage}%`,
      icon: Target,
      color: 'text-green-400'
    },
    {
      label: t.progress.timeSpent,
      value: `${Math.round(totalTimeSpent / 60000)}m`,
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      label: t.progress.clarityIndex,
      value: `${clarityIndex.toFixed(1)}x`,
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      label: t.progress.confidenceLift,
      value: `${confidenceLift.toFixed(1)}x`,
      icon: TrendingUp,
      color: 'text-orange-400'
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{t.progress.title}</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 bg-secondary rounded-lg"
          >
            <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
            <div className="text-2xl font-bold mb-1">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{t.progress.steps}</span>
          <span>{completedSteps} / {totalSteps}</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>
    </Card>
  );
};

// Enhanced Certificate Component with Backend Integration
const CertificateView: React.FC<{
  lesson: LessonData;
  metrics: any;
  language: 'en' | 'es';
  onDownload: () => void;
  onShare: () => void;
  onLanguageToggle: () => void;
  certificate?: CertificateData;
}> = ({ lesson, metrics, language, onDownload, onShare, onLanguageToggle, certificate }) => {
  const certificateRef = React.useRef<HTMLDivElement>(null);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCertificate, setGeneratedCertificate] = useState<CertificateData | null>(certificate || null);
  
  // Generate certificate if not provided
  React.useEffect(() => {
    if (!generatedCertificate && !isGenerating) {
      handleGenerateCertificate();
    }
  }, []);

  const handleGenerateCertificate = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    try {
      // Seed demo data first
      await certificateService.seedDemoData();
      
      // Generate certificate
      const result = await certificateService.generateCertificate(
        'demo-module-founder-clarity',
        'demo-learner-luis'
      );
      
      setGeneratedCertificate(result.certificate);
      console.log('Certificate generated:', result.certificate);
    } catch (error) {
      console.error('Error generating certificate:', error);
      // Fallback to local certificate data
      const fallbackCertificate: CertificateData = {
        learnerName: lesson.learnerName || 'Luis Dominguez',
        moduleTitle: lesson.title,
        moduleCaption: {
          en: `This certifies completion of "${lesson.title}" with measurable coaching impact.`,
          es: `Se certifica la finalización de "${lesson.title}" con impacto medible de coaching.`
        },
        schemaTrace: lesson.steps.map(step => step.trace).join(' → '),
        metrics: {
          clarityIndex: '3.1x',
          confidenceLift: '2.4x',
          executionSpeed: '+2.7x'
        },
        completionDate: new Date().toISOString(),
        language: language,
        certificateId: `fallback-${Date.now()}`
      };
      setGeneratedCertificate(fallbackCertificate);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Enhanced download functionality
    onDownload();
    // You could integrate with a PDF generation library here
  };

  if (isGenerating) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-muted-foreground">
            {language === 'en' ? 'Generating certificate...' : 'Generando certificado...'}
          </span>
        </div>
      </div>
    );
  }

  if (!generatedCertificate) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            {language === 'en' ? 'Unable to generate certificate' : 'No se pudo generar el certificado'}
          </p>
          <Button onClick={handleGenerateCertificate} variant="outline">
            {language === 'en' ? 'Try Again' : 'Intentar de Nuevo'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Certificate Display */}
      <Certificate
        ref={certificateRef}
        learnerName={generatedCertificate.learnerName}
        moduleTitle={generatedCertificate.moduleTitle}
        moduleDescription={generatedCertificate.moduleCaption[language] || lesson.description}
        schemaTrace={generatedCertificate.schemaTrace}
        metrics={generatedCertificate.metrics}
        language={language}
        completionDate={new Date(generatedCertificate.completionDate).toLocaleDateString()}
        certificateId={generatedCertificate.certificateId}
        onDownload={handleDownloadPDF}
        onShare={onShare}
        onLanguageToggle={onLanguageToggle}
        printMode={showPrintPreview}
      />

      {/* Print Preview Toggle */}
      <div className="flex gap-4 justify-center pt-4">
        <Button 
          onClick={() => setShowPrintPreview(!showPrintPreview)}
          variant="outline"
        >
          <Eye className="w-4 h-4 mr-2" />
          {showPrintPreview ? 'Interactive View' : 'Print Preview'}
        </Button>
        <Button 
          onClick={handlePrint}
          variant="outline"
        >
          <Download className="w-4 h-4 mr-2" />
          Print Certificate
        </Button>
        <Button 
          onClick={handleGenerateCertificate}
          variant="outline"
          size="sm"
        >
          <Award className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Regenerate' : 'Regenerar'}
        </Button>
      </div>

      {/* Certificate Details */}
      <Card className="p-4 bg-secondary/50">
        <div className="text-sm text-muted-foreground space-y-2">
          <div className="flex justify-between">
            <span>{language === 'en' ? 'Certificate ID:' : 'ID del Certificado:'}</span>
            <code className="text-xs bg-background px-2 py-1 rounded">
              {generatedCertificate.certificateId}
            </code>
          </div>
          <div className="flex justify-between">
            <span>{language === 'en' ? 'Generated:' : 'Generado:'}</span>
            <span>{new Date(generatedCertificate.completionDate).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>{language === 'en' ? 'Language:' : 'Idioma:'}</span>
            <span>{generatedCertificate.language.toUpperCase()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Main Lesson Player Component
export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  lesson: initialLesson,
  onBack,
  onComplete,
  language,
  className = ''
}) => {
  const [lesson, setLesson] = useState<LessonData>(initialLesson);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [stepStartTime, setStepStartTime] = useState<number>(Date.now());
  const [generatedCertificate, setGeneratedCertificate] = useState<CertificateData | null>(null);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);
  
  const t = translations[language];
  const currentStep = lesson.steps[currentStepIndex];
  const isLastStep = currentStepIndex === lesson.steps.length - 1;
  const completedSteps = lesson.steps.filter(step => step.completed).length;
  const isLessonComplete = completedSteps === lesson.steps.length;

  // Auto-save step time when changing steps
  useEffect(() => {
    setStepStartTime(Date.now());
  }, [currentStepIndex]);

  const handleStepComplete = useCallback(() => {
    const timeSpent = Date.now() - stepStartTime;
    
    setLesson(prev => ({
      ...prev,
      steps: prev.steps.map((step, index) => 
        index === currentStepIndex
          ? { ...step, completed: true, timeSpent }
          : step
      )
    }));

    setShowFeedback(true);
  }, [currentStepIndex, stepStartTime]);

  const handleFeedbackSubmit = useCallback(async (feedback: { rating: number; reflection: string; tags: string[] }) => {
    setLesson(prev => ({
      ...prev,
      steps: prev.steps.map((step, index) => 
        index === currentStepIndex
          ? { ...step, feedback }
          : step
      )
    }));

    setShowFeedback(false);
    
    if (isLastStep) {
      // Generate certificate when lesson is completed
      await handleLessonComplete();
      setShowCompletion(true);
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  }, [currentStepIndex, isLastStep]);

  const handleFeedbackSkip = useCallback(async () => {
    setShowFeedback(false);
    
    if (isLastStep) {
      // Generate certificate when lesson is completed
      await handleLessonComplete();
      setShowCompletion(true);
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  }, [isLastStep]);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    } else if (direction === 'next') {
      if (currentStep && !currentStep.completed) {
        handleStepComplete();
      } else if (currentStepIndex < lesson.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  }, [currentStepIndex, currentStep, handleStepComplete, lesson.steps.length]);

  const handleLessonComplete = useCallback(async () => {
    setIsGeneratingCertificate(true);
    
    try {
      // Seed demo data first
      await certificateService.seedDemoData();
      
      // Create overlays from completed steps
      const overlays: CompletedOverlay[] = lesson.steps.map((step, index) => ({
        id: `overlay-${step.id}`,
        moduleId: 'demo-module-founder-clarity',
        learnerId: 'demo-learner-luis',
        schemaTrace: step.trace,
        completionTime: step.timeSpent || Math.floor(Math.random() * 180) + 60, // 60-240 seconds
        score: step.feedback?.rating ? step.feedback.rating / 5 : 0.8 + Math.random() * 0.2, // 0.8-1.0 score
        feedback: step.feedback?.reflection
      }));

      // Complete module and generate certificate
      const certificate = await certificateService.onModuleComplete(
        'demo-module-founder-clarity',
        'demo-learner-luis',
        overlays
      );

      setGeneratedCertificate(certificate);
      console.log('Backend certificate generated:', certificate);

      // Call the original onComplete callback
      if (onComplete) {
        const completion = {
          timestamp: new Date().toISOString(),
          totalTime: Math.floor(Date.now() / 1000) - Math.floor(startTime / 1000),
          stepsCompleted: lesson.steps.length,
          score: 1.0,
          certificate
        };
        onComplete(lesson, completion);
      }
    } catch (error) {
      console.error('Backend certificate generation failed:', error);
      // Continue with local completion logic
      if (onComplete) {
        const completion = {
          timestamp: new Date().toISOString(),
          totalTime: Math.floor(Date.now() / 1000) - Math.floor(startTime / 1000),
          stepsCompleted: lesson.steps.length,
          score: 1.0
        };
        onComplete(lesson, completion);
      }
    } finally {
      setIsGeneratingCertificate(false);
    }
  }, [lesson, startTime, onComplete]);

  const generateCertificateMetrics = useCallback(() => {
    const averageRating = lesson.steps
      .filter(step => step.feedback?.rating)
      .reduce((acc, step, _, arr) => acc + (step.feedback!.rating / arr.length), 0);
    
    const clarityIndex = averageRating * 0.6 + 1.5;
    const confidenceLift = averageRating * 0.5 + 2;

    return {
      clarityIndex: clarityIndex.toFixed(1),
      confidenceLift: confidenceLift.toFixed(1),
      completion: '100%',
      totalTime: Math.round((Date.now() - startTime) / 60000)
    };
  }, [lesson.steps, startTime]);

  if (showCompletion) {
    const metrics = generateCertificateMetrics();
    
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <div className="max-w-4xl mx-auto p-6">
          <Tabs defaultValue="completion" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="completion">{t.completion.title}</TabsTrigger>
              <TabsTrigger value="certificate">{t.certificate.title}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="completion" className="space-y-6">
              <Card className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6"
                >
                  <Award className="w-24 h-24 mx-auto text-yellow-400" />
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{t.completion.title}</h1>
                    <p className="text-muted-foreground">{t.completion.subtitle}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className="text-sm text-muted-foreground">{t.progress.completion}</div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{metrics.totalTime}m</div>
                      <div className="text-sm text-muted-foreground">{t.progress.totalTime}</div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{metrics.clarityIndex}x</div>
                      <div className="text-sm text-muted-foreground">{t.progress.clarityIndex}</div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400">{metrics.confidenceLift}x</div>
                      <div className="text-sm text-muted-foreground">{t.progress.confidenceLift}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => setShowCompletion(false)} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      {t.completion.replay}
                    </Button>
                    <Button onClick={() => console.log('Share achievement')}>
                      <Share2 className="w-4 h-4 mr-2" />
                      {t.completion.share}
                    </Button>
                    {onBack && (
                      <Button onClick={onBack}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t.navigation.back}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </Card>
            </TabsContent>
            
            <TabsContent value="certificate">
              <CertificateView
                lesson={lesson}
                metrics={metrics}
                language={language}
                onDownload={() => console.log('Download certificate')}
                onShare={() => console.log('Share certificate')}
                onLanguageToggle={() => setLanguage(language === 'en' ? 'es' : 'en')}
                certificate={generatedCertificate}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="outline" size="sm" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.navigation.back}
                </Button>
              )}
              <div>
                <h1 className="text-2xl font-bold">{lesson.title}</h1>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="outline">{lesson.category}</Badge>
              <Badge variant="secondary">{lesson.difficulty}</Badge>
              <div className="text-sm text-muted-foreground">
                {completedSteps} / {lesson.steps.length} {t.timeline.completed}
              </div>
            </div>
          </div>
          
          <Progress 
            value={(completedSteps / lesson.steps.length) * 100} 
            className="h-2" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-1">
            <LessonTimeline
              steps={lesson.steps}
              currentStepIndex={currentStepIndex}
              onStepClick={setCurrentStepIndex}
              language={language}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Content Viewer */}
            <OverlayViewer
              currentStep={currentStep}
              language={language}
            />

            {/* Feedback Form (when visible) */}
            <AnimatePresence>
              {showFeedback && currentStep && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FeedbackForm
                    stepId={currentStep.id}
                    language={language}
                    onSubmit={handleFeedbackSubmit}
                    onSkip={handleFeedbackSkip}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Dashboard */}
            <ProgressDashboard
              lesson={lesson}
              language={language}
            />

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => handleNavigation('prev')}
                disabled={currentStepIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.navigation.previous}
              </Button>

              <Button
                onClick={() => handleNavigation('next')}
                className="bg-primary hover:bg-primary/90"
                disabled={showFeedback}
              >
                {isLastStep ? t.navigation.finish : t.navigation.next}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;