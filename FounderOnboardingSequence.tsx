import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  User, 
  Target, 
  Zap, 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Play, 
  Share, 
  Download,
  Copy,
  Globe,
  TrendingUp,
  Settings,
  FileText,
  Video,
  Lightbulb,
  Star,
  Award,
  Rocket,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Activity
} from 'lucide-react';

interface FounderProfile {
  name: string;
  company: string;
  industry: string;
  headcount: number;
  language: 'en' | 'es' | 'both';
  modules: string[];
  kpis: string[];
  phase: 1 | 2 | 3 | 4;
  startDate: Date;
  metrics: {
    costSavings: number;
    revenueLift: number;
    adoption: number;
    engagement: number;
  };
}

interface OnboardingProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export function FounderOnboardingSequence({ language, onNavigate }: OnboardingProps) {
  const [currentPhase, setCurrentPhase] = useState<1 | 2 | 3 | 4>(1);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedKPIs, setSelectedKPIs] = useState<string[]>([]);
  const [founderProfile, setFounderProfile] = useState<Partial<FounderProfile>>({});
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [caseStudyData, setCaseStudyData] = useState<any>(null);
  const [copiedText, setCopiedText] = useState<string>('');

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Available modules for selection
  const modules = [
    { 
      id: 'hcm', 
      name: t('Human Capital Management', 'Gestión Capital Humano'),
      icon: Users,
      description: t('Onboarding, performance, compliance', 'Incorporación, desempeño, cumplimiento')
    },
    { 
      id: 'erp', 
      name: t('Enterprise Resource Planning', 'Planificación Recursos Empresariales'),
      icon: Settings,
      description: t('Operations, inventory, workflows', 'Operaciones, inventario, flujos')
    },
    { 
      id: 'epm', 
      name: t('Enterprise Performance Management', 'Gestión Desempeño Empresarial'),
      icon: TrendingUp,
      description: t('Forecasting, planning, analytics', 'Pronósticos, planificación, análisis')
    },
    { 
      id: 'crm', 
      name: t('Customer Relationship Management', 'Gestión Relaciones Clientes'),
      icon: Target,
      description: t('Sales pipeline, retention, growth', 'Pipeline ventas, retención, crecimiento')
    }
  ];

  // Available KPIs for tracking
  const kpis = [
    { id: 'cost-savings', name: t('Cost Savings', 'Ahorro de Costos'), category: 'financial' },
    { id: 'revenue-lift', name: t('Revenue Lift', 'Incremento Ingresos'), category: 'financial' },
    { id: 'adoption-rate', name: t('Adoption Rate', 'Tasa de Adopción'), category: 'human' },
    { id: 'engagement-score', name: t('Engagement Score', 'Puntaje Compromiso'), category: 'human' },
    { id: 'efficiency-gain', name: t('Efficiency Gain', 'Ganancia Eficiencia'), category: 'operational' },
    { id: 'compliance-score', name: t('Compliance Score', 'Puntaje Cumplimiento'), category: 'risk' }
  ];

  // Phase progression logic
  const phases = [
    {
      id: 1,
      title: t('Outreach & Activation', 'Alcance y Activación'),
      description: t('Spark curiosity, qualify fit, set cinematic tone', 'Despertar curiosidad, calificar ajuste, establecer tono cinematográfico'),
      duration: t('30 minutes', '30 minutos'),
      status: currentPhase >= 1 ? 'completed' : 'pending'
    },
    {
      id: 2,
      title: t('Schema Mapping & Module Selection', 'Mapeo Esquema y Selección Módulos'),
      description: t('Align business with OVERWATCH³ schema', 'Alinear negocio con esquema OVERWATCH³'),
      duration: t('45 minutes', '45 minutos'),
      status: currentPhase >= 2 ? 'completed' : currentPhase === 1 ? 'active' : 'pending'
    },
    {
      id: 3,
      title: t('Deployment & ROI Capture', 'Despliegue y Captura ROI'),
      description: t('Launch fast, prove impact, capture metrics', 'Lanzar rápido, probar impacto, capturar métricas'),
      duration: t('14 days', '14 días'),
      status: currentPhase >= 3 ? 'completed' : currentPhase === 2 ? 'active' : 'pending'
    },
    {
      id: 4,
      title: t('Cinematic Case Study', 'Caso de Estudio Cinematográfico'),
      description: t('Convert deployment into investor-grade proof', 'Convertir despliegue en prueba grado inversionista'),
      duration: t('2 days', '2 días'),
      status: currentPhase >= 4 ? 'completed' : currentPhase === 3 ? 'active' : 'pending'
    }
  ];

  // Mock deployment metrics
  const mockMetrics = {
    costSavings: 1200000,
    revenueLift: 3400000,
    adoption: 87,
    engagement: 92
  };

  // Generate case study content
  const generateCaseStudy = () => {
    const metrics = founderProfile.metrics || mockMetrics;
    return {
      title: `Founder-Led Deployment: ${founderProfile.company || '[Company Name]'}`,
      founder: founderProfile.name || '[Founder Name]',
      modules: selectedModules,
      impact: {
        financial: `$${(metrics.costSavings / 1000000).toFixed(1)}M saved, $${(metrics.revenueLift / 1000000).toFixed(1)}M lifted`,
        human: `${metrics.adoption}% adoption, ${metrics.engagement}% engagement`,
        proof: t('ROI proven, not promised', 'ROI probado, no prometido')
      },
      quote: t(
        `"Overwatch³ let me deploy solo, prove impact fast, and convert metrics into investor-grade proof. It's not just a platform—it's a Command Center for founders."`,
        `"Overwatch³ me permitió desplegar solo, probar impacto rápido, y convertir métricas en prueba grado inversionista. No es solo una plataforma—es un Centro de Comando para fundadores."`
      )
    };
  };

  // Handle copy to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  // Phase 1: Outreach & Activation
  const PhaseOneContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t('Welcome to OVERWATCH³', 'Bienvenido a OVERWATCH³')}
        </h2>
        <p className="text-xl text-slate-300 mb-6">
          {t(
            'The bilingual Command Center where founders prove ROI across HCM, ERP, EPM, and CRM',
            'El Centro de Comando bilingüe donde fundadores prueban ROI a través de HCM, ERP, EPM, y CRM'
          )}
        </p>
        <Badge className="bg-green-600/20 text-green-400 border-green-600/40 text-lg px-4 py-2">
          {t('FOUNDER-FIRST PLATFORM', 'PLATAFORMA FUNDADOR-PRIMERO')}
        </Badge>
      </div>

      {/* Value Propositions */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">
              {t('Bilingual-First', 'Bilingüe-Primero')}
            </h3>
          </div>
          <p className="text-slate-400">
            {t(
              'One click: English ↔ Spanish. From Dallas to Bogotá, speak enterprise.',
              'Un clic: Inglés ↔ Español. De Dallas a Bogotá, habla empresa.'
            )}
          </p>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">
              {t('Schema-Driven', 'Impulsado por Esquemas')}
            </h3>
          </div>
          <p className="text-slate-400">
            {t(
              'Every metric traceable. Every overlay modular. Built for velocity.',
              'Cada métrica rastreable. Cada overlay modular. Construido para velocidad.'
            )}
          </p>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">
              {t('Cinematic ROI', 'ROI Cinematográfico')}
            </h3>
          </div>
          <p className="text-slate-400">
            {t(
              'Every deployment becomes a case study. ROI proven, not promised.',
              'Cada despliegue se convierte en caso de estudio. ROI probado, no prometido.'
            )}
          </p>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Button 
          onClick={() => setCurrentPhase(2)}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
        >
          {t('Start My Deployment', 'Comenzar Mi Despliegue')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-sm text-slate-400">
          {t('Deploy your first module in under 48 hours', 'Despliega tu primer módulo en menos de 48 horas')}
        </p>
      </div>
    </div>
  );

  // Phase 2: Schema Mapping & Module Selection
  const PhaseTwoContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t('Configure Your Command Center', 'Configura Tu Centro de Comando')}
        </h2>
        <p className="text-xl text-slate-300">
          {t(
            'Select modules and KPIs to create your schema-driven deployment',
            'Selecciona módulos y KPIs para crear tu despliegue impulsado por esquemas'
          )}
        </p>
      </div>

      {/* Founder Profile */}
      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          {t('Founder Profile', 'Perfil del Fundador')}
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t('Your Name', 'Tu Nombre')}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              placeholder={t('Luis Dominguez', 'Luis Dominguez')}
              value={founderProfile.name || ''}
              onChange={(e) => setFounderProfile({...founderProfile, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t('Company Name', 'Nombre de la Empresa')}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              placeholder={t('[Your Company]', '[Tu Empresa]')}
              value={founderProfile.company || ''}
              onChange={(e) => setFounderProfile({...founderProfile, company: e.target.value})}
            />
          </div>
        </div>
      </Card>

      {/* Module Selection */}
      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          {t('Select Modules', 'Seleccionar Módulos')}
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModules.includes(module.id);
            
            return (
              <Card 
                key={module.id} 
                className={`p-4 cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-green-900/30 border-green-600' 
                    : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                }`}
                onClick={() => {
                  if (isSelected) {
                    setSelectedModules(selectedModules.filter(m => m !== module.id));
                  } else {
                    setSelectedModules([...selectedModules, module.id]);
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-green-400' : 'text-slate-400'}`} />
                  <h4 className={`font-medium ${isSelected ? 'text-green-400' : 'text-white'}`}>
                    {module.name}
                  </h4>
                  {isSelected && <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />}
                </div>
                <p className="text-sm text-slate-400">{module.description}</p>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* KPI Selection */}
      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          {t('Key Performance Indicators', 'Indicadores Clave de Desempeño')}
        </h3>
        <div className="grid lg:grid-cols-3 gap-3">
          {kpis.map((kpi) => {
            const isSelected = selectedKPIs.includes(kpi.id);
            
            return (
              <Button
                key={kpi.id}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  if (isSelected) {
                    setSelectedKPIs(selectedKPIs.filter(k => k !== kpi.id));
                  } else {
                    setSelectedKPIs([...selectedKPIs, kpi.id]);
                  }
                }}
                className={isSelected ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                {kpi.name}
                {isSelected && <CheckCircle className="w-3 h-3 ml-2" />}
              </Button>
            );
          })}
        </div>
      </Card>

      {/* Language Preference */}
      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5" />
          {t('Language Preference', 'Preferencia de Idioma')}
        </h3>
        <div className="flex gap-4">
          {[
            { id: 'en', label: 'English Only', labelEs: 'Solo Inglés' },
            { id: 'es', label: 'Spanish Only', labelEs: 'Solo Español' },
            { id: 'both', label: 'Bilingual (EN ↔ ES)', labelEs: 'Bilingüe (EN ↔ ES)' }
          ].map((option) => (
            <Button
              key={option.id}
              variant={founderProfile.language === option.id ? "default" : "outline"}
              onClick={() => setFounderProfile({...founderProfile, language: option.id as any})}
              className={founderProfile.language === option.id ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {language === 'en' ? option.label : option.labelEs}
            </Button>
          ))}
        </div>
      </Card>

      {/* Generate Schema */}
      <div className="text-center">
        <Button 
          onClick={() => setCurrentPhase(3)}
          disabled={selectedModules.length === 0 || selectedKPIs.length === 0}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
        >
          {t('Generate My Schema', 'Generar Mi Esquema')}
          <Zap className="w-5 h-5 ml-2" />
        </Button>
        {(selectedModules.length === 0 || selectedKPIs.length === 0) && (
          <p className="text-sm text-yellow-400 mt-2">
            {t('Please select at least one module and one KPI', 'Por favor selecciona al menos un módulo y un KPI')}
          </p>
        )}
      </div>
    </div>
  );

  // Phase 3: Deployment & ROI Capture
  const PhaseThreeContent = () => {
    useEffect(() => {
      // Simulate deployment progress
      const interval = setInterval(() => {
        setDeploymentProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 200);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Command Center Deployment', 'Despliegue Centro de Comando')}
          </h2>
          <p className="text-xl text-slate-300">
            {t(
              'Your schema-driven modules are deploying. ROI capture begins now.',
              'Tus módulos impulsados por esquemas se están desplegando. La captura de ROI comienza ahora.'
            )}
          </p>
        </div>

        {/* Deployment Progress */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              {t('Deployment Progress', 'Progreso del Despliegue')}
            </h3>
            <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
              {deploymentProgress}% {t('Complete', 'Completo')}
            </Badge>
          </div>
          <Progress value={deploymentProgress} className="mb-4" />
          <div className="grid lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">
                {t('Bilingual Toggle Activated', 'Alternador Bilingüe Activado')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">
                {t('Schema Mapping Complete', 'Mapeo de Esquema Completo')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className={`w-4 h-4 ${deploymentProgress >= 100 ? 'text-green-400' : 'text-yellow-400'}`} />
              <span className="text-slate-300">
                {t('ROI Tracking Active', 'Seguimiento ROI Activo')}
              </span>
            </div>
          </div>
        </Card>

        {/* Real-time Metrics */}
        <div className="grid lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Cost Savings', 'Ahorro de Costos')}</p>
                <p className="text-2xl font-bold text-green-400">
                  ${(mockMetrics.costSavings / 1000000).toFixed(1)}M
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Revenue Lift', 'Incremento Ingresos')}</p>
                <p className="text-2xl font-bold text-blue-400">
                  ${(mockMetrics.revenueLift / 1000000).toFixed(1)}M
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Adoption Rate', 'Tasa de Adopción')}</p>
                <p className="text-2xl font-bold text-purple-400">{mockMetrics.adoption}%</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{t('Engagement', 'Compromiso')}</p>
                <p className="text-2xl font-bold text-yellow-400">{mockMetrics.engagement}%</p>
              </div>
              <Activity className="w-8 h-8 text-yellow-400" />
            </div>
          </Card>
        </div>

        {/* Deployment Timeline */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {t('14-Day ROI Timeline', 'Cronología ROI 14 Días')}
          </h3>
          <div className="space-y-4">
            {[
              { day: 'Day 1-3', task: t('Deploy Command Center UI', 'Desplegar UI Centro de Comando'), status: 'completed' },
              { day: 'Day 4-7', task: t('Activate Coaching Overlays', 'Activar Overlays de Coaching'), status: 'completed' },
              { day: 'Day 8-10', task: t('Metrics Animation & Tracking', 'Animación y Seguimiento de Métricas'), status: 'active' },
              { day: 'Day 11-14', task: t('Before/After Snapshot', 'Instantánea Antes/Después'), status: 'pending' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full ${
                  item.status === 'completed' ? 'bg-green-400' :
                  item.status === 'active' ? 'bg-yellow-400' : 'bg-slate-600'
                }`} />
                <span className="text-sm font-medium text-slate-400 w-16">{item.day}</span>
                <span className="text-white">{item.task}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Continue to Case Study */}
        <div className="text-center">
          <Button 
            onClick={() => setCurrentPhase(4)}
            disabled={deploymentProgress < 100}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            {t('Generate Case Study', 'Generar Caso de Estudio')}
            <FileText className="w-5 h-5 ml-2" />
          </Button>
          {deploymentProgress < 100 && (
            <p className="text-sm text-yellow-400 mt-2">
              {t('Deployment must complete before generating case study', 'El despliegue debe completarse antes de generar el caso de estudio')}
            </p>
          )}
        </div>
      </div>
    );
  };

  // Phase 4: Cinematic Case Study
  const PhaseFourContent = () => {
    const caseStudy = generateCaseStudy();

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Cinematic Case Study Ready', 'Caso de Estudio Cinematográfico Listo')}
          </h2>
          <p className="text-xl text-slate-300">
            {t(
              'Your founder-led deployment is now investor-grade proof',
              'Tu despliegue liderado por fundador es ahora prueba grado inversionista'
            )}
          </p>
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/40 text-lg px-4 py-2 mt-4">
            {t('INVESTOR-READY', 'LISTO PARA INVERSIONISTAS')}
          </Badge>
        </div>

        {/* Case Study Preview */}
        <Card className="p-8 bg-slate-800 border-slate-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
            <p className="text-lg text-slate-300">{caseStudy.founder}</p>
          </div>

          {/* Impact Metrics */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-600/40">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h4 className="font-bold text-green-400 mb-1">{t('Financial Impact', 'Impacto Financiero')}</h4>
              <p className="text-2xl font-bold text-white">{caseStudy.impact.financial}</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-600/40">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="font-bold text-blue-400 mb-1">{t('Human Capital', 'Capital Humano')}</h4>
              <p className="text-2xl font-bold text-white">{caseStudy.impact.human}</p>
            </div>
          </div>

          {/* Modules Deployed */}
          <div className="mb-6">
            <h4 className="font-bold text-white mb-3">{t('Modules Deployed', 'Módulos Desplegados')}</h4>
            <div className="flex flex-wrap gap-2">
              {selectedModules.map(moduleId => {
                const module = modules.find(m => m.id === moduleId);
                return (
                  <Badge key={moduleId} className="bg-slate-700 text-slate-300">
                    {module?.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Founder Quote */}
          <div className="p-6 bg-slate-900/50 rounded-lg border-l-4 border-purple-500">
            <p className="text-lg italic text-white leading-relaxed">
              "{caseStudy.quote}"
            </p>
            <p className="text-slate-400 mt-3 text-right">
              — {caseStudy.founder}
            </p>
          </div>
        </Card>

        {/* Export Options */}
        <div className="grid lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-slate-800 border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('One-Page Case Study', 'Caso de Estudio Una Página')}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {t('Visual + captioned, ready for investor decks', 'Visual + subtitulado, listo para decks de inversionistas')}
            </p>
            <Button 
              onClick={() => handleCopy(JSON.stringify(caseStudy, null, 2))}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              {copiedText === JSON.stringify(caseStudy, null, 2) ? (
                <span className="text-green-400">✓ Copied</span>
              ) : (
                <>
                  <Download className="w-3 h-3 mr-2" />
                  {t('Export PDF', 'Exportar PDF')}
                </>
              )}
            </Button>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              {t('Visual Snapshot', 'Instantánea Visual')}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {t('Before/After dashboard transformation', 'Transformación dashboard Antes/Después')}
            </p>
            <Button 
              onClick={() => onNavigate('visual-snapshot')}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              <Star className="w-3 h-3 mr-2" />
              {t('Create Snapshot', 'Crear Instantánea')}
            </Button>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Share className="w-4 h-4" />
              {t('LinkedIn Proof Drop', 'Publicación Prueba LinkedIn')}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {t('Ready-to-post success story content', 'Contenido historia de éxito listo para publicar')}
            </p>
            <Button 
              onClick={() => onNavigate('pitch-resources')}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              <Share className="w-3 h-3 mr-2" />
              {t('View Templates', 'Ver Plantillas')}
            </Button>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {t('Caption Generator', 'Generador Títulos')}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {t('Auto-generate cinematic taglines', 'Auto-generar taglines cinematográficos')}
            </p>
            <Button 
              onClick={() => onNavigate('caption-system')}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              <Zap className="w-3 h-3 mr-2" />
              {t('Generate Captions', 'Generar Títulos')}
            </Button>
          </Card>

          <Card className="p-4 bg-slate-800 border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Video className="w-4 h-4" />
              {t('Video Walkthrough', 'Recorrido en Video')}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {t('90-second founder-led narration', 'Narración de 90 segundos liderada por fundador')}
            </p>
            <Button 
              onClick={() => onNavigate('pitch-delivery')}
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              <Video className="w-3 h-3 mr-2" />
              {t('Record Pitch', 'Grabar Pitch')}
            </Button>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="p-6 bg-green-900/20 border-green-600/40">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            {t('Deployment Success - Next Steps', 'Éxito del Despliegue - Próximos Pasos')}
          </h3>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {t(
                  'Add this case study to your investor pitch deck as social proof',
                  'Agrega este caso de estudio a tu deck de inversionistas como prueba social'
                )}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {t(
                  'Share on LinkedIn to attract other solo-operators for referrals',
                  'Comparte en LinkedIn para atraer otros operadores-solo para referencias'
                )}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {t(
                  'Use metrics in sales conversations as third-party validation',
                  'Usa métricas en conversaciones de ventas como validación de terceros'
                )}
              </span>
            </div>
          </div>
        </Card>

        {/* Deploy Another */}
        <div className="text-center">
          <Button 
            onClick={() => {
              setCurrentPhase(1);
              setSelectedModules([]);
              setSelectedKPIs([]);
              setFounderProfile({});
              setDeploymentProgress(0);
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            {t('Deploy Another Founder', 'Desplegar Otro Fundador')}
            <Rocket className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="px-6 lg:px-20 py-8 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {t('Founder-Led Onboarding Sequence', 'Secuencia de Incorporación Liderada por Fundador')}
            </h1>
            <p className="text-lg text-slate-300">
              {t(
                'Turn every solo-operator into a cinematic case study',
                'Convierte cada operador-solo en un caso de estudio cinematográfico'
              )}
            </p>
          </div>
          <Badge className="bg-green-600/20 text-green-400 border-green-600/40 text-lg px-4 py-2">
            {t('PHASE', 'FASE')} {currentPhase}/4
          </Badge>
        </div>

        {/* Phase Progress */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  phase.status === 'completed' ? 'bg-green-600 text-white' :
                  phase.status === 'active' ? 'bg-blue-600 text-white' : 'bg-slate-600 text-slate-400'
                }`}>
                  {phase.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : phase.id}
                </div>
                {index < phases.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentPhase > phase.id ? 'bg-green-600' : 'bg-slate-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 gap-4 text-sm">
            {phases.map((phase) => (
              <div key={phase.id} className="text-center">
                <h4 className={`font-medium ${
                  phase.status === 'completed' ? 'text-green-400' :
                  phase.status === 'active' ? 'text-blue-400' : 'text-slate-400'
                }`}>
                  {phase.title}
                </h4>
                <p className="text-slate-400 text-xs mt-1">{phase.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-20 py-12">
        {currentPhase === 1 && <PhaseOneContent />}
        {currentPhase === 2 && <PhaseTwoContent />}
        {currentPhase === 3 && <PhaseThreeContent />}
        {currentPhase === 4 && <PhaseFourContent />}
      </div>
    </div>
  );
}