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

// import our custom home component
import { HomeComponent } from './home/home.component';
// import our custom login component
import { LoginComponent } from './login/login.component';
// import our custom product component
import { ProductComponent } from './product/product.component';
// import our custom login guard
import { LoginGuard } from './login.guard';
// import our custom unsaved changes guard
import { UnsavedChangesGuard } from './unsaved-changes.guard';

// declare and set our routes
const routes: Routes = [
  // declare a default path to the home component
  {path: '', component: HomeComponent},
  // declare a path to the login component
  {path: 'login', component: LoginComponent},
  // declare a path to the product component, apply our custom route guards
  {path: 'product', component: ProductComponent, canActivate: [LoginGuard], canDeactivate: [UnsavedChangesGuard]}
];

// declare our module
@NgModule({
  // import modules being used, and set routes
  imports: [RouterModule.forRoot(routes)],
  // export the router modele
  exports: [RouterModule]
})
// declare and export our class
export class AppRoutingModule { }

// end program
