import rSort from "ramda/src/sort";
import ascend from "ramda/src/ascend";
import descend from "ramda/src/descend";
import sortWith from "ramda/src/sortWith";
import rProp from "ramda/src/prop";

const sort = (arr) => ({
  ascendingBy: (prop) => rSort(ascend(rProp(prop)), arr),
  descendingBy: (prop) => rSort(descend(rProp(prop)), arr),
  firstAscendingBy: (prop1) => ({
    thenAscendingBy: (prop2) =>
      sortWith([ascend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendingBy: (prop2) =>
      sortWith([ascend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
  firstDescendingBy: (prop1) => ({
    thenAscendingBy: (prop2) =>
      sortWith([descend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendingBy: (prop2) =>
      sortWith([descend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
});

export { sort };
