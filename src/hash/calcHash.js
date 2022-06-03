import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const filesPath = './files';
const file = 'fileToCalculateHashFor.txt';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const calculateHash = async () => {
  // Write your code here
  const hash = createHash('sha256');

  const content = await readFile(path.resolve(__dirname, filesPath, file));
  hash.update(content);
  return hash.digest('hex');
};

// calculateHash().then((hex) => console.log('hex=', hex)); // ! ***
