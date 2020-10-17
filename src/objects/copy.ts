import clone from "ramda/src/clone";
import omit from "ramda/src/omit";
import pickAll from "ramda/src/pickAll";
import pick from "ramda/src/pick";

const copy = <T extends object>(obj: T) => ({
  deeply: () => clone(obj),
  discardKey: (key: string) => omit([key], obj),
  discardKeys: (keys: string[]) => omit(keys, obj),
  keepKey: (key: string, defaultToUndefined = false) =>
    defaultToUndefined ? pickAll([key], obj) : pick([key], obj),
  keepKeys: (keys: string[], defaultToUndefined = false) =>
    defaultToUndefined ? pickAll(keys, obj) : pick(keys, obj),
});

export { copy };
