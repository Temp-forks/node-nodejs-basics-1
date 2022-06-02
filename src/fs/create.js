import path from 'path';
import { writeFile } from 'fs/promises';
import { getDirName, checkFileExist } from './utils.js';

const __dirname = getDirName(import.meta.url);

const defaultFileName = 'fresh.txt';
const filesPath = './files';
const defaultContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';

export const create = async () => {
  // Write your code here
  const filePath = path.resolve(__dirname, filesPath, defaultFileName);

  let isFileExist = await checkFileExist(filePath);

  if (isFileExist) throw new Error(errorMessage);

  await writeFile(filePath, defaultContent, { encoding: 'utf-8' });
};

create();
