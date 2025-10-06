import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface OverwatchAcademyModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  lessons: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  progress: number;
  price?: number;
  category: 'foundations' | 'lifecycle' | 'industry' | 'leadership' | 'implementation';
  isRecommended?: boolean;
  isPromoted?: boolean;
}

interface UserProgress {
  globalProgress: number;
  modulesCompleted: number;
  totalModules: number;
  learningTime: string;
  certificatesEarned: number;
  nextObjective?: {
    title: string;
    description: string;
    modulesRemaining: number;
  };
}

interface Props {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

export function OverwatchAcademyCenter({ language, onNavigate, currentMode }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [userProgress, setUserProgress] = useState<UserProgress>({
    globalProgress: 42,
    modulesCompleted: 8,
    totalModules: 32,
    learningTime: '45h',
    certificatesEarned: 3,
    nextObjective: {
      title: 'Strategic HR Mastery Certificate',
      description: 'Complete 5 more modules to unlock advanced certification',
      modulesRemaining: 5
    }
  });

  const modules: OverwatchAcademyModule[] = [
    {
      id: 'strategic-foundations',
      title: 'Strategic HR Foundations',
      subtitle: 'From Cost Center to Command Center',
      description: 'Transform HR from operational support to strategic powerhouse',
      image: '/api/placeholder/400/200',
      duration: '4h 30min',
      lessons: 8,
      difficulty: 'Beginner',
      status: 'completed',
      progress: 100,
      category: 'foundations',
      isRecommended: true
    },
    {
      id: 'business-lifecycle',
      title: 'Business Lifecycle Framework',
      subtitle: 'Strategic HCM Through Growth Stages',
      description: 'Master human capital strategy across company evolution',
      image: '/api/placeholder/400/200',
      duration: '3h 45min',
      lessons: 6,
      difficulty: 'Intermediate',
      status: 'in-progress',
      progress: 65,
      category: 'lifecycle'
    },
    {
      id: 'industry-challenges',
      title: 'Industry-Specific HCM Challenges',
      subtitle: 'Manufacturing, Engineering & Professional Services',
      description: 'Sector-specific human capital optimization strategies',
      image: '/api/placeholder/400/200',
      duration: '6h 20min',
      lessons: 10,
      difficulty: 'Intermediate',
      status: 'available',
      progress: 0,
      category: 'industry',
      price: 250
    },
    {
      id: 'company-profiles',
      title: 'Company Type Profiles',
      subtitle: 'VC, PE, Family & Entrepreneur-Led Strategies',
      description: 'Ownership-specific human capital approaches',
      image: '/api/placeholder/400/200',
      duration: '4h 15min',
      lessons: 7,
      difficulty: 'Intermediate',
      status: 'available',
      progress: 0,
      category: 'foundations',
      price: 250
    },
    {
      id: 'risk-compliance',
      title: 'Risk Management & Compliance',
      subtitle: 'Enterprise Risk to Strategic Protection',
      description: 'Advanced risk mitigation and compliance frameworks',
      image: '/api/placeholder/400/200',
      duration: '5h 10min',
      lessons: 8,
      difficulty: 'Advanced',
      status: 'available',
      progress: 0,
      category: 'foundations',
      price: 250
    },
    {
      id: 'culture-design',
      title: 'Culture as Strategic Lever',
      subtitle: 'Design vs Default Culture Engineering',
      description: 'Advanced culture design and implementation methodologies',
      image: '/api/placeholder/400/200',
      duration: '5h 30min',
      lessons: 9,
      difficulty: 'Expert',
      status: 'locked',
      progress: 0,
      category: 'leadership',
      price: 250
    },
    {
      id: 'implementation-roadmap',
      title: 'Implementation Roadmap',
      subtitle: '24-Month Strategic Transformation',
      description: 'Complete transformation methodology with milestone tracking',
      image: '/api/placeholder/400/200',
      duration: '8h 30min',
      lessons: 12,
      difficulty: 'Expert',
      status: 'locked',
      progress: 0,
      category: 'implementation',
      price: 250
    }
  ];

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Modules' : 'Todos los Módulos' },
    { id: 'foundations', label: language === 'en' ? 'Foundations' : 'Fundamentos' },
    { id: 'lifecycle', label: language === 'en' ? 'Lifecycle' : 'Ciclo de Vida' },
    { id: 'industry', label: language === 'en' ? 'Industry Focus' : 'Enfoque Industrial' },
    { id: 'leadership', label: language === 'en' ? 'Leadership' : 'Liderazgo' },
    { id: 'implementation', label: language === 'en' ? 'Implementation' : 'Implementación' }
  ];

  const certificates = [
    {
      id: 'hr-foundations',
      title: 'Strategic HR Foundations',
      emoji: '🏆',
      completedModules: 6,
      completedDate: '2025-01-15',
      type: 'completed'
    },
    {
      id: 'business-lifecycle', 
      title: 'Business Lifecycle Expert',
      emoji: '🎯',
      completedModules: 4,
      completedDate: '2025-01-10',
      type: 'completed'
    },
    {
      id: 'industry-specialist',
      title: 'Industry Specialist',
      emoji: '✍️',
      completedModules: 5,
      completedDate: '2025-01-05',
      type: 'completed'
    },
    {
      id: 'culture-master',
      title: 'Culture Design Master',
      emoji: '🤖',
      progress: 37.5,
      totalModules: 8,
      completedModules: 3,
      type: 'in-progress'
    }
  ];

  const filteredModules = selectedCategory === 'all' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'available': return 'bg-blue-500';
      case 'locked': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    const texts = {
      en: {
        completed: 'Completed',
        'in-progress': 'In Progress', 
        available: 'Available',
        locked: 'Locked'
      },
      es: {
        completed: 'Completado',
        'in-progress': 'En Progreso',
        available: 'Disponible', 
        locked: 'Bloqueado'
      }
    };
    return texts[language][status as keyof typeof texts.en] || status;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => onNavigate('platform-navigator')}
                className="text-muted-foreground hover:text-foreground"
              >
                ← {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">📚</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {language === 'en' ? 'OVERWATCH³ Academy' : 'Academia OVERWATCH³'}
                  </h1>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Strategic HR Transformation Training Center' 
                      : 'Centro de Entrenamiento en Transformación Estratégica de RRHH'
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => onNavigate('investor-presentation')}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white"
              >
                🎯 {language === 'en' ? 'Investor Demo' : 'Demo Inversores'}
              </Button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-lg">📊</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{userProgress.globalProgress}%</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Global Progress' : 'Progreso Global'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-lg">✅</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {userProgress.modulesCompleted}/{userProgress.totalModules}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Modules Completed' : 'Módulos Completados'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-lg">⏱️</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{userProgress.learningTime}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Learning Time' : 'Tiempo Aprendizaje'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-lg">🏆</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{userProgress.certificatesEarned}</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Certificates Earned' : 'Certificados Obtenidos'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Training Modules */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredModules.map((module) => (
                  <motion.div
                    key={module.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card/50 border-border overflow-hidden hover:shadow-lg transition-all">
                      {/* Module Image */}
                      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl opacity-50">📚</span>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getStatusColor(module.status)} text-white border-0`}>
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            {getStatusText(module.status)}
                          </Badge>
                        </div>

                        {/* Difficulty Badge */}
                        <div className="absolute top-3 right-3">
                          <Badge className={getDifficultyColor(module.difficulty)}>
                            {module.difficulty}
                          </Badge>
                        </div>

                        {/* Recommended Badge */}
                        {module.isRecommended && (
                          <div className="absolute bottom-3 right-3">
                            <Badge className="bg-purple-500 text-white">
                              ⭐ {language === 'en' ? 'Recommended' : 'Recomendado'}
                            </Badge>
                          </div>
                        )}

                        {/* Play Button for In Progress/Available */}
                        {(module.status === 'in-progress' || module.status === 'available') && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                              <span className="text-white text-2xl ml-1">▶</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {module.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {module.subtitle}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {module.description}
                            </p>
                          </div>

                          {/* Module Metadata */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <span>📖</span>
                              <span>{module.lessons} {language === 'en' ? 'lessons' : 'lecciones'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>⏱️</span>
                              <span>{module.duration}</span>
                            </div>
                          </div>

                          {/* Progress Bar for In Progress */}
                          {module.status === 'in-progress' && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">
                                  {language === 'en' ? 'Progress' : 'Progreso'}
                                </span>
                                <span className="text-foreground">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>
                          )}

                          {/* Action Button */}
                          <div className="pt-2">
                            {module.status === 'completed' && (
                              <Button variant="outline" className="w-full" size="sm">
                                <span className="mr-2">👁️</span>
                                {language === 'en' ? 'Review' : 'Revisar'}
                              </Button>
                            )}
                            
                            {module.status === 'in-progress' && (
                              <Button className="w-full bg-blue-500 hover:bg-blue-600" size="sm">
                                <span className="mr-2">▶️</span>
                                {language === 'en' ? 'Continue' : 'Continuar'}
                              </Button>
                            )}
                            
                            {module.status === 'available' && (
                              <Button 
                                className="w-full bg-orange-500 hover:bg-orange-600" 
                                size="sm"
                              >
                                {module.price && (
                                  <>
                                    <span className="mr-2">🔓</span>
                                    {language === 'en' ? `Unlock - €${module.price}` : `Desbloquear - €${module.price}`}
                                  </>
                                )}
                              </Button>
                            )}
                            
                            {module.status === 'locked' && (
                              <Button variant="outline" className="w-full" size="sm" disabled>
                                <span className="mr-2">🔒</span>
                                {language === 'en' ? 'Complete prerequisites' : 'Completar prerequisitos'}
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar - Certificates & Next Objectives */}
          <div className="space-y-6">
            {/* Next Objective */}
            {userProgress.nextObjective && (
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-blue-400">🎯</span>
                    {language === 'en' ? 'Next Objective' : 'Próximo Objetivo'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">{userProgress.nextObjective.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {userProgress.nextObjective.description}
                    </p>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    {language === 'en' ? 'View Modules' : 'Ver Módulos'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Certificates */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">🏆</span>
                  {language === 'en' ? 'My Certificates' : 'Mis Certificados'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id}>
                    {cert.type === 'completed' ? (
                      <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{cert.emoji}</span>
                              <div>
                                <h4 className="font-medium text-sm">{cert.title}</h4>
                                <p className="text-xs text-muted-foreground">
                                  {cert.completedModules} {language === 'en' ? 'modules' : 'módulos'} • {cert.completedDate}
                                </p>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">
                              <span className="text-yellow-400">⬇️</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-card/50 border-border">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl opacity-50">{cert.emoji}</span>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm text-muted-foreground">{cert.title}</h4>
                              <p className="text-xs text-muted-foreground">
                                {cert.completedModules}/{cert.totalModules} {language === 'en' ? 'modules completed' : 'módulos completados'}
                              </p>
                            </div>
                          </div>
                          <Progress value={cert.progress} className="h-2" />
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}