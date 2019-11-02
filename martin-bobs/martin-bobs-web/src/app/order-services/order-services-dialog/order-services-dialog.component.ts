import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductOffering } from '../models/product-offering.model';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ProductOfferingService } from 'src/app/shared/services/product-offering.service';

@AutoUnsubscribe()
@Component({
  templateUrl: './order-services-dialog.component.html',
  styleUrls: ['./order-services-dialog.component.scss']
})
export class OrderServicesDialogComponent implements OnInit, OnDestroy {
  products: ProductOffering[];
  orderGroup: FormGroup;
  valueChangesSubscription: Subscription;
  orderGrandTotal = 0.00;

  constructor(private productOfferingService: ProductOfferingService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productOfferingService.getProducts().subscribe((products) => {
      this.products = products;

      const formControls = this.products.map(control => new FormControl(false));
      this.orderGroup = this.formBuilder.group({ productOfferings: new FormArray(formControls) });
      this.orderGroup.addControl('repairs', new FormControl(''));

      this.valueChangesSubscription = this.orderGroup.valueChanges.subscribe((productOfferings) => {
        const selectedServices = this.getSelectedServices();
        this.orderGrandTotal = 0.00;
        selectedServices.map((productOffering) => {
          this.orderGrandTotal += productOffering.price;
        });
      });
    });
  }

  ngOnDestroy(): void { }

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

  submit() {
    const selectedServices = this.getSelectedServices();
    console.log(selectedServices);
  }
}
