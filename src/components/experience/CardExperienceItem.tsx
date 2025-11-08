import { Calendar, ExternalLink } from "lucide-react";
import { Experience } from "../../types";
import { useState } from "react";

type Props = {
  item: Experience;
  index: number;
};

const CardExperienceItem = ({ item, index }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={item.id} className="relative group">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/40 to-cyan-500/20 transform -translate-x-1/2 hidden sm:block"></div>
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <div
            className={`w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-500 rounded-full animate-ping absolute -inset-1 ${
              isHovered ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          ></div>
          <div
            className={`w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-lg sm:shadow-xl transform transition-all duration-500 ${
              isHovered ? "scale-125 sm:scale-125 rotate-45" : "scale-100 rotate-0"
            }`}
          ></div>
          <div className="absolute inset-0 rounded-full bg-white/20 transform scale-75"></div>
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row items-start gap-4 sm:gap-8 ${
          index % 2 === 0 ? "lg:flex-row-reverse" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-full lg:w-6/12 xl:w-5/12 ${
            index % 2 === 0 ? "lg:pr-4 xl:pr-8" : "lg:pl-4 xl:pl-8"
          } sm:ml-12 lg:ml-0`}
        >
          <div
            className={`
            relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8
            border border-white/20 dark:border-gray-700/50
            shadow-lg sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500
            transform hover:scale-[1.01] sm:hover:scale-[1.02] group-hover:border-blue-300/30 dark:group-hover:border-purple-400/30
            ${
              isHovered
                ? "bg-gradient-to-br from-white/90 to-blue-50/50 dark:from-gray-800/90 dark:to-blue-900/20"
                : ""
            }
          `}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
            ></div>
            <div className="relative mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {item.position}
                  </h3>
                  <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    {item.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                      <span>{item.period}</span>
                    </div>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={12} className="sm:w-3 sm:h-3" />
                        <span className="hidden sm:inline">liveUrl</span>
                        <span className="sm:hidden">URL</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-blue-400 from-blue-500 to-purple-500 rounded-full mb-3 sm:mb-4"></div>
            </div>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
              {item.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-start group/desc"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 from-blue-500 to-purple-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0 transform group-hover/desc:scale-125 sm:group-hover/desc:scale-150 transition-transform duration-300"></span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 sm:pt-6">
              <h5 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wide">
                Tecnologías Utilizadas
              </h5>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-2 py-1 sm:px-3 sm:py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-300 dark:hover:border-purple-400 hover:bg-blue-50 dark:hover:bg-purple-900/20 hover:text-blue-700 dark:hover:text-purple-300 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 backdrop-blur-sm"
                    style={{
                      animationDelay: `${techIndex * 100}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-2xl sm:rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-purple-500/30 rounded-bl-2xl sm:rounded-bl-3xl"></div>
          </div>
        </div>
        <div
          className={`w-full lg:w-6/12 xl:w-5/12 ${
            index % 2 === 0 ? "lg:pl-4 xl:pl-8" : "lg:pr-4 xl:pr-8"
          } flex lg:block justify-center`}
        >
          <div className="h-full flex items-center justify-center lg:mt-5">
            <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 border border-gray-200/30 dark:border-gray-700/30">
                <div className="text-xl sm:text-2xl">💼</div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {item.period.split(" - ")[0]}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {item.period.split(" - ")[1] || "Presente"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperienceItem;