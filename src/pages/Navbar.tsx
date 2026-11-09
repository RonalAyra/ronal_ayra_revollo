import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import NavBarDesktopItem from "../components/navbar/NavbarDesktopItem";
import { navItemsData } from "../data/navbardata";
import NavBarMobileItem from "../components/navbar/NavbarMobileItem";
import { useNavigation } from "../context/NavigationContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection, activeSection } = useNavigation();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => handleScrollToSection("home")}
            className="flex items-center gap-2.5 text-left group rounded-lg focus:outline-none"
            aria-label="Ir al inicio - Ronal Ayra"
          >
            <span className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <Terminal size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                AYRA
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                Full Stack Dev
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              {navItemsData.map((item) => (
                <NavBarDesktopItem
                  key={item.id}
                  item={item}
                  activeSection={activeSection}
                  scrollToSection={handleScrollToSection}
                />
              ))}
            </div>

            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

            <ThemeToggle />

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                title={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItemsData.map((item) => (
              <NavBarMobileItem
                key={item.id}
                item={item}
                activeSection={activeSection}
                scrollToSection={handleScrollToSection}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
