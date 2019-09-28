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
import { Injectable } from '@angular/core';

// import fruit class
import { Fruit } from './fruit';

// declare the module
@Injectable({
  providedIn: 'root'
})
// declare and export the class
export class FruitService {
  // empty constructor
  constructor() {}

  /*
  ; Params: none
  ; Response: Fruit[]
  ; Description: Get an array of fruits
  */
  getFruit(): Fruit[] {
    // declare and initialize an array of fruits
    const fruits = [];

    // push new fruits into the array using the constructor
    fruits.push(new Fruit(1, 'Apple', 'Red'));
    fruits.push(new Fruit(2, 'Banana', 'Yellow'));
    fruits.push(new Fruit(3, 'Watermelon', 'Green'));

    // return the fruit array
    return fruits;
  }
}

// end program
