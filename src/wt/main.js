import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerFile = 'worker.js';
const numberFrom = 10;

const runWorker = async (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, workerFile), {
      workerData,
    });

    worker.on('message', (msg) => resolve({ status: 'resolved', data: msg }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

export const performCalculations = async () => {
  // Write your code here
  const cpus = os.cpus().length;
  const dataArray = [...Array(cpus)].map((_, index) => numberFrom + index);

  try {
    return await Promise.all(dataArray.map((data) => runWorker(data)));
  } catch (error) {
    console.log('ERROR performCalculations.', error);
  }
};

performCalculations().then((res) => console.log(res));
