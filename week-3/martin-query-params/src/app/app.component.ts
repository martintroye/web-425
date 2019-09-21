/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 09/20/2019
; Modified By: Troy Martin
; Description: Passing Data to Routes
;===========================================
*/
// start program

// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the template
  selector: 'app-root',
  // declare the template file
  templateUrl: './app.component.html',
  // declare an array of style sheets for the component
  styleUrls: ['./app.component.css']
})
// declare and export the app component
export class AppComponent {
  // declare a title and set the default
  title = 'martin-query-params';
  // declare the user id property and set the default
  userId = 1098;
}

// end program
