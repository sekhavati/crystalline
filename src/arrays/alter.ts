import adjust from "ramda/src/adjust";
import intersperse from "ramda/src/intersperse";
import move from "ramda/src/move";
import remove from "ramda/src/remove";
import uniq from "ramda/src/uniq";
import without from "ramda/src/without";

const alter = (arr) => ({
  byApplyingFn: (predicate) => ({
    atIndex: (index) => adjust(index, predicate, arr),
  }),
  byInsertingBetweenEachItem: (value) => intersperse(value, arr),
  byMovingItemAtIndex: (fromIndex) => ({
    toIndex: (toIndex) => move(fromIndex, toIndex, arr),
  }),
  byRemovingItemsBetweenIndex: (fromIndex) => ({
    andIndex: (toIndex) => remove(fromIndex, toIndex, arr),
  }),
  byRemovingDuplicates: () => uniq(arr),
  byRemovingItems: (itemsToRemove) => without(itemsToRemove, arr),
});

export { alter };
