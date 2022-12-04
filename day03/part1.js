const priority = (letter) =>
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .indexOf(letter) + 1;

export default (parsedInput) => {
  return parsedInput.reduce((acc, sack) => {
    const one = sack.substring(0, sack.length / 2).split("");
    const two = sack.substring(sack.length / 2).split("");

    const common = one.find((item) => two.includes(item));
    return acc + priority(common);
  }, 0);
};
