import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = './files';
const script = 'script.js';

export const spawnChildProcess = async (args) => {
  // Write your code here
  const child = spawn('node', [path.resolve(__dirname, filesPath, script), args]);

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  child.stdout.pipe(process.stdout);

  process.stdin.pipe(child.stdin);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
