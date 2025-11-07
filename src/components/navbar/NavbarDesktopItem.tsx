import { NavBar } from "../../types";

type Props = {
  item: NavBar;
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const NavBarDesktopItem = ({
  item,
  activeSection,
  scrollToSection,
}: Props) => {
  const { icon: Icon } = item;
  return (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
        activeSection === item.id
          ? "bg-gray-500 from-gray-500 to-gray-500 text-white shadow-lg"
          : "text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
      }`}
    >
      <Icon
        size={16}
        className={activeSection === item.id ? "text-white" : "text-current"}
      />
      {item.label}
    </button>
  );
};

export default NavBarDesktopItem;
