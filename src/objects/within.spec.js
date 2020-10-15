const { within } = require("./within");

describe("within", () => {
  describe("setPath", () => {
    describe("to", () => {
      it("should create a new object by adding missing keys or overriding non-object keys in the path", () => {
        const input = { a: 5 };

        const result = within(input).setPath("a.b.c").to(42);

        expect(result).toEqual({ a: { b: { c: 42 } } });
        expect(input !== result);
      });

      it("should create a new object by splitting the path using the separtor specified", () => {
        const input = { a: 5 };

        const result = within(input).setPath("a>b>c", ">").to(42);

        expect(result).toEqual({ a: { b: { c: 42 } } });
        expect(input !== result);
      });
    });
  });
});
