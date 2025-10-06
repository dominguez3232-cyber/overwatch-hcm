import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { FigmaComponentScaffoldDemo } from './FigmaComponentScaffoldSystem';
import { DemoSequenceControllerEnhanced } from './DemoSequenceControllerEnhanced';

// Complete Figma Integration Demo showcasing the entire pipeline
interface FigmaIntegrationDemoProps {
  language: 'en' | 'es';
  onNavigate?: (view: string) => void;
}

export const FigmaIntegrationDemo: React.FC<FigmaIntegrationDemoProps> = ({
  language,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [demoMode, setDemoMode] = useState<'interactive' | 'auto' | 'step'>('interactive');

  const tabs = [
    {
      id: 'overview',
      label: language === 'en' ? 'System Overview' : 'Visión General del Sistema',
      icon: '🎯'
    },
    {
      id: 'naming-convention',
      label: language === 'en' ? 'Naming Convention' : 'Convención de Nomenclatura',
      icon: '📋'
    },
    {
      id: 'component-scaffold',
      label: language === 'en' ? 'Component Scaffold' : 'Scaffolding de Componentes',
      icon: '🏗️'
    },
    {
      id: 'demo-sequence',
      label: language === 'en' ? 'Demo Sequence' : 'Secuencia de Demo',
      icon: '🎬'
    },
    {
      id: 'implementation',
      label: language === 'en' ? 'Implementation Guide' : 'Guía de Implementación',
      icon: '⚡'
    }
  ];

  const namingExamples = [
    {
      type: 'Section Frame',
      pattern: 'section/{stakeholder}-{module}',
      example: 'section/ceo-erp-epm',
      description: language === 'en' 
        ? 'Executive dashboard sections with stakeholder and module context'
        : 'Secciones de panel ejecutivo con contexto de stakeholder y módulo'
    },
    {
      type: 'Metric Card',
      pattern: 'metric-card/{stakeholder}-{metric}',
      example: 'metric-card/cfo-forecast-accuracy',
      description: language === 'en'
        ? 'Individual metric displays with stakeholder ownership'
        : 'Visualizaciones de métricas individuales con propiedad de stakeholder'
    },
    {
      type: 'Overlay Panel',
      pattern: 'overlay/{stakeholder}-{metric}',
      example: 'overlay/chro-engagement-score',
      description: language === 'en'
        ? 'Interactive coaching overlays with contextual guidance'
        : 'Overlays de coaching interactivos con guía contextual'
    },
    {
      type: 'Caption Block',
      pattern: 'caption/{stakeholder}-{metric}',
      example: 'caption/coo-pipeline-conversion',
      description: language === 'en'
        ? 'Cinematic captions for storytelling and demos'
        : 'Subtítulos cinematográficos para narrativa y demos'
    },
    {
      type: 'Proof Engine',
      pattern: 'proof/{metric}',
      example: 'proof/revenue-lift',
      description: language === 'en'
        ? 'ROI and impact metrics for business case validation'
        : 'Métricas de ROI e impacto para validación de caso de negocio'
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: language === 'en' ? 'Schema Definition' : 'Definición de Esquema',
      description: language === 'en'
        ? 'Define JSON schema with stakeholder, module, and metric hierarchy'
        : 'Define esquema JSON con jerarquía de stakeholder, módulo y métrica',
      code: `{
  "stakeholder": "CFO",
  "module": "EPM", 
  "metric": "Forecast Accuracy",
  "value": "89%",
  "unit": "%"
}`
    },
    {
      step: 2,
      title: language === 'en' ? 'Figma Component Creation' : 'Creación de Componente Figma',
      description: language === 'en'
        ? 'Create Figma components following naming convention'
        : 'Crear componentes Figma siguiendo convención de nomenclatura',
      code: `Figma Component Name:
metric-card/cfo-forecast-accuracy

Properties:
- stakeholder: CFO
- metric: forecast-accuracy
- value: 89%
- unit: %`
    },
    {
      step: 3,
      title: language === 'en' ? 'Anima Code Export' : 'Exportación de Código Anima',
      description: language === 'en'
        ? 'Export clean React/Tailwind code with mapped properties'
        : 'Exportar código React/Tailwind limpio con propiedades mapeadas',
      code: `<MetricCard
  stakeholder="CFO"
  metric="forecast-accuracy"
  value="89%"
  unit="%"
/>`
    },
    {
      step: 4,
      title: language === 'en' ? 'Integration & Overlay' : 'Integración y Overlay',
      description: language === 'en'
        ? 'Integrate with coaching overlay system for interactive experience'
        : 'Integrar con sistema de overlay de coaching para experiencia interactiva',
      code: `// Auto-generated overlay config
{
  "overlay_id": "forecast_accuracy_cfo",
  "triggers": {
    "hover": true,
    "click": true,
    "threshold": "< 80%"
  }
}`
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OVERWATCH³ Figma Integration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Schema-traceable component pipeline from JSON → Figma → React with cinematic coaching overlays'
                : 'Pipeline de componentes trazables por esquema desde JSON → Figma → React con overlays de coaching cinematográficos'
              }
            </p>
          </motion.div>

          <div className="flex justify-center gap-4">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30">
              Schema-Driven
            </Badge>
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30">
              Figma Native
            </Badge>
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
              Anima Ready
            </Badge>
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30">
              Bilingual
            </Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                <span>{tab.icon}</span>
                <span className="hidden md:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎯 {language === 'en' ? 'System Architecture' : 'Arquitectura del Sistema'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="font-semibold mb-2">Schema Layer</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'JSON schema defines stakeholder, module, and metric hierarchy'
                        : 'Esquema JSON define jerarquía de stakeholder, módulo y métrica'
                      }
                    </p>
                  </div>
                  
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="font-semibold mb-2">Figma Design</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Components follow traceable naming convention with mapped properties'
                        : 'Componentes siguen convención de nomenclatura trazable con propiedades mapeadas'
                      }
                    </p>
                  </div>
                  
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">⚛️</div>
                    <h3 className="font-semibold mb-2">React Export</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Anima exports clean React/Tailwind code with coaching integration'
                        : 'Anima exporta código React/Tailwind limpio con integración de coaching'
                      }
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">
                    {language === 'en' ? 'Key Benefits' : 'Beneficios Clave'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <div className="font-medium">
                          {language === 'en' ? 'No Translation Loss' : 'Sin Pérdida de Traducción'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'en'
                            ? 'Direct mapping from schema to UI components'
                            : 'Mapeo directo de esquema a componentes UI'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <div className="font-medium">
                          {language === 'en' ? 'Scalable Architecture' : 'Arquitectura Escalable'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'en'
                            ? 'Easy to add new metrics and stakeholders'
                            : 'Fácil agregar nuevas métricas y stakeholders'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <div className="font-medium">
                          {language === 'en' ? 'Cinematic Experience' : 'Experiencia Cinematográfica'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'en'
                            ? 'Consistent storytelling across demos and presentations'
                            : 'Narrativa consistente en demos y presentaciones'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <div>
                        <div className="font-medium">
                          {language === 'en' ? 'Bilingual Support' : 'Soporte Bilingüe'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'en'
                            ? 'Native EN/ES support in all components'
                            : 'Soporte nativo EN/ES en todos los componentes'
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Naming Convention Tab */}
          <TabsContent value="naming-convention" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📋 {language === 'en' ? 'Figma Naming Convention' : 'Convención de Nomenclatura Figma'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {namingExamples.map((example, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{example.type}</h3>
                        <Badge variant="outline">{example.pattern}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="font-mono text-sm bg-background border rounded px-3 py-2">
                          {example.example}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {example.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">
                    {language === 'en' ? 'Global Rules' : 'Reglas Globales'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        {language === 'en' 
                          ? 'Use lowercase + kebab-case for consistency'
                          : 'Usar minúsculas + kebab-case para consistencia'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        {language === 'en'
                          ? 'Prefix by component type'
                          : 'Prefijo por tipo de componente'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        {language === 'en'
                          ? 'Include stakeholder + module + metric'
                          : 'Incluir stakeholder + módulo + métrica'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        {language === 'en'
                          ? 'Keep names schema-traceable'
                          : 'Mantener nombres trazables por esquema'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Component Scaffold Tab */}
          <TabsContent value="component-scaffold">
            <FigmaComponentScaffoldDemo language={language} />
          </TabsContent>

          {/* Demo Sequence Tab */}
          <TabsContent value="demo-sequence" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎬 {language === 'en' ? 'Cinematic Demo Controller' : 'Controlador de Demo Cinematográfico'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Demo Mode:' : 'Modo Demo:'}
                  </span>
                  {['interactive', 'auto', 'step'].map((mode) => (
                    <Button
                      key={mode}
                      variant={demoMode === mode ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setDemoMode(mode as any)}
                    >
                      {mode === 'interactive' && (language === 'en' ? 'Interactive' : 'Interactivo')}
                      {mode === 'auto' && (language === 'en' ? 'Auto-Play' : 'Auto-Reproducir')}
                      {mode === 'step' && (language === 'en' ? 'Step-by-Step' : 'Paso a Paso')}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <DemoSequenceControllerEnhanced
              language={language}
              autoPlay={demoMode === 'auto'}
              showProgress={true}
              onSequenceComplete={() => {
                console.log('Demo sequence completed');
              }}
            />
          </TabsContent>

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚡ {language === 'en' ? 'Implementation Guide' : 'Guía de Implementación'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {implementationSteps.map((step) => (
                    <div key={step.step} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                        <div className="bg-background border rounded-lg p-4">
                          <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                            {step.code}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    🚀 {language === 'en' ? 'Ready to Deploy' : 'Listo para Implementar'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'This system is now integrated into OVERWATCH³ and ready for your Figma workflow.'
                      : 'Este sistema ahora está integrado en OVERWATCH³ y listo para tu flujo de trabajo Figma.'
                    }
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => onNavigate?.('business-command-center')}>
                      {language === 'en' ? 'View Live System' : 'Ver Sistema en Vivo'}
                    </Button>
                    <Button variant="outline" onClick={() => onNavigate?.('assessment')}>
                      {language === 'en' ? 'Start Assessment' : 'Iniciar Evaluación'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FigmaIntegrationDemo;