import { ExternalLink } from "lucide-react";
import WebsiteBrowserPreview from "@/components/marketing/WebsiteBrowserPreview";
import type { homeWebsites } from "@/content/websites";

type Website = (typeof homeWebsites)[number];

interface WebsitePreviewCardProps {
  site: Website;
  index: number;
}

const WebsitePreviewCard = ({ site, index }: WebsitePreviewCardProps) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-token-sm transition-default hover:-translate-y-1 hover:border-accent/30 hover:shadow-token-lg">
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden border-b border-border/70 p-4"
      aria-label={`Visit ${site.name} website`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${site.previewGradient} opacity-30`} aria-hidden />
      <WebsiteBrowserPreview
        url={site.url}
        screenshot={site.screenshot}
        alt={`${site.name} website preview`}
        className="relative shadow-token-lg"
        viewportClassName="h-40 sm:h-44 md:h-48"
      />
      <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground opacity-0 shadow-token-sm transition-default group-hover:opacity-100">
        <ExternalLink size={16} aria-hidden />
      </div>
    </a>

    <div className="flex flex-1 flex-col gap-4 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
          {site.industry}
        </span>
        <span className="text-xs text-muted-foreground">Project 0{index + 1}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{site.name}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{site.description}</p>
      <p className="text-xs font-medium text-muted-foreground">{site.url}</p>
    </div>
  </article>
);

export default WebsitePreviewCard;
