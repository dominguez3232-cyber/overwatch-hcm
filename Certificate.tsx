import React, { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Award, Download, Share2, Globe, Star, Zap, TrendingUp, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface CertificateProps {
  learnerName: string;
  moduleTitle: string;
  moduleDescription: string;
  schemaTrace: string;
  metrics: {
    clarityIndex: string;
    confidenceLift: string;
    executionSpeed: string;
    completion?: string;
  };
  language: 'en' | 'es';
  completionDate?: string;
  certificateId?: string;
  onDownload?: () => void;
  onShare?: () => void;
  onLanguageToggle?: () => void;
  className?: string;
  printMode?: boolean;
}

const translations = {
  en: {
    certificateTitle: 'Certificate of Strategic Completion',
    platformSubtitle: 'OVERWATCH³ Strategic Intelligence Platform',
    certifies: 'This certifies that',
    hasCompleted: 'has successfully completed the strategic module',
    withImpact: 'with measurable coaching impact and strategic advancement',
    schemaTrace: 'Strategic Schema Trace',
    performanceMetrics: 'Performance Achievement Metrics',
    clarityIndex: 'Clarity Index',
    confidenceLift: 'Confidence Lift', 
    executionSpeed: 'Execution Speed',
    issuedOn: 'Issued on',
    certificateId: 'Certificate ID',
    authorizedBy: 'Authorized by OVERWATCH³ Strategic Intelligence Command',
    download: 'Download Certificate',
    share: 'Share Achievement',
    language: 'Language',
    validated: 'Validated Strategic Learning Achievement'
  },
  es: {
    certificateTitle: 'Certificado de Finalización Estratégica',
    platformSubtitle: 'Plataforma de Inteligencia Estratégica OVERWATCH³',
    certifies: 'Se certifica que',
    hasCompleted: 'ha completado exitosamente el módulo estratégico',
    withImpact: 'con impacto medible de coaching y avance estratégico',
    schemaTrace: 'Traza de Esquema Estratégico',
    performanceMetrics: 'Métricas de Logro de Rendimiento',
    clarityIndex: 'Índice de Claridad',
    confidenceLift: 'Aumento de Confianza',
    executionSpeed: 'Velocidad de Ejecución',
    issuedOn: 'Emitido el',
    certificateId: 'ID del Certificado',
    authorizedBy: 'Autorizado por Comando de Inteligencia Estratégica OVERWATCH³',
    download: 'Descargar Certificado',
    share: 'Compartir Logro',
    language: 'Idioma',
    validated: 'Logro de Aprendizaje Estratégico Validado'
  }
};

export const Certificate = forwardRef<HTMLDivElement, CertificateProps>(({
  learnerName,
  moduleTitle,
  moduleDescription,
  schemaTrace,
  metrics,
  language,
  completionDate = new Date().toLocaleDateString(),
  certificateId = `OW3-${Date.now().toString(36).toUpperCase()}`,
  onDownload,
  onShare,
  onLanguageToggle,
  className = '',
  printMode = false
}, ref) => {
  const t = translations[language];

  return (
    <div
      ref={ref}
      className={`
        certificate-container bg-background text-foreground
        ${printMode 
          ? 'w-[297mm] h-[210mm] print:w-full print:h-full' 
          : 'w-full max-w-4xl mx-auto aspect-[297/210]'
        }
        ${className}
      `}
      style={{
        fontFamily: "'Biome', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        ...(printMode && {
          minHeight: '210mm',
          background: 'white',
          color: 'black'
        })
      }}
    >
      {/* Certificate Background with Glow Effects */}
      <div className={`
        relative w-full h-full p-8 
        ${printMode 
          ? 'bg-white text-black border-4 border-gray-800' 
          : 'bg-gradient-to-br from-background via-card to-background border-2 border-primary/20'
        }
        rounded-lg overflow-hidden
      `}>
        
        {/* Background Glow Effects (hidden in print) */}
        {!printMode && (
          <>
            <div className="absolute top-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </>
        )}

        {/* Header Section */}
        <div className="relative z-10 text-center mb-8">
          {/* Platform Branding */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`
              w-16 h-16 rounded-xl flex items-center justify-center
              ${printMode 
                ? 'bg-gray-800 text-white' 
                : 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
              }
              shadow-lg
            `}>
              <span className="text-3xl font-bold">⚡</span>
            </div>
            <div className="text-left">
              <h1 className={`
                text-3xl font-bold tracking-tight
                ${printMode ? 'text-gray-800' : 'text-foreground'}
              `}>
                OVERWATCH³
              </h1>
              <p className={`
                text-sm
                ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
              `}>
                {t.platformSubtitle}
              </p>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="space-y-3">
            <Award className={`
              w-20 h-20 mx-auto
              ${printMode ? 'text-yellow-600' : 'text-yellow-400'}
              drop-shadow-lg
            `} />
            <h2 className={`
              text-4xl font-bold
              ${printMode 
                ? 'text-gray-800' 
                : 'text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
              }
            `}>
              {t.certificateTitle}
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-8">
          {/* Learner Information */}
          <div className="text-center space-y-4">
            <p className={`
              text-xl
              ${printMode ? 'text-gray-700' : 'text-muted-foreground'}
            `}>
              {t.certifies}
            </p>
            
            <div className={`
              p-6 rounded-xl border-2 mx-auto max-w-2xl
              ${printMode 
                ? 'border-gray-300 bg-gray-50' 
                : 'border-primary/30 bg-card/50 backdrop-blur-sm'
              }
            `}>
              <h3 className={`
                text-3xl font-bold mb-2
                ${printMode 
                  ? 'text-gray-800' 
                  : 'text-primary'
                }
              `}>
                {learnerName}
              </h3>
              <p className={`
                text-lg mb-4
                ${printMode ? 'text-gray-700' : 'text-foreground'}
              `}>
                {t.hasCompleted}
              </p>
              
              <div className={`
                p-4 rounded-lg
                ${printMode ? 'bg-gray-100' : 'bg-secondary'}
              `}>
                <h4 className={`
                  text-xl font-bold mb-2
                  ${printMode ? 'text-gray-800' : 'text-foreground'}
                `}>
                  {moduleTitle}
                </h4>
                <p className={`
                  text-sm italic
                  ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
                `}>
                  {moduleDescription}
                </p>
              </div>
              
              <p className={`
                text-sm mt-4
                ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
              `}>
                {t.withImpact}
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`
              text-center p-4 rounded-lg border
              ${printMode 
                ? 'border-gray-300 bg-gray-50' 
                : 'border-primary/20 bg-card/50'
              }
            `}>
              <Brain className={`
                w-8 h-8 mx-auto mb-2
                ${printMode ? 'text-purple-600' : 'text-purple-400'}
              `} />
              <div className={`
                text-2xl font-bold
                ${printMode ? 'text-purple-600' : 'text-purple-400'}
              `}>
                {metrics.clarityIndex}
              </div>
              <div className={`
                text-sm
                ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
              `}>
                {t.clarityIndex}
              </div>
            </div>

            <div className={`
              text-center p-4 rounded-lg border
              ${printMode 
                ? 'border-gray-300 bg-gray-50' 
                : 'border-primary/20 bg-card/50'
              }
            `}>
              <TrendingUp className={`
                w-8 h-8 mx-auto mb-2
                ${printMode ? 'text-orange-600' : 'text-orange-400'}
              `} />
              <div className={`
                text-2xl font-bold
                ${printMode ? 'text-orange-600' : 'text-orange-400'}
              `}>
                {metrics.confidenceLift}
              </div>
              <div className={`
                text-sm
                ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
              `}>
                {t.confidenceLift}
              </div>
            </div>

            <div className={`
              text-center p-4 rounded-lg border
              ${printMode 
                ? 'border-gray-300 bg-gray-50' 
                : 'border-primary/20 bg-card/50'
              }
            `}>
              <Zap className={`
                w-8 h-8 mx-auto mb-2
                ${printMode ? 'text-green-600' : 'text-green-400'}
              `} />
              <div className={`
                text-2xl font-bold
                ${printMode ? 'text-green-600' : 'text-green-400'}
              `}>
                {metrics.executionSpeed}
              </div>
              <div className={`
                text-sm
                ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
              `}>
                {t.executionSpeed}
              </div>
            </div>
          </div>

          {/* Schema Trace */}
          <div className={`
            p-4 rounded-lg border
            ${printMode 
              ? 'border-gray-300 bg-gray-50' 
              : 'border-border bg-secondary'
            }
          `}>
            <h4 className={`
              font-semibold mb-3 text-center
              ${printMode ? 'text-gray-800' : 'text-foreground'}
            `}>
              {t.schemaTrace}
            </h4>
            <code className={`
              text-sm font-mono block text-center p-2 rounded
              ${printMode 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-background text-foreground'
              }
            `}>
              {schemaTrace}
            </code>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-8 pt-6 border-t border-border">
          <div className="flex justify-between items-center text-sm">
            <div className={printMode ? 'text-gray-600' : 'text-muted-foreground'}>
              <p><strong>{t.issuedOn}:</strong> {completionDate}</p>
              <p><strong>{t.certificateId}:</strong> {certificateId}</p>
            </div>
            
            <div className={`
              text-right
              ${printMode ? 'text-gray-600' : 'text-muted-foreground'}
            `}>
              <p className="font-medium">{t.validated}</p>
              <p className="text-xs">{t.authorizedBy}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons (hidden in print) */}
        {!printMode && (
          <div className="relative z-10 flex gap-4 justify-center mt-8 no-print">
            {onLanguageToggle && (
              <Button 
                onClick={onLanguageToggle} 
                variant="outline"
                size="sm"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            )}
            
            {onDownload && (
              <Button 
                onClick={onDownload} 
                variant="outline"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                {t.download}
              </Button>
            )}
            
            {onShare && (
              <Button 
                onClick={onShare}
                size="sm"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {t.share}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .certificate-container {
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            page-break-inside: avoid;
          }
          
          .no-print {
            display: none !important;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
        
        @page {
          size: A4 landscape;
          margin: 0.5in;
        }
      `}</style>
    </div>
  );
});

Certificate.displayName = 'Certificate';

export default Certificate;