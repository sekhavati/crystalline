import difference from "ramda/src/difference";
import intersection from "ramda/src/intersection";
import symmetricDifference from "ramda/src/symmetricDifference";

const findItemsIn = (arr1: any[]) => ({
  notContainedIn: (arr2: any[]) => difference(arr1, arr2),
  containedIn: (arr2: any[]) => intersection(arr1, arr2),
  and: (arr2: any[]) => ({
    thatAreUnique: () => symmetricDifference(arr1, arr2),
  }),
});

export { findItemsIn };
