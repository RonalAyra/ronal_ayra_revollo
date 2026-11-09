import { CategorySkill } from "../../types";
import SkillItem from "./SkillItem";

type Props = {
  item: CategorySkill;
};

const SkillCategoryItem = ({ item }: Props) => {
  const { icon: Icon, title, color, skills } = item;
  const averageLevel = Math.round(
    skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length
  );

  return (
    <div className="h-full flex flex-col justify-between bg-white dark:bg-slate-800/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/80 dark:border-slate-700/80">
      <div>
        <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/70 dark:border-slate-700/70">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}
            >
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {skills.length}{" "}
                {skills.length === 1 ? "tecnología" : "tecnologías"}
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 tabular-nums">
            Prom. {averageLevel}%
          </span>
        </div>

        <div className="space-y-2.5">
          {skills.map((skill) => (
            <SkillItem key={skill.name} item={skill} color={color} />
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
        <span>Dominio promedio de categoría</span>
        <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">
          {averageLevel}%
        </span>
      </div>
    </div>
  );
};

export default SkillCategoryItem;