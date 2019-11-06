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
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-footer',
  // define the HTML template for the component
  templateUrl: './footer.component.html',
  // define the CSS for the component
  styleUrls: ['./footer.component.scss']
})
// declare and export the component class
export class FooterComponent implements OnInit {

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize component
  */
  ngOnInit() { }

}
