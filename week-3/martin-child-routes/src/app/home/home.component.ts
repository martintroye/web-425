/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 09/21/2019
; Modified By: Troy Martin
; Description: Child Routes
;===========================================
*/
// start program

// import the angular core module
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // declare the selector for output
  selector: 'app-home',
  // declare the HTML template
  template: `
    <div class="container d-flex justify-content-center">
      <h2>You have landed on the home page!</h2>
    </div>
  `,
  // declare the inline styles for the component
  styles: [    `
  .container{
    padding-top: 4rem;
  }
  h2{
    color: red;
  }

`]
})
// declare and export the home component
export class HomeComponent implements OnInit {
  /*
  ; Params: none
  ; Response: none
  ; Description: Constructor
  */
 constructor() {}

 /*
 ; Params: none
 ; Response: none
 ; Description: Method to called on initialization, from OnInit interface
 */
 ngOnInit() {}
}

// end program
