/*
============================================
; Title: Exercise 6.2
; Author: Troy Martin
; Date: 10/10/2019
; Modified By: Troy Martin
; Description: Input Properties
;===========================================
*/
// imports from the angular core modules
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare and set the default value for the title property
  title = 'Input properties example';

  // declare the stock property
  stock: string;
  // declare a read only number of shares property and set the default value
  readonly numberOfShares = 100;

  /*
  ; Params: {target}: object binds to the target of an event
  ; Response: none
  ; Description: Set the stock property to the value of the input as it changes
  */
  onChangeEvent({ target }): void {
    // set the stock property to the value of the input
    this.stock = target.value;
  }
}
