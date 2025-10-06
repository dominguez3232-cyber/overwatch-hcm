import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  Settings, 
  User, 
  Bell,
  Search,
  Filter,
  SortAsc,
  MoreHorizontal,
  Home,
  BarChart3,
  Users,
  DollarSign,
  Target
} from 'lucide-react';

// Header bar component following naming convention: ui/header-bar
export const UIHeaderBar: React.FC<{
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  showLanguageToggle?: boolean;
  showUserMenu?: boolean;
  showNotifications?: boolean;
  language?: 'en' | 'es';
  onLanguageChange?: (lang: 'en' | 'es') => void;
  onUserMenuClick?: () => void;
  onNotificationClick?: () => void;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
}> = ({
  title = "OVERWATCH³",
  subtitle,
  showLogo = true,
  showLanguageToggle = true,
  showUserMenu = true,
  showNotifications = true,
  language = 'en',
  onLanguageChange,
  onUserMenuClick,
  onNotificationClick,
  actions = [],
  className = ''
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        h-16 px-6 bg-background/95 backdrop-blur-sm border-b border-border
        flex items-center justify-between sticky top-0 z-40
        ${className}
      `}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        {showLogo && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">⚡</span>
            </div>
            <div>
              <h1 className="font-bold text-foreground text-lg">{title}</h1>
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Actions */}
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || 'outline'}
            size="sm"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}

        {/* Language toggle */}
        {showLanguageToggle && onLanguageChange && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language.toUpperCase()}
            </span>
          </Button>
        )}

        {/* Notifications */}
        {showNotifications && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onNotificationClick}
            className="relative"
          >
            <Bell className="w-4 h-4" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        )}

        {/* User menu */}
        {showUserMenu && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onUserMenuClick}
            className="flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            <ChevronDown className="w-3 h-3" />
          </Button>
        )}
      </div>
    </motion.header>
  );
};

// Language toggle component following naming convention: ui/toggle-en-es
export const UIToggleEnEs: React.FC<{
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  showFlag?: boolean;
  className?: string;
}> = ({
  language,
  onLanguageChange,
  size = 'md',
  variant = 'outline',
  showFlag = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg'
  };

  return (
    <div className={`flex rounded-lg border border-border overflow-hidden ${className}`}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onLanguageChange('en')}
        className={`
          ${sizeClasses[size]} flex items-center gap-2 transition-all
          ${language === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
          }
        `}
      >
        {showFlag && <span>🇺🇸</span>}
        <span className="font-medium">EN</span>
      </motion.button>
      
      <Separator orientation="vertical" className="opacity-50" />
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onLanguageChange('es')}
        className={`
          ${sizeClasses[size]} flex items-center gap-2 transition-all
          ${language === 'es' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
          }
        `}
      >
        {showFlag && <span>🇪🇸</span>}
        <span className="font-medium">ES</span>
      </motion.button>
    </div>
  );
};

// Navigation breadcrumb component
export const UIBreadcrumb: React.FC<{
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    current?: boolean;
  }>;
  separator?: React.ReactNode;
  className?: string;
}> = ({
  items,
  separator = <ChevronRight className="w-4 h-4 text-muted-foreground" />,
  className = ''
}) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && separator}
          
          {item.current ? (
            <span className="text-foreground font-medium">
              {item.label}
            </span>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={item.onClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// Status indicator component
export const UIStatusIndicator: React.FC<{
  status: 'online' | 'offline' | 'loading' | 'error' | 'success';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}> = ({
  status,
  label,
  size = 'md',
  showLabel = true,
  className = ''
}) => {
  const statusConfig = {
    online: { color: 'bg-green-500', label: 'Online' },
    offline: { color: 'bg-red-500', label: 'Offline' },
    loading: { color: 'bg-yellow-500 animate-pulse', label: 'Loading' },
    error: { color: 'bg-red-500', label: 'Error' },
    success: { color: 'bg-green-500', label: 'Success' }
  };

  const sizeClasses = {
    sm: { dot: 'w-2 h-2', text: 'text-xs' },
    md: { dot: 'w-3 h-3', text: 'text-sm' },
    lg: { dot: 'w-4 h-4', text: 'text-base' }
  };

  const config = statusConfig[status];
  const sizes = sizeClasses[size];
  const displayLabel = label || config.label;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes.dot} ${config.color} rounded-full flex-shrink-0`} />
      {showLabel && (
        <span className={`${sizes.text} text-muted-foreground`}>
          {displayLabel}
        </span>
      )}
    </div>
  );
};

// Search bar component
export const UISearchBar: React.FC<{
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  showFilter?: boolean;
  onFilterClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({
  placeholder = "Search...",
  value = '',
  onChange,
  onSearch,
  showFilter = true,
  onFilterClick,
  size = 'md',
  className = ''
}) => {
  const [searchValue, setSearchValue] = React.useState(value);

  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          className={`
            ${sizeClasses[size]} w-full pl-10 pr-12
            bg-input border border-border rounded-lg
            text-foreground placeholder-muted-foreground
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-200
          `}
        />
        
        {showFilter && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onFilterClick}
            className="absolute right-1 h-8 w-8 p-0"
          >
            <Filter className="w-4 h-4" />
          </Button>
        )}
      </div>
    </form>
  );
};

// Quick stats component
export const UIQuickStats: React.FC<{
  stats: Array<{
    label: string;
    value: string | number;
    unit?: string;
    change?: {
      value: string;
      direction: 'up' | 'down' | 'neutral';
    };
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  layout?: 'horizontal' | 'grid';
  className?: string;
}> = ({
  stats,
  layout = 'horizontal',
  className = ''
}) => {
  const layoutClasses = {
    horizontal: 'flex gap-6 overflow-x-auto',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4'
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-card border border-border rounded-lg p-4 min-w-0 flex-shrink-0"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              {IconComponent && (
                <IconComponent className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="text-sm text-muted-foreground">
                  {stat.unit}
                </span>
              )}
            </div>
            
            {stat.change && (
              <div className={`
                text-xs flex items-center gap-1
                ${stat.change.direction === 'up' ? 'text-green-400' : 
                  stat.change.direction === 'down' ? 'text-red-400' : 
                  'text-muted-foreground'}
              `}>
                <span>{stat.change.value}</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Tab navigation component
export const UITabNavigation: React.FC<{
  tabs: Array<{
    id: string;
    label: string;
    count?: number;
    disabled?: boolean;
  }>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variantClasses = {
    default: 'border-b border-border',
    pills: 'bg-muted rounded-lg p-1',
    underline: 'space-x-8'
  };

  const sizeClasses = {
    sm: 'text-sm h-8',
    md: 'text-base h-10',
    lg: 'text-lg h-12'
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      <nav className="flex" role="tablist">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            role="tab"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            whileHover={!tab.disabled ? { scale: 1.02 } : {}}
            whileTap={!tab.disabled ? { scale: 0.98 } : {}}
            className={`
              ${sizeClasses[size]} px-4 flex items-center gap-2 font-medium transition-all
              ${variant === 'pills' ? 'rounded-md' : ''}
              ${activeTab === tab.id
                ? variant === 'underline'
                  ? 'text-primary border-b-2 border-primary'
                  : variant === 'pills'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-primary border-b-2 border-primary'
                : tab.disabled
                ? 'text-muted-foreground cursor-not-allowed opacity-50'
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <Badge variant="secondary" className="text-xs">
                {tab.count}
              </Badge>
            )}
          </motion.button>
        ))}
      </nav>
    </div>
  );
};

// Loading skeleton component
export const UILoadingSkeleton: React.FC<{
  type?: 'text' | 'card' | 'avatar' | 'button' | 'custom';
  count?: number;
  height?: string;
  width?: string;
  className?: string;
}> = ({
  type = 'text',
  count = 1,
  height,
  width,
  className = ''
}) => {
  const typeClasses = {
    text: 'h-4 bg-muted rounded',
    card: 'h-32 bg-muted rounded-lg',
    avatar: 'w-10 h-10 bg-muted rounded-full',
    button: 'h-10 w-24 bg-muted rounded-lg',
    custom: 'bg-muted rounded'
  };

  const skeletonClass = `
    ${typeClasses[type]} shimmer
    ${height ? `h-[${height}]` : ''}
    ${width ? `w-[${width}]` : ''}
    ${className}
  `;

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={skeletonClass} />
      ))}
    </div>
  );
};

// Export all UI components for easy importing
export const UIElements = {
  HeaderBar: UIHeaderBar,
  ToggleEnEs: UIToggleEnEs,
  Breadcrumb: UIBreadcrumb,
  StatusIndicator: UIStatusIndicator,
  SearchBar: UISearchBar,
  QuickStats: UIQuickStats,
  TabNavigation: UITabNavigation,
  LoadingSkeleton: UILoadingSkeleton
};