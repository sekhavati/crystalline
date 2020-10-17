import rSort from "ramda/src/sort";
import ascend from "ramda/src/ascend";
import descend from "ramda/src/descend";
import sortWith from "ramda/src/sortWith";
import rProp from "ramda/src/prop";

// @todo: ascendinglyBy or ascendinglyByProperty or ascByProperty?
// @todo: rename ascendinlyBy to ascendingBy
const sort = (arr) => ({
  ascendinglyBy: (prop) => rSort(ascend(rProp(prop)), arr),
  descendinglyBy: (prop) => rSort(descend(rProp(prop)), arr),
  firstAscendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      sortWith([ascend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendinglyBy: (prop2) =>
      sortWith([ascend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
  firstDescendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      sortWith([descend(rProp(prop1)), ascend(rProp(prop2))])(arr),
    thenDescendinglyBy: (prop2) =>
      sortWith([descend(rProp(prop1)), descend(rProp(prop2))])(arr),
  }),
});

export { sort };
