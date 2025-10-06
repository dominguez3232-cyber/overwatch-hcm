import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare, 
  Award, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  User,
  Settings,
  PieChart,
  Clock,
  Star,
  Zap,
  Brain,
  Eye,
  ArrowRight,
  Download,
  Filter,
  Search,
  Plus,
  ChevronDown,
  FileText,
  LineChart
} from 'lucide-react';

interface EmployeePerformanceManagementProps {
  language: 'en' | 'es';
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  manager: string;
  overallScore: number;
  goalCompletion: number;
  lastReview: string;
  nextReview: string;
  status: 'excellent' | 'good' | 'needs-attention' | 'pip';
}

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  category: 'productivity' | 'quality' | 'engagement' | 'development';
}

export function EmployeePerformanceManagement({ 
  language, 
  currentMode = 'founder',
  onNavigate 
}: EmployeePerformanceManagementProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'employees' | 'goals' | 'feedback' | 'analytics' | 'calibration' | 'development'>('dashboard');
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<'current' | 'q1' | 'q2' | 'q3' | 'q4'>('current');

  const labels = {
    en: {
      title: "Employee Performance Management",
      subtitle: "Transform performance from annual events to continuous strategic advantage",
      description: "Advisory-grade performance management system integrating goals, feedback, development, and analytics",
      
      // Navigation
      dashboard: "Performance Dashboard",
      employees: "Employee Overview",
      goals: "Goals & OKRs",
      feedback: "Continuous Feedback",
      analytics: "Performance Analytics",
      calibration: "Calibration & Reviews",
      development: "Development Planning",
      
      // Dashboard sections
      performanceOverview: "Performance Overview",
      keyMetrics: "Key Performance Metrics",
      recentActivity: "Recent Activity",
      upcomingReviews: "Upcoming Reviews",
      performanceTrends: "Performance Trends",
      engagementInsights: "Engagement Insights",
      
      // Metrics
      overallPerformance: "Overall Performance Score",
      goalAchievement: "Goal Achievement Rate",
      employeeEngagement: "Employee Engagement",
      feedbackFrequency: "Feedback Frequency",
      developmentProgress: "Development Progress",
      retentionRate: "Retention Rate",
      
      // Employee management
      employeeProfile: "Employee Profile",
      performanceHistory: "Performance History",
      goalProgress: "Goal Progress",
      feedbackHistory: "Feedback History",
      developmentPlan: "Development Plan",
      
      // Actions
      scheduleReview: "Schedule Review",
      provideFeedback: "Provide Feedback",
      setGoals: "Set Goals",
      createPIP: "Create Performance Improvement Plan",
      recognizeEmployee: "Recognize Employee",
      exportReport: "Export Report",
      
      // Status labels
      excellent: "Excellent",
      good: "Good",
      needsAttention: "Needs Attention",
      pip: "Performance Improvement Plan",
      
      // Framework types
      smart: "SMART Goals",
      okr: "Objectives & Key Results",
      mbo: "Management by Objectives",
      continuous: "Continuous Performance",
      
      // Performance categories
      productivity: "Productivity",
      quality: "Quality",
      engagement: "Engagement", 
      development: "Development",
      collaboration: "Collaboration",
      leadership: "Leadership",
      
      // Time periods
      current: "Current Period",
      q1: "Q1 2024",
      q2: "Q2 2024", 
      q3: "Q3 2024",
      q4: "Q4 2024"
    },
    es: {
      title: "Gestión de Desempeño de Empleados",
      subtitle: "Transformar el desempeño de eventos anuales a ventaja estratégica continua",
      description: "Sistema de gestión de desempeño de grado asesor integrando objetivos, retroalimentación, desarrollo y analítica",
      
      // Navigation
      dashboard: "Panel de Desempeño",
      employees: "Vista de Empleados",
      goals: "Objetivos y OKRs",
      feedback: "Retroalimentación Continua",
      analytics: "Analítica de Desempeño",
      calibration: "Calibración y Revisiones",
      development: "Planificación de Desarrollo",
      
      // Dashboard sections
      performanceOverview: "Vista General de Desempeño",
      keyMetrics: "Métricas Clave de Desempeño",
      recentActivity: "Actividad Reciente",
      upcomingReviews: "Revisiones Próximas",
      performanceTrends: "Tendencias de Desempeño",
      engagementInsights: "Insights de Compromiso",
      
      // Metrics
      overallPerformance: "Puntuación General de Desempeño",
      goalAchievement: "Tasa de Logro de Objetivos",
      employeeEngagement: "Compromiso del Empleado",
      feedbackFrequency: "Frecuencia de Retroalimentación",
      developmentProgress: "Progreso de Desarrollo",
      retentionRate: "Tasa de Retención",
      
      // Employee management
      employeeProfile: "Perfil del Empleado",
      performanceHistory: "Historial de Desempeño",
      goalProgress: "Progreso de Objetivos",
      feedbackHistory: "Historial de Retroalimentación",
      developmentPlan: "Plan de Desarrollo",
      
      // Actions
      scheduleReview: "Programar Revisión",
      provideFeedback: "Proporcionar Retroalimentación",
      setGoals: "Establecer Objetivos",
      createPIP: "Crear Plan de Mejora de Desempeño",
      recognizeEmployee: "Reconocer Empleado",
      exportReport: "Exportar Reporte",
      
      // Status labels
      excellent: "Excelente",
      good: "Bueno",
      needsAttention: "Necesita Atención",
      pip: "Plan de Mejora de Desempeño",
      
      // Framework types
      smart: "Objetivos SMART",
      okr: "Objetivos y Resultados Clave",
      mbo: "Gestión por Objetivos",
      continuous: "Desempeño Continuo",
      
      // Performance categories
      productivity: "Productividad",
      quality: "Calidad",
      engagement: "Compromiso",
      development: "Desarrollo", 
      collaboration: "Colaboración",
      leadership: "Liderazgo",
      
      // Time periods
      current: "Período Actual",
      q1: "Q1 2024",
      q2: "Q2 2024",
      q3: "Q3 2024", 
      q4: "Q4 2024"
    }
  };

  const currentLabels = labels[language];

  // Sample data
  const employees: Employee[] = [
    {
      id: '1',
      name: 'María González',
      role: 'Senior Developer',
      department: 'Engineering',
      manager: 'Carlos Ruiz',
      overallScore: 92,
      goalCompletion: 88,
      lastReview: '2024-09-15',
      nextReview: '2024-12-15',
      status: 'excellent'
    },
    {
      id: '2', 
      name: 'James Chen',
      role: 'Product Manager',
      department: 'Product',
      manager: 'Sarah Williams',
      overallScore: 85,
      goalCompletion: 82,
      lastReview: '2024-08-20',
      nextReview: '2024-11-20',
      status: 'good'
    },
    {
      id: '3',
      name: 'Ana Rodriguez',
      role: 'Marketing Specialist',
      department: 'Marketing', 
      manager: 'David Kim',
      overallScore: 78,
      goalCompletion: 65,
      lastReview: '2024-10-01',
      nextReview: '2024-01-01',
      status: 'needs-attention'
    },
    {
      id: '4',
      name: 'Michael Johnson',
      role: 'Sales Representative',
      department: 'Sales',
      manager: 'Lisa Park',
      overallScore: 68,
      goalCompletion: 45,
      lastReview: '2024-09-30',
      nextReview: '2024-11-30',
      status: 'pip'
    }
  ];

  const performanceMetrics: PerformanceMetric[] = [
    {
      id: '1',
      name: 'Overall Performance Score',
      value: 82.5,
      target: 85,
      trend: 'up',
      category: 'productivity'
    },
    {
      id: '2',
      name: 'Goal Achievement Rate',
      value: 76,
      target: 80,
      trend: 'up',
      category: 'productivity'
    },
    {
      id: '3',
      name: 'Employee Engagement',
      value: 87,
      target: 85,
      trend: 'stable',
      category: 'engagement'
    },
    {
      id: '4',
      name: 'Development Progress',
      value: 72,
      target: 75,
      trend: 'up',
      category: 'development'
    }
  ];

  const getStatusColor = (status: Employee['status']) => {
    switch (status) {
      case 'excellent': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'good': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'needs-attention': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'pip': return 'text-red-400 bg-red-900/20 border-red-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getTrendIcon = (trend: PerformanceMetric['trend']) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      case 'stable': return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-green-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">{currentLabels.title}</h1>
              <p className="text-green-400 font-medium">{currentLabels.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-4xl">{currentLabels.description}</p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="dashboard">{currentLabels.dashboard}</TabsTrigger>
            <TabsTrigger value="employees">{currentLabels.employees}</TabsTrigger>
            <TabsTrigger value="goals">{currentLabels.goals}</TabsTrigger>
            <TabsTrigger value="feedback">{currentLabels.feedback}</TabsTrigger>
            <TabsTrigger value="analytics">{currentLabels.analytics}</TabsTrigger>
            <TabsTrigger value="calibration">{currentLabels.calibration}</TabsTrigger>
            <TabsTrigger value="development">{currentLabels.development}</TabsTrigger>
          </TabsList>

          {/* Performance Dashboard */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric) => (
                <Card key={metric.id} className="p-6 bg-gray-800 border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-400" />
                      <h3 className="font-medium text-white text-sm">{metric.name}</h3>
                    </div>
                    {getTrendIcon(metric.trend)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-white">
                      {metric.value}%
                    </div>
                    
                    <Progress 
                      value={metric.value} 
                      className="h-2"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Target: {metric.target}%</span>
                      <span className={metric.value >= metric.target ? 'text-green-400' : 'text-yellow-400'}>
                        {metric.value >= metric.target ? '+' : ''}{(metric.value - metric.target).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Performance Overview & Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Performance Trends */}
              <Card className="lg:col-span-2 p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{currentLabels.performanceTrends}</h3>
                  <select 
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value as any)}
                    className="bg-gray-700 border border-gray-600 text-white px-3 py-1 rounded text-sm"
                  >
                    <option value="current">{currentLabels.current}</option>
                    <option value="q1">{currentLabels.q1}</option>
                    <option value="q2">{currentLabels.q2}</option>
                    <option value="q3">{currentLabels.q3}</option>
                    <option value="q4">{currentLabels.q4}</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">87%</div>
                    <div className="text-sm text-gray-400">{currentLabels.productivity}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">82%</div>
                    <div className="text-sm text-gray-400">{currentLabels.quality}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">89%</div>
                    <div className="text-sm text-gray-400">{currentLabels.engagement}</div>
                  </div>
                </div>
                
                <div className="h-48 flex items-center justify-center border border-gray-700 rounded-lg">
                  <div className="text-center text-gray-400">
                    <LineChart className="w-12 h-12 mx-auto mb-2" />
                    <p>Performance Trend Chart</p>
                    <p className="text-sm">Interactive analytics visualization</p>
                  </div>
                </div>
              </Card>

              {/* Upcoming Reviews */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{currentLabels.upcomingReviews}</h3>
                
                <div className="space-y-4">
                  {employees.slice(0, 3).map((employee) => (
                    <div key={employee.id} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                      <User className="w-8 h-8 text-gray-400" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm">{employee.name}</div>
                        <div className="text-xs text-gray-400">{employee.role}</div>
                        <div className="text-xs text-blue-400">{employee.nextReview}</div>
                      </div>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('calibration')}
                >
                  {currentLabels.scheduleReview}
                </Button>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('feedback')}
                >
                  <MessageSquare className="w-4 h-4" />
                  {currentLabels.provideFeedback}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('goals')}
                >
                  <Target className="w-4 h-4" />
                  {currentLabels.setGoals}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('development')}
                >
                  <Star className="w-4 h-4" />
                  {currentLabels.recognizeEmployee}
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700"
                  onClick={() => setActiveTab('analytics')}
                >
                  <Download className="w-4 h-4" />
                  {currentLabels.exportReport}
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Employee Overview */}
          <TabsContent value="employees" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.employees}</h2>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search employees..."
                    className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm"
                  />
                </div>
                
                <Button variant="outline" className="border-gray-600">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id} className="p-6 bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <User className="w-10 h-10 text-gray-400" />
                      <div>
                        <h3 className="font-bold text-white">{employee.name}</h3>
                        <p className="text-sm text-gray-400">{employee.role}</p>
                        <p className="text-xs text-gray-500">{employee.department}</p>
                      </div>
                    </div>
                    
                    <Badge className={`text-xs ${getStatusColor(employee.status)}`}>
                      {currentLabels[employee.status]}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Overall Score</span>
                      <span className="text-white font-medium">{employee.overallScore}%</span>
                    </div>
                    <Progress value={employee.overallScore} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Goal Completion</span>
                      <span className="text-white font-medium">{employee.goalCompletion}%</span>
                    </div>
                    <Progress value={employee.goalCompletion} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedEmployee(employee.id)}
                    >
                      View Profile
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Goals & OKRs */}
          <TabsContent value="goals" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.goals}</h2>
              
              <div className="flex items-center gap-4">
                <select className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm">
                  <option value="okr">{currentLabels.okr}</option>
                  <option value="smart">{currentLabels.smart}</option>
                  <option value="mbo">{currentLabels.mbo}</option>
                </select>
                
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Goal
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Company OKRs */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Company OKRs Q4 2024</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-white mb-2">Increase Revenue Growth</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Achieve $15M ARR</span>
                        <span className="text-white">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Customer Acquisition +30%</span>
                        <span className="text-white">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-white mb-2">Improve Product Quality</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Reduce Bug Reports by 40%</span>
                        <span className="text-white">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Customer Satisfaction &gt;4.5</span>
                        <span className="text-white">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Individual Goals */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Individual Goals Overview</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-medium text-white text-sm">Goals On Track</div>
                        <div className="text-xs text-gray-400">67 of 82 goals</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-bold">82%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="font-medium text-white text-sm">Goals At Risk</div>
                        <div className="text-xs text-gray-400">12 of 82 goals</div>
                      </div>
                    </div>
                    <div className="text-yellow-400 font-bold">15%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-400" />
                      <div>
                        <div className="font-medium text-white text-sm">Overdue Goals</div>
                        <div className="text-xs text-gray-400">3 of 82 goals</div>
                      </div>
                    </div>
                    <div className="text-red-400 font-bold">3%</div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  View All Goals
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* Continuous Feedback */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.feedback}</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Give Feedback
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feedback Summary */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Feedback Overview</h3>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">4.2</div>
                    <div className="text-sm text-gray-400">Average Feedback Score</div>
                    <div className="flex justify-center gap-1 mt-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-gray-700 pt-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">156</div>
                    <div className="text-sm text-gray-400">Feedback Items This Month</div>
                  </div>
                  
                  <div className="text-center border-t border-gray-700 pt-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">24hrs</div>
                    <div className="text-sm text-gray-400">Average Response Time</div>
                  </div>
                </div>
              </Card>

              {/* Recent Feedback */}
              <Card className="lg:col-span-2 p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Recent Feedback Activity</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-blue-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-white text-sm">Carlos Ruiz</span>
                        <span className="text-xs text-gray-400">→</span>
                        <span className="text-sm text-gray-400">María González</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "Excellent work on the API optimization project. The performance improvements exceeded our expectations."
                      </p>
                      <div className="flex gap-2">
                        <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">Positive</Badge>
                        <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">Technical Skills</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                    <Award className="w-5 h-5 text-purple-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-white text-sm">Sarah Williams</span>
                        <span className="text-xs text-gray-400">→</span>
                        <span className="text-sm text-gray-400">James Chen</span>
                        <span className="text-xs text-gray-500">5 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "Great leadership during the product launch. Your cross-functional coordination was key to our success."
                      </p>
                      <div className="flex gap-2">
                        <Badge className="text-xs bg-purple-900/20 text-purple-400 border-purple-700">Recognition</Badge>
                        <Badge className="text-xs bg-yellow-900/20 text-yellow-400 border-yellow-700">Leadership</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                    <Eye className="w-5 h-5 text-yellow-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-white text-sm">David Kim</span>
                        <span className="text-xs text-gray-400">→</span>
                        <span className="text-sm text-gray-400">Ana Rodriguez</span>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "Consider focusing on data-driven decision making for campaign optimization. Let's schedule a session to review analytics tools."
                      </p>
                      <div className="flex gap-2">
                        <Badge className="text-xs bg-yellow-900/20 text-yellow-400 border-yellow-700">Development</Badge>
                        <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">Analytics</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.analytics}</h2>
              
              <div className="flex items-center gap-4">
                <select className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm">
                  <option value="department">By Department</option>
                  <option value="role">By Role</option>
                  <option value="manager">By Manager</option>
                </select>
                
                <Button variant="outline" className="border-gray-600">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Analytics Cards */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="w-5 h-5 text-blue-400" />
                  <h3 className="font-medium text-white">Performance Distribution</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Excellent (90-100%)</span>
                    <span className="text-green-400">25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Good (80-89%)</span>
                    <span className="text-blue-400">45%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Needs Attention (70-79%)</span>
                    <span className="text-yellow-400">25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">PIP (&lt;70%)</span>
                    <span className="text-red-400">5%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-green-400" />
                  <h3 className="font-medium text-white">Engagement Metrics</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-green-400">87%</div>
                  <div className="text-sm text-gray-400">Employee Engagement</div>
                  <Progress value={87} className="h-2" />
                  <div className="text-xs text-gray-500">+3% vs last quarter</div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h3 className="font-medium text-white">Productivity Index</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-purple-400">8.4</div>
                  <div className="text-sm text-gray-400">Average Score</div>
                  <Progress value={84} className="h-2" />
                  <div className="text-xs text-gray-500">+0.6 vs last quarter</div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-medium text-white">Development ROI</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-yellow-400">3.2x</div>
                  <div className="text-sm text-gray-400">Training Investment</div>
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-gray-500">$125k investment</div>
                </div>
              </Card>
            </div>

            {/* Analytics Chart Placeholder */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Performance Trends & Benchmarks</h3>
              
              <div className="h-64 flex items-center justify-center border border-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Performance Analytics</p>
                  <p className="text-sm">Comprehensive charts showing performance trends, goal completion rates, and team comparisons</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Performance Calibration */}
          <TabsContent value="calibration" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.calibration}</h2>
              
              <Button className="bg-purple-600 hover:bg-purple-700">
                Start Calibration Session
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calibration Process */}
              <Card className="lg:col-span-2 p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Q4 2024 Performance Calibration</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <h4 className="font-medium text-white">Manager Evaluations Complete</h4>
                      <p className="text-sm text-gray-400">All 12 managers have submitted preliminary ratings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <div>
                      <h4 className="font-medium text-white">Calibration Sessions Scheduled</h4>
                      <p className="text-sm text-gray-400">Engineering: Dec 15, Sales: Dec 16, Marketing: Dec 17</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    <div>
                      <h4 className="font-medium text-white">Rating Discrepancies Identified</h4>
                      <p className="text-sm text-gray-400">3 employees require calibration discussion</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-medium text-white mb-3">Calibration Guidelines</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Ensure ratings are consistent across departments</li>
                    <li>• Use objective criteria and documented evidence</li>
                    <li>• Consider growth trajectory and potential</li>
                    <li>• Document rationale for rating adjustments</li>
                  </ul>
                </div>
              </Card>

              {/* Rating Distribution */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Rating Distribution</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Excellent (5)</span>
                    <span className="text-green-400 font-medium">8 employees</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Good (4)</span>
                    <span className="text-blue-400 font-medium">14 employees</span>
                  </div>
                  <Progress value={44} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Meets Expectations (3)</span>
                    <span className="text-yellow-400 font-medium">9 employees</span>
                  </div>
                  <Progress value={28} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Below Expectations (2)</span>
                    <span className="text-orange-400 font-medium">1 employee</span>
                  </div>
                  <Progress value={3} className="h-2" />
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Calibration Score</div>
                  <div className="text-2xl font-bold text-green-400">94%</div>
                  <div className="text-xs text-gray-500">Consistency Index</div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Development Planning */}
          <TabsContent value="development" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{currentLabels.development}</h2>
              
              <Button className="bg-green-600 hover:bg-green-700">
                Create Development Plan
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Development Overview */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Development Overview</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-900 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">89%</div>
                    <div className="text-sm text-gray-400">Plans Active</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">72%</div>
                    <div className="text-sm text-gray-400">Goals Met</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Leadership Development</span>
                    <span className="text-white font-medium">12 participants</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Technical Skills</span>
                    <span className="text-white font-medium">18 participants</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Soft Skills</span>
                    <span className="text-white font-medium">15 participants</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Career Advancement</span>
                    <span className="text-white font-medium">8 participants</span>
                  </div>
                </div>
              </Card>

              {/* Individual Development Plans */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Recent Development Activities</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400 mt-1" />
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">María González</div>
                      <div className="text-xs text-gray-400 mb-1">Completed Advanced React Certification</div>
                      <Badge className="text-xs bg-green-900/20 text-green-400 border-green-700">Technical</Badge>
                    </div>
                    <div className="text-xs text-gray-500">2 days ago</div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Users className="w-5 h-5 text-blue-400 mt-1" />
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">James Chen</div>
                      <div className="text-xs text-gray-400 mb-1">Started Leadership Development Program</div>
                      <Badge className="text-xs bg-blue-900/20 text-blue-400 border-blue-700">Leadership</Badge>
                    </div>
                    <div className="text-xs text-gray-500">1 week ago</div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg">
                    <Brain className="w-5 h-5 text-purple-400 mt-1" />
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">Ana Rodriguez</div>
                      <div className="text-xs text-gray-400 mb-1">Enrolled in Data Analytics Bootcamp</div>
                      <Badge className="text-xs bg-purple-900/20 text-purple-400 border-purple-700">Analytics</Badge>
                    </div>
                    <div className="text-xs text-gray-500">2 weeks ago</div>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  View All Development Plans
                </Button>
              </Card>
            </div>

            {/* Skills Matrix */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Skills Matrix & Development Opportunities</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Employee</th>
                      <th className="text-center py-3 text-gray-400">Technical</th>
                      <th className="text-center py-3 text-gray-400">Leadership</th>
                      <th className="text-center py-3 text-gray-400">Communication</th>
                      <th className="text-center py-3 text-gray-400">Analytics</th>
                      <th className="text-center py-3 text-gray-400">Next Development</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.slice(0,3).map((employee) => (
                      <tr key={employee.id} className="border-b border-gray-800">
                        <td className="py-3 text-white">{employee.name}</td>
                        <td className="text-center py-3">
                          <Badge className="text-xs bg-green-900/20 text-green-400">Expert</Badge>
                        </td>
                        <td className="text-center py-3">
                          <Badge className="text-xs bg-blue-900/20 text-blue-400">Intermediate</Badge>
                        </td>
                        <td className="text-center py-3">
                          <Badge className="text-xs bg-green-900/20 text-green-400">Advanced</Badge>
                        </td>
                        <td className="text-center py-3">
                          <Badge className="text-xs bg-yellow-900/20 text-yellow-400">Beginner</Badge>
                        </td>
                        <td className="text-center py-3">
                          <span className="text-xs text-gray-400">Analytics Training</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}