const R = require("ramda");

const within = (obj) => ({
  setPath: (key, keyPathSeparator = ".") => ({
    to: (value) => R.assocPath(key.split(keyPathSeparator), value, obj),
  }),
});

module.exports = { within };
