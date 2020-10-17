import assocPath from "ramda/src/assocPath";

// @todo: reconsider if its worth keeping this function
const within = (obj) => ({
  setPath: (key, keyPathSeparator = ".") => ({
    to: (value) => assocPath(key.split(keyPathSeparator), value, obj),
  }),
});

export { within };
