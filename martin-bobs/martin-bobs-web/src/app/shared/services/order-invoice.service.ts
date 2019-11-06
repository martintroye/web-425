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
import { Injectable } from '@angular/core';
// imports from the rxjs module
import { Observable, of } from 'rxjs';
// import our custom model for the product offering
import { ProductOffering } from '../models/product-offering.model';
// import our custom model for the invoice summary
import { InvoiceSummary } from '../models/invoice-summary.model';
import { CustomerOrder } from '../models/customer-order.model';

// declare the injectable service
@Injectable({
  providedIn: 'root'
})
// declare and export the service class
export class OrderInvoiceService {

  // declare and set the default array of product offerings
  private products: ProductOffering[] = [] ;
  // declare the current invoice
  private invoice: InvoiceSummary;
  // declare the current customer order
  private customerOrder: CustomerOrder;

  /*
  ; Params: none
  ; Response: none
  ; Description: Default constructor
  */
  constructor() {
    // populate the array of products
    this.products.push({description: 'Password Reset', price: 39.99, icon: 'lock_open'});
    this.products.push({description: 'Spyware Removal', price: 99.99, icon: 'search'});
    this.products.push({description: 'RAM Upgrade', price: 129.99, icon: 'memory'});
    this.products.push({description: 'Software Installation', price: 49.99, icon: 'add_to_queue'});
    this.products.push({description: 'Tune-Up', price: 89.99, icon: 'tune'});
    this.products.push({description: 'Keyboard Cleaning', price: 45, icon: 'keyboard'});
    this.products.push({description: 'Disk Clean-Up', price: 149.99, icon: 'disc_full'});
  }

  /*
  ; Params: none
  ; Response: Observable array of ProductOffering objects
  ; Description: Return an array of products
  */
  getProducts(): Observable<ProductOffering[]> {
    // using the foreach method loop the array and set selected to null
    this.products.forEach(p => p.selected = null);
    // return an observable using the array of products
    return of(this.products);
  }

  /*
  ; Params: none
  ; Response: Observable ProductOffering
  ; Description: Get the repair ProductOffering
  */
  getRepair(): Observable<ProductOffering> {
    // create a new instance of a product offering
    const repair = new ProductOffering();
    // set the repairs default values
    repair.description = 'Repair';
    repair.price = 50;
    repair.icon = 'build';
    // return observable using the repair object
    return of(repair);
  }

  /*
  ; Params: invoice: InvoiceSummary
  ; Response: Observable number
  ; Description: Store the invoice and return the id
  */
  createInvoice(invoice: InvoiceSummary): Observable<number> {
    // store the invoice
    this.invoice = invoice;
    // return an observable using a default number
    return of(1);
  }

  /*
  ; Params: id: number
  ; Response: Observable InvoiceSummary
  ; Description: Return the matching InvoiceSummary
  */
  getInvoiceById(id: number): Observable<InvoiceSummary> {
    // if the stored invoice exists return the invoice
    if (this.invoice) {
      // return observable using the stored invoice
      return of(this.invoice);
    }

    // return observable null if empty
    return of(null);
  }

  /*
  ; Params: order: CustomerOrder
  ; Response: Observable number
  ; Description: Store the customer order and return its id
  */
  submitOrder(order: CustomerOrder): Observable<number> {
    // store the customer order
    this.customerOrder = order;
    // return an observable default id
    return of(1);
  }

  /*
  ; Params: none
  ; Response: Observable CustomerOrder
  ; Description: Get the customer order
  */
  getCurrentOrder(): Observable<CustomerOrder> {
    // is there a customer order stored in the property
    if (this.customerOrder) {
      // return an observable using the stored order
      return of(this.customerOrder);
    }

    // return a observable using a null since the order does not exist
    return of(null);
  }
}
