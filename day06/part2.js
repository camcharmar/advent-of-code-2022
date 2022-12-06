export default (parsedInput) => {
  return (
    1 +
    parsedInput.findIndex((_, index) => {
      if (index < 13) return false;
      const group = parsedInput.slice(index - 13, index + 1).sort();
      return group.slice(1).every((signal, idx) => signal !== group[idx]);
    })
  );
};
