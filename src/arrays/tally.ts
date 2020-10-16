const R = require("ramda");

const tally = (arr) => ({
  by: (predicate) => R.countBy(predicate)(arr),
});

module.exports = { tally };
