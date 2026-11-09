import { ContactInfo } from "../../types";
import { ExternalLink } from "lucide-react";

type Props = {
  item: ContactInfo;
};

const ContactInfoItem = ({ item }: Props) => {
  const { icon: Icon, label, value, href } = item;

  const getContactColor = (type: string) => {
    const typeLower = type.toLowerCase();

    if (typeLower.includes("email") || typeLower.includes("correo"))
      return "bg-red-600";
    if (
      typeLower.includes("teléfono") ||
      typeLower.includes("phone") ||
      typeLower.includes("whatsapp")
    )
      return "bg-emerald-600";
    if (
      typeLower.includes("ubicación") ||
      typeLower.includes("location") ||
      typeLower.includes("dirección")
    )
      return "bg-blue-600";

    return "bg-slate-700";
  };

  const colorClass = getContactColor(label);
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:shadow-sm transition-all duration-200 group"
    >
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        <div
          className={`flex-shrink-0 w-10 h-10 ${colorClass} rounded-xl flex items-center justify-center text-white shadow-sm`}
        >
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all sm:break-normal">
            {value}
          </p>
        </div>
      </div>
      <ExternalLink
        size={15}
        className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition-colors"
      />
    </a>
  );
};

export default ContactInfoItem;