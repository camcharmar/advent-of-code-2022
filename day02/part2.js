export default (parsedInput) => {
  return parsedInput.reduce((acc, game) => {
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
};
