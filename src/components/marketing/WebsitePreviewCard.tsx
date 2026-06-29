import { ExternalLink } from "lucide-react";
import WebsiteBrowserPreview from "@/components/marketing/WebsiteBrowserPreview";
import type { homeWebsites } from "@/content/websites";

type Website = (typeof homeWebsites)[number];

interface WebsitePreviewCardProps {
  site: Website;
  index: number;
}

const WebsitePreviewCard = ({ site, index }: WebsitePreviewCardProps) => (
  <article className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-token-sm transition-default hover:border-accent/30 hover:shadow-token-lg">
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block min-w-0 overflow-hidden border-b border-border/70 p-4"
      aria-label={`Visit ${site.name} website`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${site.previewGradient} opacity-30`}
        aria-hidden
      />
      <WebsiteBrowserPreview
        url={site.url}
        screenshot={site.screenshot}
        alt={`${site.name} website preview`}
        className="relative z-[1] w-full max-w-full shadow-token-lg"
      />
      <div className="absolute bottom-4 right-4 z-[2] flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground opacity-0 shadow-token-sm transition-default group-hover:opacity-100">
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
