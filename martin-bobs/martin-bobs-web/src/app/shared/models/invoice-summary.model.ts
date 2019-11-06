/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// import our product offering model
import { ProductOffering } from './product-offering.model';

// declare and expor the invoice summary
export class InvoiceSummary {
  // invoice id
  id: number;
  // customer id
  customerId: number;
  // date ordered by customer
  orderDate: Date;
  // date order completed, optional
  completedDate?: Date;
  // date the invoice was paid, optional
  paidDate?: Date;
  // amount due
  amountDue: number;
  // array of selected services
  services: ProductOffering[];
  // repairs requested by customer
  repairsRequested: string;
  // number of hours of labor
  laborHours: number;
  // price of labor
  laborPrice: number;
  // price of parts
  partsTotal: number;
  // technician comments
  comments: string;
  // technician completing the order
  technician: string;

}
