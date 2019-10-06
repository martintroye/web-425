/*
============================================
; Title: Exercise 5.4
; Author: Troy Martin
; Date: 10/05/2019
; Modified By: Troy Martin
; Description: Flex-Layout
;===========================================
*/

// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the output location for the component
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS template file
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare the title property and set the default value
  title = 'Martin Assignment 5.4';
}
