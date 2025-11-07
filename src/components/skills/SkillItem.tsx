import { Skill } from "../../types";
import { useState } from "react";

type Props = {
  item: Skill;
  color: string;
};

const SkillItem = ({ item, color }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gray-50/50 dark:bg-gray-800/50 rounded-xl p-3 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate flex-1 pr-2">
          {item.name}
        </span>
        <div className={`relative px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${color} transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {item.level}%
          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full ${isHovered ? 'animate-ping' : ''}`}></div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-300/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
          <div
            className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg transform origin-left ${
              isHovered ? 'scale-y-125' : 'scale-y-100'
            }`}
            style={{ 
              width: `${isHovered ? Math.min(item.level + 2, 100) : item.level}%`,
            }}
          >
            <div className="absolute top-0 right-0 w-8 h-2 bg-white/30 transform skew-x-12"></div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mt-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
      {isHovered && (
        <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded-md whitespace-nowrap z-10`}>
          {getSkillLevelText(item.level)}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
        </div>
      )}
    </div>
  );
};

const getSkillLevelText = (level: number): string => {
  if (level >= 90) return "Experto 🚀";
  if (level >= 75) return "Avanzado 💪";
  if (level >= 60) return "Intermedio 👍";
  if (level >= 40) return "Básico 👶";
  return "Principiante 🌱";
};

export default SkillItem;