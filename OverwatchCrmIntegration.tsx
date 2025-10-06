import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  Cell,
  BarChart,
  Bar
} from 'recharts';

interface OverwatchCrmIntegrationProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchCrmIntegration({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: OverwatchCrmIntegrationProps) {
  const [crmMetrics, setCrmMetrics] = useState({
    totalLeads: 1847,
    qualifiedLeads: 892,
    conversionRate: 18.4,
    avgDealSize: 45600,
    salesVelocity: 32.7,
    pipelineValue: 2340000,
    closedDeals: 164,
    churnRate: 3.2,
    customerLtv: 187500,
    lastSync: new Date().toISOString()
  });

  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Simulate real-time CRM updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCrmMetrics(prev => ({
        ...prev,
        totalLeads: prev.totalLeads + Math.floor(Math.random() * 5),
        qualifiedLeads: prev.qualifiedLeads + Math.floor(Math.random() * 3),
        conversionRate: Math.max(15, Math.min(25, prev.conversionRate + (Math.random() * 0.6) - 0.3)),
        avgDealSize: prev.avgDealSize + Math.floor(Math.random() * 2000) - 1000,
        salesVelocity: Math.max(25, Math.min(40, prev.salesVelocity + (Math.random() * 1.0) - 0.5)),
        pipelineValue: prev.pipelineValue + Math.floor(Math.random() * 50000) - 25000,
        closedDeals: prev.closedDeals + (Math.random() > 0.9 ? 1 : 0),
        churnRate: Math.max(2, Math.min(5, prev.churnRate + (Math.random() * 0.2) - 0.1)),
        customerLtv: prev.customerLtv + Math.floor(Math.random() * 5000) - 2500,
        lastSync: new Date().toISOString()
      }));
    }, 35000); // Update every 35 seconds

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

  const crmCapabilities = {
    en: [
      "🎯 Predictive lead scoring with AI-driven insights",
      "📊 Advanced sales pipeline analytics & forecasting", 
      "💼 Customer lifetime value optimization",
      "⚡ Real-time deal velocity tracking",
      "🔄 Automated workflow & follow-up sequences",
      "📈 Competitive win/loss analysis"
    ],
    es: [
      "🎯 Puntuación predictiva de leads con insights impulsados por IA",
      "📊 Analíticas avanzadas de pipeline de ventas y pronósticos",
      "💼 Optimización del valor de vida del cliente",
      "⚡ Seguimiento de velocidad de tratos en tiempo real",
      "🔄 Flujos de trabajo automatizados y secuencias de seguimiento",
      "📈 Análisis competitivo de victorias/pérdidas"
    ]
  };

  const competitiveAdvantages = {
    en: {
      salesforce: {
        title: "vs. Salesforce",
        subtitle: "Advisory-grade intelligence vs. complex enterprise overhead",
        advantage: "Schema-driven coaching overlays with founder-friendly UX"
      },
      hubspot: {
        title: "vs. HubSpot",
        subtitle: "Integrated business command center vs. marketing-focused limitations", 
        advantage: "Unified OVERWATCH³ ecosystem with cross-domain intelligence"
      },
      pipedrive: {
        title: "vs. Pipedrive",
        subtitle: "Strategic intelligence platform vs. basic pipeline management",
        advantage: "McKinsey-style advisory insights with predictive analytics"
      }
    },
    es: {
      salesforce: {
        title: "vs. Salesforce",
        subtitle: "Inteligencia de grado asesor vs. complejidad empresarial excesiva",
        advantage: "Overlays de coaching basados en esquemas con UX amigable para fundadores"
      },
      hubspot: {
        title: "vs. HubSpot",
        subtitle: "Centro de comando de negocios integrado vs. limitaciones enfocadas en marketing",
        advantage: "Ecosistema OVERWATCH³ unificado con inteligencia inter-dominio"
      },
      pipedrive: {
        title: "vs. Pipedrive",
        subtitle: "Plataforma de inteligencia estratégica vs. gestión básica de pipeline",
        advantage: "Insights asesores estilo McKinsey con analíticas predictivas"
      }
    }
  };

  // Mock pipeline data for forecasting chart
  const pipelineData = [
    { month: 'Jan', value: 1800000, forecast: 1950000, closed: 1620000 },
    { month: 'Feb', value: 2100000, forecast: 2250000, closed: 1890000 },
    { month: 'Mar', value: 2340000, forecast: 2400000, closed: 2010000 },
    { month: 'Apr', value: 2580000, forecast: 2650000, closed: null },
    { month: 'May', value: null, forecast: 2800000, closed: null },
    { month: 'Jun', value: null, forecast: 3100000, closed: null }
  ];

  // Mock funnel data for conversion tracking
  const funnelData = [
    { name: 'Total Leads', value: crmMetrics.totalLeads, fill: '#dc2626' },
    { name: 'Qualified', value: crmMetrics.qualifiedLeads, fill: '#ea580c' },
    { name: 'Proposal', value: Math.floor(crmMetrics.qualifiedLeads * 0.45), fill: '#f59e0b' },
    { name: 'Negotiation', value: Math.floor(crmMetrics.qualifiedLeads * 0.28), fill: '#eab308' },
    { name: 'Closed Won', value: crmMetrics.closedDeals, fill: '#22c55e' }
  ];

  // Mock lead scoring heatmap data
  const leadScoringData = [
    { source: 'Website', score: 87, leads: 342, conversion: 22.3 },
    { source: 'LinkedIn', score: 78, leads: 289, conversion: 19.8 },
    { source: 'Referral', score: 94, leads: 156, conversion: 31.4 },
    { source: 'Events', score: 71, leads: 203, conversion: 16.7 },
    { source: 'Cold Email', score: 62, leads: 487, conversion: 12.1 },
    { source: 'Content', score: 83, leads: 178, conversion: 24.7 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* OVERWATCH³ CRM Header */}
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
                      OVERWATCH³ CRM Intelligence
                      <Badge variant="secondary" className="text-xs">
                        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
                      </Badge>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Customer Relationship Intelligence - Advisory-Grade Sales Command Center'
                        : 'Inteligencia de Relaciones con Clientes - Centro de Comando de Ventas de Grado Asesor'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Real-time CRM Status */}
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-2 h-2 bg-red-400 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Live Pipeline</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(crmMetrics.lastSync).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {/* Key CRM Metrics Preview */}
              <div className="hidden xl:flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-foreground">
                    {crmMetrics.totalLeads.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Leads' : 'Leads'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-green-400">
                    {crmMetrics.conversionRate.toFixed(1)}%
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Convert' : 'Convert'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-blue-400">
                    ${(crmMetrics.avgDealSize / 1000).toFixed(0)}K
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Avg Deal' : 'Trato Prom'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-purple-400">
                    ${(crmMetrics.pipelineValue / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Pipeline' : 'Pipeline'}</div>
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
                  onClick={() => onNavigate('epm-cloud')}
                  className="hidden lg:flex"
                >
                  <span className="text-xs mr-1">⚡</span>
                  {language === 'en' ? 'EPM' : 'EPM'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Generate CRM analytics report
                    console.log('📊 Generating CRM intelligence report...');
                    const reportData = {
                      leads: crmMetrics.totalLeads,
                      conversion: crmMetrics.conversionRate,
                      pipeline: crmMetrics.pipelineValue,
                      velocity: crmMetrics.salesVelocity,
                      ltv: crmMetrics.customerLtv,
                      timestamp: new Date().toISOString()
                    };
                    console.log('CRM Report Data:', reportData);
                    alert(language === 'en' 
                      ? 'CRM Intelligence Report generated! Check console for details.' 
                      : '¡Reporte de Inteligencia CRM generado! Revisa la consola para detalles.'
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

      {/* CRM Capabilities & Competitive Advantages Banner */}
      <div className="bg-card/30 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'en' 
                  ? '🎯 CRM Intelligence Capabilities'
                  : '🎯 Capacidades de Inteligencia CRM'
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {crmCapabilities[language].map((capability, index) => (
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

      {/* Enhanced CRM Dashboard Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 pointer-events-none" />
        <div className="relative">
          <div className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              {/* OVERWATCH³ Integration Context Cards */}
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
                      {competitiveAdvantages[language].salesforce.title}
                    </h4>
                  </div>
                  <p className="text-sm text-red-600/80 dark:text-red-400/80">
                    {competitiveAdvantages[language].salesforce.advantage}
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
                      {competitiveAdvantages[language].hubspot.title}
                    </h4>
                  </div>
                  <p className="text-sm text-orange-600/80 dark:text-orange-400/80">
                    {competitiveAdvantages[language].hubspot.advantage}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-yellow-50/50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200/50 dark:border-yellow-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-600 dark:text-yellow-400">🚀</span>
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">
                      {competitiveAdvantages[language].pipedrive.title}
                    </h4>
                  </div>
                  <p className="text-sm text-yellow-600/80 dark:text-yellow-400/80">
                    {competitiveAdvantages[language].pipedrive.advantage}
                  </p>
                </motion.div>
              </div>

              {/* CRM Dashboard Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sales Pipeline Forecast */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-blue-400">📈</span>
                        {language === 'en' ? 'Pipeline Forecasting' : 'Pronóstico de Pipeline'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={pipelineData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                          <XAxis dataKey="month" stroke="#888888" />
                          <YAxis stroke="#888888" tickFormatter={(value) => `$${(value/1000000).toFixed(1)}M`} />
                          <Tooltip 
                            formatter={(value: any) => [`$${(value/1000000).toFixed(1)}M`, '']}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                          <Line type="monotone" dataKey="value" stroke="#c0c0c0" strokeWidth={2} dot={{ fill: '#c0c0c0' }} />
                          <Line type="monotone" dataKey="forecast" stroke="#22c55e" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#22c55e' }} />
                          <Line type="monotone" dataKey="closed" stroke="#dc2626" strokeWidth={2} dot={{ fill: '#dc2626' }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Conversion Funnel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-green-400">🔄</span>
                        {language === 'en' ? 'Conversion Funnel' : 'Embudo de Conversión'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <FunnelChart>
                          <Tooltip 
                            formatter={(value: any, name: string) => [value.toLocaleString(), name]}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                          <Funnel dataKey="value" data={funnelData} cx="50%" cy="50%">
                            {funnelData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Funnel>
                        </FunnelChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Lead Scoring Heatmap */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:col-span-2"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-purple-400">🎯</span>
                        {language === 'en' ? 'Lead Scoring Intelligence' : 'Inteligencia de Puntuación de Leads'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={leadScoringData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                          <XAxis dataKey="source" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <Tooltip 
                            formatter={(value: any, name: string) => {
                              if (name === 'score') return [`${value}/100`, 'Score'];
                              if (name === 'leads') return [value.toLocaleString(), 'Leads'];
                              if (name === 'conversion') return [`${value}%`, 'Conversion'];
                              return [value, name];
                            }}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                          <Bar dataKey="score" fill="#c0c0c0" />
                          <Bar dataKey="conversion" fill="#dc2626" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERWATCH³ CRM Footer Integration */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                <span>{language === 'en' ? 'Real-time pipeline tracking active' : 'Seguimiento de pipeline en tiempo real activo'}</span>
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

export default OverwatchCrmIntegration;