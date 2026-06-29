import { ArrowRight, Globe2, LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import PageCTA from "@/components/layout/PageCTA";
import Reveal from "@/components/marketing/Reveal";
import WebsiteShowcaseCard from "@/components/marketing/WebsiteShowcaseCard";
import { websiteShowcases } from "@/content/websites";

const Websites = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Websites"
      description="Client websites designed and developed by EdgeZen Labs — conversion-focused business sites for finance, healthcare, and events."
      canonical="https://edgezenlabs.com/websites"
    />

    <PageHero
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Globe2 size={16} className="text-accent" aria-hidden />
          Websites Designed by EdgeZen Labs
        </span>
      }
      title="Client websites built to look sharp and convert clearly."
      description="A dedicated showcase for business websites designed and developed by EdgeZen Labs, separate from our product portfolio."
      align="center"
    />

    <section className="pb-section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {websiteShowcases.map((site, index) => (
            <WebsiteShowcaseCard key={site.name} site={site} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-secondary/30 section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-content rounded-3xl border border-border/70 bg-card p-8 shadow-token-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <LayoutTemplate size={34} aria-hidden />
              </div>
              <div>
                <h2 className="text-h3 font-bold tracking-tight">Need a professional business website?</h2>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  We design websites that make the offer clear, guide visitors toward action, and feel credible on every screen size.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-default hover:underline"
                >
                  Start a website project
                  <ArrowRight className="ml-2" size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <PageCTA
      eyebrow="New website?"
      title="Let's build a site your customers trust."
      description="From landing pages to full business websites, we design for clarity and conversion."
    />
  </PageLayout>
);

export default Websites;
