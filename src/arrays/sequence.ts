import unfold from "ramda/src/unfold";

// seedValue: 10;
// sequenceTerminator: (n) => n < 50;
// sequenceRule: (n) => n + 10;
// sequenceTermMapFn: n => n (by default) ???
// @todo: potentially introduce sequenceTermMapFn param, ie: [n, ...] becomes [mapFn(n), ...]
const sequence = (sequenceRule) => ({
  startingWith: (seed) => ({
    untilCondition: (sequenceTerminator) => {
      const f = (n) => (sequenceTerminator(n) ? false : [n, sequenceRule(n)]);
      return unfold(f, seed);
    },
    // untilLength: (length) => null, // @todo: create a sequence with max length entries
  }),
});

export { sequence };
