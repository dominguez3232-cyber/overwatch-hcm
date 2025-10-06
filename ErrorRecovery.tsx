import React from 'react';

interface ErrorRecoveryProps {
  error?: Error;
  language: 'en' | 'es';
  onRetry?: () => void;
  onNavigateHome?: () => void;
}

export function ErrorRecovery({ 
  error, 
  language, 
  onRetry, 
  onNavigateHome 
}: ErrorRecoveryProps) {
  const isNetworkError = error?.message?.includes('fetch') || 
                         error?.message?.includes('Failed to fetch') ||
                         error?.name === 'TypeError';

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            {isNetworkError ? (
              <span className="text-3xl">📡</span>
            ) : (
              <span className="text-3xl">⚠️</span>
            )}
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isNetworkError ? (
              language === 'en' ? 'Connection Issue' : 'Problema de Conexión'
            ) : (
              language === 'en' ? 'Something went wrong' : 'Algo salió mal'
            )}
          </h1>
          
          <p className="text-muted-foreground mb-6">
            {isNetworkError ? (
              language === 'en' 
                ? 'Unable to connect to our servers. Please check your internet connection and try again.'
                : 'No se puede conectar con nuestros servidores. Por favor, verifica tu conexión a internet e inténtalo de nuevo.'
            ) : (
              language === 'en'
                ? 'An unexpected error occurred. We\'re working to fix this issue.'
                : 'Ocurrió un error inesperado. Estamos trabajando para solucionar este problema.'
            )}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-card rounded-lg border border-border text-left">
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              {language === 'en' ? 'Technical Details:' : 'Detalles Técnicos:'}
            </h3>
            <code className="text-xs text-red-400 break-all">
              {error.name}: {error.message}
            </code>
          </div>
        )}

        <div className="space-y-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {language === 'en' ? 'Try Again' : 'Intentar de Nuevo'}
            </button>
          )}
          
          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="w-full border border-border hover:bg-secondary px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {language === 'en' ? 'Go to Homepage' : 'Ir a Página Principal'}
            </button>
          )}
          
          <button
            onClick={() => window.location.reload()}
            className="w-full text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {language === 'en' ? 'Reload Page' : 'Recargar Página'}
          </button>
        </div>

        {isNetworkError && (
          <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-blue-400">
              {language === 'en' 
                ? 'Some features may work in offline mode while connection is restored.'
                : 'Algunas funciones pueden funcionar en modo sin conexión mientras se restaura la conexión.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}