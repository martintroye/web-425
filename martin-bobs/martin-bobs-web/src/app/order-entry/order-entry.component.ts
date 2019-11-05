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
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InvoiceSummary } from '../shared/models/invoice-summary.model';
import { OrderInvoiceService } from '../shared/services/order-invoice.service';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.scss']
})
export class OrderEntryComponent implements OnInit {
  selectedServices: ProductOffering[] = [];
  orderGrandTotal = 0.00;
  entryGroup: FormGroup;
  valueChangesSubscription: Subscription;
  laborGrandTotal = 0.00;
  partsGrandTotal = 0.00;
  repair: ProductOffering;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderInvoiceService: OrderInvoiceService) { }

  ngOnInit() {
    this.orderInvoiceService.getRepair().subscribe((repairInfo) => {
      this.repair = repairInfo;
      this.entryGroup = this.formBuilder.group({});
      this.entryGroup.addControl('laborHours', new FormControl(''));
      this.entryGroup.addControl('partsTotal', new FormControl(''));

      this.valueChangesSubscription = this.entryGroup.valueChanges.subscribe(() => {
        this.partsGrandTotal = this.entryGroup.controls.partsTotal.value ? this.entryGroup.controls.partsTotal.value : 0.00;
        this.laborGrandTotal = this.entryGroup.controls.laborHours.value ?
          this.entryGroup.controls.laborHours.value * this.repair.price : 0.00;

        this.orderGrandTotal = 0.00;
        this.selectedServices.map((productOffering) => {
          this.orderGrandTotal += productOffering.price;
        });

        this.orderGrandTotal += this.entryGroup.controls.laborHours.value * this.repair.price;
        this.orderGrandTotal += this.entryGroup.controls.partsTotal.value;
      });
    });
  }

  setTotal(total: number) {
    this.orderGrandTotal = total + this.partsGrandTotal + this.laborGrandTotal;
  }

  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

  submit() {
    const invoice = new InvoiceSummary();
    invoice.services = this.selectedServices;
    invoice.partsTotal = this.partsGrandTotal;
    invoice.laborHours = this.entryGroup.controls.laborHours.value ? this.entryGroup.controls.laborHours.value : 0;

    this.orderInvoiceService.createInvoice(invoice).subscribe((result) => {
      this.router.navigateByUrl(`invoice/${result}`);
    });
  }

}
