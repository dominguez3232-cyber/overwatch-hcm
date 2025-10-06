import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

// Import the image for reference
import smartSarImage from 'figma:asset/7f8438699c8c99f177b620e53981ce899edcbbca.png';

interface IntegratedBusinessModuleCenterProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  currentMode?: 'founder' | 'trabajo' | 'accounting' | 'strategy';
}

interface BusinessCase {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'active' | 'pending' | 'completed' | 'overdue';
  assignee: {
    name: string;
    avatar?: string;
    initials: string;
  };
  module: string;
  sla: string;
  lastActivity: string;
  riskLevel: 'high' | 'medium' | 'low';
}

const mockBusinessCases: BusinessCase[] = [
  {
    id: 'OW-2024-001',
    title: 'Payroll Compliance Review',
    description: 'Q4 payroll audit and compliance verification',
    priority: 'high',
    status: 'active',
    assignee: { name: 'Marcus Johnson', initials: 'MJ' },
    module: 'Finance & Compliance',
    sla: '4 hours',
    lastActivity: '2 hours ago',
    riskLevel: 'high'
  },
  {
    id: 'OW-2024-002',
    title: 'Talent Acquisition Pipeline',
    description: 'Engineering team expansion strategy',
    priority: 'medium',
    status: 'pending',
    assignee: { name: 'Sarah Williams', initials: 'SW' },
    module: 'HR & Talent',
    sla: '2 days',
    lastActivity: '1 day ago',
    riskLevel: 'medium'
  },
  {
    id: 'OW-2024-003',
    title: 'Cross-Border Operations Setup',
    description: 'International expansion compliance framework',
    priority: 'low',
    status: 'completed',
    assignee: { name: 'Carlos Martinez', initials: 'CM' },
    module: 'Legal & Operations',
    sla: '6 hours',
    lastActivity: '3 hours ago',
    riskLevel: 'low'
  },
  {
    id: 'OW-2024-004',
    title: 'Performance Management Cycle',
    description: 'Q4 performance reviews and goal setting',
    priority: 'high',
    status: 'overdue',
    assignee: { name: 'Jennifer Davis', initials: 'JD' },
    module: 'Performance Management',
    sla: '1 hour',
    lastActivity: '30 minutes ago',
    riskLevel: 'high'
  }
];

export function IntegratedBusinessModuleCenter({ 
  language, 
  onNavigate, 
  currentMode = 'founder' 
}: IntegratedBusinessModuleCenterProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCases, setFilteredCases] = useState(mockBusinessCases);

  // Filter cases based on search and filter
  useEffect(() => {
    let filtered = mockBusinessCases;
    
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(case_ => case_.status === selectedFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(case_ => 
        case_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        case_.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        case_.assignee.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredCases(filtered);
  }, [selectedFilter, searchQuery]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/20';
      case 'overdue': return 'bg-red-500/20 text-red-400 border-red-500/20';
      default: return 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/20';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-muted-foreground/20 text-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const stats = {
    totalCases: mockBusinessCases.length,
    highRisk: mockBusinessCases.filter(c => c.riskLevel === 'high').length,
    overdue: mockBusinessCases.filter(c => c.status === 'overdue').length,
    avgResolution: '4.2h'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">OW</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">
                  {language === 'en' ? 'OVERWATCH³ Business Intelligence' : 'Inteligencia de Negocios OVERWATCH³'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Integrated Command Center' : 'Centro de Comando Integrado'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-muted-foreground">
                  {stats.totalCases} {language === 'en' ? 'Open Cases' : 'Casos Abiertos'}
                </span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-muted-foreground">
                  {stats.overdue} {language === 'en' ? 'Overdue' : 'Vencidos'}
                </span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="text-muted-foreground">
                {language === 'en' ? 'This Week' : 'Esta Semana'}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('demo')}
              >
                {language === 'en' ? 'Export' : 'Exportar'}
              </Button>
              <Button
                size="sm"
                onClick={() => onNavigate('module-editor')}
                className="bg-primary text-primary-foreground"
              >
                + {language === 'en' ? 'Create New Case' : 'Crear Nuevo Caso'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-card h-[calc(100vh-80px)]">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6">
              {/* Navigation */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  {language === 'en' ? 'Business Modules' : 'Módulos de Negocio'}
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: 'cases', label: language === 'en' ? 'Case Inbox' : 'Bandeja Casos', count: 15, active: true },
                    { id: 'management', label: language === 'en' ? 'Case Management' : 'Gestión Casos', count: null },
                    { id: 'overview', label: language === 'en' ? 'Overview' : 'Resumen', count: null },
                    { id: 'insights', label: language === 'en' ? 'Analysis & Insights' : 'Análisis e Insights', count: null },
                    { id: 'copilot', label: language === 'en' ? 'AI Copilot' : 'IA Copiloto', count: null },
                    { id: 'studio', label: language === 'en' ? 'Drafting Studio' : 'Estudio Borradores', count: null },
                    { id: 'collaborate', label: language === 'en' ? 'Collaborate' : 'Colaborar', count: null },
                    { id: 'validate', label: language === 'en' ? 'Validate & Submit' : 'Validar y Enviar', count: null }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        item.active 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.count && (
                        <Badge variant="secondary" className="text-xs">
                          {item.count}
                        </Badge>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <Separator />

              {/* Additional Modules */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  {language === 'en' ? 'Command Center' : 'Centro Comando'}
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: 'feedback', label: language === 'en' ? 'Feedback Lab' : 'Lab Feedback' },
                    { id: 'admin', label: language === 'en' ? 'Administration' : 'Administración' },
                    { id: 'audit', label: language === 'en' ? 'Audit Log' : 'Log Auditoría' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            {/* Page Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {language === 'en' ? 'Case Inbox' : 'Bandeja de Casos'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Manage and review business intelligence cases and strategic initiatives'
                  : 'Gestiona y revisa casos de inteligencia de negocios e iniciativas estratégicas'
                }
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'TOTAL CASES' : 'CASOS TOTALES'}
                      </p>
                      <p className="text-3xl font-bold">{stats.totalCases}</p>
                      <p className="text-xs text-green-400 mt-1">
                        ↑ +2 {language === 'en' ? 'from yesterday' : 'desde ayer'}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-xl">📋</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'HIGH RISK' : 'ALTO RIESGO'}
                      </p>
                      <p className="text-3xl font-bold text-red-400">{stats.highRisk}</p>
                      <p className="text-xs text-red-400 mt-1">
                        {language === 'en' ? 'Requires attention' : 'Requiere atención'}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 text-xl">⚠️</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'OVERDUE' : 'VENCIDOS'}
                      </p>
                      <p className="text-3xl font-bold text-yellow-400">{stats.overdue}</p>
                      <p className="text-xs text-yellow-400 mt-1">
                        {language === 'en' ? 'Past SLA deadline' : 'Pasaron fecha límite SLA'}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 text-xl">⏰</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'AVG. RESOLUTION' : 'RESOLUCIÓN PROM.'}
                      </p>
                      <p className="text-3xl font-bold text-green-400">{stats.avgResolution}</p>
                      <p className="text-xs text-green-400 mt-1">
                        {language === 'en' ? 'This week' : 'Esta semana'}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-xl">✅</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder={language === 'en' ? 'Search cases, customers, or alert reasons...' : 'Buscar casos, clientes o razones de alerta...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={language === 'en' ? 'All Cases' : 'Todos Casos'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'en' ? 'All Cases' : 'Todos Casos'}</SelectItem>
                  <SelectItem value="active">{language === 'en' ? 'Active' : 'Activos'}</SelectItem>
                  <SelectItem value="pending">{language === 'en' ? 'Pending' : 'Pendientes'}</SelectItem>
                  <SelectItem value="completed">{language === 'en' ? 'Completed' : 'Completados'}</SelectItem>
                  <SelectItem value="overdue">{language === 'en' ? 'Overdue' : 'Vencidos'}</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={language === 'en' ? 'Status' : 'Estado'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'en' ? 'All Status' : 'Todo Estado'}</SelectItem>
                  <SelectItem value="active">{language === 'en' ? 'Active' : 'Activo'}</SelectItem>
                  <SelectItem value="pending">{language === 'en' ? 'Pending' : 'Pendiente'}</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={language === 'en' ? 'Risk Level' : 'Nivel Riesgo'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'en' ? 'All Risks' : 'Todos Riesgos'}</SelectItem>
                  <SelectItem value="high">{language === 'en' ? 'High' : 'Alto'}</SelectItem>
                  <SelectItem value="medium">{language === 'en' ? 'Medium' : 'Medio'}</SelectItem>
                  <SelectItem value="low">{language === 'en' ? 'Low' : 'Bajo'}</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <span className="text-sm">🔍</span>
                {language === 'en' ? 'More Filters' : 'Más Filtros'}
              </Button>
            </div>

            {/* Cases Table */}
            <Card className="bg-card border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Case ID' : 'ID Caso'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Title' : 'Título'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Module' : 'Módulo'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Risk' : 'Riesgo'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Assignee' : 'Asignado'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Status' : 'Estado'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        SLA
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Last Activity' : 'Última Actividad'}
                      </th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                        {language === 'en' ? 'Actions' : 'Acciones'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {filteredCases.map((case_, index) => (
                        <motion.tr
                          key={case_.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-b border-border hover:bg-accent/50 transition-colors"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-primary font-mono text-sm">{case_.id}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <div className="font-medium text-sm">{case_.title}</div>
                              <div className="text-xs text-muted-foreground mt-1">{case_.description}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-sm">{case_.module}</span>
                          </td>
                          <td className="p-4">
                            <Badge className={`text-xs ${getRiskColor(case_.riskLevel)}`}>
                              {case_.riskLevel.charAt(0).toUpperCase() + case_.riskLevel.slice(1)}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="text-xs bg-primary/20 text-primary">
                                  {case_.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{case_.assignee.initials}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={`text-xs ${getStatusColor(case_.status)}`}>
                              {case_.status === 'active' && (language === 'en' ? 'In Progress' : 'En Progreso')}
                              {case_.status === 'pending' && (language === 'en' ? 'Pending Review' : 'Revisión Pendiente')}
                              {case_.status === 'completed' && (language === 'en' ? 'Completed' : 'Completado')}
                              {case_.status === 'overdue' && (language === 'en' ? 'Overdue' : 'Vencido')}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              {case_.status === 'overdue' && <span className="text-red-400 text-xs">⚠️</span>}
                              <span className="text-sm">{case_.sla}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-muted-foreground">{case_.lastActivity}</span>
                          </td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm" className="text-xs">
                              ⋯
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Footer Stats */}
            <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>📊 {filteredCases.length} {language === 'en' ? 'cases pending review' : 'casos pendientes de revisión'}</span>
                <span>⚠️ {filteredCases.filter(c => c.riskLevel === 'high').length} {language === 'en' ? 'cases pending review - Consider prioritizing high-risk cases' : 'casos pendientes de revisión - Considera priorizar casos de alto riesgo'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegratedBusinessModuleCenter;