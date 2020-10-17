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

// drop(3).charactersFrom(str).atTheStart();
// drop(3).charactersFrom(str).atTheEnd();
// drop(3).itemsFrom(col).atTheStart();
// drop(3).itemsFrom(col).atTheEnd();
// drop(3).itemsFrom(col).thatMatch(); // how to deal with (3) ???
// drop(3)
//   .from(col | str)
//   .atTheEnd();
// // drop, take, dropIf, takeIf
// from(col).take(3).fromTheEnd();
// from(col).take(3).fromTheStart();
// from(col).takeUntil(pred).fromTheStart();
// from(col).takeUntil(pred).fromTheEnd();
// from(col).takeWhile(pred).fromTheEnd();
// from(col).take(3).itemsFromTheStart();
// from(str).take(3).charsFromTheStart();
// from(col).take(3).fromTheStart();
// take(5).from(
// @todo: consider splitting out take/drop
// @todo: prefix function names with "items", ie: itemsFromTheStart
const from = (arr) => ({
  take: (quantity) => ({
    fromTheStart: () => take(quantity, arr),
    fromTheEnd: () => takeLast(quantity, arr),
  }),
  takeUntil: (predicate) => ({
    fromTheStart: () => takeWhile(predicate, arr),
    fromTheEnd: () => takeLastWhile(predicate, arr),
  }),
  takeFirst: () => head(arr),
  takeLast: () => last(arr),
  drop: (quantity) => ({
    fromTheStart: () => drop(quantity, arr),
    fromTheEnd: () => dropLast(quantity, arr),
  }),
  dropUntil: (predicate) => ({
    fromTheStart: () => dropWhile(predicate, arr),
    fromTheEnd: () => dropLastWhile(predicate, arr),
  }),
  dropConsecutiveRepeats: () => dropRepeats(arr),
});

export { from };
