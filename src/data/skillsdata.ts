import { Code, Database, Server, Terminal, Smartphone, Palette, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: Code,
    color: "from-blue-600 to-blue-800",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Frontend Styling",
    icon: Palette,
    color: "from-indigo-600 to-indigo-800",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vuetify", level: 80 },
      { name: "Styled Components", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-gray-600 to-gray-800",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Ruby on Rails", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-green-600 to-green-800",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-600 to-purple-800",
    skills: [
      { name: "Flutter", level: 50 },
      { name: "Android Studio", level: 55 },
      { name: "Java", level: 50 },
    ],
  },
  {
    title: "State Management & Libraries",
    icon: Wrench,
    color: "from-cyan-600 to-cyan-800",
    skills: [
      { name: "Pinia", level: 80 },
      { name: "ECharts", level: 85 },
    ],
  },
  {
    title: "Development Tools",
    icon: Terminal,
    color: "from-orange-600 to-orange-800",
    skills: [
      { name: "Git", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Storybook", level: 82 },
    ],
  },
  {
    title: "Specialized Systems",
    icon: Terminal,
    color: "from-red-600 to-red-800",
    skills: [
      { name: "SIAT", level: 88 },
      { name: "Divi", level: 78 },
    ],
  },
];

export const techSkills = [
  "SIAT",
  "Storybook",
  "Divi",
  "Flutter",
  "Android Studio",
  "Java"
];