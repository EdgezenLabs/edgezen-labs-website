import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import HomeHero from "@/components/marketing/HomeHero";
import LogoMarquee from "@/components/marketing/LogoMarquee";
import TrustIndicators from "@/components/marketing/TrustIndicators";
import CaseStudyPreview from "@/components/marketing/CaseStudyPreview";
import ProductsShowcase from "@/components/marketing/ProductsShowcase";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import WebsitesSection from "@/components/marketing/WebsitesSection";
import Reveal from "@/components/marketing/Reveal";

const Index = () => (
  <PageLayout>
    <SEO
      title="EdgeZen Labs | Engineering Digital Excellence"
      description="Full-stack product engineering — mobile apps, ERP platforms, AI tools, and business websites built for serious teams."
      canonical="https://edgezenlabs.com/"
    />

    <HomeHero />
    <LogoMarquee />
    <TrustIndicators />
    <CaseStudyPreview />
    <ProductsShowcase />

    <section className="section-y border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-wide gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Who we are"
              title="A product studio for serious digital work."
              description="EdgeZen Labs is a full-stack engineering team building mobile-first applications, cloud-native systems, and enterprise-grade products."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body-lg text-muted-foreground">
              We work across <span className="font-medium text-foreground">Flutter</span>,{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">TypeScript</span>,{" "}
              <span className="font-medium text-foreground">Node.js</span>, and{" "}
              <span className="font-medium text-foreground">AWS</span> — from discovery and design through launch and
              support.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-default hover:text-foreground"
            >
              Learn about our approach
              <ArrowRight className="ml-2" size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <WebsitesSection />
  </PageLayout>
);

export default Index;
