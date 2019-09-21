/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 09/20/2019
; Modified By: Troy Martin
; Description: Passing Data to Routes
;===========================================
*/
// start program

// import the angular core module
import { Component, OnInit } from "@angular/core";

// declare the component
@Component({
  // declare the selector to output the template
  selector: "app-home",
  // declare the HTML template
  template: `
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2>You have reached the Home page.</h2>
      </div>
    </div>
  `,
  // declare the styles for the template
  styles: [
    `
      .container {
        margin: 5rem auto;
      }
      h2 {
        color: blue;
      }
    `
  ]
})
// declare and export the home component
export class HomeComponent implements OnInit {
  // constructor for the class, inject the active route
  constructor() {}

  // method from the OnInit
  ngOnInit() {}
}
// end program
