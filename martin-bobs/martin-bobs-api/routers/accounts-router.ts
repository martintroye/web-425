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
import { AccountsController } from '../controllers/accounts-controller';

export class AccountsRouter {
  private controller = new AccountsController();
  router = express.Router();

  constructor() {
    this.router.post('accounts', this.controller.createAccount);
    this.router.get('accounts', this.controller.getAllAccounts);
    this.router.get('accounts/:id', this.controller.getAccountById);
    this.router.put('accounts/:id', this.controller.updateAccount);
  }



}


