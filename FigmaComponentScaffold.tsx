import React from 'react';
import { motion } from 'motion/react';

// Import all the component systems
import { 
  MetricCard, 
  MetricCardGrid, 
  stakeholderColors,
  createMetricCardFromSchema,
  type MetricCardProps
} from './MetricCardSystem';

import { 
  Overlay, 
  useOverlayManager,
  createOverlayFromSchema,
  type OverlayProps
} from './OverlaySystem';

import { 
  Section, 
  SectionContainer,
  SectionWithMetrics,
  SectionQuickActions,
  createSectionFromSchema,
  type SectionProps
} from './SectionSystem';

import { 
  Caption, 
  CaptionContainer,
  CaptionGroup,
  createCaptionFromSchema,
  type CaptionProps
} from './CaptionSystem';

import { 
  ProofEngine, 
  ProofEngineDashboard,
  createProofEngineFromSchema,
  type ProofEngineProps
} from './ProofEngineSystem';

import { 
  UIElements 
} from './UIElementSystem';

// Main schema interface that matches the Figma naming convention
export interface FigmaComponentSchema {
  // Component identification following naming convention
  componentType: 'section' | 'metric-card' | 'overlay' | 'caption' | 'proof' | 'ui';
  stakeholder?: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module?: string;
  metric?: string;
  elementType?: string; // for UI components
  
  // Content and behavior
  content: {
    title?: string;
    value?: string | number;
    unit?: string;
    text?: string;
    description?: string;
  };
  
  // Configuration
  config?: {
    type?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: string;
    interactive?: boolean;
    showDetails?: boolean;
  };
  
  // Data and metrics
  data?: Record<string, any>;
  
  // Language support
  language?: 'en' | 'es';
}

// Factory function to create components from Figma schema
export const createFigmaComponent = (schema: FigmaComponentSchema): React.ReactNode => {
  const { componentType, stakeholder, module, metric, elementType, content, config, data, language } = schema;
  
  // Generate component key for React
  const componentKey = componentType === 'ui' 
    ? `ui-${elementType}-${Date.now()}`
    : `${componentType}-${stakeholder}-${metric || module}-${Date.now()}`;

  switch (componentType) {
    case 'metric-card':
      if (!stakeholder || !metric) return null;
      return (
        <MetricCard
          key={componentKey}
          stakeholder={stakeholder}
          metric={metric}
          value={content.value || '0'}
          unit={content.unit}
          label={content.title}
          description={content.description}
          size={config?.size as MetricCardProps['size']}
          showTrend={config?.showDetails}
          interactive={config?.interactive}
        />
      );

    case 'section':
      if (!stakeholder || !module) return null;
      return (
        <Section
          key={componentKey}
          stakeholder={stakeholder}
          module={module}
          title={content.title}
          description={content.description}
          type={config?.type as SectionProps['type']}
          showHeader={config?.showDetails !== false}
        >
          <div className="text-muted-foreground">
            {content.text || 'Section content will be populated by Anima export'}
          </div>
        </Section>
      );

    case 'caption':
      if (!stakeholder || !metric) return null;
      return (
        <Caption
          key={componentKey}
          stakeholder={stakeholder}
          metric={metric}
          text={content.text || content.title || ''}
          value={content.value}
          unit={content.unit}
          type={config?.type as CaptionProps['type']}
          size={config?.size as CaptionProps['size']}
          interactive={config?.interactive}
        />
      );

    case 'proof':
      if (!metric) return null;
      return (
        <ProofEngine
          key={componentKey}
          metric={metric as ProofEngineProps['metric']}
          value={content.value || '0'}
          unit={content.unit}
          validation={config?.type as ProofEngineProps['validation'] || 'projected'}
          size={config?.size as ProofEngineProps['size']}
          showDetails={config?.showDetails}
          interactive={config?.interactive}
        />
      );

    case 'ui':
      switch (elementType) {
        case 'header-bar':
          return (
            <UIElements.HeaderBar
              key={componentKey}
              title={content.title}
              subtitle={content.description}
              language={language}
            />
          );
        
        case 'toggle-en-es':
          return (
            <UIElements.ToggleEnEs
              key={componentKey}
              language={language || 'en'}
              onLanguageChange={() => {}}
              size={config?.size as any}
            />
          );
          
        default:
          return (
            <div key={componentKey} className="p-4 border border-dashed border-border rounded-lg text-center text-muted-foreground">
              UI Element: {elementType}
            </div>
          );
      }

    default:
      return (
        <div key={componentKey} className="p-4 border border-dashed border-border rounded-lg text-center text-muted-foreground">
          Unknown component type: {componentType}
        </div>
      );
  }
};

// Figma component wrapper that handles animations and common props
export const FigmaComponentWrapper: React.FC<{
  schema: FigmaComponentSchema;
  className?: string;
  animate?: boolean;
}> = ({ schema, className = '', animate = true }) => {
  const component = createFigmaComponent(schema);
  
  if (!animate) {
    return <div className={className}>{component}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {component}
    </motion.div>
  );
};

// Layout components for organizing Figma components
export const FigmaComponentGrid: React.FC<{
  schemas: FigmaComponentSchema[];
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}> = ({ schemas, columns = 3, gap = 'md', animate = true, className = '' }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8'
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!animate) {
    return (
      <div className={`grid ${gridCols[columns]} ${gapClasses[gap]} ${className}`}>
        {schemas.map((schema, index) => (
          <FigmaComponentWrapper
            key={index}
            schema={schema}
            animate={false}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className={`grid ${gridCols[columns]} ${gapClasses[gap]} ${className}`}
    >
      {schemas.map((schema, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <FigmaComponentWrapper
            schema={schema}
            animate={false}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Dashboard layout that automatically organizes components by stakeholder
export const FigmaStakeholderDashboard: React.FC<{
  schemas: FigmaComponentSchema[];
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  language?: 'en' | 'es';
  className?: string;
}> = ({ schemas, stakeholder, language = 'en', className = '' }) => {
  // Filter schemas for the specific stakeholder
  const stakeholderSchemas = schemas.filter(schema => schema.stakeholder === stakeholder);
  
  // Group by component type
  const metricCards = stakeholderSchemas.filter(s => s.componentType === 'metric-card');
  const sections = stakeholderSchemas.filter(s => s.componentType === 'section');
  const proofEngines = stakeholderSchemas.filter(s => s.componentType === 'proof');
  const captions = stakeholderSchemas.filter(s => s.componentType === 'caption');

  const colors = stakeholderColors[stakeholder];
  
  const stakeholderLabels = {
    en: { CEO: 'Chief Executive', CFO: 'Chief Financial', CHRO: 'Chief HR', COO: 'Chief Operating' },
    es: { CEO: 'Director Ejecutivo', CFO: 'Director Financiero', CHRO: 'Director de RH', COO: 'Director de Operaciones' }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${colors.primary}20` }}
        >
          <span className="text-xl" style={{ color: colors.primary }}>
            {stakeholder === 'CEO' ? '👑' : stakeholder === 'CFO' ? '💰' : stakeholder === 'CHRO' ? '👥' : '⚙️'}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {stakeholder} {language === 'en' ? 'Command Center' : 'Centro de Comando'}
          </h1>
          <p className="text-muted-foreground">
            {stakeholderLabels[language][stakeholder]} {language === 'en' ? 'Officer Dashboard' : 'Panel de Control'}
          </p>
        </div>
      </div>

      {/* Metric Cards */}
      {metricCards.length > 0 && (
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            {language === 'en' ? 'Key Metrics' : 'Métricas Clave'}
          </h2>
          <FigmaComponentGrid 
            schemas={metricCards}
            columns={4}
            gap="md"
          />
        </section>
      )}

      {/* Proof Engines */}
      {proofEngines.length > 0 && (
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            {language === 'en' ? 'ROI Proof Points' : 'Puntos de Prueba ROI'}
          </h2>
          <FigmaComponentGrid 
            schemas={proofEngines}
            columns={3}
            gap="lg"
          />
        </section>
      )}

      {/* Sections */}
      {sections.length > 0 && (
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            {language === 'en' ? 'Strategic Modules' : 'Módulos Estratégicos'}
          </h2>
          <div className="space-y-6">
            {sections.map((schema, index) => (
              <FigmaComponentWrapper
                key={index}
                schema={schema}
              />
            ))}
          </div>
        </section>
      )}

      {/* Captions */}
      {captions.length > 0 && (
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            {language === 'en' ? 'Insights & Alerts' : 'Perspectivas y Alertas'}
          </h2>
          <div className="flex flex-wrap gap-4">
            {captions.map((schema, index) => (
              <FigmaComponentWrapper
                key={index}
                schema={schema}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

// Sample data generator for testing
export const generateSampleFigmaSchemas = (stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO'): FigmaComponentSchema[] => {
  const baseSchemas: FigmaComponentSchema[] = [
    {
      componentType: 'metric-card',
      stakeholder,
      metric: 'revenue',
      content: { title: 'Revenue', value: '$2.4M', unit: '' },
      config: { size: 'md', interactive: true, showDetails: true }
    },
    {
      componentType: 'section',
      stakeholder,
      module: 'EPM',
      content: { title: 'Enterprise Performance Management', description: 'Strategic planning and performance tracking' },
      config: { type: 'analytics', showDetails: true }
    },
    {
      componentType: 'proof',
      metric: 'revenue-lift',
      content: { value: '23', unit: '%' },
      config: { type: 'validated', size: 'md', showDetails: true }
    },
    {
      componentType: 'caption',
      stakeholder,
      metric: 'engagement-score',
      content: { text: 'Employee engagement up 15% this quarter', value: '87', unit: '%' },
      config: { type: 'success', size: 'sm' }
    }
  ];

  return baseSchemas;
};

// Export everything for easy importing
export {
  // Component systems
  MetricCard,
  Overlay,
  Section,
  Caption,
  ProofEngine,
  UIElements,
  
  // Hooks and utilities
  useOverlayManager,
  stakeholderColors,
  
  // Factory functions
  createMetricCardFromSchema,
  createOverlayFromSchema,
  createSectionFromSchema,
  createCaptionFromSchema,
  createProofEngineFromSchema
};