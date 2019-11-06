/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// declare and export the product offering class
export class ProductOffering {
  // offering description
  description: string;
  // price of the offering
  price: number;
  // is the offering selected, optional
  selected?: boolean;
  // icon representing the offering
  icon: string;
}
