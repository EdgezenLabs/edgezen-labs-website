import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import Reveal from "@/components/marketing/Reveal";
import { productDetails, slugifyProduct } from "@/content/products-detail";

type Product = (typeof productDetails)[number];

interface ProductDetailSectionProps {
  product: Product;
  index: number;
}

const ProductDetailSection = ({ product, index }: ProductDetailSectionProps) => {
  const reversed = index % 2 === 1;
  const sectionId = slugifyProduct(product.name);
  const isBriktra = product.name === "Briktra";

  return (
    <section
      id={sectionId}
      className={`relative scroll-mt-28 overflow-hidden section-y ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}
    >
      <div className="absolute inset-0 mesh-grid opacity-20" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto grid max-w-wide items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <Reveal direction={reversed ? "right" : "left"}>
            <div className="relative">
              <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${product.gradient} blur-2xl`} />
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-5 shadow-token-md">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    Product 0{index + 1}
                  </span>
                </div>
                <div
                  className={`flex min-h-[280px] items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} p-8 md:min-h-[320px]`}
                >
                  <img
                    src={product.logo}
                    alt={product.name}
                    className={`max-h-56 w-auto object-contain drop-shadow-lg ${isBriktra ? "" : "rounded-lg"}`}
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {product.stats.map((stat) => (
                    <div key={stat} className="rounded-xl border border-border/70 bg-background p-3 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} direction={reversed ? "left" : "right"}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 shadow-token-sm">
              <product.icon
                className={product.color.includes("gradient") ? "text-accent" : product.color}
                size={16}
                aria-hidden
              />
              <span className={`text-sm font-semibold ${product.color}`}>{product.tagline}</span>
            </div>
            <h2 className={`text-h2 font-bold ${product.color}`}>{product.name}</h2>
            {product.note && <p className="mt-3 text-lg font-semibold italic text-accent">{product.note}</p>}
            <p className="mt-5 text-body-lg text-muted-foreground">{product.description}</p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <FeatureListItem key={feature} className="bg-card shadow-token-xs">
                  {feature}
                </FeatureListItem>
              ))}
            </div>

            <div className="mt-8">
              {product.cta ? (
                <Link to={product.cta.path}>
                  <Button variant="primary" size="lg">
                    {product.cta.label}
                    <ChevronRight className="ml-2" size={16} aria-hidden />
                  </Button>
                </Link>
              ) : (
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Discuss This Product
                    <ArrowRight className="ml-2" size={16} aria-hidden />
                  </Button>
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
