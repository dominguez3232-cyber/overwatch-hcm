import React from 'react';

interface TraceNodeProps {
  path: string;
  status: 'active' | 'stable' | 'high engagement' | 'underperforming' | 'critical' | 'dormant';
  connections?: number;
  clarityImpact?: number;
  lastActivity?: string;
}

// This is a simple component that can be used as children in SchemaTracePlayback
// The actual rendering is handled by the parent component
export default function TraceNode({ 
  path, 
  status, 
  connections, 
  clarityImpact, 
  lastActivity 
}: TraceNodeProps) {
  return null;
}