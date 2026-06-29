import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const NUMERIC_PATTERN = /^(\d+)(.*)$/;

interface AnimatedStatProps {
  value: string;
  className?: string;
}

/**
 * Counts up numeric stat values (e.g. "6+", "12") when scrolled into view.
 * Non-numeric values render statically.
 */
const AnimatedStat = ({ value, className }: AnimatedStatProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numeric = value.match(NUMERIC_PATTERN);
    if (!numeric || prefersReducedMotion || !isInView) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numeric[1], 10);
    const suffix = numeric[2];

    const controls = animate(0, target, {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
};

export default AnimatedStat;
