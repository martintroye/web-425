/*
============================================
; Title: Exercise 4.3
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Handling Form Events with Observables
;===========================================
*/
// import the browser angular module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';
// import the form and reactive form module
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// import our custom component
import { AppComponent } from './app.component';

// declare our module
@NgModule({
  // components defined in the module
  declarations: [
    AppComponent
  ],
  // modules used in this module
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // services and other injectables used in the module
  providers: [],
  // component used to stat the module
  bootstrap: [AppComponent]
})
// declare and export the class
export class AppModule { }

// end program
