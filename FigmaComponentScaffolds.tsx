import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

// Types matching your Figma naming convention schema
export interface StakeholderMetric {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'HCM' | 'ERP' | 'EPM' | 'CRM';
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  threshold?: {
    rule: string;
    alertStyle: 'warning' | 'success' | 'error';
  };
}

export interface FigmaComponentProps {
  stakeholder: StakeholderMetric['stakeholder'];
  module: StakeholderMetric['module'];
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  language: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
  onClick?: () => void;
  onHover?: () => void;
}

// Stakeholder color mapping (matching your design system)
const stakeholderColors = {
  CEO: {
    primary: '#003366',
    secondary: '#0066cc',
    bg: 'bg-blue-950/20',
    border: 'border-blue-600',
    text: 'text-blue-400'
  },
  CFO: {
    primary: '#007F5F',
    secondary: '#40E0D0',
    bg: 'bg-emerald-950/20',
    border: 'border-emerald-600',
    text: 'text-emerald-400'
  },
  CHRO: {
    primary: '#6A0DAD',
    secondary: '#9370DB',
    bg: 'bg-purple-950/20',
    border: 'border-purple-600',
    text: 'text-purple-400'
  },
  COO: {
    primary: '#D35400',
    secondary: '#FF6B35',
    bg: 'bg-orange-950/20',
    border: 'border-orange-600',
    text: 'text-orange-400'
  }
};

// Trend icons
const TrendIcon = ({ trend, className = "w-4 h-4" }: { trend?: 'up' | 'down' | 'stable'; className?: string }) => {
  if (!trend) return null;
  
  switch (trend) {
    case 'up':
      return <span className={`${className} text-green-400`}>↗</span>;
    case 'down':
      return <span className={`${className} text-red-400`}>↙</span>;
    case 'stable':
      return <span className={`${className} text-gray-400`}>→</span>;
    default:
      return null;
  }
};

// 1. Metric Card Component (metric-card/{stakeholder}-{metric})
export const MetricCard: React.FC<FigmaComponentProps> = ({
  stakeholder,
  module,
  metric,
  value,
  unit = '',
  trend,
  language = 'en',
  size = 'md',
  variant = 'default',
  className = '',
  onClick,
  onHover
}) => {
  const colors = stakeholderColors[stakeholder];
  
  const sizeClasses = {
    sm: 'p-3 min-h-[80px]',
    md: 'p-4 min-h-[100px]',
    lg: 'p-6 min-h-[120px]'
  };

  const textSizes = {
    sm: { value: 'text-lg', label: 'text-xs', unit: 'text-sm' },
    md: { value: 'text-2xl', label: 'text-sm', unit: 'text-base' },
    lg: { value: 'text-3xl', label: 'text-base', unit: 'text-lg' }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={onHover}
    >
      <Card 
        className={`
          ${sizeClasses[size]} 
          ${colors.bg} 
          ${colors.border} 
          cursor-pointer 
          transition-all 
          hover:shadow-lg 
          hover:shadow-primary/20
          ${className}
        `}
        onClick={onClick}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className={`${colors.text} bg-transparent text-xs`}>
              {stakeholder} • {module}
            </Badge>
            <TrendIcon trend={trend} />
          </div>
          
          {/* Value */}
          <div className="flex items-baseline gap-1">
            <span className={`font-bold ${colors.text} ${textSizes[size].value}`}>
              {value}
            </span>
            {unit && (
              <span className={`${colors.text} opacity-70 ${textSizes[size].unit}`}>
                {unit}
              </span>
            )}
          </div>
          
          {/* Metric Label */}
          <div className={`${colors.text} opacity-80 ${textSizes[size].label} font-medium mt-1`}>
            {metric}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// 2. Section Frame Component (section/{stakeholder}-{module})
export const SectionFrame: React.FC<{
  stakeholder: StakeholderMetric['stakeholder'];
  module: StakeholderMetric['module'];
  title: string;
  subtitle?: string;
  language: 'en' | 'es';
  children: React.ReactNode;
  className?: string;
}> = ({ stakeholder, module, title, subtitle, language, children, className = '' }) => {
  const colors = stakeholderColors[stakeholder];
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-6 ${className}`}
    >
      {/* Section Header */}
      <div className={`border-l-4 ${colors.border} pl-4`}>
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline" className={colors.text}>
            {stakeholder}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {module}
          </Badge>
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Section Content */}
      <div className="space-y-4">
        {children}
      </div>
    </motion.section>
  );
};

// 3. Overlay Panel Component (overlay/{stakeholder}-{metric})
export const OverlayPanel: React.FC<{
  stakeholder: StakeholderMetric['stakeholder'];
  metric: string;
  content: {
    metricContext: string;
    strategicGuidance: string;
    tacticalTip: string;
    schemaTrace: string;
  };
  language: 'en' | 'es';
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}> = ({ stakeholder, metric, content, language, isOpen, onClose, className = '' }) => {
  const colors = stakeholderColors[stakeholder];
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-background/80 backdrop-blur-sm
        ${className}
      `}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`
          max-w-md w-full mx-4 
          ${colors.bg} 
          ${colors.border} 
          border rounded-lg p-6 
          shadow-2xl
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={colors.text}>
              {stakeholder}
            </Badge>
            <span className="text-sm text-muted-foreground">•</span>
            <span className={`text-sm font-medium ${colors.text}`}>
              {metric}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-1">
              {language === 'en' ? 'Context' : 'Contexto'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {content.metricContext}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-1">
              {language === 'en' ? 'Strategic Guidance' : 'Orientación Estratégica'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {content.strategicGuidance}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-1">
              {language === 'en' ? 'Tactical Tip' : 'Consejo Táctico'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {content.tacticalTip}
            </p>
          </div>
          
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              {content.schemaTrace}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 4. Caption Block Component (caption/{stakeholder}-{metric})
export const CaptionBlock: React.FC<{
  stakeholder: StakeholderMetric['stakeholder'];
  metric: string;
  caption: string;
  language: 'en' | 'es';
  variant?: 'default' | 'cinematic' | 'minimal';
  className?: string;
}> = ({ stakeholder, metric, caption, language, variant = 'default', className = '' }) => {
  const colors = stakeholderColors[stakeholder];
  
  const variantStyles = {
    default: 'text-center py-2',
    cinematic: 'text-center py-4 text-lg italic',
    minimal: 'text-left py-1 text-sm'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        ${variantStyles[variant]}
        ${colors.text}
        ${className}
      `}
    >
      <p className="font-medium">
        {caption}
      </p>
      <div className="flex items-center justify-center gap-2 mt-1 opacity-60">
        <Badge variant="outline" className="text-xs">
          {stakeholder}
        </Badge>
        <span className="text-xs">•</span>
        <span className="text-xs">
          {metric}
        </span>
      </div>
    </motion.div>
  );
};

// 5. Proof Engine Metric Component (proof/{metric})
export const ProofEngineMetric: React.FC<{
  metric: string;
  value: string | number;
  unit?: string;
  impact: string;
  language: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ metric, value, unit = '', impact, language, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const textSizes = {
    sm: { value: 'text-xl', impact: 'text-xs' },
    md: { value: 'text-3xl', impact: 'text-sm' },
    lg: { value: 'text-4xl', impact: 'text-base' }
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-br from-yellow-500/20 to-orange-500/20
        border border-yellow-500/30
        rounded-lg
        text-center
        ${className}
      `}
    >
      <div className="space-y-2">
        <Badge variant="outline" className="text-yellow-400 border-yellow-500/50">
          {language === 'en' ? 'PROOF ENGINE' : 'MOTOR DE PRUEBA'}
        </Badge>
        
        <div className="flex items-baseline justify-center gap-1">
          <span className={`font-bold text-yellow-400 ${textSizes[size].value}`}>
            {value}
          </span>
          {unit && (
            <span className={`text-yellow-400 opacity-70 text-lg`}>
              {unit}
            </span>
          )}
        </div>
        
        <div className="text-yellow-400 font-medium">
          {metric}
        </div>
        
        <p className={`text-yellow-400/80 ${textSizes[size].impact}`}>
          {impact}
        </p>
      </div>
    </motion.div>
  );
};

// 6. UI Element Component (ui/{element})
export const UIElement: React.FC<{
  element: 'header-bar' | 'toggle-en-es' | 'breadcrumb' | 'status-indicator';
  props?: Record<string, any>;
  language: 'en' | 'es';
  className?: string;
}> = ({ element, props = {}, language, className = '' }) => {
  switch (element) {
    case 'toggle-en-es':
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-2 ${className}`}
        >
          <button 
            className={`px-2 py-1 rounded text-xs ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            onClick={() => props.onChange?.('en')}
          >
            EN
          </button>
          <button 
            className={`px-2 py-1 rounded text-xs ${language === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            onClick={() => props.onChange?.('es')}
          >
            ES
          </button>
        </motion.div>
      );
    
    case 'status-indicator':
      return (
        <motion.div
          className={`flex items-center gap-2 ${className}`}
        >
          <div className={`w-2 h-2 rounded-full ${props.status === 'online' ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-xs text-muted-foreground">
            {props.status === 'online' 
              ? (language === 'en' ? 'Connected' : 'Conectado')
              : (language === 'en' ? 'Offline' : 'Desconectado')
            }
          </span>
        </motion.div>
      );
    
    default:
      return (
        <div className={`text-muted-foreground text-sm ${className}`}>
          UI Element: {element}
        </div>
      );
  }
};

// Export all components as a named export for easy Anima integration
export const FigmaComponentScaffolds = {
  MetricCard,
  SectionFrame,
  OverlayPanel,
  CaptionBlock,
  ProofEngineMetric,
  UIElement,
  // Utility functions
  stakeholderColors,
  TrendIcon
};

export default FigmaComponentScaffolds;