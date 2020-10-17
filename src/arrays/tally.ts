import countBy from "ramda/src/countBy";

const tally = <T>(arr: T[]) => ({
  by: (predicate: (a: T) => any) => countBy(predicate)(arr),
});

export { tally };
