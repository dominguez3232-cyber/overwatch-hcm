import { useState } from 'react';
import { LandingPage } from './LandingPage';
import { ModulePage } from './ModulePage';
import { Header } from './Header';
import { Footer } from './Footer';

// Import existing strategic intelligence components
import { StrategicFrameworkLibrary } from './StrategicFrameworkLibrary';
import { ImplementationRoadmapGenerator } from './ImplementationRoadmapGenerator';
import { IndustryIntelligenceHub } from './IndustryIntelligenceHub';
import { BrandArchetypesModule } from './BrandArchetypesModule';
import { BuyerGuide } from './BuyerGuide';
import { ROICalculator } from './ROICalculator';
import { CompetitiveBattlecard } from './CompetitiveBattlecard';

type Route = 
  | 'landing'
  | 'hcm'
  | 'erp' 
  | 'epm'
  | 'crm'
  | 'command-center'
  | 'company'
  | 'resources'
  | 'contact'
  | 'demo'
  | 'trial'
  // Strategic Intelligence Routes
  | 'frameworks'
  | 'roadmap'
  | 'industry-intel'
  | 'brand-archetypes'
  | 'buyer-guide'
  | 'roi-calculator'
  | 'battlecard';

interface RouterProps {
  initialRoute?: Route;
}

export function Router({ initialRoute = 'landing' }: RouterProps) {
  const [currentRoute, setCurrentRoute] = useState<Route>(initialRoute);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const navigate = (route: Route) => {
    setCurrentRoute(route);
  };

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    setLanguage(newLanguage);
  };

  const handleNavigateToModule = (moduleId: string) => {
    navigate(moduleId as Route);
  };

  const handleRequestDemo = () => {
    navigate('demo');
  };

  const handleStartTrial = () => {
    navigate('trial');
  };

  const handleBack = () => {
    navigate('landing');
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'landing':
        return (
          <LandingPage
            language={language}
            onNavigateToModule={handleNavigateToModule}
            onRequestDemo={handleRequestDemo}
          />
        );

      case 'hcm':
      case 'erp':
      case 'epm':
      case 'crm':
        return (
          <ModulePage
            moduleId={currentRoute}
            language={language}
            onBack={handleBack}
            onRequestDemo={handleRequestDemo}
            onStartTrial={handleStartTrial}
          />
        );

      case 'command-center':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'HRIS Command Center' : 'Centro de Comando HRIS'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Centralized dashboard with AI insights and governance controls - Coming Soon'
                  : 'Panel centralizado con insights de IA y controles de gobernanza - Próximamente'
                }
              </p>
              <button 
                onClick={handleBack}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      case 'company':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'About OVERWATCH' : 'Acerca de OVERWATCH'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Learn about our mission, leadership team, and company culture'
                  : 'Conoce nuestra misión, equipo de liderazgo y cultura empresarial'
                }
              </p>
              <button 
                onClick={handleBack}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'Resources' : 'Recursos'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Blog, case studies, whitepapers, and strategic insights'
                  : 'Blog, casos de estudio, libros blancos e insights estratégicos'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <button 
                  onClick={() => navigate('frameworks')}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-lg text-left"
                >
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Strategic Frameworks' : 'Marcos Estratégicos'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? '20+ proven frameworks' : '20+ marcos probados'}
                  </p>
                </button>
                
                <button 
                  onClick={() => navigate('roadmap')}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-lg text-left"
                >
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Implementation Roadmap' : 'Hoja de Ruta'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Custom implementation plans' : 'Planes de implementación personalizados'}
                  </p>
                </button>
                
                <button 
                  onClick={() => navigate('industry-intel')}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-lg text-left"
                >
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Industry Intelligence' : 'Inteligencia de Industria'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Industry-specific insights' : 'Insights específicos de industria'}
                  </p>
                </button>
                
                <button 
                  onClick={() => navigate('brand-archetypes')}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-lg text-left"
                >
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Brand Archetypes' : 'Arquetipos de Marca'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Strategic brand positioning' : 'Posicionamiento estratégico de marca'}
                  </p>
                </button>
              </div>
              <button 
                onClick={handleBack}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Get in touch for demos, support, or strategic consultations'
                  : 'Contáctanos para demos, soporte o consultas estratégicas'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Sales & Demos' : 'Ventas y Demos'}
                  </h3>
                  <p className="text-gray-400">sales@overwatch.com</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Customer Support' : 'Soporte al Cliente'}
                  </h3>
                  <p className="text-gray-400">support@overwatch.com</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Strategic Advisory' : 'Asesoría Estratégica'}
                  </h3>
                  <p className="text-gray-400">advisory@overwatch.com</p>
                </div>
              </div>
              <button 
                onClick={handleBack}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Schedule a personalized demo of OVERWATCH platform'
                  : 'Programa una demo personalizada de la plataforma OVERWATCH'
                }
              </p>
              <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-auto mb-8">
                <form className="space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Company Name' : 'Nombre de Empresa'}
                    </label>
                    <input type="text" className="w-full p-3 bg-slate-700 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Your Name' : 'Tu Nombre'}
                    </label>
                    <input type="text" className="w-full p-3 bg-slate-700 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full p-3 bg-slate-700 rounded-lg text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Company Size' : 'Tamaño de Empresa'}
                    </label>
                    <select className="w-full p-3 bg-slate-700 rounded-lg text-white">
                      <option>1-10 {language === 'en' ? 'employees' : 'empleados'}</option>
                      <option>11-50 {language === 'en' ? 'employees' : 'empleados'}</option>
                      <option>51-200 {language === 'en' ? 'employees' : 'empleados'}</option>
                      <option>200+ {language === 'en' ? 'employees' : 'empleados'}</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
                    {language === 'en' ? 'Schedule Demo' : 'Programar Demo'}
                  </button>
                </form>
              </div>
              <button 
                onClick={handleBack}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      case 'trial':
        return (
          <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">
                {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
              </h1>
              <p className="text-gray-400 mb-8">
                {language === 'en' 
                  ? 'Get full access to OVERWATCH for 30 days'
                  : 'Obtén acceso completo a OVERWATCH por 30 días'
                }
              </p>
              <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-auto mb-8">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'en' ? '30-Day Free Trial' : 'Prueba Gratuita de 30 Días'}
                </h3>
                <ul className="text-left space-y-2 mb-6">
                  <li>✓ {language === 'en' ? 'Full platform access' : 'Acceso completo a la plataforma'}</li>
                  <li>✓ {language === 'en' ? 'AI coaching included' : 'Coaching IA incluido'}</li>
                  <li>✓ {language === 'en' ? 'All strategic frameworks' : 'Todos los marcos estratégicos'}</li>
                  <li>✓ {language === 'en' ? 'Bilingual support' : 'Soporte bilingüe'}</li>
                  <li>✓ {language === 'en' ? 'No credit card required' : 'No se requiere tarjeta de crédito'}</li>
                </ul>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder={language === 'en' ? 'Work Email' : 'Email de Trabajo'} 
                    className="w-full p-3 bg-slate-700 rounded-lg text-white" 
                  />
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
                    {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
                  </button>
                </form>
              </div>
              <button 
                onClick={handleBack}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
            </div>
          </div>
        );

      // Strategic Intelligence Routes
      case 'frameworks':
        return <StrategicFrameworkLibrary language={language} />;

      case 'roadmap':
        return <ImplementationRoadmapGenerator language={language} />;

      case 'industry-intel':
        return <IndustryIntelligenceHub language={language} />;

      case 'brand-archetypes':
        return <BrandArchetypesModule onBack={handleBack} language={language} />;

      case 'buyer-guide':
        return <BuyerGuide language={language} role="ceo" />;

      case 'roi-calculator':
        return <ROICalculator language={language} industry="professional-services" />;

      case 'battlecard':
        return <CompetitiveBattlecard language={language} competitor="rippling" />;

      default:
        return (
          <LandingPage
            language={language}
            onNavigateToModule={handleNavigateToModule}
            onRequestDemo={handleRequestDemo}
          />
        );
    }
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onNavigate={navigate}
        currentRoute={currentRoute}
      />
      
      {renderPage()}
      
      <Footer language={language} />
    </div>
  );
}