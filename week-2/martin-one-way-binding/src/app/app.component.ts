/*
============================================
; Title: Exercise 2.2
; Author: Troy Martin
; Date: 09/13/2019
; Modified By: Troy Martin
; Description: One-Way Binding
;===========================================
*/
// import the angular core module
import { Component } from '@angular/core';

// declare the component
@Component({
  // define the component selector
  selector: 'app-root',
  // define an inline HTML template
  template: `
    <h1>{{name}}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  // define inline styles
  styles: [`
    h1{
      color: #001cb8;
    }
  `]
})
// declare and export the AppComponent class
export class AppComponent {
  // variable declaration and assignment

  //declare the name property and set a default value
  name: string = 'Troy Martin';

  // function declaration

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Change the private name
  */
  changeName():void {
    this.name = "Martin, Troy E."
  }
}
// end program
