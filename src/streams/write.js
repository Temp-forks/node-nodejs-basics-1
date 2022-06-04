import path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = './files';
const file = 'fileToWrite.txt';

export const write = async () => {
  // Write your code here
  const writeStream = createWriteStream(path.resolve(__dirname, filesPath, file));
  process.stdin.pipe(writeStream);
};
