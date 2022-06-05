import path from 'path';
import { stat, readdir, mkdir, copyFile } from 'fs/promises';
import { checkDirectoryExist, getDirName } from './utils.js';

const __dirname = getDirName(import.meta.url);

const sourceDirName = 'files';
const copyDirName = `${sourceDirName}_copy`;
const errorMessage = 'FS operation failed';

const copyDirectory = async (sourceDirPath, destinationDirPath) => {
  try {
    await mkdir(destinationDirPath);
    const filesArray = await readdir(sourceDirPath);
    await Promise.all(
      filesArray.map(async (fileName) => {
        const filePath = path.join(sourceDirPath, fileName);
        const destinationFilePath = path.join(destinationDirPath, fileName);
        const stats = await stat(filePath);
        const isDirectory = stats.isDirectory();

        if (isDirectory) {
          return copyDirectory(filePath, destinationFilePath);
        } else {
          return copyFile(filePath, destinationFilePath);
        }
      })
    );
  } catch (error) {
    console.log('ERROR: copyDirectory.');
    throw error;
  }
};

export const copy = async () => {
  // Write your code here
  const sourceDirPath = path.resolve(__dirname, sourceDirName);
  const isSourceDirectory = await checkDirectoryExist(sourceDirPath);
  if (!isSourceDirectory) throw new Error(errorMessage);

  const copyDirPath = path.resolve(__dirname, copyDirName);
  const isCopyDirectory = await checkDirectoryExist(copyDirPath);
  if (isCopyDirectory) throw new Error(errorMessage);

  await copyDirectory(sourceDirPath, copyDirPath);
};

copy();
