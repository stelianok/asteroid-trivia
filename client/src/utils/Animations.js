const Animations = {
  fadeRightIn: {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  fadeLeftIn: {
    initial: {
      opacity: 0,
      x: "-100%",
    },

    animate: {
      opacity: 1,
      x: 0,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  scaleIn: {
    initial: {
      scale: 0.3,
      opacity: 0,
    },

    animate: {
      scale: 1,
      opacity: 1,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  scaleOut: {
    initial: {
      scale: 1,
      opacity: 1,
    },

    animate: {
      scale: 0,
      opacity: 0,
    },
  },
};

const HeaderAnimationConfig = {
  planet: {
    drag: true,
    whileDrag: { scale: 1.5 },
    dragConstraints: { top: 10, bottom: 200, left: 0, right: 600 },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 60,
    },
    animate: {
      rotate: [0, 360],
    },
  },
  anotherPlanet: {
    drag: true,
    whileDrag: { scale: 1.5 },
    dragConstraints: { top: 10, bottom: 200, left: 0, right: 600 },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: Math.random() * 60 + 20,
    },
    animate: {
      x: [0, -360],
      rotate: [0, 360],
      y: [-360, 0],
      scale: [1, 1.5],
    },
  },
  asteroid: {
    drag: true,
    whileDrag: { scale: 1.5 },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: Math.random() * 60 + 20,
    },
    animate: {
      x: [0, -360],
      y: [-360, 0],
    },
  },
};

export { Animations, HeaderAnimationConfig };
