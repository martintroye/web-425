/*
============================================
; Title: Exercise 7.3
; Author: Troy Martin
; Date: 10/18/2019
; Modified By: Troy Martin
; Description: Form Validation
;===========================================
*/

// imports from angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// imports from angular platform browser animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// imports from angular core module
import { NgModule } from '@angular/core';
// imports from the angular forms module
import { FormsModule } from '@angular/forms';
// imports from the angular material module
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
// imports from the angular flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// import our custom app component
import { AppComponent } from './app.component';
import { PhoneValidatorComponent } from './phone-validator/phone-validator.component';

// declare the module
@NgModule({
  // components declared in the module
  declarations: [AppComponent, PhoneValidatorComponent],
  // modules used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  // services and other injectable components used in module
  providers: [],
  // component used to start the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule {}
