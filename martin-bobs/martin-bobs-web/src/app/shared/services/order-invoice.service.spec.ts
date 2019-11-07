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
import { TestBed } from '@angular/core/testing';
// import our customer order invoice service
import { OrderInvoiceService } from './order-invoice.service';
// import our customer order model
import { CustomerOrder } from '../models/customer-order.model';
// import our invoice summary model
import { InvoiceSummary } from '../models/invoice-summary.model';


describe('OrderInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // create a default customer order model
  const order = new CustomerOrder();
  order.repairs = 'Clean hard drive';
  order.selectedServices = [
      {description: 'test', selected: true, price: 1, icon: 'test'}
    ];

  // create a default invoice summary model
  const invoice = new InvoiceSummary();
  invoice.id = 1;
  invoice.services = [
    {description: 'test', selected: true, price: 1, icon: 'test'}
  ];

  // test that service is created
  it('should be created', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);
    // test that service is created
    expect(service).toBeTruthy();
  });

  // test that the submitOrder method stores the customer order correctly
  it('submit a customer order, stored properly', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);

    // call the submitOrder method
    service.submitOrder(order);
    // retrieve the order from the service
    service.getCurrentOrder().subscribe((o) => {
      // test that order is not null
      expect(o).toBeTruthy();
      // test that the order is the same as we stored
      expect(o.selectedServices.length).toEqual(1);
    });
  });

  // test that the createInvoice method stores the invoice summary correctly
  it('create an invoice, stored properly', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);

    // call the createInvoice method
    service.createInvoice(invoice);
    // retrieve the invoice
    service.getInvoiceById(1).subscribe((i) => {
      // test that the invoice is not null
      expect(i).toBeTruthy();
      // test that the id is the same
      expect(i.id).toEqual(1);
      // test that the services array has the same number of items
      expect(i.services.length).toEqual(1);
    });
  });

});
