import React, { useEffect, useState } from "react";
import { getSchemaNode } from "../utils/schemaLoader";
import OverlayPanel from "./OverlayPanel";
import ProofBlock from "./ProofBlock";

export default function DemoSequenceController({ sequence, autoPlay = false, language = "en", delay = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [schema, setSchema] = useState(null);
  const currentTrace = sequence[currentIndex];
  
  // Convert overwatch-schema/ paths to schema trace format
  const getSchemaTrace = (trace: string) => {
    if (trace?.startsWith('overwatch-schema/')) {
      // Convert 'overwatch-schema/finance/revenue-analytics' to 'finance.revenue-analytics'
      const pathParts = trace.replace('overwatch-schema/', '').split('/');
      if (pathParts.length >= 2) {
        return `${pathParts[0]}.${pathParts[1]}`;
      }
    }
    return trace;
  };
  
  // Check if this is a schema-based step or a navigation step
  const isSchemaStep = currentTrace?.startsWith('overwatch-schema/');
  
  // Load schema data when trace changes
  useEffect(() => {
    if (isSchemaStep) {
      try {
        const schemaTrace = getSchemaTrace(currentTrace);
        const loadedSchema = getSchemaNode(schemaTrace);
        
        if (!loadedSchema) {
          setErrorMessage(`Schema not found: ${schemaTrace}`);
          setSchema(null);
        } else {
          setErrorMessage(null);
          setSchema(loadedSchema);
        }
      } catch (error) {
        console.error('Error loading schema:', error);
        setErrorMessage(`Error loading schema: ${currentTrace}`);
        setSchema(null);
      }
    } else {
      setSchema(null);
      setErrorMessage(null);
    }
  }, [currentTrace, isSchemaStep]);

  useEffect(() => {
    if (!autoPlay || currentIndex >= sequence.length - 1) return;
    
    // Reduce timeout to prevent long waits
    const safeDelay = Math.min(delay, 10000); // Max 10 seconds
    const timer = setTimeout(() => setCurrentIndex((i) => i + 1), safeDelay);
    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, delay, sequence.length]);

  return (
    <div className="bg-secondary/20 p-6 rounded-lg shadow-lg space-y-6">
      {errorMessage && (
        <div className="bg-destructive/20 border border-destructive/30 text-destructive p-4 rounded-lg">
          <div className="font-medium">
            {language === 'en' ? 'Schema Error' : 'Error de Esquema'}
          </div>
          <div className="text-sm mt-1">{errorMessage}</div>
          <div className="text-xs mt-2 opacity-75">
            {language === 'en' 
              ? 'The missing schema routes have been added. Please refresh the page.' 
              : 'Las rutas de esquema faltantes han sido agregadas. Por favor recarga la página.'
            }
          </div>
        </div>
      )}
      
      <div className="text-xl font-bold text-foreground">
        {isSchemaStep ? (
          schema?.caption?.[language] || `Loading schema: ${currentTrace}`
        ) : (
          language === 'en' 
            ? `Navigation Step: ${currentTrace}`
            : `Paso de Navegación: ${currentTrace}`
        )}
      </div>
      
      {isSchemaStep ? (
        <>
          {schema ? (
            <>
              <OverlayPanel schema={schema} language={language} />
              <ProofBlock proof={schema?.proofEngine} language={language} />
            </>
          ) : (
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <p className="text-muted-foreground text-center">
                {language === 'en' 
                  ? 'Schema data not available. Please check that all required schema files are loaded.'
                  : 'Datos de esquema no disponibles. Por favor verifica que todos los archivos de esquema requeridos estén cargados.'
                }
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="text-muted-foreground text-center">
            {language === 'en' 
              ? 'This step navigates to a different section of the platform'
              : 'Este paso navega a una sección diferente de la plataforma'
            }
          </p>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          className="px-4 py-2 bg-card border border-border rounded hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ◀ {language === 'en' ? 'Prev' : 'Ant'}
        </button>
        <span className="text-sm text-muted-foreground">
          {language === 'en' ? 'Step' : 'Paso'} {currentIndex + 1} {language === 'en' ? 'of' : 'de'} {sequence.length}
        </span>
        <button
          disabled={currentIndex === sequence.length - 1}
          onClick={() => setCurrentIndex((i) => Math.min(i + 1, sequence.length - 1))}
          className="px-4 py-2 bg-card border border-border rounded hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {language === 'en' ? 'Next' : 'Sig'} ▶
        </button>
      </div>
    </div>
  );
}