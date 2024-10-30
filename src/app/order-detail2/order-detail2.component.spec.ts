import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetail2Component } from './order-detail2.component';

describe('OrderDetail2Component', () => {
  let component: OrderDetail2Component;
  let fixture: ComponentFixture<OrderDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetail2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
