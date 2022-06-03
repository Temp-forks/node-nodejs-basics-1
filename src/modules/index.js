import { unknownObject, createMyServer } from './cjsToEsm.mjs';

setTimeout(() => console.log('unknownObject=', unknownObject), 5);
createMyServer.listen(5000);
