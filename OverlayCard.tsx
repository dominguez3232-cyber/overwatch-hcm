import React from 'react';
import { motion } from 'motion/react';
import { useCoachingOverlay } from './CoachingOverlayProvider';

interface OverlayCardProps {
  title: string;
  caption: string;
  icon: string;
  glow?: boolean;
  onClick?: () => void;
  schemaTrace?: string;
  domain?: 'finance' | 'trigger' | 'science' | 'law' | 'new' | 'time';
  stakeholder?: string;
  language?: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'elevated';
  disabled?: boolean;
}

export const OverlayCard: React.FC<OverlayCardProps> = ({
  title,
  caption,
  icon,
  glow = false,
  onClick,
  schemaTrace,
  domain,
  stakeholder,
  language = 'en',
  size = 'md',
  variant = 'default',
  disabled = false
}) => {
  const { triggerOverlay, isActive } = useCoachingOverlay();

  const handleClick = () => {
    if (disabled) return;
    
    if (schemaTrace) {
      triggerOverlay(schemaTrace);
    } else if (onClick) {
      onClick();
    }
  };

  const getDomainGradient = (domain?: string) => {
    switch (domain) {
      case 'finance': return 'from-amber-500 to-orange-600';
      case 'trigger': return 'from-cyan-500 to-blue-600';
      case 'science': return 'from-purple-500 to-violet-600';
      case 'law': return 'from-emerald-500 to-green-600';
      case 'new': return 'from-rose-500 to-pink-600';
      case 'time': return 'from-indigo-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm': return 'p-4 min-h-[120px]';
      case 'lg': return 'p-8 min-h-[200px]';
      default: return 'p-6 min-h-[160px]';
    }
  };

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'minimal': 
        return 'bg-transparent border border-border/50 hover:border-border';
      case 'elevated':
        return 'bg-card border border-border shadow-lg shadow-black/20';
      default:
        return 'bg-card/80 backdrop-blur-sm border border-border/60';
    }
  };

  const isSchemaActive = schemaTrace && isActive(schemaTrace);

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        ${getSizeClasses(size)}
        ${getVariantClasses(variant)}
        rounded-lg cursor-pointer transition-all duration-300
        flex flex-col justify-between
        hover:shadow-lg hover:shadow-primary/10
        group relative overflow-hidden
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${isSchemaActive ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''}
      `}
      onClick={handleClick}
    >
      {/* Glow effect */}
      {glow && !disabled && (
        <div className={`absolute inset-0 bg-gradient-to-r ${getDomainGradient(domain)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      )}

      {/* Active indicator */}
      {isSchemaActive && (
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      )}

      {/* Header with icon */}
      <div className="flex items-start justify-between mb-4">
        <div className={`
          flex items-center justify-center rounded-lg
          ${size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'}
          ${glow ? `bg-gradient-to-r ${getDomainGradient(domain)} shadow-lg` : 'bg-secondary'}
          group-hover:scale-110 transition-transform duration-300
        `}>
          <span className={`
            ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}
            ${glow ? 'filter drop-shadow-sm' : ''}
          `}>
            {icon}
          </span>
        </div>

        {stakeholder && (
          <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
            {stakeholder}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className={`
          font-semibold text-foreground mb-2 group-hover:text-primary transition-colors
          ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}
        `}>
          {title}
        </h3>
        
        <p className={`
          text-muted-foreground leading-relaxed
          ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}
        `}>
          {caption}
        </p>
      </div>

      {/* Schema trace indicator */}
      {schemaTrace && (
        <div className="mt-4 pt-3 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              {schemaTrace}
            </span>
            <motion.div
              animate={{ rotate: isSchemaActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground group-hover:text-primary"
            >
              ↗
            </motion.div>
          </div>
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-r ${getDomainGradient(domain)} 
        opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none
      `} />
    </motion.div>
  );
};

// Specialized overlay cards for common use cases
export const FinanceOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="finance" />
);

export const TriggerOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="trigger" />
);

export const ScienceOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="science" />
);

export const LawOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="law" />
);

export const NewOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="new" />
);

export const TimeOverlayCard: React.FC<Omit<OverlayCardProps, 'domain'>> = (props) => (
  <OverlayCard {...props} domain="time" />
);

// Grid layout component for multiple overlay cards
interface OverlayCardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const OverlayCardGrid: React.FC<OverlayCardGridProps> = ({
  children,
  columns = 3,
  gap = 'md',
  className = ''
}) => {
  const getGridClasses = () => {
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8'
    };

    return `grid ${colClasses[columns]} ${gapClasses[gap]}`;
  };

  return (
    <div className={`${getGridClasses()} ${className}`}>
      {children}
    </div>
  );
};