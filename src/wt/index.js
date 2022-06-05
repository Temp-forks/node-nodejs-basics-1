import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = 'worker.js';

// console.log('INDEX');
const worker = new Worker(path.resolve(__dirname, file), { workerData: 10 });

worker.on('message', (msg) => {
  console.log('Message from worker:', msg);
});
