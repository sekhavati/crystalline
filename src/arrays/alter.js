const R = require("ramda");

const alter = (arr) => ({
  byApplyingFn: (predicate) => ({
    atIndex: (index) => R.adjust(index, predicate, arr),
  }),
  byInsertingBetweenEachItem: (value) => R.intersperse(value, arr),
  byMovingItemAtIndex: (fromIndex) => ({
    toIndex: (toIndex) => R.move(fromIndex, toIndex, arr),
  }),
  byRemovingItemsBetweenIndex: (fromIndex) => ({
    andIndex: (toIndex) => R.remove(fromIndex, toIndex, arr),
  }),
  byRemovingDuplicates: () => R.uniq(arr),
  byRemovingItems: (itemsToRemove) => R.without(itemsToRemove, arr),

  // @todo: introduce byTrimmingLengthTo
});

module.exports = { alter };
