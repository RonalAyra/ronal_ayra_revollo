import StatsItem from "../components/about/StatsItem";
import TraitItem from "../components/about/TraitItem";
import { stats, taitData } from "../data/aboutdata";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Sobre{" "}
            <span className="bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
            Desarrollador apasionado por crear soluciones innovadoras y
            escalables
          </p>
        </div>
        <div className="grid lg:grid-cols-6 gap-12 items-center">
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Mi Historia
              </h3>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                Tengo más de 4 años de experiencia construyendo sistemas web
                modernos. Inicié con
                <strong>Laravel</strong>, enfocándome en APIs y arquitectura
                MVC. Más adelante, en
                <strong>Xanthops</strong>, trabajé con{" "}
                <strong>React, Vue.js</strong> y<strong>NestJS</strong> en el
                desarrollo de diversas aplicaciones.
              </p>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                En <strong>Faboce SRL</strong> lideré la migración del sistema
                ERP a la gestión 2025, integrando múltiples bases de datos y
                optimizando procesos empresariales. También participé en la
                revalidación del sistema de facturación y en el diseño de una
                arquitectura enfocada en rendimiento y experiencia de usuario,
                trabajando con
                <strong>Vue.js</strong> en el frontend y{" "}
                <strong>Laravel</strong> en el backend.
              </p>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                Me especializo en <strong>Laravel, Vue.js y NestJS</strong>, con
                experiencia en migraciones ERP, diseño de APIs y optimización de
                sistemas.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Lo que me motiva
              </h3>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                Me motivan los retos que impulsan la innovación. Disfruto
                aprender nuevas tecnologías, resolver problemas complejos y
                crear soluciones que generen impacto real.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {taitData.map((trait, index) => (
                <TraitItem key={index} item={trait} />
              ))}
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2">
            {stats.map((item, index) => (
              <StatsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
