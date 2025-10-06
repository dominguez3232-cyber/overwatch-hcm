import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MetricCard, 
  SectionFrame, 
  OverlayPanel, 
  CaptionBlock, 
  ProofEngineMetric, 
  UIElement 
} from './FigmaComponentScaffolds';

// Sample data matching your schema structure
const sampleMetrics = [
  {
    stakeholder: 'CEO' as const,
    module: 'ERP' as const,
    metric: 'Revenue Growth',
    value: '23.5',
    unit: '%',
    trend: 'up' as const,
    content: {
      metricContext: 'Revenue growth is the CEO\'s north star metric for sustainable scaling.',
      strategicGuidance: 'Disciplined growth builds investor confidence and market position.',
      tacticalTip: 'Anchor growth to repeatable playbooks and validated customer segments.',
      schemaTrace: 'erp.revenue_growth.quarterly_variance'
    },
    caption: 'Growth that scales with discipline.'
  },
  {
    stakeholder: 'CFO' as const,
    module: 'EPM' as const,
    metric: 'Forecast Accuracy',
    value: '89',
    unit: '%',
    trend: 'stable' as const,
    content: {
      metricContext: 'Forecast accuracy measures alignment between projected and actual financials.',
      strategicGuidance: 'High accuracy builds board confidence and budget discipline.',
      tacticalTip: 'Use rolling forecasts with schema-linked variance tracking.',
      schemaTrace: 'epm.forecast_accuracy.variance_tracking.enabled'
    },
    caption: 'Confidence in every projection.'
  },
  {
    stakeholder: 'CHRO' as const,
    module: 'HCM' as const,
    metric: 'Engagement Score',
    value: '8.4',
    unit: '/10',
    trend: 'up' as const,
    content: {
      metricContext: 'Employee engagement drives productivity and retention across all functions.',
      strategicGuidance: 'Culture becomes the force multiplier for business outcomes.',
      tacticalTip: 'Link engagement metrics to business KPIs for strategic alignment.',
      schemaTrace: 'hcm.engagement.cultural_alignment.score'
    },
    caption: 'Culture as competitive advantage.'
  },
  {
    stakeholder: 'COO' as const,
    module: 'CRM' as const,
    metric: 'Pipeline Conversion',
    value: '34.2',
    unit: '%',
    trend: 'up' as const,
    content: {
      metricContext: 'Pipeline conversion efficiency directly impacts revenue predictability.',
      strategicGuidance: 'Systematic conversion improvement drives scalable growth.',
      tacticalTip: 'Implement stage-gate criteria with automated tracking.',
      schemaTrace: 'crm.pipeline.conversion_rate.stage_analysis'
    },
    caption: 'Predictable revenue engine.'
  }
];

const proofMetrics = [
  {
    metric: 'Revenue Lift',
    value: '127',
    unit: '%',
    impact: 'Average revenue increase across founder-led deployments'
  },
  {
    metric: 'Time to ROI',
    value: '90',
    unit: 'days',
    impact: 'Median time to positive return on OVERWATCH³ investment'
  },
  {
    metric: 'Compliance Score',
    value: '99.2',
    unit: '%',
    impact: 'Regulatory compliance rate across all client deployments'
  }
];

export const FigmaScaffoldDemo: React.FC<{
  language: 'en' | 'es';
}> = ({ language }) => {
  const [activeOverlay, setActiveOverlay] = useState<any>(null);
  const [selectedStakeholder, setSelectedStakeholder] = useState<'CEO' | 'CFO' | 'CHRO' | 'COO'>('CEO');

  const handleMetricClick = (metric: any) => {
    setActiveOverlay(metric);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  const filteredMetrics = sampleMetrics.filter(m => m.stakeholder === selectedStakeholder);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Demo Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">
            {language === 'en' ? 'Figma Component Scaffold Demo' : 'Demo de Componentes Figma'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === 'en' 
              ? 'Schema → Figma → Anima → React Pipeline' 
              : 'Pipeline Esquema → Figma → Anima → React'
            }
          </p>
          
          {/* Language Toggle UI Element */}
          <UIElement 
            element="toggle-en-es"
            language={language}
            props={{ 
              onChange: (lang: string) => console.log('Language change:', lang) 
            }}
          />
        </motion.div>

        {/* Stakeholder Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center gap-4"
        >
          {(['CEO', 'CFO', 'CHRO', 'COO'] as const).map((stakeholder) => (
            <button
              key={stakeholder}
              onClick={() => setSelectedStakeholder(stakeholder)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all
                ${selectedStakeholder === stakeholder 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }
              `}
            >
              {stakeholder}
            </button>
          ))}
        </motion.div>

        {/* Section Frame Demo */}
        <SectionFrame
          stakeholder={selectedStakeholder}
          module={filteredMetrics[0]?.module || 'ERP'}
          title={`${selectedStakeholder} Command Center`}
          subtitle={language === 'en' 
            ? `Strategic metrics for ${selectedStakeholder.toLowerCase()} stakeholder`
            : `Métricas estratégicas para stakeholder ${selectedStakeholder.toLowerCase()}`
          }
          language={language}
        >
          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMetrics.map((metric, index) => (
              <MetricCard
                key={`${metric.stakeholder}-${metric.metric}`}
                stakeholder={metric.stakeholder}
                module={metric.module}
                metric={metric.metric}
                value={metric.value}
                unit={metric.unit}
                trend={metric.trend}
                language={language}
                size="md"
                onClick={() => handleMetricClick(metric)}
                onHover={() => console.log('Hover:', metric.metric)}
              />
            ))}
          </div>
          
          {/* Caption Block for selected stakeholder */}
          {filteredMetrics[0] && (
            <CaptionBlock
              stakeholder={filteredMetrics[0].stakeholder}
              metric={filteredMetrics[0].metric}
              caption={filteredMetrics[0].caption}
              language={language}
              variant="cinematic"
            />
          )}
        </SectionFrame>

        {/* Proof Engine Section */}
        <SectionFrame
          stakeholder="CEO"
          module="EPM"
          title={language === 'en' ? 'Proof Engine Results' : 'Resultados del Motor de Prueba'}
          subtitle={language === 'en' 
            ? 'Validated outcomes across founder-led deployments'
            : 'Resultados validados en implementaciones lideradas por fundadores'
          }
          language={language}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofMetrics.map((proof, index) => (
              <ProofEngineMetric
                key={proof.metric}
                metric={proof.metric}
                value={proof.value}
                unit={proof.unit}
                impact={proof.impact}
                language={language}
                size="md"
              />
            ))}
          </div>
        </SectionFrame>

        {/* Component Mapping Reference */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-card rounded-lg p-6 border border-border"
        >
          <h3 className="text-xl font-bold mb-4">
            {language === 'en' ? 'Component Mapping Reference' : 'Referencia de Mapeo de Componentes'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-blue-400">Schema → Figma → React</div>
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>metric-card/cfo-forecast-accuracy</div>
                <div>section/ceo-epm</div>
                <div>overlay/chro-engagement-score</div>
                <div>caption/coo-pipeline-conversion</div>
                <div>proof/revenue-lift</div>
                <div>ui/toggle-en-es</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-green-400">
                {language === 'en' ? 'Clean Anima Export' : 'Exportación Limpia de Anima'}
              </div>
              <div className="text-xs text-muted-foreground">
                {language === 'en'
                  ? 'Components export with predictable names, props, and Tailwind classes that match your existing system.'
                  : 'Los componentes se exportan con nombres predecibles, props y clases de Tailwind que coinciden con tu sistema existente.'
                }
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <div className="flex justify-center">
          <UIElement 
            element="status-indicator"
            language={language}
            props={{ status: 'online' }}
          />
        </div>
      </div>

      {/* Overlay Panel */}
      <OverlayPanel
        stakeholder={activeOverlay?.stakeholder}
        metric={activeOverlay?.metric}
        content={activeOverlay?.content}
        language={language}
        isOpen={!!activeOverlay}
        onClose={closeOverlay}
      />
    </div>
  );
};

export default FigmaScaffoldDemo;