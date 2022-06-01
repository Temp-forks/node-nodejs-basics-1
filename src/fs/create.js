import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { writeFile, stat } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const defaultFileName = 'fresh.txt';
const defaultContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';

export const create = async () => {
  // Write your code here
  const newFilePath = path.resolve(__dirname, `./files/${defaultFileName}`);

  let isFileExist = false;
  try {
    const statObject = await stat(newFilePath);
    isFileExist = await statObject.isFile();
  } catch (error) {
    isFileExist = false;
  }

  if (isFileExist) {
    throw new Error(errorMessage);
  }
  await writeFile(newFilePath, defaultContent, { encoding: 'utf-8' });
};
