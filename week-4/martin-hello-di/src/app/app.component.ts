/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Inversion of Control and Dependency Injection
;===========================================
*/
// import angular core module
import { Component } from '@angular/core';

// declare component
@Component({
  // declare the selector to output the component
  selector: 'app-root',
  // declare the HTML template file
  templateUrl: './app.component.html',
  // declare the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the class
export class AppComponent {
  // declare a property and initialize
  title = 'martin-hello-di';
}

// end program
