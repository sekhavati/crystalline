import splitAt from "ramda/src/splitAt";
import splitWhen from "ramda/src/splitWhen";
import splitEvery from "ramda/src/splitEvery";
import partition from "ramda/src/partition";

const split = (arr) => ({
  atIndex: (index) => splitAt(index, arr),
  atFirstEncounterOf: (predicate) => splitWhen(predicate, arr),
  everyNthIndex: (index) => splitEvery(index, arr),
  byItemsMatching: (predicate) => partition(predicate, arr),

  // @todo: move into string util function
  // bySeparator: (separator) => split(separator, arr),

  // @todo: should we include the function below? could cause confusion with everyNthIndex, better name or leave out? consecutive?
  // intoGroupsOfSize: (groupSize) => aperture(groupSize, arr),
});

export { split };
