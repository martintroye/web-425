/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 09/24/2019
; Modified By: Troy Martin
; Description: Guarding Routes
;===========================================
*/
// start program

// import the core angular module
import { NgModule } from '@angular/core';
// import the angular router module
import { Routes, RouterModule } from '@angular/router';
// import our custom fruit component
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';

// declare and set our routes
const routes: Routes = [
  // declare a default path to the home component
  {path: '', component: HomeComponent},
  {path: 'fruit', component: FruitComponent}
];

// declare our module
@NgModule({
  // import modules being used, and set routes
  imports: [RouterModule.forRoot(routes)],
  // export the router module
  exports: [RouterModule]
})
// declare and export our class
export class AppRoutingModule { }

// end program
