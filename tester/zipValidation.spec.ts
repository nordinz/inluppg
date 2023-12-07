import { validateZip } from "../uppgifter/zipValidation";

describe("is Zip valid?", () => {
  it("should return true", () => {
    const isValid = validateZip("12345");
    expect(isValid).toBe(true);
  });
});

describe("is Zip valid?", () => {
  it("should return false, need 5chars", () => {
    const isValid = validateZip("1234");
    expect(isValid).toBe(false);
  });
});

describe("is Zip valid?", () => {
  it("should return false, need 5chars", () => {
    const isValid = validateZip("123456");
    expect(isValid).toBe(false);
  });
});

describe("is Zip valid?", () => {
  it("should return false, need 5chars", () => {
    const isValid = validateZip("abcde");
    expect(isValid).toBe(false);
  });
});
