/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 09/08/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/

// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the selector for the component output
  selector: 'app-root',
  // define the template file used for the HTML
  templateUrl: './app.component.html',
  // define the external CSS file for the component
  styleUrls: ['./app.component.css']
})
// define and export the app component class
export class AppComponent {
  // declare and set the title property of the app component class
  title = 'martin-hello-modules';
}
