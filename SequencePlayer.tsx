import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSequenceManager } from '../utils/useSequenceManager';
import DemoSequenceController from './DemoSequenceControllerSafe';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SequencePlayerProps {
  shareCode?: string;
  language: 'en' | 'es';
  embedded?: boolean;
  onBack?: () => void;
}

export default function SequencePlayer({ 
  shareCode, 
  language, 
  embedded = false,
  onBack 
}: SequencePlayerProps) {
  const [sequence, setSequence] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { loadSharedSequence } = useSequenceManager();

  useEffect(() => {
    const loadSequence = async () => {
      // Check URL params if no shareCode provided
      const urlParams = new URLSearchParams(window.location.search);
      const code = shareCode || urlParams.get('id');
      
      if (!code) {
        setError(language === 'en' ? 'No sequence code provided' : 'No se proporcionó código de secuencia');
        setIsLoading(false);
        return;
      }

      try {
        const sharedSequence = await loadSharedSequence(code);
        if (sharedSequence) {
          setSequence(sharedSequence);
        } else {
          setError(language === 'en' ? 'Sequence not found' : 'Secuencia no encontrada');
        }
      } catch (err) {
        setError(language === 'en' ? 'Failed to load sequence' : 'Error al cargar secuencia');
      } finally {
        setIsLoading(false);
      }
    };

    loadSequence();
  }, [shareCode, loadSharedSequence, language]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            {language === 'en' ? 'Loading Demo Sequence...' : 'Cargando Secuencia Demo...'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Preparing your cinematic walkthrough' : 'Preparando tu recorrido cinematográfico'}
          </p>
        </div>
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
              {language === 'en' ? 'Unable to Load Sequence' : 'No se Pudo Cargar Secuencia'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="flex gap-2">
              {onBack && (
                <Button variant="outline" onClick={onBack} className="flex-1">
                  {language === 'en' ? 'Go Back' : 'Volver'}
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

  if (!sequence) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Sequence Not Found' : 'Secuencia No Encontrada'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'The requested demo sequence could not be found or may have been removed.'
                : 'La secuencia demo solicitada no pudo ser encontrada o puede haber sido removida.'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`${embedded ? 'h-full' : 'min-h-screen'} bg-background text-foreground`}>
      {!embedded && (
        <div className="h-16 px-6 flex items-center bg-card border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">🎬</span>
            </div>
            <div>
              <h1 className="font-semibold">{sequence.name}</h1>
              <p className="text-xs text-muted-foreground">
                OVERWATCH³ Demo • {sequence.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
          {onBack && (
            <Button variant="ghost" onClick={onBack}>
              {language === 'en' ? 'Back' : 'Volver'}
            </Button>
          )}
        </div>
      )}

      <div className={`${embedded ? 'p-4' : 'p-6'}`}>
        <DemoSequenceController
          sequence={sequence.sequence}
          autoPlay={true}
          language={language}
          showControls={true}
          embedded={embedded}
        />
      </div>

      {embedded && (
        <div className="px-4 pb-4">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              {language === 'en' ? 'Powered by' : 'Desarrollado por'} <strong>OVERWATCH³</strong>
            </p>
            <a 
              href={window.location.origin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              {language === 'en' ? 'Create your own demo sequences →' : 'Crea tus propias secuencias demo →'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}