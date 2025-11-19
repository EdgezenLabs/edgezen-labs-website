import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  logo: string;
  color: string;
}

const ProductCard = ({ name, description, logo, color }: ProductCardProps) => {
  return (
    <Link to="/products">
      <div className="group relative glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <img src={logo} alt={name} className="h-16 md:h-20 w-auto object-contain" />
            <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" size={24} />
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold mb-3 ${color}`}>{name}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
