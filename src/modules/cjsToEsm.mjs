import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
  // import('./files/a.json', { // ! ***
  //   assert: { type: 'json' },
  // })
  //   .then((module) => (unknownObject = module.default))
  //   .catch((err) => console.log(err));
} else {
  unknownObject = require('./files/a.json');
  // import('./files/b.json', { // ! ***
  //   assert: { type: 'json' },
  // })
  //   .then((module) => (unknownObject = module.default))
  //   .catch((err) => console.log(err));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };
