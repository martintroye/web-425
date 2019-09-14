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

// import the angular core module
import { NgModule } from '@angular/core';
// import the angular common module
import { CommonModule } from '@angular/common';
// import the angular router module
import { RouterModule, Routes } from '@angular/router'
// import the home component
import { HomeComponent } from './home/home.component';
// import the about component
import { AboutComponent } from './about/about.component';
// import the contact component
import { ContactComponent } from './contact/contact.component';

// declare the array of routes
const routes: Routes = [
  // home route
  {path: 'home', component: HomeComponent},
  // about route
  {path: 'about', component: AboutComponent},
  // contact route
  {path: 'contact', component: ContactComponent}
]

// declare the module
@NgModule({
  // declare the components that are part of the module
  declarations: [],
  // other modules in use
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // export the module
  exports: [
    RouterModule
  ]
})
// declare and export the routing module
export class AppRoutingModule { }

// end program
