/*
============================================
; Title: Exercise 5.3
; Author: Troy Martin
; Date: 10/04/2019
; Modified By: Troy Martin
; Description: Material Cards
;===========================================
*/
// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component HTML
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare the title property and set the default value
  title = 'Martin Exercise 5.3';
}
