import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types";
import TechnologiesItem from "../hero/TechnologiesItem";

type Props = {
  item: Project;
};

const ProjectOtherItem = ({ item }: Props) => {
  return (
    <div
      key={item.id}
      className="group bg-white dark:bg-gray-800 
                 rounded-xl shadow-md hover:shadow-lg 
                 transition-all duration-300 
                 border border-gray-100 dark:border-gray-700 
                 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              className="p-1.5 bg-white/90 dark:bg-gray-700/80 
                         backdrop-blur-sm rounded-full 
                         text-black dark:text-gray-200 
                         hover:text-blue-600 dark:hover:text-blue-400 
                         transform hover:scale-110 transition-all duration-300"
            >
              <Github size={16} />
            </a>
          )}
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              className="p-1.5 bg-white/90 dark:bg-gray-700/80 
                         backdrop-blur-sm rounded-full 
                         text-black dark:text-gray-200 
                         hover:text-blue-600 dark:hover:text-blue-400 
                         transform hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-lg font-bold text-black dark:text-white mb-2">
          {item.title}
        </h4>
        <p className="text-black dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {item.technologies.slice(0, 3).map((tech) => (
            <TechnologiesItem key={tech} item={tech} />
          ))}
          {item.technologies.length > 3 && (
            <TechnologiesItem item={`+${item.technologies.length - 3}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectOtherItem;
