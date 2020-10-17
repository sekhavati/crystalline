import unfold from "ramda/src/unfold";

const sequenceFrom = (rule) => ({
  startingWith: (seed) => ({
    untilCondition: (terminator) => {
      const f = (n) => (terminator(n) ? false : [n, rule(n)]);
      return unfold(f, seed);
    },
  }),
});

export { sequenceFrom };
