
/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the angular core module
import { NgModule } from '@angular/core';
// imports from the angular router module
import { Routes, RouterModule } from '@angular/router';
// import our custom home component
import { HomePageComponent } from './home-page/home-page.component';
// import our custom order entry component
import { OrderEntryComponent } from './order-entry/order-entry.component';
// import out custom invoice summary component
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';

// declare routes for application
const routes: Routes = [
  // default route
  {path: '', component: HomePageComponent},
  // route to enter an order
  {path: 'orderEntry', component: OrderEntryComponent},
  // route to view invoice by id
  {path: 'invoice/:id', component: InvoiceSummaryComponent}
];

// declare the module
@NgModule({
  // modules used
  imports: [RouterModule.forRoot(routes)],
  // exports from the module
  exports: [RouterModule]
})
// declare and export the module class
export class AppRoutingModule { }
