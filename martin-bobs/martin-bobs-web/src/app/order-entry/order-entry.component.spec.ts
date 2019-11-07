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
import {MatCheckboxModule, MatChipsModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
// import our custom product offering component
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { OrderEntryComponent } from './order-entry.component';
import { ProductOfferingsComponent } from '../shared/product-offerings/product-offerings.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrderEntryComponent', () => {
  let component: OrderEntryComponent;
  let fixture: ComponentFixture<OrderEntryComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports to handle custom elements
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        OrderEntryComponent,
        ProductOfferingsComponent
      ],
      providers: [
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  // test that component can be created
  it('should create the component', () => {
    // the component was created
    expect(component).toBeTruthy();
  });

  it('set labor hours changes total', () => {
    // the component was created
    expect(component).toBeTruthy();
    // there should not be an order total yet
    expect(component.orderGrandTotal).toEqual(0);

    // set the number of labor hours
    component.entryGroup.controls.laborHours.setValue(1);
    fixture.detectChanges();
    // the order total should change from 0 to 50
    expect(component.orderGrandTotal).toEqual(50);
  });

  it('set parts total changes total', () => {
    // the component was created
    expect(component).toBeTruthy();
    // there should not be an order total yet
    expect(component.orderGrandTotal).toEqual(0);
    // set the part total
    component.entryGroup.controls.partsTotal.setValue(10);
    fixture.detectChanges();
    // the order total should update
    expect(component.orderGrandTotal).toEqual(10);
  });

  it('set parts total and labor changes total', () => {
    // the component was created
    expect(component).toBeTruthy();
    // there should not be an order total yet
    expect(component.orderGrandTotal).toEqual(0);
    // set the number of labor hours
    component.entryGroup.controls.laborHours.setValue(1);
    // set the part total
    component.entryGroup.controls.partsTotal.setValue(10);
    fixture.detectChanges();
    // the order total should update
    expect(component.orderGrandTotal).toEqual(60);
  });

  it('total selected services + parts + labor', () => {
    // the component was created
    expect(component).toBeTruthy();

    component.selectedServices.push({description: 'test', price: 10, selected: true, icon: 'text'});

    // there should not be an order total yet
    expect(component.orderGrandTotal).toEqual(0);
    // set the number of labor hours
    component.entryGroup.controls.laborHours.setValue(1);
    // set the part total
    component.entryGroup.controls.partsTotal.setValue(10);
    fixture.detectChanges();
    // the order total should update
    expect(component.orderGrandTotal).toEqual(70);
  });

});
