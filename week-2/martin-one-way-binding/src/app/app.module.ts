/*
============================================
; Title: Exercise 2.2
; Author: Troy Martin
; Date: 09/13/2019
; Modified By: Troy Martin
; Description: One-Way Binding
;===========================================
*/
// import the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';
// import the app component
import { AppComponent } from './app.component';

// declare the module
@NgModule({
  // declarations
  declarations: [
    AppComponent
  ],
  // imports
  imports: [
    BrowserModule
  ],
  // services and other providers
  providers: [],
  // component to start the application
  bootstrap: [AppComponent]
})
// declare and export the module
export class AppModule { }

// end program
