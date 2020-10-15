const { merge } = require("./merge");

describe("merge", () => {
  describe("deeplyWith", () => {
    describe("resolvingConflicts", () => {
      describe("viaFirstObject", () => {
        it("should create a new object with all properties from the input objects, using values from the first object when the same keys exist in both", () => {
          const obj1 = {
            name: "fred",
            age: 10,
            contact: { email: "moo@example.com" },
          };
          const obj2 = { age: 40, contact: { email: "baa@example.com" } };

          const result = merge(obj1)
            .deeplyWith(obj2)
            .resolvingConflicts.viaFirstObject();

          expect(result).toEqual({
            name: "fred",
            age: 10,
            contact: { email: "moo@example.com" },
          });
          expect(obj1 !== result).toBe(true);
          expect(obj2 !== result).toBe(true);
        });
      });

      describe("viaSecondObject", () => {
        it("should create a new object with all properties from the input objects, using values from the second object when the same keys exist in both", () => {
          const obj1 = {
            name: "fred",
            age: 10,
            contact: { email: "moo@example.com" },
          };
          const obj2 = { age: 40, contact: { email: "baa@example.com" } };

          const result = merge(obj1)
            .deeplyWith(obj2)
            .resolvingConflicts.viaSecondObject();

          expect(result).toEqual({
            name: "fred",
            age: 40,
            contact: { email: "baa@example.com" },
          });
          expect(obj1 !== result).toBe(true);
          expect(obj2 !== result).toBe(true);
        });
      });

      describe("viaFunction", () => {
        it("should create a new object with all properties from the input objects, using the predicate to derive a value for keys that exist in both", () => {
          const obj1 = { a: true, c: { values: [10, 20] } };
          const obj2 = { b: true, c: { values: [15, 35] } };

          const result = merge(obj1)
            .deeplyWith(obj2)
            .resolvingConflicts.viaFunction((x, y) => [...x, ...y]);

          expect(result).toEqual({
            a: true,
            b: true,
            c: { values: [10, 20, 15, 35] },
          });
          expect(obj1 !== result).toBe(true);
          expect(obj2 !== result).toBe(true);
        });
      });
    });
  });
});
