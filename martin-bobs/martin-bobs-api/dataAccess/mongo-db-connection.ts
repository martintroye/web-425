/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import the mongoose module and alias it as mongoose
import * as mongoose from 'mongoose';

// declare and export the class
export class MongoDbConnection {
  // set the connection string to the mongodb database
  mongoDB = 'mongodb+srv://sa:qWVNk4b7XRPE611Q@buwebdev-cluster-1-opi0o.mongodb.net/bobs-computer-repair?retryWrites=true';
  // declare the mongodb connection
  db: mongoose.Connection;

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() {

  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Create the connection to the MongoDB
  */
  connect() {
    // Call Mongoose connect function passing the connection string
    mongoose.connect(this.mongoDB, {
      // Error The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
      // useMongoClient: true
    });

    // Set the promise the global promise
    require('mongoose').Promise = global.Promise;

    // Get the default connection
    this.db = mongoose.connection;

    this.db.on(
      'error',
      console.error.bind(console, 'MongoDB connection error: ')
    );

    // Set the open event on the db
    this.db.on('open', () => {
      // Call the log function to output the message
      console.log('Application connected to mLab MongoDB instance.');
    });
  }
}
