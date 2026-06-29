import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureListItemProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const FeatureListItem = ({ children, icon: Icon = CheckCircle2, className }: FeatureListItemProps) => (
  <div
    className={cn(
      "flex items-center gap-3 rounded-xl border border-border/70 bg-background p-3.5",
      className,
    )}
  >
    <Icon size={16} className="shrink-0 text-accent" aria-hidden />
    <span className="text-sm font-medium">{children}</span>
  </div>
);

export default FeatureListItem;
