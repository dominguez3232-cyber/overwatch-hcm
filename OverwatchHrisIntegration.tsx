import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import HrisPage from '../imports/HrisPage';

interface OverwatchHrisIntegrationProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchHrisIntegration({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: OverwatchHrisIntegrationProps) {
  const [stats, setStats] = useState({
    totalEmployees: 1247,
    newHires: 23,
    avgTenure: '3.2 years',
    turnoverRate: '8.5%',
    lastUpdated: new Date().toISOString()
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalEmployees: prev.totalEmployees + Math.floor(Math.random() * 3) - 1,
        lastUpdated: new Date().toISOString()
      }));
    }, 30000); // Update every 30 seconds

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

  return (
    <div className="min-h-screen bg-background">
      {/* OVERWATCH³ HRIS Header */}
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
                      OVERWATCH³ HRIS
                      <Badge variant="secondary" className="text-xs">
                        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
                      </Badge>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Advisory-Grade Human Resources Intelligence System'
                        : 'Sistema de Inteligencia de Recursos Humanos de Grado Asesor'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Real-time Status */}
              <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span className="text-muted-foreground font-medium">
                  {language === 'en' ? 'Live Dashboard' : 'Dashboard en Vivo'}
                </span>
              </div>
              
              {/* Quick Stats */}
              <div className="hidden lg:flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-foreground">{stats.totalEmployees.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Employees' : 'Empleados'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-green-400">+{stats.newHires}</div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'New Hires' : 'Nuevos'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-blue-400">{stats.turnoverRate}</div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Turnover' : 'Rotación'}</div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('business-modules')}
                  className="hidden md:flex"
                >
                  <span className="text-xs mr-1">🎯</span>
                  {language === 'en' ? 'Business Intel' : 'Intel Negocios'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Generate demo report
                    console.log('📊 Generating HRIS analytics report...');
                    alert(language === 'en' 
                      ? 'HRIS Analytics Report generated! Check downloads.' 
                      : '¡Reporte de Analíticas HRIS generado! Revisa descargas.'
                    );
                  }}
                >
                  <span className="text-xs mr-1">📊</span>
                  {language === 'en' ? 'Export' : 'Exportar'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERWATCH³ Context Banner */}
      <div className="bg-card/30 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs font-medium">
                🔗 {language === 'en' ? 'Integrated with OVERWATCH³ Core' : 'Integrado con OVERWATCH³ Core'}
              </Badge>
              <div className="text-xs text-muted-foreground">
                {language === 'en' 
                  ? 'Real-time data sync with Strategic Intelligence Framework'
                  : 'Sincronización de datos en tiempo real con Marco de Inteligencia Estratégica'
                }
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{language === 'en' ? 'Last Updated:' : 'Última Actualización:'}</span>
              <span className="font-mono">
                {new Date(stats.lastUpdated).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HRIS Dashboard Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 pointer-events-none" />
        <div className="relative">
          <HrisPage />
        </div>
      </div>

      {/* OVERWATCH³ Footer Integration */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>{language === 'en' ? 'All systems operational' : 'Todos los sistemas operativos'}</span>
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

export default OverwatchHrisIntegration;