import rSort from "ramda/src/sort";
import ascend from "ramda/src/ascend";
import descend from "ramda/src/descend";
import sortWith from "ramda/src/sortWith";
import rProp from "ramda/src/prop";

const sort = (arr) => ({
  ascendingByProperty: (prop) => rSort(ascend(rProp(prop)), arr),
  descendingByProperty: (prop) => rSort(descend(rProp(prop)), arr),
  firstAscendingByProperty: (prop1) => ({
    thenAscendingByProperty: (prop2) =>
      sortWith([ascend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendingByProperty: (prop2) =>
      sortWith([ascend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
  firstDescendingByProperty: (prop1) => ({
    thenAscendingByProperty: (prop2) =>
      sortWith([descend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendingByProperty: (prop2) =>
      sortWith([descend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
});

export { sort };
