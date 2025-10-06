import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DemoSequence } from '../utils/useSequenceManager';

interface LoadSequenceDropdownProps {
  sequences: DemoSequence[];
  isLoading: boolean;
  language: 'en' | 'es';
  onLoad: (sequence: DemoSequence) => void;
  onDelete?: (id: string) => void;
  onLoadShared?: (shareCode: string) => void;
  disabled?: boolean;
}

export const LoadSequenceDropdown: React.FC<LoadSequenceDropdownProps> = ({
  sequences,
  isLoading,
  language,
  onLoad,
  onDelete,
  onLoadShared,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareCode, setShareCode] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter sequences based on category and search term
  const filteredSequences = sequences.filter(seq => {
    const matchesCategory = filterCategory === 'all' || 
      (seq.sequence.length > 0 && seq.name.toLowerCase().includes(filterCategory.toLowerCase()));
    const matchesSearch = seq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (seq.sequence && seq.sequence.some(step => 
        step.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    return matchesCategory && matchesSearch;
  });

  // Group sequences by category
  const groupedSequences = filteredSequences.reduce((groups, seq) => {
    // Infer category from sequence name or content
    let category = 'custom';
    const nameLower = seq.name.toLowerCase();
    if (nameLower.includes('investor') || nameLower.includes('demo') || nameLower.includes('pitch')) {
      category = 'investor-demo';
    } else if (nameLower.includes('onboarding') || nameLower.includes('training')) {
      category = 'onboarding-flow';
    } else if (nameLower.includes('coaching') || nameLower.includes('tactical')) {
      category = 'tactical-coaching';
    }

    if (!groups[category]) groups[category] = [];
    groups[category].push(seq);
    return groups;
  }, {} as Record<string, DemoSequence[]>);

  const handleLoadShared = () => {
    if (shareCode.trim() && onLoadShared) {
      onLoadShared(shareCode.trim());
      setShareCode('');
      setIsOpen(false);
    }
  };

  const categoryIcons = {
    'investor-demo': '💼',
    'onboarding-flow': '🚀',
    'tactical-coaching': '🎯',
    'custom': '⚙️'
  };

  const categoryNames = {
    'investor-demo': {
      en: 'Investor Demos',
      es: 'Demos Inversor'
    },
    'onboarding-flow': {
      en: 'Onboarding Flows',
      es: 'Flujos Incorporación'
    },
    'tactical-coaching': {
      en: 'Tactical Coaching',
      es: 'Coaching Táctico'
    },
    'custom': {
      en: 'Custom Sequences',
      es: 'Secuencias Personalizadas'
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          disabled={disabled || isLoading}
          className="flex items-center gap-2"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            />
          ) : (
            '📂'
          )}
          {language === 'en' ? 'Load Sequence' : 'Cargar Secuencia'}
          {sequences.length > 0 && (
            <Badge variant="secondary" className="ml-1">
              {sequences.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-96 p-0" align="start">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold mb-3">
            {language === 'en' ? 'Load Demo Sequence' : 'Cargar Secuencia Demo'}
          </h3>
          
          {/* Load from Share Code */}
          {onLoadShared && (
            <div className="space-y-2 mb-4 p-3 bg-secondary/30 rounded-lg">
              <h4 className="text-sm font-medium text-muted-foreground">
                {language === 'en' ? 'Load Shared Sequence' : 'Cargar Secuencia Compartida'}
              </h4>
              <div className="flex gap-2">
                <Input
                  placeholder={language === 'en' ? 'Enter share code...' : 'Ingrese código...'}
                  value={shareCode}
                  onChange={(e) => setShareCode(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleLoadShared();
                    }
                  }}
                  className="text-sm"
                />
                <Button 
                  size="sm" 
                  onClick={handleLoadShared}
                  disabled={!shareCode.trim()}
                >
                  {language === 'en' ? 'Load' : 'Cargar'}
                </Button>
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="space-y-2">
            <Input
              placeholder={language === 'en' ? 'Search sequences...' : 'Buscar secuencias...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm"
            />
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === 'en' ? 'All Categories' : 'Todas las Categorías'}
                </SelectItem>
                <SelectItem value="investor">
                  💼 {language === 'en' ? 'Investor Demos' : 'Demos Inversor'}
                </SelectItem>
                <SelectItem value="onboarding">
                  🚀 {language === 'en' ? 'Onboarding' : 'Incorporación'}
                </SelectItem>
                <SelectItem value="coaching">
                  🎯 {language === 'en' ? 'Coaching' : 'Coaching'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ScrollArea className="max-h-80">
          <div className="p-2">
            {filteredSequences.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                    {language === 'en' ? 'Loading sequences...' : 'Cargando secuencias...'}
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-2">📭</div>
                    <div className="text-sm">
                      {searchTerm || filterCategory !== 'all' 
                        ? (language === 'en' ? 'No sequences match your filters' : 'No hay secuencias que coincidan')
                        : (language === 'en' ? 'No saved sequences found' : 'No se encontraron secuencias guardadas')
                      }
                    </div>
                    {(searchTerm || filterCategory !== 'all') && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          setSearchTerm('');
                          setFilterCategory('all');
                        }}
                      >
                        {language === 'en' ? 'Clear Filters' : 'Limpiar Filtros'}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              Object.entries(groupedSequences).map(([category, categorySequences]) => (
                <div key={category} className="mb-4">
                  <div className="flex items-center gap-2 mb-2 px-2">
                    <span className="text-lg">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {categoryNames[category as keyof typeof categoryNames]?.[language] || category}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {categorySequences.length}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    {categorySequences.map((sequence) => (
                      <motion.div
                        key={sequence.id}
                        whileHover={{ scale: 1.02 }}
                        className="group"
                      >
                        <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-medium text-sm truncate">
                                    {sequence.name}
                                  </h5>
                                  {sequence.isShared && (
                                    <Badge variant="outline" className="text-xs">
                                      {language === 'en' ? 'Shared' : 'Compartido'}
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <span>
                                    {sequence.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
                                  </span>
                                  <span>•</span>
                                  <span>
                                    {new Date(sequence.created_at).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onLoad(sequence);
                                    setIsOpen(false);
                                  }}
                                  className="h-7 px-2 text-xs"
                                >
                                  {language === 'en' ? 'Load' : 'Cargar'}
                                </Button>
                                {onDelete && sequence.id && !sequence.isShared && (
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onDelete(sequence.id!);
                                    }}
                                    className="h-7 px-2 text-xs"
                                  >
                                    🗑️
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};