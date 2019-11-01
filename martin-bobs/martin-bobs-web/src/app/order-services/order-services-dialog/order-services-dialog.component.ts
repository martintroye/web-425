import { Component, OnInit } from '@angular/core';
import { ProductOfferingService } from '../product-offering.service';
import { ProductOffering } from '../models/product-offering.model';

@Component({
  templateUrl: './order-services-dialog.component.html',
  styleUrls: ['./order-services-dialog.component.scss']
})
export class OrderServicesDialogComponent implements OnInit {

  products: ProductOffering[];

  constructor(private productOfferingService: ProductOfferingService) { }

  ngOnInit() {
    this.productOfferingService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
