const prefix = 'RSS_';

export const parseEnv = () => {
  // Write your code here
  const variableArray = Object.entries(process.env).filter((entry) => entry[0].indexOf(prefix) === 0);
  const array = variableArray.map((entry) => entry.join('='));
  console.log(array.join('; '));
};

parseEnv();

/*
  for check: 
  USER_ID=239482 USER_KEY=foobar RSS_name1=value1 RSS_name2=value2 node src/cli/env.js
*/
