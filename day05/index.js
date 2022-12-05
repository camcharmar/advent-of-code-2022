import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(
  new URL("./input.txt", import.meta.url)
).toString();
const testInputString = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const parseInput = (dataString) =>
  dataString.split(/\r?\n\r?\n/).map((section, index) => {
    if (index === 0) {
      let stacks = {};
      section
        .split(/\r?\n/)
        .map((line) => {
          return Array.from(line).filter((_, index) => (index % 4) - 1 === 0);
        })
        .slice(0, -1)
        .map((row) =>
          row.forEach((value, index) => {
            if (value !== " ") {
              if (stacks[index] === undefined) stacks[index] = [];
              stacks[index].push(value);
            }
          })
        );
      return stacks;
    } else {
      return section
        .split(/\r?\n/)
        .map((line) => [
          Number(line.slice(5).split(" from ")[0]),
          Number(line.split(" from ")[1].split(" to ")[0]),
          Number(line.split(" to ")[1]),
        ]);
    }
  });

console.log("===== PART 1 =====");
part1 && console.log(`Test: ${part1(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part1(parseInput(realInputString))}`);
console.log("===== PART 2 =====");
part1 && console.log(`Test: ${part2(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part2(parseInput(realInputString))}`);
