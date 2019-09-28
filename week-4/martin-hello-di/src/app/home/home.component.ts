/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Inversion of Control and Dependency Injection
;===========================================
*/
// import angular core module
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the component
  selector: 'app-home',
  // declare the inline HTML template
  template: `
    <div class="container d-flex justify-content-center">
      <h2>You have landed on the Home page!</h2>
    </div>
  `,
  // declare the inline styles for the component
  styles: [
    `
    h2{
      color: red;
    }
    .container{
      padding-top:4rem;
    }
    `
  ]
})
// declare and export the class
export class HomeComponent implements OnInit {
  // empty constructor
  constructor() {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Method to initialize from OnInit
  */
  ngOnInit() {}
}

// end program
