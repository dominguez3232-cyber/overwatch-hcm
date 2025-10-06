import React from 'react';
import { motion } from 'motion/react';

/**
 * Example of how to use the new schema-driven token system
 * This component demonstrates both preset classes and atomic utilities
 */

interface TokenizedModuleExampleProps {
  language: 'en' | 'es';
  module: 'crm' | 'edm' | 'hris' | 'epm' | 'erp';
  onNavigate: (view: string) => void;
}

export function TokenizedModuleExample({ 
  language, 
  module, 
  onNavigate 
}: TokenizedModuleExampleProps) {
  
  const moduleLabels = {
    en: {
      crm: 'CRM Intelligence',
      edm: 'EDM Intelligence', 
      hris: 'HRIS³ Command',
      epm: 'EPM Cloud',
      erp: 'ERP Assessment'
    },
    es: {
      crm: 'CRM Inteligencia',
      edm: 'EDM Inteligencia',
      hris: 'HRIS³ Comando', 
      epm: 'EPM Cloud',
      erp: 'ERP Evaluación'
    }
  };

  const moduleIcons = {
    crm: '🎯',
    edm: '📧',
    hris: '🏢',
    epm: '⚡',
    erp: '📊'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header using schema-driven tokens */}
      <header className={`${module}-header px-6 py-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('persona')}
              className="module-nav-button"
            >
              <span className="text-lg">←</span>
              <span className="ml-2">{language === 'en' ? 'Back' : 'Atrás'}</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <span className="text-2xl">{moduleIcons[module]}</span>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {moduleLabels[language][module]}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Schema-driven module powered by OVERWATCH³ tokens'
                    : 'Módulo basado en esquemas impulsado por tokens OVERWATCH³'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Status indicator using semantic tokens */}
            <div className="flex items-center gap-2">
              <div className="module-status-online"></div>
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
            
            {/* Module-specific badge */}
            <span className={`${module}-badge`}>
              {language === 'en' ? 'Active' : 'Activo'}
            </span>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Module capabilities showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Primary module card using preset classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`${module}-card lg:col-span-2`}
            >
              <div className="module-chart-container">
                <h3 className="module-chart-title">
                  <span className={`text-${module}-accent`}>{moduleIcons[module]}</span>
                  {language === 'en' ? 'Performance Analytics' : 'Analíticas de Rendimiento'}
                </h3>
                <div className="h-64 bg-background/50 rounded-lg border border-border flex items-center justify-center">
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Chart component would go here' : 'El componente de gráfico iría aquí'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="module-metric-card">
                <div className={`module-metric-value text-${module}-accent`}>
                  1,247
                </div>
                <div className="module-metric-label">
                  {language === 'en' ? 'Total Records' : 'Registros Totales'}
                </div>
              </div>
              
              <div className="module-metric-card">
                <div className={`module-metric-value text-${module}-highlight`}>
                  94.8%
                </div>
                <div className="module-metric-label">
                  {language === 'en' ? 'Accuracy Rate' : 'Tasa de Precisión'}
                </div>
              </div>
              
              <div className="module-metric-card">
                <div className="module-metric-value text-foreground">
                  $127.5K
                </div>
                <div className="module-metric-label">
                  {language === 'en' ? 'Monthly Value' : 'Valor Mensual'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action buttons using module presets */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className={`${module}-button`}>
              {language === 'en' ? 'Generate Report' : 'Generar Reporte'}
            </button>
            
            <button className="command-center-button">
              {language === 'en' ? 'Command Center' : 'Centro Comando'}
            </button>
            
            <button className="module-nav-button">
              {language === 'en' ? 'Export Data' : 'Exportar Datos'}
            </button>
          </div>

          {/* Competitive intelligence cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="competitive-card">
              <div className="competitive-title">
                {language === 'en' ? 'vs. Traditional Solutions' : 'vs. Soluciones Tradicionales'}
              </div>
              <div className="competitive-subtitle">
                {language === 'en' 
                  ? 'Schema-driven intelligence vs. static reporting'
                  : 'Inteligencia basada en esquemas vs. reportes estáticos'
                }
              </div>
            </div>
            
            <div className="competitive-card">
              <div className="competitive-title">
                {language === 'en' ? 'OVERWATCH³ Advantage' : 'Ventaja OVERWATCH³'}
              </div>
              <div className="competitive-subtitle">
                {language === 'en' 
                  ? 'Real-time coaching overlays with strategic recommendations'
                  : 'Overlays de coaching en tiempo real con recomendaciones estratégicas'
                }
              </div>
            </div>
            
            <div className="competitive-card silver-glow">
              <div className="competitive-title">
                {language === 'en' ? 'Bilingual Excellence' : 'Excelencia Bilingüe'}
              </div>
              <div className="competitive-subtitle">
                {language === 'en' 
                  ? 'Native English/Spanish support for Latino market intelligence'
                  : 'Soporte nativo inglés/español para inteligencia del mercado latino'
                }
              </div>
            </div>
          </div>

          {/* Custom atomic utility example */}
          <div className="mt-8">
            <div className={`
              bg-background 
              border-${module}-accent/20 
              shadow-${module}-card 
              rounded-${module} 
              p-6
              backdrop-blur-sm
            `}>
              <h4 className={`text-lg font-semibold text-${module}-accent mb-2`}>
                {language === 'en' ? 'Custom Component' : 'Componente Personalizado'}
              </h4>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'This demonstrates atomic utility usage with module-specific tokens for custom designs.'
                  : 'Esto demuestra el uso de utilidades atómicas con tokens específicos del módulo para diseños personalizados.'
                }
              </p>
              <div className="flex gap-2">
                <span className={`
                  bg-${module}-muted 
                  text-${module}-accent 
                  border 
                  border-${module}-accent/20 
                  px-3 py-1 
                  rounded-sm 
                  text-sm
                `}>
                  {language === 'en' ? 'Custom Badge' : 'Insignia Personalizada'}
                </span>
                <span className={`
                  bg-${module}-accent/10 
                  text-${module}-highlight 
                  border 
                  border-${module}-highlight/30 
                  px-3 py-1 
                  rounded-sm 
                  text-sm
                `}>
                  {language === 'en' ? 'Alternative Style' : 'Estilo Alternativo'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with navigation */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="module-status-online"></div>
                <span>
                  {language === 'en' 
                    ? 'Schema-driven tokens active'
                    : 'Tokens basados en esquemas activos'
                  }
                </span>
              </div>
              <div className="text-muted-foreground">
                {language === 'en' 
                  ? 'Powered by OVERWATCH³ Design System'
                  : 'Impulsado por Sistema de Diseño OVERWATCH³'
                }
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {['crm', 'edm', 'hris', 'epm', 'erp'].filter(m => m !== module).map((otherModule) => (
                <button
                  key={otherModule}
                  onClick={() => onNavigate(`${otherModule}-intelligence`)}
                  className="module-nav-button"
                >
                  {moduleIcons[otherModule as keyof typeof moduleIcons]} {otherModule.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TokenizedModuleExample;