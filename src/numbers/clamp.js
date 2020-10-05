const R = require("ramda");

const clamp = (num) => ({
  between: (min) => ({
    and: (max) => R.clamp(num, min, max),
  }),
});

module.exports = { clamp };
