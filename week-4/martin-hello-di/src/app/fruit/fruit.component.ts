/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 09/27/2019
; Modified By: Troy Martin
; Description: Inversion of Control and Dependency Injection
;===========================================
*/
// import angular core module
import { Component, OnInit } from '@angular/core';

// import the fruit service
import { FruitService } from './fruit.service';
// import the fruit class
import { Fruit } from './fruit';

// declare the component
@Component({
  // declare the selector to output the component
  selector: 'app-fruit',
  // declare the inline HTML template for the component
  template: `
    <div class="container d-flex flex-column">
      <div class="flex-fill">
        <h2>Fruits</h2>
      </div>
      <div class="flex-fill">
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  // declare the inline styles for the component
  styles: [
    `
      h2{
        color: blue;
      }
      .container {
        padding-top: 4rem;
      }
      .tbl-header{
        color: grey;
        text-decoration: underline;
      }
    `
  ]
})
// declare and export the class
export class FruitComponent implements OnInit {
  // declare the fruits property
  fruits: Fruit[];

  /*
  ; Params: fruitService: FruitService
  ; Response: none
  ; Description: Constructor, with injected fruit service
  */
  constructor(private fruitService: FruitService) {
    // Using the getFruit method of the fruitService retrieve an array of fruits
    this.fruits = this.fruitService.getFruit();
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Method from OnInit to initialize the class
  */
  ngOnInit() {}
}

// end program
