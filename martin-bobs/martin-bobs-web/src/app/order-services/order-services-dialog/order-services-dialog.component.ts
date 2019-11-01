import { Component, OnInit } from '@angular/core';
import { ProductOfferingService } from '../product-offering.service';
import { ProductOffering } from '../models/product-offering.model';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  templateUrl: './order-services-dialog.component.html',
  styleUrls: ['./order-services-dialog.component.scss']
})
export class OrderServicesDialogComponent implements OnInit {

  products: ProductOffering[];
  orderGroup: FormGroup;

  constructor(private productOfferingService: ProductOfferingService, private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.productOfferingService.getProducts().subscribe((products) => {
      this.products = products;
      const formControls = this.products.map(control => new FormControl(false));
      this.orderGroup = this.formBuilder.group({ productOfferings: new FormArray(formControls)});
    });
  }

  toggleService(index: number) {
    const control = ( this.orderGroup.controls.productOfferings as FormArray).controls[index];
    control.setValue(!control.value);
    this.products[index].selected = control.value;
  }

  submit() {
    const selectedServices = this.orderGroup.value.productOfferings
    .map((checked, index) => checked ? this.products[index] : null)
    .filter(value => value !== null);

    console.log(selectedServices);
  }
}
