import rClamp from "ramda/src/clamp";

const clamp = (num: number) => ({
  between: (min: number, max: number) => rClamp(min, max, num),
});

export { clamp };
