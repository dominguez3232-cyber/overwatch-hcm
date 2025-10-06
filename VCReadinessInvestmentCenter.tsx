import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';

interface VCReadinessInvestmentCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

interface SaaSMetrics {
  arr: number;
  mrr: number;
  nrr: number;
  grr: number;
  churn: number;
  ltv: number;
  cac: number;
  grossMargin: number;
  burnMultiple: number;
  magicNumber: number;
  paybackPeriod: number;
}

interface CompanyProfile {
  stage: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth';
  sector: 'hcm' | 'erp' | 'epm' | 'crm';
  headcount: number;
  annualRevenue: number;
  fundingGoal: number;
}

export function VCReadinessInvestmentCenter({ language, currentMode, onNavigate }: VCReadinessInvestmentCenterProps) {
  const [activeTab, setActiveTab] = useState('assessment');
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>({
    stage: 'seed',
    sector: 'hcm',
    headcount: 25,
    annualRevenue: 2000000,
    fundingGoal: 5000000
  });
  
  const [metrics, setMetrics] = useState<SaaSMetrics>({
    arr: 1200000,
    mrr: 100000,
    nrr: 115,
    grr: 92,
    churn: 3.5,
    ltv: 180000,
    cac: 45000,
    grossMargin: 78,
    burnMultiple: 1.8,
    magicNumber: 0.7,
    paybackPeriod: 14
  });

  const [selectedCompetitor, setSelectedCompetitor] = useState('workday');

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // VC Readiness Score Calculation
  const calculateVCReadiness = () => {
    const benchmarks = {
      hcm: {
        nrr: 115, grr: 90, churn: 5, ltvCac: 3, grossMargin: 75, 
        burnMultiple: 1.5, magicNumber: 0.5, paybackPeriod: 12
      }
    };

    const bench = benchmarks[companyProfile.sector];
    let score = 0;
    let maxScore = 0;

    // NRR Score (20 points)
    maxScore += 20;
    if (metrics.nrr >= bench.nrr + 15) score += 20;
    else if (metrics.nrr >= bench.nrr + 5) score += 15;
    else if (metrics.nrr >= bench.nrr) score += 10;
    else if (metrics.nrr >= bench.nrr - 5) score += 5;

    // Churn Score (15 points)
    maxScore += 15;
    if (metrics.churn <= bench.churn - 2) score += 15;
    else if (metrics.churn <= bench.churn - 1) score += 12;
    else if (metrics.churn <= bench.churn) score += 8;
    else if (metrics.churn <= bench.churn + 1) score += 4;

    // LTV:CAC Score (15 points)
    const ltvCacRatio = metrics.ltv / metrics.cac;
    maxScore += 15;
    if (ltvCacRatio >= bench.ltvCac + 2) score += 15;
    else if (ltvCacRatio >= bench.ltvCac + 1) score += 12;
    else if (ltvCacRatio >= bench.ltvCac) score += 8;
    else if (ltvCacRatio >= bench.ltvCac - 0.5) score += 4;

    // Gross Margin Score (15 points)
    maxScore += 15;
    if (metrics.grossMargin >= bench.grossMargin + 10) score += 15;
    else if (metrics.grossMargin >= bench.grossMargin + 5) score += 12;
    else if (metrics.grossMargin >= bench.grossMargin) score += 8;
    else if (metrics.grossMargin >= bench.grossMargin - 5) score += 4;

    // Capital Efficiency Score (15 points)
    maxScore += 15;
    if (metrics.burnMultiple <= bench.burnMultiple - 0.5) score += 15;
    else if (metrics.burnMultiple <= bench.burnMultiple - 0.2) score += 12;
    else if (metrics.burnMultiple <= bench.burnMultiple) score += 8;
    else if (metrics.burnMultiple <= bench.burnMultiple + 0.3) score += 4;

    // ARR Growth Score (10 points)
    maxScore += 10;
    const arrGrowthRate = companyProfile.stage === 'seed' ? 200 : 
                         companyProfile.stage === 'series-a' ? 150 : 100;
    if (metrics.arr >= 1000000) score += 10;
    else if (metrics.arr >= 500000) score += 7;
    else if (metrics.arr >= 100000) score += 4;

    // Payback Period Score (10 points)
    maxScore += 10;
    if (metrics.paybackPeriod <= bench.paybackPeriod - 3) score += 10;
    else if (metrics.paybackPeriod <= bench.paybackPeriod - 1) score += 7;
    else if (metrics.paybackPeriod <= bench.paybackPeriod) score += 5;
    else if (metrics.paybackPeriod <= bench.paybackPeriod + 3) score += 2;

    return Math.round((score / maxScore) * 100);
  };

  const vcReadinessScore = calculateVCReadiness();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 80) return t('Investment Ready', 'Listo para Inversión');
    if (score >= 60) return t('Nearly Ready', 'Casi Listo');
    return t('Needs Improvement', 'Necesita Mejoras');
  };

  // Market Intelligence Data
  const marketIntelligence = {
    hcm: {
      marketSize: '$65B by 2032',
      cagr: '9.6%',
      keyTrends: [
        'AI-driven recruiting and compliance',
        'Global payroll solutions',
        'Employee engagement analytics',
        'DEI data-driven initiatives',
        'Remote/hybrid workforce management'
      ],
      competitors: [
        { name: 'Workday', marketCap: '$58B', revenue: '$8.45B', nrr: '108%' },
        { name: 'Ceridian', marketCap: '$12B', revenue: '$1.4B', nrr: '111%' },
        { name: 'Gusto', valuation: '$9.5B', revenue: '$200M+', nrr: '115%' },
        { name: 'Rippling', valuation: '$13.5B', revenue: '$270M+', nrr: '120%' }
      ]
    }
  };

  // VC Criteria by Stage
  const vcCriteria = {
    'pre-seed': {
      focus: ['Product-Market Fit', 'Team Expertise', 'Vision'],
      metrics: ['User Traction', 'Early Revenue', 'Customer Feedback'],
      funding: '$100K - $1M',
      timeline: '6-12 months runway'
    },
    'seed': {
      focus: ['Scalable Product', 'Revenue Growth', 'Market Validation'],
      metrics: ['$100K+ ARR', 'Customer Retention', 'Unit Economics'],
      funding: '$1M - $5M',
      timeline: '18-24 months runway'
    },
    'series-a': {
      focus: ['Repeatable Sales', 'Market Leadership', 'Scalable Operations'],
      metrics: ['$1M+ ARR', '100%+ NRR', 'LTV:CAC > 3:1'],
      funding: '$5M - $20M',
      timeline: '24-36 months runway'
    },
    'series-b': {
      focus: ['Market Expansion', 'Operational Excellence', 'Path to IPO'],
      metrics: ['$10M+ ARR', '110%+ NRR', 'Rule of 40'],
      funding: '$15M - $50M',
      timeline: '36+ months runway'
    },
    'growth': {
      focus: ['Market Dominance', 'Profitability', 'Global Expansion'],
      metrics: ['$50M+ ARR', '120%+ NRR', 'Positive Cash Flow'],
      funding: '$50M+',
      timeline: 'Path to IPO/Exit'
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-6 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <span className="text-2xl">💎</span>
                {t('VC Readiness & Investment Strategy Center', 'Centro de Preparación VC y Estrategia de Inversión')}
              </h1>
              <p className="text-slate-300">
                {t(
                  'Advisory-grade investment readiness assessment and strategic positioning for SaaS startups',
                  'Evaluación de preparación para inversión de grado asesor y posicionamiento estratégico para startups SaaS'
                )}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">
                <span className={getScoreColor(vcReadinessScore)}>{vcReadinessScore}%</span>
              </div>
              <div className="text-sm text-slate-400">
                {getScoreStatus(vcReadinessScore)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 bg-slate-800">
            <TabsTrigger value="assessment">
              {t('VC Readiness Assessment', 'Evaluación Preparación VC')}
            </TabsTrigger>
            <TabsTrigger value="benchmarks">
              {t('SaaS Benchmarks', 'Benchmarks SaaS')}
            </TabsTrigger>
            <TabsTrigger value="market-intelligence">
              {t('Market Intelligence', 'Inteligencia de Mercado')}
            </TabsTrigger>
            <TabsTrigger value="positioning">
              {t('Strategic Positioning', 'Posicionamiento Estratégico')}
            </TabsTrigger>
            <TabsTrigger value="funding-strategy">
              {t('Funding Strategy', 'Estrategia de Financiamiento')}
            </TabsTrigger>
          </TabsList>

          {/* VC Readiness Assessment */}
          <TabsContent value="assessment" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Company Profile */}
              <Card className="p-6 bg-slate-800 border-slate-700">
                <h3 className="text-xl font-bold mb-4">
                  {t('Company Profile', 'Perfil de Empresa')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">{t('Funding Stage', 'Etapa de Financiamiento')}</label>
                    <Select value={companyProfile.stage} onValueChange={(value: any) => 
                      setCompanyProfile(prev => ({ ...prev, stage: value }))}>
                      <SelectTrigger className="bg-slate-700 border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="series-b">Series B</SelectItem>
                        <SelectItem value="growth">Growth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">{t('SaaS Sector', 'Sector SaaS')}</label>
                    <Select value={companyProfile.sector} onValueChange={(value: any) => 
                      setCompanyProfile(prev => ({ ...prev, sector: value }))}>
                      <SelectTrigger className="bg-slate-700 border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="hcm">HCM - Human Capital Management</SelectItem>
                        <SelectItem value="erp">ERP - Enterprise Resource Planning</SelectItem>
                        <SelectItem value="epm">EPM - Enterprise Performance Management</SelectItem>
                        <SelectItem value="crm">CRM - Customer Relationship Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">{t('Annual Revenue ($)', 'Ingresos Anuales ($)')}</label>
                    <Input 
                      type="number" 
                      value={companyProfile.annualRevenue}
                      onChange={(e) => setCompanyProfile(prev => ({ ...prev, annualRevenue: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">{t('Funding Goal ($)', 'Meta de Financiamiento ($)')}</label>
                    <Input 
                      type="number" 
                      value={companyProfile.fundingGoal}
                      onChange={(e) => setCompanyProfile(prev => ({ ...prev, fundingGoal: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600"
                    />
                  </div>
                </div>
              </Card>

              {/* SaaS Metrics Input */}
              <Card className="p-6 bg-slate-800 border-slate-700">
                <h3 className="text-xl font-bold mb-4">
                  {t('Current SaaS Metrics', 'Métricas SaaS Actuales')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">ARR ($)</label>
                    <Input 
                      type="number" 
                      value={metrics.arr}
                      onChange={(e) => setMetrics(prev => ({ ...prev, arr: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">NRR (%)</label>
                    <Input 
                      type="number" 
                      value={metrics.nrr}
                      onChange={(e) => setMetrics(prev => ({ ...prev, nrr: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">{t('Churn (%)', 'Abandono (%)')}</label>
                    <Input 
                      type="number" 
                      step="0.1"
                      value={metrics.churn}
                      onChange={(e) => setMetrics(prev => ({ ...prev, churn: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">LTV ($)</label>
                    <Input 
                      type="number" 
                      value={metrics.ltv}
                      onChange={(e) => setMetrics(prev => ({ ...prev, ltv: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">CAC ($)</label>
                    <Input 
                      type="number" 
                      value={metrics.cac}
                      onChange={(e) => setMetrics(prev => ({ ...prev, cac: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">{t('Gross Margin (%)', 'Margen Bruto (%)')}</label>
                    <Input 
                      type="number" 
                      value={metrics.grossMargin}
                      onChange={(e) => setMetrics(prev => ({ ...prev, grossMargin: Number(e.target.value) }))}
                      className="bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Readiness Score */}
            <Card className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {t('VC Readiness Score', 'Puntuación Preparación VC')}
                </h3>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(vcReadinessScore)}`}>
                    {vcReadinessScore}%
                  </div>
                  <div className="text-slate-300">
                    {getScoreStatus(vcReadinessScore)}
                  </div>
                </div>
              </div>
              
              <Progress value={vcReadinessScore} className="h-3 mb-4" />
              
              <div className="grid lg:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-2">{t('Strengths', 'Fortalezas')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    {metrics.nrr >= 115 && <li>• {t('Strong Net Revenue Retention', 'Retención Neta de Ingresos Sólida')}</li>}
                    {metrics.ltv / metrics.cac >= 3 && <li>• {t('Healthy LTV:CAC Ratio', 'Ratio LTV:CAC Saludable')}</li>}
                    {metrics.grossMargin >= 75 && <li>• {t('Strong Unit Economics', 'Economía Unitaria Sólida')}</li>}
                    {metrics.churn <= 5 && <li>• {t('Low Customer Churn', 'Bajo Abandono de Clientes')}</li>}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">{t('Areas for Improvement', 'Áreas de Mejora')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    {metrics.nrr < 110 && <li>• {t('Improve Net Revenue Retention', 'Mejorar Retención Neta de Ingresos')}</li>}
                    {metrics.ltv / metrics.cac < 3 && <li>• {t('Optimize LTV:CAC Ratio', 'Optimizar Ratio LTV:CAC')}</li>}
                    {metrics.burnMultiple > 1.5 && <li>• {t('Improve Capital Efficiency', 'Mejorar Eficiencia de Capital')}</li>}
                    {metrics.paybackPeriod > 12 && <li>• {t('Reduce Payback Period', 'Reducir Período de Recuperación')}</li>}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">{t('Next Steps', 'Próximos Pasos')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• {t('Prepare VC data room', 'Preparar sala de datos VC')}</li>
                    <li>• {t('Customer reference calls', 'Llamadas de referencia de clientes')}</li>
                    <li>• {t('Financial model refinement', 'Refinamiento del modelo financiero')}</li>
                    <li>• {t('Market positioning deck', 'Presentación de posicionamiento de mercado')}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* SaaS Benchmarks */}
          <TabsContent value="benchmarks" className="space-y-6">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold mb-4">
                {t('HCM SaaS Industry Benchmarks (2025)', 'Benchmarks de Industria HCM SaaS (2025)')}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3">{t('Metric', 'Métrica')}</th>
                      <th className="text-left py-3">{t('Benchmark', 'Benchmark')}</th>
                      <th className="text-left py-3">{t('Your Score', 'Tu Puntuación')}</th>
                      <th className="text-left py-3">{t('Status', 'Estado')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="py-3">Net Revenue Retention</td>
                      <td className="py-3">110-120%+</td>
                      <td className="py-3">{metrics.nrr}%</td>
                      <td className="py-3">
                        <Badge variant={metrics.nrr >= 115 ? "default" : metrics.nrr >= 110 ? "secondary" : "destructive"}>
                          {metrics.nrr >= 115 ? t('Excellent', 'Excelente') : 
                           metrics.nrr >= 110 ? t('Good', 'Bueno') : t('Needs Work', 'Necesita Trabajo')}
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">Customer Churn (Monthly)</td>
                      <td className="py-3">&lt;5%</td>
                      <td className="py-3">{metrics.churn}%</td>
                      <td className="py-3">
                        <Badge variant={metrics.churn <= 3 ? "default" : metrics.churn <= 5 ? "secondary" : "destructive"}>
                          {metrics.churn <= 3 ? t('Excellent', 'Excelente') : 
                           metrics.churn <= 5 ? t('Good', 'Bueno') : t('Needs Work', 'Necesita Trabajo')}
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">LTV:CAC Ratio</td>
                      <td className="py-3">3:1+</td>
                      <td className="py-3">{(metrics.ltv / metrics.cac).toFixed(1)}:1</td>
                      <td className="py-3">
                        <Badge variant={metrics.ltv / metrics.cac >= 4 ? "default" : metrics.ltv / metrics.cac >= 3 ? "secondary" : "destructive"}>
                          {metrics.ltv / metrics.cac >= 4 ? t('Excellent', 'Excelente') : 
                           metrics.ltv / metrics.cac >= 3 ? t('Good', 'Bueno') : t('Needs Work', 'Necesita Trabajo')}
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">Gross Margin</td>
                      <td className="py-3">70-80%+</td>
                      <td className="py-3">{metrics.grossMargin}%</td>
                      <td className="py-3">
                        <Badge variant={metrics.grossMargin >= 80 ? "default" : metrics.grossMargin >= 70 ? "secondary" : "destructive"}>
                          {metrics.grossMargin >= 80 ? t('Excellent', 'Excelente') : 
                           metrics.grossMargin >= 70 ? t('Good', 'Bueno') : t('Needs Work', 'Necesita Trabajo')}
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Competitive Benchmarking */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold mb-4">
                {t('Competitive Benchmarking', 'Benchmarking Competitivo')}
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {marketIntelligence.hcm.competitors.map((competitor, index) => (
                  <div key={index} className="p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">{competitor.name}</h4>
                      <Badge variant="outline">{competitor.nrr} NRR</Badge>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>Revenue: {competitor.revenue}</div>
                      {'marketCap' in competitor && <div>Market Cap: {competitor.marketCap}</div>}
                      {'valuation' in competitor && <div>Valuation: {competitor.valuation}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Market Intelligence */}
          <TabsContent value="market-intelligence" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-slate-800 border-slate-700">
                <h3 className="text-xl font-bold mb-4">
                  {t('HCM SaaS Market Overview', 'Panorama del Mercado HCM SaaS')}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>{t('Market Size', 'Tamaño del Mercado')}</span>
                    <span className="font-bold text-green-400">{marketIntelligence.hcm.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAGR</span>
                    <span className="font-bold text-blue-400">{marketIntelligence.hcm.cagr}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{t('Key Trends', 'Tendencias Clave')}</h4>
                    <ul className="text-sm space-y-1 text-slate-300">
                      {marketIntelligence.hcm.keyTrends.map((trend, index) => (
                        <li key={index}>• {trend}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800 border-slate-700">
                <h3 className="text-xl font-bold mb-4">
                  {t('Investment Landscape', 'Panorama de Inversión')}
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-2">{t('Recent Funding Trends', 'Tendencias de Financiamiento Recientes')}</h4>
                    <ul className="text-sm space-y-1 text-slate-300">
                      <li>• {t('AI-powered HR tech raising at premium valuations', 'HR tech con IA recaudando valoraciones premium')}</li>
                      <li>• {t('Focus on compliance and global payroll solutions', 'Enfoque en cumplimiento y soluciones de nómina global')}</li>
                      <li>• {t('Growth-stage companies showing strong NRR expansion', 'Empresas en etapa de crecimiento mostrando fuerte expansión NRR')}</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">{t('VC Focus Areas', 'Áreas de Enfoque VC')}</h4>
                    <ul className="text-sm space-y-1 text-slate-300">
                      <li>• {t('Platform extensibility and ecosystem', 'Extensibilidad de plataforma y ecosistema')}</li>
                      <li>• {t('AI/ML for bias reduction and compliance', 'IA/ML para reducción de sesgo y cumplimiento')}</li>
                      <li>• {t('Multi-entity and international capabilities', 'Capacidades multi-entidad e internacionales')}</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* 2025 Market Dynamics */}
            <Card className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
              <h3 className="text-xl font-bold mb-4">
                {t('2025 Market Dynamics & VC Priorities', 'Dinámicas del Mercado 2025 y Prioridades VC')}
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-purple-400 mb-3">{t('AI & Automation', 'IA y Automatización')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• {t('97% of companies increasing recruitment tech spend', '97% de empresas aumentando gasto en tecnología de reclutamiento')}</li>
                    <li>• {t('AI bias litigation driving compliance focus', 'Litigios de sesgo de IA impulsando enfoque en cumplimiento')}</li>
                    <li>• {t('Generative AI for HR self-service', 'IA generativa para autoservicio de RH')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-400 mb-3">{t('Global Compliance', 'Cumplimiento Global')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• {t('GDPR and data privacy requirements', 'Requisitos de GDPR y privacidad de datos')}</li>
                    <li>• {t('Multi-jurisdictional payroll complexity', 'Complejidad de nómina multi-jurisdiccional')}</li>
                    <li>• {t('Remote work compliance frameworks', 'Marcos de cumplimiento de trabajo remoto')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-3">{t('Platform Strategy', 'Estrategia de Plataforma')}</h4>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• {t('Ecosystem and marketplace expansion', 'Expansión de ecosistema y marketplace')}</li>
                    <li>• {t('Integration depth with ERP/Finance', 'Profundidad de integración con ERP/Finanzas')}</li>
                    <li>• {t('Vertical-specific solutions', 'Soluciones específicas por vertical')}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Strategic Positioning */}
          <TabsContent value="positioning" className="space-y-6">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold mb-4">
                {t('OVERWATCH³ Strategic Positioning Analysis', 'Análisis de Posicionamiento Estratégico OVERWATCH³')}
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-3">{t('Competitive Advantages', 'Ventajas Competitivas')}</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">🧠 {t('Advisory-Grade Intelligence', 'Inteligencia de Grado Asesor')}</div>
                      <div className="text-sm text-slate-300">{t('McKinsey-style strategic insights built into HR operations', 'Insights estratégicos estilo McKinsey integrados en operaciones de RH')}</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">🌎 {t('Bilingual & Cross-Border', 'Bilingüe y Transfronterizo')}</div>
                      <div className="text-sm text-slate-300">{t('Native Spanish/English with Latino market focus', 'Español/Inglés nativo con enfoque en mercado Latino')}</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">♕ {t('Culture Force Multiplier', 'Multiplicador de Fuerza Cultural')}</div>
                      <div className="text-sm text-slate-300">{t('Culture as strategic advantage amplifying all business functions', 'Cultura como ventaja estratégica amplificando todas las funciones empresariales')}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-400 mb-3">{t('Market Differentiation', 'Diferenciación de Mercado')}</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">📊 {t('12-Layer Diagnostic Cockpit', 'Cabina de Diagnóstico de 12 Capas')}</div>
                      <div className="text-sm text-slate-300">{t('Comprehensive lifecycle mapping and risk assessment', 'Mapeo integral del ciclo de vida y evaluación de riesgos')}</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">🎯 {t('Persona-Driven Experience', 'Experiencia Dirigida por Personas')}</div>
                      <div className="text-sm text-slate-300">{t('Mode toggles for Founder, Trabajo, Accounting, Strategy personas', 'Alternar modos para personas Fundador, Trabajo, Contabilidad, Estrategia')}</div>
                    </div>
                    <div className="p-3 bg-slate-700 rounded">
                      <div className="font-semibold">🔗 {t('Unified HR-Finance-Culture', 'HR-Finanzas-Cultura Unificado')}</div>
                      <div className="text-sm text-slate-300">{t('Integrated platform eliminating vendor sprawl', 'Plataforma integrada eliminando dispersión de proveedores')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Value Proposition */}
            <Card className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
              <h3 className="text-xl font-bold mb-4">
                {t('Investment Value Proposition', 'Propuesta de Valor de Inversión')}
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$65B</div>
                  <div className="text-sm text-slate-300">{t('HCM SaaS Market by 2032', 'Mercado HCM SaaS para 2032')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">9.6%</div>
                  <div className="text-sm text-slate-300">{t('Market CAGR Growth Rate', 'Tasa de Crecimiento CAGR del Mercado')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">65M</div>
                  <div className="text-sm text-slate-300">{t('Latino Workers in US Market', 'Trabajadores Latinos en Mercado US')}</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Funding Strategy */}
          <TabsContent value="funding-strategy" className="space-y-6">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold mb-4">
                {t('Stage-Specific Funding Strategy', 'Estrategia de Financiamiento Específica por Etapa')}
              </h3>
              
              <div className="space-y-6">
                {Object.entries(vcCriteria).map(([stage, criteria]) => (
                  <div key={stage} className={`p-4 rounded-lg border-2 ${
                    companyProfile.stage === stage ? 'border-green-500 bg-green-500/10' : 'border-slate-600 bg-slate-700'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold capitalize">
                        {stage.replace('-', ' ')} {companyProfile.stage === stage && 
                        <Badge className="ml-2 bg-green-600">{t('Current Stage', 'Etapa Actual')}</Badge>}
                      </h4>
                      <div className="text-sm text-slate-300">{criteria.funding}</div>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-blue-400 mb-1">{t('Focus Areas', 'Áreas de Enfoque')}</div>
                        <ul className="text-slate-300 space-y-1">
                          {criteria.focus.map((item, index) => <li key={index}>• {item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-green-400 mb-1">{t('Key Metrics', 'Métricas Clave')}</div>
                        <ul className="text-slate-300 space-y-1">
                          {criteria.metrics.map((item, index) => <li key={index}>• {item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-400 mb-1">{t('Timeline', 'Cronograma')}</div>
                        <div className="text-slate-300">{criteria.timeline}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Plan */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold mb-4">
                {t('90-Day Funding Preparation Action Plan', 'Plan de Acción de Preparación de Financiamiento de 90 Días')}
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-3">{t('Days 1-30: Foundation', 'Días 1-30: Fundación')}</h4>
                  <ul className="text-sm space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      {t('Clean up SaaS metrics and reporting', 'Limpiar métricas SaaS y reportes')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      {t('Prepare comprehensive data room', 'Preparar sala de datos integral')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      {t('Identify reference customers', 'Identificar clientes de referencia')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      {t('Update financial projections', 'Actualizar proyecciones financieras')}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-400 mb-3">{t('Days 31-60: Positioning', 'Días 31-60: Posicionamiento')}</h4>
                  <ul className="text-sm space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">□</span>
                      {t('Create market positioning deck', 'Crear presentación de posicionamiento de mercado')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">□</span>
                      {t('Develop competitive analysis', 'Desarrollar análisis competitivo')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">□</span>
                      {t('Document unique value proposition', 'Documentar propuesta de valor única')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">□</span>
                      {t('Prepare demo environment', 'Preparar entorno de demostración')}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-purple-400 mb-3">{t('Days 61-90: Execution', 'Días 61-90: Ejecución')}</h4>
                  <ul className="text-sm space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">□</span>
                      {t('Target VC outreach and intros', 'Orientar alcance e introducciones VC')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">□</span>
                      {t('Schedule investor meetings', 'Programar reuniones con inversionistas')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">□</span>
                      {t('Conduct due diligence process', 'Conducir proceso de due diligence')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">□</span>
                      {t('Negotiate term sheets', 'Negociar hojas de términos')}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button 
            onClick={() => onNavigate('vc-supremacy-matrix')}
            className="bg-orange-600 hover:bg-orange-700"
          >
            {t('🏆 VC Supremacy Matrix', '🏆 Matriz de Supremacía VC')}
          </Button>
          <Button 
            onClick={() => onNavigate('strategic-frameworks')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {t('View Strategic Frameworks', 'Ver Marcos Estratégicos')}
          </Button>
          <Button 
            onClick={() => onNavigate('roi-calculator')}
            className="bg-green-600 hover:bg-green-700"
          >
            {t('Advanced ROI Modeling', 'Modelado ROI Avanzado')}
          </Button>
          <Button 
            onClick={() => onNavigate('industry-intel')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {t('Industry Intelligence', 'Inteligencia de Industria')}
          </Button>
        </div>
      </div>
    </div>
  );
}