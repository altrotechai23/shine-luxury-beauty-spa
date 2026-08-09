import type { Variants, Transition } from "framer-motion";

export const luxurySpring: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.9,
};

export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const slowSpring: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 20,
};

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: luxurySpring,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: luxurySpring,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: luxurySpring,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: luxurySpring,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: luxurySpring,
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
    filter: "blur(12px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const drawerReveal: Variants = {
  closed: {
    opacity: 0,
    clipPath: "circle(0% at calc(100% - 36px) 36px)",
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 1, 1],
    },
  },

  open: {
    opacity: 1,
    clipPath: "circle(160% at calc(100% - 36px) 36px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const navbarReveal: Variants = {
  top: {
    y: 0,
    scale: 1,
    borderRadius: 0,
  },

  scrolled: {
    y: 10,
    scale: 0.97,
    borderRadius: 999,
    transition: smoothSpring,
  },
};

export const floating: Variants = {
  rest: {
    y: 0,
  },

  hover: {
    y: -6,
    transition: luxurySpring,
  },
};

export const magnetic: Variants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.04,
    transition: luxurySpring,
  },

  tap: {
    scale: 0.96,
  },
};