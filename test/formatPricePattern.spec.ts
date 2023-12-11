import { roundPrice } from "../uppgifter/formatPricePattern";

describe('should replace "%PRICE%" with the actual price', () => {
  it('should return "232.11 kr', () => {
    const res = roundPrice(232.10542, "%PRICE% kr");
    expect(res).toBe(`232.11 kr`);
  });

  it('should return "232.11 kr', () => {
    const res = roundPrice(232.10542, "$%PRICE%");
    expect(res).toBe(`$232.11`);
  });
});
