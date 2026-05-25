import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  logo: string;
  color: string;
  eyebrow?: string;
  link?: string;
}

const ProductCard = ({ name, description, logo, color, eyebrow = "Product", link }: ProductCardProps) => {
  return (
    <div className="block h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-500">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue opacity-70" />
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="relative flex h-full flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-6">
            <div className={`flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/60 to-secondary/30 p-4 ring-1 ring-border/50 transition-all duration-500 group-hover:bg-background/80 group-hover:ring-accent/20${name === "Briktra" ? "" : " rounded-2xl"}`}>
               <img src={logo} alt={name} className={`max-h-14 w-auto object-contain opacity-85 drop-shadow-lg transition-transform duration-500 group-hover:scale-105${name === "Briktra" ? "" : " rounded-lg"}`} />
            </div>
            {link ? (
              <Link
                to={link}
                aria-label={`View details for ${name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <ArrowRight className="transition-transform hover:translate-x-0.5" size={18} />
              </Link>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
              </div>
            )}
          </div>
          
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
            <h3 className={`mb-4 text-2xl font-semibold tracking-tight ${color}`}>{name}</h3>
            <p className="text-sm leading-7 text-muted-foreground md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
