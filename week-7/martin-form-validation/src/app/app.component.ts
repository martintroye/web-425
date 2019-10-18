/*
============================================
; Title: Exercise 7.3
; Author: Troy Martin
; Date: 10/18/2019
; Modified By: Troy Martin
; Description: Form Validation
;===========================================
*/
// imports from the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS file for the component
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  title = 'Form Validation';
}
