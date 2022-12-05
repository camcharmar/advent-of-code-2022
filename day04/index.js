import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(
  new URL("./input.txt", import.meta.url)
).toString();
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

console.log("===== PART 1 =====");
part1 && console.log(`Test: ${part1(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part1(parseInput(realInputString))}`);
console.log("===== PART 2 =====");
part1 && console.log(`Test: ${part2(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part2(parseInput(realInputString))}`);
