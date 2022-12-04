const rock = ["X", "A"];
const paper = ["Y", "B"];
const scissors = ["Z", "C"];

export default (parsedInput) => {
  return parsedInput.reduce((acc, game) => {
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
};
