import getInput from "./input.js";

const isTesting = true;

const solve = (isTesting) => {
  console.log(isTesting ? "===== TEST =====" : "===== REAL =====");
  const input = getInput(isTesting);

  const part1 = input.reduce((acc, pair) => {
    if (
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
      (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1])
    ) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  part1 && console.log(`Part 1: ${part1}`);

  const part2 = input.reduce((acc, pair) => {
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
  part2 && console.log(`Part 2: ${part2}`);
};

solve(true);
solve(false);
