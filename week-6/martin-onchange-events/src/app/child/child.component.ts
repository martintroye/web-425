/*
============================================
; Title: Assignment 6.4
; Author: Troy Martin
; Date: 10/12/2019
; Modified By: Troy Martin
; Description: OnChange() Events
;===========================================
*/

// imports from angular core module
import { Component, OnInit, Input } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-child',
  // defined the inline HTML template
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greetings: {{greeting}}</div>
      <div>User: {{user.name}}</div>
    </div>
  `,
  // define the inline CSS for the component
  styles: [
    `
      .child{
        background-color: lightgray;
        padding: 5px;
      }
    `
  ]
})
// declare and export the component class
export class ChildComponent implements OnInit {

  // define the greeting property as an input for the component
  @Input() greeting: string;
  // define the user property as an input for the component
  @Input() user: {name: string};

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor for the class
  */
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
  }

}
