/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/
import * as express from 'express';
import customerAccountModel = require('../models/customer-account-model');

export class AccountsController {
  model = customerAccountModel;

  constructor() {
  }

  getAccountByUser(req: express.Request, res: express.Response) {
    const userNameValue = req.params.username;
    const query = { 'contacts.user.userName': userNameValue };
    this.model.findOne(query, (err, result) => {
      if (!err) {
        res.send(result.toJSON());
      } else if (res === null) {
        res.status(401).send('oops, we could not find the user');
      } else {
        res.status(400).send(err);
      }
    });
  }
}
