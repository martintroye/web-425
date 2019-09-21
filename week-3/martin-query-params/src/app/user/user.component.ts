/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 09/20/2019
; Modified By: Troy Martin
; Description: Passing Data to Routes
;===========================================
*/
// start program

// import the angular core module
import { Component, OnInit } from "@angular/core";
// import the angular router module
import { ActivatedRoute } from "@angular/router";

// declare the component
@Component({
  // declare the selector to output the template
  selector: "app-user",
  // declare the HTML template
  template: `
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2>These are the details for User ID {{ userId }}.</h2>
      </div>
    </div>
  `,
  // declare the styles for the template
  styles: [
    `
      .container {
        margin: 5rem auto;
      }
      h2 {
        color: green;
      }
    `
  ]
})
// declare and export the user component
export class UserComponent implements OnInit {
  // declare the user id property
  userId: string;

  // constructor for the class, inject the active route
  constructor(route: ActivatedRoute) {
    // set the user id proper to the id parameter
    this.userId = route.snapshot.paramMap.get("id");
  }

  // method from the OnInit
  ngOnInit() {}
}
// end program
