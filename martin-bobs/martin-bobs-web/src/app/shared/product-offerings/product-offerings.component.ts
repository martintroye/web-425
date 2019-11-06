/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the angular core module
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import our custom product offering model
import { ProductOffering } from '../models/product-offering.model';
// imports from the angular form module
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
// imports from the rxjs module
import { Subscription } from 'rxjs';
// import our custom order invoice service
import { OrderInvoiceService } from '../services/order-invoice.service';

// define the component
@Component({
  // define the selector to output the component
  selector: 'app-product-offerings',
  // define the HTML template for the component
  templateUrl: './product-offerings.component.html',
  // define the CSS for the component
  styleUrls: ['./product-offerings.component.scss']
})
// declare and export the component class
export class ProductOfferingsComponent implements OnInit {
  // declare the products array
  products: ProductOffering[];
  // declare the order form group
  orderGroup: FormGroup;
  // declare the subscription to watch value changes
  valueChangesSubscription: Subscription;
  // declare the order total and set a default
  orderGrandTotal = 0.00;
  // declare the selected products and set the default
  selectedProductList: ProductOffering[] = [];

  // declare the selected products output and set the event emitter
  @Output() selectedProducts = new EventEmitter<ProductOffering[]>();
  // declare the total and set the event emitter
  @Output() total = new EventEmitter<number>();

  /*
  ; Params: orderInvoiceService: OrderInvoiceService, formBuilder: FormBuilder
  ; Response: none
  ; Description: Default constructor
  */
  constructor(private orderInvoiceService: OrderInvoiceService, private formBuilder: FormBuilder) { }

  /*
  ; Params: index: number
  ; Response: none
  ; Description: Set the selected property of the product by index
  */
  toggleService(index: number) {
    // using the index get the product offering, must cast the AbstractControl to a FormArray
    const control = (this.orderGroup.controls.productOfferings as FormArray).controls[index];
    // toggle the value
    control.setValue(!control.value);
    // set the value in the array by index
    this.products[index].selected = control.value;
  }

  /*
  ; Params: none
  ; Response: ProductOffering array
  ; Description: Identify and return an array of selected services
  */
  getSelectedServices(): ProductOffering[] {
    // using the map function find the selected products and return them
    return this.orderGroup.value.productOfferings
    .map((checked, index) => this.setProduct(checked, index))
    .filter(value => value !== null);
  }

  /*
  ; Params: checked: boolean, index: number
  ; Response: if the product is checked return it or return null
  ; Description: Function to determine if the product is selected or not
  */
  setProduct(checked: boolean, index: number) {
    // set the product selected status by index
    this.products[index].selected = checked;
    // if checked return the service if not return null
    return checked ? this.products[index] : null;
  }

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {
    // get the list of products
    this.orderInvoiceService.getProducts().subscribe((products) => {
      // set the list of products on the component
      this.products = products;

      // create the form controls mapping the product into a control
      const formControls = this.products.map(control => new FormControl(false));
      // define the form group setting the array to the list of products
      this.orderGroup = this.formBuilder.group({ productOfferings: new FormArray(formControls) });

      // subscribe to changes to the component
      this.valueChangesSubscription = this.orderGroup.valueChanges.subscribe((productOfferings) => {
        // get the selected services
        const selectedServices = this.getSelectedServices();
        // reset the total
        this.orderGrandTotal = 0.00;
        // loop the services
        selectedServices.map((productOffering) => {
          // add the product offer price to the total
          this.orderGrandTotal += productOffering.price;
        });

        // emit the array of selected products
        this.selectedProducts.emit(selectedServices);
        // emit the totals
        this.total.emit(this.orderGrandTotal);
      });
    });
  }

}
