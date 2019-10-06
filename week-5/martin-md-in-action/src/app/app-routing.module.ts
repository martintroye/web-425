/*
============================================
; Title: Exercise 5.4
; Author: Troy Martin
; Date: 10/05/2019
; Modified By: Troy Martin
; Description: Flex-Layout
;===========================================
*/
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular router
import { Routes, RouterModule } from '@angular/router';

// import our custom home component
import { HomeComponent } from './home/home.component';
// import our custom login componment
import { LoginComponent } from './login/login.component';


// declare our routes as an array
const routes: Routes = [
  // default path, using the home component
  {path: '', component: HomeComponent},
  // declare login route
  {path: 'login', component: LoginComponent}
];

// declare the module
@NgModule({
  // modules imported
  imports: [RouterModule.forRoot(routes)],
  // modules exported
  exports: [RouterModule]
})
// declare and export the class
export class AppRoutingModule { }
