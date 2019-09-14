/*
============================================
; Title: Assignment 2.4
; Author: Troy Martin
; Date: 09/14/2019
; Modified By: Troy Martin
; Description: Routing in Action
;===========================================
*/
// start program

// import angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import angular core module
import { NgModule } from '@angular/core';

// import the app component
import { AppComponent } from './app.component';
// import the home component
import { HomeComponent } from './home/home.component';
// import the about component
import { AboutComponent } from './about/about.component';
// import the contact component
import { ContactComponent } from './contact/contact.component';
// import the routing module
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // declare the components in the module
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  // imports them module uses
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // services and other providers
  providers: [],
  // component to start the application
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }

// end program
