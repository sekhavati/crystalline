import splitAt from "ramda/src/splitAt";
import splitWhen from "ramda/src/splitWhen";
import splitEvery from "ramda/src/splitEvery";
import partition from "ramda/src/partition";

const split = <T>(arr: T[]) => ({
  atIndex: (index: number) => splitAt(index, arr),
  everyNthIndex: (n: number) => splitEvery(n, arr),
  atFirstEncounterOf: (predicate: (a: T) => boolean) =>
    splitWhen(predicate, arr),
  byItemsSatisfying: (predicate: (a: T) => boolean) =>
    partition(predicate, arr),
});

export { split };
