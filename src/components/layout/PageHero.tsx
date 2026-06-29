import type { ReactNode } from "react";
import Reveal from "@/components/marketing/Reveal";

interface PageHeroProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description: string;
  align?: "left" | "center";
  children?: ReactNode;
  aside?: ReactNode;
}

const PageHero = ({ eyebrow, title, description, align = "left", children, aside }: PageHeroProps) => (
  <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
    <div className="absolute inset-0 mesh-gradient" />
    <div className="absolute inset-0 mesh-grid opacity-30" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid items-center gap-12 ${aside ? "lg:grid-cols-2" : ""}`}>
        <Reveal className={align === "center" && !aside ? "mx-auto max-w-4xl text-center" : ""}>
          <p className="eyebrow mb-5 inline-flex rounded-full border border-accent/20 bg-background/80 px-4 py-2 shadow-token-sm backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="text-hero font-bold">{title}</h1>
          <p
            className={`mt-6 max-w-2xl text-body-lg text-muted-foreground ${
              align === "center" && !aside ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
          {children && (
            <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${align === "center" && !aside ? "justify-center" : ""}`}>
              {children}
            </div>
          )}
        </Reveal>
        {aside && <Reveal delay={0.12}>{aside}</Reveal>}
      </div>
    </div>
  </section>
);

export default PageHero;
