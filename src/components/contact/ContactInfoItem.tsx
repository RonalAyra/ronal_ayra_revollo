import { ContactInfo } from "../../types";
import { useState } from "react";

type Props = {
  item: ContactInfo;
};

const ContactInfoItem = ({ item }: Props) => {
  const { icon: Icon, label, value, href } = item;
  const [isHovered, setIsHovered] = useState(false);

  const getContactColor = (type: string) => {
    const typeLower = type.toLowerCase();

    if (typeLower.includes("email") || typeLower.includes("correo"))
      return "from-red-500 to-pink-600";
    if (typeLower.includes("teléfono") || typeLower.includes("phone") || typeLower.includes("whatsapp"))
      return "from-green-500 to-emerald-600";
    if (typeLower.includes("linkedin") || typeLower.includes("professional"))
      return "from-blue-500 to-indigo-600";
    if (typeLower.includes("github") || typeLower.includes("gitlab") || typeLower.includes("code"))
      return "from-purple-500 to-violet-600";
    if (typeLower.includes("portfolio") || typeLower.includes("website") || typeLower.includes("web"))
      return "from-orange-500 to-amber-600";
    if (typeLower.includes("ubicación") || typeLower.includes("location") || typeLower.includes("dirección"))
      return "from-cyan-500 to-teal-600";

    return "from-gray-600 to-slate-800";
  };

  const colorClass = getContactColor(label);

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center p-4 
                 bg-white/80 dark:bg-gray-800/80 
                 rounded-2xl 
                 border-2 border-gray-200 dark:border-gray-700 
                 backdrop-blur-sm
                 hover:shadow-xl 
                 transition-all duration-500 group
                 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
      ></div>
      <div
        className={`relative flex-shrink-0 w-12 h-12 
                    bg-gradient-to-r ${colorClass}
                    rounded-xl 
                    flex items-center justify-center 
                    text-white 
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-500
                    shadow-lg group-hover:shadow-2xl
                    z-10`}
      >
        <Icon size={20} />
        {isHovered && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
        )}
      </div>
      <div className="relative ml-4 z-10">
        <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-300">
          {label}
        </p>
        <p className="text-gray-900 dark:text-white font-semibold group-hover:text-white transition-colors duration-300">
          {value}
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colorClass} rounded-full transition-all duration-500 ${
          isHovered ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      ></div>
      <div
        className={`absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      {isHovered && (
        <>
          <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-150"></div>
        </>
      )}
    </a>
  );
};

export default ContactInfoItem;