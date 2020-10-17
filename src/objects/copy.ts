import clone from "ramda/src/clone";
import omit from "ramda/src/omit";
import pickAll from "ramda/src/pickAll";
import pick from "ramda/src/pick";

const copy = (obj) => ({
  deeply: () => clone(obj),
  discardKey: (key) => omit([key], obj),
  discardKeys: (keys) => omit(keys, obj),
  keepKey: (key, defaultToUndefined = false) =>
    defaultToUndefined ? pickAll([key], obj) : pick([key], obj),
  keepKeys: (keys, defaultToUndefined = false) =>
    defaultToUndefined ? pickAll(keys, obj) : pick(keys, obj),
});

export { copy };
