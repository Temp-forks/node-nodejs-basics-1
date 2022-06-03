import path from 'path';
import fsPromises from 'fs/promises';
import { checkFileExist, getDirName } from './utils.js';

const __dirname = getDirName(import.meta.url);

const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';
const filesPath = './files';
const errorMessage = 'FS operation failed';

export const rename = async () => {
  const oldFilePath = path.resolve(__dirname, filesPath, oldFileName);
  const isOldFileExist = await checkFileExist(oldFilePath);

  if (!isOldFileExist) throw new Error(errorMessage);

  const newFilePath = path.resolve(__dirname, filesPath, newFileName);
  const isNewFileExist = await checkFileExist(newFilePath);
  if (isNewFileExist) throw new Error(errorMessage);

  await fsPromises.rename(oldFilePath, newFilePath);
};
