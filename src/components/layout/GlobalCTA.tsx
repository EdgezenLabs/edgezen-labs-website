import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlobalCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const GlobalCTA = ({
  eyebrow = "Build With Us",
  title = "Have a product idea, platform, or app that needs to feel premium?",
  description,
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
  className = "",
}: GlobalCTAProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-border/70 bg-background p-8 shadow-token-sm md:p-10 ${className}`.trim()}
  >
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-gradient-purple/10 via-gradient-pink/10 to-gradient-blue/10 blur-3xl" />
    <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-h2 font-bold tracking-tight">{title}</h2>
        {description && <p className="mt-4 text-muted-foreground">{description}</p>}
      </div>
      <Link to={ctaHref} className="shrink-0">
        <Button variant="primary" size="lg">
          {ctaLabel}
          <ArrowRight className="ml-2" size={18} aria-hidden />
        </Button>
      </Link>
    </div>
  </div>
);

export default GlobalCTA;
