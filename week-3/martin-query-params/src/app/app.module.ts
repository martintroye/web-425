/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 09/20/2019
; Modified By: Troy Martin
; Description: Passing Data to Routes
;===========================================
*/
// start program

// import the angular platform browser
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular routing module
import { AppRoutingModule } from './app-routing.module';

// import the app component
import { AppComponent } from './app.component';
// import the user component
import { UserComponent } from './user/user.component';
// import the home component
import { HomeComponent } from './home/home.component';
// import the e404 component
import { E404Component } from './e404/e404.component';

// declare the module
@NgModule({
  // declare the component in the module
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    E404Component
  ],
  // imports used by the module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // services and other providers
  providers: [],
  // component to start the module
  bootstrap: [AppComponent]
})
// declare and export app module clas
export class AppModule { }

// end program
