export const validateZip = (input: string): boolean => {
  if (input.match(/^\d{5}$/)) {
    return true;
  }

  return false;
};
