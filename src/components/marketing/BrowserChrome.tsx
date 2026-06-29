import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserChromeProps {
  url?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

const BrowserChrome = ({ url, children, className, contentClassName }: BrowserChromeProps) => (
  <div className={cn("overflow-hidden rounded-2xl border border-border/70 bg-card shadow-token-sm", className)}>
    <div className="flex items-center gap-2 border-b border-border/70 bg-card px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" aria-hidden />
      {url && (
        <span className="ml-2 truncate rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{url}</span>
      )}
    </div>
    <div className={cn("bg-background", contentClassName)}>{children}</div>
  </div>
);

export default BrowserChrome;
