import { User, Target, Layers } from "lucide-react";
import StatsItem from "../components/about/StatsItem";
import TraitItem from "../components/about/TraitItem";
import { stats, taitData } from "../data/aboutdata";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70 mb-4">
            <User size={14} />
            <span>Perfil Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Desarrollador apasionado por crear soluciones empresariales
            innovadoras, seguras y escalables
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Layers size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Mi Trayectoria
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Tengo más de 4 años de experiencia construyendo sistemas web
                modernos. Inicié con{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Laravel
                </strong>
                , enfocándome en APIs y arquitectura MVC. Más adelante, en{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Xanthops
                </strong>
                , trabajé con{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  React, Vue.js
                </strong>{" "}
                y{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  NestJS
                </strong>{" "}
                en el desarrollo de diversas plataformas.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                En{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Faboce SRL
                </strong>{" "}
                lideré la migración del sistema ERP a la gestión 2025,
                integrando múltiples bases de datos y optimizando procesos
                empresariales. Actualmente en{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Pertec
                </strong>{" "}
                desarrollo módulos críticos de facturación en línea integrados
                con{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  SIAT
                </strong>{" "}
                utilizando{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  .NET 6, Angular y SQL Server
                </strong>
                .
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Lo que me motiva
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Me motivan los retos que impulsan la eficiencia operativa.
                Disfruto diseñar arquitecturas limpias, optimizar consultas y
                construir soluciones estables que generen impacto real en los
                usuarios finales.
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Valores de trabajo
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {taitData.map((trait) => (
                    <TraitItem key={trait} item={trait} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Indicadores Clave
              </h3>
              <div className="space-y-3">
                {stats.map((item) => (
                  <StatsItem key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
