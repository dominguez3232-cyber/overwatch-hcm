import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Target, Heart, Zap } from 'lucide-react';

interface Archetype {
  id: string;
  key: string;
  name: { en: string; es: string };
  alignment: { en: string; es: string };
  moreInfo?: { en: string; es: string };
  prompts?: { en: string[]; es: string[] };
  goals?: { en: string[]; es: string[] };
  traits?: { en: string[]; es: string[] };
  brands?: string[];
  colors: string;
}

interface BrandArchetypesModuleProps {
  onBack: () => void;
  language: 'en' | 'es';
}

export function BrandArchetypesModule({ onBack, language }: BrandArchetypesModuleProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(null);

  const label = (en: any, es: any, lang: 'en' | 'es') => {
    return lang === 'en' ? en : es;
  };

  const ARCHETYPES: Archetype[] = [
    {
      id: "explorer",
      key: "explorer",
      name: { en: "Explorer", es: "Explorador" },
      alignment: { en: "The Explorer embodies a sense of bold risk-taking and inspirational aspiration.", es: "El Explorador encarna un sentido de toma de riesgos audaz y aspiración inspiradora." },
      moreInfo: { en: "Finds fulfillment through discovery and new experiences.", es: "Encuentra satisfacción a través del descubrimiento y nuevas experiencias." },
      prompts: { 
        en: ["How might we explore new frontiers?", "Are we thinking too locally?", "How might someone from a different culture approach this?"],
        es: ["¿Cómo podríamos explorar nuevas fronteras?", "¿Estamos pensando demasiado localmente?", "¿Cómo podría alguien de una cultura diferente abordar esto?"]
      },
      goals: { 
        en: ["Finds fulfillment through discovery and new experiences."],
        es: ["Encuentra satisfacción a través del descubrimiento y nuevas experiencias."]
      },
      traits: { 
        en: ["Restless", "Adventurous", "Ambitious", "Individualistic", "Independent", "Pioneering", "Daring"],
        es: ["Inquieto", "Aventurero", "Ambicioso", "Individualista", "Independiente", "Pionero", "Audaz"]
      },
      brands: ["Patagonia", "The North Face", "Jeep", "Red Bull"],
      colors: "from-emerald-400 to-teal-500"
    },
    {
      id: "sage",
      key: "sage",
      name: { en: "Sage", es: "Sabio" },
      alignment: { en: "The Sage embodies a sense of the wise elder with access to deeper truths and insights.", es: "El Sabio encarna un sentido del anciano sabio con acceso a verdades más profundas e insights." },
      moreInfo: { en: "Take on the persona of an oracle to zoom out from the situation or problem space.", es: "Adopta la persona de un oráculo para alejarte de la situación o espacio de problema." },
      prompts: { 
        en: ["Why are we really doing this?", "Is there a deeper truth?"],
        es: ["¿Por qué realmente estamos haciendo esto?", "¿Hay una verdad más profunda?"]
      },
      goals: { 
        en: ["Use intelligence to create understanding."],
        es: ["Usar la inteligencia para crear comprensión."]
      },
      traits: { 
        en: ["Knowledgeable", "Assured", "Guiding", "Cheerful", "Clever"],
        es: ["Conocedor", "Seguro", "Guía", "Alegre", "Inteligente"]
      },
      brands: ["Google", "Harvard", "BBC", "Mayo Clinic"],
      colors: "from-indigo-400 to-purple-500"
    },
    {
      id: "jester",
      key: "jester",
      name: { en: "Jester", es: "Bufón" },
      alignment: { en: "The Jester embodies a sense of levity, irreverence, and fun.", es: "El Bufón encarna un sentido de ligereza, irreverencia y diversión." },
      moreInfo: { en: "There is often insight in humor. By exploring the tension that makes something funny, we can home in on the problem, and/or gain a better understanding.", es: "A menudo hay perspicacia en el humor. Al explorar la tensión que hace algo gracioso, podemos concentrarnos en el problema y/o obtener una mejor comprensión." },
      prompts: { 
        en: ["What's a funny and/or irreverent insight?"],
        es: ["¿Cuál es una perspicacia graciosa y/o irreverente?"]
      },
      goals: { 
        en: ["Finds fulfillment through discovery and new experiences."],
        es: ["Encuentra satisfacción a través del descubrimiento y nuevas experiencias."]
      },
      traits: { 
        en: ["Fun Loving", "Playful", "Optimistic", "Light-hearted", "Sarcastic", "Comedic"],
        es: ["Amante de la diversión", "Juguetón", "Optimista", "Alegre", "Sarcástico", "Cómico"]
      },
      brands: ["Old Spice", "Dollar Shave Club", "Ben & Jerry's", "Geico"],
      colors: "from-yellow-400 to-orange-500"
    },
    {
      id: "innocent",
      key: "innocent",
      name: { en: "Innocent", es: "Inocente" },
      alignment: { en: "The Innocent embodies a sense of optimism, goodness, safety and youth.", es: "El Inocente encarna un sentido de optimismo, bondad, seguridad y juventud." },
      moreInfo: { en: "Looking at a problem through a child's eyes can help to mitigate the biasing effects of our preconceptions.", es: "Mirar un problema a través de los ojos de un niño puede ayudar a mitigar los efectos sesgados de nuestras preconcepciones." },
      prompts: { 
        en: ["What would this look like to someone with no background understanding?"],
        es: ["¿Cómo se vería esto para alguien sin conocimiento previo?"]
      },
      goals: { 
        en: ["A world filled with safety, purity, peace, and happiness."],
        es: ["Un mundo lleno de seguridad, pureza, paz y felicidad."]
      },
      traits: { 
        en: ["Purity", "Simplicity", "Joyful", "Optimistic", "Virtuous", "Idealistic", "Moral"],
        es: ["Pureza", "Simplicidad", "Alegre", "Optimista", "Virtuoso", "Idealista", "Moral"]
      },
      brands: ["Coca-Cola", "McDonald's", "Disney", "Dove"],
      colors: "from-pink-400 to-rose-500"
    },
    {
      id: "ruler",
      key: "ruler",
      name: { en: "Ruler", es: "Gobernante" },
      alignment: { en: "The Ruler embodies a sense of responsible confidence, creates order from chaos, and can be trusted to manage and lead.", es: "El Gobernante encarna un sentido de confianza responsable, crea orden del caos y se puede confiar en él para gestionar y liderar." },
      moreInfo: { en: "Demonstrates leadership by taking bold and courageous steps in the right direction.", es: "Demuestra liderazgo tomando pasos audaces y valientes en la dirección correcta." },
      prompts: { 
        en: ["How might we demonstrate our leadership?", "How can we show, rather than tell, that we should be seen as market leaders?"],
        es: ["¿Cómo podríamos demostrar nuestro liderazgo?", "¿Cómo podemos mostrar, en lugar de decir, que deberíamos ser vistos como líderes del mercado?"]
      },
      goals: { 
        en: ["Create success and prosperity."],
        es: ["Crear éxito y prosperidad."]
      },
      traits: { 
        en: ["Executive", "Commanding", "Refined", "Articulate", "Posh", "Power", "Status"],
        es: ["Ejecutivo", "Comandante", "Refinado", "Articulado", "Elegante", "Poder", "Estatus"]
      },
      brands: ["Mercedes-Benz", "Rolex", "IBM", "Microsoft"],
      colors: "from-blue-600 to-indigo-600"
    },
    {
      id: "creator",
      key: "creator",
      name: { en: "Creator", es: "Creador" },
      alignment: { en: "The Creator embodies a sense of imaginative joy and creative expression.", es: "El Creador encarna un sentido de alegría imaginativa y expresión creativa." },
      moreInfo: { en: "People or brands that embody the Creator archetype are typically seen as pioneers and trailblazers, always looking for new and innovative ways to do things.", es: "Las personas o marcas que encarnan el arquetipo del Creador típicamente son vistas como pioneros y abridores de caminos, siempre buscando formas nuevas e innovadoras de hacer las cosas." },
      prompts: { 
        en: ["Is there a way to break through expectations and build something new and amazing?", "How might a divergent or artistic approach be useful or interesting?"],
        es: ["¿Hay una manera de romper las expectativas y construir algo nuevo y asombroso?", "¿Cómo podría ser útil o interesante un enfoque divergente o artístico?"]
      },
      goals: { 
        en: ["See potential everywhere and uncover originality with liberated imagination."],
        es: ["Ver potencial en todas partes y descubrir originalidad con imaginación liberada."]
      },
      traits: { 
        en: ["Inspirational", "Daring", "Provocative", "Innovative", "Creative"],
        es: ["Inspirador", "Audaz", "Provocativo", "Innovador", "Creativo"]
      },
      brands: ["Apple", "LEGO", "Adobe", "Nike"],
      colors: "from-purple-500 to-pink-500"
    },
    {
      id: "rebel",
      key: "rebel",
      name: { en: "Rebel", es: "Rebelde" },
      alignment: { en: "The rebel embodies a sense of maverick mischief and individualism.", es: "El rebelde encarna un sentido de travesura independiente e individualismo." },
      moreInfo: { en: "Rebel brands tend to be independent and nonconformist, and they often advocate for change and progress. Many people say they want innovation, but true innovation requires the courage to question authority and defy conventions.", es: "Las marcas rebeldes tienden a ser independientes y inconformistas, y a menudo abogan por el cambio y el progreso. Muchas personas dicen que quieren innovación, pero la verdadera innovación requiere el coraje de cuestionar la autoridad y desafiar las convenciones." },
      prompts: { 
        en: ["How can we demonstrate our leadership by taking bold and courageous steps in the right direction?"],
        es: ["¿Cómo podemos demostrar nuestro liderazgo tomando pasos audaces y valientes en la dirección correcta?"]
      },
      goals: { 
        en: ["To disrupt their industry or society at large."],
        es: ["Disrumpir su industria o la sociedad en general."]
      },
      traits: { 
        en: ["Non-conforming", "Fearless", "Edgy", "Controversial", "Daring", "Rebellious", "Combative", "Gritty", "Candid"],
        es: ["No conformista", "Sin miedo", "Arriesgado", "Controversial", "Audaz", "Rebelde", "Combativo", "Valiente", "Cándido"]
      },
      brands: ["Harley-Davidson", "Tesla", "Virgin", "Patagonia"],
      colors: "from-red-500 to-orange-600"
    },
    {
      id: "everyperson",
      key: "everyperson",
      name: { en: "Everyperson", es: "Persona Común" },
      alignment: { en: "The Everyperson embodies a sense of belonging and connection.", es: "La Persona Común encarna un sentido de pertenencia y conexión." },
      moreInfo: { en: "We are social creatures, and gaining understanding through relatable stories can help us feel safe and connected.", es: "Somos criaturas sociales, y obtener comprensión a través de historias relacionables puede ayudarnos a sentirnos seguros y conectados." },
      prompts: { 
        en: ["How might we demonstrate our humanity, and a sense of a shared, common experience?"],
        es: ["¿Cómo podríamos demostrar nuestra humanidad y un sentido de experiencia común compartida?"]
      },
      goals: { 
        en: ["Treat each other with honesty and friendliness we can live together in harmony."],
        es: ["Tratarnos unos a otros con honestidad y amabilidad para que podamos vivir juntos en armonía."]
      },
      traits: { 
        en: ["Friendly", "Humble", "Authentic", "Casual", "Approachable", "Human", "Down to Earth", "Welcoming"],
        es: ["Amigable", "Humilde", "Auténtico", "Casual", "Accesible", "Humano", "Con los pies en la tierra", "Acogedor"]
      },
      brands: ["Target", "IKEA", "Home Depot", "Walmart"],
      colors: "from-green-400 to-blue-500"
    },
    {
      id: "magician",
      key: "magician",
      name: { en: "Magician", es: "Mago" },
      alignment: { en: "The Magician embodies a sense of joyful magic, and visionary possibility.", es: "El Mago encarna un sentido de magia alegre y posibilidad visionaria." },
      moreInfo: { en: "We admire those who can make things happen that seem impossible, or bring unexpected joy and connection.", es: "Admiramos a aquellos que pueden hacer que sucedan cosas que parecen imposibles, o traer alegría y conexión inesperadas." },
      prompts: { 
        en: ["How might we create a sense of mystery, magic, or surprised delight?"],
        es: ["¿Cómo podríamos crear un sentido de misterio, magia o deleite sorprendente?"]
      },
      goals: { 
        en: ["Treat each other with honesty and friendliness we can live together in harmony."],
        es: ["Tratarnos unos a otros con honestidad y amabilidad para que podamos vivir juntos en armonía."]
      },
      traits: { 
        en: ["Mystical", "Informed", "Reassuring", "Visionary", "Knowledgeable", "Innovative", "Mysterious", "Wonderful"],
        es: ["Místico", "Informado", "Tranquilizador", "Visionario", "Conocedor", "Innovador", "Misterioso", "Maravilloso"]
      },
      brands: ["Disney", "Tesla", "Apple", "Google"],
      colors: "from-violet-500 to-purple-600"
    },
    {
      id: "caregiver",
      key: "caregiver",
      name: { en: "Caregiver", es: "Cuidador" },
      alignment: { en: "The Caregiver embodies a sense of empathy and care for others.", es: "El Cuidador encarna un sentido de empatía y cuidado por otros." },
      moreInfo: { en: "We admire those who can make things happen that seem impossible, or bring unexpected joy and connection.", es: "Admiramos a aquellos que pueden hacer que sucedan cosas que parecen imposibles, o traer alegría y conexión inesperadas." },
      prompts: { 
        en: ["How might we demonstrate compassion and consideration for others and/or the community?", "How can we show our ethical commitments are real and substantive, rather than performative?"],
        es: ["¿Cómo podríamos demostrar compasión y consideración por otros y/o la comunidad?", "¿Cómo podemos mostrar que nuestros compromisos éticos son reales y sustantivos, en lugar de performativos?"]
      },
      goals: { 
        en: ["Exude compassion, seeking to nurture, care for and help others feel safe."],
        es: ["Exudar compasión, buscando nutrir, cuidar y ayudar a otros a sentirse seguros."]
      },
      traits: { 
        en: ["Caring", "Good", "Reassuring", "Kind", "Protective"],
        es: ["Cariñoso", "Bueno", "Tranquilizador", "Amable", "Protector"]
      },
      brands: ["Johnson & Johnson", "UNICEF", "Salvation Army", "Campbell's"],
      colors: "from-emerald-500 to-green-600"
    },
    {
      id: "lover",
      key: "lover",
      name: { en: "Lover", es: "Amante" },
      alignment: { en: "The Lover embodies a sense of passion, love, intimacy and emotional connection.", es: "El Amante encarna un sentido de pasión, amor, intimidad y conexión emocional." },
      moreInfo: { en: "Love is, arguably, the greatest motivator of human endeavor.", es: "El amor es, posiblemente, el mayor motivador del esfuerzo humano." },
      prompts: { 
        en: ["How might we move past a purely rational approach to connect with people's hearts?", "Is there an opportunity to spark desire?"],
        es: ["¿Cómo podríamos ir más allá de un enfoque puramente racional para conectar con los corazones de las personas?", "¿Hay una oportunidad de despertar el deseo?"]
      },
      goals: { 
        en: ["Treat each other with honesty and friendliness we can live together in harmony."],
        es: ["Tratarnos unos a otros con honestidad y amabilidad para que podamos vivir juntos en armonía."]
      },
      traits: { 
        en: ["Sensual", "Empathetic", "Soothing", "Intimate", "Indulgence", "Closeness"],
        es: ["Sensual", "Empático", "Calmante", "Íntimo", "Indulgencia", "Cercanía"]
      },
      brands: ["Victoria's Secret", "Godiva", "Hallmark", "Tiffany & Co."],
      colors: "from-rose-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {label("Brand Archetypes", "Arquetipos de Marca", language)}
            </h1>
            <p className="text-slate-400">
              {label(
                "Discover your brand's personality and strategic positioning through proven archetypal frameworks",
                "Descubre la personalidad de tu marca y posicionamiento estratégico a través de marcos arquetípicos probados",
                language
              )}
            </p>
          </div>
          <Button onClick={onBack} className="bg-slate-700 hover:bg-slate-600">
            {label("← Back", "← Volver", language)}
          </Button>
        </div>

        {/* Archetypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ARCHETYPES.map((archetype) => (
            <motion.div
              key={archetype.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`h-full cursor-pointer bg-gradient-to-br ${archetype.colors} border-0 text-white relative overflow-hidden group`}
                onClick={() => setSelectedArchetype(archetype)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {label(archetype.name.en, archetype.name.es, language)}
                    </h3>
                  </div>
                  
                  <p className="text-white/90 text-sm mb-4 line-clamp-3">
                    {label(archetype.alignment.en, archetype.alignment.es, language)}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {archetype.traits && label(archetype.traits.en, archetype.traits.es, language).slice(0, 3).map((trait, i) => (
                        <Badge key={i} className="bg-white/20 text-white border-0 text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                    
                    {archetype.brands && (
                      <p className="text-white/70 text-xs">
                        {archetype.brands.slice(0, 2).join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedArchetype && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setSelectedArchetype(null)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-lg bg-slate-900 border-l border-slate-700 z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedArchetype.colors} flex items-center justify-center`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {label(selectedArchetype.name.en, selectedArchetype.name.es, language)}
                    </h2>
                  </div>
                  <Button
                    onClick={() => setSelectedArchetype(null)}
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                    <div className="text-white/80 font-medium mb-2">
                      {label("Core Alignment", "Alineación Central", language)}
                    </div>
                    <div className="text-white/90">
                      {label(selectedArchetype.alignment.en, selectedArchetype.alignment.es, language)}
                    </div>
                  </div>

                  {selectedArchetype.moreInfo && (
                    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                      <div className="text-white/80 font-medium mb-2">
                        {label("Strategic Context", "Contexto Estratégico", language)}
                      </div>
                      <div className="text-white/70">
                        {label(selectedArchetype.moreInfo.en, selectedArchetype.moreInfo.es, language)}
                      </div>
                    </div>
                  )}

                  {selectedArchetype.prompts && selectedArchetype.prompts.en.length > 0 && (
                    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                      <div className="text-white/80 font-medium mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {label("Strategic Prompts", "Preguntas Estratégicas", language)}
                      </div>
                      <ul className="space-y-2">
                        {label(selectedArchetype.prompts.en, selectedArchetype.prompts.es, language).map((prompt, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                            {prompt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedArchetype.goals && selectedArchetype.goals.en.length > 0 && (
                    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                      <div className="text-white/80 font-medium mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        {label("Core Goals", "Objetivos Centrales", language)}
                      </div>
                      <ul className="space-y-2">
                        {label(selectedArchetype.goals.en, selectedArchetype.goals.es, language).map((goal, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedArchetype.traits && selectedArchetype.traits.en.length > 0 && (
                    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                      <div className="text-white/80 font-medium mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {label("Brand Traits", "Rasgos de Marca", language)}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {label(selectedArchetype.traits.en, selectedArchetype.traits.es, language).map((trait, i) => (
                          <Badge key={i} className="bg-white/10 text-white border-white/20 text-xs">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedArchetype.brands && selectedArchetype.brands.length > 0 && (
                    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                      <div className="text-white/80 font-medium mb-2">
                        {label("Example Brands", "Marcas Ejemplo", language)}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedArchetype.brands.map((brand, i) => (
                          <Badge key={i} className={`bg-gradient-to-r ${selectedArchetype.colors} text-white border-0 text-xs`}>
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}