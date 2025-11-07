import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  color?: string;
};

export interface NavBar {
  icon: LucideIcon;
  label: string;
  id: string;
};

export interface Stats {
  icon: LucideIcon;
  label: string;
  value: string;
};

export interface CategorySkill {
  icon: LucideIcon;
  title: string;
  color: string;
  skills: Skill[];
};

export interface ProjectFilter {
  label: string;
  id: string;
};

export interface DateCurious {
  title: string;
  description: string;
}
