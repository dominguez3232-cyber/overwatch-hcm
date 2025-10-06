import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Users, 
  TrendingUp, 
  Zap, 
  Calculator, 
  Target,
  Globe,
  ArrowRight,
  Crown
} from 'lucide-react';

interface HeroProps {
  language: 'en' | 'es';
  onModeChange: (mode: string) => void;
  currentMode: string;
}

export function Hero({ language, onModeChange, currentMode }: HeroProps) {
  const labels = {
    en: {
      title: "The World's First Advisory-Grade HRIS Platform",
      subtitle: "Velocity to Revenue • Strategic HR Command • AI-Powered Foresight",
      modes: {
        founder: "Founder Mode",
        trabajo: "Trabajo Mode", 
        accounting: "Accounting Mode",
        strategy: "Strategy Mode"
      },
      modeDescriptions: {
        founder: "Built for founder-led companies scaling from startup to exit",
        trabajo: "Diseñado para el mercado Latino con capacidades bilingües",
        accounting: "Financial integration with P&L impact measurement",
        strategy: "Strategic HR transformation and culture force multiplication"
      },
      getStarted: "Launch Platform",
      learnMore: "Explore Framework"
    },
    es: {
      title: "La Primera Plataforma HRIS de Grado Asesor del Mundo",
      subtitle: "Velocidad a Ingresos • Comando HR Estratégico • Perspectiva Impulsada por IA",
      modes: {
        founder: "Modo Fundador",
        trabajo: "Modo Trabajo",
        accounting: "Modo Contabilidad", 
        strategy: "Modo Estrategia"
      },
      modeDescriptions: {
        founder: "Construido para empresas dirigidas por fundadores escalando de startup a salida",
        trabajo: "Designed for Latino market with bilingual capabilities",
        accounting: "Integración financiera con medición de impacto P&L",
        strategy: "Transformación HR estratégica y multiplicación de fuerza cultural"
      },
      getStarted: "Lanzar Plataforma",
      learnMore: "Explorar Marco"
    }
  };

  const currentLabels = labels[language];

  const modes = [
    {
      id: 'founder',
      label: currentLabels.modes.founder,
      icon: Users,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: currentLabels.modeDescriptions.founder
    },
    {
      id: 'trabajo', 
      label: currentLabels.modes.trabajo,
      icon: Globe,
      color: 'bg-green-600 hover:bg-green-700',
      description: currentLabels.modeDescriptions.trabajo
    },
    {
      id: 'accounting',
      label: currentLabels.modes.accounting, 
      icon: Calculator,
      color: 'bg-purple-600 hover:bg-purple-700',
      description: currentLabels.modeDescriptions.accounting
    },
    {
      id: 'strategy',
      label: currentLabels.modes.strategy,
      icon: Target,
      color: 'bg-orange-600 hover:bg-orange-700', 
      description: currentLabels.modeDescriptions.strategy
    }
  ];

  const getGradientForMode = (modeId: string) => {
    switch (modeId) {
      case 'founder':
        return 'from-blue-600/20 via-blue-500/10 to-transparent';
      case 'trabajo':
        return 'from-green-600/20 via-green-500/10 to-transparent';
      case 'accounting':
        return 'from-purple-600/20 via-purple-500/10 to-transparent';
      case 'strategy':
        return 'from-orange-600/20 via-orange-500/10 to-transparent';
      default:
        return 'from-gray-600/20 via-gray-500/10 to-transparent';
    }
  };

  const getModeIcon = (modeId: string) => {
    switch (modeId) {
      case 'founder':
        return <Users className="w-5 h-5" />;
      case 'trabajo':
        return <Globe className="w-5 h-5" />;
      case 'accounting':
        return <Calculator className="w-5 h-5" />;
      case 'strategy':
        return <Target className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className={`relative px-20 py-16 bg-gradient-to-br ${getGradientForMode(currentMode)} border-b border-border`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
            <Crown className="w-4 h-4 mr-2" />
            OVERWATCH³ • Advisory-Grade Intelligence
          </Badge>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {currentLabels.title}
          </h1>
          
          <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
            {currentLabels.subtitle}
          </h3>
        </div>

        {/* Mode Toggle */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const isActive = currentMode === mode.id;
                
                return (
                  <button
                    key={mode.id}
                    onClick={() => onModeChange(mode.id)}
                    className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? `${mode.color} text-white shadow-lg transform scale-105`
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {mode.label}
                    
                    {isActive && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Mode Description */}
          <div className="text-center">
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {modes.find(m => m.id === currentMode)?.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium group"
            onClick={() => {/* Handle get started */}}
          >
            {currentLabels.getStarted}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3 text-lg font-medium"
            onClick={() => {/* Handle learn more */}}
          >
            {currentLabels.learnMore}
          </Button>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">
              {language === 'en' ? 'Velocity to Revenue' : 'Velocidad a Ingresos'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'en' 
                ? 'Transform HR from cost center to revenue accelerator'
                : 'Transforma RH de centro de costos a acelerador de ingresos'
              }
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">
              {language === 'en' ? 'Strategic HR Command' : 'Comando HR Estratégico'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'en'
                ? 'Culture as queen piece in your strategic arsenal'
                : 'Cultura como pieza reina en tu arsenal estratégico'
              }
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">
              {language === 'en' ? 'AI-Powered Foresight' : 'Perspectiva Impulsada por IA'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'en'
                ? 'Predictive analytics for strategic decision making'
                : 'Analítica predictiva para toma de decisiones estratégicas'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}