const inputString = `real`;

const testString = `test`;

export default (isTest = false) =>
  (isTest ? testString : inputString).split("\n");
