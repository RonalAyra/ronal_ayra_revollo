import { useState } from "react";

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
      techLower.includes("angular")
    )
      return "from-cyan-500 to-blue-600 border-cyan-200 dark:border-cyan-800";
    if (
      techLower.includes("node") ||
      techLower.includes("express") ||
      techLower.includes("nest")
    )
      return "from-green-500 to-emerald-600 border-green-200 dark:border-green-800";
    if (
      techLower.includes("mongo") ||
      techLower.includes("sql") ||
      techLower.includes("postgre")
    )
      return "from-red-500 to-rose-600 border-red-200 dark:border-red-800";
    if (
      techLower.includes("aws") ||
      techLower.includes("docker") ||
      techLower.includes("kubernetes")
    )
      return "from-orange-500 to-amber-600 border-orange-200 dark:border-orange-800";
    if (techLower.includes("typescript") || techLower.includes("javascript"))
      return "from-blue-500 to-indigo-600 border-blue-200 dark:border-blue-800";
    if (
      techLower.includes("python") ||
      techLower.includes("java") ||
      techLower.includes("go")
    )
      return "from-purple-500 to-violet-600 border-purple-200 dark:border-purple-800";

    return "from-gray-500 to-gray-700 border-gray-200 dark:border-gray-800";
  };

  const colorClass = getTechColor(item);

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
          <div className="font-semibold">{getTechDescription(item)}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45 border-r border-b border-gray-900 dark:border-white"></div>
        </div>
      )}
    </div>
  );
};

const getTechDescription = (tech: string): string => {
  const techLower = tech.toLowerCase();

  const descriptions: { [key: string]: string } = {
    react: "Biblioteca de UI para aplicaciones web",
    vue: "Framework progresivo de JavaScript",
    angular: "Framework para aplicaciones web",
    node: "Runtime de JavaScript en el servidor",
    express: "Framework web para Node.js",
    mongodb: "Base de datos NoSQL",
    mysql: "Sistema de base de datos relacional",
    postgresql: "Base de datos relacional avanzada",
    typescript: "JavaScript con tipado estático",
    javascript: "Lenguaje de programación web",
    python: "Lenguaje de programación versátil",
    java: "Lenguaje de programación orientado a objetos",
    aws: "Servicios en la nube de Amazon",
    docker: "Plataforma de contenedores",
    kubernetes: "Orquestador de contenedores",
    git: "Sistema de control de versiones",
    graphql: "Lenguaje de consulta para APIs",
    redis: "Base de datos en memoria",
    nginx: "Servidor web y proxy inverso",
    sass: "Preprocesador de CSS",
    tailwind: "Framework de CSS utility-first",
    next: "Framework React de producción",
    nestjs: "Framework Node.js para aplicaciones eficientes",
  };

  for (const [key, value] of Object.entries(descriptions)) {
    if (techLower.includes(key)) {
      return value;
    }
  }

  return "Tecnología de desarrollo";
};

export default TechSkillItem;
