import { lazy, Suspense, useEffect, useState } from "react";
import {
  ChevronDown,
  Download,
  Sparkles,
  Briefcase,
  CheckCircle2,
  MapPin,
  Code2,
  ArrowRight,
  Box,
  RotateCw,
  Pause,
  Move3d,
  Monitor,
  Maximize2,
  X,
} from "lucide-react";
import TechnologiesItem from "../components/hero/TechnologiesItem";
import { useNavigation } from "../context/NavigationContext";
import SocialIconItem from "../components/hero/SocialIconItem";
import { socialIconData } from "../data/herodata";
import profileImage from "../assets/image/profile.jpg";
import cvPdf from "../assets/Ronal Ayra Revollo.pdf";
import bannerImage from "../assets/banner.jpg";
import type { ScreenMode } from "../components/3d/ComputersCanvas";

const ComputersCanvas = lazy(() => import("../components/3d/ComputersCanvas"));

const SCREEN_MODES: { id: ScreenMode; label: string }[] = [
  { id: "ide", label: "Código IDE" },
  { id: "erp", label: "ERP / SIAT" },
  { id: "arch", label: "Apps & API" },
];

const Hero = () => {
  const { scrollToSection } = useNavigation();
  const [activeTab, setActiveTab] = useState<"3d" | "summary">("3d");
  const [screenMode, setScreenMode] = useState<ScreenMode>("ide");
  const [autoRotate, setAutoRotate] = useState(true);
  const [is3DReady, setIs3DReady] = useState(false);
  const [isExpanded3D, setIsExpanded3D] = useState(false);

  // Diferir la carga del motor WebGL/Three.js hasta después del primer pintado (LCP)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIs3DReady(true);
    }, 180);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isExpanded3D) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded3D(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded3D]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 text-white pt-24 pb-24 sm:pb-28 lg:py-24"
    >
      <img
        src={bannerImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-slate-950/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna principal */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-blue-600 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Ronal Ayra Revollo"
                      width={128}
                      height={128}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full border-2 border-slate-900 shadow"
                  title="Desarrollador Full Stack"
                >
                  <Sparkles className="text-white" size={14} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700/70 text-emerald-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Disponible para nuevos proyectos</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-slate-300 text-xs sm:text-sm">
                  <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Cochabamba, Bolivia</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Hola, soy <span className="text-blue-400">Ronal Ayra</span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                Desarrollador <span className="text-blue-400">Full Stack</span>{" "}
                & Especialista en Sistemas ERP / SIAT
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Más de 4 años diseñando e implementando aplicaciones web
                escalables, APIs RESTful de alto rendimiento, migraciones de
                sistemas empresariales y facturación electrónica en línea.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {[
                "React",
                "Vue.js",
                "Laravel",
                ".NET 6",
                "Node.js",
                "NestJS",
                "TypeScript",
                "Flutter",
              ].map((tech) => (
                <TechnologiesItem key={tech} item={tech} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-stretch sm:items-center pt-2">
              <button
                type="button"
                onClick={() => scrollToSection("experience")}
                className="group px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md"
              >
                <span>Ver Experiencia y Proyectos</span>
                <ChevronDown
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                  size={18}
                />
              </button>

              <button
                type="button"
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 hover:border-blue-400 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvPdf;
                  link.download = "Ronal-Ayra-Revollo-CV.pdf";
                  link.click();
                }}
              >
                <Download size={18} />
                <span>Descargar CV</span>
              </button>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 mr-1">
                Redes:
              </span>
              {socialIconData.map((item) => (
                <SocialIconItem key={item.label} item={item} />
              ))}
            </div>
          </div>

          {/* Columna derecha: Estudio 3D Interactivo + Resumen Profesional */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl space-y-4 sm:space-y-5">
              {/* Encabezado con selector de modo */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    {activeTab === "3d" ? <Box size={20} /> : <Code2 size={20} />}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                      {activeTab === "3d"
                        ? "Estación de Trabajo 3D"
                        : "Resumen Profesional"}
                    </h2>
                    <p className="text-xs text-slate-400 truncate">
                      Ingeniero en Sistemas · UMSS
                    </p>
                  </div>
                </div>

                <div
                  role="tablist"
                  aria-label="Cambiar vista de tarjeta principal"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-950 p-1 rounded-xl border border-slate-800"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "3d"}
                    onClick={() => setActiveTab("3d")}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeTab === "3d"
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Box size={13} />
                    <span>Estudio 3D</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "summary"}
                    onClick={() => setActiveTab("summary")}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeTab === "summary"
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 size={13} />
                    <span>Ficha Técnica</span>
                  </button>
                </div>
              </div>

              {/* Contenido dinámico según pestaña activa */}
              {activeTab === "3d" ? (
                <div className="relative h-64 sm:h-80 w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                  {is3DReady && !isExpanded3D ? (
                    <Suspense
                      fallback={
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400">
                          <div className="w-7 h-7 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
                          <span className="text-xs font-medium">
                            Inicializando escena 3D...
                          </span>
                        </div>
                      }
                    >
                      <ComputersCanvas
                        autoRotate={autoRotate}
                        screenMode={screenMode}
                        onFallback={() => setActiveTab("summary")}
                      />
                    </Suspense>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400">
                      <div className="w-7 h-7 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
                      <span className="text-xs font-medium">
                        {isExpanded3D
                          ? "Vista ampliada activa..."
                          : "Preparando vista 3D..."}
                      </span>
                    </div>
                  )}

                  {/* Selector interactivo de escena 3D + Botón Pantalla Completa */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1.5 pointer-events-none">
                    <div
                      role="group"
                      aria-label="Cambiar escena del estudio 3D"
                      className="pointer-events-auto inline-flex items-center gap-0.5 sm:gap-1 bg-slate-900/90 border border-slate-700/80 p-1 rounded-lg backdrop-blur-sm max-w-[calc(100%-2.25rem)] overflow-x-auto"
                    >
                      <Monitor
                        size={12}
                        className="hidden sm:inline-block text-blue-400 ml-1.5 mr-0.5 flex-shrink-0"
                      />
                      {SCREEN_MODES.map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setScreenMode(m.id)}
                          className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium whitespace-nowrap transition-colors ${
                            screenMode === m.id
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white"
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsExpanded3D(true)}
                      aria-label="Ampliar estudio 3D en pantalla completa"
                      title="Ampliar estudio 3D"
                      className="pointer-events-auto p-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600 border border-slate-700/80 text-slate-200 hover:text-white transition-colors flex-shrink-0"
                    >
                      <Maximize2 size={13} />
                    </button>
                  </div>

                  {/* Controles inferiores de rotación 3D */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[10px] sm:text-[11px] font-medium text-slate-300 backdrop-blur-sm truncate">
                      <Move3d size={12} className="text-blue-400 flex-shrink-0" />
                      <span className="truncate">Arrastra o haz zoom</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setAutoRotate((prev) => !prev)}
                      aria-label={
                        autoRotate
                          ? "Pausar rotación automática"
                          : "Activar rotación automática"
                      }
                      title={
                        autoRotate
                          ? "Pausar rotación automática"
                          : "Activar rotación automática"
                      }
                      className="pointer-events-auto inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-[10px] sm:text-[11px] font-medium text-slate-200 transition-colors flex-shrink-0"
                    >
                      {autoRotate ? (
                        <>
                          <Pause size={11} className="text-amber-400" />
                          <span>Pausar giro</span>
                        </>
                      ) : (
                        <>
                          <RotateCw size={11} className="text-emerald-400" />
                          <span>Auto-girar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-sm py-1">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <Briefcase
                      size={16}
                      className="text-blue-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-slate-200">
                        Rol actual: Analista Informático (Pertec)
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Facturación en línea SIAT con .NET 6, Angular y SQL
                        Server
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-slate-200">
                        Arquitectura Backend & APIs RESTful
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Laravel, NestJS, Node.js, PostgreSQL, MySQL y MongoDB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-slate-200">
                        Interfaces Modernas y Dashboards
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        React, Vue 3, Next.js, Tailwind CSS y ECharts
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Métricas clave siempre visibles */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-right">
                  <p className="text-lg sm:text-xl font-bold text-white tabular-nums">
                    +4
                  </p>
                  <p className="text-[11px] text-slate-400 text-left mt-0.5">
                    Años Exp.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-right">
                  <p className="text-lg sm:text-xl font-bold text-white tabular-nums">
                    20+
                  </p>
                  <p className="text-[11px] text-slate-400 text-left mt-0.5">
                    Proyectos
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-right">
                  <p className="text-lg sm:text-xl font-bold text-white tabular-nums">
                    11
                  </p>
                  <p className="text-[11px] text-slate-400 text-left mt-0.5">
                    Áreas Tech
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  ¿Buscas impulsar un proyecto?
                </span>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Contactar ahora</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Estudio 3D en Pantalla Completa / Alta Definición */}
      {isExpanded3D && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del Estudio 3D"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setIsExpanded3D(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del modal 3D */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Box size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                    Estudio 3D Interactivo · Alta Definición (2K PBR)
                  </h3>
                  <p className="text-xs text-slate-400 hidden sm:block">
                    Usa la rueda del mouse para hacer zoom sobre los monitores y componentes
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <div className="inline-flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
                  {SCREEN_MODES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setScreenMode(m.id)}
                      className={`px-2 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-colors ${
                        screenMode === m.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAutoRotate((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                  >
                    {autoRotate ? (
                      <>
                        <Pause size={13} className="text-amber-400" />
                        <span className="hidden xs:inline">Pausar giro</span>
                      </>
                    ) : (
                      <>
                        <RotateCw size={13} className="text-emerald-400" />
                        <span className="hidden xs:inline">Auto-girar</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsExpanded3D(false)}
                    aria-label="Cerrar vista ampliada"
                    title="Cerrar (Esc)"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Lienzo 3D amplio */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] min-h-[260px] sm:min-h-[400px] bg-slate-950">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Cargando estudio 3D en alta definición...
                  </div>
                }
              >
                <ComputersCanvas
                  autoRotate={autoRotate}
                  screenMode={screenMode}
                />
              </Suspense>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Desplazarse a la sección Sobre mí"
        title="Ver más información"
        className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-300 hover:text-white transition-colors"
      >
        <span className="text-xs font-medium tracking-wide">Conóceme</span>
        <ChevronDown className="animate-bounce" size={20} />
      </button>
    </section>
  );
};

export default Hero;
