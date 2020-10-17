import take from "ramda/src/take";
import takeLast from "ramda/src/takeLast";
import takeWhile from "ramda/src/takeWhile";
import takeLastWhile from "ramda/src/takeLastWhile";
import head from "ramda/src/head";
import drop from "ramda/src/drop";
import dropLast from "ramda/src/dropLast";
import dropWhile from "ramda/src/dropWhile";
import dropLastWhile from "ramda/src/dropLastWhile";
import dropRepeats from "ramda/src/dropRepeats";
import last from "ramda/src/last";

const from = (arr) => ({
  takeQuantity: (quantity) => ({
    fromTheStart: () => take(quantity, arr),
    fromTheEnd: () => takeLast(quantity, arr),
  }),
  takeWhile: (predicate) => ({
    fromTheStart: () => takeWhile(predicate, arr),
    fromTheEnd: () => takeLastWhile(predicate, arr),
  }),
  takeFirst: () => head(arr),
  takeLast: () => last(arr),
  dropFirst: () => from(arr).dropQuantity(1).fromTheStart(),
  dropLast: () => from(arr).dropQuantity(1).fromTheEnd(),
  dropQuantity: (quantity) => ({
    fromTheStart: () => drop(quantity, arr),
    fromTheEnd: () => dropLast(quantity, arr),
  }),
  dropWhile: (predicate) => ({
    fromTheStart: () => dropWhile(predicate, arr),
    fromTheEnd: () => dropLastWhile(predicate, arr),
  }),
  dropConsecutiveRepeats: () => dropRepeats(arr),
});

export { from };
