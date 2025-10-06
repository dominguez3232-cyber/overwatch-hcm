import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Clock,
  Eye,
  ThumbsUp,
  UserPlus,
  MessageCircle,
  ArrowRight,
  Copy,
  Download,
  Play,
  Pause,
  Settings,
  Filter,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Zap,
  Brain,
  Heart,
  Star,
  Send,
  ExternalLink,
  BarChart3,
  Activity,
  GitBranch,
  Compass,
  Crosshair
} from 'lucide-react';

interface LinkedInSequenceGeneratorProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface SequenceStep {
  day: number;
  action: string;
  message: string;
  productLedVariant?: string;
  opsLedVariant?: string;
  notes?: string;
}

interface LinkedInSequence {
  id: string;
  vertical: string;
  founderType: string;
  duration: number;
  expectedResponse: string;
  conversionRate: string;
  steps: SequenceStep[];
}

export function LinkedInSequenceGenerator({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: LinkedInSequenceGeneratorProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'sequences' | 'personalization' | 'analytics' | 'builder'>('overview');
  const [selectedVertical, setSelectedVertical] = useState<'saas' | 'devops' | 'fintech'>('saas');
  const [selectedPersonality, setSelectedPersonality] = useState<'product-led' | 'ops-led' | 'both'>('both');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const labels = {
    en: {
      title: "LinkedIn Sequence Generator",
      subtitle: "Josh Braun's lean-back methodology for founder-specific LinkedIn outreach",
      description: "Multi-touch LinkedIn sequences with personality-based personalization for maximum engagement",
      
      // Navigation
      overview: "Sequence Overview",
      sequences: "Sequences",
      personalization: "Personalization Engine",
      analytics: "Performance Analytics",
      builder: "Sequence Builder",
      
      // Actions
      playSequence: "Play Sequence",
      copyMessage: "Copy Message",
      exportSequence: "Export Sequence",
      customizeSequence: "Customize Sequence",
      
      // Metrics
      responseRate: "Response Rate",
      conversionRate: "Conversion Rate",
      engagementRate: "Engagement Rate",
      meetingBookingRate: "Meeting Booking Rate",
      
      // Verticals
      saas: "SaaS Founder",
      devops: "DevOps Founder", 
      fintech: "Fintech Founder",
      
      // Personality Types
      productLed: "Product-Led",
      opsLed: "Ops-Led",
      both: "Both Types",
      
      // Status
      scheduled: "Scheduled",
      sent: "Sent",
      responded: "Responded",
      converted: "Converted"
    },
    es: {
      title: "Generador de Secuencias LinkedIn",
      subtitle: "Metodología lean-back de Josh Braun para alcance específico de fundadores en LinkedIn",
      description: "Secuencias multi-contacto de LinkedIn con personalización basada en personalidad para máximo engagement",
      
      // Navigation
      overview: "Vista de Secuencias",
      sequences: "Secuencias",
      personalization: "Motor de Personalización",
      analytics: "Analíticas de Rendimiento",
      builder: "Constructor de Secuencias",
      
      // Actions
      playSequence: "Reproducir Secuencia",
      copyMessage: "Copiar Mensaje",
      exportSequence: "Exportar Secuencia",
      customizeSequence: "Personalizar Secuencia",
      
      // Metrics
      responseRate: "Tasa de Respuesta",
      conversionRate: "Tasa de Conversión",
      engagementRate: "Tasa de Engagement",
      meetingBookingRate: "Tasa de Reserva de Reuniones",
      
      // Verticals
      saas: "Fundador SaaS",
      devops: "Fundador DevOps",
      fintech: "Fundador Fintech",
      
      // Personality Types
      productLed: "Orientado a Producto",
      opsLed: "Orientado a Operaciones",
      both: "Ambos Tipos",
      
      // Status
      scheduled: "Programado",
      sent: "Enviado",
      responded: "Respondió",
      converted: "Convertido"
    }
  };

  const currentLabels = labels[language];

  // LinkedIn Sequences Data
  const linkedinSequences: LinkedInSequence[] = [
    {
      id: 'saas-founder',
      vertical: 'SaaS',
      founderType: 'Product-Led / Ops-Led',
      duration: 10,
      expectedResponse: '76%',
      conversionRate: '24%',
      steps: [
        {
          day: 1,
          action: 'View profile',
          message: 'No message—just spark curiosity',
          notes: 'Silent engagement to trigger notification'
        },
        {
          day: 2,
          action: 'Like/comment on post',
          message: 'Great perspective on scaling recurring revenue.',
          productLedVariant: 'Love how you tie new features to adoption metrics—wonder how you\'d measure our HR self-service rollout?',
          opsLedVariant: 'Appreciate your breakdown of compliance workflows—curious how you\'re automating multi-state hiring processes?'
        },
        {
          day: 3,
          action: 'Connection request',
          message: 'Hi [First Name], saw your work at [Company]—would love to connect.',
          productLedVariant: 'I admire founders using product as the growth engine.',
          opsLedVariant: 'I respect leaders who build brutal-proof ops to keep pace with product velocity.'
        },
        {
          day: 5,
          action: 'DM after connect',
          message: 'We helped a compliance-focused SaaS firm scale from 20→60 employees with embedded recruiting + fractional HR.',
          productLedVariant: 'Given your focus on in-app growth, I\'d love to share how we tracked feature-to-revenue lift.',
          opsLedVariant: 'Since you\'re optimizing workflows, happy to swap notes on compliance frameworks that scale.'
        },
        {
          day: 8,
          action: 'Comment on new update',
          message: 'Your latest post on churn reduction is spot on.',
          productLedVariant: 'Excited by those user-triggered upsells!',
          opsLedVariant: 'Loved that ops dashboard template.'
        },
        {
          day: 10,
          action: 'Follow-up DM',
          message: 'Quick 15-min sync next week? No decks—just founder-to-founder insights.',
          productLedVariant: 'On driving adoption velocity',
          opsLedVariant: 'On tightening process handoffs'
        }
      ]
    },
    {
      id: 'devops-founder',
      vertical: 'DevOps',
      founderType: 'Product-Led / Ops-Led',
      duration: 10,
      expectedResponse: '82%',
      conversionRate: '28%',
      steps: [
        {
          day: 1,
          action: 'View profile',
          message: 'No message—just spark curiosity',
          notes: 'Silent engagement to trigger notification'
        },
        {
          day: 2,
          action: 'Like/comment on sprint post',
          message: 'Always appreciate founders who think in sprint velocity.',
          productLedVariant: 'Love your emphasis on continuous delivery impact.',
          opsLedVariant: 'Digging that breakdown of deployment pipeline efficiencies.'
        },
        {
          day: 3,
          action: 'Connection request',
          message: 'Hi [First Name], saw your DevOps growth at [Company]—would love to connect.',
          productLedVariant: 'Impressed by your feature-driven releases.',
          opsLedVariant: 'Respect the way you harden your CI/CD workflows.'
        },
        {
          day: 5,
          action: 'DM after connect',
          message: 'We helped a DevOps platform triple its engineering team in 6 months by embedding recruiting + HR into sprint cycles.',
          productLedVariant: 'Curious how you measure time-to-value on each deploy?',
          opsLedVariant: 'Happy to share how we tie performance reviews to sprint KPIs.'
        },
        {
          day: 8,
          action: 'Comment on technical post',
          message: 'Your post on observability tools is 🔥.',
          productLedVariant: 'Love how it drives user confidence in new features.',
          opsLedVariant: 'Great tips for streamlining incident response.'
        },
        {
          day: 10,
          action: 'Follow-up DM',
          message: '15-min chat this week? Just founder insights—no slide decks.',
          productLedVariant: 'On measuring adoption velocity',
          opsLedVariant: 'On embedding process improvements'
        }
      ]
    },
    {
      id: 'fintech-founder',
      vertical: 'Fintech',
      founderType: 'Product-Led / Ops-Led',
      duration: 10,
      expectedResponse: '71%',
      conversionRate: '31%',
      steps: [
        {
          day: 1,
          action: 'View profile',
          message: 'No message—just spark curiosity',
          notes: 'Silent engagement to trigger notification'
        },
        {
          day: 2,
          action: 'Like/comment on funding post',
          message: 'Congrats on the recent round!',
          productLedVariant: 'Excited about how you\'re using features to unlock user trust.',
          opsLedVariant: 'Impressed by your focus on audit-ready controls.'
        },
        {
          day: 3,
          action: 'Connection request',
          message: 'Hi [First Name], loved following your fintech journey at [Company]—let\'s connect.',
          productLedVariant: 'I admire product innovations that drive trust.',
          opsLedVariant: 'Respect the way you architect compliance frameworks.'
        },
        {
          day: 5,
          action: 'DM after connect',
          message: 'We built HIPAA-compliant HR frameworks and recruited key roles for a fintech SaaS firm prepping for Series A.',
          productLedVariant: 'I\'d be glad to share how we measured feature adoption lift.',
          opsLedVariant: 'Happy to show you our rapid-compliance onboarding playbook.'
        },
        {
          day: 8,
          action: 'Comment on regulatory post',
          message: 'Your deep dive on KYC/AML integration is invaluable.',
          productLedVariant: 'Love how you tie it back to user experience.',
          opsLedVariant: 'Great blueprint for maintaining audit readiness.'
        },
        {
          day: 10,
          action: 'Follow-up DM',
          message: 'Quick founder-to-founder chat? 15 min, no slides—just shared insights.',
          productLedVariant: 'On accelerating feature-to-revenue',
          opsLedVariant: 'On streamlining compliance ops'
        }
      ]
    }
  ];

  const getActionIcon = (action: string) => {
    if (action.includes('View')) return <Eye className="w-4 h-4" />;
    if (action.includes('Like') || action.includes('Comment')) return <ThumbsUp className="w-4 h-4" />;
    if (action.includes('Connection')) return <UserPlus className="w-4 h-4" />;
    if (action.includes('DM')) return <MessageCircle className="w-4 h-4" />;
    return <MessageSquare className="w-4 h-4" />;
  };

  const getVerticalColor = (vertical: string) => {
    switch (vertical) {
      case 'SaaS': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'DevOps': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'Fintech': return 'text-purple-400 bg-purple-900/20 border-purple-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const playSequence = (sequenceId: string) => {
    setIsPlaying(sequenceId);
    // Simulate sequence playback
    setTimeout(() => setIsPlaying(null), 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-blue-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Context Selectors */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Vertical Focus</label>
            <select 
              value={selectedVertical}
              onChange={(e) => setSelectedVertical(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="saas">{currentLabels.saas}</option>
              <option value="devops">{currentLabels.devops}</option>
              <option value="fintech">{currentLabels.fintech}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Personality Type</label>
            <select 
              value={selectedPersonality}
              onChange={(e) => setSelectedPersonality(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="both">{currentLabels.both}</option>
              <option value="product-led">{currentLabels.productLed}</option>
              <option value="ops-led">{currentLabels.opsLed}</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Generate Sequence
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="sequences">{currentLabels.sequences}</TabsTrigger>
            <TabsTrigger value="personalization">{currentLabels.personalization}</TabsTrigger>
            <TabsTrigger value="analytics">{currentLabels.analytics}</TabsTrigger>
            <TabsTrigger value="builder">{currentLabels.builder}</TabsTrigger>
          </TabsList>

          {/* Sequence Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Performance Metrics */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">LinkedIn Sequence Performance</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">76%</div>
                  <div className="text-sm text-gray-400">{currentLabels.responseRate}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">28%</div>
                  <div className="text-sm text-gray-400">{currentLabels.conversionRate}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">89%</div>
                  <div className="text-sm text-gray-400">{currentLabels.engagementRate}</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24%</div>
                  <div className="text-sm text-gray-400">{currentLabels.meetingBookingRate}</div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Josh Braun Methodology Impact</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Personality-based personalization combined with lean-back principles increases response rates 
                  by 3.2x compared to generic LinkedIn outreach. Founders self-qualify through curiosity-driven 
                  conversations rather than sales pressure.
                </p>
              </div>
            </Card>

            {/* Sequence Overview Cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              {linkedinSequences.map((sequence) => (
                <Card key={sequence.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{sequence.vertical} Founder</h3>
                      <p className="text-sm text-gray-400">{sequence.founderType}</p>
                      <Badge className={`text-xs mt-2 ${getVerticalColor(sequence.vertical)}`}>
                        {sequence.duration} Day Sequence
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{sequence.expectedResponse}</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Conversion Rate:</span>
                      <span className="text-sm font-medium text-white">{sequence.conversionRate}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Touch Points:</span>
                      <span className="text-sm font-medium text-white">{sequence.steps.length}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Duration:</span>
                      <span className="text-sm font-medium text-white">{sequence.duration} days</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => playSequence(sequence.id)}
                    >
                      {isPlaying === sequence.id ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Playing...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          {currentLabels.playSequence}
                        </>
                      )}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('sequences')}
                >
                  <MessageSquare className="w-4 h-4" />
                  View Sequences
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('personalization')}
                >
                  <Brain className="w-4 h-4" />
                  Personalization Engine
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('builder')}
                >
                  <Target className="w-4 h-4" />
                  Build Custom Sequence
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700"
                >
                  <Download className="w-4 h-4" />
                  {currentLabels.exportSequence}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Sequences */}
          <TabsContent value="sequences" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">LinkedIn Sequences by Vertical</h2>
              
              <div className="flex gap-2">
                <select 
                  value={selectedVertical}
                  onChange={(e) => setSelectedVertical(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  <option value="saas">SaaS Founder</option>
                  <option value="devops">DevOps Founder</option>
                  <option value="fintech">Fintech Founder</option>
                </select>
                
                <Button className="bg-green-600 hover:bg-green-700">
                  Customize Sequence
                </Button>
              </div>
            </div>

            {linkedinSequences
              .filter(seq => seq.vertical.toLowerCase() === selectedVertical)
              .map((sequence) => (
                <Card key={sequence.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{sequence.vertical} Founder Sequence</h3>
                      <p className="text-gray-400">10-day multi-touch campaign with personality personalization</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Badge className={`${getVerticalColor(sequence.vertical)}`}>
                        {sequence.expectedResponse} response rate
                      </Badge>
                      <Badge className="bg-green-900/20 text-green-400 border-green-700">
                        {sequence.conversionRate} conversion
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {sequence.steps.map((step, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {step.day}
                            </div>
                            <div className="text-blue-400">
                              {getActionIcon(step.action)}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-white">{step.action}</h4>
                              <Badge className="text-xs bg-gray-700 text-gray-300">
                                Day {step.day}
                              </Badge>
                            </div>
                            
                            <div className="bg-gray-900 rounded-lg p-3 mb-3">
                              <p className="text-gray-300 text-sm mb-2">{step.message}</p>
                              
                              {(selectedPersonality === 'both' || selectedPersonality === 'product-led') && step.productLedVariant && (
                                <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700 rounded">
                                  <div className="text-xs text-blue-400 mb-1">Product-Led Variant:</div>
                                  <p className="text-sm text-gray-300">{step.productLedVariant}</p>
                                </div>
                              )}
                              
                              {(selectedPersonality === 'both' || selectedPersonality === 'ops-led') && step.opsLedVariant && (
                                <div className="mt-3 p-2 bg-green-900/20 border border-green-700 rounded">
                                  <div className="text-xs text-green-400 mb-1">Ops-Led Variant:</div>
                                  <p className="text-sm text-gray-300">{step.opsLedVariant}</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-gray-600 text-xs"
                                onClick={() => copyToClipboard(step.message)}
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </Button>
                              
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-gray-600 text-xs"
                              >
                                <Settings className="w-3 h-3 mr-1" />
                                Customize
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </TabsContent>

          {/* Personalization Engine */}
          <TabsContent value="personalization" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Founder Personality Personalization Engine</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Build Custom Variants
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Product-Led Founder */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Product-Led Founder</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-medium text-blue-400 mb-2">Messaging Characteristics</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Feature-to-revenue focus</li>
                      <li>• User adoption metrics emphasis</li>
                      <li>• Product velocity language</li>
                      <li>• Innovation and growth drivers</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-gray-400 mb-2">Example Personalization</h4>
                    <div className="text-sm text-gray-300 mb-2">
                      <span className="text-gray-500">Base:</span> "Great perspective on scaling"
                    </div>
                    <div className="text-sm text-blue-300">
                      <span className="text-blue-400">Product-Led:</span> "Love how you tie new features to adoption metrics—wonder how you'd measure our HR self-service rollout?"
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-gray-400 mb-2">Key Phrases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">feature-driven</Badge>
                      <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">adoption velocity</Badge>
                      <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">user experience</Badge>
                      <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">growth engine</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Ops-Led Founder */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Ops-Led Founder</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-medium text-green-400 mb-2">Messaging Characteristics</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Process optimization focus</li>
                      <li>• Compliance and workflow emphasis</li>
                      <li>• Systems efficiency language</li>
                      <li>• Operational excellence drivers</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-gray-400 mb-2">Example Personalization</h4>
                    <div className="text-sm text-gray-300 mb-2">
                      <span className="text-gray-500">Base:</span> "Great perspective on scaling"
                    </div>
                    <div className="text-sm text-green-300">
                      <span className="text-green-400">Ops-Led:</span> "Appreciate your breakdown of compliance workflows—curious how you're automating multi-state hiring processes?"
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h4 className="font-medium text-gray-400 mb-2">Key Phrases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">process optimization</Badge>
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">compliance frameworks</Badge>
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">workflow automation</Badge>
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">operational efficiency</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Personalization Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Personalization Decision Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Scenario</th>
                      <th className="text-center py-3 text-gray-400">Product-Led Approach</th>
                      <th className="text-center py-3 text-gray-400">Ops-Led Approach</th>
                      <th className="text-center py-3 text-gray-400">Key Differentiator</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Initial Connection</td>
                      <td className="text-center py-3 text-gray-400">Product growth engine focus</td>
                      <td className="text-center py-3 text-gray-400">Operational excellence focus</td>
                      <td className="text-center py-3 text-blue-400">Innovation vs Efficiency</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Pain Point Discovery</td>
                      <td className="text-center py-3 text-gray-400">Feature adoption metrics</td>
                      <td className="text-center py-3 text-gray-400">Process compliance gaps</td>
                      <td className="text-center py-3 text-green-400">Metrics vs Compliance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Solution Positioning</td>
                      <td className="text-center py-3 text-gray-400">User experience enhancement</td>
                      <td className="text-center py-3 text-gray-400">Workflow optimization</td>
                      <td className="text-center py-3 text-purple-400">Experience vs Process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Sequence Performance Analytics</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">76%</div>
                  <div className="text-sm text-gray-400">Avg Response Rate</div>
                  <div className="text-xs text-blue-400 mt-1">+43% vs generic outreach</div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">28%</div>
                  <div className="text-sm text-gray-400">Avg Conversion Rate</div>
                  <div className="text-xs text-green-400 mt-1">+67% vs traditional sales</div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3.2x</div>
                  <div className="text-sm text-gray-400">Performance Multiplier</div>
                  <div className="text-xs text-purple-400 mt-1">Lean-back methodology</div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Sequence Performance by Vertical</h3>
                
                <div className="space-y-4">
                  {linkedinSequences.map((sequence) => (
                    <div key={sequence.id} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <div>
                        <div className="font-medium text-white">{sequence.vertical} Founder</div>
                        <div className="text-sm text-gray-400">{sequence.duration} day sequence</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{sequence.expectedResponse}</div>
                        <div className="text-xs text-gray-400">Response Rate</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Personalization Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-white">Product-Led Variants</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-400">81%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-green-400" />
                      <span className="text-white">Ops-Led Variants</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">73%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-gray-400" />
                      <span className="text-white">Generic Messages</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-400">41%</div>
                      <div className="text-xs text-gray-400">Response Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Sequence Builder */}
          <TabsContent value="builder" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Custom Sequence Builder</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Save Sequence
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Build Your Custom LinkedIn Sequence</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Sequence Configuration</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Target Vertical</label>
                      <select className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg">
                        <option value="saas">SaaS</option>
                        <option value="devops">DevOps</option>
                        <option value="fintech">Fintech</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="ecommerce">E-commerce</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Personality Focus</label>
                      <select className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg">
                        <option value="product-led">Product-Led</option>
                        <option value="ops-led">Ops-Led</option>
                        <option value="capital-savvy">Capital-Savvy</option>
                        <option value="growth-focused">Growth-Focused</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Sequence Duration</label>
                      <select className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg">
                        <option value="7">7 Days</option>
                        <option value="10">10 Days</option>
                        <option value="14">14 Days</option>
                        <option value="21">21 Days</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Sequence Preview</h4>
                  
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-3">Generated sequence based on your configuration:</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">1</div>
                        <span className="text-sm text-gray-300">Silent profile view</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">2</div>
                        <span className="text-sm text-gray-300">Engage with recent post</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">3</div>
                        <span className="text-sm text-gray-300">Send connection request</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs">...</div>
                        <span className="text-sm text-gray-500">Additional steps will be generated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Generate Sequence
                </Button>
                <Button variant="outline" className="border-gray-600">
                  Preview Messages
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}