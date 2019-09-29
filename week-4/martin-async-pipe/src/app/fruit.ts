/*
============================================
; Title: Assignment 4.3
; Author: Troy Martin
; Date: 09/28/2019
; Modified By: Troy Martin
; Description: Async pipe
;===========================================
*/

// declare and export our fruit class
export class Fruit {

  /*
  ; Params: id: number, name: string, pricePerPound: string, quantity: number
  ; Response: none
  ; Description: Constructor, declares our public properties
  */
  constructor(
    public id: number,
    public name: string,
    public pricePerPound: string,
    public quantity: number
  ) {}
}
