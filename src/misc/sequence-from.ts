import unfold from "ramda/src/unfold";

const sequenceFrom = <T>(rule: (a: T) => any) => ({
  startingWith: (seed: T) => ({
    untilCondition: (terminator: (a: T) => boolean) => {
      const f = (n: T) => (terminator(n) ? false : [n, rule(n)]);
      // @ts-ignore
      return unfold(f, seed);
    },
  }),
});

export { sequenceFrom };
