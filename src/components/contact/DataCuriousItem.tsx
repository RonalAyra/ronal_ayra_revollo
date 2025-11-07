import { DateCurious } from "../../types";
import { useState } from "react";

type Props = {
  item: DateCurious;
};

const DataCuriousItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCuriosityColor = (title: string) => {
    const titleLower = title.toLowerCase();

    if (titleLower.includes("interesante") || titleLower.includes("curioso") || titleLower.includes("dato"))
      return "from-amber-500 to-orange-600";
    if (titleLower.includes("tecnología") || titleLower.includes("tech") || titleLower.includes("innovación"))
      return "from-blue-500 to-cyan-600";
    if (titleLower.includes("aprendizaje") || titleLower.includes("educación") || titleLower.includes("estudio"))
      return "from-green-500 to-emerald-600";
    if (titleLower.includes("experiencia") || titleLower.includes("proyecto") || titleLower.includes("trabajo"))
      return "from-purple-500 to-violet-600";
    if (titleLower.includes("personal") || titleLower.includes("hobby") || titleLower.includes("pasatiempo"))
      return "from-pink-500 to-rose-600";
    
    return "from-gray-500 to-slate-700";
  };

  const colorClass = getCuriosityColor(item.title);

  return (
    <div 
      className="relative p-6 
                 bg-white/80 dark:bg-gray-800/80 
                 rounded-2xl 
                 border-2 border-gray-200 dark:border-gray-700
                 backdrop-blur-sm
                 hover:shadow-xl 
                 transition-all duration-500 
                 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
      ></div>
      <div className="relative flex items-start mb-3 z-10">
        <div
          className={`w-10 h-10 
                     bg-gradient-to-r ${colorClass}
                     rounded-xl 
                     flex items-center justify-center 
                     text-white 
                     group-hover:scale-110 group-hover:rotate-12
                     transition-all duration-500
                     shadow-lg mr-3`}
        >
          <span className="text-lg">💡</span>
        </div>
        
        <h4 className="font-bold text-lg text-black dark:text-white pt-1 group-hover:translate-x-1 transition-transform duration-300">
          {item.title}
        </h4>
        <div
          className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-r ${colorClass} rounded-full transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        ></div>
      </div>
      <div className="relative z-10">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
          {item.description}
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${colorClass} rounded-full transition-all duration-500 ${
          isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
        }`}
      ></div>
      {isHovered && (
        <>
          <div className="absolute top-3 right-3 w-1 h-1 bg-current rounded-full opacity-60 animate-ping"></div>
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-current rounded-full opacity-40 animate-pulse delay-75"></div>
        </>
      )}
    </div>
  );
};

export default DataCuriousItem;