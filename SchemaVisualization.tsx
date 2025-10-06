import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  GitBranch, 
  Play, 
  Eye, 
  ArrowRight, 
  Zap, 
  Target,
  Award,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';

interface SchemaNode {
  id: string;
  path: string;
  title: string;
  category: 'finance' | 'law' | 'time' | 'strategy' | 'badge' | 'demo';
  status: 'active' | 'completed' | 'pending' | 'locked';
  metrics?: {
    completions: number;
    avgScore: number;
    clarityLift: string;
  };
  connections?: string[];
  description?: string;
}

interface SchemaVisualizationProps {
  nodes: SchemaNode[];
  selectedNode?: string;
  onNodeSelect?: (nodeId: string) => void;
  onNodeAction?: (nodeId: string, action: 'view' | 'play' | 'replay') => void;
  language: 'en' | 'es';
  interactive?: boolean;
  compact?: boolean;
}

const CATEGORY_COLORS = {
  finance: 'from-green-500 to-emerald-500',
  law: 'from-blue-500 to-indigo-500',
  time: 'from-purple-500 to-violet-500',
  strategy: 'from-orange-500 to-red-500',
  badge: 'from-yellow-500 to-amber-500',
  demo: 'from-pink-500 to-rose-500'
};

const CATEGORY_ICONS = {
  finance: '💰',
  law: '⚖️',
  time: '⏰',
  strategy: '🎯',
  badge: '🏆',
  demo: '🎬'
};

const STATUS_COLORS = {
  active: 'border-green-500 bg-green-500/10',
  completed: 'border-blue-500 bg-blue-500/10',
  pending: 'border-yellow-500 bg-yellow-500/10',
  locked: 'border-gray-500 bg-gray-500/10'
};

export default function SchemaVisualization({
  nodes,
  selectedNode,
  onNodeSelect,
  onNodeAction,
  language,
  interactive = true,
  compact = false
}: SchemaVisualizationProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [focusedCategory, setFocusedCategory] = useState<string | null>(null);

  const t = {
    en: {
      schemaMap: 'Schema Map',
      viewDetails: 'View Details',
      playOverlay: 'Play Overlay',
      replayDemo: 'Replay Demo',
      completions: 'Completions',
      avgScore: 'Avg Score',
      clarityLift: 'Clarity Lift',
      categories: 'Categories',
      allSchemas: 'All Schemas'
    },
    es: {
      schemaMap: 'Mapa de Esquemas',
      viewDetails: 'Ver Detalles',
      playOverlay: 'Reproducir Overlay',
      replayDemo: 'Repetir Demo',
      completions: 'Finalizaciones',
      avgScore: 'Punt. Promedio',
      clarityLift: 'Aumento Claridad',
      categories: 'Categorías',
      allSchemas: 'Todos los Esquemas'
    }
  };

  const text = t[language];

  const getFilteredNodes = () => {
    if (!focusedCategory) return nodes;
    return nodes.filter(node => node.category === focusedCategory);
  };

  const getNodePosition = (index: number, total: number) => {
    const radius = compact ? 120 : 180;
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const getConnectionPath = (fromPos: { x: number; y: number }, toPos: { x: number; y: number }) => {
    const midX = (fromPos.x + toPos.x) / 2;
    const midY = (fromPos.y + toPos.y) / 2 - 20;
    return `M ${fromPos.x} ${fromPos.y} Q ${midX} ${midY} ${toPos.x} ${toPos.y}`;
  };

  const filteredNodes = getFilteredNodes();
  const categories = Array.from(new Set(nodes.map(node => node.category)));

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={focusedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFocusedCategory(null)}
        >
          {text.allSchemas}
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={focusedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFocusedCategory(category)}
            className="flex items-center gap-2"
          >
            <span>{CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS]}</span>
            <span className="capitalize">{category}</span>
          </Button>
        ))}
      </div>

      {/* Schema Visualization */}
      <Card className="p-8">
        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="-250 -200 500 400"
            className="absolute inset-0"
          >
            {/* Connection Lines */}
            {filteredNodes.map((node, index) => {
              const fromPos = getNodePosition(index, filteredNodes.length);
              return node.connections?.map(connectionId => {
                const targetIndex = filteredNodes.findIndex(n => n.id === connectionId);
                if (targetIndex === -1) return null;
                
                const toPos = getNodePosition(targetIndex, filteredNodes.length);
                return (
                  <motion.path
                    key={`${node.id}-${connectionId}`}
                    d={getConnectionPath(fromPos, toPos)}
                    stroke="rgba(var(--border), 0.3)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                );
              }) || [];
            })}

            {/* Schema Nodes */}
            {filteredNodes.map((node, index) => {
              const position = getNodePosition(index, filteredNodes.length);
              const isSelected = selectedNode === node.id;
              const isHovered = hoveredNode === node.id;
              
              return (
                <g key={node.id}>
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={compact ? 20 : 25}
                    className={`cursor-pointer ${STATUS_COLORS[node.status]} stroke-2`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => interactive && onNodeSelect?.(node.id)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  />
                  
                  {/* Node Icon */}
                  <text
                    x={position.x}
                    y={position.y + 2}
                    textAnchor="middle"
                    fontSize={compact ? "12" : "14"}
                    className="pointer-events-none select-none"
                  >
                    {CATEGORY_ICONS[node.category as keyof typeof CATEGORY_ICONS]}
                  </text>
                  
                  {/* Node Label */}
                  <text
                    x={position.x}
                    y={position.y + (compact ? 35 : 45)}
                    textAnchor="middle"
                    fontSize="10"
                    className="fill-current text-foreground pointer-events-none select-none"
                  >
                    {node.path.split('.').pop()}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Node Details Overlay */}
          <AnimatePresence>
            {hoveredNode && interactive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-4 right-4 z-10"
              >
                <Card className="p-4 min-w-64 bg-card/95 backdrop-blur-sm">
                  {(() => {
                    const node = filteredNodes.find(n => n.id === hoveredNode);
                    if (!node) return null;
                    
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {CATEGORY_ICONS[node.category as keyof typeof CATEGORY_ICONS]}
                          </span>
                          <div>
                            <h4 className="font-semibold">{node.title}</h4>
                            <p className="text-sm text-muted-foreground font-mono">
                              {node.path}
                            </p>
                          </div>
                        </div>
                        
                        <Badge variant="outline" className="capitalize">
                          {node.status}
                        </Badge>
                        
                        {node.description && (
                          <p className="text-sm text-muted-foreground">
                            {node.description}
                          </p>
                        )}
                        
                        {node.metrics && (
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center p-2 bg-secondary/50 rounded">
                              <div className="font-medium">{node.metrics.completions}</div>
                              <div className="text-muted-foreground">{text.completions}</div>
                            </div>
                            <div className="text-center p-2 bg-secondary/50 rounded">
                              <div className="font-medium">{node.metrics.avgScore}</div>
                              <div className="text-muted-foreground">{text.avgScore}</div>
                            </div>
                            <div className="text-center p-2 bg-secondary/50 rounded">
                              <div className="font-medium">{node.metrics.clarityLift}</div>
                              <div className="text-muted-foreground">{text.clarityLift}</div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onNodeAction?.(node.id, 'view')}
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            {text.viewDetails}
                          </Button>
                          {node.category !== 'badge' && (
                            <Button
                              size="sm"
                              onClick={() => onNodeAction?.(node.id, node.category === 'demo' ? 'replay' : 'play')}
                            >
                              <Play className="w-3 h-3 mr-1" />
                              {node.category === 'demo' ? text.replayDemo : text.playOverlay}
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>

      {/* Selected Node Details */}
      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            {(() => {
              const node = nodes.find(n => n.id === selectedNode);
              if (!node) return null;
              
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${CATEGORY_COLORS[node.category]} flex items-center justify-center text-white text-xl`}>
                        {CATEGORY_ICONS[node.category as keyof typeof CATEGORY_ICONS]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{node.title}</h3>
                        <p className="text-muted-foreground font-mono">{node.path}</p>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="capitalize">
                      {node.status}
                    </Badge>
                  </div>
                  
                  {node.description && (
                    <p className="text-muted-foreground">{node.description}</p>
                  )}
                  
                  {node.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-secondary/50 rounded">
                        <div className="text-2xl font-bold text-primary">{node.metrics.completions}</div>
                        <div className="text-sm text-muted-foreground">{text.completions}</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded">
                        <div className="text-2xl font-bold text-blue-400">{node.metrics.avgScore}</div>
                        <div className="text-sm text-muted-foreground">{text.avgScore}</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded">
                        <div className="text-2xl font-bold text-green-400">{node.metrics.clarityLift}</div>
                        <div className="text-sm text-muted-foreground">{text.clarityLift}</div>
                      </div>
                    </div>
                  )}
                  
                  {node.connections && node.connections.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Connected Schemas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {node.connections.map(connectionId => {
                          const connectedNode = nodes.find(n => n.id === connectionId);
                          return connectedNode ? (
                            <Badge
                              key={connectionId}
                              variant="outline"
                              className="cursor-pointer hover:bg-secondary"
                              onClick={() => onNodeSelect?.(connectionId)}
                            >
                              {CATEGORY_ICONS[connectedNode.category as keyof typeof CATEGORY_ICONS]}
                              {connectedNode.path.split('.').pop()}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </Card>
        </motion.div>
      )}
    </div>
  );
}