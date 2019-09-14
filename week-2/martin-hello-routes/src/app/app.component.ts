/*
============================================
; Title: Assignment 2.4
; Author: Troy Martin
; Date: 09/14/2019
; Modified By: Troy Martin
; Description: Routing in Action
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
// declare and export the component class
export class AppComponent {
  // declare the title property and set a default value
  title = 'martin-hello-routes';
}

// end program
