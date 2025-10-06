import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Users, 
  Shield, 
  Globe, 
  Edit3, 
  Layers, 
  BarChart3,
  Save,
  RefreshCw,
  Eye,
  Plus,
  Trash2,
  Download,
  Upload,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ModuleEditorProps {
  language: 'en' | 'es';
  onSave?: (moduleData: any) => void;
}

interface OverlayManagerProps {
  language: 'en' | 'es';
  onOverlayUpdate?: (overlayId: string, data: any) => void;
}

interface LanguageToggleProps {
  language: 'en' | 'es';
  onLanguageChange: (language: 'en' | 'es') => void;
}

interface AccessControlProps {
  language: 'en' | 'es';
  onPermissionChange?: (userId: string, permissions: string[]) => void;
}

interface AdminPanelProps {
  language: 'en' | 'es';
  onLanguageChange?: (language: 'en' | 'es') => void;
  className?: string;
}

const translations = {
  en: {
    title: 'Admin Panel',
    subtitle: 'OVERWATCH³ System Administration',
    moduleEditor: 'Module Editor',
    overlayManager: 'Overlay Manager',
    languageToggle: 'Language Settings',
    accessControl: 'Access Control',
    analytics: 'Analytics',
    
    // Module Editor
    moduleTitle: 'Module Title',
    moduleDescription: 'Module Description',
    moduleCategory: 'Category',
    moduleLanguage: 'Language',
    moduleDifficulty: 'Difficulty',
    moduleEstimatedTime: 'Estimated Time',
    moduleOverlays: 'Overlays',
    save: 'Save',
    preview: 'Preview',
    publish: 'Publish',
    draft: 'Draft',
    
    // Overlay Manager
    overlayTitle: 'Overlay Title',
    overlayCaption: 'Caption',
    overlaySchema: 'Schema Trace',
    overlayCategory: 'Category',
    overlayActive: 'Active',
    overlayUsage: 'Usage Count',
    addOverlay: 'Add Overlay',
    editOverlay: 'Edit Overlay',
    deleteOverlay: 'Delete Overlay',
    
    // Language Settings
    systemLanguage: 'System Language',
    contentLanguage: 'Content Language',
    autoTranslate: 'Auto-translate',
    translationQuality: 'Translation Quality',
    
    // Access Control
    users: 'Users',
    roles: 'Roles',
    permissions: 'Permissions',
    addUser: 'Add User',
    editUser: 'Edit User',
    deleteUser: 'Delete User',
    userRole: 'Role',
    userPermissions: 'Permissions',
    userStatus: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    
    // Categories
    foundation: 'Foundation',
    strategy: 'Strategy',
    execution: 'Execution',
    analysis: 'Analysis',
    
    // Difficulties
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    
    // Roles
    admin: 'Administrator',
    editor: 'Editor',
    viewer: 'Viewer',
    
    // Status
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info'
  },
  es: {
    title: 'Panel de Administración',
    subtitle: 'Administración del Sistema OVERWATCH³',
    moduleEditor: 'Editor de Módulos',
    overlayManager: 'Gestor de Overlays',
    languageToggle: 'Configuración de Idioma',
    accessControl: 'Control de Acceso',
    analytics: 'Analíticas',
    
    // Module Editor
    moduleTitle: 'Título del Módulo',
    moduleDescription: 'Descripción del Módulo',
    moduleCategory: 'Categoría',
    moduleLanguage: 'Idioma',
    moduleDifficulty: 'Dificultad',
    moduleEstimatedTime: 'Tiempo Estimado',
    moduleOverlays: 'Overlays',
    save: 'Guardar',
    preview: 'Vista Previa',
    publish: 'Publicar',
    draft: 'Borrador',
    
    // Overlay Manager
    overlayTitle: 'Título del Overlay',
    overlayCaption: 'Descripción',
    overlaySchema: 'Traza de Esquema',
    overlayCategory: 'Categoría',
    overlayActive: 'Activo',
    overlayUsage: 'Contador de Uso',
    addOverlay: 'Agregar Overlay',
    editOverlay: 'Editar Overlay',
    deleteOverlay: 'Eliminar Overlay',
    
    // Language Settings
    systemLanguage: 'Idioma del Sistema',
    contentLanguage: 'Idioma del Contenido',
    autoTranslate: 'Auto-traducir',
    translationQuality: 'Calidad de Traducción',
    
    // Access Control
    users: 'Usuarios',
    roles: 'Roles',
    permissions: 'Permisos',
    addUser: 'Agregar Usuario',
    editUser: 'Editar Usuario',
    deleteUser: 'Eliminar Usuario',
    userRole: 'Rol',
    userPermissions: 'Permisos',
    userStatus: 'Estado',
    active: 'Activo',
    inactive: 'Inactivo',
    
    // Categories
    foundation: 'Fundación',
    strategy: 'Estrategia',
    execution: 'Ejecución',
    analysis: 'Análisis',
    
    // Difficulties
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    
    // Roles
    admin: 'Administrador',
    editor: 'Editor',
    viewer: 'Visor',
    
    // Status
    success: 'Éxito',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información'
  }
};

export const ModuleEditor: React.FC<ModuleEditorProps> = ({ language, onSave }) => {
  const [moduleData, setModuleData] = useState({
    title: '',
    description: '',
    category: 'foundation',
    difficulty: 'intermediate',
    estimatedTime: '30min',
    overlays: 5,
    status: 'draft'
  });

  const t = translations[language];

  const handleSave = () => {
    onSave?.(moduleData);
    // Show success notification
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{t.moduleEditor}</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            {t.preview}
          </Button>
          <Button onClick={handleSave} size="sm" className="bg-primary hover:bg-primary/90">
            <Save className="w-4 h-4 mr-2" />
            {t.save}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleTitle}</label>
            <Input
              value={moduleData.title}
              onChange={(e) => setModuleData({...moduleData, title: e.target.value})}
              placeholder="Enter module title..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleDescription}</label>
            <Textarea
              value={moduleData.description}
              onChange={(e) => setModuleData({...moduleData, description: e.target.value})}
              placeholder="Enter module description..."
              className="min-h-[100px]"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleCategory}</label>
            <Select value={moduleData.category} onValueChange={(value) => setModuleData({...moduleData, category: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="foundation">{t.foundation}</SelectItem>
                <SelectItem value="strategy">{t.strategy}</SelectItem>
                <SelectItem value="execution">{t.execution}</SelectItem>
                <SelectItem value="analysis">{t.analysis}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleDifficulty}</label>
            <Select value={moduleData.difficulty} onValueChange={(value) => setModuleData({...moduleData, difficulty: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">{t.beginner}</SelectItem>
                <SelectItem value="intermediate">{t.intermediate}</SelectItem>
                <SelectItem value="advanced">{t.advanced}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleEstimatedTime}</label>
            <Input
              value={moduleData.estimatedTime}
              onChange={(e) => setModuleData({...moduleData, estimatedTime: e.target.value})}
              placeholder="30min"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleOverlays}</label>
            <Input
              type="number"
              value={moduleData.overlays}
              onChange={(e) => setModuleData({...moduleData, overlays: parseInt(e.target.value)})}
              placeholder="5"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <span className="text-sm font-medium">Status</span>
            <Badge variant={moduleData.status === 'published' ? 'default' : 'secondary'}>
              {moduleData.status === 'published' ? t.publish : t.draft}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const OverlayManager: React.FC<OverlayManagerProps> = ({ language, onOverlayUpdate }) => {
  const [overlays, setOverlays] = useState([
    {
      id: '1',
      title: 'Trust Velocity',
      caption: 'Trust moves faster than capital.',
      schema: 'finance.trust-velocity',
      category: 'finance',
      active: true,
      usage: 127
    },
    {
      id: '2',
      title: 'Difficulty Risk',
      caption: 'Strategic risk evaluation for complex decisions.',
      schema: 'trigger.difficulty-risk',
      category: 'trigger',
      active: false,
      usage: 89
    }
  ]);

  const t = translations[language];

  const toggleOverlayStatus = (id: string) => {
    setOverlays(overlays.map(overlay => 
      overlay.id === id ? { ...overlay, active: !overlay.active } : overlay
    ));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{t.overlayManager}</h3>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          {t.addOverlay}
        </Button>
      </div>

      <div className="space-y-4">
        {overlays.map((overlay) => (
          <motion.div
            key={overlay.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium">{overlay.title}</h4>
                <Badge variant={overlay.active ? 'default' : 'secondary'}>
                  {overlay.active ? t.active : t.inactive}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {overlay.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{overlay.caption}</p>
              <code className="text-xs bg-background px-2 py-1 rounded font-mono">
                {overlay.schema}
              </code>
              <div className="text-xs text-muted-foreground mt-1">
                {t.overlayUsage}: {overlay.usage}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={overlay.active}
                onCheckedChange={() => toggleOverlayStatus(overlay.id)}
              />
              <Button variant="outline" size="sm">
                <Edit3 className="w-3 h-3" />
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  const [settings, setSettings] = useState({
    systemLanguage: language,
    contentLanguage: language,
    autoTranslate: true,
    translationQuality: 'high'
  });

  const t = translations[language];

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    setSettings({
      ...settings,
      systemLanguage: newLanguage,
      contentLanguage: newLanguage
    });
    onLanguageChange(newLanguage);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{t.languageToggle}</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">{t.systemLanguage}</label>
          <Select value={settings.systemLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.contentLanguage}</label>
          <Select value={settings.contentLanguage} onValueChange={(value: 'en' | 'es') => 
            setSettings({...settings, contentLanguage: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium">{t.autoTranslate}</label>
            <p className="text-xs text-muted-foreground">Automatically translate content between languages</p>
          </div>
          <Switch
            checked={settings.autoTranslate}
            onCheckedChange={(checked) => setSettings({...settings, autoTranslate: checked})}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.translationQuality}</label>
          <Select value={settings.translationQuality} onValueChange={(value) => 
            setSettings({...settings, translationQuality: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High Quality</SelectItem>
              <SelectItem value="medium">Medium Quality</SelectItem>
              <SelectItem value="fast">Fast Translation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export const AccessControl: React.FC<AccessControlProps> = ({ language, onPermissionChange }) => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@company.com',
      role: 'admin',
      status: 'active',
      permissions: ['read', 'write', 'admin']
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@company.com',
      role: 'editor',
      status: 'active',
      permissions: ['read', 'write']
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@company.com',
      role: 'viewer',
      status: 'inactive',
      permissions: ['read']
    }
  ]);

  const t = translations[language];

  const toggleUserStatus = (id: string) => {
    setUsers(users.map(user => 
      user.id === id ? { 
        ...user, 
        status: user.status === 'active' ? 'inactive' : 'active' 
      } : user
    ));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{t.accessControl}</h3>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          {t.addUser}
        </Button>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium">{user.name}</h4>
                <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                  {user.status === 'active' ? t.active : t.inactive}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {t[user.role as keyof typeof t] || user.role}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{user.email}</p>
              <div className="flex gap-1">
                {user.permissions.map((permission) => (
                  <Badge key={permission} variant="outline" className="text-xs">
                    {permission}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleUserStatus(user.id)}
              >
                {user.status === 'active' ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
              </Button>
              <Button variant="outline" size="sm">
                <Edit3 className="w-3 h-3" />
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export const AdminPanel: React.FC<AdminPanelProps> = ({ 
  language, 
  onLanguageChange, 
  className = '' 
}) => {
  const t = translations[language];

  return (
    <div className={`bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              {t.moduleEditor}
            </TabsTrigger>
            <TabsTrigger value="overlays" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {t.overlayManager}
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {t.languageToggle}
            </TabsTrigger>
            <TabsTrigger value="access" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {t.accessControl}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {t.analytics}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="mt-6">
            <ModuleEditor language={language} />
          </TabsContent>

          <TabsContent value="overlays" className="mt-6">
            <OverlayManager language={language} />
          </TabsContent>

          <TabsContent value="language" className="mt-6">
            <LanguageToggle 
              language={language} 
              onLanguageChange={onLanguageChange || (() => {})} 
            />
          </TabsContent>

          <TabsContent value="access" className="mt-6">
            <AccessControl language={language} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{t.analytics}</h3>
              </div>
              <div className="text-center py-12 text-muted-foreground">
                Analytics dashboard coming soon...
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;