/*
============================================
; Title: <Assignment>
; Author: Troy Martin
; Date: xx/xx/2019
; Modified By: Troy Martin
; Description: <Description>
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// imports from the angular forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// imports from the angular material module
import {   MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialog,
  MatDialogModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatChipsModule, } from '@angular/material';
// imports from the angular flex layout module
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { ArticlesComponent } from './articles/articles.component';
import { CustomerOrderDialogComponent } from './customer-order/customer-order-dialog/customer-order-dialog.component';
import { CurrencyPipe } from '@angular/common';
import { ProductOfferingsComponent } from './shared/product-offerings/product-offerings.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { OrderInvoiceService } from './shared/services/order-invoice.service';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, FooterComponent, HomePageComponent,
    CustomerOrderComponent, InvoiceSummaryComponent, ServicesOfferedComponent,
    ArticlesComponent, CustomerOrderDialogComponent, ProductOfferingsComponent, OrderEntryComponent],
  // modules used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatChipsModule
  ],
  // modules exposed
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  // services and injectable components
  providers: [MatDialog, OrderInvoiceService, CurrencyPipe],
  // component used to start the module
  bootstrap: [AppComponent],
  entryComponents: [CustomerOrderDialogComponent]
})
export class AppModule {}
