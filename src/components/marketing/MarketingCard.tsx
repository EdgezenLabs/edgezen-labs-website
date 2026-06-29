import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const marketingCardVariants = cva("rounded-2xl border border-border/70 bg-card shadow-token-sm transition-default", {
  variants: {
    padding: {
      none: "",
      sm: "p-5",
      md: "p-6",
      lg: "p-7",
    },
    interactive: {
      true: "hover:-translate-y-1 hover:border-accent/30 hover:shadow-token-lg",
      false: "",
    },
    accent: {
      none: "",
      top: "relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-gradient-purple before:via-gradient-pink before:to-gradient-blue before:opacity-70",
    },
  },
  defaultVariants: {
    padding: "md",
    interactive: false,
    accent: "none",
  },
});

export interface MarketingCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marketingCardVariants> {
  as?: "div" | "article";
  children: ReactNode;
}

const MarketingCard = ({
  className,
  padding,
  interactive,
  accent,
  as: Component = "div",
  children,
  ...props
}: MarketingCardProps) => (
  <Component className={cn(marketingCardVariants({ padding, interactive, accent }), className)} {...props}>
    {children}
  </Component>
);

export default MarketingCard;
export { marketingCardVariants };
