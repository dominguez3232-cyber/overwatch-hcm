import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  Star,
  MessageSquare,
  Trophy,
  GitBranch,
  ExternalLink,
  Send,
  User,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Clock
} from 'lucide-react';

interface InvestorFeedbackSystemProps {
  selectedInvestor?: string;
  selectedRemix?: string;
  selectedLanguage?: string;
  onFeedbackSubmit?: (feedback: any) => void;
  language?: 'en' | 'es';
}

interface FeedbackData {
  investorIdentity: {
    type: string;
    remixArc: string;
    language: string;
  };
  coachingClarity: {
    rating: number;
    comment: string;
  };
  badgeResonance: {
    selectedBadge: string;
    rating: number;
    comment: string;
  };
  schemaConviction: {
    selectedNode: string;
    rating: number;
    comment: string;
  };
  replayFeedback: {
    comment: string;
    suggestions: string;
  };
  routing: {
    destination: string;
    exportToDashboard: boolean;
  };
}

export default function InvestorFeedbackSystem({
  selectedInvestor = 'LatAm VC',
  selectedRemix = 'Trust Velocity Remix',
  selectedLanguage = 'Dual-language',
  onFeedbackSubmit,
  language = 'en'
}: InvestorFeedbackSystemProps) {
  const [currentStep, setCurrentStep] = useState<'identity' | 'clarity' | 'badges' | 'schema' | 'replay' | 'submission'>('identity');
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    investorIdentity: {
      type: selectedInvestor,
      remixArc: selectedRemix,
      language: selectedLanguage
    },
    coachingClarity: { rating: 0, comment: '' },
    badgeResonance: { selectedBadge: '', rating: 0, comment: '' },
    schemaConviction: { selectedNode: '', rating: 0, comment: '' },
    replayFeedback: { comment: '', suggestions: '' },
    routing: { destination: 'Founder Coaching Console', exportToDashboard: true }
  });

  const t = {
    en: {
      investorFeedback: 'Investor Feedback System',
      investorIdentity: 'Investor Identity',
      coachingClarity: 'Coaching Clarity Rating',
      badgeResonance: 'Badge Resonance Feedback',
      schemaConviction: 'Schema Trace Conviction',
      replayFeedback: 'Replay Comments & Suggestions',
      feedbackSubmission: 'Feedback Submission',
      investorType: 'Investor Type',
      remixArc: 'Remix Arc Context',
      languageToggle: 'Language Toggle',
      clarityQuestion: 'How clear was the coaching arc?',
      clarityComment: 'What made the coaching feel effective or unclear?',
      badgeQuestion: 'How compelling was this badge as a proof point?',
      badgeComment: 'Would you recommend showcasing this badge in investor decks?',
      schemaQuestion: 'How strong was the schema logic behind this arc?',
      schemaComment: 'Any suggestions for strengthening schema trace or overlay linkage?',
      replayComment: 'Any final thoughts on replay pacing, coaching tone, or clarity delivery?',
      replaySuggestions: 'Would you recommend remixing this arc for other markets or roles?',
      submitButton: 'Send Feedback to Founder',
      routingOptions: 'Routing Options',
      exportToDashboard: 'Export to Investor Dashboard',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit Feedback',
      required: 'Required',
      optional: 'Optional',
      step: 'Step',
      of: 'of',
      selectBadge: 'Select Badge',
      selectNode: 'Select Schema Node',
      selectDestination: 'Select Destination',
      ratingScale: 'Rating Scale (1-5)'
    },
    es: {
      investorFeedback: 'Sistema de Feedback del Inversor',
      investorIdentity: 'Identidad del Inversor',
      coachingClarity: 'Calificación de Claridad del Coaching',
      badgeResonance: 'Feedback de Resonancia de Insignias',
      schemaConviction: 'Convicción del Trazado de Esquemas',
      replayFeedback: 'Comentarios y Sugerencias de Replay',
      feedbackSubmission: 'Envío de Feedback',
      investorType: 'Tipo de Inversor',
      remixArc: 'Contexto del Arco Remix',
      languageToggle: 'Cambio de Idioma',
      clarityQuestion: '¿Qué tan claro fue el arco de coaching?',
      clarityComment: '¿Qué hizo que el coaching se sintiera efectivo o poco claro?',
      badgeQuestion: '¿Qué tan convincente fue esta insignia como punto de prueba?',
      badgeComment: '¿Recomendarías mostrar esta insignia en presentaciones a inversores?',
      schemaQuestion: '¿Qué tan fuerte fue la lógica del esquema detrás de este arco?',
      schemaComment: '¿Alguna sugerencia para fortalecer el trazado de esquemas o la vinculación de overlay?',
      replayComment: '¿Algún pensamiento final sobre el ritmo del replay, tono de coaching, o entrega de claridad?',
      replaySuggestions: '¿Recomendarías remixar este arco para otros mercados o roles?',
      submitButton: 'Enviar Feedback al Fundador',
      routingOptions: 'Opciones de Enrutamiento',
      exportToDashboard: 'Exportar al Dashboard del Inversor',
      next: 'Siguiente',
      previous: 'Anterior',
      submit: 'Enviar Feedback',
      required: 'Requerido',
      optional: 'Opcional',
      step: 'Paso',
      of: 'de',
      selectBadge: 'Seleccionar Insignia',
      selectNode: 'Seleccionar Nodo de Esquema',
      selectDestination: 'Seleccionar Destino',
      ratingScale: 'Escala de Calificación (1-5)'
    }
  };

  const text = t[language];

  const steps = [
    { id: 'identity', title: text.investorIdentity, icon: User },
    { id: 'clarity', title: text.coachingClarity, icon: TrendingUp },
    { id: 'badges', title: text.badgeResonance, icon: Trophy },
    { id: 'schema', title: text.schemaConviction, icon: GitBranch },
    { id: 'replay', title: text.replayFeedback, icon: ExternalLink },
    { id: 'submission', title: text.feedbackSubmission, icon: Send }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const badgeOptions = [
    '🧩 Trust Velocity Master',
    '🌐 Dual-Language Navigator',
    '🎯 Demo Precision Architect',
    '⚡ Pitch Master',
    '🎭 Cultural Intelligence Master'
  ];

  const schemaNodes = [
    'finance.trust-velocity',
    'badge.dual-language',
    'demo.pitch-alpha',
    'culture.force-multiplier',
    'law.assumed-right'
  ];

  const routingDestinations = [
    'Founder Coaching Console',
    'Remix Composer',
    'Badge Logic Editor',
    'Schema Replay Studio',
    'Investor Portal'
  ];

  const RatingStars = ({ rating, onRatingChange, disabled = false }: { 
    rating: number; 
    onRatingChange: (rating: number) => void;
    disabled?: boolean;
  }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={disabled}
          onClick={() => onRatingChange(star)}
          className={`w-8 h-8 transition-colors ${
            disabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-110'
          }`}
        >
          <Star 
            className={`w-full h-full ${
              star <= rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300 dark:text-gray-600'
            }`} 
          />
        </button>
      ))}
    </div>
  );

  const updateFeedbackData = (section: keyof FeedbackData, data: any) => {
    setFeedbackData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleNext = () => {
    if (!isLastStep) {
      const nextStep = steps[currentStepIndex + 1];
      setCurrentStep(nextStep.id as any);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      const prevStep = steps[currentStepIndex - 1];
      setCurrentStep(prevStep.id as any);
    }
  };

  const handleSubmit = () => {
    const completeData = {
      ...feedbackData,
      timestamp: new Date().toISOString(),
      sessionId: `feedback-${Date.now()}`,
      investorProfile: selectedInvestor,
      completed: true
    };
    
    onFeedbackSubmit?.(completeData);
    console.log('Feedback submitted:', completeData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'identity':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">{text.investorType}</label>
                <Select 
                  value={feedbackData.investorIdentity.type}
                  onValueChange={(value) => updateFeedbackData('investorIdentity', { type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LatAm VC">🌎 LatAm VC</SelectItem>
                    <SelectItem value="US Angel">👼 US Angel</SelectItem>
                    <SelectItem value="Global Fund">🌍 Global Fund</SelectItem>
                    <SelectItem value="Strategic Partner">🤝 Strategic Partner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">{text.remixArc}</label>
                <Select 
                  value={feedbackData.investorIdentity.remixArc}
                  onValueChange={(value) => updateFeedbackData('investorIdentity', { remixArc: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Trust Velocity Remix">⚡ Trust Velocity Remix</SelectItem>
                    <SelectItem value="Dual-Language Navigator Remix">🌐 Dual-Language Navigator Remix</SelectItem>
                    <SelectItem value="Demo Precision Remix">🎯 Demo Precision Remix</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">{text.languageToggle}</label>
                <Select 
                  value={feedbackData.investorIdentity.language}
                  onValueChange={(value) => updateFeedbackData('investorIdentity', { language: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EN">🇺🇸 EN</SelectItem>
                    <SelectItem value="ES">🇪🇸 ES</SelectItem>
                    <SelectItem value="Dual-language">🌐 Dual-language</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 'clarity':
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-3 block">{text.clarityQuestion} <span className="text-red-400">*</span></label>
              <div className="flex items-center gap-4">
                <RatingStars 
                  rating={feedbackData.coachingClarity.rating}
                  onRatingChange={(rating) => updateFeedbackData('coachingClarity', { rating })}
                />
                <span className="text-sm text-muted-foreground">
                  {feedbackData.coachingClarity.rating > 0 && `${feedbackData.coachingClarity.rating}/5`}
                </span>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.clarityComment} <span className="text-muted-foreground">({text.optional})</span></label>
              <Textarea
                placeholder={text.clarityComment}
                value={feedbackData.coachingClarity.comment}
                onChange={(e) => updateFeedbackData('coachingClarity', { comment: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        );

      case 'badges':
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">{text.selectBadge} <span className="text-red-400">*</span></label>
              <Select 
                value={feedbackData.badgeResonance.selectedBadge}
                onValueChange={(value) => updateFeedbackData('badgeResonance', { selectedBadge: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={text.selectBadge} />
                </SelectTrigger>
                <SelectContent>
                  {badgeOptions.map((badge) => (
                    <SelectItem key={badge} value={badge}>
                      {badge}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-3 block">{text.badgeQuestion} <span className="text-red-400">*</span></label>
              <RatingStars 
                rating={feedbackData.badgeResonance.rating}
                onRatingChange={(rating) => updateFeedbackData('badgeResonance', { rating })}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.badgeComment} <span className="text-muted-foreground">({text.optional})</span></label>
              <Textarea
                placeholder={text.badgeComment}
                value={feedbackData.badgeResonance.comment}
                onChange={(e) => updateFeedbackData('badgeResonance', { comment: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        );

      case 'schema':
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">{text.selectNode} <span className="text-red-400">*</span></label>
              <Select 
                value={feedbackData.schemaConviction.selectedNode}
                onValueChange={(value) => updateFeedbackData('schemaConviction', { selectedNode: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={text.selectNode} />
                </SelectTrigger>
                <SelectContent>
                  {schemaNodes.map((node) => (
                    <SelectItem key={node} value={node}>
                      <div className="font-mono text-sm">{node}</div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-3 block">{text.schemaQuestion} <span className="text-red-400">*</span></label>
              <RatingStars 
                rating={feedbackData.schemaConviction.rating}
                onRatingChange={(rating) => updateFeedbackData('schemaConviction', { rating })}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.schemaComment} <span className="text-muted-foreground">({text.optional})</span></label>
              <Textarea
                placeholder={text.schemaComment}
                value={feedbackData.schemaConviction.comment}
                onChange={(e) => updateFeedbackData('schemaConviction', { comment: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        );

      case 'replay':
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Replay Link</span>
              </div>
              <a 
                href="/replay?id=latam-gtm-investor-remix" 
                className="text-primary hover:underline text-sm font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                /replay?id=latam-gtm-investor-remix
              </a>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.replayComment} <span className="text-muted-foreground">({text.optional})</span></label>
              <Textarea
                placeholder={text.replayComment}
                value={feedbackData.replayFeedback.comment}
                onChange={(e) => updateFeedbackData('replayFeedback', { comment: e.target.value })}
                rows={3}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">{text.replaySuggestions} <span className="text-muted-foreground">({text.optional})</span></label>
              <Textarea
                placeholder={text.replaySuggestions}
                value={feedbackData.replayFeedback.suggestions}
                onChange={(e) => updateFeedbackData('replayFeedback', { suggestions: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        );

      case 'submission':
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">{text.routingOptions}</label>
              <Select 
                value={feedbackData.routing.destination}
                onValueChange={(value) => updateFeedbackData('routing', { destination: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {routingDestinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="exportToDashboard"
                checked={feedbackData.routing.exportToDashboard}
                onChange={(e) => updateFeedbackData('routing', { exportToDashboard: e.target.checked })}
                className="rounded border-border"
              />
              <label htmlFor="exportToDashboard" className="text-sm">
                {text.exportToDashboard}
              </label>
            </div>
            
            {/* Summary */}
            <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
              <h4 className="font-medium">Feedback Summary</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Clarity Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>{feedbackData.coachingClarity.rating}/5</span>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Badge Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>{feedbackData.badgeResonance.rating}/5</span>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Schema Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>{feedbackData.schemaConviction.rating}/5</span>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Comments:</span>
                  <span>
                    {[
                      feedbackData.coachingClarity.comment,
                      feedbackData.badgeResonance.comment,
                      feedbackData.schemaConviction.comment,
                      feedbackData.replayFeedback.comment,
                      feedbackData.replayFeedback.suggestions
                    ].filter(Boolean).length} provided
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Progress Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{text.investorFeedback}</h2>
          <Badge variant="outline">
            {text.step} {currentStepIndex + 1} {text.of} {steps.length}
          </Badge>
        </div>
        
        {/* Progress Steps */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            
            return (
              <div key={step.id} className="flex items-center gap-2 flex-shrink-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : isCompleted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-muted text-muted-foreground'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <StepIcon className="w-4 h-4" />
                  )}
                </div>
                
                <span className={`text-sm font-medium ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-border mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Step Content */}
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {steps[currentStepIndex].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {currentStep === 'identity' && 'Configure your investor profile and remix context'}
              {currentStep === 'clarity' && 'Rate the clarity and effectiveness of the coaching delivery'}
              {currentStep === 'badges' && 'Evaluate the badge system and achievement resonance'}
              {currentStep === 'schema' && 'Assess the schema logic and trace conviction'}
              {currentStep === 'replay' && 'Provide feedback on the replay experience and suggestions'}
              {currentStep === 'submission' && 'Review your feedback and configure routing options'}
            </p>
          </div>
          
          {renderStepContent()}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={isFirstStep}
        >
          {text.previous}
        </Button>
        
        <div className="flex gap-2">
          {isLastStep ? (
            <Button onClick={handleSubmit}>
              <Send className="w-4 h-4 mr-2" />
              {text.submit}
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {text.next}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}