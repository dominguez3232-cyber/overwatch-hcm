import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Map,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Clock,
  Activity,
  GitBranch,
  Zap,
  AlertCircle,
  CheckCircle,
  Target,
  TrendingUp,
  Settings,
  Filter,
  Search,
  RefreshCw,
  Download,
  Share2,
  Eye,
  EyeOff,
  Layers,
  Network
} from 'lucide-react';
import { Progress } from './ui/progress';

interface TraceNode {
  path: string;
  status: 'active' | 'stable' | 'high engagement' | 'underperforming' | 'critical' | 'dormant';
  connections?: number;
  clarityImpact?: number;
  lastActivity?: string;
  depth?: number;
  children?: TraceNode[];
  metadata?: {
    overlayType?: string;
    language?: 'en' | 'es' | 'both';
    squadCount?: number;
    avgFeedback?: number;
  };
}

interface SchemaTracePlaybackProps {
  children?: React.ReactNode;
  nodes?: TraceNode[];
  autoPlay?: boolean;
  playbackSpeed?: number;
  showControls?: boolean;
  showMetrics?: boolean;
  onNodeSelect?: (node: TraceNode) => void;
  onPlaybackChange?: (isPlaying: boolean) => void;
  language?: 'en' | 'es';
  mode?: 'playback' | 'static' | 'interactive';
  selectedPath?: string;
}

const DEMO_TRACE_NODES: TraceNode[] = [
  {
    path: 'finance.trust-velocity.investor',
    status: 'active',
    connections: 12,
    clarityImpact: 3.4,
    lastActivity: '2m ago',
    depth: 3,
    metadata: {
      overlayType: 'coaching',
      language: 'both',
      squadCount: 3,
      avgFeedback: 4.6
    },
    children: [
      {
        path: 'finance.trust-velocity.investor.pitch',
        status: 'high engagement',
        connections: 8,
        clarityImpact: 4.2,
        lastActivity: '1m ago',
        depth: 4
      },
      {
        path: 'finance.trust-velocity.investor.metrics',
        status: 'stable',
        connections: 5,
        clarityImpact: 3.1,
        lastActivity: '5m ago',
        depth: 4
      }
    ]
  },
  {
    path: 'badge.dual-language',
    status: 'stable',
    connections: 9,
    clarityImpact: 2.8,
    lastActivity: '5m ago',
    depth: 2,
    metadata: {
      overlayType: 'achievement',
      language: 'both',
      squadCount: 5,
      avgFeedback: 4.3
    }
  },
  {
    path: 'demo.pitch-alpha',
    status: 'high engagement',
    connections: 7,
    clarityImpact: 3.1,
    lastActivity: '1m ago',
    depth: 2,
    metadata: {
      overlayType: 'demo',
      language: 'en',
      squadCount: 2,
      avgFeedback: 4.8
    }
  },
  {
    path: 'law.assumed-right.operations',
    status: 'underperforming',
    connections: 4,
    clarityImpact: 2.3,
    lastActivity: '15m ago',
    depth: 3,
    metadata: {
      overlayType: 'framework',
      language: 'en',
      squadCount: 1,
      avgFeedback: 3.9
    }
  },
  {
    path: 'time.velocity-modeling.strategic',
    status: 'critical',
    connections: 2,
    clarityImpact: 1.8,
    lastActivity: '30m ago',
    depth: 3,
    metadata: {
      overlayType: 'modeling',
      language: 'es',
      squadCount: 1,
      avgFeedback: 3.2
    }
  },
  {
    path: 'culture.force-multiplier',
    status: 'dormant',
    connections: 1,
    clarityImpact: 0.9,
    lastActivity: '2h ago',
    depth: 2,
    metadata: {
      overlayType: 'culture',
      language: 'both',
      squadCount: 0,
      avgFeedback: 0
    }
  }
];

export default function SchemaTracePlayback({
  children,
  nodes = DEMO_TRACE_NODES,
  autoPlay = false,
  playbackSpeed = 1,
  showControls = true,
  showMetrics = true,
  onNodeSelect,
  onPlaybackChange,
  language = 'en',
  mode = 'playback',
  selectedPath
}: SchemaTracePlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(30); // 30 seconds for demo
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);
  const [selectedNode, setSelectedNode] = useState<TraceNode | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const t = {
    en: {
      schemaTracePlayback: 'Schema Trace Playback',
      playback: 'Playback',
      pause: 'Pause',
      stop: 'Stop',
      rewind: 'Rewind',
      fastForward: 'Fast Forward',
      mute: 'Mute',
      unmute: 'Unmute',
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit Fullscreen',
      speed: 'Speed',
      filter: 'Filter',
      search: 'Search',
      refresh: 'Refresh',
      download: 'Download',
      share: 'Share',
      showAll: 'Show All',
      hideAll: 'Hide All',
      nodeDetails: 'Node Details',
      connections: 'Connections',
      clarityImpact: 'Clarity Impact',
      lastActivity: 'Last Activity',
      status: 'Status',
      overlayType: 'Overlay Type',
      squadCount: 'Squad Count',
      avgFeedback: 'Avg Feedback',
      active: 'Active',
      stable: 'Stable',
      highEngagement: 'High Engagement',
      underperforming: 'Underperforming',
      critical: 'Critical',
      dormant: 'Dormant',
      all: 'All',
      metrics: 'Metrics',
      totalNodes: 'Total Nodes',
      activeNodes: 'Active Nodes',
      avgClarityImpact: 'Avg Clarity Impact',
      totalConnections: 'Total Connections'
    },
    es: {
      schemaTracePlayback: 'Reproducción de Trazado de Esquema',
      playback: 'Reproducir',
      pause: 'Pausar',
      stop: 'Detener',
      rewind: 'Rebobinar',
      fastForward: 'Avance Rápido',
      mute: 'Silenciar',
      unmute: 'Activar Sonido',
      fullscreen: 'Pantalla Completa',
      exitFullscreen: 'Salir Pantalla Completa',
      speed: 'Velocidad',
      filter: 'Filtrar',
      search: 'Buscar',
      refresh: 'Actualizar',
      download: 'Descargar',
      share: 'Compartir',
      showAll: 'Mostrar Todo',
      hideAll: 'Ocultar Todo',
      nodeDetails: 'Detalles del Nodo',
      connections: 'Conexiones',
      clarityImpact: 'Impacto de Claridad',
      lastActivity: 'Última Actividad',
      status: 'Estado',
      overlayType: 'Tipo de Overlay',
      squadCount: 'Cantidad de Escuadrones',
      avgFeedback: 'Feedback Promedio',
      active: 'Activo',
      stable: 'Estable',
      highEngagement: 'Alta Participación',
      underperforming: 'Bajo Rendimiento',
      critical: 'Crítico',
      dormant: 'Inactivo',
      all: 'Todos',
      metrics: 'Métricas',
      totalNodes: 'Nodos Totales',
      activeNodes: 'Nodos Activos',
      avgClarityImpact: 'Impacto Claridad Promedio',
      totalConnections: 'Conexiones Totales'
    }
  };

  const text = t[language];

  // Playback control
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && mode === 'playback') {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + playbackSpeed;
          if (newTime >= duration) {
            setIsPlaying(false);
            onPlaybackChange?.(false);
            return duration;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, duration, mode, onPlaybackChange]);

  // Node visibility based on playback time
  useEffect(() => {
    if (mode === 'playback') {
      const progress = currentTime / duration;
      const nodesToShow = Math.floor(progress * nodes.length);
      setVisibleNodes(nodes.slice(0, nodesToShow + 1).map(n => n.path));
    } else {
      setVisibleNodes(nodes.map(n => n.path));
    }
  }, [currentTime, duration, nodes, mode]);

  const getStatusConfig = (status: TraceNode['status']) => {
    const statusConfigs = {
      active: {
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20',
        icon: CheckCircle,
        label: text.active
      },
      stable: {
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20',
        icon: Activity,
        label: text.stable
      },
      'high engagement': {
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
        icon: TrendingUp,
        label: text.highEngagement
      },
      underperforming: {
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/20',
        icon: AlertCircle,
        label: text.underperforming
      },
      critical: {
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/20',
        icon: AlertCircle,
        label: text.critical
      },
      dormant: {
        color: 'text-gray-400',
        bgColor: 'bg-gray-500/10',
        borderColor: 'border-gray-500/20',
        icon: Clock,
        label: text.dormant
      }
    };
    return statusConfigs[status];
  };

  const handlePlayPause = () => {
    const newPlaying = !isPlaying;
    setIsPlaying(newPlaying);
    onPlaybackChange?.(newPlaying);
  };

  const handleNodeClick = (node: TraceNode) => {
    setSelectedNode(node);
    onNodeSelect?.(node);
  };

  const filteredNodes = nodes.filter(node => {
    const matchesFilter = filterStatus === 'all' || node.status === filterStatus;
    const matchesSearch = searchTerm === '' || node.path.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const calculateMetrics = () => {
    const totalNodes = nodes.length;
    const activeNodes = nodes.filter(n => n.status === 'active' || n.status === 'high engagement').length;
    const avgClarityImpact = nodes.reduce((sum, n) => sum + (n.clarityImpact || 0), 0) / totalNodes;
    const totalConnections = nodes.reduce((sum, n) => sum + (n.connections || 0), 0);
    
    return { totalNodes, activeNodes, avgClarityImpact, totalConnections };
  };

  const metrics = calculateMetrics();

  // Handle children (static TraceNode elements)
  const childNodes = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === TraceNodeComponent
  );

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-background p-6' : ''}`}>
      {/* Header */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Map className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{text.schemaTracePlayback}</h3>
              <div className="text-sm text-muted-foreground">
                {mode === 'playback' 
                  ? `${Math.floor(currentTime)}s / ${duration}s`
                  : `${filteredNodes.length} nodes`
                }
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <input
                type="text"
                placeholder={text.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-40 bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
              />
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
            >
              <option value="all">{text.all}</option>
              <option value="active">{text.active}</option>
              <option value="stable">{text.stable}</option>
              <option value="high engagement">{text.highEngagement}</option>
              <option value="underperforming">{text.underperforming}</option>
              <option value="critical">{text.critical}</option>
              <option value="dormant">{text.dormant}</option>
            </select>
            
            <Button size="sm" variant="outline">
              <Filter className="w-3 h-3 mr-1" />
              {text.filter}
            </Button>
            
            <Button size="sm" variant="outline">
              <RefreshCw className="w-3 h-3 mr-1" />
              {text.refresh}
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </Button>
          </div>
        </div>
      </Card>

      {/* Metrics */}
      {showMetrics && (
        <Card className="p-4">
          <h4 className="font-medium mb-3">{text.metrics}</h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{metrics.totalNodes}</div>
              <div className="text-xs text-muted-foreground">{text.totalNodes}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{metrics.activeNodes}</div>
              <div className="text-xs text-muted-foreground">{text.activeNodes}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{metrics.avgClarityImpact.toFixed(1)}x</div>
              <div className="text-xs text-muted-foreground">{text.avgClarityImpact}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{metrics.totalConnections}</div>
              <div className="text-xs text-muted-foreground">{text.totalConnections}</div>
            </div>
          </div>
        </Card>
      )}

      {/* Playback Controls */}
      {showControls && mode === 'playback' && (
        <Card className="p-4">
          <div className="space-y-4">
            <Progress value={(currentTime / duration) * 100} className="w-full" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => setCurrentTime(0)}>
                  <SkipBack className="w-3 h-3" />
                </Button>
                
                <Button size="sm" onClick={handlePlayPause}>
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </Button>
                
                <Button size="sm" variant="outline" onClick={() => {
                  setIsPlaying(false);
                  setCurrentTime(0);
                }}>
                  <Square className="w-3 h-3" />
                </Button>
                
                <Button size="sm" variant="outline" onClick={() => setCurrentTime(duration)}>
                  <SkipForward className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                </Button>
                
                <select
                  value={playbackSpeed}
                  onChange={(e) => setCurrentTime(Number(e.target.value))}
                  className="bg-input border border-border text-foreground px-2 py-1 rounded text-sm"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Schema Trace Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {/* Render filtered nodes */}
          {filteredNodes.map((node) => {
            const config = getStatusConfig(node.status);
            const StatusIcon = config.icon;
            const isVisible = visibleNodes.includes(node.path);
            const isSelected = selectedPath === node.path || selectedNode?.path === node.path;
            
            if (!isVisible && mode === 'playback') return null;
            
            return (
              <motion.div
                key={node.path}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleNodeClick(node)}
                className={`cursor-pointer ${isSelected ? 'ring-2 ring-primary' : ''}`}
              >
                <Card className={`p-4 ${config.bgColor} ${config.borderColor} border`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <StatusIcon className={`w-4 h-4 ${config.color}`} />
                      <Badge variant="outline" className={`text-xs ${config.color}`}>
                        {config.label}
                      </Badge>
                    </div>
                    
                    <div>
                      <div className="font-mono text-sm font-medium">{node.path}</div>
                      {node.lastActivity && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {text.lastActivity}: {node.lastActivity}
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {node.connections !== undefined && (
                        <div>
                          <span className="text-muted-foreground">{text.connections}:</span>
                          <div className="font-medium">{node.connections}</div>
                        </div>
                      )}
                      
                      {node.clarityImpact !== undefined && (
                        <div>
                          <span className="text-muted-foreground">{text.clarityImpact}:</span>
                          <div className="font-medium text-green-400">{node.clarityImpact}x</div>
                        </div>
                      )}
                    </div>
                    
                    {node.metadata && (
                      <div className="pt-2 border-t border-border">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {node.metadata.squadCount !== undefined && (
                            <div>
                              <span className="text-muted-foreground">{text.squadCount}:</span>
                              <div className="font-medium">{node.metadata.squadCount}</div>
                            </div>
                          )}
                          
                          {node.metadata.avgFeedback !== undefined && (
                            <div>
                              <span className="text-muted-foreground">{text.avgFeedback}:</span>
                              <div className="font-medium text-yellow-400">
                                {node.metadata.avgFeedback.toFixed(1)}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
          
          {/* Render children (static nodes) */}
          {childNodes.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Node Details */}
      {selectedNode && (
        <Card className="p-6">
          <h4 className="font-semibold mb-4">{text.nodeDetails}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">{text.status}</div>
              <div className="font-medium">{getStatusConfig(selectedNode.status).label}</div>
            </div>
            
            {selectedNode.connections !== undefined && (
              <div>
                <div className="text-sm text-muted-foreground">{text.connections}</div>
                <div className="font-medium">{selectedNode.connections}</div>
              </div>
            )}
            
            {selectedNode.clarityImpact !== undefined && (
              <div>
                <div className="text-sm text-muted-foreground">{text.clarityImpact}</div>
                <div className="font-medium text-green-400">{selectedNode.clarityImpact}x</div>
              </div>
            )}
            
            {selectedNode.lastActivity && (
              <div>
                <div className="text-sm text-muted-foreground">{text.lastActivity}</div>
                <div className="font-medium">{selectedNode.lastActivity}</div>
              </div>
            )}
          </div>
          
          {selectedNode.metadata && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedNode.metadata.overlayType && (
                  <div>
                    <div className="text-sm text-muted-foreground">{text.overlayType}</div>
                    <div className="font-medium capitalize">{selectedNode.metadata.overlayType}</div>
                  </div>
                )}
                
                {selectedNode.metadata.squadCount !== undefined && (
                  <div>
                    <div className="text-sm text-muted-foreground">{text.squadCount}</div>
                    <div className="font-medium">{selectedNode.metadata.squadCount}</div>
                  </div>
                )}
                
                {selectedNode.metadata.avgFeedback !== undefined && (
                  <div>
                    <div className="text-sm text-muted-foreground">{text.avgFeedback}</div>
                    <div className="font-medium text-yellow-400">
                      {selectedNode.metadata.avgFeedback.toFixed(1)}
                    </div>
                  </div>
                )}
                
                {selectedNode.metadata.language && (
                  <div>
                    <div className="text-sm text-muted-foreground">Language</div>
                    <div className="font-medium uppercase">{selectedNode.metadata.language}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

// TraceNode component for use as children
interface TraceNodeComponentProps {
  path: string;
  status: TraceNode['status'];
  connections?: number;
  clarityImpact?: number;
  lastActivity?: string;
}

const TraceNodeComponent: React.FC<TraceNodeComponentProps> = ({ 
  path, 
  status, 
  connections, 
  clarityImpact, 
  lastActivity 
}) => {
  // This component is used as children and rendered by the parent
  return null;
};

// Export TraceNode for use as children
SchemaTracePlayback.TraceNode = TraceNodeComponent;