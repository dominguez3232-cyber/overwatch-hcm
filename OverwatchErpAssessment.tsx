import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import ErpSystem from '../imports/ErpSystem';

interface OverwatchErpAssessmentProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchErpAssessment({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: OverwatchErpAssessmentProps) {
  const [assessmentProgress, setAssessmentProgress] = useState(16.67); // Step 1 of 6
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [assessmentData, setAssessmentData] = useState({
    companyStage: '',
    startDate: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  });

  // Simulate assessment progress
  useEffect(() => {
    if (selectedStage) {
      setAssessmentProgress(33.33); // Progress to step 2
    }
  }, [selectedStage]);

  const modeColors = {
    founder: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
    trabajo: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    accounting: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
    strategy: 'from-purple-500/10 to-pink-500/10 border-purple-500/20'
  };

  const modeIcons = {
    founder: '👑',
    trabajo: '🏗️',
    accounting: '📊',
    strategy: '🎯'
  };

  const assessmentBenefits = {
    en: [
      "📈 Strategic ERP positioning recommendations",
      "🏆 Competitive advantage identification", 
      "💰 ROI optimization strategies",
      "🎯 Market positioning insights",
      "⚡ Implementation roadmap generation",
      "📊 Custom dashboard configuration"
    ],
    es: [
      "📈 Recomendaciones de posicionamiento ERP estratégico",
      "🏆 Identificación de ventajas competitivas",
      "💰 Estrategias de optimización ROI",
      "🎯 Insights de posicionamiento de mercado",
      "⚡ Generación de hoja de ruta de implementación",
      "📊 Configuración de dashboard personalizado"
    ]
  };

  const competitiveInsights = {
    en: {
      odoo: {
        title: "vs. Odoo",
        subtitle: "Professional-grade EPM vs. basic accounting",
        advantage: "Advanced financial modeling and strategic intelligence"
      },
      rippling: {
        title: "vs. Rippling", 
        subtitle: "Integrated finance vs. point solutions",
        advantage: "Unified command center with predictive analytics"
      },
      market: {
        title: "Mid-Market Advantage",
        subtitle: "Enterprise capabilities, SMB simplicity",
        advantage: "Scalable architecture with founder-friendly UX"
      }
    },
    es: {
      odoo: {
        title: "vs. Odoo",
        subtitle: "EPM de grado profesional vs. contabilidad básica",
        advantage: "Modelado financiero avanzado e inteligencia estratégica"
      },
      rippling: {
        title: "vs. Rippling",
        subtitle: "Finanzas integradas vs. soluciones puntuales", 
        advantage: "Centro de comando unificado con analíticas predictivas"
      },
      market: {
        title: "Ventaja Mid-Market",
        subtitle: "Capacidades enterprise, simplicidad SMB",
        advantage: "Arquitectura escalable con UX amigable para fundadores"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* OVERWATCH³ ERP Assessment Header */}
      <div className={`bg-gradient-to-r ${modeColors[currentMode]} border-b border-border`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('persona')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors bg-card/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-border"
              >
                <span className="text-lg">←</span>
                <span className="text-sm font-medium">{language === 'en' ? 'Command Center' : 'Centro Comando'}</span>
              </motion.button>
              
              <Separator orientation="vertical" className="h-8" />
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{modeIcons[currentMode]}</span>
                  <div>
                    <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                      OVERWATCH³ ERP Assessment
                      <Badge variant="secondary" className="text-xs">
                        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
                      </Badge>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Strategic Company Profile & Competitive Positioning Analysis'
                        : 'Perfil Estratégico de Empresa y Análisis de Posicionamiento Competitivo'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Assessment Progress */}
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Progress' : 'Progreso'}
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={assessmentProgress} className="w-20 h-2" />
                    <span className="text-xs font-medium">{Math.round(assessmentProgress)}%</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('hris-dashboard')}
                  className="hidden md:flex"
                >
                  <span className="text-xs mr-1">🏢</span>
                  {language === 'en' ? 'HRIS³' : 'HRIS³'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('business-modules')}
                  className="hidden lg:flex"
                >
                  <span className="text-xs mr-1">🎯</span>
                  {language === 'en' ? 'Business Intel' : 'Intel Negocios'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Benefits Banner */}
      <div className="bg-card/30 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'en' 
                  ? '🎯 Strategic Assessment Benefits'
                  : '🎯 Beneficios de Evaluación Estratégica'
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {assessmentBenefits[language].map((benefit, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'en' 
                  ? '🏆 Competitive Intelligence'
                  : '🏆 Inteligencia Competitiva'
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(competitiveInsights[language]).map(([key, insight]) => (
                  <div key={key} className="bg-card/50 p-3 rounded-lg border border-border">
                    <div className="text-sm font-medium text-foreground">{insight.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{insight.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced ERP Assessment Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 pointer-events-none" />
        <div className="relative">
          <div className="px-6 py-8">
            <div className="max-w-6xl mx-auto">
              {/* OVERWATCH³ Context Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-red-50/50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200/50 dark:border-red-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-600 dark:text-red-400">🎯</span>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">
                      {competitiveInsights[language].odoo.title}
                    </h4>
                  </div>
                  <p className="text-sm text-red-600/80 dark:text-red-400/80">
                    {competitiveInsights[language].odoo.advantage}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200/50 dark:border-orange-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-600 dark:text-orange-400">⚡</span>
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">
                      {competitiveInsights[language].rippling.title}
                    </h4>
                  </div>
                  <p className="text-sm text-orange-600/80 dark:text-orange-400/80">
                    {competitiveInsights[language].rippling.advantage}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-green-50/50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200/50 dark:border-green-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 dark:text-green-400">🚀</span>
                    <h4 className="font-semibold text-green-700 dark:text-green-300">
                      {competitiveInsights[language].market.title}
                    </h4>
                  </div>
                  <p className="text-sm text-green-600/80 dark:text-green-400/80">
                    {competitiveInsights[language].market.advantage}
                  </p>
                </motion.div>
              </div>

              {/* Original ERP System Component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6"
              >
                <ErpSystem />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERWATCH³ Assessment Footer */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>{language === 'en' ? 'Assessment in progress' : 'Evaluación en progreso'}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="text-muted-foreground">
                {language === 'en' 
                  ? 'Powered by OVERWATCH³ Strategic Intelligence'
                  : 'Impulsado por Inteligencia Estratégica OVERWATCH³'
                }
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('assessment')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'en' ? 'Full Strategic Assessment' : 'Evaluación Estratégica Completa'}
              </button>
              <Separator orientation="vertical" className="h-4" />
              <button
                onClick={() => onNavigate('roi-dashboard')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'en' ? 'ROI Analytics' : 'Analíticas ROI'}
              </button>
              <Separator orientation="vertical" className="h-4" />
              <button
                onClick={() => onNavigate('demo')}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverwatchErpAssessment;