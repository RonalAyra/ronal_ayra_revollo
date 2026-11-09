import { Filter, ChevronDown, Search, X } from "lucide-react";
import { ProjectFilter } from "../../types";

type Props = {
  filters: ProjectFilter[];
  activeFilter: string;
  setActiveFilter: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const FilterProject = ({
  filters,
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
}: Props) => {
  return (
    <div className="mb-10 flex flex-row items-center justify-between gap-3 sm:gap-4 bg-white dark:bg-slate-900 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
      <div className="relative flex-1 sm:flex-initial sm:w-72">
        <Filter
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 pointer-events-none"
        />
        <select
          id="portfolio-category-select"
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          aria-label="Filtrar proyectos por categoría"
          className="w-full appearance-none pl-9 pr-9 py-2.5 text-sm font-medium rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer"
        >
          {filters.map((filter) => (
            <option key={filter.id} value={filter.id}>
              {filter.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
      </div>

      <div className="relative flex-1 sm:flex-initial sm:w-72">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar proyecto o tecnología..."
          aria-label="Buscar proyecto"
          className="w-full pl-9 pr-9 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Limpiar búsqueda"
            title="Limpiar búsqueda"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterProject;
