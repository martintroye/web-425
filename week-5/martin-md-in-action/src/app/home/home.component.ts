/*
============================================
; Title: Exercise 5.4
; Author: Troy Martin
; Date: 10/05/2019
; Modified By: Troy Martin
; Description: Flex-Layout
;===========================================
*/
// import the angular core module
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // define the output location for the component
  selector: 'app-home',
  // define the HTML template file
  templateUrl: './home.component.html',
  // define the CSS file
  styleUrls: ['./home.component.css']
})
// declare and export the class
export class HomeComponent implements OnInit {
  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {}
}
