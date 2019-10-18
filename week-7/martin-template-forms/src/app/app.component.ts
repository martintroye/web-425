/*
============================================
; Title: Exercise 7.2
; Author: Troy Martin
; Date: 10/18/2019
; Modified By: Troy Martin
; Description: Template-Driven Forms
;===========================================
*/

// imports from the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector used to output the component
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare and set the default title property
  title = 'Template-Driven Forms';
}
