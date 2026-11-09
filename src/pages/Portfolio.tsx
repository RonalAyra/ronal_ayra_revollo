import { useState } from "react";
import { FolderGit2, RotateCcw } from "lucide-react";
import { filters, projects } from "../data/portafoliodata";
import FilterProject from "../components/portafolio/FilterProject";
import ProjectOtherItem from "../components/portafolio/ProjectOtherItem";
import ProjectFeaturedItem from "../components/portafolio/ProjectFeaturedItem";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    if (!matchesCategory) return false;
    if (!query) return true;

    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query))
    );
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const handleResetFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70 mb-4">
            <FolderGit2 size={14} />
            <span>Portafolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Mi{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Portafolio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Proyectos destacados que demuestran mis habilidades y experiencia
          </p>
        </div>

        <FilterProject
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
              No se encontraron proyectos con los criterios actuales
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
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <div className="mb-14">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Proyectos Destacados
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {featuredProjects.map((project) => (
                    <ProjectFeaturedItem key={project.id} item={project} />
                  ))}
                </div>
              </div>
            )}
            {otherProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Otros Proyectos
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {otherProjects.map((project) => (
                    <ProjectOtherItem key={project.id} item={project} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
