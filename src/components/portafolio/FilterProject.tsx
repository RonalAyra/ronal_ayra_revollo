import { Filter } from "lucide-react";
import { ProjectFilter } from "../../types";

type Props = {
  item: ProjectFilter;
  activeFilter: string;
  setActiveFilter: (id: string) => void;
};

const FilterProject = ({ item, activeFilter, setActiveFilter }: Props) => {
  const isActive = activeFilter === item.id;

  return (
    <button
      type="button"
      onClick={() => setActiveFilter(item.id)}
      aria-pressed={isActive}
      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      }`}
    >
      <Filter size={15} />
      <span>{item.label}</span>
    </button>
  );
};

export default FilterProject;
