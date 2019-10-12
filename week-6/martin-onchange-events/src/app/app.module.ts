/*
============================================
; Title: Assignment 6.4
; Author: Troy Martin
; Date: 10/12/2019
; Modified By: Troy Martin
; Description: OnChange() Events
;===========================================
*/

// imports from the angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// imports from the angular core module
import { NgModule } from '@angular/core';
// imports from the angular forms module
import { FormsModule } from '@angular/forms';
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
// import our custom child component
import { ChildComponent } from './child/child.component';

// declare the module
@NgModule({
  // components in the module
  declarations: [
    AppComponent,
    ChildComponent
  ],
  // modules used
  imports: [
    BrowserModule,
    FormsModule,
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
  // services and injectables
  providers: [],
  // component used to start the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }
