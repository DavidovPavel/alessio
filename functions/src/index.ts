import * as functions from 'firebase-functions';
import * as path from 'path';

const app = require(path.resolve(__dirname, "../dist/alessio/server/main")).app;
export const universal = functions.https.onRequest(app());
