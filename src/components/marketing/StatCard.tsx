import type { LucideIcon } from "lucide-react";
import MarketingCard from "@/components/marketing/MarketingCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

const StatCard = ({ value, label, icon: Icon, className }: StatCardProps) => (
  <MarketingCard padding="sm" interactive className={cn("p-5", className)}>
    {Icon && <Icon className="mb-3 text-accent" size={22} aria-hidden />}
    <p className="text-2xl font-bold tracking-tight">{value}</p>
    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
  </MarketingCard>
);

export default StatCard;
