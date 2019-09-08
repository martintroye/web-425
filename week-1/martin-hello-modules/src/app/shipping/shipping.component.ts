/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 09/08/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/

// import the angular core module
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // declare the selector used to output the view
  selector: 'app-shipping',
  // define the template for the component
  template: `
    <p>
      This is the shipping component!
    </p>
  `,
  // define inline styles for the component
  styles: []
})
// declare and export the shipping component class, implements the OnInit interface
export class ShippingComponent implements OnInit {

  // default constructor for the component
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Logic to initialize the component, required by implementing OnInit interface
  */
  ngOnInit() {
  }

}
