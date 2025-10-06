import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface DemoRequestPageProps {
  language?: 'en' | 'es';
  onNavigate?: (path: string) => void;
}

/**
 * Demo Request Page Component
 * 
 * This page is shown when users access /demo without a sequence ID.
 * It provides options to browse demos, launch the platform, or request a custom demo.
 * 
 * Works with both React Router and state-based routing systems.
 */
export default function DemoRequestPage({ 
  language: propLanguage, 
  onNavigate 
}: DemoRequestPageProps = {}) {
  const [email, setEmail] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  // React Router navigation hook (optional)
  let reactRouterNavigate: ((path: string) => void) | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { useNavigate } = require('react-router-dom');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    reactRouterNavigate = useNavigate();
  } catch {
    // React Router not available, use state-based navigation
  }

  // Get language from props, URL params, or default to 'en'
  const urlParams = new URLSearchParams(window.location.search);
  const language = propLanguage || (urlParams.get('lang') as 'en' | 'es') || 'en';

  // Navigation handler that works with both systems
  const navigate = (path: string) => {
    if (onNavigate) {
      // State-based routing
      onNavigate(path);
    } else if (reactRouterNavigate) {
      // React Router
      const routeMap: { [key: string]: string } = {
        'persona': '/platform',
        'sequence-library': '/demos',
        'demos': '/demos',
        'sequence-builder': '/build',
        'platform': '/platform'
      };
      const routePath = routeMap[path] || `/${path}`;
      reactRouterNavigate(routePath);
    } else {
      // Fallback to window location
      window.location.href = `/${path}`;
    }
  };

  const handleRequestDemo = () => {
    if (email.trim()) {
      // In a real app, this would send the email to your backend
      setRequestSent(true);
      setTimeout(() => {
        navigate('platform');
      }, 2000);
    }
  };

  const featuredDemos = [
    {
      id: 'sample-investor-demo',
      name: language === 'en' ? 'Investor Demo: ROI Command Center' : 'Demo Inversor: Centro de Comando ROI',
      description: language === 'en' 
        ? 'See how OVERWATCH³ transforms HR metrics into investor-grade financial intelligence'
        : 'Ve cómo OVERWATCH³ transforma las métricas de RH en inteligencia financiera de grado inversor',
      icon: '💼',
      duration: '3 min',
      category: 'investor-demo'
    },
    {
      id: 'sample-founder-onboarding',
      name: language === 'en' ? 'Founder Onboarding: Command Center Setup' : 'Incorporación Fundador: Configuración Centro Comando',
      description: language === 'en'
        ? 'Complete walkthrough of setting up your OVERWATCH³ command center from day one'
        : 'Recorrido completo de configuración de tu centro de comando OVERWATCH³ desde el día uno',
      icon: '🚀',
      duration: '5 min',
      category: 'onboarding-flow'
    },
    {
      id: 'sample-tactical-coaching',
      name: language === 'en' ? 'Tactical Coaching: Crisis Response' : 'Coaching Táctico: Respuesta Crisis',
      description: language === 'en'
        ? 'Real-time coaching for founder-led crisis management using OVERWATCH³ intelligence'
        : 'Coaching en tiempo real para gestión de crisis liderada por fundadores usando inteligencia OVERWATCH³',
      icon: '🎯',
      duration: '4 min',
      category: 'tactical-coaching'
    }
  ];

  const handleDemoClick = (demoId: string) => {
    navigate(`/demo?id=${demoId}&autoplay=true&lang=${language}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="h-16 px-6 flex items-center bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">🎬</span>
          </div>
          <h1 className="font-semibold">
            {language === 'en' ? 'OVERWATCH³ Demo Center' : 'Centro Demo OVERWATCH³'}
          </h1>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('sequence-library')}
          >
            📁 {language === 'en' ? 'Library' : 'Biblioteca'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('sequence-builder')}
          >
            ⚡ {language === 'en' ? 'Builder' : 'Constructor'}
          </Button>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              {language === 'en' ? 'Experience OVERWATCH³' : 'Experimenta OVERWATCH³'}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'See how OVERWATCH³ transforms HR from cost center to command center with our interactive cinematic demos'
                : 'Ve cómo OVERWATCH³ transforma RH de centro de costos a centro de comando con nuestros demos cinematográficos interactivos'
              }
            </p>
            
            <div className="flex gap-4 justify-center mb-16">
              <Button 
                size="lg"
                onClick={() => navigate('persona')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 text-lg"
              >
                ⚡ {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('sequence-library')}
                className="px-8 py-4 text-lg"
              >
                📁 {language === 'en' ? 'Browse All Demos' : 'Ver Todos los Demos'}
              </Button>
            </div>
          </div>

          {/* Featured Demos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'en' ? 'Featured Cinematic Demos' : 'Demos Cinematográficos Destacados'}
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredDemos.map((demo) => (
                <motion.div
                  key={demo.id}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => handleDemoClick(demo.id)}
                >
                  <Card className="h-full transition-all hover:bg-accent/20 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{demo.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 bg-secondary rounded">
                              {demo.duration}
                            </span>
                            <span className="text-xs px-2 py-1 bg-accent rounded">
                              ⭐ {language === 'en' ? 'Featured' : 'Destacado'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{demo.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {demo.description}
                      </p>
                      <Button 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDemoClick(demo.id);
                        }}
                      >
                        🎬 {language === 'en' ? 'Watch Demo' : 'Ver Demo'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Access Request Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {language === 'en' ? 'Ready to Transform Your HR?' : '¿Listo para Transformar tu RH?'}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {language === 'en'
                  ? 'Get immediate access to the full OVERWATCH³ platform with sample data and start building your strategic command center today.'
                  : 'Obtén acceso inmediato a la plataforma completa OVERWATCH³ con datos de muestra y comienza a construir tu centro de comando estratégico hoy.'
                }
              </p>

              {!requestSent ? (
                <div className="space-y-6">
                  <div className="flex gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder={language === 'en' ? 'Enter your email for instant access' : 'Ingresa tu email para acceso instantáneo'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                    />
                    <Button 
                      onClick={handleRequestDemo}
                      disabled={!email.trim()}
                      className="px-6 py-3 bg-gradient-to-r from-primary to-accent"
                    >
                      ⚡ {language === 'en' ? 'Access' : 'Acceso'}
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {language === 'en' 
                      ? 'No credit card required • Instant platform access • Sample data included'
                      : 'No se requiere tarjeta de crédito • Acceso instantáneo • Datos de muestra incluidos'
                    }
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="ghost"
                      onClick={() => navigate('/platform')}
                      className="text-primary hover:text-primary/80"
                    >
                      {language === 'en' ? 'Skip and try platform directly →' : 'Omitir y probar plataforma directamente →'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white text-2xl">✓</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {language === 'en' ? 'Access Granted!' : '¡Acceso Concedido!'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {language === 'en' 
                      ? 'Launching your OVERWATCH³ command center...'
                      : 'Iniciando tu centro de comando OVERWATCH³...'
                    }
                  </p>
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}