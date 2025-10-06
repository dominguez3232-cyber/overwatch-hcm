import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Overlay, Caption, createFigmaComponent } from './FigmaComponentScaffoldSystem';

// Enhanced Demo Sequence with Figma Component Integration
interface DemoStep {
  id: string;
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  module: 'HCM' | 'ERP' | 'EPM' | 'CRM';
  duration: number; // seconds
  content: {
    en: {
      metricContext: string;
      strategicGuidance: string;
      tacticalTip: string;
      schemaTrace: string;
    };
    es: {
      metricContext: string;
      strategicGuidance: string;
      tacticalTip: string;
      schemaTrace: string;
    };
  };
  captions: {
    en: string;
    es: string;
  };
  soundEffect?: 'overlayPing' | 'thresholdAlert' | 'proofPulse';
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn' | 'cinematic';
}

// Comprehensive demo sequence for investor/stakeholder presentations
const demoSequence: DemoStep[] = [
  {
    id: 'ceo_revenue_growth',
    stakeholder: 'CEO',
    metric: 'Revenue Growth',
    module: 'ERP',
    duration: 8,
    content: {
      en: {
        metricContext: "Revenue growth is the CEO's north star metric, indicating market traction and business momentum.",
        strategicGuidance: "Disciplined scaling builds investor trust and sustainable competitive advantage.",
        tacticalTip: "Anchor growth strategies to repeatable playbooks with predictable unit economics.",
        schemaTrace: "erp.revenue_growth.quarterly_tracking.momentum_analysis = true"
      },
      es: {
        metricContext: "El crecimiento de ingresos es la métrica estrella del CEO, indicando tracción de mercado e impulso empresarial.",
        strategicGuidance: "Escalar con disciplina genera confianza en inversionistas y ventaja competitiva sostenible.",
        tacticalTip: "Ancla estrategias de crecimiento en manuales repetibles con economía unitaria predecible.",
        schemaTrace: "erp.revenue_growth.quarterly_tracking.momentum_analysis = true"
      }
    },
    captions: {
      en: "Growth that scales with discipline and precision.",
      es: "Crecimiento que escala con disciplina y precisión."
    },
    soundEffect: 'proofPulse',
    animation: 'cinematic'
  },
  {
    id: 'cfo_forecast_accuracy',
    stakeholder: 'CFO',
    metric: 'Forecast Accuracy',
    module: 'EPM',
    duration: 7,
    content: {
      en: {
        metricContext: "Forecast accuracy builds board confidence and enables data-driven budget allocation decisions.",
        strategicGuidance: "Variance tracking drives budget discipline and improves strategic planning precision.",
        tacticalTip: "Implement rolling forecasts with schema-linked variance analysis and automated alerts.",
        schemaTrace: "epm.forecast_accuracy.variance_tracking.rolling_forecast = true"
      },
      es: {
        metricContext: "La precisión de pronóstico genera confianza en la junta y permite decisiones de presupuesto basadas en datos.",
        strategicGuidance: "El seguimiento de variaciones impulsa disciplina presupuestaria y mejora precisión de planeación estratégica.",
        tacticalTip: "Implementa pronósticos continuos con análisis de variaciones ligado a esquemas y alertas automatizadas.",
        schemaTrace: "epm.forecast_accuracy.variance_tracking.rolling_forecast = true"
      }
    },
    captions: {
      en: "Confidence in every projection and strategic decision.",
      es: "Confianza en cada proyección y decisión estratégica."
    },
    soundEffect: 'overlayPing',
    animation: 'fadeIn'
  },
  {
    id: 'chro_engagement_score',
    stakeholder: 'CHRO',
    metric: 'Engagement Score',
    module: 'HCM',
    duration: 9,
    content: {
      en: {
        metricContext: "Employee engagement directly correlates with productivity, retention, and cultural strength.",
        strategicGuidance: "Culture becomes the 'queen piece' that amplifies all business functions and drives performance.",
        tacticalTip: "Use real-time pulse surveys with AI-powered sentiment analysis and predictive retention modeling.",
        schemaTrace: "hcm.engagement_score.pulse_survey.ai_sentiment_analysis = true"
      },
      es: {
        metricContext: "El compromiso de empleados se correlaciona directamente con productividad, retención y fortaleza cultural.",
        strategicGuidance: "La cultura se convierte en la 'pieza reina' que amplifica todas las funciones empresariales e impulsa rendimiento.",
        tacticalTip: "Usa encuestas de pulso en tiempo real con análisis de sentimiento por IA y modelado predictivo de retención.",
        schemaTrace: "hcm.engagement_score.pulse_survey.ai_sentiment_analysis = true"
      }
    },
    captions: {
      en: "Culture as the strategic force multiplier.",
      es: "Cultura como el multiplicador de fuerza estratégica."
    },
    soundEffect: 'overlayPing',
    animation: 'slideUp'
  },
  {
    id: 'coo_pipeline_conversion',
    stakeholder: 'COO',
    metric: 'Pipeline Conversion',
    module: 'CRM',
    duration: 6,
    content: {
      en: {
        metricContext: "Pipeline conversion efficiency determines operational excellence and revenue predictability.",
        strategicGuidance: "Systematic process optimization creates repeatable success patterns and scalable growth.",
        tacticalTip: "Implement stage-gate methodology with automated workflow triggers and conversion analytics.",
        schemaTrace: "crm.pipeline_conversion.stage_gate.automated_workflows = true"
      },
      es: {
        metricContext: "La eficiencia de conversión del pipeline determina excelencia operacional y predictibilidad de ingresos.",
        strategicGuidance: "La optimización sistemática de procesos crea patrones de éxito repetibles y crecimiento escalable.",
        tacticalTip: "Implementa metodología de compuertas de etapa con disparadores de flujo automatizado y analítica de conversión.",
        schemaTrace: "crm.pipeline_conversion.stage_gate.automated_workflows = true"
      }
    },
    captions: {
      en: "Operational excellence through systematic optimization.",
      es: "Excelencia operacional a través de optimización sistemática."
    },
    soundEffect: 'overlayPing',
    animation: 'scaleIn'
  },
  {
    id: 'proof_roi_multiplier',
    stakeholder: 'CEO',
    metric: 'ROI Multiplier',
    module: 'EPM',
    duration: 10,
    content: {
      en: {
        metricContext: "ROI multiplier demonstrates the exponential value creation of strategic HR transformation.",
        strategicGuidance: "Every founder-led deployment becomes a repeatable success story with measurable impact.",
        tacticalTip: "Track compound effects across all business functions with integrated analytics dashboard.",
        schemaTrace: "proof_engine.roi_multiplier.compound_effects.integrated_analytics = true"
      },
      es: {
        metricContext: "El multiplicador de ROI demuestra la creación de valor exponencial de transformación estratégica de RH.",
        strategicGuidance: "Cada implementación liderada por fundador se convierte en historia de éxito repetible con impacto medible.",
        tacticalTip: "Rastrea efectos compuestos en todas las funciones empresariales con panel de analítica integrada.",
        schemaTrace: "proof_engine.roi_multiplier.compound_effects.integrated_analytics = true"
      }
    },
    captions: {
      en: "Transforming HR from cost center to profit multiplier.",
      es: "Transformando RH de centro de costos a multiplicador de ganancias."
    },
    soundEffect: 'proofPulse',
    animation: 'cinematic'
  }
];

interface DemoSequenceControllerProps {
  language: 'en' | 'es';
  autoPlay?: boolean;
  onSequenceComplete?: () => void;
  showProgress?: boolean;
}

export const DemoSequenceControllerEnhanced: React.FC<DemoSequenceControllerProps> = ({
  language,
  autoPlay = false,
  onSequenceComplete,
  showProgress = true
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<DemoStep | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  // Sound effect simulation (would integrate with actual sound system)
  const playSound = (effect?: string) => {
    if (effect) {
      console.log(`Playing sound: ${effect}`);
      // In real implementation: sounds[effect]?.play();
    }
  };

  // Start demo sequence
  const startDemo = () => {
    if (currentStep >= demoSequence.length) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
    setIsPaused(false);
    playNextStep();
  };

  // Play next step in sequence
  const playNextStep = () => {
    if (currentStep < demoSequence.length) {
      const step = demoSequence[currentStep];
      setActiveOverlay(step);
      setTimeRemaining(step.duration);
      playSound(step.soundEffect);
      
      // Progress tracking
      let progressTime = 0;
      progressRef.current = setInterval(() => {
        progressTime += 0.1;
        const progressPercent = (progressTime / step.duration) * 100;
        setProgress(Math.min(progressPercent, 100));
        setTimeRemaining(Math.max(step.duration - progressTime, 0));
      }, 100);

      // Auto-advance after duration
      timerRef.current = setTimeout(() => {
        if (progressRef.current) clearInterval(progressRef.current);
        setActiveOverlay(null);
        setProgress(0);
        
        if (currentStep < demoSequence.length - 1) {
          setCurrentStep(prev => prev + 1);
          // Automatically continue if playing
          if (isPlaying && !isPaused) {
            setTimeout(() => playNextStep(), 1000); // 1 second pause between steps
          }
        } else {
          // Sequence complete
          setIsPlaying(false);
          setCurrentStep(0);
          onSequenceComplete?.();
        }
      }, step.duration * 1000);
    }
  };

  // Manual step navigation
  const goToStep = (stepIndex: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    setCurrentStep(stepIndex);
    setActiveOverlay(null);
    setProgress(0);
    
    if (isPlaying) {
      setTimeout(() => playNextStep(), 500);
    }
  };

  // Pause/Resume
  const togglePause = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      // Resume
      if (activeOverlay) {
        playNextStep();
      }
    } else {
      // Pause
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
  };

  // Stop demo
  const stopDemo = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setActiveOverlay(null);
    setCurrentStep(0);
    setProgress(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  // Auto-play effect
  useEffect(() => {
    if (autoPlay && !isPlaying) {
      startDemo();
    }
  }, [autoPlay]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Demo Controls */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">
              {language === 'en' ? 'Cinematic Demo Sequence' : 'Secuencia de Demo Cinematográfica'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' 
                ? 'Interactive walkthrough of OVERWATCH³ strategic insights'
                : 'Recorrido interactivo de insights estratégicos OVERWATCH³'
              }
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              {currentStep + 1} / {demoSequence.length}
            </Badge>
            {timeRemaining > 0 && (
              <Badge variant="secondary">
                {Math.ceil(timeRemaining)}s
              </Badge>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {showProgress && isPlaying && (
          <div className="mb-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                {activeOverlay?.stakeholder} - {activeOverlay?.metric}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex items-center gap-3">
          {!isPlaying ? (
            <Button onClick={startDemo} className="bg-green-600 hover:bg-green-700">
              {language === 'en' ? 'Start Demo' : 'Iniciar Demo'}
            </Button>
          ) : (
            <>
              <Button onClick={togglePause} variant="outline">
                {isPaused 
                  ? (language === 'en' ? 'Resume' : 'Reanudar')
                  : (language === 'en' ? 'Pause' : 'Pausar')
                }
              </Button>
              <Button onClick={stopDemo} variant="outline">
                {language === 'en' ? 'Stop' : 'Detener'}
              </Button>
            </>
          )}
          
          <div className="flex-1"></div>
          
          <Button
            onClick={() => goToStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            variant="ghost"
            size="sm"
          >
            ←
          </Button>
          <Button
            onClick={() => goToStep(Math.min(demoSequence.length - 1, currentStep + 1))}
            disabled={currentStep === demoSequence.length - 1}
            variant="ghost"
            size="sm"
          >
            →
          </Button>
        </div>
      </Card>

      {/* Step Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {demoSequence.map((step, index) => {
          const config = createFigmaComponent('metric-card', step.stakeholder, step.module, step.metric);
          const stakeholderColors = {
            CEO: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
            CFO: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
            CHRO: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
            COO: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
          };
          
          return (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`
                  cursor-pointer transition-all p-4
                  ${stakeholderColors[step.stakeholder]}
                  ${currentStep === index ? 'ring-2 ring-primary' : ''}
                  ${index <= currentStep ? 'opacity-100' : 'opacity-50'}
                `}
                onClick={() => goToStep(index)}
              >
                <div className="text-center space-y-2">
                  <Badge className="text-xs">
                    {step.stakeholder}
                  </Badge>
                  <div className="text-sm font-medium">
                    {step.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {step.duration}s
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Active Overlay */}
      {activeOverlay && (
        <Overlay
          config={createFigmaComponent('overlay', activeOverlay.stakeholder, activeOverlay.module, activeOverlay.metric)}
          isActive={true}
          content={activeOverlay.content[language]}
          language={language}
          onClose={() => {
            setActiveOverlay(null);
            if (isPlaying) {
              togglePause();
            }
          }}
        />
      )}

      {/* Caption Display */}
      {activeOverlay && (
        <Caption
          config={createFigmaComponent('caption', activeOverlay.stakeholder, undefined, activeOverlay.metric)}
          text={activeOverlay.captions[language]}
          language={language}
          className="text-center text-xl italic py-4"
        />
      )}
    </div>
  );
};

export default DemoSequenceControllerEnhanced;