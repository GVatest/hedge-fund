export const rotate = (deg: number) => {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { margin: "50px" },
    variants: {
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" },
      },
      hidden: { opacity: 0, rotate: deg },
    },
  };
};

export const fade = {
  initial: "hidden",
  whileInView: "visible",
  variants: {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  },
};

export const fadeSkew = (skewFactor: number) => ({
  initial: "hidden",
  whileInView: "visible",
  variants: {
    visible: {
      skew: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
    hidden: { skew: skewFactor, opacity: 0 },
  },
});
