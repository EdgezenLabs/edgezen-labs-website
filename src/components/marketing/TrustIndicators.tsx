import { CheckCircle2, Shield, Zap } from "lucide-react";
import { trustPillars, trustStats } from "@/content/home";
import Reveal from "@/components/marketing/Reveal";

const icons = [Zap, Shield, CheckCircle2];

const TrustIndicators = () => (
  <section className="section-y border-b border-border/50 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-wide gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Why EdgeZen</p>
          <h2 className="text-h2 font-bold tracking-tight">Built for teams who need software that survives real operations.</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            From loan workflows to construction sites, we design products around the people who use them every day —
            not slide decks.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {trustStats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-token-sm transition-default hover:border-accent/30 hover:shadow-token-md">
                  <Icon className="mb-3 text-accent" size={22} aria-hidden />
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustPillars.map((pillar, index) => (
          <Reveal key={pillar} delay={index * 0.06}>
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/30 px-4 py-3">
              <CheckCircle2 size={18} className="shrink-0 text-accent" aria-hidden />
              <span className="text-sm font-medium">{pillar}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
