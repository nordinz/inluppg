type currency = "SEK" | "USD" | "CVE" | "AWG";

export const roundPrice = (data: number, curr: currency = "SEK"): string => {
  const roundedNumber: number = parseFloat(data.toFixed(2));

  const res: string = roundedNumber.toFixed(2);

  if (curr === "USD") {
    return `${curr} ${res}`;
  }
  return `${res} ${curr}`;
};
