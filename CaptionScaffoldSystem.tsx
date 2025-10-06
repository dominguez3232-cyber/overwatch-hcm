/**
 * OVERWATCH³ Caption Scaffold System
 * Schema-traceable captions that match Figma naming convention
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Zap, Target, TrendingUp } from 'lucide-react';
import { 
  CaptionProps, 
  StakeholderType,
  STAKEHOLDER_COLORS,
  ANIMATION_PRESETS 
} from './FigmaScaffoldTypes';
import { 
  ComponentStyleGenerator, 
  FigmaComponentNaming, 
  SchemaTracer 
} from './FigmaComponentFactory';

// Base Caption Component
export const CaptionBlock: React.FC<CaptionProps> = ({
  stakeholder,
  metric,
  content,
  language,
  position = 'bottom',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  // Generate naming convention
  const naming = FigmaComponentNaming.generate('caption', stakeholder, undefined, metric);
  const schemaTrace = SchemaTracer.generateWithPath(stakeholder, 'HCM', metric, 'caption');
  
  // Get stakeholder colors
  const colors = STAKEHOLDER_COLORS[stakeholder];
  
  // Get caption classes
  const captionClasses = ComponentStyleGenerator.getCaptionClasses(stakeholder, position);
  
  // Handle mouse events with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 150);
  };
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Element */}
      <div 
        className="inline-flex items-center gap-1 px-2 py-1 rounded cursor-help transition-colors"
        style={{ 
          backgroundColor: isHovered ? `${colors.primary}10` : 'transparent',
          borderColor: isHovered ? `${colors.primary}30` : 'transparent'
        }}
        data-figma-name={naming.figmaName}
        data-schema-trace={schemaTrace}
      >
        <Info className="w-3 h-3 opacity-60" style={{ color: colors.primary }} />
        <span className="text-xs font-medium" style={{ color: colors.primary }}>
          {metric}
        </span>
      </div>
      
      {/* Caption Tooltip */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`${captionClasses} ${className}`}
            style={{
              '--stakeholder-primary': colors.primary,
              '--stakeholder-light': colors.light,
            } as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {/* Arrow */}
            <div 
              className={`
                absolute w-2 h-2 bg-card border rotate-45
                ${position === 'top' ? 'bottom-[-5px] left-1/2 transform -translate-x-1/2 border-t-0 border-l-0' : ''}
                ${position === 'bottom' ? 'top-[-5px] left-1/2 transform -translate-x-1/2 border-b-0 border-r-0' : ''}
                ${position === 'left' ? 'right-[-5px] top-1/2 transform -translate-y-1/2 border-l-0 border-b-0' : ''}
                ${position === 'right' ? 'left-[-5px] top-1/2 transform -translate-y-1/2 border-r-0 border-t-0' : ''}
              `}
              style={{ borderColor: 'var(--border)' }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-foreground leading-relaxed">
                {content}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stakeholder}
                </span>
                <span className="text-xs font-mono text-muted-foreground opacity-70">
                  caption
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Specialized Caption Components for each Stakeholder
export const CEOCaption: React.FC<Omit<CaptionProps, 'stakeholder'>> = (props) => (
  <CaptionBlock {...props} stakeholder="CEO" />
);

export const CFOCaption: React.FC<Omit<CaptionProps, 'stakeholder'>> = (props) => (
  <CaptionBlock {...props} stakeholder="CFO" />
);

export const CHROCaption: React.FC<Omit<CaptionProps, 'stakeholder'>> = (props) => (
  <CaptionBlock {...props} stakeholder="CHRO" />
);

export const COOCaption: React.FC<Omit<CaptionProps, 'stakeholder'>> = (props) => (
  <CaptionBlock {...props} stakeholder="COO" />
);

export const ProofEngineCaption: React.FC<Omit<CaptionProps, 'stakeholder'>> = (props) => (
  <CaptionBlock {...props} stakeholder="PROOF_ENGINE" />
);

// Caption Group Component for displaying multiple related captions
interface CaptionGroupProps {
  stakeholder: StakeholderType;
  captions: Array<{
    metric: string;
    content: string;
    icon?: React.ReactNode;
  }>;
  language: 'en' | 'es';
  layout?: 'horizontal' | 'vertical' | 'grid';
  className?: string;
}

export const CaptionGroup: React.FC<CaptionGroupProps> = ({
  stakeholder,
  captions,
  language,
  layout = 'horizontal',
  className = ''
}) => {
  const colors = STAKEHOLDER_COLORS[stakeholder];
  
  const layoutClasses = {
    horizontal: 'flex flex-wrap items-center gap-2',
    vertical: 'flex flex-col gap-2',
    grid: 'grid grid-cols-2 md:grid-cols-3 gap-2'
  };
  
  return (
    <div 
      className={`${layoutClasses[layout]} ${className}`}
      style={{
        '--stakeholder-primary': colors.primary,
        '--stakeholder-secondary': colors.secondary,
      } as React.CSSProperties}
    >
      {captions.map((caption, index) => (
        <motion.div
          key={`${stakeholder}-${caption.metric}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: index * 0.1 }
          }}
        >
          <CaptionBlock
            stakeholder={stakeholder}
            metric={caption.metric}
            content={caption.content}
            language={language}
            position="bottom"
          />
        </motion.div>
      ))}
    </div>
  );
};

// Smart Caption Component with contextual positioning
interface SmartCaptionProps extends Omit<CaptionProps, 'position'> {
  triggerRef?: React.RefObject<HTMLElement>;
  autoPosition?: boolean;
}

export const SmartCaption: React.FC<SmartCaptionProps> = ({
  triggerRef,
  autoPosition = true,
  ...props
}) => {
  const [position, setPosition] = useState<CaptionProps['position']>('bottom');
  
  useEffect(() => {
    if (!autoPosition || !triggerRef?.current) return;
    
    const element = triggerRef.current;
    const rect = element.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    // Determine optimal position based on available space
    let optimalPosition: CaptionProps['position'] = 'bottom';
    
    if (rect.bottom + 100 > viewport.height && rect.top > 100) {
      optimalPosition = 'top';
    } else if (rect.right + 200 > viewport.width && rect.left > 200) {
      optimalPosition = 'left';
    } else if (rect.left < 200 && rect.right + 200 < viewport.width) {
      optimalPosition = 'right';
    }
    
    setPosition(optimalPosition);
  }, [autoPosition, triggerRef]);
  
  return <CaptionBlock {...props} position={position} />;
};

// Caption with Rich Content
interface RichCaptionProps extends CaptionProps {
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'info' | 'success' | 'warning' | 'error';
}

export const RichCaption: React.FC<RichCaptionProps> = ({
  icon,
  action,
  variant = 'info',
  content,
  ...props
}) => {
  const variantStyles = {
    info: { icon: <Info className="w-4 h-4" />, color: 'blue' },
    success: { icon: <Target className="w-4 h-4" />, color: 'green' },
    warning: { icon: <Zap className="w-4 h-4" />, color: 'yellow' },
    error: { icon: <TrendingUp className="w-4 h-4" />, color: 'red' }
  };
  
  const variantStyle = variantStyles[variant];
  const colors = STAKEHOLDER_COLORS[props.stakeholder];
  
  const enhancedContent = (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div 
          className="flex-shrink-0 p-1 rounded"
          style={{ backgroundColor: `${colors.primary}20` }}
        >
          {icon || variantStyle.icon}
        </div>
        <div className="flex-1">
          <p className="text-foreground leading-relaxed">{content}</p>
        </div>
      </div>
      
      {action && (
        <div className="pt-2 border-t border-border/50">
          <button
            onClick={action.onClick}
            className="text-xs px-3 py-1 rounded transition-colors"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              color: colors.primary 
            }}
          >
            {action.label}
          </button>
        </div>
      )}
    </div>
  );
  
  return <CaptionBlock {...props} content={enhancedContent as any} />;
};

// Example caption content
export const EXAMPLE_CAPTIONS = {
  CEO: [
    {
      metric: 'Revenue Growth',
      content: 'Growth that scales with discipline builds sustainable competitive advantage.'
    },
    {
      metric: 'Market Position',
      content: 'Strategic positioning drives long-term value creation and investor confidence.'
    }
  ],
  CFO: [
    {
      metric: 'Forecast Accuracy',
      content: 'Confidence in every projection through disciplined variance tracking.'
    },
    {
      metric: 'Cash Flow',
      content: 'Predictable cash flow enables strategic investment and growth opportunities.'
    }
  ],
  CHRO: [
    {
      metric: 'Engagement Score',
      content: 'Engaged teams drive innovation, retention, and competitive performance.'
    },
    {
      metric: 'Retention Rate',
      content: 'High retention preserves institutional knowledge and reduces recruitment costs.'
    }
  ],
  COO: [
    {
      metric: 'Pipeline Conversion',
      content: 'Optimized conversion processes drive revenue predictability and scaling efficiency.'
    },
    {
      metric: 'Operational Efficiency',
      content: 'Streamlined operations enable sustainable growth and improved margins.'
    }
  ]
};