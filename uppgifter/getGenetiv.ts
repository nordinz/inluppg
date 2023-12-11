export const getGenetiv = (name: string) => {
  if (typeof name !== "string") {
    return `${name} is not a string of characters`;
  }
  if (name.endsWith("s")) {
    return name;
  }
  return `${name}s`;
};
