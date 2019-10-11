/*
============================================
; Title: Exercise 6.2
; Author: Troy Martin
; Date: 10/10/2019
; Modified By: Troy Martin
; Description: Input Properties
;===========================================
*/
// import the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular platform browser animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import the angular core modules
import { NgModule } from '@angular/core';
// import the angular material modules
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
// import the angular flex layout modules
import { FlexLayoutModule } from '@angular/flex-layout';

// import our custom app component
import { AppComponent } from './app.component';
// import our custom order component
import { OrderComponent } from './order/order.component';

// declare the module
@NgModule({
  // components included in the module
  declarations: [AppComponent, OrderComponent],
  // modules used in this module
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
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  // services and other injectables used in the module
  providers: [],
  // component used to start the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule {}
