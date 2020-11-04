import * as numbers from "./index";

describe("numbers category index file", () => {
  it("should export all functions", () => {
    expect(numbers).toEqual({
      clamp: expect.any(Function),
    });
  });
});
