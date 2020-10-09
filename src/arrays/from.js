const R = require("ramda");

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
    fromTheStart: () => R.take(quantity, arr),
    fromTheEnd: () => R.takeLast(quantity, arr),
  }),
  takeUntil: (predicate) => ({
    fromTheStart: () => R.takeWhile(predicate, arr),
    fromTheEnd: () => R.takeLastWhile(predicate, arr),
  }),
  takeFirst: () => R.head(arr),
  takeLast: () => R.last(arr),
  drop: (quantity) => ({
    fromTheStart: () => R.drop(quantity, arr),
    fromTheEnd: () => R.dropLast(quantity, arr),
  }),
  dropUntil: (predicate) => ({
    fromTheStart: () => R.dropWhile(predicate, arr),
    fromTheEnd: () => R.dropLastWhile(predicate, arr),
  }),
  dropConsecutiveRepeats: () => R.dropRepeats(arr),
});

module.exports = { from };
