import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/marketing/Reveal";

const Terms = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Terms of Service"
      description="Terms governing use of the EdgeZen Labs website, communications, and intellectual property."
      canonical="https://edgezenlabs.com/legal/terms"
    />
    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <SectionHeader
              eyebrow="Legal"
              title="Terms of Service"
              description="Terms governing use of the EdgeZen Labs website and communications."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground dark:prose-invert">
              <p>
                By accessing edgezenlabs.com, you agree to these Terms of Service. If you do not agree, please do not use
                this website.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Website use</h3>
              <p>
                Content on this site is provided for general information about EdgeZen Labs services and products. We may
                update content without notice.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Intellectual property</h3>
              <p>
                All trademarks, logos, product names, and site content are owned by EdgeZen Labs or respective owners and
                may not be used without permission.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Limitation of liability</h3>
              <p>
                This website is provided &quot;as is&quot;. EdgeZen Labs is not liable for damages arising from use of this
                site to the fullest extent permitted by law.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <p>
                Questions about these terms:{" "}
                <a href="mailto:contact@edgezenlabs.com" className="text-accent hover:underline">
                  contact@edgezenlabs.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Terms;
