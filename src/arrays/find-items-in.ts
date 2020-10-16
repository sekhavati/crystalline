const R = require("ramda");

// @todo: find syntax whereby differenceWith and symetricDifference can be included fluently
// @todo: R.union() is similar. could this be changed to combine(col1).with(col2).uniquely()?
const findItemsIn = (arr1) => ({
  notContainedIn: (arr2) => R.difference(arr1, arr2),
  containedIn: (arr2) => R.intersection(arr1, arr2),
  and: (arr2) => ({
    thatAreUnique: () => R.symmetricDifference(arr1, arr2),
  }),
});

module.exports = { findItemsIn };
