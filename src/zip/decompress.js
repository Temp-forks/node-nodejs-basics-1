import { createUnzip } from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = './files';
const file = 'fileToCompress.txt';
const archiveFile = 'archive.gz';

export const decompress = async () => {
  // Write your code here
  const readStream = createReadStream(path.resolve(__dirname, filesPath, archiveFile));
  const writeStream = createWriteStream(path.resolve(__dirname, filesPath, file));
  const unzipSteam = createUnzip();

  pipeline(readStream, unzipSteam, writeStream, (error) => {
    if (error) console.error('ERROR: ', error);
    else console.log('unzip OK!');
    process.exitCode = 1;
  });
};
