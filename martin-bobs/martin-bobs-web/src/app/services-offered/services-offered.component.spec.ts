import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfferedComponent } from './services-offered.component';
import { OrderInvoiceService } from '../shared/services/order-invoice.service';
import { of } from 'rxjs';
import {MatIconModule} from '@angular/material';

// Create at least 5 unit tests, validating the code you have written.
// Completed test document.

describe('ServicesOfferedComponent', () => {
  let component: ServicesOfferedComponent;
  let fixture: ComponentFixture<ServicesOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [
        ServicesOfferedComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
