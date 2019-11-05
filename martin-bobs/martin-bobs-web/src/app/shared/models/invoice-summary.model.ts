import { ProductOffering } from './product-offering.model';

export class InvoiceSummary {
  id: number;
  customerId: number;
  orderDate: Date;
  completedDate?: Date;
  paidDate?: Date;
  amountDue: number;
  services: ProductOffering[];
  repairsRequested: string;
  laborHours: number;
  laborPrice: number;
  partsTotal: number;
  comments: string;
  technician: string;

}
