import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductOffering } from 'src/app/order-services/models/product-offering.model';

@Injectable({
  providedIn: 'root'
})
export class ProductOfferingService {
  private products: ProductOffering[] = [] ;

  constructor() {
    this.products.push({description: 'Password Reset', price: 39.99, icon: 'lock_open'});
    this.products.push({description: 'Spyware Removal', price: 99.99, icon: 'search'});
    this.products.push({description: 'RAM Upgrade', price: 129.99, icon: 'memory'});
    this.products.push({description: 'Software Installation', price: 49.99, icon: 'add_to_queue'});
    this.products.push({description: 'Tune-Up', price: 89.99, icon: 'tune'});
    this.products.push({description: 'Keyboard Cleaning', price: 45, icon: 'keyboard'});
    this.products.push({description: 'Disk Clean-Up', price: 149.99, icon: 'disc_full'});
  }

  getProducts(): Observable<ProductOffering[]> {
    return of(this.products);
  }

  getRepair(): Observable<ProductOffering> {
    const repair = new ProductOffering();
    repair.description = 'Repair';
    repair.price = 50;
    repair.icon = 'build';
    return of(repair);
  }
}
