const R = require("ramda");

const split = (arr) => ({
  atIndex: (index) => R.splitAt(index, arr),
  atFirstEncounterOf: (predicate) => R.splitWhen(predicate, arr),
  everyNthIndex: (index) => R.splitEvery(index, arr),
  byItemsMatching: (predicate) => R.partition(predicate, arr),

  // @todo: move into string util function
  // bySeparator: (separator) => R.split(separator, arr),

  // @todo: should we include the function below? could cause confusion with everyNthIndex, better name or leave out? consecutive?
  // intoGroupsOfSize: (groupSize) => R.aperture(groupSize, arr),
});

module.exports = { split };
