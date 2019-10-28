/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import express module aliased as express
import * as express from 'express';

// import the customer account model
import customerAccountModel = require('../models/customer-account-model');

// declare and export the account controller class
export class AccountsController {
  // declare the model and set it to the customerAccountModel document
  model = customerAccountModel;

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() {
  }

  /*
  ; Params: req: express.Request, res: express.Response
  ; Response: none
  ; Description: Retrieve a CustomerAccount using the user name
  */
  getAccountByUser(req: express.Request, res: express.Response) {
    // get the username request parameter
    const userNameValue = req.params.username;
    // build the mongodb query to retrieve an account by contact user name
    const query = { 'contacts.user.userName': userNameValue };
    // using the customer account model find the matching document
    this.model.findOne(query, (err, result) => {
      // if there is not an error handle send the results as json
      if (!err) {
        res.send(result.toJSON());
      } else if (res === null) {
        // the response was null so the account was not found
        res.status(401).send('oops, we could not find an account for the user');
      } else {
        // there was an error with the request
        res.status(400).send(err);
      }
    });
  }
}
