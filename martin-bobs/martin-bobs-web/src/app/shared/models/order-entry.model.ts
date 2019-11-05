import { ProductOffering } from './product-offering.model';

export class OrderEntry {
  selectedServices: ProductOffering[];
  repairsRequested: string;
  laborHours: number;
  partsTotal: number;
  dateCompleted?: Date;
  technician: string;
  comments: string;
}
