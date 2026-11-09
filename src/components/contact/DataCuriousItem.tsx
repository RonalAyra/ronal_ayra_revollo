import { DateCurious } from "../../types";
import { Clock } from "lucide-react";

type Props = {
  item: DateCurious;
};

const DataCuriousItem = ({ item }: Props) => {
  return (
    <div className="p-5 sm:p-6 bg-blue-50/70 dark:bg-blue-950/30 rounded-2xl border border-blue-200/80 dark:border-blue-800/70">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
          <Clock size={18} />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
            {item.title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataCuriousItem;