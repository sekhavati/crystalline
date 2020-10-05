const R = require("ramda");

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

module.exports = { merge };
