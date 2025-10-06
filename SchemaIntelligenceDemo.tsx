import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getSchemaNode } from '../utils/schemaLoader';
import OverlayPanel from './OverlayPanel';
import ProofBlock from './ProofBlock';
import DemoSequenceController from './DemoSequenceControllerSafe';

interface SchemaIntelligenceDemoProps {
  language: 'en' | 'es';
  onNavigate?: (path: string) => void;
}

export const SchemaIntelligenceDemo: React.FC<SchemaIntelligenceDemoProps> = ({
  language,
  onNavigate
}) => {
  const [activeDemo, setActiveDemo] = useState<'individual' | 'sequence'>('individual');

  // Example schema for individual demo
  const trustVelocitySchema = getSchemaNode("finance.trust-velocity");

  // Cross-domain demo sequence
  const demoSequence = [
    "trigger.difficulty-risk",
    "science.philosophy",
    "law.assumed-right", 
    "finance.ethical-roi",
    "new.coaching-overlay",
    "time.before-after"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {language === 'en' ? 'Schema Intelligence Demo' : 'Demo de Inteligencia de Esquema'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Interactive demonstration of OverlayPanel, ProofBlock, and DemoSequenceController components'
                  : 'Demostración interactiva de los componentes OverlayPanel, ProofBlock y DemoSequenceController'
                }
              </p>
            </div>

            {onNavigate && (
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {language === 'en' ? 'Full Dashboard' : 'Dashboard Completo'}
                </button>
                <button
                  onClick={() => onNavigate('persona')}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
                </button>
              </div>
            )}
          </div>

          {/* Demo Mode Toggle */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setActiveDemo('individual')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeDemo === 'individual'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {language === 'en' ? 'Individual Components' : 'Componentes Individuales'}
            </button>
            <button
              onClick={() => setActiveDemo('sequence')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeDemo === 'sequence'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {language === 'en' ? 'Sequence Demo' : 'Demo de Secuencia'}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6">
        {activeDemo === 'individual' ? (
          <div className="space-y-12">
            {/* OverlayPanel Demo */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  📋 OverlayPanel Component
                </h2>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Interactive schema display with coaching content and activation controls'
                    : 'Visualización interactiva de esquema con contenido de coaching y controles de activación'
                  }
                </p>
                <div className="mt-4 bg-secondary/20 rounded-lg p-4">
                  <code className="text-sm font-mono text-foreground">
                    {`<OverlayPanel schema={getSchemaNode("finance.trust-velocity")} language="${language}" />`}
                  </code>
                </div>
              </div>
              
              <div className="max-w-3xl">
                <OverlayPanel
                  schema={trustVelocitySchema}
                  language={language}
                />
              </div>
            </motion.section>

            {/* ProofBlock Demo */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  💰 ProofBlock Component
                </h2>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'ROI proof engine with animated metrics and confidence indicators'
                    : 'Motor de prueba de ROI con métricas animadas e indicadores de confianza'
                  }
                </p>
                <div className="mt-4 bg-secondary/20 rounded-lg p-4">
                  <code className="text-sm font-mono text-foreground">
                    {`<ProofBlock proof={schema.proofEngine} language="${language}" />`}
                  </code>
                </div>
              </div>
              
              <div className="max-w-2xl">
                <ProofBlock
                  proof={trustVelocitySchema?.proofEngine}
                  language={language}
                />
              </div>
            </motion.section>
          </div>
        ) : (
          /* Sequence Demo */
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                🎬 DemoSequenceController Component
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Cross-domain intelligence demonstration with automated sequencing and interactive controls'
                  : 'Demostración de inteligencia cross-dominio con secuenciación automatizada y controles interactivos'
                }
              </p>
              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <code className="text-sm font-mono text-foreground">
                  {`<DemoSequenceController
  sequence={[
    "trigger.difficulty-risk",
    "science.philosophy", 
    "law.assumed-right",
    "finance.ethical-roi",
    "new.coaching-overlay",
    "time.before-after"
  ]}
  autoPlay={true}
  language="${language}"
/>`}
                </code>
              </div>
            </div>

            <DemoSequenceController
              sequence={demoSequence}
              autoPlay={false}
              language={language}
              delay={3000}
            />
          </motion.section>
        )}

        {/* Integration Notes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-card border border-border rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            🔗 {language === 'en' ? 'System Integration' : 'Integración del Sistema'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">OverlayPanel</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {language === 'en' ? 'Schema loading integration' : 'Integración de carga de esquema'}</li>
                <li>• {language === 'en' ? 'Coaching overlay activation' : 'Activación de superposición de coaching'}</li>
                <li>• {language === 'en' ? 'Bilingual content rendering' : 'Renderizado de contenido bilingüe'}</li>
                <li>• {language === 'en' ? 'Domain-specific styling' : 'Estilo específico del dominio'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">ProofBlock</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {language === 'en' ? 'ROI proof engine display' : 'Visualización del motor de prueba de ROI'}</li>
                <li>• {language === 'en' ? 'Value and unit rendering' : 'Renderizado de valores y unidades'}</li>
                <li>• {language === 'en' ? 'Metric caption display' : 'Visualización de subtítulos de métricas'}</li>
                <li>• {language === 'en' ? 'Clean, professional styling' : 'Estilo limpio y profesional'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">DemoSequenceController</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {language === 'en' ? 'Cross-domain sequencing' : 'Secuenciación cross-dominio'}</li>
                <li>• {language === 'en' ? 'Auto-play functionality' : 'Funcionalidad de reproducción automática'}</li>
                <li>• {language === 'en' ? 'Interactive step control' : 'Control de pasos interactivo'}</li>
                <li>• {language === 'en' ? 'Progress visualization' : 'Visualización del progreso'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {language === 'en' 
                ? '💡 All components integrate seamlessly with your complete OVERWATCH³ schema system and bilingual framework.'
                : '💡 Todos los componentes se integran perfectamente con tu sistema completo de esquemas OVERWATCH³ y marco bilingüe.'
              }
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default SchemaIntelligenceDemo;