import { ExternalLink, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import MarketingCard from "@/components/marketing/MarketingCard";
import Reveal from "@/components/marketing/Reveal";
import WebsiteBrowserPreview from "@/components/marketing/WebsiteBrowserPreview";
import { Badge } from "@/components/ui/badge";
import type { websiteShowcases } from "@/content/websites";

type Website = (typeof websiteShowcases)[number];

interface WebsiteShowcaseCardProps {
  site: Website;
  index: number;
}

const WebsiteShowcaseCard = ({ site, index }: WebsiteShowcaseCardProps) => (
  <Reveal delay={index * 0.08} direction="none" className="overflow-hidden">
    <MarketingCard
      as="article"
      padding="none"
      interactive={false}
      className="group relative isolate overflow-hidden rounded-3xl"
    >
      <div className="grid min-w-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-w-0 overflow-hidden border-b border-border/70 lg:border-b-0 lg:border-r">
          <a
            href={site.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden p-4 md:p-6"
            aria-label={`Visit ${site.name}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${site.previewGradient} opacity-40`}
              aria-hidden
            />
            <WebsiteBrowserPreview
              url={site.url}
              screenshot={site.screenshot}
              alt={`${site.name} website preview`}
              className="relative z-[1] w-full max-w-full"
            />
            <div className="absolute bottom-4 right-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-token-sm transition-default group-hover:opacity-100">
              <ExternalLink size={16} aria-hidden />
            </div>
          </a>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-8 p-7 md:p-10">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
                {site.industry}
              </Badge>
              <span className="text-xs text-muted-foreground">Project 0{index + 1}</span>
            </div>
            <h2 className="text-h3 font-bold tracking-tight">{site.name}</h2>
            <p className="mt-4 text-body-lg text-muted-foreground">{site.summary}</p>
            <div className="mt-6 grid gap-2">
              {site.highlights.map((item) => (
                <FeatureListItem key={item}>{item}</FeatureListItem>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.href} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Visit Website
                <ExternalLink className="ml-2" size={16} aria-hidden />
              </Button>
            </a>
            <div className="flex items-center gap-2 rounded-xl border border-border/70 px-4 py-3 text-sm text-muted-foreground">
              <MonitorSmartphone size={16} className="text-accent" aria-hidden />
              Responsive
            </div>
          </div>
        </div>
      </div>
    </MarketingCard>
  </Reveal>
);

export default WebsiteShowcaseCard;
