const R = require("ramda");

// @todo: ascendinglyBy or ascendinglyByProperty or ascByProperty?
const sort = (arr) => ({
  ascendinglyBy: (prop) => R.sort(R.ascend(R.prop(prop)), arr),
  descendinglyBy: (prop) => R.sort(R.descend(R.prop(prop)), arr),
  firstAscendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      R.sortWith([R.ascend(R.prop(prop1)), R.ascend(R.prop(prop2))])(arr),
    thenDescendinglyBy: (prop2) =>
      R.sortWith([R.ascend(R.prop(prop1)), R.descend(R.prop(prop2))])(arr),
  }),
  firstDescendinglyBy: (prop1) => ({
    thenAscendinglyBy: (prop2) =>
      R.sortWith([R.descend(R.prop(prop1)), R.ascend(R.prop(prop2))])(arr),
    thenDescendinglyBy: (prop2) =>
      R.sortWith([R.descend(R.prop(prop1)), R.descend(R.prop(prop2))])(arr),
  }),
});

module.exports = { sort };
