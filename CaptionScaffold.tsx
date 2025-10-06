import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Globe, Zap, Target } from 'lucide-react';
import { SchemaNode, STAKEHOLDER_COLORS, schemaToFigmaName, FigmaComponentWrapper } from './FigmaScaffoldSystem';

// Caption component following Figma naming convention
// Pattern: caption/{stakeholder}-{metric}
export interface CaptionContent {
  en: string;
  es: string;
}

export interface CaptionProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  content: CaptionContent;
  language: 'en' | 'es';
  style?: 'minimal' | 'standard' | 'cinematic';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  duration?: number; // Auto-hide duration in milliseconds
  interactive?: boolean;
  onComplete?: () => void;
  className?: string;
}

// Generate the Figma component name for captions
export function getCaptionFigmaName(stakeholder: string, metric: string): string {
  return schemaToFigmaName('caption', stakeholder, metric);
}

// Caption animation variants
const captionVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

// Position classes mapping
const positionClasses = {
  top: 'top-4 left-1/2 transform -translate-x-1/2',
  bottom: 'bottom-4 left-1/2 transform -translate-x-1/2',
  left: 'left-4 top-1/2 transform -translate-y-1/2',
  right: 'right-4 top-1/2 transform -translate-y-1/2',
  center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
};

// Style configurations
const styleConfigs = {
  minimal: {
    background: 'bg-card/95 backdrop-blur-sm',
    border: 'border border-border/50',
    padding: 'px-3 py-2',
    text: 'text-sm',
    rounded: 'rounded-lg'
  },
  standard: {
    background: 'bg-card/95 backdrop-blur-md',
    border: 'border border-border shadow-lg',
    padding: 'px-4 py-3',
    text: 'text-base',
    rounded: 'rounded-lg'
  },
  cinematic: {
    background: 'bg-black/90 backdrop-blur-lg',
    border: 'border border-primary/30 shadow-2xl',
    padding: 'px-6 py-4',
    text: 'text-lg',
    rounded: 'rounded-xl'
  }
};

// Main Caption component
export const Caption: React.FC<CaptionProps> = ({
  stakeholder,
  metric,
  content,
  language,
  style = 'standard',
  position = 'bottom',
  duration = 5000,
  interactive = false,
  onComplete,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const figmaName = getCaptionFigmaName(stakeholder, metric);
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];
  const currentContent = content[language];
  const config = styleConfigs[style];

  // Auto-hide functionality
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onComplete?.(), 200);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onComplete]);

  // Handle manual dismissal
  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => onComplete?.(), 200);
  };

  return (
    <FigmaComponentWrapper figmaName={figmaName}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`fixed z-50 ${positionClasses[position]} ${className}`}
            variants={captionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`
                ${config.background} ${config.border} ${config.padding} ${config.rounded}
                max-w-sm ${interactive ? 'cursor-pointer hover:shadow-xl' : ''}
                transition-all duration-200
              `}
              style={{
                borderLeftColor: stakeholderColor,
                borderLeftWidth: style === 'cinematic' ? '4px' : '3px'
              }}
              onClick={interactive ? handleDismiss : undefined}
            >
              {/* Header for cinematic style */}
              {style === 'cinematic' && (
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/30">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: stakeholderColor }}
                  >
                    {stakeholder}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="flex items-start gap-3">
                {style !== 'minimal' && (
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare 
                      className="w-4 h-4" 
                      style={{ color: stakeholderColor }} 
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className={`${config.text} leading-relaxed`}>
                    {currentContent}
                  </p>
                  
                  {/* Footer for standard and cinematic styles */}
                  {style !== 'minimal' && (
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: stakeholderColor }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {stakeholder} Advisory
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Globe className="w-3 h-3" />
                        <span>{language.toUpperCase()}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive hint */}
              {interactive && (
                <div className="absolute -top-2 -right-2">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-xs text-primary-foreground">×</span>
                  </motion.div>
                </div>
              )}

              {/* Progress bar for timed captions */}
              {duration > 0 && style === 'cinematic' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30 rounded-b-xl overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: stakeholderColor }}
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: duration / 1000, ease: 'linear' }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FigmaComponentWrapper>
  );
};

// Caption sequence manager for demo flows
export interface CaptionSequence {
  captions: (CaptionProps & { delay?: number })[];
  onComplete?: () => void;
}

export const CaptionSequencePlayer: React.FC<{
  sequence: CaptionSequence;
  language: 'en' | 'es';
  isPlaying: boolean;
}> = ({ sequence, language, isPlaying }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isPlaying && !isActive) {
      setIsActive(true);
      setCurrentIndex(0);
    } else if (!isPlaying) {
      setIsActive(false);
      setCurrentIndex(0);
    }
  }, [isPlaying, isActive]);

  const handleCaptionComplete = () => {
    if (currentIndex < sequence.captions.length - 1) {
      const nextCaption = sequence.captions[currentIndex + 1];
      const delay = nextCaption.delay || 1000;
      
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else {
      setIsActive(false);
      sequence.onComplete?.();
    }
  };

  if (!isActive || currentIndex >= sequence.captions.length) {
    return null;
  }

  const currentCaption = sequence.captions[currentIndex];

  return (
    <Caption
      {...currentCaption}
      language={language}
      onComplete={handleCaptionComplete}
    />
  );
};

// Caption library for common scenarios
export const getCaptionLibrary = (language: 'en' | 'es') => ({
  ceo: {
    'revenue-growth': {
      en: 'Growth that scales with discipline.',
      es: 'Crecimiento que escala con disciplina.'
    },
    'market-expansion': {
      en: 'Strategic expansion into new territories.',
      es: 'Expansión estratégica a nuevos territorios.'
    }
  },
  cfo: {
    'forecast-accuracy': {
      en: 'Confidence in every projection.',
      es: 'Confianza en cada proyección.'
    },
    'budget-variance': {
      en: 'Budget discipline drives predictable growth.',
      es: 'La disciplina presupuestaria impulsa crecimiento predecible.'
    }
  },
  chro: {
    'engagement-score': {
      en: 'Culture as a competitive advantage.',
      es: 'Cultura como ventaja competitiva.'
    },
    'retention-rate': {
      en: 'Retaining top talent drives innovation.',
      es: 'Retener el mejor talento impulsa la innovación.'
    }
  },
  coo: {
    'pipeline-conversion': {
      en: 'Operational excellence in every process.',
      es: 'Excelencia operacional en cada proceso.'
    },
    'efficiency-metrics': {
      en: 'Streamlined operations, amplified results.',
      es: 'Operaciones optimizadas, resultados amplificados.'
    }
  }
});

// Demo component
export const CaptionDemo: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [sequenceActive, setSequenceActive] = useState(false);

  const sampleCaptions: CaptionProps[] = [
    {
      stakeholder: 'CEO',
      metric: 'Revenue Growth',
      content: {
        en: 'Growth that scales with discipline.',
        es: 'Crecimiento que escala con disciplina.'
      },
      language,
      style: 'cinematic',
      position: 'center',
      duration: 4000
    },
    {
      stakeholder: 'CFO',
      metric: 'Forecast Accuracy',
      content: {
        en: 'Confidence in every projection.',
        es: 'Confianza en cada proyección.'
      },
      language,
      style: 'standard',
      position: 'bottom',
      duration: 3000
    },
    {
      stakeholder: 'CHRO',
      metric: 'Engagement Score',
      content: {
        en: 'Culture as a competitive advantage.',
        es: 'Cultura como ventaja competitiva.'
      },
      language,
      style: 'minimal',
      position: 'top',
      duration: 2000
    }
  ];

  const demoSequence: CaptionSequence = {
    captions: [
      {
        ...sampleCaptions[0],
        delay: 0
      },
      {
        ...sampleCaptions[1],
        delay: 1500
      },
      {
        ...sampleCaptions[2],
        delay: 1500
      }
    ],
    onComplete: () => setSequenceActive(false)
  };

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Caption System Demo' : 'Demo Sistema de Subtítulos'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Cinematic captions for storytelling and user guidance'
            : 'Subtítulos cinemáticos para narrativa y guía del usuario'
          }
        </p>
      </div>

      {/* Individual caption triggers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleCaptions.map((caption, index) => (
          <button
            key={`${caption.stakeholder}-${caption.metric}-${index}`}
            onClick={() => setActiveDemo(`caption-${index}`)}
            className="p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all"
            style={{ borderLeftColor: STAKEHOLDER_COLORS[caption.stakeholder], borderLeftWidth: '3px' }}
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="text-xs font-medium px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${STAKEHOLDER_COLORS[caption.stakeholder]}20`,
                    color: STAKEHOLDER_COLORS[caption.stakeholder] 
                  }}
                >
                  {caption.stakeholder}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {caption.style}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-1">{caption.metric}</h3>
              <p className="text-xs text-muted-foreground">
                {caption.content[language]}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Sequence player controls */}
      <div className="text-center">
        <button
          onClick={() => setSequenceActive(true)}
          disabled={sequenceActive}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {language === 'en' ? 'Play Caption Sequence' : 'Reproducir Secuencia de Subtítulos'}
        </button>
      </div>

      {/* Active captions */}
      {sampleCaptions.map((caption, index) => 
        activeDemo === `caption-${index}` && (
          <Caption
            key={`active-${index}`}
            {...caption}
            onComplete={() => setActiveDemo(null)}
          />
        )
      )}

      {/* Sequence player */}
      <CaptionSequencePlayer
        sequence={demoSequence}
        language={language}
        isPlaying={sequenceActive}
      />

      {/* Figma naming examples */}
      <div className="bg-muted rounded-lg p-4">
        <h3 className="font-semibold mb-3">
          {language === 'en' ? 'Generated Figma Names:' : 'Nombres Figma Generados:'}
        </h3>
        <div className="space-y-1 font-mono text-sm">
          {sampleCaptions.map((caption, index) => (
            <div key={index} className="text-orange-400">
              {getCaptionFigmaName(caption.stakeholder, caption.metric)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};