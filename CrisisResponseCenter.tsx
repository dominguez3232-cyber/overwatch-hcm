import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertTriangle, Shield, Bell, Users, Clock, CheckCircle, Play, Pause } from 'lucide-react';

interface CrisisResponseCenterProps {
  language: 'en' | 'es';
  currentMode: string;
  onNavigate: (view: string) => void;
}

export function CrisisResponseCenter({ language, currentMode, onNavigate }: CrisisResponseCenterProps) {
  const [crisisLevel, setCrisisLevel] = useState('green');
  const [activeProtocol, setActiveProtocol] = useState(null);
  const [isResponseActive, setIsResponseActive] = useState(false);

  const labels = {
    en: {
      title: 'Crisis Response Command Center',
      subtitle: 'Real-time crisis management with automated response protocols',
      currentStatus: 'Current Crisis Level',
      responseProtocols: 'Response Protocols',
      stakeholders: 'Stakeholder Notifications',
      timeline: 'Response Timeline',
      activateResponse: 'Activate Crisis Response',
      deactivateResponse: 'Deactivate Response',
      green: 'Normal Operations',
      yellow: 'Elevated Alert',
      orange: 'High Alert',
      red: 'Critical Crisis',
      level1: 'Level 1: Minor Incident',
      level2: 'Level 2: Significant Event',
      level3: 'Level 3: Major Crisis',
      level4: 'Level 4: Critical Emergency',
      immediate: 'Immediate (0-15 min)',
      shortTerm: 'Short-term (15min-2hr)',
      mediumTerm: 'Medium-term (2-24hr)',
      longTerm: 'Long-term (24hr+)',
      communication: 'Communication',
      operations: 'Operations',
      legal: 'Legal',
      finance: 'Finance'
    },
    es: {
      title: 'Centro de Comando de Respuesta a Crisis',
      subtitle: 'Gestión de crisis en tiempo real con protocolos de respuesta automatizados',
      currentStatus: 'Nivel Actual de Crisis',
      responseProtocols: 'Protocolos de Respuesta',
      stakeholders: 'Notificaciones a Stakeholders',
      timeline: 'Cronograma de Respuesta',
      activateResponse: 'Activar Respuesta a Crisis',
      deactivateResponse: 'Desactivar Respuesta',
      green: 'Operaciones Normales',
      yellow: 'Alerta Elevada',
      orange: 'Alerta Alta',
      red: 'Crisis Crítica',
      level1: 'Nivel 1: Incidente Menor',
      level2: 'Nivel 2: Evento Significativo',
      level3: 'Nivel 3: Crisis Mayor',
      level4: 'Nivel 4: Emergencia Crítica',
      immediate: 'Inmediato (0-15 min)',
      shortTerm: 'Corto plazo (15min-2hr)',
      mediumTerm: 'Mediano plazo (2-24hr)',
      longTerm: 'Largo plazo (24hr+)',
      communication: 'Comunicación',
      operations: 'Operaciones',
      legal: 'Legal',
      finance: 'Finanzas'
    }
  };

  const crisisLevels = [
    { id: 'green', label: labels[language].green, color: 'bg-green-500', severity: 0 },
    { id: 'yellow', label: labels[language].yellow, color: 'bg-yellow-500', severity: 1 },
    { id: 'orange', label: labels[language].orange, color: 'bg-orange-500', severity: 2 },
    { id: 'red', label: labels[language].red, color: 'bg-red-500', severity: 3 }
  ];

  const responseProtocols = [
    {
      id: 'hr-incident',
      title: language === 'en' ? 'HR Incident Protocol' : 'Protocolo de Incidente de RH',
      description: language === 'en' 
        ? 'Employee relations, harassment, or workplace safety incidents'
        : 'Relaciones de empleados, acoso o incidentes de seguridad laboral',
      category: 'operations',
      severity: 1,
      timeline: 'immediate',
      actions: [
        language === 'en' ? 'Secure affected area' : 'Asegurar área afectada',
        language === 'en' ? 'Document incident details' : 'Documentar detalles del incidente',
        language === 'en' ? 'Notify legal team' : 'Notificar al equipo legal',
        language === 'en' ? 'Implement containment measures' : 'Implementar medidas de contención'
      ]
    },
    {
      id: 'data-breach',
      title: language === 'en' ? 'Data Breach Response' : 'Respuesta a Violación de Datos',
      description: language === 'en' 
        ? 'Unauthorized access to employee or company data'
        : 'Acceso no autorizado a datos de empleados o empresa',
      category: 'legal',
      severity: 3,
      timeline: 'immediate',
      actions: [
        language === 'en' ? 'Isolate affected systems' : 'Aislar sistemas afectados',
        language === 'en' ? 'Assess scope of breach' : 'Evaluar alcance de la violación',
        language === 'en' ? 'Notify authorities within 72 hours' : 'Notificar a autoridades dentro de 72 horas',
        language === 'en' ? 'Implement recovery procedures' : 'Implementar procedimientos de recuperación'
      ]
    },
    {
      id: 'financial-crisis',
      title: language === 'en' ? 'Financial Crisis Protocol' : 'Protocolo de Crisis Financiera',
      description: language === 'en' 
        ? 'Cash flow issues, funding problems, or major financial losses'
        : 'Problemas de flujo de efectivo, problemas de financiamiento o pérdidas financieras importantes',
      category: 'finance',
      severity: 2,
      timeline: 'shortTerm',
      actions: [
        language === 'en' ? 'Assess financial position' : 'Evaluar posición financiera',
        language === 'en' ? 'Prioritize critical payments' : 'Priorizar pagos críticos',
        language === 'en' ? 'Communicate with stakeholders' : 'Comunicarse con stakeholders',
        language === 'en' ? 'Implement cost reduction measures' : 'Implementar medidas de reducción de costos'
      ]
    },
    {
      id: 'reputation-crisis',
      title: language === 'en' ? 'Reputation Management' : 'Gestión de Reputación',
      description: language === 'en' 
        ? 'Negative publicity, social media backlash, or brand damage'
        : 'Publicidad negativa, reacción en redes sociales o daño a la marca',
      category: 'communication',
      severity: 2,
      timeline: 'immediate',
      actions: [
        language === 'en' ? 'Monitor social media mentions' : 'Monitorear menciones en redes sociales',
        language === 'en' ? 'Prepare official statement' : 'Preparar declaración oficial',
        language === 'en' ? 'Engage crisis communications team' : 'Involucrar al equipo de comunicaciones de crisis',
        language === 'en' ? 'Coordinate media response' : 'Coordinar respuesta de medios'
      ]
    }
  ];

  const stakeholderGroups = [
    { id: 'employees', name: language === 'en' ? 'Employees' : 'Empleados', priority: 'high' },
    { id: 'investors', name: language === 'en' ? 'Investors' : 'Inversores', priority: 'high' },
    { id: 'customers', name: language === 'en' ? 'Customers' : 'Clientes', priority: 'medium' },
    { id: 'media', name: language === 'en' ? 'Media' : 'Medios', priority: 'medium' },
    { id: 'regulators', name: language === 'en' ? 'Regulators' : 'Reguladores', priority: 'high' },
    { id: 'partners', name: language === 'en' ? 'Partners' : 'Socios', priority: 'medium' }
  ];

  const getLevelColor = (level: string) => {
    const levelObj = crisisLevels.find(l => l.id === level);
    return levelObj?.color || 'bg-gray-500';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'communication': return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'operations': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'legal': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'finance': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{labels[language].title}</h1>
            <p className="text-muted-foreground">{labels[language].subtitle}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="secondary">Real-time Monitoring</Badge>
          <Badge variant="secondary">Automated Protocols</Badge>
          <Badge variant="secondary">Stakeholder Management</Badge>
        </div>
      </div>

      {/* Crisis Status Dashboard */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 col-span-2">
          <h3 className="text-lg font-bold mb-4">{labels[language].currentStatus}</h3>
          
          {/* Status Indicators */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {crisisLevels.map((level) => (
              <div
                key={level.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  crisisLevel === level.id
                    ? 'border-current opacity-100'
                    : 'border-gray-200 dark:border-gray-700 opacity-60'
                }`}
                onClick={() => setCrisisLevel(level.id)}
              >
                <div className={`w-4 h-4 rounded-full ${level.color} mb-2`}></div>
                <div className="text-sm font-medium">{level.label}</div>
              </div>
            ))}
          </div>

          {/* Crisis Response Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              {isResponseActive ? (
                <Pause className="w-5 h-5 text-red-500" />
              ) : (
                <Play className="w-5 h-5 text-green-500" />
              )}
              <span className="font-medium">
                {isResponseActive ? labels[language].deactivateResponse : labels[language].activateResponse}
              </span>
            </div>
            <Button
              onClick={() => setIsResponseActive(!isResponseActive)}
              variant={isResponseActive ? 'destructive' : 'default'}
              size="sm"
            >
              {isResponseActive ? 'Deactivate' : 'Activate'}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-yellow-500" />
            {labels[language].stakeholders}
          </h3>
          <div className="space-y-3">
            {stakeholderGroups.map((group) => (
              <div key={group.id} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm">{group.name}</span>
                <Badge variant="outline" className={`text-xs ${getPriorityColor(group.priority)}`}>
                  {group.priority}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Response Protocols */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">{labels[language].responseProtocols}</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {responseProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                activeProtocol === protocol.id
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-border hover:border-red-300'
              }`}
              onClick={() => setActiveProtocol(activeProtocol === protocol.id ? null : protocol.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium">{protocol.title}</h4>
                <div className="flex gap-2">
                  <Badge className={getCategoryColor(protocol.category)}>
                    {labels[language][protocol.category as keyof typeof labels[typeof language]]}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {labels[language][protocol.timeline as keyof typeof labels[typeof language]]}
                  </Badge>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {protocol.description}
              </p>

              {activeProtocol === protocol.id && (
                <div className="pt-3 border-t">
                  <h5 className="font-medium mb-2 text-sm">Action Items:</h5>
                  <ul className="space-y-1">
                    {protocol.actions.map((action, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                  <Button size="sm" className="mt-3">
                    Initiate Protocol
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline View */}
      {isResponseActive && (
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            {labels[language].timeline}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Crisis Response Activated</div>
                <div className="text-xs text-muted-foreground">Just now</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Stakeholder Notifications Sent</div>
                <div className="text-xs text-muted-foreground">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-sm">Crisis Team Assembled</div>
                <div className="text-xs text-muted-foreground">5 minutes ago</div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Navigation Actions */}
      <div className="flex gap-4 pt-6 border-t">
        <Button onClick={() => onNavigate('business-continuity-planning')} variant="outline">
          {language === 'en' ? 'Business Continuity Planning →' : 'Planificación de Continuidad →'}
        </Button>
        <Button onClick={() => onNavigate('stakeholder-communication')} variant="outline">
          {language === 'en' ? 'Crisis Communication →' : 'Comunicación de Crisis →'}
        </Button>
      </div>
    </div>
  );
}