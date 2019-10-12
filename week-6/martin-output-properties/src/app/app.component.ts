/*
============================================
; Title: Exercise 6.3
; Author: Troy Martin
; Date: 10/11/2019
; Modified By: Troy Martin
; Description: Output Properties
;===========================================
*/
// imports from the angular core module
import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-root',
  // define the HTML template file for the component
  templateUrl: './app.component.html',
  // define the CSS file for the component
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // define and set the default title property
  title = 'Output properties';

  // declare the priceQuote property
  priceQuote: PriceQuote;

  /*
  ; Params: event: PriceQuote
  ; Response: none
  ; Description: Function to receive and set the local price quote
  */
  priceQuoteHandler(event: PriceQuote) {
    // set the components price quote property to the incoming price quote
    this.priceQuote = event;
  }

}
