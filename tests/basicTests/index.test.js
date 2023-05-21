const { sum, isNull, addProperty } = require("./index");

describe("sum function", () => {
  it("should result be 3 when a is 1 and b is 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should result be different 3 whean a is 2 and b is 2", () => {
    expect(sum(2, 2)).not.toBe(3);
  });

  it("should return error when argument a or b type will not be number", () => {
    expect(() => sum("a", 2)).toThrow("Type of a is not a number!");
    expect(() => sum(2, "b")).toThrow("Type of b is not a number!");
  });
});

describe("isNull function", () => {
  it("should result be truthy", () => {
    expect(isNull(null)).toBeTruthy();
  });

  it("should result be falsy", () => {
    expect(isNull(false)).toBeFalsy();
  });
});

describe("addProperty function", () => {
  it("should be added new property with null value", () => {
    const mockObj = { a: 1 };
    const result = { a: 1, b: null };

    expect(addProperty(mockObj, "b")).toEqual(result);
  });

  it("should be throw dublicated property error", () => {
    const mockObj = { a: 1 };

    expect(() => addProperty(mockObj, "a")).toThrow(
      "Couldn't add dublicated property!"
    );
  });
});
