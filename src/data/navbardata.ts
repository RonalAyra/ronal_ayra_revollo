import { Briefcase, Code, Home, Mail, User } from "lucide-react";
import { NavBar } from "../types";

export const navItemsData: NavBar[] = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Acerca', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'portfolio', label: 'Proyectos', icon: Briefcase },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ];
