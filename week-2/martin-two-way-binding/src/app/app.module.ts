/*
============================================
; Title: Exercise 2.3
; Author: Troy Martin
; Date: 09/13/2019
; Modified By: Troy Martin
; Description: Two-Way Binding
;===========================================
*/
// start program
// import the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular forms module, brings in ngModel
import { FormsModule} from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  // services and other providers
  providers: [],
  // component to start the application
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }

// end program
