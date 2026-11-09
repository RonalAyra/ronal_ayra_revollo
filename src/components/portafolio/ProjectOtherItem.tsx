import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types";
import TechnologiesItem from "../hero/TechnologiesItem";

type Props = {
  item: Project;
};

const ProjectOtherItem = ({ item }: Props) => {
  return (
    <article className="group bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código fuente de ${item.title} en GitHub`}
                title={`Código fuente de ${item.title}`}
                className="p-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm"
              >
                <Github size={16} />
              </a>
            )}
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir demostración en vivo de ${item.title}`}
                title={`Ver demo de ${item.title}`}
                className="p-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="p-5">
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
            {item.title}
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
        {item.technologies.slice(0, 3).map((tech) => (
          <TechnologiesItem key={tech} item={tech} />
        ))}
        {item.technologies.length > 3 && (
          <TechnologiesItem item={`+${item.technologies.length - 3}`} />
        )}
      </div>
    </article>
  );
};

export default ProjectOtherItem;
