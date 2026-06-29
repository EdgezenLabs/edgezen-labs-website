import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedStat from "@/components/motion/AnimatedStat";
import StaggerReveal from "@/components/motion/StaggerReveal";
import BrowserChrome from "@/components/marketing/BrowserChrome";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import { caseStudy } from "@/content/home";
import Reveal from "@/components/marketing/Reveal";

const caseStudyFeatures = [
  "GPS attendance & field reporting",
  "Offline-first mobile workflows",
  "12-module ERP platform",
] as const;

const CaseStudyPreview = () => (
  <section className="section-y relative overflow-hidden bg-secondary/30">
    <div className="absolute inset-0 mesh-grid opacity-20" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-wide items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${caseStudy.accent} blur-2xl`} />
            <BrowserChrome url="briktra.com" className="relative shadow-token-lg">
              <img
                src={caseStudy.image}
                alt="Briktra mobile app interface"
                className="w-full rounded-b-2xl object-cover"
                loading="lazy"
              />
            </BrowserChrome>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="right">
          <p className="eyebrow mb-4">{caseStudy.eyebrow}</p>
          <h2 className="text-h2 font-bold tracking-tight">{caseStudy.title}</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">{caseStudy.description}</p>

          <StaggerReveal className="mt-8 grid grid-cols-3 gap-3" stagger={0.08}>
            {caseStudy.metrics.map((metric) => (
              <StaggerReveal.Item key={metric.label}>
                <div className="rounded-xl border border-border/70 bg-background p-4 text-center">
                  <p className="text-xl font-bold">
                    <AnimatedStat value={metric.value} />
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              </StaggerReveal.Item>
            ))}
          </StaggerReveal>

          <StaggerReveal className="mt-8 space-y-3" stagger={0.06}>
            {caseStudyFeatures.map((item) => (
              <StaggerReveal.Item key={item}>
                <FeatureListItem icon={BadgeCheck} className="border-none bg-transparent p-0">
                  {item}
                </FeatureListItem>
              </StaggerReveal.Item>
            ))}
          </StaggerReveal>

          <Link to={caseStudy.href} className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              {caseStudy.cta}
              <ArrowRight className="ml-2" size={16} aria-hidden />
            </Button>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CaseStudyPreview;
