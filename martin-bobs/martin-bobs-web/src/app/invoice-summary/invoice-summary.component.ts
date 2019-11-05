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
import { Router, ActivatedRoute } from '@angular/router';
import { OrderInvoiceService } from '../shared/services/order-invoice.service';
import { forkJoin } from 'rxjs';
import { InvoiceSummary } from '../shared/models/invoice-summary.model';
import { ProductOffering } from '../shared/models/product-offering.model';

@Component({
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {

  invoice: InvoiceSummary;
  repair: ProductOffering;
  laborGrandTotal = 0.00;
  orderGrandTotal = 0.00;

  constructor(private route: ActivatedRoute, private orderInvoiceService: OrderInvoiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      const invoice = this.orderInvoiceService.getInvoiceById(params.id);
      const repair = this.orderInvoiceService.getRepair();
      forkJoin([invoice, repair]).subscribe(([invoiceValue, repairValue]) => {
        console.log(invoiceValue);
        this.invoice = invoiceValue;
        this.repair = repairValue;
        this.laborGrandTotal = this.invoice.laborHours * this.repair.price;

        this.orderGrandTotal = 0.00;
        this.invoice.services.map((productOffering) => {
          this.orderGrandTotal += productOffering.price;
        });

        this.orderGrandTotal += this.laborGrandTotal;
        this.orderGrandTotal += this.invoice.partsTotal;

      });
    });
  }

}
