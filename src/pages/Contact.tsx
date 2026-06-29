import { CheckCircle2, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/marketing/ContactForm";
import MarketingCard from "@/components/marketing/MarketingCard";
import Reveal from "@/components/marketing/Reveal";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@edgezenlabs.com",
    href: "mailto:contact@edgezenlabs.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 91767 38389 | +91 86808 90318",
    href: "tel:+919176738389",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global — Remote First",
  },
] as const;

const nextSteps = [
  "We review your idea and goals.",
  "We suggest the right scope and stack.",
  "We plan the first practical version.",
] as const;

const Contact = () => (
  <PageLayout showBreadcrumbs>
    <SEO
      title="Contact"
      description="Start a conversation with EdgeZen Labs — share your product idea, business website, app, or platform requirement."
      canonical="https://edgezenlabs.com/contact"
    />

    <PageHero
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Sparkles size={16} aria-hidden />
          Start the conversation
        </span>
      }
      title={
        <>
          Tell us what you want to <span className="gradient-text">build next</span>.
        </>
      }
      description="Share your product idea, business website, app, or platform requirement. We will help shape it into a clear build plan."
      align="center"
    />

    <section className="pb-section-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-wide gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Reveal>
              <MarketingCard padding="lg">
                <h2 className="mb-4 text-h3 font-bold tracking-tight">Let's Talk</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Whether you need a mobile app, business website, web platform, cloud solution, or game, we can help
                  turn the idea into a product people can actually use.
                </p>
              </MarketingCard>
            </Reveal>

            {contactItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <MarketingCard padding="sm" className="flex items-start gap-4 transition-default hover:border-accent/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={22} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm text-muted-foreground transition-default hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </MarketingCard>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-foreground p-7 text-background shadow-token-lg">
                <div className="mb-5 flex items-center gap-3">
                  <Clock size={22} aria-hidden />
                  <h3 className="text-xl font-semibold">What happens next?</h3>
                </div>
                <div className="space-y-4 text-sm text-background/75">
                  {nextSteps.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-background" aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <MarketingCard padding="lg" className="relative shadow-token-lg md:p-9">
                <div className="mb-8">
                  <p className="eyebrow mb-3">Project Inquiry</p>
                  <h3 className="text-h3 font-bold tracking-tight">Start Your Project</h3>
                </div>
                <ContactForm />
              </MarketingCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contact;
