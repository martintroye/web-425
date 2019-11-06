/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// import our custom product offering model
import { ProductOffering } from './product-offering.model';

// declare and export our customer order class
export class CustomerOrder {
  // array of selected services
  selectedServices: ProductOffering[];
  // repairs requested by customer
  repairs: string;
}
