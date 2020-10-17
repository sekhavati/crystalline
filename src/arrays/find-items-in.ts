import difference from "ramda/src/difference";
import intersection from "ramda/src/intersection";
import symmetricDifference from "ramda/src/symmetricDifference";

const findItemsIn = (arr1) => ({
  notContainedIn: (arr2) => difference(arr1, arr2),
  containedIn: (arr2) => intersection(arr1, arr2),
  and: (arr2) => ({
    thatAreUnique: () => symmetricDifference(arr1, arr2),
  }),
});

export { findItemsIn };
