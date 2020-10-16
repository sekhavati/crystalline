const R = require("ramda");

// @todo: add multi-transformation function, eg: tranform(obj).byTransforming(keys).with(transformers)
// @todo: support key supplied via dot notation, eg: key = a.b.c
const alter = (obj) => ({
  byApplying: (transformer) => ({
    toKey: (key) => R.evolve({ [key]: transformer }, obj),
  }),
});

module.exports = { alter };
