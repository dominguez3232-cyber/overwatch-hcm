import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  Target, 
  Map, 
  Save, 
  Share2, 
  Play, 
  UserPlus,
  Zap,
  Award,
  ArrowLeft,
  Settings,
  Globe
} from 'lucide-react';

interface SquadMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  accessLevel: 'Editor' | 'Viewer' | 'Coach';
}

interface OverlayPath {
  trace: string;
  title: string;
  coachingFocus: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  badge?: string;
}

interface SquadRole {
  id: string;
  title: string;
  description: string;
  overlays: OverlayPath[];
  coachingFocus: string;
  expectedImpact: string;
}

interface SquadConfig {
  id: string;
  name: string;
  mission: string;
  tags: string[];
  members: SquadMember[];
  roles: SquadRole[];
  marketFocus?: string[];
  createdAt: string;
  status: 'draft' | 'active' | 'completed';
}

interface SquadCreationUIProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  onSave?: (squad: SquadConfig) => void;
  onDeploy?: (squad: SquadConfig) => void;
  initialSquad?: Partial<SquadConfig>;
}

export default function SquadCreationUI({
  language,
  onNavigate,
  onSave,
  onDeploy,
  initialSquad
}: SquadCreationUIProps) {
  const [squad, setSquad] = useState<SquadConfig>({
    id: initialSquad?.id || `squad-${Date.now()}`,
    name: initialSquad?.name || '',
    mission: initialSquad?.mission || '',
    tags: initialSquad?.tags || [],
    members: initialSquad?.members || [],
    roles: initialSquad?.roles || [],
    marketFocus: initialSquad?.marketFocus || [],
    createdAt: initialSquad?.createdAt || new Date().toISOString(),
    status: initialSquad?.status || 'draft'
  });

  const [currentTab, setCurrentTab] = useState('info');
  const [newTag, setNewTag] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);

  const t = {
    en: {
      title: 'Squad Creation & Role Assignment',
      subtitle: 'Build tactical teams for schema-driven clarity deployment',
      squadInfo: 'Squad Info',
      members: 'Members',
      roles: 'Roles',
      paths: 'Overlay Paths',
      save: 'Save & Deploy',
      squadName: 'Squad Name',
      squadMission: 'Squad Mission',
      tags: 'Strategic Tags',
      addTag: 'Add Tag',
      memberCount: 'members',
      roleCount: 'roles',
      pathCount: 'overlay paths',
      marketFocus: 'Market Focus',
      saveSquad: 'Save Squad',
      deploySquad: 'Deploy Squad',
      shareSquad: 'Share Squad',
      backToDashboard: 'Back to Dashboard',
      draft: 'Draft',
      active: 'Active',
      completed: 'Completed'
    },
    es: {
      title: 'Creación de Escuadrones y Asignación de Roles',
      subtitle: 'Construye equipos tácticos para despliegue de claridad basado en esquemas',
      squadInfo: 'Info del Escuadrón',
      members: 'Miembros',
      roles: 'Roles',
      paths: 'Rutas de Overlays',
      save: 'Guardar y Desplegar',
      squadName: 'Nombre del Escuadrón',
      squadMission: 'Misión del Escuadrón',
      tags: 'Etiquetas Estratégicas',
      addTag: 'Agregar Etiqueta',
      memberCount: 'miembros',
      roleCount: 'roles',
      pathCount: 'rutas de overlay',
      marketFocus: 'Enfoque de Mercado',
      saveSquad: 'Guardar Escuadrón',
      deploySquad: 'Desplegar Escuadrón',
      shareSquad: 'Compartir Escuadrón',
      backToDashboard: 'Volver al Dashboard',
      draft: 'Borrador',
      active: 'Activo',
      completed: 'Completado'
    }
  };

  const text = t[language];

  // Predefined strategic tags
  const availableTags = [
    'Founder-led',
    'Investor-facing', 
    'Bilingual',
    'Schema-first',
    'ROI-focused',
    'Culture-driven',
    'LatAm GTM',
    'Crisis Response',
    'Scale-ready'
  ];

  // Predefined role templates
  const roleTemplates: SquadRole[] = [
    {
      id: 'founder',
      title: 'Founder',
      description: 'Strategic clarity and conviction leadership',
      overlays: [
        {
          trace: 'finance.trust-velocity',
          title: 'Trust Velocity Master',
          coachingFocus: 'Capital velocity optimization',
          estimatedTime: '45min',
          difficulty: 'advanced',
          badge: '🧩 Trust Velocity Master'
        },
        {
          trace: 'law.assumed-right',
          title: 'Legal Framework Navigation',
          coachingFocus: 'Risk mitigation and compliance',
          estimatedTime: '30min',
          difficulty: 'intermediate',
          badge: '🎯 Clarity Catalyst'
        }
      ],
      coachingFocus: 'Clarity + Conviction',
      expectedImpact: '3.2x clarity index improvement'
    },
    {
      id: 'ops-lead',
      title: 'Ops Lead',
      description: 'Execution velocity and risk management',
      overlays: [
        {
          trace: 'time.velocity-modeling',
          title: 'Time Optimization Framework',
          coachingFocus: 'Execution speed enhancement',
          estimatedTime: '35min',
          difficulty: 'intermediate',
          badge: '⚡ Velocity Navigator'
        },
        {
          trace: 'trigger.difficulty-risk',
          title: 'Risk Assessment Matrix',
          coachingFocus: 'Proactive risk management',
          estimatedTime: '40min',
          difficulty: 'advanced',
          badge: '🛡️ Risk Guardian'
        }
      ],
      coachingFocus: 'Execution + Risk Framing',
      expectedImpact: '2.7x execution speed increase'
    }
  ];

  const handleAddTag = () => {
    if (newTag && !squad.tags.includes(newTag)) {
      setSquad(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setSquad(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddRoleTemplate = (template: SquadRole) => {
    const newRole = {
      ...template,
      id: `${template.id}-${Date.now()}`
    };
    setSquad(prev => ({
      ...prev,
      roles: [...prev.roles, newRole]
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(squad);
    }
    setShowSaveModal(true);
  };

  const handleDeploy = () => {
    const deployedSquad = {
      ...squad,
      status: 'active' as const
    };
    setSquad(deployedSquad);
    if (onDeploy) {
      onDeploy(deployedSquad);
    }
  };

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
                {text.backToDashboard}
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant={squad.status === 'active' ? 'default' : 'secondary'}>
                {squad.status === 'draft' && text.draft}
                {squad.status === 'active' && text.active}
                {squad.status === 'completed' && text.completed}
              </Badge>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                {text.shareSquad}
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                {text.saveSquad}
              </Button>
              <Button size="sm" onClick={handleDeploy}>
                <Play className="w-4 h-4 mr-2" />
                {text.deploySquad}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              {squad.members.length} {text.memberCount}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4" />
              {squad.roles.length} {text.roleCount}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Map className="w-4 h-4" />
              {squad.roles.reduce((acc, role) => acc + role.overlays.length, 0)} {text.pathCount}
            </div>
            {squad.marketFocus && squad.marketFocus.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                {squad.marketFocus.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              {text.squadInfo}
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {text.members}
            </TabsTrigger>
            <TabsTrigger value="roles" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              {text.roles}
            </TabsTrigger>
            <TabsTrigger value="paths" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              {text.paths}
            </TabsTrigger>
            <TabsTrigger value="deploy" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              {text.save}
            </TabsTrigger>
          </TabsList>

          {/* Squad Info Tab */}
          <TabsContent value="info" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.squadName}</label>
                    <Input
                      value={squad.name}
                      onChange={(e) => setSquad(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="LatAm GTM Strike Team"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.squadMission}</label>
                    <Textarea
                      value={squad.mission}
                      onChange={(e) => setSquad(prev => ({ ...prev, mission: e.target.value }))}
                      placeholder="Deploy schema-driven clarity across Latin American markets with bilingual coaching overlays..."
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">{text.tags}</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {squad.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveTag(tag)}>
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add strategic tag..."
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    />
                    <Button onClick={handleAddTag} size="sm">
                      {text.addTag}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.filter(tag => !squad.tags.includes(tag)).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-secondary"
                        onClick={() => setSquad(prev => ({ ...prev, tags: [...prev.tags, tag] }))}
                      >
                        + {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Squad Members</h3>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </div>
              
              <div className="space-y-4">
                {squad.members.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No members added yet. Start building your squad!</p>
                  </div>
                ) : (
                  squad.members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{member.role}</Badge>
                        <Badge variant={member.accessLevel === 'Editor' ? 'default' : 'secondary'}>
                          {member.accessLevel}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Roles Tab */}
          <TabsContent value="roles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Role Templates</h3>
                <div className="space-y-4">
                  {roleTemplates.map((template) => (
                    <div key={template.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{template.title}</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAddRoleTemplate(template)}
                        >
                          Add Role
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="secondary">{template.coachingFocus}</Badge>
                        <span className="text-muted-foreground">{template.overlays.length} overlays</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Assigned Roles</h3>
                <div className="space-y-4">
                  {squad.roles.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No roles assigned yet.</p>
                    </div>
                  ) : (
                    squad.roles.map((role) => (
                      <div key={role.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{role.title}</h4>
                          <Badge variant="outline">{role.overlays.length} overlays</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                        <div className="space-y-2">
                          {role.overlays.map((overlay, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span>{overlay.title}</span>
                              {overlay.badge && <span className="text-xs">{overlay.badge}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Overlay Paths Tab */}
          <TabsContent value="paths" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Schema Learning Paths</h3>
              <div className="space-y-6">
                {squad.roles.map((role) => (
                  <div key={role.id} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{role.title} Learning Path</h4>
                    <div className="space-y-3">
                      {role.overlays.map((overlay, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{overlay.title}</p>
                              <p className="text-xs text-muted-foreground">{overlay.trace}</p>
                            </div>
                          </div>
                          <div className="flex-1"></div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{overlay.estimatedTime}</span>
                            <Badge variant="outline" className="text-xs">
                              {overlay.difficulty}
                            </Badge>
                            {overlay.badge && (
                              <Badge variant="secondary" className="text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                Badge
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                {squad.roles.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Map className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No learning paths configured yet. Add roles to create paths.</p>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Deploy Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Squad Summary</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Squad Name</label>
                    <p className="text-muted-foreground">{squad.name || 'Unnamed Squad'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mission</label>
                    <p className="text-muted-foreground text-sm">{squad.mission || 'No mission defined'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tags</label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {squad.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Deployment Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full" onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Squad Configuration
                  </Button>
                  <Button className="w-full" variant="outline" onClick={handleDeploy}>
                    <Play className="w-4 h-4 mr-2" />
                    Deploy to LMS Platform
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Generate Share Link
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Zap className="w-4 h-4 mr-2" />
                    Export Configuration
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Save Success Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Save className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Squad Saved Successfully!</h3>
              <p className="text-muted-foreground mb-4">
                Your squad configuration has been saved and is ready for deployment.
              </p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowSaveModal(false)}
                >
                  Continue Editing
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => {
                    setShowSaveModal(false);
                    onNavigate('badge-system');
                  }}
                >
                  View Dashboard
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}