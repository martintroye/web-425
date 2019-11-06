/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// import the custom product offering model
import { ProductOffering } from './product-offering.model';

// declare and export the order entry class
export class OrderEntry {
  // array of selected services
  selectedServices: ProductOffering[];
  // repairs requested by the customer
  repairsRequested: string;
  // number of laborHours
  laborHours: number;
  // total price of parts
  partsTotal: number;
  // date the order was completed, optional
  dateCompleted?: Date;
  // technician that completed the order
  technician: string;
  // technician comments
  comments: string;
}
