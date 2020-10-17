import rClamp from "ramda/src/clamp";

const clamp = (num: number) => ({
  between: (min: number) => ({
    and: (max: number) => rClamp(min, max, num),
  }),
});

export { clamp };
