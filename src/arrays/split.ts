import splitAt from "ramda/src/splitAt";
import splitWhen from "ramda/src/splitWhen";
import splitEvery from "ramda/src/splitEvery";
import partition from "ramda/src/partition";

const split = (arr) => ({
  atIndex: (index) => splitAt(index, arr),
  atFirstEncounterOf: (predicate) => splitWhen(predicate, arr),
  everyNthIndex: (count) => splitEvery(count, arr),
  byItemsMatching: (predicate) => partition(predicate, arr),
});

export { split };
