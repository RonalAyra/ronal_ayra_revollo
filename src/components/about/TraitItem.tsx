import { useState } from "react";
import { Check } from "lucide-react";

type Props = {
  item: string;
};

const TraitItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTraitColor = (trait: string) => {
    const traitLower = trait.toLowerCase();
    if (
      traitLower.includes("colabora") ||
      traitLower.includes("liderazgo") ||
      traitLower.includes("comunicación") ||
      traitLower.includes("trabajo en equipo")
    )
      return "bg-blue-600 border-blue-200 dark:border-blue-800/80";
    if (
      traitLower.includes("creativ") ||
      traitLower.includes("innovación") ||
      traitLower.includes("diseño")
    )
      return "bg-purple-600 border-purple-200 dark:border-purple-800/80";
    if (
      traitLower.includes("detall") ||
      traitLower.includes("análisis") ||
      traitLower.includes("resolución") ||
      traitLower.includes("problemas")
    )
      return "bg-emerald-600 border-emerald-200 dark:border-emerald-800/80";
    if (
      traitLower.includes("proactiv") ||
      traitLower.includes("organización") ||
      traitLower.includes("planificación") ||
      traitLower.includes("gestión")
    )
      return "bg-amber-600 border-amber-200 dark:border-amber-800/80";

    return "bg-slate-600 border-slate-200 dark:border-slate-700";
  };

  const colorClass = getTraitColor(item);
  const bgColor = colorClass.split(" ")[0];
  const borderClasses = colorClass.split(" ").slice(1).join(" ");

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm border transition-all duration-200 cursor-default ${borderClasses} ${
          isHovered
            ? `text-white ${bgColor} shadow-sm border-transparent`
            : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        }`}
      >
        <span
          className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
            isHovered ? "bg-white/20 text-white" : `${bgColor} text-white`
          }`}
        >
          <Check size={11} />
        </span>
        <span>{item}</span>
      </div>
      {isHovered && (
        <div
          role="tooltip"
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-lg pointer-events-none"
        >
          {getTraitDescription(item)}
        </div>
      )}
    </div>
  );
};

const getTraitDescription = (trait: string): string => {
  const traitLower = trait.toLowerCase();

  const descriptions: { [key: string]: string } = {
    colabora: "Trabajo en equipo fluido y comunicación efectiva",
    creativ: "Soluciones prácticas e innovadoras ante retos técnicos",
    detall: "Cuidado en la calidad de código, datos y experiencia de usuario",
    proactiv: "Iniciativa para anticipar problemas y proponer mejoras",
    liderazgo: "Capacidad para guiar y motivar equipos",
    comunicación: "Habilidad para transmitir ideas efectivamente",
    análisis: "Evaluación detallada de información y datos",
    resolución: "Habilidad para solucionar problemas complejos",
  };

  for (const [key, value] of Object.entries(descriptions)) {
    if (traitLower.includes(key)) {
      return value;
    }
  }

  return "Competencia profesional destacada";
};

export default TraitItem;