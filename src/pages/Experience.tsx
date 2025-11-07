import { experiences } from "../data/experiencedata";
import CardExperienceItem from "../components/experience/CardExperienceItem";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Mi{" "}
            <span className="bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 bg-clip-text text-transparent">
              Experiencia
            </span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
            Trayectoria profesional construyendo soluciones innovadoras y
            escalables
          </p>
        </div>
        <div className="relative">
          {experiences.map((exp, index) => (
            <CardExperienceItem key={index} index={index} item={exp} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Educación & Certificaciones
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-semibold text-black dark:text-white mb-2">
                  🎓 Educación
                </h4>
                <p className="text-black dark:text-gray-300 mb-1">
                  Ingeniería en Sistemas
                </p>
                <p className="text-sm text-black dark:text-gray-400">
                  Universidad Mayor de San Simon (2015-2020)
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-black dark:text-white mb-2">
                  📜 Certificaciones
                </h4>
                <div className="space-y-1">
                  <p className="text-black dark:text-gray-300 text-sm">
                    • Diplomado en Informatica Forence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
