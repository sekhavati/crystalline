import mergeDeepLeft from "ramda/src/mergeDeepLeft";
import mergeDeepRight from "ramda/src/mergeDeepRight";
import mergeDeepWith from "ramda/src/mergeDeepWith";

const merge = (obj1: object) => ({
  deeplyWith: (obj2: object) => ({
    resolvingConflictsViaFirstObject: () => mergeDeepLeft(obj1, obj2),
    resolvingConflictsViaSecondObject: () => mergeDeepRight(obj1, obj2),
    resolvingConflictsByApplying: (resolver: (a: any, b: any) => any) =>
      mergeDeepWith(resolver, obj1, obj2),
  }),
});

export { merge };
