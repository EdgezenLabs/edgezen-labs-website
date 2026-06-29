import GlobalCTA from "@/components/layout/GlobalCTA";
import Reveal from "@/components/marketing/Reveal";

interface PageCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const PageCTA = (props: PageCTAProps) => (
  <section className="pb-section-y">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <GlobalCTA {...props} />
      </Reveal>
    </div>
  </section>
);

export default PageCTA;
