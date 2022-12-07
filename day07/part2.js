export default (parsedInput) => {
  let dirSizeList = [];
  const findTotalSize = (directory) => {
    let dirSize = 0;

    for (let file in directory.files) {
      dirSize += Number(directory.files[file]);
    }

    for (let subDir in directory.directories) {
      dirSize += findTotalSize(directory.directories[subDir]);
    }
    dirSizeList.push(dirSize);
    return dirSize;
  };
  let unusedSpace = 70000000 - findTotalSize(parsedInput);

  return dirSizeList
    .sort((a, b) => a - b)
    .find((size) => size > 30000000 - unusedSpace);
};
