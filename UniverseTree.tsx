import { useMemo } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GitBranch, Zap, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface UniverseTreeProps {
  language: 'en' | 'es';
  scenarios: Array<{
    id: string;
    label: string;
    probability: number;
    roiDelta: number;
    triggers: string[];
    mode: 'baseline' | 'expansion' | 'contraction' | 'shock';
  }>;
}

export function UniverseTree({ language, scenarios }: UniverseTreeProps) {
  const labels = {
    en: {
      title: "Parallel Universe Map",
      currentReality: "Current Reality",
      probabilityBranch: "Probability Branch",
      impactMetrics: "Impact Metrics"
    },
    es: {
      title: "Mapa de Universos Paralelos",
      currentReality: "Realidad Actual",
      probabilityBranch: "Rama de Probabilidad",
      impactMetrics: "Métricas de Impacto"
    }
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'baseline': return 'rgb(59, 130, 246)'; // Blue
      case 'expansion': return 'rgb(34, 197, 94)'; // Green
      case 'contraction': return 'rgb(249, 115, 22)'; // Orange
      case 'shock': return 'rgb(239, 68, 68)'; // Red
      default: return 'rgb(156, 163, 175)'; // Gray
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'baseline': return <GitBranch className="w-4 h-4" />;
      case 'expansion': return <TrendingUp className="w-4 h-4" />;
      case 'contraction': return <TrendingDown className="w-4 h-4" />;
      case 'shock': return <AlertTriangle className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const treeNodes = useMemo(() => {
    return scenarios.map((scenario, index) => ({
      ...scenario,
      x: 150 + (index * 200),
      y: 100 + (index % 2) * 80,
      radius: 20 + (scenario.probability * 30)
    }));
  }, [scenarios]);

  return (
    <div className="px-20 py-6">
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <GitBranch className="w-5 h-5 text-green-400" />
          <h3 className="text-xl font-semibold text-white">
            {labels[language].title}
          </h3>
        </div>

        {/* SVG Universe Tree */}
        <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
          <svg width="100%" height="300" className="overflow-visible">
            {/* Connection lines from center */}
            {treeNodes.map((node, index) => (
              <g key={`connection-${node.id}`}>
                <line
                  x1="150"
                  y1="150"
                  x2={node.x}
                  y2={node.y}
                  stroke={getModeColor(node.mode)}
                  strokeWidth="2"
                  strokeDasharray={node.mode === 'baseline' ? '0' : '5,5'}
                  opacity="0.6"
                />
                {/* Probability label on line */}
                <text
                  x={(150 + node.x) / 2}
                  y={(150 + node.y) / 2 - 10}
                  fill="white"
                  fontSize="10"
                  textAnchor="middle"
                  opacity="0.7"
                >
                  {(node.probability * 100).toFixed(0)}%
                </text>
              </g>
            ))}

            {/* Central node */}
            <circle
              cx="150"
              cy="150"
              r="25"
              fill="rgba(59, 178, 115, 0.3)"
              stroke="rgb(59, 178, 115)"
              strokeWidth="3"
            />
            <text x="150" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              U0
            </text>

            {/* Scenario nodes */}
            {treeNodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius}
                  fill={`${getModeColor(node.mode)}30`}
                  stroke={getModeColor(node.mode)}
                  strokeWidth="2"
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {node.id}
                </text>
                {/* ROI Delta */}
                <text
                  x={node.x}
                  y={node.y + node.radius + 15}
                  textAnchor="middle"
                  fill={node.roiDelta > 0 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'}
                  fontSize="10"
                  fontWeight="bold"
                >
                  {node.roiDelta > 0 ? '+' : ''}{node.roiDelta.toFixed(1)}%
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Legend and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="p-3 rounded-lg border"
              style={{ 
                backgroundColor: `${getModeColor(scenario.mode)}20`,
                borderColor: `${getModeColor(scenario.mode)}40`
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                {getModeIcon(scenario.mode)}
                <span className="font-semibold text-white text-sm">
                  {scenario.label}
                </span>
                <Badge variant="outline" className="text-xs">
                  {scenario.id}
                </Badge>
              </div>
              
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="opacity-75">Probability:</span>
                  <span className="font-mono text-white">
                    {(scenario.probability * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">ROI Impact:</span>
                  <span 
                    className={`font-mono ${
                      scenario.roiDelta > 0 ? 'text-green-400' : 
                      scenario.roiDelta < 0 ? 'text-red-400' : 'text-gray-400'
                    }`}
                  >
                    {scenario.roiDelta > 0 ? '+' : ''}{scenario.roiDelta.toFixed(1)}%
                  </span>
                </div>
              </div>

              {scenario.triggers.length > 0 && (
                <div className="mt-2 pt-2 border-t border-white/10">
                  <div className="text-xs opacity-75 mb-1">Triggers:</div>
                  <div className="flex flex-wrap gap-1">
                    {scenario.triggers.slice(0, 2).map((trigger, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {trigger}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}