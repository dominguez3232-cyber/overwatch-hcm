import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { InteractiveCoachingOverlay, useCoachingOverlay } from './InteractiveCoachingOverlay';
import { useCoachingOverlayContext } from './CoachingOverlayProvider';
import { coachingOverlayLibrary } from './CoachingOverlaySeed';

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

export function ROIGrid({ language, currency, data }: ROIGridProps) {
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

  const getCellColor = (value: number, isROI: boolean = false) => {
    if (isROI) {
      return value > 0 ? 'var(--success-green)' : 'var(--error-red)';
    }
    return '#ffffff';
  };

  return (
    <div className="px-6 lg:px-20 py-6 bg-black min-h-screen">
      {/* Enhanced Financial Dashboard with Profile and Images */}
      <div className="space-y-8">
        {/* Profile Section */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
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
              <h2 className="text-2xl font-bold text-gray-200 mb-1">Luis Dominguez</h2>
              <p className="text-gray-400 mb-2">Founder & Strategic Advisor</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    {language === 'en' ? 'Live Dashboard' : 'Panel en Vivo'}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  {language === 'en' ? 'Advisory-Grade HRIS' : 'HRIS Grado Asesor'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">
                {language === 'en' ? 'Platform Mode' : 'Modo Plataforma'}
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-3 py-1 rounded-full text-white text-sm font-medium">
                FOUNDER_MODE
              </div>
            </div>
          </div>
        </div>

        {/* P&L Immediate Dashboard Image - First/Smaller */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-600">
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {language === 'en' ? 'P&L Immediate Dashboard' : 'Panel P&G Inmediato'}
            </h3>
            <p className="text-gray-400 text-sm">
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
              className="w-full h-auto rounded-lg border border-gray-600 shadow-xl"
            />
          </div>
        </div>

        {/* Extended Quarter by Quarter Financial Analysis - Bigger */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-600">
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {language === 'en' ? 'Extended Quarter by Quarter Analysis' : 'Análisis Extendido Trimestre por Trimestre'}
            </h3>
            <p className="text-gray-400 text-sm">
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
              className="w-full h-auto rounded-lg border border-gray-600 shadow-xl"
            />
          </div>
        </div>

        {/* ROI Summary Table */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-600">
                <th className="text-left p-4 font-semibold text-gray-200"></th>
                {columns.map((col) => (
                  <th key={col} className="text-center p-4 font-semibold text-gray-200 min-w-32">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                  <td className="p-4 font-semibold text-gray-200 border-r border-gray-600">
                    {rowLabels[language][row as keyof typeof rowLabels.en]}
                  </td>
                  {columns.map((col) => {
                    const value = data[row]?.[col as keyof typeof data[row]] || 0;
                    const isROI = row === 'roi';
                    const isExpense = row === 'operatingExpenses';
                    
                    return (
                      <td 
                        key={`${row}-${col}`} 
                        className="p-4 text-center font-medium text-gray-200"
                        style={{ 
                          color: isROI && value > 0 ? '#22c55e' : 
                                 isROI && value <= 0 ? '#dc2626' : 
                                 '#e5e5e5'
                        }}
                      >
                        {formatValue(value, isROI, isExpense)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Strategic Intelligence Footer */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-2xl border border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-200 mb-1">
                {language === 'en' ? 'Advisory-Grade Intelligence' : 'Inteligencia de Grado Asesor'}
              </h4>
              <p className="text-gray-400 text-sm">
                {language === 'en' 
                  ? 'McKinsey-style analysis with real-time data integration'
                  : 'Análisis estilo McKinsey con integración de datos en tiempo real'
                }
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}