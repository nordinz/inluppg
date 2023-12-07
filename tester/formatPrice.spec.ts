import { roundPrice } from "../uppgifter/formatPrice";

describe("rounds up to show two decimals", () => {
  it("should return '232.11 SEK' if input is 232.10542", () => {
    const res = roundPrice(232.10542);
    expect(res).toBe(`232.11 SEK`);
  });

  it("should return '14.00 SEK' if input is 14", () => {
    const res = roundPrice(14);
    expect(res).toBe(`14.00 SEK`);
  });

  it("should return '1024.20 SEK'if input is 1024.2048", () => {
    const res = roundPrice(1024.2048);
    expect(res).toBe(`1024.20 SEK`);
  });

  it("should return USD '104.20' if input is 104.2041148", () => {
    const res = roundPrice(1024.2048, "USD");
    expect(res).toBe(`USD 1024.20`);
  });

  it("should return '8518.45 CVE' if input is 8518.4485", () => {
    const res = roundPrice(8518.4485, "CVE");
    expect(res).toBe(`8518.45 CVE`);
  });
});
