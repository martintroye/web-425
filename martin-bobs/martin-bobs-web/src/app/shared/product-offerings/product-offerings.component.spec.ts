/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the testing module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// imports from the forms module
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
// imports from the material module
import {MatCheckboxModule, MatChipsModule} from '@angular/material';
// import our custom product offering component
import { ProductOfferingsComponent } from './product-offerings.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProductOfferingsComponent', () => {
  let component: ProductOfferingsComponent;
  let fixture: ComponentFixture<ProductOfferingsComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports to handle custom elements
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule
      ],
      declarations: [
        ProductOfferingsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferingsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  // test that component can be created
  it('should create the component', () => {
    // the component was created
    expect(component).toBeTruthy();
  });

  // test that we are rendering the correct number of checkboxes
  it('should render 7 checkboxes', () => {
    const compiled = fixture.debugElement.nativeElement;
    // get the checkboxes being rendered
    const elements = compiled.querySelectorAll('.mat-checkbox-input');
    // should be a checkbox for each product
    expect(elements.length).toEqual(component.products.length);
  });

  // if you select a checkbox is the value correct
  it('select checkbox to order service', () => {
    const compiled = fixture.debugElement.nativeElement;
    // ge the checkbox elements
    const elements = compiled.querySelectorAll('.mat-checkbox-input');
    // we find the first element
    expect(elements[0]).toBeTruthy();
    // it is currently false, unchecked
    expect(elements[0].checked).toBeFalsy();
    // clicking the checkbox checks it
    elements[0].click();
    // detect changes to the dom
    fixture.detectChanges();
    // the checkbox is now checked
    expect(elements[0].checked).toBeTruthy();
    // the product in the array is marked selected
    expect(component.products[0].selected).toBeTruthy();

    // click the element again to turn it off
    elements[0].click();
    // detect changes in the dom
    fixture.detectChanges();
    // element is no longer checked
    expect(elements[0].checked).toBeFalsy();
    // the product in the array is no longer selected
    expect(component.products[0].selected).toBeFalsy();

  });

  // when the checkbox changes the order total changes
  it('selected service changes total', () => {
    const compiled = fixture.debugElement.nativeElement;
    // ge the checkbox elements
    const elements = compiled.querySelectorAll('.mat-checkbox-input');
    // we find the first element
    expect(elements[0]).toBeTruthy();
    // it is currently false, unchecked
    expect(elements[0].checked).toBeFalsy();
    // clicking the checkbox checks it
    elements[0].click();
    // detect changes to the dom
    fixture.detectChanges();
    // the checkbox is now checked
    expect(elements[0].checked).toBeTruthy();
    // since the service is selected the price is correct
    expect(component.orderGrandTotal).toEqual(component.products[0].price);

    // click the element again to turn it off
    elements[0].click();
    // detect changes in the dom
    fixture.detectChanges();
    // element is no longer checked
    expect(elements[0].checked).toBeFalsy();
    // order total is correct
    expect(component.orderGrandTotal).toEqual(0);

  });

});
