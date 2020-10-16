const R = require("ramda");

// @todo: reconsider if its worth keeping this function
const within = (obj) => ({
  setPath: (key, keyPathSeparator = ".") => ({
    to: (value) => R.assocPath(key.split(keyPathSeparator), value, obj),
  }),
});

module.exports = { within };
