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
  selector: 'app-articles',
  // define the HTML template for the component
  templateUrl: './articles.component.html',
  // define the CSS for the component
  styleUrls: ['./articles.component.scss']
})
// declare and export the component class
export class ArticlesComponent implements OnInit {

  /*
  ; Params: none
  ; Response: none
  ; Description: default constructor
  */
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize components
  */
  ngOnInit() { }

}
