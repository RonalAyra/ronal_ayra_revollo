import { useState, useMemo, useEffect } from "react";
import {
  Briefcase,
  Search,
  X,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
  Building2,
  LayoutList,
  Table2,
  Eye,
} from "lucide-react";
import { experiences } from "../data/experiencedata";
import CardExperienceItem from "../components/experience/CardExperienceItem";
import type { Experience } from "../types";

const TECH_FILTERS = [
  "Todas",
  "Laravel",
  "Vue",
  "React",
  ".NET 6",
  "NestJS",
  "SIAT",
];

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTech, setSelectedTech] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"timeline" | "table">("timeline");
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedExperience) {
        setSelectedExperience(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedExperience]);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedExperience]);

  const filteredExperiences = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return experiences.filter((exp) => {
      const matchesTech =
        selectedTech === "Todas" ||
        exp.technologies.some((t) =>
          t.toLowerCase().includes(selectedTech.toLowerCase())
        );

      if (!matchesTech) return false;
      if (!query) return true;

      return (
        exp.company.toLowerCase().includes(query) ||
        exp.position.toLowerCase().includes(query) ||
        exp.period.toLowerCase().includes(query) ||
        exp.technologies.some((t) => t.toLowerCase().includes(query)) ||
        exp.description.some((d) => d.toLowerCase().includes(query))
      );
    });
  }, [selectedTech, searchQuery]);

  const isFiltering = selectedTech !== "Todas" || searchQuery.trim() !== "";
  const displayedExperiences =
    showAll || isFiltering
      ? filteredExperiences
      : filteredExperiences.slice(0, 6);
  const hasMoreExperiences = !isFiltering && filteredExperiences.length > 6;

  const handleResetFilters = () => {
    setSelectedTech("Todas");
    setSearchQuery("");
  };

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/70 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70 mb-4">
            <Briefcase size={14} />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Mi{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Experiencia y Proyectos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sistemas empresariales, plataformas ERP, facturación electrónica e
            integraciones desarrolladas a lo largo de mi carrera
          </p>
        </div>

        {/* Barra de herramientas: filtros, búsqueda y selector de vista */}
        <div className="mb-10 bg-slate-50 dark:bg-slate-800/70 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filtrar experiencias por tecnología"
            >
              {TECH_FILTERS.map((tech) => {
                const isActive = selectedTech === tech;
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => setSelectedTech(tech)}
                    aria-pressed={isActive}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-blue-400"
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar empresa, rol o stack..."
                  aria-label="Buscar en experiencias"
                  className="w-full pl-9 pr-9 py-2 text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
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

              <div
                className="inline-flex rounded-xl bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-700 self-start sm:self-auto"
                role="group"
                aria-label="Cambiar modo de visualización"
              >
                <button
                  type="button"
                  onClick={() => setViewMode("timeline")}
                  aria-pressed={viewMode === "timeline"}
                  title="Vista de línea de tiempo"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    viewMode === "timeline"
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <LayoutList size={14} />
                  <span>Cronología</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  aria-pressed={viewMode === "table"}
                  title="Vista de tabla compacta"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    viewMode === "table"
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Table2 size={14} />
                  <span>Tabla</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
            <span>
              Mostrando{" "}
              <strong className="font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                {displayedExperiences.length}
              </strong>{" "}
              de{" "}
              <strong className="font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                {filteredExperiences.length}
              </strong>{" "}
              registros
            </span>
            {isFiltering && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                <RotateCcw size={12} />
                <span>Limpiar filtros activos</span>
              </button>
            )}
          </div>
        </div>

        {/* Contenido principal: Línea de tiempo, Tabla o Estado Vacío */}
        {displayedExperiences.length === 0 ? (
          <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">
              No se encontraron experiencias con los criterios actuales
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Prueba seleccionando otra tecnología o borrando el término de
              búsqueda.
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
        ) : viewMode === "timeline" ? (
          <div className="relative">
            {displayedExperiences.map((exp, index) => (
              <CardExperienceItem
                key={exp.id}
                index={index}
                item={exp}
                onSelect={setSelectedExperience}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="py-3.5 px-4 text-right w-12">#</th>
                    <th className="py-3.5 px-4">Empresa / Proyecto</th>
                    <th className="py-3.5 px-4">Cargo / Rol</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">Periodo</th>
                    <th className="py-3.5 px-4">Tecnologías</th>
                    <th className="py-3.5 px-4 text-right whitespace-nowrap">
                      Tareas
                    </th>
                    <th className="py-3.5 px-4 text-right whitespace-nowrap">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-700/70 text-sm">
                  {displayedExperiences.map((exp, idx) => (
                    <tr
                      key={exp.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-right font-mono text-xs text-slate-400 tabular-nums">
                        {idx + 1}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        {exp.company}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                        {exp.position}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {exp.period}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-medium text-slate-600 dark:text-slate-300 tabular-nums">
                        {exp.description.length}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          {exp.liveUrl && (
                            <a
                              href={exp.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Abrir sitio web de ${exp.company}`}
                              aria-label={`Abrir sitio web de ${exp.company}`}
                              className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors"
                            >
                              <ExternalLink size={15} />
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => setSelectedExperience(exp)}
                            title="Ver detalle completo"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                          >
                            <Eye size={13} />
                            <span>Ver</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Botón Ver más / Ver menos */}
        {hasMoreExperiences && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              {showAll ? (
                <>
                  <span>Mostrar menos experiencias</span>
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  <span>
                    Ver todas las experiencias ({filteredExperiences.length})
                  </span>
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Educación y Certificaciones */}
        <div className="mt-16">
          <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Educación y Certificaciones
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Educación Universitaria
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Licenciatura en Ingeniería de Sistemas
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Universidad Mayor de San Simón (2015 – 2020)
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Postgrado y Certificaciones
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Diplomado en Informática Forense
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Seguridad de la información y peritaje informático
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de detalle de experiencia */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeInUp"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-experience-title"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Encabezado del modal */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 mb-2">
                  <Calendar size={13} />
                  <span>{selectedExperience.period}</span>
                </div>
                <h3
                  id="modal-experience-title"
                  className="text-xl font-bold text-slate-900 dark:text-white leading-snug"
                >
                  {selectedExperience.position}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  <Building2 size={15} className="text-blue-600 dark:text-blue-400" />
                  <span>{selectedExperience.company}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Cerrar ventana de detalle"
                title="Cerrar (Esc)"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cuerpo del modal */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Responsabilidades y Logros Principales
                </h4>
                <ul className="space-y-2.5">
                  {selectedExperience.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Stack Tecnológico Aplicado
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Acciones del modal */}
            <div className="flex flex-wrap items-center justify-end gap-3 p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800">
              {selectedExperience.liveUrl && (
                <a
                  href={selectedExperience.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visitar sitio del proyecto</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;