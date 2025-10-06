import React from 'react';
import { motion } from 'motion/react';
import { 
  OverlayCard, 
  OverlayCardGrid,
  FinanceOverlayCard,
  TriggerOverlayCard,
  ScienceOverlayCard,
  LawOverlayCard,
  NewOverlayCard,
  TimeOverlayCard
} from './OverlayCard';

interface OverlayCardDemoProps {
  language?: 'en' | 'es';
  onNavigate?: (path: string) => void;
}

export const OverlayCardDemo: React.FC<OverlayCardDemoProps> = ({
  language = 'en',
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'OVERWATCH³ Schema Intelligence Cards' : 'Tarjetas de Inteligencia de Esquema OVERWATCH³'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Interactive overlay cards that connect directly to your complete 6-domain strategic intelligence framework'
              : 'Tarjetas de superposición interactivas que se conectan directamente a tu marco completo de inteligencia estratégica de 6 dominios'
            }
          </p>
        </motion.div>

        {/* Your Original Trust Velocity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Your Original Design' : 'Tu Diseño Original'}
          </h2>
          <div className="max-w-md">
            <OverlayCard
              title="Trust Velocity"
              caption="Trust moves faster than capital."
              icon="⚡"
              glow={true}
              schemaTrace="finance.trust-velocity"
              domain="finance"
              stakeholder="CEO"
              language={language}
            />
          </div>
        </motion.div>

        {/* Finance Domain Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            💰 {language === 'en' ? 'Finance Domain Cards' : 'Tarjetas de Dominio de Finanzas'}
          </h2>
          <OverlayCardGrid columns={3}>
            <FinanceOverlayCard
              title="Trust Velocity"
              caption={language === 'en' ? "Trust moves faster than capital." : "La confianza se mueve más rápido que el capital."}
              icon="⚡"
              glow={true}
              schemaTrace="finance.trust-velocity"
              stakeholder="CEO"
              language={language}
            />
            <FinanceOverlayCard
              title="Budget Authoring"
              caption={language === 'en' ? "Budgets tell stories, not just numbers." : "Los presupuestos cuentan historias, no solo números."}
              icon="📊"
              glow={true}
              schemaTrace="finance.budget-authoring"
              stakeholder="CFO"
              language={language}
            />
            <FinanceOverlayCard
              title="Investor Relations"
              caption={language === 'en' ? "Investor relations are founder relations." : "Las relaciones con inversores son relaciones de fundadores."}
              icon="🤝"
              glow={true}
              schemaTrace="finance.investor-relations"
              stakeholder="CEO"
              language={language}
            />
          </OverlayCardGrid>
        </motion.div>

        {/* All Domains Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Complete Strategic Intelligence Matrix' : 'Matriz Completa de Inteligencia Estratégica'}
          </h2>
          <OverlayCardGrid columns={3}>
            {/* Trigger Domain */}
            <TriggerOverlayCard
              title="Behavioral Triggers"
              caption={language === 'en' ? "Behavior changes before belief changes." : "El comportamiento cambia antes que las creencias."}
              icon="🧠"
              glow={true}
              schemaTrace="trigger.behavioral-triggers"
              stakeholder="CHRO"
              language={language}
            />

            {/* Science Domain */}
            <ScienceOverlayCard
              title="Psychology Frameworks"
              caption={language === 'en' ? "Psychology is the physics of business." : "La psicología es la física de los negocios."}
              icon="🔬"
              glow={true}
              schemaTrace="science.psychology"
              stakeholder="CEO"
              language={language}
            />

            {/* Law Domain */}
            <LawOverlayCard
              title="Assumed Rights"
              caption={language === 'en' ? "Assumptions become liabilities." : "Las suposiciones se convierten en responsabilidades."}
              icon="⚖️"
              glow={true}
              schemaTrace="law.assumed-right"
              stakeholder="Legal"
              language={language}
            />

            {/* New Domain */}
            <NewOverlayCard
              title="Market Entry"
              caption={language === 'en' ? "New markets require new mindsets." : "Los nuevos mercados requieren nuevas mentalidades."}
              icon="🌍"
              glow={true}
              schemaTrace="new.market-entry"
              stakeholder="CEO"
              language={language}
            />

            {/* Time Domain */}
            <TimeOverlayCard
              title="Velocity Modeling"
              caption={language === 'en' ? "Velocity is the new credibility." : "La velocidad es la nueva credibilidad."}
              icon="🚀"
              glow={true}
              schemaTrace="time.velocity-modeling"
              stakeholder="COO"
              language={language}
            />

            {/* Additional Strategic Card */}
            <OverlayCard
              title="Strategic Integration"
              caption={language === 'en' ? "Integration multiplies intelligence." : "La integración multiplica la inteligencia."}
              icon="🎯"
              glow={true}
              onClick={() => onNavigate?.('overwatch/finance')}
              domain="finance"
              stakeholder="CEO"
              language={language}
              variant="elevated"
            />
          </OverlayCardGrid>
        </motion.div>

        {/* Size Variations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Size & Style Variations' : 'Variaciones de Tamaño y Estilo'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Small</h3>
              <OverlayCard
                title="Quick Action"
                caption="Compact strategic insight."
                icon="⚡"
                size="sm"
                schemaTrace="finance.trust-velocity"
                domain="finance"
                language={language}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
              <OverlayCard
                title="Standard Action"
                caption="Balanced strategic intelligence display."
                icon="🎯"
                size="md"
                schemaTrace="trigger.behavioral-triggers"
                domain="trigger"
                language={language}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Large</h3>
              <OverlayCard
                title="Featured Action"
                caption="Prominent strategic intelligence with enhanced visibility and detailed context."
                icon="🚀"
                size="lg"
                schemaTrace="new.market-entry"
                domain="new"
                language={language}
              />
            </div>
          </div>
        </motion.div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔗 {language === 'en' ? 'System Integration' : 'Integración del Sistema'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'en' 
              ? 'These OverlayCards connect directly to your complete OVERWATCH³ schema system:'
              : 'Estas OverlayCards se conectan directamente a tu sistema completo de esquemas OVERWATCH³:'
            }
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>{language === 'en' ? 'Schema traces like "finance.trust-velocity" trigger your coaching overlays' : 'Las trazas de esquema como "finance.trust-velocity" activan tus superposiciones de coaching'}</li>
            <li>{language === 'en' ? 'Domain-specific styling matches your 6-domain framework' : 'El estilo específico del dominio coincide con tu marco de 6 dominios'}</li>
            <li>{language === 'en' ? 'Active state indicators show when coaching overlays are engaged' : 'Los indicadores de estado activo muestran cuando las superposiciones de coaching están activadas'}</li>
            <li>{language === 'en' ? 'Bilingual support matches your EN/ES strategic framework' : 'El soporte bilingüe coincide con tu marco estratégico EN/ES'}</li>
            <li>{language === 'en' ? 'ROI proof integration with your existing coaching analytics' : 'Integración de prueba de ROI con tus analíticas de coaching existentes'}</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};