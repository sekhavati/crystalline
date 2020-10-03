const R = require("ramda");

// @todo: adjust suggests the original item is modified, but functions are pure. think of better name?
const adjust = (collection) => ({
  byApplying: (predicate) => ({
    atIndex: (index) => R.adjust(index, predicate, collection),
  }),
  byInterspersing: (value) => R.intersperse(value, collection),
  byMovingItemAtIndex: (fromIndex) => ({
    to: (toIndex) => R.move(fromIndex, toIndex, collection),
  }),
  byRemovingItemsFromIndex: (fromIndex) => ({
    to: (toIndex) => R.remove(fromIndex, toIndex, collection),
  }),
});

const split = (collection) => ({
  atIndex: (index) => R.splitAt(index, collection),
  atFirstEncounterOf: (predicate) => R.splitWhen(predicate),
  everyNthIndex: (index) => R.splitEvery(index, collection),
  bySeparator: (separator) => R.split(separator, collection),
  byItemsMatching: (predicate) => R.partition(predicate, collection),
});

// @todo: consider moving this into 'split.intoChunksOf'
const chunk = (collection) => ({
  intoGroupsOf: (groupSize) => R.aperture(groupSize, collection),
});

const append = (item) => ({
  to: (collection) => R.append(item, collection),
});

const concat = (a) => ({
  with: (b) => R.concat(a, b),
});

// @todo: ascendinglyBy or ascendinglyByProperty?
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
  set: (key) => ({ to: (value) => R.assoc(key, value, obj) }),
  setPath: (key, keyPathSeparator = ".") => ({
    to: (value) => R.assocPath(key.split(keyPathSeparator), value, obj),
  }),
});

const clamp = (number) => ({
  between: (min) => ({
    and: (max) => R.clamp(number, min, max),
  }),
});

const deepCopy = (object) => R.clone(object);

// @todo: utilise R.pipe() and R.compose()
const sequence = () => null;
const reverseSequence = () => null;

const tally = (collection) => ({
  by: (predicate) => R.countBy(predicate)(collection),
});

// @todo: find syntax whereby differenceWith and symetricDifference can be included fluently
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

const transform = (obj) => ({
  byApplying: (predicate) => ({
    to: (key) => R.evolve({ [key]: predicate }, obj),
  }),
});

// @todo: rename viaFirstObject => favouringFirstObject() ?
const merge = (obj1) => ({
  deeplyWith: (obj2) => ({
    resolvingConflicts: {
      viaFirstObject: () => R.mergeDeepLeft(obj1, obj2),
      viaSecondObject: () => R.mergeDeepRight(obj1, obj2),
      via: (predicate) => R.mergeDeepWith(predicate, obj1, obj2),
    },
  }),
});

// @todo: think of better opposite mirror names
const copy = (obj) => ({
  excludingKey: (key) => R.omit([key], obj),
  excludingKeys: (keys) => R.omit(keys, obj),
  onlyIncludeKey: (key, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll([key], obj) : R.pick([key], obj),
  onlyIncludeKeys: (keys, defaultToUndefined = false) =>
    defaultToUndefined ? R.pickAll(keys, obj) : R.pick(keys, obj),
});

const rpp = {
  adjust,
  split,
  chunk,
  append,
  sort,
  within,
  clamp,
  deepCopy,
  concat,
  tally,
  findItemsIn,
  from,
  transform,
  merge,
  copy,
};

module.exports = rpp;
