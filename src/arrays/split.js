const R = require("ramda");

const split = (arr) => ({
  atIndex: (index) => R.splitAt(index, arr),
  atFirstEncounterOf: (predicate) => R.splitWhen(predicate),
  everyNthIndex: (index) => R.splitEvery(index, arr),
  bySeparator: (separator) => R.split(separator, arr),
  byItemsMatching: (predicate) => R.partition(predicate, arr),

  // @todo: should we include the function below? could cause confusion with everyNthIndex, better name or leave out? consecutive?
  // intoGroupsOfSize: (groupSize) => R.aperture(groupSize, arr),
});

module.exports = { split };
