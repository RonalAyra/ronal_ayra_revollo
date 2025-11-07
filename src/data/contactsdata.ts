import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'; // importa los íconos que uses
import { ContactInfo, SocialLink } from '../types';

export const contactInfoData: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ronal.ayra.revollo@email.com",
    href: "mailto:alex.garcia@email.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+591 76441883",
    href: "tel:+59176441883",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Ciudad de México, México",
    href: "#",
  },
];

export const socialLinkData: SocialLink[] = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-black" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
    color: "hover:text-blue-400",
  },
];
