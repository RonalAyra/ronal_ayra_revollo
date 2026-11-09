import { NavBar } from "../../types";

type Props = {
  item: NavBar;
  activeSection?: string;
  scrollToSection: (id: string) => void;
};

const NavBarMobileItem = ({ item, activeSection, scrollToSection }: Props) => {
  const { icon: Icon } = item;
  const isActive = activeSection === item.id;

  return (
    <button
      type="button"
      onClick={() => scrollToSection(item.id)}
      aria-current={isActive ? "page" : undefined}
      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-3 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
    >
      <Icon
        size={18}
        className={isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}
      />
      <span>{item.label}</span>
    </button>
  );
};

export default NavBarMobileItem;
