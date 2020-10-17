import { from } from "./from";

describe("from", () => {
  describe("takeQuantity", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing the first N number of items from the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).takeQuantity(1).fromTheStart();
        expect(result1).toEqual(["foo"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).takeQuantity(2).fromTheStart();
        expect(result2).toEqual(["foo", "bar"]);
        expect(input !== result2).toBe(true);
      });

      it("should return all items if the quantity requested is greater than the length of the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).takeQuantity(5).fromTheStart();

        expect(result).toEqual(["foo", "bar", "baz"]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array containing the last N number of items from the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).takeQuantity(1).fromTheEnd();
        expect(result1).toEqual(["baz"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).takeQuantity(2).fromTheEnd();
        expect(result2).toEqual(["bar", "baz"]);
        expect(input !== result2).toBe(true);
      });

      it("should return all items if the quantity requested is greater than the length of the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).takeQuantity(5).fromTheEnd();

        expect(result).toEqual(["foo", "bar", "baz"]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("takeWhile", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing items from the start of the source array until when the predicate function returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .takeWhile((n) => n !== 4)
          .fromTheStart();

        expect(result).toEqual([1, 2, 3]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array containing items from the end of the source array until when the predicate function returns false ", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .takeWhile((n) => n !== 4)
          .fromTheEnd();

        expect(result).toEqual([3, 2, 1]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("takeFirst", () => {
    it("should return the first item from the source array ", () => {
      const result = from(["fi", "fo", "fum"]).takeFirst();
      expect(result).toBe("fi");
    });
  });

  describe("takeLast", () => {
    it("should return the last item from the source array ", () => {
      const result = from(["fi", "fo", "fum"]).takeLast();
      expect(result).toBe("fum");
    });
  });

  describe("dropFirst", () => {
    it("should return a new array containing every item from the source array except the first", () => {
      const result = from(["fi", "fo", "fum"]).dropFirst();
      expect(result).toEqual(["fo", "fum"]);
    });
  });

  describe("dropLast", () => {
    it("should return a new array containing every item from the source array except the last", () => {
      const result = from(["fi", "fo", "fum"]).dropLast();
      expect(result).toEqual(["fi", "fo"]);
    });
  });

  describe("dropQuantity", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing all items from the source array with the first N items removed", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).dropQuantity(1).fromTheStart();
        expect(result1).toEqual(["bar", "baz"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).dropQuantity(2).fromTheStart();
        expect(result2).toEqual(["baz"]);
        expect(input !== result2).toBe(true);
      });

      it("should return an empty array if the quantity requested is greater than the length of the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).dropQuantity(5).fromTheStart();

        expect(result).toEqual([]);
        expect(input !== result).toBe(true);
      });
    });

    describe("fromTheEnd", () => {
      it("should return a new array containing all items from the source array with the last N items removed", () => {
        const input = ["foo", "bar", "baz"];

        const result1 = from(input).dropQuantity(1).fromTheEnd();
        expect(result1).toEqual(["foo", "bar"]);
        expect(input !== result1).toBe(true);

        const result2 = from(input).dropQuantity(2).fromTheEnd();
        expect(result2).toEqual(["foo"]);
        expect(input !== result2).toBe(true);
      });

      it("should return an empty array if the quantity requested is greater than the length of the source array", () => {
        const input = ["foo", "bar", "baz"];

        const result = from(input).dropQuantity(5).fromTheEnd();

        expect(result).toEqual([]);
        expect(input !== result).toBe(true);
      });
    });
  });

  describe("dropWhile", () => {
    describe("fromTheStart", () => {
      it("should return a new array containing items from the head of the source array after the predicate function returns false", () => {
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .dropWhile((n) => n <= 2)
          .fromTheStart();

        expect(result).toEqual([3, 4, 3, 2, 1]);
        expect(input !== result).toBe(true);
      });

      it("should return a new array containing items from the tail of the source array after the predicate function returns false", () => {
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
    it("should returns a new array without any consecutively repeating elements ", () => {
      const input = [1, 1, 1, 2, 3, 4, 4, 2, 2];

      const result = from(input).dropConsecutiveRepeats();

      expect(result).toEqual([1, 2, 3, 4, 2]);
      expect(input !== result).toBe(true);
    });
  });
});
