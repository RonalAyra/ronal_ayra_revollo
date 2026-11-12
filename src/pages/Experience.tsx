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
  Filter,
  Copy,
  Check,
  KeyRound,
  Layers,
  GitCommit,
  Milestone,
  Users,
} from "lucide-react";
import { experiences } from "../data/experiencedata";
import CardExperienceItem from "../components/experience/CardExperienceItem";
import type { Experience } from "../types";

const TECH_FILTERS = [
  "Todas",
  ".NET 10",
  "Flutter",
  "Laravel",
  "Vue",
  "React",
  ".NET 6",
  "Angular",
  "NestJS",
  "SignalR",
  "Docker",
  "PostgreSQL",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "SIAT",
];

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTech, setSelectedTech] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopyText = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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

        {/* Barra de filtros en una sola fila: Select a la izquierda y Buscador a la derecha */}
        <div className="mb-10 flex flex-row items-center justify-between gap-2 sm:gap-4 bg-slate-50 dark:bg-slate-800/70 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
          <div className="relative flex-1 min-w-0 sm:max-w-xs">
            <Filter
              size={14}
              className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 pointer-events-none"
            />
            <select
              id="experience-tech-select"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              aria-label="Filtrar experiencias por tecnología"
              className="w-full appearance-none pl-8 sm:pl-9 pr-7 sm:pr-9 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer truncate"
            >
              {TECH_FILTERS.map((tech) => (
                <option key={tech} value={tech}>
                  {tech === "Todas"
                    ? "Todas las tecnologías"
                    : `Tecnología: ${tech}`}
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
              placeholder="Buscar empresa o stack..."
              aria-label="Buscar en experiencias"
              className="w-full pl-8 sm:pl-9 pr-7 sm:pr-9 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
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

        {/* Contenido principal: Línea de tiempo o Estado Vacío */}
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
        ) : (
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeInUp"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-experience-title"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl ${
              selectedExperience.caseStudy ? "max-w-4xl" : "max-w-2xl"
            } w-full max-h-[92vh] flex flex-col overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Encabezado del modal */}
            <div className="flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 mb-2">
                  <Calendar size={13} />
                  <span>{selectedExperience.period}</span>
                </div>
                <h3
                  id="modal-experience-title"
                  className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug break-words"
                >
                  {selectedExperience.position}
                </h3>
                <div className="flex items-start sm:items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  <Building2 size={15} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-words">{selectedExperience.company}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Cerrar ventana de detalle"
                title="Cerrar (Esc)"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cuerpo del modal */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {selectedExperience.caseStudy && (
                <>
                  {/* Resumen Detallado del Caso de Estudio */}
                  <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-200/70 dark:border-slate-700">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
                      Caso de Estudio — Resumen Ejecutivo
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedExperience.caseStudy.summary}
                    </p>
                  </div>

                  {/* Datos de Demo, Despliegue y Credenciales */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                      <KeyRound size={15} className="text-blue-600 dark:text-blue-400" />
                      <span>1. Datos de Demo, Endpoints y Credenciales</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      {selectedExperience.liveUrl && (
                        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                          <span className="text-slate-500 dark:text-slate-400 block mb-1">
                            Web App Backoffice (Demo):
                          </span>
                          <a
                            href={selectedExperience.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                          >
                            {selectedExperience.liveUrl}
                          </a>
                        </div>
                      )}
                      {selectedExperience.caseStudy.portalUrl && (
                        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                          <span className="text-slate-500 dark:text-slate-400 block mb-1">
                            Portal de Autoservicio RRHH (Empleados):
                          </span>
                          <a
                            href={selectedExperience.caseStudy.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono font-semibold text-teal-600 dark:text-teal-400 hover:underline break-all"
                          >
                            {selectedExperience.caseStudy.portalUrl}
                          </a>
                        </div>
                      )}
                      {selectedExperience.caseStudy.apiEndpoint && (
                        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                          <span className="text-slate-500 dark:text-slate-400 block mb-1">
                            API REST Endpoint Base (.env.production):
                          </span>
                          <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 break-all">
                            {selectedExperience.caseStudy.apiEndpoint}
                          </span>
                        </div>
                      )}
                      {selectedExperience.caseStudy.signalrHub && (
                        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                          <span className="text-slate-500 dark:text-slate-400 block mb-1">
                            Hub Tiempo Real (SignalR WebSockets):
                          </span>
                          <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 break-all">
                            {selectedExperience.caseStudy.signalrHub}
                          </span>
                        </div>
                      )}
                    </div>

                    {selectedExperience.caseStudy.demoCredentials && (
                      <div className="grid sm:grid-cols-2 gap-3 pt-1">
                        <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs">
                          <div className="min-w-0 flex-1">
                            <span className="text-slate-500 dark:text-slate-400 block">
                              Usuario Demo:
                            </span>
                            <strong className="font-mono text-slate-900 dark:text-white break-all">
                              {selectedExperience.caseStudy.demoCredentials.user}
                            </strong>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              handleCopyText(
                                selectedExperience.caseStudy!.demoCredentials!.user,
                                "user"
                              )
                            }
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-colors flex-shrink-0"
                          >
                            {copiedField === "user" ? (
                              <>
                                <Check size={13} />
                                <span>Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs">
                          <div className="min-w-0 flex-1">
                            <span className="text-slate-500 dark:text-slate-400 block">
                              Contraseña Demo:
                            </span>
                            <strong className="font-mono text-slate-900 dark:text-white break-all">
                              {selectedExperience.caseStudy.demoCredentials.password}
                            </strong>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              handleCopyText(
                                selectedExperience.caseStudy!.demoCredentials!.password,
                                "pass"
                              )
                            }
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-colors flex-shrink-0"
                          >
                            {copiedField === "pass" ? (
                              <>
                                <Check size={13} />
                                <span>Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Detalle por Repositorio */}
                  {selectedExperience.caseStudy.repoStats && (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                        <GitCommit size={15} className="text-blue-600 dark:text-blue-400" />
                        <span>Detalle de Repositorios (+130 Commits / 20 PRs)</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedExperience.caseStudy.repoStats.map((repo) => (
                          <div
                            key={repo.name}
                            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 text-xs space-y-1"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <strong className="text-slate-900 dark:text-white font-bold">
                                {repo.name}
                              </strong>
                              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-semibold">
                                {repo.totalCommits}
                              </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                              <span className="text-slate-400">Inicio:</span> {repo.firstCommit}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                              <span className="text-slate-400">Actualidad:</span> {repo.lastCommit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

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

              {selectedExperience.caseStudy?.architectureLayers && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    <Layers size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Arquitectura y Stack por Capas</span>
                  </div>
                  <div className="space-y-3">
                    {selectedExperience.caseStudy.architectureLayers.map(
                      (layer) => (
                        <div
                          key={layer.title}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                            {layer.title}
                          </h5>
                          <ul className="space-y-1.5">
                            {layer.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {selectedExperience.caseStudy?.modules && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Detalle de Módulos y Funcionalidades del Sistema
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedExperience.caseStudy.modules.map((mod) => (
                      <div
                        key={mod.title}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                          {mod.title}
                        </h5>
                        <ul className="space-y-1.5">
                          {mod.items.map((it, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedExperience.caseStudy?.milestones && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    <Milestone size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Línea de Tiempo de Hitos (Evolución del Sistema)</span>
                  </div>
                  <div className="space-y-3">
                    {selectedExperience.caseStudy.milestones.map((ms) => (
                      <div
                        key={ms.period}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-600 text-white">
                            {ms.period}
                          </span>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {ms.title}
                          </h5>
                        </div>
                        <ul className="space-y-1.5">
                          {ms.items.map((it, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800">
              {selectedExperience.caseStudy?.portalUrl && (
                <a
                  href={selectedExperience.caseStudy.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white transition-colors"
                >
                  <Users size={16} />
                  <span>Portal Autoservicio RRHH</span>
                </a>
              )}
              {selectedExperience.liveUrl && (
                <a
                  href={selectedExperience.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>
                    {selectedExperience.caseStudy
                      ? "Abrir Demo Backoffice ERP"
                      : "Visitar sitio del proyecto"}
                  </span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="px-4 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors"
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