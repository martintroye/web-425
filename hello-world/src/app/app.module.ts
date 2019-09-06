/*
============================================
; Title: Exercise 1.3
; Author: Troy Martin
; Date: 09/05/2019
; Modified By: Troy Martin
; Description: Angular CLI
;===========================================
*/

// import required angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the app component
import { AppComponent } from './app.component';

// declare the module
@NgModule({
  declarations: [
    // declare the app component
    AppComponent
  ],
  imports: [
    // import the angular browser module
    BrowserModule
  ],
  providers: [],
  // set the startup component
  bootstrap: [AppComponent]
})
// export the module
export class AppModule { }
