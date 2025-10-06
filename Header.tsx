import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Building2, Menu } from "lucide-react";
import Frame5 from "./Frame5";

interface HeaderProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
  onNavigate?: (route: string) => void;
  currentRoute?: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function Header({ language, onLanguageChange, onNavigate, currentRoute }: HeaderProps) {
  const isLandingPage = currentRoute === 'landing' || !currentRoute;
  
  const navigationItems = [
    { id: 'hcm', labelEn: 'HCM', labelEs: 'HCM' },
    { id: 'erp', labelEn: 'ERP', labelEs: 'ERP' },
    { id: 'epm', labelEn: 'EPM', labelEs: 'EPM' },
    { id: 'crm', labelEn: 'CRM', labelEs: 'CRM' },
    { id: 'resources', labelEn: 'Resources', labelEs: 'Recursos' },
    { id: 'company', labelEn: 'Company', labelEs: 'Empresa' },
    { id: 'contact', labelEn: 'Contact', labelEs: 'Contacto' }
  ];

  return (
    <header className="h-20 px-6 lg:px-20 flex items-center bg-slate-900 border-b border-slate-700">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onNavigate?.('landing')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Building2 className="w-10 h-10 text-white" />
          <div className="w-3 h-8 rounded bg-green-500"></div>
          <span className="text-xl font-bold text-white hidden lg:block">OVERWATCH</span>
        </button>
      </div>
      
      {/* Navigation - Desktop */}
      {isLandingPage && onNavigate && (
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-green-400 ${
                  currentRoute === item.id ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelEs}
              </button>
            ))}
          </div>
        </nav>
      )}
      
      {/* Title for other pages */}
      {!isLandingPage && (
        <div className="flex-1 text-center lg:text-left lg:ml-8">
          <h1 className="text-xl font-semibold text-white">
            OVERWATCH
          </h1>
        </div>
      )}
      
      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* CTA Buttons - only on landing */}
        {isLandingPage && onNavigate && (
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              onClick={() => onNavigate('demo')}
              variant="ghost" 
              className="text-white hover:bg-white/10"
            >
              {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
            </Button>
            <Button 
              onClick={() => onNavigate('trial')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {language === 'en' ? 'Start Trial' : 'Comenzar Prueba'}
            </Button>
          </div>
        )}
        
        {/* Language Selector */}
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-20 h-8 bg-slate-800 border-slate-600 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-600">
            <SelectItem value="en" className="text-white hover:bg-slate-700">EN</SelectItem>
            <SelectItem value="es" className="text-white hover:bg-slate-700">ES</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Mobile Menu Button */}
        {isLandingPage && (
          <Button variant="ghost" size="sm" className="lg:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        )}
      </div>
    </header>
  );
}