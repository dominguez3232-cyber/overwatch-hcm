import React from "react";

export default function ProofBlock({ proof, language }) {
  if (!proof) return null;

  return (
    <div className="bg-card/50 border-l-4 border-primary rounded-lg p-6 shadow-sm animate-pulse">
      <h2 className="text-xl font-bold text-primary mb-2">Proof Engine</h2>
      <div className="text-muted-foreground text-lg font-semibold">
        {proof.roiMetric}: <span className="text-foreground">{proof.value}</span> {proof.unit}
      </div>
      <p className="mt-2 text-primary/80 italic">{proof.caption?.[language]}</p>
    </div>
  );
}