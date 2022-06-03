import path from 'path';
import { readFile } from 'fs/promises';
import { checkFileExist, getDirName } from './utils.js';

const __dirname = getDirName(import.meta.url);

const filesPath = './files';
const filename = 'fileToRead.txt';
const errorMessage = 'FS operation failed';

export const read = async () => {
  // Write your code here
  const filePath = path.resolve(__dirname, filesPath, filename);
  const isFileExist = await checkFileExist(filePath);

  if (!isFileExist) throw new Error(errorMessage);

  const content = await readFile(filePath, { encoding: 'utf-8' });
  console.log(content);
};

read();
