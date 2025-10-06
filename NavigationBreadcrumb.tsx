import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  view: string;
  isActive?: boolean;
}

interface NavigationBreadcrumbProps {
  items: BreadcrumbItem[];
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export function NavigationBreadcrumb({ items, language, onNavigate }: NavigationBreadcrumbProps) {
  const homeLabel = language === 'en' ? 'Home' : 'Inicio';

  return (
    <nav className="flex items-center space-x-2 px-6 py-3 bg-card/50 border-b border-border">
      <button
        onClick={() => onNavigate('landing')}
        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="text-sm">{homeLabel}</span>
      </button>
      
      {items.map((item, index) => (
        <React.Fragment key={item.view}>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <button
            onClick={() => !item.isActive && onNavigate(item.view)}
            className={`text-sm transition-colors ${
              item.isActive 
                ? 'text-foreground font-medium cursor-default' 
                : 'text-muted-foreground hover:text-foreground cursor-pointer'
            }`}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
}