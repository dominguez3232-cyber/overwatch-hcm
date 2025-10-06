import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface FilterBarProps {
  language: 'en' | 'es';
  filters: {
    entity: string;
    scenario: string;
    currency: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export function FilterBar({ language, filters, onFilterChange }: FilterBarProps) {
  const labels = {
    en: {
      entity: "Entity / Market",
      scenario: "Scenario", 
      currency: "Currency"
    },
    es: {
      entity: "Entidad / Mercado",
      scenario: "Escenario",
      currency: "Moneda"
    }
  };

  const cities = {
    en: {
      // US Markets
      'san-francisco': 'San Francisco',
      'san-diego': 'San Diego',
      'minneapolis': 'Minneapolis',
      'dallas': 'Dallas',
      'austin': 'Austin',
      'new-york': 'New York',
      'detroit': 'Detroit',
      'chicago': 'Chicago',
      'miami': 'Miami',
      'houston': 'Houston',
      'phoenix': 'Phoenix',
      // Mexico Markets
      'mexico-city': 'Mexico City',
      'monterrey': 'Monterrey',
      'guadalajara': 'Guadalajara'
    },
    es: {
      // US Markets
      'san-francisco': 'San Francisco',
      'san-diego': 'San Diego',
      'minneapolis': 'Minneapolis',
      'dallas': 'Dallas',
      'austin': 'Austin',
      'new-york': 'Nueva York',
      'detroit': 'Detroit',
      'chicago': 'Chicago',
      'miami': 'Miami',
      'houston': 'Houston',
      'phoenix': 'Phoenix',
      // Mexico Markets
      'mexico-city': 'Ciudad de México',
      'monterrey': 'Monterrey',
      'guadalajara': 'Guadalajara'
    }
  };

  return (
    <div className="h-15 px-20 py-3 bg-muted border-b border-border flex items-center gap-6">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-white">
          {labels[language].entity}:
        </label>
        <Select value={filters.entity} onValueChange={(value) => onFilterChange('entity', value)}>
          <SelectTrigger className="w-48 bg-card border-border text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card border-border max-h-60 overflow-y-auto">
            <div className="px-2 py-1 text-xs font-medium text-gray-400 border-b border-border mb-1">
              {language === 'en' ? 'US Markets' : 'Mercados EE.UU.'}
            </div>
            <SelectItem value="san-francisco" className="text-white hover:bg-muted">
              {cities[language]['san-francisco']}
            </SelectItem>
            <SelectItem value="san-diego" className="text-white hover:bg-muted">
              {cities[language]['san-diego']}
            </SelectItem>
            <SelectItem value="minneapolis" className="text-white hover:bg-muted">
              {cities[language]['minneapolis']}
            </SelectItem>
            <SelectItem value="dallas" className="text-white hover:bg-muted">
              {cities[language]['dallas']}
            </SelectItem>
            <SelectItem value="austin" className="text-white hover:bg-muted">
              {cities[language]['austin']}
            </SelectItem>
            <SelectItem value="new-york" className="text-white hover:bg-muted">
              {cities[language]['new-york']}
            </SelectItem>
            <SelectItem value="detroit" className="text-white hover:bg-muted">
              {cities[language]['detroit']}
            </SelectItem>
            <SelectItem value="chicago" className="text-white hover:bg-muted">
              {cities[language]['chicago']}
            </SelectItem>
            <SelectItem value="miami" className="text-white hover:bg-muted">
              {cities[language]['miami']}
            </SelectItem>
            <SelectItem value="houston" className="text-white hover:bg-muted">
              {cities[language]['houston']}
            </SelectItem>
            <SelectItem value="phoenix" className="text-white hover:bg-muted">
              {cities[language]['phoenix']}
            </SelectItem>
            
            <div className="px-2 py-1 text-xs font-medium text-gray-400 border-b border-t border-border my-1">
              {language === 'en' ? 'Mexico Markets' : 'Mercados México'}
            </div>
            <SelectItem value="mexico-city" className="text-white hover:bg-muted">
              {cities[language]['mexico-city']}
            </SelectItem>
            <SelectItem value="monterrey" className="text-white hover:bg-muted">
              {cities[language]['monterrey']}
            </SelectItem>
            <SelectItem value="guadalajara" className="text-white hover:bg-muted">
              {cities[language]['guadalajara']}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-white">
          {labels[language].scenario}:
        </label>
        <Select value={filters.scenario} onValueChange={(value) => onFilterChange('scenario', value)}>
          <SelectTrigger className="w-32 bg-card border-border text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="actual" className="text-white hover:bg-muted">Actual</SelectItem>
            <SelectItem value="forecast" className="text-white hover:bg-muted">Forecast</SelectItem>
            <SelectItem value="pilot" className="text-white hover:bg-muted">Pilot</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-white">
          {labels[language].currency}:
        </label>
        <Select value={filters.currency} onValueChange={(value) => onFilterChange('currency', value)}>
          <SelectTrigger className="w-24 bg-card border-border text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="USD" className="text-white hover:bg-muted">USD</SelectItem>
            <SelectItem value="MXN" className="text-white hover:bg-muted">MXN</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}