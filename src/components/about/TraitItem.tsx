import { useState } from "react";

type Props = {
  item: string;
};

const TraitItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getTraitColor = (trait: string) => {
    const traitLower = trait.toLowerCase();
    if (
      traitLower.includes("liderazgo") ||
      traitLower.includes("comunicación") ||
      traitLower.includes("trabajo en equipo")
    )
      return "from-blue-500 to-indigo-600 border-blue-200 dark:border-blue-800";
    if (
      traitLower.includes("creatividad") ||
      traitLower.includes("innovación") ||
      traitLower.includes("diseño")
    )
      return "from-purple-500 to-pink-600 border-purple-200 dark:border-purple-800";
    if (
      traitLower.includes("análisis") ||
      traitLower.includes("resolución") ||
      traitLower.includes("problemas")
    )
      return "from-green-500 to-emerald-600 border-green-200 dark:border-green-800";
    if (
      traitLower.includes("organización") ||
      traitLower.includes("planificación") ||
      traitLower.includes("gestión")
    )
      return "from-orange-500 to-amber-600 border-orange-200 dark:border-orange-800";
    if (
      traitLower.includes("aprendizaje") ||
      traitLower.includes("adaptación") ||
      traitLower.includes("flexibilidad")
    )
      return "from-cyan-500 to-teal-600 border-cyan-200 dark:border-cyan-800";
    if (
      traitLower.includes("persistencia") ||
      traitLower.includes("dedicación") ||
      traitLower.includes("esfuerzo")
    )
      return "from-red-500 to-rose-600 border-red-200 dark:border-red-800";

    return "from-gray-500 to-gray-700 border-gray-200 dark:border-gray-800";
  };

  const colorClass = getTraitColor(item);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        relative px-5 py-3 rounded-2xl font-semibold text-sm 
        border-2 transition-all duration-500 transform
        bg-white/90 dark:bg-gray-800/90
        backdrop-blur-sm
        group-hover:scale-110 group-hover:shadow-2xl
        ${colorClass}
        ${
          isHovered
            ? `text-white bg-gradient-to-r shadow-lg border-transparent`
            : "text-gray-700 dark:text-gray-300"
        }
      `}
      >
        {isHovered && (
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
        )}
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${
            colorClass.split(" ")[0]
          } ${
            colorClass.split(" ")[1]
          } flex items-center justify-center transform transition-all duration-300 ${
            isHovered ? "scale-125 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-xs text-white">✓</span>
        </div>
        <span className="relative z-10">{item}</span>
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${
            colorClass.split(" ")[0]
          } ${
            colorClass.split(" ")[1]
          } rounded-full transition-all duration-300 ${
            isHovered ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        ></div>
      </div>
      {isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 shadow-xl border border-gray-800 dark:border-gray-200">
          <div className="font-semibold">{getTraitDescription(item)}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45 border-r border-b border-gray-900 dark:border-white"></div>
        </div>
      )}
    </div>
  );
};

const getTraitDescription = (trait: string): string => {
  const traitLower = trait.toLowerCase();

  const descriptions: { [key: string]: string } = {
    liderazgo: "Capacidad para guiar y motivar equipos",
    comunicación: "Habilidad para transmitir ideas efectivamente",
    "trabajo en equipo": "Colaboración eficaz con otros miembros",
    creatividad: "Pensamiento innovador y generación de ideas",
    innovación: "Implementación de soluciones novedosas",
    diseño: "Enfoque en la estética y experiencia de usuario",
    análisis: "Evaluación detallada de información y datos",
    resolución: "Habilidad para solucionar problemas complejos",
    problemas: "Enfoque lógico para enfrentar desafíos",
    organización: "Planificación y estructuración eficiente",
    planificación: "Estrategia y gestión del tiempo",
    gestión: "Coordinación de recursos y proyectos",
    aprendizaje: "Capacidad de adquirir nuevos conocimientos",
    adaptación: "Flexibilidad ante cambios y nuevos entornos",
    flexibilidad: "Adaptabilidad a diferentes situaciones",
    persistencia: "Determinación y constancia en los objetivos",
    dedicación: "Compromiso y entrega en las tareas",
    esfuerzo: "Trabajo arduo y consistente",
  };

  for (const [key, value] of Object.entries(descriptions)) {
    if (traitLower.includes(key)) {
      return value;
    }
  }

  return "Habilidad personal o profesional";
};

export default TraitItem;