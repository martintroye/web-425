/*
============================================
; Title: Exercise 4.3
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Handling Form Events with Observables
;===========================================
*/
// import the core angular module
import { Component } from '@angular/core';
// import the form control angular module
import { FormControl } from '@angular/forms';

// declare the component
@Component({
  // declare the selector for outputting the component
  selector: 'app-root',
  // declare the HTML template file
  templateUrl: './app.component.html',
  // declare the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the class
export class AppComponent {
  // declare the property and set its default value
  searchInput: FormControl = new FormControl();
  // declare the property specifying its type
  convertedStockPrice: string;

  /*
  ; Params: none
  ; Response: none
  ; Description: Constructor to initialize the class
  */
  constructor() {
    // subscribe to the valueChanges of the searchInput form control
    this.searchInput.valueChanges.subscribe(stock => {
      // call the method to get and set the stock price passing the result of the subscription
      this.getStockPriceFromServer(stock);
    });
  }

  /*
  ; Params: stock: string
  ; Response: none
  ; Description: Using the stock argument set the convertedStockPrice message
  */
  getStockPriceFromServer(stock: string) {
    // calculate a random stock price
    const stockPrice = (Math.random() * 200).toFixed(4);
    // set the converted stock price message to display
    this.convertedStockPrice = `The converted price of stock ${stock} is ${stockPrice}`;
  }
}

// end program
