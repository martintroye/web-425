/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 09/24/2019
; Modified By: Troy Martin
; Description: Guarding Routes
;===========================================
*/
// start program

// import the core angular module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector for the output of the component
  selector: 'app-root',
  // define the HTML template file
  templateUrl: './app.component.html',
  // define the CSS file for the component
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare the title property and set a default value
  title = 'martin-guards';
}

// end program
