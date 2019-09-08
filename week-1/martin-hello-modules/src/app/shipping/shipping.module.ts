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
import { NgModule } from '@angular/core';
// import the angular common module
import { CommonModule } from '@angular/common';
// import the shipping component
import { ShippingComponent } from './shipping.component';

// declare the shipping module
@NgModule({
  // components, directives and pipes that belong to the shipping module
  declarations: [
    ShippingComponent],
  // modules available to the templates in the module
  imports: [
    CommonModule
  ],
  // components, directives and pipes that the module exports
  exports:[
    ShippingComponent
  ]
})
// declare and export the shipping module
export class ShippingModule { }
