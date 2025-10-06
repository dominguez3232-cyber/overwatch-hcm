import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

// OVERWATCH³ routing configuration
const overwatchConfig = {
  "trigger": {
    "title": "Catalyst Situations",
    "description": "Critical scenarios that require immediate strategic response",
    "color": "#dc2626", // Red for urgent situations
    "icon": "⚡",
    "routes": [
      {
        "id": "harassment-revenge",
        "title": "Harassment & Revenge",
        "description": "Strategic response protocols for workplace harassment and retaliation scenarios"
      },
      {
        "id": "crime-without-victim",
        "title": "Crime Without Victim",
        "description": "Addressing regulatory violations where no direct harm occurred"
      },
      {
        "id": "difficulty-risk",
        "title": "Difficulty Risk",
        "description": "Managing operational challenges that threaten business continuity"
      },
      {
        "id": "law-without-evidence",
        "title": "Law Without Evidence",
        "description": "Navigating legal situations with insufficient documentation"
      }
    ]
  },
  "science": {
    "title": "Human Systems",
    "description": "Evidence-based frameworks for understanding organizational behavior",
    "color": "#3b82f6", // Blue for analytical systems
    "icon": "🧠",
    "routes": [
      {
        "id": "psychology",
        "title": "Psychology",
        "description": "Individual behavior patterns and decision-making frameworks"
      },
      {
        "id": "sociology",
        "title": "Sociology",
        "description": "Group dynamics and organizational culture analysis"
      },
      {
        "id": "philosophy",
        "title": "Philosophy",
        "description": "Ethical frameworks and value-based decision systems"
      },
      {
        "id": "neuroscience",
        "title": "Neuroscience",
        "description": "Cognitive science applications for leadership effectiveness"
      }
    ]
  },
  "law": {
    "title": "Strategic Logic",
    "description": "Legal frameworks and strategic decision architectures",
    "color": "#7c3aed", // Purple for strategic thinking
    "icon": "⚖️",
    "routes": [
      {
        "id": "assumed-right",
        "title": "Assumed Right",
        "description": "Strategic presumptions and their legal implications"
      },
      {
        "id": "assumed-action",
        "title": "Assumed Action",
        "description": "Proactive legal positioning and preventive measures"
      },
      {
        "id": "assumed-risk",
        "title": "Assumed Risk",
        "description": "Risk assessment frameworks and liability management"
      },
      {
        "id": "reaction-nonreaction",
        "title": "Reaction vs Non-Reaction",
        "description": "Strategic response timing and intervention protocols"
      },
      {
        "id": "power",
        "title": "Power",
        "description": "Authority structures and influence mapping"
      }
    ]
  },
  "finance": {
    "title": "ROI Intelligence",
    "description": "Financial optimization and strategic investment frameworks",
    "color": "#059669", // Green for financial success
    "icon": "💰",
    "routes": [
      {
        "id": "strategic-spend",
        "title": "Strategic Spend",
        "description": "Investment prioritization and resource allocation"
      },
      {
        "id": "ethical-roi",
        "title": "Ethical ROI",
        "description": "Value creation through ethical business practices"
      },
      {
        "id": "trust-velocity",
        "title": "Trust Velocity",
        "description": "Accelerating stakeholder confidence and relationship building"
      },
      {
        "id": "burn-reduction",
        "title": "Burn Reduction",
        "description": "Operational efficiency and cost optimization strategies"
      },
      {
        "id": "adoption-lift",
        "title": "Adoption Lift",
        "description": "User engagement and platform utilization enhancement"
      }
    ]
  },
  "new": {
    "title": "Innovation Layer",
    "description": "Emerging opportunities and strategic expansion frameworks",
    "color": "#f59e0b", // Orange for innovation
    "icon": "🚀",
    "routes": [
      {
        "id": "market-entry",
        "title": "Market Entry",
        "description": "Strategic market penetration and competitive positioning"
      },
      {
        "id": "pricing-logic",
        "title": "Pricing Logic",
        "description": "Value-based pricing strategies and revenue optimization"
      },
      {
        "id": "team-formation",
        "title": "Team Formation",
        "description": "Strategic hiring and organizational design"
      },
      {
        "id": "coaching-overlay",
        "title": "Coaching Overlay",
        "description": "Leadership development and performance enhancement systems"
      }
    ]
  },
  "time": {
    "title": "Temporal Intelligence",
    "description": "Time-based strategic analysis and predictive modeling",
    "color": "#8b5cf6", // Violet for temporal concepts
    "icon": "⏰",
    "routes": [
      {
        "id": "before-after",
        "title": "Before & After",
        "description": "Comparative analysis and outcome measurement"
      },
      {
        "id": "time-to-roi",
        "title": "Time to ROI",
        "description": "Investment recovery timelines and milestone tracking"
      },
      {
        "id": "time-to-trust",
        "title": "Time to Trust",
        "description": "Relationship building velocity and trust acceleration"
      },
      {
        "id": "velocity-modeling",
        "title": "Velocity Modeling",
        "description": "Performance acceleration and growth rate optimization"
      }
    ]
  }
};

interface OverwatchDynamicRouterProps {
  language: 'en' | 'es';
  currentPath?: string;
  onNavigate: (path: string) => void;
  onBack?: () => void;
}

export const OverwatchDynamicRouter: React.FC<OverwatchDynamicRouterProps> = ({
  language,
  currentPath = '',
  onNavigate,
  onBack
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  // Parse current path to determine selected category and route
  useEffect(() => {
    const pathParts = currentPath.split('/').filter(Boolean);
    if (pathParts.length >= 1 && overwatchConfig[pathParts[0] as keyof typeof overwatchConfig]) {
      setSelectedCategory(pathParts[0]);
      if (pathParts.length >= 2) {
        setSelectedRoute(pathParts[1]);
        setBreadcrumb([pathParts[0], pathParts[1]]);
      } else {
        setSelectedRoute(null);
        setBreadcrumb([pathParts[0]]);
      }
    } else {
      setSelectedCategory(null);
      setSelectedRoute(null);
      setBreadcrumb([]);
    }
  }, [currentPath]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedRoute(null);
    setBreadcrumb([categoryId]);
    onNavigate(`overwatch/${categoryId}`);
  };

  const handleRouteSelect = (categoryId: string, routeId: string) => {
    setSelectedCategory(categoryId);
    setSelectedRoute(routeId);
    setBreadcrumb([categoryId, routeId]);
    onNavigate(`overwatch/${categoryId}/${routeId}`);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedRoute(null);
    setBreadcrumb([]);
    onNavigate('overwatch');
  };

  const handleBackToRoutes = () => {
    if (selectedCategory) {
      setSelectedRoute(null);
      setBreadcrumb([selectedCategory]);
      onNavigate(`overwatch/${selectedCategory}`);
    }
  };

  // Breadcrumb navigation
  const renderBreadcrumb = () => {
    if (breadcrumb.length === 0) return null;

    return (
      <div className="flex items-center gap-2 mb-6 p-4 bg-card/50 rounded-lg border border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack || handleBackToCategories}
          className="text-muted-foreground hover:text-foreground"
        >
          ← {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
        </Button>
        <Separator orientation="vertical" className="h-4" />
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBackToCategories}
          className={breadcrumb.length === 1 ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
        >
          OVERWATCH³
        </Button>
        {breadcrumb.length >= 1 && (
          <>
            <span className="text-muted-foreground">/</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedRoute ? handleBackToRoutes() : undefined}
              className={breadcrumb.length === 1 ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
            >
              {overwatchConfig[breadcrumb[0] as keyof typeof overwatchConfig]?.title}
            </Button>
          </>
        )}
        {breadcrumb.length >= 2 && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">
              {overwatchConfig[breadcrumb[0] as keyof typeof overwatchConfig]?.routes.find(r => r.id === breadcrumb[1])?.title}
            </span>
          </>
        )}
      </div>
    );
  };

  // Category overview
  const renderCategoryOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          {language === 'en' ? 'OVERWATCH³ Command Systems' : 'Sistemas de Comando OVERWATCH³'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Strategic intelligence domains for founder-led companies. Navigate complex business scenarios with advisory-grade frameworks.'
            : 'Dominios de inteligencia estratégica para empresas lideradas por fundadores. Navega escenarios empresariales complejos con marcos de grado asesor.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(overwatchConfig).map(([categoryId, category]) => (
          <motion.div
            key={categoryId}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50"
              onClick={() => handleCategorySelect(categoryId)}
              style={{
                background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)`
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ borderColor: category.color, color: category.color }}
                    >
                      {category.routes.length} {language === 'en' ? 'modules' : 'módulos'}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Explore domain →' : 'Explorar dominio →'}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Routes within a category
  const renderCategoryRoutes = () => {
    if (!selectedCategory) return null;
    
    const category = overwatchConfig[selectedCategory as keyof typeof overwatchConfig];
    if (!category) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${category.color}20` }}
            >
              {category.icon}
            </div>
          </div>
          <h1 className="text-4xl font-bold">{category.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.routes.map((route) => (
            <motion.div
              key={route.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50"
                onClick={() => handleRouteSelect(selectedCategory, route.id)}
                style={{
                  background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)`
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{route.title}</h3>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ borderColor: category.color, color: category.color }}
                    >
                      {language === 'en' ? 'Module' : 'Módulo'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {route.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Access module →' : 'Acceder módulo →'}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Individual route content with schema integration
  const renderRouteContent = () => {
    if (!selectedCategory || !selectedRoute) return null;
    
    const category = overwatchConfig[selectedCategory as keyof typeof overwatchConfig];
    const route = category?.routes.find(r => r.id === selectedRoute);
    
    if (!category || !route) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${category.color}20` }}
            >
              {category.icon}
            </div>
          </div>
          <h1 className="text-4xl font-bold">{route.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {route.description}
          </p>
          <Badge 
            variant="outline" 
            className="text-sm px-4 py-1"
            style={{ borderColor: category.color, color: category.color }}
          >
            {category.title}
          </Badge>
        </div>

        {/* Schema-driven content or construction placeholder */}
        {(selectedCategory === 'finance' || selectedCategory === 'trigger' || selectedCategory === 'science' || selectedCategory === 'law' || selectedCategory === 'new' || selectedCategory === 'time') ? (
          <div className="space-y-6">
            <Card className="p-6" style={{ background: `linear-gradient(135deg, ${category.color}10, ${category.color}20)` }}>
              <div className="text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl mx-auto"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  {selectedCategory === 'finance' ? '💰' : 
                   selectedCategory === 'trigger' ? '⚡' : 
                   selectedCategory === 'science' ? '🧠' : 
                   selectedCategory === 'law' ? '⚖️' : 
                   selectedCategory === 'new' ? '🚀' : 
                   selectedCategory === 'time' ? '⏱️' : '🔬'}
                </div>
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Schema-Driven Intelligence Active' : 'Inteligencia Basada en Esquemas Activa'}
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {selectedCategory === 'finance' && (language === 'en' 
                    ? 'This finance module is powered by our schema-driven overlay system with bilingual coaching, proof engines, and cinematic demo sequences.'
                    : 'Este módulo financiero está impulsado por nuestro sistema de overlays basado en esquemas con coaching bilingüe, motores de prueba y secuencias de demostración cinematográficas.'
                  )}
                  {selectedCategory === 'trigger' && (language === 'en' 
                    ? 'This catalyst module transforms organizational tensions into strategic clarity through systematic intervention frameworks and evidence-based resolution protocols.'
                    : 'Este módulo catalizador transforma tensiones organizacionales en claridad estratégica a través de marcos de intervención sistemática y protocolos de resolución basados en evidencia.'
                  )}
                  {selectedCategory === 'science' && (language === 'en' 
                    ? 'This behavioral intelligence module leverages psychology, sociology, philosophy, and neuroscience to optimize human performance and organizational effectiveness.'
                    : 'Este módulo de inteligencia conductual aprovecha psicología, sociología, filosofía y neurociencia para optimizar rendimiento humano y efectividad organizacional.'
                  )}
                  {selectedCategory === 'law' && (language === 'en' 
                    ? 'This governance intelligence module establishes frameworks for assumptions, actions, risk modeling, response patterns, and power traceability to create organizational transparency and strategic clarity.'
                    : 'Este módulo de inteligencia de gobernanza establece marcos para suposiciones, acciones, modelado de riesgo, patrones de respuesta y trazabilidad de poder para crear transparencia organizacional y claridad estratégica.'
                  )}
                  {selectedCategory === 'new' && (language === 'en' 
                    ? 'This innovation intelligence module accelerates market entry, optimizes pricing narratives, systematizes team formation, and scales coaching clarity for strategic growth expansion.'
                    : 'Este módulo de inteligencia de innovación acelera entrada al mercado, optimiza narrativas de precios, sistematiza formación de equipos y escala claridad de coaching para expansión de crecimiento estratégico.'
                  )}
                  {selectedCategory === 'time' && (language === 'en' 
                    ? 'This temporal intelligence module transforms velocity into competitive advantage through transformation visibility, ROI acceleration, trust building, and operational throughput optimization.'
                    : 'Este módulo de inteligencia temporal transforma velocidad en ventaja competitiva a través de visibilidad de transformación, aceleración de ROI, construcción de confianza y optimización de rendimiento operacional.'
                  )}
                </p>
                <div className="flex gap-4 justify-center mt-6">
                  <Button 
                    onClick={() => onNavigate(`overwatch-schema/${selectedCategory}/${selectedRoute}`)}
                    style={{ backgroundColor: category.color }}
                    className="text-white"
                  >
                    {language === 'en' ? 'Launch Schema Module' : 'Lanzar Módulo de Schema'}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleBackToRoutes}
                  >
                    {language === 'en' ? 'Back to Category' : 'Volver a Categoría'}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          /* Module content placeholder for other categories */
          <Card className="p-8 border-2 border-dashed border-border">
            <div className="text-center space-y-4">
              <div 
                className="w-20 h-20 rounded-lg flex items-center justify-center text-4xl mx-auto"
                style={{ backgroundColor: `${category.color}10` }}
              >
                🏗️
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'en' ? 'Module Under Construction' : 'Módulo en Construcción'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'This strategic module is being developed with advisory-grade frameworks and data integration. Full functionality will be available in the next deployment cycle.'
                  : 'Este módulo estratégico está siendo desarrollado con marcos de grado asesor e integración de datos. La funcionalidad completa estará disponible en el próximo ciclo de implementación.'
                }
              </p>
              <div className="flex gap-4 justify-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={handleBackToRoutes}
                >
                  {language === 'en' ? 'Back to Category' : 'Volver a Categoría'}
                </Button>
                <Button 
                  onClick={handleBackToCategories}
                  style={{ backgroundColor: category.color }}
                  className="text-white"
                >
                  {language === 'en' ? 'Explore Other Domains' : 'Explorar Otros Dominios'}
                </Button>
              </div>
            </div>
          </Card>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {renderBreadcrumb()}
        
        <AnimatePresence mode="wait">
          {!selectedCategory && renderCategoryOverview()}
          {selectedCategory && !selectedRoute && renderCategoryRoutes()}
          {selectedCategory && selectedRoute && renderRouteContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OverwatchDynamicRouter;