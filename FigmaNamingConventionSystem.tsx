import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Copy, Download, Eye, Code, Palette, Zap } from 'lucide-react';

// Import all scaffold systems
import { FigmaScaffoldDemo, SchemaNode, STAKEHOLDER_COLORS } from './FigmaScaffoldSystem';
import { MetricCardDemo } from './MetricCardScaffold';
import { OverlayDemo } from './OverlayScaffold';
import { CaptionDemo } from './CaptionScaffold';
import { SectionDemo } from './SectionScaffold';

export interface FigmaNamingSystemProps {
  language: 'en' | 'es';
  onExportComponents?: (components: any[]) => void;
  onGenerateCode?: (type: string) => void;
}

// Component type registry
const componentTypes = [
  {
    id: 'section',
    name: 'Sections',
    pattern: 'section/{stakeholder}-{module}',
    example: 'section/ceo-erp-epm',
    color: '#8B5CF6',
    description: {
      en: 'Top-level container frames for stakeholder modules',
      es: 'Marcos contenedores de nivel superior para módulos de stakeholder'
    }
  },
  {
    id: 'metric-card',
    name: 'Metric Cards',
    pattern: 'metric-card/{stakeholder}-{metric}',
    example: 'metric-card/cfo-forecast-accuracy',
    color: '#10B981',
    description: {
      en: 'Individual metric display components',
      es: 'Componentes de visualización de métricas individuales'
    }
  },
  {
    id: 'overlay',
    name: 'Overlays',
    pattern: 'overlay/{stakeholder}-{metric}',
    example: 'overlay/chro-engagement-score',
    color: '#3B82F6',
    description: {
      en: 'Interactive coaching and guidance panels',
      es: 'Paneles interactivos de coaching y guía'
    }
  },
  {
    id: 'caption',
    name: 'Captions',
    pattern: 'caption/{stakeholder}-{metric}',
    example: 'caption/coo-pipeline-conversion',
    color: '#F59E0B',
    description: {
      en: 'Cinematic storytelling text blocks',
      es: 'Bloques de texto narrativo cinemático'
    }
  },
  {
    id: 'proof',
    name: 'Proof Engine',
    pattern: 'proof/{metric}',
    example: 'proof/revenue-lift',
    color: '#DAA520',
    description: {
      en: 'ROI and performance proof components',
      es: 'Componentes de prueba de ROI y rendimiento'
    }
  },
  {
    id: 'ui',
    name: 'UI Elements',
    pattern: 'ui/{element}',
    example: 'ui/header-bar, ui/toggle-en-es',
    color: '#6B7280',
    description: {
      en: 'Global UI and navigation elements',
      es: 'Elementos globales de UI y navegación'
    }
  }
];

// Stakeholder information
const stakeholders = [
  { id: 'CEO', name: 'Chief Executive Officer', color: STAKEHOLDER_COLORS.CEO },
  { id: 'CFO', name: 'Chief Financial Officer', color: STAKEHOLDER_COLORS.CFO },
  { id: 'CHRO', name: 'Chief Human Resources Officer', color: STAKEHOLDER_COLORS.CHRO },
  { id: 'COO', name: 'Chief Operating Officer', color: STAKEHOLDER_COLORS.COO }
];

// Component pattern analyzer
const PatternAnalyzer: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const [selectedType, setSelectedType] = useState<string>('metric-card');
  
  const selectedComponent = componentTypes.find(type => type.id === selectedType);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {componentTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`
              p-3 rounded-lg border transition-all text-left
              ${selectedType === type.id 
                ? 'border-primary bg-primary/10' 
                : 'border-border hover:border-primary/50'
              }
            `}
          >
            <div 
              className="w-4 h-4 rounded mb-2"
              style={{ backgroundColor: type.color }}
            />
            <div className="text-sm font-medium">{type.name}</div>
          </button>
        ))}
      </div>

      {selectedComponent && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div 
                className="w-6 h-6 rounded"
                style={{ backgroundColor: selectedComponent.color }}
              />
              {selectedComponent.name}
            </CardTitle>
            <CardDescription>
              {selectedComponent.description[language]}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                {language === 'en' ? 'Naming Pattern' : 'Patrón de Nombres'}
              </label>
              <div className="mt-1 p-3 bg-muted rounded-lg font-mono text-sm">
                {selectedComponent.pattern}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                {language === 'en' ? 'Example' : 'Ejemplo'}
              </label>
              <div className="mt-1 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <code className="text-emerald-400 text-sm">
                  {selectedComponent.example}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Code generator
const CodeGenerator: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [codeType, setCodeType] = useState<'react' | 'figma' | 'anima'>('react');

  const generateSampleCode = (type: 'react' | 'figma' | 'anima') => {
    const samples = {
      react: `// Generated React Component
import { MetricCard } from './components/MetricCardScaffold';

export const CFOForecastAccuracy = () => (
  <MetricCard
    stakeholder="CFO"
    metric="forecast-accuracy"
    value="89%"
    unit="%"
    trend="up"
    figmaName="metric-card/cfo-forecast-accuracy"
    language="${language}"
  />
);`,
      figma: `// Figma Component Naming
metric-card/cfo-forecast-accuracy
overlay/cfo-forecast-accuracy
caption/cfo-forecast-accuracy
section/cfo-epm

// Layer Structure
┌─ CFO Module (section/cfo-epm)
│  ├─ Forecast Accuracy Card (metric-card/cfo-forecast-accuracy)
│  ├─ Budget Variance Card (metric-card/cfo-budget-variance)
│  └─ Financial Health Card (metric-card/cfo-financial-health)`,
      anima: `// Anima Export Configuration
{
  "figmaName": "metric-card/cfo-forecast-accuracy",
  "componentType": "MetricCard",
  "props": {
    "stakeholder": "CFO",
    "metric": "forecast-accuracy",
    "value": "89%",
    "unit": "%"
  },
  "styling": {
    "borderColor": "#007F5F",
    "accentColor": "#007F5F"
  }
}`
    };
    
    setGeneratedCode(samples[type]);
    setCodeType(type);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button 
          variant={codeType === 'react' ? 'default' : 'outline'}
          size="sm"
          onClick={() => generateSampleCode('react')}
        >
          <Code className="w-4 h-4 mr-2" />
          React
        </Button>
        <Button 
          variant={codeType === 'figma' ? 'default' : 'outline'}
          size="sm"
          onClick={() => generateSampleCode('figma')}
        >
          <Palette className="w-4 h-4 mr-2" />
          Figma
        </Button>
        <Button 
          variant={codeType === 'anima' ? 'default' : 'outline'}
          size="sm"
          onClick={() => generateSampleCode('anima')}
        >
          <Zap className="w-4 h-4 mr-2" />
          Anima
        </Button>
      </div>

      {generatedCode && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">
              {language === 'en' ? 'Generated Code' : 'Código Generado'}
            </CardTitle>
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              <Copy className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Copy' : 'Copiar'}
            </Button>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{generatedCode}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Main Figma Naming Convention System component
export const FigmaNamingConventionSystem: React.FC<FigmaNamingSystemProps> = ({
  language,
  onExportComponents,
  onGenerateCode
}) => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold">
                {language === 'en' ? 'Figma Component Naming Convention' : 'Convención de Nombres de Componentes Figma'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Schema → Figma → React/Tailwind Pipeline'
                  : 'Pipeline Esquema → Figma → React/Tailwind'
                }
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: Code,
                title: language === 'en' ? 'Schema Traceable' : 'Trazable por Esquema',
                desc: language === 'en' ? 'JSON keys → Figma names → React props' : 'Claves JSON → nombres Figma → props React'
              },
              {
                icon: Zap,
                title: language === 'en' ? 'Anima Friendly' : 'Compatible Anima',
                desc: language === 'en' ? 'Clean component exports' : 'Exportaciones limpias de componentes'
              },
              {
                icon: Palette,
                title: language === 'en' ? 'Scalable' : 'Escalable',
                desc: language === 'en' ? 'Easy to add metrics/stakeholders' : 'Fácil agregar métricas/stakeholders'
              },
              {
                icon: Eye,
                title: language === 'en' ? 'Cinematic' : 'Cinemático',
                desc: language === 'en' ? 'Consistent storytelling' : 'Narrativa consistente'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-4">
                  <benefit.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
            <TabsTrigger value="overview">
              {language === 'en' ? 'Overview' : 'Resumen'}
            </TabsTrigger>
            <TabsTrigger value="sections">
              {language === 'en' ? 'Sections' : 'Secciones'}
            </TabsTrigger>
            <TabsTrigger value="metrics">
              {language === 'en' ? 'Metrics' : 'Métricas'}
            </TabsTrigger>
            <TabsTrigger value="overlays">Overlays</TabsTrigger>
            <TabsTrigger value="captions">
              {language === 'en' ? 'Captions' : 'Subtítulos'}
            </TabsTrigger>
            <TabsTrigger value="code">
              {language === 'en' ? 'Code Gen' : 'Gen Código'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <FigmaScaffoldDemo language={language} />
            <PatternAnalyzer language={language} />
          </TabsContent>

          <TabsContent value="sections">
            <SectionDemo language={language} />
          </TabsContent>

          <TabsContent value="metrics">
            <MetricCardDemo language={language} />
          </TabsContent>

          <TabsContent value="overlays">
            <OverlayDemo language={language} />
          </TabsContent>

          <TabsContent value="captions">
            <CaptionDemo language={language} />
          </TabsContent>

          <TabsContent value="code">
            <CodeGenerator language={language} />
          </TabsContent>
        </Tabs>

        {/* Stakeholder Color Reference */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Stakeholder Color Coding' : 'Codificación de Colores por Stakeholder'}
            </CardTitle>
            <CardDescription>
              {language === 'en' 
                ? 'Consistent color mapping across all components'
                : 'Mapeo consistente de colores en todos los componentes'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stakeholders.map((stakeholder) => (
                <div key={stakeholder.id} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: stakeholder.color }}
                  />
                  <div>
                    <div className="font-medium text-sm">{stakeholder.id}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {stakeholder.color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};