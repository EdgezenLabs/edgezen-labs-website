import { ArrowRight, BadgeCheck, ExternalLink, Globe2, LayoutTemplate, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const websites = [
  {
    name: "VS Corporate Lending",
    url: "https://vscorporatelending.com/",
    industry: "Finance & Lending",
    summary: "A conversion-focused business lending website with loan services, eligibility guidance, document checklist, and direct inquiry flows.",
    highlights: ["Loan service portfolio", "Eligibility-led UX", "Fast contact actions"],
    accent: "from-emerald-500/20 to-blue-500/20",
  },
  {
    name: "Eladent Consulting",
    url: "https://eladentconsulting.com/",
    industry: "Dental Billing & RCM",
    summary: "A professional consulting presence for dental revenue cycle services, built to communicate expertise and create a clean first impression.",
    highlights: ["Healthcare positioning", "Lead-ready structure", "Trust-focused design"],
    accent: "from-cyan-500/20 to-violet-500/20",
  },
  {
    name: "Gabriel JM Events",
    url: "https://gabrieljmevents.com/",
    industry: "Event Management",
    summary: "A vibrant event management website designed to showcase services, capture inquiries, and present a premium local events brand.",
    highlights: ["Service showcase", "Mobile-first layout", "Inquiry-focused flow"],
    accent: "from-rose-500/20 to-amber-500/20",
  },
];

const Websites = () => {
  return (
    <PageLayout showBreadcrumbs>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
              <Globe2 size={16} className="text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Websites Designed by EdgeZen Labs</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Client websites built to look sharp and convert clearly.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A dedicated showcase for business websites designed and developed by EdgeZen Labs, separate from our product portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {websites.map((site, index) => (
              <article
                key={site.name}
                className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[340px] overflow-hidden bg-secondary/40 p-4 md:p-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${site.accent}`} />
                    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background shadow-2xl">
                      <div className="flex items-center gap-2 border-b border-border/70 bg-card px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                        <span className="ml-3 truncate rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                          {site.url.replace("https://", "")}
                        </span>
                      </div>
                      <div className="relative h-[300px] bg-background md:h-[390px]">
                        <iframe
                          src={site.url}
                          title={`${site.name} website preview`}
                          loading="lazy"
                          className="h-[780px] w-[200%] origin-top-left scale-50 border-0"
                          sandbox="allow-same-origin allow-scripts"
                        />
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0"
                          aria-label={`Visit ${site.name}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-10 p-7 md:p-10">
                    <div>
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {site.industry}
                        </span>
                        <span className="text-sm text-muted-foreground">Project 0{index + 1}</span>
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{site.name}</h2>
                      <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{site.summary}</p>

                      <div className="mt-8 grid gap-3">
                        {site.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-4">
                            <BadgeCheck size={18} className="text-accent" />
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        <Button className="h-12 rounded-xl bg-foreground px-6 text-background">
                          Visit Website
                          <ExternalLink className="ml-2" size={16} />
                        </Button>
                      </a>
                      <div className="flex items-center gap-3 rounded-xl border border-border/70 px-4 py-3 text-sm text-muted-foreground">
                        <MonitorSmartphone size={17} className="text-accent" />
                        Responsive Web Experience
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <LayoutTemplate size={34} />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Need a professional business website?</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  We design websites that make the offer clear, guide visitors toward action, and feel credible on every screen size.
                </p>
                <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                  Start a website project
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Websites;

