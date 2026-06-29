import OptimizedImage from "@/components/OptimizedImage";
import { webpSource } from "@/lib/images";
import { cn } from "@/lib/utils";

interface WebsiteBrowserPreviewProps {
  url: string;
  screenshot: string;
  alt: string;
  className?: string;
  viewportClassName?: string;
}

const WebsiteBrowserPreview = ({
  url,
  screenshot,
  alt,
  className,
  viewportClassName,
}: WebsiteBrowserPreviewProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border border-border/70 bg-background shadow-token-xl",
      className,
    )}
  >
    <div className="flex items-center gap-2 border-b border-border/70 bg-card px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden />
      <span className="ml-2 truncate rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
        {url}
      </span>
    </div>
    <div className={cn("relative overflow-hidden bg-background", viewportClassName ?? "aspect-[16/10]")}>
      <OptimizedImage
        src={screenshot}
        webpSrc={webpSource(screenshot)}
        alt={alt}
        width={1440}
        height={810}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>
);

export default WebsiteBrowserPreview;
