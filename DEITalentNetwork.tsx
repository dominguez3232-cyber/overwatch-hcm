import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'

interface Candidate {
  id: string
  name: string
  role: string
  experience: number
  demographics: {
    gender: 'female' | 'male' | 'non-binary'
    ethnicity: 'hispanic' | 'black' | 'asian' | 'white'
  }
  skills: string[]
  location: string
  languages: string[]
  expectedImpact: {
    genderShift: number
    ethnicityShift: number
    marketAccess: number
  }
  availability: 'immediate' | 'two-weeks' | 'one-month'
  salaryRange: string
}

interface DEITalentNetworkProps {
  language: 'en' | 'es'
  onBack?: () => void
}

export function DEITalentNetwork({ language, onBack }: DEITalentNetworkProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const [candidates] = useState<Candidate[]>([
    {
      id: '1',
      name: 'María González',
      role: 'Senior Software Engineer',
      experience: 7,
      demographics: { gender: 'female', ethnicity: 'hispanic' },
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      location: 'Austin, TX',
      languages: ['English', 'Spanish', 'Portuguese'],
      expectedImpact: { genderShift: 3.2, ethnicityShift: 4.1, marketAccess: 12.5 },
      availability: 'two-weeks',
      salaryRange: '$140K - $160K'
    },
    {
      id: '2',
      name: 'Keisha Williams',
      role: 'Product Manager',
      experience: 5,
      demographics: { gender: 'female', ethnicity: 'black' },
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
      location: 'San Francisco, CA',
      languages: ['English'],
      expectedImpact: { genderShift: 2.8, ethnicityShift: 3.9, marketAccess: 8.2 },
      availability: 'immediate',
      salaryRange: '$150K - $170K'
    },
    {
      id: '3',
      name: 'Carlos Mendoza',
      role: 'VP of Engineering',
      experience: 12,
      demographics: { gender: 'male', ethnicity: 'hispanic' },
      skills: ['Leadership', 'System Architecture', 'Team Building', 'Go'],
      location: 'Miami, FL',
      languages: ['English', 'Spanish'],
      expectedImpact: { genderShift: 0.5, ethnicityShift: 5.2, marketAccess: 18.3 },
      availability: 'one-month',
      salaryRange: '$220K - $250K'
    },
    {
      id: '4',
      name: 'Jennifer Chen',
      role: 'Data Scientist',
      experience: 4,
      demographics: { gender: 'female', ethnicity: 'asian' },
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Statistics'],
      location: 'Seattle, WA',
      languages: ['English', 'Mandarin'],
      expectedImpact: { genderShift: 2.1, ethnicityShift: 2.3, marketAccess: 15.7 },
      availability: 'immediate',
      salaryRange: '$130K - $150K'
    }
  ])

  const labels = {
    en: {
      title: 'DEI Talent Intelligence Network',
      searchPlaceholder: 'Search by role, skills, or location...',
      candidateResults: 'Candidate Results',
      expectedImpact: 'Expected DEI Impact',
      genderShift: 'Gender Shift',
      ethnicityShift: 'Ethnicity Shift',
      marketAccess: 'Market Access',
      skills: 'Skills',
      languages: 'Languages',
      yearsExp: 'years experience',
      viewProfile: 'View Profile',
      scheduleInterview: 'Schedule Interview',
      backToDashboard: 'Back to Dashboard',
      immediate: 'Immediate',
      twoWeeks: 'Two Weeks',
      oneMonth: 'One Month',
      female: 'Female',
      hispanic: 'Hispanic/Latino',
      black: 'Black/African American',
      asian: 'Asian/Pacific Islander'
    },
    es: {
      title: 'Red de Inteligencia de Talento DEI',
      searchPlaceholder: 'Buscar por puesto, habilidades o ubicación...',
      candidateResults: 'Resultados de Candidatos',
      expectedImpact: 'Impacto DEI Esperado',
      genderShift: 'Cambio de Género',
      ethnicityShift: 'Cambio de Etnicidad',
      marketAccess: 'Acceso al Mercado',
      skills: 'Habilidades',
      languages: 'Idiomas',
      yearsExp: 'años de experiencia',
      viewProfile: 'Ver Perfil',
      scheduleInterview: 'Agendar Entrevista',
      backToDashboard: 'Volver al Dashboard',
      immediate: 'Inmediato',
      twoWeeks: 'Dos Semanas',
      oneMonth: 'Un Mes',
      female: 'Femenino',
      hispanic: 'Hispano/Latino',
      black: 'Negro/Afroamericano',
      asian: 'Asiático/Isleño Pacífico'
    }
  }

  const t = labels[language]

  const getDemographicLabel = (gender: string, ethnicity: string) => {
    const genderMap = {
      female: t.female,
      male: language === 'en' ? 'Male' : 'Masculino',
      'non-binary': language === 'en' ? 'Non-Binary' : 'No Binario'
    }
    
    const ethnicityMap = {
      hispanic: t.hispanic,
      black: t.black,
      asian: t.asian,
      white: language === 'en' ? 'White' : 'Blanco'
    }

    return `${genderMap[gender as keyof typeof genderMap]}, ${ethnicityMap[ethnicity as keyof typeof ethnicityMap]}`
  }

  const getAvailabilityLabel = (availability: string) => {
    const availabilityMap = {
      immediate: t.immediate,
      'two-weeks': t.twoWeeks,
      'one-month': t.oneMonth
    }
    return availabilityMap[availability as keyof typeof availabilityMap]
  }

  const filteredCandidates = candidates.filter(candidate => 
    searchTerm === '' || 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="p-6 lg:p-20 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">{t.title}</h1>
        {onBack && (
          <Button onClick={onBack} variant="outline" className="border-gray-600 hover:bg-gray-800">
            {t.backToDashboard}
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="max-w-md">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="bg-slate-700 border-slate-600 text-white"
        />
      </div>

      {/* Candidate Results */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">{t.candidateResults}</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
                  <p className="text-gray-300">{candidate.role}</p>
                  <p className="text-sm text-gray-400">
                    {candidate.experience} {t.yearsExp} • {candidate.location}
                  </p>
                </div>
                
                <Badge className="bg-green-600 text-white">
                  {getAvailabilityLabel(candidate.availability)}
                </Badge>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">{getDemographicLabel(candidate.demographics.gender, candidate.demographics.ethnicity)}</p>
                <p className="text-sm font-medium text-green-400">{candidate.salaryRange}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">{t.skills}</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-700 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                  {candidate.skills.length > 4 && (
                    <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                      +{candidate.skills.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">{t.languages}</h4>
                <p className="text-sm text-gray-400">{candidate.languages.join(', ')}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">{t.expectedImpact}</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">+{candidate.expectedImpact.genderShift}%</div>
                    <div className="text-xs text-gray-400">{t.genderShift}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">+{candidate.expectedImpact.ethnicityShift}%</div>
                    <div className="text-xs text-gray-400">{t.ethnicityShift}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">+{candidate.expectedImpact.marketAccess}%</div>
                    <div className="text-xs text-gray-400">{t.marketAccess}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-gray-600 hover:bg-gray-800">
                  {t.viewProfile}
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  {t.scheduleInterview}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}