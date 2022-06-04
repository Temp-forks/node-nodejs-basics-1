import { pipeline, Transform } from 'stream';

const readStream = process.stdin;
const writeStream = process.stdout;
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString().trim();
    const newChunk = chunkStringified.split('').reverse().join('');
    this.push(newChunk + '\n');
    callback();
  },
});

export const transform = async () => {
  // Write your code here
  pipeline(readStream, transformStream, writeStream, (error) => console.log(`ERROR: ${error}`));
};
