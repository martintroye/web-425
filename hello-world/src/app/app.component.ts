/*
============================================
; Title: Exercise 1.3
; Author: Troy Martin
; Date: 09/05/2019
; Modified By: Troy Martin
; Description: Angular CLI
;===========================================
*/

// import core angular module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector for the component output
  selector: 'app-root',
  // define the html template file
  templateUrl: './app.component.html',
  // define css extension for the component
  styleUrls: ['./app.component.css']
})
// export the component
export class AppComponent {
  // declare and set the title property of the component
  title = 'Hello World!';
}
