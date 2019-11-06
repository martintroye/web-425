import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatChipsModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { OrderEntryComponent } from './order-entry.component';
import { ProductOfferingsComponent } from '../shared/product-offerings/product-offerings.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrderEntryComponent', () => {
  let component: OrderEntryComponent;
  let fixture: ComponentFixture<OrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ OrderEntryComponent, ProductOfferingsComponent ],
      providers: [
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
