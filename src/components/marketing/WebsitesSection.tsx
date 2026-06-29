import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";
import SectionHeader from "@/components/layout/SectionHeader";
import WebsitePreviewCard from "@/components/marketing/WebsitePreviewCard";
import { websites } from "@/content/home";
import Reveal from "@/components/marketing/Reveal";

const WebsitesSection = () => (
  <>
    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Websites designed"
            title="Business websites crafted to convert clearly."
            description="Fast, credible web experiences for finance, healthcare, events, and more."
          />
          <Link
            to="/websites"
            className="inline-flex shrink-0 items-center text-sm font-semibold text-accent transition-default hover:text-foreground"
          >
            View all websites
            <ArrowRight className="ml-2" size={16} aria-hidden />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {websites.map((site, index) => (
            <Reveal key={site.name} delay={index * 0.08}>
              <WebsitePreviewCard site={site} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <GlobalCTA
            eyebrow="Ready to build?"
            title="Tell us what you want to ship — we'll help shape the first version."
            description="Apps, platforms, ERP systems, or business websites. One team from discovery to deployment."
          />
        </Reveal>
      </div>
    </section>
  </>
);

export default WebsitesSection;
