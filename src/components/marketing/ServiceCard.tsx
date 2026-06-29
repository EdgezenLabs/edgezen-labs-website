import type { LucideIcon } from "lucide-react";
import MarketingCard from "@/components/marketing/MarketingCard";
import TechBadge from "@/components/marketing/TechBadge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, tech, className }: ServiceCardProps) => (
  <MarketingCard padding="lg" interactive accent="top" className={cn("group", className)}>
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-default group-hover:scale-105">
      <Icon size={26} aria-hidden />
    </div>
    <h3 className="mb-3 text-xl font-semibold tracking-tight">{title}</h3>
    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <TechBadge key={item}>{item}</TechBadge>
      ))}
    </div>
  </MarketingCard>
);

export default ServiceCard;
