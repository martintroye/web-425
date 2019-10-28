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

export class UsersRouter {
  routes = express.Router();

  constructor() {
    this.setRoutes();
  }

  setRoutes() {
    const controller = new AccountsController();

    this.routes.get('/', (req, res) => {
      res.send('Bobs Computer Repair Shop API');
    });

    this.routes.get('/users/:username/accounts', controller.getAccountByUser.bind(controller));
  }
}


