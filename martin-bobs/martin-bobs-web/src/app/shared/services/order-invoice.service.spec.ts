import { TestBed } from '@angular/core/testing';
import { OrderInvoiceService } from './order-invoice.service';
import { CustomerOrder } from '../models/customer-order.model';
import { InvoiceSummary } from '../models/invoice-summary.model';

describe('OrderInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const order = new CustomerOrder();
  order.repairs = 'Clean hard drive';
  order.selectedServices = [
      {description: 'test', selected: true, price: 1, icon: 'test'}
    ];

  const invoice = new InvoiceSummary();
  invoice.id = 1;
  invoice.services = [
    {description: 'test', selected: true, price: 1, icon: 'test'}
  ];

  it('should be created', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);
    expect(service).toBeTruthy();
  });

  it('submit a customer order, stored properly', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);

    service.submitOrder(order);
    service.getCurrentOrder().subscribe((o) => {
      expect(o).toBeTruthy();
      expect(o.selectedServices.length).toEqual(1);
    });
  });

  it('create an invoice, stored properly', () => {
    const service: OrderInvoiceService = TestBed.get(OrderInvoiceService);

    service.createInvoice(invoice);
    service.getInvoiceById(1).subscribe((i) => {
      expect(i).toBeTruthy();
      expect(i.id).toEqual(1);
      expect(i.services.length).toEqual(1);
    });
  });

});
