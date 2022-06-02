import path from 'path';
import { rm } from 'fs/promises';
import { checkFileExist, getDirName } from './utils.js';

const __dirname = getDirName(import.meta.url);

const fileName = 'fileToRemove.txt';
const filesPath = './files';
const errorMessage = 'FS operation failed';

export const remove = async () => {
  // Write your code here
  const filePath = path.resolve(__dirname, filesPath, fileName);
  const isFileExist = await checkFileExist(filePath);

  if (!isFileExist) throw new Error(errorMessage);

  await rm(filePath);
};
