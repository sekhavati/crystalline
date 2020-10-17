import rClamp from "ramda/src/clamp";

const clamp = (num) => ({
  between: (min) => ({
    and: (max) => rClamp(min, max, num),
  }),
});

export { clamp };
