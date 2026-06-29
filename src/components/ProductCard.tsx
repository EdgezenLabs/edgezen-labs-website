import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingCard from "@/components/marketing/MarketingCard";
import ProductLogo from "@/components/marketing/ProductLogo";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  logo: string;
  color: string;
  eyebrow?: string;
  link?: string;
}

const ProductCard = ({ name, description, logo, color, eyebrow = "Product", link }: ProductCardProps) => (
  <MarketingCard
    as="article"
    padding="lg"
    interactive
    accent="top"
    className="group relative h-full overflow-hidden bg-card/80"
  >
    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/10 blur-3xl" aria-hidden />

    <div className="relative flex h-full flex-col justify-between gap-8">
      <div className="flex items-start justify-between gap-6">
        <ProductLogo src={logo} alt={name} name={name} />
        {link ? (
          <Link
            to={link}
            aria-label={`View details for ${name}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-default hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowRight className="transition-default hover:translate-x-0.5" size={18} aria-hidden />
          </Link>
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-default group-hover:bg-accent group-hover:text-accent-foreground"
            aria-hidden
          >
            <ArrowRight size={18} />
          </div>
        )}
      </div>

      <div>
        <p className="eyebrow mb-3 text-muted-foreground">{eyebrow}</p>
        <h3 className={cn("mb-4 text-2xl font-semibold tracking-tight", color)}>{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
      </div>
    </div>
  </MarketingCard>
);

export default ProductCard;
