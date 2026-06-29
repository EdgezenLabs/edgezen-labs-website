import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import SectionHeader from "@/components/layout/SectionHeader";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import MarketingCard from "@/components/marketing/MarketingCard";
import Reveal from "@/components/marketing/Reveal";
import ServiceCard from "@/components/marketing/ServiceCard";
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
        <Button variant="primary" size="lg">
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
              <ServiceCard {...service} />
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
                <MarketingCard padding="md">
                  <p className="mb-8 text-4xl font-bold gradient-text">{phase.step}</p>
                  <h3 className="mb-3 text-lg font-semibold">{phase.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
                </MarketingCard>
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
              <FeatureListItem className="p-6 text-base">{item}</FeatureListItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <PageCTA />
  </PageLayout>
);

export default Services;
