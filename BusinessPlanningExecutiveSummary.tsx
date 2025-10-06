import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

interface BusinessPlanningExecutiveSummaryProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

interface StrategicMetric {
  id: string;
  title: string;
  current: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  impact: 'high' | 'medium' | 'low';
  category: 'revenue' | 'efficiency' | 'growth' | 'risk';
}

interface ROIProjection {
  module: string;
  investment: number;
  projectedReturn: number;
  timeframe: string;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export function BusinessPlanningExecutiveSummary({
  language,
  onNavigate,
  currentMode
}: BusinessPlanningExecutiveSummaryProps) {
  const [activeReport, setActiveReport] = useState<'overview' | 'roi' | 'risk' | 'recommendations'>('overview');
  const [timeframe, setTimeframe] = useState<'quarterly' | 'annual' | 'five-year'>('annual');

  // Labels for bilingual support
  const labels = {
    en: {
      title: 'Executive Planning Summary',
      subtitle: 'Strategic intelligence and ROI projections for OVERWATCH³ deployment',
      overview: 'Strategic Overview',
      roiAnalysis: 'ROI Analysis',
      riskAssessment: 'Risk Assessment',
      recommendations: 'Strategic Recommendations',
      keyMetrics: 'Key Performance Indicators',
      businessImpact: 'Business Impact Analysis',
      investmentSummary: 'Investment Summary',
      projectedReturns: 'Projected Returns',
      strategicAlignment: 'Strategic Alignment',
      implementationRoadmap: 'Implementation Roadmap',
      riskMitigation: 'Risk Mitigation Strategy',
      nextSteps: 'Next Steps',
      totalInvestment: 'Total Investment',
      expectedROI: 'Expected ROI',
      paybackPeriod: 'Payback Period',
      confidenceLevel: 'Confidence Level',
      revenueGrowth: 'Revenue Growth',
      costReduction: 'Cost Reduction',
      efficiencyGain: 'Efficiency Gain',
      riskReduction: 'Risk Reduction',
      competitiveAdvantage: 'Competitive Advantage',
      scalabilityFactor: 'Scalability Factor',
      generateReport: 'Generate Full Report',
      scheduleReview: 'Schedule Review',
      exportPresentation: 'Export Presentation',
      quarterly: 'Quarterly',
      annual: 'Annual',
      fiveYear: '5-Year Plan'
    },
    es: {
      title: 'Resumen Ejecutivo de Planificación',
      subtitle: 'Inteligencia estratégica y proyecciones ROI para despliegue OVERWATCH³',
      overview: 'Resumen Estratégico',
      roiAnalysis: 'Análisis ROI',
      riskAssessment: 'Evaluación de Riesgos',
      recommendations: 'Recomendaciones Estratégicas',
      keyMetrics: 'Indicadores Clave de Rendimiento',
      businessImpact: 'Análisis de Impacto Empresarial',
      investmentSummary: 'Resumen de Inversión',
      projectedReturns: 'Retornos Proyectados',
      strategicAlignment: 'Alineación Estratégica',
      implementationRoadmap: 'Hoja de Ruta de Implementación',
      riskMitigation: 'Estrategia de Mitigación de Riesgos',
      nextSteps: 'Próximos Pasos',
      totalInvestment: 'Inversión Total',
      expectedROI: 'ROI Esperado',
      paybackPeriod: 'Período de Recuperación',
      confidenceLevel: 'Nivel de Confianza',
      revenueGrowth: 'Crecimiento de Ingresos',
      costReduction: 'Reducción de Costos',
      efficiencyGain: 'Ganancia de Eficiencia',
      riskReduction: 'Reducción de Riesgos',
      competitiveAdvantage: 'Ventaja Competitiva',
      scalabilityFactor: 'Factor de Escalabilidad',
      generateReport: 'Generar Reporte Completo',
      scheduleReview: 'Programar Revisión',
      exportPresentation: 'Exportar Presentación',
      quarterly: 'Trimestral',
      annual: 'Anual',
      fiveYear: 'Plan 5 Años'
    }
  };

  const t = labels[language];

  // Strategic metrics data
  const strategicMetrics: StrategicMetric[] = [
    {
      id: 'revenue-growth',
      title: t.revenueGrowth,
      current: 42,
      target: 65,
      unit: '%',
      trend: 'up',
      impact: 'high',
      category: 'revenue'
    },
    {
      id: 'cost-reduction',
      title: t.costReduction,
      current: 28,
      target: 40,
      unit: '%',
      trend: 'up',
      impact: 'high',
      category: 'efficiency'
    },
    {
      id: 'efficiency-gain',
      title: t.efficiencyGain,
      current: 67,
      target: 85,
      unit: '%',
      trend: 'up',
      impact: 'medium',
      category: 'efficiency'
    },
    {
      id: 'risk-reduction',
      title: t.riskReduction,
      current: 34,
      target: 60,
      unit: '%',
      trend: 'up',
      impact: 'medium',
      category: 'risk'
    },
    {
      id: 'competitive-advantage',
      title: t.competitiveAdvantage,
      current: 78,
      target: 95,
      unit: '%',
      trend: 'up',
      impact: 'high',
      category: 'growth'
    },
    {
      id: 'scalability-factor',
      title: t.scalabilityFactor,
      current: 89,
      target: 100,
      unit: '%',
      trend: 'up',
      impact: 'high',
      category: 'growth'
    }
  ];

  // ROI projections data
  const roiProjections: ROIProjection[] = [
    {
      module: 'HRIS³',
      investment: 150000,
      projectedReturn: 627500,
      timeframe: '18 months',
      confidence: 94,
      riskLevel: 'low'
    },
    {
      module: 'CRM Intelligence',
      investment: 120000,
      projectedReturn: 504000,
      timeframe: '12 months',
      confidence: 89,
      riskLevel: 'low'
    },
    {
      module: 'EDM Intelligence',
      investment: 85000,
      projectedReturn: 323000,
      timeframe: '9 months',
      confidence: 91,
      riskLevel: 'low'
    },
    {
      module: 'EPM Cloud',
      investment: 200000,
      projectedReturn: 920000,
      timeframe: '24 months',
      confidence: 87,
      riskLevel: 'medium'
    },
    {
      module: 'ERP Assessment',
      investment: 75000,
      projectedReturn: 337500,
      timeframe: '15 months',
      confidence: 85,
      riskLevel: 'medium'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '📊';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'revenue': return 'bg-green-500/20 border-green-500/30';
      case 'efficiency': return 'bg-blue-500/20 border-blue-500/30';
      case 'growth': return 'bg-purple-500/20 border-purple-500/30';
      case 'risk': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotalROI = () => {
    const totalInvestment = roiProjections.reduce((sum, proj) => sum + proj.investment, 0);
    const totalReturn = roiProjections.reduce((sum, proj) => sum + proj.projectedReturn, 0);
    return ((totalReturn - totalInvestment) / totalInvestment) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="command-center-card mx-6 mt-6 p-6 rounded-command">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('integrated-planning-execution')}
              className="module-nav-button"
            >
              <span className="text-lg">←</span>
              <span className="ml-2">{language === 'en' ? 'Back' : 'Atrás'}</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="bg-input border border-border text-foreground px-3 py-1 rounded text-sm"
            >
              <option value="quarterly">{t.quarterly}</option>
              <option value="annual">{t.annual}</option>
              <option value="five-year">{t.fiveYear}</option>
            </select>
            <div className="module-status-online"></div>
            <span className="text-sm text-muted-foreground">
              {language === 'en' ? 'Live Analytics' : 'Analíticas en Vivo'}
            </span>
          </div>
        </div>
      </header>

      {/* Executive Summary Cards */}
      <div className="mx-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="command-center-card p-4 rounded-command">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {formatCurrency(roiProjections.reduce((sum, proj) => sum + proj.investment, 0))}
              </div>
              <div className="text-sm text-muted-foreground">{t.totalInvestment}</div>
            </div>
          </div>
          
          <div className="command-center-card p-4 rounded-command">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                +{calculateTotalROI().toFixed(0)}%
              </div>
              <div className="text-sm text-muted-foreground">{t.expectedROI}</div>
            </div>
          </div>
          
          <div className="command-center-card p-4 rounded-command">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">14 months</div>
              <div className="text-sm text-muted-foreground">{t.paybackPeriod}</div>
            </div>
          </div>
          
          <div className="command-center-card p-4 rounded-command">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">91%</div>
              <div className="text-sm text-muted-foreground">{t.confidenceLevel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Navigation */}
      <div className="mx-6 mt-4">
        <div className="command-center-card p-4 rounded-command">
          <div className="flex gap-2">
            <Button
              variant={activeReport === 'overview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveReport('overview')}
              className="command-center-button"
            >
              {t.overview}
            </Button>
            <Button
              variant={activeReport === 'roi' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveReport('roi')}
              className="command-center-button"
            >
              {t.roiAnalysis}
            </Button>
            <Button
              variant={activeReport === 'risk' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveReport('risk')}
              className="command-center-button"
            >
              {t.riskAssessment}
            </Button>
            <Button
              variant={activeReport === 'recommendations' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveReport('recommendations')}
              className="command-center-button"
            >
              {t.recommendations}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeReport === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`command-center-card p-6 rounded-command border-l-4 ${getCategoryColor(metric.category)}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">{metric.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                        <Badge variant="outline" className={getImpactColor(metric.impact)}>
                          {metric.impact}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-foreground">
                          {metric.current}{metric.unit}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Target' : 'Objetivo'}: {metric.target}{metric.unit}
                        </span>
                      </div>
                      
                      <Progress 
                        value={(metric.current / metric.target) * 100} 
                        className="h-2" 
                      />
                      
                      <div className="text-xs text-muted-foreground">
                        {((metric.current / metric.target) * 100).toFixed(0)}% {language === 'en' ? 'of target achieved' : 'del objetivo alcanzado'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Impact Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="command-center-card p-6 rounded-command">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.businessImpact}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Revenue Impact' : 'Impacto en Ingresos'}
                      </span>
                      <span className="text-green-400 font-medium">+$2.8M annually</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Cost Savings' : 'Ahorro de Costos'}
                      </span>
                      <span className="text-blue-400 font-medium">-$1.2M annually</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Productivity Gain' : 'Ganancia de Productividad'}
                      </span>
                      <span className="text-purple-400 font-medium">+47% efficiency</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Risk Mitigation' : 'Mitigación de Riesgos'}
                      </span>
                      <span className="text-yellow-400 font-medium">-65% exposure</span>
                    </div>
                  </div>
                </div>
                
                <div className="command-center-card p-6 rounded-command">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.strategicAlignment}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-foreground">
                        {language === 'en' ? 'HR transformation to command center' : 'Transformación RH a centro comando'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-foreground">
                        {language === 'en' ? 'Unified customer intelligence platform' : 'Plataforma unificada inteligencia cliente'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-foreground">
                        {language === 'en' ? 'Financial planning automation' : 'Automatización planificación financiera'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-foreground">
                        {language === 'en' ? 'Strategic ERP positioning' : 'Posicionamiento ERP estratégico'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeReport === 'roi' && (
            <motion.div
              key="roi"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {roiProjections.map((projection, index) => (
                  <motion.div
                    key={projection.module}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="command-center-card p-6 rounded-command"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">{projection.module}</h3>
                      <Badge variant="outline" className={getRiskColor(projection.riskLevel)}>
                        {projection.riskLevel} risk
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Investment' : 'Inversión'}
                          </div>
                          <div className="text-lg font-semibold text-red-400">
                            {formatCurrency(projection.investment)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Projected Return' : 'Retorno Proyectado'}
                          </div>
                          <div className="text-lg font-semibold text-green-400">
                            {formatCurrency(projection.projectedReturn)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Timeframe' : 'Plazo'}
                          </div>
                          <div className="text-sm font-medium text-foreground">{projection.timeframe}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Confidence' : 'Confianza'}
                          </div>
                          <div className="text-sm font-medium text-foreground">{projection.confidence}%</div>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">ROI</span>
                          <span className="text-lg font-bold text-primary">
                            +{(((projection.projectedReturn - projection.investment) / projection.investment) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button className="command-center-button">
            {t.generateReport}
          </Button>
          <Button className="command-center-button">
            {t.scheduleReview}
          </Button>
          <Button className="command-center-button">
            {t.exportPresentation}
          </Button>
          <Button variant="outline" onClick={() => onNavigate('integrated-planning-execution')}>
            {language === 'en' ? 'Back to Planning' : 'Volver a Planificación'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BusinessPlanningExecutiveSummary;