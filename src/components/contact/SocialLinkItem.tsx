import { SocialLink } from "../../types";
import { useState } from "react";

type Props = {
  item: SocialLink;
};

const SocialLinkItem = ({ item }: Props) => {
  const { icon: Icon, label, href } = item;
  const [isHovered, setIsHovered] = useState(false);

  const getSocialColor = (socialLabel: string) => {
    const labelLower = socialLabel.toLowerCase();

    if (labelLower.includes("linkedin")) return "from-blue-600 to-blue-800";
    if (labelLower.includes("github")) return "from-gray-700 to-gray-900";
    if (labelLower.includes("twitter")) return "from-sky-500 to-blue-500";
    if (labelLower.includes("instagram")) return "from-pink-500 to-rose-600";
    if (labelLower.includes("youtube")) return "from-red-500 to-red-700";
    if (labelLower.includes("facebook")) return "from-blue-500 to-blue-700";
    if (labelLower.includes("portfolio") || labelLower.includes("website")) 
      return "from-purple-500 to-purple-700";
    
    return "from-gray-500 to-gray-700";
  };

  const socialColorClass = getSocialColor(label);

  return (
    <a
      key={label}
      href={href}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative p-4 rounded-2xl
        bg-white/80 dark:bg-gray-800/80
        backdrop-blur-sm
        border-2 border-gray-200 dark:border-gray-700
        hover:shadow-2xl
        transition-all duration-500 
        group overflow-hidden
      `}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${socialColorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${socialColorClass} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md`}
      ></div>

      <div className="relative z-10">
        <Icon 
          size={28} 
          className={`
            text-gray-700 dark:text-gray-300 
            group-hover:text-white 
            transition-all duration-500
            ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
          `} 
        />
      </div>
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 shadow-xl border border-gray-800 dark:border-gray-200">
          <div className="font-semibold">{label}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45 border-r border-b border-gray-900 dark:border-white"></div>
        </div>
      )}
      <div
        className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${socialColorClass} rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered ? "scale-125 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <span className="text-xs text-white">↗</span>
      </div>
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
      )}
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full transition-all duration-300 ${
          isHovered ? "w-3/4 opacity-70" : "w-0 opacity-0"
        }`}
      ></div>
    </a>
  );
};

export default SocialLinkItem;