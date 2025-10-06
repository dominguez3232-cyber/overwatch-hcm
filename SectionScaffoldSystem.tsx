/**
 * OVERWATCH³ Section Scaffold System
 * Schema-traceable sections that match Figma naming convention
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MoreHorizontal, TrendingUp } from 'lucide-react';
import { 
  SectionProps, 
  StakeholderType,
  BaseSchemaNode,
  STAKEHOLDER_COLORS,
  ANIMATION_PRESETS 
} from './FigmaScaffoldTypes';
import { 
  ComponentStyleGenerator, 
  FigmaComponentNaming, 
  SchemaTracer 
} from './FigmaComponentFactory';
import { MetricCard, MetricCardGrid } from './MetricCardScaffoldSystem';

// Base Section Component
export const SectionFrame: React.FC<SectionProps> = ({
  stakeholder,
  module,
  title,
  metrics,
  language,
  className = '',
  children
}) => {
  // Generate naming convention
  const naming = FigmaComponentNaming.generate('section', stakeholder, module);
  const schemaTrace = SchemaTracer.generate(stakeholder, module, 'section');
  
  // Get stakeholder colors
  const colors = STAKEHOLDER_COLORS[stakeholder];
  
  // Get section classes
  const sectionClasses = ComponentStyleGenerator.getSectionClasses(stakeholder);
  
  // Calculate section stats
  const totalMetrics = metrics.length;
  const healthyMetrics = metrics.filter(m => m.status === 'healthy').length;
  const healthScore = totalMetrics > 0 ? Math.round((healthyMetrics / totalMetrics) * 100) : 0;
  
  return (
    <motion.section
      className={`${sectionClasses} ${className}`}
      style={{
        '--stakeholder-primary': colors.primary,
        '--stakeholder-secondary': colors.secondary,
        '--stakeholder-light': colors.light,
      } as React.CSSProperties}
      data-figma-name={naming.figmaName}
      data-schema-trace={schemaTrace}
      {...ANIMATION_PRESETS.section}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <span 
              className="text-2xl"
              style={{ color: colors.primary }}
            >
              {stakeholder === 'CEO' && '👑'}
              {stakeholder === 'CFO' && '💰'}
              {stakeholder === 'CHRO' && '👥'}
              {stakeholder === 'COO' && '⚙️'}
              {stakeholder === 'PROOF_ENGINE' && '🏆'}
            </span>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {title}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-muted-foreground">
                {stakeholder} • {module}
              </span>
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: healthScore >= 80 ? '#22c55e' : 
                                   healthScore >= 60 ? '#f59e0b' : '#ef4444' 
                  }}
                />
                <span className="text-sm text-muted-foreground">
                  {healthScore}% {language === 'en' ? 'Health' : 'Salud'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1 bg-muted/50 rounded-lg">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">
              {totalMetrics} {language === 'en' ? 'Metrics' : 'Métricas'}
            </span>
          </div>
          
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            {language === 'en' ? 'Section Performance' : 'Rendimiento de Sección'}
          </span>
          <span className="text-sm font-medium">{healthScore}%</span>
        </div>
        <div className="w-full bg-muted/30 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${healthScore}%`,
              backgroundColor: colors.primary 
            }}
          />
        </div>
      </div>
      
      {/* Content */}
      {children || (
        <MetricCardGrid
          stakeholder={stakeholder}
          metrics={metrics.map(metric => ({
            module: metric.module,
            metric: metric.metric,
            value: metric.value,
            unit: metric.unit,
            target: metric.target,
            variance: metric.variance,
            trend: metric.trend,
            status: metric.status
          }))}
          language={language}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        />
      )}
      
      {/* Schema Trace Footer */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono">{schemaTrace}</span>
          <span>
            {language === 'en' ? 'Last updated:' : 'Última actualización:'} {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </motion.section>
  );
};

// Specialized Section Components for each Stakeholder
export const CEOSection: React.FC<Omit<SectionProps, 'stakeholder'>> = (props) => (
  <SectionFrame {...props} stakeholder="CEO" />
);

export const CFOSection: React.FC<Omit<SectionProps, 'stakeholder'>> = (props) => (
  <SectionFrame {...props} stakeholder="CFO" />
);

export const CHROSection: React.FC<Omit<SectionProps, 'stakeholder'>> = (props) => (
  <SectionFrame {...props} stakeholder="CHRO" />
);

export const COOSection: React.FC<Omit<SectionProps, 'stakeholder'>> = (props) => (
  <SectionFrame {...props} stakeholder="COO" />
);

export const ProofEngineSection: React.FC<Omit<SectionProps, 'stakeholder'>> = (props) => (
  <SectionFrame {...props} stakeholder="PROOF_ENGINE" />
);

// Multi-Section Dashboard Component
interface DashboardSectionsProps {
  sections: Array<{
    stakeholder: StakeholderType;
    module: SectionProps['module'];
    title: string;
    metrics: BaseSchemaNode[];
  }>;
  language: 'en' | 'es';
  onSectionClick?: (stakeholder: StakeholderType, module: string) => void;
  className?: string;
}

export const DashboardSections: React.FC<DashboardSectionsProps> = ({
  sections,
  language,
  onSectionClick,
  className = ''
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {sections.map((section, index) => (
        <motion.div
          key={`${section.stakeholder}-${section.module}-${index}`}
          variants={{
            initial: { opacity: 0, y: 40 },
            animate: { 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.2 }
            }
          }}
          onClick={() => onSectionClick?.(section.stakeholder, section.module)}
        >
          <SectionFrame
            stakeholder={section.stakeholder}
            module={section.module}
            title={section.title}
            metrics={section.metrics}
            language={language}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Section Navigation Component
interface SectionNavigationProps {
  sections: Array<{
    stakeholder: StakeholderType;
    title: string;
    isActive: boolean;
  }>;
  language: 'en' | 'es';
  onSectionSelect: (stakeholder: StakeholderType) => void;
  className?: string;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  sections,
  language,
  onSectionSelect,
  className = ''
}) => {
  return (
    <nav className={`bg-card rounded-lg p-4 border border-border ${className}`}>
      <h3 className="text-sm font-medium text-foreground mb-3">
        {language === 'en' ? 'Command Sections' : 'Secciones de Comando'}
      </h3>
      
      <div className="space-y-1">
        {sections.map((section) => {
          const colors = STAKEHOLDER_COLORS[section.stakeholder];
          
          return (
            <button
              key={section.stakeholder}
              onClick={() => onSectionSelect(section.stakeholder)}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all
                ${section.isActive 
                  ? 'bg-secondary text-foreground' 
                  : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: colors.primary }}
              />
              <span className="text-sm font-medium flex-1">
                {section.title}
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

// Example section data
export const EXAMPLE_SECTIONS = [
  {
    stakeholder: 'CEO' as const,
    module: 'ERP' as const,
    title: 'Executive Revenue Performance',
    metrics: [
      {
        stakeholder: 'CEO' as const,
        module: 'ERP' as const,
        metric: 'Revenue Growth',
        value: '23.5',
        unit: '%',
        target: '25.0',
        variance: -1.5,
        trend: 'up' as const,
        status: 'warning' as const
      },
      {
        stakeholder: 'CEO' as const,
        module: 'ERP' as const,
        metric: 'Market Share',
        value: '14.2',
        unit: '%',
        trend: 'up' as const,
        status: 'healthy' as const
      }
    ]
  },
  {
    stakeholder: 'CFO' as const,
    module: 'EPM' as const,
    title: 'Financial Planning & Management',
    metrics: [
      {
        stakeholder: 'CFO' as const,
        module: 'EPM' as const,
        metric: 'Forecast Accuracy',
        value: '89',
        unit: '%',
        target: '95',
        variance: -6.3,
        trend: 'stable' as const,
        status: 'warning' as const
      },
      {
        stakeholder: 'CFO' as const,
        module: 'EPM' as const,
        metric: 'Budget Variance',
        value: '3.2',
        unit: '%',
        trend: 'down' as const,
        status: 'healthy' as const
      }
    ]
  }
];