import { CategorySkill } from "../../types";
import SkillItem from "./SkillItem";

type Props = {
  item: CategorySkill;
};

const SkillCategoryItem = ({ item }: Props) => {
  const { icon: Icon, title, color, skills } = item;

  return (
    <div className="group relative">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-600/20 hover:border-white/40 dark:hover:border-gray-400/40">
        <div className="relative mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={20} className="text-white" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 transform scale-75"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {skills.length} habilidades
              </p>
            </div>
          </div>
          <div className={`absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r ${color} rounded-full`}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <SkillItem key={index} item={skill} color={color} />
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200/30 dark:border-gray-700/30">
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <span>Nivel promedio</span>
            <span className="font-semibold">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </span>
          </div>
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}></div>
    </div>
  );
};

export default SkillCategoryItem;