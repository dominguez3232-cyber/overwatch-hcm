import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Calculator, 
  Users, 
  Target, 
  TrendingUp, 
  Zap,
  ArrowRight,
  BookOpen,
  Settings,
  Edit3,
  Play,
  Award
} from 'lucide-react';

interface QuickActionsProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

export function QuickActions({ language, currentMode, onNavigate }: QuickActionsProps) {
  const getQuickActions = () => {
    const actions = {
      founder: [
        {
          icon: BarChart3,
          title: language === 'en' ? 'ROI Dashboard' : 'Panel ROI',
          description: language === 'en' ? 'View financial performance' : 'Ver rendimiento financiero',
          action: () => onNavigate('dashboard'),
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: Target,
          title: language === 'en' ? 'Strategic Assessment' : 'Evaluación Estratégica',
          description: language === 'en' ? 'Analyze company position' : 'Analizar posición de empresa',
          action: () => onNavigate('assessment'),
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: TrendingUp,
          title: language === 'en' ? 'Growth Insights' : 'Insights de Crecimiento',
          description: language === 'en' ? 'Discover growth opportunities' : 'Descubrir oportunidades de crecimiento',
          action: () => onNavigate('business-command-center'),
          color: 'from-green-500 to-green-600'
        },
        {
          icon: Zap,
          title: language === 'en' ? 'OVERWATCH³ Strategic' : 'OVERWATCH³ Estratégico',
          description: language === 'en' ? 'Advanced strategic intelligence domains' : 'Dominios de inteligencia estratégica avanzada',
          action: () => onNavigate('overwatch'),
          color: 'from-red-500 to-red-600'
        },
        {
          icon: BookOpen,
          title: language === 'en' ? 'Module Library' : 'Biblioteca de Módulos',
          description: language === 'en' ? 'Browse strategic intelligence modules' : 'Explorar módulos de inteligencia estratégica',
          action: () => onNavigate('module-demo'),
          color: 'from-amber-500 to-amber-600'
        },
        {
          icon: Settings,
          title: language === 'en' ? 'Overlay System' : 'Sistema de Overlays',
          description: language === 'en' ? 'Manage coaching overlays and system administration' : 'Gestionar overlays de coaching y administración del sistema',
          action: () => onNavigate('overlay-system'),
          color: 'from-slate-500 to-slate-600'
        },
        {
          icon: Edit3,
          title: language === 'en' ? 'Module Editor' : 'Editor de Módulos',
          description: language === 'en' ? 'Create and customize strategic coaching modules' : 'Crear y personalizar módulos de coaching estratégico',
          action: () => onNavigate('module-editor'),
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          icon: Play,
          title: language === 'en' ? 'Lesson Player' : 'Reproductor de Lecciones',
          description: language === 'en' ? 'Interactive learning experience with progress tracking' : 'Experiencia de aprendizaje interactiva con seguimiento de progreso',
          action: () => onNavigate('lesson-player'),
          color: 'from-emerald-500 to-emerald-600'
        },
        {
          icon: Award,
          title: language === 'en' ? 'Certificate Demo' : 'Demo de Certificado',
          description: language === 'en' ? 'Professional achievement certificates with print support' : 'Certificados de logro profesionales con soporte de impresión',
          action: () => onNavigate('certificate'),
          color: 'from-yellow-500 to-yellow-600'
        }
      ],
      trabajo: [
        {
          icon: Users,
          title: language === 'en' ? 'Team Management' : 'Gestión de Equipo',
          description: language === 'en' ? 'Manage your workforce' : 'Gestionar tu fuerza laboral',
          action: () => onNavigate('business-command-center'),
          color: 'from-orange-500 to-orange-600'
        },
        {
          icon: Calculator,
          title: language === 'en' ? 'Payroll Calculator' : 'Calculadora de Nómina',
          description: language === 'en' ? 'Calculate payroll costs' : 'Calcular costos de nómina',
          action: () => onNavigate('dashboard'),
          color: 'from-teal-500 to-teal-600'
        }
      ],
      accounting: [
        {
          icon: Calculator,
          title: language === 'en' ? 'Financial Reports' : 'Reportes Financieros',
          description: language === 'en' ? 'Generate financial reports' : 'Generar reportes financieros',
          action: () => onNavigate('dashboard'),
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          icon: BarChart3,
          title: language === 'en' ? 'Budget Analysis' : 'Análisis de Presupuesto',
          description: language === 'en' ? 'Analyze budget performance' : 'Analizar rendimiento del presupuesto',
          action: () => onNavigate('assessment'),
          color: 'from-cyan-500 to-cyan-600'
        }
      ],
      strategy: [
        {
          icon: Target,
          title: language === 'en' ? 'Strategic Planning' : 'Planificación Estratégica',
          description: language === 'en' ? 'Plan strategic initiatives' : 'Planificar iniciativas estratégicas',
          action: () => onNavigate('assessment'),
          color: 'from-rose-500 to-rose-600'
        },
        {
          icon: TrendingUp,
          title: language === 'en' ? 'Market Analysis' : 'Análisis de Mercado',
          description: language === 'en' ? 'Analyze market trends' : 'Analizar tendencias del mercado',
          action: () => onNavigate('business-command-center'),
          color: 'from-violet-500 to-violet-600'
        }
      ]
    };

    return actions[currentMode] || actions.founder;
  };

  const quickActions = getQuickActions();

  return (
    <div className="px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold">
          {language === 'en' ? 'Quick Actions' : 'Acciones Rápidas'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={action.action}
            className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 text-left"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {action.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}