export default (parsedInput) => {
  const isVisible = (x, y) => {
    const height = parsedInput[y][x];
    // Top
    let topBlocked = false;
    for (let i = 0; i < y; i++) {
      if (parsedInput[i][x] >= height) {
        topBlocked = true;
        break;
      }
    }
    // Bottom
    let bottomBlocked = false;
    for (let i = parsedInput.length - 1; i > y; i--) {
      if (parsedInput[i][x] >= height) {
        bottomBlocked = true;
        break;
      }
    }
    // Left
    let leftBlocked = false;
    for (let i = 0; i < x; i++) {
      if (parsedInput[y][i] >= height) {
        leftBlocked = true;
        break;
      }
    }
    // Bottom
    let rightBlocked = false;
    for (let i = parsedInput[y].length - 1; i > x; i--) {
      if (parsedInput[y][i] >= height) {
        rightBlocked = true;
        break;
      }
    }

    return !topBlocked || !bottomBlocked || !leftBlocked || !rightBlocked;
  };

  let visibility = new Array(parsedInput.length).fill([]);
  const val = parsedInput.reduce((acc, row, y) => {
    return row.reduce((sum, tree, x) => {
      visibility[y][x] = isVisible(x, y);
      return sum + (isVisible(x, y) ? 1 : 0);
    }, acc);
  }, 0);
  return val;
};
