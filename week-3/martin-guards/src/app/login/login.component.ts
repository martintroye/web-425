/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 09/24/2019
; Modified By: Troy Martin
; Description: Guarding Routes
;===========================================
*/
// start program

// import the core angular module
import { Component, OnInit } from '@angular/core';

// define the component
@Component({
  // define the selector to output the component
  selector: 'app-login',
  // define the inline HTML template
  template: `
    <div class="container d-flex justify-content-center">
      <h1>Login here</h1>
    </div>
  `,
  // define the inline css styles
  styles: [
    `
      .container {
        padding-top: 4rem;
      }
      h1 {
        color: red;
      }
    `
  ]
})
// define and export the component class
export class LoginComponent implements OnInit {
  // define the class constructor
  constructor() {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {}
}

// end the program
