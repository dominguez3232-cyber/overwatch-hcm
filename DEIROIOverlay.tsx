import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface DEIMetrics {
  genderRepresentation: {
    female: number
    male: number
    nonBinary: number
  }
  ethnicRepresentation: {
    hispanic: number
    black: number
    asian: number
    white: number
  }
  roiCorrelation: {
    diversityScore: number
    marketAccessLift: number
    retentionBoost: number
    revenueImpact: number
  }
}

interface DEIROIOverlayProps {
  language: 'en' | 'es'
  onSourceTalent?: () => void
}

export function DEIROIOverlay({ language, onSourceTalent }: DEIROIOverlayProps) {
  const [metrics] = useState<DEIMetrics>({
    genderRepresentation: { female: 32, male: 65, nonBinary: 3 },
    ethnicRepresentation: { hispanic: 18, black: 12, asian: 8, white: 62 },
    roiCorrelation: { diversityScore: 72, marketAccessLift: 14.2, retentionBoost: 18.7, revenueImpact: 2.3 }
  })

  const [selectedMetric, setSelectedMetric] = useState<'gender' | 'ethnic' | 'roi'>('gender')
  const [lpCompliance] = useState<'green' | 'amber' | 'red'>('green')

  const labels = {
    en: {
      title: 'Diversity Impact ROI',
      genderRep: 'Gender Representation',
      ethnicRep: 'Ethnic Representation', 
      roiImpact: 'ROI Impact',
      lpCompliance: 'LP Compliance',
      sourceTalent: 'Source Talent',
      marketAccess: 'Market Access Lift',
      retention: 'Retention Boost',
      revenue: 'Revenue Impact',
      diversityScore: 'Diversity Score',
      female: 'Female',
      male: 'Male',
      nonBinary: 'Non-Binary',
      hispanic: 'Hispanic/Latino',
      black: 'Black/African American',
      asian: 'Asian/Pacific Islander',
      white: 'White',
      narrative: 'Recent hires expanded LATAM market reach by 14% and improved retention by 18%',
      complianceGreen: 'Meets all LP DEI requirements'
    },
    es: {
      title: 'Impacto de la Diversidad en el ROI',
      genderRep: 'Representación de Género',
      ethnicRep: 'Representación Étnica',
      roiImpact: 'Impacto en ROI',
      lpCompliance: 'Cumplimiento LP',
      sourceTalent: 'Buscar Talento',
      marketAccess: 'Aumento Acceso Mercado',
      retention: 'Mejora Retención',
      revenue: 'Impacto Ingresos',
      diversityScore: 'Puntuación Diversidad',
      female: 'Femenino',
      male: 'Masculino',
      nonBinary: 'No Binario',
      hispanic: 'Hispano/Latino',
      black: 'Negro/Afroamericano',
      asian: 'Asiático/Isleño Pacífico',
      white: 'Blanco',
      narrative: 'Contrataciones recientes expandieron alcance LATAM en 14% y mejoraron retención en 18%',
      complianceGreen: 'Cumple todos los requisitos DEI de LP'
    }
  }

  const t = labels[language]

  const getComplianceColor = () => {
    switch (lpCompliance) {
      case 'green': return 'bg-green-600'
      case 'amber': return 'bg-yellow-600'
      case 'red': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  const renderMetricDetail = () => {
    switch (selectedMetric) {
      case 'gender':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.female}</span>
              <span className="text-lg font-bold text-blue-400">{metrics.genderRepresentation.female}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${metrics.genderRepresentation.female}%` }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.male}</span>
              <span className="text-lg font-bold text-green-400">{metrics.genderRepresentation.male}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: `${metrics.genderRepresentation.male}%` }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.nonBinary}</span>
              <span className="text-lg font-bold text-purple-400">{metrics.genderRepresentation.nonBinary}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${metrics.genderRepresentation.nonBinary}%` }}></div>
            </div>
          </div>
        )
      
      case 'ethnic':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.hispanic}</span>
              <span className="text-lg font-bold text-green-400">{metrics.ethnicRepresentation.hispanic}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: `${metrics.ethnicRepresentation.hispanic}%` }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.black}</span>
              <span className="text-lg font-bold text-blue-400">{metrics.ethnicRepresentation.black}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${metrics.ethnicRepresentation.black}%` }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.asian}</span>
              <span className="text-lg font-bold text-purple-400">{metrics.ethnicRepresentation.asian}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${metrics.ethnicRepresentation.asian}%` }}></div>
            </div>
          </div>
        )
      
      case 'roi':
        return (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{metrics.roiCorrelation.diversityScore}/100</div>
              <div className="text-sm text-gray-400">{t.diversityScore}</div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">+{metrics.roiCorrelation.marketAccessLift}%</div>
                <div className="text-xs text-gray-400">{t.marketAccess}</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">+{metrics.roiCorrelation.retentionBoost}%</div>
                <div className="text-xs text-gray-400">{t.retention}</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">+{metrics.roiCorrelation.revenueImpact}%</div>
                <div className="text-xs text-gray-400">{t.revenue}</div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="p-6 lg:p-20 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">{t.title}</h1>
        <div className="flex items-center gap-4">
          <Badge className={`${getComplianceColor()} text-white`}>
            {t.lpCompliance}
          </Badge>
          {onSourceTalent && (
            <Button onClick={onSourceTalent} className="bg-green-600 hover:bg-green-700">
              {t.sourceTalent}
            </Button>
          )}
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Panel - Metric Selector */}
        <div className="space-y-4">
          <div className="space-y-2">
            <button
              onClick={() => setSelectedMetric('gender')}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedMetric === 'gender' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {t.genderRep}
            </button>
            
            <button
              onClick={() => setSelectedMetric('ethnic')}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedMetric === 'ethnic' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {t.ethnicRep}
            </button>
            
            <button
              onClick={() => setSelectedMetric('roi')}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedMetric === 'roi' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {t.roiImpact}
            </button>
          </div>
        </div>

        {/* Center Panel - Metric Detail */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {selectedMetric === 'gender' && t.genderRep}
            {selectedMetric === 'ethnic' && t.ethnicRep}
            {selectedMetric === 'roi' && t.roiImpact}
          </h3>
          
          {renderMetricDetail()}
        </Card>

        {/* Right Panel - Summary */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.diversityScore}</span>
              <span className="text-lg font-bold text-green-400">{metrics.roiCorrelation.diversityScore}/100</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.marketAccess}</span>
              <span className="text-lg font-bold text-blue-400">+{metrics.roiCorrelation.marketAccessLift}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{t.retention}</span>
              <span className="text-lg font-bold text-purple-400">+{metrics.roiCorrelation.retentionBoost}%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Narrative Overlay */}
      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-600/30 p-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <p className="text-green-300">{t.narrative}</p>
        </div>
        
        <div className="mt-4 text-xs text-gray-400">
          {t.complianceGreen}
        </div>
      </Card>
    </div>
  )
}