import { Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "../types";

export const socialIconData: SocialLink[] = [
  { icon: Github, href: "https://github.com/RonalAyra", label: "GitHub" },
  { icon: Gitlab, href: "https://gitlab.com/RonalAR", label: "Gitlab" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ronal-ayra-revollo",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ronal.ayra.revollo@gmail.com", label: "Email" },
];
