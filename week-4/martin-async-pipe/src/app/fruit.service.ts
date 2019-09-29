/*
============================================
; Title: <Assignment>
; Author: Troy Martin
; Date: xx/xx/2019
; Modified By: Troy Martin
; Description: <Description>
;===========================================
*/
// imports from the angular core module
import { Injectable } from '@angular/core';
// imports from the rxjs module
import { Observable, of } from 'rxjs';

// import our custom fruit class
import { Fruit } from './fruit';

// declare our injectable service
@Injectable({
  providedIn: 'root'
})
export class FruitService {
  /*
  ; Params: none
  ; Response: none
  ; Description: Empty constructor
  */
  constructor() {}

  /*
  ; Params: none
  ; Response: Observable<Fruit[]>
  ; Description: Get an observable array of fruits
  */
  getFruits(): Observable<Fruit[]> {
    // declare an array of fruits
    const fruits = [];
    // load the array with new fruits
    fruits.push(new Fruit(1, 'Apple', '$1.68', 10));
    fruits.push(new Fruit(2, 'Orange', '$1.25', 6));
    fruits.push(new Fruit(3, 'Strawberries', '$2.35', 20));
    fruits.push(new Fruit(4, 'Grapes', '$1.04', 50));
    fruits.push(new Fruit(5, 'Pineapple', '$1.61', 1));

    // return an observable array of fruits
    return of(fruits);
  }
}
