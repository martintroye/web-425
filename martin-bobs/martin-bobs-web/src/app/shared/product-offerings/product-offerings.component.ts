/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductOffering } from '../models/product-offering.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OrderInvoiceService } from '../services/order-invoice.service';

@Component({
  selector: 'app-product-offerings',
  templateUrl: './product-offerings.component.html',
  styleUrls: ['./product-offerings.component.scss']
})
export class ProductOfferingsComponent implements OnInit {


  products: ProductOffering[];
  orderGroup: FormGroup;
  valueChangesSubscription: Subscription;
  orderGrandTotal = 0.00;
  selectedProductList: ProductOffering[] = [];

  @Output() selectedProducts = new EventEmitter<ProductOffering[]>();
  @Output() total = new EventEmitter<number>();

  constructor(private orderInvoiceService: OrderInvoiceService, private formBuilder: FormBuilder) { }

  toggleService(index: number) {
    const control = (this.orderGroup.controls.productOfferings as FormArray).controls[index];
    control.setValue(!control.value);
    this.products[index].selected = control.value;
  }

  getSelectedServices(): ProductOffering[] {
    return this.orderGroup.value.productOfferings
    .map((checked, index) => this.setProduct(checked, index))
    .filter(value => value !== null);
  }

  setProduct(checked: boolean, index: number) {
    this.products[index].selected = checked;
    return checked ? this.products[index] : null;
  }

  ngOnInit() {
    this.orderInvoiceService.getProducts().subscribe((products) => {
      this.products = products;

      const formControls = this.products.map(control => new FormControl(false));
      this.orderGroup = this.formBuilder.group({ productOfferings: new FormArray(formControls) });

      this.valueChangesSubscription = this.orderGroup.valueChanges.subscribe((productOfferings) => {
        const selectedServices = this.getSelectedServices();
        this.orderGrandTotal = 0.00;
        selectedServices.map((productOffering) => {
          this.orderGrandTotal += productOffering.price;
        });

        this.selectedProducts.emit(selectedServices);
        this.total.emit(this.orderGrandTotal);
      });
    });
  }

}
