import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  AlertTriangle, 
  Brain, 
  Scale, 
  DollarSign, 
  Rocket, 
  Clock,
  ChevronRight,
  ArrowLeft,
  Zap,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';

interface OverwatchSystemDemoProps {
  language: 'en' | 'es';
  onNavigate: (path: string) => void;
}

const systemOverview = {
  en: {
    title: "OVERWATCH³ Strategic Intelligence System",
    subtitle: "Multi-Domain Command & Control for Founder-Led Companies",
    description: "Navigate complex business scenarios with advisory-grade frameworks across six strategic intelligence domains.",
    domains: "Strategic Domains",
    features: "System Features",
    capabilities: "Core Capabilities"
  },
  es: {
    title: "Sistema de Inteligencia Estratégica OVERWATCH³",
    subtitle: "Comando y Control Multi-Dominio para Empresas Lideradas por Fundadores",
    description: "Navega escenarios empresariales complejos con marcos de grado asesor a través de seis dominios de inteligencia estratégica.",
    domains: "Dominios Estratégicos",
    features: "Características del Sistema",
    capabilities: "Capacidades Principales"
  }
};

const systemFeatures = [
  {
    icon: Target,
    title: { en: "Multi-Domain Analysis", es: "Análisis Multi-Dominio" },
    description: { en: "Six specialized intelligence domains for comprehensive strategic coverage", es: "Seis dominios de inteligencia especializados para cobertura estratégica integral" }
  },
  {
    icon: Users,
    title: { en: "Scenario-Based Navigation", es: "Navegación Basada en Escenarios" },
    description: { en: "Context-aware routing based on specific business situations", es: "Enrutamiento consciente del contexto basado en situaciones empresariales específicas" }
  },
  {
    icon: TrendingUp,
    title: { en: "Advisory-Grade Frameworks", es: "Marcos de Grado Asesor" },
    description: { en: "McKinsey-style strategic frameworks adapted for founder-led companies", es: "Marcos estratégicos estilo McKinsey adaptados para empresas lideradas por fundadores" }
  },
  {
    icon: Zap,
    title: { en: "Real-Time Intelligence", es: "Inteligencia en Tiempo Real" },
    description: { en: "Dynamic strategic recommendations based on current business context", es: "Recomendaciones estratégicas dinámicas basadas en el contexto empresarial actual" }
  }
];

const domainMapping = {
  "trigger": {
    icon: AlertTriangle,
    color: "#dc2626",
    gradient: "from-red-500 to-red-600"
  },
  "science": {
    icon: Brain,
    color: "#3b82f6",
    gradient: "from-blue-500 to-blue-600"
  },
  "law": {
    icon: Scale,
    color: "#7c3aed",
    gradient: "from-purple-500 to-purple-600"
  },
  "finance": {
    icon: DollarSign,
    color: "#059669",
    gradient: "from-green-500 to-green-600"
  },
  "new": {
    icon: Rocket,
    color: "#f59e0b",
    gradient: "from-orange-500 to-orange-600"
  },
  "time": {
    icon: Clock,
    color: "#8b5cf6",
    gradient: "from-violet-500 to-violet-600"
  }
};

export const OverwatchSystemDemo: React.FC<OverwatchSystemDemoProps> = ({
  language,
  onNavigate
}) => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const content = systemOverview[language];

  const handleLaunchSystem = () => {
    onNavigate('overwatch');
  };

  const handleBackToPersona = () => {
    onNavigate('persona');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={handleBackToPersona}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {content.description}
            </p>
          </div>
        </motion.div>

        {/* System Overview Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Strategic Domains */}
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {content.domains}
            </h3>
            <div className="space-y-3">
              {Object.entries(domainMapping).map(([domain, config]) => {
                const IconComponent = config.icon;
                return (
                  <div key={domain} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <div 
                      className="w-8 h-8 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${config.color}20` }}
                    >
                      <IconComponent className="w-4 h-4" style={{ color: config.color }} />
                    </div>
                    <span className="text-sm font-medium capitalize">{domain}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* System Features */}
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              {content.features}
            </h3>
            <div className="space-y-4">
              {systemFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="font-medium text-sm">{feature.title[language]}</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">
                      {feature.description[language]}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Core Capabilities */}
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              {content.capabilities}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg">
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Intelligence Domains' : 'Dominios de Inteligencia'}
                </span>
                <Badge variant="secondary">6</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Strategic Modules' : 'Módulos Estratégicos'}
                </span>
                <Badge variant="secondary">24+</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Scenario Types' : 'Tipos de Escenarios'}
                </span>
                <Badge variant="secondary">∞</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg">
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Languages' : 'Idiomas'}
                </span>
                <Badge variant="secondary">EN/ES</Badge>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Launch Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-6"
        >
          <Separator className="my-8" />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {language === 'en' ? 'Ready to Launch Strategic Intelligence?' : '¿Listo para Lanzar Inteligencia Estratégica?'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Access the full OVERWATCH³ system with dynamic routing, scenario-based intelligence, and advisory-grade strategic frameworks.'
                : 'Accede al sistema completo OVERWATCH³ con enrutamiento dinámico, inteligencia basada en escenarios y marcos estratégicos de grado asesor.'
              }
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleLaunchSystem}
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Launch OVERWATCH³' : 'Lanzar OVERWATCH³'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              onClick={() => onNavigate('figma-demo')}
              size="lg"
            >
              {language === 'en' ? 'Component Demo' : 'Demo de Componentes'}
            </Button>
          </div>
        </motion.div>

        {/* System Architecture Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {Object.entries(domainMapping).map(([domain, config]) => {
            const IconComponent = config.icon;
            return (
              <motion.div
                key={domain}
                whileHover={{ scale: 1.05, y: -2 }}
                className="cursor-pointer"
                onClick={handleLaunchSystem}
              >
                <Card className="p-4 text-center space-y-2 hover:shadow-lg transition-all">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto"
                    style={{ backgroundColor: `${config.color}20` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: config.color }} />
                  </div>
                  <div className="text-sm font-medium capitalize">{domain}</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Strategic Domain' : 'Dominio Estratégico'}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OverwatchSystemDemo;