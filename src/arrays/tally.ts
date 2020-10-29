import countBy from "ramda/src/countBy";

const tally = <T>(arr: T[]) => ({
  by: (fn: (a: T) => any) => countBy(fn)(arr),
});

export { tally };
