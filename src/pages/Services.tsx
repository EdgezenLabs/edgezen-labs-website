import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { processPhases, serviceHighlights, services } from "@/content/services";

const Services = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Services"
      description="Full-stack product services — mobile apps, web platforms, cloud architecture, AI integrations, Unity games, and UI/UX design for serious launches."
      canonical="https://edgezenlabs.com/services"
    />

    <PageHero
      eyebrow="Services"
      title={
        <>
          Full-stack product services for <span className="gradient-text">serious launches</span>.
        </>
      }
      description="From mobile apps and business websites to cloud systems, AI, and games, we design and build the full digital experience."
      align="center"
    >
      <Link to="/contact">
        <Button className="h-btn-lg rounded-xl bg-foreground px-7 text-background">
          Discuss a Project
          <ArrowRight className="ml-2" size={17} aria-hidden />
        </Button>
      </Link>
    </PageHero>

    <section className="pb-section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-token-sm transition-default hover:-translate-y-1 hover:border-accent/30 hover:shadow-token-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue opacity-70" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-default group-hover:scale-105">
                  <service.icon size={26} aria-hidden />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-secondary/30 section-y">
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeader
                eyebrow="Process"
                title="Designed to keep momentum high and surprises low."
                description="Every engagement follows a clear rhythm: align, prototype, build, test, launch, and improve."
              />
            </Reveal>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {processPhases.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 0.06}>
                <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-token-sm">
                  <p className="mb-8 text-4xl font-bold gradient-text">{phase.step}</p>
                  <h3 className="mb-3 text-lg font-semibold">{phase.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-wide gap-6 md:grid-cols-3">
          {serviceHighlights.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-token-sm">
                <CheckCircle2 className="text-accent" size={24} aria-hidden />
                <span className="font-semibold">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <PageCTA />
  </PageLayout>
);

export default Services;
