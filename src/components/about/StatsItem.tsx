import { Stats } from "../../types";

type Props = {
  item: Stats;
  variant?: "simple" | "elegant" | "minimal";
};

const StatsItem = ({ item, variant = "simple" }: Props) => {
  const { icon: Icon, value, label } = item;

  const styles = {
    simple: {
      container: "flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300",
      icon: "w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400",
      value: "text-2xl font-bold text-gray-900 dark:text-white",
      label: "text-sm text-gray-600 dark:text-gray-400"
    },
    elegant: {
      container: "text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300",
      icon: "w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4",
      value: "text-3xl font-bold text-gray-900 dark:text-white mb-2",
      label: "text-base text-gray-600 dark:text-gray-400 font-medium"
    },
    minimal: {
      container: "flex flex-col items-center text-center p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300",
      icon: "w-10 h-10 text-blue-600 dark:text-blue-400 mb-3",
      value: "text-xl font-semibold text-gray-900 dark:text-white mb-1",
      label: "text-sm text-gray-600 dark:text-gray-400"
    }
  };

  const s = styles[variant];

  return (
    <div className={s.container}>
      {variant === "elegant" || variant === "minimal" ? (
        <>
          <div className={s.icon}>
            <Icon size={variant === "elegant" ? 28 : 20} />
          </div>
          <div className={s.value}>{value}</div>
          <div className={s.label}>{label}</div>
        </>
      ) : (
        <>
          <div className={s.icon}>
            <Icon size={24} />
          </div>
          <div className="flex flex-col">
            <div className={s.value}>{value}</div>
            <div className={s.label}>{label}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default StatsItem;