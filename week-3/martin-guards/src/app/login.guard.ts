/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 09/24/2019
; Modified By: Troy Martin
; Description: Guarding Routes
;===========================================
*/
// start program

// import the angular core module
import { Injectable } from '@angular/core';
// import the angular router module
import { CanActivate, Router } from '@angular/router';

// declare the injectable
@Injectable()
// declare and export the class, implementing the CanActivate route guard interface
export class LoginGuard implements CanActivate {
  // define the constructor and inject a router
  constructor(private router: Router) {}

  /*
  ; Params: none
  ; Response: boolean
  ; Description: If the user is logged in return true otherwise route to login page
  */
  canActivate() {
    // using the Math random function assign a logged in status of true or false
    const loggedIn = Math.random() < 0.5;

    // if the false then alert the user and route
    if (!loggedIn) {
      // Use the alert function to warn the user they are being redirected
      alert('Please sign in to continue, redirecting to the login page.');
      // call the navigate method of the router to redirect to the login page
      this.router.navigate(['/login']);
    }

    // return the logged in status
    return loggedIn;
  }
}

// end program
