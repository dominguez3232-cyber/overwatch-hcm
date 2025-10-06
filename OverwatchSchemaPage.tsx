import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { getSchemaNode, SchemaNode } from '../utils/schemaLoader';
import SchemaOverlayPanel from './SchemaOverlayPanel';

interface OverwatchSchemaPageProps {
  language: 'en' | 'es';
  domain: string;
  route: string;
  onNavigate: (path: string) => void;
  onBack?: () => void;
}

export const OverwatchSchemaPage: React.FC<OverwatchSchemaPageProps> = ({
  language,
  domain,
  route,
  onNavigate,
  onBack
}) => {
  const [schema, setSchema] = useState<SchemaNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const schemaTrace = `${domain}.${route}`;
    setIsLoading(true);
    setError(null);

    try {
      const schemaNode = getSchemaNode(schemaTrace);
      if (schemaNode) {
        setSchema(schemaNode);
      } else {
        setError(`Schema not found: ${schemaTrace}`);
      }
    } catch (err) {
      setError(`Error loading schema: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [domain, route]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      onNavigate(`overwatch/${domain}`);
    }
  };

  const handleDemoTrigger = () => {
    // TODO: Implement demo sequence controller
    console.log('Demo triggered for schema:', schema?.schemaTrace);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <span className="text-primary text-2xl">⚡</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">
              {language === 'en' ? 'Loading Schema Intelligence...' : 'Cargando Inteligencia de Schema...'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ? 'Preparing strategic overlay system' : 'Preparando sistema de overlay estratégico'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !schema) {
    return (
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back' : 'Volver'}
            </Button>
          </div>

          <div className="text-center space-y-6 p-12">
            <div className="w-20 h-20 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-red-500">
                {language === 'en' ? 'Schema Not Found' : 'Schema No Encontrado'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'The requested strategic intelligence module could not be loaded.'
                  : 'El módulo de inteligencia estratégica solicitado no pudo ser cargado.'
                }
              </p>
              <div className="text-sm text-muted-foreground font-mono mt-4">
                {error}
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleBack} variant="outline">
                {language === 'en' ? 'Go Back' : 'Regresar'}
              </Button>
              <Button onClick={() => onNavigate('overwatch')}>
                {language === 'en' ? 'Browse All Domains' : 'Explorar Todos los Dominios'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back to Domain' : 'Volver al Dominio'}
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('overwatch')}
              >
                OVERWATCH³
              </Button>
              <span>/</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate(`overwatch/${domain}`)}
              >
                {domain}
              </Button>
              <span>/</span>
              <span className="text-foreground font-medium">{route}</span>
            </div>
          </div>

          <Badge variant="secondary" className="font-mono text-xs">
            schema:{schema.schemaTrace}
          </Badge>
        </div>

        {/* Schema Overlay Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SchemaOverlayPanel
            schema={schema}
            language={language}
            onTriggerDemo={handleDemoTrigger}
            isDemo={false}
          />
        </motion.div>

        {/* Additional Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center space-y-4"
        >
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => onNavigate(`overwatch/${domain}`)}
            >
              {language === 'en' ? 'Explore More in ' : 'Explorar Más en '}{domain.charAt(0).toUpperCase() + domain.slice(1)}
            </Button>
            <Button 
              onClick={() => onNavigate('overwatch')}
            >
              {language === 'en' ? 'Browse All Domains' : 'Explorar Todos los Dominios'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {language === 'en' 
              ? 'Schema-driven strategic intelligence • Bilingual coaching • Advisory-grade frameworks'
              : 'Inteligencia estratégica basada en schemas • Coaching bilingüe • Marcos de grado asesor'
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OverwatchSchemaPage;