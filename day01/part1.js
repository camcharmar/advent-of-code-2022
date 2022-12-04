export default (parsedInput) => {
  return parsedInput.reduce((max, elf) => {
    const calories = elf.reduce((a, b) => a + b, 0);
    return Math.max(calories, max);
  }, 0);
};
