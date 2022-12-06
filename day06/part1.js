export default (parsedInput) => {
  return (
    1 +
    parsedInput.findIndex((_, index) => {
      if (index < 3) return false;
      const group = [
        parsedInput[index],
        parsedInput[index - 1],
        parsedInput[index - 2],
        parsedInput[index - 3],
      ].sort();
      if (
        group[0] === group[1] ||
        group[1] === group[2] ||
        group[2] === group[3]
      )
        return false;
      else return true;
    })
  );
};
