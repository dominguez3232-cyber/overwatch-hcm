/**
 * OVERWATCH³ Overlay Scaffold System
 * Schema-traceable overlays that match Figma naming convention
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Target, Lightbulb, Code } from 'lucide-react';
import { 
  OverlayProps, 
  BilingualContent,
  StakeholderType,
  STAKEHOLDER_COLORS,
  ANIMATION_PRESETS 
} from './FigmaScaffoldTypes';
import { 
  ComponentStyleGenerator, 
  FigmaComponentNaming, 
  SchemaTracer 
} from './FigmaComponentFactory';

// Base Overlay Component
export const OverlayPanel: React.FC<OverlayProps> = ({
  stakeholder,
  metric,
  content,
  isVisible,
  onClose,
  language,
  mode = 'click',
  className = ''
}) => {
  // Generate naming convention
  const naming = FigmaComponentNaming.generate('overlay', stakeholder, undefined, metric);
  const schemaTrace = SchemaTracer.generateWithPath(stakeholder, 'HCM', metric, 'overlay');
  
  // Get stakeholder colors
  const colors = STAKEHOLDER_COLORS[stakeholder];
  
  // Get current language content
  const currentContent = content[language];
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        onClose();
      }
    };
    
    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, onClose]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`${ComponentStyleGenerator.getOverlayClasses(stakeholder)} ${className}`}
          data-figma-name={naming.figmaName}
          data-schema-trace={schemaTrace}
          data-mode={mode}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          {...ANIMATION_PRESETS.overlay}
        >
          <motion.div
            className="bg-card rounded-xl border border-border shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={{
              initial: { opacity: 0, scale: 0.9, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 20 }
            }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4 border-b border-border relative"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}05)` 
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <span style={{ color: colors.primary }}>
                      {stakeholder === 'CEO' && '👑'}
                      {stakeholder === 'CFO' && '💰'}
                      {stakeholder === 'CHRO' && '👥'}
                      {stakeholder === 'COO' && '⚙️'}
                      {stakeholder === 'PROOF_ENGINE' && '🏆'}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {metric}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {stakeholder} {language === 'en' ? 'Coaching Overlay' : 'Superposición de Coaching'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  title={language === 'en' ? 'Close' : 'Cerrar'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div 
                className="absolute bottom-0 left-0 w-full h-1"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Metric Context */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Info className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    {language === 'en' ? 'Metric Context' : 'Contexto de Métrica'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentContent.metricContext}
                  </p>
                </div>
              </div>
              
              {/* Strategic Guidance */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    {language === 'en' ? 'Strategic Guidance' : 'Guía Estratégica'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentContent.strategicGuidance}
                  </p>
                </div>
              </div>
              
              {/* Tactical Tip */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    {language === 'en' ? 'Tactical Tip' : 'Consejo Táctico'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentContent.tacticalTip}
                  </p>
                </div>
              </div>
              
              {/* Schema Trace */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-muted-foreground" />
                  <h4 className="text-sm font-medium text-foreground">
                    {language === 'en' ? 'Schema Trace' : 'Traza de Esquema'}
                  </h4>
                </div>
                <code className="text-xs font-mono text-muted-foreground block">
                  {currentContent.schemaTrace}
                </code>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-muted/20 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {language === 'en' ? 'OVERWATCH³ Advisory Coaching' : 'Coaching Asesor OVERWATCH³'}
                </span>
                <span className="font-mono">
                  {naming.figmaName}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Specialized Overlay Components for each Stakeholder
export const CEOOverlay: React.FC<Omit<OverlayProps, 'stakeholder'>> = (props) => (
  <OverlayPanel {...props} stakeholder="CEO" />
);

export const CFOOverlay: React.FC<Omit<OverlayProps, 'stakeholder'>> = (props) => (
  <OverlayPanel {...props} stakeholder="CFO" />
);

export const CHROOverlay: React.FC<Omit<OverlayProps, 'stakeholder'>> = (props) => (
  <OverlayPanel {...props} stakeholder="CHRO" />
);

export const COOOverlay: React.FC<Omit<OverlayProps, 'stakeholder'>> = (props) => (
  <OverlayPanel {...props} stakeholder="COO" />
);

export const ProofEngineOverlay: React.FC<Omit<OverlayProps, 'stakeholder'>> = (props) => (
  <OverlayPanel {...props} stakeholder="PROOF_ENGINE" />
);

// Overlay Manager Hook
export interface OverlayManager {
  activeOverlay: string | null;
  showOverlay: (overlayId: string) => void;
  hideOverlay: () => void;
  isVisible: (overlayId: string) => boolean;
}

export const useOverlayManager = (): OverlayManager => {
  const [activeOverlay, setActiveOverlay] = React.useState<string | null>(null);
  
  const showOverlay = React.useCallback((overlayId: string) => {
    setActiveOverlay(overlayId);
  }, []);
  
  const hideOverlay = React.useCallback(() => {
    setActiveOverlay(null);
  }, []);
  
  const isVisible = React.useCallback((overlayId: string) => {
    return activeOverlay === overlayId;
  }, [activeOverlay]);
  
  return {
    activeOverlay,
    showOverlay,
    hideOverlay,
    isVisible
  };
};

// Example overlay content data
export const EXAMPLE_OVERLAY_CONTENT: Record<string, BilingualContent> = {
  'ceo-revenue-growth': {
    en: {
      metricContext: "Revenue growth is the CEO's north star metric for company scaling and investor confidence.",
      strategicGuidance: "Disciplined growth that maintains quality while scaling operations builds sustainable value.",
      tacticalTip: "Anchor growth initiatives to repeatable playbooks with clear ROI metrics and risk mitigation.",
      schemaTrace: "erp.revenue_growth.quarterly_target.enabled = true"
    },
    es: {
      metricContext: "El crecimiento de ingresos es la métrica estrella del CEO para escalado y confianza de inversionistas.",
      strategicGuidance: "Crecimiento disciplinado que mantiene calidad mientras escala operaciones construye valor sostenible.",
      tacticalTip: "Ancla iniciativas de crecimiento a manuales repetibles con métricas ROI claras y mitigación de riesgo.",
      schemaTrace: "erp.revenue_growth.quarterly_target.enabled = true"
    }
  },
  'cfo-forecast-accuracy': {
    en: {
      metricContext: "Forecast accuracy measures alignment between projected and actual financials, building board confidence.",
      strategicGuidance: "High accuracy enables better capital allocation and strategic decision-making under uncertainty.",
      tacticalTip: "Use rolling forecasts with schema-linked variance tracking for continuous improvement.",
      schemaTrace: "epm.forecast_accuracy.variance_tracking.enabled = true"
    },
    es: {
      metricContext: "La precisión de pronóstico mide alineación entre proyecciones y resultados, generando confianza del directorio.",
      strategicGuidance: "Alta precisión permite mejor asignación de capital y toma de decisiones estratégicas bajo incertidumbre.",
      tacticalTip: "Usa pronósticos continuos con seguimiento de variaciones ligado a esquemas para mejora continua.",
      schemaTrace: "epm.forecast_accuracy.variance_tracking.enabled = true"
    }
  },
  'chro-engagement-score': {
    en: {
      metricContext: "Employee engagement score reflects organizational health and predictive indicator of retention and performance.",
      strategicGuidance: "High engagement correlates with innovation, customer satisfaction, and competitive advantage.",
      tacticalTip: "Implement pulse surveys with action loops tied to managerial development programs.",
      schemaTrace: "hcm.engagement_score.pulse_surveys.action_loops = true"
    },
    es: {
      metricContext: "El puntaje de compromiso de empleados refleja salud organizacional e indicador predictivo de retención y rendimiento.",
      strategicGuidance: "Alto compromiso se correlaciona con innovación, satisfacción del cliente y ventaja competitiva.",
      tacticalTip: "Implementa encuestas de pulso con bucles de acción ligados a programas de desarrollo gerencial.",
      schemaTrace: "hcm.engagement_score.pulse_surveys.action_loops = true"
    }
  },
  'coo-pipeline-conversion': {
    en: {
      metricContext: "Pipeline conversion rate measures operational effectiveness in transforming leads into revenue.",
      strategicGuidance: "Optimized conversion drives revenue predictability and operational scaling efficiency.",
      tacticalTip: "Implement stage-gate reviews with automated nurturing sequences and performance dashboards.",
      schemaTrace: "crm.pipeline_conversion.stage_gates.automated_nurturing = true"
    },
    es: {
      metricContext: "La tasa de conversión de pipeline mide efectividad operacional en transformar prospectos en ingresos.",
      strategicGuidance: "Conversión optimizada impulsa predictibilidad de ingresos y eficiencia de escalado operacional.",
      tacticalTip: "Implementa revisiones de etapas con secuencias de nutrición automatizadas y tableros de rendimiento.",
      schemaTrace: "crm.pipeline_conversion.stage_gates.automated_nurturing = true"
    }
  }
};