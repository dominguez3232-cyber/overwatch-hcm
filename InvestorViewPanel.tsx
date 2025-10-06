import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  TrendingUp,
  Globe,
  Users,
  Filter,
  RefreshCw,
  Download,
  Share2,
  Eye,
  Settings,
  Target
} from 'lucide-react';

interface InvestorViewPanelProps {
  onInvestorChange: (investor: string) => void;
  onRemixFilterChange: (remix: string) => void;
  onLanguageChange: (language: string) => void;
  selectedInvestor?: string;
  selectedRemix?: string;
  selectedLanguage?: string;
  language?: 'en' | 'es';
}

export default function InvestorViewPanel({
  onInvestorChange,
  onRemixFilterChange,
  onLanguageChange,
  selectedInvestor = 'LatAm VC',
  selectedRemix = 'All Remixes',
  selectedLanguage = 'Dual-language',
  language = 'en'
}: InvestorViewPanelProps) {
  const [filterMode, setFilterMode] = useState<'focused' | 'expanded'>('focused');

  const t = {
    en: {
      investorView: 'Investor View Selector',
      investorType: 'Investor Type',
      remixFilter: 'Remix Filter',
      languageToggle: 'Language Toggle',
      filterMode: 'Filter Mode',
      focused: 'Focused',
      expanded: 'Expanded',
      refresh: 'Refresh',
      export: 'Export',
      share: 'Share',
      settings: 'Settings',
      viewMode: 'View Mode',
      currentSelection: 'Current Selection'
    },
    es: {
      investorView: 'Selector Vista Inversor',
      investorType: 'Tipo de Inversor',
      remixFilter: 'Filtro Remix',
      languageToggle: 'Cambio de Idioma',
      filterMode: 'Modo de Filtro',
      focused: 'Enfocado',
      expanded: 'Expandido',
      refresh: 'Actualizar',
      export: 'Exportar',
      share: 'Compartir',
      settings: 'Configuración',
      viewMode: 'Modo de Vista',
      currentSelection: 'Selección Actual'
    }
  };

  const text = t[language];

  const investorOptions = [
    { value: 'LatAm VC', label: 'LatAm VC', icon: '🌎', description: 'Latin America focused venture capital' },
    { value: 'US Angel', label: 'US Angel', icon: '👼', description: 'United States angel investor' },
    { value: 'Global Fund', label: 'Global Fund', icon: '🌍', description: 'Global institutional fund' },
    { value: 'Strategic Partner', label: 'Strategic Partner', icon: '🤝', description: 'Strategic corporate partner' }
  ];

  const remixOptions = [
    { value: 'All Remixes', label: language === 'en' ? 'All Remixes' : 'Todos los Remixes', icon: '🎭' },
    { value: 'Trust Velocity', label: 'Trust Velocity', icon: '⚡' },
    { value: 'Dual-Language Navigator', label: 'Dual-Language Navigator', icon: '🌐' },
    { value: 'Demo Precision', label: 'Demo Precision', icon: '🎯' }
  ];

  const languageOptions = [
    { value: 'EN', label: 'English', icon: '🇺🇸' },
    { value: 'ES', label: 'Español', icon: '🇪🇸' },
    { value: 'Dual-language', label: language === 'en' ? 'Dual-language' : 'Bilingüe', icon: '🌐' }
  ];

  const getInvestorConfig = (investor: string) => {
    const configs = {
      'LatAm VC': {
        color: 'from-green-500/20 to-blue-500/20',
        borderColor: 'border-green-500/30',
        accent: 'text-green-400'
      },
      'US Angel': {
        color: 'from-blue-500/20 to-purple-500/20',
        borderColor: 'border-blue-500/30',
        accent: 'text-blue-400'
      },
      'Global Fund': {
        color: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/30',
        accent: 'text-purple-400'
      },
      'Strategic Partner': {
        color: 'from-yellow-500/20 to-orange-500/20',
        borderColor: 'border-yellow-500/30',
        accent: 'text-yellow-400'
      }
    };
    return configs[investor as keyof typeof configs] || configs['LatAm VC'];
  };

  const config = getInvestorConfig(selectedInvestor);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <Card className={`p-6 bg-gradient-to-r ${config.color} border ${config.borderColor}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{text.investorView}</h2>
              <p className="text-muted-foreground text-sm">
                {text.currentSelection}: {selectedInvestor} • {selectedRemix} • {selectedLanguage}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <RefreshCw className="w-3 h-3 mr-1" />
              {text.refresh}
            </Button>
            <Button size="sm" variant="outline">
              <Download className="w-3 h-3 mr-1" />
              {text.export}
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="w-3 h-3 mr-1" />
              {text.share}
            </Button>
          </div>
        </div>
      </Card>

      {/* Selection Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Investor Type Dropdown */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">{text.investorType}</label>
            </div>
            
            <Select value={selectedInvestor} onValueChange={onInvestorChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {investorOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="text-xs text-muted-foreground">
              {investorOptions.find(opt => opt.value === selectedInvestor)?.description}
            </div>
          </div>
        </Card>

        {/* Remix Filter */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">{text.remixFilter}</label>
            </div>
            
            <Select value={selectedRemix} onValueChange={onRemixFilterChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {remixOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex flex-wrap gap-1">
              {remixOptions.filter(opt => opt.value !== 'All Remixes').map((option) => (
                <Badge 
                  key={option.value}
                  variant={selectedRemix === option.value || selectedRemix === 'All Remixes' ? 'default' : 'outline'}
                  className="text-xs cursor-pointer"
                  onClick={() => onRemixFilterChange(option.value)}
                >
                  {option.icon} {option.label}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Language Toggle */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">{text.languageToggle}</label>
            </div>
            
            <Select value={selectedLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex gap-1">
              {languageOptions.map((option) => (
                <Button
                  key={option.value}
                  size="sm"
                  variant={selectedLanguage === option.value ? 'default' : 'outline'}
                  className="text-xs flex-1"
                  onClick={() => onLanguageChange(option.value)}
                >
                  {option.icon}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Mode and View Settings */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">{text.filterMode}</span>
            </div>
            
            <div className="flex bg-secondary rounded-lg p-1">
              <Button
                size="sm"
                variant={filterMode === 'focused' ? 'default' : 'ghost'}
                onClick={() => setFilterMode('focused')}
                className="text-xs"
              >
                {text.focused}
              </Button>
              <Button
                size="sm"
                variant={filterMode === 'expanded' ? 'default' : 'ghost'}
                onClick={() => setFilterMode('expanded')}
                className="text-xs"
              >
                {text.expanded}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`text-xs ${config.accent}`}>
              {selectedInvestor}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {selectedRemix}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {selectedLanguage}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Active Filters Summary */}
      {(selectedRemix !== 'All Remixes' || selectedLanguage !== 'Dual-language') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Filter className="w-3 h-3 text-primary" />
              <span className="font-medium">Active Filters:</span>
              <span className="text-muted-foreground">
                {selectedRemix !== 'All Remixes' && `Remix: ${selectedRemix}`}
                {selectedRemix !== 'All Remixes' && selectedLanguage !== 'Dual-language' && ' • '}
                {selectedLanguage !== 'Dual-language' && `Language: ${selectedLanguage}`}
              </span>
            </div>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => {
                onRemixFilterChange('All Remixes');
                onLanguageChange('Dual-language');
              }}
              className="text-xs"
            >
              Clear Filters
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}