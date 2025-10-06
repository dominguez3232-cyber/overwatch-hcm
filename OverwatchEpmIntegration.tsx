import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import EpmCloud from '../imports/EpmCloud';

interface OverwatchEpmIntegrationProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchEpmIntegration({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: OverwatchEpmIntegrationProps) {
  const [analytics, setAnalytics] = useState({
    totalRevenue: 24800000,
    budgetVariance: -2.3,
    operatingMargin: 18.2,
    forecastAccuracy: 94.7,
    activeUsers: 2847,
    costReduction: 1200000,
    lastSync: new Date().toISOString()
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 50000) - 25000,
        budgetVariance: prev.budgetVariance + (Math.random() * 0.2) - 0.1,
        operatingMargin: prev.operatingMargin + (Math.random() * 0.4) - 0.2,
        forecastAccuracy: Math.max(90, Math.min(98, prev.forecastAccuracy + (Math.random() * 0.8) - 0.4)),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        lastSync: new Date().toISOString()
      }));
    }, 45000); // Update every 45 seconds

    return () => clearInterval(interval);
  }, []);

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

  const epmCapabilities = {
    en: [
      "📈 Real-time financial planning & analysis",
      "🎯 Budget management & variance tracking", 
      "💼 Profitability analysis by product line",
      "📊 Advanced forecasting & scenario modeling",
      "⚡ Consolidation & reporting automation",
      "🔄 Cross-functional workflow integration"
    ],
    es: [
      "📈 Planificación y análisis financiero en tiempo real",
      "🎯 Gestión de presupuestos y seguimiento de variaciones",
      "💼 Análisis de rentabilidad por línea de producto",
      "📊 Pronósticos avanzados y modelado de escenarios",
      "⚡ Automatización de consolidación y reportes",
      "🔄 Integración de flujos de trabajo interfuncionales"
    ]
  };

  const competitiveAdvantages = {
    en: {
      oracle: {
        title: "vs. Oracle EPM",
        subtitle: "Advisory-grade insights vs. complex reporting",
        advantage: "McKinsey-style strategic intelligence with founder-friendly UX"
      },
      sap: {
        title: "vs. SAP Analytics", 
        subtitle: "Integrated command center vs. siloed analytics",
        advantage: "Unified OVERWATCH³ ecosystem with cross-domain intelligence"
      },
      workday: {
        title: "vs. Workday Adaptive",
        subtitle: "Schema-driven coaching vs. static dashboards",
        advantage: "Dynamic coaching overlays with actionable recommendations"
      }
    },
    es: {
      oracle: {
        title: "vs. Oracle EPM",
        subtitle: "Insights de grado asesor vs. reportes complejos",
        advantage: "Inteligencia estratégica estilo McKinsey con UX amigable para fundadores"
      },
      sap: {
        title: "vs. SAP Analytics",
        subtitle: "Centro de comando integrado vs. analíticas aisladas", 
        advantage: "Ecosistema OVERWATCH³ unificado con inteligencia inter-dominio"
      },
      workday: {
        title: "vs. Workday Adaptive",
        subtitle: "Coaching basado en esquemas vs. dashboards estáticos",
        advantage: "Overlays de coaching dinámicos con recomendaciones accionables"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* OVERWATCH³ EPM Header */}
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
                      OVERWATCH³ EPM Cloud
                      <Badge variant="secondary" className="text-xs">
                        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
                      </Badge>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Enterprise Performance Management - Advisory-Grade Financial Intelligence'
                        : 'Gestión de Rendimiento Empresarial - Inteligencia Financiera de Grado Asesor'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Real-time Analytics Status */}
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Live Analytics</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(analytics.lastSync).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {/* Key Metrics Preview */}
              <div className="hidden xl:flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-foreground">
                    ${(analytics.totalRevenue / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Revenue' : 'Ingresos'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className={`font-bold ${analytics.budgetVariance < 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {analytics.budgetVariance.toFixed(1)}%
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Budget Var' : 'Var Presup'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-blue-400">{analytics.operatingMargin.toFixed(1)}%</div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Op Margin' : 'Margen Op'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-purple-400">{analytics.forecastAccuracy.toFixed(1)}%</div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Forecast' : 'Pronóstico'}</div>
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
                  onClick={() => onNavigate('erp-assessment')}
                  className="hidden lg:flex"
                >
                  <span className="text-xs mr-1">📊</span>
                  {language === 'en' ? 'ERP' : 'ERP'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Generate EPM performance report
                    console.log('📊 Generating EPM performance report...');
                    const reportData = {
                      revenue: analytics.totalRevenue,
                      variance: analytics.budgetVariance,
                      margin: analytics.operatingMargin,
                      accuracy: analytics.forecastAccuracy,
                      timestamp: new Date().toISOString()
                    };
                    console.log('EPM Report Data:', reportData);
                    alert(language === 'en' 
                      ? 'EPM Performance Report generated! Check console for details.' 
                      : '¡Reporte de Rendimiento EPM generado! Revisa la consola para detalles.'
                    );
                  }}
                >
                  <span className="text-xs mr-1">📋</span>
                  {language === 'en' ? 'Export' : 'Exportar'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EPM Capabilities & Competitive Advantages Banner */}
      <div className="bg-card/30 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'en' 
                  ? '⚡ EPM Cloud Capabilities'
                  : '⚡ Capacidades EPM Cloud'
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {epmCapabilities[language].map((capability, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {capability}
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
                {Object.entries(competitiveAdvantages[language]).map(([key, advantage]) => (
                  <div key={key} className="bg-card/50 p-3 rounded-lg border border-border">
                    <div className="text-sm font-medium text-foreground">{advantage.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{advantage.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced EPM Dashboard Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 pointer-events-none" />
        <div className="relative">
          <div className="w-full">
            {/* OVERWATCH³ Integration Context Cards */}
            <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 dark:text-blue-400">⚡</span>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">
                    {competitiveAdvantages[language].oracle.title}
                  </h4>
                </div>
                <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
                  {competitiveAdvantages[language].oracle.advantage}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200/50 dark:border-purple-800/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-600 dark:text-purple-400">🔄</span>
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">
                    {competitiveAdvantages[language].sap.title}
                  </h4>
                </div>
                <p className="text-sm text-purple-600/80 dark:text-purple-400/80">
                  {competitiveAdvantages[language].sap.advantage}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 dark:text-emerald-400">🎯</span>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">
                    {competitiveAdvantages[language].workday.title}
                  </h4>
                </div>
                <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
                  {competitiveAdvantages[language].workday.advantage}
                </p>
              </motion.div>
            </div>

            {/* Original EPM Cloud Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EpmCloud />
            </motion.div>
          </div>
        </div>
      </div>

      {/* OVERWATCH³ EPM Footer Integration */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{language === 'en' ? 'Real-time analytics active' : 'Analíticas en tiempo real activas'}</span>
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
                {language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica'}
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
                onClick={() => onNavigate('business-modules')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'en' ? 'Business Intel' : 'Intel Negocios'}
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

export default OverwatchEpmIntegration;