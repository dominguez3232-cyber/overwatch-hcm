import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Copy, 
  Check, 
  QrCode, 
  Code2, 
  Link2,
  Download,
  Smartphone,
  Monitor,
  Share2
} from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import QRCode from 'react-qr-code';

interface EmbedModalProps {
  certificateId: string;
  certificateTitle?: string;
  language: 'en' | 'es';
  children?: React.ReactNode;
}

const translations = {
  en: {
    shareAndEmbed: 'Share & Embed',
    shareOptions: 'Share Options',
    directLink: 'Direct Link',
    embedCode: 'Embed Code',
    qrCode: 'QR Code',
    copyLink: 'Copy Link',
    copyCode: 'Copy Code',
    linkCopied: 'Link Copied!',
    codeCopied: 'Code Copied!',
    downloadQR: 'Download QR',
    shareViaMobile: 'Share via Mobile',
    embedOnWebsite: 'Embed on Website',
    instructions: 'Instructions',
    linkInstructions: 'Copy this link to share the certificate directly',
    embedInstructions: 'Copy this code to embed the certificate on your website',
    qrInstructions: 'Scan this QR code to view the certificate on mobile devices',
    embeddedCertificate: 'Embedded Certificate',
    responsive: 'Responsive',
    fixedSize: 'Fixed Size',
    fullscreen: 'Fullscreen',
    preview: 'Preview',
    mobile: 'Mobile',
    tablet: 'Tablet',
    desktop: 'Desktop',
    close: 'Close'
  },
  es: {
    shareAndEmbed: 'Compartir e Incrustar',
    shareOptions: 'Opciones de Compartir',
    directLink: 'Enlace Directo',
    embedCode: 'Código de Incrustación',
    qrCode: 'Código QR',
    copyLink: 'Copiar Enlace',
    copyCode: 'Copiar Código',
    linkCopied: '¡Enlace Copiado!',
    codeCopied: '¡Código Copiado!',
    downloadQR: 'Descargar QR',
    shareViaMobile: 'Compartir por Móvil',
    embedOnWebsite: 'Incrustar en Sitio Web',
    instructions: 'Instrucciones',
    linkInstructions: 'Copia este enlace para compartir el certificado directamente',
    embedInstructions: 'Copia este código para incrustar el certificado en tu sitio web',
    qrInstructions: 'Escanea este código QR para ver el certificado en dispositivos móviles',
    embeddedCertificate: 'Certificado Incrustado',
    responsive: 'Responsivo',
    fixedSize: 'Tamaño Fijo',
    fullscreen: 'Pantalla Completa',
    preview: 'Vista Previa',
    mobile: 'Móvil',
    tablet: 'Tableta',
    desktop: 'Escritorio',
    close: 'Cerrar'
  }
};

// QR Code Component with Download
const QRCodeComponent: React.FC<{
  value: string;
  size?: number;
  language: 'en' | 'es';
}> = ({ value, size = 200, language }) => {
  const t = translations[language];

  const handleDownloadQR = () => {
    const container = document.querySelector('.qr-code-container');
    const svg = container?.querySelector('svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      canvas.width = size;
      canvas.height = size;
      
      img.onload = () => {
        if (ctx) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, size, size);
          ctx.drawImage(img, 0, 0, size, size);
          
          const link = document.createElement('a');
          link.download = `certificate-qr-${Date.now()}.png`;
          link.href = canvas.toDataURL('image/png', 1.0);
          link.click();
        }
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="p-4 bg-white rounded-lg shadow-sm border qr-code-container">
        <QRCode
          value={value}
          size={size}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 256 256`}
          fgColor="#1E3A8A"
          bgColor="#FFFFFF"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleDownloadQR}
        className="flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        {t.downloadQR}
      </Button>
    </div>
  );
};

// Copy Button Component
const CopyButton: React.FC<{
  text: string;
  label: string;
  successLabel: string;
  className?: string;
}> = ({ text, label, successLabel, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={`flex items-center gap-2 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-green-500">{successLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {label}
        </>
      )}
    </Button>
  );
};

// Embed Preview Component
const EmbedPreview: React.FC<{
  embedCode: string;
  previewSize: 'mobile' | 'tablet' | 'desktop';
}> = ({ embedCode, previewSize }) => {
  const sizeClasses = {
    mobile: 'w-80 h-96',
    tablet: 'w-96 h-64', 
    desktop: 'w-full h-96'
  };

  return (
    <div className={`border border-border rounded-lg overflow-hidden ${sizeClasses[previewSize]}`}>
      <div 
        dangerouslySetInnerHTML={{ __html: embedCode }}
        className="w-full h-full"
      />
    </div>
  );
};

export const EmbedModal: React.FC<EmbedModalProps> = ({
  certificateId,
  certificateTitle = 'Certificate',
  language,
  children
}) => {
  const [open, setOpen] = useState(false);
  const [embedSize, setEmbedSize] = useState<'responsive' | 'fixed' | 'fullscreen'>('responsive');
  const [previewSize, setPreviewSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const t = translations[language];
  
  const certificateURL = `${window.location.origin}/certificate?id=${certificateId}`;
  
  // Generate embed codes based on size preference
  const embedCodes = {
    responsive: `<iframe
  src="${certificateURL}"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  title="${certificateTitle} - OVERWATCH³ Certificate">
</iframe>`,
    fixed: `<iframe
  src="${certificateURL}"
  width="800"
  height="600"
  frameborder="0"
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  title="${certificateTitle} - OVERWATCH³ Certificate">
</iframe>`,
    fullscreen: `<iframe
  src="${certificateURL}"
  width="100%"
  height="100vh"
  frameborder="0"
  allowfullscreen
  style="border: none;"
  title="${certificateTitle} - OVERWATCH³ Certificate">
</iframe>`
  };

  const currentEmbedCode = embedCodes[embedSize];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            {t.shareAndEmbed}
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-primary" />
            {t.shareAndEmbed}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="link" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="link" className="flex items-center gap-2">
              <Link2 className="w-4 h-4" />
              {t.directLink}
            </TabsTrigger>
            <TabsTrigger value="embed" className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              {t.embedCode}
            </TabsTrigger>
            <TabsTrigger value="qr" className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              {t.qrCode}
            </TabsTrigger>
          </TabsList>

          {/* Direct Link Tab */}
          <TabsContent value="link" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                <h4 className="font-medium">{t.shareViaMobile}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.linkInstructions}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  value={certificateURL}
                  readOnly
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-secondary/50 font-mono text-sm"
                />
                <CopyButton
                  text={certificateURL}
                  label={t.copyLink}
                  successLabel={t.linkCopied}
                />
              </div>
            </div>

            {/* Link Preview */}
            <div className="border border-border rounded-lg p-4 bg-secondary/20">
              <h5 className="font-medium mb-2">{t.preview}</h5>
              <div className="bg-background rounded-md p-3 border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                    <span className="text-primary text-xs">🎓</span>
                  </div>
                  <div>
                    <p className="font-medium">{certificateTitle}</p>
                    <p className="text-sm text-muted-foreground">OVERWATCH³ Certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Embed Code Tab */}
          <TabsContent value="embed" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary" />
                <h4 className="font-medium">{t.embedOnWebsite}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.embedInstructions}
              </p>
            </div>

            {/* Embed Size Options */}
            <div className="flex gap-2 mb-4">
              <Button
                variant={embedSize === 'responsive' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setEmbedSize('responsive')}
              >
                {t.responsive}
              </Button>
              <Button
                variant={embedSize === 'fixed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setEmbedSize('fixed')}
              >
                {t.fixedSize}
              </Button>
              <Button
                variant={embedSize === 'fullscreen' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setEmbedSize('fullscreen')}
              >
                {t.fullscreen}
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <textarea
                  value={currentEmbedCode}
                  readOnly
                  rows={8}
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-secondary/50 font-mono text-xs resize-none"
                />
              </div>
              <CopyButton
                text={currentEmbedCode}
                label={t.copyCode}
                successLabel={t.codeCopied}
                className="w-full"
              />
            </div>

            {/* Embed Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="font-medium">{t.preview}</h5>
                <div className="flex gap-1">
                  <Button
                    variant={previewSize === 'mobile' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewSize('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewSize === 'tablet' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewSize('tablet')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewSize === 'desktop' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewSize('desktop')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-4 bg-secondary/20 flex justify-center">
                <EmbedPreview 
                  embedCode={currentEmbedCode}
                  previewSize={previewSize}
                />
              </div>
            </div>
          </TabsContent>

          {/* QR Code Tab */}
          <TabsContent value="qr" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-primary" />
                <h4 className="font-medium">{t.qrCode}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.qrInstructions}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 flex justify-center">
                <QRCodeComponent
                  value={certificateURL}
                  size={200}
                  language={language}
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="mb-2">
                    {t.mobile}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Perfect for sharing certificates on mobile devices, business cards, or printed materials.'
                      : 'Perfecto para compartir certificados en dispositivos móviles, tarjetas de negocio o materiales impresos.'
                    }
                  </p>
                </div>

                <div className="p-3 bg-secondary/50 rounded-lg border">
                  <p className="text-xs font-mono break-all">{certificateURL}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default EmbedModal;