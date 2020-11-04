import crystalline from "./index";

describe("main index file", () => {
  it("should export all function categories", () => {
    expect(crystalline).toEqual({
      arrays: expect.any(Object),
      misc: expect.any(Object),
      numbers: expect.any(Object),
      objects: expect.any(Object),
    });
  });
});
