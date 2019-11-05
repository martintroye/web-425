import { Component, OnInit } from '@angular/core';
import { ProductOffering } from '../shared/models/product-offering.model';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.scss']
})
export class OrderEntryComponent implements OnInit {
  selectedServices: ProductOffering[] = [];
  orderGrandTotal = 0.00;

  constructor() { }

  ngOnInit() {
  }
  setTotal(total: number) {
    this.orderGrandTotal = total;
  }

  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

}
