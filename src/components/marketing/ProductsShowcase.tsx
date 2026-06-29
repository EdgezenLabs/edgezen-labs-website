import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/layout/SectionHeader";
import { products } from "@/content/products";
import Reveal from "@/components/marketing/Reveal";

const ProductsShowcase = () => (
  <section className="section-y relative overflow-hidden bg-secondary/30">
    <div className="absolute inset-0 mesh-grid opacity-20" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Portfolio"
          title="Products built with business logic, speed, and polish."
          description="Innovative solutions designed to transform businesses and delight users."
        />
        <Link
          to="/products"
          className="inline-flex shrink-0 items-center text-sm font-semibold text-accent transition-default hover:text-foreground"
        >
          View all products
          <ArrowRight className="ml-2" size={16} aria-hidden />
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.name} delay={index * 0.06}>
            <ProductCard {...product} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsShowcase;
