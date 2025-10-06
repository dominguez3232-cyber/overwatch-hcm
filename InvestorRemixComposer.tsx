import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { 
  User,
  Target,
  Palette,
  Trophy,
  GitBranch,
  Eye,
  Send,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Globe,
  Zap,
  Star,
  Play,
  Download,
  Share2,
  Edit3,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react';

interface RemixCompositionData {
  identity: {
    investorType: string;
    remixPurpose: string;
    language: string;
    projectName: string;
    description: string;
  };
  overlays: {
    selectedOverlays: string[];
    customOverlayRequests: string;
  };
  coachingTone: {
    primaryTone: string;
    secondaryTones: string[];
    customInstructions: string;
  };
  badgeGoals: {
    targetBadges: string[];
    customUnlockLogic: string;
    priorityBadge: string;
  };
  schemaTrace: {
    selectedNodes: string[];
    customTraceRequests: string;
    mappingNotes: string;
  };
  submission: {
    exportOptions: string[];
    priorityLevel: string;
    timeline: string;
    additionalNotes: string;
  };
}

interface InvestorRemixComposerProps {
  language: 'en' | 'es';
  onSubmit: (composition: RemixCompositionData) => void;
  onPreview: (composition: RemixCompositionData) => void;
  onSaveDraft: (composition: RemixCompositionData) => void;
  onBack: () => void;
  initialData?: Partial<RemixCompositionData>;
}

const COMPOSITION_STEPS = [
  'identity',
  'overlays',
  'tone',
  'badges',
  'schema',
  'preview'
] as const;

type CompositionStep = typeof COMPOSITION_STEPS[number];

export default function InvestorRemixComposer({
  language,
  onSubmit,
  onPreview,
  onSaveDraft,
  onBack,
  initialData = {}
}: InvestorRemixComposerProps) {
  const [currentStep, setCurrentStep] = useState<CompositionStep>('identity');
  const [compositionData, setCompositionData] = useState<RemixCompositionData>({
    identity: {
      investorType: '',
      remixPurpose: '',
      language: 'Dual-language',
      projectName: '',
      description: '',
      ...initialData.identity
    },
    overlays: {
      selectedOverlays: [],
      customOverlayRequests: '',
      ...initialData.overlays
    },
    coachingTone: {
      primaryTone: '',
      secondaryTones: [],
      customInstructions: '',
      ...initialData.coachingTone
    },
    badgeGoals: {
      targetBadges: [],
      customUnlockLogic: '',
      priorityBadge: '',
      ...initialData.badgeGoals
    },
    schemaTrace: {
      selectedNodes: [],
      customTraceRequests: '',
      mappingNotes: '',
      ...initialData.schemaTrace
    },
    submission: {
      exportOptions: [],
      priorityLevel: 'medium',
      timeline: '2-weeks',
      additionalNotes: '',
      ...initialData.submission
    }
  });

  const t = {
    en: {
      title: 'Investor Remix Composer',
      subtitle: 'Create custom coaching remix arcs tailored to your investment thesis',
      steps: {
        identity: 'Investor Identity',
        overlays: 'Overlay Selection',
        tone: 'Coaching Tone',
        badges: 'Badge Goals',
        schema: 'Schema Mapping',
        preview: 'Preview & Submit'
      },
      stepDescriptions: {
        identity: 'Define your investor profile and remix purpose',
        overlays: 'Select coaching overlays for your remix arc',
        tone: 'Configure coaching tone and delivery style',
        badges: 'Set achievement goals and unlock criteria',
        schema: 'Map schema traces and knowledge pathways',
        preview: 'Review your composition and submit to founder'
      },
      next: 'Next Step',
      previous: 'Previous',
      preview: 'Preview Remix',
      submit: 'Submit to Founder',
      saveDraft: 'Save Draft',
      back: 'Back to Dashboard',
      required: 'Required',
      optional: 'Optional',
      progress: 'Progress',
      step: 'Step',
      of: 'of'
    },
    es: {
      title: 'Compositor de Remix de Inversor',
      subtitle: 'Crea arcos de remix de coaching personalizados adaptados a tu tesis de inversión',
      steps: {
        identity: 'Identidad del Inversor',
        overlays: 'Selección de Overlay',
        tone: 'Tono de Coaching',
        badges: 'Objetivos de Insignias',
        schema: 'Mapeo de Esquemas',
        preview: 'Vista Previa y Envío'
      },
      stepDescriptions: {
        identity: 'Define tu perfil de inversor y propósito del remix',
        overlays: 'Selecciona overlays de coaching para tu arco de remix',
        tone: 'Configura el tono de coaching y estilo de entrega',
        badges: 'Establece objetivos de logros y criterios de desbloqueo',
        schema: 'Mapea trazos de esquemas y rutas de conocimiento',
        preview: 'Revisa tu composición y envía al fundador'
      },
      next: 'Siguiente Paso',
      previous: 'Anterior',
      preview: 'Vista Previa Remix',
      submit: 'Enviar al Fundador',
      saveDraft: 'Guardar Borrador',
      back: 'Volver al Dashboard',
      required: 'Requerido',
      optional: 'Opcional',
      progress: 'Progreso',
      step: 'Paso',
      of: 'de'
    }
  };

  const text = t[language];

  const currentStepIndex = COMPOSITION_STEPS.indexOf(currentStep);
  const progressPercentage = ((currentStepIndex + 1) / COMPOSITION_STEPS.length) * 100;

  const updateCompositionData = <K extends keyof RemixCompositionData>(
    section: K,
    data: Partial<RemixCompositionData[K]>
  ) => {
    setCompositionData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < COMPOSITION_STEPS.length - 1) {
      setCurrentStep(COMPOSITION_STEPS[currentStepIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(COMPOSITION_STEPS[currentStepIndex - 1]);
    }
  };

  const handleSubmit = () => {
    const finalComposition = {
      ...compositionData,
      metadata: {
        submittedAt: new Date().toISOString(),
        submittedBy: compositionData.identity.investorType,
        language: language,
        version: '1.0'
      }
    };
    onSubmit(finalComposition);
  };

  const handlePreview = () => {
    onPreview(compositionData);
  };

  const isStepComplete = (step: CompositionStep): boolean => {
    switch (step) {
      case 'identity':
        return !!(compositionData.identity.investorType && 
                 compositionData.identity.remixPurpose && 
                 compositionData.identity.projectName);
      case 'overlays':
        return compositionData.overlays.selectedOverlays.length > 0;
      case 'tone':
        return !!compositionData.coachingTone.primaryTone;
      case 'badges':
        return compositionData.badgeGoals.targetBadges.length > 0;
      case 'schema':
        return compositionData.schemaTrace.selectedNodes.length > 0;
      case 'preview':
        return true;
      default:
        return false;
    }
  };

  const canProceed = isStepComplete(currentStep);

  // Step renderers
  const renderIdentityStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Investor Type <span className="text-red-400">*</span>
          </label>
          <Select
            value={compositionData.identity.investorType}
            onValueChange={(value) => updateCompositionData('identity', { investorType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select investor type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LatAm VC">🌎 LatAm VC</SelectItem>
              <SelectItem value="US Angel">👼 US Angel</SelectItem>
              <SelectItem value="Global Fund">🌍 Global Fund</SelectItem>
              <SelectItem value="Strategic Partner">🤝 Strategic Partner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            Remix Purpose <span className="text-red-400">*</span>
          </label>
          <Select
            value={compositionData.identity.remixPurpose}
            onValueChange={(value) => updateCompositionData('identity', { remixPurpose: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pitch Prep">🎯 Pitch Prep</SelectItem>
              <SelectItem value="Market Expansion">🌐 Market Expansion</SelectItem>
              <SelectItem value="Role Clarity">👥 Role Clarity</SelectItem>
              <SelectItem value="Proof Optimization">📊 Proof Optimization</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Language Toggle <span className="text-red-400">*</span>
        </label>
        <div className="flex gap-2">
          {['EN', 'ES', 'Dual-language'].map((lang) => (
            <Button
              key={lang}
              size="sm"
              variant={compositionData.identity.language === lang ? 'default' : 'outline'}
              onClick={() => updateCompositionData('identity', { language: lang })}
              className="flex-1"
            >
              {lang === 'EN' ? '🇺🇸 EN' : lang === 'ES' ? '🇪🇸 ES' : '🌐 Dual-language'}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Project Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={compositionData.identity.projectName}
          onChange={(e) => updateCompositionData('identity', { projectName: e.target.value })}
          placeholder="e.g., LatAm Growth Strategy Remix"
          className="w-full bg-input border border-border text-foreground px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Description <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.identity.description}
          onChange={(e) => updateCompositionData('identity', { description: e.target.value })}
          placeholder="Describe the coaching outcomes you want to achieve with this remix..."
          rows={3}
        />
      </div>
    </div>
  );

  const renderOverlaysStep = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-3 block">
          Available Overlays <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Trust Velocity (Investor Lens)",
              schema: "finance.trust-velocity.investor",
              clarityLift: "3.4x",
              description: "Investor-focused trust building framework"
            },
            {
              title: "Dual-Language Navigator",
              schema: "badge.dual-language",
              clarityLift: "2.9x",
              description: "Cross-cultural coaching for LatAm markets"
            },
            {
              title: "Demo Precision Architect",
              schema: "demo.pitch-alpha",
              clarityLift: "3.1x",
              description: "Demo excellence for investor presentations"
            },
            {
              title: "Cultural Force Multiplier",
              schema: "culture.force-multiplier",
              clarityLift: "2.7x",
              description: "Cultural intelligence framework"
            }
          ].map((overlay) => {
            const isSelected = compositionData.overlays.selectedOverlays.includes(overlay.title);
            return (
              <motion.div
                key={overlay.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'
                  }`}
                  onClick={() => {
                    const selected = compositionData.overlays.selectedOverlays;
                    if (isSelected) {
                      updateCompositionData('overlays', {
                        selectedOverlays: selected.filter(s => s !== overlay.title)
                      });
                    } else {
                      updateCompositionData('overlays', {
                        selectedOverlays: [...selected, overlay.title]
                      });
                    }
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{overlay.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {overlay.clarityLift}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{overlay.description}</p>
                    <div className="text-xs font-mono text-muted-foreground">
                      {overlay.schema}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Custom Overlay Requests <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.overlays.customOverlayRequests}
          onChange={(e) => updateCompositionData('overlays', { customOverlayRequests: e.target.value })}
          placeholder="Describe any custom overlays or modifications you need..."
          rows={3}
        />
      </div>
    </div>
  );

  const renderToneStep = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-3 block">
          Primary Coaching Tone <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'investor-facing', label: 'Investor-facing', icon: '💼' },
            { value: 'schema-first', label: 'Schema-first', icon: '🧠' },
            { value: 'narrative-led', label: 'Narrative-led', icon: '📖' },
            { value: 'rapid-clarity', label: 'Rapid Clarity', icon: '⚡' }
          ].map((tone) => (
            <Button
              key={tone.value}
              variant={compositionData.coachingTone.primaryTone === tone.value ? 'default' : 'outline'}
              onClick={() => updateCompositionData('coachingTone', { primaryTone: tone.value })}
              className="h-auto p-4 flex flex-col items-center gap-2"
            >
              <span className="text-2xl">{tone.icon}</span>
              <span className="text-sm">{tone.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-3 block">
          Secondary Tones <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {['Analytical', 'Conversational', 'Directive', 'Collaborative', 'Inspirational'].map((tone) => {
            const isSelected = compositionData.coachingTone.secondaryTones.includes(tone);
            return (
              <Button
                key={tone}
                size="sm"
                variant={isSelected ? 'default' : 'outline'}
                onClick={() => {
                  const selected = compositionData.coachingTone.secondaryTones;
                  if (isSelected) {
                    updateCompositionData('coachingTone', {
                      secondaryTones: selected.filter(s => s !== tone)
                    });
                  } else {
                    updateCompositionData('coachingTone', {
                      secondaryTones: [...selected, tone]
                    });
                  }
                }}
              >
                {tone}
              </Button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Custom Instructions <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.coachingTone.customInstructions}
          onChange={(e) => updateCompositionData('coachingTone', { customInstructions: e.target.value })}
          placeholder="Specific coaching style preferences, cultural considerations, or delivery instructions..."
          rows={4}
        />
      </div>
    </div>
  );

  const renderBadgesStep = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-3 block">
          Target Badges <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "🧩 Trust Velocity Master",
              unlockLogic: "Clarity Index ≥ 3.0x + Feedback ≥ 4.5",
              category: "Finance"
            },
            {
              title: "🌐 Dual-Language Navigator",
              unlockLogic: "Overlay Completed in EN + ES",
              category: "Language"
            },
            {
              title: "🎯 Demo Precision Architect",
              unlockLogic: "Demo Excellence Score ≥ 4.5",
              category: "Presentation"
            },
            {
              title: "⚡ Pitch Master",
              unlockLogic: "Investor Pitch Score ≥ 90%",
              category: "Communication"
            }
          ].map((badge) => {
            const isSelected = compositionData.badgeGoals.targetBadges.includes(badge.title);
            return (
              <motion.div
                key={badge.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'
                  }`}
                  onClick={() => {
                    const selected = compositionData.badgeGoals.targetBadges;
                    if (isSelected) {
                      updateCompositionData('badgeGoals', {
                        targetBadges: selected.filter(s => s !== badge.title)
                      });
                    } else {
                      updateCompositionData('badgeGoals', {
                        targetBadges: [...selected, badge.title]
                      });
                    }
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{badge.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {badge.category}
                      </Badge>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground">
                      {badge.unlockLogic}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Priority Badge <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Select
          value={compositionData.badgeGoals.priorityBadge}
          onValueChange={(value) => updateCompositionData('badgeGoals', { priorityBadge: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select priority badge" />
          </SelectTrigger>
          <SelectContent>
            {compositionData.badgeGoals.targetBadges.map((badge) => (
              <SelectItem key={badge} value={badge}>
                {badge}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Custom Unlock Logic <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.badgeGoals.customUnlockLogic}
          onChange={(e) => updateCompositionData('badgeGoals', { customUnlockLogic: e.target.value })}
          placeholder="Describe any custom badge criteria or unlock conditions..."
          rows={3}
        />
      </div>
    </div>
  );

  const renderSchemaStep = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-3 block">
          Schema Trace Nodes <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-1 gap-3">
          {[
            { path: "finance.trust-velocity.investor", description: "Investor-focused trust framework" },
            { path: "badge.dual-language", description: "Bilingual achievement system" },
            { path: "demo.pitch-alpha", description: "Demo excellence framework" },
            { path: "culture.force-multiplier", description: "Cultural intelligence system" },
            { path: "law.assumed-right", description: "Legal framework optimization" },
            { path: "time.velocity-modeling", description: "Time optimization strategies" }
          ].map((node) => {
            const isSelected = compositionData.schemaTrace.selectedNodes.includes(node.path);
            return (
              <Card
                key={node.path}
                className={`p-3 cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'
                }`}
                onClick={() => {
                  const selected = compositionData.schemaTrace.selectedNodes;
                  if (isSelected) {
                    updateCompositionData('schemaTrace', {
                      selectedNodes: selected.filter(s => s !== node.path)
                    });
                  } else {
                    updateCompositionData('schemaTrace', {
                      selectedNodes: [...selected, node.path]
                    });
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-sm">{node.path}</div>
                    <div className="text-xs text-muted-foreground">{node.description}</div>
                  </div>
                  {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Custom Trace Requests <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.schemaTrace.customTraceRequests}
          onChange={(e) => updateCompositionData('schemaTrace', { customTraceRequests: e.target.value })}
          placeholder="Describe any custom schema connections or trace modifications..."
          rows={3}
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Mapping Notes <span className="text-muted-foreground">({text.optional})</span>
        </label>
        <Textarea
          value={compositionData.schemaTrace.mappingNotes}
          onChange={(e) => updateCompositionData('schemaTrace', { mappingNotes: e.target.value })}
          placeholder="Notes on how the schema should flow through the coaching experience..."
          rows={3}
        />
      </div>
    </div>
  );

  const renderPreviewStep = () => (
    <div className="space-y-6">
      {/* Composition Summary */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Remix Arc Preview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Project Details</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-muted-foreground">Name:</span> {compositionData.identity.projectName}</div>
              <div><span className="text-muted-foreground">Type:</span> {compositionData.identity.investorType}</div>
              <div><span className="text-muted-foreground">Purpose:</span> {compositionData.identity.remixPurpose}</div>
              <div><span className="text-muted-foreground">Language:</span> {compositionData.identity.language}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Coaching Configuration</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-muted-foreground">Primary Tone:</span> {compositionData.coachingTone.primaryTone}</div>
              <div><span className="text-muted-foreground">Overlays:</span> {compositionData.overlays.selectedOverlays.length}</div>
              <div><span className="text-muted-foreground">Badges:</span> {compositionData.badgeGoals.targetBadges.length}</div>
              <div><span className="text-muted-foreground">Schema Nodes:</span> {compositionData.schemaTrace.selectedNodes.length}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Selected Components Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h4 className="font-medium mb-3">Selected Overlays</h4>
          <div className="space-y-2">
            {compositionData.overlays.selectedOverlays.map((overlay) => (
              <Badge key={overlay} variant="outline" className="mr-2 mb-2">
                {overlay}
              </Badge>
            ))}
          </div>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-3">Target Badges</h4>
          <div className="space-y-2">
            {compositionData.badgeGoals.targetBadges.map((badge) => (
              <Badge key={badge} variant="secondary" className="mr-2 mb-2">
                {badge}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Submission Configuration */}
      <Card className="p-4">
        <h4 className="font-medium mb-4">Submission Configuration</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Export Options</label>
            <div className="space-y-2">
              {['Investor Portal', 'Squad Dashboard', 'Remix Showcase'].map((option) => {
                const isSelected = compositionData.submission.exportOptions.includes(option);
                return (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        const selected = compositionData.submission.exportOptions;
                        if (e.target.checked) {
                          updateCompositionData('submission', {
                            exportOptions: [...selected, option]
                          });
                        } else {
                          updateCompositionData('submission', {
                            exportOptions: selected.filter(s => s !== option)
                          });
                        }
                      }}
                      className="rounded border-border"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Priority Level</label>
              <Select
                value={compositionData.submission.priorityLevel}
                onValueChange={(value) => updateCompositionData('submission', { priorityLevel: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Expected Timeline</label>
              <Select
                value={compositionData.submission.timeline}
                onValueChange={(value) => updateCompositionData('submission', { timeline: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-week">1 Week</SelectItem>
                  <SelectItem value="2-weeks">2 Weeks</SelectItem>
                  <SelectItem value="1-month">1 Month</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-medium mb-2 block">Additional Notes</label>
          <Textarea
            value={compositionData.submission.additionalNotes}
            onChange={(e) => updateCompositionData('submission', { additionalNotes: e.target.value })}
            placeholder="Any additional context or requirements for the founder..."
            rows={3}
          />
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button onClick={handlePreview} variant="outline" className="flex-1">
          <Play className="w-4 h-4 mr-2" />
          {text.preview}
        </Button>
        
        <Button onClick={() => onSaveDraft(compositionData)} variant="outline" className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          {text.saveDraft}
        </Button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'identity': return renderIdentityStep();
      case 'overlays': return renderOverlaysStep();
      case 'tone': return renderToneStep();
      case 'badges': return renderBadgesStep();
      case 'schema': return renderSchemaStep();
      case 'preview': return renderPreviewStep();
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{text.title}</h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {text.back}
          </Button>
        </div>
        
        {/* Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>{text.progress}</span>
            <span>{text.step} {currentStepIndex + 1} {text.of} {COMPOSITION_STEPS.length}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </Card>

      {/* Step Navigation */}
      <Card className="p-4">
        <div className="flex items-center gap-2 overflow-x-auto">
          {COMPOSITION_STEPS.map((step, index) => {
            const isActive = step === currentStep;
            const isCompleted = index < currentStepIndex || isStepComplete(step);
            const canAccess = index <= currentStepIndex;
            
            return (
              <button
                key={step}
                onClick={() => canAccess && setCurrentStep(step)}
                disabled={!canAccess}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : isCompleted 
                      ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' 
                      : 'bg-secondary/50 text-muted-foreground'
                } ${canAccess ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  isCompleted ? 'bg-green-500 text-white' : 'bg-secondary'
                }`}>
                  {isCompleted ? <CheckCircle className="w-3 h-3" /> : index + 1}
                </div>
                <span className="text-sm font-medium">{text.steps[step]}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Step Content */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{text.steps[currentStep]}</h2>
          <p className="text-muted-foreground">{text.stepDescriptions[currentStep]}</p>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStepIndex === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {text.previous}
        </Button>
        
        <div className="flex gap-2">
          {currentStep === 'preview' ? (
            <Button onClick={handleSubmit} className="min-w-[140px]">
              <Send className="w-4 h-4 mr-2" />
              {text.submit}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="min-w-[140px]"
            >
              {text.next}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}