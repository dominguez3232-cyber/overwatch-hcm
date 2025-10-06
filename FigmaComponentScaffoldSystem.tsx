import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';

// Figma Component Naming Convention Implementation
// Maps schema → figma → react with traceable naming

interface FigmaComponentConfig {
  componentType: 'section' | 'metric-card' | 'overlay' | 'caption' | 'proof' | 'ui';
  stakeholder?: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module?: 'HCM' | 'ERP' | 'EPM' | 'CRM';
  metric?: string;
  element?: string;
  schemaPath?: string;
  figmaName: string;
  reactComponentName: string;
}

interface MetricCardProps {
  config: FigmaComponentConfig;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  language: 'en' | 'es';
  onHover?: () => void;
  onClick?: () => void;
  threshold?: {
    value: number;
    operator: '<' | '>' | '=' | '<=' | '>=';
    alertStyle: 'success' | 'warning' | 'error';
  };
}

interface SectionProps {
  config: FigmaComponentConfig;
  children: React.ReactNode;
  language: 'en' | 'es';
  className?: string;
}

interface OverlayProps {
  config: FigmaComponentConfig;
  isActive: boolean;
  content: {
    metricContext: string;
    strategicGuidance: string;
    tacticalTip: string;
    schemaTrace: string;
  };
  language: 'en' | 'es';
  onClose: () => void;
}

interface CaptionProps {
  config: FigmaComponentConfig;
  text: string;
  language: 'en' | 'es';
  className?: string;
}

// Color mapping based on stakeholder
const stakeholderColors = {
  CEO: {
    primary: '#003366', // Deep Blue
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400'
  },
  CFO: {
    primary: '#007F5F', // Emerald Green
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400'
  },
  CHRO: {
    primary: '#6A0DAD', // Royal Purple
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400'
  },
  COO: {
    primary: '#D35400', // Burnt Orange
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400'
  }
};

const proofColor = {
  primary: '#DAA520', // Gold
  bg: 'bg-yellow-500/10',
  border: 'border-yellow-500/30',
  text: 'text-yellow-400'
};

// Figma Naming Convention Generator
export const generateFigmaName = (
  componentType: string,
  stakeholder?: string,
  module?: string,
  metric?: string,
  element?: string
): string => {
  const kebabCase = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  
  switch (componentType) {
    case 'section':
      return `section/${kebabCase(stakeholder || '')}-${kebabCase(module || '')}`;
    case 'metric-card':
      return `metric-card/${kebabCase(stakeholder || '')}-${kebabCase(metric || '')}`;
    case 'overlay':
      return `overlay/${kebabCase(stakeholder || '')}-${kebabCase(metric || '')}`;
    case 'caption':
      return `caption/${kebabCase(stakeholder || '')}-${kebabCase(metric || '')}`;
    case 'proof':
      return `proof/${kebabCase(metric || '')}`;
    case 'ui':
      return `ui/${kebabCase(element || '')}`;
    default:
      return `${componentType}/${kebabCase(stakeholder || '')}-${kebabCase(metric || element || '')}`;
  }
};

// Schema-Traceable Metric Card Component
export const MetricCard: React.FC<MetricCardProps> = ({
  config,
  value,
  unit = '',
  trend = 'stable',
  language,
  onHover,
  onClick,
  threshold
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [alertTriggered, setAlertTriggered] = useState(false);
  
  const stakeholderColor = config.stakeholder 
    ? stakeholderColors[config.stakeholder] 
    : proofColor;

  // Threshold checking
  useEffect(() => {
    if (threshold && typeof value === 'number') {
      const { value: thresholdValue, operator } = threshold;
      let triggered = false;
      
      switch (operator) {
        case '<': triggered = value < thresholdValue; break;
        case '>': triggered = value > thresholdValue; break;
        case '<=': triggered = value <= thresholdValue; break;
        case '>=': triggered = value >= thresholdValue; break;
        case '=': triggered = value === thresholdValue; break;
      }
      
      setAlertTriggered(triggered);
    }
  }, [value, threshold]);

  const trendIcon = {
    up: '↗️',
    down: '↘️',
    stable: '→'
  };

  return (
    <motion.div
      data-figma-name={config.figmaName}
      data-schema-path={config.schemaPath}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-300
        ${alertTriggered ? 'ring-2 ring-red-500/50' : ''}
      `}
    >
      <Card className={`
        ${stakeholderColor.bg} ${stakeholderColor.border} 
        hover:shadow-lg hover:shadow-primary/20
        ${isHovered ? 'transform scale-[1.02]' : ''}
        ${alertTriggered ? 'border-red-500/50' : ''}
      `}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {config.metric}
            </CardTitle>
            <div className="flex items-center gap-2">
              {config.stakeholder && (
                <Badge variant="outline" className={`${stakeholderColor.text} text-xs`}>
                  {config.stakeholder}
                </Badge>
              )}
              {trend !== 'stable' && (
                <span className="text-lg">{trendIcon[trend]}</span>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              {value}
            </span>
            {unit && (
              <span className="text-sm text-muted-foreground">{unit}</span>
            )}
          </div>
          
          {config.schemaPath && (
            <div className="mt-2 text-xs text-muted-foreground font-mono">
              {config.schemaPath}
            </div>
          )}
          
          {alertTriggered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-xs text-red-400 flex items-center gap-1"
            >
              ⚠️ {language === 'en' ? 'Threshold Alert' : 'Alerta de Umbral'}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Schema-Traceable Section Component
export const Section: React.FC<SectionProps> = ({
  config,
  children,
  language,
  className = ''
}) => {
  const stakeholderColor = config.stakeholder 
    ? stakeholderColors[config.stakeholder] 
    : proofColor;

  return (
    <section
      data-figma-name={config.figmaName}
      data-schema-path={config.schemaPath}
      className={`
        ${stakeholderColor.bg} ${stakeholderColor.border}
        rounded-lg border p-6
        ${className}
      `}
    >
      <div className="flex items-center gap-3 mb-6">
        {config.stakeholder && (
          <Badge className={`${stakeholderColor.text}`}>
            {config.stakeholder}
          </Badge>
        )}
        {config.module && (
          <Badge variant="outline">
            {config.module}
          </Badge>
        )}
        <span className="text-xs text-muted-foreground font-mono">
          {config.figmaName}
        </span>
      </div>
      {children}
    </section>
  );
};

// Schema-Traceable Overlay Component
export const Overlay: React.FC<OverlayProps> = ({
  config,
  isActive,
  content,
  language,
  onClose
}) => {
  const stakeholderColor = config.stakeholder 
    ? stakeholderColors[config.stakeholder] 
    : proofColor;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          data-figma-name={config.figmaName}
          data-schema-path={config.schemaPath}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`
              ${stakeholderColor.bg} ${stakeholderColor.border}
              border rounded-lg p-6 max-w-md w-full
              bg-card text-card-foreground shadow-lg backdrop-blur-sm
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {config.stakeholder && (
                  <Badge className={`${stakeholderColor.text}`}>
                    {config.stakeholder}
                  </Badge>
                )}
                <span className="font-medium">{config.metric}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">
                  {language === 'en' ? 'Context' : 'Contexto'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {content.metricContext}
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">
                  {language === 'en' ? 'Strategic Guidance' : 'Guía Estratégica'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {content.strategicGuidance}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">
                  {language === 'en' ? 'Tactical Tip' : 'Consejo Táctico'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {content.tacticalTip}
                </p>
              </div>
              
              <div className="bg-muted/50 p-3 rounded text-xs font-mono">
                <div className="text-muted-foreground mb-1">Schema Trace:</div>
                <div className={stakeholderColor.text}>{content.schemaTrace}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Schema-Traceable Caption Component
export const Caption: React.FC<CaptionProps> = ({
  config,
  text,
  language,
  className = ''
}) => {
  const stakeholderColor = config.stakeholder 
    ? stakeholderColors[config.stakeholder] 
    : proofColor;

  return (
    <div
      data-figma-name={config.figmaName}
      data-schema-path={config.schemaPath}
      className={`
        text-center text-lg italic
        ${stakeholderColor.text}
        ${className}
      `}
    >
      {text}
    </div>
  );
};

// Component Factory for Dynamic Generation
export const createFigmaComponent = (
  type: 'section' | 'metric-card' | 'overlay' | 'caption' | 'proof' | 'ui',
  stakeholder?: 'CEO' | 'CFO' | 'CHRO' | 'COO',
  module?: 'HCM' | 'ERP' | 'EPM' | 'CRM',
  metric?: string,
  element?: string
): FigmaComponentConfig => {
  const figmaName = generateFigmaName(type, stakeholder, module, metric, element);
  const reactComponentName = figmaName
    .split('/')
    .map(part => part.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(''))
    .join('');

  return {
    componentType: type,
    stakeholder,
    module,
    metric,
    element,
    figmaName,
    reactComponentName,
    schemaPath: `${module?.toLowerCase()}.${metric?.toLowerCase().replace(/[^a-z0-9]/gi, '_')}`
  };
};

// Figma Component Scaffold Demo
export const FigmaComponentScaffoldDemo: React.FC<{
  language: 'en' | 'es';
}> = ({ language }) => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  // Example configurations
  const sampleConfigs = [
    createFigmaComponent('metric-card', 'CEO', 'ERP', 'Revenue Growth'),
    createFigmaComponent('metric-card', 'CFO', 'EPM', 'Forecast Accuracy'),
    createFigmaComponent('metric-card', 'CHRO', 'HCM', 'Engagement Score'),
    createFigmaComponent('metric-card', 'COO', 'CRM', 'Pipeline Conversion'),
    createFigmaComponent('proof', undefined, undefined, 'Revenue Lift')
  ];

  const sampleContent = {
    en: {
      metricContext: "This metric provides strategic insight into business performance.",
      strategicGuidance: "Focus on data-driven decisions to optimize outcomes.",
      tacticalTip: "Use real-time monitoring and automated alerts for best results.",
      schemaTrace: "system.metrics.performance.tracking.enabled = true"
    },
    es: {
      metricContext: "Esta métrica proporciona información estratégica sobre el rendimiento empresarial.",
      strategicGuidance: "Enfócate en decisiones basadas en datos para optimizar resultados.",
      tacticalTip: "Usa monitoreo en tiempo real y alertas automatizadas para mejores resultados.",
      schemaTrace: "system.metrics.performance.tracking.enabled = true"
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          {language === 'en' ? 'Figma Component Scaffold System' : 'Sistema de Scaffolding de Componentes Figma'}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Schema-traceable components that map cleanly from JSON → Figma → React with consistent naming convention'
            : 'Componentes trazables por esquema que mapean limpiamente de JSON → Figma → React con convención de nomenclatura consistente'
          }
        </p>
      </div>

      <Section
        config={createFigmaComponent('section', 'CEO', 'ERP')}
        language={language}
        className="space-y-6"
      >
        <h2 className="text-xl font-bold mb-6">
          {language === 'en' ? 'Executive Metrics Dashboard' : 'Panel de Métricas Ejecutivas'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleConfigs.map((config, index) => (
            <MetricCard
              key={config.figmaName}
              config={config}
              value={[95, 89, 78, 85, 12][index]}
              unit={['%', '%', '%', '%', '%'][index]}
              trend={['up', 'stable', 'down', 'up', 'up'][index] as 'up' | 'down' | 'stable'}
              language={language}
              onHover={() => console.log(`Hovering: ${config.figmaName}`)}
              onClick={() => setActiveOverlay(config.figmaName)}
              threshold={index === 2 ? { value: 80, operator: '<', alertStyle: 'warning' } : undefined}
            />
          ))}
        </div>
      </Section>

      <div className="bg-card p-6 rounded-lg border">
        <h3 className="font-bold mb-4">
          {language === 'en' ? 'Component Mapping Example' : 'Ejemplo de Mapeo de Componentes'}
        </h3>
        <div className="space-y-2 text-sm font-mono">
          <div className="text-muted-foreground">Schema:</div>
          <div className="bg-muted p-2 rounded text-green-400">
            {`{ "stakeholder": "CFO", "module": "EPM", "metric": "Forecast Accuracy", "value": "89%", "unit": "%" }`}
          </div>
          <div className="text-muted-foreground">Figma Name:</div>
          <div className="bg-muted p-2 rounded text-blue-400">
            metric-card/cfo-forecast-accuracy
          </div>
          <div className="text-muted-foreground">React Component:</div>
          <div className="bg-muted p-2 rounded text-purple-400">
            {`<MetricCard stakeholder="CFO" metric="forecast-accuracy" value="89%" unit="%" />`}
          </div>
        </div>
      </div>

      {/* Active Overlay */}
      {activeOverlay && (
        <Overlay
          config={sampleConfigs.find(c => c.figmaName === activeOverlay)!}
          isActive={true}
          content={sampleContent[language]}
          language={language}
          onClose={() => setActiveOverlay(null)}
        />
      )}

      <Caption
        config={createFigmaComponent('caption', 'CEO', undefined, 'Leadership Excellence')}
        text={language === 'en' 
          ? "Every metric tells a story. Every story drives strategy." 
          : "Cada métrica cuenta una historia. Cada historia impulsa la estrategia."
        }
        language={language}
        className="mt-8"
      />
    </div>
  );
};

export default FigmaComponentScaffoldDemo;