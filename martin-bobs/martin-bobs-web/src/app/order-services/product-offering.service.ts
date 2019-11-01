import { Injectable } from '@angular/core';
import { ProductOffering } from './models/product-offering.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferingService {
  private products: ProductOffering[] = [] ;

  constructor() {
    this.products.push({description: 'Password Reset', price: 39.99});
    this.products.push({description: 'Spyware Removal', price: 99.99});
    this.products.push({description: 'RAM Upgrade', price: 129.99});
    this.products.push({description: 'Software Installation', price: 49.99});
    this.products.push({description: 'Tune-Up', price: 89.99});
    this.products.push({description: 'Keyboard Cleaning', price: 45});
    this.products.push({description: 'Disk Clean-Up', price: 149.99});
    this.products.push({description: 'Repairs', price: 50});
  }

  getProducts(): Observable<ProductOffering[]> {
    return of(this.products);
  }
}
