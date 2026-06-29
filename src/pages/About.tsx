import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { aboutPillars, aboutStats, approach, philosophy, values } from "@/content/about";

const About = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="About"
      description="EdgeZen Labs is a full-stack product studio building mobile apps, web platforms, cloud systems, AI workflows, and games with a design-first engineering mindset."
      canonical="https://edgezenlabs.com/about"
    />

    <PageHero
      eyebrow="About EdgeZen Labs"
      title={
        <>
          We turn bold product ideas into <span className="gradient-text">usable software</span>.
        </>
      }
      description="EdgeZen Labs is a full-stack product studio building mobile apps, web platforms, cloud systems, AI workflows, and games with a strong design-first engineering mindset."
      aside={
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
          <div className="relative rounded-3xl border border-border/70 bg-card/85 p-6 shadow-token-lg backdrop-blur-xl">
            <div className="grid gap-4">
              {aboutPillars.map((pillar) => (
                <div key={pillar.label} className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <pillar.icon size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold">{pillar.label}</p>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-secondary/70 p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <Link to="/contact">
        <Button className="h-btn-lg rounded-xl bg-foreground px-7 text-background">Start a Project</Button>
      </Link>
      <Link to="/websites">
        <Button variant="outline" className="h-btn-lg rounded-xl border-accent/30 px-7">
          View Our Work
        </Button>
      </Link>
    </PageHero>

    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Our Philosophy"
              title="Technology should feel elegant, powerful, and accessible."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map((text, index) => (
              <Reveal key={text} delay={index * 0.08}>
                <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-token-sm">
                  <CheckCircle2 className="mb-5 text-accent" size={24} aria-hidden />
                  <p className="text-lg leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-secondary/30 section-y">
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <Reveal>
            <SectionHeader eyebrow="Core Values" title="The way we build." align="center" className="mb-12 max-w-none" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="group rounded-2xl border border-border/70 bg-card p-7 shadow-token-sm transition-default hover:-translate-y-1 hover:border-accent/30 hover:shadow-token-lg">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-default group-hover:scale-105">
                    <value.icon size={26} aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal>
            <SectionHeader
              eyebrow="Our Approach"
              title="A clear path from idea to launch."
              align="center"
              className="mb-12 max-w-none"
            />
          </Reveal>
          <div className="grid gap-5">
            {approach.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="grid gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-token-sm transition-default hover:border-accent/30 md:grid-cols-[120px_1fr] md:items-center">
                  <div className="text-4xl font-bold gradient-text">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <PageCTA
      eyebrow="Ready to build?"
      title="Let's shape your next product together."
      description="From discovery to launch, we help teams ship software that feels polished and performs in production."
    />
  </PageLayout>
);

export default About;
