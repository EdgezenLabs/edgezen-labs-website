import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  webpSrc?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  decoding?: "async" | "sync" | "auto";
}

/** Image with optional WebP source, lazy loading, and explicit dimensions for CLS. */
const OptimizedImage = ({
  src,
  alt,
  webpSrc,
  width,
  height,
  loading = "lazy",
  fetchPriority,
  className,
  decoding = "async",
}: OptimizedImageProps) => {
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={cn(className)}
    />
  );

  if (!webpSrc) {
    return img;
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      {img}
    </picture>
  );
};

export default OptimizedImage;
