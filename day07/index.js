import { readFileSync } from "node:fs";
import part1 from "./part1.js";
import part2 from "./part2.js";

const realInputString = readFileSync(
  new URL("./input.txt", import.meta.url)
).toString();
const testInputString = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 inc
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

class Directory {
  constructor(parent) {
    this.parent = parent;
    this.directories = {};
    this.files = {};
  }

  addFile(name, size) {
    this.files[name] = size;
  }

  addDirectory(name, directory) {
    this.directories[name] = directory;
  }
}

const parseInput = (dataString) => {
  let root = new Directory();
  let currentDirectory = root;
  const lines = dataString.split(/\r?\n/);

  lines.forEach((line) => {
    if (line.startsWith("$ cd")) {
      if (line === "$ cd /") currentDirectory = root;
      else if (line === "$ cd ..") currentDirectory = currentDirectory.parent;
      else currentDirectory = currentDirectory.directories[line.substring(5)];
    } else if (line.startsWith("dir ")) {
      currentDirectory.addDirectory(
        line.substring(4),
        new Directory(currentDirectory)
      );
    } else if (!line.startsWith("$ ls")) {
      const [size, name] = line.split(" ");
      currentDirectory.addFile(name, size);
    }
  });
  return root;
};

console.log("===== PART 1 =====");
console.log(`Test: ${part1(parseInput(testInputString))}`);
console.log(`Real: ${part1(parseInput(realInputString))}`);
console.log("===== PART 2 =====");
console.log(`Test: ${part2(parseInput(testInputString))}`);
console.log(`Real: ${part2(parseInput(realInputString))}`);
