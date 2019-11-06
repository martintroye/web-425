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
// imports from the rxjs module
import { forkJoin } from 'rxjs';
// import our custom order invoice service
import { OrderInvoiceService } from '../shared/services/order-invoice.service';

// declare our component
@Component({
  // define the selector to output the component
  selector: 'app-services-offered',
  // define the HTML template for the component
  templateUrl: './services-offered.component.html',
  // define the CSS for the component
  styleUrls: ['./services-offered.component.scss']
})
// declare and export the component class
export class ServicesOfferedComponent implements OnInit {
  // declare the products array and set the default
  products: ProductOffering[] = [];

  /*
  ; Params: orderInvoiceService: OrderInvoiceService
  ; Response: none
  ; Description: Default constructor
  */
  constructor(private orderInvoiceService: OrderInvoiceService) {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
    // declare the products observable
    const p = this.orderInvoiceService.getProducts();
    // declare the repair observable
    const r = this.orderInvoiceService.getRepair();

    // forkJoin waits for both observables to complete and provides the results
    forkJoin(p, r).subscribe(([prod, repair]) => {
      // push the repair offering into the array first
      this.products.push(repair);
      // push the rest of the offerings into the array
      prod.forEach(x => {
        this.products.push(x);
      });
    });
  }
}
