import { Mail, Phone, MapPin, Github, Linkedin, Gitlab } from 'lucide-react';
import { ContactInfo, SocialLink } from '../types';

export const contactInfoData: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ronal.ayra.revollo@gmail.com",
    href: "mailto:ronal.ayra.revollo@gmail.com?subject=Contacto%20desde%20portfolio&body=Hola%20Ronal,%20te%20contacto%20porque...",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+591 76441883",
    href: "https://wa.me/59176441883?text=Hola%20Ronal,%20te%20contacto%20desde%20tu%20portfolio",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cochabamba, Bolivia",
    href: "https://www.google.com/maps/place/Cochabamba,+Bolivia/@-17.4139766,-66.3454651,12z/data=!3m1!4b1!4m6!3m5!1s0x93e373e0d9e4ab27:0xa2719ae9532c3e65!8m2!3d-17.4139766!4d-66.1653224!16zL20vMDFmZ3Y0?entry=ttu",
  },
];

export const socialLinkData: SocialLink[] = [
  { 
    icon: Github, 
    href: "https://github.com/RonalAyra", 
    label: "GitHub", 
    color: "hover:text-gray-900 dark:hover:text-white" 
  },
   { 
    icon: Gitlab, 
    href: "https://gitlab.com/RonalAR", 
    label: "GitLab", 
    color: "hover:text-gray-900 dark:hover:text-white" 
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ronal-ayra-revollo",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
];
