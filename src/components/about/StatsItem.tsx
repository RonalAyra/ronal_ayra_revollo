import { Stats } from "../../types";

type Props = {
  item: Stats;
  variant?: "simple" | "elegant" | "minimal";
};

const StatsItem = ({ item, variant = "simple" }: Props) => {
  const { icon: Icon, value, label } = item;

  const styles = {
    simple: {
      container:
        "flex items-center justify-between gap-4 p-5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200",
      icon: "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm",
      value: "text-2xl font-bold text-slate-900 dark:text-white tabular-nums",
      label: "text-sm font-medium text-slate-600 dark:text-slate-400",
    },
    elegant: {
      container:
        "text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200",
      icon: "w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3",
      value:
        "text-3xl font-bold text-slate-900 dark:text-white mb-1 tabular-nums",
      label: "text-sm text-slate-600 dark:text-slate-400 font-medium",
    },
    minimal: {
      container:
        "flex flex-col items-center text-center p-5 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-500 transition-all duration-200",
      icon: "w-10 h-10 text-blue-600 dark:text-blue-400 mb-2",
      value:
        "text-xl font-semibold text-slate-900 dark:text-white mb-1 tabular-nums",
      label: "text-sm text-slate-600 dark:text-slate-400",
    },
  };

  const s = styles[variant];

  return (
    <div className={s.container}>
      {variant === "elegant" || variant === "minimal" ? (
        <>
          <div className={s.icon}>
            <Icon size={variant === "elegant" ? 24 : 20} />
          </div>
          <div className={s.value}>{value}</div>
          <div className={s.label}>{label}</div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <div className={s.icon}>
              <Icon size={22} />
            </div>
            <div className={s.label}>{label}</div>
          </div>
          <div className={s.value}>{value}</div>
        </>
      )}
    </div>
  );
};

export default StatsItem;