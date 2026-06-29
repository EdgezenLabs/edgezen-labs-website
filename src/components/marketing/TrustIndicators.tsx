import { Zap, Shield, CheckCircle2 } from "lucide-react";
import { trustPillars, trustStats } from "@/content/home";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import Reveal from "@/components/marketing/Reveal";
import StatCard from "@/components/marketing/StatCard";

const statIcons = [Zap, Shield, CheckCircle2];

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
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatCard value={stat.value} label={stat.label} icon={statIcons[index % statIcons.length]} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustPillars.map((pillar, index) => (
          <Reveal key={pillar} delay={index * 0.06}>
            <FeatureListItem className="bg-secondary/30 px-4 py-3">{pillar}</FeatureListItem>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
