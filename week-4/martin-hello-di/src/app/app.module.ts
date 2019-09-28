/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Inversion of Control and Dependency Injection
;===========================================
*/
// import the angular browser module
import { BrowserModule } from '@angular/platform-browser';
// import the angular core module
import { NgModule } from '@angular/core';

// import our custom app component
import { AppComponent } from './app.component';
// import our custom fruit component
import { FruitComponent } from './fruit/fruit.component';
// import our custom fruit service
import { FruitService } from './fruit/fruit.service';
// import our custom routing module
import { AppRoutingModule } from './app-routing.module';
// import our custom home component
import { HomeComponent } from './home/home.component';

// declare our module
@NgModule({
  // components defined in the module
  declarations: [
    AppComponent,
    FruitComponent,
    HomeComponent,
  ],
  // modules imported
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // services and other injectables for the module
  providers: [FruitService],
  // component used to start the module
  bootstrap: [AppComponent]
})
// declare and export the class
export class AppModule { }

// end program
