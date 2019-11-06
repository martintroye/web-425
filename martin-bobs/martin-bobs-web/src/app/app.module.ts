/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the browser module
import { BrowserModule } from '@angular/platform-browser';
// imports from the browser animations module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// imports from the angular code module
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

// import our custom routing module
import { AppRoutingModule } from './app-routing.module';
// import our custom application component
import { AppComponent } from './app.component';
// import our custom toolbar component
import { ToolbarComponent } from './toolbar/toolbar.component';
// import our custom footer component
import { FooterComponent } from './footer/footer.component';
// import our custom home component
import { HomePageComponent } from './home-page/home-page.component';
// import our custom customer order component
import { CustomerOrderComponent } from './customer-order/customer-order.component';
// import our custom invoice summary component
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
// import our custom service offered component
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
// import our custom articles component
import { ArticlesComponent } from './articles/articles.component';
// import our customer order dialog component
import { CustomerOrderDialogComponent } from './customer-order/customer-order-dialog/customer-order-dialog.component';
// import the currency pipe
import { CurrencyPipe } from '@angular/common';
// import our custom product offering component
import { ProductOfferingsComponent } from './shared/product-offerings/product-offerings.component';
// import our custom order entry component
import { OrderEntryComponent } from './order-entry/order-entry.component';
// import out order invoice service
import { OrderInvoiceService } from './shared/services/order-invoice.service';

// declare the module
@NgModule({
  // declare the components included in the module
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
  // entry components included in the module
  entryComponents: [CustomerOrderDialogComponent]
})
// declare and export the module class
export class AppModule {}
