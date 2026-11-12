import { ArrowUp, Terminal } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { navItemsData } from "../data/navbardata";

const Footer = () => {
  const { scrollToSection } = useNavigation();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Terminal size={16} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                Ronal Ayra Revollo
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Desarrollador Full Stack · Cochabamba, Bolivia
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navItemsData.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-center sm:text-left">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Ronal Ayra. Todos los derechos
              reservados.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              aria-label="Volver arriba"
              title="Volver al inicio"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors flex-shrink-0"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
