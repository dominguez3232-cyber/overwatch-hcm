import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  MessageSquare, 
  Target, 
  Users, 
  DollarSign, 
  Building, 
  Brain, 
  Search, 
  AlertCircle, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Eye, 
  Settings, 
  BarChart3, 
  PieChart, 
  Activity, 
  Clock, 
  Shield, 
  Zap, 
  Award, 
  Star, 
  Flag, 
  Navigation, 
  Compass, 
  Map, 
  Crosshair, 
  Layers, 
  Network, 
  Database, 
  FileText, 
  Presentation, 
  PlayCircle, 
  PauseCircle, 
  Calendar, 
  Phone, 
  Video, 
  Mail, 
  BookOpen, 
  Bookmark, 
  Tag, 
  Hash, 
  AtSign, 
  Link, 
  ExternalLink, 
  Download, 
  Upload, 
  RefreshCw, 
  Plus, 
  Minus, 
  Filter, 
  Sort, 
  Grid, 
  List, 
  Heart, 
  Globe, 
  Briefcase, 
  UserCheck, 
  UserX, 
  CircleDot, 
  Square, 
  Circle, 
  Triangle, 
  Hexagon,
  Diamond,
  Workflow,
  GitBranch,
  Repeat,
  RotateCcw
} from 'lucide-react';

interface StrategicDiscoverySalesCenterProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface SPINQuestion {
  id: string;
  type: 'situation' | 'problem' | 'implication' | 'need-payoff';
  persona: 'ceo' | 'cfo' | 'coo' | 'people_ops';
  category: string;
  question: string;
  purpose: string;
  follow_ups: string[];
  business_impact: 'high' | 'medium' | 'low';
}

interface DiscoveryFramework {
  id: string;
  name: string;
  description: string;
  steps: string[];
  best_for: string[];
  use_cases: string[];
}

interface PresentationSlide {
  id: string;
  title: string;
  content_type: 'title' | 'context' | 'data_insight' | 'problems' | 'solutions' | 'next_steps';
  key_points: string[];
  visuals: string[];
  presenter_notes: string[];
}

export function StrategicDiscoverySalesCenter({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: StrategicDiscoverySalesCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'spin-framework' | 'persona-questions' | 'discovery-frameworks' | 'hiresmart-questions' | 'growth-phase-challenges' | 'presentation-builder' | 'conversation-planner' | 'success-tracking'>('overview');
  const [selectedPersona, setSelectedPersona] = useState<'ceo' | 'cfo' | 'coo' | 'people_ops'>('ceo');
  const [selectedFramework, setSelectedFramework] = useState<'spin' | 'golden-circle' | 'grow' | 'five-whys' | '5c-cfo' | '5c-hiring'>('spin');
  const [selectedIndustry, setSelectedIndustry] = useState<'technology' | 'professional-services' | 'healthcare' | 'manufacturing' | 'financial-services'>('technology');

  const labels = {
    en: {
      title: "Strategic Discovery & Sales Intelligence Center",
      subtitle: "Transform stakeholder conversations into strategic wins with proven discovery methodologies and SPIN selling intelligence",
      description: "Master the art of strategic discovery through persona-driven questioning frameworks, SPIN methodology, and conversation intelligence that drives measurable business outcomes",
      
      // Navigation
      overview: "Discovery Overview",
      spinFramework: "SPIN Framework",
      personaQuestions: "Persona Questions",
      discoveryFrameworks: "Discovery Frameworks",
      hiresmartQuestions: "HireSmart Questions",
      growthPhaseChallenges: "Growth-Phase Challenges",
      presentationBuilder: "Presentation Builder",
      conversationPlanner: "Conversation Planner",
      successTracking: "Success Tracking",
      
      // Actions
      buildFramework: "Build Framework",
      generateQuestions: "Generate Questions",
      createPresentation: "Create Presentation",
      planConversation: "Plan Conversation",
      trackSuccess: "Track Success",
      
      // Personas
      ceo: "CEO",
      cfo: "CFO",
      coo: "COO",
      peopleOps: "People Operations",
      
      // Frameworks
      spin: "SPIN Selling",
      goldenCircle: "Golden Circle",
      grow: "GROW Model",
      fiveWhys: "5 Whys",
      fiveCCFO: "5C CFO",
      fiveCHiring: "5C Hiring"
    },
    es: {
      title: "Centro de Descubrimiento Estratégico e Inteligencia de Ventas",
      subtitle: "Transforma conversaciones con stakeholders en victorias estratégicas con metodologías de descubrimiento probadas e inteligencia de ventas SPIN",
      description: "Domina el arte del descubrimiento estratégico a través de marcos de preguntas impulsados por personas, metodología SPIN e inteligencia conversacional que impulsa resultados empresariales medibles",
      
      // Navigation
      overview: "Vista de Descubrimiento",
      spinFramework: "Marco SPIN",
      personaQuestions: "Preguntas por Persona",
      discoveryFrameworks: "Marcos de Descubrimiento",
      hiresmartQuestions: "Preguntas HireSmart",
      growthPhaseChallenges: "Desafíos Fase de Crecimiento",
      presentationBuilder: "Constructor de Presentaciones",
      conversationPlanner: "Planificador de Conversaciones",
      successTracking: "Seguimiento de Éxito",
      
      // Actions
      buildFramework: "Construir Marco",
      generateQuestions: "Generar Preguntas",
      createPresentation: "Crear Presentación",
      planConversation: "Planificar Conversación",
      trackSuccess: "Rastrear Éxito",
      
      // Personas
      ceo: "Director Ejecutivo",
      cfo: "Director Financiero",
      coo: "Director de Operaciones",
      peopleOps: "Operaciones de Personal",
      
      // Frameworks
      spin: "Venta SPIN",
      goldenCircle: "Círculo Dorado",
      grow: "Modelo GROW",
      fiveWhys: "5 Por Qués",
      fiveCCFO: "5C CFO",
      fiveCHiring: "5C Contratación"
    }
  };

  const currentLabels = labels[language];

  // SPIN Questions Database
  const spinQuestions: SPINQuestion[] = [
    // CEO Questions
    {
      id: 'ceo-workforce-composition',
      type: 'situation',
      persona: 'ceo',
      category: 'Strategic Alignment',
      question: 'Can you describe your current workforce composition and how it aligns with your five-year growth objectives?',
      purpose: 'Understand strategic workforce planning and growth alignment',
      follow_ups: [
        'What gaps do you see between current capabilities and future needs?',
        'How are you planning to bridge these gaps?',
        'What timeline are you working with for these changes?'
      ],
      business_impact: 'high'
    },
    {
      id: 'ceo-productivity-variation',
      type: 'problem',
      persona: 'ceo',
      category: 'Operational Efficiency',
      question: 'How does variation in productivity between flexible and full-time staff affect your innovation roadmap?',
      purpose: 'Surface hidden productivity impacts on strategic initiatives',
      follow_ups: [
        'What specific innovation projects have been impacted?',
        'How do you measure productivity differences?',
        'What would ideal productivity consistency look like?'
      ],
      business_impact: 'high'
    },
    {
      id: 'ceo-competitor-loss',
      type: 'implication',
      persona: 'ceo',
      category: 'Talent Retention',
      question: 'When you lost key talent to competitors, how did that impact your strategic execution and market position?',
      purpose: 'Quantify the business cost of talent loss',
      follow_ups: [
        'What was the timeline to recover from that loss?',
        'How did it affect client relationships?',
        'What preventive measures did you implement?'
      ],
      business_impact: 'high'
    },
    {
      id: 'ceo-strategic-advantage',
      type: 'need-payoff',
      persona: 'ceo',
      category: 'Competitive Advantage',
      question: 'If you could eliminate talent-related execution risks, how would that accelerate your path to market leadership?',
      purpose: 'Create vision of strategic value from talent optimization',
      follow_ups: [
        'What market opportunities would you pursue first?',
        'How would your competitive positioning change?',
        'What would be the revenue impact?'
      ],
      business_impact: 'high'
    },

    // CFO Questions
    {
      id: 'cfo-budget-allocation',
      type: 'situation',
      persona: 'cfo',
      category: 'Financial Planning',
      question: 'What is your current budget allocation between full-time salaries and contingent labor costs?',
      purpose: 'Understand financial structure and cost optimization opportunities',
      follow_ups: [
        'How has this allocation changed over the past 2 years?',
        'What factors drive changes in this allocation?',
        'How do you forecast these costs?'
      ],
      business_impact: 'high'
    },
    {
      id: 'cfo-cost-visibility',
      type: 'problem',
      persona: 'cfo',
      category: 'Cost Management',
      question: 'What challenges do you face in getting real-time visibility into true cost-per-employee across departments?',
      purpose: 'Identify cost management and visibility gaps',
      follow_ups: [
        'How does this affect your budgeting accuracy?',
        'What manual processes are you using now?',
        'How often do cost estimates prove inaccurate?'
      ],
      business_impact: 'high'
    },
    {
      id: 'cfo-estimation-variance',
      type: 'implication',
      persona: 'cfo',
      category: 'Financial Risk',
      question: 'How does estimation variance in cost-per-employee affect your ability to price contracts competitively and maintain margins?',
      purpose: 'Quantify the financial impact of cost estimation errors',
      follow_ups: [
        'How many deals have been affected by cost miscalculations?',
        'What margin erosion have you experienced?',
        'How does this impact investor confidence?'
      ],
      business_impact: 'high'
    },
    {
      id: 'cfo-precision-value',
      type: 'need-payoff',
      persona: 'cfo',
      category: 'Competitive Pricing',
      question: 'If your cost-per-employee had less than 1% variance, how much more competitive could you be in pricing and how would that impact win rates?',
      purpose: 'Create vision of value from cost precision',
      follow_ups: [
        'What pricing strategies would you pursue?',
        'How would this affect your market position?',
        'What would be the revenue upside?'
      ],
      business_impact: 'high'
    },

    // COO Questions
    {
      id: 'coo-client-satisfaction',
      type: 'situation',
      persona: 'coo',
      category: 'Client Management',
      question: 'How do you currently track client satisfaction metrics and feedback loops?',
      purpose: 'Understand current client satisfaction measurement systems',
      follow_ups: [
        'What metrics do you track most closely?',
        'How quickly can you respond to client issues?',
        'What systems support your feedback collection?'
      ],
      business_impact: 'high'
    },
    {
      id: 'coo-process-bottlenecks',
      type: 'problem',
      persona: 'coo',
      category: 'Process Efficiency',
      question: 'Where do you see bottlenecks or redundant handoffs still slowing teams down despite recent process improvements?',
      purpose: 'Identify operational efficiency gaps',
      follow_ups: [
        'What specific processes are most affected?',
        'How do these delays impact client deliverables?',
        'What solutions have you tried?'
      ],
      business_impact: 'medium'
    },
    {
      id: 'coo-churn-impact',
      type: 'implication',
      persona: 'coo',
      category: 'Revenue Impact',
      question: 'How have missed retention targets impacted your revenue growth and referral pipeline development?',
      purpose: 'Quantify operational impact on business growth',
      follow_ups: [
        'What percentage of revenue is at risk?',
        'How has this affected team morale?',
        'What client recovery efforts have you undertaken?'
      ],
      business_impact: 'high'
    },
    {
      id: 'coo-churn-elimination',
      type: 'need-payoff',
      persona: 'coo',
      category: 'Growth Acceleration',
      question: 'If you could cut churn by 20%, how would that free up capacity for new business development and market expansion?',
      purpose: 'Create vision of growth through retention improvement',
      follow_ups: [
        'What new markets would you target?',
        'How would this change your growth strategy?',
        'What would be the compound effect over 3 years?'
      ],
      business_impact: 'high'
    },

    // People Ops Questions
    {
      id: 'ops-staffing-lifecycle',
      type: 'situation',
      persona: 'people_ops',
      category: 'Process Management',
      question: 'Can you walk me through your end-to-end staffing lifecycle for both permanent and flexible hires?',
      purpose: 'Map current processes and identify optimization opportunities',
      follow_ups: [
        'Where do you see the biggest bottlenecks?',
        'What tools and systems support each stage?',
        'How do you measure process efficiency?'
      ],
      business_impact: 'medium'
    },
    {
      id: 'ops-performance-gaps',
      type: 'problem',
      persona: 'people_ops',
      category: 'Performance Management',
      question: 'Where do you see performance gaps between your contract and permanent staff, and how are you addressing them day-to-day?',
      purpose: 'Identify operational challenges and improvement opportunities',
      follow_ups: [
        'What specific interventions have you tried?',
        'How do you measure intervention success?',
        'What resources do you need but do not have?'
      ],
      business_impact: 'medium'
    },
    {
      id: 'ops-manual-processes',
      type: 'implication',
      persona: 'people_ops',
      category: 'Operational Risk',
      question: 'How do manual processes in your people operations create risks for compliance, consistency, and scalability?',
      purpose: 'Surface operational risks and scaling challenges',
      follow_ups: [
        'What compliance exposures worry you most?',
        'How does inconsistency affect employee experience?',
        'At what point will manual processes break?'
      ],
      business_impact: 'medium'
    },
    {
      id: 'ops-automation-value',
      type: 'need-payoff',
      persona: 'people_ops',
      category: 'Operational Excellence',
      question: 'If you had full automation and standardization across your people processes, how much more strategic work could you focus on?',
      purpose: 'Create vision of strategic value through operational excellence',
      follow_ups: [
        'What strategic initiatives would you prioritize?',
        'How would this affect your team capability?',
        'What business outcomes would you drive?'
      ],
      business_impact: 'high'
    }
  ];

  // Discovery Frameworks
  const discoveryFrameworks: DiscoveryFramework[] = [
    {
      id: 'spin-selling',
      name: 'SPIN Selling Model',
      description: 'Four-step model to craft questions that move from factual context to diagnosing pain to revealing impact to uncovering desired payoffs',
      steps: [
        'Situation Questions: Gather basic facts and surface how things operate now',
        'Problem Questions: Expose frustrations, blockers, or gaps',
        'Implication Questions: Show the business or people costs of those problems',
        'Need-Payoff Questions: Surface the value or ROI of solving the problem'
      ],
      best_for: ['Sales conversations', 'Stakeholder interviews', 'Pain point discovery'],
      use_cases: ['Initial prospect meetings', 'ROI justification', 'Solution positioning']
    },
    {
      id: 'golden-circle',
      name: 'Golden Circle (Why-How-What)',
      description: 'Start with purpose and work outward to uncover core motivations and driving beliefs',
      steps: [
        'Why: Uncover core purpose and driving beliefs',
        'How: Explore processes and methods they use',
        'What: Identify tangible offerings and activities'
      ],
      best_for: ['Vision alignment', 'Purpose discovery', 'Mission statements'],
      use_cases: ['Strategic planning sessions', 'Culture assessment', 'Leadership alignment']
    },
    {
      id: 'grow-model',
      name: 'GROW Coaching Model',
      description: 'Structured approach for goal definition and action planning',
      steps: [
        'Goal: Define the outcome they want',
        'Reality: Map current state',
        'Options: Brainstorm solutions',
        'Way Forward: Commit to specific actions'
      ],
      best_for: ['Coaching sessions', 'Action planning', 'Problem solving'],
      use_cases: ['Implementation planning', 'Change management', 'Performance improvement']
    },
    {
      id: 'five-whys',
      name: '5 Whys Analysis',
      description: 'Root cause analysis through repetitive questioning',
      steps: [
        'Ask "Why?" to the stated problem',
        'Ask "Why?" to each subsequent answer',
        'Continue until root cause is revealed',
        'Validate root cause with stakeholder',
        'Develop solutions for root cause'
      ],
      best_for: ['Root cause analysis', 'Problem investigation', 'Deep diagnosis'],
      use_cases: ['Troubleshooting', 'Process improvement', 'Failure analysis']
    },
    {
      id: '5c-cfo',
      name: '5C CFO Framework',
      description: 'Comprehensive financial questioning framework for CFO engagement',
      steps: [
        'Cash: Current cash conversion cycle and volatility',
        'Cost: Expense line unpredictability and allocation',
        'Controls: Internal controls and manual process risks',
        'Capital: Investment decisions and ROI hurdles',
        'Compliance: Regulatory requirements and audit considerations'
      ],
      best_for: ['CFO meetings', 'Financial discovery', 'Budget discussions'],
      use_cases: ['Financial planning', 'Cost optimization', 'Risk assessment']
    },
    {
      id: '5c-hiring',
      name: '5C Hiring Framework',
      description: 'Systematic approach to high-volume hiring challenges',
      steps: [
        'Compliance: Legal and audit-proof scaling processes',
        'Capacity: Scalability and geographic expansion',
        'Compensation: Cost management and benchmarking',
        'Culture vs Qualification: Fit balance optimization',
        'Candidate Evaluation: Standardized screening processes'
      ],
      best_for: ['Hiring discussions', 'Talent strategy', 'Scaling conversations'],
      use_cases: ['Growth planning', 'Talent acquisition', 'Process optimization']
    }
  ];

  // HireSmart Questions
  const hireSmartQuestions = [
    {
      id: 'best-thought',
      category: 'Vision Alignment',
      question: 'What would it mean to you if your best talent thought about your company the same way you do?',
      purpose: 'Uncover vision alignment challenges and aspirations',
      follow_ups: [
        'How do you currently communicate your vision?',
        'What gaps exist in vision understanding?',
        'What would perfect alignment look like?'
      ]
    },
    {
      id: 'scale-innovation',
      category: 'Strategic Execution',
      question: 'Walk me through how you identify, innovate, and scale at your business?',
      purpose: 'Understand strategic execution capabilities and constraints',
      follow_ups: [
        'Where do you see execution bottlenecks?',
        'What innovations have been most successful?',
        'How do you measure scaling success?'
      ]
    },
    {
      id: 'key-talent-loss',
      category: 'Talent Risk',
      question: 'Have you ever lost really good or key talent to a competitor? What did that impact?',
      purpose: 'Quantify talent loss impact and prevention strategies',
      follow_ups: [
        'How long did it take to recover?',
        'What client/project impacts occurred?',
        'What prevention measures did you implement?'
      ]
    },
    {
      id: 'people-philosophy',
      category: 'HR Strategy',
      question: 'What is your people strategy and philosophy?',
      purpose: 'Understand current HR approach and strategic thinking',
      follow_ups: [
        'How does this philosophy drive decisions?',
        'What results have you seen?',
        'Where do you want to evolve this?'
      ]
    },
    {
      id: 'benefits-strategy',
      category: 'Compensation Strategy',
      question: 'What is the strategy behind the benefits that your company offers? What are you trying to accomplish?',
      purpose: 'Uncover total rewards strategy and effectiveness',
      follow_ups: [
        'How do you measure benefits effectiveness?',
        'What feedback do you get from employees?',
        'How do you benchmark against competitors?'
      ]
    },
    {
      id: 'owner-perspective',
      category: 'Leadership View',
      question: 'Many owners have their view of what hitting business goals means. How do you view it as an owner?',
      purpose: 'Understand owner perspective on success and priorities',
      follow_ups: [
        'What metrics matter most to you?',
        'How has this perspective evolved?',
        'What would change your priorities?'
      ]
    },
    {
      id: 'biggest-challenges',
      category: 'Pain Points',
      question: 'What are the biggest challenges you face as an executive and business owner?',
      purpose: 'Surface top-level pain points and priorities',
      follow_ups: [
        'Which challenge keeps you up at night?',
        'What have you tried to address these?',
        'What would solving these enable?'
      ]
    },
    {
      id: 'growth-strategy',
      category: 'Growth Planning',
      question: 'What are your growth plans and strategy for your business?',
      purpose: 'Understand growth ambitions and requirements',
      follow_ups: [
        'What capabilities do you need to build?',
        'What could accelerate this growth?',
        'What risks could derail the plan?'
      ]
    },
    {
      id: 'long-term-strategy',
      category: 'Strategic Vision',
      question: 'What is your long-term strategy for business growth - scaling, maintaining leadership, ensuring consistency?',
      purpose: 'Uncover long-term strategic intentions and priorities',
      follow_ups: [
        'What does success look like in 5 years?',
        'What must change to get there?',
        'What could prevent you from achieving this?'
      ]
    }
  ];

  // Presentation Slides Structure
  const presentationSlides: PresentationSlide[] = [
    {
      id: 'title-slide',
      title: 'Strategic HR: Solving Business Problems with People Solutions',
      content_type: 'title',
      key_points: [
        'Clean, cinematic title with brand-aligned visuals',
        'Optional subtitle: "A Discovery Framework for Growth, Risk, and Execution"',
        'Include presenter name, role, and date'
      ],
      visuals: ['Brand logo', 'Professional background', 'Title typography'],
      presenter_notes: [
        'Set professional tone from the start',
        'Establish credibility and purpose',
        'Create anticipation for strategic conversation'
      ]
    },
    {
      id: 'meeting-purpose',
      title: 'Meeting Purpose - Why We\'re Here',
      content_type: 'context',
      key_points: [
        'Explore how Strategic HR can drive business outcomes',
        'Align on business goals and strategic priorities',
        'Surface operational and people-related challenges',
        'Identify where Strategic HR can create measurable impact'
      ],
      visuals: ['Purpose framework', 'Outcome icons', 'Strategic alignment graphic'],
      presenter_notes: [
        'Frame as strategic conversation, not pitch',
        'Set expectation for collaborative discovery',
        'Emphasize business focus over HR tactics'
      ]
    },
    {
      id: 'business-context',
      title: 'Business Context Map - Where You Are, What You\'re Facing',
      content_type: 'context',
      key_points: [
        'Current business phase and growth stage',
        'Key strategic priorities and initiatives',
        'Major challenges and opportunities',
        'Resource constraints and capabilities'
      ],
      visuals: ['Business lifecycle chart', 'Priority matrix', 'Challenge/opportunity grid'],
      presenter_notes: [
        'Anchor understanding of their current state',
        'Identify phase-specific challenges',
        'Set context for strategic solutions'
      ]
    },
    {
      id: 'data-insight-flow',
      title: 'Data → Insight → Question Flow',
      content_type: 'data_insight',
      key_points: [
        'Data: "You added 58 headcount last quarter"',
        'Insight: "Hyper-growth often strains onboarding and engagement"',
        'Question: "How are you enabling new hires to ramp quickly and connect to mission?"'
      ],
      visuals: ['Funnel graphic', 'Data flow arrows', 'Question framework'],
      presenter_notes: [
        'Demonstrate analytical approach',
        'Show how data drives strategic questions',
        'Build credibility through insight'
      ]
    },
    {
      id: 'problems-identified',
      title: 'Business Problems Identified - What We Heard',
      content_type: 'problems',
      key_points: [
        'Retention challenges in key departments',
        'Manager capability and clarity gaps',
        'Inconsistent onboarding and experience',
        'Process scalability limitations'
      ],
      visuals: ['Problem categorization', 'Impact assessment', 'Priority ranking'],
      presenter_notes: [
        'Summarize discovered pain points',
        'Categorize by theme and impact',
        'Prepare for solution mapping'
      ]
    },
    {
      id: 'strategic-solutions',
      title: 'Strategic HR Solutions - How People Strategy Solves Business Problems',
      content_type: 'solutions',
      key_points: [
        'Talent pipeline → Revenue growth acceleration',
        'Manager development → Operational excellence',
        'Culture alignment → Innovation capability',
        'Process optimization → Scalability foundation'
      ],
      visuals: ['Solution mapping', 'Business impact flow', 'ROI projections'],
      presenter_notes: [
        'Connect solutions to business outcomes',
        'Emphasize strategic value over tactical fixes',
        'Quantify potential impact where possible'
      ]
    },
    {
      id: 'next-steps',
      title: 'Next Steps - From Discovery to Action',
      content_type: 'next_steps',
      key_points: [
        'Map surfaced issues into Strategic HR framework',
        'Develop pilot initiative or diagnostic sprint',
        'Create implementation roadmap with success metrics',
        'Establish ongoing partnership structure'
      ],
      visuals: ['Timeline graphic', 'Process flow', 'Partnership model'],
      presenter_notes: [
        'Create clear path forward',
        'Establish momentum and commitment',
        'Set expectations for next engagement'
      ]
    }
  ];

  const getPersonaIcon = (persona: string) => {
    switch (persona) {
      case 'ceo': return <Building className="w-5 h-5" />;
      case 'cfo': return <DollarSign className="w-5 h-5" />;
      case 'coo': return <Settings className="w-5 h-5" />;
      case 'people_ops': return <Users className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  const getSPINTypeColor = (type: string) => {
    switch (type) {
      case 'situation': return 'bg-blue-900/20 text-blue-400 border-blue-700';
      case 'problem': return 'bg-yellow-900/20 text-yellow-400 border-yellow-700';
      case 'implication': return 'bg-red-900/20 text-red-400 border-red-700';
      case 'need-payoff': return 'bg-green-900/20 text-green-400 border-green-700';
      default: return 'bg-gray-900/20 text-gray-400 border-gray-700';
    }
  };

  const getSPINTypeIcon = (type: string) => {
    switch (type) {
      case 'situation': return <Search className="w-4 h-4" />;
      case 'problem': return <AlertCircle className="w-4 h-4" />;
      case 'implication': return <TrendingUp className="w-4 h-4" />;
      case 'need-payoff': return <Target className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getFrameworkIcon = (frameworkId: string) => {
    switch (frameworkId) {
      case 'spin-selling': return <Target className="w-6 h-6" />;
      case 'golden-circle': return <Circle className="w-6 h-6" />;
      case 'grow-model': return <TrendingUp className="w-6 h-6" />;
      case 'five-whys': return <Search className="w-6 h-6" />;
      case '5c-cfo': return <DollarSign className="w-6 h-6" />;
      case '5c-hiring': return <Users className="w-6 h-6" />;
      default: return <MessageSquare className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-purple-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Context Selectors */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Target Persona</label>
            <select 
              value={selectedPersona}
              onChange={(e) => setSelectedPersona(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="ceo">{currentLabels.ceo}</option>
              <option value="cfo">{currentLabels.cfo}</option>
              <option value="coo">{currentLabels.coo}</option>
              <option value="people_ops">{currentLabels.peopleOps}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Discovery Framework</label>
            <select 
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="spin">{currentLabels.spin}</option>
              <option value="golden-circle">{currentLabels.goldenCircle}</option>
              <option value="grow">{currentLabels.grow}</option>
              <option value="five-whys">{currentLabels.fiveWhys}</option>
              <option value="5c-cfo">{currentLabels.fiveCCFO}</option>
              <option value="5c-hiring">{currentLabels.fiveCHiring}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Industry Context</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="technology">Technology</option>
              <option value="professional-services">Professional Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="financial-services">Financial Services</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              {currentLabels.buildFramework}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-9 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="spin-framework">{currentLabels.spinFramework}</TabsTrigger>
            <TabsTrigger value="persona-questions">{currentLabels.personaQuestions}</TabsTrigger>
            <TabsTrigger value="discovery-frameworks">{currentLabels.discoveryFrameworks}</TabsTrigger>
            <TabsTrigger value="hiresmart-questions">{currentLabels.hiresmartQuestions}</TabsTrigger>
            <TabsTrigger value="growth-phase-challenges">{currentLabels.growthPhaseChallenges}</TabsTrigger>
            <TabsTrigger value="presentation-builder">{currentLabels.presentationBuilder}</TabsTrigger>
            <TabsTrigger value="conversation-planner">{currentLabels.conversationPlanner}</TabsTrigger>
            <TabsTrigger value="success-tracking">{currentLabels.successTracking}</TabsTrigger>
          </TabsList>

          {/* Discovery Overview */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Discovery Intelligence Dashboard</h3>
              
              <div className="grid lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-1">150+</div>
                  <div className="text-sm text-gray-400">SPIN Questions</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">6</div>
                  <div className="text-sm text-gray-400">Discovery Frameworks</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-1">85%</div>
                  <div className="text-sm text-gray-400">Conversion Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">40%</div>
                  <div className="text-sm text-gray-400">Faster Discovery</div>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  <h4 className="font-bold text-white">Strategic Discovery Advantage</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Transform stakeholder conversations into strategic wins with proven SPIN methodology, 
                  persona-driven questioning, and conversation intelligence that drives measurable business outcomes 
                  and accelerates sales cycles.
                </p>
              </div>
            </Card>

            {/* SPIN Framework Overview */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">SPIN Selling Framework Mastery</h3>
              
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">Situation</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Gather basic facts and surface how things operate now
                  </p>
                  <div className="text-lg font-bold text-blue-400 mb-1">35</div>
                  <div className="text-xs text-gray-400">Questions Available</div>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-bold text-white">Problem</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Expose frustrations, blockers, or gaps
                  </p>
                  <div className="text-lg font-bold text-yellow-400 mb-1">42</div>
                  <div className="text-xs text-gray-400">Questions Available</div>
                </div>
                
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-6 h-6 text-red-400" />
                    <h4 className="font-bold text-white">Implication</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Show the business or people costs of problems
                  </p>
                  <div className="text-lg font-bold text-red-400 mb-1">38</div>
                  <div className="text-xs text-gray-400">Questions Available</div>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">Need-Payoff</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Surface the value or ROI of solving the problem
                  </p>
                  <div className="text-lg font-bold text-green-400 mb-1">35</div>
                  <div className="text-xs text-gray-400">Questions Available</div>
                </div>
              </div>
            </Card>

            {/* Persona Intelligence */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Persona-Driven Discovery Intelligence</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Stakeholder Priorities</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg">
                      <Building className="w-8 h-8 text-blue-400" />
                      <div>
                        <h5 className="font-medium text-white">CEO Focus Areas</h5>
                        <p className="text-sm text-gray-400">Strategic growth, innovation, competitive advantage</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg">
                      <DollarSign className="w-8 h-8 text-green-400" />
                      <div>
                        <h5 className="font-medium text-white">CFO Focus Areas</h5>
                        <p className="text-sm text-gray-400">Cost optimization, ROI, forecasting, risk</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg">
                      <Settings className="w-8 h-8 text-purple-400" />
                      <div>
                        <h5 className="font-medium text-white">COO Focus Areas</h5>
                        <p className="text-sm text-gray-400">Operational excellence, scalability, efficiency</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg">
                      <Users className="w-8 h-8 text-yellow-400" />
                      <div>
                        <h5 className="font-medium text-white">People Ops Focus</h5>
                        <p className="text-sm text-gray-400">Process optimization, employee experience, compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Discovery Success Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Question Relevance</span>
                        <span className="text-green-400 font-bold">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Stakeholder rated question quality</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Discovery Efficiency</span>
                        <span className="text-blue-400 font-bold">40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Faster needs assessment time</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Conversion Impact</span>
                        <span className="text-purple-400 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Discovery to proposal conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('spin-framework')}
                >
                  <Target className="w-4 h-4" />
                  Master SPIN
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('persona-questions')}
                >
                  <Users className="w-4 h-4" />
                  Persona Questions
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('presentation-builder')}
                >
                  <Presentation className="w-4 h-4" />
                  Build Presentation
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('conversation-planner')}
                >
                  <Calendar className="w-4 h-4" />
                  Plan Discovery
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  onClick={() => setActiveTab('growth-phase-challenges')}
                >
                  <TrendingUp className="w-4 h-4" />
                  Growth Challenges
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* SPIN Framework */}
          <TabsContent value="spin-framework" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">SPIN Selling Mastery Framework</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Generate SPIN Sequence
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">SPIN Model Deep Dive</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">Situation Questions</h4>
                    <p className="text-gray-400 mb-4">
                      Gather basic facts and surface how things operate now. These questions establish context 
                      and understanding of the current state.
                    </p>
                    
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-2">Example Questions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• "How do you currently track interruptions to your vision?"</li>
                          <li>• "What's your current process for minimizing disruptions?"</li>
                          <li>• "How do you measure employee satisfaction today?"</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Best Practices</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Start with broad context</li>
                          <li>• Focus on facts, not opinions</li>
                          <li>• Build understanding systematically</li>
                          <li>• Avoid leading questions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">Problem Questions</h4>
                    <p className="text-gray-400 mb-4">
                      Expose frustrations, blockers, or gaps. These questions help identify pain points 
                      and challenges that need addressing.
                    </p>
                    
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                        <h5 className="font-medium text-yellow-400 mb-2">Example Questions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• "Which types of interruptions cost you the most time?"</li>
                          <li>• "What non-core activities pull you away from revenue work?"</li>
                          <li>• "What keeps you up at night about your people strategy?"</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Key Principles</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Surface unspoken frustrations</li>
                          <li>• Identify capability gaps</li>
                          <li>• Explore process bottlenecks</li>
                          <li>• Uncover resource constraints</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    I
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">Implication Questions</h4>
                    <p className="text-gray-400 mb-4">
                      Show the business or people costs of those problems. These questions quantify impact 
                      and create urgency for solutions.
                    </p>
                    
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                        <h5 className="font-medium text-red-400 mb-2">Example Questions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• "What has been the revenue impact of those delays?"</li>
                          <li>• "How does frequent distraction affect client retention?"</li>
                          <li>• "What's the cost if top talent leaves due to disengagement?"</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Impact Areas</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Financial consequences</li>
                          <li>• Operational disruption</li>
                          <li>• Strategic risk exposure</li>
                          <li>• Competitive disadvantage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    N
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">Need-Payoff Questions</h4>
                    <p className="text-gray-400 mb-4">
                      Surface the value or ROI of solving the problem. These questions help stakeholders 
                      articulate the benefits of change.
                    </p>
                    
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-2">Example Questions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• "What could you achieve if interruptions dropped by 50%?"</li>
                          <li>• "How would stronger risk controls boost retention?"</li>
                          <li>• "If teams felt more supported, how would that drive growth?"</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Value Dimensions</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Revenue acceleration</li>
                          <li>• Cost optimization</li>
                          <li>• Risk mitigation</li>
                          <li>• Strategic capability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* SPIN Application Example */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">SPIN Application Example: CEO Vision Alignment</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-900/20 text-blue-400 border-blue-700 text-xs">
                    SITUATION
                  </Badge>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">
                      "Can you walk me through your current process for minimizing interruptions to your long-term vision?"
                    </p>
                    <p className="text-sm text-gray-400">
                      Establishes baseline understanding of current vision protection mechanisms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700 text-xs">
                    PROBLEM
                  </Badge>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">
                      "What non-core activities are pulling you away from revenue-generating work?"
                    </p>
                    <p className="text-sm text-gray-400">
                      Surfaces specific pain points and resource allocation issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="bg-red-900/20 text-red-400 border-red-700 text-xs">
                    IMPLICATION
                  </Badge>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">
                      "How does frequent distraction affect your sales growth or client retention metrics?"
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantifies business impact and creates urgency for solution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="bg-green-900/20 text-green-400 border-green-700 text-xs">
                    NEED-PAYOFF
                  </Badge>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">
                      "If we could streamline those tasks, how much more could your team focus on strategic initiatives?"
                    </p>
                    <p className="text-sm text-gray-400">
                      Helps stakeholder articulate value of solving the problem
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Persona Questions */}
          <TabsContent value="persona-questions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Persona-Driven Question Bank</h2>
              
              <div className="flex items-center gap-4">
                <select 
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  <option value="ceo">{currentLabels.ceo}</option>
                  <option value="cfo">{currentLabels.cfo}</option>
                  <option value="coo">{currentLabels.coo}</option>
                  <option value="people_ops">{currentLabels.peopleOps}</option>
                </select>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Export Question Bank
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                {selectedPersona === 'ceo' ? 'CEO Strategic Questions' :
                 selectedPersona === 'cfo' ? 'CFO Financial Questions' :
                 selectedPersona === 'coo' ? 'COO Operational Questions' :
                 'People Operations Questions'}
              </h3>
              
              <div className="space-y-6">
                {spinQuestions
                  .filter(q => q.persona === selectedPersona)
                  .map((question) => (
                    <div key={question.id} className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          {getPersonaIcon(question.persona)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`text-xs ${getSPINTypeColor(question.type)}`}>
                              {question.type.toUpperCase()}
                            </Badge>
                            <Badge className="text-xs bg-gray-700 text-gray-300">
                              {question.category}
                            </Badge>
                            <Badge className={`text-xs ${
                              question.business_impact === 'high' ? 'bg-red-900/20 text-red-400 border-red-700' :
                              question.business_impact === 'medium' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                              'bg-green-900/20 text-green-400 border-green-700'
                            }`}>
                              {question.business_impact.toUpperCase()} IMPACT
                            </Badge>
                          </div>
                          <h4 className="font-bold text-white mb-2">{question.question}</h4>
                          <p className="text-sm text-gray-400 mb-4">{question.purpose}</p>
                          
                          {question.follow_ups.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-gray-300 mb-2">Follow-up Questions:</h5>
                              <ul className="space-y-1">
                                {question.follow_ups.map((followUp, index) => (
                                  <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-gray-600">•</span>
                                    {followUp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            {/* Persona Context Guide */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                {selectedPersona === 'ceo' ? 'CEO' :
                 selectedPersona === 'cfo' ? 'CFO' :
                 selectedPersona === 'coo' ? 'COO' :
                 'People Operations'} Context & Priorities
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Primary Focus Areas</h4>
                  <div className="space-y-2">
                    {selectedPersona === 'ceo' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-blue-400" />
                          Strategic growth alignment and execution
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-green-400" />
                          Innovation roadmap and competitive advantage
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-purple-400" />
                          Market expansion and capability building
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-yellow-400" />
                          Organizational agility and scalability
                        </div>
                      </>
                    )}
                    
                    {selectedPersona === 'cfo' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-green-400" />
                          Budget allocation and cost optimization
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-blue-400" />
                          ROI measurement and financial planning
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-red-400" />
                          Risk mitigation and compliance
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-purple-400" />
                          Forecasting accuracy and capital planning
                        </div>
                      </>
                    )}
                    
                    {selectedPersona === 'coo' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-blue-400" />
                          Client satisfaction and retention
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-green-400" />
                          Process efficiency and optimization
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-purple-400" />
                          Operational scalability and resilience
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-yellow-400" />
                          Resource optimization and throughput
                        </div>
                      </>
                    )}
                    
                    {selectedPersona === 'people_ops' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-blue-400" />
                          Process efficiency and standardization
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-green-400" />
                          Employee experience optimization
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-red-400" />
                          Compliance and risk management
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CircleDot className="w-4 h-4 text-purple-400" />
                          Technology integration and automation
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Question Strategy</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Opening Approach</h5>
                      <p className="text-sm text-gray-400">
                        {selectedPersona === 'ceo' ? 'Start with strategic vision and growth objectives' :
                         selectedPersona === 'cfo' ? 'Begin with financial planning and cost structure' :
                         selectedPersona === 'coo' ? 'Focus on operational challenges and client impact' :
                         'Lead with process efficiency and employee experience'}
                      </p>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Pain Point Discovery</h5>
                      <p className="text-sm text-gray-400">
                        {selectedPersona === 'ceo' ? 'Explore execution barriers and competitive threats' :
                         selectedPersona === 'cfo' ? 'Investigate cost visibility and forecasting challenges' :
                         selectedPersona === 'coo' ? 'Uncover process bottlenecks and resource constraints' :
                         'Identify manual processes and compliance risks'}
                      </p>
                    </div>
                    
                    <div className="p-3 bg-gray-900 rounded-lg">
                      <h5 className="font-medium text-white mb-1">Value Articulation</h5>
                      <p className="text-sm text-gray-400">
                        {selectedPersona === 'ceo' ? 'Connect to revenue growth and market advantage' :
                         selectedPersona === 'cfo' ? 'Quantify cost savings and ROI opportunities' :
                         selectedPersona === 'coo' ? 'Emphasize efficiency gains and client satisfaction' :
                         'Focus on automation benefits and strategic capability'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Discovery Frameworks */}
          <TabsContent value="discovery-frameworks" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Discovery Frameworks & Methodologies</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Compare Frameworks
              </Button>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {discoveryFrameworks.map((framework) => (
                <Card key={framework.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        {getFrameworkIcon(framework.id)}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{framework.name}</h3>
                        <p className="text-sm text-gray-400">{framework.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Framework Steps</h4>
                      <ul className="space-y-2">
                        {framework.steps.map((step, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Best For</h4>
                      <ul className="space-y-1">
                        {framework.best_for.map((item, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Use Cases</h4>
                      <ul className="space-y-1">
                        {framework.use_cases.map((useCase, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Framework ID: {framework.id}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Use Framework
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Framework Comparison */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Framework Comparison Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Framework</th>
                      <th className="text-left py-3 text-gray-400">Best For</th>
                      <th className="text-left py-3 text-gray-400">Key Focus</th>
                      <th className="text-left py-3 text-gray-400">Ideal Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">SPIN Selling</td>
                      <td className="py-3 text-gray-300">Sales & stakeholder interviews</td>
                      <td className="py-3 text-gray-300">Situation → Problem → Impact → Value</td>
                      <td className="py-3 text-gray-300">ROI-driven conversations</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Golden Circle</td>
                      <td className="py-3 text-gray-300">Vision & purpose alignment</td>
                      <td className="py-3 text-gray-300">Why → How → What</td>
                      <td className="py-3 text-gray-300">Strategic planning sessions</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">GROW Model</td>
                      <td className="py-3 text-gray-300">Coaching & planning</td>
                      <td className="py-3 text-gray-300">Goal → Reality → Options → Actions</td>
                      <td className="py-3 text-gray-300">Implementation planning</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">5 Whys</td>
                      <td className="py-3 text-gray-300">Root-cause analysis</td>
                      <td className="py-3 text-gray-300">Repetitive "Why?" queries</td>
                      <td className="py-3 text-gray-300">Problem investigation</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">5C CFO</td>
                      <td className="py-3 text-gray-300">Financial discovery</td>
                      <td className="py-3 text-gray-300">Cash → Cost → Controls → Capital → Compliance</td>
                      <td className="py-3 text-gray-300">CFO engagement</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">5C Hiring</td>
                      <td className="py-3 text-gray-300">Talent strategy</td>
                      <td className="py-3 text-gray-300">Compliance → Capacity → Compensation → Culture → Candidate</td>
                      <td className="py-3 text-gray-300">High-volume hiring</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* HireSmart Questions */}
          <TabsContent value="hiresmart-questions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">HireSmart Discovery Questions</h2>
              
              <Button className="bg-orange-600 hover:bg-orange-700">
                Generate HireSmart Sequence
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic HireSmart Question Bank</h3>
              
              <div className="space-y-6">
                {hireSmartQuestions.map((question, index) => (
                  <div key={question.id} className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="text-xs bg-orange-900/20 text-orange-400 border-orange-700">
                            {question.category}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-white mb-2">{question.question}</h4>
                        <p className="text-sm text-gray-400 mb-4">{question.purpose}</p>
                        
                        {question.follow_ups.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-300 mb-2">Follow-up Questions:</h5>
                            <ul className="space-y-1">
                              {question.follow_ups.map((followUp, followUpIndex) => (
                                <li key={followUpIndex} className="text-sm text-gray-400 flex items-start gap-2">
                                  <span className="text-gray-600">•</span>
                                  {followUp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* HireSmart Categories */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">HireSmart Question Categories</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Strategic Vision</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Vision alignment assessment</li>
                    <li>• Strategic execution capabilities</li>
                    <li>• Long-term planning approach</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <Users className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">People Strategy</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• HR philosophy and approach</li>
                    <li>• Talent retention challenges</li>
                    <li>• Benefits strategy effectiveness</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Growth & Leadership</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Growth strategy and planning</li>
                    <li>• Executive challenges</li>
                    <li>• Owner perspective on success</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Growth-Phase Challenges */}
          <TabsContent value="growth-phase-challenges" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Growth-Phase Challenges & Strategic Alignment</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Challenge Framework
              </Button>
            </div>

            {/* Framework Overview */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Strategic Framework Overview</h3>
              
              <p className="text-gray-300 mb-6">
                As companies enter a rapid expansion phase, they face a complex balancing act between scaling quickly 
                and maintaining organizational resilience. By addressing compliance, talent, leadership, and operational 
                efficiency in tandem, growth-phase businesses can accelerate their trajectory while safeguarding against disruptions.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-4 text-gray-400 font-medium">Strategic Pillar</th>
                      <th className="text-left py-4 px-4 text-gray-400 font-medium">Core Challenges</th>
                      <th className="text-left py-4 px-4 text-gray-400 font-medium">Strategic Implications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-red-400" />
                          <div>
                            <div className="text-white font-medium">Compliance & Risk Management</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Regulatory gaps during fast hiring; multi-state legal exposure
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Embedding scalable processes prevents liabilities and audit failures
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-blue-400" />
                          <div>
                            <div className="text-white font-medium">Workforce Scalability & Talent Acquisition</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Geographic hiring limitations; inconsistent hiring standards
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Standardized evaluations and pay frameworks unlock broader candidate pools
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Building className="w-5 h-5 text-purple-400" />
                          <div>
                            <div className="text-white font-medium">Leadership Development & Organizational Design</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Undefined structures; weak mentorship and accountability models
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Clear role mapping and leadership programs drive decision-making and cultural cohesion
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Settings className="w-5 h-5 text-green-400" />
                          <div>
                            <div className="text-white font-medium">Operational Efficiency & Agility</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Fragmented processes; communication breakdowns across locations
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        Lean operations and robust collaboration tools boost productivity and reduce waste
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Comprehensive Challenge Framework */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Comprehensive Challenge Discovery Framework</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-32">Challenge</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-40">Data & Impact</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-32">Insight</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-40">Discovery Question</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-20">CEO</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-20">CFO</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-20">COO</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-medium w-20">CHRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2">
                        <div className="text-white font-medium mb-1">High Turnover & Employee Retention</div>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Disrupted operations, high recruitment/training costs, lost productivity, morale dips<br/>
                        <span className="text-yellow-400">• "Great Resignation" driving record quit rates</span>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Reactive fixes aren't enough—employees stay when they sense growth, purpose, and a culture that listens
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What strategies can be implemented to build a talent-first culture that proactively identifies and addresses employee retention challenges?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can we ensure our leadership vision aligns with a culture that retains top talent?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What is the financial impact of turnover, and how can we reduce it?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can operational processes support retention and reduce disruption?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What HR initiatives can proactively address retention challenges?
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2">
                        <div className="text-white font-medium mb-1">Inconsistent Employee Performance</div>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Low engagement drains productivity, mismatched hires waste management time<br/>
                        <span className="text-yellow-400">• Managers spend 17% of their time on underperformers</span>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Clear expectations, support systems, and ongoing feedback turn marginal performers into engaged contributors
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What structured performance-management and well-being practices can re-energize and realign your teams?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can leadership drive a culture of accountability and performance?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What is the cost of underperformance, and how can we measure improvement?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can operational workflows support consistent performance?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What HR tools and training can enhance performance management?
                      </td>
                    </tr>

                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2">
                        <div className="text-white font-medium mb-1">Attracting & Retaining Developers</div>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Tech turnover at 13.2%, replacement costs up to 150% of salary, 45–60 days to fill roles<br/>
                        <span className="text-yellow-400">• Unrealistic job descriptions repel top talent</span>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Flexibility, transparency, market-aligned compensation, and streamlined hiring are now must-haves
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can your employer value proposition be redefined to attract top developer talent in a competitive market?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can we position our company as a leader in tech talent attraction?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What is the ROI of investing in competitive compensation and benefits?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can we streamline hiring processes to reduce time-to-fill?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What HR strategies can enhance our employer brand for developers?
                      </td>
                    </tr>

                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2">
                        <div className="text-white font-medium mb-1">Compliance Issues (TWC & EEOC Claims)</div>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        81,055 EEOC charges in 2024, $21K average internal-investigation cost, $100K+ litigation claims<br/>
                        <span className="text-yellow-400">• State-by-state rule complexity</span>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Proactive training, clear reporting, and swift impartial investigations reduce claim volume and cost
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What governance and training strategies can be implemented to reduce costly claims and protect your organization?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can leadership foster a culture of compliance and accountability?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What is the financial impact of compliance failures, and how can we reduce it?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can we ensure operational processes support compliance?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What HR training and governance strategies can reduce claims?
                      </td>
                    </tr>

                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2">
                        <div className="text-white font-medium mb-1">Multistate Workforce Management</div>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        Varying tax, labor, and regulatory rules per state<br/>
                        <span className="text-yellow-400">• Compliance complexity spikes beyond 50 employees</span>
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        A scalable HRIS and partner ecosystem are essential to navigate patchwork regulations
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What scalable HCM tech foundation can support confident multistate workforce management?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can leadership ensure alignment across multistate operations?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What is the financial impact of non-compliance in multistate management?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        How can we streamline operations to support multistate compliance?
                      </td>
                      <td className="py-3 px-2 text-gray-300 text-xs">
                        What HRIS and partnerships can ensure multistate compliance?
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Four Strategic Pillars Deep Dive */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Compliance & Risk Management */}
              <Card className="p-6 bg-red-900/20 border-red-700">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Compliance & Risk Management</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Growth-phase urgency often sidelines compliance, increasing exposure to labor disputes and fines. 
                  Expanding into multiple jurisdictions introduces varied wage laws, tax rules, and reporting standards.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-red-400">Key Actions:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Develop a jurisdiction-specific compliance playbook</li>
                    <li>• Automate record-keeping for time tracking and policy acknowledgments</li>
                    <li>• Train HR and hiring managers on essential legal checkpoints</li>
                  </ul>
                </div>
              </Card>

              {/* Workforce Scalability */}
              <Card className="p-6 bg-blue-900/20 border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Workforce Scalability & Talent Acquisition</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Transitioning beyond informal recruiting requires consistent, qualification-driven hiring practices. 
                  Remote and multi-region talent searches expand the pool but demand localized compensation strategies.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-blue-400">Best Practices:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Define "culture-plus-skills" criteria for every job description</li>
                    <li>• Use standardized assessments to compare candidates objectively</li>
                    <li>• Track turnover metrics and deploy engagement programs</li>
                  </ul>
                </div>
              </Card>

              {/* Leadership Development */}
              <Card className="p-6 bg-purple-900/20 border-purple-700">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Leadership Development & Organizational Design</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Rapid headcount increases without mapped roles lead to duplicated efforts and decision bottlenecks. 
                  Founders and early leaders often wear multiple hats; without mentorship, leadership capacity stalls.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-purple-400">Recommended Steps:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Create a RACI matrix for core processes</li>
                    <li>• Launch peer-mentorship circles and cross-functional workshops</li>
                    <li>• Review and update the organizational chart quarterly</li>
                  </ul>
                </div>
              </Card>

              {/* Operational Efficiency */}
              <Card className="p-6 bg-green-900/20 border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Operational Efficiency & Agility</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Disconnected tools and siloed communication slow approval cycles and dilute strategic focus. 
                  Inconsistent performance management obscures productivity gaps and training needs.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-green-400">Optimization Tactics:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Adopt integrated platforms for end-to-end visibility</li>
                    <li>• Establish continuous feedback: weekly check-ins, monthly reviews</li>
                    <li>• Conduct operational audits before major funding rounds</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Growth-Phase Best Practices Summary */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Growth-Phase Best Practices Summary</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-green-400 mb-4">Financial Sustainability</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Maintain lean operations and predictable cash flow</li>
                    <li>• Set realistic investor milestones linking investments to profitability</li>
                    <li>• Ensure customer acquisition costs consistently fall below lifetime value</li>
                    <li>• Exercise disciplined budget controls while driving top-line revenue</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-400 mb-4">Operational Excellence</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Adopt structured hiring processes balancing culture and skills</li>
                    <li>• Delegate administrative tasks to free leadership bandwidth</li>
                    <li>• Streamline operations to enhance M&A attractiveness</li>
                    <li>• Build scalable processes that support rapid growth</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h4 className="font-bold text-white">Strategic Conclusion</h4>
                </div>
                <p className="text-sm text-gray-300">
                  This cohesive model equips growth-phase companies with a holistic approach to synchronize compliance, 
                  talent acquisition, leadership, and operations. By fortifying each pillar, businesses not only accelerate 
                  scaling but also lay the groundwork for enduring success and sustainable competitive advantage.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Presentation Builder */}
          <TabsContent value="presentation-builder" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Discovery Presentation Builder</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Generate Presentation
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Presentation Structure & Flow</h3>
              
              <div className="space-y-6">
                {presentationSlides.map((slide, index) => (
                  <div key={slide.id} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2">{slide.title}</h4>
                      <Badge className={`text-xs mb-3 ${
                        slide.content_type === 'title' ? 'bg-blue-900/20 text-blue-400 border-blue-700' :
                        slide.content_type === 'context' ? 'bg-green-900/20 text-green-400 border-green-700' :
                        slide.content_type === 'data_insight' ? 'bg-purple-900/20 text-purple-400 border-purple-700' :
                        slide.content_type === 'problems' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-700' :
                        slide.content_type === 'solutions' ? 'bg-orange-900/20 text-orange-400 border-orange-700' :
                        'bg-red-900/20 text-red-400 border-red-700'
                      }`}>
                        {slide.content_type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      
                      <div className="grid lg:grid-cols-3 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Key Points</h5>
                          <ul className="space-y-1">
                            {slide.key_points.map((point, pointIndex) => (
                              <li key={pointIndex} className="text-sm text-gray-300 flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Visuals</h5>
                          <ul className="space-y-1">
                            {slide.visuals.map((visual, visualIndex) => (
                              <li key={visualIndex} className="text-sm text-gray-300 flex items-start gap-2">
                                <Eye className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                {visual}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Presenter Notes</h5>
                          <ul className="space-y-1">
                            {slide.presenter_notes.map((note, noteIndex) => (
                              <li key={noteIndex} className="text-sm text-gray-300 flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Presentation Templates */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Presentation Templates & Assets</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Presentation className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Discovery Presentation</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Complete strategic discovery presentation with data flow and solution mapping
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Use Template
                  </Button>
                </div>
                
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <FileText className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Stakeholder Summary</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Executive summary template for stakeholder messaging and next steps
                  </p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Use Template
                  </Button>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">ROI Framework</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    ROI presentation template with business impact and value creation
                  </p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Use Template
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Conversation Planner */}
          <TabsContent value="conversation-planner" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Strategic Conversation Planner</h2>
              
              <Button className="bg-orange-600 hover:bg-orange-700">
                Create Conversation Plan
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Discovery Meeting Planning Framework</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Pre-Meeting Preparation</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Research & Context</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Company background and industry analysis</li>
                        <li>• Recent news, funding, or strategic announcements</li>
                        <li>• Leadership team profiles and experience</li>
                        <li>• Competitive landscape and positioning</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Question Strategy</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Persona-specific question selection</li>
                        <li>• SPIN sequence planning</li>
                        <li>• Follow-up question preparation</li>
                        <li>• Conversation flow mapping</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Meeting Execution</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Opening Framework</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Purpose and agenda confirmation</li>
                        <li>• Expectation setting and ground rules</li>
                        <li>• Initial context and background</li>
                        <li>• Permission for deep questions</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">Discovery Execution</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• SPIN sequence delivery</li>
                        <li>• Active listening and note-taking</li>
                        <li>• Follow-up question deployment</li>
                        <li>• Value moment identification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Next Steps Framework */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Next Steps & Follow-up Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Discovery Meeting</h4>
                    <p className="text-sm text-gray-400">Initial strategic conversation using persona-specific SPIN questions</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Needs Assessment + Analysis</h4>
                    <p className="text-sm text-gray-400">Comprehensive analysis of discoveries and strategic recommendation development</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Strategic Presentation</h4>
                    <p className="text-sm text-gray-400">Present findings, solutions, and ROI projections to stakeholder team</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">Implementation Planning</h4>
                    <p className="text-sm text-gray-400">Define pilot engagement, success metrics, and partnership structure</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conversation Templates */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Conversation Flow Templates</h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">CEO Discovery Flow</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-400">Opening: Strategic vision and growth</div>
                    <div className="text-yellow-400">Problem: Execution barriers</div>
                    <div className="text-red-400">Implication: Competitive impact</div>
                    <div className="text-green-400">Need-Payoff: Market advantage</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">CFO Discovery Flow</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-400">Opening: Budget and cost structure</div>
                    <div className="text-yellow-400">Problem: Cost visibility gaps</div>
                    <div className="text-red-400">Implication: Financial risk</div>
                    <div className="text-green-400">Need-Payoff: ROI optimization</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">COO Discovery Flow</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-400">Opening: Operational challenges</div>
                    <div className="text-yellow-400">Problem: Process bottlenecks</div>
                    <div className="text-red-400">Implication: Client impact</div>
                    <div className="text-green-400">Need-Payoff: Efficiency gains</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">People Ops Flow</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-400">Opening: Process efficiency</div>
                    <div className="text-yellow-400">Problem: Manual processes</div>
                    <div className="text-red-400">Implication: Compliance risk</div>
                    <div className="text-green-400">Need-Payoff: Automation value</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Success Tracking */}
          <TabsContent value="success-tracking" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Discovery Success Tracking & Analytics</h2>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Generate Success Report
              </Button>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Discovery Performance Metrics</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Conversation Quality</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Question Relevance Score</span>
                        <span className="text-green-400 font-bold">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Stakeholder-rated question quality</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Discovery Depth</span>
                        <span className="text-blue-400 font-bold">87%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">SPIN framework completion rate</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Stakeholder Engagement</span>
                        <span className="text-purple-400 font-bold">94%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Participation and openness level</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-400 mb-4">Business Outcomes</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Conversion Rate</span>
                        <span className="text-green-400 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Discovery to proposal conversion</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Sales Cycle Acceleration</span>
                        <span className="text-yellow-400 font-bold">40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Faster progression to close</div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Deal Size Uplift</span>
                        <span className="text-orange-400 font-bold">65%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Average deal value increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Framework Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Framework Effectiveness Analysis</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Framework</th>
                      <th className="text-left py-3 text-gray-400">Usage Rate</th>
                      <th className="text-left py-3 text-gray-400">Success Rate</th>
                      <th className="text-left py-3 text-gray-400">Avg Discovery Time</th>
                      <th className="text-left py-3 text-gray-400">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">SPIN Selling</td>
                      <td className="py-3 text-green-400">78%</td>
                      <td className="py-3 text-green-400">85%</td>
                      <td className="py-3 text-gray-300">45 min</td>
                      <td className="py-3 text-green-400">82%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">Golden Circle</td>
                      <td className="py-3 text-blue-400">45%</td>
                      <td className="py-3 text-blue-400">72%</td>
                      <td className="py-3 text-gray-300">60 min</td>
                      <td className="py-3 text-blue-400">68%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">GROW Model</td>
                      <td className="py-3 text-purple-400">35%</td>
                      <td className="py-3 text-purple-400">88%</td>
                      <td className="py-3 text-gray-300">55 min</td>
                      <td className="py-3 text-purple-400">75%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">5C CFO</td>
                      <td className="py-3 text-yellow-400">28%</td>
                      <td className="py-3 text-yellow-400">92%</td>
                      <td className="py-3 text-gray-300">40 min</td>
                      <td className="py-3 text-yellow-400">89%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">5C Hiring</td>
                      <td className="py-3 text-orange-400">22%</td>
                      <td className="py-3 text-orange-400">94%</td>
                      <td className="py-3 text-gray-300">35 min</td>
                      <td className="py-3 text-orange-400">91%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-white font-medium">HireSmart</td>
                      <td className="py-3 text-red-400">18%</td>
                      <td className="py-3 text-red-400">96%</td>
                      <td className="py-3 text-gray-300">50 min</td>
                      <td className="py-3 text-red-400">93%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Continuous Improvement */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Continuous Improvement Recommendations</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">High Performance Areas</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• SPIN framework mastery</li>
                    <li>• CFO engagement success</li>
                    <li>• HireSmart question impact</li>
                    <li>• Conversion rate excellence</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Optimization Opportunities</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Golden Circle usage increase</li>
                    <li>• Discovery time optimization</li>
                    <li>• Follow-up question mastery</li>
                    <li>• Presentation delivery improvement</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white mb-2">Next Level Tactics</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Multi-framework integration</li>
                    <li>• Real-time conversation analytics</li>
                    <li>• AI-powered question suggestions</li>
                    <li>• Predictive success modeling</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}