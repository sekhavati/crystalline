import mergeDeepLeft from "ramda/src/mergeDeepLeft";
import mergeDeepRight from "ramda/src/mergeDeepRight";
import mergeDeepWith from "ramda/src/mergeDeepWith";

const merge = (obj1) => ({
  deeplyWith: (obj2) => ({
    resolvingConflicts: {
      viaFirstObject: () => mergeDeepLeft(obj1, obj2),
      viaSecondObject: () => mergeDeepRight(obj1, obj2),
      viaFunction: (predicate) => mergeDeepWith(predicate, obj1, obj2),
    },
  }),
});

export { merge };
