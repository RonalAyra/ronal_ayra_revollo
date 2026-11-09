import {
  Code,
  Database,
  Server,
  Terminal,
  Smartphone,
  Palette,
  Wrench,
  Cpu,
  BarChart3,
  Shield,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: Code,
    color: "bg-blue-600",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Frontend Styling & UI",
    icon: Palette,
    color: "bg-indigo-600",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vuetify", level: 80 },
      { name: "Styled Components", level: 85 },
    ],
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    color: "bg-teal-600",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Ruby on Rails", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: ".NET 10 / .NET 6", level: 85 },
    ],
  },
  {
    title: "Database Systems",
    icon: Database,
    color: "bg-green-600",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Sql Server", level: 65 },
    ],
  },
  {
    title: "APIs & HTTP Clients",
    icon: Cpu,
    color: "bg-cyan-600",
    skills: [
      { name: "Axios", level: 95 },
      { name: "Fetch API", level: 90 },
      { name: "WebSockets", level: 85 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "bg-purple-600",
    skills: [
      { name: "Flutter (Web & Mobile)", level: 85 },
      { name: "Android Studio", level: 55 },
      { name: "Java", level: 50 },
    ],
  },
  {
    title: "State Management",
    icon: Wrench,
    color: "bg-amber-600",
    skills: [
      { name: "Pinia", level: 80 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    color: "bg-purple-600",
    skills: [
      { name: "ECharts", level: 85 },
      { name: "Highcharts", level: 80 },
    ],
  },
  {
    title: "Authentication",
    icon: Shield,
    color: "bg-green-600",
    skills: [
      { name: "JWT", level: 85 },
      { name: "Laravel Sanctum", level: 80 },
    ],
  },
  {
    title: "Development Tools",
    icon: Terminal,
    color: "bg-orange-600",
    skills: [
      { name: "Git", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Linux", level: 88 },
      { name: "Storybook", level: 82 },
    ],
  },
  {
    title: "Specialized Systems",
    icon: Terminal,
    color: "bg-red-600",
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
  "Java",
  "Socket.IO",
  "Spring Boot",
];
