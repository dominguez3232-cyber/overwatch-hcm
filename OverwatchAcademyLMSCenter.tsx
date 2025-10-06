import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Target, 
  TrendingUp,
  Clock,
  CheckCircle,
  Lock,
  Play,
  Award,
  Users,
  BarChart3,
  Zap,
  Star,
  ArrowRight,
  Download,
  Share2,
  Settings,
  LogOut,
  Home
} from 'lucide-react';

// Import the original Figma LMS as base
import OverwatchLmsOriginal from '../imports/OverwatchLms-273-1010';

interface OverwatchAcademyLMSCenterProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

// Training Module Data Structure
interface TrainingModule {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  lessons: number;
  duration: string;
  progress: number;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  price?: number;
  thumbnail: string;
  tags: string[];
  instructor: string;
  rating: number;
  enrollment: number;
  certification: boolean;
}

const trainingModules: TrainingModule[] = [
  {
    id: 'strategic-hr-foundations',
    title: 'Strategic HR Foundations',
    description: 'From Cost Center to Command Center',
    category: 'HR Strategy',
    level: 'Beginner',
    lessons: 8,
    duration: '4h 30min',
    progress: 100,
    status: 'completed',
    thumbnail: '/api/placeholder/400/200',
    tags: ['Strategy', 'Leadership', 'Transformation'],
    instructor: 'Luis Dominguez',
    rating: 4.9,
    enrollment: 2847,
    certification: true
  },
  {
    id: 'business-lifecycle-framework',
    title: 'Business Lifecycle Framework',
    description: 'Strategic HCM Through Growth Stages',
    category: 'Business Planning',
    level: 'Intermediate',
    lessons: 6,
    duration: '3h 45min',
    progress: 65,
    status: 'in-progress',
    thumbnail: '/api/placeholder/400/200',
    tags: ['Growth', 'Planning', 'Framework'],
    instructor: 'Maria Rodriguez',
    rating: 4.8,
    enrollment: 1923,
    certification: true
  },
  {
    id: 'industry-specific-challenges',
    title: 'Industry-Specific HCM Challenges',
    description: 'Manufacturing, Engineering & Professional Services',
    category: 'Industry Focus',
    level: 'Intermediate',
    lessons: 10,
    duration: '6h 20min',
    progress: 0,
    status: 'available',
    price: 250,
    thumbnail: '/api/placeholder/400/200',
    tags: ['Industry', 'Manufacturing', 'Engineering'],
    instructor: 'Carlos Mendez',
    rating: 4.7,
    enrollment: 1456,
    certification: true
  },
  {
    id: 'company-type-profiles',
    title: 'Company Type Profiles',
    description: 'VC, PE, Family & Entrepreneur-Led Strategies',
    category: 'Investment',
    level: 'Intermediate',
    lessons: 7,
    duration: '4h 15min',
    progress: 0,
    status: 'available',
    price: 250,
    thumbnail: '/api/placeholder/400/200',
    tags: ['VC', 'PE', 'Strategy'],
    instructor: 'Ana Sofia',
    rating: 4.9,
    enrollment: 987,
    certification: true
  },
  {
    id: 'risk-management-compliance',
    title: 'Risk Management & Compliance',
    description: 'Enterprise Risk to Strategic Protection',
    category: 'Compliance',
    level: 'Advanced',
    lessons: 8,
    duration: '5h 10min',
    progress: 0,
    status: 'available',
    price: 250,
    thumbnail: '/api/placeholder/400/200',
    tags: ['Risk', 'Compliance', 'Protection'],
    instructor: 'Roberto Silva',
    rating: 4.8,
    enrollment: 765,
    certification: true
  },
  {
    id: 'culture-strategic-lever',
    title: 'Culture as Strategic Lever',
    description: 'Design vs Default Culture Engineering',
    category: 'Culture',
    level: 'Expert',
    lessons: 9,
    duration: '5h 30min',
    progress: 0,
    status: 'locked',
    price: 250,
    thumbnail: '/api/placeholder/400/200',
    tags: ['Culture', 'Engineering', 'Design'],
    instructor: 'Elena Vasquez',
    rating: 4.9,
    enrollment: 543,
    certification: true
  }
];

// Certificate Data
interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  modules: number;
  credentialId: string;
  icon: string;
}

const certificates: Certificate[] = [
  {
    id: 'expert-ecommerce',
    title: 'Expert E-commerce',
    issueDate: '2025-01-15',
    modules: 6,
    credentialId: 'OW3-EC-2025-001',
    icon: '🏆'
  },
  {
    id: 'master-seo',
    title: 'Maître SEO',
    issueDate: '2025-01-10',
    modules: 4,
    credentialId: 'OW3-SEO-2025-001',
    icon: '🎯'
  },
  {
    id: 'copywriter-certified',
    title: 'Copywriter Certifié',
    issueDate: '2025-01-05',
    modules: 5,
    credentialId: 'OW3-CW-2025-001',
    icon: '✍️'
  }
];

export function OverwatchAcademyLMSCenter({ 
  language, 
  onNavigate,
  currentMode = 'founder' 
}: OverwatchAcademyLMSCenterProps) {
  const [currentView, setCurrentView] = useState<'dashboard' | 'modules' | 'certificates' | 'progress' | 'figma-lms'>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);

  // Calculate user stats
  const userStats = useMemo(() => {
    const completedModules = trainingModules.filter(m => m.status === 'completed').length;
    const inProgressModules = trainingModules.filter(m => m.status === 'in-progress').length;
    const totalModules = trainingModules.length;
    const globalProgress = Math.round((completedModules / totalModules) * 100);
    const totalHours = trainingModules
      .filter(m => m.status === 'completed' || m.status === 'in-progress')
      .reduce((acc, m) => {
        const hours = parseFloat(m.duration.replace(/[^\d.]/g, ''));
        return acc + (m.status === 'completed' ? hours : hours * (m.progress / 100));
      }, 0);
    
    return {
      globalProgress,
      completedModules,
      inProgressModules,
      totalModules,
      totalHours: Math.round(totalHours),
      certificates: certificates.length
    };
  }, []);

  const categories = ['all', 'HR Strategy', 'Business Planning', 'Industry Focus', 'Investment', 'Compliance', 'Culture'];

  const filteredModules = selectedCategory === 'all' 
    ? trainingModules 
    : trainingModules.filter(m => m.category === selectedCategory);

  const text = {
    en: {
      title: 'OVERWATCH³ Academy',
      subtitle: 'Strategic Training & Certification Center',
      dashboard: 'Dashboard',
      modules: 'Training Modules',
      certificates: 'Certificates',
      progress: 'Progress',
      globalProgress: 'Global Progress',
      completedModules: 'Modules Completed',
      learningTime: 'Learning Time',
      certificatesEarned: 'Certificates Earned',
      nextObjective: 'Next Objective',
      nextObjectiveDesc: 'Only 5 more modules to unlock the "Strategic Leader" certificate',
      recentModules: 'Recent Modules',
      viewAll: 'View All',
      continue: 'Continue',
      start: 'Start',
      unlock: 'Unlock',
      completed: 'Completed',
      inProgress: 'In Progress',
      locked: 'Locked',
      lessons: 'lessons',
      figmaLms: 'Original LMS',
      backToPlatform: 'Back to Platform'
    },
    es: {
      title: 'Academia OVERWATCH³',
      subtitle: 'Centro de Capacitación y Certificación Estratégica',
      dashboard: 'Panel',
      modules: 'Módulos de Entrenamiento',
      certificates: 'Certificados',
      progress: 'Progreso',
      globalProgress: 'Progreso Global',
      completedModules: 'Módulos Completados',
      learningTime: 'Tiempo de Aprendizaje',
      certificatesEarned: 'Certificados Obtenidos',
      nextObjective: 'Próximo Objetivo',
      nextObjectiveDesc: 'Solo 5 módulos más para desbloquear el certificado "Líder Estratégico"',
      recentModules: 'Módulos Recientes',
      viewAll: 'Ver Todo',
      continue: 'Continuar',
      start: 'Iniciar',
      unlock: 'Desbloquear',
      completed: 'Completado',
      inProgress: 'En Progreso',
      locked: 'Bloqueado',
      lessons: 'lecciones',
      figmaLms: 'LMS Original',
      backToPlatform: 'Volver a Plataforma'
    }
  };

  const t = text[language];

  // Handle module interaction
  const handleModuleClick = (module: TrainingModule) => {
    if (module.status === 'locked') return;
    
    if (module.status === 'available' && module.price) {
      // Handle purchase logic
      console.log(`Purchase module: ${module.id} for $${module.price}`);
    } else {
      // Start or continue module
      setSelectedModule(module);
      console.log(`${module.status === 'completed' ? 'Review' : 'Start/Continue'} module: ${module.id}`);
    }
  };

  // Render module card
  const ModuleCard = ({ module }: { module: TrainingModule }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge 
                variant={module.status === 'completed' ? 'default' : 
                        module.status === 'in-progress' ? 'secondary' : 
                        module.status === 'locked' ? 'outline' : 'secondary'}
                className="text-xs"
              >
                {module.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                {module.status === 'in-progress' && <Play className="w-3 h-3 mr-1" />}
                {module.status === 'locked' && <Lock className="w-3 h-3 mr-1" />}
                {t[module.status as keyof typeof t] || module.status}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {module.level}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            {module.certification && (
              <div className="absolute top-4 right-4">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
            )}
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {module.description}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>{module.lessons} {t.lessons}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{module.rating}</span>
              </div>
            </div>
            
            {module.status === 'in-progress' && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.progress}</span>
                  <span className="text-foreground font-medium">{module.progress}%</span>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>
            )}
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs">
                    {module.instructor.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{module.instructor}</span>
              </div>
              
              <Button
                onClick={() => handleModuleClick(module)}
                disabled={module.status === 'locked'}
                variant={module.status === 'completed' ? 'outline' : 'default'}
                size="sm"
                className="min-w-[80px]"
              >
                {module.status === 'locked' && <Lock className="w-3 h-3 mr-1" />}
                {module.status === 'available' && module.price && `$${module.price}`}
                {module.status === 'in-progress' && t.continue}
                {module.status === 'completed' && 'Review'}
                {module.status === 'available' && !module.price && t.start}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (currentView === 'figma-lms') {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView('dashboard')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                Back to Enhanced LMS
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div>
                <h1 className="text-xl font-bold text-foreground">{t.figmaLms}</h1>
                <p className="text-sm text-muted-foreground">Original Figma Import</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('platform-navigator')}
            >
              <Home className="w-4 h-4 mr-2" />
              {t.backToPlatform}
            </Button>
          </div>
        </div>
        <OverwatchLmsOriginal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('platform-navigator')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
              Platform
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h1 className="text-xl font-bold text-foreground">{t.title}</h1>
              <p className="text-sm text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              Luis Dominguez
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentView('figma-lms')}
              className="text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              {t.figmaLms}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as any)} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                {t.dashboard}
              </TabsTrigger>
              <TabsTrigger value="modules" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {t.modules}
              </TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                {t.certificates}
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {t.progress}
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {userStats.globalProgress}%
                    </div>
                    <div className="text-sm text-muted-foreground">{t.globalProgress}</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {userStats.completedModules}/{userStats.totalModules}
                    </div>
                    <div className="text-sm text-muted-foreground">{t.completedModules}</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {userStats.totalHours}h
                    </div>
                    <div className="text-sm text-muted-foreground">{t.learningTime}</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {userStats.certificates}
                    </div>
                    <div className="text-sm text-muted-foreground">{t.certificatesEarned}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Objective */}
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{t.nextObjective}</h3>
                        <p className="text-muted-foreground">{t.nextObjectiveDesc}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      {t.viewAll}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Modules */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">{t.recentModules}</h2>
                  <Button 
                    variant="ghost" 
                    onClick={() => setCurrentView('modules')}
                    className="text-primary hover:text-primary/80"
                  >
                    {t.viewAll}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainingModules.slice(0, 3).map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Modules Tab */}
            <TabsContent value="modules" className="space-y-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                  {filteredModules.map((module) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ModuleCard module={module} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{cert.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">{cert.modules} modules • {cert.issueDate}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Learning Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t.globalProgress}</span>
                      <span className="text-foreground font-medium">{userStats.globalProgress}%</span>
                    </div>
                    <Progress value={userStats.globalProgress} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400 mb-1">{userStats.completedModules}</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{userStats.inProgressModules}</div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </div>
                    <div className="text-center p-4 bg-gray-500/10 rounded-lg border border-gray-500/20">
                      <div className="text-2xl font-bold text-gray-400 mb-1">
                        {userStats.totalModules - userStats.completedModules - userStats.inProgressModules}
                      </div>
                      <div className="text-sm text-muted-foreground">Remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default OverwatchAcademyLMSCenter;