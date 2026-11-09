import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="relative inline-flex items-center justify-between w-14 h-8 p-1 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full transition-colors duration-200 hover:border-blue-500 dark:hover:border-blue-400"
    >
      <span className="flex items-center justify-center w-6 h-6 text-amber-500 z-10">
        <Sun size={14} />
      </span>
      <span className="flex items-center justify-center w-6 h-6 text-blue-400 z-10">
        <Moon size={14} />
      </span>
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-950 shadow-sm transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
