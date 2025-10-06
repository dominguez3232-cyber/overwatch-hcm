import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { 
  Inbox,
  Clock,
  CheckCircle,
  XCircle,
  Edit3,
  MessageSquare,
  User,
  Target,
  Trophy,
  GitBranch,
  AlertTriangle,
  RefreshCw,
  Send,
  ArrowRight,
  Eye,
  Download,
  Share2,
  Settings,
  Zap,
  Award,
  Globe
} from 'lucide-react';

interface RemixSubmission {
  id: string;
  title: string;
  submittedBy: string;
  submittedAt: string;
  status: 'Pending Review' | 'In Review' | 'Needs Refinement' | 'Approved' | 'Deployed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  overlays: string[];
  coachingStyle: string;
  badges: string[];
  schemaTrace: string[];
  timeline: string;
  description?: string;
  founderNotes?: string;
  reviewedAt?: string;
  deployedAt?: string;
}

interface CoachingLogicEdit {
  overlay: string;
  investorPromptEN: string;
  investorPromptES: string;
  founderEditEN: string;
  founderEditES: string;
  status: 'pending' | 'accepted' | 'modified';
}

interface BadgePathEdit {
  badge: string;
  investorLogic: string;
  founderEdit: string;
  status: 'Aligned' | 'Needs Refinement' | 'Modified';
  reason?: string;
}

interface FounderReviewSystemProps {
  language: 'en' | 'es';
  onApprove: (submissionId: string, modifications: any) => void;
  onReject: (submissionId: string, feedback: string) => void;
  onDeploy: (submissionId: string) => void;
  onNavigate: (view: string) => void;
}

const DEMO_SUBMISSIONS: RemixSubmission[] = [
  {
    id: 'remix-001',
    title: 'Trust Velocity Remix (Investor Edition)',
    submittedBy: 'LatAm VC',
    submittedAt: '2025-10-01T14:30:00Z',
    status: 'Pending Review',
    priority: 'high',
    overlays: ['Trust Velocity (Investor Lens)', 'Dual-Language Navigator'],
    coachingStyle: 'Investor-facing',
    badges: ['🧩 Trust Velocity Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['finance.trust-velocity.investor', 'badge.dual-language'],
    timeline: '2-weeks',
    description: 'Comprehensive investor-focused coaching arc for LatAm market penetration with bilingual delivery.'
  },
  {
    id: 'remix-002',
    title: 'Demo Precision Remix (Pitch Alpha)',
    submittedBy: 'US Angel',
    submittedAt: '2025-10-01T16:45:00Z',
    status: 'In Review',
    priority: 'medium',
    overlays: ['Demo Precision Architect'],
    coachingStyle: 'Rapid Clarity',
    badges: ['🎯 Demo Precision Architect'],
    schemaTrace: ['demo.pitch-alpha'],
    timeline: '1-week',
    description: 'Fast-track demo excellence for investor presentations.'
  },
  {
    id: 'remix-003',
    title: 'Cultural Intelligence Navigator',
    submittedBy: 'Global Fund',
    submittedAt: '2025-09-30T10:20:00Z',
    status: 'Needs Refinement',
    priority: 'medium',
    overlays: ['Cultural Force Multiplier', 'Dual-Language Navigator'],
    coachingStyle: 'Schema-first',
    badges: ['🎭 Cultural Intelligence Master', '🌐 Dual-Language Navigator'],
    schemaTrace: ['culture.force-multiplier', 'badge.dual-language'],
    timeline: '1-month',
    description: 'Cross-cultural coaching framework for global market expansion.',
    founderNotes: 'Need to adjust cultural sensitivity parameters for European markets.'
  }
];

const DEMO_COACHING_EDITS: CoachingLogicEdit[] = [
  {
    overlay: 'Trust Velocity',
    investorPromptEN: 'Frame investor clarity using schema trace.',
    investorPromptES: 'Presenta claridad inversora usando trazado de esquema.',
    founderEditEN: 'Narrate trust-building schema transitions for investor walkthroughs.',
    founderEditES: 'Narra transiciones de confianza usando lógica de esquema para inversores.',
    status: 'pending'
  },
  {
    overlay: 'Dual-Language Navigator',
    investorPromptEN: 'Enable bilingual coaching delivery.',
    investorPromptES: 'Habilita entrega de coaching bilingüe.',
    founderEditEN: 'Seamlessly switch between EN/ES based on market context and audience.',
    founderEditES: 'Cambia sin problemas entre EN/ES según contexto de mercado y audiencia.',
    status: 'pending'
  }
];

const DEMO_BADGE_EDITS: BadgePathEdit[] = [
  {
    badge: '🧩 Trust Velocity Master',
    investorLogic: 'Clarity Index ≥ 3.0x + Feedback ≥ 4.5',
    founderEdit: 'Clarity Index ≥ 2.8x + Replay Completion ≥ 70%',
    status: 'Aligned',
    reason: 'Optimized for replay engagement metrics'
  },
  {
    badge: '🌐 Dual-Language Navigator',
    investorLogic: 'Overlay Completed in EN + ES',
    founderEdit: 'Overlay Completed in EN + ES + Market = LatAm',
    status: 'Needs Refinement',
    reason: 'Market specificity needed for proper targeting'
  }
];

export default function FounderReviewSystem({
  language,
  onApprove,
  onReject,
  onDeploy,
  onNavigate
}: FounderReviewSystemProps) {
  const [activeTab, setActiveTab] = useState('queue');
  const [selectedSubmission, setSelectedSubmission] = useState<RemixSubmission | null>(null);
  const [submissions, setSubmissions] = useState<RemixSubmission[]>(DEMO_SUBMISSIONS);
  const [coachingEdits, setCoachingEdits] = useState<CoachingLogicEdit[]>(DEMO_COACHING_EDITS);
  const [badgeEdits, setBadgeEdits] = useState<BadgePathEdit[]>(DEMO_BADGE_EDITS);
  const [feedbackText, setFeedbackText] = useState('');

  const t = {
    en: {
      title: 'Founder Review System',
      subtitle: 'Review and approve investor-submitted remix compositions',
      tabs: {
        queue: 'Submission Queue',
        review: 'Coaching Logic Review',
        badges: 'Badge Path Alignment',
        schema: 'Schema Trace Validation',
        tools: 'Refinement Tools',
        approval: 'Approval & Deployment'
      },
      status: {
        'Pending Review': 'Pending Review',
        'In Review': 'In Review',
        'Needs Refinement': 'Needs Refinement',
        'Approved': 'Approved',
        'Deployed': 'Deployed'
      },
      priority: {
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        urgent: 'Urgent'
      },
      actions: {
        review: 'Start Review',
        approve: 'Approve',
        reject: 'Needs Refinement',
        deploy: 'Deploy Remix',
        acceptEdit: 'Accept Edit',
        modifyEdit: 'Modify',
        sendFeedback: 'Send Feedback',
        export: 'Export',
        viewDetails: 'View Details'
      },
      labels: {
        submittedBy: 'Submitted By',
        submittedAt: 'Submitted At',
        timeline: 'Timeline',
        overlays: 'Overlays',
        badges: 'Badges',
        schemaTrace: 'Schema Trace',
        coachingStyle: 'Coaching Style',
        description: 'Description',
        founderNotes: 'Founder Notes',
        feedback: 'Feedback',
        noSubmissions: 'No submissions pending review',
        selectSubmission: 'Select a submission to review'
      }
    },
    es: {
      title: 'Sistema de Revisión del Fundador',
      subtitle: 'Revisa y aprueba composiciones de remix enviadas por inversores',
      tabs: {
        queue: 'Cola de Envíos',
        review: 'Revisión Lógica Coaching',
        badges: 'Alineación Ruta Insignias',
        schema: 'Validación Trazado Esquemas',
        tools: 'Herramientas Refinamiento',
        approval: 'Aprobación y Despliegue'
      },
      status: {
        'Pending Review': 'Pendiente Revisión',
        'In Review': 'En Revisión',
        'Needs Refinement': 'Necesita Refinamiento',
        'Approved': 'Aprobado',
        'Deployed': 'Desplegado'
      },
      priority: {
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto',
        urgent: 'Urgente'
      },
      actions: {
        review: 'Iniciar Revisión',
        approve: 'Aprobar',
        reject: 'Necesita Refinamiento',
        deploy: 'Desplegar Remix',
        acceptEdit: 'Aceptar Edición',
        modifyEdit: 'Modificar',
        sendFeedback: 'Enviar Feedback',
        export: 'Exportar',
        viewDetails: 'Ver Detalles'
      },
      labels: {
        submittedBy: 'Enviado Por',
        submittedAt: 'Enviado En',
        timeline: 'Cronograma',
        overlays: 'Overlays',
        badges: 'Insignias',
        schemaTrace: 'Trazado Esquemas',
        coachingStyle: 'Estilo Coaching',
        description: 'Descripción',
        founderNotes: 'Notas Fundador',
        feedback: 'Feedback',
        noSubmissions: 'No hay envíos pendientes de revisión',
        selectSubmission: 'Selecciona un envío para revisar'
      }
    }
  };

  const text = t[language];

  const getStatusColor = (status: RemixSubmission['status']) => {
    switch (status) {
      case 'Pending Review': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'In Review': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Needs Refinement': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Approved': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Deployed': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getPriorityColor = (priority: RemixSubmission['priority']) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'high': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'low': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStartReview = (submission: RemixSubmission) => {
    setSelectedSubmission(submission);
    // Update status to 'In Review'
    setSubmissions(prev => prev.map(s => 
      s.id === submission.id ? { ...s, status: 'In Review' as const, reviewedAt: new Date().toISOString() } : s
    ));
    setActiveTab('review');
  };

  const handleApproveSubmission = (submissionId: string) => {
    setSubmissions(prev => prev.map(s => 
      s.id === submissionId ? { ...s, status: 'Approved' as const } : s
    ));
    onApprove(submissionId, { coachingEdits, badgeEdits });
  };

  const handleRejectSubmission = (submissionId: string) => {
    if (feedbackText.trim()) {
      setSubmissions(prev => prev.map(s => 
        s.id === submissionId ? { 
          ...s, 
          status: 'Needs Refinement' as const,
          founderNotes: feedbackText 
        } : s
      ));
      onReject(submissionId, feedbackText);
      setFeedbackText('');
    }
  };

  const handleDeployRemix = (submissionId: string) => {
    setSubmissions(prev => prev.map(s => 
      s.id === submissionId ? { 
        ...s, 
        status: 'Deployed' as const,
        deployedAt: new Date().toISOString()
      } : s
    ));
    onDeploy(submissionId);
  };

  const handleCoachingEdit = (overlay: string, field: string, value: string) => {
    setCoachingEdits(prev => prev.map(edit => 
      edit.overlay === overlay ? { ...edit, [field]: value } : edit
    ));
  };

  const handleBadgeEdit = (badge: string, field: string, value: string) => {
    setBadgeEdits(prev => prev.map(edit => 
      edit.badge === badge ? { ...edit, [field]: value } : edit
    ));
  };

  const renderSubmissionQueue = () => (
    <div className="space-y-4">
      {submissions.length === 0 ? (
        <Card className="p-8 text-center">
          <Inbox className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{text.labels.noSubmissions}</h3>
          <p className="text-muted-foreground">{text.labels.selectSubmission}</p>
        </Card>
      ) : (
        submissions.map((submission) => (
          <motion.div
            key={submission.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{submission.title}</h3>
                    <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                      {text.status[submission.status]}
                    </Badge>
                    <Badge className={`text-xs ${getPriorityColor(submission.priority)}`}>
                      {text.priority[submission.priority]}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStartReview(submission)}
                      disabled={submission.status === 'Deployed'}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      {text.actions.review}
                    </Button>
                    
                    {submission.status === 'Approved' && (
                      <Button
                        size="sm"
                        onClick={() => handleDeployRemix(submission.id)}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {text.actions.deploy}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">{text.labels.submittedBy}:</span>
                    <div className="font-medium">{submission.submittedBy}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{text.labels.submittedAt}:</span>
                    <div className="font-medium">{formatDate(submission.submittedAt)}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{text.labels.timeline}:</span>
                    <div className="font-medium">{submission.timeline}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{text.labels.coachingStyle}:</span>
                    <div className="font-medium">{submission.coachingStyle}</div>
                  </div>
                </div>

                {/* Components */}
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">{text.labels.overlays}:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {submission.overlays.map((overlay) => (
                        <Badge key={overlay} variant="outline" className="text-xs">
                          {overlay}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground">{text.labels.badges}:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {submission.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground">{text.labels.schemaTrace}:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {submission.schemaTrace.map((trace) => (
                        <Badge key={trace} variant="outline" className="text-xs font-mono">
                          {trace}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                {submission.description && (
                  <div>
                    <span className="text-sm text-muted-foreground">{text.labels.description}:</span>
                    <p className="text-sm mt-1">{submission.description}</p>
                  </div>
                )}

                {/* Founder Notes */}
                {submission.founderNotes && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <span className="text-sm font-medium text-yellow-400">{text.labels.founderNotes}:</span>
                    <p className="text-sm mt-1">{submission.founderNotes}</p>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))
      )}
    </div>
  );

  const renderCoachingReview = () => (
    <div className="space-y-6">
      {coachingEdits.map((edit, index) => (
        <Card key={index} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{edit.overlay}</h3>
              <Badge variant={edit.status === 'accepted' ? 'default' : 'outline'}>
                {edit.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* English Prompts */}
              <div className="space-y-4">
                <h4 className="font-medium">English Prompts</h4>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Investor Prompt</label>
                  <div className="bg-secondary/30 p-3 rounded border">
                    <div className="text-sm">{edit.investorPromptEN}</div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Founder Edit</label>
                  <Textarea
                    value={edit.founderEditEN}
                    onChange={(e) => handleCoachingEdit(edit.overlay, 'founderEditEN', e.target.value)}
                    rows={3}
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Spanish Prompts */}
              <div className="space-y-4">
                <h4 className="font-medium">Spanish Prompts</h4>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Investor Prompt</label>
                  <div className="bg-secondary/30 p-3 rounded border">
                    <div className="text-sm">{edit.investorPromptES}</div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Founder Edit</label>
                  <Textarea
                    value={edit.founderEditES}
                    onChange={(e) => handleCoachingEdit(edit.overlay, 'founderEditES', e.target.value)}
                    rows={3}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setCoachingEdits(prev => prev.map(e => 
                  e.overlay === edit.overlay ? { ...e, status: 'accepted' } : e
                ))}
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                {text.actions.acceptEdit}
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCoachingEdits(prev => prev.map(e => 
                  e.overlay === edit.overlay ? { ...e, status: 'modified' } : e
                ))}
              >
                <Edit3 className="w-3 h-3 mr-1" />
                {text.actions.modifyEdit}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderBadgeReview = () => (
    <div className="space-y-6">
      {badgeEdits.map((edit, index) => (
        <Card key={index} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{edit.badge}</h3>
              <Badge 
                className={`text-xs ${
                  edit.status === 'Aligned' 
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : edit.status === 'Needs Refinement'
                      ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                }`}
              >
                {edit.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Investor Logic</label>
                <div className="bg-secondary/30 p-3 rounded border font-mono text-sm">
                  {edit.investorLogic}
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Founder Edit</label>
                <Textarea
                  value={edit.founderEdit}
                  onChange={(e) => handleBadgeEdit(edit.badge, 'founderEdit', e.target.value)}
                  className="font-mono text-sm"
                  rows={2}
                />
              </div>
            </div>

            {edit.reason && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <span className="text-sm font-medium text-blue-400">Reason:</span>
                <p className="text-sm mt-1">{edit.reason}</p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setBadgeEdits(prev => prev.map(e => 
                  e.badge === edit.badge ? { ...e, status: 'Aligned' } : e
                ))}
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Accept Logic
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => setBadgeEdits(prev => prev.map(e => 
                  e.badge === edit.badge ? { ...e, status: 'Modified' } : e
                ))}
              >
                <Edit3 className="w-3 h-3 mr-1" />
                Modify Logic
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderSchemaValidation = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Schema Trace Validation</h3>
        
        <div className="space-y-4">
          {[
            { path: "finance.trust-velocity.investor", status: "Valid", description: "Investor-focused trust framework validated" },
            { path: "badge.dual-language", status: "Valid", description: "Bilingual achievement system operational" },
            { path: "demo.pitch-alpha", status: "Missing", description: "Demo framework needs integration" },
            { path: "culture.force-multiplier", status: "Valid", description: "Cultural intelligence system ready" }
          ].map((node, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
              <div>
                <div className="font-mono text-sm">{node.path}</div>
                <div className="text-xs text-muted-foreground">{node.description}</div>
              </div>
              
              <Badge 
                className={`text-xs ${
                  node.status === 'Valid' 
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}
              >
                {node.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRefinementTools = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-medium mb-1">Overlay Swap Tool</h4>
          <p className="text-xs text-muted-foreground">Replace overlays with alternatives</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Edit3 className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-medium mb-1">Prompt Editor</h4>
          <p className="text-xs text-muted-foreground">Refine coaching prompts</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-medium mb-1">Badge Logic Tuner</h4>
          <p className="text-xs text-muted-foreground">Adjust unlock criteria</p>
        </Card>
        
        <Card className="p-4 text-center">
          <GitBranch className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-medium mb-1">Schema Trace Composer</h4>
          <p className="text-xs text-muted-foreground">Modify knowledge pathways</p>
        </Card>
      </div>
    </div>
  );

  const renderApprovalPanel = () => (
    <div className="space-y-6">
      {selectedSubmission && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Review Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-2">Submission Details</h4>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Title:</span> {selectedSubmission.title}</div>
                <div><span className="text-muted-foreground">Submitted by:</span> {selectedSubmission.submittedBy}</div>
                <div><span className="text-muted-foreground">Priority:</span> {text.priority[selectedSubmission.priority]}</div>
                <div><span className="text-muted-foreground">Timeline:</span> {selectedSubmission.timeline}</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Review Status</h4>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Coaching Edits:</span> {coachingEdits.filter(e => e.status === 'accepted').length}/{coachingEdits.length}</div>
                <div><span className="text-muted-foreground">Badge Alignment:</span> {badgeEdits.filter(e => e.status === 'Aligned').length}/{badgeEdits.length}</div>
                <div><span className="text-muted-foreground">Schema Validation:</span> 3/4 Valid</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{text.labels.feedback}</label>
              <Textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Provide feedback to the investor about the remix composition..."
                rows={4}
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => handleApproveSubmission(selectedSubmission.id)}
                className="flex-1"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {text.actions.approve}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleRejectSubmission(selectedSubmission.id)}
                className="flex-1"
                disabled={!feedbackText.trim()}
              >
                <XCircle className="w-4 h-4 mr-2" />
                {text.actions.reject}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button size="sm" variant="outline">
                <Download className="w-3 h-3 mr-1" />
                Investor Portal
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="w-3 h-3 mr-1" />
                Squad Dashboard
              </Button>
              <Button size="sm" variant="outline">
                <Eye className="w-3 h-3 mr-1" />
                Remix Showcase
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{text.title}</h1>
            <p className="text-muted-foreground">{text.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {submissions.filter(s => s.status === 'Pending Review').length} Pending
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              {submissions.filter(s => s.status === 'Needs Refinement').length} Need Attention
            </Badge>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="queue" className="flex items-center gap-2">
            <Inbox className="w-4 h-4" />
            {text.tabs.queue}
          </TabsTrigger>
          <TabsTrigger value="review" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            {text.tabs.review}
          </TabsTrigger>
          <TabsTrigger value="badges" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            {text.tabs.badges}
          </TabsTrigger>
          <TabsTrigger value="schema" className="flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            {text.tabs.schema}
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            {text.tabs.tools}
          </TabsTrigger>
          <TabsTrigger value="approval" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {text.tabs.approval}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="queue" className="mt-6">
          {renderSubmissionQueue()}
        </TabsContent>

        <TabsContent value="review" className="mt-6">
          {renderCoachingReview()}
        </TabsContent>

        <TabsContent value="badges" className="mt-6">
          {renderBadgeReview()}
        </TabsContent>

        <TabsContent value="schema" className="mt-6">
          {renderSchemaValidation()}
        </TabsContent>

        <TabsContent value="tools" className="mt-6">
          {renderRefinementTools()}
        </TabsContent>

        <TabsContent value="approval" className="mt-6">
          {renderApprovalPanel()}
        </TabsContent>
      </Tabs>
    </div>
  );
}