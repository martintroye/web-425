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
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// imports from the rxjs module
import { interval } from 'rxjs';

// import our custom price quote interface
import { PriceQuote } from './price-quote';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-price-quote',
  // define the inline HTML template for the component
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{priceQuote.stockSymbol}}
      {{priceQuote.lastPrice | currency: 'USD'}}
    </strong>
  `,
  // define the inline CSS for the component
  styles: [
    `
    :host {
      background-color: lightgray;
    }
    `
  ]
})
// declare and export the component class
export class PriceQuoteComponent implements OnInit {

  // declare the lastPrice property as an output for the component
  @Output() lastPrice = new EventEmitter<PriceQuote>();

  // declare the price quote property
  priceQuote: PriceQuote;

  /*
  ; Params: none
  ; Response: none
  ; Description: Class constructor
  */
  constructor() {
    // Create an observable that emits a number on a set interval
    interval(2000).subscribe(data => {
      // set the price quote property to a new stock price
      this.priceQuote = {
        stockSymbol: 'WERN',
        lastPrice: 100 * Math.random()
      };

      // emit the new price quote
      this.lastPrice.emit(this.priceQuote);
    });
   }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
  }

}
