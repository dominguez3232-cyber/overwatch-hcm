import { FunctionComponent } from 'react';
import { Users, Moon, Sun } from 'lucide-react';

interface Frame5Props {
  language?: 'en' | 'es';
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const Frame5: FunctionComponent<Frame5Props> = ({ 
  language = 'en', 
  isDarkMode = true, 
  onToggleDarkMode 
}) => {
  const labels = {
    en: {
      users: '100K+ Used',
      darkMode: 'Light / Dark Mode'
    },
    es: {
      users: '100K+ Usado',
      darkMode: 'Modo Claro / Oscuro'
    }
  };

  const currentLabels = labels[language];

  return (
    <div className="flex items-center gap-6 px-4 py-2">
      {/* Usage Statistics */}
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-green-400" />
        <span className="text-sm font-medium text-gray-300">
          {currentLabels.users}
        </span>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onToggleDarkMode}
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          {isDarkMode ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
          <span>{currentLabels.darkMode}</span>
        </button>
      </div>
    </div>
  );
};

export default Frame5;