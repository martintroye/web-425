import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServicesDialogComponent } from './order-services-dialog.component';

describe('OrderServicesDialogComponent', () => {
  let component: OrderServicesDialogComponent;
  let fixture: ComponentFixture<OrderServicesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServicesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServicesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
