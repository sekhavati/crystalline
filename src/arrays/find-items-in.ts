import difference from "ramda/src/difference";
import intersection from "ramda/src/intersection";
import symmetricDifference from "ramda/src/symmetricDifference";

// @todo: find syntax whereby differenceWith and symetricDifference can be included fluently
// @todo: R.union() is similar. could this be changed to combine(col1).with(col2).uniquely()?
const findItemsIn = (arr1) => ({
  notContainedIn: (arr2) => difference(arr1, arr2),
  containedIn: (arr2) => intersection(arr1, arr2),
  and: (arr2) => ({
    thatAreUnique: () => symmetricDifference(arr1, arr2),
  }),
});

export { findItemsIn };
