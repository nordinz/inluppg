export const roundPrice = (data: number, pat: string): string => {
  const roundedNumber: number = parseFloat(data.toFixed(2));

  const res: string = pat.replace("%PRICE%", roundedNumber.toFixed(2));

  return res;
};
