import clone from "ramda/src/clone";
import omit from "ramda/src/omit";
import pickAll from "ramda/src/pickAll";
import pick from "ramda/src/pick";

const copy = <T extends object>(obj: T) => ({
  deeply: () => clone(obj),
  discardKeys: (...keys: string[]) => omit(keys, obj),
  keepKeys: (...keys: string[]) => pick(keys, obj),
});

export { copy };
