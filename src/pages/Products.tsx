import { ArrowRight, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import ProductDetailSection from "@/components/marketing/ProductDetailSection";
import { Button } from "@/components/ui/button";
import { productDetails, slugifyProduct } from "@/content/products-detail";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/products" && location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <PageLayout showBreadcrumbs>
      <SEO
        title="Products"
        description="ERP platforms, AI tools, field apps, and game experiences from EdgeZen Labs — CredoSafe, Briktra, Expeniqo, ClashCard, Maintzen, and GSTLedger Pro."
        canonical="https://edgezenlabs.com/products"
      />

      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <Sparkles size={16} aria-hidden />
            Product Portfolio
          </span>
        }
        title={
          <>
            Products built for <span className="gradient-text">real business workflows</span>.
          </>
        }
        description="ERP platforms, AI tools, field apps, and game experiences designed with strong product thinking and scalable engineering."
        aside={
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
            <div className="relative rounded-3xl border border-border/70 bg-card/85 p-5 shadow-token-lg backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Product Suite</p>
                  <p className="text-xs text-muted-foreground">{productDetails.length} active product lines</p>
                </div>
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Live</span>
              </div>
              <div className="space-y-3">
                {productDetails.map((product, index) => {
                  const id = slugifyProduct(product.name);
                  return (
                    <a
                      key={product.name}
                      href={`#/products#${id}`}
                      className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background/70 p-4 transition-default hover:border-accent/20 hover:shadow-token-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      <div
                        className={`flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${product.gradient} shadow-token-xs${product.name === "Briktra" ? " p-1" : " rounded-2xl p-2.5"}`}
                      >
                        <img
                          src={product.logo}
                          alt=""
                          className={`max-h-10 w-auto object-contain opacity-85 drop-shadow-md${product.name === "Briktra" ? "" : " rounded-md"}`}
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.tagline}</p>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        }
      >
        <Link to="/contact">
        <Button variant="primary" size="lg">
          Build a Product
          <ArrowRight className="ml-2" size={17} aria-hidden />
        </Button>
      </Link>
      <Link to="/websites">
        <Button variant="accent-outline" size="lg">
            View Websites
          </Button>
        </Link>
      </PageHero>

      <div className="space-y-0">
        {productDetails.map((product, index) => (
          <ProductDetailSection key={product.name} product={product} index={index} />
        ))}
      </div>

      <PageCTA
        eyebrow="Custom product?"
        title="We build new products from zero to launch."
        description="Whether you need an ERP, mobile app, or AI-powered tool, we can help shape and ship it."
      />
    </PageLayout>
  );
};

export default Products;
