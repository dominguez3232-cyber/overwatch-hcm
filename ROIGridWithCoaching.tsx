import React, { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { InteractiveCoachingOverlay } from './InteractiveCoachingOverlay';
import { useCoachingOverlayContext, useMetricCoaching } from './CoachingOverlayProvider';
import { coachingOverlayLibrary } from './CoachingOverlaySeed';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Brain, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

interface ROIGridProps {
  language: 'en' | 'es';
  currency: string;
  data: {
    [key: string]: {
      Q1: number;
      Q2: number;
      Q3: number;
      Q4: number;
      FY: number;
    };
  };
}

// Enhanced metric cell with coaching overlay integration
function MetricCell({ 
  metricId, 
  value, 
  isROI = false, 
  isExpense = false, 
  currency, 
  language 
}: {
  metricId: string;
  value: number;
  isROI?: boolean;
  isExpense?: boolean;
  currency: string;
  language: 'en' | 'es';
}) {
  const cellRef = useRef<HTMLTableCellElement>(null);
  const coaching = useMetricCoaching(metricId);
  const context = useCoachingOverlayContext();

  const formatValue = (value: number, isROI: boolean = false, isExpense: boolean = false) => {
    if (isROI) {
      return `${value.toFixed(1)}%`;
    }
    
    const formatted = Math.abs(value).toLocaleString();
    const symbol = currency === 'USD' ? '$' : '$';
    const sign = isExpense ? '(' : (value < 0 ? '-' : '');
    const closeSign = isExpense ? ')' : '';
    
    return `${sign}${symbol}${formatted}${closeSign}`;
  };

  const getCellStyle = () => {
    const baseStyle = {
      color: isROI && value > 0 ? '#22c55e' : 
             isROI && value <= 0 ? '#dc2626' : 
             '#e5e5e5'
    };

    if (coaching.hasOverlay && coaching.isActive) {
      return {
        ...baseStyle,
        boxShadow: '0 0 0 2px #3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)'
      };
    }

    return baseStyle;
  };

  return (
    <>
      <td 
        ref={cellRef}
        className={`p-4 text-center font-medium text-gray-200 cursor-pointer transition-all duration-200 ${
          coaching.hasOverlay ? 'hover:bg-blue-500/10 relative' : ''
        }`}
        style={getCellStyle()}
        onClick={() => {
          if (coaching.hasOverlay) {
            if (context.state.overlayMode === 'hover') {
              coaching.activate('sidebar');
            } else {
              coaching.activate();
            }
            coaching.trackInteraction('click');
          }
        }}
        onMouseEnter={() => {
          if (coaching.hasOverlay && context.state.overlayMode === 'hover') {
            coaching.trackInteraction('hover');
          }
        }}
      >
        <div className="flex items-center justify-center gap-2">
          {formatValue(value, isROI, isExpense)}
          {coaching.hasOverlay && (
            <Brain className="w-4 h-4 text-blue-400 opacity-60" />
          )}
        </div>

        {coaching.hasOverlay && coaching.content && context.state.overlayMode === 'hover' && (
          <InteractiveCoachingOverlay
            config={coaching.config}
            content={coaching.content}
            mode="hover"
            target={cellRef}
            position="top"
          />
        )}
      </td>

      {coaching.hasOverlay && coaching.content && coaching.isActive && context.state.overlayMode === 'sidebar' && (
        <InteractiveCoachingOverlay
          config={coaching.config}
          content={coaching.content}
          mode="sidebar"
          onClose={coaching.deactivate}
          onExport={(format) => {
            console.log(`Exporting ${metricId} guidance as ${format}`);
            coaching.trackInteraction(`export-${format}`);
          }}
        />
      )}
    </>
  );
}

export function ROIGridWithCoaching({ language, currency, data }: ROIGridProps) {
  const context = useCoachingOverlayContext();
  
  const rowLabels = {
    en: {
      revenue: "Revenue",
      grossMargin: "Gross Margin", 
      operatingExpenses: "Operating Expenses",
      netIncome: "Net Income",
      roi: "ROI %"
    },
    es: {
      revenue: "Ingresos",
      grossMargin: "Margen Bruto",
      operatingExpenses: "Gastos Operativos", 
      netIncome: "Ingreso Neto",
      roi: "ROI %"
    }
  };

  const columns = ['Q1', 'Q2', 'Q3', 'Q4', 'FY'];
  const rows = ['revenue', 'grossMargin', 'operatingExpenses', 'netIncome', 'roi'];

  // Map row names to coaching overlay metrics
  const getMetricId = (row: string, col: string) => {
    const metricMap: Record<string, string> = {
      'revenue': 'revenue_growth',
      'grossMargin': 'gross_margin_optimization', 
      'operatingExpenses': 'cost_center_efficiency',
      'netIncome': 'net_income_velocity',
      'roi': 'forecast_accuracy'
    };
    
    return `${metricMap[row] || row}_${col.toLowerCase()}`;
  };

  const analytics = context.getOverlayAnalytics();

  return (
    <div className="px-6 lg:px-20 py-6 bg-background min-h-screen">
      {/* Enhanced Financial Dashboard with Profile and Images */}
      <div className="space-y-8">
        {/* Coaching Controls Header */}
        <div className="bg-card rounded-lg shadow-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {language === 'en' ? 'Interactive Coaching Dashboard' : 'Panel de Coaching Interactivo'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Click metrics for strategic guidance • Hover for quick insights'
                    : 'Haz clic en métricas para guía estratégica • Pasa el cursor para insights rápidos'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                <TrendingUp className="w-4 h-4 mr-1" />
                {analytics.totalViews} {language === 'en' ? 'Views' : 'Vistas'}
              </Badge>
              
              <select
                value={context.state.currentStakeholder}
                onChange={(e) => context.setStakeholder(e.target.value as any)}
                className="bg-input border border-border rounded px-3 py-2 text-sm"
              >
                <option value="CEO">CEO</option>
                <option value="CFO">CFO</option>
                <option value="CHRO">CHRO</option>
                <option value="COO">COO</option>
              </select>

              <select
                value={context.state.overlayMode}
                onChange={(e) => context.setOverlayMode(e.target.value as any)}
                className="bg-input border border-border rounded px-3 py-2 text-sm"
              >
                <option value="hover">{language === 'en' ? 'Hover' : 'Flotante'}</option>
                <option value="sidebar">{language === 'en' ? 'Sidebar' : 'Barra Lateral'}</option>
                <option value="voiceover">{language === 'en' ? 'Voiceover' : 'Narración'}</option>
                <option value="snapshot">{language === 'en' ? 'Snapshot' : 'Instantánea'}</option>
              </select>
            </div>
          </div>

          {/* Active Coaching Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">
                {Object.keys(coachingOverlayLibrary).filter(k => 
                  k.startsWith(context.state.currentStakeholder.toLowerCase())
                ).length}
              </div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Available Overlays' : 'Superposiciones Disponibles'}
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{analytics.engagementByStakeholder[context.state.currentStakeholder] || 0}</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Interactions' : 'Interacciones'}
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{analytics.activeOverlays}</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Active Metrics' : 'Métricas Activas'}
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">
                {context.state.language}
              </div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Language Mode' : 'Modo Idioma'}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
          <div className="p-8 flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-black">LD</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">⚡</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">Luis Dominguez</h2>
              <p className="text-muted-foreground mb-2">Founder & Strategic Advisor</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    {language === 'en' ? 'Live Dashboard' : 'Panel en Vivo'}
                  </span>
                </div>
                <div className="text-muted-foreground text-sm">
                  {language === 'en' ? 'Advisory-Grade HRIS' : 'HRIS Grado Asesor'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                {language === 'en' ? 'Platform Mode' : 'Modo Plataforma'}
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-3 py-1 rounded-full text-white text-sm font-medium">
                FOUNDER_MODE
              </div>
            </div>
          </div>
        </div>

        {/* P&L Immediate Dashboard Image - First/Smaller */}
        <div className="bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {language === 'en' ? 'P&L Immediate Dashboard' : 'Panel P&G Inmediato'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'en' 
                ? 'Real-time financial performance with scenario modeling engine'
                : 'Desempeño financiero en tiempo real con motor de modelado de escenarios'
              }
            </p>
          </div>
          <div className="p-6">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5MjI2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="P&L Immediate Dashboard"
              className="w-full h-auto rounded-lg border border-border shadow-xl"
            />
          </div>
        </div>

        {/* Interactive ROI Summary Table with Coaching */}
        <div className="bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {language === 'en' ? 'Interactive Financial Analysis' : 'Análisis Financiero Interactivo'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'Click any metric for strategic coaching • Metrics with brain icons have guidance available'
                    : 'Haz clic en cualquier métrica para coaching estratégico • Las métricas con íconos de cerebro tienen guías disponibles'
                  }
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'Live Data' : 'Datos en Vivo'}
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Brain className="w-4 h-4 mr-1" />
                  {Object.keys(coachingOverlayLibrary).length} {language === 'en' ? 'Coaching Points' : 'Puntos de Coaching'}
                </Badge>
              </div>
            </div>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="text-left p-4 font-semibold text-foreground"></th>
                {columns.map((col) => (
                  <th key={col} className="text-center p-4 font-semibold text-foreground min-w-32">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row} className={index % 2 === 0 ? 'bg-card' : 'bg-secondary/50'}>
                  <td className="p-4 font-semibold text-foreground border-r border-border">
                    {rowLabels[language][row as keyof typeof rowLabels.en]}
                  </td>
                  {columns.map((col) => {
                    const value = data[row]?.[col as keyof typeof data[row]] || 0;
                    const isROI = row === 'roi';
                    const isExpense = row === 'operatingExpenses';
                    const metricId = getMetricId(row, col);
                    
                    return (
                      <MetricCell
                        key={`${row}-${col}`}
                        metricId={metricId}
                        value={value}
                        isROI={isROI}
                        isExpense={isExpense}
                        currency={currency}
                        language={language}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Extended Quarter by Quarter Financial Analysis - Bigger */}
        <div className="bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {language === 'en' ? 'Extended Quarter by Quarter Analysis' : 'Análisis Extendido Trimestre por Trimestre'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'en' 
                ? 'Comprehensive balance sheet, income statement, and cash flow analysis'
                : 'Análisis integral de balance general, estado de resultados y flujo de efectivo'
              }
            </p>
          </div>
          <div className="p-6">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydGVybHklMjBmaW5hbmNpYWwlMjBhbmFseXNpcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NTkzMTQ0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Extended Financial Dashboard"
              className="w-full h-auto rounded-lg border border-border shadow-xl"
            />
          </div>
        </div>

        {/* Coaching Analytics Summary */}
        <div className="bg-gradient-to-r from-card to-secondary rounded-lg shadow-2xl border border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">
                {language === 'en' ? 'Advisory-Grade Intelligence with Interactive Coaching' : 'Inteligencia de Grado Asesor con Coaching Interactivo'}
              </h4>
              <p className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'McKinsey-style analysis with real-time data integration and contextual guidance'
                  : 'Análisis estilo McKinsey con integración de datos en tiempo real y guía contextual'
                }
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={() => context.setOverlayMode('voiceover')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Brain className="w-4 h-4" />
                {language === 'en' ? 'Voice Guidance' : 'Guía de Voz'}
              </Button>
              <Button 
                onClick={() => context.exportOverlayData('json')}
                className="flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                {language === 'en' ? 'Export Analysis' : 'Exportar Análisis'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}