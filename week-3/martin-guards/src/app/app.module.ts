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

// import the angular platform browser
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';
// import the angular routing module
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import our custom app component
import { AppComponent } from './app.component';
// import our custom product component
import { ProductComponent } from './product/product.component';
// import our custom login component
import { LoginComponent } from './login/login.component';
// import our custom home component
import { HomeComponent } from './home/home.component';
// import our custom login route guard
import { LoginGuard } from './login.guard';
// import our custom unsaved changes route guard
import { UnsavedChangesGuard } from './unsaved-changes.guard';

// declare our module
@NgModule({
  // declare the components in the module
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent
  ],
  // imports used by the module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // services and providers and other injectables used in the module
  providers: [
    LoginGuard,
    UnsavedChangesGuard
  ],
  // component used to initialize the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }

// end program
