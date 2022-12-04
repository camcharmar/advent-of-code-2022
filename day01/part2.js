export default (parsedInput) => {
  return parsedInput
    .reduce(
      (arr, elf) => {
        const calories = elf.reduce((a, b) => a + b, 0);
        const index = arr.findIndex((val) => calories > val);
        if (index != -1) {
          arr.splice(index, 0, calories);
        }
        return arr.slice(0, 3);
      },
      [0, 0, 0]
    )
    .reduce((a, b) => a + b, 0);
};
