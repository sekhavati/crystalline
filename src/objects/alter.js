const R = require("ramda");

// @todo: add multi-transformation function, eg: tranform(obj).byTransforming(keys).with(transformers)
const alter = (obj) => ({
  byApplying: (transformer) => ({
    to: (key) => R.evolve({ [key]: transformer }, obj),
  }),
});

module.exports = { alter };
