import { useState, useMemo } from "react";
import { Code2, Search, X, RotateCcw, Filter, ChevronDown } from "lucide-react";
import SkillCategoryItem from "../components/skills/SkillCategoryItem";
import TechSkillItem from "../components/skills/TechSkillItem";
import { skillCategories, techSkills } from "../data/skillsdata";

const CATEGORY_GROUPS = [
  { id: "all", label: "Todas las áreas (11 categorías)" },
  {
    id: "frontend",
    label: "Frontend & UI",
    matches: ["Frontend Frameworks", "Frontend Styling & UI", "State Management", "Data Visualization"],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    matches: ["Backend Frameworks", "APIs & HTTP Clients", "Authentication"],
  },
  {
    id: "database",
    label: "Bases de Datos",
    matches: ["Database Systems"],
  },
  {
    id: "tools",
    label: "Herramientas & Móvil",
    matches: ["Mobile Development", "Development Tools", "Specialized Systems"],
  },
];

const Skills = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skillCategories
      .filter((category) => {
        if (selectedGroup === "all") return true;
        const group = CATEGORY_GROUPS.find((g) => g.id === selectedGroup);
        return group?.matches?.includes(category.title) ?? true;
      })
      .map((category) => {
        if (!query) return category;
        const categoryMatches = category.title.toLowerCase().includes(query);
        const matchingSkills = category.skills.filter((s) =>
          s.name.toLowerCase().includes(query)
        );
        return {
          ...category,
          skills: categoryMatches ? category.skills : matchingSkills,
        };
      })
      .filter((category) => category.skills.length > 0);
  }, [selectedGroup, searchQuery]);

  const handleResetFilters = () => {
    setSelectedGroup("all");
    setSearchQuery("");
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70 mb-4">
            <Code2 size={14} />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Mis{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Habilidades
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tecnologías, frameworks y herramientas que domino para construir
            soluciones de extremo a extremo
          </p>
        </div>

        {/* Barra de filtros en una sola fila: Select a la izquierda y Buscador a la derecha */}
        <div className="mb-10 flex flex-row items-center justify-between gap-2 sm:gap-4 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="relative flex-1 min-w-0 sm:max-w-xs">
            <Filter
              size={14}
              className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 pointer-events-none"
            />
            <select
              id="skills-category-select"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              aria-label="Filtrar habilidades por área técnica"
              className="w-full appearance-none pl-8 sm:pl-9 pr-7 sm:pr-9 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer truncate"
            >
              {CATEGORY_GROUPS.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

          <div className="relative flex-1 min-w-0 sm:max-w-xs">
            <Search
              size={15}
              className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tecnología..."
              aria-label="Buscar tecnología"
              className="w-full pl-8 sm:pl-9 pr-7 sm:pr-9 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Limpiar búsqueda"
                title="Limpiar búsqueda"
                className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Grid de categorías o estado vacío */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCategories.map((category) => (
              <SkillCategoryItem key={category.title} item={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">
              No se encontraron tecnologías para "{searchQuery}"
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Intenta con otro término o restablece los filtros seleccionados.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <RotateCcw size={15} />
              <span>Restablecer filtros</span>
            </button>
          </div>
        )}

        {/* Tecnologías complementarias */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800/80 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Especialidades y Herramientas Complementarias
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Pasa el cursor sobre cada tecnología para ver su aplicación práctica
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techSkills.map((tech) => (
              <TechSkillItem key={tech} item={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
