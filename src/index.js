const R = require("ramda");

const adjust = (collection) => ({
  byApplying: (predicate) => ({
    atIndex: (index) => R.adjust(index, predicate, collection),
  }),
});

const split = (collection) => ({
  atIndex: (index) => R.splitAt(index, collection),
  everyNthIndex: (index) => R.splitEvery(index, collection),
  by: (separator) => R.split(separator, collection),
});

// @todo: consider moving this into 'split.intoChunksOf'
const chunk = (collection) => ({
  intoGroupsOf: (groupSize) => R.aperture(groupSize, collection),
});

const append = (item) => ({
  to: (collection) => R.append(item, collection),
});

const sort = (collection) => ({
  ascendinglyBy: (prop) => R.sort(R.ascend(R.prop(prop)), collection),
  descendinglyBy: (prop) => R.sort(R.descend(R.prop(prop)), collection),
});

const within = (obj) => ({
  set: (key) => ({ to: (value) => R.assoc(key, value, obj) }),
  setPath: (key) => ({
    to: (value) => R.assocPath(key.split("."), value, obj),
  }),
});

const rpp = {
  adjust,
  split,
  chunk,
  append,
  sort,
  within,
};

module.exports = rpp;
