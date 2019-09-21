/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 09/21/2019
; Modified By: Troy Martin
; Description: Child Routes
;===========================================
*/
// start program

// import angular platform browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';

// import our custom routing module
import { AppRoutingModule } from './app-routing.module';
// import out base app component for the module
import { AppComponent } from './app.component';
// import the product detail component
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import the product description component
import { ProductDescriptionComponent } from './product-description/product-description.component';
// import the seller info component
import { SellerInfoComponent } from './seller-info/seller-info.component';
// import the home component
import { HomeComponent } from './home/home.component';

// declare the module
@NgModule({
  // components defined in the module
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerInfoComponent,
    HomeComponent
  ],
  // imports used in the module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // services and other providers
  providers: [],
  // component to start the module
  bootstrap: [AppComponent]
})
// declare and export the module class
export class AppModule { }

// end program
