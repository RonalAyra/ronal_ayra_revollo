import { useState } from "react";
import { SocialLink } from "../../types";

type Props = {
  item: SocialLink;
};

const SocialIconItem = ({ item }: Props) => {
  const { icon: Icon, label, href } = item;
  const [isHovered, setIsHovered] = useState(false);

  const getSocialColor = (socialLabel: string) => {
    const labelLower = socialLabel.toLowerCase();

    if (labelLower.includes("linkedin")) return "hover:bg-blue-600 hover:border-blue-600";
    if (labelLower.includes("github")) return "hover:bg-slate-800 hover:border-slate-700";
    if (labelLower.includes("gitlab")) return "hover:bg-orange-600 hover:border-orange-600";
    if (labelLower.includes("email") || labelLower.includes("mail"))
      return "hover:bg-red-600 hover:border-red-600";
    if (labelLower.includes("twitter") || labelLower.includes("x"))
      return "hover:bg-sky-500 hover:border-sky-500";

    return "hover:bg-slate-700 hover:border-slate-700";
  };

  const socialColorClass = getSocialColor(label);

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      title={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800/80 text-slate-200 border border-slate-600/80 backdrop-blur-sm hover:text-white hover:-translate-y-0.5 shadow-sm transition-all duration-200 ${socialColorClass}`}
    >
      <Icon size={20} />
      {isHovered && (
        <span
          role="tooltip"
          className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap z-50 shadow-md border border-slate-700 pointer-events-none"
        >
          {label}
        </span>
      )}
    </a>
  );
};

export default SocialIconItem;