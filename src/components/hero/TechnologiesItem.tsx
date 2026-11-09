type Props = {
  item: string;
};

const TechnologiesItem = ({ item }: Props) => {
  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();

    if (
      techLower.includes("react") ||
      techLower.includes("vue") ||
      techLower.includes("angular") ||
      techLower.includes("svelte")
    )
      return "hover:bg-blue-600 hover:border-blue-600";
    if (
      techLower.includes("node") ||
      techLower.includes("express") ||
      techLower.includes("nest") ||
      techLower.includes("next")
    )
      return "hover:bg-emerald-600 hover:border-emerald-600";
    if (
      techLower.includes("mongo") ||
      techLower.includes("sql") ||
      techLower.includes("postgre") ||
      techLower.includes("mysql")
    )
      return "hover:bg-red-600 hover:border-red-600";
    if (
      techLower.includes("aws") ||
      techLower.includes("docker") ||
      techLower.includes("kubernetes") ||
      techLower.includes("azure")
    )
      return "hover:bg-orange-600 hover:border-orange-600";
    if (
      techLower.includes("typescript") ||
      techLower.includes("javascript") ||
      techLower.includes("js") ||
      techLower.includes("ts")
    )
      return "hover:bg-indigo-600 hover:border-indigo-600";
    if (
      techLower.includes("python") ||
      techLower.includes("java") ||
      techLower.includes("go") ||
      techLower.includes("rust")
    )
      return "hover:bg-purple-600 hover:border-purple-600";
    if (
      techLower.includes("tailwind") ||
      techLower.includes("css") ||
      techLower.includes("html") ||
      techLower.includes("sass")
    )
      return "hover:bg-teal-600 hover:border-teal-600";
    if (techLower.includes("laravel"))
      return "hover:bg-red-600 hover:border-red-600";
    if (techLower.includes("flutter"))
      return "hover:bg-sky-600 hover:border-sky-600";

    return "hover:bg-slate-700 hover:border-slate-700";
  };

  const colorClass = getTechColor(item);

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800/80 text-slate-100 border border-slate-600/80 backdrop-blur-sm transition-colors duration-200 hover:text-white ${colorClass}`}
    >
      {item}
    </span>
  );
};

export default TechnologiesItem;
