import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(new URL("./input.txt", import.meta.url))
  .toString()
  .trim();
const testInputString = `test`;

const parseInput = (dataString) => dataString.split(/\r?\n/).map(Number);

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
