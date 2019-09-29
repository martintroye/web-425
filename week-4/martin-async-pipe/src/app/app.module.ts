/*
============================================
; Title: Assignment 4.3
; Author: Troy Martin
; Date: 09/28/2019
; Modified By: Troy Martin
; Description: Async Pipe
;===========================================
*/

// imports from the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// imports from the angular core module
import { NgModule } from '@angular/core';

// import our custom app component
import { AppComponent } from './app.component';
import { FruitService } from './fruit.service';

// declare our module
@NgModule({
  // components in our module
  declarations: [
    AppComponent
  ],
  // modules used
  imports: [
    BrowserModule
  ],
  // services and other injectable items
  providers: [FruitService],
  // component to start the application
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }
