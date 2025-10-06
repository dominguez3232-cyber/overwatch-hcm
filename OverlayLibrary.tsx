import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Grid, List, Eye, Plus, MoreVertical } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface OverlayCardProps {
  title: string;
  caption: string;
  schemaTrace: string;
  language: 'en' | 'es';
  onPreview: () => void;
  onInject: () => void;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  usage?: number;
  lastUpdated?: string;
  isActive?: boolean;
  tags?: string[];
}

interface OverlayLibraryProps {
  language: 'en' | 'es';
  overlays?: OverlayCardProps[];
  onOverlaySelect?: (overlay: OverlayCardProps) => void;
  className?: string;
}

const translations = {
  en: {
    title: 'Overlay Library',
    subtitle: 'Strategic Coaching Overlays for Module Enhancement',
    searchPlaceholder: 'Search overlays...',
    filterAll: 'All Categories',
    filterFinance: 'Finance',
    filterLaw: 'Law',
    filterScience: 'Science',
    filterTime: 'Time',
    filterTrigger: 'Trigger',
    viewGrid: 'Grid View',
    viewList: 'List View',
    preview: 'Preview',
    inject: 'Inject',
    addNew: 'Add New',
    usage: 'Usage',
    lastUpdated: 'Updated',
    active: 'Active',
    inactive: 'Inactive',
    difficulty: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    noResults: 'No overlays found',
    noResultsDesc: 'Try adjusting your search or filter criteria'
  },
  es: {
    title: 'Biblioteca de Overlays',
    subtitle: 'Overlays de Coaching Estratégico para Mejora de Módulos',
    searchPlaceholder: 'Buscar overlays...',
    filterAll: 'Todas las Categorías',
    filterFinance: 'Finanzas',
    filterLaw: 'Legal',
    filterScience: 'Ciencia',
    filterTime: 'Tiempo',
    filterTrigger: 'Disparador',
    viewGrid: 'Vista Cuadrícula',
    viewList: 'Vista Lista',
    preview: 'Vista Previa',
    inject: 'Inyectar',
    addNew: 'Agregar Nuevo',
    usage: 'Uso',
    lastUpdated: 'Actualizado',
    active: 'Activo',
    inactive: 'Inactivo',
    difficulty: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    },
    noResults: 'No se encontraron overlays',
    noResultsDesc: 'Intenta ajustar tu búsqueda o criterios de filtro'
  }
};

export const OverlayCard: React.FC<OverlayCardProps> = ({
  title,
  caption,
  schemaTrace,
  language,
  onPreview,
  onInject,
  category = 'general',
  difficulty = 'intermediate',
  usage = 0,
  lastUpdated = 'Oct 2, 2025',
  isActive = false,
  tags = []
}) => {
  const t = translations[language];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'finance': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'law': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'science': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'time': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'trigger': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group relative bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={`text-xs px-2 py-0.5 ${getCategoryColor(category)}`}>
              {category.toUpperCase()}
            </Badge>
            <Badge className={`text-xs px-2 py-0.5 ${getDifficultyColor(difficulty)}`}>
              {t.difficulty[difficulty]}
            </Badge>
            {isActive && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs px-2 py-0.5">
                {t.active}
              </Badge>
            )}
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onPreview}>
              <Eye className="h-4 w-4 mr-2" />
              {t.preview}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onInject}>
              <Plus className="h-4 w-4 mr-2" />
              {t.inject}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Caption */}
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {caption}
      </p>

      {/* Schema Trace */}
      <div className="mb-3">
        <code className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground font-mono">
          {schemaTrace}
        </code>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs px-1.5 py-0.5">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-1.5 py-0.5">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      )}

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
        <div>{t.usage}: {usage}</div>
        <div>{t.lastUpdated}: {lastUpdated}</div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button 
          onClick={onPreview}
          variant="outline" 
          size="sm" 
          className="flex-1"
        >
          <Eye className="w-3 h-3 mr-1" />
          {t.preview}
        </Button>
        <Button 
          onClick={onInject}
          size="sm" 
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          <Plus className="w-3 h-3 mr-1" />
          {t.inject}
        </Button>
      </div>
    </motion.div>
  );
};

export const OverlayLibrary: React.FC<OverlayLibraryProps> = ({
  language,
  overlays = [],
  onOverlaySelect,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const t = translations[language];

  // Sample overlays if none provided
  const defaultOverlays: OverlayCardProps[] = [
    {
      title: 'Trust Velocity',
      caption: 'Trust moves faster than capital.',
      schemaTrace: 'finance.trust-velocity',
      language,
      category: 'finance',
      difficulty: 'intermediate',
      usage: 127,
      lastUpdated: 'Oct 1, 2025',
      isActive: true,
      tags: ['trust', 'velocity', 'capital'],
      onPreview: () => console.log('Preview Trust Velocity'),
      onInject: () => console.log('Inject Trust Velocity')
    },
    {
      title: 'Difficulty Risk Assessment',
      caption: 'Strategic risk evaluation for complex decisions.',
      schemaTrace: 'trigger.difficulty-risk',
      language,
      category: 'trigger',
      difficulty: 'advanced',
      usage: 89,
      lastUpdated: 'Sep 30, 2025',
      isActive: false,
      tags: ['risk', 'assessment', 'difficulty'],
      onPreview: () => console.log('Preview Difficulty Risk'),
      onInject: () => console.log('Inject Difficulty Risk')
    },
    {
      title: 'Assumed Rights Analysis',
      caption: 'Legal framework for assumed rights evaluation.',
      schemaTrace: 'law.assumed-right',
      language,
      category: 'law',
      difficulty: 'beginner',
      usage: 234,
      lastUpdated: 'Oct 2, 2025',
      isActive: true,
      tags: ['rights', 'legal', 'analysis'],
      onPreview: () => console.log('Preview Assumed Rights'),
      onInject: () => console.log('Inject Assumed Rights')
    },
    {
      title: 'Time Allocation Matrix',
      caption: 'Optimize time distribution across strategic priorities.',
      schemaTrace: 'time.allocation-matrix',
      language,
      category: 'time',
      difficulty: 'intermediate',
      usage: 156,
      lastUpdated: 'Sep 28, 2025',
      isActive: true,
      tags: ['time', 'allocation', 'matrix'],
      onPreview: () => console.log('Preview Time Allocation'),
      onInject: () => console.log('Inject Time Allocation')
    },
    {
      title: 'Scientific Method Framework',
      caption: 'Apply scientific rigor to business decision making.',
      schemaTrace: 'science.method-framework',
      language,
      category: 'science',
      difficulty: 'advanced',
      usage: 67,
      lastUpdated: 'Sep 25, 2025',
      isActive: false,
      tags: ['science', 'method', 'framework'],
      onPreview: () => console.log('Preview Scientific Method'),
      onInject: () => console.log('Inject Scientific Method')
    },
    {
      title: 'Revenue Velocity Tracking',
      caption: 'Track and optimize revenue generation velocity.',
      schemaTrace: 'finance.revenue-velocity',
      language,
      category: 'finance',
      difficulty: 'intermediate',
      usage: 198,
      lastUpdated: 'Oct 1, 2025',
      isActive: true,
      tags: ['revenue', 'velocity', 'tracking'],
      onPreview: () => console.log('Preview Revenue Velocity'),
      onInject: () => console.log('Inject Revenue Velocity')
    }
  ];

  const activeOverlays = overlays.length > 0 ? overlays : defaultOverlays;

  // Filter overlays
  const filteredOverlays = activeOverlays.filter(overlay => {
    const matchesSearch = overlay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         overlay.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         overlay.schemaTrace.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || overlay.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: 'all', label: t.filterAll },
    { key: 'finance', label: t.filterFinance },
    { key: 'law', label: t.filterLaw },
    { key: 'science', label: t.filterScience },
    { key: 'time', label: t.filterTime },
    { key: 'trigger', label: t.filterTrigger }
  ];

  return (
    <div className={`bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            {t.addNew}
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex items-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 border border-border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {filteredOverlays.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }>
            {filteredOverlays.map((overlay, index) => (
              <motion.div
                key={`${overlay.schemaTrace}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onOverlaySelect?.(overlay)}
                className="cursor-pointer"
              >
                <OverlayCard {...overlay} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.noResults}</h3>
            <p className="text-muted-foreground">{t.noResultsDesc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OverlayLibrary;