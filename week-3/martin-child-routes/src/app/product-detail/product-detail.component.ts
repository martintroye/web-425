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
  selector: "app-product-detail",
  // declare the HTML template
  template: `
    <div class="container">
      <h1>Product Detail for {{ productId }}</h1>
      <router-outlet></router-outlet>
      <p>
        <a
          *ngIf="displayProductDescription"
          [routerLink]="['./seller', sellerId]"
          (click)="displayProduct(false)"
          >Seller Info</a
        >
        <a
          *ngIf="!displayProductDescription"
          [routerLink]="['./']"
          (click)="displayProduct(true)"
          >Product Description</a
        >
      </p>
    </div>
  `,
  // declare the inline styles for the component
  styles: [
    `
      h1 {
        color: blue;
      }
      .container {
        padding-top: 4rem;
      }
    `
  ]
})
// declare and export the product detail component class
export class ProductDetailComponent implements OnInit {
  // declare the product id
  productId: string;
  // declare the seller id and set default value
  sellerId = "1234";
  // declare property to track the active link
  displayProductDescription = true;

  /*
  ; Params: route: ActivatedRoute
  ; Response: none
  ; Description: Constructor
  */
  constructor(route: ActivatedRoute) {
    // set the product id property using the id param from the current route
    this.productId = route.snapshot.paramMap.get("id");
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Method to called on initialization, from OnInit interface
  */
  ngOnInit() {}

  /*
  ; Params: display: boolean
  ; Response: none
  ; Description: Set the display value to control links
  */
  displayProduct(display: boolean) {
    // set the display property
    this.displayProductDescription = display;
  }
}
