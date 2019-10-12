/*
============================================
; Title: Assignment 6.4
; Author: Troy Martin
; Date: 10/12/2019
; Modified By: Troy Martin
; Description: OnChange() Events
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
  // declare the title property and set a default value
  title = 'OnChange() Events';

  // declare the myGreeting property and set the default value
  myGreeting = 'Ola';
  // declare the myUser property and set the default value
  myUser: {name: string} = {name: 'Troy'};

}
