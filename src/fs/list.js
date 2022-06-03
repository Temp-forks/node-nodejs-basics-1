import path from 'path';
import { stat, readdir } from 'fs/promises';
import { checkDirectoryExist, getDirName } from './utils.js';

const __dirname = getDirName(import.meta.url);

const dirName = 'files';
const errorMessage = 'FS operation failed';

const getFilesFromDir = async (dirPath) => {
  const filesNameArray = await readdir(dirPath);

  const checkedArray = await Promise.all(
    filesNameArray.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const stats = await stat(filePath);
      const isDirectory = stats.isDirectory();

      if (isDirectory) {
        const filesArray = await getFilesFromDir(filePath);
        return filesArray;
      }
      return fileName;
    })
  );

  return checkedArray.flat(Infinity);
};

export const list = async () => {
  // Write your code here
  const dirPath = path.resolve(__dirname, dirName);
  const isDirectory = await checkDirectoryExist(dirPath);
  if (!isDirectory) throw new Error(errorMessage);

  const filesNameArray = await getFilesFromDir(dirPath);
  console.log(filesNameArray);
};
