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
import { MongoDbConnection } from '../dataAccess/mongo-db-connection';

export class AccountsController {

  accountRepository: MongoDbConnection;

  constructor() {
    this.accountRepository = new MongoDbConnection();
  }

  getAccountById(request: express.Request, response: express.Response) {
    throw new Error('Method not implemented.');
  }

  getAllAccounts(request: express.Request, response: express.Response) {
    throw new Error('Method not implemented.');
  }

  createAccount(request: express.Request, response: express.Response) {
    throw new Error('Method not implemented.');
  }

  updateAccount(request: express.Request, response: express.Response) {
    throw new Error('Method not implemented.');
  }

}
