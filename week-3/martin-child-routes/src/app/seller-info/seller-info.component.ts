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
import { Component, OnInit } from "@angular/core";
// import the angular router module
import { ActivatedRoute } from "@angular/router";

// declare the component
@Component({
  // declare the selector for output
  selector: "app-seller-info",
  // declare the HTML template
  template: `
    The seller Fred Flintstone, id {{ sellerId }}
  `,
  // declare the inline styles for the component
  styles: [
    `
      :host {
        background: yellow;
        padding: 4px;
      }
    `
  ]
})
// declare and export the seller info component
export class SellerInfoComponent implements OnInit {
  // declare the seller id property
  sellerId: string;

  /*
  ; Params: route: ActivatedRoute
  ; Response: none
  ; Description: Constructor
  */
  constructor(route: ActivatedRoute) {
    // set the seller id property using the id param from the current route
    this.sellerId = route.snapshot.paramMap.get("id");
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Method to called on initialization, from OnInit interface
  */
  ngOnInit() {}
}

// end program
