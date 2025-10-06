import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Users, 
  Target, 
  TrendingUp,
  Award,
  ArrowLeft,
  Plus,
  BarChart3,
  Clock,
  Activity,
  CheckCircle,
  AlertCircle,
  Zap,
  Globe
} from 'lucide-react';
import { getSquadAnalytics, getAllSquads, SquadConfig } from '../utils/squadService';

interface SquadDashboardProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  selectedSquadId?: string;
}

export default function SquadDashboard({
  language,
  onNavigate,
  selectedSquadId
}: SquadDashboardProps) {
  const [squads, setSquads] = useState<SquadConfig[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<string | null>(selectedSquadId || null);
  const [squadAnalytics, setSquadAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const t = {
    en: {
      title: 'Squad Performance Dashboard',
      subtitle: 'Monitor squad progress, coaching impact, and schema mastery',
      overview: 'Overview',
      members: 'Members',
      progress: 'Progress',
      analytics: 'Analytics',
      createSquad: 'Create New Squad',
      selectSquad: 'Select Squad',
      totalSquads: 'Total Squads',
      activeMembers: 'Active Members',
      completionRate: 'Completion Rate',
      badgeEarnRate: 'Badge Earn Rate',
      overlaysCompleted: 'Overlays Completed',
      badgesEarned: 'Badges Earned',
      clarityIndex: 'Clarity Index',
      topPerformers: 'Top Performers',
      recentActivity: 'Recent Activity',
      roleProgress: 'Role Progress',
      learningPaths: 'Learning Paths',
      squadMembers: 'Squad Members',
      noSquads: 'No squads created yet',
      createFirstSquad: 'Create your first squad to start tracking progress',
      averageProgress: 'Average Progress',
      lastActive: 'Last Active',
      role: 'Role',
      status: 'Status',
      active: 'Active',
      draft: 'Draft',
      completed: 'Completed'
    },
    es: {
      title: 'Dashboard de Rendimiento de Escuadrones',
      subtitle: 'Monitorea progreso de escuadrones, impacto de coaching y dominio de esquemas',
      overview: 'Resumen',
      members: 'Miembros',
      progress: 'Progreso',
      analytics: 'Analíticas',
      createSquad: 'Crear Nuevo Escuadrón',
      selectSquad: 'Seleccionar Escuadrón',
      totalSquads: 'Escuadrones Totales',
      activeMembers: 'Miembros Activos',
      completionRate: 'Tasa de Finalización',
      badgeEarnRate: 'Tasa de Insignias',
      overlaysCompleted: 'Overlays Completados',
      badgesEarned: 'Insignias Obtenidas',
      clarityIndex: 'Índice de Claridad',
      topPerformers: 'Mejores Performers',
      recentActivity: 'Actividad Reciente',
      roleProgress: 'Progreso por Rol',
      learningPaths: 'Rutas de Aprendizaje',
      squadMembers: 'Miembros del Escuadrón',
      noSquads: 'No hay escuadrones creados',
      createFirstSquad: 'Crea tu primer escuadrón para comenzar a rastrear progreso',
      averageProgress: 'Progreso Promedio',
      lastActive: 'Última Actividad',
      role: 'Rol',
      status: 'Estado',
      active: 'Activo',
      draft: 'Borrador',
      completed: 'Completado'
    }
  };

  const text = t[language];

  useEffect(() => {
    loadSquads();
  }, []);

  useEffect(() => {
    if (selectedSquad) {
      loadSquadAnalytics(selectedSquad);
    }
  }, [selectedSquad]);

  const loadSquads = async () => {
    try {
      const allSquads = await getAllSquads();
      setSquads(allSquads);
      
      if (allSquads.length > 0 && !selectedSquad) {
        setSelectedSquad(allSquads[0].id);
      }
    } catch (error) {
      console.error('Error loading squads:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSquadAnalytics = async (squadId: string) => {
    try {
      const analytics = await getSquadAnalytics(squadId);
      setSquadAnalytics(analytics);
    } catch (error) {
      console.error('Error loading squad analytics:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES');
  };

  const formatTime = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading squad dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('badge-system')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to System
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button onClick={() => onNavigate('squad-creation')}>
                <Plus className="w-4 h-4 mr-2" />
                {text.createSquad}
              </Button>
            </div>
          </div>

          {/* Squad Selector */}
          {squads.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-muted-foreground">{text.selectSquad}:</span>
              <div className="flex gap-2">
                {squads.map((squad) => (
                  <Button
                    key={squad.id}
                    variant={selectedSquad === squad.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSquad(squad.id)}
                  >
                    {squad.name}
                    <Badge 
                      variant={squad.status === 'active' ? 'default' : 'secondary'}
                      className="ml-2 text-xs"
                    >
                      {squad.status === 'active' && text.active}
                      {squad.status === 'draft' && text.draft}
                      {squad.status === 'completed' && text.completed}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {squads.length === 0 ? (
          <div className="text-center py-16">
            <Users className="w-16 h-16 mx-auto mb-6 text-muted-foreground opacity-50" />
            <h2 className="text-2xl font-bold mb-4">{text.noSquads}</h2>
            <p className="text-muted-foreground mb-8">{text.createFirstSquad}</p>
            <Button onClick={() => onNavigate('squad-creation')}>
              <Plus className="w-4 h-4 mr-2" />
              {text.createSquad}
            </Button>
          </div>
        ) : squadAnalytics ? (
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                {text.overview}
              </TabsTrigger>
              <TabsTrigger value="members" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {text.members}
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                {text.progress}
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {text.analytics}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{text.squadMembers}</p>
                      <p className="text-2xl font-bold">{squadAnalytics.squad.members.length}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{text.activeMembers}</p>
                      <p className="text-2xl font-bold">{squadAnalytics.analytics.activeMembers}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{text.completionRate}</p>
                      <p className="text-2xl font-bold">{squadAnalytics.analytics.completionRate.toFixed(1)}%</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{text.clarityIndex}</p>
                      <p className="text-2xl font-bold">{squadAnalytics.progress.averageClarityIndex.toFixed(1)}x</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{text.topPerformers}</h3>
                  <div className="space-y-4">
                    {squadAnalytics.analytics.topPerformers.map((performer: any, index: number) => (
                      <motion.div
                        key={performer.memberId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{performer.memberName}</p>
                            <p className="text-sm text-muted-foreground">
                              {performer.completedOverlays} overlays completed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">
                            {performer.clarityIndex.toFixed(1)}x clarity
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{text.roleProgress}</h3>
                  <div className="space-y-4">
                    {squadAnalytics.squad.roles.map((role: any) => {
                      const completedOverlays = role.overlays.filter((overlay: any) => 
                        overlay.completedBy && overlay.completedBy.length > 0).length;
                      const totalOverlays = role.overlays.length;
                      const progress = totalOverlays > 0 ? (completedOverlays / totalOverlays) * 100 : 0;

                      return (
                        <div key={role.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{role.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {completedOverlays}/{totalOverlays}
                            </p>
                          </div>
                          <Progress value={progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">
                            {role.assignedMembers.length} members assigned
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Members Tab */}
            <TabsContent value="members" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">{text.squadMembers}</h3>
                <div className="space-y-4">
                  {squadAnalytics.squad.members.map((member: any) => {
                    const memberProgress = squadAnalytics.progress.memberProgress.find(
                      (mp: any) => mp.memberId === member.id
                    );

                    return (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="text-center">
                            <p className="font-medium">{memberProgress?.completedOverlays || 0}</p>
                            <p className="text-muted-foreground">{text.overlaysCompleted}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium">{memberProgress?.earnedBadges.length || 0}</p>
                            <p className="text-muted-foreground">{text.badgesEarned}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium">{memberProgress?.clarityIndex.toFixed(1)}x</p>
                            <p className="text-muted-foreground">{text.clarityIndex}</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge variant="outline">{member.role}</Badge>
                            <Badge variant={member.accessLevel === 'Editor' ? 'default' : 'secondary'}>
                              {member.accessLevel}
                            </Badge>
                          </div>
                          {member.lastActive && (
                            <div className="text-right text-xs text-muted-foreground">
                              {text.lastActive}: {formatTime(member.lastActive)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{text.overlaysCompleted}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Progress</span>
                      <span className="font-medium">
                        {squadAnalytics.progress.completedOverlays}/{squadAnalytics.progress.totalOverlays}
                      </span>
                    </div>
                    <Progress 
                      value={squadAnalytics.progress.totalOverlays > 0 
                        ? (squadAnalytics.progress.completedOverlays / squadAnalytics.progress.totalOverlays) * 100 
                        : 0} 
                      className="h-3"
                    />
                    <p className="text-sm text-muted-foreground">
                      {squadAnalytics.analytics.completionRate.toFixed(1)}% completion rate
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{text.badgesEarned}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Badge Progress</span>
                      <span className="font-medium">
                        {squadAnalytics.progress.earnedBadges}/{squadAnalytics.progress.totalBadges}
                      </span>
                    </div>
                    <Progress 
                      value={squadAnalytics.progress.totalBadges > 0 
                        ? (squadAnalytics.progress.earnedBadges / squadAnalytics.progress.totalBadges) * 100 
                        : 0} 
                      className="h-3"
                    />
                    <p className="text-sm text-muted-foreground">
                      {squadAnalytics.analytics.badgeEarnRate.toFixed(1)}% badge earn rate
                    </p>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.learningPaths}</h3>
                <div className="space-y-6">
                  {squadAnalytics.squad.roles.map((role: any) => (
                    <div key={role.id} className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-3">{role.title} Path</h4>
                      <div className="space-y-2">
                        {role.overlays.map((overlay: any, index: number) => {
                          const isCompleted = overlay.completedBy && overlay.completedBy.length > 0;
                          return (
                            <div key={index} className="flex items-center gap-3 p-2 rounded">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                isCompleted 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {isCompleted ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  <span className="text-xs">{index + 1}</span>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{overlay.title}</p>
                                <p className="text-sm text-muted-foreground">{overlay.trace}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{overlay.estimatedTime}</span>
                                {overlay.badge && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Award className="w-3 h-3 mr-1" />
                                    Badge
                                  </Badge>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h3 className="font-semibold">Average Time to Complete</h3>
                  </div>
                  <p className="text-2xl font-bold">{squadAnalytics.analytics.averageTimeToComplete}</p>
                  <p className="text-sm text-muted-foreground">Per overlay completion</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-semibold">Velocity Score</h3>
                  </div>
                  <p className="text-2xl font-bold">
                    {(squadAnalytics.progress.averageClarityIndex * 1.2).toFixed(1)}x
                  </p>
                  <p className="text-sm text-muted-foreground">Learning velocity multiplier</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold">Market Focus</h3>
                  </div>
                  <div className="space-y-1">
                    {squadAnalytics.squad.marketFocus?.map((market: string) => (
                      <Badge key={market} variant="outline" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Squad Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Squad Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span>{formatDate(squadAnalytics.squad.createdAt)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Updated:</span>
                        <span>{formatDate(squadAnalytics.squad.updatedAt)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{text.status}:</span>
                        <Badge variant={squadAnalytics.squad.status === 'active' ? 'default' : 'secondary'}>
                          {squadAnalytics.squad.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Strategic Tags</h4>
                    <div className="flex flex-wrap gap-1">
                      {squadAnalytics.squad.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-muted-foreground opacity-50" />
            <h2 className="text-2xl font-bold mb-4">Loading squad data...</h2>
            <p className="text-muted-foreground">Please wait while we fetch the squad analytics.</p>
          </div>
        )}
      </div>
    </div>
  );
}