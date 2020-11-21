import take from "ramda/src/take";
import takeLast from "ramda/src/takeLast";
import takeWhile from "ramda/src/takeWhile";
import takeLastWhile from "ramda/src/takeLastWhile";
import head from "ramda/src/head";
import drop from "ramda/src/drop";
import dropLast from "ramda/src/dropLast";
import dropLastWhile from "ramda/src/dropLastWhile";
import dropRepeats from "ramda/src/dropRepeats";
import dropRepeatsWith from "ramda/src/dropRepeatsWith";
import last from "ramda/src/last";

// @ts-ignore
import dropWhile from "ramda/src/dropWhile";

const from = <T>(arr: T[]) => ({
  pickQuantity: (quantity: number) => ({
    fromTheStart: () => take(quantity, arr),
    fromTheEnd: () => takeLast(quantity, arr),
  }),
  pickWhile: (predicate: (a: T) => boolean) => ({
    fromTheStart: () => takeWhile(predicate, arr),
    fromTheEnd: () => takeLastWhile(predicate, arr),
  }),
  pickFirst: () => head(arr),
  pickLast: () => last(arr),
  dropFirst: () => from(arr).dropQuantity(1).fromTheStart(),
  dropLast: () => from(arr).dropQuantity(1).fromTheEnd(),
  dropQuantity: (quantity: number) => ({
    fromTheStart: () => drop(quantity, arr),
    fromTheEnd: () => dropLast(quantity, arr),
  }),
  dropWhile: (predicate: (a: T) => boolean) => ({
    fromTheStart: () => dropWhile(predicate, arr),
    fromTheEnd: () => dropLastWhile(predicate, arr),
  }),
  dropConsecutiveRepeats: () => dropRepeats(arr),
  dropConsecutiveRepeatsSatisfying: (predicate: (a: T, b: T) => boolean) =>
    dropRepeatsWith(predicate, arr),
});

export { from };
