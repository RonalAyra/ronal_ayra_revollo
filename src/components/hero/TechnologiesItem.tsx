import { useState } from "react";

type Props = {
  item: string;
};

const TechnologiesItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();

    if (
      techLower.includes("react") ||
      techLower.includes("vue") ||
      techLower.includes("angular") ||
      techLower.includes("svelte")
    )
      return "from-cyan-500 to-blue-600";
    if (
      techLower.includes("node") ||
      techLower.includes("express") ||
      techLower.includes("nest") ||
      techLower.includes("next")
    )
      return "from-green-500 to-emerald-600";
    if (
      techLower.includes("mongo") ||
      techLower.includes("sql") ||
      techLower.includes("postgre") ||
      techLower.includes("mysql")
    )
      return "from-red-500 to-rose-600";
    if (
      techLower.includes("aws") ||
      techLower.includes("docker") ||
      techLower.includes("kubernetes") ||
      techLower.includes("azure")
    )
      return "from-orange-500 to-amber-600";
    if (
      techLower.includes("typescript") ||
      techLower.includes("javascript") ||
      techLower.includes("js") ||
      techLower.includes("ts")
    )
      return "from-blue-500 to-indigo-600";
    if (
      techLower.includes("python") ||
      techLower.includes("java") ||
      techLower.includes("go") ||
      techLower.includes("rust")
    )
      return "from-purple-500 to-violet-600";
    if (
      techLower.includes("tailwind") ||
      techLower.includes("css") ||
      techLower.includes("html") ||
      techLower.includes("sass")
    )
      return "from-teal-500 to-cyan-600";

    return "from-gray-500 to-gray-700";
  };

  const colorClass = getTechColor(item);

  return (
    <span
      key={item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 
                 bg-white/80 dark:bg-gray-800/80 
                 backdrop-blur-sm 
                 rounded-full 
                 text-gray-700 dark:text-gray-300 
                 border border-gray-200 dark:border-gray-700 
                 hover:shadow-lg 
                 transition-all duration-500 
                 group overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
      ></div>
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur rounded-full`}
      ></div>
      <span
        className={`relative z-10 font-medium text-sm transition-colors duration-300 ${
          isHovered ? "text-white" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {item}
      </span>
      <div
        className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${colorClass} rounded-full transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      ></div>
      {isHovered && (
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
      )}
    </span>
  );
};

export default TechnologiesItem;