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
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the template
  selector: 'app-e404',
  // declare the HTML template
  template: `
  <div class="container">
    <div class="d-flex justify-content-center">
      <h2>Error 404, Page Not Found</h2>
    </div>
  </div>
`,
// declare the styles for the template
styles: [
  ` .container{
      margin: 5rem auto;
    }
    h2{
      color: red;
    }
  `]
})
// declare and export the component, implementing the interface
export class E404Component implements OnInit {

  // declare the constructor for the class
  constructor() { }

  // method from the OnInit
  ngOnInit() {
  }

}

// end of program
