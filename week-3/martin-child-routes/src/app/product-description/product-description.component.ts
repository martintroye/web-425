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
import { Component, OnInit } from "@angular/core";

// declare the component
@Component({
  // declare the selector for output
  selector: "app-product-description",
  // declare the HTML template
  template: `
    This is a great product!
  `,
  // declare the inline styles for the component
  styles: [
    `
      :host {
        background: green;
        color: white;
        padding: 4px;
      }
    `
  ]
})
// declare and export the product description component
export class ProductDescriptionComponent implements OnInit {
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
