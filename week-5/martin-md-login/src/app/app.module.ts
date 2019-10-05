/*
============================================
; Title: Exercise 5.3
; Author: Troy Martin
; Date: 10/04/2019
; Modified By: Troy Martin
; Description: Material Cards
;===========================================
*/

// import the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular platform browser animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular material modules
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule,
   MatFormFieldModule, MatInputModule } from '@angular/material';
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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  // export the modules for use in our components
  exports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  // services and other injectable providers
  providers: [],
  // component to start our module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule {}
