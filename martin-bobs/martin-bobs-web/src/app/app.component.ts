/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the component
  selector: 'app-root',
  // define the template file for the HTML file
  templateUrl: './app.component.html',
  // define the CSS file
  styleUrls: ['./app.component.scss']
})
// declare and export the component class
export class AppComponent {
  title = 'Bob\'s Computer Repair Shop';
}
