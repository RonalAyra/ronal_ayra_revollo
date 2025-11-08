import { Code, Database, Server, Terminal } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-600 to-blue-800",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vuetify", level: 80 },
      { name: "Flutter", level: 50 },
      { name: "Styled Components", level: 85 },
      { name: "Pinia", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-gray-500 to-gray-800",
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
    title: "DevOps & Tools",
    icon: Terminal,
    color: "from-orange-600 to-orange-800",
    skills: [
      { name: "Git", level: 95 },
      { name: "Postman", level: 90 },
      { name: "ECharts", level: 85 },
      { name: "SIAT", level: 88 },
      { name: "Storybook", level: 82 },
      { name: "Divi", level: 78 },
    ],
  },
];

export const techSkills = ["SIAT", "Storybook", "Divi"];
