import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stat } from 'fs/promises';

export const getDirName = (url) => dirname(fileURLToPath(import.meta.url));

export const checkFileExist = async (path) => {
  let isFileExist = false;
  try {
    const statObject = await stat(path);
    isFileExist = statObject.isFile();
  } catch (error) {
    isFileExist = false;
  }
  return isFileExist;
};

export const checkDirectoryExist = async (path) => {
  let isDirectoryExist = false;
  try {
    const statObject = await stat(path);
    isDirectoryExist = statObject.isDirectory();
  } catch (error) {
    isDirectoryExist = false;
  }
  return isDirectoryExist;
};
