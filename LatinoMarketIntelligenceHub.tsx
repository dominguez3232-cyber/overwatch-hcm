import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Globe, TrendingUp, BarChart3, Users, Target, MapPin, DollarSign } from 'lucide-react';

interface LatinoMarketIntelligenceHubProps {
  language: 'en' | 'es';
  currentMode: string;
  onNavigate: (view: string) => void;
}

export function LatinoMarketIntelligenceHub({ language, currentMode, onNavigate }: LatinoMarketIntelligenceHubProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const labels = {
    en: {
      title: 'Latino Market Intelligence Hub',
      subtitle: 'Market analysis, cultural insights, and expansion strategies for Latino markets',
      overview: 'Market Overview',
      insights: 'Cultural Insights',
      strategies: 'Expansion Strategies',
      demographics: 'Demographics',
      opportunities: 'Market Opportunities',
      challenges: 'Key Challenges',
      recommendations: 'Strategic Recommendations',
      marketSize: 'Market Size',
      growthRate: 'Growth Rate',
      keySegments: 'Key Segments',
      culturalFactors: 'Cultural Factors',
      businessPractices: 'Business Practices',
      communicationStyles: 'Communication Styles',
      entryStrategies: 'Entry Strategies',
      partnerships: 'Strategic Partnerships',
      localization: 'Localization Requirements'
    },
    es: {
      title: 'Centro de Inteligencia del Mercado Latino',
      subtitle: 'Análisis de mercado, insights culturales y estrategias de expansión para mercados latinos',
      overview: 'Resumen del Mercado',
      insights: 'Insights Culturales',
      strategies: 'Estrategias de Expansión',
      demographics: 'Demografía',
      opportunities: 'Oportunidades de Mercado',
      challenges: 'Desafíos Clave',
      recommendations: 'Recomendaciones Estratégicas',
      marketSize: 'Tamaño del Mercado',
      growthRate: 'Tasa de Crecimiento',
      keySegments: 'Segmentos Clave',
      culturalFactors: 'Factores Culturales',
      businessPractices: 'Prácticas Comerciales',
      communicationStyles: 'Estilos de Comunicación',
      entryStrategies: 'Estrategias de Entrada',
      partnerships: 'Alianzas Estratégicas',
      localization: 'Requisitos de Localización'
    }
  };

  const marketData = {
    marketSize: '$2.8T',
    growthRate: '4.2%',
    keyMarkets: ['Mexico', 'Brazil', 'Colombia', 'Argentina', 'US Hispanic'],
    segments: ['Professional Services', 'Technology', 'Financial Services', 'Healthcare', 'Education']
  };

  return (
    <div className="space-y-6 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{labels[language].title}</h1>
            <p className="text-muted-foreground">{labels[language].subtitle}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="secondary">Cross-Border Operations</Badge>
          <Badge variant="secondary">Latino Market Focus</Badge>
          <Badge variant="secondary">Cultural Intelligence</Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6">
        {['overview', 'insights', 'strategies'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab)}
            size="sm"
          >
            {labels[language][tab as keyof typeof labels[typeof language]]}
          </Button>
        ))}
      </div>

      {/* Market Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
              {labels[language].demographics}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-500">{marketData.marketSize}</div>
                <div className="text-sm text-muted-foreground">{labels[language].marketSize}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-500">{marketData.growthRate}</div>
                <div className="text-sm text-muted-foreground">{labels[language].growthRate}</div>
              </div>
            </div>
            
            <h4 className="font-medium mt-6 mb-3">{labels[language].keySegments}</h4>
            <div className="space-y-2">
              {marketData.segments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <span className="text-sm">{segment}</span>
                  <Badge variant="outline" className="text-xs">High Growth</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-500" />
              {labels[language].opportunities}
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                <h4 className="font-medium text-emerald-700 dark:text-emerald-300 mb-2">Bilingual Workforce Demand</h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  {language === 'en' 
                    ? 'Growing demand for bilingual HR solutions across US and LATAM markets'
                    : 'Creciente demanda de soluciones de RH bilingües en mercados de EE.UU. y LATAM'
                  }
                </p>
              </div>
              
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Cross-Border Operations</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {language === 'en' 
                    ? 'Streamlined compliance and operations for US-LATAM business expansion'
                    : 'Cumplimiento y operaciones simplificadas para expansión empresarial EE.UU.-LATAM'
                  }
                </p>
              </div>
              
              <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Cultural Intelligence</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {language === 'en' 
                    ? 'AI-powered cultural adaptation for business practices and communication'
                    : 'Adaptación cultural impulsada por IA para prácticas comerciales y comunicación'
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Cultural Insights Tab */}
      {activeTab === 'insights' && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-500" />
              {labels[language].culturalFactors}
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Family-Centric Values</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Strong emphasis on family and work-life balance'
                    : 'Fuerte énfasis en la familia y el equilibrio trabajo-vida'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Relationship-Based Business</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Trust and personal relationships drive business decisions'
                    : 'La confianza y las relaciones personales impulsan las decisiones comerciales'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Hierarchical Respect</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Respect for authority and seniority in organizational structures'
                    : 'Respeto por la autoridad y la antigüedad en estructuras organizacionales'
                  }
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-500" />
              {labels[language].businessPractices}
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Long-term Partnerships</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Preference for long-term business relationships over transactional deals'
                    : 'Preferencia por relaciones comerciales a largo plazo sobre acuerdos transaccionales'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Face-to-Face Meetings</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'In-person meetings are highly valued for important business discussions'
                    : 'Las reuniones presenciales son muy valoradas para discusiones comerciales importantes'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Flexible Time Orientation</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'More flexible approach to time and scheduling in business contexts'
                    : 'Enfoque más flexible hacia el tiempo y la programación en contextos comerciales'
                  }
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-500" />
              {labels[language].communicationStyles}
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">High-Context Communication</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Meaning is conveyed through context, non-verbal cues, and relationships'
                    : 'El significado se transmite a través del contexto, señales no verbales y relaciones'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Indirect Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Feedback is often given indirectly to preserve harmony and dignity'
                    : 'La retroalimentación se da a menudo indirectamente para preservar la armonía y dignidad'
                  }
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Formal Address</h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Initial formal address with gradual transition to informal as trust builds'
                    : 'Trato formal inicial con transición gradual a informal mientras se construye confianza'
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Expansion Strategies Tab */}
      {activeTab === 'strategies' && (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-500" />
              {labels[language].entryStrategies}
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border border-emerald-200 rounded-lg">
                  <h4 className="font-medium text-emerald-700 dark:text-emerald-300 mb-2">Partnership Strategy</h4>
                  <p className="text-sm mb-3">
                    {language === 'en' 
                      ? 'Form strategic partnerships with local HR consultancies and business networks'
                      : 'Formar alianzas estratégicas con consultorías de RH locales y redes empresariales'
                    }
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Low Risk</Badge>
                    <Badge variant="outline" className="text-xs">Fast Entry</Badge>
                  </div>
                </div>
                
                <div className="p-4 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Direct Investment</h4>
                  <p className="text-sm mb-3">
                    {language === 'en' 
                      ? 'Establish direct operations with local teams and infrastructure'
                      : 'Establecer operaciones directas con equipos locales e infraestructura'
                    }
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">High Control</Badge>
                    <Badge variant="outline" className="text-xs">Long-term</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Licensing Model</h4>
                  <p className="text-sm mb-3">
                    {language === 'en' 
                      ? 'License platform technology to established local HR service providers'
                      : 'Licenciar tecnología de plataforma a proveedores de servicios de RH locales establecidos'
                    }
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Scalable</Badge>
                    <Badge variant="outline" className="text-xs">Rapid Expansion</Badge>
                  </div>
                </div>
                
                <div className="p-4 border border-orange-200 rounded-lg">
                  <h4 className="font-medium text-orange-700 dark:text-orange-300 mb-2">Acquisition Strategy</h4>
                  <p className="text-sm mb-3">
                    {language === 'en' 
                      ? 'Acquire existing HR technology companies in target markets'
                      : 'Adquirir empresas de tecnología de RH existentes en mercados objetivo'
                    }
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Immediate Presence</Badge>
                    <Badge variant="outline" className="text-xs">Market Share</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              {labels[language].recommendations}
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Phase 1: Foundation (6 months)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {language === 'en' ? 'Market research and cultural analysis' : 'Investigación de mercado y análisis cultural'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {language === 'en' ? 'Strategic partnership identification' : 'Identificación de alianzas estratégicas'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {language === 'en' ? 'Bilingual platform localization' : 'Localización de plataforma bilingüe'}
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Phase 2: Entry (12 months)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {language === 'en' ? 'Pilot program with key partners' : 'Programa piloto con socios clave'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {language === 'en' ? 'Local team establishment' : 'Establecimiento de equipo local'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {language === 'en' ? 'Compliance and regulatory setup' : 'Configuración de cumplimiento y regulaciones'}
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Navigation Actions */}
      <div className="flex gap-4 pt-6 border-t">
        <Button onClick={() => onNavigate('cross-border-compliance')} variant="outline">
          {language === 'en' ? 'Cross-Border Compliance →' : 'Cumplimiento Transfronterizo →'}
        </Button>
        <Button onClick={() => onNavigate('cultural-adaptation-engine')} variant="outline">
          {language === 'en' ? 'Cultural Adaptation Engine →' : 'Motor de Adaptación Cultural →'}
        </Button>
        <Button onClick={() => onNavigate('bilingual-workforce-management')} variant="outline">
          {language === 'en' ? 'Bilingual Workforce →' : 'Fuerza Laboral Bilingüe →'}
        </Button>
      </div>
    </div>
  );
}