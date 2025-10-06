import React, { useState } from "react";
import { motion } from 'motion/react';
import { getSchemaNode } from "../utils/schemaLoader";
import OverlayPanel from "./OverlayPanel";
import ProofBlock from "./ProofBlock";
import DemoSequenceController from "./DemoSequenceControllerSafe";
import sitemap, { getDomainColor, getDomainIcon } from "../config/sitemapConfig";

interface DashboardProps {
  language: 'en' | 'es';
  onNavigate?: (path: string) => void;
  initialDomain?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  language, 
  onNavigate,
  initialDomain = "finance"
}) => {
  const [activeBranch, setActiveBranch] = useState(initialDomain);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'demo'>('grid');

  const branchRoutes = sitemap.overwatch3[activeBranch]?.routes || [];
  const activeBranchData = sitemap.overwatch3[activeBranch];

  // Create demo sequence for current domain
  const currentDomainSequence = branchRoutes.map(route => `${activeBranch}.${route}`);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Enhanced Sidebar Navigation */}
      <aside className="w-80 bg-card border-r border-border flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">⚡</span>
            </div>
            <div>
              <h2 className="font-bold text-foreground">OVERWATCH³</h2>
              <p className="text-xs text-muted-foreground">Schema Intelligence</p>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {language === 'en' ? 'Grid View' : 'Vista de Cuadrícula'}
            </button>
            <button
              onClick={() => setViewMode('demo')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'demo'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {language === 'en' ? 'Demo Mode' : 'Modo Demo'}
            </button>
          </div>
        </div>

        {/* Domain Navigation */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            {language === 'en' ? 'Intelligence Domains' : 'Dominios de Inteligencia'}
          </h3>
          
          {Object.keys(sitemap.overwatch3).map((branch) => {
            const branchData = sitemap.overwatch3[branch];
            const isActive = activeBranch === branch;
            
            return (
              <motion.button
                key={branch}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveBranch(branch);
                  setActiveRoute(null);
                }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-primary/20 border-primary/50 shadow-lg' 
                    : 'bg-secondary/50 hover:bg-accent border-border'
                } border`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center
                    ${isActive ? `bg-gradient-to-r ${getDomainColor(branch)}` : 'bg-secondary'}
                    transition-transform group-hover:scale-110
                  `}>
                    <span className="text-lg">{getDomainIcon(branch)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {branchData.title}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {branchData.routes.length} {language === 'en' ? 'modules' : 'módulos'}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {branchData.description[language]}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Active Domain Info */}
        {activeBranchData && (
          <div className="p-4 border-t border-border bg-secondary/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{activeBranchData.icon}</span>
              <span className="font-medium text-foreground">{activeBranchData.title}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Stakeholders:' : 'Interesados:'} {activeBranchData.metadata.stakeholders.join(', ')}
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {activeBranchData?.title || 'OVERWATCH³ Dashboard'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? `${branchRoutes.length} intelligence modules available`
                  : `${branchRoutes.length} módulos de inteligencia disponibles`
                }
              </p>
            </div>
            
            {onNavigate && (
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('sequence-builder')}
                  className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg transition-colors"
                >
                  🎬 {language === 'en' ? 'Sequence Builder' : 'Constructor Secuencia'}
                </button>
                <button
                  onClick={() => onNavigate('persona')}
                  className="px-4 py-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors"
                >
                  {language === 'en' ? 'Platform Home' : 'Inicio de Plataforma'}
                </button>
                <button
                  onClick={() => onNavigate('business-command-center')}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
                >
                  {language === 'en' ? 'Command Center' : 'Centro de Comando'}
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {viewMode === 'grid' ? (
            <>
              {/* Module Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {branchRoutes.map((route) => {
                  const schema = getSchemaNode(`${activeBranch}.${route}`);
                  const isActive = route === activeRoute;
                  
                  return (
                    <motion.button
                      key={route}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveRoute(route)}
                      className={`
                        bg-card border rounded-lg p-6 text-left transition-all duration-200 group
                        hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden
                        ${isActive 
                          ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20' 
                          : 'border-border hover:border-border/80'
                        }
                      `}
                    >
                      {/* Background gradient */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${getDomainColor(activeBranch)} 
                        opacity-5 group-hover:opacity-10 transition-opacity duration-300
                      `} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`
                            w-12 h-12 rounded-lg flex items-center justify-center
                            ${isActive 
                              ? `bg-gradient-to-r ${getDomainColor(activeBranch)}` 
                              : 'bg-secondary group-hover:bg-accent'
                            }
                            transition-all duration-200 group-hover:scale-110
                          `}>
                            <span className="text-xl">
                              {schema?.visualTokens?.icon || getDomainIcon(activeBranch)}
                            </span>
                          </div>
                          
                          {isActive && (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          )}
                        </div>
                        
                        <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                          {route.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {schema?.caption?.[language] || 'Schema intelligence module'}
                        </p>
                        
                        {schema?.stakeholder && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                              {schema.stakeholder}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Module Details */}
              {activeRoute && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <OverlayPanel
                      schema={getSchemaNode(`${activeBranch}.${activeRoute}`)}
                      language={language}
                    />
                    <ProofBlock
                      proof={getSchemaNode(`${activeBranch}.${activeRoute}`)?.proofEngine}
                      language={language}
                    />
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            /* Demo Mode */
            <div className="max-w-4xl mx-auto">
              <DemoSequenceController
                sequence={currentDomainSequence}
                autoPlay={false}
                language={language}
                delay={3000}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;