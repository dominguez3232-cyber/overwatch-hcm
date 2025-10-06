import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useToast } from './ui/use-toast';
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
  Home,
  ExternalLink,
  Brain,
  Lightbulb,
  Shield,
  Briefcase
} from 'lucide-react';

// Import the original Figma LMS as base
import OverwatchLmsOriginal from '../imports/OverwatchLms-273-1010';
import { certificateService, type CertificateData, type LearnerProfile } from '../utils/certificateService';

interface OverwatchAcademyIntegratedProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

// Enhanced Training Module Data Structure
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
  overwatchModule?: string; // Link to OVERWATCH³ modules
  prerequisites?: string[];
  learningOutcomes: string[];
  roiMetrics?: {
    clarityIndex: string;
    velocityIncrease: string;
    riskReduction: string;
  };
}

const trainingModules: TrainingModule[] = [
  {
    id: 'strategic-hr-foundations',
    title: 'Strategic HR Foundations',
    description: 'From Cost Center to Command Center - Transform HR into strategic business intelligence',
    category: 'HRIS Strategy',
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
    certification: true,
    overwatchModule: 'hris-dashboard',
    learningOutcomes: [
      'Transform HR from cost center to strategic command center',
      'Implement Force Multiplier methodology',
      'Build cultural intelligence frameworks',
      'Develop bilingual-first HR strategies'
    ],
    roiMetrics: {
      clarityIndex: '40% increase in decision velocity',
      velocityIncrease: '12x faster time-to-decision',
      riskReduction: '1/3 reduction in strategic risk'
    }
  },
  {
    id: 'business-lifecycle-framework',
    title: 'Business Lifecycle Framework',
    description: 'Strategic HCM Through Growth Stages - Navigate startup to scale-up transitions',
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
    certification: true,
    overwatchModule: 'integrated-planning-execution',
    prerequisites: ['strategic-hr-foundations'],
    learningOutcomes: [
      'Map business lifecycle stages to HCM strategies',
      'Design growth-stage specific org structures',
      'Implement scalable people processes',
      'Navigate equity and compensation frameworks'
    ],
    roiMetrics: {
      clarityIndex: '60% improvement in growth planning accuracy',
      velocityIncrease: '3x faster scaling decisions',
      riskReduction: '50% reduction in scaling failures'
    }
  },
  {
    id: 'industry-specific-challenges',
    title: 'Industry-Specific HCM Challenges',
    description: 'Manufacturing, Engineering & Professional Services optimization strategies',
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
    certification: true,
    overwatchModule: 'crm-intelligence',
    prerequisites: ['business-lifecycle-framework'],
    learningOutcomes: [
      'Industry-specific talent acquisition strategies',
      'Regulatory compliance frameworks',
      'Sector-specific performance metrics',
      'Cross-border operations management'
    ]
  },
  {
    id: 'mckinseys-big-moves',
    title: 'McKinsey\'s Big Moves for Decision Velocity',
    description: 'Investment Decision Intelligence using McKinsey\'s 5 Big Moves Framework',
    category: 'Decision Intelligence',
    level: 'Advanced',
    lessons: 12,
    duration: '8h 45min',
    progress: 0,
    status: 'available',
    price: 450,
    thumbnail: '/api/placeholder/400/200',
    tags: ['McKinsey', 'Decision Intelligence', 'Investment'],
    instructor: 'Dr. Patricia Chen',
    rating: 4.9,
    enrollment: 543,
    certification: true,
    overwatchModule: 'decision-models-center',
    prerequisites: ['strategic-hr-foundations', 'business-lifecycle-framework'],
    learningOutcomes: [
      'Master McKinsey\'s 5 Big Moves framework',
      'Eliminate founder decision fear',
      '40:12:1 ROI decision intelligence',
      'Strategic investment optimization'
    ],
    roiMetrics: {
      clarityIndex: '40x decision velocity improvement',
      velocityIncrease: '12x faster investment decisions',
      riskReduction: '1/3 reduction in investment risk'
    }
  },
  {
    id: 'culture-strategic-lever',
    title: 'Culture as Strategic Lever',
    description: 'Design vs Default Culture Engineering - Build competitive moats through culture',
    category: 'Culture Strategy',
    level: 'Expert',
    lessons: 9,
    duration: '5h 30min',
    progress: 0,
    status: 'locked',
    price: 350,
    thumbnail: '/api/placeholder/400/200',
    tags: ['Culture', 'Engineering', 'Design'],
    instructor: 'Elena Vasquez',
    rating: 4.9,
    enrollment: 543,
    certification: true,
    overwatchModule: 'unified-command-center',
    prerequisites: ['mckinseys-big-moves'],
    learningOutcomes: [
      'Design intentional vs default cultures',
      'Culture as Force Multiplier strategy',
      'Bilingual-first cultural frameworks',
      'Cross-border culture integration'
    ]
  }
];

export function OverwatchAcademyIntegrated({ 
  language, 
  onNavigate,
  currentMode = 'founder' 
}: OverwatchAcademyIntegratedProps) {
  const [currentView, setCurrentView] = useState<'dashboard' | 'modules' | 'certificates' | 'progress' | 'figma-lms'>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [userCertificates, setUserCertificates] = useState<CertificateData[]>([]);
  const [learnerProfile, setLearnerProfile] = useState<LearnerProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModuleDialog, setShowModuleDialog] = useState(false);
  const { toast } = useToast();

  // Initialize learner profile and certificates
  useEffect(() => {
    const initializeAcademy = async () => {
      try {
        setIsLoading(true);
        
        // Try to get existing learner profile
        const learnerId = 'demo-learner-luis'; // In real app, this would be from auth
        
        try {
          const { learner } = await certificateService.getLearner(learnerId);
          setLearnerProfile(learner);
        } catch (error) {
          // Create new learner if doesn't exist
          const newLearner = {
            id: learnerId,
            name: 'Luis Dominguez',
            email: 'luis@overwatch3.com',
            preferredLanguage: language,
            completedModules: ['strategic-hr-foundations'],
            metrics: {
              totalModulesCompleted: 1,
              averageScore: 95,
              totalLearningTime: 270, // 4.5 hours in minutes
            },
          };
          
          const { learner } = await certificateService.createOrUpdateLearner(newLearner);
          setLearnerProfile(learner);
        }

        // Get user certificates
        try {
          const { certificates } = await certificateService.getLearnerCertificates(learnerId);
          setUserCertificates(certificates);
        } catch (error) {
          console.log('No certificates found yet');
          setUserCertificates([]);
        }

      } catch (error) {
        console.error('Error initializing academy:', error);
        toast({
          title: "Initialization Error",
          description: "Some features may be limited. Please refresh to try again.",
          type: 'warning'
        });
      } finally {
        setIsLoading(false);
      }
    };

    initializeAcademy();
  }, [language]);

  // Calculate user stats
  const userStats = useMemo(() => {
    if (!learnerProfile) {
      return {
        globalProgress: 0,
        completedModules: 0,
        inProgressModules: 0,
        totalModules: trainingModules.length,
        totalHours: 0,
        certificates: 0
      };
    }

    const completedModules = trainingModules.filter(m => 
      learnerProfile.completedModules.includes(m.id)
    ).length;
    const inProgressModules = trainingModules.filter(m => m.status === 'in-progress').length;
    const totalModules = trainingModules.length;
    const globalProgress = Math.round((completedModules / totalModules) * 100);
    
    return {
      globalProgress,
      completedModules,
      inProgressModules,
      totalModules,
      totalHours: Math.round(learnerProfile.metrics.totalLearningTime / 60),
      certificates: userCertificates.length
    };
  }, [learnerProfile, userCertificates]);

  const categories = ['all', 'HRIS Strategy', 'Business Planning', 'Industry Focus', 'Decision Intelligence', 'Culture Strategy'];

  const filteredModules = selectedCategory === 'all' 
    ? trainingModules 
    : trainingModules.filter(m => m.category === selectedCategory);

  const text = {
    en: {
      title: 'OVERWATCH³ Academy',
      subtitle: 'Advisory-Grade Strategic Training & Certification Center',
      dashboard: 'Dashboard',
      modules: 'Training Modules',
      certificates: 'Certificates',
      progress: 'Progress',
      globalProgress: 'Global Progress',
      completedModules: 'Modules Completed',
      learningTime: 'Learning Time',
      certificatesEarned: 'Certificates Earned',
      nextObjective: 'Next Objective',
      nextObjectiveDesc: 'Complete McKinsey\'s Big Moves to unlock Strategic Leadership certification',
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
      backToPlatform: 'Back to Platform',
      launchModule: 'Launch in OVERWATCH³',
      learningOutcomes: 'Learning Outcomes',
      roiMetrics: 'ROI Metrics',
      prerequisites: 'Prerequisites',
      enrollNow: 'Enroll Now',
      generateCertificate: 'Generate Certificate'
    },
    es: {
      title: 'Academia OVERWATCH³',
      subtitle: 'Centro de Capacitación y Certificación Estratégica Grado Asesor',
      dashboard: 'Panel',
      modules: 'Módulos de Entrenamiento',
      certificates: 'Certificados',
      progress: 'Progreso',
      globalProgress: 'Progreso Global',
      completedModules: 'Módulos Completados',
      learningTime: 'Tiempo de Aprendizaje',
      certificatesEarned: 'Certificados Obtenidos',
      nextObjective: 'Próximo Objetivo',
      nextObjectiveDesc: 'Completa Big Moves de McKinsey para desbloquear certificación de Liderazgo Estratégico',
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
      backToPlatform: 'Volver a Plataforma',
      launchModule: 'Lanzar en OVERWATCH³',
      learningOutcomes: 'Resultados de Aprendizaje',
      roiMetrics: 'Métricas ROI',
      prerequisites: 'Prerrequisitos',
      enrollNow: 'Inscribirse Ahora',
      generateCertificate: 'Generar Certificado'
    }
  };

  const t = text[language];

  // Handle module interaction
  const handleModuleClick = (module: TrainingModule) => {
    if (module.status === 'locked') {
      toast({
        title: "Module Locked",
        description: "Complete prerequisites to unlock this module.",
        type: 'warning'
      });
      return;
    }
    
    setSelectedModule(module);
    setShowModuleDialog(true);
  };

  // Handle module launch in OVERWATCH³
  const handleLaunchModule = (module: TrainingModule) => {
    if (module.overwatchModule) {
      setShowModuleDialog(false);
      onNavigate(module.overwatchModule);
      toast({
        title: "Launching Module",
        description: `Opening ${module.title} in OVERWATCH³ platform`,
        type: 'success'
      });
    }
  };

  // Handle certificate generation
  const handleGenerateCertificate = async (moduleId: string) => {
    try {
      if (!learnerProfile) return;
      
      const { certificate } = await certificateService.generateCertificate(moduleId, learnerProfile.id);
      
      // Update certificates list
      setUserCertificates(prev => [...prev, certificate]);
      
      toast({
        title: "Certificate Generated!",
        description: `Your ${certificate.moduleTitle} certificate is ready for download.`,
        type: 'success'
      });
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast({
        title: "Certificate Error",
        description: "Unable to generate certificate. Please try again.",
        type: 'error'
      });
    }
  };

  // Get status color for modules
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'available': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'locked': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'HRIS Strategy': return <Users className="w-4 h-4" />;
      case 'Business Planning': return <BarChart3 className="w-4 h-4" />;
      case 'Industry Focus': return <Briefcase className="w-4 h-4" />;
      case 'Decision Intelligence': return <Brain className="w-4 h-4" />;
      case 'Culture Strategy': return <Lightbulb className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  // Render module card
  const ModuleCard = ({ module }: { module: TrainingModule }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={() => handleModuleClick(module)}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={`text-xs ${getStatusColor(module.status)}`}>
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
                {getCategoryIcon(module.category)}
              </div>
            </div>
            {module.certification && (
              <div className="absolute top-4 right-4">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
            )}
            {module.overwatchModule && (
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  Live
                </Badge>
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
                  <span className="text-muted-foreground">Progress</span>
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
                variant={module.status === 'completed' ? 'outline' : 'default'}
                size="sm"
                className="min-w-[80px]"
                disabled={module.status === 'locked'}
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Loading Academy...' : 'Cargando Academia...'}
          </p>
        </div>
      </div>
    );
  }

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
              {learnerProfile?.name || 'Luis Dominguez'}
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
                    <Button 
                      variant="outline" 
                      className="shrink-0"
                      onClick={() => setCurrentView('modules')}
                    >
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
                    {category !== 'all' && getCategoryIcon(category)}
                    <span className={category !== 'all' ? 'ml-2' : ''}>{category}</span>
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
                {userCertificates.length > 0 ? (
                  userCertificates.map((cert) => (
                    <Card key={cert.certificateId} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{cert.moduleTitle}</h3>
                            <p className="text-sm text-muted-foreground">{cert.completionDate}</p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="text-xs text-muted-foreground">ROI Metrics:</div>
                          <div className="text-xs space-y-1">
                            <div>Clarity: <span className="text-green-400">{cert.metrics.clarityIndex}</span></div>
                            <div>Confidence: <span className="text-blue-400">{cert.metrics.confidenceLift}</span></div>
                            <div>Speed: <span className="text-purple-400">{cert.metrics.executionSpeed}</span></div>
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
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Certificates Yet</h3>
                    <p className="text-muted-foreground mb-6">Complete modules to earn your first certificate</p>
                    <Button onClick={() => setCurrentView('modules')}>
                      Browse Modules
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
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

                  {learnerProfile && (
                    <div className="bg-card/30 p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Performance Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{learnerProfile.metrics.averageScore}%</div>
                          <div className="text-xs text-muted-foreground">Avg Score</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{Math.round(learnerProfile.metrics.totalLearningTime / 60)}h</div>
                          <div className="text-xs text-muted-foreground">Total Time</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{learnerProfile.completedModules.length}</div>
                          <div className="text-xs text-muted-foreground">Completions</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Module Detail Dialog */}
      <Dialog open={showModuleDialog} onOpenChange={setShowModuleDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedModule && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(selectedModule.category)}
                  </div>
                  {selectedModule.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedModule.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Module Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <BookOpen className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedModule.lessons} {t.lessons}</div>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedModule.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <Star className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                    <div className="text-sm font-medium">{selectedModule.rating}/5</div>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedModule.enrollment}</div>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">{t.learningOutcomes}</h4>
                  <ul className="space-y-2">
                    {selectedModule.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI Metrics */}
                {selectedModule.roiMetrics && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t.roiMetrics}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="text-xs text-green-400 font-medium">Clarity Index</div>
                        <div className="text-sm text-foreground">{selectedModule.roiMetrics.clarityIndex}</div>
                      </div>
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="text-xs text-blue-400 font-medium">Velocity Increase</div>
                        <div className="text-sm text-foreground">{selectedModule.roiMetrics.velocityIncrease}</div>
                      </div>
                      <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-xs text-purple-400 font-medium">Risk Reduction</div>
                        <div className="text-sm text-foreground">{selectedModule.roiMetrics.riskReduction}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Prerequisites */}
                {selectedModule.prerequisites && selectedModule.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t.prerequisites}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedModule.prerequisites.map((prereq) => (
                        <Badge key={prereq} variant="outline" className="text-xs">
                          {trainingModules.find(m => m.id === prereq)?.title || prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {selectedModule.overwatchModule && (
                    <Button
                      onClick={() => handleLaunchModule(selectedModule)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.launchModule}
                    </Button>
                  )}
                  
                  {selectedModule.status === 'completed' && (
                    <Button
                      onClick={() => handleGenerateCertificate(selectedModule.id)}
                      variant="outline"
                      className="flex-1"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      {t.generateCertificate}
                    </Button>
                  )}
                  
                  {selectedModule.status === 'available' && selectedModule.price && (
                    <Button variant="default" className="flex-1">
                      {t.enrollNow} - ${selectedModule.price}
                    </Button>
                  )}
                  
                  {selectedModule.status === 'in-progress' && (
                    <Button variant="default" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      {t.continue}
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default OverwatchAcademyIntegrated;