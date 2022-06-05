import { workerData, parentPort } from 'worker_threads';

let result = '';

export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(result);
};

const n = +workerData;
if (typeof n === 'number') {
  result = nthFibonacci(n);
  sendResult();
} else {
  throw new Error('Data is not a number');
}
