import { Calendar, ExternalLink, Eye, Building2 } from "lucide-react";
import { Experience } from "../../types";

type Props = {
  item: Experience;
  index: number;
  onSelect?: (item: Experience) => void;
};

const CardExperienceItem = ({ item, index, onSelect }: Props) => {
  const isEven = index % 2 === 0;
  const [startDate, endDate] = item.period.split(/\s*[-–]\s*/);

  return (
    <div className="relative pl-8 lg:pl-0 pb-8 last:pb-0 group">
      {/* Línea vertical de la línea de tiempo */}
      <div
        aria-hidden="true"
        className="absolute left-3 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 lg:-translate-x-1/2 group-last:bottom-auto group-last:h-6"
      />

      {/* Indicador circular */}
      <div
        aria-hidden="true"
        className="absolute left-3 lg:left-1/2 top-6 -translate-x-1/2 z-10 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900 group-hover:scale-125 transition-transform duration-200"
      />

      <div
        className={`flex flex-col lg:flex-row items-stretch lg:items-start gap-4 lg:gap-8 ${
          isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Tarjeta principal */}
        <div
          className={`w-full lg:w-1/2 ${
            isEven ? "lg:pl-8" : "lg:pr-8"
          }`}
        >
          <article className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all duration-200">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                <Calendar size={13} />
                <span>{item.period}</span>
              </span>

              <div className="flex items-center gap-2">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Abrir sitio web de ${item.company}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-700/70 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} />
                    <span>Ver sitio</span>
                  </a>
                )}
                {onSelect && (
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    title={`Ver detalles de ${item.position}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/70 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Eye size={12} />
                    <span>Detalle</span>
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-1">
              {item.position}
            </h3>

            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
              <Building2 size={15} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>{item.company}</span>
            </div>

            <ul className="space-y-2 mb-5">
              {item.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                Tecnologías utilizadas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 rounded-md text-xs font-medium border border-slate-200/70 dark:border-slate-600/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Columna opuesta en escritorio para balance visual */}
        <div
          className={`hidden lg:flex lg:w-1/2 items-center ${
            isEven ? "lg:pr-8 justify-end" : "lg:pl-8 justify-start"
          } pt-4`}
        >
          <div
            className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 ${
              isEven ? "text-right flex-row-reverse" : "text-left"
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs tabular-nums">
              #{String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {startDate}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {endDate || "Actualidad"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperienceItem;