import mergeDeepLeft from "ramda/src/mergeDeepLeft";
import mergeDeepRight from "ramda/src/mergeDeepRight";
import mergeDeepWith from "ramda/src/mergeDeepWith";

const merge = (obj1: object) => ({
  deeplyWith: (obj2: object) => ({
    resolvingConflicts: {
      viaFirstObject: () => mergeDeepLeft(obj1, obj2),
      viaSecondObject: () => mergeDeepRight(obj1, obj2),
      viaFunction: (predicate: (a: any, b: any) => any) =>
        mergeDeepWith(predicate, obj1, obj2),
    },
  }),
});

export { merge };
