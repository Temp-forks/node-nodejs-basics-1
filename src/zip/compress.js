import { createGzip } from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = './files';
const file = 'fileToCompress.txt';
const archiveFile = 'archive.gz';

export const compress = async () => {
  // Write your code here
  const readStream = createReadStream(path.resolve(__dirname, filesPath, file));
  const writeStream = createWriteStream(path.resolve(__dirname, filesPath, archiveFile));
  const gzipSteam = createGzip();

  pipeline(readStream, gzipSteam, writeStream, (error) => {
    if (error) console.error('ERROR: ', error);
    else console.log('compress OK!');
    process.exitCode = 1;
  });
};
