export default (parsedInput) => {
  const finalStacks = parsedInput[1].reduce((stacks, row) => {
    for (let i = 0; i < row[0]; i++) {
      if (stacks[row[1] - 1].length > 0)
        stacks[row[2] - 1].splice(i, 0, stacks[row[1] - 1].shift());
    }
    return stacks;
  }, parsedInput[0]);
  return Object.keys(finalStacks)
    .map((key) => finalStacks[key][0] || " ")
    .join("");
};
