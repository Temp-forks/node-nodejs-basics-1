import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = './files';
const file = 'fileToRead.txt';

export const read = async () => {
  // Write your code here
  const readStream = createReadStream(path.resolve(__dirname, filesPath, file));
  readStream.pipe(process.stdout);
};

read();
