import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { PAGE_TRANSITION, pageEnterVariants } from "@/lib/motion";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/** Subtle enter animation keyed to route changes. */
const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={location.pathname}
      className={className}
      initial={pageEnterVariants.initial}
      animate={pageEnterVariants.animate}
      transition={PAGE_TRANSITION}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
