/*
============================================
; Title: Exercise 7.2
; Author: Troy Martin
; Date: 10/18/2019
; Modified By: Troy Martin
; Description: Template-Driven Forms
;===========================================
*/
// imports from the angular core module
import { Component, OnInit } from '@angular/core';
// imports from the angular forms module
import { NgForm } from '@angular/forms';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-login',
  // define the HTML template file
  templateUrl: './login.component.html',
  // define the CSS file
  styleUrls: ['./login.component.css']
})
// declare and export the component class
export class LoginComponent implements OnInit {

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
  }

  /*
  ; Params: formData: NgForm
  ; Response: none
  ; Description: Handle the form submit
  */
  onSubmit(formData: NgForm) {
    // output our form calling console log method
    console.log(formData.value);
  }
}
