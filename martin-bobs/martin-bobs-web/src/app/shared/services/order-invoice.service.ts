/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductOffering } from '../models/product-offering.model';
import { InvoiceSummary } from '../models/invoice-summary.model';

@Injectable({
  providedIn: 'root'
})
export class OrderInvoiceService {
  private products: ProductOffering[] = [] ;
  private invoice: InvoiceSummary;

  constructor() {
    this.products.push({description: 'Password Reset', price: 39.99, icon: 'lock_open'});
    this.products.push({description: 'Spyware Removal', price: 99.99, icon: 'search'});
    this.products.push({description: 'RAM Upgrade', price: 129.99, icon: 'memory'});
    this.products.push({description: 'Software Installation', price: 49.99, icon: 'add_to_queue'});
    this.products.push({description: 'Tune-Up', price: 89.99, icon: 'tune'});
    this.products.push({description: 'Keyboard Cleaning', price: 45, icon: 'keyboard'});
    this.products.push({description: 'Disk Clean-Up', price: 149.99, icon: 'disc_full'});
  }

  getProducts(): Observable<ProductOffering[]> {
    this.products.forEach(p => p.selected = null);
    return of(this.products);
  }

  getRepair(): Observable<ProductOffering> {
    const repair = new ProductOffering();
    repair.description = 'Repair';
    repair.price = 50;
    repair.icon = 'build';
    return of(repair);
  }

  createInvoice(invoice: InvoiceSummary): Observable<number> {
    this.invoice = invoice;
    return of(1);
  }

  getInvoiceById(id: number): Observable<InvoiceSummary> {
    if (this.invoice) {
      return of(this.invoice);
    }

    return of(null);
  }
}
