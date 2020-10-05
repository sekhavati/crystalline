const R = require("ramda");

const copy = (obj) => ({
  deeply: () => R.clone(obj),
  discardKey: (key) => R.omit([key], obj),
  discardKeys: (keys) => R.omit(keys, obj),
  keepKey: (key, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll([key], obj) : R.pick([key], obj),
  keepKeys: (keys, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll(keys, obj) : R.pick(keys, obj),
});

module.exports = { copy };
