import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/marketing/Reveal";

const Privacy = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Privacy Policy"
      description="How EdgeZen Labs collects, uses, and protects your information when you use our website and contact forms."
      canonical="https://edgezenlabs.com/legal/privacy"
    />
    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <SectionHeader
              eyebrow="Legal"
              title="Privacy Policy"
              description="How EdgeZen Labs collects, uses, and protects your information."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground dark:prose-invert">
              <p>
                EdgeZen Labs (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes how we handle
                information submitted through our website contact forms and communications.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Information we collect</h3>
              <p>
                When you contact us, we may collect your name, email address, phone number, and project details you
                voluntarily provide.
              </p>
              <h3 className="text-lg font-semibold text-foreground">How we use information</h3>
              <p>
                We use submitted information solely to respond to inquiries, scope projects, and provide services you
                request. We do not sell personal data.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Third-party services</h3>
              <p>
                Our contact form may be processed by third-party form providers. Data is transmitted securely and used only
                for communication purposes.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <p>
                For privacy questions, email{" "}
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

export default Privacy;
