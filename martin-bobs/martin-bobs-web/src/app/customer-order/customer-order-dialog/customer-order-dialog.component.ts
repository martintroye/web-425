/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ProductOffering } from 'src/app/shared/models/product-offering.model';
import { CustomerOrder } from 'src/app/shared/models/customer-order.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@AutoUnsubscribe()
@Component({
  templateUrl: './customer-order-dialog.component.html',
  styleUrls: ['./customer-order-dialog.component.scss']
})
export class CustomerOrderDialogComponent implements OnInit, OnDestroy {

  selectedServices: ProductOffering[] = [];
  orderGrandTotal = 0.00;
  repairGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.repairGroup = this.formBuilder.group({});
    this.repairGroup.addControl('repairs', new FormControl(''));
   }

  ngOnDestroy(): void { }

  setTotal(total: number) {
    this.orderGrandTotal = total;
  }

  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

  submit() {
    const order = new CustomerOrder();
    order.selectedServices = this.selectedServices;
    order.repairs = this.repairGroup.controls.repairs.value;
    console.log(order);
  }
}
