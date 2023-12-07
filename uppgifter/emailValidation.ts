export const validateEmail = (input: string): boolean => {
  const validRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.match(validRegex)) {
    return true;
  }
  return false;
};
