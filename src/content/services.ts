import type { LucideIcon } from "lucide-react";
import { Brain, Cloud, Code, Gamepad2, Globe, Palette, Settings, Smartphone } from "lucide-react";

export const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
}[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for speed, clarity, and daily usage.",
    tech: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Responsive web applications and business platforms, from MVPs to internal tools.",
    tech: ["React", "TypeScript", "Node.js", "FastAPI"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Secure, scalable infrastructure for APIs, data, deployments, and high-availability systems.",
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Code,
    title: "API Engineering",
    description: "Fast, reliable APIs designed around real workflows, permissions, reporting, and integrations.",
    tech: ["REST", "GraphQL", "PostgreSQL", "Auth"],
  },
  {
    icon: Gamepad2,
    title: "Unity Game Development",
    description: "Mobile and multiplayer game experiences with polished UI, progression, and scalable systems.",
    tech: ["Unity", "C#", "Multiplayer", "3D"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean product interfaces, prototypes, and design systems that make complex apps easier to use.",
    tech: ["Figma", "Prototyping", "Design Systems", "Motion"],
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "AI integrations that automate reading, categorization, insights, workflows, and support tasks.",
    tech: ["OpenAI", "Python", "ML", "Automation"],
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description: "Deployment pipelines, monitoring, and release systems that keep teams shipping confidently.",
    tech: ["GitHub Actions", "Terraform", "Monitoring", "CI/CD"],
  },
];

export const processPhases = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Align on goals, users, scope, timeline, and technical approach with a written plan.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Validate flows in Figma before development to reduce rework and surprise.",
  },
  {
    step: "03",
    title: "Development",
    description: "Ship in sprints with staging environments, code review, and demoable increments.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Device testing, performance checks, and security review on critical paths.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "Production launch, monitoring setup, documentation, and post-release refinement.",
  },
] as const;

export const serviceHighlights = [
  "Product-first planning",
  "Modern scalable stack",
  "Launch and support",
] as const;
