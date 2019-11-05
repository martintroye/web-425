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
      });
    });
  }

}
