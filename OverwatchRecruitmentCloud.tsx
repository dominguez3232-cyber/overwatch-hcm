import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  ArrowLeft, 
  Users, 
  Search, 
  Filter, 
  Download,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  Building2,
  Clock,
  UserCheck,
  UserX,
  UserPlus,
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Globe,
  MessageSquare,
  FileText,
  Eye,
  Settings,
  Zap
} from 'lucide-react';

// Import the recruitment cloud image
import recruitmentCloudImage from 'figma:asset/7115bfd4e0a567da45e85fcc4d878fdbf8ce0f84.png';

interface OverwatchRecruitmentCloudProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
  unifiedContext?: any;
}

export default function OverwatchRecruitmentCloud({
  language,
  currentMode,
  onNavigate,
  unifiedContext
}: OverwatchRecruitmentCloudProps) {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');

  // Mock recruitment data
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'Alex Rodriguez',
      recruiter: 'Maria Santos',
      position: 'Marketing Manager',
      status: 'new',
      cv: 'alex_rodriguez_cv.pdf',
      phone: '+1-555-0123',
      email: 'alex.rodriguez@email.com',
      linkedinUrl: 'linkedin.com/in/alexrodriguez',
      currentCompany: 'TechCorp Inc.',
      pastCompanies: 'StartupXYZ, InnovateLab',
      yearsExperience: 5,
      submissionDate: '2024-01-15',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sofia Chen',
      recruiter: 'Carlos Lopez',
      position: 'Sales Manager',
      status: 'in-progress',
      cv: 'sofia_chen_cv.pdf',
      phone: '+1-555-0124',
      email: 'sofia.chen@email.com',
      linkedinUrl: 'linkedin.com/in/sofiachen',
      currentCompany: 'SalesForce Solutions',
      pastCompanies: 'Revenue Inc., Growth Partners',
      yearsExperience: 7,
      submissionDate: '2024-01-12',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      recruiter: 'Ana Garcia',
      position: 'Marketing Manager',
      status: 'hired',
      cv: 'marcus_johnson_cv.pdf',
      phone: '+1-555-0125',
      email: 'marcus.johnson@email.com',
      linkedinUrl: 'linkedin.com/in/marcusjohnson',
      currentCompany: 'Brand Masters Co.',
      pastCompanies: 'Creative Agency, Digital Solutions',
      yearsExperience: 6,
      submissionDate: '2024-01-10',
      avatar: '👨‍🎨'
    },
    {
      id: 4,
      name: 'Isabella Martinez',
      recruiter: 'Roberto Silva',
      position: 'Sales Manager',
      status: 'rejected',
      cv: 'isabella_martinez_cv.pdf',
      phone: '+1-555-0126',
      email: 'isabella.martinez@email.com',
      linkedinUrl: 'linkedin.com/in/isabellamartinez',
      currentCompany: 'Enterprise Sales Ltd.',
      pastCompanies: 'Business Development Co.',
      yearsExperience: 4,
      submissionDate: '2024-01-08',
      avatar: '👩‍💻'
    }
  ]);

  // Recruitment metrics
  const [metrics, setMetrics] = useState({
    totalCandidates: 47,
    newApplicants: 12,
    inProgress: 18,
    hired: 8,
    rejected: 9,
    averageTimeToHire: 14,
    hireRate: 72.3,
    candidateSourceEfficiency: 89.1
  });

  // Filter candidates based on search and filters
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = searchQuery === '' || 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.recruiter.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || candidate.status === statusFilter;
    const matchesPosition = positionFilter === 'all' || candidate.position === positionFilter;
    
    return matchesSearch && matchesStatus && matchesPosition;
  });

  // Get status badge props
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return { variant: 'secondary' as const, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: language === 'en' ? 'New' : 'Nuevo' };
      case 'in-progress':
        return { variant: 'secondary' as const, color: 'bg-orange-500/20 text-orange-400 border-orange-500/30', label: language === 'en' ? 'In Progress' : 'En Progreso' };
      case 'hired':
        return { variant: 'secondary' as const, color: 'bg-green-500/20 text-green-400 border-green-500/30', label: language === 'en' ? 'Hired' : 'Contratado' };
      case 'rejected':
        return { variant: 'secondary' as const, color: 'bg-red-500/20 text-red-400 border-red-500/30', label: language === 'en' ? 'Rejected' : 'Rechazado' };
      default:
        return { variant: 'secondary' as const, color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', label: status };
    }
  };

  // Pipeline stages
  const pipelineStages = [
    {
      id: 'new',
      name: language === 'en' ? 'New Applicants' : 'Nuevos Candidatos',
      count: candidates.filter(c => c.status === 'new').length,
      color: 'blue',
      icon: <UserPlus className="w-5 h-5" />
    },
    {
      id: 'in-progress',
      name: language === 'en' ? 'In Progress' : 'En Progreso',
      count: candidates.filter(c => c.status === 'in-progress').length,
      color: 'orange',
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 'hired',
      name: language === 'en' ? 'Hired' : 'Contratados',
      count: candidates.filter(c => c.status === 'hired').length,
      color: 'green',
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      id: 'rejected',
      name: language === 'en' ? 'Rejected' : 'Rechazados',
      count: candidates.filter(c => c.status === 'rejected').length,
      color: 'red',
      icon: <UserX className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onNavigate('unified-command-center')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Back to Command Center' : 'Volver al Centro de Comando'}
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    {language === 'en' ? 'Recruitment Cloud' : 'Nube de Reclutamiento'}
                  </h1>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Advanced talent acquisition platform with intelligent candidate management and pipeline optimization'
                      : 'Plataforma avanzada de adquisición de talento con gestión inteligente de candidatos y optimización de pipeline'
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  {metrics.totalCandidates} {language === 'en' ? 'active candidates' : 'candidatos activos'}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {metrics.hireRate}% {language === 'en' ? 'hire rate' : 'tasa contratación'}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {currentMode} {language === 'en' ? 'mode' : 'modo'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 gap-1 mb-8">
            <TabsTrigger value="pipeline" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Pipeline' : 'Pipeline'}</span>
            </TabsTrigger>
            <TabsTrigger value="candidates" className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Candidates' : 'Candidatos'}</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Analytics' : 'Analíticas'}</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Insights' : 'Insights'}</span>
            </TabsTrigger>
            <TabsTrigger value="live-system" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="hidden lg:inline">{language === 'en' ? 'Live System' : 'Sistema en Vivo'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-8">
            {/* Pipeline Overview */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Recruitment Pipeline' : 'Pipeline de Reclutamiento'}
              </h2>
              
              {/* Pipeline Stages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pipelineStages.map((stage) => (
                  <Card key={stage.id} className="command-center-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg bg-${stage.color}-500/10 text-${stage.color}-400`}>
                          {stage.icon}
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-${stage.color}-400 border-${stage.color}-500/30`}
                        >
                          {stage.count}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">{stage.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {language === 'en' 
                          ? `${stage.count} candidates in this stage`
                          : `${stage.count} candidatos en esta etapa`
                        }
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder={language === 'en' ? 'Search candidates...' : 'Buscar candidatos...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder={language === 'en' ? 'Status' : 'Estado'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === 'en' ? 'All Status' : 'Todos los Estados'}</SelectItem>
                    <SelectItem value="new">{language === 'en' ? 'New' : 'Nuevo'}</SelectItem>
                    <SelectItem value="in-progress">{language === 'en' ? 'In Progress' : 'En Progreso'}</SelectItem>
                    <SelectItem value="hired">{language === 'en' ? 'Hired' : 'Contratado'}</SelectItem>
                    <SelectItem value="rejected">{language === 'en' ? 'Rejected' : 'Rechazado'}</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={positionFilter} onValueChange={setPositionFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Building2 className="w-4 h-4 mr-2" />
                    <SelectValue placeholder={language === 'en' ? 'Position' : 'Posición'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === 'en' ? 'All Positions' : 'Todas las Posiciones'}</SelectItem>
                    <SelectItem value="Marketing Manager">{language === 'en' ? 'Marketing Manager' : 'Gerente de Marketing'}</SelectItem>
                    <SelectItem value="Sales Manager">{language === 'en' ? 'Sales Manager' : 'Gerente de Ventas'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Candidates List */}
              <div className="space-y-4">
                {filteredCandidates.map((candidate) => {
                  const statusBadge = getStatusBadge(candidate.status);
                  return (
                    <Card key={candidate.id} className="command-center-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="text-3xl">{candidate.avatar}</div>
                            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 flex-1">
                              <div className="lg:col-span-1">
                                <div className="font-medium text-foreground">{candidate.name}</div>
                                <div className="text-sm text-muted-foreground">{candidate.recruiter}</div>
                              </div>
                              <div className="lg:col-span-1">
                                <div className="text-sm font-medium">{candidate.position}</div>
                                <Badge className={statusBadge.color} variant={statusBadge.variant}>
                                  {statusBadge.label}
                                </Badge>
                              </div>
                              <div className="lg:col-span-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <FileText className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-blue-400 hover:underline cursor-pointer">
                                    {candidate.cv}
                                  </span>
                                </div>
                              </div>
                              <div className="lg:col-span-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <Phone className="w-4 h-4 text-muted-foreground" />
                                  <span>{candidate.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Mail className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-blue-400 hover:underline cursor-pointer">
                                    {candidate.email}
                                  </span>
                                </div>
                              </div>
                              <div className="lg:col-span-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-blue-400 hover:underline cursor-pointer">
                                    LinkedIn
                                  </span>
                                </div>
                              </div>
                              <div className="lg:col-span-2">
                                <div className="text-sm">
                                  <span className="font-medium">{candidate.currentCompany}</span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {candidate.pastCompanies}
                                </div>
                              </div>
                              <div className="lg:col-span-1 text-right">
                                <div className="text-sm font-medium">
                                  {candidate.yearsExperience} {language === 'en' ? 'years' : 'años'}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {new Date(candidate.submissionDate).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Candidate Management' : 'Gestión de Candidatos'}
              </h2>
              
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Advanced candidate management tools coming soon...'
                    : 'Herramientas avanzadas de gestión de candidatos próximamente...'
                  }
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Recruitment Analytics' : 'Analíticas de Reclutamiento'}
              </h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{metrics.averageTimeToHire}</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Avg. Days to Hire' : 'Días Prom. Contratación'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">{metrics.hireRate}%</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Hire Rate' : 'Tasa Contratación'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{metrics.candidateSourceEfficiency}%</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Source Efficiency' : 'Eficiencia Fuentes'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="command-center-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{metrics.totalCandidates}</div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Total Candidates' : 'Total Candidatos'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Recruitment Insights' : 'Insights de Reclutamiento'}
              </h2>
              
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  {language === 'en' 
                    ? 'AI-powered recruitment insights and recommendations coming soon...'
                    : 'Insights y recomendaciones de reclutamiento con IA próximamente...'
                  }
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="live-system" className="space-y-8">
            {/* Live Recruitment System */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Live Recruitment System' : 'Sistema de Reclutamiento en Vivo'}
              </h2>
              
              <Card className="command-center-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full">
                    <img 
                      src={recruitmentCloudImage}
                      alt={language === 'en' ? 'Recruitment Cloud Interface' : 'Interfaz de Nube de Reclutamiento'}
                      className="w-full h-auto object-contain bg-black"
                      style={{ maxHeight: '800px' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}