import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSequenceManager } from '../utils/useSequenceManager';
import DemoSequenceController from './DemoSequenceControllerSafe';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface DemoPageProps {
  language: 'en' | 'es';
  onNavigate?: (path: string) => void;
}

export default function DemoPage({ language, onNavigate }: DemoPageProps) {
  const [sequenceData, setSequenceData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const { loadSharedSequence } = useSequenceManager();

  useEffect(() => {
    const fetchSequence = async () => {
      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      const autoPlayParam = urlParams.get('autoplay');
      const langParam = urlParams.get('lang');

      if (!id) {
        setError(language === 'en' ? 'No sequence ID provided' : 'No se proporcionó ID de secuencia');
        setIsLoading(false);
        return;
      }

      // Set autoplay if specified
      setAutoPlay(autoPlayParam === 'true');

      try {
        const data = await loadSharedSequence(id);
        if (data) {
          setSequenceData(data);
          // Override language if specified in URL
          if (langParam && (langParam === 'en' || langParam === 'es')) {
            setSequenceData({ ...data, language: langParam });
          }
        } else {
          setError(language === 'en' ? 'Demo sequence not found' : 'Secuencia demo no encontrada');
        }
      } catch (err) {
        console.error('Error loading sequence:', err);
        setError(language === 'en' ? 'Failed to load demo sequence' : 'Error al cargar secuencia demo');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSequence();
  }, [loadSharedSequence, language]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Loading Demo Sequence...' : 'Cargando Secuencia Demo...'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ? 'Preparing your cinematic walkthrough' : 'Preparando tu recorrido cinematográfico'}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              {language === 'en' ? 'Demo Unavailable' : 'Demo No Disponible'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="flex gap-2">
              {onNavigate && (
                <Button variant="outline" onClick={() => onNavigate('sequence-library')} className="flex-1">
                  {language === 'en' ? 'Browse Library' : 'Ver Biblioteca'}
                </Button>
              )}
              <Button 
                onClick={() => window.location.reload()} 
                className="flex-1"
              >
                {language === 'en' ? 'Retry' : 'Reintentar'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!sequenceData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Demo Not Found' : 'Demo No Encontrado'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'en' 
                ? 'The requested demo sequence could not be found or may have been removed.'
                : 'La secuencia demo solicitada no pudo ser encontrada o puede haber sido removida.'
              }
            </p>
            {onNavigate && (
              <Button onClick={() => onNavigate('sequence-library')}>
                {language === 'en' ? 'Browse Available Demos' : 'Ver Demos Disponibles'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Header */}
      <div className="h-16 px-6 flex items-center bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">🎬</span>
          </div>
          <div>
            <h1 className="font-semibold">{sequenceData.name}</h1>
            <p className="text-xs text-muted-foreground">
              OVERWATCH³ Demo • {sequenceData.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          {onNavigate && (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('sequence-library')}
              >
                📁 {language === 'en' ? 'Library' : 'Biblioteca'}
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('sequence-builder')}
              >
                ⚡ {language === 'en' ? 'Builder' : 'Constructor'}
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Demo Content */}
      <div className="p-6">
        <DemoSequenceController
          sequence={sequenceData.sequence}
          autoPlay={autoPlay}
          language={sequenceData.language || language}
          showControls={true}
          embedded={false}
        />
      </div>

      {/* Demo Footer */}
      <div className="px-6 pb-6">
        <div className="text-center border-t border-border pt-4">
          <p className="text-sm text-muted-foreground mb-2">
            {language === 'en' ? 'Powered by' : 'Desarrollado por'} <strong className="text-primary">OVERWATCH³</strong>
          </p>
          <div className="flex gap-4 justify-center text-sm">
            {onNavigate ? (
              <>
                <button 
                  onClick={() => onNavigate('persona')}
                  className="text-primary hover:underline"
                >
                  {language === 'en' ? 'Try Platform' : 'Probar Plataforma'}
                </button>
                <button 
                  onClick={() => onNavigate('sequence-builder')}
                  className="text-primary hover:underline"
                >
                  {language === 'en' ? 'Create Your Own Demo' : 'Crear Tu Propio Demo'}
                </button>
              </>
            ) : (
              <>
                <a 
                  href={window.location.origin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {language === 'en' ? 'Visit OVERWATCH³' : 'Visitar OVERWATCH³'}
                </a>
                <a 
                  href={`${window.location.origin}/sequence-builder`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {language === 'en' ? 'Create Your Own Demo' : 'Crear Tu Propio Demo'}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}