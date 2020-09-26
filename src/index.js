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

const concat = (a) => ({
  with: (b) => R.concat(a, b),
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

const clamp = (number) => ({
  between: (min) => ({
    and: (max) => R.clamp(number, min, max),
  }),
});

const deepCopy = (object) => R.clone(object);

// @todo: utilise R.pipe() and R.compose()
const sequence = () => null;
const reverseSequence = () => null;

const tally = (collection) => ({
  by: (predicate) => R.countBy(predicate)(collection),
});

// @todo: find syntax whereby differenceWith and symetricDifference can be included fluently
const findItemsIn = (collection1) => ({
  notContainedIn: (collection2) => R.difference(collection1, collection2),
  and: (collection2) => ({
    thatAreUnique: () => R.symmetricDifference(collection1, collection2),
  }),
});

const rpp = {
  adjust,
  split,
  chunk,
  append,
  sort,
  within,
  clamp,
  deepCopy,
  concat,
  tally,
  findItemsIn,
};

module.exports = rpp;
