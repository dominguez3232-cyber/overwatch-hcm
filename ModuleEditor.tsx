import React, { useState, useCallback } from 'react';
import { motion, Reorder } from 'motion/react';
import { 
  Save, 
  Play, 
  Share2, 
  Settings, 
  Layers, 
  Code, 
  Eye, 
  Upload,
  Download,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
  GripVertical,
  Edit3
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import DemoSequenceController from './DemoSequenceControllerSafe';

interface OverlayBlock {
  id: string;
  trace: string;
  caption: string;
  category: string;
  metricContext: string;
  strategicGuidance: string;
  tacticalTip: string;
  order: number;
}

interface ModuleData {
  id: string;
  title: string;
  description: string;
  language: 'en' | 'es';
  tags: string[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  overlays: OverlayBlock[];
  pacing: {
    delay: number;
    autoPlay: boolean;
  };
  status: 'draft' | 'published';
}

interface ModuleEditorProps {
  language: 'en' | 'es';
  initialModule?: Partial<ModuleData>;
  onSave?: (module: ModuleData) => void;
  onPublish?: (module: ModuleData) => void;
  onBack?: () => void;
  className?: string;
}

const translations = {
  en: {
    title: 'Module Editor',
    subtitle: 'Create and customize strategic coaching modules',
    
    steps: {
      moduleInfo: 'Module Info',
      overlayTimeline: 'Overlay Timeline',
      coachingInjection: 'Coaching Injection',
      previewPacing: 'Preview & Pacing',
      saveDeploy: 'Save & Deploy'
    },
    
    moduleInfo: {
      title: 'Module Information',
      moduleTitle: 'Module Title',
      moduleDescription: 'Module Description',
      language: 'Language',
      tags: 'Tags',
      category: 'Category',
      difficulty: 'Difficulty',
      estimatedTime: 'Estimated Time',
      addTag: 'Add Tag'
    },
    
    overlayTimeline: {
      title: 'Overlay Timeline',
      subtitle: 'Arrange coaching overlays in sequence',
      addOverlay: 'Add Overlay',
      removeOverlay: 'Remove Overlay',
      editOverlay: 'Edit Overlay',
      reorderHint: 'Drag to reorder overlays'
    },
    
    coachingInjection: {
      title: 'Coaching Editor',
      metricContext: 'Metric Context',
      strategicGuidance: 'Strategic Guidance',
      tacticalTip: 'Tactical Tip',
      schemaTrace: 'Schema Trace',
      selectOverlay: 'Select an overlay to edit'
    },
    
    previewPacing: {
      title: 'Preview & Pacing',
      subtitle: 'Test your module and adjust timing',
      autoPlay: 'Auto Play',
      delay: 'Delay (ms)',
      preview: 'Preview Module',
      resetPreview: 'Reset Preview'
    },
    
    saveDeploy: {
      title: 'Save & Deploy',
      subtitle: 'Finalize and publish your module',
      saveAsDraft: 'Save as Draft',
      publish: 'Publish Module',
      share: 'Share Module',
      export: 'Export Module',
      import: 'Import Module'
    },
    
    categories: {
      foundation: 'Foundation',
      strategy: 'Strategy',
      execution: 'Execution',
      analysis: 'Analysis'
    },
    
    difficulties: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    
    status: {
      draft: 'Draft',
      published: 'Published',
      saving: 'Saving...',
      saved: 'Saved',
      error: 'Error'
    }
  },
  es: {
    title: 'Editor de Módulos',
    subtitle: 'Crear y personalizar módulos de coaching estratégico',
    
    steps: {
      moduleInfo: 'Info del Módulo',
      overlayTimeline: 'Línea de Tiempo',
      coachingInjection: 'Inyección de Coaching',
      previewPacing: 'Vista Previa y Ritmo',
      saveDeploy: 'Guardar y Desplegar'
    },
    
    moduleInfo: {
      title: 'Información del Módulo',
      moduleTitle: 'Título del Módulo',
      moduleDescription: 'Descripción del Módulo',
      language: 'Idioma',
      tags: 'Etiquetas',
      category: 'Categoría',
      difficulty: 'Dificultad',
      estimatedTime: 'Tiempo Estimado',
      addTag: 'Agregar Etiqueta'
    },
    
    overlayTimeline: {
      title: 'Línea de Tiempo de Overlays',
      subtitle: 'Organizar overlays de coaching en secuencia',
      addOverlay: 'Agregar Overlay',
      removeOverlay: 'Eliminar Overlay',
      editOverlay: 'Editar Overlay',
      reorderHint: 'Arrastra para reordenar overlays'
    },
    
    coachingInjection: {
      title: 'Editor de Coaching',
      metricContext: 'Contexto de Métrica',
      strategicGuidance: 'Guía Estratégica',
      tacticalTip: 'Consejo Táctico',
      schemaTrace: 'Traza de Esquema',
      selectOverlay: 'Selecciona un overlay para editar'
    },
    
    previewPacing: {
      title: 'Vista Previa y Ritmo',
      subtitle: 'Prueba tu módulo y ajusta el tiempo',
      autoPlay: 'Reproducción Automática',
      delay: 'Retraso (ms)',
      preview: 'Vista Previa del Módulo',
      resetPreview: 'Reiniciar Vista Previa'
    },
    
    saveDeploy: {
      title: 'Guardar y Desplegar',
      subtitle: 'Finalizar y publicar tu módulo',
      saveAsDraft: 'Guardar como Borrador',
      publish: 'Publicar Módulo',
      share: 'Compartir Módulo',
      export: 'Exportar Módulo',
      import: 'Importar Módulo'
    },
    
    categories: {
      foundation: 'Fundación',
      strategy: 'Estrategia',
      execution: 'Ejecución',
      analysis: 'Análisis'
    },
    
    difficulties: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    },
    
    status: {
      draft: 'Borrador',
      published: 'Publicado',
      saving: 'Guardando...',
      saved: 'Guardado',
      error: 'Error'
    }
  }
};

// Tag Selector Component
const TagSelector: React.FC<{
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  language: 'en' | 'es';
}> = ({ tags, onTagsChange, language }) => {
  const [newTag, setNewTag] = useState('');
  const t = translations[language];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      onTagsChange([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    onTagsChange(tags.filter(t => t !== tag));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder={t.moduleInfo.addTag}
          onKeyPress={(e) => e.key === 'Enter' && addTag()}
          className="flex-1"
        />
        <Button onClick={addTag} size="sm">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {tag}
            <button onClick={() => removeTag(tag)}>
              <Trash2 className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

// Module Info Editor Component
const ModuleInfoEditor: React.FC<{
  moduleData: ModuleData;
  onUpdate: (data: Partial<ModuleData>) => void;
  language: 'en' | 'es';
}> = ({ moduleData, onUpdate, language }) => {
  const t = translations[language];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{t.moduleInfo.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.moduleTitle}</label>
            <Input
              value={moduleData.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              placeholder="Founder Clarity Sprint"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.moduleDescription}</label>
            <Textarea
              value={moduleData.description}
              onChange={(e) => onUpdate({ description: e.target.value })}
              placeholder="Strategic clarity framework for founder-led decision making..."
              className="min-h-[100px]"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.language}</label>
            <Select value={moduleData.language} onValueChange={(value: 'en' | 'es') => onUpdate({ language: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.category}</label>
            <Select value={moduleData.category} onValueChange={(value) => onUpdate({ category: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="foundation">{t.categories.foundation}</SelectItem>
                <SelectItem value="strategy">{t.categories.strategy}</SelectItem>
                <SelectItem value="execution">{t.categories.execution}</SelectItem>
                <SelectItem value="analysis">{t.categories.analysis}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.difficulty}</label>
            <Select value={moduleData.difficulty} onValueChange={(value: 'beginner' | 'intermediate' | 'advanced') => onUpdate({ difficulty: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">{t.difficulties.beginner}</SelectItem>
                <SelectItem value="intermediate">{t.difficulties.intermediate}</SelectItem>
                <SelectItem value="advanced">{t.difficulties.advanced}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.estimatedTime}</label>
            <Input
              value={moduleData.estimatedTime}
              onChange={(e) => onUpdate({ estimatedTime: e.target.value })}
              placeholder="45min"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.moduleInfo.tags}</label>
            <TagSelector
              tags={moduleData.tags}
              onTagsChange={(tags) => onUpdate({ tags })}
              language={language}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

// Overlay Timeline Component
const OverlayTimeline: React.FC<{
  overlays: OverlayBlock[];
  onUpdate: (overlays: OverlayBlock[]) => void;
  onSelectOverlay: (overlay: OverlayBlock) => void;
  selectedOverlay?: OverlayBlock;
  language: 'en' | 'es';
}> = ({ overlays, onUpdate, onSelectOverlay, selectedOverlay, language }) => {
  const t = translations[language];

  const addOverlay = () => {
    const newOverlay: OverlayBlock = {
      id: `overlay-${Date.now()}`,
      trace: 'finance.trust-velocity',
      caption: 'Trust moves faster than capital.',
      category: 'finance',
      metricContext: '',
      strategicGuidance: '',
      tacticalTip: '',
      order: overlays.length
    };
    onUpdate([...overlays, newOverlay]);
  };

  const removeOverlay = (id: string) => {
    onUpdate(overlays.filter(o => o.id !== id));
  };

  const reorderOverlays = (newOrder: OverlayBlock[]) => {
    const updatedOverlays = newOrder.map((overlay, index) => ({
      ...overlay,
      order: index
    }));
    onUpdate(updatedOverlays);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{t.overlayTimeline.title}</h3>
          <p className="text-sm text-muted-foreground">{t.overlayTimeline.subtitle}</p>
        </div>
        <Button onClick={addOverlay} size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          {t.overlayTimeline.addOverlay}
        </Button>
      </div>

      {overlays.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <Layers className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>No overlays added yet</p>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground mb-4">{t.overlayTimeline.reorderHint}</p>
          <Reorder.Group values={overlays} onReorder={reorderOverlays} className="space-y-3">
            {overlays.map((overlay) => (
              <Reorder.Item key={overlay.id} value={overlay}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border cursor-pointer transition-all ${
                    selectedOverlay?.id === overlay.id ? 'border-primary bg-primary/10' : 'hover:border-primary/50'
                  }`}
                  onClick={() => onSelectOverlay(overlay)}
                >
                  <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="text-sm bg-background px-2 py-1 rounded font-mono">
                        {overlay.trace}
                      </code>
                      <Badge variant="outline" className="text-xs">
                        {overlay.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{overlay.caption}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectOverlay(overlay);
                      }}
                    >
                      <Edit3 className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeOverlay(overlay.id);
                      }}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </>
      )}
    </Card>
  );
};

// Coaching Editor Component
const CoachingEditor: React.FC<{
  selectedOverlay?: OverlayBlock;
  onUpdateOverlay: (overlay: OverlayBlock) => void;
  language: 'en' | 'es';
}> = ({ selectedOverlay, onUpdateOverlay, language }) => {
  const t = translations[language];

  if (!selectedOverlay) {
    return (
      <Card className="p-6">
        <div className="text-center py-8 text-muted-foreground">
          <Code className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>{t.coachingInjection.selectOverlay}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{t.coachingInjection.title}</h3>
        <Badge variant="outline">{selectedOverlay.trace}</Badge>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">{t.coachingInjection.schemaTrace}</label>
          <Input
            value={selectedOverlay.trace}
            onChange={(e) => onUpdateOverlay({ ...selectedOverlay, trace: e.target.value })}
            placeholder="finance.trust-velocity"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.coachingInjection.metricContext}</label>
          <Input
            value={selectedOverlay.metricContext}
            onChange={(e) => onUpdateOverlay({ ...selectedOverlay, metricContext: e.target.value })}
            placeholder="Trust metrics and velocity indicators"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.coachingInjection.strategicGuidance}</label>
          <Textarea
            value={selectedOverlay.strategicGuidance}
            onChange={(e) => onUpdateOverlay({ ...selectedOverlay, strategicGuidance: e.target.value })}
            placeholder="Strategic approach to building trust velocity in capital relationships..."
            className="min-h-[80px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.coachingInjection.tacticalTip}</label>
          <Textarea
            value={selectedOverlay.tacticalTip}
            onChange={(e) => onUpdateOverlay({ ...selectedOverlay, tacticalTip: e.target.value })}
            placeholder="Specific actionable steps to implement trust velocity..."
            className="min-h-[80px]"
          />
        </div>
      </div>
    </Card>
  );
};

// Module Preview Component
const ModulePreview: React.FC<{
  moduleData: ModuleData;
  onUpdatePacing: (pacing: { delay: number; autoPlay: boolean }) => void;
  language: 'en' | 'es';
}> = ({ moduleData, onUpdatePacing, language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = translations[language];

  // Check if we have overlays to preview
  const hasOverlays = moduleData.overlays.length > 0;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{t.previewPacing.title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{t.previewPacing.subtitle}</p>

      {/* Pacing Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{t.previewPacing.autoPlay}</label>
            <Switch
              checked={moduleData.pacing.autoPlay}
              onCheckedChange={(checked) => 
                onUpdatePacing({ ...moduleData.pacing, autoPlay: checked })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              {t.previewPacing.delay}: {moduleData.pacing.delay}ms
            </label>
            <Slider
              value={[moduleData.pacing.delay]}
              onValueChange={([value]) => 
                onUpdatePacing({ ...moduleData.pacing, delay: value })
              }
              min={2000}
              max={10000}
              step={500}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1"
            >
              <Play className="w-4 h-4 mr-2" />
              {isPlaying ? 'Stop' : t.previewPacing.preview}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsPlaying(false)}
            >
              {t.previewPacing.resetPreview}
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            {moduleData.overlays.length} overlays • {moduleData.estimatedTime}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="border border-border rounded-lg p-4 bg-secondary/50 min-h-[200px]">
        {hasOverlays ? (
          <DemoSequenceController
            sequence={moduleData.overlays.map(overlay => overlay.trace)}
            autoPlay={isPlaying && moduleData.pacing.autoPlay}
            language={moduleData.language}
            delay={moduleData.pacing.delay}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Add overlays to preview module</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

// Save & Deploy Component
const SaveDeploySection: React.FC<{
  moduleData: ModuleData;
  onSave: (module: ModuleData) => void;
  onPublish: (module: ModuleData) => void;
  onExport: () => void;
  onImport: () => void;
  language: 'en' | 'es';
  isSaving?: boolean;
}> = ({ moduleData, onSave, onPublish, onExport, onImport, language, isSaving }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const t = translations[language];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{t.saveDeploy.title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{t.saveDeploy.subtitle}</p>

      {/* Module Status */}
      <div className="flex items-center gap-3 mb-6 p-4 bg-secondary rounded-lg">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium">{moduleData.title || 'Untitled Module'}</h4>
            <Badge variant={moduleData.status === 'published' ? 'default' : 'secondary'}>
              {t.status[moduleData.status]}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {moduleData.overlays.length} overlays • {moduleData.estimatedTime} • {t.categories[moduleData.category as keyof typeof t.categories]}
          </p>
        </div>
        {moduleData.status === 'published' && (
          <CheckCircle className="w-5 h-5 text-green-400" />
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          onClick={() => onSave(moduleData)}
          disabled={isSaving}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          {isSaving ? t.status.saving : t.saveDeploy.saveAsDraft}
        </Button>

        <Button
          onClick={() => onPublish(moduleData)}
          disabled={isSaving || !moduleData.title || moduleData.overlays.length === 0}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          <Upload className="w-4 h-4" />
          {t.saveDeploy.publish}
        </Button>

        <Dialog open={showShareModal} onOpenChange={setShowShareModal}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              {t.saveDeploy.share}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.saveDeploy.share} Module</DialogTitle>
              <DialogDescription>
                Share this module with your team or embed it in other applications
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                value={`https://overwatch3.com/modules/${moduleData.id}`}
                readOnly
                className="font-mono text-sm"
              />
              <Button className="w-full">Copy Link</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          onClick={onExport}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          {t.saveDeploy.export}
        </Button>
      </div>
    </Card>
  );
};

// Main Module Editor Component
export const ModuleEditor: React.FC<ModuleEditorProps> = ({
  language,
  initialModule = {},
  onSave,
  onPublish,
  onBack,
  className = ''
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOverlay, setSelectedOverlay] = useState<OverlayBlock | undefined>();
  const [isSaving, setIsSaving] = useState(false);
  
  const [moduleData, setModuleData] = useState<ModuleData>({
    id: initialModule.id || `module-${Date.now()}`,
    title: initialModule.title || '',
    description: initialModule.description || '',
    language: initialModule.language || language,
    tags: initialModule.tags || [],
    category: initialModule.category || 'foundation',
    difficulty: initialModule.difficulty || 'intermediate',
    estimatedTime: initialModule.estimatedTime || '45min',
    overlays: initialModule.overlays || [],
    pacing: initialModule.pacing || { delay: 3000, autoPlay: false },
    status: initialModule.status || 'draft'
  });

  const t = translations[language];

  const updateModuleData = useCallback((updates: Partial<ModuleData>) => {
    setModuleData(prev => ({ ...prev, ...updates }));
  }, []);

  const updateOverlay = useCallback((updatedOverlay: OverlayBlock) => {
    const updatedOverlays = moduleData.overlays.map(overlay =>
      overlay.id === updatedOverlay.id ? updatedOverlay : overlay
    );
    setModuleData(prev => ({ ...prev, overlays: updatedOverlays }));
    setSelectedOverlay(updatedOverlay);
  }, [moduleData.overlays]);

  const handleSave = async (module: ModuleData) => {
    setIsSaving(true);
    try {
      await onSave?.(module);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async (module: ModuleData) => {
    setIsSaving(true);
    try {
      const publishedModule = { ...module, status: 'published' as const };
      await onPublish?.(publishedModule);
      setModuleData(publishedModule);
    } finally {
      setIsSaving(false);
    }
  };

  const steps = [
    t.steps.moduleInfo,
    t.steps.overlayTimeline,
    t.steps.coachingInjection,
    t.steps.previewPacing,
    t.steps.saveDeploy
  ];

  const isStepComplete = (step: number) => {
    switch (step) {
      case 0: return !!moduleData.title && !!moduleData.description;
      case 1: return moduleData.overlays.length > 0;
      case 2: return moduleData.overlays.some(o => o.metricContext || o.strategicGuidance);
      case 3: return true;
      case 4: return true;
      default: return false;
    }
  };

  const completedSteps = steps.filter((_, index) => isStepComplete(index)).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="outline" size="sm" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <div>
                <h1 className="text-2xl font-bold">{t.title}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium">{Math.round(progress)}% Complete</div>
                <div className="text-xs text-muted-foreground">
                  {completedSteps} of {steps.length} steps
                </div>
              </div>
              <div className="w-24">
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  currentStep === index
                    ? 'bg-primary text-primary-foreground'
                    : isStepComplete(index)
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    : 'bg-secondary hover:bg-accent text-secondary-foreground'
                }`}
              >
                {isStepComplete(index) ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    currentStep === index ? 'border-primary-foreground' : 'border-current'
                  }`} />
                )}
                {step}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
          {/* Step 0: Module Info */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ModuleInfoEditor
                moduleData={moduleData}
                onUpdate={updateModuleData}
                language={language}
              />
            </motion.div>
          )}

          {/* Step 1: Overlay Timeline */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <OverlayTimeline
                overlays={moduleData.overlays}
                onUpdate={(overlays) => updateModuleData({ overlays })}
                onSelectOverlay={setSelectedOverlay}
                selectedOverlay={selectedOverlay}
                language={language}
              />
            </motion.div>
          )}

          {/* Step 2: Coaching Injection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <CoachingEditor
                selectedOverlay={selectedOverlay}
                onUpdateOverlay={updateOverlay}
                language={language}
              />
            </motion.div>
          )}

          {/* Step 3: Preview & Pacing */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ModulePreview
                moduleData={moduleData}
                onUpdatePacing={(pacing) => updateModuleData({ pacing })}
                language={language}
              />
            </motion.div>
          )}

          {/* Step 4: Save & Deploy */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SaveDeploySection
                moduleData={moduleData}
                onSave={handleSave}
                onPublish={handlePublish}
                onExport={() => console.log('Export module')}
                onImport={() => console.log('Import module')}
                language={language}
                isSaving={isSaving}
              />
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="bg-primary hover:bg-primary/90"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleEditor;