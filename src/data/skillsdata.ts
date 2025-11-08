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
    color: "from-blue-600 to-blue-800",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Frontend Styling & UI",
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
    title: "Backend Frameworks",
    icon: Server,
    color: "from-gray-600 to-gray-800",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Ruby on Rails", level: 80 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    title: "Database Systems",
    icon: Database,
    color: "from-green-600 to-green-800",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "APIs & HTTP Clients",
    icon: Cpu,
    color: "from-cyan-600 to-cyan-800",
    skills: [
      { name: "Axios", level: 95 },
      { name: "Fetch API", level: 90 },
      { name: "WebSockets", level: 85 },
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
    title: "State Management",
    icon: Wrench,
    color: "from-amber-600 to-amber-800",
    skills: [
      { name: "Pinia", level: 80 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    color: "from-purple-600 to-purple-800",
    skills: [
      { name: "ECharts", level: 85 },
      { name: "Highcharts", level: 80 },
    ],
  },
  {
    title: "Authentication",
    icon: Shield,
    color: "from-green-600 to-green-800",
    skills: [
      { name: "JWT", level: 85 },
      { name: "Laravel Sanctum", level: 80 },
    ],
  },
  {
    title: "Development Tools",
    icon: Terminal,
    color: "from-orange-600 to-orange-800",
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
  "Java",
  "Socket.IO",
  "Spring Boot",
];
