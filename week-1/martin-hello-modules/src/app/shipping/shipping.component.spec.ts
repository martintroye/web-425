/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 09/08/2019
; Modified By: Troy Martin
; Description: Modules
;===========================================
*/
// import the core testing module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import the shipping component to test
import { ShippingComponent } from './shipping.component';

// create the collection of tests
describe('ShippingComponent', () => {
  // declare the shipping component to test
  let component: ShippingComponent;
  // declare the test fixture for the shipping component
  let fixture: ComponentFixture<ShippingComponent>;

  // asynchronous logic to run before each of the tests
  beforeEach(async(() => {
    // create and compile html for the tests
    TestBed.configureTestingModule({
      declarations: [ ShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // before each test create an instance of the shipping component test fixture
    fixture = TestBed.createComponent(ShippingComponent);
    // get an instance of the component to test
    component = fixture.componentInstance;
    // trigger changes on the component
    fixture.detectChanges();
  });

  // test that the component could be created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
