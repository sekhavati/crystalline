const R = require("ramda");

// alter object, alter collection, alter string
const alter = (collection) => ({
  byApplyingFn: (predicate) => ({
    atIndex: (index) => R.adjust(index, predicate, collection),
  }),
  byInsertingBetweenEachItem: (value) => R.intersperse(value, collection),
  byMovingItemAtIndex: (fromIndex) => ({
    to: (toIndex) => R.move(fromIndex, toIndex, collection),
  }),
  byRemovingItemsBetweenIndex: (fromIndex) => ({
    and: (toIndex) => R.remove(fromIndex, toIndex, collection),
  }),
  byRemovingDuplicates: () => R.uniq(collection),
  byRemovingItemsContainedIn: (itemsToRemove) =>
    R.without(itemsToRemove, collection),
  // @todo: byTrimmingLengthTo
});

const split = (collection) => ({
  atIndex: (index) => R.splitAt(index, collection),
  atFirstEncounterOf: (predicate) => R.splitWhen(predicate),
  everyNthIndex: (index) => R.splitEvery(index, collection),
  bySeparator: (separator) => R.split(separator, collection),
  byItemsMatching: (predicate) => R.partition(predicate, collection),

  // @todo: should we include the function below? could cause confusion with everyNthIndex, better name or leave out? consecutive?
  // intoGroupsOfSize: (groupSize) => R.aperture(groupSize, collection),
});

// @todo: ascendinglyBy or ascendinglyByProperty or ascByProperty?
const sort = (collection) => ({
  ascendinglyBy: (prop) => R.sort(R.ascend(R.prop(prop)), collection),
  descendinglyBy: (prop) => R.sort(R.descend(R.prop(prop)), collection),
  firstAscendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      R.sortWith([R.ascend(R.prop(prop1)), R.ascend(R.prop(prop2))])(
        collection
      ),
    thenDescendinglyBy: (prop2) =>
      R.sortWith([R.ascend(R.prop(prop1)), R.descend(R.prop(prop2))])(
        collection
      ),
  }),
  firstDescendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      R.sortWith([R.descend(R.prop(prop1)), R.ascend(R.prop(prop2))])(
        collection
      ),
    thenDescendinglyBy: (prop2) =>
      R.sortWith([R.descend(R.prop(prop1)), R.descend(R.prop(prop2))])(
        collection
      ),
  }),
});

const within = (obj) => ({
  setPath: (key, keyPathSeparator = ".") => ({
    to: (value) => R.assocPath(key.split(keyPathSeparator), value, obj),
  }),
});

// @todo: perhaps remove this function, its useful but an odd one out
const clamp = (number) => ({
  between: (min) => ({
    and: (max) => R.clamp(number, min, max),
  }),
});

const tally = (collection) => ({
  by: (predicate) => R.countBy(predicate)(collection),
});

// @todo: find syntax whereby differenceWith and symetricDifference can be included fluently
// @todo: R.union() is similar. could this be changed to combine(col1).with(col2).uniquely()?
const findItemsIn = (collection1) => ({
  notContainedIn: (collection2) => R.difference(collection1, collection2),
  containedIn: (collection2) => R.intersection(collection1, collection2),
  and: (collection2) => ({
    thatAreUnique: () => R.symmetricDifference(collection1, collection2),
  }),
});

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
const from = (collection) => ({
  take: (quantity) => ({
    fromTheStart: () => R.take(quantity, collection),
    fromTheEnd: () => R.takeLast(quantity, collection),
  }),
  takeUntil: (predicate) => ({
    fromTheStart: () => R.takeWhile(predicate, collection),
    fromTheEnd: () => R.takeLastWhile(predicate, collection),
  }),
  takeFirst: () => R.head(collection),
  takeLast: () => R.last(collection),
  drop: (quantity) => ({
    fromTheStart: () => R.drop(quantity, collection),
    fromTheEnd: () => R.dropLast(quantity, collection),
  }),
  dropUntil: (predicate) => ({
    fromTheStart: () => R.dropWhile(predicate, collection),
    fromTheEnd: () => R.dropLastWhile(predicate, collection),
  }),
  dropConsecutiveRepeats: () => R.dropRepeats(),
});

// @todo: add multi-transformation function, eg: tranform(obj).byTransforming(keys).with(transformers)
const change = (obj) => ({
  byApplying: (transformer) => ({
    to: (key) => R.evolve({ [key]: transformer }, obj),
  }),
});

// @todo: rename viaFirstObject => favouringFirstObject() ?
const merge = (obj1) => ({
  deeplyWith: (obj2) => ({
    resolvingConflicts: {
      viaFirstObject: () => R.mergeDeepLeft(obj1, obj2),
      viaSecondObject: () => R.mergeDeepRight(obj1, obj2),
      viaFunction: (predicate) => R.mergeDeepWith(predicate, obj1, obj2),
    },
  }),
});

const copy = (obj) => ({
  deeply: () => R.clone(obj);
  discardKey: (key) => R.omit([key], obj),
  discardKeys: (keys) => R.omit(keys, obj),
  keepKey: (key, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll([key], obj) : R.pick([key], obj),
  keepKeys: (keys, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll(keys, obj) : R.pick(keys, obj),
});

// seedValue: 10;
// sequenceTerminator: (n) => n < 50;
// sequenceRule: (n) => n + 10;
// sequenceTermMapFn: n => n (by default) ???
// @todo: potentially introduce sequenceTermMapFn param, ie: [n, ...] becomes [mapFn(n), ...]
const sequence = (sequenceRule) => ({
  startingWith: (seed) => ({
    untilCondition: (sequenceTerminator) => {
      const f = (n) => (sequenceTerminator(n) ? false : [n, sequenceRule(n)]);
      return R.unfold(f, seed);
    },
    untilLength: (length) => null, // @todo: create a sequence with max length entries
  }),
});

const rpp = {
  // arrays
  alter,
  split,
  sort,
  tally,
  findItemsIn,
  from,
  sequence,

  // objects
  within,
  change,
  merge,
  copy,

  // numbers
  clamp,
};

module.exports = rpp;
