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
import { Component, OnInit } from '@angular/core';
// import our custom product offering model
import { ProductOffering } from '../shared/models/product-offering.model';
// imports from the angular form module
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// imports from the rxjs module
import { Subscription } from 'rxjs';
// imports from the angular router module
import { Router } from '@angular/router';
// import our custom invoice summary model
import { InvoiceSummary } from '../shared/models/invoice-summary.model';
// import our custom order invoice service
import { OrderInvoiceService } from '../shared/services/order-invoice.service';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-order-entry',
  // define the HTML template file for the component
  templateUrl: './order-entry.component.html',
  // define the CSS for the component
  styleUrls: ['./order-entry.component.scss']
})
// declare and export the component class
export class OrderEntryComponent implements OnInit {
  // declare and default an array of selected services
  selectedServices: ProductOffering[] = [];
  // declare and default the order total
  orderGrandTotal = 0.00;
  // declare the form group
  entryGroup: FormGroup;
  // declare a subscription to monitor form changes
  valueChangesSubscription: Subscription;
  // labor total
  laborGrandTotal = 0.00;
  // parts total
  partsGrandTotal = 0.00;
  // the default repair offering
  repair: ProductOffering;

  /*
  ; Params: formBuilder: FormBuilder, router: Router, orderInvoiceService: OrderInvoiceService
  ; Response: none
  ; Description: Default constructor
  */
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderInvoiceService: OrderInvoiceService) { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
    // get the default repair object
    this.orderInvoiceService.getRepair().subscribe((repairInfo) => {
      // set the default repair object
      this.repair = repairInfo;

      // set the form group
      this.entryGroup = this.formBuilder.group({});
      // add the labor and parts controls
      this.entryGroup.addControl('laborHours', new FormControl(''));
      this.entryGroup.addControl('partsTotal', new FormControl(''));

      // declare the subscription to watch for changes to the values
      this.valueChangesSubscription = this.entryGroup.valueChanges.subscribe(() => {
        // get that parts total if it exists or default to 0
        this.partsGrandTotal = this.entryGroup.controls.partsTotal.value ? this.entryGroup.controls.partsTotal.value : 0.00;
        // get the labor total or default to 0.00
        this.laborGrandTotal = this.entryGroup.controls.laborHours.value ?
          this.entryGroup.controls.laborHours.value * this.repair.price : 0.00;

        // reset the order total
        this.orderGrandTotal = 0.00;
        // loop the selected services
        this.selectedServices.map((productOffering) => {
          // add the price of the selected service to the order total
          this.orderGrandTotal += productOffering.price;
        });

        // add the labor total to the order total
        this.orderGrandTotal += this.laborGrandTotal;
        // add the parts total to the order total
        this.orderGrandTotal += this.partsGrandTotal;
      });
    });
  }

  /*
  ; Params: total: number
  ; Response: none
  ; Description: Recalculate the order total using the argument value for selected services
  */
  setTotal(total: number) {
    this.orderGrandTotal = total + this.partsGrandTotal + this.laborGrandTotal;
  }

  /*
  ; Params: services: ProductOffering[]
  ; Response: none
  ; Description: Set the selected products
  */
  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Submit the order and create an invoice
  */
  submit() {
    // declare and set the invoice values
    const invoice = new InvoiceSummary();
    // set the selected services
    invoice.services = this.selectedServices;
    // set the parts total
    invoice.partsTotal = this.partsGrandTotal;
    // set the labor hours
    invoice.laborHours = this.entryGroup.controls.laborHours.value ? this.entryGroup.controls.laborHours.value : 0;
    // set the default labor price
    invoice.laborPrice = this.repair.price;

    // store the invoice calling the createInvoice method of the service
    this.orderInvoiceService.createInvoice(invoice).subscribe((result) => {
      // route to the invoice view after the result is returned
      this.router.navigateByUrl(`invoice/${result}`);
    });
  }

}
