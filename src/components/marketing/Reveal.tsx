import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { REVEAL_TRANSITION } from "@/lib/motion";

type RevealDirection = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  direction?: RevealDirection;
}

const directionOffset = (direction: RevealDirection, y: number) => {
  switch (direction) {
    case "left":
      return { x: -24, y: 0 };
    case "right":
      return { x: 24, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    default:
      return { x: 0, y };
  }
};

const Reveal = ({ children, className = "", delay = 0, y = 24, direction = "up" }: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset(direction, y);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...REVEAL_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
