import { Variants } from 'framer-motion'

// Advanced animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    }
  }
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      duration: 0.6
    }
  }
}

export const slideInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
}

export const hoverLift = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
}

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1
  }
}

// Page transition variants
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4
    }
  }
}

// Text animation variants
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    skewY: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const letterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}
