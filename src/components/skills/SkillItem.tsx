import { Skill } from "../../types";

type Props = {
  item: Skill;
  color: string;
};

const getSkillLevelText = (level: number): string => {
  if (level >= 90) return "Experto";
  if (level >= 75) return "Avanzado";
  if (level >= 60) return "Intermedio";
  return "En práctica";
};

const SkillItem = ({ item, color }: Props) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 border border-slate-200/70 dark:border-slate-700/70 hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-colors duration-200">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">
          {item.name}
        </span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {getSkillLevelText(item.level)}
          </span>
          <span
            className={`px-2 py-0.5 rounded-md text-xs font-bold text-white tabular-nums ${color}`}
          >
            {item.level}%
          </span>
        </div>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-300/40 dark:border-slate-700/60">
        <div
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${item.level}%` }}
          role="progressbar"
          aria-valuenow={item.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Nivel en ${item.name}: ${item.level}%`}
        />
      </div>
    </div>
  );
};

export default SkillItem;