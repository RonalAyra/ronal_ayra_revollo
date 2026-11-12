import { useState } from "react";
import { Check } from "lucide-react";

type Props = {
  item: string;
};

const TechSkillItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();

    if (
      techLower.includes("react") ||
      techLower.includes("vue") ||
      techLower.includes("angular") ||
      techLower.includes("flutter")
    )
      return "bg-blue-600 border-blue-200 dark:border-blue-800";
    if (
      techLower.includes("node") ||
      techLower.includes("express") ||
      techLower.includes("nest") ||
      techLower.includes("spring") ||
      techLower.includes("android")
    )
      return "bg-emerald-600 border-emerald-200 dark:border-emerald-800";
    if (
      techLower.includes("siat") ||
      techLower.includes("mongo") ||
      techLower.includes("sql")
    )
      return "bg-red-600 border-red-200 dark:border-red-800";
    if (
      techLower.includes("storybook") ||
      techLower.includes("aws") ||
      techLower.includes("docker")
    )
      return "bg-orange-600 border-orange-200 dark:border-orange-800";
    if (
      techLower.includes("divi") ||
      techLower.includes("java") ||
      techLower.includes("socket")
    )
      return "bg-purple-600 border-purple-200 dark:border-purple-800";

    return "bg-slate-600 border-slate-200 dark:border-slate-700";
  };

  const colorClass = getTechColor(item);
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
            : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        }`}
      >
        <span
          className={`w-4 h-4 rounded-full flex items-center justify-center ${
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
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[210px] sm:max-w-xs bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-normal text-center z-50 shadow-lg pointer-events-none"
        >
          {getTechDescription(item)}
        </div>
      )}
    </div>
  );
};

const getTechDescription = (tech: string): string => {
  const techLower = tech.toLowerCase();

  const descriptions: { [key: string]: string } = {
    siat: "Integración de facturación electrónica en línea (SIN Bolivia)",
    storybook: "Documentación y pruebas aisladas de componentes UI",
    divi: "Diseño y maquetación avanzada en WordPress",
    flutter: "Desarrollo de aplicaciones móviles multiplataforma",
    android: "Desarrollo móvil nativo para plataforma Android",
    java: "Lenguaje orientado a objetos para backend y móvil",
    socket: "Comunicación bidireccional en tiempo real",
    spring: "Framework empresarial para microservicios en Java",
    react: "Biblioteca de UI para aplicaciones web",
    vue: "Framework progresivo de JavaScript",
  };

  for (const [key, value] of Object.entries(descriptions)) {
    if (techLower.includes(key)) {
      return value;
    }
  }

  return "Tecnología de desarrollo de software";
};

export default TechSkillItem;
