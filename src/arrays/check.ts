import endsWith from "ramda/src/endsWith";

const check = <T>(arr: T[]) => ({
  endsWith: (...items: T[]) => endsWith([...items], arr),
});

export { check };
