/** Shared framer-motion tokens for EdgeZen Labs */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const REVEAL_TRANSITION = {
  duration: 0.5,
  ease: EASE_OUT,
} as const;

export const PAGE_TRANSITION = {
  duration: 0.35,
  ease: EASE_OUT,
} as const;

export const STAGGER_FAST = 0.05;
export const STAGGER_DEFAULT = 0.08;

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = (stagger = STAGGER_DEFAULT) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.04,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: REVEAL_TRANSITION,
  },
};

export const pageEnterVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};
