import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200/20 dark:border-gray-800/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-gray-700 to-slate-900 
                dark:from-white dark:to-white"
            >
              AYRA
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-baseline space-x-4">
              {navItemsData.map((item) => {
                return (
                  <NavBarDesktopItem
                    key={item.id}
                    item={item}
                    activeSection={activeSection}
                    scrollToSection={handleScrollToSection}
                  />
                );
              })}
            </div>
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20 transition-colors duration-300">
            {navItemsData.map((item) => {
              return (
                <NavBarMobileItem
                  key={item.id}
                  item={item}
                  scrollToSection={handleScrollToSection}
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
