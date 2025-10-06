import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Share2, 
  ExternalLink,
  Image,
  Code,
  Link,
  QrCode,
  FileImage,
  FileCode
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import QRCode from 'react-qr-code';
import { type BadgeData } from './BadgeCard';

interface BadgeExportModalProps {
  badge: BadgeData;
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
  baseUrl?: string;
}

const translations = {
  en: {
    title: 'Export & Share Badge',
    subtitle: 'Share your achievement with the world',
    download: 'Download',
    formats: 'Formats',
    share: 'Share',
    embed: 'Embed',
    qrCode: 'QR Code',
    copyLink: 'Copy Link',
    copyEmbed: 'Copy Embed Code',
    downloadPNG: 'Download PNG',
    downloadSVG: 'Download SVG',
    shareUrl: 'Share URL',
    embedCode: 'Embed Code',
    qrDescription: 'Scan to view badge',
    linkCopied: 'Link copied to clipboard!',
    embedCopied: 'Embed code copied!',
    badgeUrl: 'Badge URL',
    previewEmbed: 'Preview Embed',
    socialShare: 'Social Share',
    shareOn: 'Share on',
    viewFullProfile: 'View Full Profile',
    badgeDetails: 'Badge Details',
    earnedDate: 'Earned',
    category: 'Category',
    points: 'Points',
    level: 'Level'
  },
  es: {
    title: 'Exportar y Compartir Insignia',
    subtitle: 'Comparte tu logro con el mundo',
    download: 'Descargar',
    formats: 'Formatos',
    share: 'Compartir',
    embed: 'Insertar',
    qrCode: 'Código QR',
    copyLink: 'Copiar Enlace',
    copyEmbed: 'Copiar Código de Inserción',
    downloadPNG: 'Descargar PNG',
    downloadSVG: 'Descargar SVG',
    shareUrl: 'URL para Compartir',
    embedCode: 'Código de Inserción',
    qrDescription: 'Escanea para ver la insignia',
    linkCopied: '¡Enlace copiado al portapapeles!',
    embedCopied: '¡Código de inserción copiado!',
    badgeUrl: 'URL de la Insignia',
    previewEmbed: 'Vista Previa de Inserción',
    socialShare: 'Compartir en Redes',
    shareOn: 'Compartir en',
    viewFullProfile: 'Ver Perfil Completo',
    badgeDetails: 'Detalles de la Insignia',
    earnedDate: 'Obtenida',
    category: 'Categoría',
    points: 'Puntos',
    level: 'Nivel'
  }
};

const BadgeExportModal: React.FC<BadgeExportModalProps> = ({ 
  badge, 
  isOpen, 
  onClose, 
  language, 
  baseUrl = 'https://overwatch3.app' 
}) => {
  const [copiedState, setCopiedState] = useState<'link' | 'embed' | null>(null);
  const [activeTab, setActiveTab] = useState('share');
  const badgeRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];
  
  const badgeUrl = `${baseUrl}/badge?id=${badge.badgeId}`;
  const embedCode = `<iframe src="${badgeUrl}" width="300" height="300" frameborder="0" title="${badge.title}"></iframe>`;
  const profileUrl = `${baseUrl}/profile/${badge.badgeId.split('-')[0]}/badges`;

  const copyToClipboard = async (text: string, type: 'link' | 'embed') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(type);
      setTimeout(() => setCopiedState(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const generateBadgeImage = async (format: 'png' | 'svg') => {
    // In a real implementation, this would generate an actual image
    // For now, we'll simulate the download
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 300;
    canvas.height = 300;
    
    if (ctx) {
      // Background
      ctx.fillStyle = '#171717';
      ctx.fillRect(0, 0, 300, 300);
      
      // Border
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, 280, 280);
      
      // Icon
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(badge.icon || '🏆', 150, 100);
      
      // Title
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(badge.title, 150, 140);
      
      // Level
      ctx.font = '12px Arial';
      ctx.fillStyle = '#c0c0c0';
      ctx.fillText(badge.level, 150, 160);
      
      // Description (wrapped)
      const words = badge.description.split(' ');
      let line = '';
      let y = 190;
      ctx.font = '10px Arial';
      ctx.fillStyle = '#888888';
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > 260 && n > 0) {
          ctx.fillText(line, 150, y);
          line = words[n] + ' ';
          y += 15;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 150, y);
      
      // Date
      ctx.font = '10px Arial';
      ctx.fillStyle = '#666666';
      const earnedDate = new Date(badge.earnedOn).toLocaleDateString();
      ctx.fillText(`${t.earnedDate}: ${earnedDate}`, 150, 260);
    }
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${badge.badgeId}-badge.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }, `image/${format}`);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Bronze': return 'text-amber-600 bg-amber-100 dark:bg-amber-900/20';
      case 'Silver': return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
      case 'Gold': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'Platinum': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20';
      case 'Diamond': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getRarityColor = (rarity?: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-500';
      case 'Uncommon': return 'text-green-500';
      case 'Rare': return 'text-blue-500';
      case 'Epic': return 'text-purple-500';
      case 'Legendary': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-2xl font-bold">{t.title}</h2>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Badge Preview */}
            <div className="space-y-6">
              <Card className="p-6" ref={badgeRef}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">{badge.icon || '🏆'}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{badge.description}</p>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Badge className={`${getLevelColor(badge.level)}`}>
                      {badge.level}
                    </Badge>
                    {badge.category && (
                      <Badge variant="outline">
                        {badge.category}
                      </Badge>
                    )}
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{t.earnedDate}</p>
                      <p className="font-medium">
                        {new Date(badge.earnedOn).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.points}</p>
                      <p className="font-medium">{badge.points || 0}</p>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {badge.schemaTrace}
                  </div>
                </div>
              </Card>

              <Button
                onClick={() => window.open(profileUrl, '_blank')}
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewFullProfile}
              </Button>
            </div>

            {/* Export Options */}
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="share" className="flex items-center gap-1">
                    <Share2 className="w-3 h-3" />
                    <span className="hidden sm:inline">{t.share}</span>
                  </TabsTrigger>
                  <TabsTrigger value="download" className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span className="hidden sm:inline">{t.download}</span>
                  </TabsTrigger>
                  <TabsTrigger value="embed" className="flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    <span className="hidden sm:inline">{t.embed}</span>
                  </TabsTrigger>
                  <TabsTrigger value="qr" className="flex items-center gap-1">
                    <QrCode className="w-3 h-3" />
                    <span className="hidden sm:inline">QR</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="share" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">{t.shareUrl}</label>
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={badgeUrl}
                        readOnly
                        className="flex-1 px-3 py-2 bg-input border border-border rounded text-sm"
                      />
                      <Button
                        onClick={() => copyToClipboard(badgeUrl, 'link')}
                        variant="outline"
                        size="sm"
                      >
                        {copiedState === 'link' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    {copiedState === 'link' && (
                      <p className="text-xs text-green-500 mt-1">{t.linkCopied}</p>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium">{t.socialShare}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const text = `Check out my ${badge.title} badge from OVERWATCH³!`;
                          const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(badgeUrl)}`;
                          window.open(url, '_blank');
                        }}
                      >
                        𝕏 Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(badgeUrl)}`;
                          window.open(url, '_blank');
                        }}
                      >
                        💼 LinkedIn
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="download" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">{t.formats}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        onClick={() => generateBadgeImage('png')}
                        variant="outline"
                        className="justify-start"
                      >
                        <FileImage className="w-4 h-4 mr-2" />
                        {t.downloadPNG}
                      </Button>
                      <Button
                        onClick={() => generateBadgeImage('svg')}
                        variant="outline"
                        className="justify-start"
                      >
                        <FileCode className="w-4 h-4 mr-2" />
                        {t.downloadSVG}
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="text-xs text-muted-foreground">
                    <p>• PNG: Best for social media and presentations</p>
                    <p>• SVG: Best for web use and scalability</p>
                  </div>
                </TabsContent>

                <TabsContent value="embed" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">{t.embedCode}</label>
                    <div className="mt-2 space-y-2">
                      <textarea
                        value={embedCode}
                        readOnly
                        rows={3}
                        className="w-full px-3 py-2 bg-input border border-border rounded text-sm font-mono"
                      />
                      <Button
                        onClick={() => copyToClipboard(embedCode, 'embed')}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        {copiedState === 'embed' ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            {t.embedCopied}
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            {t.copyEmbed}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">{t.previewEmbed}</h4>
                    <div className="border border-border rounded p-4 bg-secondary/20">
                      <div className="w-full aspect-square max-w-[200px] mx-auto bg-card rounded border border-border flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <span className="text-2xl">{badge.icon || '🏆'}</span>
                          <p className="text-sm font-medium">{badge.title}</p>
                          <Badge className={`text-xs ${getLevelColor(badge.level)}`}>
                            {badge.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qr" className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-white rounded-lg">
                      <QRCode value={badgeUrl} size={160} />
                    </div>
                    <div>
                      <h4 className="font-medium">{t.qrCode}</h4>
                      <p className="text-sm text-muted-foreground">{t.qrDescription}</p>
                    </div>
                    <Button
                      onClick={() => {
                        // Generate QR code as image and download
                        const canvas = document.createElement('canvas');
                        const qrElement = document.querySelector('svg[width="160"]') as SVGElement;
                        if (qrElement) {
                          const serializer = new XMLSerializer();
                          const svgString = serializer.serializeToString(qrElement);
                          const blob = new Blob([svgString], { type: 'image/svg+xml' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `${badge.badgeId}-qr.svg`;
                          a.click();
                          URL.revokeObjectURL(url);
                        }
                      }}
                      variant="outline"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR Code
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BadgeExportModal;