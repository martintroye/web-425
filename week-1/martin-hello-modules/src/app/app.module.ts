/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 09/08/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/
// import the angular browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';

// import the app component
import { AppComponent } from './app.component';
// import the shipping module to access the shipping component
import { ShippingModule } from './shipping/shipping.module';

// declare the module
@NgModule({
  // components, directives and pipes that belong to the app module
  declarations: [
    AppComponent
  ],
  // modules available to the templates in the module
  imports: [
    BrowserModule,
    ShippingModule
  ],
  // injectable objects
  providers: [],
  // components that are bootstrapped when the module is bootstrapped
  bootstrap: [AppComponent]
})
// declare and export the app module
export class AppModule { }
