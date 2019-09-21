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

// import the angular core module
import { NgModule } from '@angular/core';
// import the angular router module
import { Routes, RouterModule } from '@angular/router';
// import our custom home component
import { HomeComponent } from './home/home.component';
// import our custom product detail component
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import our custom product description component
import { ProductDescriptionComponent } from './product-description/product-description.component';
// import our custom seller info component
import { SellerInfoComponent } from './seller-info/seller-info.component';

// declare the routes array and define our routes
const routes: Routes = [
  // default route to home component
  {path: '', component: HomeComponent},
  // product path with id param
  {path: 'product/:id', component: ProductDetailComponent,
    // define child routes from product detail
    children: [
      // default to product description
      {path: '', component: ProductDescriptionComponent},
      // seller path with id param
      {path: 'seller/:id', component: SellerInfoComponent}
    ]
  }
]

// declare the module
@NgModule({
  // used in the module
  imports: [RouterModule.forRoot(routes)],
  // exposed by the module
  exports: [RouterModule]
})
// declare and export the routing module
export class AppRoutingModule { }

// end program

