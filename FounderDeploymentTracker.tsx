import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Filter,
  Search,
  Plus,
  Download,
  Share,
  Eye,
  Edit,
  MoreHorizontal,
  User,
  Building,
  Globe,
  DollarSign,
  TrendingUp,
  Users,
  Activity,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Star,
  Flag,
  Target
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DeploymentRecord {
  id: string;
  founderName: string;
  company: string;
  industry: string;
  deploymentDate: Date;
  modulesActivated: string[];
  languageToggle: 'en' | 'es' | 'both';
  coachingOverlays: string[];
  roiMetrics: {
    costSavings?: number;
    revenueLift?: number;
    adoptionRate?: number;
    engagementScore?: number;
  };
  impactSummary: string;
  caseStudyStatus: 'drafting' | 'finalized' | 'published';
  visualAssets: string[];
  investorReady: boolean;
  tags: string[];
  region: string;
  headcount: number;
}

interface TrackerProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export function FounderDeploymentTracker({ language, onNavigate }: TrackerProps) {
  const [deployments, setDeployments] = useState<DeploymentRecord[]>([]);
  const [filteredDeployments, setFilteredDeployments] = useState<DeploymentRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<{
    status?: string;
    modules?: string[];
    region?: string;
    investorReady?: boolean;
  }>({});
  const [sortBy, setSortBy] = useState<'date' | 'impact' | 'founder'>('date');

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Mock deployment data
  useEffect(() => {
    const mockDeployments: DeploymentRecord[] = [
      {
        id: '001',
        founderName: 'Luis Dominguez',
        company: 'Strategic Business Consulting',
        industry: 'Professional Services',
        deploymentDate: new Date('2024-09-15'),
        modulesActivated: ['HCM', 'CRM', 'EPM'],
        languageToggle: 'both',
        coachingOverlays: ['HCM Elite Playbook', 'CRM Conversion Engine'],
        roiMetrics: {
          costSavings: 1200000,
          revenueLift: 3400000,
          adoptionRate: 87,
          engagementScore: 92
        },
        impactSummary: '$4.6M total impact, 87% adoption, schema-driven velocity',
        caseStudyStatus: 'finalized',
        visualAssets: ['dashboard-screenshot.png', 'metrics-animation.gif'],
        investorReady: true,
        tags: ['LATAM', 'Solo-Founder', 'Bilingual', 'High-Impact'],
        region: 'North America',
        headcount: 25
      },
      {
        id: '002',
        founderName: 'Maria Rodriguez',
        company: 'TechStart Innovations',
        industry: 'Technology',
        deploymentDate: new Date('2024-10-01'),
        modulesActivated: ['HCM', 'ERP'],
        languageToggle: 'es',
        coachingOverlays: ['HCM Elite Playbook', 'ERP Optimization Tips'],
        roiMetrics: {
          costSavings: 850000,
          revenueLift: 2100000,
          adoptionRate: 79,
          engagementScore: 88
        },
        impactSummary: '$2.95M total impact, Spanish-first deployment, operational excellence',
        caseStudyStatus: 'drafting',
        visualAssets: ['before-after.png'],
        investorReady: false,
        tags: ['Spanish-First', 'Tech', 'Efficiency'],
        region: 'LATAM',
        headcount: 45
      },
      {
        id: '003',
        founderName: 'James Chen',
        company: 'Growth Dynamics LLC',
        industry: 'Marketing',
        deploymentDate: new Date('2024-10-15'),
        modulesActivated: ['CRM', 'EPM'],
        languageToggle: 'en',
        coachingOverlays: ['CRM Conversion Engine'],
        roiMetrics: {
          costSavings: 650000,
          revenueLift: 1800000,
          adoptionRate: 94,
          engagementScore: 85
        },
        impactSummary: '$2.45M total impact, 94% adoption, pipeline acceleration',
        caseStudyStatus: 'published',
        visualAssets: ['case-study.pdf', 'linkedin-post.png', 'video-walkthrough.mp4'],
        investorReady: true,
        tags: ['Marketing', 'High-Adoption', 'Pipeline'],
        region: 'North America',
        headcount: 18
      }
    ];

    setDeployments(mockDeployments);
    setFilteredDeployments(mockDeployments);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = deployments;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(deployment => 
        deployment.founderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deployment.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deployment.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (activeFilters.status) {
      filtered = filtered.filter(deployment => deployment.caseStudyStatus === activeFilters.status);
    }

    // Investor ready filter
    if (activeFilters.investorReady !== undefined) {
      filtered = filtered.filter(deployment => deployment.investorReady === activeFilters.investorReady);
    }

    // Region filter
    if (activeFilters.region) {
      filtered = filtered.filter(deployment => deployment.region === activeFilters.region);
    }

    // Module filter
    if (activeFilters.modules && activeFilters.modules.length > 0) {
      filtered = filtered.filter(deployment => 
        activeFilters.modules!.some(module => deployment.modulesActivated.includes(module))
      );
    }

    // Sort
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => b.deploymentDate.getTime() - a.deploymentDate.getTime());
        break;
      case 'impact':
        filtered.sort((a, b) => {
          const impactA = (a.roiMetrics.costSavings || 0) + (a.roiMetrics.revenueLift || 0);
          const impactB = (b.roiMetrics.costSavings || 0) + (b.roiMetrics.revenueLift || 0);
          return impactB - impactA;
        });
        break;
      case 'founder':
        filtered.sort((a, b) => a.founderName.localeCompare(b.founderName));
        break;
    }

    setFilteredDeployments(filtered);
  }, [deployments, searchTerm, activeFilters, sortBy]);

  // Filter options
  const filterOptions = {
    status: [
      { value: 'drafting', label: t('Drafting', 'Borrando') },
      { value: 'finalized', label: t('Finalized', 'Finalizado') },
      { value: 'published', label: t('Published', 'Publicado') }
    ],
    modules: [
      { value: 'HCM', label: t('Human Capital Management', 'Gestión Capital Humano') },
      { value: 'ERP', label: t('Enterprise Resource Planning', 'Planificación Recursos Empresariales') },
      { value: 'EPM', label: t('Enterprise Performance Management', 'Gestión Desempeño Empresarial') },
      { value: 'CRM', label: t('Customer Relationship Management', 'Gestión Relaciones Clientes') }
    ],
    regions: [
      { value: 'North America', label: t('North America', 'Norteamérica') },
      { value: 'LATAM', label: t('Latin America', 'Latinoamérica') },
      { value: 'Europe', label: t('Europe', 'Europa') }
    ]
  };

  // Quick stats
  const stats = {
    total: deployments.length,
    investorReady: deployments.filter(d => d.investorReady).length,
    totalImpact: deployments.reduce((sum, d) => 
      sum + (d.roiMetrics.costSavings || 0) + (d.roiMetrics.revenueLift || 0), 0
    ),
    avgAdoption: deployments.reduce((sum, d) => sum + (d.roiMetrics.adoptionRate || 0), 0) / deployments.length
  };

  const formatCurrency = (amount: number) => {
    return `$${(amount / 1000000).toFixed(1)}M`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'drafting': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/40';
      case 'finalized': return 'bg-blue-600/20 text-blue-400 border-blue-600/40';
      case 'published': return 'bg-green-600/20 text-green-400 border-green-600/40';
      default: return 'bg-slate-600/20 text-slate-400 border-slate-600/40';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="px-6 lg:px-20 py-8 border-b border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {t('Founder Deployment Tracker', 'Rastreador de Despliegues de Fundador')}
            </h1>
            <p className="text-lg text-slate-300">
              {t(
                'Track every founder-led deployment as a cinematic case study',
                'Rastrea cada despliegue liderado por fundador como caso de estudio cinematográfico'
              )}
            </p>
          </div>
          <Button 
            onClick={() => onNavigate('founder-onboarding')}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('New Deployment', 'Nuevo Despliegue')}
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Total Deployments', 'Despliegues Totales')}</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <Target className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Investor Ready', 'Listo Inversionistas')}</p>
                <p className="text-2xl font-bold text-green-400">{stats.investorReady}</p>
              </div>
              <Star className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Total Impact', 'Impacto Total')}</p>
                <p className="text-2xl font-bold text-purple-400">{formatCurrency(stats.totalImpact)}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Avg Adoption', 'Adopción Promedio')}</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.avgAdoption.toFixed(0)}%</p>
              </div>
              <Activity className="w-8 h-8 text-yellow-400" />
            </div>
          </Card>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="px-6 lg:px-20 py-6 border-b border-slate-700">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t('Search founders, companies, industries...', 'Buscar fundadores, empresas, industrias...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-800 border border-slate-600 text-white px-3 py-2 rounded-lg"
          >
            <option value="date">{t('Sort by Date', 'Ordenar por Fecha')}</option>
            <option value="impact">{t('Sort by Impact', 'Ordenar por Impacto')}</option>
            <option value="founder">{t('Sort by Founder', 'Ordenar por Fundador')}</option>
          </select>

          {/* Filters */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                {t('Filters', 'Filtros')}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setActiveFilters({...activeFilters, investorReady: true})}>
                {t('Investor Ready Only', 'Solo Listos para Inversionistas')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveFilters({...activeFilters, status: 'published'})}>
                {t('Published Only', 'Solo Publicados')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveFilters({})}>
                {t('Clear Filters', 'Limpiar Filtros')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Active Filters */}
        {Object.keys(activeFilters).length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(activeFilters).map(([key, value]) => (
              value && (
                <Badge 
                  key={key} 
                  className="bg-blue-600/20 text-blue-400 border-blue-600/40 cursor-pointer"
                  onClick={() => setActiveFilters({...activeFilters, [key]: undefined})}
                >
                  {key}: {value.toString()} ×
                </Badge>
              )
            ))}
          </div>
        )}
      </div>

      {/* Deployment Table */}
      <div className="px-6 lg:px-20 py-6">
        <div className="space-y-4">
          {filteredDeployments.map((deployment) => (
            <Card key={deployment.id} className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{deployment.founderName}</h3>
                      <p className="text-slate-300">{deployment.company} • {deployment.industry}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(deployment.caseStudyStatus)}>
                        {deployment.caseStudyStatus.toUpperCase()}
                      </Badge>
                      {deployment.investorReady && (
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/40">
                          <Star className="w-3 h-3 mr-1" />
                          {t('INVESTOR READY', 'LISTO INVERSIONISTAS')}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid lg:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-900/20 rounded-lg">
                      <p className="text-sm text-slate-400">{t('Cost Savings', 'Ahorro Costos')}</p>
                      <p className="text-lg font-bold text-green-400">
                        {formatCurrency(deployment.roiMetrics.costSavings || 0)}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-slate-400">{t('Revenue Lift', 'Incremento Ingresos')}</p>
                      <p className="text-lg font-bold text-blue-400">
                        {formatCurrency(deployment.roiMetrics.revenueLift || 0)}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <p className="text-sm text-slate-400">{t('Adoption', 'Adopción')}</p>
                      <p className="text-lg font-bold text-purple-400">
                        {deployment.roiMetrics.adoptionRate}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-yellow-900/20 rounded-lg">
                      <p className="text-sm text-slate-400">{t('Engagement', 'Compromiso')}</p>
                      <p className="text-lg font-bold text-yellow-400">
                        {deployment.roiMetrics.engagementScore}%
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {deployment.deploymentDate.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {deployment.headcount} {t('employees', 'empleados')}
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {deployment.languageToggle === 'both' ? 'EN ↔ ES' : deployment.languageToggle.toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4" />
                      {deployment.region}
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deployment.modulesActivated.map(module => (
                      <Badge key={module} className="bg-slate-700 text-slate-300">
                        {module}
                      </Badge>
                    ))}
                  </div>

                  {/* Impact Summary */}
                  <p className="text-slate-300 italic">{deployment.impactSummary}</p>
                </div>

                {/* Actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      {t('View Details', 'Ver Detalles')}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      {t('Edit Case Study', 'Editar Caso Estudio')}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="w-4 h-4 mr-2" />
                      {t('Export PDF', 'Exportar PDF')}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="w-4 h-4 mr-2" />
                      {t('Share Case Study', 'Compartir Caso Estudio')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}

          {filteredDeployments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-400 mb-2">
                {t('No deployments found', 'No se encontraron despliegues')}
              </h3>
              <p className="text-slate-500 mb-6">
                {t(
                  'Start tracking founder-led deployments to build your case study library',
                  'Comienza a rastrear despliegues liderados por fundadores para construir tu biblioteca de casos de estudio'
                )}
              </p>
              <Button 
                onClick={() => onNavigate('founder-onboarding')}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('Create First Deployment', 'Crear Primer Despliegue')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}