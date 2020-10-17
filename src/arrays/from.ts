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

// from(arr).takeQuantity(4).fromTheFront()
// from(arr).takeQuantity(4).fromTheBeginning()
// from(arr).takeUntil(n => n != 4).itemsFromTheStart
// from(arr).takeUntil(n => n != 4).fromTheStart()

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
  dropFirst: () => from(arr).drop(1).fromTheStart(),
  dropLast: () => from(arr).drop(1).fromTheEnd(),
  drop: (quantity) => ({
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
