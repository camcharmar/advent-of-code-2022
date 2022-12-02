import input from "./input.js";

const rock = ["X", "A"];
const paper = ["Y", "B"];
const scissors = ["Z", "C"];

const part1 = input.reduce((acc, game) => {
  if (rock.includes(game[0])) {
    if (rock.includes(game[1])) {
      return acc + 3 + 1;
    } else if (paper.includes(game[1])) {
      return acc + 6 + 2;
    } else if (scissors.includes(game[1])) {
      return acc + 0 + 3;
    }
  } else if (paper.includes(game[0])) {
    if (rock.includes(game[1])) {
      return acc + 0 + 1;
    } else if (paper.includes(game[1])) {
      return acc + 3 + 2;
    } else if (scissors.includes(game[1])) {
      return acc + 6 + 3;
    }
  } else if (scissors.includes(game[0])) {
    if (rock.includes(game[1])) {
      return acc + 6 + 1;
    } else if (paper.includes(game[1])) {
      return acc + 0 + 2;
    } else if (scissors.includes(game[1])) {
      return acc + 3 + 3;
    }
  }
}, 0);

console.log(`Part 1: ${part1}`);

const part2 = input.reduce((acc, game) => {
  switch (game[0]) {
    case "A": //opponent rock
      switch (game[1]) {
        case "X": // lose
          return acc + 0 + 3;
        case "Y": // draw
          return acc + 3 + 1;
        case "Z": // win
          return acc + 6 + 2;
      }
    case "B": //opponent paper
      switch (game[1]) {
        case "X": // lose
          return acc + 0 + 1;
        case "Y": // draw
          return acc + 3 + 2;
        case "Z": // win
          return acc + 6 + 3;
      }
    case "C": //opponent scissors
      switch (game[1]) {
        case "X": // lose
          return acc + 0 + 2;
        case "Y": // draw
          return acc + 3 + 3;
        case "Z": // win
          return acc + 6 + 1;
      }
  }
}, 0);

console.log(`Part 2: ${part2}`);
