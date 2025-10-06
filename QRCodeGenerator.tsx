import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Copy, Check, Share2, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import QRCode from 'react-qr-code';

interface QRCodeGeneratorProps {
  value: string;
  title?: string;
  description?: string;
  size?: number;
  language: 'en' | 'es';
  showActions?: boolean;
  variant?: 'default' | 'compact' | 'showcase';
  className?: string;
}

const translations = {
  en: {
    downloadQR: 'Download QR',
    copyLink: 'Copy Link',
    linkCopied: 'Link Copied!',
    shareQR: 'Share QR Code',
    scanToView: 'Scan to View',
    mobileOptimized: 'Mobile Optimized',
    highQuality: 'High Quality',
    qrGenerated: 'QR Code Generated',
    quickAccess: 'Quick Access'
  },
  es: {
    downloadQR: 'Descargar QR',
    copyLink: 'Copiar Enlace',
    linkCopied: '¡Enlace Copiado!',
    shareQR: 'Compartir QR',
    scanToView: 'Escanear para Ver',
    mobileOptimized: 'Optimizado para Móvil',
    highQuality: 'Alta Calidad',
    qrGenerated: 'Código QR Generado',
    quickAccess: 'Acceso Rápido'
  }
};

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  title,
  description,
  size = 150,
  language,
  showActions = true,
  variant = 'default',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const handleDownload = () => {
    const svg = qrRef.current?.querySelector('svg');
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
          link.download = `qr-code-${Date.now()}.png`;
          link.href = canvas.toDataURL('image/png', 1.0);
          link.click();
        }
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'QR Code',
          text: description || 'Check out this QR code',
          url: value
        });
      } catch (error) {
        console.error('Failed to share:', error);
        handleCopyLink(); // Fallback to copy
      }
    } else {
      handleCopyLink(); // Fallback for browsers without Web Share API
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="p-2 bg-white rounded border">
          <div ref={qrRef}>
            <QRCode
              value={value}
              size={size}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
              fgColor="#1E3A8A"
              bgColor="#FFFFFF"
            />
          </div>
        </div>
        {showActions && (
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-3 h-3" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleCopyLink}>
              {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'showcase') {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="text-center space-y-4">
          {title && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="p-4 bg-white rounded-lg shadow-sm border">
                <div ref={qrRef}>
                  <QRCode
                    value={value}
                    size={size}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}
                    fgColor="#1E3A8A"
                    bgColor="#FFFFFF"
                  />
                </div>
              </div>
              
              {/* Corner badges */}
              <Badge 
                variant="outline" 
                className="absolute -top-2 -right-2 bg-background border-primary text-primary"
              >
                {t.highQuality}
              </Badge>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="w-4 h-4" />
            <span>{t.mobileOptimized}</span>
          </div>

          {showActions && (
            <div className="flex gap-2 justify-center">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                {t.downloadQR}
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopyLink}>
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">{t.linkCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    {t.copyLink}
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                {t.shareQR}
              </Button>
            </div>
          )}
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <div className="text-center space-y-1">
          <h4 className="font-medium">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <div className="flex justify-center">
        <div className="p-3 bg-white rounded-lg border shadow-sm">
          <div ref={qrRef}>
            <QRCode
              value={value}
              size={size}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
              fgColor="#1E3A8A"
              bgColor="#FFFFFF"
            />
          </div>
        </div>
      </div>

      {showActions && (
        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            {t.downloadQR}
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopyLink}>
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-green-500">{t.linkCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                {t.copyLink}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;