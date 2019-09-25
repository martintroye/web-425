/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 09/24/2019
; Modified By: Troy Martin
; Description: Guarding Routes
;===========================================
*/
// start program

// import the angular core module
import { Injectable } from '@angular/core';
// import the angular router module
import { CanDeactivate, Router } from '@angular/router';

// import our custom product component
import { ProductComponent } from './product/product.component';

// declare the injectable
@Injectable()
// declare and export the class, implement the candeactivate<> route guard interface
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {
  // define the constructor for the class and inject a router
  constructor(private router: Router) {}

  /*
  ; Params: component: ProductComponent
  ; Response: boolean
  ; Description: If the name form control of the product component has be change warn the user
  */
  canDeactivate(component: ProductComponent) {
    // if the name form control of the component has changes
    if (component.name.dirty) {
      // using the window confirm function get the response to allow the navigation
      return window.confirm('There are unsaved changes, do you still want to go?');
    }

    // if there is no change to the form control allow the navigation
    return true;
  }
}

// end program
