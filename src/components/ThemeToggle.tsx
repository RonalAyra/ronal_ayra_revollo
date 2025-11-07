import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-yellow-400 transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
      />
      <span className="absolute top-1 left-1 text-black dark:hidden ml-7">
        <Sun size={14} />
      </span>
      <span className="absolute top-1 right-1 text-yellow-300 hidden dark:block mr-7">
        <Moon size={14} />
      </span>
    </button>
  );
};

export default ThemeToggle;
