/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the angular core module
import { Component, OnInit, OnDestroy } from '@angular/core';
// import our custom product offering model
import { ProductOffering } from 'src/app/shared/models/product-offering.model';
// import our customer order model
import { CustomerOrder } from 'src/app/shared/models/customer-order.model';
// imports from the angular forms module
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import our custom order invoice service
import { OrderInvoiceService } from 'src/app/shared/services/order-invoice.service';

// declare the component
@Component({
  // define the HTML template file
  templateUrl: './customer-order-dialog.component.html',
  // define the CSS file for the component
  styleUrls: ['./customer-order-dialog.component.scss']
})
// declare and export the component class
export class CustomerOrderDialogComponent implements OnInit, OnDestroy {
  // declare and default an array of selected services
  selectedServices: ProductOffering[] = [];
  // declare and default the order total
  orderGrandTotal = 0.0;
  // declare a form group
  repairGroup: FormGroup;

  /*
  ; Params: formBuilder: FormBuilder
  ; Response: none
  ; Description: Default constructor
  */
  constructor(
    private formBuilder: FormBuilder,
    private orderInvoiceService: OrderInvoiceService) {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
    // set the form group
    this.repairGroup = this.formBuilder.group({});
    // add the repair control to the group
    this.repairGroup.addControl('repairs', new FormControl(''));
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: On destroy of the component
  */
  ngOnDestroy(): void {}

  /*
  ; Params: total: number
  ; Response: none
  ; Description: Set the order total
  */
  setTotal(total: number) {
    // set the order total
    this.orderGrandTotal = total;
  }

  /*
  ; Params: services: ProductOffering[]
  ; Response: none
  ; Description: Set the selected services
  */
  setSelectedProducts(services: ProductOffering[]) {
    // set the selected services
    this.selectedServices = services;
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Submit the customer order
  */
  submit() {
    // declare a new customer order
    const order = new CustomerOrder();
    // set the selected services
    order.selectedServices = this.selectedServices;
    // add any repair comments
    order.repairs = this.repairGroup.controls.repairs.value;
    this.orderInvoiceService.submitOrder(order);
  }
}
