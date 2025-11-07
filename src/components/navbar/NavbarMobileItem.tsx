import { NavBar } from "../../types";

type Props = {
  item: NavBar;
  scrollToSection: (id: string) => void;
};

const NavBarMobileItem = ({ item, scrollToSection }: Props) => {
  const { icon: Icon } = item;
  return (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
    >
      <Icon size={18} />
      {item.label}
    </button>
  );
};

export default NavBarMobileItem;
