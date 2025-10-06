import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';

interface OverwatchEdmIntegrationProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchEdmIntegration({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: OverwatchEdmIntegrationProps) {
  const [edmMetrics, setEdmMetrics] = useState({
    totalCampaigns: 147,
    activeSegments: 28,
    deliverabilityRate: 97.3,
    openRate: 34.7,
    clickRate: 8.2,
    conversionRate: 4.8,
    roi: 312.5,
    totalSubscribers: 18640,
    engagedSubscribers: 11240,
    churnRate: 2.1,
    avgRevenuePerEmail: 2.85,
    automationEfficiency: 89.4,
    lastSync: new Date().toISOString()
  });

  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Simulate real-time EDM updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEdmMetrics(prev => ({
        ...prev,
        totalCampaigns: prev.totalCampaigns + (Math.random() > 0.8 ? 1 : 0),
        deliverabilityRate: Math.max(95, Math.min(99, prev.deliverabilityRate + (Math.random() * 0.4) - 0.2)),
        openRate: Math.max(30, Math.min(40, prev.openRate + (Math.random() * 0.8) - 0.4)),
        clickRate: Math.max(6, Math.min(12, prev.clickRate + (Math.random() * 0.4) - 0.2)),
        conversionRate: Math.max(3, Math.min(7, prev.conversionRate + (Math.random() * 0.3) - 0.15)),
        roi: Math.max(250, Math.min(400, prev.roi + (Math.random() * 10) - 5)),
        totalSubscribers: prev.totalSubscribers + Math.floor(Math.random() * 8) - 2,
        engagedSubscribers: prev.engagedSubscribers + Math.floor(Math.random() * 6) - 1,
        churnRate: Math.max(1.5, Math.min(3.5, prev.churnRate + (Math.random() * 0.2) - 0.1)),
        avgRevenuePerEmail: Math.max(2.0, Math.min(4.0, prev.avgRevenuePerEmail + (Math.random() * 0.2) - 0.1)),
        automationEfficiency: Math.max(85, Math.min(95, prev.automationEfficiency + (Math.random() * 1.0) - 0.5)),
        lastSync: new Date().toISOString()
      }));
    }, 28000); // Update every 28 seconds

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

  const edmCapabilities = {
    en: [
      "📧 Advanced email campaign optimization with AI-driven subject line testing",
      "🎯 Dynamic audience segmentation based on behavioral patterns and preferences", 
      "🤖 Personalization engine with real-time content customization",
      "📊 Multi-channel attribution tracking across email, social, and web",
      "⚡ Automated customer journey mapping with trigger-based sequences",
      "🔄 A/B testing framework with statistical significance analysis"
    ],
    es: [
      "📧 Optimización avanzada de campañas de email con pruebas de líneas de asunto impulsadas por IA",
      "🎯 Segmentación dinámica de audiencia basada en patrones de comportamiento y preferencias",
      "🤖 Motor de personalización con customización de contenido en tiempo real",
      "📊 Seguimiento de atribución multicanal a través de email, social y web",
      "⚡ Mapeo automatizado de viajes del cliente con secuencias basadas en disparadores",
      "🔄 Marco de pruebas A/B con análisis de significancia estadística"
    ]
  };

  const competitiveAdvantages = {
    en: {
      mailchimp: {
        title: "vs. Mailchimp",
        subtitle: "Strategic intelligence platform vs. basic email automation",
        advantage: "Integrated OVERWATCH³ ecosystem with cross-domain customer intelligence"
      },
      klaviyo: {
        title: "vs. Klaviyo",
        subtitle: "Advisory-grade campaign optimization vs. e-commerce focused limitations", 
        advantage: "Schema-driven coaching overlays with founder-friendly automation"
      },
      marketo: {
        title: "vs. Marketo",
        subtitle: "Bilingual-first architecture vs. complex enterprise overhead",
        advantage: "McKinsey-style strategic insights with real-time performance coaching"
      }
    },
    es: {
      mailchimp: {
        title: "vs. Mailchimp",
        subtitle: "Plataforma de inteligencia estratégica vs. automatización básica de email",
        advantage: "Ecosistema OVERWATCH³ integrado con inteligencia de clientes inter-dominio"
      },
      klaviyo: {
        title: "vs. Klaviyo",
        subtitle: "Optimización de campañas de grado asesor vs. limitaciones enfocadas en e-commerce",
        advantage: "Overlays de coaching basados en esquemas con automatización amigable para fundadores"
      },
      marketo: {
        title: "vs. Marketo",
        subtitle: "Arquitectura bilingüe-primero vs. complejidad empresarial excesiva",
        advantage: "Insights estratégicos estilo McKinsey con coaching de rendimiento en tiempo real"
      }
    }
  };

  // Mock ROI tracking data
  const roiData = [
    { month: 'Jan', roi: 285, spent: 12000, revenue: 34200 },
    { month: 'Feb', roi: 298, spent: 13500, revenue: 40230 },
    { month: 'Mar', roi: 312, spent: 14200, revenue: 44344 },
    { month: 'Apr', roi: 327, spent: 15000, revenue: 49050 },
    { month: 'May', roi: 315, spent: 16800, revenue: 52920 },
    { month: 'Jun', roi: 338, spent: 17200, revenue: 58116 }
  ];

  // Mock audience segmentation data
  const segmentationData = [
    { name: 'New Prospects', value: 35, color: '#22c55e' },
    { name: 'Active Customers', value: 28, color: '#3b82f6' },
    { name: 'Churned Users', value: 15, color: '#ef4444' },
    { name: 'VIP Clients', value: 12, color: '#f59e0b' },
    { name: 'Re-engagement', value: 10, color: '#8b5cf6' }
  ];

  // Mock personalization performance data
  const personalizationData = [
    { segment: 'New Prospects', baseline: 2.1, personalized: 4.8, lift: 129 },
    { segment: 'Active Customers', baseline: 5.2, personalized: 8.7, lift: 67 },
    { segment: 'Churned Users', baseline: 0.8, personalized: 2.3, lift: 188 },
    { segment: 'VIP Clients', baseline: 7.1, personalized: 12.4, lift: 75 },
    { segment: 'Re-engagement', baseline: 1.4, personalized: 3.9, lift: 179 }
  ];

  // Mock campaign performance timeline
  const campaignTimeline = [
    { week: 'W1', campaigns: 12, opens: 3420, clicks: 287, conversions: 23 },
    { week: 'W2', campaigns: 15, opens: 4280, clicks: 356, conversions: 31 },
    { week: 'W3', campaigns: 18, opens: 5130, clicks: 421, conversions: 38 },
    { week: 'W4', campaigns: 14, opens: 3890, clicks: 318, conversions: 27 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* OVERWATCH³ EDM Header */}
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
                      OVERWATCH³ EDM Intelligence
                      <Badge variant="secondary" className="text-xs">
                        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
                      </Badge>
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'Email & Digital Marketing Intelligence - Campaign Performance Command Center'
                        : 'Inteligencia de Email y Marketing Digital - Centro de Comando de Rendimiento de Campañas'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Real-time EDM Status */}
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Live Campaigns</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(edmMetrics.lastSync).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {/* Key EDM Metrics Preview */}
              <div className="hidden xl:flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-foreground">
                    {edmMetrics.totalCampaigns}
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Campaigns' : 'Campañas'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-green-400">
                    {edmMetrics.openRate.toFixed(1)}%
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Open Rate' : 'Tasa Apertura'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-blue-400">
                    {edmMetrics.clickRate.toFixed(1)}%
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'Click Rate' : 'Tasa Click'}</div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="text-center">
                  <div className="font-bold text-purple-400">
                    {edmMetrics.roi.toFixed(0)}%
                  </div>
                  <div className="text-xs text-muted-foreground">{language === 'en' ? 'ROI' : 'ROI'}</div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('crm-intelligence')}
                  className="hidden md:flex"
                >
                  <span className="text-xs mr-1">🎯</span>
                  {language === 'en' ? 'CRM' : 'CRM'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('hris-dashboard')}
                  className="hidden lg:flex"
                >
                  <span className="text-xs mr-1">🏢</span>
                  {language === 'en' ? 'HRIS³' : 'HRIS³'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Generate EDM campaign report
                    console.log('📧 Generating EDM campaign intelligence report...');
                    const reportData = {
                      campaigns: edmMetrics.totalCampaigns,
                      deliverability: edmMetrics.deliverabilityRate,
                      engagement: {
                        openRate: edmMetrics.openRate,
                        clickRate: edmMetrics.clickRate,
                        conversionRate: edmMetrics.conversionRate
                      },
                      roi: edmMetrics.roi,
                      subscribers: edmMetrics.totalSubscribers,
                      automation: edmMetrics.automationEfficiency,
                      timestamp: new Date().toISOString()
                    };
                    console.log('EDM Report Data:', reportData);
                    alert(language === 'en' 
                      ? 'EDM Campaign Intelligence Report generated! Check console for details.' 
                      : '¡Reporte de Inteligencia de Campaña EDM generado! Revisa la consola para detalles.'
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

      {/* EDM Capabilities & Competitive Advantages Banner */}
      <div className="bg-card/30 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'en' 
                  ? '📧 EDM Intelligence Capabilities'
                  : '📧 Capacidades de Inteligencia EDM'
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edmCapabilities[language].map((capability, index) => (
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

      {/* Enhanced EDM Dashboard Content */}
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
                  className="bg-green-50/50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200/50 dark:border-green-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 dark:text-green-400">📧</span>
                    <h4 className="font-semibold text-green-700 dark:text-green-300">
                      {competitiveAdvantages[language].mailchimp.title}
                    </h4>
                  </div>
                  <p className="text-sm text-green-600/80 dark:text-green-400/80">
                    {competitiveAdvantages[language].mailchimp.advantage}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-600 dark:text-emerald-400">🎯</span>
                    <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">
                      {competitiveAdvantages[language].klaviyo.title}
                    </h4>
                  </div>
                  <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
                    {competitiveAdvantages[language].klaviyo.advantage}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-teal-50/50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200/50 dark:border-teal-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-teal-600 dark:text-teal-400">🚀</span>
                    <h4 className="font-semibold text-teal-700 dark:text-teal-300">
                      {competitiveAdvantages[language].marketo.title}
                    </h4>
                  </div>
                  <p className="text-sm text-teal-600/80 dark:text-teal-400/80">
                    {competitiveAdvantages[language].marketo.advantage}
                  </p>
                </motion.div>
              </div>

              {/* EDM Dashboard Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ROI Tracking Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-green-400">📊</span>
                        {language === 'en' ? 'Campaign ROI Tracking' : 'Seguimiento ROI de Campañas'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={roiData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                          <XAxis dataKey="month" stroke="#888888" />
                          <YAxis stroke="#888888" tickFormatter={(value) => `${value}%`} />
                          <Tooltip 
                            formatter={(value: any, name: string) => {
                              if (name === 'roi') return [`${value}%`, 'ROI'];
                              if (name === 'spent') return [`$${value.toLocaleString()}`, 'Spent'];
                              if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Revenue'];
                              return [value, name];
                            }}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                          <Bar dataKey="roi" fill="#22c55e" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Audience Segmentation Pie Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-blue-400">🎯</span>
                        {language === 'en' ? 'Audience Segmentation' : 'Segmentación de Audiencia'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={segmentationData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {segmentationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: any) => [`${value}%`, 'Segment']}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {segmentationData.map((segment, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: segment.color }}
                            />
                            <span className="text-muted-foreground">{segment.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Personalization Engine Performance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:col-span-2"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-purple-400">🤖</span>
                        {language === 'en' ? 'Personalization Engine Performance' : 'Rendimiento del Motor de Personalización'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                        {personalizationData.map((segment, index) => (
                          <div key={index} className="bg-card/30 p-4 rounded-lg border border-border">
                            <div className="text-sm font-medium text-foreground mb-2">{segment.segment}</div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">{language === 'en' ? 'Baseline' : 'Base'}</span>
                                <span className="text-foreground">{segment.baseline}%</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">{language === 'en' ? 'Personalized' : 'Personalizado'}</span>
                                <span className="text-green-400">{segment.personalized}%</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">{language === 'en' ? 'Lift' : 'Mejora'}</span>
                                <span className="text-purple-400">+{segment.lift}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={campaignTimeline}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                          <XAxis dataKey="week" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <Tooltip 
                            formatter={(value: any, name: string) => [value.toLocaleString(), name]}
                            labelStyle={{ color: '#888888' }}
                            contentStyle={{ backgroundColor: '#171717', border: '1px solid #333333' }}
                          />
                          <Area type="monotone" dataKey="opens" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="clicks" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="conversions" stackId="1" stroke="#c0c0c0" fill="#c0c0c0" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERWATCH³ EDM Footer Integration */}
      <div className="bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{language === 'en' ? 'Real-time campaign optimization active' : 'Optimización de campañas en tiempo real activa'}</span>
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
                onClick={() => onNavigate('crm-intelligence')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'en' ? 'CRM Intelligence' : 'CRM Inteligencia'}
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

export default OverwatchEdmIntegration;