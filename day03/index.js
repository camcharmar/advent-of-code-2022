import input from "./input.js";

const priority = (letter) =>
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .indexOf(letter) + 1;

const part1 = input.reduce((acc, sack) => {
  const one = sack.substring(0, sack.length / 2).split("");
  const two = sack.substring(sack.length / 2).split("");

  const common = one.find((item) => two.includes(item));
  return acc + priority(common);
}, 0);

let part2 = 0;
for (let i = 0; i < input.length - 2; i += 3) {
  const one = input[i].split("");
  const two = input[i + 1].split("");
  const three = input[i + 2].split("");

  const common = one.find((item) => two.includes(item) && three.includes(item));
  part2 += priority(common);
}

console.log(part1);
console.log(part2);
