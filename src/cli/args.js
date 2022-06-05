const keyReg = /^--\w+/;

export const parseArgs = () => {
  // Write your code here
  const argsArray = process.argv.slice(2).reduce((accArray, arg) => {
    if (arg.match(keyReg)) {
      accArray.push([arg, '']);
    } else if (accArray.length) {
      const entry = accArray[accArray.length - 1];
      entry[1] = `${entry[1]} ${arg}`;
    }
    return accArray;
  }, []);

  const array = argsArray.map((entry) => `${entry[0].slice(2)} is${entry[1]}`);
  console.log(array.join(', '));
};

parseArgs();
