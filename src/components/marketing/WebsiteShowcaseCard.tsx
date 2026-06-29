import { ExternalLink, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureListItem from "@/components/marketing/FeatureListItem";
import MarketingCard from "@/components/marketing/MarketingCard";
import Reveal from "@/components/marketing/Reveal";
import { Badge } from "@/components/ui/badge";import type { websiteShowcases } from "@/content/websites";

type Website = (typeof websiteShowcases)[number];

interface WebsiteShowcaseCardProps {
  site: Website;
  index: number;
}

const WebsiteShowcaseCard = ({ site, index }: WebsiteShowcaseCardProps) => (
  <Reveal delay={index * 0.08}>
    <MarketingCard as="article" padding="none" interactive className="group overflow-hidden rounded-3xl">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <a
          href={site.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block min-h-[280px] overflow-hidden border-b border-border/70 lg:min-h-[360px] lg:border-b-0 lg:border-r"
          aria-label={`Visit ${site.name}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${site.previewGradient}`} />
          <div className="relative flex h-full items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md rounded-2xl border border-white/20 bg-background/95 p-5 shadow-token-xl backdrop-blur">
              <div className="mb-3 flex items-center gap-2" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-2 truncate text-xs text-muted-foreground">{site.url}</span>
              </div>
              <p className="text-lg font-semibold leading-snug">{site.headline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{site.industry}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-token-sm transition-default group-hover:opacity-100">
            <ExternalLink size={16} aria-hidden />
          </div>
        </a>

        <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
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
