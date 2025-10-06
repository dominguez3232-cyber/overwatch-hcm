import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, Share2, Printer, Eye, Globe, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Certificate from './Certificate';
import { certificateService, type CertificateData } from '../utils/certificateService';

interface CertificatePageProps {
  language: 'en' | 'es';
  onBack?: () => void;
  onLanguageChange?: (lang: 'en' | 'es') => void;
  className?: string;
}

// Sample certificate data - in real app this would come from props or API
const sampleCertificateData = {
  en: {
    learnerName: 'Luis Dominguez',
    moduleTitle: 'Founder Clarity Sprint',
    moduleDescription: 'Strategic clarity framework for founder-led decision making and capital velocity optimization',
    schemaTrace: 'finance.trust-velocity → law.assumed-right → time.velocity-modeling',
    metrics: {
      clarityIndex: '3.1x',
      confidenceLift: '2.4x',
      executionSpeed: '+2.7x'
    }
  },
  es: {
    learnerName: 'Luis Domínguez',
    moduleTitle: 'Sprint de Claridad Fundacional',
    moduleDescription: 'Marco de claridad estratégica para la toma de decisiones liderada por fundadores y optimización de velocidad de capital',
    schemaTrace: 'finance.trust-velocity → law.assumed-right → time.velocity-modeling',
    metrics: {
      clarityIndex: '3.1x',
      confidenceLift: '2.4x',
      executionSpeed: '+2.7x'
    }
  }
};

const translations = {
  en: {
    pageTitle: 'Strategic Achievement Certificate',
    subtitle: 'Professional certification for completed OVERWATCH³ strategic modules',
    interactive: 'Interactive View',
    printPreview: 'Print Preview',
    print: 'Print Certificate',
    downloadPDF: 'Download PDF',
    share: 'Share Achievement',
    backToLessons: 'Back to Lessons',
    viewSettings: 'View Settings',
    certificateActions: 'Certificate Actions'
  },
  es: {
    pageTitle: 'Certificado de Logro Estratégico',
    subtitle: 'Certificación profesional para módulos estratégicos completados de OVERWATCH³',
    interactive: 'Vista Interactiva',
    printPreview: 'Vista Previa de Impresión',
    print: 'Imprimir Certificado',
    downloadPDF: 'Descargar PDF',
    share: 'Compartir Logro',
    backToLessons: 'Volver a Lecciones',
    viewSettings: 'Configuración de Vista',
    certificateActions: 'Acciones del Certificado'
  }
};

export const CertificatePage: React.FC<CertificatePageProps> = ({
  language,
  onBack,
  onLanguageChange,
  className = ''
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'print'>('interactive');
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];
  const data = sampleCertificateData[language];

  // Load certificate from backend
  useEffect(() => {
    loadCertificate();
  }, []);

  const loadCertificate = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Seed demo data first
      await certificateService.seedDemoData();
      
      // Generate a certificate for the demo
      const result = await certificateService.generateCertificate(
        'demo-module-founder-clarity',
        'demo-learner-luis'
      );
      
      setCertificate(result.certificate);
    } catch (err) {
      console.error('Error loading certificate:', err);
      setError(err instanceof Error ? err.message : 'Failed to load certificate');
      
      // Fallback to sample data
      const fallbackCertificate: CertificateData = {
        learnerName: data.learnerName,
        moduleTitle: data.moduleTitle,
        moduleCaption: {
          en: `This certifies completion of "${data.moduleTitle}" with measurable coaching impact.`,
          es: `Se certifica la finalización de "${data.moduleTitle}" con impacto medible de coaching.`
        },
        schemaTrace: data.schemaTrace,
        metrics: data.metrics,
        completionDate: new Date().toISOString(),
        language: language,
        certificateId: `demo-${Date.now()}`
      };
      setCertificate(fallbackCertificate);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // In a real implementation, you would generate a PDF here
    // For now, we'll trigger the browser's print dialog
    const printWindow = window.open('', '_blank');
    if (printWindow && certificateRef.current) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Certificate - ${data.learnerName}</title>
            <style>
              @page { size: A4 landscape; margin: 0.5in; }
              body { margin: 0; font-family: Arial, sans-serif; }
            </style>
          </head>
          <body>
            ${certificateRef.current.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${data.learnerName} - ${data.moduleTitle} Certificate`,
        text: `I've completed the ${data.moduleTitle} strategic module on OVERWATCH³ with measurable impact!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'en' ? 'Certificate link copied to clipboard!' : '¡Enlace del certificado copiado al portapapeles!');
    }
  };

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="outline" size="sm" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToLessons}
                </Button>
              )}
              <div>
                <h1 className="text-2xl font-bold">{t.pageTitle}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={loadCertificate}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {language === 'en' ? 'Refresh' : 'Actualizar'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLanguageToggle}
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {isLoading ? (
          <div className="flex items-center justify-center p-12">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-muted-foreground">
                {language === 'en' ? 'Loading certificate...' : 'Cargando certificado...'}
              </span>
            </div>
          </div>
        ) : error ? (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={loadCertificate} variant="outline">
              {language === 'en' ? 'Try Again' : 'Intentar de Nuevo'}
            </Button>
          </Card>
        ) : certificate ? (
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'interactive' | 'print')} className="space-y-6">
            {/* View Mode Tabs */}
            <div className="flex items-center justify-between">
              <TabsList className="grid w-auto grid-cols-2">
                <TabsTrigger value="interactive" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {t.interactive}
                </TabsTrigger>
                <TabsTrigger value="print" className="flex items-center gap-2">
                  <Printer className="w-4 h-4" />
                  {t.printPreview}
                </TabsTrigger>
              </TabsList>

              {/* Action Buttons */}
              <div className="flex gap-3 no-print">
                <Button 
                  onClick={handlePrint}
                  variant="outline"
                  size="sm"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  {t.print}
                </Button>
                <Button 
                  onClick={handleDownloadPDF}
                  variant="outline"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadPDF}
                </Button>
                <Button 
                  onClick={handleShare}
                  size="sm"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {t.share}
                </Button>
              </div>
            </div>

            {/* Certificate Views */}
            <TabsContent value="interactive" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <Certificate
                  ref={certificateRef}
                  learnerName={certificate.learnerName}
                  moduleTitle={certificate.moduleTitle}
                  moduleDescription={certificate.moduleCaption[language]}
                  schemaTrace={certificate.schemaTrace}
                  metrics={certificate.metrics}
                  language={language}
                  completionDate={new Date(certificate.completionDate).toLocaleDateString()}
                  certificateId={certificate.certificateId}
                  onDownload={handleDownloadPDF}
                  onShare={handleShare}
                  onLanguageToggle={handleLanguageToggle}
                  printMode={false}
                />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="print" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center bg-white p-8 rounded-lg shadow-lg"
              >
                <Certificate
                  ref={certificateRef}
                  learnerName={certificate.learnerName}
                  moduleTitle={certificate.moduleTitle}
                  moduleDescription={certificate.moduleCaption[language]}
                  schemaTrace={certificate.schemaTrace}
                  metrics={certificate.metrics}
                  language={language}
                  completionDate={new Date(certificate.completionDate).toLocaleDateString()}
                  certificateId={certificate.certificateId}
                  onDownload={handleDownloadPDF}
                  onShare={handleShare}
                  onLanguageToggle={handleLanguageToggle}
                  printMode={true}
                />
              </motion.div>
            
            {/* Print Instructions */}
            <Card className="p-6 max-w-2xl mx-auto no-print">
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Print Instructions' : 'Instrucciones de Impresión'}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  {language === 'en' 
                    ? '• Use landscape orientation for best results'
                    : '• Usar orientación horizontal para mejores resultados'
                  }
                </p>
                <p>
                  {language === 'en' 
                    ? '• Select A4 or US Letter paper size'
                    : '• Seleccionar tamaño A4 o Carta US'
                  }
                </p>
                <p>
                  {language === 'en' 
                    ? '• Ensure "Background graphics" is enabled for proper colors'
                    : '• Asegurar que "Gráficos de fondo" esté habilitado para colores apropiados'
                  }
                </p>
                <p>
                  {language === 'en' 
                    ? '• Use high-quality print settings for professional appearance'
                    : '• Usar configuración de alta calidad para apariencia profesional'
                  }
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        ) : null}
      </div>

      {/* Print Styles */}
      <style jsx="true" global="true">{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          .certificate-container {
            page-break-inside: avoid;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
          }
        }
        
        @page {
          size: A4 landscape;
          margin: 0.5in;
        }
      `}</style>
    </div>
  );
};

export default CertificatePage;