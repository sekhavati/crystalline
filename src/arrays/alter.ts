import adjust from "ramda/src/adjust";
import intersperse from "ramda/src/intersperse";
import move from "ramda/src/move";
import remove from "ramda/src/remove";
import uniq from "ramda/src/uniq";
import without from "ramda/src/without";

const alter = <T>(arr: T[]) => ({
  byApplying: (transformer: (a: T) => any) => ({
    atIndex: (index: number) => adjust(index, transformer, arr),
  }),
  byInsertingBetweenEachItem: (value: any) => intersperse(value, arr),
  byMovingItemAtIndex: (fromIndex: number) => ({
    toIndex: (toIndex: number) => move(fromIndex, toIndex, arr),
    toTheStart: () => move(fromIndex, 0, arr),
    toTheEnd: () => move(fromIndex, arr.length - 1, arr),
  }),
  byRemovingItemsBetweenIndex: (fromIndex: number) => ({
    andIndex: (toIndex: number) => remove(fromIndex, toIndex, arr),
  }),
  byRemovingDuplicates: () => uniq(arr),
  byRemovingItemsEqualTo: (...itemsToRemove: T[]) =>
    without(itemsToRemove, arr),
});

export { alter };
