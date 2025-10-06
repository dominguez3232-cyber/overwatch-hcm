import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  sequenceId: string;
  sequenceName: string;
  language: 'en' | 'es';
  autoPlay?: boolean;
}

export default function ShareModal({ 
  isOpen, 
  onClose, 
  sequenceId, 
  sequenceName,
  language,
  autoPlay = true 
}: ShareModalProps) {
  const [currentOrigin, setCurrentOrigin] = useState('');
  const [shareOptions, setShareOptions] = useState({
    autoPlay: autoPlay,
    language: language
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentOrigin(window.location.origin);
    }
  }, []);

  // Generate URLs with parameters
  const baseUrl = `${currentOrigin}/demo?id=${sequenceId}`;
  const directLink = `${baseUrl}${shareOptions.autoPlay ? '&autoplay=true' : ''}${shareOptions.language !== 'en' ? `&lang=${shareOptions.language}` : ''}`;
  
  // Generate embed code
  const embedCode = `<iframe
  src="${directLink}"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen
  title="OVERWATCH³ Demo: ${sequenceName}">
</iframe>`;

  // Generate responsive embed code
  const responsiveEmbedCode = `<!-- Responsive OVERWATCH³ Demo Embed -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe
    src="${directLink}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen
    title="OVERWATCH³ Demo: ${sequenceName}">
  </iframe>
</div>`;

  // Social sharing templates
  const socialTemplates = {
    linkedin: `Check out this ${sequenceName} demo powered by OVERWATCH³! ${directLink}`,
    twitter: `🚀 ${sequenceName} demo via @OVERWATCH3 ${directLink}`,
    email: {
      subject: `OVERWATCH³ Demo: ${sequenceName}`,
      body: `Hi there!\n\nI wanted to share this interactive demo with you: ${sequenceName}\n\nView it here: ${directLink}\n\nThis was created with OVERWATCH³ - the world's first Advisory-Grade HRIS Command Center.\n\nBest regards`
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const message = language === 'en' 
        ? `${type} copied to clipboard!` 
        : `¡${type} copiado al portapapeles!`;
      toast.success(message);
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to copy' : 'Error al copiar');
    }
  };

  const openSocialShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(directLink)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(socialTemplates.twitter)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(socialTemplates.email.subject)}&body=${encodeURIComponent(socialTemplates.email.body)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">🔗</span>
            </div>
            {language === 'en' ? 'Share Demo Sequence' : 'Compartir Secuencia Demo'}
          </DialogTitle>
          <DialogDescription>
            {language === 'en' 
              ? 'Generate shareable links and embed codes for your demo sequence'
              : 'Genera enlaces compartibles y códigos de incrustación para tu secuencia de demostración'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Sequence Info */}
          <div className="bg-secondary/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline">🎬 {language === 'en' ? 'Demo' : 'Demo'}</Badge>
              <h3 className="font-semibold">{sequenceName}</h3>
            </div>
            <p className="text-sm text-muted-foreground">ID: {sequenceId}</p>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Auto-play on load' : 'Reproducir automáticamente'}
              </label>
              <select
                value={shareOptions.autoPlay.toString()}
                onChange={(e) => setShareOptions(prev => ({ ...prev, autoPlay: e.target.value === 'true' }))}
                className="w-full bg-input border border-border text-foreground rounded-lg px-3 py-2"
              >
                <option value="true">{language === 'en' ? 'Yes' : 'Sí'}</option>
                <option value="false">{language === 'en' ? 'No' : 'No'}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Language Override' : 'Sobrescribir Idioma'}
              </label>
              <select
                value={shareOptions.language}
                onChange={(e) => setShareOptions(prev => ({ ...prev, language: e.target.value as 'en' | 'es' }))}
                className="w-full bg-input border border-border text-foreground rounded-lg px-3 py-2"
              >
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
          </div>

          <Tabs defaultValue="direct" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="direct">
                {language === 'en' ? 'Direct Link' : 'Enlace Directo'}
              </TabsTrigger>
              <TabsTrigger value="embed">
                {language === 'en' ? 'Embed Code' : 'Código HTML'}
              </TabsTrigger>
              <TabsTrigger value="social">
                {language === 'en' ? 'Social Share' : 'Redes Sociales'}
              </TabsTrigger>
              <TabsTrigger value="advanced">
                {language === 'en' ? 'Advanced' : 'Avanzado'}
              </TabsTrigger>
            </TabsList>

            {/* Direct Link Tab */}
            <TabsContent value="direct" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Shareable URL:' : 'URL Compartible:'}
                </label>
                <div className="flex gap-2">
                  <Input 
                    value={directLink} 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button 
                    size="sm"
                    onClick={() => copyToClipboard(directLink, language === 'en' ? 'Link' : 'Enlace')}
                  >
                    📋
                  </Button>
                </div>
              </div>
              
              <Alert>
                <AlertDescription className="text-sm">
                  {language === 'en' 
                    ? 'Send this link to anyone to share your demo sequence. No login required.'
                    : 'Envía este enlace a cualquiera para compartir tu secuencia demo. No requiere inicio de sesión.'
                  }
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Embed Code Tab */}
            <TabsContent value="embed" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Basic Embed Code:' : 'Código de Inserción Básico:'}
                </label>
                <div className="relative">
                  <textarea
                    value={embedCode}
                    readOnly
                    className="w-full h-32 p-3 bg-secondary rounded-lg text-sm font-mono resize-none"
                  />
                  <Button 
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(embedCode, language === 'en' ? 'Embed code' : 'Código')}
                  >
                    📋
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Responsive Embed Code:' : 'Código Responsive:'}
                </label>
                <div className="relative">
                  <textarea
                    value={responsiveEmbedCode}
                    readOnly
                    className="w-full h-40 p-3 bg-secondary rounded-lg text-sm font-mono resize-none"
                  />
                  <Button 
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(responsiveEmbedCode, language === 'en' ? 'Responsive code' : 'Código responsive')}
                  >
                    📋
                  </Button>
                </div>
              </div>

              <Alert>
                <AlertDescription className="text-sm">
                  {language === 'en' 
                    ? 'Use these codes to embed the demo in websites, documentation, or presentations.'
                    : 'Usa estos códigos para insertar el demo en sitios web, documentación o presentaciones.'
                  }
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Social Share Tab */}
            <TabsContent value="social" className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  variant="outline"
                  onClick={() => openSocialShare('linkedin')}
                  className="justify-start h-auto p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-sm">in</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Share with professional network' : 'Compartir con red profesional'}
                      </div>
                    </div>
                  </div>
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => openSocialShare('twitter')}
                  className="justify-start h-auto p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                      <span className="text-white text-sm">𝕏</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">X (Twitter)</div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Share with followers' : 'Compartir con seguidores'}
                      </div>
                    </div>
                  </div>
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => openSocialShare('email')}
                  className="justify-start h-auto p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-white text-sm">✉</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Send via email' : 'Enviar por email'}
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'URL Parameters:' : 'Parámetros URL:'}
                </label>
                <div className="bg-secondary rounded-lg p-4 space-y-2 text-sm font-mono">
                  <div><strong>id</strong>={sequenceId} <span className="text-muted-foreground">({language === 'en' ? 'Required' : 'Requerido'})</span></div>
                  <div><strong>autoplay</strong>=true|false <span className="text-muted-foreground">({language === 'en' ? 'Optional' : 'Opcional'})</span></div>
                  <div><strong>lang</strong>=en|es <span className="text-muted-foreground">({language === 'en' ? 'Optional' : 'Opcional'})</span></div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'API Access:' : 'Acceso API:'}
                </label>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm font-mono mb-2">
                    GET {currentOrigin}/api/sequences/{sequenceId}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' 
                      ? 'Developers can access sequence data via our REST API'
                      : 'Los desarrolladores pueden acceder a los datos de secuencia a través de nuestra API REST'
                    }
                  </p>
                </div>
              </div>

              <Alert>
                <AlertDescription className="text-sm">
                  {language === 'en' 
                    ? 'Advanced sharing options for developers and integrations.'
                    : 'Opciones avanzadas de compartir para desarrolladores e integraciones.'
                  }
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button variant="outline" onClick={onClose} className="flex-1">
              {language === 'en' ? 'Close' : 'Cerrar'}
            </Button>
            <Button 
              onClick={() => copyToClipboard(directLink, language === 'en' ? 'Demo link' : 'Enlace demo')}
              className="flex-1"
            >
              📋 {language === 'en' ? 'Copy Link' : 'Copiar Enlace'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}