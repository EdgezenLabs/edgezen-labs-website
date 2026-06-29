import type { LucideIcon } from "lucide-react";
import { Award, Code2, Eye, Heart, Rocket, ShieldCheck, Target } from "lucide-react";

export const aboutPillars: { icon: LucideIcon; label: string; description: string }[] = [
  { icon: Rocket, label: "Product Strategy", description: "Discovery, scope, and roadmap clarity" },
  { icon: Code2, label: "Clean Engineering", description: "Maintainable architecture and delivery" },
  { icon: ShieldCheck, label: "Secure Systems", description: "Cloud-ready, permission-aware platforms" },
];

export const aboutStats = [
  { value: "6+", label: "Product lines" },
  { value: "3", label: "Client websites" },
  { value: "End-to-end", label: "Delivery" },
] as const;

export const philosophy = [
  "We do not just write code — we craft experiences.",
  "We design for real users, real teams, and real business operations.",
  "We build systems that can evolve after launch.",
] as const;

export const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Create intelligent, scalable digital products that help businesses move faster and serve customers better.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Become a trusted product engineering partner for companies that care about design, performance, and long-term quality.",
  },
  {
    icon: Heart,
    title: "Craft",
    description:
      "We care about the details users feel: speed, clarity, reliability, and interfaces that make complex work simple.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "From architecture to launch, we build with discipline so every product can grow beyond its first release.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your goals, users, workflows, and technical risks in a structured discovery phase before writing code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We shape clear screens, user journeys, and system flows in Figma so the product feels natural before build.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We develop in focused sprints with clean architecture, reusable components, and regular demos you can react to.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We deploy, monitor, refine, and support the product so it stays dependable and improvable after release.",
  },
] as const;
