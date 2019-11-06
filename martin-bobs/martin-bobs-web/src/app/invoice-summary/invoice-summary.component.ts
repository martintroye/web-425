/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from angular core module
import { Component, OnInit } from '@angular/core';
// imports from the angular router module
import { Router, ActivatedRoute } from '@angular/router';
// import our custom order invoice service
import { OrderInvoiceService } from '../shared/services/order-invoice.service';
// imports from the rxjs module
import { forkJoin } from 'rxjs';
// import our invoice summary model
import { InvoiceSummary } from '../shared/models/invoice-summary.model';
// import our product offering model
import { ProductOffering } from '../shared/models/product-offering.model';

// declare the component
@Component({
  // define the HTML template file
  templateUrl: './invoice-summary.component.html',
  // define the CSS file
  styleUrls: ['./invoice-summary.component.scss']
})
// declare and export the component class
export class InvoiceSummaryComponent implements OnInit {
  // invoice summary
  invoice: InvoiceSummary;
  // default repair service
  repair: ProductOffering;
  // labor total
  laborGrandTotal = 0.00;
  // order total
  orderGrandTotal = 0.00;

  /*
  ; Params: route: ActivatedRoute, orderInvoiceService: OrderInvoiceService
  ; Response: none
  ; Description: Default constructor
  */
  constructor(private route: ActivatedRoute, private orderInvoiceService: OrderInvoiceService) { }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize component
  */
  ngOnInit() {
    // get the route params using an observable
    this.route.params.subscribe((params) => {
      // get the invoice by id
      const invoice = this.orderInvoiceService.getInvoiceById(params.id);
      // get the default repair object
      const repair = this.orderInvoiceService.getRepair();
      // use forkJoin to wait for a result from both observables
      forkJoin([invoice, repair]).subscribe(([invoiceValue, repairValue]) => {
        // set the invoice
        this.invoice = invoiceValue;
        // set the default repair object
        this.repair = repairValue;
        // reset the order total
        this.orderGrandTotal = 0.00;

        // if we find an invoice process it
        if (this.invoice) {
          // set the labor total
          this.laborGrandTotal = this.invoice.laborHours * this.repair.price;

          // loop the selected services
          this.invoice.services.map((productOffering) => {
            // add the price of the selected service to the order total
            this.orderGrandTotal += productOffering.price;
          });

          // add the total labor to the order
          this.orderGrandTotal += this.laborGrandTotal;
          // add the total parts to the order
          this.orderGrandTotal += this.invoice.partsTotal;
        }
      });
    });
  }

}
