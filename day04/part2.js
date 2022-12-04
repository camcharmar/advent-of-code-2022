export default (parsedInput) => {
  return parsedInput.reduce((acc, pair) => {
    if (
      (pair[0][0] >= pair[1][0] && pair[0][0] <= pair[1][1]) ||
      (pair[0][1] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
      (pair[1][1] >= pair[0][0] && pair[1][1] <= pair[0][1]) ||
      (pair[1][1] >= pair[0][0] && pair[1][1] <= pair[0][1])
    ) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
};
