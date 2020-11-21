import { from } from "./from";

describe("from", () => {
  describe("pickQuantity", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing the first N number of items from the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).pickQuantity(1).fromTheStart();
        expect(result1).toEqual(["foo"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).pickQuantity(2).fromTheStart();
        expect(result2).toEqual(["foo", "bar"]);
        expect(input !== result2).toBe(true);
      });

      it("should return all items if the quantity requested is greater than the length of the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).pickQuantity(5).fromTheStart();

        expect(result).toEqual(["foo", "bar", "baz"]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array containing the last N number of items from the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).pickQuantity(1).fromTheEnd();
        expect(result1).toEqual(["baz"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).pickQuantity(2).fromTheEnd();
        expect(result2).toEqual(["bar", "baz"]);
        expect(input !== result2).toBe(true);
      });

      it("should return all items if the quantity requested is greater than the length of the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).pickQuantity(5).fromTheEnd();

        expect(result).toEqual(["foo", "bar", "baz"]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("pickWhile", () => {
    describe("fromTheStart", () => {
      it("should return a new array by selecting items from the start of the input array until the predicate returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .pickWhile((n) => n !== 4)
          .fromTheStart();

        expect(result).toEqual([1, 2, 3]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array by selecting items from the end of the input array until the predicate returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .pickWhile((n) => n !== 4)
          .fromTheEnd();

        expect(result).toEqual([3, 2, 1]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("pickFirst", () => {
    it("should return the first item from the input array", () => {
      const result = from(["fi", "fo", "fum"]).pickFirst();
      expect(result).toBe("fi");
    });
  });

  describe("pickLast", () => {
    it("should return the last item from the input array", () => {
      const result = from(["fi", "fo", "fum"]).pickLast();
      expect(result).toBe("fum");
    });
  });

  describe("dropFirst", () => {
    it("should return a new array containing every item from the input array except the first", () => {
      const result = from(["fi", "fo", "fum"]).dropFirst();
      expect(result).toEqual(["fo", "fum"]);
    });
  });

  describe("dropLast", () => {
    it("should return a new array containing every item from the input array except the last", () => {
      const result = from(["fi", "fo", "fum"]).dropLast();
      expect(result).toEqual(["fi", "fo"]);
    });
  });

  describe("dropQuantity", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing all items from the input array with the first N items removed", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).dropQuantity(1).fromTheStart();
        expect(result1).toEqual(["bar", "baz"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).dropQuantity(2).fromTheStart();
        expect(result2).toEqual(["baz"]);
        expect(input !== result2).toBe(true);
      });

      it("should return an empty array if the quantity requested is greater than the length of the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).dropQuantity(5).fromTheStart();

        expect(result).toEqual([]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array containing all items from the input array with the last N items removed", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).dropQuantity(1).fromTheEnd();
        expect(result1).toEqual(["foo", "bar"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).dropQuantity(2).fromTheEnd();
        expect(result2).toEqual(["foo"]);
        expect(input !== result2).toBe(true);
      });

      it("should return an empty array if the quantity requested is greater than the length of the input array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).dropQuantity(5).fromTheEnd();

        expect(result).toEqual([]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("dropWhile", () => {
    describe("fromTheStart", () => {
      it("should return a new array by removing items from the start of the input array until the predicate returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .dropWhile((n) => n <= 2)
          .fromTheStart();

        expect(result).toEqual([3, 4, 3, 2, 1]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array by removing items from the end of the input array until the predicate returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .dropWhile((n) => n <= 3)
          .fromTheEnd();

        expect(result).toEqual([1, 2, 3, 4]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("dropConsecutiveRepeats", () => {
    it("should return a new array containing every item from the input array with any consecutively repeated elements removed", () => {
      const input = [1, 1, 1, 2, 3, 4, 4, 2, 2];

      const result = from(input).dropConsecutiveRepeats();

      expect(result).toEqual([1, 2, 3, 4, 2]);
      expect(input !== result).toBe(true);
    });
  });

  describe("dropConsecutiveRepeatsSatisfying", () => {
    it("should return a new array containing every item from the input array with any consecutive elements satisfying the predicate removed", () => {
      const input = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];

      const result = from(input).dropConsecutiveRepeatsSatisfying(
        (x, y) => Math.abs(x) === Math.abs(y)
      );

      expect(result).toEqual([1, 3, 4, -5, 3]);
      expect(input !== result).toBe(true);
    });
  });
});
