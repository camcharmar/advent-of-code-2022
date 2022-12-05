import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(
  new URL("./input.txt", import.meta.url)
).toString();
const testInputString = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const parseInput = (dataString) =>
  dataString.split(/\r?\n\r?\n/).map((elf) => elf.split(/\r?\n/).map(Number));

console.log("===== PART 1 =====");
part1 && console.log(`Test: ${part1(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part1(parseInput(realInputString))}`);
console.log("===== PART 2 =====");
part1 && console.log(`Test: ${part2(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part2(parseInput(realInputString))}`);
