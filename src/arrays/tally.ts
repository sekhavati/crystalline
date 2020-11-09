import countBy from "ramda/src/countBy";

const tally = <T>(arr: T[]) => ({
  byApplying: (fn: (a: T) => any) => countBy(fn)(arr),
});

export { tally };
