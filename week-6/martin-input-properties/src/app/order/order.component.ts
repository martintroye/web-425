/*
============================================
; Title: Exercise 6.2
; Author: Troy Martin
; Date: 10/10/2019
; Modified By: Troy Martin
; Description: Input Properties
;===========================================
*/

// import the angular core modules
import { Component, OnInit, Input } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-order',
  // define the inline HTML template for the component
  template: `
  <h4 *ngIf="stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  // define the inline CSS for the component
  styles: [`

  h4{
    padding-top:1rem;
    color: darkblue;
    font-family: Roboto,"Helvetica Neue",sans-serif !important;
  }

  `]
})
// declare and export the component class
export class OrderComponent implements OnInit {

  // declare the stock symbol Input property
  @Input() stockSymbol: string;
  // declare the quantity Input property,
  @Input() quantity: number;

  /*
  ; Params: none
  ; Response: none
  ; Description: Class constructor
  */
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
  }

}
