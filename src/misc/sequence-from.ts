import unfold from "ramda/src/unfold";

const sequenceFrom = <T>(rule: (a: T) => any) => ({
  startingWith: (seed: T) => ({
    untilCondition: (terminator: (a: T) => boolean) => {
      const f = (n: T): false | [T, T] =>
        terminator(n) ? false : [n, rule(n)];

      return unfold(f, seed);
    },
  }),
});

export { sequenceFrom };
