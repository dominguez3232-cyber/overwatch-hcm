import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderOpen, 
  Plus, 
  Search, 
  Filter, 
  Code, 
  GitBranch, 
  Play,
  Eye,
  ChevronRight,
  BookOpen,
  Database
} from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface BranchCardProps {
  title: string;
  routes: string[];
  onInject: (route: string) => void;
  description?: string;
  category?: 'foundation' | 'advanced' | 'strategic';
  lastUpdated?: string;
  routeCount?: number;
  icon?: React.ReactNode;
  language?: 'en' | 'es';
}

interface SchemaBrowserProps {
  language: 'en' | 'es';
  branches?: BranchCardProps[];
  onBranchSelect?: (branch: BranchCardProps) => void;
  onRouteInject?: (branch: string, route: string) => void;
  className?: string;
}

const translations = {
  en: {
    title: 'Schema Browser',
    subtitle: 'Strategic Intelligence Schema Library',
    searchPlaceholder: 'Search schemas and routes...',
    filterAll: 'All Categories',
    filterFoundation: 'Foundation',
    filterAdvanced: 'Advanced',
    filterStrategic: 'Strategic',
    routes: 'Routes',
    inject: 'Inject',
    preview: 'Preview',
    explore: 'Explore',
    lastUpdated: 'Updated',
    noResults: 'No schemas found',
    noResultsDesc: 'Try adjusting your search criteria',
    totalSchemas: 'Total Schemas',
    totalRoutes: 'Total Routes',
    recentlyUpdated: 'Recently Updated',
    categories: {
      foundation: 'Foundation',
      advanced: 'Advanced', 
      strategic: 'Strategic'
    },
    schemaTypes: {
      finance: 'Finance Intelligence',
      law: 'Legal Framework',
      science: 'Scientific Method',
      time: 'Time Management',
      trigger: 'Trigger Analysis',
      culture: 'Cultural Intelligence'
    }
  },
  es: {
    title: 'Explorador de Esquemas',
    subtitle: 'Biblioteca de Esquemas de Inteligencia Estratégica',
    searchPlaceholder: 'Buscar esquemas y rutas...',
    filterAll: 'Todas las Categorías',
    filterFoundation: 'Fundación',
    filterAdvanced: 'Avanzado',
    filterStrategic: 'Estratégico',
    routes: 'Rutas',
    inject: 'Inyectar',
    preview: 'Vista Previa',
    explore: 'Explorar',
    lastUpdated: 'Actualizado',
    noResults: 'No se encontraron esquemas',
    noResultsDesc: 'Intenta ajustar tus criterios de búsqueda',
    totalSchemas: 'Esquemas Totales',
    totalRoutes: 'Rutas Totales',
    recentlyUpdated: 'Actualizado Recientemente',
    categories: {
      foundation: 'Fundación',
      advanced: 'Avanzado',
      strategic: 'Estratégico'
    },
    schemaTypes: {
      finance: 'Inteligencia Financiera',
      law: 'Marco Legal',
      science: 'Método Científico',
      time: 'Gestión del Tiempo',
      trigger: 'Análisis de Disparadores',
      culture: 'Inteligencia Cultural'
    }
  }
};

export const BranchCard: React.FC<BranchCardProps> = ({
  title,
  routes,
  onInject,
  description,
  category = 'foundation',
  lastUpdated = 'Oct 2, 2025',
  routeCount,
  icon,
  language = 'en'
}) => {
  const [expandedRoutes, setExpandedRoutes] = useState(false);
  const t = translations[language];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'foundation': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'advanced': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'strategic': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSchemaIcon = (schemaTitle: string) => {
    const titleLower = schemaTitle.toLowerCase();
    if (titleLower.includes('finance')) return <Database className="w-5 h-5 text-blue-400" />;
    if (titleLower.includes('law')) return <BookOpen className="w-5 h-5 text-purple-400" />;
    if (titleLower.includes('science')) return <GitBranch className="w-5 h-5 text-cyan-400" />;
    if (titleLower.includes('time')) return <Play className="w-5 h-5 text-orange-400" />;
    if (titleLower.includes('trigger')) return <Code className="w-5 h-5 text-pink-400" />;
    return icon || <FolderOpen className="w-5 h-5 text-muted-foreground" />;
  };

  const totalRoutes = routeCount || routes.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
            {getSchemaIcon(title)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <Badge className={`text-xs px-2 py-0.5 ${getCategoryColor(category)}`}>
                {t.categories[category]}
              </Badge>
            </div>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <GitBranch className="w-4 h-4" />
          <span>{totalRoutes} {t.routes}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Play className="w-4 h-4" />
          <span>{t.lastUpdated}: {lastUpdated}</span>
        </div>
      </div>

      {/* Routes Preview */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">{t.routes}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpandedRoutes(!expandedRoutes)}
            className="h-6 px-2 text-xs"
          >
            {expandedRoutes ? 'Collapse' : 'Expand'}
            <ChevronRight className={`w-3 h-3 ml-1 transition-transform ${expandedRoutes ? 'rotate-90' : ''}`} />
          </Button>
        </div>
        
        <ScrollArea className={`${expandedRoutes ? 'h-32' : 'h-16'} transition-all duration-200`}>
          <div className="space-y-1">
            {routes.slice(0, expandedRoutes ? routes.length : 3).map((route, index) => (
              <motion.div
                key={route}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-2 bg-secondary/50 rounded border border-transparent hover:border-border group/route"
              >
                <code className="text-xs font-mono text-secondary-foreground">
                  {route}
                </code>
                <div className="flex gap-1 opacity-0 group-hover/route:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => console.log(`Preview ${route}`)}
                    className="h-6 w-6 p-0"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => onInject(route)}
                    className="h-6 w-6 p-0 bg-primary hover:bg-primary/90"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
            {!expandedRoutes && routes.length > 3 && (
              <div className="text-xs text-muted-foreground text-center py-1">
                +{routes.length - 3} more routes
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          onClick={() => console.log(`Preview ${title}`)}
        >
          <Eye className="w-3 h-3 mr-1" />
          {t.preview}
        </Button>
        <Button 
          size="sm" 
          className="flex-1 bg-primary hover:bg-primary/90"
          onClick={() => setExpandedRoutes(true)}
        >
          <FolderOpen className="w-3 h-3 mr-1" />
          {t.explore}
        </Button>
      </div>
    </motion.div>
  );
};

export const SchemaBrowser: React.FC<SchemaBrowserProps> = ({
  language,
  branches = [],
  onBranchSelect,
  onRouteInject,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const t = translations[language];

  // Sample data if none provided
  const defaultBranches: BranchCardProps[] = [
    {
      title: 'Law',
      routes: ['assumed-right', 'harassment-revenge', 'contractual-blindspot'],
      description: 'Legal framework and compliance intelligence for strategic decision making',
      category: 'foundation',
      lastUpdated: 'Oct 1, 2025',
      language,
      onInject: (route) => console.log(`Inject law.${route}`)
    },
    {
      title: 'Finance',
      routes: ['trust-velocity', 'revenue-analytics', 'cost-optimization', 'roi-framework'],
      description: 'Financial intelligence and strategic economic analysis tools',
      category: 'strategic',
      lastUpdated: 'Oct 2, 2025',
      language,
      onInject: (route) => console.log(`Inject finance.${route}`)
    },
    {
      title: 'Science',
      routes: ['method-framework', 'hypothesis-testing', 'data-validation'],
      description: 'Scientific methodology application for business intelligence',
      category: 'advanced',
      lastUpdated: 'Sep 30, 2025',
      language,
      onInject: (route) => console.log(`Inject science.${route}`)
    },
    {
      title: 'Time',
      routes: ['allocation-matrix', 'priority-framework', 'efficiency-analysis'],
      description: 'Time management and productivity optimization schemas',
      category: 'foundation',
      lastUpdated: 'Sep 28, 2025',
      language,
      onInject: (route) => console.log(`Inject time.${route}`)
    },
    {
      title: 'Trigger',
      routes: ['difficulty-risk', 'decision-points', 'action-catalysts'],
      description: 'Trigger analysis and decision point identification systems',
      category: 'advanced',
      lastUpdated: 'Oct 1, 2025',
      language,
      onInject: (route) => console.log(`Inject trigger.${route}`)
    },
    {
      title: 'Culture',
      routes: ['force-multiplier', 'value-alignment', 'behavioral-patterns'],
      description: 'Cultural intelligence and organizational behavior analysis',
      category: 'strategic',
      lastUpdated: 'Sep 29, 2025',
      language,
      onInject: (route) => console.log(`Inject culture.${route}`)
    }
  ];

  const activeBranches = branches.length > 0 ? branches : defaultBranches;

  // Filter branches
  const filteredBranches = activeBranches.filter(branch => {
    const matchesSearch = branch.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.routes.some(route => route.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || branch.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate stats
  const totalSchemas = activeBranches.length;
  const totalRoutes = activeBranches.reduce((sum, branch) => sum + branch.routes.length, 0);
  const recentlyUpdated = activeBranches.filter(branch => 
    new Date(branch.lastUpdated || '2025-01-01') > new Date('2025-09-30')
  ).length;

  const categories = [
    { key: 'all', label: t.filterAll },
    { key: 'foundation', label: t.filterFoundation },
    { key: 'advanced', label: t.filterAdvanced },
    { key: 'strategic', label: t.filterStrategic }
  ];

  return (
    <div className={`bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{totalSchemas}</div>
              <div className="text-sm text-muted-foreground">{t.totalSchemas}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{totalRoutes}</div>
              <div className="text-sm text-muted-foreground">{t.totalRoutes}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{recentlyUpdated}</div>
              <div className="text-sm text-muted-foreground">{t.recentlyUpdated}</div>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
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
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {filteredBranches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch, index) => (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onBranchSelect?.(branch)}
                className="cursor-pointer"
              >
                <BranchCard {...branch} />
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
              <Database className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.noResults}</h3>
            <p className="text-muted-foreground">{t.noResultsDesc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SchemaBrowser;