export default (parsedInput) => {
  const scenicScore = (x, y) => {
    const height = parsedInput[y][x];
    // Top
    let topScore = 0;
    for (let i = y - 1; i >= 0; i--) {
      topScore++;
      if (parsedInput[i][x] >= height) {
        break;
      }
    }
    // Bottom
    let bottomScore = 0;
    for (let i = y + 1; i < parsedInput.length; i++) {
      bottomScore++;
      if (parsedInput[i][x] >= height) {
        break;
      }
    }
    // Left
    let leftScore = 0;
    for (let i = x - 1; i >= 0; i--) {
      leftScore++;
      if (parsedInput[y][i] >= height) {
        break;
      }
    }
    // Bottom
    let rightScore = 0;
    for (let i = x + 1; i < parsedInput[y].length; i++) {
      rightScore++;
      if (parsedInput[y][i] >= height) {
        break;
      }
    }

    return topScore * bottomScore * leftScore * rightScore;
  };

  let maxScore = 0;
  for (let i = 0; i < parsedInput.length; i++) {
    for (let j = 0; j < parsedInput[i].length; j++) {
      maxScore = Math.max(scenicScore(j, i), maxScore);
    }
  }
  return maxScore;
};
