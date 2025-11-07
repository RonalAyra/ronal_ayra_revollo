import { useState } from "react";
import { filters, projects } from "../data/portafoliodata";
import ProjectOtherItem from "../components/portafolio/ProjectOtherItem";
import ProjectFeaturedItem from "../components/portafolio/ProjectFeaturedItem";
import FilterProject from "../components/portafolio/FilterProject";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-20 bg-white bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Mi{" "}
            <span className="bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Proyectos destacados que demuestran mis habilidades y experiencia
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <FilterProject
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                item={filter}
              />
            ))}
          </div>
        </div>
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
              Proyectos Destacados
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectFeaturedItem key={project.id} item={project} />
              ))}
            </div>
          </div>
        )}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
              Otros Proyectos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectOtherItem key={project.id} item={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
