import { Component, OnInit } from '@angular/core';
import { ProductOfferingService } from '../shared/services/product-offering.service';
import { ProductOffering } from '../shared/models/product-offering.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss']
})
export class ServicesOfferedComponent implements OnInit {

  products: ProductOffering[] = [];

  constructor(private productOfferingService: ProductOfferingService) { }

  ngOnInit() {
    const p = this.productOfferingService.getProducts();
    const r = this.productOfferingService.getRepair();

    forkJoin(p, r).subscribe(([prod, repair]) => {
        this.products.push(repair);
        prod.forEach(x => {
          this.products.push(x);
        });
    });

  }

}
