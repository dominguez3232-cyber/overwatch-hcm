import React from 'react';
import { motion } from 'motion/react';

// Core types for the Figma naming convention system
export interface SchemaNode {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  threshold?: {
    warning: number;
    critical: number;
  };
}

export interface FigmaComponent {
  figmaName: string;
  componentType: 'section' | 'metric-card' | 'overlay' | 'caption' | 'proof' | 'ui';
  schema: SchemaNode;
  language: 'en' | 'es';
}

// Stakeholder color mapping
export const STAKEHOLDER_COLORS = {
  CEO: '#003366', // Deep Blue
  CFO: '#007F5F', // Emerald Green  
  CHRO: '#6A0DAD', // Royal Purple
  COO: '#D35400', // Burnt Orange
  PROOF: '#DAA520' // Gold for Proof Engine
} as const;

// Schema to Figma name converter
export function schemaToFigmaName(
  componentType: string,
  stakeholder: string,
  metric: string,
  module?: string
): string {
  const kebabMetric = metric.toLowerCase().replace(/\s+/g, '-');
  const kebabStakeholder = stakeholder.toLowerCase();
  
  switch (componentType) {
    case 'section':
      return `section/${kebabStakeholder}-${module?.toLowerCase()}`;
    case 'metric-card':
      return `metric-card/${kebabStakeholder}-${kebabMetric}`;
    case 'overlay':
      return `overlay/${kebabStakeholder}-${kebabMetric}`;
    case 'caption':
      return `caption/${kebabStakeholder}-${kebabMetric}`;
    case 'proof':
      return `proof/${kebabMetric}`;
    default:
      return `ui/${kebabMetric}`;
  }
}

// Figma name to React props converter
export function figmaNameToProps(figmaName: string): {
  componentType: string;
  stakeholder?: string;
  metric?: string;
  module?: string;
} {
  const [componentType, identifier] = figmaName.split('/');
  
  if (componentType === 'section') {
    const [stakeholder, module] = identifier.split('-');
    return { componentType, stakeholder: stakeholder.toUpperCase(), module: module?.toUpperCase() };
  }
  
  if (['metric-card', 'overlay', 'caption'].includes(componentType)) {
    const parts = identifier.split('-');
    const stakeholder = parts[0].toUpperCase();
    const metric = parts.slice(1).join(' ').replace(/\b\w/g, l => l.toUpperCase());
    return { componentType, stakeholder, metric };
  }
  
  if (componentType === 'proof') {
    const metric = identifier.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase());
    return { componentType, metric };
  }
  
  return { componentType };
}

// Base component scaffold with Figma naming integration
export interface ScaffoldProps {
  schema: SchemaNode;
  language: 'en' | 'es';
  className?: string;
  onInteraction?: (event: string, data: any) => void;
}

// Base Figma Component wrapper
export const FigmaComponentWrapper: React.FC<{
  figmaName: string;
  children: React.ReactNode;
  className?: string;
}> = ({ figmaName, children, className = '' }) => {
  const props = figmaNameToProps(figmaName);
  const stakeholderColor = props.stakeholder ? STAKEHOLDER_COLORS[props.stakeholder as keyof typeof STAKEHOLDER_COLORS] : STAKEHOLDER_COLORS.PROOF;
  
  return (
    <div 
      className={`figma-component ${className}`}
      data-figma-name={figmaName}
      data-component-type={props.componentType}
      data-stakeholder={props.stakeholder}
      style={{ '--stakeholder-color': stakeholderColor } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Schema validation utility
export function validateSchema(schema: SchemaNode): boolean {
  const requiredFields = ['stakeholder', 'module', 'metric', 'value'];
  return requiredFields.every(field => schema[field as keyof SchemaNode] !== undefined);
}

// Anima export helper - generates clean React component code
export function generateAnimaComponent(figmaName: string, schema: SchemaNode): string {
  const props = figmaNameToProps(figmaName);
  const componentName = figmaName.split('/')[1].split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  return `
<${props.componentType === 'metric-card' ? 'MetricCard' : 'FigmaComponent'}
  stakeholder="${props.stakeholder}"
  metric="${props.metric?.toLowerCase().replace(/\s+/g, '-')}"
  value="${schema.value}"
  unit="${schema.unit || ''}"
  figmaName="${figmaName}"
/>`;
}

// Demo component to show the system in action
export const FigmaScaffoldDemo: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const sampleSchema: SchemaNode = {
    stakeholder: 'CFO',
    module: 'EPM',
    metric: 'Forecast Accuracy',
    value: '89%',
    unit: '%'
  };

  const figmaName = schemaToFigmaName('metric-card', sampleSchema.stakeholder, sampleSchema.metric);
  const props = figmaNameToProps(figmaName);

  return (
    <div className="p-8 space-y-6 bg-card rounded-lg border border-border">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Figma Component Naming Convention Demo' : 'Demo de Convención de Nombres Figma'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Schema → Figma Name → React Props Pipeline'
            : 'Pipeline Esquema → Nombre Figma → Props React'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Schema Input */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">
            {language === 'en' ? '1. Schema Node' : '1. Nodo de Esquema'}
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <pre>{JSON.stringify(sampleSchema, null, 2)}</pre>
          </div>
        </div>

        {/* Figma Name */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">
            {language === 'en' ? '2. Figma Component Name' : '2. Nombre Componente Figma'}
          </h3>
          <div className="bg-emerald-500/20 p-4 rounded-lg">
            <code className="text-emerald-400 font-mono text-sm">
              {figmaName}
            </code>
          </div>
          <div className="text-xs text-muted-foreground">
            {language === 'en' ? 'Clean, predictable naming' : 'Nombres limpios y predecibles'}
          </div>
        </div>

        {/* React Props */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">
            {language === 'en' ? '3. React Component' : '3. Componente React'}
          </h3>
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <code className="text-blue-400 font-mono text-xs">
              {generateAnimaComponent(figmaName, sampleSchema)}
            </code>
          </div>
          <div className="text-xs text-muted-foreground">
            {language === 'en' ? 'Anima-ready export' : 'Listo para exportar Anima'}
          </div>
        </div>
      </div>

      {/* Visual Component Preview */}
      <FigmaComponentWrapper figmaName={figmaName} className="mt-6">
        <motion.div 
          className="p-4 rounded-lg border-2 transition-all"
          style={{ 
            borderColor: STAKEHOLDER_COLORS[sampleSchema.stakeholder],
            backgroundColor: `${STAKEHOLDER_COLORS[sampleSchema.stakeholder]}10`
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">
                {sampleSchema.stakeholder} • {sampleSchema.module}
              </div>
              <div className="font-semibold text-lg">
                {sampleSchema.metric}
              </div>
            </div>
            <div className="text-2xl font-bold" style={{ color: STAKEHOLDER_COLORS[sampleSchema.stakeholder] }}>
              {sampleSchema.value}
            </div>
          </div>
        </motion.div>
      </FigmaComponentWrapper>
    </div>
  );
};