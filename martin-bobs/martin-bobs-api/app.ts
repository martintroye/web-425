/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/25/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import express
import * as express from 'express';
import { MongoDbConnection } from './dataAccess/mongo-db-connection';

// declare the express application
const app = express();
const mongoDbConnection = new MongoDbConnection();
mongoDbConnection.connect();

// declare the server and start the app on a specific port and host
const server = app.listen(3000, 'localhost', () => {
  // use the log method to output a message
  console.log('Listening on port 3000');
});



