import input from "./input.js";

let elves = [];

input.forEach((elf, elfId) => {
  const total = elf.reduce((a, b) => a + b, 0);
  elves.push([elfId, total]);
});

elves.sort((a, b) => b[1] - a[1]);

console.log(`Part 1: ${elves[0][1]}`);
console.log(`Part 2: ${elves[0][1] + elves[1][1] + elves[2][1]}`);
