import * as functions from 'firebase-functions';
import * as path from 'path';
import * as express from 'express';

const app = require(path.resolve(__dirname, "../dist/alessio/server/main")).app;

const appIt = app('it');
const appEn = app('en');

const server = express();
server.use('/it', appIt);
server.use('/en', appEn);
server.use('', appEn);

export const universal = functions.https.onRequest(server);
