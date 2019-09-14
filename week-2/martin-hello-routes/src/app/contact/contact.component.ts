/*
============================================
; Title: Assignment 2.4
; Author: Troy Martin
; Date: 09/14/2019
; Modified By: Troy Martin
; Description: Routing in Action
;===========================================
*/
// start program

// import the angular core module
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the template
  selector: 'app-contact',
  // declare the inline HTML template
  template: `
  <div class="container">
    <div class="row justify-content-center">
      <h2>You have landed on the Contact page!</h2>
    </div>
  </div>
`,
  // declare the inline styles
  styles: [`
  h2{
    color: blue;
  }
  .container{
    margin-top: 4rem;
  }

`]
})
// declare and export the component class, implementing an interface
export class ContactComponent implements OnInit {

  // class constructor
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Required from implementation of OnInit
  */
  ngOnInit() {
  }

}

// end program

