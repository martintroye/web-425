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

export class CustomerOrder {
  selectedServices: ProductOffering[];
  repairs: string;
}
