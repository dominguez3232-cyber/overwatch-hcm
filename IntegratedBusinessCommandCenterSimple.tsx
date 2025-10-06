import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Users, DollarSign, TrendingUp, Zap,
  BarChart3, Activity, Target, RefreshCw
} from 'lucide-react';

interface IntegratedBusinessCommandCenterSimpleProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

export const IntegratedBusinessCommandCenterSimple = React.memo(function IntegratedBusinessCommandCenterSimple({ 
  language, 
  currentMode, 
  onNavigate 
}: IntegratedBusinessCommandCenterSimpleProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              {language === 'en' ? 'Business Command Center' : 'Centro de Comando Empresarial'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Unified operations dashboard powered by OVERWATCH³ intelligence'
                : 'Panel de operaciones unificado impulsado por inteligencia OVERWATCH³'
              }
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            {language === 'en' ? 'Sync' : 'Sincronizar'}
          </Button>
          <Button
            onClick={() => onNavigate('dashboard')}
            variant="outline"
            size="sm"
          >
            {language === 'en' ? 'Advanced Analytics' : 'Analíticas Avanzadas'}
          </Button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Active Employees' : 'Empleados Activos'}
                </p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Monthly Revenue' : 'Ingresos Mensuales'}
                </p>
                <p className="text-2xl font-bold">$890K</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'KPI Performance' : 'Rendimiento KPI'}
                </p>
                <p className="text-2xl font-bold">92%</p>
              </div>
              <Target className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Pipeline Value' : 'Valor Pipeline'}
                </p>
                <p className="text-2xl font-bold">$3.2M</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health Overview */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-400" />
              {language === 'en' ? 'System Health' : 'Salud del Sistema'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>HCM Integration</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">99.8%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>ERP Sync</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">98.5%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>EPM Analytics</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">99.2%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>CRM Pipeline</span>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">95.1%</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              {language === 'en' ? 'Quick Actions' : 'Acciones Rápidas'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => onNavigate('employee-performance')}
                variant="outline"
                className="h-20 flex flex-col gap-2"
              >
                <Users className="w-5 h-5" />
                <span className="text-xs">
                  {language === 'en' ? 'Review Team' : 'Revisar Equipo'}
                </span>
              </Button>

              <Button
                onClick={() => onNavigate('roi-calculator')}
                variant="outline"
                className="h-20 flex flex-col gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="text-xs">
                  {language === 'en' ? 'Run Analysis' : 'Ejecutar Análisis'}
                </span>
              </Button>

              <Button
                onClick={() => onNavigate('strategic-discovery-sales')}
                variant="outline"
                className="h-20 flex flex-col gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs">
                  {language === 'en' ? 'Sales Pipeline' : 'Pipeline Ventas'}
                </span>
              </Button>

              <Button
                onClick={() => onNavigate('roadmap')}
                variant="outline"
                className="h-20 flex flex-col gap-2"
              >
                <Target className="w-5 h-5" />
                <span className="text-xs">
                  {language === 'en' ? 'Plan Projects' : 'Planificar Proyectos'}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Access */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Integrated Business Systems' : 'Sistemas Empresariales Integrados'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-4 gap-4">
            <Button
              onClick={() => onNavigate('human-capital-strategy')}
              variant="outline"
              className="h-24 flex flex-col gap-2"
            >
              <Users className="w-6 h-6 text-blue-400" />
              <span className="font-medium">HCM</span>
              <span className="text-xs text-muted-foreground">
                {language === 'en' ? 'Human Capital' : 'Capital Humano'}
              </span>
            </Button>

            <Button
              onClick={() => onNavigate('financial-reconciliation')}
              variant="outline"
              className="h-24 flex flex-col gap-2"
            >
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="font-medium">ERP</span>
              <span className="text-xs text-muted-foreground">
                {language === 'en' ? 'Financial Systems' : 'Sistemas Financieros'}
              </span>
            </Button>

            <Button
              onClick={() => onNavigate('assessment')}
              variant="outline"
              className="h-24 flex flex-col gap-2"
            >
              <Target className="w-6 h-6 text-purple-400" />
              <span className="font-medium">EPM</span>
              <span className="text-xs text-muted-foreground">
                {language === 'en' ? 'Performance Mgmt' : 'Gestión Rendimiento'}
              </span>
            </Button>

            <Button
              onClick={() => onNavigate('strategic-discovery-sales')}
              variant="outline"
              className="h-24 flex flex-col gap-2"
            >
              <TrendingUp className="w-6 h-6 text-orange-400" />
              <span className="font-medium">CRM</span>
              <span className="text-xs text-muted-foreground">
                {language === 'en' ? 'Customer Relations' : 'Relaciones Cliente'}
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});