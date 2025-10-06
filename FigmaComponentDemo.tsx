import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Copy, Code, Eye, Download, Zap } from 'lucide-react';

import {
  FigmaComponentWrapper,
  FigmaComponentGrid,
  FigmaStakeholderDashboard,
  generateSampleFigmaSchemas,
  createFigmaComponent,
  type FigmaComponentSchema
} from './FigmaComponentScaffold';

// Demo component that showcases the Figma naming convention system
export const FigmaComponentDemo: React.FC<{
  language?: 'en' | 'es';
  onNavigate?: (path: string) => void;
}> = ({ language = 'en', onNavigate }) => {
  const [selectedStakeholder, setSelectedStakeholder] = useState<'CEO' | 'CFO' | 'CHRO' | 'COO'>('CEO');
  const [activeTab, setActiveTab] = useState('showcase');
  
  // Generate sample schemas for each stakeholder
  const ceoSchemas = generateSampleFigmaSchemas('CEO');
  const cfoSchemas = generateSampleFigmaSchemas('CFO');
  const chroSchemas = generateSampleFigmaSchemas('CHRO');
  const cooSchemas = generateSampleFigmaSchemas('COO');

  // Sample individual component schemas for testing
  const sampleSchemas: Record<string, FigmaComponentSchema[]> = {
    'metric-cards': [
      {
        componentType: 'metric-card',
        stakeholder: 'CEO',
        metric: 'revenue',
        content: { title: 'Revenue', value: '$2.4M', unit: '' },
        config: { size: 'md', interactive: true, showDetails: true }
      },
      {
        componentType: 'metric-card',
        stakeholder: 'CFO',
        metric: 'forecast-accuracy',
        content: { title: 'Forecast Accuracy', value: '89', unit: '%' },
        config: { size: 'md', interactive: true, showDetails: true }
      },
      {
        componentType: 'metric-card',
        stakeholder: 'CHRO',
        metric: 'engagement-score',
        content: { title: 'Engagement Score', value: '87', unit: '%' },
        config: { size: 'md', interactive: true, showDetails: true }
      },
      {
        componentType: 'metric-card',
        stakeholder: 'COO',
        metric: 'pipeline-conversion',
        content: { title: 'Pipeline Conversion', value: '23', unit: '%' },
        config: { size: 'md', interactive: true, showDetails: true }
      }
    ],
    'proof-engines': [
      {
        componentType: 'proof',
        metric: 'revenue-lift',
        content: { value: '23', unit: '%' },
        config: { type: 'validated', size: 'md', showDetails: true }
      },
      {
        componentType: 'proof',
        metric: 'cost-reduction',
        content: { value: '$480K', unit: '' },
        config: { type: 'certified', size: 'md', showDetails: true }
      },
      {
        componentType: 'proof',
        metric: 'efficiency-gain',
        content: { value: '45', unit: '%' },
        config: { type: 'measured', size: 'md', showDetails: true }
      }
    ],
    'captions': [
      {
        componentType: 'caption',
        stakeholder: 'CEO',
        metric: 'revenue',
        content: { text: 'Revenue growth accelerating', value: '+15', unit: '%' },
        config: { type: 'trend', size: 'sm' }
      },
      {
        componentType: 'caption',
        stakeholder: 'CFO',
        metric: 'forecast-accuracy',
        content: { text: 'Forecast accuracy improved', value: '89', unit: '%' },
        config: { type: 'success', size: 'sm' }
      }
    ]
  };

  const content = {
    en: {
      title: 'Figma Component System Demo',
      subtitle: 'Schema-driven components with clean naming convention',
      tabs: {
        showcase: 'Component Showcase',
        stakeholder: 'Stakeholder Dashboard',
        individual: 'Individual Components',
        code: 'Code Examples'
      },
      sections: {
        metricCards: 'Metric Cards',
        proofEngines: 'Proof Engines',
        captions: 'Captions & Insights',
        sections: 'Section Layouts'
      },
      copy: 'Copy Schema',
      download: 'Export Components'
    },
    es: {
      title: 'Demo del Sistema de Componentes Figma',
      subtitle: 'Componentes basados en esquema con convención de nomenclatura limpia',
      tabs: {
        showcase: 'Showcase de Componentes',
        stakeholder: 'Panel de Stakeholder',
        individual: 'Componentes Individuales',
        code: 'Ejemplos de Código'
      },
      sections: {
        metricCards: 'Tarjetas de Métricas',
        proofEngines: 'Motores de Prueba',
        captions: 'Leyendas y Perspectivas',
        sections: 'Diseños de Sección'
      },
      copy: 'Copiar Esquema',
      download: 'Exportar Componentes'
    }
  };

  const t = content[language];

  const copySchema = (schema: FigmaComponentSchema) => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            {t.title}
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        
        {/* Naming Convention Overview */}
        <div className="mt-8 bg-card/50 rounded-xl p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Naming Convention Pattern
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
            <div className="bg-blue-950/20 border border-blue-500/30 rounded-lg p-3">
              <div className="font-medium text-blue-400 mb-1">Section</div>
              <code className="text-xs text-muted-foreground">section/ceo-erp-epm</code>
            </div>
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3">
              <div className="font-medium text-emerald-400 mb-1">Metric Card</div>
              <code className="text-xs text-muted-foreground">metric-card/cfo-revenue</code>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 rounded-lg p-3">
              <div className="font-medium text-purple-400 mb-1">Overlay</div>
              <code className="text-xs text-muted-foreground">overlay/chro-engagement</code>
            </div>
            <div className="bg-orange-950/20 border border-orange-500/30 rounded-lg p-3">
              <div className="font-medium text-orange-400 mb-1">Caption</div>
              <code className="text-xs text-muted-foreground">caption/coo-pipeline</code>
            </div>
            <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="font-medium text-yellow-400 mb-1">Proof</div>
              <code className="text-xs text-muted-foreground">proof/revenue-lift</code>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="showcase">{t.tabs.showcase}</TabsTrigger>
          <TabsTrigger value="stakeholder">{t.tabs.stakeholder}</TabsTrigger>
          <TabsTrigger value="individual">{t.tabs.individual}</TabsTrigger>
          <TabsTrigger value="code">{t.tabs.code}</TabsTrigger>
        </TabsList>

        {/* Component Showcase */}
        <TabsContent value="showcase" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t.sections.metricCards}
            </h3>
            <FigmaComponentGrid 
              schemas={sampleSchemas['metric-cards']}
              columns={4}
              gap="md"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t.sections.proofEngines}
            </h3>
            <FigmaComponentGrid 
              schemas={sampleSchemas['proof-engines']}
              columns={3}
              gap="lg"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t.sections.captions}
            </h3>
            <div className="flex flex-wrap gap-4">
              {sampleSchemas['captions'].map((schema, index) => (
                <FigmaComponentWrapper
                  key={index}
                  schema={schema}
                />
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Stakeholder Dashboard */}
        <TabsContent value="stakeholder" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-muted-foreground">{language === 'en' ? 'Select Stakeholder:' : 'Seleccionar Stakeholder:'}</span>
            <div className="flex gap-2">
              {(['CEO', 'CFO', 'CHRO', 'COO'] as const).map((stakeholder) => (
                <Button
                  key={stakeholder}
                  variant={selectedStakeholder === stakeholder ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStakeholder(stakeholder)}
                >
                  {stakeholder}
                </Button>
              ))}
            </div>
          </div>

          <Card className="p-6">
            <FigmaStakeholderDashboard
              schemas={
                selectedStakeholder === 'CEO' ? ceoSchemas :
                selectedStakeholder === 'CFO' ? cfoSchemas :
                selectedStakeholder === 'CHRO' ? chroSchemas :
                cooSchemas
              }
              stakeholder={selectedStakeholder}
              language={language}
            />
          </Card>
        </TabsContent>

        {/* Individual Components */}
        <TabsContent value="individual" className="space-y-6">
          {Object.entries(sampleSchemas).map(([category, schemas]) => (
            <Card key={category} className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground capitalize">
                  {category.replace('-', ' ')}
                </h3>
                <Badge variant="outline">
                  {schemas.length} components
                </Badge>
              </div>
              
              <div className="space-y-6">
                {schemas.map((schema, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {schema.componentType === 'ui' 
                            ? `ui/${schema.elementType}`
                            : `${schema.componentType}/${schema.stakeholder}-${schema.metric || schema.module}`
                          }
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copySchema(schema)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <FigmaComponentWrapper 
                        schema={schema}
                        animate={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Code Examples */}
        <TabsContent value="code" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Schema Examples</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Metric Card Schema</h4>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`{
  "componentType": "metric-card",
  "stakeholder": "CEO",
  "metric": "revenue",
  "content": {
    "title": "Revenue",
    "value": "$2.4M",
    "unit": ""
  },
  "config": {
    "size": "md",
    "interactive": true,
    "showDetails": true
  }
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Section Schema</h4>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`{
  "componentType": "section",
  "stakeholder": "CFO",
  "module": "EPM",
  "content": {
    "title": "Enterprise Performance Management",
    "description": "Strategic planning and performance tracking"
  },
  "config": {
    "type": "analytics",
    "showDetails": true
  }
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Proof Engine Schema</h4>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`{
  "componentType": "proof",
  "metric": "revenue-lift",
  "content": {
    "value": "23",
    "unit": "%"
  },
  "config": {
    "type": "validated",
    "size": "md",
    "showDetails": true
  }
}`}
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Usage Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Creating Components from Schema</h4>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { createFigmaComponent } from './FigmaComponentScaffold';

const schema = {
  componentType: "metric-card",
  stakeholder: "CEO",
  metric: "revenue",
  content: { value: "$2.4M" }
};

const component = createFigmaComponent(schema);`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Stakeholder Dashboard</h4>
                <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { FigmaStakeholderDashboard } from './FigmaComponentScaffold';

<FigmaStakeholderDashboard
  schemas={schemaArray}
  stakeholder="CEO"
  language="en"
/>`}
                </pre>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer Actions */}
      <div className="flex items-center justify-center gap-4 pt-8 border-t border-border">
        <Button variant="outline" onClick={() => onNavigate?.('landing')}>
          {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
        </Button>
        <Button variant="default">
          <Download className="w-4 h-4 mr-2" />
          {t.download}
        </Button>
      </div>
    </div>
  );
};