import getInput from "./input.js";

const solve = (isTesting) => {
  const input = getInput(isTesting);

  const part1 = input.reduce((acc, row) => {
    // Part 1 solution
  }, 0);

  const part2 = input.reduce((acc, row) => {
    // Part 1 solution
  }, 0);

  (part1 || part2) &&
    console.log(isTesting ? "===== TEST =====" : "===== REAL =====");
  part1 && console.log(`Part 1: ${part1}`);
  part2 && console.log(`Part 2: ${part2}`);
};

solve(true);
solve(false);
