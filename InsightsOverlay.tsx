interface InsightsOverlayProps {
  language: 'en' | 'es';
}

export function InsightsOverlay({ language }: InsightsOverlayProps) {
  const content = {
    en: {
      narrative: "Pilot conversion in Mexico City delivered 18% ROI uplift vs baseline",
      kpis: [
        { label: "ROI Delta vs Baseline", value: "+18.2%" },
        { label: "Pilot Conversion Rate", value: "23.4%" },
        { label: "Customer Lifetime Value Impact", value: "+$1,247" }
      ]
    },
    es: {
      narrative: "La conversión piloto en Ciudad de México generó un aumento del 18% en ROI frente a la línea base",
      kpis: [
        { label: "Delta ROI vs Línea Base", value: "+18.2%" },
        { label: "Tasa de Conversión Piloto", value: "23.4%" },
        { label: "Impacto en Valor de Vida del Cliente", value: "+$1,247" }
      ]
    }
  };

  return (
    <div className="px-20 py-6 space-y-6">
      {/* Narrative Box */}
      <div className="bg-muted border-l-4 p-6 rounded-r-lg" style={{ borderLeftColor: 'var(--success-green)' }}>
        <p className="text-white text-lg leading-relaxed">
          {content[language].narrative}
        </p>
      </div>

      {/* KPI Callouts */}
      <div className="grid grid-cols-3 gap-6">
        {content[language].kpis.map((kpi, index) => (
          <div key={index} className="bg-card rounded-lg shadow-md border border-border p-6 text-center">
            <div 
              className="text-3xl font-bold mb-2"
              style={{ color: 'var(--success-green)' }}
            >
              {kpi.value}
            </div>
            <div className="text-sm font-medium text-white">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}