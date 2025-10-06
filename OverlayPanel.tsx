import React from "react";

export default function OverlayPanel({ schema, language }) {
  if (!schema) return null;

  const coaching = schema.coachingOverlay?.[language] || {};

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-4">Coaching Overlay</h2>
      <div className="space-y-3 text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">Metric Context:</span>
          <p>{coaching.metricContext}</p>
        </div>
        <div>
          <span className="font-semibold text-foreground">Strategic Guidance:</span>
          <p>{coaching.strategicGuidance}</p>
        </div>
        <div>
          <span className="font-semibold text-foreground">Tactical Tip:</span>
          <p>{coaching.tacticalTip}</p>
        </div>
      </div>
    </div>
  );
}