const priority = (letter) =>
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .indexOf(letter) + 1;

export default (parsedInput) => {
  return parsedInput.reduce((acc, _, i) => {
    if (i % 3 !== 0) return acc;
    const one = parsedInput[i].split("");
    const two = parsedInput[i + 1].split("");
    const three = parsedInput[i + 2].split("");

    const common = one.find(
      (item) => two.includes(item) && three.includes(item)
    );
    return acc + priority(common);
  }, 0);
};
