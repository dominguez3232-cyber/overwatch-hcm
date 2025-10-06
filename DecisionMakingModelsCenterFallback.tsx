import React from 'react';
import { Brain, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface DecisionMakingModelsCenterFallbackProps {
  language: 'en' | 'es';
  onNavigate: (route: string) => void;
  error?: string;
}

export const DecisionMakingModelsCenterFallback: React.FC<DecisionMakingModelsCenterFallbackProps> = ({
  language,
  onNavigate,
  error = 'Loading timeout'
}) => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              {language === 'en' ? 'Decision Making Models Center' : 'Centro de Modelos de Toma de Decisiones'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Eliminate decision fear with structured frameworks'
                : 'Elimina el miedo a decidir con marcos estructurados'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-yellow-400 text-3xl">⚡</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Module Loading...' : 'Cargando Módulo...'}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'The Decision Making Models Center is optimizing for best performance. Please wait a moment or try refreshing.'
              : 'El Centro de Modelos de Decisión se está optimizando para mejor rendimiento. Espera un momento o intenta actualizar.'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-background/50 rounded-lg p-4">
              <div className="text-blue-400 font-bold text-lg">⚡ 250:75:1</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'McKinsey ROI Promise' : 'Promesa ROI McKinsey'}
              </div>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <div className="text-green-400 font-bold text-lg">🛡️ 85%</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Risk Reduction' : 'Reducción Riesgo'}
              </div>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <div className="text-purple-400 font-bold text-lg">📈 60%</div>
              <div className="text-xs text-muted-foreground">
                {language === 'en' ? 'Decision Velocity' : 'Velocidad Decisión'}
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 px-6 py-2 text-white"
            >
              {language === 'en' ? 'Refresh Module' : 'Actualizar Módulo'}
            </Button>
            <Button 
              onClick={() => onNavigate('platform-navigator')}
              variant="outline"
              className="px-6 py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Back to Navigator' : 'Volver al Navegador'}
            </Button>
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            {language === 'en' 
              ? 'For immediate access, try the Investor Presentation Dashboard'
              : 'Para acceso inmediato, prueba el Panel de Presentación para Inversores'
            }
          </p>
          <Button 
            onClick={() => onNavigate('investor-presentation')}
            variant="link"
            className="text-blue-400 p-0 mt-2"
          >
            {language === 'en' ? '🎯 Launch Investor Demo' : '🎯 Lanzar Demo Inversores'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DecisionMakingModelsCenterFallback;