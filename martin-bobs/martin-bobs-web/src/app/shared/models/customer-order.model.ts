import { ProductOffering } from './product-offering.model';

export class CustomerOrder {
  selectedServices: ProductOffering[];
  repairs: string;
}
