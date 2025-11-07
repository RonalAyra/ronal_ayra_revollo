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
      key={item.id}
      onClick={() => setActiveFilter(item.id)}
      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
        ${
          isActive
            ? "bg-gradient-to-r from-gray-700 to-slate-900 text-white shadow-lg"
            : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        }`}
    >
      <Filter size={16} />
      {item.label}
    </button>
  );
};

export default FilterProject;
