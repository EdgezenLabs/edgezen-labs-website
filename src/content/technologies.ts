import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  Layers3,
  Palette,
  Smartphone,
} from "lucide-react";

export const techStack: {
  category: string;
  icon: LucideIcon;
  accent: string;
  technologies: string[];
}[] = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    accent: "from-blue-500/20 to-cyan-500/20",
    technologies: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    category: "Web Development",
    icon: Layers3,
    accent: "from-violet-500/20 to-pink-500/20",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Code2,
    accent: "from-emerald-500/20 to-blue-500/20",
    technologies: ["Node.js", "FastAPI", "Express", "GraphQL"],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "from-orange-500/20 to-amber-500/20",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Firestore"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    accent: "from-sky-500/20 to-indigo-500/20",
    technologies: ["AWS", "Google Cloud", "Firebase", "Docker"],
  },
  {
    category: "Game Development",
    icon: Gamepad2,
    accent: "from-fuchsia-500/20 to-purple-500/20",
    technologies: ["Unity", "C#", "Multiplayer", "Unity UI"],
  },
  {
    category: "Design & Prototyping",
    icon: Palette,
    accent: "from-rose-500/20 to-violet-500/20",
    technologies: ["Figma", "Prototyping", "Design Systems", "Motion UI"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    accent: "from-lime-500/20 to-cyan-500/20",
    technologies: ["OpenAI API", "Python", "TensorFlow", "NLP"],
  },
];

export const featuredTech = ["React", "Flutter", "Node.js", "AWS", "Unity", "OpenAI"] as const;
