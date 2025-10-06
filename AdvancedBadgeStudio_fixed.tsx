import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Edit3,
  Palette,
  Zap,
  Users,
  Settings,
  Save,
  Eye,
  ArrowLeft,
  Plus,
  X,
  Copy,
  Download,
  Upload,
  Star,
  Trophy,
  Crown,
  Gem,
  Target,
  Globe,
  Rocket,
  Shield,
  Brain,
  Heart,
  CheckCircle,
  Code,
  TrendingUp,
  Award
} from 'lucide-react';

interface BadgeDesign {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  icon: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  category: string;
  tags: string[];
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  points: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  unlockLogic: UnlockRule[];
  replayTriggers: ReplayTrigger[];
  squadDistribution: SquadAccess[];
  metadata: {
    createdBy: string;
    createdAt: string;
    version: string;
    status: 'draft' | 'active' | 'retired';
  };
}

interface UnlockRule {
  id: string;
  type: 'completion' | 'performance' | 'sequence' | 'time' | 'collaboration' | 'custom';
  condition: string;
  value: number | string;
  operator: '=' | '>' | '>=' | '<' | '<=' | 'contains' | 'in';
  description: {
    en: string;
    es: string;
  };
  weight: number;
  enabled: boolean;
}

interface ReplayTrigger {
  id: string;
  event: 'badge_earned' | 'badge_shared' | 'badge_viewed' | 'demo_launched';
  action: string;
  delay: number;
  conditions: string[];
  enabled: boolean;
}

interface SquadAccess {
  squadId: string;
  squadName: string;
  roles: string[];
  marketTags: string[];
  accessLevel: 'view' | 'earn' | 'manage';
}

interface AdvancedBadgeStudioProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  badgeId?: string;
  onSave?: (badge: BadgeDesign) => void;
  onPublish?: (badge: BadgeDesign) => void;
}

const ICON_LIBRARY = [
  '🧩', '🌐', '🎯', '🚀', '⚡', '🏆', '👑', '💎', '🛡️', '🧠',
  '❤️', '⭐', '🎊', '🔥', '💪', '🎨', '📊', '💰', '🎓', '🔬',
  '⚖️', '🌟', '🎪', '🎭', '🎸', '🎲', '🎳', '🎮', '🎬', '📈'
];

const COLOR_PALETTES = {
  'overwatch-gold': {
    primary: '#FFD700',
    secondary: '#FFA500',
    accent: '#FF8C00',
    background: '#2A1810'
  },
  'overwatch-silver': {
    primary: '#C0C0C0',
    secondary: '#A8A8A8',
    accent: '#808080',
    background: '#1A1A1A'
  },
  'overwatch-bronze': {
    primary: '#CD7F32',
    secondary: '#B8860B',
    accent: '#8B4513',
    background: '#2A1F1A'
  },
  'overwatch-platinum': {
    primary: '#E5E4E2',
    secondary: '#D3D3D3',
    accent: '#B8B8B8',
    background: '#1C1C1C'
  },
  'overwatch-diamond': {
    primary: '#B9F2FF',
    secondary: '#87CEEB',
    accent: '#4169E1',
    background: '#0F1419'
  },
  'trust-velocity': {
    primary: '#00C9FF',
    secondary: '#92FE9D',
    accent: '#00B4DB',
    background: '#0A1628'
  },
  'clarity-master': {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb',
    background: '#1A1F36'
  },
  'founder-elite': {
    primary: '#ffecd2',
    secondary: '#fcb69f',
    accent: '#ff9a9e',
    background: '#2D1B1E'
  }
};

export default function AdvancedBadgeStudio({
  language,
  onNavigate,
  badgeId,
  onSave,
  onPublish
}: AdvancedBadgeStudioProps) {
  const [currentBadge, setCurrentBadge] = useState<BadgeDesign>({
    id: badgeId || `badge-${Date.now()}`,
    title: {
      en: 'Trust Velocity Master',
      es: 'Maestro de Velocidad de Confianza'
    },
    description: {
      en: 'Mastery of trust velocity optimization in founder-led companies',
      es: 'Dominio de la optimización de velocidad de confianza en empresas lideradas por fundadores'
    },
    icon: '🧩',
    level: 'Gold',
    category: 'Finance',
    tags: ['Finance', 'Clarity', 'Investor-facing', 'Schema: finance.trust-velocity'],
    colorPalette: COLOR_PALETTES['overwatch-gold'],
    points: 500,
    rarity: 'Rare',
    unlockLogic: [
      {
        id: 'rule-1',
        type: 'completion',
        condition: 'Overlay Completed',
        value: 'finance.trust-velocity',
        operator: '=',
        description: {
          en: 'Complete the Trust Velocity overlay in both languages',
          es: 'Completar el overlay de Velocidad de Confianza en ambos idiomas'
        },
        weight: 1.0,
        enabled: true
      },
      {
        id: 'rule-2',
        type: 'performance',
        condition: 'Clarity Index',
        value: 3.0,
        operator: '>=',
        description: {
          en: 'Achieve clarity index of 3.0x or higher',
          es: 'Lograr un índice de claridad de 3.0x o superior'
        },
        weight: 0.8,
        enabled: true
      }
    ],
    replayTriggers: [
      {
        id: 'trigger-1',
        event: 'badge_earned',
        action: 'Launch trust velocity demo sequence',
        delay: 0,
        conditions: ['role=Founder', 'market=LatAm'],
        enabled: true
      }
    ],
    squadDistribution: [
      {
        squadId: 'latam-gtm',
        squadName: 'LatAm GTM Strike Team',
        roles: ['Founder', 'Ops Lead'],
        marketTags: ['LatAm', 'Investor-facing'],
        accessLevel: 'earn'
      }
    ],
    metadata: {
      createdBy: 'Demo User',
      createdAt: new Date().toISOString(),
      version: 'v1.0',
      status: 'draft'
    }
  });

  const [currentTab, setCurrentTab] = useState('metadata');
  const [previewMode, setPreviewMode] = useState<'card' | 'modal' | 'notification'>('card');
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const t = {
    en: {
      title: 'Advanced Badge Studio',
      subtitle: 'Create precision achievement systems with cinematic unlock experiences',
      badgeMetadata: 'Badge Metadata',
      visualDesign: 'Visual Design',
      unlockLogic: 'Unlock Logic',
      replayTriggers: 'Replay Triggers',
      squadDistribution: 'Squad Distribution',
      preview: 'Preview',
      save: 'Save Badge',
      publish: 'Publish',
      export: 'Export',
      import: 'Import',
      badgeTitle: 'Badge Title',
      description: 'Description',
      category: 'Category',
      level: 'Level',
      points: 'Points',
      rarity: 'Rarity',
      iconPicker: 'Icon Picker',
      colorPalette: 'Color Palette',
      addRule: 'Add Rule',
      addTrigger: 'Add Trigger',
      addSquad: 'Add Squad',
      common: 'Common',
      rare: 'Rare',
      epic: 'Epic',
      legendary: 'Legendary',
      bronze: 'Bronze',
      silver: 'Silver',
      gold: 'Gold',
      platinum: 'Platinum',
      diamond: 'Diamond',
      unsavedChanges: 'Unsaved Changes',
      backToSystem: 'Back to Badge System'
    },
    es: {
      title: 'Estudio de Insignias Avanzado',
      subtitle: 'Crea sistemas de logros de precisión con experiencias de desbloqueo cinemáticas',
      badgeMetadata: 'Metadatos Insignia',
      visualDesign: 'Diseño Visual',
      unlockLogic: 'Lógica Desbloqueo',
      replayTriggers: 'Triggers Replay',
      squadDistribution: 'Distribución Squad',
      preview: 'Vista Previa',
      save: 'Guardar Insignia',
      publish: 'Publicar',
      export: 'Exportar',
      import: 'Importar',
      badgeTitle: 'Título Insignia',
      description: 'Descripción',
      category: 'Categoría',
      level: 'Nivel',
      points: 'Puntos',
      rarity: 'Rareza',
      iconPicker: 'Selector Ícono',
      colorPalette: 'Paleta Color',
      addRule: 'Agregar Regla',
      addTrigger: 'Agregar Trigger',
      addSquad: 'Agregar Squad',
      common: 'Común',
      rare: 'Raro',
      epic: 'Épico',
      legendary: 'Legendario',
      bronze: 'Bronce',
      silver: 'Plata',
      gold: 'Oro',
      platinum: 'Platino',
      diamond: 'Diamante',
      unsavedChanges: 'Cambios No Guardados',
      backToSystem: 'Volver al Sistema'
    }
  };

  const text = t[language];

  const updateBadgeMetadata = (field: string, value: any) => {
    setCurrentBadge(prev => ({
      ...prev,
      [field]: value
    }));
    setUnsavedChanges(true);
  };

  const updateBilingualField = (field: string, lang: 'en' | 'es', value: string) => {
    setCurrentBadge(prev => ({
      ...prev,
      [field]: {
        ...prev[field as keyof BadgeDesign] as any,
        [lang]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const updateColorPalette = (paletteKey: string) => {
    setCurrentBadge(prev => ({
      ...prev,
      colorPalette: COLOR_PALETTES[paletteKey as keyof typeof COLOR_PALETTES]
    }));
    setUnsavedChanges(true);
  };

  const addUnlockRule = () => {
    const newRule: UnlockRule = {
      id: `rule-${Date.now()}`,
      type: 'completion',
      condition: '',
      value: '',
      operator: '=',
      description: {
        en: '',
        es: ''
      },
      weight: 1.0,
      enabled: true
    };
    
    setCurrentBadge(prev => ({
      ...prev,
      unlockLogic: [...prev.unlockLogic, newRule]
    }));
    setUnsavedChanges(true);
  };

  const updateUnlockRule = (ruleId: string, field: string, value: any) => {
    setCurrentBadge(prev => ({
      ...prev,
      unlockLogic: prev.unlockLogic.map(rule =>
        rule.id === ruleId ? { ...rule, [field]: value } : rule
      )
    }));
    setUnsavedChanges(true);
  };

  const removeUnlockRule = (ruleId: string) => {
    setCurrentBadge(prev => ({
      ...prev,
      unlockLogic: prev.unlockLogic.filter(rule => rule.id !== ruleId)
    }));
    setUnsavedChanges(true);
  };

  const addReplayTrigger = () => {
    const newTrigger: ReplayTrigger = {
      id: `trigger-${Date.now()}`,
      event: 'badge_earned',
      action: '',
      delay: 0,
      conditions: [],
      enabled: true
    };
    
    setCurrentBadge(prev => ({
      ...prev,
      replayTriggers: [...prev.replayTriggers, newTrigger]
    }));
    setUnsavedChanges(true);
  };

  const updateReplayTrigger = (triggerId: string, field: string, value: any) => {
    setCurrentBadge(prev => ({
      ...prev,
      replayTriggers: prev.replayTriggers.map(trigger =>
        trigger.id === triggerId ? { ...trigger, [field]: value } : trigger
      )
    }));
    setUnsavedChanges(true);
  };

  const removeReplayTrigger = (triggerId: string) => {
    setCurrentBadge(prev => ({
      ...prev,
      replayTriggers: prev.replayTriggers.filter(trigger => trigger.id !== triggerId)
    }));
    setUnsavedChanges(true);
  };

  const addSquadAccess = () => {
    const newSquad: SquadAccess = {
      squadId: '',
      squadName: '',
      roles: [],
      marketTags: [],
      accessLevel: 'earn'
    };
    
    setCurrentBadge(prev => ({
      ...prev,
      squadDistribution: [...prev.squadDistribution, newSquad]
    }));
    setUnsavedChanges(true);
  };

  const updateSquadAccess = (index: number, field: string, value: any) => {
    setCurrentBadge(prev => ({
      ...prev,
      squadDistribution: prev.squadDistribution.map((squad, i) =>
        i === index ? { ...squad, [field]: value } : squad
      )
    }));
    setUnsavedChanges(true);
  };

  const removeSquadAccess = (index: number) => {
    setCurrentBadge(prev => ({
      ...prev,
      squadDistribution: prev.squadDistribution.filter((_, i) => i !== index)
    }));
    setUnsavedChanges(true);
  };

  const saveBadge = () => {
    const savedBadge = {
      ...currentBadge,
      metadata: {
        ...currentBadge.metadata,
        version: `v${parseFloat(currentBadge.metadata.version.replace('v', '')) + 0.1}`.replace('.10', '.1')
      }
    };
    
    setCurrentBadge(savedBadge);
    setUnsavedChanges(false);
    
    if (onSave) {
      onSave(savedBadge);
    }
  };

  const publishBadge = () => {
    const publishedBadge = {
      ...currentBadge,
      metadata: {
        ...currentBadge.metadata,
        status: 'active' as const
      }
    };
    
    setCurrentBadge(publishedBadge);
    setUnsavedChanges(false);
    
    if (onPublish) {
      onPublish(publishedBadge);
    }
  };

  const exportBadge = () => {
    const exportData = {
      badge: currentBadge,
      exportedAt: new Date().toISOString(),
      format: 'overwatch-badge-v1'
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `badge-${currentBadge.id}-${currentBadge.metadata.version}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Bronze': return <Trophy className="w-4 h-4 text-orange-600" />;
      case 'Silver': return <Trophy className="w-4 h-4 text-gray-400" />;
      case 'Gold': return <Trophy className="w-4 h-4 text-yellow-500" />;
      case 'Platinum': return <Crown className="w-4 h-4 text-purple-400" />;
      case 'Diamond': return <Gem className="w-4 h-4 text-blue-400" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Rare': return 'text-blue-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-orange-400';
      default: return 'text-gray-400';
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
                {text.backToSystem}
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {unsavedChanges && (
                <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                  <Edit3 className="w-3 h-3 mr-1" />
                  {text.unsavedChanges}
                </Badge>
              )}
              <Badge 
                variant={currentBadge.metadata.status === 'active' ? 'default' : 'secondary'}
                className={
                  currentBadge.metadata.status === 'active' ? 'bg-green-500 text-white' :
                  currentBadge.metadata.status === 'draft' ? 'bg-yellow-500 text-black' :
                  'bg-gray-500 text-white'
                }
              >
                {currentBadge.metadata.status.toUpperCase()}
              </Badge>
              <span className="text-sm text-muted-foreground">{currentBadge.metadata.version}</span>
              <Button variant="outline" onClick={() => {}}>
                <Eye className="w-4 h-4 mr-2" />
                {text.preview}
              </Button>
              <Button variant="outline" onClick={exportBadge}>
                <Download className="w-4 h-4 mr-2" />
                {text.export}
              </Button>
              <Button variant="outline" onClick={saveBadge} disabled={!unsavedChanges}>
                <Save className="w-4 h-4 mr-2" />
                {text.save}
              </Button>
              <Button onClick={publishBadge}>
                <CheckCircle className="w-4 h-4 mr-2" />
                {text.publish}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Panel */}
          <div className="lg:col-span-2">
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="metadata" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  {text.badgeMetadata}
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  {text.visualDesign}
                </TabsTrigger>
                <TabsTrigger value="logic" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  {text.unlockLogic}
                </TabsTrigger>
                <TabsTrigger value="triggers" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {text.replayTriggers}
                </TabsTrigger>
                <TabsTrigger value="squads" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {text.squadDistribution}
                </TabsTrigger>
              </TabsList>

              {/* Badge Metadata Tab */}
              <TabsContent value="metadata" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Basic Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.badgeTitle} (EN)</label>
                        <Input
                          value={currentBadge.title.en}
                          onChange={(e) => updateBilingualField('title', 'en', e.target.value)}
                          placeholder="Trust Velocity Master"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.badgeTitle} (ES)</label>
                        <Input
                          value={currentBadge.title.es}
                          onChange={(e) => updateBilingualField('title', 'es', e.target.value)}
                          placeholder="Maestro de Velocidad de Confianza"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.category}</label>
                        <Input
                          value={currentBadge.category}
                          onChange={(e) => updateBadgeMetadata('category', e.target.value)}
                          placeholder="Finance"
                        />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Properties</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.level}</label>
                        <select
                          value={currentBadge.level}
                          onChange={(e) => updateBadgeMetadata('level', e.target.value)}
                          className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                        >
                          <option value="Bronze">{text.bronze}</option>
                          <option value="Silver">{text.silver}</option>
                          <option value="Gold">{text.gold}</option>
                          <option value="Platinum">{text.platinum}</option>
                          <option value="Diamond">{text.diamond}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.rarity}</label>
                        <select
                          value={currentBadge.rarity}
                          onChange={(e) => updateBadgeMetadata('rarity', e.target.value)}
                          className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                        >
                          <option value="Common">{text.common}</option>
                          <option value="Rare">{text.rare}</option>
                          <option value="Epic">{text.epic}</option>
                          <option value="Legendary">{text.legendary}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{text.points}</label>
                        <Input
                          type="number"
                          value={currentBadge.points}
                          onChange={(e) => updateBadgeMetadata('points', parseInt(e.target.value))}
                          placeholder="500"
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">{text.description}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Description (EN)</label>
                      <Textarea
                        value={currentBadge.description.en}
                        onChange={(e) => updateBilingualField('description', 'en', e.target.value)}
                        placeholder="Mastery of trust velocity optimization in founder-led companies"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Description (ES)</label>
                      <Textarea
                        value={currentBadge.description.es}
                        onChange={(e) => updateBilingualField('description', 'es', e.target.value)}
                        placeholder="Dominio de la optimización de velocidad de confianza en empresas lideradas por fundadores"
                        rows={3}
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Tags & Schema</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {currentBadge.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button
                              onClick={() => {
                                const newTags = currentBadge.tags.filter((_, i) => i !== index);
                                updateBadgeMetadata('tags', newTags);
                              }}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            const newTag = prompt(language === 'en' ? 'Enter tag:' : 'Ingresar tag:');
                            if (newTag) {
                              updateBadgeMetadata('tags', [...currentBadge.tags, newTag]);
                            }
                          }}
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          Add Tag
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Visual Design Tab */}
              <TabsContent value="design" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">{text.iconPicker}</h3>
                    <div className="grid grid-cols-6 gap-2">
                      {ICON_LIBRARY.map((icon) => (
                        <button
                          key={icon}
                          onClick={() => updateBadgeMetadata('icon', icon)}
                          className={`p-3 rounded border-2 transition-colors ${
                            currentBadge.icon === icon
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <span className="text-2xl">{icon}</span>
                        </button>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">{text.colorPalette}</h3>
                    <div className="space-y-3">
                      {Object.entries(COLOR_PALETTES).map(([key, palette]) => (
                        <button
                          key={key}
                          onClick={() => updateColorPalette(key)}
                          className={`w-full p-3 rounded border-2 transition-colors ${
                            JSON.stringify(currentBadge.colorPalette) === JSON.stringify(palette)
                              ? 'border-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: palette.primary }}
                              />
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: palette.secondary }}
                              />
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: palette.accent }}
                              />
                            </div>
                            <span className="text-sm capitalize">{key.replace('-', ' ')}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Unlock Logic Tab */}
              <TabsContent value="logic" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{text.unlockLogic}</h3>
                  <Button onClick={addUnlockRule}>
                    <Plus className="w-4 h-4 mr-2" />
                    {text.addRule}
                  </Button>
                </div>

                <div className="space-y-4">
                  {currentBadge.unlockLogic.map((rule, index) => (
                    <Card key={rule.id} className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-medium">Rule {index + 1}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeUnlockRule(rule.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Type</label>
                          <select
                            value={rule.type}
                            onChange={(e) => updateUnlockRule(rule.id, 'type', e.target.value)}
                            className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                          >
                            <option value="completion">Completion</option>
                            <option value="performance">Performance</option>
                            <option value="sequence">Sequence</option>
                            <option value="time">Time</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Condition</label>
                          <Input
                            value={rule.condition}
                            onChange={(e) => updateUnlockRule(rule.id, 'condition', e.target.value)}
                            placeholder="Overlay Completed"
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Operator</label>
                          <select
                            value={rule.operator}
                            onChange={(e) => updateUnlockRule(rule.id, 'operator', e.target.value)}
                            className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                          >
                            <option value="=">=</option>
                            <option value=">">{'>'}</option>
                            <option value=">=">{'>='}</option>
                            <option value="<">{'<'}</option>
                            <option value="<=">{'>='}</option>
                            <option value="contains">contains</option>
                            <option value="in">in</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs text-muted-foreground mb-1">Value</label>
                        <Input
                          value={rule.value}
                          onChange={(e) => updateUnlockRule(rule.id, 'value', e.target.value)}
                          placeholder="3.0"
                          className="text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Description (EN)</label>
                          <Input
                            value={rule.description.en}
                            onChange={(e) => updateUnlockRule(rule.id, 'description', { ...rule.description, en: e.target.value })}
                            placeholder="Achieve clarity index of 3.0x or higher"
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Description (ES)</label>
                          <Input
                            value={rule.description.es}
                            onChange={(e) => updateUnlockRule(rule.id, 'description', { ...rule.description, es: e.target.value })}
                            placeholder="Lograr un índice de claridad de 3.0x o superior"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                          <label className="block text-xs text-muted-foreground">Weight</label>
                          <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="1"
                            value={rule.weight}
                            onChange={(e) => updateUnlockRule(rule.id, 'weight', parseFloat(e.target.value))}
                            className="w-20 text-sm"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Enabled</label>
                          <input
                            type="checkbox"
                            checked={rule.enabled}
                            onChange={(e) => updateUnlockRule(rule.id, 'enabled', e.target.checked)}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Replay Triggers Tab */}
              <TabsContent value="triggers" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{text.replayTriggers}</h3>
                  <Button onClick={addReplayTrigger}>
                    <Plus className="w-4 h-4 mr-2" />
                    {text.addTrigger}
                  </Button>
                </div>

                <div className="space-y-4">
                  {currentBadge.replayTriggers.map((trigger, index) => (
                    <Card key={trigger.id} className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-medium">Trigger {index + 1}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeReplayTrigger(trigger.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Event</label>
                          <select
                            value={trigger.event}
                            onChange={(e) => updateReplayTrigger(trigger.id, 'event', e.target.value)}
                            className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                          >
                            <option value="badge_earned">Badge Earned</option>
                            <option value="badge_shared">Badge Shared</option>
                            <option value="badge_viewed">Badge Viewed</option>
                            <option value="demo_launched">Demo Launched</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Action</label>
                          <Input
                            value={trigger.action}
                            onChange={(e) => updateReplayTrigger(trigger.id, 'action', e.target.value)}
                            placeholder="Launch trust velocity demo sequence"
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Delay (ms)</label>
                          <Input
                            type="number"
                            value={trigger.delay}
                            onChange={(e) => updateReplayTrigger(trigger.id, 'delay', parseInt(e.target.value))}
                            placeholder="0"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs text-muted-foreground mb-1">Conditions</label>
                        <div className="flex flex-wrap gap-2">
                          {trigger.conditions.map((condition, condIndex) => (
                            <Badge key={condIndex} variant="secondary" className="flex items-center gap-1">
                              {condition}
                              <button
                                onClick={() => {
                                  const newConditions = trigger.conditions.filter((_, i) => i !== condIndex);
                                  updateReplayTrigger(trigger.id, 'conditions', newConditions);
                                }}
                                className="ml-1 hover:text-destructive"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </Badge>
                          ))}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const newCondition = prompt('Enter condition (e.g., role=Founder):');
                              if (newCondition) {
                                updateReplayTrigger(trigger.id, 'conditions', [...trigger.conditions, newCondition]);
                              }
                            }}
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            Add Condition
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-end mt-4">
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-muted-foreground">Enabled</label>
                          <input
                            type="checkbox"
                            checked={trigger.enabled}
                            onChange={(e) => updateReplayTrigger(trigger.id, 'enabled', e.target.checked)}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Squad Distribution Tab */}
              <TabsContent value="squads" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{text.squadDistribution}</h3>
                  <Button onClick={addSquadAccess}>
                    <Plus className="w-4 h-4 mr-2" />
                    {text.addSquad}
                  </Button>
                </div>

                <div className="space-y-4">
                  {currentBadge.squadDistribution.map((squad, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-medium">Squad {index + 1}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSquadAccess(index)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Squad ID</label>
                          <Input
                            value={squad.squadId}
                            onChange={(e) => updateSquadAccess(index, 'squadId', e.target.value)}
                            placeholder="latam-gtm"
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs text-muted-foreground mb-1">Squad Name</label>
                          <Input
                            value={squad.squadName}
                            onChange={(e) => updateSquadAccess(index, 'squadName', e.target.value)}
                            placeholder="LatAm GTM Strike Team"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs text-muted-foreground mb-1">Roles</label>
                        <div className="flex flex-wrap gap-2">
                          {squad.roles.map((role, roleIndex) => (
                            <Badge key={roleIndex} variant="secondary" className="flex items-center gap-1">
                              {role}
                              <button
                                onClick={() => {
                                  const newRoles = squad.roles.filter((_, i) => i !== roleIndex);
                                  updateSquadAccess(index, 'roles', newRoles);
                                }}
                                className="ml-1 hover:text-destructive"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </Badge>
                          ))}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const newRole = prompt('Enter role:');
                              if (newRole) {
                                updateSquadAccess(index, 'roles', [...squad.roles, newRole]);
                              }
                            }}
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            Add Role
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs text-muted-foreground mb-1">Market Tags</label>
                        <div className="flex flex-wrap gap-2">
                          {squad.marketTags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="flex items-center gap-1">
                              {tag}
                              <button
                                onClick={() => {
                                  const newTags = squad.marketTags.filter((_, i) => i !== tagIndex);
                                  updateSquadAccess(index, 'marketTags', newTags);
                                }}
                                className="ml-1 hover:text-destructive"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </Badge>
                          ))}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const newTag = prompt('Enter market tag:');
                              if (newTag) {
                                updateSquadAccess(index, 'marketTags', [...squad.marketTags, newTag]);
                              }
                            }}
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            Add Tag
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs text-muted-foreground mb-1">Access Level</label>
                        <select
                          value={squad.accessLevel}
                          onChange={(e) => updateSquadAccess(index, 'accessLevel', e.target.value)}
                          className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                        >
                          <option value="view">View</option>
                          <option value="earn">Earn</option>
                          <option value="manage">Manage</option>
                        </select>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {text.preview}
                </h3>

                {/* Badge Preview */}
                <motion.div
                  className="relative w-full aspect-square max-w-xs mx-auto mb-6 rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${currentBadge.colorPalette.primary}, ${currentBadge.colorPalette.secondary})`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6">
                    <div className="text-6xl mb-4">{currentBadge.icon}</div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-1">
                        {currentBadge.title[language]}
                      </h4>
                      <p className="text-sm opacity-90 mb-2">
                        {currentBadge.description[language]}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        {getLevelIcon(currentBadge.level)}
                        <span className="text-sm font-medium">{currentBadge.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-4 py-2">
                    <div className="flex items-center justify-between text-xs text-white">
                      <span className={getRarityColor(currentBadge.rarity)}>
                        {currentBadge.rarity}
                      </span>
                      <span>{currentBadge.points} pts</span>
                    </div>
                  </div>
                </motion.div>

                {/* Badge Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{currentBadge.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rules:</span>
                    <span>{currentBadge.unlockLogic.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Triggers:</span>
                    <span>{currentBadge.replayTriggers.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Squads:</span>
                    <span>{currentBadge.squadDistribution.length}</span>
                  </div>
                </div>

                {/* Preview Mode Selector */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Preview Mode</label>
                  <select
                    value={previewMode}
                    onChange={(e) => setPreviewMode(e.target.value as any)}
                    className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                  >
                    <option value="card">Card View</option>
                    <option value="modal">Modal View</option>
                    <option value="notification">Notification</option>
                  </select>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}