/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/25/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import express module and alias as express
import * as express from 'express';
// import the mongodb connection helper
import { MongoDbConnection } from './dataAccess/mongo-db-connection';
// import the user router
import { UsersRouter } from './routers/users-router';

// declare the express application
const app = express();
// create the mongodb connection helper
const mongoDbConnection = new MongoDbConnection();
// connect to the mongodb database
mongoDbConnection.connect();

// create the router for accounts
const users = new UsersRouter();
// use the router to apply user routes to the api prefix
app.use('/api', users.routes);

// declare the server and start the app on a specific port and host
const server = app.listen(3000, 'localhost', () => {
  // use the log method to output a message
  console.log('Listening on port 3000');
});



