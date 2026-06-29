import { cn } from "@/lib/utils";

interface ProductLogoProps {
  src: string;
  alt: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: { box: "h-14 w-16", img: "max-h-10" },
  md: { box: "h-24 w-32", img: "max-h-14" },
  lg: { box: "min-h-[280px]", img: "max-h-56" },
} as const;

const ProductLogo = ({ src, alt, name, size = "md", className }: ProductLogoProps) => {
  const isBriktra = name === "Briktra";
  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/60 to-secondary/30 ring-1 ring-border/50",
        !isBriktra && "rounded-2xl",
        size === "lg" ? "p-8" : "p-4",
        sizes.box,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-auto object-contain opacity-85 drop-shadow-lg",
          !isBriktra && "rounded-lg",
          sizes.img,
        )}
      />
    </div>
  );
};

export default ProductLogo;
