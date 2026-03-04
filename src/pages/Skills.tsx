import SkillCategoryItem from "../components/skills/SkillCategoryItem";
import { skillCategories } from "../data/skillsdata";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Mis{" "}
            <span className="bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones
            completas
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <SkillCategoryItem item={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
