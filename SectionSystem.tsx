import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronRight, MoreHorizontal, Settings, Filter } from 'lucide-react';
import { stakeholderColors } from './MetricCardSystem';

// Section types
export type SectionType = 'dashboard' | 'analytics' | 'operations' | 'strategy' | 'compliance';

// Base section props interface
export interface SectionProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  type?: SectionType;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  showHeader?: boolean;
  showActions?: boolean;
  showBadge?: boolean;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

// Section type configurations
const sectionTypeConfig = {
  dashboard: {
    bgClass: 'bg-background/50',
    borderClass: 'border-border/50'
  },
  analytics: {
    bgClass: 'bg-blue-950/10',
    borderClass: 'border-blue-500/20'
  },
  operations: {
    bgClass: 'bg-emerald-950/10',
    borderClass: 'border-emerald-500/20'
  },
  strategy: {
    bgClass: 'bg-purple-950/10',
    borderClass: 'border-purple-500/20'
  },
  compliance: {
    bgClass: 'bg-orange-950/10',
    borderClass: 'border-orange-500/20'
  }
};

// Main section component following naming convention: section/{stakeholder}-{module}
export const Section: React.FC<SectionProps> = ({
  stakeholder,
  module,
  title,
  description,
  children,
  type = 'dashboard',
  actions = [],
  showHeader = true,
  showActions = true,
  showBadge = true,
  collapsible = false,
  defaultCollapsed = false,
  className = '',
  headerClassName = '',
  contentClassName = ''
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  
  const colors = stakeholderColors[stakeholder];
  const typeConfig = sectionTypeConfig[type];
  
  const sectionTitle = title || `${stakeholder} ${module.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;

  const handleToggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className={`
        ${typeConfig.bgClass} ${typeConfig.borderClass}
        backdrop-blur-sm transition-all duration-300
        hover:shadow-lg hover:shadow-primary/5
        overflow-hidden
      `}>
        {/* Header */}
        {showHeader && (
          <div className={`
            p-6 pb-4 
            ${headerClassName}
          `}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <motion.h2 
                    className={`text-xl font-bold text-foreground ${collapsible ? 'cursor-pointer' : ''}`}
                    onClick={handleToggleCollapse}
                    whileHover={collapsible ? { scale: 1.02 } : {}}
                  >
                    {sectionTitle}
                    {collapsible && (
                      <motion.span
                        animate={{ rotate: isCollapsed ? -90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block ml-2"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    )}
                  </motion.h2>
                  {showBadge && (
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${colors.text} bg-transparent border ${colors.border}`}
                      >
                        {stakeholder}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {module.toUpperCase()}
                      </Badge>
                    </div>
                  )}
                </div>
                {description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              
              {/* Actions */}
              {showActions && (actions.length > 0 || true) && (
                <div className="flex items-center gap-2">
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant || 'outline'}
                      size="sm"
                      onClick={action.onClick}
                      className={action.variant === 'primary' ? colors.accent : ''}
                    >
                      {action.label}
                    </Button>
                  ))}
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
            
            {/* Stakeholder indicator line */}
            <div 
              className="h-0.5 w-12 rounded-full mt-3"
              style={{ backgroundColor: colors.primary }}
            />
          </div>
        )}

        {showHeader && <Separator className="opacity-20" />}

        {/* Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isCollapsed ? 0 : 'auto',
            opacity: isCollapsed ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className={`p-6 ${showHeader ? 'pt-4' : ''} ${contentClassName}`}>
            {children}
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

// Specific section components following the naming convention
export const SectionCEOERP: React.FC<Omit<SectionProps, 'stakeholder' | 'module'>> = (props) => (
  <Section stakeholder="CEO" module="ERP" {...props} />
);

export const SectionCEOEPM: React.FC<Omit<SectionProps, 'stakeholder' | 'module'>> = (props) => (
  <Section stakeholder="CEO" module="EPM" {...props} />
);

export const SectionCFOEPM: React.FC<Omit<SectionProps, 'stakeholder' | 'module'>> = (props) => (
  <Section stakeholder="CFO" module="EPM" {...props} />
);

export const SectionCHROHCM: React.FC<Omit<SectionProps, 'stakeholder' | 'module'>> = (props) => (
  <Section stakeholder="CHRO" module="HCM" {...props} />
);

export const SectionCOOCRM: React.FC<Omit<SectionProps, 'stakeholder' | 'module'>> = (props) => (
  <Section stakeholder="COO" module="CRM" {...props} />
);

// Section container for organizing multiple sections
export const SectionContainer: React.FC<{
  children: React.ReactNode;
  layout?: 'stack' | 'grid' | 'masonry';
  columns?: 1 | 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  children, 
  layout = 'stack',
  columns = 1,
  gap = 'md',
  className = '' 
}) => {
  const layoutClasses = {
    stack: 'space-y-6',
    grid: `grid grid-cols-1 ${columns >= 2 ? 'lg:grid-cols-2' : ''} ${columns >= 3 ? 'xl:grid-cols-3' : ''}`,
    masonry: 'columns-1 md:columns-2 lg:columns-3'
  };

  const gapClasses = {
    sm: layout === 'stack' ? 'space-y-3' : 'gap-3',
    md: layout === 'stack' ? 'space-y-6' : 'gap-6',
    lg: layout === 'stack' ? 'space-y-8' : 'gap-8'
  };

  return (
    <div className={`
      ${layoutClasses[layout]} 
      ${layout !== 'stack' ? gapClasses[gap] : layoutClasses[layout]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Section with integrated metrics
export const SectionWithMetrics: React.FC<SectionProps & {
  metrics?: React.ReactNode;
  metricsClassName?: string;
}> = ({ 
  metrics, 
  metricsClassName = '',
  children,
  ...sectionProps 
}) => {
  return (
    <Section {...sectionProps}>
      {metrics && (
        <div className={`mb-6 ${metricsClassName}`}>
          {metrics}
        </div>
      )}
      {children}
    </Section>
  );
};

// Quick action section for common operations
export const SectionQuickActions: React.FC<{
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: string;
  actions: Array<{
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
}> = ({ stakeholder, module, actions, className = '' }) => {
  const colors = stakeholderColors[stakeholder];
  
  return (
    <Section
      stakeholder={stakeholder}
      module={module}
      title="Quick Actions"
      showBadge={false}
      showActions={false}
      className={className}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <Button
              key={index}
              variant={action.variant || 'outline'}
              onClick={action.onClick}
              className={`
                h-auto p-4 flex flex-col items-center gap-2
                ${action.variant === 'primary' ? colors.accent : ''}
              `}
            >
              {IconComponent && <IconComponent className="w-5 h-5" />}
              <span className="text-xs text-center">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </Section>
  );
};

// Factory function to create sections from JSON schema
export const createSectionFromSchema = (data: {
  stakeholder: string;
  module: string;
  title?: string;
  description?: string;
  type?: SectionType;
  children: React.ReactNode;
}) => {
  return (
    <Section
      stakeholder={data.stakeholder as SectionProps['stakeholder']}
      module={data.module}
      title={data.title}
      description={data.description}
      type={data.type}
    >
      {data.children}
    </Section>
  );
};