/*
============================================
; Title: Assignment 4.3
; Author: Troy Martin
; Date: 09/28/2019
; Modified By: Troy Martin
; Description: Async Pipe
;===========================================
*/

// import angular core modules
import { Component, OnInit } from '@angular/core';

// import our custom fruit service
import { FruitService } from './fruit.service';
// import our custom fruit class
import { Fruit} from './fruit';

// declare our component
@Component({
  // declare the selector to output the component
  selector: 'app-root',
  // declare the file for the HTML template
  templateUrl: './app.component.html',
  // declare the CSS file
  styleUrls: ['./app.component.css']
})
// declare and export the component class, implement the OnInit interface
export class AppComponent implements OnInit {
  // declare the title property and set a default value
  title = 'Async Pipe';
  // declare a fruit array property
  fruits: Fruit[];

  /*
  ; Params: fruitService: FruitService
  ; Response: none
  ; Description: Constructor, injecting an instance of our fruit service
  */
  constructor(private fruitService: FruitService) {
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component, get the fruits to display
  */
  ngOnInit(): void {
    this.fruitService.getFruits().subscribe(fruits => this.fruits = fruits);
  }
}
