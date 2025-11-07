import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de comercio electrónico con React, Node.js y Stripe para pagos.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real usando Socket.io.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    category: "fullstack",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard interactivo del clima con gráficos y predicciones usando APIs externas.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    category: "frontend",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Server",
    description:
      "API RESTful robusta con autenticación JWT y documentación completa con Swagger.",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Node.js", "Express", "JWT", "Swagger"],
    category: "backend",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile Finance App",
    description:
      "Aplicación móvil para gestión financiera personal con React Native.",
    image:
      "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React Native", "Redux", "Firebase"],
    category: "mobile",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Blog CMS",
    description:
      "Sistema de gestión de contenido para blogs con editor WYSIWYG y SEO optimizado.",
    image:
      "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "Strapi", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export const filters = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" },
];
