import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Lightbulb, Target, Code, Volume2, VolumeX } from 'lucide-react';
import { SchemaNode, STAKEHOLDER_COLORS, schemaToFigmaName, FigmaComponentWrapper } from './FigmaScaffoldSystem';

// Overlay component following Figma naming convention
// Pattern: overlay/{stakeholder}-{metric}
export interface OverlayContent {
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
}

export interface OverlayTriggers {
  hover?: {
    enabled: boolean;
    contentLevel: 'metricContext' | 'full';
  };
  click?: {
    enabled: boolean;
    contentLevel: 'full';
  };
  threshold?: {
    enabled: boolean;
    rule: string;
    alertStyle: 'info' | 'warning' | 'critical';
    autoActivate: boolean;
  };
  scripted?: {
    enabled: boolean;
    sequenceOrder: number;
    demoLabel: string;
  };
}

export interface OverlayProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  triggers: OverlayTriggers;
  content: OverlayContent;
  language: 'en' | 'es';
  isVisible?: boolean;
  onClose?: () => void;
  onInteraction?: (event: string, data: any) => void;
  position?: { x: number; y: number };
  className?: string;
}

// Generate the Figma component name for overlays
export function getOverlayFigmaName(stakeholder: string, metric: string): string {
  return schemaToFigmaName('overlay', stakeholder, metric);
}

// Overlay content section component
const OverlaySection: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  type: 'context' | 'strategic' | 'tactical' | 'schema';
}> = ({ icon, title, content, type }) => {
  const typeStyles = {
    context: 'border-blue-500/30 bg-blue-500/10',
    strategic: 'border-emerald-500/30 bg-emerald-500/10',
    tactical: 'border-orange-500/30 bg-orange-500/10',
    schema: 'border-purple-500/30 bg-purple-500/10'
  };

  return (
    <div className={`rounded-lg border p-3 ${typeStyles[type]}`}>
      <div className="flex items-start gap-2 mb-2">
        <div className="flex-shrink-0 mt-0.5">
          {icon}
        </div>
        <h4 className="font-medium text-sm">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {content}
      </p>
      {type === 'schema' && (
        <div className="mt-2 p-2 bg-muted rounded font-mono text-xs">
          <code>{content}</code>
        </div>
      )}
    </div>
  );
};

// Voice synthesis button component
const VoiceSynthesisButton: React.FC<{
  text: string;
  language: 'en' | 'es';
  className?: string;
}> = ({ text, language, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : 'es-ES';
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <button
      onClick={isPlaying ? handleStop : handleSpeak}
      className={`p-1 rounded hover:bg-secondary transition-colors ${className}`}
      title={language === 'en' ? 
        (isPlaying ? 'Stop narration' : 'Listen to content') :
        (isPlaying ? 'Detener narración' : 'Escuchar contenido')
      }
    >
      {isPlaying ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
};

// Main Overlay component
export const OverlayPanel: React.FC<OverlayProps> = ({
  stakeholder,
  metric,
  triggers,
  content,
  language,
  isVisible = false,
  onClose,
  onInteraction,
  position,
  className = ''
}) => {
  const figmaName = getOverlayFigmaName(stakeholder, metric);
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];
  const currentContent = content[language];

  // Handle interaction tracking
  const handleInteraction = (event: string, data: any = {}) => {
    onInteraction?.(event, {
      figmaName,
      stakeholder,
      metric,
      language,
      ...data
    });
  };

  // Auto-close after demo sequence
  useEffect(() => {
    if (isVisible && triggers.scripted?.enabled) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 8000); // 8 seconds for scripted overlays
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, triggers.scripted, onClose]);

  if (!isVisible) return null;

  return (
    <FigmaComponentWrapper figmaName={figmaName} className={className}>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose?.();
              handleInteraction('overlay_background_click');
            }
          }}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <motion.div
            className="bg-card rounded-lg border border-border shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              ...(position ? {
                position: 'absolute',
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)'
              } : {})
            }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4 border-b border-border"
              style={{ borderBottomColor: `${stakeholderColor}30` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: stakeholderColor }}
                  >
                    {stakeholder}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{metric}</h3>
                    <div className="text-xs text-muted-foreground">
                      {triggers.scripted?.enabled && (
                        <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full mr-2">
                          Demo Step {triggers.scripted.sequenceOrder}
                        </span>
                      )}
                      {language === 'en' ? 'Advisory Insight' : 'Perspectiva Asesora'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <VoiceSynthesisButton
                    text={`${currentContent.metricContext} ${currentContent.strategicGuidance} ${currentContent.tacticalTip}`}
                    language={language}
                  />
                  <button
                    onClick={() => {
                      onClose?.();
                      handleInteraction('overlay_close_click');
                    }}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
              {/* Metric Context */}
              <OverlaySection
                icon={<Info className="w-4 h-4 text-blue-500" />}
                title={language === 'en' ? 'Metric Context' : 'Contexto de Métrica'}
                content={currentContent.metricContext}
                type="context"
              />

              {/* Strategic Guidance */}
              <OverlaySection
                icon={<Target className="w-4 h-4 text-emerald-500" />}
                title={language === 'en' ? 'Strategic Guidance' : 'Guía Estratégica'}
                content={currentContent.strategicGuidance}
                type="strategic"
              />

              {/* Tactical Tip */}
              <OverlaySection
                icon={<Lightbulb className="w-4 h-4 text-orange-500" />}
                title={language === 'en' ? 'Tactical Tip' : 'Consejo Táctico'}
                content={currentContent.tacticalTip}
                type="tactical"
              />

              {/* Schema Trace */}
              <OverlaySection
                icon={<Code className="w-4 h-4 text-purple-500" />}
                title={language === 'en' ? 'Schema Integration' : 'Integración de Esquema'}
                content={currentContent.schemaTrace}
                type="schema"
              />

              {/* Demo sequence indicator */}
              {triggers.scripted?.enabled && (
                <div className="mt-6 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <motion.div
                      className="w-2 h-2 bg-purple-500 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span>{triggers.scripted.demoLabel}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-muted/50 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div>
                  <code className="bg-muted px-2 py-1 rounded">
                    {figmaName}
                  </code>
                </div>
                <div>
                  OVERWATCH³ Advisory Engine
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </FigmaComponentWrapper>
  );
};

// Overlay trigger system
export const OverlayTrigger: React.FC<{
  overlay: OverlayProps;
  children: React.ReactNode;
  className?: string;
}> = ({ overlay, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const showOverlay = (trigger: string) => {
    setIsVisible(true);
    overlay.onInteraction?.('overlay_triggered', { trigger });
  };

  const hideOverlay = () => {
    setIsVisible(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMouseEnter = () => {
    if (overlay.triggers.hover?.enabled) {
      const timeout = setTimeout(() => {
        showOverlay('hover');
      }, 500); // 500ms delay for hover
      setHoverTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (overlay.triggers.hover?.enabled) {
      hideOverlay();
    }
  };

  const handleClick = () => {
    if (overlay.triggers.click?.enabled) {
      showOverlay('click');
    }
  };

  return (
    <>
      <div
        className={`${className} ${overlay.triggers.hover?.enabled || overlay.triggers.click?.enabled ? 'cursor-pointer' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </div>
      
      <OverlayPanel
        {...overlay}
        isVisible={isVisible}
        onClose={hideOverlay}
      />
    </>
  );
};

// Demo component
export const OverlayDemo: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const sampleOverlays: OverlayProps[] = [
    {
      stakeholder: 'CFO',
      metric: 'Forecast Accuracy',
      triggers: {
        hover: { enabled: true, contentLevel: 'metricContext' },
        click: { enabled: true, contentLevel: 'full' },
        threshold: {
          enabled: true,
          rule: '< 80%',
          alertStyle: 'warning',
          autoActivate: true
        }
      },
      content: {
        en: {
          metricContext: 'Forecast Accuracy measures alignment between projected and actual financials.',
          strategicGuidance: 'High accuracy builds board confidence and budget discipline.',
          tacticalTip: 'Use rolling forecasts with schema-linked variance tracking.',
          schemaTrace: 'epm.forecast_accuracy.variance_tracking.enabled = true'
        },
        es: {
          metricContext: 'La precisión de pronóstico mide la alineación entre proyecciones y resultados reales.',
          strategicGuidance: 'Una alta precisión genera confianza en el presupuesto y en la junta directiva.',
          tacticalTip: 'Usa pronósticos continuos con seguimiento de variaciones basado en esquemas.',
          schemaTrace: 'epm.forecast_accuracy.variance_tracking.enabled = true'
        }
      },
      language
    },
    {
      stakeholder: 'CEO',
      metric: 'Revenue Growth',
      triggers: {
        click: { enabled: true, contentLevel: 'full' },
        scripted: { enabled: true, sequenceOrder: 1, demoLabel: 'Investor Walkthrough – CEO Segment' }
      },
      content: {
        en: {
          metricContext: 'Revenue growth is the CEO\'s north star metric for company trajectory.',
          strategicGuidance: 'Disciplined scaling builds investor trust and sustainable growth.',
          tacticalTip: 'Anchor growth to repeatable playbooks and proven customer acquisition channels.',
          schemaTrace: 'erp.revenue_growth.acquisition_channels.repeatability = true'
        },
        es: {
          metricContext: 'El crecimiento de ingresos es la métrica estrella del CEO para la trayectoria de la empresa.',
          strategicGuidance: 'Escalar con disciplina genera confianza en inversionistas y crecimiento sostenible.',
          tacticalTip: 'Ancla el crecimiento en manuales repetibles y canales probados de adquisición de clientes.',
          schemaTrace: 'erp.revenue_growth.acquisition_channels.repeatability = true'
        }
      },
      language
    }
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Interactive Overlay System Demo' : 'Demo Sistema de Overlays Interactivos'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Hover and click on metric cards to see contextual coaching'
            : 'Pasa el cursor y haz clic en las tarjetas métricas para ver coaching contextual'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleOverlays.map((overlay, index) => (
          <OverlayTrigger
            key={`${overlay.stakeholder}-${overlay.metric}-${index}`}
            overlay={overlay}
            className="transform transition-transform hover:scale-105"
          >
            <div 
              className="p-4 bg-card rounded-lg border border-border cursor-pointer"
              style={{ borderLeftColor: STAKEHOLDER_COLORS[overlay.stakeholder], borderLeftWidth: '4px' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span 
                  className="text-xs font-medium px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${STAKEHOLDER_COLORS[overlay.stakeholder]}20`,
                    color: STAKEHOLDER_COLORS[overlay.stakeholder] 
                  }}
                >
                  {overlay.stakeholder}
                </span>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg mb-1">{overlay.metric}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Hover or click for insights' : 'Pasa cursor o haz clic para insights'}
              </p>
            </div>
          </OverlayTrigger>
        ))}
      </div>

      {/* Figma naming examples */}
      <div className="bg-muted rounded-lg p-4">
        <h3 className="font-semibold mb-3">
          {language === 'en' ? 'Generated Figma Names:' : 'Nombres Figma Generados:'}
        </h3>
        <div className="space-y-1 font-mono text-sm">
          {sampleOverlays.map((overlay, index) => (
            <div key={index} className="text-blue-400">
              {getOverlayFigmaName(overlay.stakeholder, overlay.metric)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};