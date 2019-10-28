/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import the express module and alias as express
import * as express from 'express';
// import the accounts controller module
import { AccountsController } from '../controllers/accounts-controller';

// declare and export the class
export class UsersRouter {
  // declare routes and set to a default express Router
  routes = express.Router();

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() {
    // call the setRoutes method to initialize the routes
    this.setRoutes();
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the user routes
  */
  setRoutes() {
    // create a local instance of the controller
    const controller = new AccountsController();

    // declare a error response for an empty route
    this.routes.get('/', (req, res) => {
      res.status(400).send('Bobs Computer Repair Shop API');
    });

    // GET user accounts by user name, calls the getAccountsByUser method on the controller
    // .bind to maintain this context of the controller method
    this.routes.get('/users/:username/accounts', controller.getAccountByUser.bind(controller));
  }
}


