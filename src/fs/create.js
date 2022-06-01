import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const defaultFileName = 'fresh.txt';
const defaultContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';

export const create = async () => {
  // Write your code here
  const newFilePath = path.resolve(__dirname, `./files/${defaultFileName}`);
  try {
    await access(newFilePath, constants.F_OK);
  } catch (error) {
    await writeFile(newFilePath, defaultContent, { encoding: 'utf-8' });
    return;
  }
  throw new Error(errorMessage);
};
