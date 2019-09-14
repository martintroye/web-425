/*
============================================
; Title: Exercise 2.3
; Author: Troy Martin
; Date: 09/13/2019
; Modified By: Troy Martin
; Description: Two-Way Binding
;===========================================
*/
// start program

// import the angular core module
import { Component } from '@angular/core';

/*
; Expected output:
; Click button to clear name
; Name entered into input displayed in message
*/

// declare the component
@Component({
  // define the selector for the output
  selector: 'app-root',
  // define the inline HTML template
  template: `
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Two-Way Binding</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link active" href="javascript:void">Home</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="container-fluid two-way-form">
    <h2>Two-way data binding example</h2>
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="form-group">
          <label for="txtName">Name</label>
          <input id="txtName" [(ngModel)]="name" #ctrl="ngModel"
          type="text"
          placeholder="Enter your name here..."
          class="form-control">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3">
        <button class="btn btn-primary form-control" (click)="clearName()">Clear Name</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="form-group">
          <p class="alert-success">Welcome to two-way binding {{name}}!</p>
        </div>
      </div>
    </div>
  </div>
  `,
  // define the inline styles
  styles: [`
    .two-way-form{
      padding: 4rem 0 0 0;
    }
    h2{
      text-align: center;
      padding-bottom: 2rem;
    }
    p{
      margin-top: 2rem;
      text-align: center;
    }
  `]
})
// declare and export the AppComponent class
export class AppComponent {
  // declare and set the default for the name property
  name: string = 'Troy Martin';

  /*
  ; Params: none
  ; Response: none
  ; Description: Clear the local name property
  */
  clearName(): void{
    // set the local name property to an empty string
    this.name = '';
  }
}
// end program
