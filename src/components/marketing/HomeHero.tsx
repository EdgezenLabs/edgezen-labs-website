import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/content/products";
import Reveal from "@/components/marketing/Reveal";

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = featuredProducts[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 lg:min-h-screen">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 mesh-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-gradient-purple/15 via-gradient-pink/15 to-gradient-blue/15 blur-3xl" />
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-gradient-blue/10 blur-3xl"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/80 px-4 py-2 shadow-token-sm backdrop-blur">
              <Sparkles size={16} className="text-accent" aria-hidden />
              <span className="text-sm font-medium text-muted-foreground">Engineering Digital Excellence</span>
            </div>

            <h1 className="max-w-2xl text-hero font-bold">
              We ship <span className="gradient-text">production software</span> for teams that cannot afford mediocre.
            </h1>

            <p className="max-w-xl text-body-lg text-muted-foreground">
              ERP platforms, mobile apps, AI tools, and business websites — designed, engineered, and deployed by one
              product-focused studio.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-btn-xl w-full rounded-xl bg-foreground px-8 text-base text-background shadow-token-lg transition-default hover:scale-[1.02] sm:w-auto"
                >
                  Start a Project
                  <ArrowRight className="ml-2" size={20} aria-hidden />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-btn-xl w-full rounded-xl border-accent/30 bg-background/70 px-8 text-base backdrop-blur transition-default hover:border-accent hover:bg-accent/10 sm:w-auto"
                >
                  See Our Products
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Flutter", "React", "TypeScript", "AWS", "Unity"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/10 via-gradient-pink/10 to-gradient-blue/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-token-xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">Shipped by EdgeZen</p>
                  <p className="text-xs text-muted-foreground">Live product portfolio</p>
                </div>
                <div className="flex gap-1.5">
                  {featuredProducts.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show ${featuredProducts[i].name}`}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-default ${
                        i === activeIndex ? "w-6 bg-accent" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative min-h-[340px] p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full flex-col"
                  >
                    <div className="mb-6 flex flex-1 items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/50 to-background p-6">
                      {"mockup" in active && active.mockup ? (
                        <img
                          src={active.mockup}
                          alt={`${active.name} app preview`}
                          className="max-h-52 w-auto object-contain drop-shadow-xl"
                          loading="eager"
                        />
                      ) : (
                        <img
                          src={active.logo}
                          alt={active.name}
                          className="max-h-32 w-auto object-contain drop-shadow-lg"
                          loading="eager"
                        />
                      )}
                    </div>
                    <div className="space-y-3">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${active.color}`}>{active.eyebrow}</p>
                      <h2 className="text-2xl font-bold tracking-tight">{active.name}</h2>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{active.description}</p>
                      <Link
                        to={active.link}
                        className="inline-flex items-center text-sm font-semibold text-accent transition-default hover:text-foreground"
                      >
                        View product
                        <ArrowRight className="ml-1.5" size={14} aria-hidden />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
