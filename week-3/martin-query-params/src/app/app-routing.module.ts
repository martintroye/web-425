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

// import the angular core module
import { NgModule } from '@angular/core';
// import the router module
import { Routes, RouterModule } from '@angular/router';

// import the home component
import { HomeComponent } from './home/home.component';
// import the user component
import { UserComponent } from './user/user.component';
// import user e404 component
import { E404Component } from './e404/e404.component';

// declare the routes
const routes: Routes = [
  // handle the default route
  {path: '', component: HomeComponent},
  // handle the user route and and optional id
  {path: 'user/:id', component: UserComponent},
  // handle invalid requests
  {path: '**', component: E404Component}
];

// declare the module
@NgModule({
  // declare the imports
  imports: [RouterModule.forRoot(routes)],
  // declare the exports
  exports: [RouterModule]
})
// declare the app routing module class
export class AppRoutingModule { }

// end program
