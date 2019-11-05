import { TestBed } from '@angular/core/testing';

import { ProductOfferingService } from './product-offering.service';

describe('ProductOfferingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductOfferingService = TestBed.get(ProductOfferingService);
    expect(service).toBeTruthy();
  });
});
