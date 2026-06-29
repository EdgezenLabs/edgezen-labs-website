import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const TechBadge = ({ children, className }: TechBadgeProps) => (
  <Badge variant="muted" className={cn("px-3 py-1 font-medium", className)}>
    {children}
  </Badge>
);

export default TechBadge;
