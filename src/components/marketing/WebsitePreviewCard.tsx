import { ExternalLink } from "lucide-react";
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
      className="relative block overflow-hidden border-b border-border/70"
      aria-label={`Visit ${site.name} website`}
    >
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${site.previewGradient} p-8 md:h-56`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative w-full max-w-[280px] rounded-xl border border-white/20 bg-background/90 p-4 shadow-token-lg backdrop-blur">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-yellow-400" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
          </div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{site.url}</p>
          <p className="mt-2 text-sm font-semibold leading-snug text-foreground">{site.headline}</p>
        </div>
        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground opacity-0 shadow-token-sm transition-default group-hover:opacity-100">
          <ExternalLink size={16} aria-hidden />
        </div>
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
