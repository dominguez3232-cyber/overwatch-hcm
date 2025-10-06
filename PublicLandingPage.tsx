import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSequenceManager } from '../utils/useSequenceManager';
import DemoSequenceController from './DemoSequenceControllerSafe';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PublicLandingPageProps {
  language: 'en' | 'es';
  onNavigate?: (path: string) => void;
  onRequestDemo?: () => void;
  onLaunchPlatform?: () => void;
}

export default function PublicLandingPage({ 
  language, 
  onNavigate, 
  onRequestDemo,
  onLaunchPlatform 
}: PublicLandingPageProps) {
  const [featuredSequences, setFeaturedSequences] = useState<any[]>([]);
  const [selectedDemo, setSelectedDemo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [accessRequested, setAccessRequested] = useState(false);

  const { loadPublicSequences } = useSequenceManager();

  // Load featured demo sequences
  useEffect(() => {
    const loadFeaturedDemos = async () => {
      try {
        // Load public/featured sequences - these would be curated demos
        const publicSequences = await loadPublicSequences('featured', language);
        
        // If no public sequences, create sample featured demos
        const sampleDemos = [
          {
            id: 'investor-demo-sample',
            name: language === 'en' ? 'Investor Demo: ROI Command Center' : 'Demo Inversor: Centro de Comando ROI',
            description: language === 'en' 
              ? 'See how OVERWATCH³ transforms HR metrics into investor-grade financial intelligence'
              : 'Ve cómo OVERWATCH³ transforma las métricas de RH en inteligencia financiera de grado inversor',
            category: 'investor-demo',
            duration: '3 min',
            sequence: [
              'finance.revenue-analytics',
              'finance.cost-optimization',
              'finance.roi-calculation',
              'science.performance-metrics',
              'trigger.cultural-intelligence'
            ],
            isPublic: true,
            featured: true
          },
          {
            id: 'founder-onboarding-sample',
            name: language === 'en' ? 'Founder Onboarding: Command Center Setup' : 'Incorporación Fundador: Configuración Centro Comando',
            description: language === 'en'
              ? 'Complete walkthrough of setting up your OVERWATCH³ command center from day one'
              : 'Recorrido completo de configuración de tu centro de comando OVERWATCH³ desde el día uno',
            category: 'onboarding-flow',
            duration: '5 min',
            sequence: [
              'new.company-setup',
              'finance.financial-foundation',
              'science.team-assessment',
              'trigger.strategic-alignment',
              'law.compliance-framework'
            ],
            isPublic: true,
            featured: true
          },
          {
            id: 'tactical-coaching-sample',
            name: language === 'en' ? 'Tactical Coaching: Crisis Response' : 'Coaching Táctico: Respuesta Crisis',
            description: language === 'en'
              ? 'Real-time coaching for founder-led crisis management using OVERWATCH³ intelligence'
              : 'Coaching en tiempo real para gestión de crisis liderada por fundadores usando inteligencia OVERWATCH³',
            category: 'tactical-coaching',
            duration: '4 min',
            sequence: [
              'trigger.crisis-assessment',
              'science.team-alignment',
              'finance.impact-analysis',
              'law.risk-mitigation',
              'time.action-planning'
            ],
            isPublic: true,
            featured: true
          }
        ];

        setFeaturedSequences(publicSequences.length > 0 ? publicSequences : sampleDemos);
        if (sampleDemos.length > 0) {
          setSelectedDemo(sampleDemos[0]);
        }
      } catch (err) {
        console.error('Error loading featured demos:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedDemos();
  }, [loadPublicSequences, language]);

  const handleRequestAccess = () => {
    if (email.trim()) {
      // In a real app, this would send the email to your backend
      setAccessRequested(true);
      setTimeout(() => {
        if (onLaunchPlatform) {
          onLaunchPlatform();
        }
      }, 2000);
    }
  };

  const categoryIcons = {
    'investor-demo': '💼',
    'onboarding-flow': '🚀',
    'tactical-coaching': '🎯',
    'custom': '⚙️'
  };

  const categoryColors = {
    'investor-demo': 'from-blue-600 to-indigo-600',
    'onboarding-flow': 'from-green-600 to-emerald-600',
    'tactical-coaching': 'from-purple-600 to-violet-600',
    'custom': 'from-gray-600 to-slate-600'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">⚡</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  OVERWATCH<span className="text-primary">³</span>
                </h1>
              </div>
              
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-muted-foreground">
                {language === 'en' 
                  ? 'The World\'s First Advisory-Grade HRIS Command Center'
                  : 'El Primer Centro de Comando HRIS de Grado Asesor del Mundo'
                }
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                {language === 'en'
                  ? 'Transform HR from cost center to command center. Experience cinematic demo sequences that showcase the power of founder-led strategic intelligence.'
                  : 'Transforma RH de centro de costos a centro de comando. Experimenta secuencias demo cinematográficas que muestran el poder de la inteligencia estratégica liderada por fundadores.'
                }
              </p>

              <div className="flex gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  onClick={onLaunchPlatform}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 text-lg"
                >
                  ⚡ {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={onRequestDemo}
                  className="px-8 py-4 text-lg"
                >
                  🎬 {language === 'en' ? 'Watch Demo' : 'Ver Demo'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Demo Sequences */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {language === 'en' ? 'Experience Cinematic Demos' : 'Experimenta Demos Cinematográficos'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'See how OVERWATCH³ transforms founder-led companies with interactive walkthroughs designed for investors, onboarding, and tactical coaching.'
                : 'Ve cómo OVERWATCH³ transforma empresas lideradas por fundadores con recorridos interactivos diseñados para inversores, incorporación y coaching táctico.'
              }
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-muted-foreground">
                {language === 'en' ? 'Loading featured demos...' : 'Cargando demos destacados...'}
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Selection */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'en' ? 'Choose Your Experience' : 'Elige Tu Experiencia'}
                </h3>
                
                <div className="space-y-4">
                  {featuredSequences.map((demo) => (
                    <motion.div
                      key={demo.id}
                      whileHover={{ scale: 1.02 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedDemo(demo)}
                    >
                      <Card className={`transition-all ${selectedDemo?.id === demo.id ? 'ring-2 ring-primary bg-accent/30' : 'hover:bg-accent/20'}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[demo.category as keyof typeof categoryColors]} rounded-lg flex items-center justify-center`}>
                              <span className="text-white text-xl">
                                {categoryIcons[demo.category as keyof typeof categoryIcons]}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-bold text-lg">{demo.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {demo.duration}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground text-sm mb-3">
                                {demo.description}
                              </p>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {demo.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
                                </Badge>
                                {demo.featured && (
                                  <Badge className="text-xs bg-gradient-to-r from-amber-500 to-orange-500">
                                    ⭐ {language === 'en' ? 'Featured' : 'Destacado'}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Demo Player */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Live Preview' : 'Vista Previa en Vivo'}
                </h3>
                
                {selectedDemo ? (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${categoryColors[selectedDemo.category]} rounded-lg flex items-center justify-center`}>
                          <span className="text-white">
                            {categoryIcons[selectedDemo.category as keyof typeof categoryIcons]}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{selectedDemo.name}</CardTitle>
                          <CardDescription>{selectedDemo.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <DemoSequenceController
                        sequence={selectedDemo.sequence}
                        autoPlay={false}
                        language={language}
                        showControls={true}
                        embedded={false}
                      />
                      
                      <div className="mt-6 flex gap-3">
                        <Button 
                          onClick={onLaunchPlatform}
                          className="flex-1"
                        >
                          🚀 {language === 'en' ? 'Try Full Platform' : 'Probar Plataforma Completa'}
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => onNavigate?.('sequence-library')}
                        >
                          📁 {language === 'en' ? 'More Demos' : 'Más Demos'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <div className="text-6xl mb-4">🎬</div>
                      <h4 className="text-lg font-bold mb-2">
                        {language === 'en' ? 'Select a demo to preview' : 'Selecciona un demo para previsualizar'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'en'
                          ? 'Choose from our featured cinematic walkthroughs'
                          : 'Elige de nuestros recorridos cinematográficos destacados'
                        }
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Platform Access CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {language === 'en' ? 'Ready to Transform Your HR?' : '¿Listo para Transformar tu RH?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {language === 'en'
                ? 'Get immediate access to the full OVERWATCH³ platform with sample data and start building your strategic command center today.'
                : 'Obtén acceso inmediato a la plataforma completa OVERWATCH³ con datos de muestra y comienza a construir tu centro de comando estratégico hoy.'
              }
            </p>

            {!accessRequested ? (
              <div className="max-w-md mx-auto space-y-6">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder={language === 'en' ? 'Enter your email for instant access' : 'Ingresa tu email para acceso instantáneo'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                  />
                  <Button 
                    onClick={handleRequestAccess}
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
                    onClick={onLaunchPlatform}
                    className="text-primary hover:text-primary/80"
                  >
                    {language === 'en' ? 'Skip and try platform directly →' : 'Omitir y probar plataforma directamente →'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
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
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Founder-Led Companies' : 'Empresas Lideradas por Fundadores'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'ROI Achievement Rate' : 'Tasa de Logro ROI'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Advisory-Grade Support' : 'Soporte de Grado Asesor'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}