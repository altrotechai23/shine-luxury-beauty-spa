export const springLuxury = {
  type: "spring",
  stiffness: 170,
  damping: 24,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: springLuxury,
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const mobileOverlay = {
  closed: {
    opacity: 0,
    clipPath: "circle(0% at 94% 40px)",
    transition: {
      duration: .45,
    },
  },

  open: {
    opacity: 1,
    clipPath: "circle(160% at 94% 40px)",

    transition: {
      duration: .7,
      ease: [0.22,1,0.36,1],
    },
  },
};

export const navBarVariants = {
  top: {
    y: 0,
    scale: 1,
  },

  scrolled: {
    y: 10,
    scale: .96,
  },
};