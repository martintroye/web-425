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
import { FormsModule } from '@angular/forms';
// imports from the angular material module
import {   MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule, } from '@angular/material';
// imports from the angular flex layout module
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderServicesComponent } from './order-services/order-services.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, FooterComponent, HomePageComponent, OrderServicesComponent, InvoiceSummaryComponent],
  // modules used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  // modules exposed
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  // services and injectables
  providers: [],
  // component used to start the module
  bootstrap: [AppComponent]
})
export class AppModule {}
