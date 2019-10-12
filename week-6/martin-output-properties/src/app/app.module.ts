/*
============================================
; Title: Exercise 6.3
; Author: Troy Martin
; Date: 10/11/2019
; Modified By: Troy Martin
; Description: Output Properties
;===========================================
*/

// imports from the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// imports from the angular core module
import { NgModule } from '@angular/core';
// imports from the angular material module
import {   MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule, } from '@angular/material';
// imports from the angular flex layout module
import {FlexLayoutModule} from '@angular/flex-layout';

// import our custom app component
import { AppComponent } from './app.component';
// import our custom price quote component
import { PriceQuoteComponent } from './price-quote/price-quote.component';

// decalre the module
@NgModule({
  // components found in the module
  declarations: [
    AppComponent,
    PriceQuoteComponent
  ],
  // modules used
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  // modules exposed
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  // services and injectables used
  providers: [],
  // component used to start the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }
