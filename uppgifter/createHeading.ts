const MakeHeading = (text: string, number: number): string => {
  if (number < 1 || number > 6) {
    return "Headers can only be between 1 and 6";
  }

  const heading: HTMLElement = document.createElement(`h${number}`);
  heading.textContent = text;

  return heading.outerHTML;
};

export default MakeHeading;
