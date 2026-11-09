import { SocialLink } from "../../types";
import { ExternalLink } from "lucide-react";

type Props = {
  item: SocialLink;
};

const SocialLinkItem = ({ item }: Props) => {
  const { icon: Icon, label, href } = item;

  const getSocialColor = (socialLabel: string) => {
    const labelLower = socialLabel.toLowerCase();

    if (labelLower.includes("linkedin"))
      return "hover:bg-blue-600 hover:border-blue-600";
    if (labelLower.includes("github"))
      return "hover:bg-slate-800 hover:border-slate-700";
    if (labelLower.includes("gitlab"))
      return "hover:bg-orange-600 hover:border-orange-600";
    if (labelLower.includes("twitter"))
      return "hover:bg-sky-500 hover:border-sky-500";

    return "hover:bg-slate-700 hover:border-slate-700";
  };

  const socialColorClass = getSocialColor(label);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar perfil en ${label}`}
      title={`Visitar perfil en ${label}`}
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:text-white transition-all duration-200 shadow-sm ${socialColorClass}`}
    >
      <Icon size={18} />
      <span className="text-sm font-semibold">{label}</span>
      <ExternalLink size={13} className="opacity-70" />
    </a>
  );
};

export default SocialLinkItem;