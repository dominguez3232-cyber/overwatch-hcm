import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Users, DollarSign, Target, Globe } from 'lucide-react';
import { SchemaNode, STAKEHOLDER_COLORS, schemaToFigmaName, FigmaComponentWrapper } from './FigmaScaffoldSystem';
import { MetricCard } from './MetricCardScaffold';

// Section component following Figma naming convention
// Pattern: section/{stakeholder}-{module}
export interface SectionProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  title?: string;
  description?: string;
  metrics: SchemaNode[];
  language: 'en' | 'es';
  layout?: 'grid' | 'list' | 'dashboard' | 'executive';
  showHeader?: boolean;
  interactive?: boolean;
  onMetricClick?: (metric: SchemaNode) => void;
  onSectionAction?: (action: string) => void;
  className?: string;
}

// Generate the Figma component name for sections
export function getSectionFigmaName(stakeholder: string, module: string): string {
  return schemaToFigmaName('section', stakeholder, module, module);
}

// Module configuration with icons and colors
const moduleConfigs = {
  ERP: {
    icon: DollarSign,
    color: '#10B981', // Emerald
    title: { en: 'Enterprise Resource Planning', es: 'Planificación de Recursos Empresariales' },
    description: { 
      en: 'Financial operations and resource management',
      es: 'Operaciones financieras y gestión de recursos'
    }
  },
  EPM: {
    icon: BarChart3,
    color: '#3B82F6', // Blue
    title: { en: 'Enterprise Performance Management', es: 'Gestión de Rendimiento Empresarial' },
    description: { 
      en: 'Strategic planning and performance analytics',
      es: 'Planificación estratégica y análisis de rendimiento'
    }
  },
  HCM: {
    icon: Users,
    color: '#8B5CF6', // Purple
    title: { en: 'Human Capital Management', es: 'Gestión de Capital Humano' },
    description: { 
      en: 'Talent management and workforce optimization',
      es: 'Gestión de talento y optimización de fuerza laboral'
    }
  },
  CRM: {
    icon: Target,
    color: '#F59E0B', // Amber
    title: { en: 'Customer Relationship Management', es: 'Gestión de Relaciones con Clientes' },
    description: { 
      en: 'Customer acquisition and relationship optimization',
      es: 'Adquisición de clientes y optimización de relaciones'
    }
  }
};

// Layout configurations
const layoutConfigs = {
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4',
    spacing: 'space-y-6'
  },
  list: {
    container: 'flex flex-col gap-4',
    spacing: 'space-y-6'
  },
  dashboard: {
    container: 'grid grid-cols-1 lg:grid-cols-3 gap-6',
    spacing: 'space-y-8'
  },
  executive: {
    container: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    spacing: 'space-y-10'
  }
};

// Section header component
const SectionHeader: React.FC<{
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  title?: string;
  description?: string;
  language: 'en' | 'es';
  onAction?: (action: string) => void;
}> = ({ stakeholder, module, title, description, language, onAction }) => {
  const moduleConfig = moduleConfigs[module];
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];
  const IconComponent = moduleConfig.icon;
  
  const displayTitle = title || moduleConfig.title[language];
  const displayDescription = description || moduleConfig.description[language];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${stakeholderColor}15` }}
        >
          <IconComponent 
            className="w-6 h-6" 
            style={{ color: stakeholderColor }} 
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold">{displayTitle}</h2>
            <span 
              className="text-xs font-medium px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: `${stakeholderColor}20`,
                color: stakeholderColor 
              }}
            >
              {stakeholder}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{displayDescription}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onAction?.('refresh')}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          title={language === 'en' ? 'Refresh data' : 'Actualizar datos'}
        >
          <TrendingUp className="w-4 h-4" />
        </button>
        <button
          onClick={() => onAction?.('settings')}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          title={language === 'en' ? 'Section settings' : 'Configuración de sección'}
        >
          <Globe className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Main Section component
export const Section: React.FC<SectionProps> = ({
  stakeholder,
  module,
  title,
  description,
  metrics,
  language,
  layout = 'grid',
  showHeader = true,
  interactive = true,
  onMetricClick,
  onSectionAction,
  className = ''
}) => {
  const figmaName = getSectionFigmaName(stakeholder, module);
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];
  const layoutConfig = layoutConfigs[layout];

  // Filter metrics for this stakeholder/module
  const relevantMetrics = metrics.filter(metric => 
    metric.stakeholder === stakeholder || 
    metric.module === module
  );

  return (
    <FigmaComponentWrapper figmaName={figmaName} className={className}>
      <motion.section
        className={`p-6 bg-card rounded-lg border border-border ${layoutConfig.spacing} ${className}`}
        style={{ borderTopColor: stakeholderColor, borderTopWidth: '3px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Section Header */}
        {showHeader && (
          <SectionHeader
            stakeholder={stakeholder}
            module={module}
            title={title}
            description={description}
            language={language}
            onAction={onSectionAction}
          />
        )}

        {/* Metrics Container */}
        {relevantMetrics.length > 0 ? (
          <div className={layoutConfig.container}>
            {relevantMetrics.map((metric, index) => (
              <MetricCard
                key={`${metric.stakeholder}-${metric.metric}-${index}`}
                stakeholder={metric.stakeholder}
                metric={metric.metric}
                value={metric.value}
                unit={metric.unit}
                trend={metric.trend}
                threshold={metric.threshold}
                language={language}
                size={layout === 'executive' ? 'lg' : layout === 'dashboard' ? 'md' : 'sm'}
                interactive={interactive}
                onClick={() => onMetricClick?.(metric)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-lg mb-2">
              {language === 'en' ? 'No metrics available' : 'No hay métricas disponibles'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' 
                ? 'Metrics will appear here once data is connected'
                : 'Las métricas aparecerán aquí una vez que se conecten los datos'
              }
            </p>
          </div>
        )}

        {/* Section Footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <code className="bg-muted px-2 py-1 rounded">
              {figmaName}
            </code>
            <span>•</span>
            <span>{relevantMetrics.length} {language === 'en' ? 'metrics' : 'métricas'}</span>
          </div>
          <div className="flex items-center gap-1">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: stakeholderColor }}
            />
            <span>{stakeholder} Module</span>
          </div>
        </div>
      </motion.section>
    </FigmaComponentWrapper>
  );
};

// Section collection for full stakeholder dashboard
export const StakeholderDashboard: React.FC<{
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  modules: ('ERP' | 'EPM' | 'HCM' | 'CRM')[];
  allMetrics: SchemaNode[];
  language: 'en' | 'es';
  onMetricClick?: (metric: SchemaNode) => void;
  className?: string;
}> = ({ stakeholder, modules, allMetrics, language, onMetricClick, className = '' }) => {
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Dashboard Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: stakeholderColor }}
          >
            {stakeholder}
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold">
              {stakeholder} {language === 'en' ? 'Dashboard' : 'Panel'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Executive command center with real-time insights'
                : 'Centro de comando ejecutivo con insights en tiempo real'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Module Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {modules.map((module, index) => (
          <Section
            key={`${stakeholder}-${module}-${index}`}
            stakeholder={stakeholder}
            module={module}
            metrics={allMetrics}
            language={language}
            layout="dashboard"
            onMetricClick={onMetricClick}
            onSectionAction={(action) => console.log(`${module} action:`, action)}
          />
        ))}
      </div>
    </div>
  );
};

// Demo component
export const SectionDemo: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const sampleMetrics: SchemaNode[] = [
    {
      stakeholder: 'CEO',
      module: 'ERP',
      metric: 'Revenue Growth',
      value: '24%',
      unit: '%',
      trend: 'up',
      threshold: { warning: 15, critical: 10 }
    },
    {
      stakeholder: 'CEO',
      module: 'EPM',
      metric: 'Market Share',
      value: '18%',
      unit: '%',
      trend: 'stable'
    },
    {
      stakeholder: 'CFO',
      module: 'EPM',
      metric: 'Forecast Accuracy',
      value: '89%',
      unit: '%',
      trend: 'up',
      threshold: { warning: 80, critical: 70 }
    },
    {
      stakeholder: 'CFO',
      module: 'ERP',
      metric: 'Budget Variance',
      value: '5%',
      unit: '%',
      trend: 'down',
      threshold: { warning: 10, critical: 15 }
    },
    {
      stakeholder: 'CHRO',
      module: 'HCM',
      metric: 'Employee Engagement',
      value: '85%',
      unit: '%',
      trend: 'up',
      threshold: { warning: 75, critical: 65 }
    },
    {
      stakeholder: 'COO',
      module: 'CRM',
      metric: 'Pipeline Conversion',
      value: '32%',
      unit: '%',
      trend: 'down',
      threshold: { warning: 35, critical: 25 }
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Section System Demo' : 'Demo Sistema de Secciones'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Modular sections organized by stakeholder and business module'
            : 'Secciones modulares organizadas por stakeholder y módulo de negocio'
          }
        </p>
      </div>

      {/* Individual sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Section
          stakeholder="CEO"
          module="ERP"
          metrics={sampleMetrics}
          language={language}
          layout="grid"
          onMetricClick={(metric) => console.log('Metric clicked:', metric)}
          onSectionAction={(action) => console.log('Section action:', action)}
        />
        
        <Section
          stakeholder="CFO"
          module="EPM"
          metrics={sampleMetrics}
          language={language}
          layout="grid"
          onMetricClick={(metric) => console.log('Metric clicked:', metric)}
          onSectionAction={(action) => console.log('Section action:', action)}
        />
      </div>

      {/* Full stakeholder dashboard */}
      <StakeholderDashboard
        stakeholder="CHRO"
        modules={['HCM', 'EPM']}
        allMetrics={sampleMetrics}
        language={language}
        onMetricClick={(metric) => console.log('Dashboard metric clicked:', metric)}
      />

      {/* Figma naming examples */}
      <div className="bg-muted rounded-lg p-4">
        <h3 className="font-semibold mb-3">
          {language === 'en' ? 'Generated Figma Names:' : 'Nombres Figma Generados:'}
        </h3>
        <div className="space-y-1 font-mono text-sm">
          <div className="text-purple-400">section/ceo-erp</div>
          <div className="text-purple-400">section/cfo-epm</div>
          <div className="text-purple-400">section/chro-hcm</div>
          <div className="text-purple-400">section/coo-crm</div>
        </div>
      </div>
    </div>
  );
};