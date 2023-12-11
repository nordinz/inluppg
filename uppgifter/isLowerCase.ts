export const isLowerCase = (input: string) => {
  return input
    .split("")
    .map((c) => c === c.toLowerCase())
    .every(Boolean);
};
