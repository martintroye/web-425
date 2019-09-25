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
// import the angular forms module
import { FormControl } from '@angular/forms';

// define the component
@Component({
  // define the selector to output the component
  selector: 'app-product',
  // define the inline HTML template
  template: `
    <div class="container justify-content-center">
      <h1>Product component</h1>
      <p>
        <input
          type="text"
          class="form-control"
          [formControl]="name"
          placeholder="Enter your name"
        />
      </p>
    </div>
  `,
  // define the inline css styles
  styles: [
    `
      .container {
        padding-top: 4rem;
      }
      h1 {
        color: blue;
      }
    `
  ]
})
// define and export the component class
export class ProductComponent implements OnInit {
  // define the name property and set it to a new form control
  name: FormControl = new FormControl();

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
