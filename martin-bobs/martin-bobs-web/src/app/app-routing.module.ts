
/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'orderEntry', component: OrderEntryComponent},
  {path: 'invoice/:id', component: InvoiceSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
