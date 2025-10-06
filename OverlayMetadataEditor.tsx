import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Settings,
  Tag,
  Globe,
  Zap,
  Target,
  BookOpen,
  Save,
  Eye,
  ArrowLeft,
  Plus,
  X,
  Play,
  Award,
  Clock,
  Users
} from 'lucide-react';

interface OverlayMetadata {
  id: string;
  title: string;
  description: string;
  schemaTrace: string;
  tags: string[];
  language: 'EN' | 'ES' | 'BOTH';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  coachingFocus: string;
  expectedImpact: string;
  prerequisites: string[];
  badgeUnlock?: {
    title: string;
    icon: string;
    level: 'Bronze' | 'Silver' | 'Gold';
  };
  replayTriggers: string[];
  clarityMetrics: {
    beforeScore: number;
    afterScore: number;
    liftMultiplier: number;
  };
  coachingScript: {
    intro: string;
    mainContent: string;
    reflection: string;
    actionItems: string[];
  };
}

interface OverlayMetadataEditorProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  initialOverlay?: Partial<OverlayMetadata>;
  onSave?: (overlay: OverlayMetadata) => void;
  onPreview?: (overlay: OverlayMetadata) => void;
}

export default function OverlayMetadataEditor({
  language,
  onNavigate,
  initialOverlay,
  onSave,
  onPreview
}: OverlayMetadataEditorProps) {
  const [overlay, setOverlay] = useState<OverlayMetadata>({
    id: initialOverlay?.id || `overlay-${Date.now()}`,
    title: initialOverlay?.title || '',
    description: initialOverlay?.description || '',
    schemaTrace: initialOverlay?.schemaTrace || '',
    tags: initialOverlay?.tags || [],
    language: initialOverlay?.language || 'EN',
    difficulty: initialOverlay?.difficulty || 'intermediate',
    estimatedTime: initialOverlay?.estimatedTime || '30min',
    coachingFocus: initialOverlay?.coachingFocus || '',
    expectedImpact: initialOverlay?.expectedImpact || '',
    prerequisites: initialOverlay?.prerequisites || [],
    badgeUnlock: initialOverlay?.badgeUnlock || undefined,
    replayTriggers: initialOverlay?.replayTriggers || [],
    clarityMetrics: initialOverlay?.clarityMetrics || {
      beforeScore: 2.0,
      afterScore: 4.5,
      liftMultiplier: 2.25
    },
    coachingScript: initialOverlay?.coachingScript || {
      intro: '',
      mainContent: '',
      reflection: '',
      actionItems: []
    }
  });

  const [newTag, setNewTag] = useState('');
  const [newPrerequisite, setNewPrerequisite] = useState('');
  const [newTrigger, setNewTrigger] = useState('');
  const [newActionItem, setNewActionItem] = useState('');
  const [currentTab, setCurrentTab] = useState('metadata');

  const t = {
    en: {
      title: 'Overlay Metadata Editor',
      subtitle: 'Design schema-driven coaching experiences with precision',
      metadata: 'Overlay Metadata',
      coaching: 'Coaching Script',
      triggers: 'Replay Triggers',
      metrics: 'Clarity Metrics',
      badges: 'Badge Logic',
      overlayTitle: 'Overlay Title',
      description: 'Description',
      schemaTrace: 'Schema Trace',
      tags: 'Tags',
      language: 'Language',
      difficulty: 'Difficulty',
      estimatedTime: 'Estimated Time',
      coachingFocus: 'Coaching Focus',
      expectedImpact: 'Expected Impact',
      prerequisites: 'Prerequisites',
      addTag: 'Add Tag',
      addPrerequisite: 'Add Prerequisite',
      addTrigger: 'Add Trigger',
      addActionItem: 'Add Action Item',
      replayTriggers: 'Replay Triggers',
      beforeScore: 'Before Score',
      afterScore: 'After Score',
      liftMultiplier: 'Lift Multiplier',
      badgeTitle: 'Badge Title',
      badgeIcon: 'Badge Icon',
      badgeLevel: 'Badge Level',
      intro: 'Introduction',
      mainContent: 'Main Content',
      reflection: 'Reflection',
      actionItems: 'Action Items',
      save: 'Save Overlay',
      preview: 'Preview',
      back: 'Back to Dashboard',
      both: 'Both',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      bronze: 'Bronze',
      silver: 'Silver',
      gold: 'Gold'
    },
    es: {
      title: 'Editor de Metadatos de Overlay',
      subtitle: 'Diseña experiencias de coaching basadas en esquemas con precisión',
      metadata: 'Metadatos Overlay',
      coaching: 'Script Coaching',
      triggers: 'Triggers Replay',
      metrics: 'Métricas Claridad',
      badges: 'Lógica Insignias',
      overlayTitle: 'Título Overlay',
      description: 'Descripción',
      schemaTrace: 'Trazo Esquema',
      tags: 'Etiquetas',
      language: 'Idioma',
      difficulty: 'Dificultad',
      estimatedTime: 'Tiempo Estimado',
      coachingFocus: 'Enfoque Coaching',
      expectedImpact: 'Impacto Esperado',
      prerequisites: 'Prerrequisitos',
      addTag: 'Agregar Etiqueta',
      addPrerequisite: 'Agregar Prerrequisito',
      addTrigger: 'Agregar Trigger',
      addActionItem: 'Agregar Acción',
      replayTriggers: 'Triggers Replay',
      beforeScore: 'Puntuación Antes',
      afterScore: 'Puntuación Después',
      liftMultiplier: 'Multiplicador Impulso',
      badgeTitle: 'Título Insignia',
      badgeIcon: 'Ícono Insignia',
      badgeLevel: 'Nivel Insignia',
      intro: 'Introducción',
      mainContent: 'Contenido Principal',
      reflection: 'Reflexión',
      actionItems: 'Elementos Acción',
      save: 'Guardar Overlay',
      preview: 'Vista Previa',
      back: 'Volver al Dashboard',
      both: 'Ambos',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      bronze: 'Bronce',
      silver: 'Plata',
      gold: 'Oro'
    }
  };

  const text = t[language];

  // Predefined tags
  const availableTags = [
    'Finance', 'Law', 'Time', 'Trigger', 'Clarity', 'Strategy',
    'Investor-facing', 'Schema-first', 'Bilingual', 'ROI-focused',
    'Culture-driven', 'LatAm GTM', 'Crisis Response', 'Scale-ready'
  ];

  // Schema traces
  const availableSchemas = [
    'finance.trust-velocity',
    'finance.ethical-roi',
    'law.assumed-right',
    'law.compliance-framework',
    'time.velocity-modeling',
    'time.strategic-allocation',
    'trigger.difficulty-risk',
    'trigger.market-opportunity'
  ];

  const addTag = () => {
    if (newTag && !overlay.tags.includes(newTag)) {
      setOverlay(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setOverlay(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addPrerequisite = () => {
    if (newPrerequisite && !overlay.prerequisites.includes(newPrerequisite)) {
      setOverlay(prev => ({
        ...prev,
        prerequisites: [...prev.prerequisites, newPrerequisite]
      }));
      setNewPrerequisite('');
    }
  };

  const removePrerequisite = (prereq: string) => {
    setOverlay(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.filter(p => p !== prereq)
    }));
  };

  const addTrigger = () => {
    if (newTrigger && !overlay.replayTriggers.includes(newTrigger)) {
      setOverlay(prev => ({
        ...prev,
        replayTriggers: [...prev.replayTriggers, newTrigger]
      }));
      setNewTrigger('');
    }
  };

  const removeTrigger = (trigger: string) => {
    setOverlay(prev => ({
      ...prev,
      replayTriggers: prev.replayTriggers.filter(t => t !== trigger)
    }));
  };

  const addActionItem = () => {
    if (newActionItem) {
      setOverlay(prev => ({
        ...prev,
        coachingScript: {
          ...prev.coachingScript,
          actionItems: [...prev.coachingScript.actionItems, newActionItem]
        }
      }));
      setNewActionItem('');
    }
  };

  const removeActionItem = (index: number) => {
    setOverlay(prev => ({
      ...prev,
      coachingScript: {
        ...prev.coachingScript,
        actionItems: prev.coachingScript.actionItems.filter((_, i) => i !== index)
      }
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(overlay);
    }
    console.log('Saving overlay:', overlay);
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(overlay);
    }
    console.log('Previewing overlay:', overlay);
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
                onClick={() => onNavigate('squad-dashboard')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {text.back}
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => onNavigate('advanced-script-editor')}
                className="bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20"
              >
                <Settings className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Advanced Editor' : 'Editor Avanzado'}
              </Button>
              <Button variant="outline" onClick={handlePreview}>
                <Eye className="w-4 h-4 mr-2" />
                {text.preview}
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                {text.save}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="metadata" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              {text.metadata}
            </TabsTrigger>
            <TabsTrigger value="coaching" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {text.coaching}
            </TabsTrigger>
            <TabsTrigger value="triggers" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              {text.triggers}
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              {text.metrics}
            </TabsTrigger>
            <TabsTrigger value="badges" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {text.badges}
            </TabsTrigger>
          </TabsList>

          {/* Metadata Tab */}
          <TabsContent value="metadata" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.overlayTitle}</label>
                    <Input
                      value={overlay.title}
                      onChange={(e) => setOverlay(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Trust Velocity Mastery"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.description}</label>
                    <Textarea
                      value={overlay.description}
                      onChange={(e) => setOverlay(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Strategic framework for optimizing capital velocity through trust-based relationships..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.schemaTrace}</label>
                    <select
                      value={overlay.schemaTrace}
                      onChange={(e) => setOverlay(prev => ({ ...prev, schemaTrace: e.target.value }))}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                    >
                      <option value="">Select schema trace...</option>
                      {availableSchemas.map(schema => (
                        <option key={schema} value={schema}>{schema}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Configuration</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{text.language}</label>
                      <select
                        value={overlay.language}
                        onChange={(e) => setOverlay(prev => ({ ...prev, language: e.target.value as 'EN' | 'ES' | 'BOTH' }))}
                        className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                      >
                        <option value="EN">EN</option>
                        <option value="ES">ES</option>
                        <option value="BOTH">{text.both}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">{text.difficulty}</label>
                      <select
                        value={overlay.difficulty}
                        onChange={(e) => setOverlay(prev => ({ ...prev, difficulty: e.target.value as 'beginner' | 'intermediate' | 'advanced' }))}
                        className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                      >
                        <option value="beginner">{text.beginner}</option>
                        <option value="intermediate">{text.intermediate}</option>
                        <option value="advanced">{text.advanced}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.estimatedTime}</label>
                    <Input
                      value={overlay.estimatedTime}
                      onChange={(e) => setOverlay(prev => ({ ...prev, estimatedTime: e.target.value }))}
                      placeholder="30min"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.coachingFocus}</label>
                    <Input
                      value={overlay.coachingFocus}
                      onChange={(e) => setOverlay(prev => ({ ...prev, coachingFocus: e.target.value }))}
                      placeholder="Capital velocity optimization"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.expectedImpact}</label>
                    <Input
                      value={overlay.expectedImpact}
                      onChange={(e) => setOverlay(prev => ({ ...prev, expectedImpact: e.target.value }))}
                      placeholder="2.5x clarity index improvement"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Tags Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.tags}</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {overlay.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {text.addTag}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableTags.filter(tag => !overlay.tags.includes(tag)).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-secondary"
                      onClick={() => setOverlay(prev => ({ ...prev, tags: [...prev.tags, tag] }))}
                    >
                      + {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Prerequisites Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.prerequisites}</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  {overlay.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded">
                      <span>{prereq}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removePrerequisite(prereq)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newPrerequisite}
                    onChange={(e) => setNewPrerequisite(e.target.value)}
                    placeholder="Add prerequisite schema trace..."
                    onKeyPress={(e) => e.key === 'Enter' && addPrerequisite()}
                  />
                  <Button onClick={addPrerequisite} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {text.addPrerequisite}
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Coaching Script Tab */}
          <TabsContent value="coaching" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Coaching Script</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{text.intro}</label>
                  <Textarea
                    value={overlay.coachingScript.intro}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      coachingScript: { ...prev.coachingScript, intro: e.target.value }
                    }))}
                    placeholder="Welcome to the Trust Velocity Mastery overlay. This session will guide you through..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{text.mainContent}</label>
                  <Textarea
                    value={overlay.coachingScript.mainContent}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      coachingScript: { ...prev.coachingScript, mainContent: e.target.value }
                    }))}
                    placeholder="Trust moves faster than capital. In founder-led companies, establishing trust velocity is crucial for..."
                    rows={6}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{text.reflection}</label>
                  <Textarea
                    value={overlay.coachingScript.reflection}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      coachingScript: { ...prev.coachingScript, reflection: e.target.value }
                    }))}
                    placeholder="Take a moment to reflect on how trust velocity principles apply to your current business situation..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{text.actionItems}</label>
                  <div className="space-y-2">
                    {overlay.coachingScript.actionItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-sm bg-secondary/50 p-2 rounded flex-1">{item}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeActionItem(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Input
                      value={newActionItem}
                      onChange={(e) => setNewActionItem(e.target.value)}
                      placeholder="Add action item..."
                      onKeyPress={(e) => e.key === 'Enter' && addActionItem()}
                    />
                    <Button onClick={addActionItem} size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      {text.addActionItem}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Replay Triggers Tab */}
          <TabsContent value="triggers" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.replayTriggers}</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  {overlay.replayTriggers.map((trigger, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded">
                      <span>{trigger}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeTrigger(trigger)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTrigger}
                    onChange={(e) => setNewTrigger(e.target.value)}
                    placeholder="Add replay trigger condition..."
                    onKeyPress={(e) => e.key === 'Enter' && addTrigger()}
                  />
                  <Button onClick={addTrigger} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {text.addTrigger}
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Examples: completion_score {'>='} 4.0, feedback_submitted, demo_launched</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Clarity Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.metrics}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{text.beforeScore}</label>
                  <Input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={overlay.clarityMetrics.beforeScore}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      clarityMetrics: { ...prev.clarityMetrics, beforeScore: parseFloat(e.target.value) }
                    }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{text.afterScore}</label>
                  <Input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={overlay.clarityMetrics.afterScore}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      clarityMetrics: { ...prev.clarityMetrics, afterScore: parseFloat(e.target.value) }
                    }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{text.liftMultiplier}</label>
                  <Input
                    type="number"
                    step="0.1"
                    min="1"
                    value={overlay.clarityMetrics.liftMultiplier}
                    onChange={(e) => setOverlay(prev => ({
                      ...prev,
                      clarityMetrics: { ...prev.clarityMetrics, liftMultiplier: parseFloat(e.target.value) }
                    }))}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold mb-2">Projected Impact</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-500">{overlay.clarityMetrics.beforeScore}</p>
                    <p className="text-sm text-muted-foreground">Before</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-500">{overlay.clarityMetrics.afterScore}</p>
                    <p className="text-sm text-muted-foreground">After</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-500">{overlay.clarityMetrics.liftMultiplier}x</p>
                    <p className="text-sm text-muted-foreground">Lift</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Badge Logic Tab */}
          <TabsContent value="badges" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{text.badges}</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.badgeTitle}</label>
                    <Input
                      value={overlay.badgeUnlock?.title || ''}
                      onChange={(e) => setOverlay(prev => ({
                        ...prev,
                        badgeUnlock: { ...prev.badgeUnlock, title: e.target.value, icon: prev.badgeUnlock?.icon || '🏆', level: prev.badgeUnlock?.level || 'Gold' }
                      }))}
                      placeholder="Trust Velocity Master"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.badgeIcon}</label>
                    <Input
                      value={overlay.badgeUnlock?.icon || ''}
                      onChange={(e) => setOverlay(prev => ({
                        ...prev,
                        badgeUnlock: { ...prev.badgeUnlock, icon: e.target.value, title: prev.badgeUnlock?.title || '', level: prev.badgeUnlock?.level || 'Gold' }
                      }))}
                      placeholder="🧩"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.badgeLevel}</label>
                    <select
                      value={overlay.badgeUnlock?.level || 'Gold'}
                      onChange={(e) => setOverlay(prev => ({
                        ...prev,
                        badgeUnlock: { ...prev.badgeUnlock, level: e.target.value as 'Bronze' | 'Silver' | 'Gold', title: prev.badgeUnlock?.title || '', icon: prev.badgeUnlock?.icon || '🏆' }
                      }))}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
                    >
                      <option value="Bronze">{text.bronze}</option>
                      <option value="Silver">{text.silver}</option>
                      <option value="Gold">{text.gold}</option>
                    </select>
                  </div>
                </div>
                
                {overlay.badgeUnlock && (
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Badge Preview</h4>
                    <div className="flex items-center gap-3 p-3 border border-border rounded">
                      <span className="text-2xl">{overlay.badgeUnlock.icon}</span>
                      <div>
                        <p className="font-medium">{overlay.badgeUnlock.title}</p>
                        <Badge variant={overlay.badgeUnlock.level === 'Gold' ? 'default' : 'secondary'}>
                          {overlay.badgeUnlock.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}