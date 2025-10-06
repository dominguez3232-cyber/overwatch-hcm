import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  language?: 'en' | 'es';
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      const { language = 'en', fallback } = this.props;
      
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                {language === 'en' ? 'Something went wrong' : 'Algo salió mal'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  {language === 'en' 
                    ? 'We encountered an unexpected error. This has been logged and we\'re working to fix it.'
                    : 'Encontramos un error inesperado. Esto ha sido registrado y estamos trabajando para solucionarlo.'
                  }
                </AlertDescription>
              </Alert>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-sm text-muted-foreground mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.state.errorInfo && (
                    <details className="font-mono text-xs text-muted-foreground">
                      <summary className="cursor-pointer mb-2">Stack Trace</summary>
                      <pre className="whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}
              
              <div className="flex gap-2">
                <Button onClick={this.handleReset} className="flex-1">
                  {language === 'en' ? 'Try Again' : 'Intentar de Nuevo'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()} 
                  className="flex-1"
                >
                  {language === 'en' ? 'Reload Page' : 'Recargar Página'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple hook-based error boundary for functional components
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const handleError = React.useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    setError(error);
  }, []);

  // Reset error when component unmounts
  React.useEffect(() => {
    return () => setError(null);
  }, []);

  return {
    error,
    resetError,
    handleError,
    hasError: error !== null
  };
};

// Helper component for wrapping individual components
export const ErrorFallback: React.FC<{
  error: Error;
  resetError: () => void;
  language?: 'en' | 'es';
}> = ({ error, resetError, language = 'en' }) => (
  <div className="p-4 bg-card border border-border rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-destructive">⚠️</span>
      <h3 className="font-semibold">
        {language === 'en' ? 'Component Error' : 'Error de Componente'}
      </h3>
    </div>
    <p className="text-sm text-muted-foreground mb-3">
      {language === 'en' 
        ? 'This component encountered an error and couldn\'t load properly.'
        : 'Este componente encontró un error y no pudo cargar correctamente.'
      }
    </p>
    {process.env.NODE_ENV === 'development' && (
      <p className="text-xs font-mono text-muted-foreground mb-3">
        {error.message}
      </p>
    )}
    <Button size="sm" onClick={resetError}>
      {language === 'en' ? 'Retry' : 'Reintentar'}
    </Button>
  </div>
);