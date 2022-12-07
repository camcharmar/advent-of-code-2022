export default (parsedInput) => {
  let runningTotal = 0;
  const findTotalSize = (directory) => {
    let dirSize = 0;

    for (let file in directory.files) {
      dirSize += Number(directory.files[file]);
    }

    for (let subDir in directory.directories) {
      let subDirSize = findTotalSize(directory.directories[subDir]);
      if (subDirSize <= 100000) {
        runningTotal += subDirSize;
      }
      dirSize += subDirSize;
    }
    return dirSize;
  };
  findTotalSize(parsedInput);
  return runningTotal;
};
