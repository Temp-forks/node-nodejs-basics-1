import { pipeline, Transform } from 'stream';

export const transform = async () => {
  // Write your code here
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
  pipeline(readStream, transformStream, writeStream, (error) => console.log(`ERROR: ${error}`));
};

transform();
