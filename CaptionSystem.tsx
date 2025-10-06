import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Info, TrendingUp, AlertCircle, CheckCircle, Zap, Target } from 'lucide-react';
import { stakeholderColors } from './MetricCardSystem';

// Caption types
export type CaptionType = 'insight' | 'trend' | 'alert' | 'success' | 'action' | 'target';

// Caption position options
export type CaptionPosition = 'top' | 'bottom' | 'left' | 'right' | 'overlay';

// Base caption props interface
export interface CaptionProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  type?: CaptionType;
  text: string;
  value?: string | number;
  unit?: string;
  position?: CaptionPosition;
  showIcon?: boolean;
  showBadge?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'subtle' | 'prominent';
  className?: string;
}

// Caption type configurations
const captionTypeConfig = {
  insight: {
    icon: Info,
    bgClass: 'bg-blue-950/20',
    borderClass: 'border-blue-500/30',
    textClass: 'text-blue-400'
  },
  trend: {
    icon: TrendingUp,
    bgClass: 'bg-emerald-950/20',
    borderClass: 'border-emerald-500/30',
    textClass: 'text-emerald-400'
  },
  alert: {
    icon: AlertCircle,
    bgClass: 'bg-orange-950/20',
    borderClass: 'border-orange-500/30',
    textClass: 'text-orange-400'
  },
  success: {
    icon: CheckCircle,
    bgClass: 'bg-green-950/20',
    borderClass: 'border-green-500/30',
    textClass: 'text-green-400'
  },
  action: {
    icon: Zap,
    bgClass: 'bg-purple-950/20',
    borderClass: 'border-purple-500/30',
    textClass: 'text-purple-400'
  },
  target: {
    icon: Target,
    bgClass: 'bg-yellow-950/20',
    borderClass: 'border-yellow-500/30',
    textClass: 'text-yellow-400'
  }
};

// Size configurations
const sizeConfig = {
  xs: {
    padding: 'px-2 py-1',
    textSize: 'text-xs',
    iconSize: 'w-3 h-3',
    badgeSize: 'text-xs'
  },
  sm: {
    padding: 'px-3 py-2',
    textSize: 'text-sm',
    iconSize: 'w-4 h-4',
    badgeSize: 'text-xs'
  },
  md: {
    padding: 'px-4 py-3',
    textSize: 'text-base',
    iconSize: 'w-5 h-5',
    badgeSize: 'text-sm'
  },
  lg: {
    padding: 'px-6 py-4',
    textSize: 'text-lg',
    iconSize: 'w-6 h-6',
    badgeSize: 'text-base'
  }
};

// Variant configurations
const variantConfig = {
  default: {
    opacity: 'opacity-100',
    shadow: 'shadow-sm'
  },
  subtle: {
    opacity: 'opacity-80',
    shadow: 'shadow-none'
  },
  prominent: {
    opacity: 'opacity-100',
    shadow: 'shadow-lg shadow-primary/10'
  }
};

// Main caption component following naming convention: caption/{stakeholder}-{metric}
export const Caption: React.FC<CaptionProps> = ({
  stakeholder,
  metric,
  type = 'insight',
  text,
  value,
  unit,
  position = 'bottom',
  showIcon = true,
  showBadge = true,
  interactive = false,
  onClick,
  size = 'sm',
  variant = 'default',
  className = ''
}) => {
  const colors = stakeholderColors[stakeholder];
  const typeConfig = captionTypeConfig[type];
  const sizeClasses = sizeConfig[size];
  const variantClasses = variantConfig[variant];
  
  const IconComponent = typeConfig.icon;
  
  const captionContent = (
    <motion.div
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      className={`
        ${typeConfig.bgClass} ${typeConfig.borderClass}
        ${sizeClasses.padding} ${variantClasses.opacity} ${variantClasses.shadow}
        border rounded-lg backdrop-blur-sm
        ${interactive ? 'cursor-pointer hover:shadow-md' : ''}
        ${className}
        flex items-center gap-2 max-w-fit
      `}
      onClick={interactive ? onClick : undefined}
    >
      {/* Icon */}
      {showIcon && (
        <div className={typeConfig.textClass}>
          <IconComponent className={sizeClasses.iconSize} />
        </div>
      )}

      {/* Content */}
      <div className="flex items-center gap-2">
        {/* Value */}
        {value && (
          <span className={`${sizeClasses.textSize} font-semibold text-foreground`}>
            {value}{unit}
          </span>
        )}
        
        {/* Text */}
        <span className={`${sizeClasses.textSize} text-muted-foreground`}>
          {text}
        </span>
      </div>

      {/* Badge */}
      {showBadge && (
        <Badge 
          variant="secondary" 
          className={`
            ${colors.text} bg-transparent border ${colors.border}
            ${sizeClasses.badgeSize}
          `}
        >
          {stakeholder}
        </Badge>
      )}

      {/* Stakeholder indicator */}
      <div 
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: colors.primary }}
      />
    </motion.div>
  );

  // Position-specific wrapper classes
  const positionClasses = {
    top: 'items-start justify-center',
    bottom: 'items-end justify-center',
    left: 'items-center justify-start',
    right: 'items-center justify-end',
    overlay: 'absolute inset-0 items-center justify-center pointer-events-none'
  };

  if (position === 'overlay') {
    return (
      <div className={`${positionClasses[position]} flex`}>
        {captionContent}
      </div>
    );
  }

  return captionContent;
};

// Specific caption components following the naming convention
export const CaptionCEORevenue: React.FC<Omit<CaptionProps, 'stakeholder' | 'metric'>> = (props) => (
  <Caption stakeholder="CEO" metric="revenue" {...props} />
);

export const CaptionCFOForecastAccuracy: React.FC<Omit<CaptionProps, 'stakeholder' | 'metric'>> = (props) => (
  <Caption stakeholder="CFO" metric="forecast-accuracy" {...props} />
);

export const CaptionCHROEngagementScore: React.FC<Omit<CaptionProps, 'stakeholder' | 'metric'>> = (props) => (
  <Caption stakeholder="CHRO" metric="engagement-score" {...props} />
);

export const CaptionCOOPipelineConversion: React.FC<Omit<CaptionProps, 'stakeholder' | 'metric'>> = (props) => (
  <Caption stakeholder="COO" metric="pipeline-conversion" {...props} />
);

// Caption container for organizing multiple captions
export const CaptionContainer: React.FC<{
  children: React.ReactNode;
  layout?: 'horizontal' | 'vertical' | 'grid';
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  children, 
  layout = 'horizontal',
  gap = 'md',
  className = '' 
}) => {
  const layoutClasses = {
    horizontal: 'flex flex-wrap',
    vertical: 'flex flex-col',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  const gapClasses = {
    sm: layout === 'vertical' ? 'space-y-2' : layout === 'horizontal' ? 'gap-2' : 'gap-2',
    md: layout === 'vertical' ? 'space-y-3' : layout === 'horizontal' ? 'gap-3' : 'gap-3',
    lg: layout === 'vertical' ? 'space-y-4' : layout === 'horizontal' ? 'gap-4' : 'gap-4'
  };

  return (
    <div className={`${layoutClasses[layout]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// Caption with chart integration
export const CaptionWithChart: React.FC<CaptionProps & {
  chart?: React.ReactNode;
  chartPosition?: 'above' | 'below' | 'side';
}> = ({ 
  chart, 
  chartPosition = 'above',
  ...captionProps 
}) => {
  const layoutClasses = {
    above: 'flex flex-col space-y-3',
    below: 'flex flex-col-reverse space-y-3 space-y-reverse',
    side: 'flex items-center space-x-4'
  };

  return (
    <div className={layoutClasses[chartPosition]}>
      {chart && <div className="flex-shrink-0">{chart}</div>}
      <Caption {...captionProps} />
    </div>
  );
};

// Interactive caption with tooltip
export const CaptionWithTooltip: React.FC<CaptionProps & {
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}> = ({ 
  tooltip, 
  tooltipPosition = 'top',
  ...captionProps 
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Caption {...captionProps} interactive />
      
      {tooltip && showTooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`
            absolute z-10 px-3 py-2 text-xs text-foreground bg-card
            border border-border rounded-lg shadow-lg max-w-xs
            ${tooltipPosition === 'top' ? 'bottom-full mb-2' : ''}
            ${tooltipPosition === 'bottom' ? 'top-full mt-2' : ''}
            ${tooltipPosition === 'left' ? 'right-full mr-2' : ''}
            ${tooltipPosition === 'right' ? 'left-full ml-2' : ''}
          `}
        >
          {tooltip}
        </motion.div>
      )}
    </div>
  );
};

// Caption group for related metrics
export const CaptionGroup: React.FC<{
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  title?: string;
  captions: Array<Omit<CaptionProps, 'stakeholder'>>;
  layout?: 'stack' | 'inline';
  className?: string;
}> = ({ 
  stakeholder, 
  title, 
  captions, 
  layout = 'stack',
  className = '' 
}) => {
  const colors = stakeholderColors[stakeholder];
  
  return (
    <Card className={`p-4 ${colors.bg} ${colors.border} ${className}`}>
      {title && (
        <h4 className={`font-semibold ${colors.text} mb-3`}>
          {title}
        </h4>
      )}
      
      <CaptionContainer layout={layout === 'stack' ? 'vertical' : 'horizontal'}>
        {captions.map((captionProps, index) => (
          <Caption
            key={index}
            stakeholder={stakeholder}
            {...captionProps}
          />
        ))}
      </CaptionContainer>
    </Card>
  );
};

// Factory function to create captions from JSON schema
export const createCaptionFromSchema = (data: {
  stakeholder: string;
  metric: string;
  type?: CaptionType;
  text: string;
  value?: string | number;
  unit?: string;
}) => {
  return (
    <Caption
      stakeholder={data.stakeholder as CaptionProps['stakeholder']}
      metric={data.metric}
      type={data.type}
      text={data.text}
      value={data.value}
      unit={data.unit}
    />
  );
};