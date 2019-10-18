/*
============================================
; Title: Exercise 7.3
; Author: Troy Martin
; Date: 10/18/2019
; Modified By: Troy Martin
; Description: Form Validation
;===========================================
*/

// imports from the angular core module
import { Component, OnInit } from '@angular/core';
// imports from the angular form module
import { NgForm } from '@angular/forms';

// declare component
@Component({
  // define the selector to output the component
  selector: 'app-phone-validator',
  // define the HTML template file for the component
  templateUrl: './phone-validator.component.html',
  // define the CSS for the component
  styleUrls: ['./phone-validator.component.css']
})
// declare and export the component class
export class PhoneValidatorComponent implements OnInit {

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
  ; Description: Handle the submission of the form data
  */
  onSubmit(formData: NgForm) {
    // output form data to the console using the log method
    console.log(formData.value);
  }
}
