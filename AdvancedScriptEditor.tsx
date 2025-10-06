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
  Globe,
  Zap,
  Target,
  Award,
  History,
  GitBranch,
  RotateCcw,
  Eye,
  Save,
  Plus,
  X,
  ArrowLeft,
  Code,
  Settings,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Download,
  Upload
} from 'lucide-react';
import { VersionService, type ScriptVersion, type EditLog, type ReplayTrigger, type ClarityMetrics, type BadgeRule } from '../utils/versionService';

// Types are now imported from VersionService

interface AdvancedScriptEditorProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  overlayId: string;
  initialVersion?: ScriptVersion;
  onSave?: (version: ScriptVersion) => void;
  onPublish?: (version: ScriptVersion) => void;
}

export default function AdvancedScriptEditor({
  language,
  onNavigate,
  overlayId,
  initialVersion,
  onSave,
  onPublish
}: AdvancedScriptEditorProps) {
  const [currentVersion, setCurrentVersion] = useState<ScriptVersion>(
    initialVersion || {
      id: `version-${Date.now()}`,
      version: 'v1.0',
      timestamp: new Date().toISOString(),
      author: 'Demo User',
      changes: 'Initial script creation',
      content: {
        en: {
          introPrompt: '',
          coachingNarrative: '',
          clarityChallenge: ''
        },
        es: {
          introPrompt: '',
          coachingNarrative: '',
          clarityChallenge: ''
        }
      },
      triggers: [],
      metrics: {
        clarityIndexLift: 2.5,
        convictionScore: 4.2,
        replayEngagementRate: 78,
        expectedROI: 125,
        participantSatisfaction: 4.6
      },
      badges: [],
      status: 'draft'
    }
  );

  const [versions, setVersions] = useState<ScriptVersion[]>([]);
  const [editLogs, setEditLogs] = useState<EditLog[]>([]);
  const [currentTab, setCurrentTab] = useState('script');
  const [editingLanguage, setEditingLanguage] = useState<'en' | 'es'>('en');
  const [compareVersion, setCompareVersion] = useState<string | null>(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const t = {
    en: {
      title: 'Advanced Script Editor',
      subtitle: 'Create precision coaching experiences with version control',
      scriptEditor: 'Script Editor',
      triggerEditor: 'Trigger Editor',
      metricsEditor: 'Metrics Editor',
      badgeEditor: 'Badge Editor',
      versionHistory: 'Version History',
      impactComparison: 'Impact Comparison',
      introPrompt: 'Introduction Prompt',
      coachingNarrative: 'Coaching Narrative',
      clarityChallenge: 'Clarity Challenge',
      addTrigger: 'Add Trigger',
      addBadgeRule: 'Add Badge Rule',
      save: 'Save Version',
      publish: 'Publish',
      preview: 'Preview',
      rollback: 'Rollback',
      compare: 'Compare',
      auditTrail: 'Audit Trail',
      unsavedChanges: 'Unsaved Changes',
      clarityIndexLift: 'Clarity Index Lift',
      convictionScore: 'Conviction Score',
      replayEngagementRate: 'Replay Engagement Rate',
      expectedROI: 'Expected ROI',
      participantSatisfaction: 'Participant Satisfaction',
      badgeUnlock: 'Badge Unlock',
      demoLaunch: 'Demo Launch',
      feedbackSubmit: 'Feedback Submit',
      clarityThreshold: 'Clarity Threshold',
      bronze: 'Bronze',
      silver: 'Silver',
      gold: 'Gold',
      platinum: 'Platinum',
      draft: 'Draft',
      published: 'Published',
      archived: 'Archived'
    },
    es: {
      title: 'Editor de Script Avanzado',
      subtitle: 'Crea experiencias de coaching de precisión con control de versiones',
      scriptEditor: 'Editor Script',
      triggerEditor: 'Editor Triggers',
      metricsEditor: 'Editor Métricas',
      badgeEditor: 'Editor Insignias',
      versionHistory: 'Historial Versiones',
      impactComparison: 'Comparación Impacto',
      introPrompt: 'Prompt Introducción',
      coachingNarrative: 'Narrativa Coaching',
      clarityChallenge: 'Desafío Claridad',
      addTrigger: 'Agregar Trigger',
      addBadgeRule: 'Agregar Regla Insignia',
      save: 'Guardar Versión',
      publish: 'Publicar',
      preview: 'Vista Previa',
      rollback: 'Revertir',
      compare: 'Comparar',
      auditTrail: 'Rastro Auditoría',
      unsavedChanges: 'Cambios No Guardados',
      clarityIndexLift: 'Impulso Índice Claridad',
      convictionScore: 'Puntuación Convicción',
      replayEngagementRate: 'Tasa Participación Replay',
      expectedROI: 'ROI Esperado',
      participantSatisfaction: 'Satisfacción Participante',
      badgeUnlock: 'Desbloqueo Insignia',
      demoLaunch: 'Lanzamiento Demo',
      feedbackSubmit: 'Envío Feedback',
      clarityThreshold: 'Umbral Claridad',
      bronze: 'Bronce',
      silver: 'Plata',
      gold: 'Oro',
      platinum: 'Platino',
      draft: 'Borrador',
      published: 'Publicado',
      archived: 'Archivado'
    }
  };

  const text = t[language];

  // Load version history from VersionService
  useEffect(() => {
    const loadVersionData = async () => {
      try {
        const versionHistory = await VersionService.getVersionHistory(overlayId);
        const auditLogs = await VersionService.getEditLogs(overlayId);
        
        if (versionHistory.length > 0) {
          setVersions(versionHistory);
          setCurrentVersion(versionHistory[versionHistory.length - 1]); // Latest version
        } else {
          // Create initial version if none exists
          const initialVersion = await VersionService.createVersion(overlayId, {
            version: 'v1.0',
            changes: 'Initial script creation',
            content: {
              en: {
                introPrompt: 'Welcome to Trust Velocity mastery...',
                coachingNarrative: 'Trust moves faster than capital...',
                clarityChallenge: 'How does trust velocity impact your investor relationships?'
              },
              es: {
                introPrompt: 'Bienvenido al dominio de Velocidad de Confianza...',
                coachingNarrative: 'La confianza se mueve más rápido que el capital...',
                clarityChallenge: '¿Cómo impacta la velocidad de confianza tus relaciones con inversores?'
              }
            },
            triggers: [
              {
                id: 'trigger-1',
                type: 'BadgeUnlock',
                condition: 'Clarity Index ≥ 3.0x',
                action: 'Unlock 🧩 Trust Velocity Master',
                priority: 1,
                enabled: true
              }
            ],
            metrics: {
              clarityIndexLift: 2.8,
              convictionScore: 4.4,
              replayEngagementRate: 76,
              expectedROI: 110,
              participantSatisfaction: 4.3
            },
            badges: [
              {
                id: 'badge-1',
                condition: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
                badge: '🧩 Trust Velocity Master',
                level: 'Gold',
                points: 500,
                category: 'Finance',
                enabled: true
              }
            ],
            status: 'draft'
          }, 'Demo User');
          
          setVersions([initialVersion]);
          setCurrentVersion(initialVersion);
        }
        
        setEditLogs(auditLogs);
      } catch (error) {
        console.error('Error loading version data:', error);
        // Fallback to mock data
        const mockVersions: ScriptVersion[] = [
      {
        id: 'v1.0',
        version: 'v1.0',
        timestamp: '2025-09-28T14:22:00Z',
        author: 'Luis Dominguez',
        changes: 'Initial coaching script + replay logic',
        content: {
          en: {
            introPrompt: 'Welcome to Trust Velocity mastery...',
            coachingNarrative: 'Trust moves faster than capital...',
            clarityChallenge: 'How does trust velocity impact your investor relationships?'
          },
          es: {
            introPrompt: 'Bienvenido al dominio de Velocidad de Confianza...',
            coachingNarrative: 'La confianza se mueve más rápido que el capital...',
            clarityChallenge: '¿Cómo impacta la velocidad de confianza tus relaciones con inversores?'
          }
        },
        triggers: [
          {
            id: 'trigger-1',
            type: 'BadgeUnlock',
            condition: 'Clarity Index ≥ 3.0x',
            action: 'Unlock 🧩 Trust Velocity Master',
            priority: 1,
            enabled: true
          }
        ],
        metrics: {
          clarityIndexLift: 2.8,
          convictionScore: 4.4,
          replayEngagementRate: 76,
          expectedROI: 110,
          participantSatisfaction: 4.3
        },
        badges: [
          {
            id: 'badge-1',
            condition: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
            badge: '🧩 Trust Velocity Master',
            level: 'Gold',
            points: 500,
            category: 'Finance',
            enabled: true
          }
        ],
        status: 'published'
      },
      {
        id: 'v1.1',
        version: 'v1.1',
        timestamp: '2025-09-30T09:10:00Z',
        author: 'Ana Rivera',
        changes: 'Added ES coaching narrative + badge logic',
        content: {
          en: {
            introPrompt: 'Welcome to Trust Velocity mastery. This overlay will transform your understanding...',
            coachingNarrative: 'Trust moves faster than capital. In founder-led companies, establishing trust velocity is crucial for investor alignment...',
            clarityChallenge: 'Reflect on your current investor trust levels. How can trust velocity accelerate your funding cycles?'
          },
          es: {
            introPrompt: 'Bienvenido al dominio de Velocidad de Confianza. Este overlay transformará tu comprensión...',
            coachingNarrative: 'La confianza se mueve más rápido que el capital. En empresas lideradas por fundadores, establecer velocidad de confianza es crucial para alineación con inversores...',
            clarityChallenge: 'Reflexiona sobre tus niveles actuales de confianza con inversores. ¿Cómo puede la velocidad de confianza acelerar tus ciclos de financiamiento?'
          }
        },
        triggers: [
          {
            id: 'trigger-1',
            type: 'BadgeUnlock',
            condition: 'Clarity Index ≥ 3.0x',
            action: 'Unlock 🧩 Trust Velocity Master',
            priority: 1,
            enabled: true
          },
          {
            id: 'trigger-2',
            type: 'DemoLaunch',
            condition: 'Overlay Completed + Feedback ≥ 4.5',
            action: 'Launch replay sequence',
            priority: 2,
            enabled: true
          }
        ],
        metrics: {
          clarityIndexLift: 3.2,
          convictionScore: 4.7,
          replayEngagementRate: 82,
          expectedROI: 135,
          participantSatisfaction: 4.8
        },
        badges: [
          {
            id: 'badge-1',
            condition: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
            badge: '🧩 Trust Velocity Master',
            level: 'Gold',
            points: 500,
            category: 'Finance',
            enabled: true
          },
          {
            id: 'badge-2',
            condition: 'Overlay Completed in EN + ES',
            badge: '🌐 Dual-Language Navigator',
            level: 'Silver',
            points: 300,
            category: 'Language',
            enabled: true
          }
        ],
        status: 'draft'
      }
    ];
    
        setVersions(mockVersions);
        setCurrentVersion(mockVersions[1]); // Set latest version as current

        // Mock edit logs
        const mockEditLogs: EditLog[] = [
          {
            id: 'edit-1',
            timestamp: '2025-09-30T09:10:00Z',
            editor: 'Ana Rivera',
            field: 'Coaching Narrative (ES)',
            change: 'Added clarity challenge block',
            previousValue: 'Basic narrative...',
            newValue: 'Enhanced narrative with investor focus...',
            versionId: 'v1.1'
          },
          {
            id: 'edit-2',
            timestamp: '2025-09-30T09:15:00Z',
            editor: 'Ana Rivera',
            field: 'Badge Logic',
            change: 'Linked to dual-language completion',
            newValue: 'Added 🌐 Dual-Language Navigator badge',
            versionId: 'v1.1'
          }
        ];
        
        setEditLogs(mockEditLogs);
      }
    };
    
    loadVersionData();
  }, [overlayId]);

  const updateScriptContent = (field: string, value: string) => {
    const previousValue = currentVersion.content[editingLanguage][field as keyof typeof currentVersion.content.en];
    
    setCurrentVersion(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [editingLanguage]: {
          ...prev.content[editingLanguage],
          [field]: value
        }
      }
    }));
    setUnsavedChanges(true);
    
    // Log the edit using VersionService
    VersionService.logEdit(overlayId, {
      editor: 'Current User',
      field: `${field} (${editingLanguage.toUpperCase()})`,
      change: 'Content updated',
      previousValue,
      newValue: value.substring(0, 100) + (value.length > 100 ? '...' : ''),
      versionId: currentVersion.id
    });
    
    // Refresh edit logs
    VersionService.getEditLogs(overlayId).then(setEditLogs);
  };

  const addTrigger = () => {
    const newTrigger: ReplayTrigger = {
      id: `trigger-${Date.now()}`,
      type: 'BadgeUnlock',
      condition: '',
      action: '',
      priority: currentVersion.triggers.length + 1,
      enabled: true
    };
    
    setCurrentVersion(prev => ({
      ...prev,
      triggers: [...prev.triggers, newTrigger]
    }));
    setUnsavedChanges(true);
  };

  const updateTrigger = (triggerId: string, field: string, value: any) => {
    setCurrentVersion(prev => ({
      ...prev,
      triggers: prev.triggers.map(trigger =>
        trigger.id === triggerId
          ? { ...trigger, [field]: value }
          : trigger
      )
    }));
    setUnsavedChanges(true);
  };

  const removeTrigger = (triggerId: string) => {
    setCurrentVersion(prev => ({
      ...prev,
      triggers: prev.triggers.filter(trigger => trigger.id !== triggerId)
    }));
    setUnsavedChanges(true);
  };

  const addBadgeRule = () => {
    const newBadge: BadgeRule = {
      id: `badge-${Date.now()}`,
      condition: '',
      badge: '',
      level: 'Bronze',
      points: 100,
      category: '',
      enabled: true
    };
    
    setCurrentVersion(prev => ({
      ...prev,
      badges: [...prev.badges, newBadge]
    }));
    setUnsavedChanges(true);
  };

  const updateBadgeRule = (badgeId: string, field: string, value: any) => {
    setCurrentVersion(prev => ({
      ...prev,
      badges: prev.badges.map(badge =>
        badge.id === badgeId
          ? { ...badge, [field]: value }
          : badge
      )
    }));
    setUnsavedChanges(true);
  };

  const removeBadgeRule = (badgeId: string) => {
    setCurrentVersion(prev => ({
      ...prev,
      badges: prev.badges.filter(badge => badge.id !== badgeId)
    }));
    setUnsavedChanges(true);
  };

  const updateMetrics = (field: string, value: number) => {
    setCurrentVersion(prev => ({
      ...prev,
      metrics: {
        ...prev.metrics,
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const saveVersion = async () => {
    try {
      const savedVersion = await VersionService.createVersion(
        overlayId,
        {
          version: `v1.${versions.length}`,
          changes: 'Updated script content and configurations',
          content: currentVersion.content,
          triggers: currentVersion.triggers,
          metrics: currentVersion.metrics,
          badges: currentVersion.badges,
          status: 'draft'
        },
        'Current User'
      );
      
      setVersions(prev => [...prev, savedVersion]);
      setCurrentVersion(savedVersion);
      setUnsavedChanges(false);
      
      // Refresh edit logs
      const updatedLogs = await VersionService.getEditLogs(overlayId);
      setEditLogs(updatedLogs);
      
      if (onSave) {
        onSave(savedVersion);
      }
    } catch (error) {
      console.error('Error saving version:', error);
    }
  };

  const publishVersion = async () => {
    try {
      const publishedVersion = await VersionService.publishVersion(
        overlayId,
        currentVersion.id,
        'Current User'
      );
      
      if (publishedVersion) {
        setCurrentVersion(publishedVersion);
        setUnsavedChanges(false);
        
        // Update versions list
        setVersions(prev => prev.map(v => 
          v.id === publishedVersion.id ? publishedVersion : v
        ));
        
        // Refresh edit logs
        const updatedLogs = await VersionService.getEditLogs(overlayId);
        setEditLogs(updatedLogs);
        
        if (onPublish) {
          onPublish(publishedVersion);
        }
      }
    } catch (error) {
      console.error('Error publishing version:', error);
    }
  };

  const rollbackToVersion = async (versionId: string) => {
    try {
      const rollbackVersion = await VersionService.rollbackToVersion(
        overlayId,
        versionId,
        'Current User',
        'User initiated rollback'
      );
      
      if (rollbackVersion) {
        setCurrentVersion(rollbackVersion);
        setVersions(prev => [...prev, rollbackVersion]);
        setUnsavedChanges(true);
        
        // Refresh edit logs
        const updatedLogs = await VersionService.getEditLogs(overlayId);
        setEditLogs(updatedLogs);
      }
    } catch (error) {
      console.error('Error rolling back version:', error);
    }
  };

  const getComparisonData = async () => {
    if (!compareVersion) return null;
    
    const baseVersion = versions.find(v => v.version === compareVersion);
    if (!baseVersion) return null;
    
    try {
      const comparison = await VersionService.compareVersions(
        overlayId,
        baseVersion.id,
        currentVersion.id
      );
      return comparison;
    } catch (error) {
      console.error('Error comparing versions:', error);
      return {
        base: baseVersion,
        current: currentVersion
      };
    }
  };

  const exportVersionData = async () => {
    try {
      const exportData = await VersionService.exportVersionData(overlayId);
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { 
        type: 'application/json' 
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `overlay-${overlayId}-versions-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting version data:', error);
    }
  };

  const importVersionData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const importData = JSON.parse(text);
      
      await VersionService.importVersionData(overlayId, importData, 'Current User');
      
      // Refresh all data
      const versionHistory = await VersionService.getVersionHistory(overlayId);
      const auditLogs = await VersionService.getEditLogs(overlayId);
      
      setVersions(versionHistory);
      setEditLogs(auditLogs);
      
      alert(`Successfully imported ${importData.versions?.length || 0} versions and ${importData.editLogs?.length || 0} edit logs`);
    } catch (error) {
      console.error('Error importing version data:', error);
      alert('Error importing version data. Please check the file format.');
    }
    
    // Reset file input
    event.target.value = '';
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
                onClick={() => onNavigate('overlay-editor')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Editor
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{text.title}</h1>
                <p className="text-muted-foreground">{text.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {unsavedChanges && (
                <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {text.unsavedChanges}
                </Badge>
              )}
              <Badge 
                variant={currentVersion.status === 'published' ? 'default' : 'secondary'}
                className={
                  currentVersion.status === 'published' ? 'bg-green-500 text-white' :
                  currentVersion.status === 'draft' ? 'bg-yellow-500 text-black' :
                  'bg-gray-500 text-white'
                }
              >
                {text[currentVersion.status]}
              </Badge>
              <span className="text-sm text-muted-foreground">{currentVersion.version}</span>
              <Button variant="outline" onClick={() => {}}>
                <Eye className="w-4 h-4 mr-2" />
                {text.preview}
              </Button>
              <Button variant="outline" onClick={saveVersion} disabled={!unsavedChanges}>
                <Save className="w-4 h-4 mr-2" />
                {text.save}
              </Button>
              <Button onClick={publishVersion}>
                <CheckCircle className="w-4 h-4 mr-2" />
                {text.publish}
              </Button>
              <Button variant="outline" onClick={exportVersionData}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={importVersionData}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="import-file"
                />
                <Button variant="outline" asChild>
                  <label htmlFor="import-file" className="cursor-pointer flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </label>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="script" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              {text.scriptEditor}
            </TabsTrigger>
            <TabsTrigger value="triggers" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {text.triggerEditor}
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              {text.metricsEditor}
            </TabsTrigger>
            <TabsTrigger value="badges" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {text.badgeEditor}
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              {text.versionHistory}
            </TabsTrigger>
            <TabsTrigger value="compare" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              {text.impactComparison}
            </TabsTrigger>
          </TabsList>

          {/* Script Editor Tab */}
          <TabsContent value="script" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Coaching Script Editor</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant={editingLanguage === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setEditingLanguage('en')}
                >
                  EN
                </Button>
                <Button
                  variant={editingLanguage === 'es' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setEditingLanguage('es')}
                >
                  ES
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6">
                <label className="block text-sm font-medium mb-2">{text.introPrompt}</label>
                <Textarea
                  value={currentVersion.content[editingLanguage].introPrompt}
                  onChange={(e) => updateScriptContent('introPrompt', e.target.value)}
                  placeholder={editingLanguage === 'en' 
                    ? "Welcome to the Trust Velocity Mastery overlay. This session will guide you through..."
                    : "Bienvenido al overlay de Dominio de Velocidad de Confianza. Esta sesión te guiará a través de..."
                  }
                  rows={3}
                />
              </Card>

              <Card className="p-6">
                <label className="block text-sm font-medium mb-2">{text.coachingNarrative}</label>
                <Textarea
                  value={currentVersion.content[editingLanguage].coachingNarrative}
                  onChange={(e) => updateScriptContent('coachingNarrative', e.target.value)}
                  placeholder={editingLanguage === 'en' 
                    ? "Trust moves faster than capital. In founder-led companies, establishing trust velocity is crucial for..."
                    : "La confianza se mueve más rápido que el capital. En empresas lideradas por fundadores, establecer velocidad de confianza es crucial para..."
                  }
                  rows={8}
                />
              </Card>

              <Card className="p-6">
                <label className="block text-sm font-medium mb-2">{text.clarityChallenge}</label>
                <Textarea
                  value={currentVersion.content[editingLanguage].clarityChallenge}
                  onChange={(e) => updateScriptContent('clarityChallenge', e.target.value)}
                  placeholder={editingLanguage === 'en' 
                    ? "Reflect on your current investor trust levels. How can trust velocity accelerate your funding cycles?"
                    : "Reflexiona sobre tus niveles actuales de confianza con inversores. ¿Cómo puede la velocidad de confianza acelerar tus ciclos de financiamiento?"
                  }
                  rows={3}
                />
              </Card>
            </div>
          </TabsContent>

          {/* Replay Triggers Tab */}
          <TabsContent value="triggers" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Replay Trigger Editor</h3>
              <Button onClick={addTrigger} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                {text.addTrigger}
              </Button>
            </div>

            <div className="space-y-4">
              {currentVersion.triggers.map((trigger) => (
                <Card key={trigger.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Type</label>
                      <select
                        value={trigger.type}
                        onChange={(e) => updateTrigger(trigger.id, 'type', e.target.value)}
                        className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                      >
                        <option value="BadgeUnlock">{text.badgeUnlock}</option>
                        <option value="DemoLaunch">{text.demoLaunch}</option>
                        <option value="FeedbackSubmit">{text.feedbackSubmit}</option>
                        <option value="ClarityThreshold">{text.clarityThreshold}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Condition</label>
                      <Input
                        value={trigger.condition}
                        onChange={(e) => updateTrigger(trigger.id, 'condition', e.target.value)}
                        placeholder="Clarity Index ≥ 3.0x"
                        className="text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Action</label>
                      <Input
                        value={trigger.action}
                        onChange={(e) => updateTrigger(trigger.id, 'action', e.target.value)}
                        placeholder="Unlock badge / Launch demo"
                        className="text-sm"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeTrigger(trigger.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clarity Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <h3 className="text-lg font-semibold">Clarity Metrics Editor</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-4">
                <label className="block text-sm font-medium mb-2">{text.clarityIndexLift}</label>
                <Input
                  type="number"
                  step="0.1"
                  value={currentVersion.metrics.clarityIndexLift}
                  onChange={(e) => updateMetrics('clarityIndexLift', parseFloat(e.target.value))}
                />
                <p className="text-xs text-muted-foreground mt-1">Expected lift multiplier</p>
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium mb-2">{text.convictionScore}</label>
                <Input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={currentVersion.metrics.convictionScore}
                  onChange={(e) => updateMetrics('convictionScore', parseFloat(e.target.value))}
                />
                <p className="text-xs text-muted-foreground mt-1">1-5 scale</p>
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium mb-2">{text.replayEngagementRate}</label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={currentVersion.metrics.replayEngagementRate}
                  onChange={(e) => updateMetrics('replayEngagementRate', parseInt(e.target.value))}
                />
                <p className="text-xs text-muted-foreground mt-1">Percentage</p>
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium mb-2">{text.expectedROI}</label>
                <Input
                  type="number"
                  value={currentVersion.metrics.expectedROI}
                  onChange={(e) => updateMetrics('expectedROI', parseInt(e.target.value))}
                />
                <p className="text-xs text-muted-foreground mt-1">Percentage ROI</p>
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium mb-2">{text.participantSatisfaction}</label>
                <Input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={currentVersion.metrics.participantSatisfaction}
                  onChange={(e) => updateMetrics('participantSatisfaction', parseFloat(e.target.value))}
                />
                <p className="text-xs text-muted-foreground mt-1">1-5 scale</p>
              </Card>
            </div>

            {/* Metrics Preview */}
            <Card className="p-6 bg-secondary/50">
              <h4 className="font-semibold mb-4">Projected Impact</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-500">{currentVersion.metrics.clarityIndexLift}x</p>
                  <p className="text-xs text-muted-foreground">Clarity Lift</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-500">{currentVersion.metrics.convictionScore}</p>
                  <p className="text-xs text-muted-foreground">Conviction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">{currentVersion.metrics.replayEngagementRate}%</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">{currentVersion.metrics.expectedROI}%</p>
                  <p className="text-xs text-muted-foreground">ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-500">{currentVersion.metrics.participantSatisfaction}</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Badge Logic Tab */}
          <TabsContent value="badges" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Badge Logic Editor</h3>
              <Button onClick={addBadgeRule} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                {text.addBadgeRule}
              </Button>
            </div>

            <div className="space-y-4">
              {currentVersion.badges.map((badge) => (
                <Card key={badge.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Condition</label>
                      <Input
                        value={badge.condition}
                        onChange={(e) => updateBadgeRule(badge.id, 'condition', e.target.value)}
                        placeholder="Overlay Completed in EN + ES"
                        className="text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Badge</label>
                      <Input
                        value={badge.badge}
                        onChange={(e) => updateBadgeRule(badge.id, 'badge', e.target.value)}
                        placeholder="🌐 Dual-Language Navigator"
                        className="text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Level</label>
                      <select
                        value={badge.level}
                        onChange={(e) => updateBadgeRule(badge.id, 'level', e.target.value)}
                        className="w-full bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                      >
                        <option value="Bronze">{text.bronze}</option>
                        <option value="Silver">{text.silver}</option>
                        <option value="Gold">{text.gold}</option>
                        <option value="Platinum">{text.platinum}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Points</label>
                      <Input
                        type="number"
                        value={badge.points}
                        onChange={(e) => updateBadgeRule(badge.id, 'points', parseInt(e.target.value))}
                        className="text-sm"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeBadgeRule(badge.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Version History Tab */}
          <TabsContent value="history" className="space-y-6">
            <h3 className="text-lg font-semibold">Version History & Audit Trail</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Version History */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Versions</h4>
                <div className="space-y-3">
                  {versions.map((version) => (
                    <div key={version.id} className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{version.version}</Badge>
                          <Badge 
                            variant={version.status === 'published' ? 'default' : 'secondary'}
                            className={
                              version.status === 'published' ? 'bg-green-500 text-white' :
                              version.status === 'draft' ? 'bg-yellow-500 text-black' :
                              'bg-gray-500 text-white'
                            }
                          >
                            {text[version.status]}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{version.changes}</p>
                        <p className="text-xs text-muted-foreground">
                          {version.author} • {new Date(version.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setCompareVersion(version.version)}>
                          {text.compare}
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => rollbackToVersion(version.id)}>
                          <RotateCcw className="w-3 h-3 mr-1" />
                          {text.rollback}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Audit Trail */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Audit Trail</h4>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {editLogs.map((log) => (
                    <div key={log.id} className="p-3 bg-secondary/50 rounded border-l-2 border-primary">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{log.editor}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(log.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm">{log.field}: {log.change}</p>
                      {log.newValue && (
                        <p className="text-xs text-muted-foreground mt-1">"{log.newValue}"</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Impact Comparison Tab */}
          <TabsContent value="compare" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Impact Comparison</h3>
              <select
                value={compareVersion || ''}
                onChange={(e) => setCompareVersion(e.target.value || null)}
                className="bg-input border border-border text-foreground px-3 py-2 rounded"
              >
                <option value="">Select version to compare...</option>
                {versions.map((version) => (
                  <option key={version.id} value={version.version}>
                    {version.version} - {version.changes}
                  </option>
                ))}
              </select>
            </div>

            <ComparisonView 
              compareVersion={compareVersion}
              versions={versions}
              currentVersion={currentVersion}
              overlayId={overlayId}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Separate component for comparison view to handle async data loading
function ComparisonView({ 
  compareVersion, 
  versions, 
  currentVersion, 
  overlayId 
}: {
  compareVersion: string | null;
  versions: ScriptVersion[];
  currentVersion: ScriptVersion;
  overlayId: string;
}) {
  const [comparisonData, setComparisonData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (compareVersion) {
      setLoading(true);
      const baseVersion = versions.find(v => v.version === compareVersion);
      if (baseVersion) {
        VersionService.compareVersions(overlayId, baseVersion.id, currentVersion.id)
          .then(setComparisonData)
          .catch(console.error)
          .finally(() => setLoading(false));
      }
    } else {
      setComparisonData(null);
    }
  }, [compareVersion, versions, currentVersion, overlayId]);

  if (!compareVersion) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">Select a version to compare with current</p>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="p-8 text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Analyzing differences...</p>
      </Card>
    );
  }

  if (!comparisonData) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">Error loading comparison data</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Impact Analysis */}
      {comparisonData.impactAnalysis && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">Impact Analysis</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge 
                variant={
                  comparisonData.impactAnalysis.riskLevel === 'high' ? 'destructive' :
                  comparisonData.impactAnalysis.riskLevel === 'medium' ? 'outline' : 'default'
                }
              >
                {comparisonData.impactAnalysis.riskLevel.toUpperCase()} RISK
              </Badge>
            </div>
            
            {comparisonData.impactAnalysis.breakingChanges.length > 0 && (
              <div>
                <h5 className="font-medium text-red-500 mb-2">Breaking Changes:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {comparisonData.impactAnalysis.breakingChanges.map((change: string, index: number) => (
                    <li key={index} className="text-sm text-red-400">{change}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {comparisonData.impactAnalysis.recommendations.length > 0 && (
              <div>
                <h5 className="font-medium text-blue-500 mb-2">Recommendations:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {comparisonData.impactAnalysis.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="text-sm text-blue-400">{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Metrics Comparison */}
      {comparisonData.differences?.metrics && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">Metrics Comparison</h4>
          <div className="space-y-4">
            {comparisonData.differences.metrics.map((diff: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded">
                <span className="font-medium capitalize">{diff.metric.replace(/([A-Z])/g, ' $1')}</span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{diff.oldValue}</span>
                  <span className="text-2xl">→</span>
                  <span className="font-bold">{diff.newValue}</span>
                  <Badge 
                    variant={diff.impact === 'positive' ? 'default' : diff.impact === 'negative' ? 'destructive' : 'secondary'}
                    className={
                      diff.impact === 'positive' ? 'bg-green-500 text-white' :
                      diff.impact === 'negative' ? 'bg-red-500 text-white' : ''
                    }
                  >
                    {diff.impact === 'positive' ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : diff.impact === 'negative' ? (
                      <AlertTriangle className="w-3 h-3 mr-1" />
                    ) : null}
                    {diff.percentageChange > 0 ? '+' : ''}{diff.percentageChange.toFixed(1)}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Content Changes */}
      {comparisonData.differences?.content && comparisonData.differences.content.length > 0 && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">Content Changes</h4>
          <div className="space-y-3">
            {comparisonData.differences.content.map((diff: any, index: number) => (
              <div key={index} className="p-3 border border-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{diff.language.toUpperCase()}</Badge>
                  <Badge variant={diff.type === 'added' ? 'default' : diff.type === 'removed' ? 'destructive' : 'secondary'}>
                    {diff.type}
                  </Badge>
                  <span className="font-medium">{diff.field}</span>
                </div>
                {diff.similarity !== undefined && (
                  <div className="text-xs text-muted-foreground">
                    Similarity: {(diff.similarity * 100).toFixed(1)}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Trigger Changes */}
      {comparisonData.differences?.triggers && comparisonData.differences.triggers.length > 0 && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">Trigger Changes</h4>
          <div className="space-y-3">
            {comparisonData.differences.triggers.map((diff: any, index: number) => (
              <div key={index} className="p-3 border border-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={diff.type === 'added' ? 'default' : diff.type === 'removed' ? 'destructive' : 'secondary'}>
                    {diff.type}
                  </Badge>
                  <span className="font-medium">{diff.triggerId}</span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {diff.changes.map((change: string, changeIndex: number) => (
                    <li key={changeIndex} className="text-sm text-muted-foreground">{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Badge Changes */}
      {comparisonData.differences?.badges && comparisonData.differences.badges.length > 0 && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">Badge Changes</h4>
          <div className="space-y-3">
            {comparisonData.differences.badges.map((diff: any, index: number) => (
              <div key={index} className="p-3 border border-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={diff.type === 'added' ? 'default' : diff.type === 'removed' ? 'destructive' : 'secondary'}>
                    {diff.type}
                  </Badge>
                  <span className="font-medium">{diff.badgeId}</span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {diff.changes.map((change: string, changeIndex: number) => (
                    <li key={changeIndex} className="text-sm text-muted-foreground">{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Feature Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold mb-4">{comparisonData.baseVersion.version} Features</h4>
          <div className="space-y-2">
            <p className="text-sm"><strong>Triggers:</strong> {comparisonData.baseVersion.triggers.length}</p>
            <p className="text-sm"><strong>Badges:</strong> {comparisonData.baseVersion.badges.length}</p>
            <p className="text-sm"><strong>Languages:</strong> {
              comparisonData.baseVersion.content.en.introPrompt && comparisonData.baseVersion.content.es.introPrompt 
                ? 'EN + ES' : 'EN only'
            }</p>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-4">{comparisonData.targetVersion.version} Features</h4>
          <div className="space-y-2">
            <p className="text-sm"><strong>Triggers:</strong> {comparisonData.targetVersion.triggers.length}</p>
            <p className="text-sm"><strong>Badges:</strong> {comparisonData.targetVersion.badges.length}</p>
            <p className="text-sm"><strong>Languages:</strong> {
              comparisonData.targetVersion.content.en.introPrompt && comparisonData.targetVersion.content.es.introPrompt 
                ? 'EN + ES' : 'EN only'
            }</p>
          </div>
        </Card>
      </div>
    </div>
  );
}