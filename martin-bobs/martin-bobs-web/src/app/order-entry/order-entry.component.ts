import { Component, OnInit } from '@angular/core';
import { ProductOffering } from '../shared/models/product-offering.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.scss']
})
export class OrderEntryComponent implements OnInit {
  selectedServices: ProductOffering[] = [];
  orderGrandTotal = 0.00;
  entryGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.entryGroup = this.formBuilder.group({});
    this.entryGroup.addControl('laborHours', new FormControl(''));
    this.entryGroup.addControl('partsTotal', new FormControl(''));

  }
  setTotal(total: number) {
    this.orderGrandTotal = total;
  }

  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

}
