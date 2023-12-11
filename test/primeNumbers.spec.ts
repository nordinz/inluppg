import { isPrimeNumber } from "../uppgifter/isPrimeNumber";

describe("should return tru if input is a primeNumber", () => {
  it("should return false if input is 45", () => {
    const res = isPrimeNumber(45);
    expect(res).toBe(false);
  });
  it("should return true if input is 5", () => {
    const res = isPrimeNumber(5);
    expect(res).toBe(true);
  });
  it("should return false if input is 9", () => {
    const res = isPrimeNumber(9);
    expect(res).toBe(false);
  });
});
