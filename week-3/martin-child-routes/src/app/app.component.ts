/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 09/21/2019
; Modified By: Troy Martin
; Description: Child Routes
;===========================================
*/
// start program

// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // declare the selector to output the component
  selector: 'app-root',
  // declare the HTML template file
  templateUrl: './app.component.html',
  // declare the external CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the component class
export class AppComponent {
  // declare the product id property and set a default value
  productId = 54321;
  // declare the active path in the nav bar and set its initial value
  activePath = 'home';

  /*
  ; Params: path: string
  ; Response: none
  ; Description: sets the active path from the navbar
  */
  setActive(path: string){
    // set the active path property
    this.activePath = path;
  }
}

// end program

