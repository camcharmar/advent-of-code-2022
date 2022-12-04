import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(new URL("./input.txt", import.meta.url))
  .toString()
  .trim();
const testInputString = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const parseInput = (dataString) =>
  dataString
    .split(/\r?\n/)
    .map((pair) => pair.split(",").map((elf) => elf.split("-").map(Number)));

const input = {
  test: parseInput(testInputString),
  real: parseInput(realInputString),
};

console.log("===== PART 1 =====");
part1 && console.log(`Test: ${part1(input.test)}`);
part2 && console.log(`Real: ${part1(input.real)}`);
console.log("===== PART 2 =====");
part1 && console.log(`Test: ${part2(input.test)}`);
part2 && console.log(`Real: ${part2(input.real)}`);
