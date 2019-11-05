/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ProductOffering } from '../shared/models/product-offering.model';
import { forkJoin } from 'rxjs';
import { OrderInvoiceService } from '../shared/services/order-invoice.service';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss']
})
export class ServicesOfferedComponent implements OnInit {

  products: ProductOffering[] = [];

  constructor(private orderInvoiceService: OrderInvoiceService) { }

  ngOnInit() {
    const p = this.orderInvoiceService.getProducts();
    const r = this.orderInvoiceService.getRepair();

    forkJoin(p, r).subscribe(([prod, repair]) => {
        this.products.push(repair);
        prod.forEach(x => {
          this.products.push(x);
        });
    });

  }

}
