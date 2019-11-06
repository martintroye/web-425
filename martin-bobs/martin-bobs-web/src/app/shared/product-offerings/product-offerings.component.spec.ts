import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatChipsModule} from '@angular/material';
import { ProductOfferingsComponent } from './product-offerings.component';

describe('ProductOfferingsComponent', () => {
  let component: ProductOfferingsComponent;
  let fixture: ComponentFixture<ProductOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule
      ],
      declarations: [
        ProductOfferingsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
