import countBy from "ramda/src/countBy";

const tally = (arr) => ({
  by: (predicate) => countBy(predicate)(arr),
});

export { tally };
