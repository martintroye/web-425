/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { ProductOffering } from './product-offering.model';

export class InvoiceSummary {
  id: number;
  customerId: number;
  orderDate: Date;
  completedDate?: Date;
  paidDate?: Date;
  amountDue: number;
  services: ProductOffering[];
  repairsRequested: string;
  laborHours: number;
  laborPrice: number;
  partsTotal: number;
  comments: string;
  technician: string;

}
