import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(
  new URL("./input.txt", import.meta.url)
).toString();
const testInputString = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

const parseInput = (dataString) => dataString.split("");

console.log("===== PART 1 =====");
part1 && console.log(`Test: ${part1(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part1(parseInput(realInputString))}`);
console.log("===== PART 2 =====");
part1 && console.log(`Test: ${part2(parseInput(testInputString))}`);
part2 && console.log(`Real: ${part2(parseInput(realInputString))}`);
