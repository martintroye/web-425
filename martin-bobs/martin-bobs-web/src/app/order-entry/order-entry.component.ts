import { Component, OnInit } from '@angular/core';
import { ProductOffering } from '../shared/models/product-offering.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.entryGroup = this.formBuilder.group({});
    this.entryGroup.addControl('laborHours', new FormControl(''));
    this.entryGroup.addControl('partsTotal', new FormControl(''));

    this.valueChangesSubscription = this.entryGroup.valueChanges.subscribe(() => {
      this.partsGrandTotal = this.entryGroup.controls.partsTotal.value ? this.entryGroup.controls.partsTotal.value : 0.00;
      this.laborGrandTotal = this.entryGroup.controls.laborHours.value ? this.entryGroup.controls.laborHours.value * 50 : 0.00;

      this.orderGrandTotal = 0.00;
      this.selectedServices.map((productOffering) => {
        this.orderGrandTotal += productOffering.price;
      });
      this.orderGrandTotal += this.entryGroup.controls.laborHours.value * 50;
      this.orderGrandTotal += this.entryGroup.controls.partsTotal.value;
    });
  }

  setTotal(total: number) {
    this.orderGrandTotal = total + this.partsGrandTotal + this.laborGrandTotal;
  }

  setSelectedProducts(services: ProductOffering[]) {
    this.selectedServices = services;
  }

}
