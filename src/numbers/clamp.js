const R = require("ramda");

const clamp = (num) => ({
  between: (min) => ({
    and: (max) => R.clamp(min, max, num),
  }),
});

module.exports = { clamp };
