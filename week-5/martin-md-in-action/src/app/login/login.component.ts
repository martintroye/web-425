/*
============================================
; Title: Exercise 5.4
; Author: Troy Martin
; Date: 10/05/2019
; Modified By: Troy Martin
; Description: Flex-Layout
;===========================================
*/

// import the angular core
import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  // define the output location for the component
  selector: 'app-login',
  // define the HTML template file
  templateUrl: './login.component.html',
  // define the CSS file
  styleUrls: ['./login.component.css']
})
// declare and export the class
export class LoginComponent implements OnInit {


  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
  }

}
