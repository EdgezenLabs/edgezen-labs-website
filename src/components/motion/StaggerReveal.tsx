import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { REVEAL_TRANSITION, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "section";
}

/**
 * Staggers direct motion children on scroll into view.
 * Wrap each child in StaggerReveal.Item.
 */
const StaggerRevealRoot = ({ children, className, stagger, as = "div" }: StaggerRevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = as;

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(stagger)}
      >
        {children}
      </motion.div>
    </Component>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const StaggerRevealItem = ({ children, className }: StaggerItemProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItem} transition={REVEAL_TRANSITION}>
      {children}
    </motion.div>
  );
};

const StaggerReveal = Object.assign(StaggerRevealRoot, { Item: StaggerRevealItem });

export default StaggerReveal;
