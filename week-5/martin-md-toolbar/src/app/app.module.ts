/*
============================================
; Title: Exercise 5.2
; Author: Troy Martin
; Date: 10/04/2019
; Modified By: Troy Martin
; Description: Navigation
;===========================================
*/

// import the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular platform browser animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular material modules
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
// import the angular flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// import our custom app component
import { AppComponent } from './app.component';

// declare our module
@NgModule({
  // declare the components in the module
  declarations: [AppComponent],
  // declare the modules used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  // export the modules for use in our components
  exports: [
    MatIconModule,
    MatButtonModule
  ],
  // services and other injectable providers
  providers: [],
  // component to start our module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule {}
