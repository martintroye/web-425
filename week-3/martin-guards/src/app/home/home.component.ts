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
  selector: 'app-home',
  // define the inline HTML template
  template: `
    <div class="container d-flex justify-content-center">
      <h1>You have landed on the Home page</h1>
    </div>
  `,
  // define the inline css styles
  styles: [
    `
      .container {
        padding-top: 4rem;
      }
      h1 {
        color: green;
      }
    `
  ]
})
// define and export the component class
export class HomeComponent implements OnInit {
  // define the class constructor
  constructor() {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {}
}

// end program
