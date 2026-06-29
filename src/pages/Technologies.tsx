import { Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import SectionHeader from "@/components/layout/SectionHeader";
import MarketingCard from "@/components/marketing/MarketingCard";
import Reveal from "@/components/marketing/Reveal";
import { featuredTech, techStack } from "@/content/technologies";

const Technologies = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Technologies"
      description="Modern technology stack for fast, scalable products — Flutter, React, TypeScript, Node.js, AWS, Unity, and AI integrations."
      canonical="https://edgezenlabs.com/technologies"
    />

    <PageHero
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Sparkles size={16} aria-hidden />
          Technology Stack
        </span>
      }
      title={
        <>
          Modern tools for <span className="gradient-text">fast, scalable products</span>.
        </>
      }
      description="We choose practical, proven technologies that help products launch faster, scale cleanly, and stay maintainable."
      aside={
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
          <div className="relative rounded-3xl border border-border/70 bg-card/85 p-6 shadow-token-lg backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3">
              {featuredTech.map((tech) => (
                <div key={tech} className="rounded-2xl border border-border/70 bg-background p-4 text-center font-semibold">
                  {tech}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-foreground p-5 text-background">
              <p className="text-sm uppercase tracking-wider text-background/60">Build Standard</p>
              <p className="mt-2 text-2xl font-bold">Secure, fast, maintainable</p>
            </div>
          </div>
        </div>
      }
    />

    <section className="pb-section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <MarketingCard padding="none" interactive className="group overflow-hidden">
                <div className={`bg-gradient-to-br ${category.accent} p-7`}>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 text-accent shadow-token-sm backdrop-blur">
                    <category.icon size={26} aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{category.category}</h2>
                </div>
                <div className="space-y-3 p-6">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3"
                    >
                      <span className="font-medium">{tech}</span>
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                    </div>
                  ))}
                </div>
              </MarketingCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-secondary/30 section-y">
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-content rounded-3xl border border-border/70 bg-card p-8 shadow-token-sm md:p-12">
            <SectionHeader
              eyebrow="Technical Expertise"
              title="We do not chase tools. We pick the right stack for the product."
              className="max-w-none"
            />
            <div className="mt-8 grid gap-6 text-body-lg leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>
                Our team works across mobile-first Flutter applications, React interfaces, cloud-native APIs, databases,
                CI/CD, and AI integrations.
              </p>
              <p>
                Every product is designed around maintainability, performance, security, and the ability to keep improving
                after launch.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <PageCTA />
  </PageLayout>
);

export default Technologies;
